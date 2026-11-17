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
#include <freertos/FreeRTOS.h>
#include <freertos/queue.h>
#include <freertos/task.h>
#include <math.h>

#ifdef ENABLE_TELEGRAM
  #include "secrets.h"
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

const uint32_t COOLDOWN_RFID_MS = 8000UL;

DHTesp dht;
MFRC522 leitor(RFID_SS, RFID_RST);
#ifdef ENABLE_TELEGRAM
WiFiClientSecure clienteSeguro;
UniversalTelegramBot bot(BOT_TOKEN, clienteSeguro);
#else
bool testeFalhaDHT = false;
#endif

bool ventilador = false;
bool bomba = false;
bool falhaTemperatura = false;
bool falhaAgua = false;
bool bloqueioBomba = false;
bool redeAtiva = true;
bool redeConectada = false;
float temperatura = NAN;
float umidade = NAN;
float distancia = NAN;
uint32_t inicioBomba = 0;
uint32_t ultimaTemp = 0, ultimaAgua = 0, ultimoStatus = 0;
uint32_t ultimaRede = 0;
uint32_t ultimoRFID = 0;
String ultimoUID = "";

#ifdef ENABLE_TELEGRAM
// O envio tem fila própria e roda em outra tarefa. O loop nunca espera pela rede.
struct Aviso {
  char texto[112];
};
QueueHandle_t filaTelegram = nullptr;
#endif

