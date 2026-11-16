bool caminhoAberto = false;

void consultarServico() {
  Serial.println("200 | Aviso fixo do Ambiente MbB");
}

void setup() {
  Serial.begin(115200);
  Serial.println("MODELO DIDATICO: sem internet e sem tunel real.");
  Serial.println("L = pedido local, A = abrir, E = pedido externo, F = fechar.");
}

void loop() {
  if (!Serial.available()) {
    delay(10);
    return;
  }
  const char comando = Serial.read();

  switch (comando) {
    case 'L':
      consultarServico();
      break;
    case 'A':
      caminhoAberto = true;
      Serial.println("Entrada do modelo aberta.");
      break;
    case 'E':
      if (caminhoAberto) {
        Serial.println("Pedido encaminhado ao servico local.");
        consultarServico();
      } else {
        Serial.println("Sem caminho ate o servico. Nenhuma resposta HTTP.");
      }
      break;
    case 'F':
      caminhoAberto = false;
      Serial.println("Entrada do modelo fechada.");
      break;
    case '\r':
    case '\n':
      break;
    default:
      Serial.println("Use L, A, E ou F.");
  }
}
