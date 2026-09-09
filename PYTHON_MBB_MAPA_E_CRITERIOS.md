# Python — Mapa e Critérios Canônicos MbB

## 1. Função deste documento

Este arquivo é a fonte de verdade editorial, pedagógica e técnica da área Python do Mundo bit Byte. A implementação deve ser conferida contra este mapa antes de cada novo conjunto e o estado real deve ser atualizado ao fim de cada fase.

Princípio central:

> aprender, consultar e especializar-se são usos diferentes e precisam de caminhos diferentes, ligados entre si.

## 2. Estado inicial auditado

- Data da auditoria: 09/09/2026.
- Branch consultada: `main`.
- SHA inicial: `c08e0272e815aeb23d3419cb0bbae9c1eddefeec`.
- Último commit inicial: `Aprimora autonomia pedagógica em produtividade`.
- `HEAD` local e `origin/main` estavam iguais antes da primeira alteração.
- URL pública preservada: `pages/python.html`.
- A home já possuía cartão direto para Python.
- O sitemap já continha a URL pública de Python.
- O portal `pages/programacao.html` já possuía uma trilha interna de transferência de VisuAlg para Python.
- Existe uma área especializada e independente de Backend e APIs com Python e FastAPI em `pages/backend-fastapi.html`.

## 3. Inventário inicial do Python existente

### Arquivos diretamente responsáveis

- `pages/python.html`: 16 linhas; casca da página; título e descrição voltados a “Python para iniciantes com IDLE”.
- `css/python.css`: 96 linhas; layout de duas colunas, navegação, painéis de código/IDLE, teoria, fluxogramas e exercícios; contém correções acumuladas de cabeçalho e mobile.
- `js/python.js`: 20 etapas em um único arquivo de aproximadamente 89 KiB.

### Conteúdo inicial encontrado

1. Lógica e algoritmos.
2. Fluxogramas com símbolos e três diagramas SVG.
3. Primeiro programa.
4. Comentários.
5. Variáveis e quatro tipos básicos.
6. Entrada com `input()`.
7. Conversões.
8. Operadores aritméticos.
9. Operadores relacionais e lógicos.
10. `if`/`else`.
11. `if`/`elif`/`else`.
12. `while`.
13. `for` e `range()`.
14. Listas.
15. Listas de listas apresentadas como matrizes.
16. Funções sem retorno explícito.
17. Funções com retorno.
18. Tratamento inicial de `ValueError`.
19. Síntese breve sobre IDLE, erros, modularização, Git, boas práticas e programação em par.
20. Área 99 com 170 exercícios, distribuídos em fundamentos, decisão, repetição, listas, listas de listas, funções e desafios; seis exemplos resolvidos.

### Integrações encontradas

- `index.html`: cartão direto para `pages/python.html`.
- `pages/programacao.html` + `js/programacao.js`: transferência conceitual VisuAlg → Python, confiabilidade, estruturas, exceções, depuração, pacotes, objetos, testes e desktop.
- `pages/backend-fastapi.html`: curso próprio, já modularizado, de Backend/API/FastAPI.
- `pages/ia/fundamentos.html`: exemplo de diagnóstico de `FileNotFoundError` em Python/VS Code.
- `sitemap.xml`: URL de Python já publicada.

## 4. Classificação do legado

### Preservar

- URL pública, canonical, presença na home e no sitemap.
- Conhecimento válido sobre `print`, comentários, valores, variáveis, tipos, `input`, conversões, operadores, decisões, repetições, listas, funções e `ValueError`.
- Os 170 exercícios e os seis exemplos resolvidos como acervo de prática.
- Diagramas SVG de sequência, decisão e repetição, reposicionados como revisão/ponte para o módulo Programação.
- Botão Copiar, resultado esperado, navegação lateral/horizontal e identidade cromática MbB.
- IDLE como alternativa simples.

### Melhorar

- Contextualização: exemplos isolados passam a alimentar um sistema progressivo de atendimento e patrimônio escolar.
- Autonomia: cada aula relevante informa pré-requisitos, pasta/arquivo, execução, resultado, interpretação e recuperação.
- Erros: passam a ser lidos com o ciclo previsão → execução → evidência → hipótese → correção → reteste.
- Terminologia: `lista de listas` não será apresentada como matriz matemática universal; será explicada como uma representação possível.
- Funções: “função sem retorno” será descrita com precisão — sem `return` explícito, Python retorna `None`.
- Mobile, foco, contraste, semântica e navegação por hash.

