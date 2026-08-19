# Programação de Computadores — Mapa e Auditoria MbB

Base curricular usada: Plano de Curso 1177 — componente I.12 Programação de Computadores (120 h/a práticas).

## Decisões pedagógicas consolidadas

- Regra principal: **necessidade → ideia → nome técnico → sintaxe**.
- Modelo mental inicial: **Saber → Fazer → Responder**.
  - Saber: o que o sistema precisa receber/conhecer, vindo de usuário, sensor, arquivo, outro sistema etc.
  - Fazer: o que precisa transformar, calcular, comparar ou decidir internamente.
  - Responder: o que precisa externalizar para usuário, equipamento ou outro sistema.
- Jargão apresentado depois do significado: **entrada / processamento / saída** e **ler / processar / escrever**.
- Linguagens: **VisuAlg como ponte didática**, depois **Python para transferência de conceitos**.
- O aluno deve perceber que **conceito não é comando**.
- Estruturas devem aparecer porque o problema exige: Se/Senão, Escolha/Caso, Enquanto, Repita, Para, operadores lógicos, contador, acumulador, funções etc.
- Fluxogramas: somente três espaços de imagem, produzidos depois pelo professor:
  1. sequência;
  2. decisão;
  3. repetição.
- Bit/Byte: abordagem curta e recorrente, sem inventar tamanhos universais para tipos.
- Projeto integrador guiado: Cantina.
- Aplicação/transferência: Sistema de Estacionamento, sem enunciado dizendo quais comandos usar.
- Programação estruturada é praticada; orientação a eventos e objetos aparecem no final como identificação de paradigmas, sem aprofundamento artificial.
- Coleções, arquivos/persistência e exceções mais profundas ficam como **aprofundamentos**, não como núcleo obrigatório.
- Git/GitHub aplicado ao projeto será acrescentado em momento posterior, conforme decisão tomada; não foi forçado neste módulo agora.

## Cobertura do Plano de Curso

| Plano de curso | Onde aparece no módulo |
|---|---|
| Programação estruturada | VisuAlg inteiro, Python e sistema integrado |
| Programação orientada a eventos | Aplicar → Desktop e eventos |
| Programação orientada a objetos | Aplicar → Paradigmas, visão inicial |
| Lógica de programação | Pensar → problema, Saber/Fazer/Responder, algoritmo |
| Construção de algoritmos | Pensar → Algoritmo |
| Fluxogramas | Pensar → sequência; VisuAlg → decisão; VisuAlg → repetição |
| Pseudocódigos | Pensar → Algoritmo |
| Variáveis e constantes | VisuAlg → Dados e memória |
| Operadores aritméticos e expressões | VisuAlg → Processamento |
| Operadores relacionais | VisuAlg → Decisões |
| Operadores lógicos e expressões lógicas | VisuAlg → Decisões |
| Entrada, processamento e saída | Pensar → Saber/Fazer/Responder; reaparece em todo o módulo |
| Funções predefinidas | VisuAlg → Processamento; Python → Funções e bibliotecas |
| Estrutura sequencial | VisuAlg → Cantina executável |
| Estrutura condicional | VisuAlg → Decisões |
| Estruturas de repetição | VisuAlg → Repetições, incluindo Enquanto, Repita e Para |
| Ambiente de desenvolvimento | Pensar → Linguagem e ambiente; depuração em Python |
| Bibliotecas básicas | VisuAlg → Funções; Python → math/random e recursos prontos |
| Definição de comandos e elementos | VisuAlg e transferência para Python |
| Desenvolvimento de aplicações | Cantina integrada + Estacionamento + pequena aplicação desktop |
| Elaborar e preparar aplicação desktop para distribuição | Tkinter + distinção execução/compilação/empacotamento + PyInstaller como etapa opcional dependente do laboratório |
| Identificar paradigmas e plataformas | Pensar → Linguagem/plataforma/ambiente; Aplicar → Paradigmas |
| Interpretar algoritmos/fluxogramas/pseudocódigo | Exercícios de leitura previstos nas etapas; fluxogramas ligados ao mesmo problema |
| Propor soluções para problemas | Cantina, tarefas de transferência e projeto Estacionamento |
| Programas estruturados de baixa complexidade | Cantina integrada e projeto final |

## Bit e Byte — regra de precisão

- 1 byte = 8 bits.
- 16 bits = 2 bytes; 32 bits = 4 bytes; 64 bits = 8 bytes.
- Não afirmar que um tipo como `inteiro`, `real` ou `lógico` ocupa universalmente uma quantidade fixa de bits.
- Tamanho depende de linguagem, runtime, plataforma e implementação.
- Exemplo `2 → 00000010` é apenas uma representação binária didática em oito posições, não uma descrição do tamanho físico da variável no VisuAlg/Python.
- Retomar bit/Byte em memória e, opcionalmente, em texto/codificação e persistência.

## Auditoria de excessos

Evitar no núcleo:

- aula longa de símbolos de fluxograma;
- exemplos desconectados apenas para mostrar sintaxe;
- orientação a objetos aprofundada;
- listas/matrizes/arquivos tomando o lugar de fundamentos do plano;
- tratar empacotamento como se fosse compilação nativa; quando houver geração de executável, deixar claro que depende do ambiente e usar como fechamento opcional;
- tabelas de tamanhos de tipos apresentadas como regras universais;
- transformar Saber/Fazer/Responder em bordão obrigatório em todas as páginas.

## Arquivos criados para o módulo

- `pages/programacao.html`
- `css/programacao.css`
- `js/programacao.js`

## Integrações preservadas na base

- atualização mais recente do módulo Git/GitHub, incluindo a parte de comunidade;
- atualização do Arduino com acesso à revisão/exercícios e botão Salvar/Imprimir PDF;
- demais módulos e arquivos existentes preservados.
