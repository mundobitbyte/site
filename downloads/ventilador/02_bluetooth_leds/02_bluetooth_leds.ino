// Mundo bit Byte — checkpoint 2: HC-05 com LEDs, sem motor ou rele.
// Identifique e valide alimentacao, niveis e baud rate do HC-05 antes da ligacao.
// Uno D2 (RX software) recebe TX do modulo com niveis compativeis.
// Uno D3 (TX software) envia ao RX do modulo por adaptacao de nivel validada.
// A alimentacao do modulo e o adaptador nao sao definidos por este codigo.
#include <SoftwareSerial.h>
SoftwareSerial bluetooth(2, 3); // RX, TX do Arduino.
const byte LEDS[] = {5, 6, 7};
byte velocidade = 0;

void selecionar(byte nova) {
  for (byte i = 0; i < 3; i++) digitalWrite(LEDS[i], LOW);
  velocidade = nova <= 3 ? nova : 0;
  if (velocidade > 0) digitalWrite(LEDS[velocidade - 1], HIGH);
}

void setup() {
  for (byte i = 0; i < 3; i++) {
    digitalWrite(LEDS[i], LOW);
    pinMode(LEDS[i], OUTPUT);
  }
  bluetooth.begin(9600); // Confirmar esta velocidade na variante real.
  selecionar(0);
}

void loop() {
  if (!bluetooth.available()) return;
  char comando = bluetooth.read();
  if (comando == '\r' || comando == '\n') return;
  selecionar(comando >= '0' && comando <= '3' ? comando - '0' : 0);
  bluetooth.write('0' + velocidade);
}
