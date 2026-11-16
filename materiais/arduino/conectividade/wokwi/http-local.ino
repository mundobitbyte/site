#include <WiFi.h>
#include <WebServer.h>

const int PINO_LED = 23;
WebServer servidor(80);
WiFiClient cliente;
bool aguardando = false;
unsigned long inicioPedido = 0;

void pedir(const char* caminho) {
  if (aguardando) return;
  if (!cliente.connect(IPAddress(127, 0, 0, 1), 80)) {
    Serial.println("Falha: servidor local indisponivel.");
    return;
  }

  Serial.printf("Pedido: GET %s\n", caminho);
  cliente.printf("GET %s HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n\r\n", caminho);
  inicioPedido = millis();
  aguardando = true;
}

void setup() {
  Serial.begin(115200);
  pinMode(PINO_LED, OUTPUT);
  digitalWrite(PINO_LED, LOW);
  WiFi.mode(WIFI_STA);
  servidor.on("/ligar", []() {
    digitalWrite(PINO_LED, HIGH);
    servidor.send(200, "text/plain", "LED ligado");
  });
  servidor.onNotFound([]() {
    servidor.send(404, "text/plain", "Rota inexistente");
  });
  servidor.begin();
  Serial.println("Servidor iniciado. Envie L ou X.");
}

void loop() {
  servidor.handleClient();

  if (aguardando) {
    while (cliente.available()) Serial.write(cliente.read());
    if (!cliente.connected() || millis() - inicioPedido >= 4000) {
      if (cliente.connected()) Serial.println("\nTempo esgotado no pedido.");
      cliente.stop();
      aguardando = false;
      Serial.println("\n---");
    }
    delay(1);
    return;
  }

  if (Serial.available()) {
    const char comando = Serial.read();
    if (comando == 'L') pedir("/ligar");
    if (comando == 'X') pedir("/ausente");
  }
  delay(10);
}
