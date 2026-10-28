#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "NOME_DA_REDE";
const char* senha = "SENHA_DA_REDE";
const int LED = 23;
WebServer servidor(80);

void mostrarAviso() {
  servidor.send(200, "text/html; charset=utf-8",
    "<!doctype html><html lang='pt-BR'><meta charset='utf-8'>"
    "<meta name='viewport' content='width=device-width,initial-scale=1'>"
    "<h1>Ambiente MbB</h1><p>Aviso fictício do ESP32.</p>"
    "<p>Somente leitura: nenhum comando de dispositivo.</p></html>");
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, senha);
  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("IP local: ");
  Serial.println(WiFi.localIP());
  servidor.on("/", mostrarAviso);
  servidor.begin();
}

void loop() {
  servidor.handleClient();
}
