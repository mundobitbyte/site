"""Executa o sketch publicado com interfaces simuladas no computador.
Não emula ESP32, rádio, ADC físico, FreeRTOS nem transporte HTTP.
Requer Python 3, beautifulsoup4 e g++.
"""
from pathlib import Path
from tempfile import TemporaryDirectory
from bs4 import BeautifulSoup
import subprocess

root = Path(__file__).resolve().parents[2]
html = BeautifulSoup((root / 'pages/arduino-projeto-iot.html').read_text(), 'html.parser')
sketch = html.select_one('#b10-final').get_text()
fakes = r'''
#include <cassert>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <map>
#include <functional>
struct String: std::string {
  using std::string::string;
  String(std::string s):std::string(s){}
  String(int n):std::string(std::to_string(n)){}
};
struct Escrita { unsigned long tempo; int estado; };
unsigned long tempo = 0;
int leitura = 800;
bool variarDuranteEspera = false;
std::vector<Escrita> escritas;
const int HIGH=1, LOW=0, OUTPUT=1, WIFI_STA=1, WL_CONNECTED=3;
void pinMode(int, int){}
int analogRead(int p){ assert(p==34); return leitura; }
void digitalWrite(int p,int v){ assert(p==23); escritas.push_back({tempo,v}); }
unsigned long millis(){return tempo;}
void delay(unsigned long ms){tempo+=ms;if(variarDuranteEspera && tempo>=2500)leitura=3000;}
struct SerialFake {
 std::ostringstream texto;
 void begin(int b){assert(b==115200);}
 template<typename T>void print(T v){texto<<v;}
 template<typename T>void println(T v){texto<<v<<"\n";}
 void println(){texto<<"\n";}
} Serial;
struct WiFiFake{
 int estado=0;
 void mode(int){}
 void begin(const char*,const char*){}
 int status(){return estado;}
 const char*localIP(){return "192.0.2.10";}
} WiFi;
struct WebServer{
 std::map<std::string,std::function<void()>> rotas;
 int inicios=0,atendimentos=0,codigo=0;
 std::string destino,corpo;
 WebServer(int porta){assert(porta==80);}
 void on(const char*rota,std::function<void()>f){rotas[rota]=f;}
 void begin(){inicios++;}
 void handleClient(){atendimentos++;}
 void sendHeader(const char*nome,const char*valor){assert(std::string(nome)=="Location");destino=valor;}
 void send(int c,const char*,String texto){codigo=c;corpo=texto;}
};
'''
tests = r'''
int main(){
 // Claro/escuro, igualdade e orientação em ambas as montagens.
 assert(ambienteEscuro(800)==!LEITURA_MAIOR_NO_ESCURO);
 assert(ambienteEscuro(3000)==LEITURA_MAIOR_NO_ESCURO);
 assert(!ambienteEscuro(2000));
 // Falha inicial: sensor muda enquanto a tentativa está em curso.
 variarDuranteEspera=true;setup();
 assert(tempo>=10000 && tempo<=10500);
 assert(!servidorDisponivel && servidor.inicios==0);
 bool alto=false,baixo=false;
 for(auto e:escritas)if(e.tempo<10000){alto|=e.estado==HIGH;baixo|=e.estado==LOW;}
 assert(alto&&baixo);
 assert(Serial.texto.str().find("Wi-Fi indisponivel")!=std::string::npos);
 assert(escritas.back().estado==(LEITURA_MAIOR_NO_ESCURO?HIGH:LOW));
 leitura=800;loop();assert(ledLigado==!LEITURA_MAIOR_NO_ESCURO);
 assert(Serial.texto.str().find("Luminosidade: 800")!=std::string::npos);
 // Rede que aparece depois não inicia o servidor nesta implementação.
 WiFi.estado=WL_CONNECTED;loop();assert(servidor.inicios==0);
 // Reinício/caminho conectado: servidor e quatro rotas são montados.
 tempo=0;variarDuranteEspera=false;servidorDisponivel=false;setup();
 assert(servidorDisponivel && servidor.inicios==1 && servidor.rotas.size()==4);
 servidor.rotas["/ligar"]();assert(modo==MANUAL&&ledLigado);
 assert(servidor.codigo==303&&servidor.destino=="/");
 leitura=3000;loop();assert(ledLigado);
 WiFi.estado=0;loop();assert(modo==MANUAL&&ledLigado);
 servidor.rotas["/desligar"]();assert(modo==MANUAL&&!ledLigado);
 leitura=800;atualizarAutomacao();assert(!ledLigado);
 servidor.rotas["/auto"]();assert(modo==AUTOMATICO&&ledLigado==!LEITURA_MAIOR_NO_ESCURO);
 leitura=3000;loop();assert(ledLigado==LEITURA_MAIOR_NO_ESCURO);
 WiFi.estado=WL_CONNECTED;servidor.rotas["/"]();
 assert(servidor.codigo==200&&servidor.corpo.find("Luminosidade: 3000")!=std::string::npos);
 assert(servidor.corpo.find("/ligar")!=std::string::npos);
 assert(servidor.corpo.find("AUTOMATICO")!=std::string::npos);
 std::cout << "OK: orientacao=" << LEITURA_MAIOR_NO_ESCURO << ", sensor, limiar, rede inicial, modos, falhas, rotas e painel\n";
}
'''
with TemporaryDirectory(prefix='mbb-seiot-logica-') as work:
    for inverted in [False, True]:
        code = sketch.replace('#include <WiFi.h>', '').replace('#include <WebServer.h>', '')
        if inverted:
            code = code.replace('LEITURA_MAIOR_NO_ESCURO = false', 'LEITURA_MAIOR_NO_ESCURO = true')
        p = Path(work) / f'projeto-{inverted}.cpp'
        p.write_text(fakes + code + tests)
        exe = p.with_suffix('')
        subprocess.run(['g++', '-std=c++17', '-Wall', '-Wextra', str(p), '-o', str(exe)], check=True)
        subprocess.run([str(exe)], check=True)
