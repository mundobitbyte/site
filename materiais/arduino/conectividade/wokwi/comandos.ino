const int PINO_LED = 23;

void setup() {
  Serial.begin(115200);
  pinMode(PINO_LED, OUTPUT);
  digitalWrite(PINO_LED, LOW);
  Serial.println("Envie L para ligar ou D para desligar.");
}

void loop() {
  if (!Serial.available()) {
    delay(10);
    return;
  }
  const char comando = Serial.read();
  if (comando == '\r' || comando == '\n') return;

  if (comando == 'L') {
    digitalWrite(PINO_LED, HIGH);
    Serial.println("OK: LED ligado");
  } else if (comando == 'D') {
    digitalWrite(PINO_LED, LOW);
    Serial.println("OK: LED desligado");
  } else {
    Serial.println("Comando invalido. O LED manteve o estado.");
  }
}
