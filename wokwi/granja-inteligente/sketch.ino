/*
  Mundo bit Byte | Topico 7 - Granja Inteligente (somente simulacao didatica)
  ESP32 + DHT22 + HC-SR04 + MFRC522 + 2 LEDs + Telegram opcional.
  Sem credenciais: eventos aparecem no Serial, MAS nao chegam ao celular.
  Para mensagens reais, em projeto PRIVADO, descomente a proxima linha,
  crie secrets.h a partir de secrets.example.h e nunca publique o segredo.
*/
// #define ENABLE_TELEGRAM

#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <SPI.h>
#include <MFRC522.h>
#include <DHTesp.h>
#include <ArduinoJson.h>
#include <UniversalTelegramBot.h>
#include <time.h>
#include <math.h>

#ifdef ENABLE_TELEGRAM
  #include "secrets.h"
#else
  #define BOT_TOKEN ""
  #define CHAT_ID ""
#endif

// Os numeros abaixo correspondem EXATAMENTE aos fios de diagram.json.
const uint8_t DHT_PIN = 4;
const uint8_t TRIG_PIN = 26;
const uint8_t ECHO_PIN = 27;
const uint8_t LED_VENTILADOR = 32;
const uint8_t LED_BOMBA = 33;
const uint8_t RFID_SS = 5;
const uint8_t RFID_RST = 21;

// Limites EXCLUSIVAMENTE DIDATICOS, nao recomendacoes zootecnicas.
// Histerese: liga ventilador acima de 30; desliga abaixo de 28.
const float TEMP_LIGAR = 30.0f;
const float TEMP_DESLIGAR = 28.0f;
// Sensor a 30 cm do fundo: distancia maior = menos agua.
const float ALTURA_RESERVATORIO_CM = 30.0f;
const float DISTANCIA_NIVEL_BAIXO = 22.0f;
const float DISTANCIA_NIVEL_CHEIO = 8.0f;
const uint32_t TEMPO_MAX_BOMBA_MS = 30000UL;
const uint32_t INTERVALO_TEMP_MS = 2500UL;
const uint32_t INTERVALO_AGUA_MS = 1100UL;
const uint32_t INTERVALO_STATUS_MS = 10000UL;
const uint32_t INTERVALO_REDE_MS = 15000UL;
const uint32_t INTERVALO_NOTIFICACAO_MS = 7000UL;
const uint32_t COOLDOWN_RFID_MS = 8000UL;

DHTesp dht;
MFRC522 leitor(RFID_SS, RFID_RST);
WiFiClientSecure clienteSeguro;
UniversalTelegramBot bot(BOT_TOKEN, clienteSeguro);

bool ventilador = false;
bool bomba = false;
bool falhaTemperatura = false;
bool falhaAgua = false;
bool bloqueioBomba = false;
float temperatura = NAN;
float umidade = NAN;
float distancia = NAN;
uint32_t inicioBomba = 0;
uint32_t ultimaTemp = 0, ultimaAgua = 0, ultimoStatus = 0;
uint32_t ultimaRede = 0, ultimaTentativaBot = 0;
uint32_t ultimoRFID = 0;
String ultimoUID = "";

// Fila pequena para evitar perder imediatamente um aviso durante queda da rede.
// Quando enche, descarta o mais antigo e registra o descarte no Serial.
const uint8_t CAPACIDADE_FILA = 8;
String fila[CAPACIDADE_FILA];
uint8_t quantidadeFila = 0;

