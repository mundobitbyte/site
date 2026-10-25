# Ensaio técnico de prontidão — Capítulo 2

Esta pasta contém provas em cópias temporárias, dados fictícios e servidores
de loopback. Não contém páginas didáticas publicadas. Não modifica Web I,
Web II, Capítulo 1, TypeScript Essencial, catálogo, autenticação ou produção.

O preparar.py extrai os downloads existentes e recompõe cinco estados do
cliente. Exporta um caderno com os blocos exatos. A segunda reconstrução lê
esses blocos em outra extração limpa e instala dependências novamente.
O teste verifica compilação em cada conquista e preservação dos arquivos.

O testes.mjs distingue transporte HTTP controlado, PHP real e DOM simulado.
DOM simulado não comprova renderização, navegação por teclado, foco nem leitor
de tela. Windows, Laragon e a operação do VS Code no laboratório precisam de
homologação própria. Os exemplos ainda não são o capítulo público completo.

O servidor CLI do ensaio usa -d opcache.enable_cli=0, somente nesse processo.
Isso evita que código PHP alterado na prática fique temporariamente em cache.
O primeiro ensaio encontrou três falhas com esse cache ativo; o pipeline de
logs também precisou passar a propagar corretamente o código de falha.

O regressao.py aplica a evolução a outra cópia e reutiliza o cenário real de
SQLite, mensagem fictícia e login/painel do Capítulo 1.

Execução no ambiente com Node 24, npm e PHP 8.5.12:

```sh
python3 tests/web3/cap2-prontidao/preparar.py /pasta/temporaria/ensaio
MBB_CAP2_BASE=/pasta/temporaria/ensaio MBB_EXIGIR_PHP=1 node --test tests/web3/cap2-prontidao/testes.mjs
python3 tests/web3/cap2-prontidao/preparar.py /pasta/temporaria/limpa --caderno /pasta/temporaria/ensaio/Caderno_Reconstrucao_Tecnica.md
python3 tests/web3/cap2-prontidao/regressao.py /pasta/temporaria/ensaio
```

Os caminhos são exemplos de execução do autor. O aluno receberá instruções
adequadas ao sistema e ao local de sua cópia, com explicação dos terminais.
Não há rotas públicas de simulação, credenciais reais ou contratos de serviço.
