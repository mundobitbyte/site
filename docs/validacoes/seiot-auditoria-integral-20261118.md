# Auditoria integral circular e em espiral — Sistemas Embarcados e IoT (1 a 10)

**Data:** 18/11/2026. **Referência inicial da produção:** `567ae0a1160196bed02b06fee322df1d7e9e57b1`. **Branch:** `audit/seiot-1a10-integral-20261118`. **PR:** #273.

## Objetivo e critérios
Conferir a sequência segundo a proposta Mundo Bit Byte: **necessidade → conceitos e materiais → preparação → prática guiada → explicação de cada novidade → evidências observáveis → exercício autônomo → retomada circular e em espiral**. Proteger os conteúdos já aprovados e distinguir expressamente **o que foi executado de verdade**, **o que foi testado em CI com simulações** e **o que foi apenas inspecionado**.

## Inventário de módulos, práticas, avaliação e encadeamento

| Bloco | Fonte principal | Problema, prática e continuidade que foram inspecionados | Observações |
| --- | --- | --- | --- |
| 1. Fundamentos | `pages/arduino.html` (introdução) | Arduino, sistema embarcado, microcontrolador, tensão/corrente/resistência, circuitos e preparação | Exemplos e circuitos existentes preservados; a navegação usa script que injeta partes da fundamentação |
| 2. Entrada e Saída | `pages/arduino.html` (P1–P5, Lab1) | LED e resistor, Blink, botão, buzzer, potenciômetro/PWM e Monitor Serial | As práticas reutilizam conceitos dos fundamentos e têm explicação e exercício |
| 3. Sensores | `pages/arduino.html` (P6–P7, Lab2) | LDR, HC-SR04 e sensor de ré | Código renderizado acrescenta tempo limite de leitura e trata ausência de eco |
| 4. Atuadores e Automação | `pages/arduino.html` (P8–P9, Lab3–Lab4) | LED RGB, Servo, RGB com botões, lixeira automática | Identificada divergência de numeração na fonte estática: P8/P9 apareciam como Projeto 10/11. Padronizados títulos, legendas e exercícios para 8/9, conforme identificação da navegação e correção dinâmica preexistente |
| 5. Programação Aplicada | `pages/arduino-programacao-aplicada.html` | Funções, trigonometria, texto e teste/diagnóstico | Os quatro painéis `b5-1`…`b5-4` estão preservados; corrigido o processamento de `hashchange` |
| 6. Conectividade | `pages/arduino-conectividade.html` | Preparação, Bluetooth, Wi-Fi, HTTP, mDNS e túnel | PR #267 preservou conteúdo sobrescrito, reforçou a aprendizagem e a pesquisa; testes específicos e recursos de rede continuam presentes |
| 7. Internet das Coisas | `pages/arduino-iot.html` e `pages/arduino-granja-inteligente.html` | Fundamentos, história, definições, aplicações, Granja 7.5 | PR #268: previsão de falha de rede e distinção entre controle local, evento simulado e aviso entregue; circuito e sketch preservados |
| 8. RTOS e Protocolos | `pages/arduino-protocolos.html` | Tarefas FreeRTOS, I2C, UART/RS-232, CAN, TCP/IP, IEEE 802.11, Bluetooth | PR #270: exercício de arbitragem CAN; cuidado com transceptores e níveis elétricos, sem supor teste físico |
| 9. Proteção e Segurança | `pages/arduino-seguranca.html` | LGPD, necessidade, credenciais, autenticação, autorização e acesso | PR #271: estudo de caso RFID/Telegram na Granja; separa demonstração e recebimento |
| 10. Projeto IoT | `pages/arduino-projeto-iot.html` | Requisitos, arquitetura, LDR+LED, automação, HTTP local, falhas, segurança, entrega | PR #272: `diagram.json` copiável, prática 10.1–10.7; validação estática das ligações e lógica C++ com interfaces simuladas |
| Revisão e avaliações | `pages/arduino-revisao-modulos.html`, `pages/arduino-exercicios.html`, `pages/arduino-avaliacao-conceitual.html`, `pages/arduino-avaliacoes-bimestrais.html` | Retomada por tópicos, questões e exercícios | Arquivos protegidos pela auditoria transversal de links/recursos, sem reformular questões nesta PR |