void notificar(const String &evento) {
  JsonDocument registro;
  registro["aviario"] = "aviario_01";
  registro["evento"] = evento;
  registro["tempo_ms"] = millis();
  Serial.print("[EVENTO JSON] ");
  serializeJson(registro, Serial);
  Serial.println();
  if (quantidadeFila == CAPACIDADE_FILA) {
    Serial.println("[FILA] cheia: aviso mais antigo descartado");
    for (uint8_t i = 1; i < quantidadeFila; i++) fila[i - 1] = fila[i];
    quantidadeFila--;
  }
  fila[quantidadeFila++] = evento;
}
void ligarVentilador(bool ligar) {
  if (ventilador == ligar) return;
  ventilador = ligar;
  digitalWrite(LED_VENTILADOR, ligar ? HIGH : LOW);
  notificar(ligar ? (falhaTemperatura ?
                    "Falha DHT22: ventilador ligado preventivamente" :
                    "Temperatura alta: ventilador ligado") :
                    "Temperatura normalizada: ventilador desligado");
}
void ligarBomba(bool ligar) {
  if (bomba == ligar) return;
  bomba = ligar;
  digitalWrite(LED_BOMBA, ligar ? HIGH : LOW);
  if (ligar) {
    inicioBomba = millis();
    notificar("Nivel de agua baixo: bomba ligada");
  } else {
    notificar("Bomba desligada");
  }
}
void conferirTemperatura() {
  TempAndHumidity dado = dht.getTempAndHumidity();
  if (isnan(dado.temperature) || isnan(dado.humidity)) {
    temperatura = NAN;
    umidade = NAN;
    if (!falhaTemperatura) notificar("Falha de leitura DHT22: verificar sensor");
    falhaTemperatura = true;
    // Politica didatica: ventilacao mantida ligada enquanto falta leitura.
    ligarVentilador(true);
    return;
  }
  temperatura = dado.temperature;
  umidade = dado.humidity;
  if (falhaTemperatura) notificar("Leitura DHT22 recuperada");
  falhaTemperatura = false;
  if (!ventilador && temperatura > TEMP_LIGAR) ligarVentilador(true);
  else if (ventilador && temperatura < TEMP_DESLIGAR) ligarVentilador(false);
}
float medirDistanciaCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  uint32_t duracao = pulseIn(ECHO_PIN, HIGH, 30000UL); // timeout finito
  if (!duracao) return NAN;
  return duracao / 58.0f;
}
void conferirAgua() {
  distancia = medirDistanciaCm();
  if (isnan(distancia) || distancia < 2.0f ||
      distancia > ALTURA_RESERVATORIO_CM) {
    if (!falhaAgua) notificar("Falha no ultrassonico: bomba parada por seguranca");
    falhaAgua = true;
    ligarBomba(false);
    return;
  }
  if (falhaAgua) notificar("Leitura do reservatorio recuperada");
  falhaAgua = false;
  if (distancia <= DISTANCIA_NIVEL_CHEIO) {
    ligarBomba(false);
    if (bloqueioBomba) notificar("Bloqueio da bomba liberado: reservatorio cheio");
    bloqueioBomba = false;
  } else if (distancia >= DISTANCIA_NIVEL_BAIXO &&
             !bomba && !bloqueioBomba) {
    ligarBomba(true);
  }
}
void conferirTempoDaBomba() {
  if (bomba && millis() - inicioBomba >= TEMPO_MAX_BOMBA_MS) {
    ligarBomba(false);
    bloqueioBomba = true;
    notificar("ALERTA: tempo maximo de bomba excedido; bloqueada ate nivel cheio");
  }
}
String uidDoCartao() {
  String uid = "";
  for (byte i = 0; i < leitor.uid.size; i++) {
    if (i) uid += ":";
    if (leitor.uid.uidByte[i] < 16) uid += "0";
    uid += String(leitor.uid.uidByte[i], HEX);
  }
  uid.toUpperCase();
  return uid;
}
void conferirRFID() {
  if (!leitor.PICC_IsNewCardPresent() || !leitor.PICC_ReadCardSerial()) return;
  String uid = uidDoCartao();
  uint32_t agora = millis();
  bool repetir = uid == ultimoUID &&
                 agora - ultimoRFID < COOLDOWN_RFID_MS;
  if (!repetir) {
    ultimoUID = uid;
    ultimoRFID = agora;
    if (uid == "01:02:03:04") notificar("RFID: Ana (funcionaria autorizada)");
    else if (uid == "11:22:33:44") notificar("RFID: Joao (supervisor autorizado)");
    else notificar("RFID DESCONHECIDO: acesso administrativo negado");
    Serial.println("[RFID] UID lido: " + uid +
                   " (UID sozinho nao e autenticacao segura)");
  }
  leitor.PICC_HaltA();
  leitor.PCD_StopCrypto1();
}
void verificarWiFi() {
  if (WiFi.status() == WL_CONNECTED) return;
  if (ultimaRede != 0 && millis() - ultimaRede < INTERVALO_REDE_MS) return;
  ultimaRede = millis();
  Serial.println("[REDE] Tentando Wi-Fi Wokwi-GUEST; controles locais continuam");
  WiFi.begin("Wokwi-GUEST", "", 6); // Sem espera bloqueante
}
void tentarEnviarTelegram() {
  if (quantidadeFila == 0) return;
  if (ultimaTentativaBot != 0 &&
      millis() - ultimaTentativaBot < INTERVALO_NOTIFICACAO_MS) return;
  ultimaTentativaBot = millis();
#ifndef ENABLE_TELEGRAM
  Serial.println("[DEMO] Telegram desativado. Evento simulado, NAO entregue: " + fila[0]);
  for (uint8_t i = 1; i < quantidadeFila; i++) fila[i - 1] = fila[i];
  quantidadeFila--;
#else
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[TELEGRAM] Sem rede; evento guardado na fila");
    return;
  }
  // Certificados TLS precisam da hora correta para validar a validade.
  if (time(nullptr) < 1700000000) {
    Serial.println("[TELEGRAM] Aguardando sincronizacao NTP sem bloquear o controle");
    return;
  }
  // O bot usa HTTPS/TLS com certificado raiz (nao usa setInsecure).
  bool confirmado = bot.sendMessage(String(CHAT_ID), fila[0], "");
  if (!confirmado) {
    Serial.println("[TELEGRAM] Sem confirmacao; tentar novamente depois");
    return;
  }
  Serial.println("[TELEGRAM] API confirmou a mensagem: " + fila[0]);
  for (uint8_t i = 1; i < quantidadeFila; i++) fila[i - 1] = fila[i];
  quantidadeFila--;
