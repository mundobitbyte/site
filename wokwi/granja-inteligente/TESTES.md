# Testes — Granja inteligente (topico 7)

## Evidência de compilação

- A [execução 44058625226](https://github.com/mundobitbyte/site/actions/runs/44058625226) compilou o firmware anterior do PR #259 em modo demonstração e aprovou a análise estática.
- A validação atual do GitHub Actions repete a compilação de demonstração e inclui o ramo HTTPS com credenciais fictícias. Consulte os resultados no commit em revisão.
- Compilação, execução no Wokwi, confirmação da API do Telegram e recebimento no aparelho são evidências distintas.

## Resultados observados na revisão

| Ação | Esperado | Observado | Evidência |
| --- | --- | --- | --- |
| Compilar demonstração e HTTPS com configuração fictícia | O ESP32 compila nos dois modos | Ambos aprovados | [GitHub Actions](https://github.com/mundobitbyte/site/actions/runs/44066830959) |
| Navegar e copiar em 390 e 1366 px | Etapas acessíveis e arquivos copiados integralmente | Percursos completos, seis cópias idênticas e ausência de transbordamento | [GitHub Actions](https://github.com/mundobitbyte/site/actions/runs/44066830959) |
| Iniciar o projeto no Wokwi | Registrar evento local e tentativa Wi-Fi | `[PRONTO] Granja IoT`, `[DEMO]` e `[REDE] Wi-Fi conectado` | Monitor Serial, projeto temporário |
| Ajustar o reservatório para 25 cm e depois para 7 cm, já sem Wi-Fi | Bomba liga por nível baixo e desliga por nível cheio mesmo sem rede | `Nivel de agua baixo: bomba ligada` e `Reservatorio abastecido: bomba desligada` | Serial aos 9.456 e 12.805 ms; Wi-Fi desligado antes do segundo evento |
| Apresentar cartões azul e vermelho | Reconhecer Ana e rejeitar desconhecido | UIDs `01:02:03:04` e `AA:BB:CC:DD` confirmados pelo Serial | Serial aos 14.539 e 13.185 ms |
| Desligar Wi-Fi com w e restaurar com r | Registrar queda e nova associação | `Wi-Fi desconectado; controle local ativo` e nova conexão ao Wokwi-GUEST | Serial, projeto temporário |
| Ajustar DHT22 de 24 para 34 °C, com Wi-Fi desligado | Ventilador permanece apagado a 24 °C e liga com a temperatura alta | GPIO 4 apresentou `TIMEOUT`; após remapear para GPIO 15, modo normal na partida e evento de temperatura alta durante a queda de Wi-Fi | Wokwi, evento no Serial aos 6.661 ms com GPIO 15 |
| Enviar alerta verdadeiro por HTTPS | Evento gerado, mensagem aceita pela API e visível no aparelho | Demonstração gerou o evento; envio e entrega reais pendentes de bot e chat privados | Serial e compilação do ramo HTTPS com configuração fictícia |

O ensaio controlado em C++ exerceu histerese, repetição de leituras, timeout e bloqueio da bomba e respostas a falhas. Esses casos não equivalem a executar as mesmas transições com os sensores e o relógio do Wokwi.

## Casos para executar no Wokwi

| Numero | Acao do aluno | Esperado |
| --- | --- | --- |
| 1 | DHT22 = 24 C | LED ventilador apagado |
| 2 | DHT22 = 34 C | LED ventilador acende e 1 evento |
| 3 | DHT22 = 29 C, apos 34 C | LED permanece aceso (histerese) |
| 4 | DHT22 = 27 C | LED apaga e evento de normalizacao |
| 5 | HC-SR04 = 25 cm | LED bomba acende |
| 6 | HC-SR04 = 15 cm | LED continua aceso (histerese) |
| 7 | HC-SR04 = 7 cm | LED apaga |
| 8 | HC-SR04 = 25 cm por mais de 30 s | Bomba bloqueada e alerta |
| 9 | Sem alterar para 7 cm, aguardar | Bomba nao religara sozinha |
| 10 | RFID azul 01:02:03:04 | Ana identificada |
| 11 | RFID verde 11:22:33:44 | Joao identificado |
| 12 | RFID vermelho AA:BB:CC:DD | Cartao desconhecido |
| 13 | Digitar w no Monitor Serial, ajustar DHT22 de 24 a 34 °C e digitar r | Wi-Fi desliga, ventilador liga sem rede e Wi-Fi reconecta |
| 14 | Token ausente | Logs [DEMO], sem afirmacao de entrega |
| 15 | Bot privado valido e chat iniciado | Confirmacao da API e recebimento no Telegram — depende de credenciais privadas |

| 16 | DHT22 a 24 °C, digitar f, aguardar duas leituras e digitar v | Falha e ventilação preventiva, sem repetir aviso de falha; recuperação e LED apagado |
| 17 | HC-SR04 a 25 cm e depois a 35 cm | LED verde acende, depois apaga por leitura inválida |
| 18 | Manter DHT22 em 34 °C por 12 s após a transição de 24 °C | Um evento de temperatura alta, com várias leituras na mesma faixa |

Para o ensaio real, use um bot privado de teste e um ESP32 em rede própria ou o gateway privado do Wokwi. Confirme separadamente a linha de evento no Serial, a confirmação da Bot API e a chegada da mensagem no aparelho. Identifique hora e cenário, mantenha o token e o chat privado fora da evidência.

Anote: captura do circuito, temperatura/distancia usadas, Serial, LED observado e recebimento real (quando habilitado).

## Restricoes
- Wokwi nao movimenta a agua quando a bomba liga; ajuste a distancia manualmente.
- Em hardware, o ECHO do HC-SR04 pode fornecer 5 V: use divisao de tensao para 3,3 V e drivers adequados para atuadores. LEDs nao representam bombas ou ventiladores reais.
- Nao utilizar esta maquete como controle real de bem-estar animal nem como equipamento de seguranca.
