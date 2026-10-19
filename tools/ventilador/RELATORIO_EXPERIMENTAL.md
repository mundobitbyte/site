# Atualização para publicação didática — 19/10/2026

**Mudança de estado:** o professor forneceu o APK após o relatório histórico abaixo. O arquivo de hash `8c7a2fcb243f30e547fc2cf8fe67f79b87f469237e14dce45f4ea06768323494` foi inspecionado, tem assinaturas v1/v2/v3 válidas e versão 0.3-experimental/code 3. A pendência de obtenção/inspeção do APK está encerrada. Instalação Android, Companion e ensaios físicos continuam pendentes.

O professor também autorizou levar o conteúdo até a publicação no site oficial. Restrições históricas de publicação abaixo descrevem a etapa anterior, não o estado desta autorização. Firmware, AIA e blocos foram preservados. O conteúdo publicado permanece experimental, limitado a LEDs em baixa tensão.

---

# Ventilador Bluetooth MbB — conclusão da revisão 0.3.1

Professor Ronaldo · 19/10/2026 · baixa tensão e LEDs

A revisão local foi concluída nas condições disponíveis. Corrigidos os textos que divergiam dos blocos, a ordem de construção e a identificação de versão. O aplicativo continua **0.3-experimental/code 3**, com 224 blocos; firmware, AIA, XML e Designer não foram alterados. A entrega 0.3 recebida e sua referência 0.2 foram preservadas. Este encerramento documental não equivale à validação física do sistema.

## O que foi corrigido

1. A aula agora ensina variáveis globais e os cinco procedimentos antes de exigir sua chamada nos eventos. Explica a diferença entre entrada local e estado global.
2. Velocidade1/2/3 chamam `EnviarComando` com o texto correspondente; o aluno não é orientado a duplicar `SendText` e a preparação da espera nesses cliques. O envio direto de `0` fica explicitamente restrito ao reenvio durante uma espera por `0` ainda válida.
3. Um exemplo 1000 → 3000 ms mostra por que repetir Desligar em 1400/1800 ms não renova o prazo. O primeiro Desligar durante espera por velocidade mantém sua prioridade e inicia sua própria espera.
4. Explicadas a lista vazia no início de BeforePicking, a ordem de encerramento/conexão, o handshake, a nova verificação de conexão no Timer e a preservação de mensagens específicas após erro.
5. O README diferencia explicitamente os metadados históricos 1.0/code 1 da exportação atual 0.3-experimental/code 3.
6. O roteiro manual separa os resultados concluídos das evidências ainda necessárias. O LEIA-ME ensina executar testes na fonte recuperada, pois a prévia é sanitizada.
7. A nova entrega tem comprovante externo de tamanho/hash e validação do ZIP. A ausência do comprovante citado na entrega 0.3 não foi reescrita como se ele tivesse sido recebido.

A revisão não exigiu alterar a lógica aprovada ou redesenhar componentes não identificados. Menus, navegação, chaves de checklist/progresso e recursos globais foram preservados. O catálogo foi regenerado apenas para acompanhar os textos das duas páginas afetadas pelo índice de busca.

## Verificações executadas nesta continuação

| Verificação | Resultado | Limite |
|---|---|---|
| Pacote 0.3 recebido | 49.229.616 bytes, 2.113 entradas, CRC/SHA/inventário exatos | Integridade dos bytes recebidos, não aprovação física |
| Node: Meu MbB, percurso, portátil e empacotamento | 40 aprovados, 0 falhas, 0 ignorados | Fonte recuperada do bundle; DOM emulado |
| Casos dirigidos do XML | Aprovados: prioridade, prazo, erro de envio e resposta tardia | Interpretador estrutural, não runtime Android |
| Correção mínima × aplicativo refatorado | 20.000 passos equivalentes | Comparação determinista, não 20 mil testes Android |
| AIA reexportado pelo MIT | 224 blocos/IDs e árvore funcional preservados; dez componentes, dez eventos, cinco globais e cinco procedimentos | Comparação de arquivo real histórico, sem nova importação |
| Metadados atuais | Ventilador MbB; 0.3-experimental/code 3 | Identificação dos arquivos atuais |
| Sketches e arquivos do app | Sete arquivos byte a byte iguais à 0.3 | Hashes em evidências |
| Compilação Uno: checkpoint 1 | 1.884 bytes de programa, 189 bytes de RAM global | Compilação efetiva nesta continuação; sem gravação em placa |
| Compilação Uno: checkpoint 2 | 2.324 bytes de programa, 131 bytes de RAM global | Idem |
| Compilação Uno: checkpoint 3 | 2.552 bytes de programa, 135 bytes de RAM global | Idem |
| Firmware 03 em host | 16 combinações, cada escrita GPIO, inválido, timeout, mensagem atrasada, CR/LF, wrap, loop e reset aprovados | Serial/GPIO/tempo modelados |
| Catálogo e visitas --check | Aprovados | Sem conexão ao Firebase real |
| Geração do material | Código visível idêntico aos .ino; links locais, IDs e recursos aprovados | Não comprova layout |

Os logs estão em `evidencias/revisao-031/`, também disponíveis na fonte em `tools/ventilador/evidencias-031/`. A prévia portátil contém o material atualizado e os downloads incorporados. A versão do material 0.3.1 não altera a versão interna do app 0.3.

## Tentativa real no MIT nesta continuação