#endif
}
void mostrarEstado() {
  Serial.print("[ESTADO] temperatura=");
  if (isnan(temperatura)) Serial.print("invalida");
  else Serial.print(temperatura, 1);
  Serial.print(" C; distancia=");
  if (isnan(distancia)) Serial.print("invalida");
  else Serial.print(distancia, 1);
  Serial.print(" cm; ventilador=");
  Serial.print(ventilador ? "ligado" : "desligado");
  Serial.print("; bomba=");
  Serial.print(bomba ? "ligada" : "desligada");
  Serial.print("; WiFi=");
  Serial.print(WiFi.status() == WL_CONNECTED ? "conectado" : "offline");
  Serial.print("; fila=");
  Serial.println(quantidadeFila);
}
void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(LED_VENTILADOR, OUTPUT);
  pinMode(LED_BOMBA, OUTPUT);
  digitalWrite(LED_VENTILADOR, LOW);
  digitalWrite(LED_BOMBA, LOW);
  dht.setup(DHT_PIN, DHTesp::DHT22);
  SPI.begin(18, 19, 23, RFID_SS);
  leitor.PCD_Init();
  WiFi.mode(WIFI_STA);
  configTime(0, 0, "pool.ntp.org");
  clienteSeguro.setCACert(TELEGRAM_CERTIFICATE_ROOT);
  clienteSeguro.setTimeout(1500);
  Serial.println("[PRONTO] Granja IoT / Modo: "
#ifdef ENABLE_TELEGRAM
  "Telegram real privado"
#else
  "demonstracao sem envio"
#endif
  );
  notificar("Controlador iniciado");
}
void loop() {
  uint32_t agora = millis();
  if (agora - ultimaTemp >= INTERVALO_TEMP_MS) {
    ultimaTemp = agora;
    conferirTemperatura();
  }
  if (agora - ultimaAgua >= INTERVALO_AGUA_MS) {
    ultimaAgua = agora;
    conferirAgua();
  }
  conferirTempoDaBomba();
  conferirRFID();
  verificarWiFi();
  tentarEnviarTelegram(); // HTTPS pode causar pequenas pausas; prototipo didatico
  if (agora - ultimoStatus >= INTERVALO_STATUS_MS) {
    ultimoStatus = agora;
    mostrarEstado();
  }
  delay(20);
}
