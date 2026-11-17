#include <WiFi.h>
#include <WebServer.h>

const int PINO_LED = 23;
WebServer servidor(80);
WiFiClient cliente;
bool ledLigado = false;
bool aguardando = false;
unsigned long inicioPedido = 0;

void pedir(const char* metodo, const char* caminho) {
  if (aguardando) return;
  if (!cliente.connect(IPAddress(127, 0, 0, 1), 80)) {
    Serial.println("Falha: servidor local indisponivel.");
    return;
  }

  Serial.printf("Pedido: %s %s\n", metodo, caminho);
  const char* tamanho = strcmp(metodo, "POST") == 0 ? "Content-Length: 0\r\n" : "";
  cliente.printf("%s %s HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n%s\r\n",
                 metodo, caminho, tamanho);
  inicioPedido = millis();
  aguardando = true;
}

void setup() {
  Serial.begin(115200);
  pinMode(PINO_LED, OUTPUT);
  digitalWrite(PINO_LED, LOW);
  WiFi.mode(WIFI_STA);
  servidor.on("/estado", HTTP_GET, []() {
    servidor.send(200, "text/plain", ledLigado ? "LED ligado" : "LED apagado");
  });
  servidor.on("/ligar", HTTP_POST, []() {
    ledLigado = true;
    digitalWrite(PINO_LED, HIGH);
    servidor.send(200, "text/plain", "LED ligado");
  });
  servidor.onNotFound([]() {
    servidor.send(404, "text/plain", "Rota inexistente");
  });
  servidor.begin();
  Serial.println("Servidor iniciado. Envie C, X ou L.");
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
    if (comando == 'C') pedir("GET", "/estado");
    if (comando == 'X') pedir("GET", "/ausente");
    if (comando == 'L') pedir("POST", "/ligar");
  }
  delay(10);
}