### Mover

- Lógica, algoritmo e fluxograma deixam de ocupar o início obrigatório de quem já veio de Programação/VisuAlg; permanecem em “Comece aqui” como ponte revisável.
- Catálogos de sintaxe, built-ins, exceções e módulos saem da trilha progressiva e passam para Referência/Biblioteca padrão.
- Backend/FastAPI detalhado permanece no módulo especializado, acessado por ponte.

### Aprofundar

- Strings, coleções, funções, módulos, arquivos, CSV/JSON, exceções, orientação a objetos, iteráveis, generators, decorators, typing, qualidade, testes, ambiente profissional e concorrência.
- Biblioteca padrão organizada por finalidade.
- Critérios para seleção de bibliotecas externas.
- Projetos integradores e trilhas de aplicação.

### Substituir somente com justificativa

- A centralidade do IDLE é substituída porque o percurso novo exige terminal, múltiplos arquivos, depurador, ambientes virtuais, dependências, testes e Git. O IDLE continua disponível como alternativa.
- A página concentrada em um único array/arquivo é substituída por módulos de conteúdo e um núcleo de navegação, porque busca, filtros e manutenção não escalam com o modelo antigo.
- O título “Apostila Interativa — Python para Iniciantes com IDLE” é substituído por uma descrição compatível com aprendizagem, projetos e consulta.

## 5. Diagnóstico do modelo inicial

### Pontos fortes

- Começo acessível.
- Exemplos executáveis curtos.
- Resultados visíveis.
- Boa base visual de código, saída, teoria e exercício.
- Cobertura inicial coerente até funções e exceções.
- Grande acervo de exercícios já aprovado.

### Lacunas principais

- Não existe instalação guiada antes do primeiro arquivo.
- O aluno é mandado a usar IDLE, arquivo e execução sem um roteiro autossuficiente de preparação.
- O contexto muda a cada aula e quase nunca produz registros reutilizados depois.
- Conteúdo amplo demais para um único arquivo e, ao mesmo tempo, insuficiente como referência.
- Não há separação entre aprender, consultar e escolher uma área de aplicação.
- Não cobre strings com profundidade, tuplas, conjuntos, dicionários, cópia/mutabilidade, módulos próprios, arquivos, CSV, JSON, caminhos, POO completa, typing, testes, logging, ambiente virtual ou concorrência.
- Não há busca global, filtros, “onde aprender”, “veja também”, nível ou pré-requisitos por item.
- O passo “matrizes” salta cedo para listas aninhadas sem construir a necessidade.
- O tratamento de erro aparece como proteção imediata, com pouca leitura de traceback e sem separar erro de sintaxe, execução e lógica.
- Os 170 exercícios repetem exercícios isolados mais do que produtos progressivos e contêm termos herdados do VisuAlg em pontos que pedem linguagem Python mais precisa.

## 6. Fronteiras com outras áreas MbB

| Área | Python ensina | A área especializada aprofunda |
|---|---|---|
| Fundamentos da Informática | arquivo `.py`, pasta, terminal e caminho necessários ao trabalho | sistema operacional, arquivos e organização digital em amplitude |
| Programação de Computadores | aplicação completa dos conceitos em Python | lógica, algoritmo, pseudocódigo, fluxograma e paradigmas em visão geral |
| VisuAlg | ponte de sintaxe e transferência | primeiro contato estruturado com algoritmos |
| Git/GitHub | quando iniciar o repositório, `.gitignore` e ponto de integração | comandos, histórico, branches, remotos e colaboração |
| Banco de Dados | SQLite, parâmetros, CRUD e uso pelo programa | modelagem, normalização, SQL e administração |
| Programação Web | papel do backend e consumo/produção de JSON | HTML, CSS, JavaScript, PHP e construção Web completa |
| Backend/FastAPI | preparação e ponte | servidor, HTTP, APIs, validação, persistência, autenticação, testes e implantação |
| Inteligência Artificial | Python, dados, ambiente e bibliotecas necessários | fundamentos, uso responsável e projetos específicos de IA |
| React Native/App Inventor | comparação honesta com mobile em Python | caminhos predominantes e didáticos próprios para mobile |
| Infraestrutura | variáveis de ambiente, processo e execução necessários ao projeto | servidores, redes, Linux, serviços e implantação em profundidade |

