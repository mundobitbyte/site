// Stub exclusivo do teste nativo; nao e copiado aos checkpoints Arduino.
#pragma once
#include <deque>
#include <string>
class SoftwareSerial {
public:
  std::deque<char> entrada;
  std::string saida;
  SoftwareSerial(int,int) {}
  void begin(int) {}
  int available() { return (int)entrada.size(); }
  char read() { auto x=entrada.front(); entrada.pop_front(); return x; }
  void write(char x) { saida += x; }
};
