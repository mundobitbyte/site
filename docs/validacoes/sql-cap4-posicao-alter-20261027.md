# Capítulo 4 — posição do laboratório ALTER TABLE — 27/10/2026

Base: main 1ea8686534a100d62ebd76d5332dc60c70903314. Branch isolada: sql-alter-posicao-correta-20261027.

## Correção

O laboratório opcional estava antes de INSERT e orientava o aluno a avançar até SELECT e depois voltar. O trecho inteiro foi movido para imediatamente depois das consultas do Bloco 8 e antes de WHERE. Sua numeração agora é Bloco 8.1, com introdução contextualizada e sem instrução de retorno. Continua opcional e fechado por padrão.

A leitura segue criação das tabelas → INSERT → SELECT → ALTER TABLE (opcional) → WHERE. O identificador antigo do título foi mantido explicitamente para preservar links, favoritos, anotações e retomadas já existentes. Catálogo de pesquisa e índice de visitas diretas foram regenerados; neste último mudou somente a ordem do identificador preservado.

Nenhum comando SQL ou dado foi reescrito. Todos os blocos, exceto o deslocamento integral do laboratório, permanecem na ordem anterior. Os onze outros módulos HTML e as imagens/JS/CSS foram preservados.

## Validação

- MySQL Community Server 8.4.13 local e descartável, executando a ordem efetiva do HTML: 79 instruções, 77 sucessos e duas rejeições FK esperadas (1452). As cinco tabelas terminaram com 26/0/25/60/60 registros; hashes dos registros iguais antes dos laboratórios e após sua limpeza. Banco descartável removido e processo encerrado, sem acesso a produção.
- Chrome Headless 156 em 1440, 390, 360 e 320 pixels: 21 títulos h2, sete imagens/ampliações e 48 botões Copiar por largura (192 cópias exatas). Laboratório aberto, copiado e fechado; navegação nas 12 opções, pesquisa e âncoras, inclusive o endereço antigo de ALTER, funcionando. Sem overflow global/main ou exceções JavaScript.
- Nova posição inspecionada visualmente em capturas de desktop e celular.
- 11 conjuntos dos 99 Exercícios e interface de Meu estudo testados em desktop/celular. Meu estudo utilizou conta simulada em memória, chamadas externas bloqueadas e nenhuma gravação real no Firebase.
- 29 testes automatizados aprovados, catálogo e índice de visitas aprovados em --check, git diff --check aprovado.

Não houve execução do instalador/aplicativos Windows nem autenticação/persistência reais no Firebase. A captura de conexão continua a original já publicada; não foi alterada nesta correção de posição.
