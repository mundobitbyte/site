#include <cassert>
#include <cstdint>
#include <iostream>
using byte = unsigned char;
const int LOW=0, HIGH=1, OUTPUT=1;
int pinos[20]={}; uint32_t instante=0;
uint32_t millis() { return instante; }
void pinMode(int,int) {}
void digitalWrite(int p,int v) {
  pinos[p]=v;
  assert(pinos[5]+pinos[6]+pinos[7]<=1); // Conferido em toda escrita, inclusive intermediaria.
}
#include "../../downloads/ventilador/03_bancada_supervisionada/03_bancada_supervisionada.ino"
int main() {
  setup(); assert(velocidade==0);
  for(byte de=0;de<=3;de++) for(byte para=0;para<=3;para++) {
    selecionar(de); selecionar(para); assert(velocidade==para);
    assert(pinos[5]+pinos[6]+pinos[7]==(para!=0));
  }
  receber('X',10); assert(velocidade==0);
  receber('3',100); verificarPrazo(2099); assert(velocidade==3);
  verificarPrazo(2100); assert(velocidade==0);
  receber('?',2200); assert(velocidade==0);
  receber('2',3000); receber('?',5000); assert(velocidade==0);
  receber('1',6000); receber('\n',8000); verificarPrazo(8000); assert(velocidade==0);
  receber('1',UINT32_MAX-1000); verificarPrazo(998); assert(velocidade==1);
  verificarPrazo(999); assert(velocidade==0);
  instante=10000; bluetooth.entrada.push_back('3'); loop(); assert(velocidade==3);
  instante=12000; loop(); assert(velocidade==0);
  selecionar(3); setup(); assert(velocidade==0);
  std::cout << "PASS: firmware real em host; 16 combinacoes, cada escrita GPIO, invalido, prazo, mensagem atrasada, CR/LF, wrap de 32 bits, loop e reset.\n";
}
