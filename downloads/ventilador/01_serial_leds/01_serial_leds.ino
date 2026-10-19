// Mundo bit Byte — checkpoint 1: somente LEDs; nenhum motor ou rele.
// Uno: D5, D6 e D7 -> cada um a seu resistor de 330 ohms -> anodo LED.
// Os tres catodos vao ao GND. Monitor Serial: 9600, sem fim de linha.
const byte LEDS[] = {5, 6, 7};
byte velocidade = 0;

void selecionar(byte nova) {
  // Primeiro apaga todos; depois acende, no maximo, um indicador.
  for (byte i = 0; i < 3; i++) digitalWrite(LEDS[i], LOW);
  velocidade = nova <= 3 ? nova : 0;
  if (velocidade > 0) digitalWrite(LEDS[velocidade - 1], HIGH);
}

void setup() {
  for (byte i = 0; i < 3; i++) {
    digitalWrite(LEDS[i], LOW);
    pinMode(LEDS[i], OUTPUT);
  }
  Serial.begin(9600);
  selecionar(0);
}

void loop() {
  if (!Serial.available()) return;
  char comando = Serial.read();
  if (comando == '\r' || comando == '\n') return;
  selecionar(comando >= '0' && comando <= '3' ? comando - '0' : 0);
  Serial.write('0' + velocidade); // Confirmacao logica de um caractere.
}
