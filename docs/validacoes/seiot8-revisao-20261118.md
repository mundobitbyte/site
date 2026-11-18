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
- O índice de pesquisa global foi sincronizado em execução controlada. O gerador revelou **duas unidades** com índices defasados: `pages/arduino-protocolos.html` (esta alteração) e `pages/reactnative.html` (já defasada na `main`). Foram modificados exclusivamente `texto_busca` e/ou `topicos_busca` dessas duas unidades; nenhum código, conteúdo de página ou metadado estável de React Native foi alterado. A primeira tentativa bloqueou a atualização ao detectar a segunda unidade inesperada; após auditoria dos campos, a execução restrita a essas duas unidades foi aprovada. O workflow temporário foi removido.
- Validar antes do merge as rotinas do GitHub Actions: pesquisa, validação visual, segurança e teste do tópico 8; verificar em seguida o deploy do GitHub Pages.
- Execução física de CAN, I2C, RS-232 e Bluetooth e avaliação com alunos não foram realizadas nesta missão. O exercício CAN é conceitual e não autoriza conexão elétrica direta CAN_H/CAN_L ao ESP32.

## Correção de regressão de busca herdada do PR #269
O PR #269 eliminou uma etapa repetida de React Native. A regeneração do índice exibiu 40 entradas do bloco React e Hooks, enquanto `meu-mbb/catalogo.test.cjs` ainda esperava 41. Os resultados de busca por “Média Escolar” também passaram a priorizar a explicação de cálculo (etapa 9), em lugar da etapa de `useRef` (11). Corrigida a expectativa de contagem e de ordenação no teste, **mantendo a verificação explícita de que a etapa useRef permanece no índice**. Nenhuma etapa, arquivo de aula, programa React Native ou conteúdo autoral foi removido ou alterado nesta branch. Essa correção mínima elimina a divergência que afetava três workflows compartilhados; o resultado efetivo depende das novas execuções de CI.
