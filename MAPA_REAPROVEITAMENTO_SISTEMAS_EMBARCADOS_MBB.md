# Mapa de reaproveitamento — Sistemas Embarcados e IoT

SHA da fonte de verdade auditada: `64c9b0ffc6ca043f4d25f9491696b83fc328e467`.

| Patrimônio existente | Destino na Academia | Assets/códigos preservados | Transformação pedagógica acrescentada |
|---|---|---|---|
| `pages/arduino.html#intro` e `#fund-plataforma-aberta` | Módulos 0 e 1 | Diagramas de placa, ciclo maker, eletricidade, componentes e Tinkercad | Pré-requisitos explícitos, escolha simulador × hardware, previsão e critério de sucesso |
| `pages/arduino.html#p1` e `#p2` | Módulo 1 | Circuitos e códigos de LED protegido e Blink | Falha segura, explicação do fluxo e checkpoint de reconstrução |
| `#p3`, `#p4`, `#p5` e `#lab1` | Módulo 2 | Botão, buzzer, potenciômetro/PWM e Monitor Serial | Fluxo entrada → processamento → saída, observação de valores e transferência |
| `#p6`, `#p7` e `#lab2` | Módulo 3 | LDR, HC-SR04 e Sensor de Ré | Calibração baseada em leitura real, faixas, interpretação e diagnóstico por subsistema |
| `#p8`, `#p9`, `#lab3` e `#lab4` | Módulo 4 | LED RGB, servo, RGB + botões e Lixeira Automática | Integração progressiva, estado lógico, teste por partes e automação comprovada |
| Trecho de tempo/memória após `#p7` e `arduino-programacao-aplicada.html` | Módulo 5 | `millis()`, `micros()`, memória, funções, matemática, texto e `random()` | Conceitos surgem depois da complexidade prática; programa não bloqueante e modular |
| `arduino-conectividade.html#b6-prep`, `#b6-1`, `#b6-2` | Módulo 6 | Códigos do ESP32, Bluetooth e Wi-Fi | Transferência Uno → ESP32, 5 V × 3,3 V e mensagem “você não voltou ao começo” |
| `#b6-3`, `#b6-4`, `#b6-5` e `arduino-iot.html` | Módulo 7 | HTTP, mDNS, túnel, conceitos e aplicações de IoT | Comparação por finalidade, comportamento na falha de rede e arquitetura do sistema |
| `arduino-protocolos.html` | Módulo 8 | RTOS, I2C, UART/RS-232, CAN, TCP/IP, 802.11 e Bluetooth | Cada tecnologia responde a uma necessidade; prática curta de RTOS e I2C |
| `arduino-seguranca.html` | Módulo 8 | Conteúdo de proteção de dados e segurança | Checklist de finalidade, mínimo necessário, autenticação, autorização e falha segura |
| `arduino-projeto-iot.html` | Módulo 9 | Ambiente Inteligente MbB e códigos integrados | Ajuda reduzida gradualmente, testes reproduzíveis, falha intencional e melhoria autônoma |
| `arduino-exercicios.html`, revisões e avaliações | Módulo 99 | Questões e avaliações existentes | Organização por Preveja, Experimente, Modifique, Diagnostique, Aplique e Domínio |

## Imagens reaproveitadas

Todas permanecem em `img/arduino/` e continuam sendo exibidas pelo material-base, sem cópia ou redesenho. Incluem:

- fundamentos: placa/microcontrolador, ciclo maker, analogia hidráulica, tensão/corrente/resistência, fluxo de elétrons, Lei de Ohm, resistores, LED sem resistor, polaridade, série/paralelo, componentes, Tinkercad, tempo, memória e escopo;
- circuitos: LED protegido, Blink, botão, buzzer, potenciômetro/PWM, LDR, HC-SR04, LED RGB e servo;
- laboratórios: Monitor Serial, Sensor de Ré, RGB com botões e Lixeira Automática;
- ESP32: LED no GPIO 23, LDR/LED do projeto IoT e sinais do LCD I2C.

## Material novo e razão

- Camada de aulas guiadas: necessária para transformar conteúdo correto em progressão acompanhada.
- Experiência introdutória de MQTT: lacuna da estrutura pedagógica congelada; curta e sem criar curso paralelo.
- Aula de alimentação, corrente e multímetro: necessária para a transição responsável entre simulador e hardware real.
- Checkpoints e critérios de sucesso: necessários para comprovar aprendizagem e autonomia.
- Painel, pontos, conquistas e persistência: necessários para continuidade entre dispositivos.

Nenhum circuito existente foi redesenhado. Nenhum código técnico do módulo público foi substituído.
