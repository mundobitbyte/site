#include <WiFi.h>
#include <WebServer.h>
#include <ESPmDNS.h>

const bool USAR_MODELO = false;
const char* NOME = "ambiente-mbb";
const int PORTA = 80;
WebServer servidor(PORTA);
bool pronto = false;

void setup() {
  Serial.begin(115200);
  if (USAR_MODELO) {
    Serial.printf("MODELO sem rede: consulte %s.local no Serial.\n", NOME);
    Serial.setTimeout(300);
    return;
  }

  WiFi.mode(WIFI_STA);
  WiFi.begin("Wokwi-GUEST", "", 6);

  const unsigned long inicio = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - inicio < 15000) delay(250);
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Sem Wi-Fi. Revise a etapa 6.2 e reinicie.");
    return;
  }

  servidor.on("/", []() { servidor.send(200, "text/plain", "Ambiente MbB"); });
  servidor.begin();
  pronto = true;
  if (!MDNS.begin(NOME) || !MDNS.addService("http", "tcp", PORTA)) {
    Serial.println("Falha ao configurar mDNS.");
    return;
  }

  Serial.print("IP do ESP32: ");
  Serial.println(WiFi.localIP());
  Serial.printf("Nome configurado: %s.local\n", NOME);
  Serial.printf("Servico configurado: _http._tcp, porta %d\n", PORTA);
}

void loop() {
  if (pronto) servidor.handleClient();
  if (USAR_MODELO && Serial.available()) {
    String consulta = Serial.readStringUntil('\n');
    consulta.trim();
    if (consulta == String(NOME) + ".local") {
      Serial.printf("MODELO: %s -> _http._tcp, porta %d\n", consulta.c_str(), PORTA);
    } else {
      Serial.println("MODELO: nome ausente.");
    }
  }
  delay(10);
}
