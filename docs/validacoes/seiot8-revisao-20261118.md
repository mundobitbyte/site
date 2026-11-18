# Auditoria controlada — Tópico 8 (RTOS e Protocolos), 18/11/2026

## Referência de preservação
- Base da branch: `b4e2ed46f22014a3f6d678d6f3baa33896957293` (`main` no início desta revisão).
- Painéis preservados: preparação, 8.1 RTOS, 8.2 I2C, 8.3 UART/RS-232, 8.4 CAN, 8.5 TCP/IP, 8.6 IEEE 802.11 e 8.7 Bluetooth.
- Conexões e limites preservados: 3,3 V versus 5 V no I2C, transceptor MAX3232 em RS-232, controlador TWAI e transceptor CAN, restrições do Wokwi e diferenças Bluetooth Classic/BLE.
- Não foram substituídos ou modificados sketches, circuitos, bibliotecas, scripts originais nem outros tópicos.

## Revisão em espiral e melhoria
A sequência do módulo já estabelece problema, conceito, exemplos, execução quando possível, interpretação e retomadas. Conferidos o HTML e os scripts `js/arduino-protocolos.js` e `js/arduino-espiral-mbb-7a10-20261026.js`. Eles organizam navegação, cópia, circuitos e desafios complementares; não foi identificado uso de reescritas destrutivas semelhante às corrigidas no tópico 6.

**Lacuna prática específica identificada:** a arbitragem CAN era descrita, sem uma verificação demonstrável para o aluno sem hardware. Foi inserido um exercício completamente aditivo que contrasta identificadores padrão `0x080` e `0x120`, explica os bits dominantes/recessivos e propõe nova comparação. A evidência é a previsão fundamentada, não a alegação de transmissão real.

## Testes e limites
- Adicionado `tests/seiot8/validar.mjs` para proteger a estrutura, os conceitos e a sintaxe dos scripts; workflow `.github/workflows/seiot8-validacao.yml`.
- O índice de pesquisa global necessita sincronização com o texto acrescido e deve alterar **somente** a unidade `pages/arduino-protocolos.html`.
- Validar antes do merge as rotinas do GitHub Actions: pesquisa, validação visual, segurança e teste do tópico 8; verificar em seguida o deploy do GitHub Pages.
- Execução física de CAN, I2C, RS-232 e Bluetooth e avaliação com alunos não foram realizadas nesta missão. O exercício CAN é conceitual e não autoriza conexão elétrica direta CAN_H/CAN_L ao ESP32.