## 7. Versão e ferramentas adotadas

### Base verificada em 09/09/2026

- Python estável adotado: **Python 3.14.7**.
- Python 3.15.0rc2 é pré-lançamento e não é a base do curso.
- Fonte de versão: `https://www.python.org/downloads/`.
- Referência da biblioteca: `https://docs.python.org/3/library/`.
- Referência da linguagem: `https://docs.python.org/3/reference/`.

### Caminho principal

- Python oficial.
- Visual Studio Code.
- Extensão Python publicada pela Microsoft.
- Terminal integrado.
- Depurador oferecido pelo ecossistema oficial da extensão.
- `venv` da biblioteca padrão.
- `pip` acionado como `python -m pip` ou `py -m pip` para reduzir ambiguidade de interpretador.

### Alternativas

- IDLE: alternativa local simples e ponte para quem já o utiliza.
- Ambiente online: somente para primeiras experiências sem dependências, arquivos persistentes ou recursos do sistema; limitações devem ser informadas antes do uso.

### Regra de atualização

Não gravar na interface uma promessa de “última versão” sem data. Exibir “base verificada em 09/09/2026” e direcionar à página oficial para conferência posterior.

## 8. Arquitetura definitiva da área

### Entrada principal

`pages/python.html` continua sendo a única URL pública necessária. O estado interno usa hash navegável e compartilhável.

### Camadas técnicas

```text
pages/python.html
css/python.css
js/python/
  catalogo.js             fonte do portal, referências e trilhas
  trilha-01-fundamentos.js
  trilha-02-controle.js
  trilha-03-colecoes.js
  trilha-04-funcoes.js
  trilha-05-arquivos.js
  trilha-06-objetos.js
  trilha-07-qualidade.js
  trilha-08-avancado.js
  acervo-99.js            cópia isolada dos 170 exercícios preservados
  core.js                 navegação, busca, filtros, cópia e hashes
js/python.js              fonte histórica preservada; não carregada pelo novo portal
```

Regras:

- conteúdo pedagógico vive nos arquivos de conteúdo;
- `core.js` não corrige texto de aula em tempo de execução;
- IDs são estáveis, sem acentos e sem depender do título visível;
- links internos usam `#caminho/item`;
- código e comandos relevantes recebem botão Copiar;
- referências externas abrem em nova aba e identificam que saem do MbB;
- falha em um arquivo de conteúdo deve gerar diagnóstico legível, não tela vazia.

## 9. Grandes caminhos de navegação

1. **Comece aqui** — diagnóstico, escolha de entrada, instalação e primeiro arquivo.
2. **Aprender Python** — sequência progressiva completa.
3. **Referência da linguagem** — busca por sintaxe, built-ins, métodos, exceções e recursos.
4. **Biblioteca padrão** — módulos agrupados por finalidade.
5. **Aplicações e projetos** — trilhas especializadas e seus pré-requisitos.
6. **99 — Desafios e projetos** — acervo preservado, desafios de transferência e integradores.

## 10. Mapa de pré-requisitos

```text
Comece aqui
  → valores, saída, variáveis e entrada
  → expressões e texto
  → decisões
  → repetições
  → coleções
  → funções
  → módulos
  → caminhos e arquivos
  → CSV e JSON
  → exceções e diagnóstico
  → classes e composição
  → qualidade, testes e Git
  → projeto integrador principal
  → avançado e concorrência
  → trilhas de aplicação
```

Dependências obrigatórias:

- `import` antes de `from ... import ...`;
- módulo antes de pacote; pacote antes de `pip`;
- pasta/terminal antes de `venv`;
- função antes de callback/decorator;
- coleção e iteração antes de comprehension/generator;
- exceção antes de contexto personalizado;
- classe/instância antes de herança/polimorfismo;
- função síncrona, espera e tarefa antes de `async`/`await`;
- HTTP/JSON antes de Requests/HTTPX/FastAPI;
- arquivo/tabular antes de pandas;
- evento e loop antes de Pygame;
- modelagem relacional como ponte antes de ORM.

## 11. Progressão da trilha principal