void notificar(const String &evento) {
  JsonDocument registro;
  registro["aviario"] = "aviario_01";
  registro["evento"] = evento;
  registro["tempo_ms"] = millis();
  Serial.print("[EVENTO JSON] ");
  serializeJson(registro, Serial);
  Serial.println();
#ifdef ENABLE_TELEGRAM
  if (!filaTelegram) return;
  Aviso aviso{};
  evento.toCharArray(aviso.texto, sizeof(aviso.texto));
  if (xQueueSend(filaTelegram, &aviso, 0) != pdTRUE) {
    Serial.println("[TELEGRAM] Fila cheia: novo aviso descartado");
  }
#else
  Serial.println("[DEMO] Telegram desativado. Evento simulado, NAO entregue: " + evento);
#endif
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
void ligarBomba(bool ligar, const char *motivoParada = "") {
  if (bomba == ligar) return;
  bomba = ligar;
  digitalWrite(LED_BOMBA, ligar ? HIGH : LOW);
  if (ligar) {
    inicioBomba = millis();
    notificar("Nivel de agua baixo: bomba ligada");
  } else {
    notificar(motivoParada);
  }
}
void conferirTemperatura() {
  TempAndHumidity dado = dht.getTempAndHumidity();
#ifndef ENABLE_TELEGRAM
  if (testeFalhaDHT) dado.temperature = NAN;
#endif
  if (isnan(dado.temperature) || isnan(dado.humidity)) {
    temperatura = NAN;
    umidade = NAN;
    if (!falhaTemperatura) {
      Serial.printf("[DHT22] Diagnostico da biblioteca: %s\n", dht.getStatusString());
      if (ventilador) notificar("Falha de leitura DHT22: verificar sensor");
    }
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
    if (bomba) ligarBomba(false, "Falha no ultrassonico: bomba desligada");
    else if (!falhaAgua) notificar("Falha no ultrassonico: bomba parada por seguranca");
    falhaAgua = true;
    return;
  }
  if (falhaAgua) notificar("Leitura do reservatorio recuperada");
  falhaAgua = false;
  if (distancia <= DISTANCIA_NIVEL_CHEIO) {
    ligarBomba(false, "Reservatorio abastecido: bomba desligada");
    if (bloqueioBomba) notificar("Bloqueio da bomba liberado: reservatorio cheio");
    bloqueioBomba = false;
  } else if (distancia >= DISTANCIA_NIVEL_BAIXO &&
             !bomba && !bloqueioBomba) {
    ligarBomba(true);
  }
}
void conferirTempoDaBomba() {
  if (bomba && millis() - inicioBomba >= TEMPO_MAX_BOMBA_MS) {
    bloqueioBomba = true;
    ligarBomba(false, "ALERTA: tempo maximo excedido; bomba desligada e bloqueada ate nivel cheio");
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
  bool conectadaAgora = redeAtiva && WiFi.status() == WL_CONNECTED;
  if (conectadaAgora != redeConectada) {
    redeConectada = conectadaAgora;
    Serial.println(redeConectada ? "[REDE] Wi-Fi conectado" :
                                   "[REDE] Wi-Fi desconectado; controle local ativo");
  }
  if (!redeAtiva || redeConectada) return;
  if (ultimaRede != 0 && millis() - ultimaRede < INTERVALO_REDE_MS) return;
  ultimaRede = millis();
  Serial.println("[REDE] Tentando Wi-Fi Wokwi-GUEST; controles locais continuam");
  WiFi.begin("Wokwi-GUEST", "", 6);
}

#ifdef ENABLE_TELEGRAM
void enviarTelegram(void *) {
  Aviso aviso{};
  for (;;) {
    if (xQueueReceive(filaTelegram, &aviso, portMAX_DELAY) != pdTRUE) continue;
    for (;;) {
      if (WiFi.status() == WL_CONNECTED && time(nullptr) >= 1700000000) {
        if (bot.sendMessage(String(CHAT_ID), aviso.texto, "")) {
          Serial.printf("[TELEGRAM] API confirmou a mensagem: %s\n", aviso.texto);
          break;
        }
        Serial.println("[TELEGRAM] Sem confirmacao; nova tentativa em 7 s");
      } else {
        Serial.println("[TELEGRAM] Aguardando Wi-Fi e hora valida para TLS");
      }
      vTaskDelay(pdMS_TO_TICKS(7000));
    }
  }
}
#else
// Comandos da bancada para reproduzir falhas enquanto o ESP32 continua ligado.
void controlarEnsaio() {
  if (!Serial.available()) return;
  const char comando = Serial.read();
  if (comando == 'w' && redeAtiva) {
    redeAtiva = false;
    WiFi.mode(WIFI_OFF);
    Serial.println("[ENSAIO] Wi-Fi desligado");
  } else if (comando == 'r' && !redeAtiva) {
    WiFi.mode(WIFI_STA);
    redeAtiva = true;
    ultimaRede = 0;
    Serial.println("[ENSAIO] Wi-Fi reativado");
  } else if (comando == 'f' || comando == 'v') {
    testeFalhaDHT = comando == 'f';
    Serial.println(testeFalhaDHT ? "[ENSAIO] Falha de DHT22 injetada" :
                                  "[ENSAIO] Leitura de DHT22 restaurada");
  }
}
#endif
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
  Serial.println();
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
#ifdef ENABLE_TELEGRAM
  configTime(0, 0, "pool.ntp.org");
  clienteSeguro.setCACert(TELEGRAM_CERTIFICATE_ROOT);
  clienteSeguro.setHandshakeTimeout(5);
  clienteSeguro.setTimeout(1500);
  filaTelegram = xQueueCreate(8, sizeof(Aviso));
  if (!filaTelegram || xTaskCreate(enviarTelegram, "Telegram", 8192, nullptr, 1, nullptr) != pdPASS) {
    if (filaTelegram) vQueueDelete(filaTelegram);
    filaTelegram = nullptr;
    Serial.println("[TELEGRAM] Envio indisponivel; controle local ativo");
  }
#else
  Serial.println("[ENSAIO] w: desligar Wi-Fi | r: religar | f: falha DHT22 | v: restaurar");
#endif
  Serial.println("[PRONTO] Granja IoT / Modo: "
#ifdef ENABLE_TELEGRAM
  "Telegram real privado"
#else
  "demonstracao sem envio"
#endif
  );
  ultimaTemp = millis(); // aguarda um intervalo completo antes da primeira leitura
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
#ifndef ENABLE_TELEGRAM
  controlarEnsaio();
#endif
  if (agora - ultimoStatus >= INTERVALO_STATUS_MS) {
    ultimoStatus = agora;
    mostrarEstado();
  }
  delay(20);
}
