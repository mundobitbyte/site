# Revisão MbB e avaliação do relato de conexão — 19/10/2026

## Escopo e fonte

Revisão do percurso de oito etapas, quatro aulas de apoio, seis SVG, mensagens do simulador, orientações de download e roteiro manual. Critérios do `MODO_MBB.md`: necessidade antes do conceito, voz docente, termos explicados, prática com resultado observável, continuidade e ampliação seletiva.

O texto editorial fica em `conteudo_mbb.py`; `gerar-paginas.py` mantém os marcadores de integração e lê os códigos diretamente dos `.ino`. Nomes de arquivos, programas e identificadores são preservados. A revisão não altera módulos ou conteúdos alheios ao projeto.

## Alterações de linguagem e apresentação

- “Bancada” passa a “montagem com LEDs”, “exercício” ou “teste”, conforme o contexto; “enlace”, “firmware” e “comutação” deixam de ser exigidos sem explicação. Identificadores de código, como EncerrarEnlace e o nome do arquivo 03_bancada_supervisionada.ino, permanecem exatos e são explicados.
- Removidos das aulas os relatos de importação, reexportação, branches, comparação de versões e execução de ferramentas. Registros históricos e evidências técnicas não foram reescritos.
- Explicados antes do uso protocolo, TX/RX, SPP, UART, variáveis globais, procedimentos e sinal de presença/heartbeat. Poucos destaques com função: ATENÇÃO, MBB APLICA e DESAFIO MBB.
- Tabelas de três colunas usam o visualizador global existente. Figuras conservam ampliação; texto, espaçamento e navegação são conferidos em larguras de computador e celular, incluindo paisagem.
- Orientações descrevem ação, local, resultado esperado e registro. Checklists conservam seus identificadores e o sentido dos itens já salvos.

## Relato de conexão no APK

O professor esclareceu que abriu o APK instalado, sem Arduino ou programa gravado no outro dispositivo. A lista de Bluetooth fecha depois da escolha; o app informa falta de conexão e não libera velocidades. Não foi relatado fechamento do processo do aplicativo.

O fluxo do AIA envia 0 ao conectar, mantém 1/2/3 bloqueados e aguarda 0 do Arduino. Sem resposta, encerra o enlace no primeiro Timer executado após o prazo. O caso dirigido de ausência da resposta inicial, inclusive no limite 1999/2000 ms do modelo, aprova esse comportamento. Sem o Arduino com o programa 3, esse teste não demonstra defeito nos botões nem funcionamento físico Bluetooth.

Correção nesta revisão: instrução pública explícita e acesso ao simulador para uso sem equipamento; não foi retirada a confirmação nem alterado o APK para permitir comandos sem resposta. Se houver falha com HC-05 e programa 3, registrar mensagem, Android, módulo e resultados separados para localizar a causa.

## Permissões: verificação de documentação e código

Conferidos BluetoothClient, BluetoothConnectionBase, Picker, SUtil e Form no código oficial MIT de referência `a760b517c436dd49c941c2ad946eb4d80f910fe4`, além da documentação oficial MIT/Android. AddressesAndNames pede permissões em tempo de execução e pode interromper a abertura atual da lista; a concessão não retoma os blocos que preencheriam Elements. Uma nova tentativa de Conectar pode ser necessária. A passagem de endereço + nome para Connect é aceita pelo componente, que extrai o endereço; não foi introduzida uma divisão de texto desnecessária.

Não foi confirmada uma falha de permissões no aparelho do professor. Não se atribui o relato a permissões, nível elétrico ou montagem sem evidência. Não houve ensaio Android nem conexão a HC-05 nesta revisão.

Referências: https://ai2.appinventor.mit.edu/reference/components/connectivity.html#BluetoothClient e https://developer.android.com/develop/connectivity/bluetooth/bt-permissions .

## Preservação e validação

APK, AIA, blocos/Designer e três programas permanecem byte a byte iguais à publicação anterior. APK SHA-256: `8c7a2fcb243f30e547fc2cf8fe67f79b87f469237e14dce45f4ea06768323494`.

IDs das cinco páginas e chaves dos checklists preservados; links internos do material revisto conferidos; catálogo e visitas regenerados mantendo IDs. O comparador MIT e os casos dirigidos de confirmação, prazo e Desligar continuam aprovados. Os testes Meu MbB, DOM, simulador e portátil devem permanecer aprovados. O PR registra os checks finais e o commit de publicação.

A fonte, os testes e os arquivos não comprovam funcionamento no Android nem segurança elétrica do ventilador. Permanecem necessários testes físicos com LEDs e avaliação profissional específica antes da etapa de 220 V.
