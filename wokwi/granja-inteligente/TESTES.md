# Testes — Granja inteligente (topico 7)

## Evidência de compilação

- A [execução 44058625226](https://github.com/mundobitbyte/site/actions/runs/44058625226) compilou o firmware anterior do PR #259 em modo demonstração e aprovou a análise estática.
- A validação atual do GitHub Actions repete a compilação de demonstração e inclui o ramo HTTPS com credenciais fictícias. Consulte os resultados no commit em revisão.
- Compilação, execução no Wokwi, confirmação da API do Telegram e recebimento no aparelho são evidências distintas.

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
