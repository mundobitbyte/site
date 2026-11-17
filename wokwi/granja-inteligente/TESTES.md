# Testes — Granja inteligente (topico 7)

## Status desta entrega
- Integracao de arquivos e coerencia dos pinos: verificacao por inspecao.
- Execucao efetiva no Wokwi: **nao executada nesta sessao**.
- Compilacao real ESP32: **nao executada nesta sessao**.
- Entrega Telegram: **nao testada** (nenhum token privado foi usado).
- Nenhum resultado abaixo representa teste aprovado.

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
| 13 | Rede indisponivel | Automacao local segue funcionando |
| 14 | Token ausente | Logs [DEMO], sem afirmacao de entrega |
| 15 | Bot privado valido e chat iniciado | Confirmacao da API e recebimento no Telegram — **pendente** |

Anote: captura do circuito, temperatura/distancia usadas, Serial, LED observado e recebimento real (quando habilitado).

## Restricoes
- Wokwi nao movimenta a agua quando a bomba liga; ajuste a distancia manualmente.
- Em hardware, o ECHO do HC-SR04 pode fornecer 5 V: use divisao de tensao para 3,3 V e drivers adequados para atuadores. LEDs nao representam bombas ou ventiladores reais.
- Nao utilizar esta maquete como controle real de bem-estar animal nem como equipamento de seguranca.