### Arco 1 — Preparar e executar

0. Escolha seu ponto de entrada.
1. Instalar Python e VS Code.
2. Criar a pasta e o primeiro `.py`.
3. Executar pelo botão e pelo terminal.
4. Ler o primeiro erro real.

### Arco 2 — Registrar um atendimento

5. Valores, `print()` e comentários úteis.
6. Variáveis, tipos e nomes.
7. `input()`, conversões e f-strings.
8. Operadores, expressões e precedência.
9. Strings: índice, slicing, busca, limpeza e substituição.

### Arco 3 — Decidir e repetir

10. Comparações, booleanos e `if`.
11. `elif`, operadores lógicos e validação de regra.
12. `match` somente quando várias opções discretas justificarem.
13. `while`, estado e condição de parada.
14. `for`, `range`, contadores e acumuladores.
15. `break`, `continue` e laços aninhados com limites explícitos.

### Arco 4 — Representar vários registros

16. Lista pela falha de `item1`, `item2`, `item3`.
17. Índice, slicing, métodos, iteração, ordenação e cópia.
18. Tuplas para registros imutáveis simples.
19. Conjuntos para unicidade e operações de grupo.
20. Dicionários para registros nomeados.
21. Coleções aninhadas e comprehensions depois do equivalente expandido.

### Arco 5 — Dividir responsabilidades

22. Funções: entrada, processamento e retorno.
23. Parâmetros, argumentos, valores padrão e argumentos nomeados.
24. Escopo, responsabilidade e funções puras quando apropriado.
25. `*args` e `**kwargs` por necessidade real.
26. Módulos próprios, imports, `__name__` e pacotes.

### Arco 6 — Fazer os dados sobreviverem

27. Caminho, diretório de trabalho e `pathlib`.
28. Texto e `with`.
29. CSV.
30. JSON.
31. Codificação e erros de arquivo.
32. SQLite parametrizado e ponte para Banco de Dados.

### Arco 7 — Tornar o sistema confiável

33. Sintaxe, execução e lógica.
34. Traceback e hipótese de diagnóstico.
35. `try`, `except`, `else`, `finally` e `raise`.
36. Logging.
37. Debugger, breakpoint, passo a passo, variáveis e pilha.

### Arco 8 — Modelar e organizar

38. Classe, instância, atributo, método e `__init__`.
39. Encapsulamento por convenção, propriedades e invariantes.
40. Composição antes de herança.
41. Herança/polimorfismo apenas onde substituição é real.
42. Métodos especiais e `dataclass`.

### Arco 9 — Qualidade profissional

43. Legibilidade, PEP 8, docstrings e refatoração.
44. Testes com `unittest`.
45. pytest depois da base nativa.
46. `venv`, `pip`, dependências e arquivo de requisitos.
47. Configuração, variáveis de ambiente e segredos fora do código.
48. Estrutura de projeto e ponte para Git/GitHub.
49. Projeto integrador “Central de Atendimentos Horizonte”.

### Arco 10 — Aprofundar

50. Iteráveis, iteradores e generators.
51. Unpacking, lambdas e funções de ordem superior no contexto correto.
52. Closures e decorators.
53. Context managers.
54. Type hints e protocolos relevantes.
55. Processos, threads e tarefas assíncronas.
56. `threading`, `multiprocessing`, `concurrent.futures` e `asyncio` por tipo de trabalho.

## 12. Projeto contínuo e integrador principal

Contexto: a Escola Horizonte precisa registrar solicitações de manutenção e empréstimos de equipamentos sem depender de anotações soltas.

Registros que reaparecem:

- equipamento identificado;
- pessoa e função solicitante;
- descrição e prioridade;
- estado do atendimento;
- evidência/observação;
- data e histórico;
- decisão tomada;
- resultado do teste;
- arquivo produzido.

Evolução:

1. uma mensagem;
2. um atendimento em variáveis;
3. validação da prioridade;
4. vários atendimentos;
5. funções;
6. módulos;
7. JSON/CSV;
8. exceções;
9. objetos;
10. testes;
11. configuração;
12. versão integradora em linha de comando.

O projeto final da trilha principal deve usar somente conceitos ensinados até ali: entrada, validação, funções, coleções, persistência, módulos, exceções, testes, organização e documentação.

## 13. Referência da linguagem