O projeto existente `VentiladorMBB03` abriu no Designer, mostrando os componentes e o título esperado. Foi acionado Compilar → Android App (.apk); a interface avançou para compilação e mostrou novamente a janela de aplicativo Android com link de download. Não foram editados o projeto, seus blocos ou outros projetos da conta.

O download pelo clique foi cancelado. A segunda transferência normal pelo link excedeu 25 segundos. Nenhum caminho de APK foi retornado. A causa do cancelamento/timeout não foi demonstrada; não atribuir a antivírus, bloqueio do MIT ou defeito do app sem evidência. Não houve contorno de restrições. **Não há APK anexado, inspecionado, instalado ou testado.** A nova tentativa fica registrada em `tentativa-mit-031.json`; as capturas da compilação anterior permanecem identificadas como históricas.

## Investigação adicional do download, autorizada pelo professor

Após autorização expressa, foi consultada a documentação de diagnóstico do navegador. A abertura do histórico de downloads em `chrome://downloads/` foi rejeitada pela política do ambiente: somente protocolos HTTP/HTTPS estão permitidos. Não houve acesso a esse histórico nem tentativa de contornar a restrição. A API de mensagens da página MIT retornou lista vazia para erros/avisos. O link de download continuava presente na janela da compilação.

Isso confirma a limitação para investigar o cancelamento no histórico do navegador; **não comprova que a mesma política tenha causado a falha do APK**. Não apareceu pedido de autorização pendente na página MIT. A causa raiz do cancelamento e do timeout continua indeterminada com as evidências acessíveis. A autorização do professor permite prosseguir nas ações normais, mas não altera as restrições técnicas deste navegador gerenciado.

Para isolar a falha e concluir a inspeção do binário, o professor pode abrir o projeto em seu próprio navegador MIT, compilar e baixar o APK. Se obtiver o arquivo, pode anexá-lo para conferência de hash, manifesto e assinatura. Se falhar também, registrar a mensagem exata ou captura sem dados privados. Esse procedimento é independente da sessão deste navegador e não implica que as sessões sejam compartilhadas. Instalação e testes Android permanecem uma etapa separada.

## Parecer didático e técnico

O percurso de oito etapas progride do comando aos LEDs, ao transporte, ao app e aos limites da potência. Mantém objetivos, conhecimentos prévios, práticas e checkpoints. Na aula de App Inventor, a ordem corrigida permite montar os procedimentos antes de empregá-los; o caminho de Desligar e a comparação de prazos estão explícitos. As capturas reais existentes ilustram Designer e um evento; não substituem a inspeção de todos os blocos no editor. A comparação estrutural e os testes não constituem avaliação de aprendizagem com alunos.

O app com heartbeat exige **03_bancada_supervisionada.ino**. O checkpoint 2 considera `?` inválido e apaga os LEDs; continua preservado para o exercício sem heartbeat. Confirmação Bluetooth significa estado lógico, sem sensor de rotação ou dos contatos.

Limites mantidos: protocolo sem identificador aceita resposta antiga igual como atual; reenvios rápidos de 0 podem acumular retornos; o app lê no máximo um byte por ciclo; heartbeat sem eco não detecta sozinho falha exclusiva do retorno quando não há comando pendente; SystemTime é ajustável e Timer depende do agendamento Android. Essas limitações estão documentadas e não justificam apresentar o sistema como proteção de potência. Não houve mudança unilateral do protocolo.

## Pendências concretas

- Download e inspeção do APK, instalação e execução em Android e Companion.
- Permissões, Bluetooth, pausas, respostas atrasadas e reconexão no dispositivo real.
- Identificação/documentação de HC-05, alimentação e adaptação de níveis; testes físicos da bancada e dos LEDs.
- Avaliação do site em desktop, celular, paisagem e modo desktop do celular. O ambiente gerenciado disponibiliza navegador para o MIT, mas não a habilidade control-browser exigida pelo fluxo Sites para prévia local. Por essa orientação, não foi iniciado servidor nem improvisada rota de controle; DOM emulado não foi declarado como QA visual.
- Modelo do ventilador, circuito de velocidades, relés/intertravamento, dimensionamento, falhas, inspeção e liberação profissional antes de qualquer 220 V.

O roteiro manual contém os passos, resultados esperados e registro mínimo. Estas pendências não podem ser encerradas por simulação ou por marcar um checklist.

## Recuperação e preservação

Trabalho na cópia `revisao-031`, branch local `feature/ventilador-revisao-031`, a partir de `80b5c2154f0a7936c82c28c15ef8cf00e9d7bf53`. O estado final está em `ESTADO_DESENVOLVIMENTO.json`. Usar bundle **ou** patch completo contra a base oficial `f4334477517699db0ecbdbda370af1a833cfbf0e`, em cópia limpa e branch nova. Não aplicar os dois nem aplicar o patch sobre 0.2/0.3. A pasta `previa-local` foi sanitizada e não é fonte de produção.

O ZIP 0.3 original continua preservado; os documentos/manifesto e artefatos de recuperação anteriores ficam em `referencias/revisao-03`, e a referência integral 0.2 permanece em `referencias/revisao-02`. Não foi feita alteração no site oficial, main, repositório da reforma ou Firebase; não houve push, PR, merge ou publicação.

**Resultado: revisão local e documental concluída; validação de campo e publicação permanecem pendentes.**
