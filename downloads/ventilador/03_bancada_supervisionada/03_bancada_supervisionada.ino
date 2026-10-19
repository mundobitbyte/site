// Mundo bit Byte — checkpoint 3: prototipo didatico SOMENTE COM LEDs.
// Nao conectar estas saidas a reles ou a qualquer circuito de 220 V.
// Uno: LEDs/resistores em D5,D6,D7; Bluetooth software em D2(RX),D3(TX).
// Alimentacao/niveis do HC-05: verificar a variante e a interface antes de montar.
// Protocolo: textos '0'..'3'; '?' a cada 500 ms mantem o enlace supervisionado.
// Retorno: um caractere '0'..'3' confirma somente o estado logico dos LEDs.
#include <SoftwareSerial.h>
SoftwareSerial bluetooth(2, 3);
const byte LEDS[] = {5, 6, 7};
const uint32_t PRAZO_MS = 2000UL; // Escolha didatica, nao parametro de seguranca de motor.
byte velocidade = 0;
uint32_t ultimaMensagem = 0;

void selecionar(byte nova) {
  for (byte i = 0; i < 3; i++) digitalWrite(LEDS[i], LOW);
  velocidade = nova <= 3 ? nova : 0;
  if (velocidade > 0) digitalWrite(LEDS[velocidade - 1], HIGH);
}

void confirmar() {
  bluetooth.write('0' + velocidade);
}

void verificarPrazo(uint32_t agora) {
  // Subtracao sem sinal tambem funciona quando millis() volta a zero.
  if (velocidade > 0 && (uint32_t)(agora - ultimaMensagem) >= PRAZO_MS) {
    selecionar(0);
    confirmar();
  }
}

void receber(char comando, uint32_t agora) {
  if (comando == '\r' || comando == '\n') return;
  // Uma mensagem de supervisao atrasada nao deve esconder um prazo ja expirado.
  verificarPrazo(agora);
  ultimaMensagem = agora;
  if (comando == '?') return; // Mantem comunicacao; nunca liga os LEDs.
  selecionar(comando >= '0' && comando <= '3' ? comando - '0' : 0);
  confirmar();
}

void setup() {
  for (byte i = 0; i < 3; i++) {
    digitalWrite(LEDS[i], LOW);
    pinMode(LEDS[i], OUTPUT);
  }
  selecionar(0);
  bluetooth.begin(9600); // Requer HC-05 configurado para 9600 em modo de dados.
  ultimaMensagem = millis();
}

void loop() {
  verificarPrazo(millis());
  // Processa um caractere por volta; nao bloqueia esperando texto ou delimitador.
  if (bluetooth.available()) receber(bluetooth.read(), millis());
}