### Famílias

- sintaxe e literais;
- palavras-chave;
- operadores;
- tipos nativos e métodos essenciais;
- funções embutidas;
- estruturas de controle;
- funções, parâmetros e escopo;
- classes e protocolos;
- imports;
- comprehensions;
- iteradores/generators;
- decorators/context managers;
- typing;
- async;
- exceções nativas.

### Ficha padrão

- nome;
- finalidade;
- sintaxe;
- exemplo mínimo;
- resultado;
- erro comum;
- versão quando relevante;
- onde aprender;
- veja também;
- link oficial.

A referência pode antecipar um assunto. A trilha nunca depende de uma ficha ainda não ensinada.

## 14. Biblioteca padrão

Organização validada contra a documentação do Python 3.14:

- **sistema e arquivos:** `pathlib`, `os`, `sys`, `shutil`, `tempfile`, `subprocess`, `glob`, `fnmatch`;
- **dados e formatos:** `json`, `csv`, `sqlite3`, `configparser`, `tomllib`, `pickle` com alerta de segurança;
- **matemática e números:** `math`, `statistics`, `decimal`, `fractions`, `random`, `secrets`;
- **datas:** `datetime`, `time`, `calendar`, `zoneinfo`;
- **estruturas e iteração:** `collections`, `itertools`, `functools`, `heapq`, `bisect`, `array`, `enum`;
- **texto:** `re`, `string`, `textwrap`, `difflib`, `unicodedata`;
- **sistema e diagnóstico:** `logging`, `argparse`, `traceback`, `pdb`, `timeit`;
- **concorrência:** `threading`, `multiprocessing`, `concurrent.futures`, `asyncio`, `queue`;
- **rede e Internet:** `urllib`, `http`, `email`, `ipaddress`, `socket` com limites de nível;
- **testes e qualidade:** `unittest`, `doctest`, `unittest.mock`;
- **empacotamento/compressão:** `zipfile`, `tarfile`, `compression` e módulos relacionados, observando mudanças da série 3.14.

Não afirmar que todo módulo está disponível em toda plataforma; marcar dependências de sistema e riscos.

## 15. Bibliotecas externas selecionadas

Seleção verificada em documentação oficial em 09/09/2026:

| Finalidade | Seleção | Decisão pedagógica |
|---|---|---|
| HTTP síncrono inicial | Requests | API simples e documentação madura |
| HTTP síncrono/assíncrono | HTTPX | entra quando async ou testes de API justificarem |
| API | FastAPI | encaminhar ao módulo Backend/FastAPI já existente |
| Web mínima | Flask | referência comparativa, não nova trilha duplicada |
| Web completa | Django | referência para aplicação full-stack estruturada |
| Dados numéricos | NumPy | somente após coleções e necessidade vetorizada |
| Dados tabulares | pandas | somente após CSV/dicionários e pergunta de análise |
| Visualização | Matplotlib | gráficos de análise verificáveis |
| Desktop inicial | Tkinter | biblioteca padrão e menor barreira de instalação |
| Desktop avançado | PySide6 | ligação oficial do Qt; após POO/eventos |
| Jogos | Pygame | loop/eventos/renderização construídos progressivamente |
| Planilhas | openpyxl | edição de arquivos XLSX quando a planilha for o artefato |
| Testes | pytest | após `unittest`, pela produtividade e ecossistema |
| Mobile experimental | Kivy e BeeWare/Briefcase | possibilidades reais, com limitações e empacotamento explícitos |

### Critério de escolha ensinado ao aluno

1. O problema realmente exige pacote externo?
2. A biblioteca resolve exatamente qual parte?
3. Há documentação oficial clara?
4. O projeto apresenta manutenção e lançamentos recentes?
5. A versão suporta o Python e o sistema usados?
6. A licença é compatível?
7. Há alertas de segurança ou dependências excessivas?
8. É possível testar em ambiente virtual isolado?
9. O custo de aprender/adotar compensa o benefício?

## 16. Trilhas de aplicação

