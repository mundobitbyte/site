const int PINO_LED = 23;
const unsigned long TEMPO_MS = 700;

void setup() {
  Serial.begin(115200);
  pinMode(PINO_LED, OUTPUT);
}

void loop() {
  digitalWrite(PINO_LED, HIGH);
  Serial.println("GPIO 23: ligado");
  delay(TEMPO_MS);

  digitalWrite(PINO_LED, LOW);
  Serial.println("GPIO 23: desligado");
  delay(TEMPO_MS);
}
