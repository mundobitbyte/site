# Controle de Ventilador por Bluetooth — revisão experimental 0.3

Os programas deste pacote controlam somente LEDs. Não conectar as saídas a relés, motores ou circuitos de 220 V.

## Arquivos e sequência

1. `01_serial_leds/01_serial_leds.ino`: teste de três LEDs pelo Monitor Serial USB, 9600 bit/s. Envia e recebe caracteres de texto `0`, `1`, `2` e `3`. Um caractere inválido apaga os LEDs e confirma `0`; CR e LF são ignorados.
2. `02_bluetooth_leds/02_bluetooth_leds.ino`: a mesma seleção por SoftwareSerial, com D2 como RX e D3 como TX do Uno. Exige HC-05 identificado e configurado para 9600 no modo de dados. A variante, sua alimentação e a adaptação de níveis ainda precisam ser verificadas. Não supervisiona perda de mensagens.
3. `03_bancada_supervisionada/03_bancada_supervisionada.ino`: acrescenta supervisão interna. O aplicativo envia `?` a cada 500 ms; após 2000 ms sem mensagem, o programa apaga os LEDs. `?` sozinho nunca religa. Tempos de demonstração, não dimensionamento de segurança para motores.
4. `VentiladorMBB.aia`: projeto editável experimental. Designer e blocos também estão disponíveis em `appinventor/`. A importação real no MIT e a conclusão da compilação APK foram verificadas em 19/10/2026. O professor baixou o APK no MIT e forneceu o arquivo: `VentiladorMBB03.apk` está disponível, com versão e assinaturas verificadas. Veja `APK_VERIFICADO.md`. Instalação, Companion e testes com Android/HC-05 continuam pendentes.

Os três sketches são independentes; abra a pasta correspondente na IDE Arduino e selecione Uno. O programa exibido no site é gerado a partir do arquivo entregue. Não misture trechos dos checkpoints.

## Montagem de LEDs

Alimente o Uno por USB. Com tudo desconectado, monte:

| Saída | Caminho |
| --- | --- |
| D5 | Resistor 330 Ω → ânodo LED 1 → cátodo → GND |
| D6 | Resistor 330 Ω → ânodo LED 2 → cátodo → GND |
| D7 | Resistor 330 Ω → ânodo LED 3 → cátodo → GND |

Cada LED tem seu resistor. Confira curto, polaridade e continuidade antes de alimentar. Essas ligações não descrevem a alimentação do HC-05 nem um módulo relé.

## App Inventor

Importe `VentiladorMBB.aia` em um projeto de teste. Confira os dez componentes e os dez eventos do XML. As cinco variáveis globais são `recebido` (texto vazio), `conectadoAntes` (falso), `aguardando` (falso), `esperado` (texto vazio) e `prazoConfirmacao` (zero). O app lista aparelhos já pareados; não faz descoberta contínua.

A edição 0.3 preserva a espera pela confirmação inicial `0` antes de habilitar velocidades. Cada espera nova prepara um prazo `Clock1.SystemTime() + 2000` antes de usar `SendText`. Durante a espera, as velocidades ficam bloqueadas. O primeiro Desligar pode antecipar 1/2/3 e iniciar a espera por `0`. Se já aguardava `0`, reenviar não renova o prazo: vencido, encerra; ainda válido, reenvia somente o texto `0`. Só a resposta esperada libera as velocidades. A expiração é conferida antes da leitura no próximo Timer executado e encerra o enlace sem reiniciar velocidade. Isso não garante reação Android em exatamente dois segundos; SystemTime acompanha ajustes do relógio do aparelho. O Clock envia `?` a cada 500 ms e lê um byte quando disponível. O heartbeat `?` não recebe eco nos sketches atuais. Sem comando pendente, uma falha exclusiva do caminho Arduino → app não é detectada por um prazo de respostas. O protocolo sem identificador não autentica mensagens nem distingue respostas antigas iguais. O retorno confirma o estado lógico; não mede movimento. Permissão negada, erro ou resposta inválida encerram o enlace e desabilitam os comandos. A perda observada pelo Clock desabilita os comandos e atualiza o estado; a variável `conectadoAntes` impede apagar a mensagem específica de erro no ciclo seguinte.

A geração segue o esquema de blocos consultado em `mit-cml/appinventor-sources`, commit `a760b517c436dd49c941c2ad946eb4d80f910fe4`. A revisão atual foi importada e reexportada no MIT com 224 blocos/IDs e Designer preservados. A referência histórica 0.2 tinha 572 blocos e metadados 1.0/code 1; o aplicativo atual é 0.3-experimental/code 3. As figuras distinguem mapas conceituais de duas capturas reais do editor MIT; nenhuma representa execução Android.

## Revisão 0.3 e pré-requisito obrigatório

**Este aplicativo com heartbeat exige `03_bancada_supervisionada.ino`.** O checkpoint 2 considera `?` inválido e apaga os LEDs; mantenha-o no exercício Bluetooth sem heartbeat. Nenhum sketch foi alterado.

O título de Screen1, AppName e a legenda Titulo são “Ventilador MbB”. Versão Android: `0.3-experimental`, código `3`, confirmados na reexportação MIT. O projeto gerado e reexportado possui dez componentes, dez eventos, cinco globais, cinco procedimentos e 224 blocos. As referências 0.2 e correção mínima ficam em `tools/ventilador/referencias/` no fonte.

Em 19/10/2026, importação, reexportação e compilação foram concluídas no MIT no novo projeto VentiladorMBB03. O APK foi posteriormente recebido do professor e passou na inspeção de integridade, manifesto e assinaturas. Não há teste Companion, Android ou hardware.

## Testes a registrar na bancada

Registre placa, variante HC-05, alimentação, Android, editor, programa e data. Teste estados 0–3, as 12 trocas entre estados diferentes, repetições, caractere inválido, reset, ausência de supervisão e reconexão iniciando em zero. Separe resultados de software, simulador e hardware.

## Pendências de potência

Não há circuito de 220 V neste pacote. Motor, seletor, capacitor, proteção térmica, relés, intertravamento independente, fonte, invólucro, cabos, desconexão e ensaios dependem do modelo real e do responsável competente. Não troque os LEDs por relés para extrapolar o protótipo.

## Continuação da validação

Consulte `VALIDACAO_MANUAL.md` neste diretório. Importação, APK e ensaio Android devem ser registrados separadamente. A importação foi concluída; o editor apresentou o resultado da compilação APK. O download pelo professor e a inspeção do binário foram concluídos. A execução Android permanece pendente. A exportação real fica entre as evidências do pacote.