| Trilha | Pré-requisitos | Produto principal |
|---|---|---|
| Automação segura | arquivos, caminhos, CSV/JSON, exceções | organizador que primeiro simula e registra mudanças |
| Desktop | funções, módulos, POO, eventos, persistência | Central Horizonte com formulário e SQLite |
| Web/API | funções, typing, JSON, HTTP, testes | ponte para o sistema FastAPI existente |
| Banco de Dados | funções, erros, SQL básico | CRUD SQLite parametrizado |
| Dados | coleções, CSV, funções e estatística básica | relatório de atendimentos com pandas/Matplotlib |
| Jogos | funções, objetos, eventos e estado | jogo completo pequeno com Pygame |
| Mobile | POO/eventos, ambiente e empacotamento | protótipo condicionado à ferramenta atual e ao SO |
| IA/ML | funções, dados, ambiente, testes | preparação e ponte para a área de IA |

Nenhuma trilha disponível deve ser apenas um cartão vazio. Quando ainda não houver laboratório completo, a interface deve declarar “mapa da trilha” e indicar o próximo conteúdo realmente disponível.

## 17. Estratégia visual

Cada visual responde a uma dificuldade observável:

| Visual | Função pedagógica |
|---|---|
| Mapa de entrada | escolher entre começar, continuar, consultar ou aplicar |
| Instalação/ambiente | localizar Python, extensão, interpretador e terminal |
| Arquivo → interpretador → saída | distinguir editor, arquivo e execução |
| Nome → valor/referência | formar o modelo inicial de variável sem afirmar uma “caixa” física literal |
| Entrada → função → retorno | compreender responsabilidade da função |
| Índice → elemento | localizar dados em sequências |
| Chave → valor | diferenciar dicionário de lista |
| Programa → módulo → recurso | explicar importação |
| Programa → caminho → arquivo | explicar diretório de trabalho e `pathlib` |
| Traceback anotado | localizar a última chamada e formular hipótese |
| Classe → instância | distinguir molde conceitual de objeto existente |
| Cliente → HTTP → servidor → JSON | preparar a ponte de API |
| Evento → função → estado → tela | preparar desktop/jogos |
| Tarefa → espera → outra tarefa → retomada | explicar async sem metáfora enganosa |

Regra: preferir CSS/SVG sem dependência externa; screenshot só quando a posição real na ferramenta for indispensável e exigir manutenção por versão.

## 18. Busca, filtros e acessibilidade

- Busca unificada por título, termo, finalidade e palavras relacionadas.
- Filtros por caminho, categoria e nível.
- Resultado mostra tipo, nível, pré-requisito e destino.
- Hash atualizável e compatível com voltar/avançar do navegador.
- Foco visível, botões reais, rótulos, `aria-live` sem anúncios excessivos e navegação por teclado.
- Layout de leitura sem rolagem horizontal; blocos de código podem rolar internamente.
- Menu lateral em telas grandes e barras compactas/empilhadas em telas pequenas.
- Respeito a `prefers-reduced-motion`.

## 19. Segurança

- Somente dados fictícios.
- Laboratórios escrevem dentro de pastas controladas do projeto.
- Automação começa por modo de simulação e nunca apaga em massa.
- SQL sempre parametrizado.
- Segredos fora do código; `.env` nunca versionado; exemplos usam `.env.example`.
- `pickle` é catalogado com alerta: não carregar dados não confiáveis.
- Requisições possuem timeout e validação de resposta no momento adequado.
- Serviços locais não são expostos na rede sem explicação.
- Pacotes são instalados em ambiente virtual e verificados em fonte oficial.

## 20. Critério de qualidade por aula

Uma aula só fica “concluída” quando responde:

1. Qual situação gerou a necessidade?
2. O aluno conhece todos os termos e símbolos exigidos?
3. Sabe onde criar pasta/arquivo?
4. Sabe exatamente como executar?
5. Há previsão antes do resultado quando isso produz aprendizagem?
6. O resultado esperado aparece no momento correto?
7. O aluno sabe interpretar divergência e retornar a um estado conhecido?
8. O contexto continua influenciando dados e decisões?
9. O conceito reaparece depois?
10. Existe atividade de transferência, não só reprodução?
11. O código foi executado na versão adotada?
12. O visual, se houver, ensina uma relação real?

## 21. Riscos e respostas