### Falhas concretas encontradas e intervenções
1. **P8/P9 versus Projeto 10/11:** a fonte HTML tinha numeração divergente da ordem real e da normalização executada pelo JavaScript. Alinhadas as denominações dos projetos RGB e Servo nas seções e exercícios, sem alterar ID, circuito ou sketch.
2. **Navegação de fundamentos 1–4:** trocar o fragmento de URL na mesma página (por exemplo, `#p8` → `#p9`) não ativava o painel de destino, pois a navegação não ouvia `hashchange`. Agora mudança de âncora e histórico ativam o módulo e o painel corretos; IDs são resolvidos com segurança, inclusive diante de hash malformado.
3. **Navegação do bloco 5:** o mesmo defeito ocorria ao trocar `#b5-1` → `#b5-2`. Corrigido de forma localizada em `js/arduino-programacao-aplicada.js`, preservando os exemplos.
4. **Pesquisa global:** títulos atualizados e alterações em JS exigem regeneração controlada do catálogo. A página `arduino.html` possui mais de uma entrada no índice; o mecanismo de proteção permite apenas entradas com o mesmo caminho e só campos de busca (`texto_busca`/`topicos_busca`), sem mudanças nas demais unidades.

### Validações e resultados
- **Auditoria estática implementada:** `tests/seiot-integral/links-e-preservacao.mjs`; examina 12 páginas do módulo, presença das etapas, links relativos e âncoras, referências a arquivos e sintaxe dos scripts declarados no HTML.
- **Primeira execução aprovada:** 232 links locais, 66 âncoras estáticas, 58 referências a recursos e 37 referências a scripts conferidos; zero caminho inválido neste conjunto. Scripts carregados dinamicamente são verificados complementarmente pelo navegador, e não devem ser tratados como abrangidos integralmente pela contagem de scripts.
- **Navegador acrescentado:** `tests/seiot-integral/navegador-fundamentos.cjs`, em 390 px e 1366 px, conferindo numeração visível, mudança de painel, lógica de ausência de eco em HC-SR04, os quatro painéis de programação e erros de navegação. As falhas observadas na primeira execução originaram as correções acima.
- **Testes anteriores preservados:** recuperação do bloco 6; prática de rede/mDNS; Granja 7.5; tópico 8; tópico 9; tópico 10; validação global de pesquisa, segurança, Modo MbB visual, Git, Web III e acervo musical.
- **Estado final das validações:** consultar os workflows do commit final antes de integrar. Resultado anterior de outra SHA não substitui o resultado do commit efetivo.

## Pontos de atenção didática — limite de escopo
- O percurso combina execução do Arduino Uno no Tinkercad e do ESP32 no Wokwi/placa física; a troca de placa, GPIO, tensão e ADC precisa continuar explícita. A revisão identificou no tópico 10 a advertência correta sobre leituras opostas do LDR nas duas montagens. Não tratar o valor ADC como medida direta em lux.
- A distinção entre *código inserido* e *código realmente executado* merece ser mantida em todas as práticas: logs de demonstração não comprovam envio remoto, montagens JSON não comprovam execução e uma página HTTP simulada não comprova alcançabilidade na Internet.
- A plataforma possui explicações e trechos de código introduzidos dinamicamente por JavaScript. Um teste de HTML estático não garante, sozinho, que tais trechos sejam preservados na tela final: daí a necessidade de testes de navegador.
- Evitar expandir para ensaios reais de RS-232/CAN ou rede elétrica sem interfaces, transceptores e condições de segurança apropriados.
- Avaliações, formulários externos, experiência com alunos, montagem real e operação de simuladores de terceiros **não foram executados nesta auditoria**. Isso permanece uma etapa de validação pedagógica e prática complementar.

## Política de publicação
A produção permanece intacta até que a auditoria esteja consolidada, os checks relevantes terminem com sucesso e o proprietário autorize a integração deste PR. A autorização para revisar o módulo não deve ser interpretada automaticamente como exigência de publicar mudanças em andamento. O PR agrega correções pontuais e um teste transversal reutilizável, sem reescrever os conteúdos das dez etapas.
