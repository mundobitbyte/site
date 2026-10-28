#include <WiFi.h>
#include <WebServer.h>
#include <ESPmDNS.h>

const char* ssid = "NOME_DA_REDE";
const char* senha = "SENHA_DA_REDE";

const int LED = 23;

WebServer servidor(80);

String criarPagina() {
  String estado;

  if (digitalRead(LED) == HIGH) {
    estado = "LIGADO";
  } else {
    estado = "DESLIGADO";
  }

  String pagina = "<!DOCTYPE html>";
  pagina += "<html><head><meta charset='UTF-8'>";
  pagina += "<meta name='viewport' content='width=device-width, initial-scale=1'>";
  pagina += "<title>Ambiente MbB</title></head><body>";
  pagina += "<h1>Ambiente MbB</h1>";
  pagina += "<p>Estado do LED: <strong>";
  pagina += estado;
  pagina += "</strong></p>";
  pagina += "<p><a href='/ligar'>Ligar LED</a></p>";
  pagina += "<p><a href='/desligar'>Desligar LED</a></p>";
  pagina += "</body></html>";

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
  WiFi.begin(ssid, senha);

  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("Wi-Fi conectado.");
  Serial.print("IP local: ");
  Serial.println(WiFi.localIP());

  if (!MDNS.begin("ambiente-mbb")) {
    Serial.println("Falha ao iniciar mDNS.");
  } else {
    MDNS.addService("http", "tcp", 80);
    Serial.println("Inicializacao mDNS aceita; teste o nome em outro aparelho.");
    Serial.println("Abra: http://ambiente-mbb.local");
  }

  servidor.on("/", mostrarPagina);
  servidor.on("/ligar", ligarLED);
  servidor.on("/desligar", desligarLED);
  servidor.begin();
}

void loop() {
  servidor.handleClient();
}