| Risco | Resposta |
|---|---|
| Enciclopédia sem caminho | separar trilha, referência e aplicações |
| Menu excessivo no celular | dois níveis no máximo e busca sempre disponível |
| Conceito usado antes | matriz explícita de pré-requisitos e auditoria “de onde saiu isso?” |
| Regressão dos 170 exercícios | preservar fonte e oferecer acesso ao acervo durante a migração |
| Duplicação com Programação/FastAPI/Git/BD/IA | criar pontes com escopo declarado |
| Informação de versão envelhecer | data de verificação + links oficiais |
| Código grande e frágil | módulos de conteúdo independentes + núcleo pequeno |
| Conteúdo superficial para “preencher” | estado honesto por trilha e publicação por conjuntos robustos |
| Dependência externa quebrar o site | HTML/CSS/JS locais; links externos apenas como aprofundamento |

## 22. Plano de migração sem regressão

1. Congelar inventário e SHA inicial neste mapa.
2. Criar a nova casca mantendo a mesma URL.
3. Adicionar arquivos modulares sem alterar outros módulos.
4. Reaproveitar conhecimento válido com nova contextualização.
5. Manter o acervo 99 acessível durante a migração.
6. Testar hashes, busca, cópia, teclado, mobile e desktop.
7. Executar exemplos Python automaticamente onde não houver entrada interativa/GUI/rede.
8. Conferir links locais e externos.
9. Alterar home/sitemap apenas se a nova arquitetura exigir; caso contrário, preservar.
10. Registrar no fim o estado real, limitações e SHA final.

## 23. Estado de implementação

Legenda: `não iniciado`, `em implementação`, `concluído`, `auditado`.

| Conjunto | Estado atual | Evidência |
|---|---|---|
| Auditoria e mapa | concluído | inventário, decisões, riscos e migração registrados |
| Portal/arquitetura | auditado | seis caminhos, hash, busca e filtros validados em 64 estados |
| Comece aqui | auditado | instalação, primeiro arquivo, execução e primeiro erro autossuficientes |
| Trilha principal | auditado | 40 aulas em dez arcos + projeto integrador executável |
| Referência | auditado | 102 fichas pesquisáveis com links “onde aprender” |
| Biblioteca padrão | auditado | 55 módulos por finalidade, com cautelas e fontes oficiais |
| Bibliotecas externas | auditado | 14 seleções curadas com momento de entrada e limites |
| Aplicações | auditado | seis percursos com produto disponível; mobile e IA identificados como mapas responsáveis |
| 99 | preservado e integrado | 170 exercícios, seis resolvidos e três projetos/transferências acessíveis |
| Auditoria global | concluída com ressalva | sintaxe, execução, navegação e regressão verificadas; renderização visual real ficou pendente por indisponibilidade do navegador de teste |

## 24. Fontes primárias adotadas

- Python: `https://www.python.org/downloads/`
- Tutorial oficial: `https://docs.python.org/3/tutorial/`
- Referência da linguagem: `https://docs.python.org/3/reference/`
- Biblioteca padrão: `https://docs.python.org/3/library/`
- Built-ins: `https://docs.python.org/3/library/functions.html`
- PEPs: `https://peps.python.org/`
- Packaging/PyPA: `https://packaging.python.org/`
- VS Code + Python: `https://code.visualstudio.com/docs/python/python-tutorial`
- Ambientes no VS Code: `https://code.visualstudio.com/docs/python/environments`
- Depuração no VS Code: `https://code.visualstudio.com/docs/python/debugging`
- Testes no VS Code: `https://code.visualstudio.com/docs/python/testing`
- Demais bibliotecas: documentação oficial ligada em cada ficha do catálogo.

## 25. Registro de implementação — 09/09/2026

### Entregue neste conjunto

