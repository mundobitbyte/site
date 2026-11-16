#include <WiFi.h>

const bool USAR_MODELO = false;
const char* REDE = "Wokwi-GUEST";

void setup() {
  Serial.begin(115200);
  if (USAR_MODELO) {
    Serial.println("MODELO: o teste abaixo nao usa a rede.");
    if (strcmp(REDE, "Wokwi-GUEST") == 0) {
      Serial.println("IP de exemplo: 192.0.2.23");
    } else {
      Serial.println("MODELO: rede nao encontrada.");
    }
    return;
  }

  WiFi.mode(WIFI_STA);
  WiFi.begin(REDE, "", 6);

  const unsigned long inicio = millis();
  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED && millis() - inicio < 15000) {
    delay(250);
    Serial.print('.');
  }
  Serial.println();

  if (WiFi.status() == WL_CONNECTED) {
    Serial.print("IP recebido: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("Tempo esgotado. Confira o nome da rede e reinicie.");
  }
}

void loop() { delay(10); }
