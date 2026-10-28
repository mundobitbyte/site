#include <WiFi.h>
#include <WebServer.h>
#include <ESPmDNS.h>

const char* ssid = "Wokwi-GUEST";
const char* senha = "";
const int LED = 23;
WebServer servidor(80);

String criarPagina() {
  String estado = digitalRead(LED) == HIGH ? "LIGADO" : "DESLIGADO";
  String pagina = "<!DOCTYPE html><html><head><meta charset='UTF-8'>";
  pagina += "<title>Ambiente MbB</title></head><body>";
  pagina += "<h1>Ambiente MbB</h1><p>LED: " + estado + "</p>";
  pagina += "<p><a href='/ligar'>Ligar LED</a></p>";
  pagina += "<p><a href='/desligar'>Desligar LED</a></p></body></html>";
  return pagina;
}

void mostrarPagina() {
  servidor.send(200, "text/html", criarPagina());
}

void ligarLED() {
  digitalWrite(LED, HIGH);
  mostrarPagina();
}

void desligarLED() {
  digitalWrite(LED, LOW);
  mostrarPagina();
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, senha, 6);
  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("IP virtual: ");
  Serial.println(WiFi.localIP());
  if (!MDNS.begin("ambiente-mbb")) {
    Serial.println("Falha ao iniciar mDNS.");
  } else {
    MDNS.addService("http", "tcp", 80);
    Serial.println("Inicializacao mDNS aceita; servico HTTP configurado.");
    Serial.println("Isso nao comprova resolucao do nome por outro dispositivo.");
    Serial.println("Exporte o PCAP para investigar os pacotes mDNS.");
  }
  servidor.on("/", mostrarPagina);
  servidor.on("/ligar", ligarLED);
  servidor.on("/desligar", desligarLED);
  servidor.begin();
}

void loop() {
  servidor.handleClient();
  delay(10);
}