- nova casca de `pages/python.html`, mantendo URL e canonical;
- CSS responsivo consolidado, sem a sequência anterior de correções sobrepostas;
- núcleo modular de hash, navegação, busca, filtros, cópia e renderização;
- 40 aulas em dez arcos progressivos;
- 102 fichas de referência, incluindo todas as funções embutidas listadas pela documentação adotada e grupos essenciais de sintaxe/métodos/exceções;
- 55 módulos/famílias da biblioteca padrão;
- 14 bibliotecas externas selecionadas por finalidade;
- oito trilhas de aplicação com pré-requisitos, produto, progressão e limites honestos;
- acervo anterior de 170 exercícios integralmente acessível;
- projeto completo `Central Horizonte` para download, com módulos, SQLite parametrizado, testes, README e `.gitignore`;
- projeto `Automação segura`, com simulação padrão, validação de conflitos, plano em JSON, aplicação explícita e testes;
- projeto desktop com Tkinter, separação entre interface, regras e persistência SQLite;
- projeto de dados com amostra fictícia, validação, agregação, CSV, gráfico e conclusão registrada;
- jogo `Manutenção 2D`, com motor independente da interface, colisão, pontuação, tempo, reinício e testes;
- quatro novos pacotes ZIP ligados diretamente às respectivas trilhas;
- migração isolada do acervo para `js/python/acervo-99.js`, sem alterar a fonte histórica `js/python.js`;
- correção, na cópia migrada, de termos herdados que tratavam listas como vetores/matrizes nativos e funções por uma falsa divisão “com/sem retorno”; os 170 enunciados foram mantidos;
- ponte do módulo Programação para a nova área;
- descrição do cartão Python na home atualizada sem alterar sua posição ou estrutura.

### Exemplos concretos de problemas resolvidos

- **Conceito antes do uso:** `pathlib` aparece somente depois de módulo/import e da necessidade de localizar arquivos; `venv` aparece somente quando pytest/pandas justificam pacote externo.
- **Contextualização superficial:** o atendimento NB-07 e a Central Horizonte geram dados, regras, funções, persistência, classes, testes e o produto integrador.
- **Resultado esperado ausente:** cada aula possui “O que observar” e cada bloco executável relevante mostra saída esperada no momento adequado.
- **Visual necessário ausente:** relações de execução, variável, função, coleção, importação, arquivo, traceback, objeto e async ganharam modelos visuais locais em CSS/HTML.
- **Código apresentado inteiro:** as aulas constroem em passos; o ZIP completo só aparece após o roteiro do projeto integrador.
- **Dependência implícita:** toda biblioteca externa declara pré-requisitos e momento de entrada; ambiente virtual e instalação são ensinados antes.

### Testes realmente executados

- `node --check` em `js/python.js`, `js/programacao.js` e todos os módulos novos: aprovado.
- compilação por AST de 92 blocos Python: nenhum erro de sintaxe; oito blocos de terminal/configuração foram excluídos corretamente.
- execução real de 25 exemplos representativos dos dez arcos: 25 resultados aprovados.
- `python -m unittest -v` no projeto Central Horizonte: quatro testes aprovados.
- fluxo real do projeto em diretório temporário: cadastrar → listar → concluir → fechar → reabrir → listar; persistência confirmada.
- projeto Automação segura: quatro testes aprovados; simulação preservou os nomes e aplicação explícita os normalizou sem exclusão.
- projeto desktop: três testes de regras e persistência aprovados; fechamento e reabertura do SQLite confirmados.
- projeto de dados: três testes aprovados; geração real de CSV, PNG e conclusão em diretório temporário confirmada.
- jogo 2D: quatro testes do motor aprovados, cobrindo limites, colisão, tempo e vitória.
- integridade dos cinco ZIPs por `unzip -t`: aprovada.
- simulação DOM com carregamento real de scripts: 64 estados navegados, zero erro JavaScript, zero link local quebrado, 40 aulas, 102 fichas, 55 módulos, 14 bibliotecas, oito trilhas e 170 exercícios confirmados.
- regressão de `index.html`, `pages/programacao.html` e `pages/python.html`: scripts carregados sem erro e links locais renderizados sem quebra.

### Limitações registradas

- o navegador Chromium não estava instalado; duas tentativas de baixar o binário de teste falharam por timeout/arquivo truncado. Portanto, não foi alegada captura visual real nem medição de overflow por layout engine neste conjunto;
- a execução automatizada ocorreu com Python 3.12.14, versão disponível no ambiente de auditoria; o conteúdo tem Python 3.14.7 como alvo estável verificado, mas não houve interpretador 3.14 local para uma segunda execução;
- a interface Tkinter e a janela Pygame precisam de execução gráfica local; suas regras foram testadas sem interface, mas as janelas não foram abertas neste ambiente;
- mobile e IA permanecem mapas responsáveis, com limites e ponte para áreas especializadas; não são apresentados como cursos completos nem como laboratórios validados;
- informações do ecossistema foram verificadas em 09/09/2026 e precisam de nova conferência antes de futuras atualizações de versão.
