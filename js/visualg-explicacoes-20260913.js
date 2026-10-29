(function () {
  if (typeof steps === 'undefined') return;

  const explicacoes = {
    3: `IDEIA PRINCIPAL
Um algoritmo no VisuAlg precisa de uma estrutura que indique onde ele começa, quais comandos serão executados e onde termina.

O QUE OBSERVAR
• algoritmo "Nome": identifica o programa.
• inicio: marca o começo dos comandos executáveis.
• fimalgoritmo: encerra o algoritmo.
• // comentário: registra uma explicação para quem lê o código e não é executado.

SINTAXE ESSENCIAL
algoritmo "Nome_Do_Algoritmo"
inicio
   comandos
fimalgoritmo

ERRO COMUM
Escrever comandos fora do bloco entre inicio e fimalgoritmo ou esquecer de fechar a estrutura.

ANTES DE AVANÇAR
Você consegue apontar, no código ao lado, onde o algoritmo começa a executar e onde termina?`,

    4: `IDEIA PRINCIPAL
Variáveis representam informações que o algoritmo precisa guardar e usar durante a execução. O tipo informa que espécie de dado pode ser armazenada.

O QUE OBSERVAR
• inteiro: números sem parte decimal.
• real: números com parte decimal.
• caractere: textos e caracteres.
• logico: verdadeiro ou falso.
• o valor de uma variável pode mudar ao longo do algoritmo.

SINTAXE ESSENCIAL
var
   nomeDaVariavel: tipo

EXEMPLOS DE VALORES
10        → inteiro
7.5       → real
"Ana"     → caractere
verdadeiro → logico

ERRO COMUM
Escolher um tipo incompatível com a informação que será armazenada. Exemplo: tentar guardar 7.5 em uma variável inteira.

ANTES DE AVANÇAR
Para guardar nome, idade, altura e situação de aprovação, qual tipo você escolheria para cada variável?`,

    5: `IDEIA PRINCIPAL
Um programa útil normalmente recebe dados, processa esses dados e apresenta uma resposta. No VisuAlg, leia recebe informações e escreva/escreval mostram informações.

O QUE OBSERVAR
• escreva mantém o cursor na mesma linha.
• escreval mostra o conteúdo e passa para a linha seguinte.
• leia coloca o valor digitado dentro de uma variável.

SINTAXE ESSENCIAL
escreva("Digite sua idade: ")
leia(idade)
escreval("Idade informada: ", idade)

BOA PRÁTICA
Antes de cada leia, mostre uma mensagem que deixe claro o que o usuário precisa digitar.

ERRO COMUM
Pedir um dado sem explicar o que deve ser informado ou tentar ler um valor incompatível com o tipo da variável.

ANTES DE AVANÇAR
No exemplo ao lado, identifique exatamente qual comando faz a entrada e quais comandos fazem a saída.`,

    6: `IDEIA PRINCIPAL
Operadores permitem transformar dados em resultados. Uma expressão pode calcular um valor, comparar valores ou combinar condições lógicas.

ARITMÉTICOS
+ soma | - subtração | * multiplicação | / divisão real
\\ divisão inteira | MOD resto | ^ potência

RELACIONAIS
> maior | < menor | >= maior ou igual | <= menor ou igual
= igual | <> diferente

LÓGICOS
e   → as duas condições precisam ser verdadeiras
ou  → pelo menos uma condição precisa ser verdadeira
nao → inverte o valor lógico

O QUE OBSERVAR
10 / 3 produz uma divisão real.
10 \\ 3 produz a parte inteira da divisão.
10 MOD 3 produz o resto da divisão.

BOA PRÁTICA
Use parênteses quando quiser deixar explícita a ordem dos cálculos. Em (a + b) * 2, a soma acontece primeiro.

ERRO COMUM
Confundir divisão inteira com resto ou escrever uma expressão sem pensar na precedência dos operadores.

ANTES DE AVANÇAR
Sem executar: qual será o resultado de 11 \\ 4 e de 11 MOD 4?`,

    7: `IDEIA PRINCIPAL
Uma expressão lógica sempre resulta em verdadeiro ou falso. Ela é a base das decisões e também controla muitas repetições.

O QUE OBSERVAR
• uma comparação simples já produz um valor lógico: idade >= 18.
• e exige que todas as condições ligadas sejam verdadeiras.
• ou exige que pelo menos uma seja verdadeira.
• nao inverte verdadeiro para falso e falso para verdadeiro.

EXEMPLO
(idade >= 18) e temCarteira
Só será verdadeiro quando as duas partes forem verdadeiras.

POR QUE USAR TABELA VERDADE
Ela permite prever o resultado de uma condição antes de executar o algoritmo e ajuda a descobrir erros de raciocínio.

ERRO COMUM
Ler uma condição composta muito depressa e imaginar o resultado em vez de avaliar cada parte separadamente.

ANTES DE AVANÇAR
Se idade >= 18 for verdadeiro e temCarteira for falso, qual será o resultado usando e? E usando ou?`,

    8: `IDEIA PRINCIPAL
Teste de mesa é uma execução manual do algoritmo. Você acompanha os valores das variáveis passo a passo antes de rodar o programa.

COMO FAZER
1. Liste as variáveis importantes.
2. Leia a primeira instrução.
3. Atualize apenas os valores alterados por ela.
4. Passe para a próxima instrução.
5. Continue até chegar à saída.
6. Só depois execute no VisuAlg e compare.

POR QUE ISSO IMPORTA
Nem todo erro é de sintaxe. Um algoritmo pode executar perfeitamente e ainda produzir um resultado errado porque a lógica está incorreta.

ERRO COMUM
Mudar várias linhas do código por tentativa e erro sem saber em qual passo o valor ficou incorreto.

ANTES DE AVANÇAR
Faça a conta manualmente para a <- 5, b <- 2 e c <- a * b + 3. Depois confira no VisuAlg.`,

    9: `IDEIA PRINCIPAL
Uma decisão muda o caminho do algoritmo conforme o resultado de uma condição.

TRÊS FORMAS IMPORTANTES
• simples: executa algo apenas quando a condição é verdadeira.
• composta: define um caminho para verdadeiro e outro para falso.
• encadeada: coloca uma nova decisão dentro de um dos caminhos para tratar três ou mais situações.

SINTAXE ESSENCIAL
se condicao entao
   comandos
senao
   comandos
fimse

O QUE OBSERVAR NO EXEMPLO
A ordem das condições importa. Primeiro é verificado se a nota é pelo menos 6. Somente quem não passou nesse teste chega à verificação de recuperação.

TESTE DE FRONTEIRA
Use valores exatamente nos limites e imediatamente antes deles: 3.9, 4, 5.9 e 6.

ERRO COMUM
Criar condições que deixam intervalos sem tratamento ou que se sobrepõem de forma inesperada.

ANTES DE AVANÇAR
Explique por que a nota 5 não chega ao caminho de aprovado e por que a nota 6 não chega ao caminho de recuperação.`,

    10: `IDEIA PRINCIPAL
escolha organiza situações em que uma mesma variável pode assumir várias opções conhecidas, como itens de menu, códigos ou categorias.

QUANDO USAR
Use escolha quando a decisão depende de comparar uma variável com valores discretos bem definidos.

SINTAXE ESSENCIAL
escolha variavel
   caso valor1
      comandos
   caso valor2
      comandos
   outrocaso
      comandos
fimescolha

O QUE OBSERVAR
• cada caso trata uma alternativa.
• outrocaso trata valores não previstos.
• a leitura costuma ficar mais clara do que uma longa sequência de se/senao.

ERRO COMUM
Usar escolha para condições por faixa, como nota >= 6. Para intervalos e comparações desse tipo, se costuma ser mais adequado.

ANTES DE AVANÇAR
Um menu com opções 1, 2, 3 e qualquer outro valor inválido combina melhor com se encadeado ou escolha? Por quê?`,

    11: `IDEIA PRINCIPAL
para repete um bloco quando já sabemos quantas vezes ele deve executar. Dentro do laço, podemos contar ocorrências e acumular valores.

CONCEITOS
• contador: registra quantas vezes algo aconteceu.
• acumulador: guarda um total que vai sendo atualizado.
• passo: define quanto a variável de controle aumenta ou diminui a cada repetição.

SINTAXE ESSENCIAL
para i de 1 ate 5 faca
   comandos
fimpara

COM PASSO
para i de 2 ate 20 passo 2 faca
   comandos
fimpara

O QUE OBSERVAR NO EXEMPLO
soma começa em 0 antes do laço. Em cada repetição, o novo valor é acrescentado ao total anterior.

ERRO COMUM
Esquecer de inicializar o acumulador antes do laço ou reiniciá-lo dentro da repetição.

ANTES DE AVANÇAR
Se você também quiser calcular a média dos cinco valores, em que momento a divisão deve acontecer: dentro ou depois do laço?`,

    17: `IDEIA PRINCIPAL
Nem sempre sabemos antecipadamente quantas repetições serão necessárias. Nesses casos, a continuidade depende de uma condição.

ENQUANTO
Testa a condição antes de executar o bloco. Por isso, pode executar zero vezes.

enquanto condicao faca
   comandos
fimenquanto

REPITA
Executa o bloco primeiro e testa a condição no final. Por isso, executa pelo menos uma vez.

repita
   comandos
ate condicao

QUANDO USAR
• validação de dados.
• menus que continuam até o usuário escolher sair.
• leitura até um valor de encerramento.
• processos com quantidade de repetições desconhecida.

ERRO COMUM
Criar uma condição que nunca muda e produzir um laço infinito.

ANTES DE AVANÇAR
Se o usuário precisa digitar uma nota pelo menos uma vez e repetir somente enquanto ela for inválida, qual estrutura deixa essa intenção mais natural: enquanto ou repita?`,

    12: `IDEIA PRINCIPAL
Funções pré-definidas são operações já disponíveis no VisuAlg. Elas recebem um valor, realizam um processamento e devolvem um resultado.

O QUE OBSERVAR NO EXEMPLO
abs(numero)  → devolve o valor absoluto.
raizq(25)    → devolve a raiz quadrada.
exp(2,3)     → calcula a potência mostrada no exemplo.

COMO LER UMA FUNÇÃO
resultado <- funcao(valor)
A função é executada primeiro; o valor retornado pode ser armazenado, exibido ou usado em outra expressão.

VANTAGEM
Você reutiliza uma operação pronta em vez de reescrever sua lógica sempre que precisar dela.

ERRO COMUM
Confundir uma função, que devolve um valor, com um comando que apenas executa uma ação.

ANTES DE AVANÇAR
No código ao lado, quais funções retornam valores que são enviados diretamente para escreval?`,

    13: `IDEIA PRINCIPAL
Modularizar é dividir um algoritmo maior em partes menores, cada uma com uma responsabilidade clara.

DIFERENÇAS
• procedimento: executa uma tarefa e não devolve um valor como resultado.
• função: executa uma tarefa e retorna um valor.
• parâmetro: dado recebido pela sub-rotina para que ela possa trabalhar.
• variável local: existe dentro da sub-rotina.
• variável global: pertence ao algoritmo principal e possui alcance mais amplo.

PROCEDIMENTO SEM PARÂMETROS
procedimento linha
inicio
   comandos
fimprocedimento

FUNÇÃO
funcao calculaDobro(x: inteiro): inteiro
inicio
   retorne x * 2
fimfuncao

POR QUE ISSO MELHORA O PROGRAMA
Blocos menores são mais fáceis de entender, testar, corrigir e reutilizar.

ERRO COMUM
Criar uma sub-rotina que faz muitas tarefas diferentes ou depender de variáveis globais sem necessidade.

ANTES DE AVANÇAR
Se uma parte do programa precisa calcular e devolver o dobro de um número, você escolheria procedimento ou função?`,

    14: `IDEIA PRINCIPAL
Vetor guarda vários valores do mesmo tipo usando um único nome. Cada valor ocupa uma posição numerada.

O QUE OBSERVAR
notas[1], notas[2] e notas[3] são posições diferentes do mesmo vetor.
Um laço para combina muito bem com vetores porque a variável de controle pode ser usada como índice.

SINTAXE ESSENCIAL
notas: vetor[1..3] de real

ACESSO
notas[i]
O valor de i indica qual posição será lida ou alterada.

POR QUE USAR
Sem vetor, dezenas de notas exigiriam dezenas de variáveis separadas. Com vetor, o algoritmo consegue percorrer os dados de forma organizada.

ERRO COMUM
Tentar acessar uma posição fora do intervalo declarado.

ANTES DE AVANÇAR
Se o vetor foi declarado como vetor[1..3], quais são as três posições válidas?`,

    15: `IDEIA PRINCIPAL
Matriz organiza valores em linhas e colunas. Cada posição precisa de dois índices: um para a linha e outro para a coluna.

O QUE OBSERVAR
matriz[linha,coluna]
O primeiro índice escolhe a linha; o segundo escolhe a coluna.

SINTAXE ESSENCIAL
matriz: vetor[1..2,1..2] de inteiro

PERCORRENDO A MATRIZ
Normalmente usamos dois laços:
• o laço externo percorre as linhas.
• o laço interno percorre as colunas de cada linha.

APLICAÇÕES
Notas por aluno e bimestre, assentos, tabuleiros, tabelas pequenas e dados organizados em grade.

ERRO COMUM
Trocar a ordem dos índices ou usar apenas um laço e deixar posições sem percorrer.

ANTES DE AVANÇAR
Em uma matriz 2 x 2, quantas posições existem ao todo e quais pares de índices identificam essas posições?`
  };

  Object.entries(explicacoes).forEach(([id, texto]) => {
    const etapa = steps.find((item) => item.id === Number(id));
    if (etapa) etapa.added = texto;
  });

  // Narrativa anterior à execução; as referências de sintaxe continuam abaixo.
  const aulas = {
  "3": "<h3>Da ideia para a primeira execução</h3><p>Na etapa anterior, separamos entrada, processamento e saída. Agora vamos começar pela saída: antes de pedir notas ao usuário, precisamos conseguir mostrar uma mensagem. O primeiro programa abaixo faz apenas isso, para que você reconheça a estrutura sem precisar aprender vários comandos de uma vez.</p><p><code>algoritmo</code> dá um nome ao programa; as aspas delimitam esse nome. A execução dos comandos começa em <code>inicio</code> e segue de cima para baixo até <code>fimalgoritmo</code>. Cada comando ocupa uma linha. A indentação, isto é, o recuo à esquerda, ajuda a enxergar quais comandos pertencem ao bloco.</p><p><code>escreval</code> apresenta o texto entre aspas e passa à linha seguinte. As aspas fazem parte da escrita do programa, mas não aparecem na mensagem exibida. Primeiro preveja as duas linhas de saída; depois copie o código completo para o VisuAlg de Windows, salve como <code>primeiro-programa.alg</code> e execute com F9. Esta página mostra uma saída ilustrativa: quem executa o algoritmo é o VisuAlg.</p><p>Inverta a ordem dos dois <code>escreval</code> e rode novamente. O resultado deve mudar de ordem, pois o computador segue a sequência escrita. Um comentário iniciado por <code>//</code> serve para explicar o código a quem lê; não gera uma mensagem na saída.</p>",
  "4": "<h3>Uma mensagem fixa já não basta</h3><p>Mostrar sempre o mesmo texto funciona para uma saudação, mas um cadastro precisa lembrar informações diferentes. Uma variável é uma posição de memória identificada por um nome. Durante a execução ela guarda um valor, que pode ser substituído. Declarar <code>idade: inteiro</code> informa o nome e o tipo; isso ainda não representa pedir a idade ao usuário.</p><p>No exemplo, <code>idade &lt;- 15</code> guarda 15. Em uma atribuição, primeiro se calcula o lado direito e depois se substitui o conteúdo do lado esquerdo. Se acrescentar <code>idade &lt;- idade + 1</code>, o programa lê o 15 antigo, calcula 16 e guarda 16 no mesmo lugar. Ele não mantém ali uma coleção de todas as idades anteriores.</p><p>Escolha o tipo pela informação: quantidade sem fração usa <code>inteiro</code>; altura e notas que admitem fração usam <code>real</code>; nome usa <code>caractere</code>; uma resposta verdadeiro/falso usa <code>logico</code>. No código, escreva decimais com ponto. Um telefone, mesmo formado por algarismos, costuma ser texto: não será somado e pode começar com zero.</p><p>Execute o exemplo e relacione cada saída à variável correspondente. Depois altere apenas a idade. As outras informações devem permanecer iguais. <strong>Guardar, comparar e mostrar são operações diferentes:</strong> <code>idade &lt;- 18</code> armazena; <code>idade = 18</code> compara; <code>escreval(idade)</code> apresenta o valor. Nenhuma delas substitui as outras.</p>",
  "5": "<h3>De dados escolhidos pelo programador para dados do usuário</h3><p>Na aula anterior, os valores estavam escritos no próprio código. Para cadastrar pessoas diferentes sem editar o programa, usamos entrada de dados. <code>leia(nome)</code> aguarda uma informação e a guarda em <code>nome</code>. A variável precisa ter sido declarada, porque o ambiente precisa saber que tipo de valor deve receber.</p><p>Acompanhe a primeira sequência: <code>escreva</code> mostra o pedido; <code>leia</code> recebe a resposta. Só depois a próxima linha é executada. O pedido é uma mensagem, não uma leitura. Escrever <code>escreval(\"nome\")</code> mostra a palavra nome; escrever <code>escreval(nome)</code> mostra o conteúdo guardado na variável.</p><p>Execute com Maria e 16, compare com a saída ilustrativa e repita com seu nome e outra idade. Não altere o código entre as execuções. O algoritmo continua igual; os dados e a resposta mudam. Troque um <code>escreva</code> por <code>escreval</code> para observar a diferença de quebra de linha.</p><p>Digite um número inteiro onde se pede idade. Texto como quinze não é um inteiro para o interpretador: <code>leia</code> não converte qualquer palavra no número desejado. Mais adiante aprenderemos a validar intervalos; por enquanto, use entradas do tipo solicitado. Ao encerrar o programa, esses dados não ficam salvos como em um arquivo ou banco de dados.</p>",
  "6": "<h3>Guardar dados para produzir uma resposta</h3><p>Um cadastro recebe informações; uma compra precisa também calcular. Os operadores transformam os valores guardados em um resultado. No exemplo, <code>soma &lt;- a + b</code> lê a e b, soma os valores e guarda a resposta. As variáveis a e b continuam com seus valores originais.</p><p>Com 10 itens em grupos de 3, <code>10 / 3</code> representa a divisão real, <code>10 \\ 3</code> dá 3 grupos completos e <code>10 MOD 3</code> dá 1 item restante. Não confunda quantidade de grupos com sobra. A divisão por zero é inválida; quando o divisor vier do usuário, será necessário impedir esse caso antes de calcular.</p><p>Já <code>a &gt; b</code> produz um valor lógico, guardado em <code>maior</code>. A comparação não troca os números. Esse resultado verdadeiro/falso será usado para escolher caminhos nas próximas aulas.</p><p>Retome a média de duas notas: com 8 e 6, <code>(8 + 6) / 2</code> dá 7; sem os parênteses, <code>8 + 6 / 2</code> dá 11, pois a divisão acontece antes da soma. Um programa pode aceitar as duas expressões, mas somente uma resolve o problema da média.</p><p>Execute com a = 10 e b = 3. Depois troque para 11 e 4, prevendo primeiro soma, quociente inteiro, resto e comparação. Essa previsão é o começo do teste de mesa que faremos adiante.</p>",
  "7": "<h3>Quando uma única comparação não resolve</h3><p>Na etapa anterior, comparamos dois valores. Agora o exemplo simplificado exige duas informações para autorizar uma ação: idade mínima e carteira. Cada parte já produz verdadeiro ou falso; o operador lógico combina essas respostas. Esse modelo serve para estudar condições e não substitui todas as regras de uma situação real.</p><p>Com idade 20 e carteira verdadeira, as duas partes são verdadeiras. Troque somente a carteira para falso: a idade continua suficiente, mas a condição com <code>e</code> fica falsa. Usar <code>ou</code> mudaria a regra: bastaria atender a uma das partes.</p><table><caption>As quatro combinações possíveis</caption><thead><tr><th>A</th><th>B</th><th>A e B</th><th>A ou B</th></tr></thead><tbody><tr><td>V</td><td>V</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td></tr><tr><td>F</td><td>V</td><td>F</td><td>V</td></tr><tr><td>F</td><td>F</td><td>F</td><td>F</td></tr></tbody></table><p>V significa verdadeiro; F, falso. <code>nao</code> inverte uma resposta: <code>nao verdadeiro</code> é falso. Para negar uma condição inteira, use parênteses, como <code>nao (idade &gt;= 18)</code>.</p><p>Um erro comum ao validar notas é escrever <code>(nota &gt;= 0) ou (nota &lt;= 10)</code>: até 15 passa, porque 15 é maior que zero. Para exigir as duas fronteiras, precisamos de <code>e</code>. Teste mentalmente -1, 0, 10 e 15. Vamos reutilizar exatamente esse raciocínio na repetição com validação.</p>",
  "8": "<h3>Encontrar o primeiro passo que saiu do esperado</h3><p>Já calculamos e comparamos valores. Antes de acrescentar decisões, vamos acompanhar o que cada comando realmente muda. Teste de mesa é registrar manualmente o estado das variáveis, isto é, seus valores em cada momento. Não é executar todas as contas de uma vez nem copiar a saída final.</p><table><caption>Rastreamento do exemplo abaixo</caption><thead><tr><th>Após a instrução</th><th>x</th><th>y</th><th>resultado</th></tr></thead><tbody><tr><td>x &lt;- 4</td><td>4</td><td>—</td><td>—</td></tr><tr><td>y &lt;- 3</td><td>4</td><td>3</td><td>—</td></tr><tr><td>resultado &lt;- x + y * 2</td><td>4</td><td>3</td><td>10</td></tr></tbody></table><p>O traço significa que ainda não atribuímos um valor naquele rastreamento; não dependa de uma inicialização automática. Na terceira linha, o produto 3 × 2 é calculado antes da soma com 4. Os comandos de saída seguintes consultam os valores e não os modificam.</p><p>Execute e compare com a tabela. Depois altere a expressão para <code>(x + y) * 2</code>. Preveja o novo resultado antes de rodar. Se esperava 14 e obteve 10, a primeira divergência está no cálculo, não no comando que mostra a resposta.</p><p>Quando chegarmos aos laços, uma mesma linha aparecerá várias vezes no rastreamento. Esse método permitirá descobrir por que um acumulador perdeu o total ou por que uma repetição não termina.</p>",
  "9": "<h3>A mesma entrada pode levar a caminhos diferentes</h3><p>Agora vamos usar uma expressão lógica para decidir o que executar. A regra didática da escola é: a partir de 6, aprovação; a partir de 4 e abaixo de 6, recuperação; abaixo de 4, reprovação. Considere aqui uma nota válida de 0 a 10. A validação desse intervalo será construída na etapa 11.</p><p>A decisão simples tem apenas o bloco do caso verdadeiro; quando a condição é falsa, o programa segue depois do <code>fimse</code>. A composta acrescenta <code>senao</code>. No exemplo completo, a decisão encadeada coloca um segundo <code>se</code> dentro do caminho falso da primeira.</p><p>Acompanhe a nota 5: <code>nota &gt;= 6</code> é falso; o programa entra no <code>senao</code> e testa <code>nota &gt;= 4</code>, que é verdadeiro. Mostra recuperação e encerra as decisões. Com nota 8, o primeiro teste é verdadeiro e o segundo nem é alcançado.</p><p>Por que não começar por nota &gt;= 4? Se essa primeira resposta já encaminhasse para recuperação, a nota 8 seria classificada incorretamente. A ordem dos testes faz parte da solução. A indentação ajuda a perceber que cada <code>fimse</code> encerra um <code>se</code>.</p><p>Execute separadamente com 3.9, 4, 5.9 e 6. São testes de fronteira: verificam exatamente onde a regra muda. Em seguida, explique por que usar apenas &gt; no teste da aprovação deixaria a nota 6 no caminho errado.</p>",
  "10": "<h3>Um menu com alternativas conhecidas</h3><p>A decisão encadeada resolveu intervalos de notas. Um menu traz outra situação: a mesma variável será comparada com opções específicas. <code>escolha opcao</code> organiza essas alternativas sem repetir a pergunta em vários <code>se</code>.</p><p>Primeiro o programa mostra o menu, depois recebe um inteiro e procura o <code>caso</code> correspondente. Se a entrada for 2, somente a mensagem da consulta será executada. Não é necessário escrever <code>interrompa</code> entre os casos, como ocorre em outras linguagens. <code>outrocaso</code> recebe opções sem correspondência.</p><p>Execute uma vez com 1, outra com 2, depois com 3 e com 9. A opção 9 deve produzir a mensagem de opção inválida. Aqui, cadastrar e consultar são apenas mensagens para estudar a seleção; ainda não existem rotinas de cadastro ou consulta.</p><p>Observe também um limite do programa: ele mostra o menu uma única vez. Mesmo uma opção inválida termina essa execução. Na próxima etapa aprenderemos a repetir; depois poderemos combinar repetição e escolha para manter um menu aberto.</p><p>Para decidir se uma nota é maior ou igual a 6, prefira <code>se</code>. Para escolher entre códigos 1, 2 e 3, <code>escolha</code> expressa a intenção diretamente. O problema orienta a estrutura.</p>",
  "11": "<h3>Somar cinco valores sem escrever cinco vezes a mesma tarefa</h3><p>Já sabemos ler, calcular e mostrar. Agora a tarefa se repete: receber cinco valores e apresentar o total. Copiar cinco leituras dificultaria mudar a quantidade e aumentaria a chance de esquecer um cálculo. O <code>para</code> repete um bloco com quantidade conhecida.</p><p>Em <code>para i de 1 ate 5 faca</code>, i recebe os valores 1, 2, 3, 4 e 5. O limite final está incluído e o passo padrão é 1. O próprio laço atualiza i: não acrescente outro incremento dentro dele. Um passo negativo permite contagem decrescente, como <code>para i de 5 ate 1 passo -1 faca</code>.</p><p>Há duas responsabilidades diferentes: i identifica a repetição; <code>soma</code> guarda o total. Antes do laço, <code>soma &lt;- 0</code> prepara o acumulador. Em cada passagem, <code>soma &lt;- soma + valor</code> lê o total anterior, acrescenta a entrada e substitui o total.</p><table><caption>Entradas 2, 4, 6, 8 e 10</caption><thead><tr><th>i</th><th>valor</th><th>soma antes</th><th>soma depois</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>0</td><td>2</td></tr><tr><td>2</td><td>4</td><td>2</td><td>6</td></tr><tr><td>3</td><td>6</td><td>6</td><td>12</td></tr><tr><td>4</td><td>8</td><td>12</td><td>20</td></tr><tr><td>5</td><td>10</td><td>20</td><td>30</td></tr></tbody></table><p>Se reiniciar soma dentro do laço, perderá os valores anteriores e terminará com 10. Se mostrar o total dentro do laço, verá totais parciais. Execute, compare e depois declare uma variável real para calcular a média <strong>após</strong> o laço: 30 / 5 = 6. Mais adiante, o mesmo acumulador percorrerá valores guardados em um vetor.</p>",
  "17": "<h3>Quando a quantidade de tentativas depende da entrada</h3><p>O para resolveu cinco leituras. Mas quantas vezes alguém tentará até informar uma nota válida? Não sabemos antecipadamente. Precisamos testar uma condição e deixar que os dados determinem a continuação.</p><p>A primeira parte do exemplo usa <code>enquanto</code> para tornar o controle visível. i começa em 1. Antes de cada passagem, o programa testa i &lt;= 3. Se verdadeiro, mostra a tentativa e soma 1. Depois da terceira passagem, i vale 4: o teste fica falso e a execução segue depois de <code>fimenquanto</code>.</p><table><caption>Condição testada antes do bloco</caption><thead><tr><th>i no teste</th><th>i &lt;= 3</th><th>O que acontece</th></tr></thead><tbody><tr><td>1</td><td>Verdadeiro</td><td>Mostra 1; i passa a 2</td></tr><tr><td>2</td><td>Verdadeiro</td><td>Mostra 2; i passa a 3</td></tr><tr><td>3</td><td>Verdadeiro</td><td>Mostra 3; i passa a 4</td></tr><tr><td>4</td><td>Falso</td><td>Sai do laço</td></tr></tbody></table><p>Se i começar em 4, nenhuma tentativa é mostrada. Se remover o incremento, i ficará em 1 e o laço não terminará sozinho. Interrompa a execução com Ctrl+F2. A inicialização, a condição e a atualização precisam trabalhar juntas.</p><h4>Repita: ler primeiro, verificar depois</h4><p>A segunda parte precisa pedir a nota pelo menos uma vez. <code>repita</code> executa o bloco e só então testa <code>ate</code>. A condição final é de <strong>parada</strong>: termina quando fica verdadeira. Com 15, a nota não atende às duas fronteiras e a leitura volta; com 8, atende e o programa segue. O enquanto, ao contrário, continua enquanto sua condição for verdadeira.</p><p>Retome a tabela verdade: uma nota válida precisa ser maior ou igual a 0 <strong>e</strong> menor ou igual a 10. Teste -1, 0, 10 e 11. Esses testes aceitam números e rejeitam valores fora do intervalo; não tratam letras como se fossem números.</p><p>Para contar entradas até 0, use o zero como <strong>sentinela</strong>, um sinal de encerramento. Ele não entra na contagem. Faça primeiro uma leitura, repita enquanto o valor for diferente de zero e faça uma nova leitura dentro do bloco. Se o primeiro valor for zero, a quantidade deve continuar em zero. Esse cuidado será essencial para calcular médias sem dividir por zero.</p>",
  "12": "<h3>Reutilizar uma transformação pronta</h3><p>Até aqui escrevemos as operações. Algumas transformações já vêm prontas no VisuAlg: uma função recebe argumentos, processa e <strong>retorna</strong> um valor. Em <code>escreval(raizq(25))</code>, primeiro a função produz 5; depois escreval apresenta esse resultado.</p><p>No exemplo, abs(-25) produz 25, mas não muda a variável numero, que continua em -25. A chamada não contém uma atribuição a numero. Para guardar o resultado, seria necessário escrever <code>numero &lt;- abs(numero)</code>. Essa diferença entre produzir um valor e armazená-lo reaparecerá nas funções criadas por você.</p><p>Os argumentos têm ordem e significado. <code>exp(2,3)</code> eleva a base 2 ao expoente 3. <code>Copia(nome, 1, 7)</code> começa no primeiro caractere e copia sete caracteres; o terceiro argumento é uma quantidade, não a posição final. No texto Ronaldo Lavestein, o espaço ocupa a posição 8 e também conta para o comprimento 17.</p><p>Execute e depois troque o texto para Ana Silva. Preveja Compr = 9 e Pos do espaço = 4; altere a quantidade da cópia para 3 se quiser apenas Ana. Se o nome não tiver espaço, Pos devolve 0. Não use esse zero como se fosse uma posição válida para iniciar uma cópia.</p><p>Nem toda entrada serve a qualquer função: para trabalhar apenas com números reais, raizq exige argumento não negativo. Confira o domínio antes de chamar uma operação. Na próxima etapa vamos criar uma função própria e observar a mesma relação entre entrada e retorno.</p>",
  "13": "<h3>Uma tarefa com nome para ser reutilizada</h3><p>O programa abaixo precisa mostrar a mesma linha antes e depois do resultado. Podemos escrever essa tarefa uma única vez em um <strong>procedimento</strong> e chamá-lo nos dois lugares. A declaração fica antes do inicio principal; seus comandos só são executados quando ocorre uma chamada.</p><p>Ao encontrar <code>linha</code>, o fluxo entra no procedimento, mostra os traços e retorna para a instrução seguinte do programa principal. No padrão de VisuAlg adotado aqui, o procedimento sem parâmetros é declarado e chamado sem parênteses. Com parâmetros, a lista aparece entre parênteses.</p><p>Calcular o dobro é outra responsabilidade: precisamos de uma resposta para guardar. Por isso usamos uma <strong>função</strong>. Em <code>calculaDobro(n)</code>, o valor de n é passado ao parâmetro x. Se n for 8, x começa em 8; <code>retorne x * 2</code> devolve 16; só então a atribuição guarda 16 em dobro. n permanece em 8. Retornar não significa mostrar: quem apresenta é o escreval posterior.</p><p>O parâmetro x pertence à chamada da função. As variáveis n e dobro foram declaradas no programa principal. Passar dados por parâmetros deixa explícito de onde a rotina recebe sua entrada. Se um parâmetro for declarado com <code>var</code>, a rotina pode alterar diretamente a variável fornecida: é passagem por referência. Sem var, trabalha com uma cópia do valor.</p><p>Execute com 8, 0 e -3, esperando 16, 0 e -6. Depois crie a função triplo sem alterar calculaDobro. No Boletim da Turma usaremos o mesmo padrão para receber duas notas e retornar a média. Uma rotina deve ter uma responsabilidade que você consiga explicar com clareza.</p>",
  "14": "<h3>Guardar várias notas para consultar depois</h3><p>Na etapa 10, um acumulador guardava o total, mas cada nova leitura substituía valor. Se depois precisássemos mostrar todas as entradas, elas já teriam sido perdidas. Criar nota1, nota2 e nota3 resolveria apenas um caso pequeno; com trinta notas, a solução ficaria difícil de percorrer.</p><p>Um vetor reúne valores do mesmo tipo sob um nome e usa um <strong>índice</strong> para escolher a posição. Em <code>notas: vetor[1..3] de real</code>, existem três posições válidas: 1, 2 e 3. notas[2] é a nota guardada na segunda posição; o número 2 é o endereço lógico dentro do vetor, não o valor da nota.</p><p>No primeiro laço, i vale 1, 2 e 3. Cada leia preenche uma posição diferente. Ao terminar, as três notas continuam guardadas. O segundo laço percorre as mesmas posições para mostrar os valores sem pedir entrada novamente. Não confunda percorrer com apagar.</p><p>Execute com 7, 8 e 9. Em seguida, acrescente o cálculo da média: inicialize soma antes de percorrer, acrescente notas[i] e divida por 3 depois. Retomamos exatamente o acumulador da etapa 10, agora trabalhando com dados armazenados.</p><p>Para procurar a maior nota, comece com notas[1] após a leitura e compare as demais. Começar com zero falha em outros problemas que aceitam apenas valores negativos. Para aumentar a capacidade, ajuste tanto a declaração quanto os limites dos laços. Acessar notas[0] ou notas[4] não é válido neste vetor.</p>",
  "18": "<h3>Do vetor completo para uma resposta específica</h3><p>Já conseguimos guardar e percorrer valores. Agora queremos saber onde está um código. A busca linear compara uma posição por vez; não exige que os dados estejam ordenados.</p><p>posicao começa em 0 para indicar ausência, porque os índices deste vetor vão de 1 a 6. Com procurado = 425, o algoritmo compara 120, 245 e 310 sem encontrar; na quarta comparação encontra 425, guarda i em posicao e interrompe o laço. Só depois decide qual mensagem mostrar.</p><p>Não coloque a mensagem de ausência no senao de cada comparação: o primeiro código diferente ainda não prova que o valor não existe nas posições seguintes. Para afirmar ausência, precisamos terminar a busca sem encontrar.</p><p>Execute com 120, 680 e 999. As quantidades de comparações são 1, 6 e 6. Para 999, posicao continua zero e a saída informa que não foi encontrado. Acrescente temporariamente uma saída dentro do laço para conferir quantas posições foram visitadas; depois remova essa saída de investigação.</p><p>Se houver códigos repetidos, o interrompa faz a busca parar na primeira ocorrência. Para contar todas as ocorrências, precisaremos continuar até o fim e usar um contador, retomando outro padrão já estudado.</p>",
  "15": "<h3>Quando cada aluno tem mais de uma nota</h3><p>Um vetor guarda uma sequência. Um boletim precisa relacionar cada aluno a várias avaliações: duas informações escolhem a posição. A <strong>matriz</strong> organiza esse conjunto em linhas e colunas. No exemplo 2 × 2, os índices válidos são [1,1], [1,2], [2,1] e [2,2].</p><p>O laço externo escolhe a linha; o interno percorre as duas colunas dessa linha. Primeiro entram [1,1] e [1,2]. Depois linha muda para 2 e o laço interno começa novamente em 1: entram [2,1] e [2,2]. São 2 × 2 = 4 leituras, não 2 + 2 por uma regra geral: em uma matriz 3 × 2 seriam seis leituras.</p><p>Execute com 1, 2, 3 e 4, nessa ordem, e confira a grade da saída. No segundo par de laços, escreva mostra os valores da linha sem mudar de linha; o escreval depois do laço interno cria a quebra para a próxima linha. Colocá-lo dentro do laço interno mostraria um valor por linha.</p><p>No Boletim da Turma, cada linha será um aluno e cada coluna uma nota. Assim, notas[2,1] será a primeira nota do segundo aluno. Os índices indicam a posição; o conteúdo dessa posição pode ser 8.5, por exemplo.</p><p>Para somar cada linha, inicialize um acumulador dentro do laço externo e antes do interno. Para somar toda a matriz, inicialize-o antes dos dois laços. O lugar da inicialização determina o que será acumulado. Experimente ambos os casos e explique por que os totais mudam.</p>"
};
  Object.entries(aulas).forEach(([id, html]) => {
    const etapa = steps.find(item => item.id === Number(id));
    if (etapa) etapa.lesson = html;
  });

  const checkpoints = {
  "3": [
    "Se inverter os dois escreval, por que a saída muda?",
    "Os comandos são executados na ordem escrita. Cada escreval produz uma linha; inverter os comandos inverte as mensagens."
  ],
  "4": [
    "Após idade receber 15 e depois idade receber idade + 1, qual é o valor guardado?",
    "16. Primeiro se lê o valor antigo, calcula-se 15 + 1 e então se substitui o conteúdo. Mostrar o valor não o modifica."
  ],
  "5": [
    "Por que escreval(\"nome\") não mostra o nome digitado?",
    "As aspas delimitam texto literal. Sem aspas, nome identifica a variável cujo conteúdo será consultado."
  ],
  "6": [
    "Qual é a diferença entre 11 / 4, 11 \\ 4 e 11 MOD 4?",
    "São 2.75 na divisão real, 2 grupos inteiros e resto 3. Verifique: 2 × 4 + 3 = 11."
  ],
  "7": [
    "A condição (nota >= 0) ou (nota <= 10) rejeita 15?",
    "Não. A primeira parte já é verdadeira. Para exigir as duas fronteiras, combine-as com e."
  ],
  "8": [
    "Com x = 4 e y = 3, por que x + y * 2 produz 10, mas (x + y) * 2 produz 14?",
    "Sem os parênteses, a multiplicação acontece antes da soma. Com os parênteses, primeiro se soma 4 + 3."
  ],
  "9": [
    "Por que nota 6 precisa passar no primeiro teste?",
    "A regra inclui o limite 6 na aprovação. Usar > 6 deixaria esse valor no caminho da recuperação."
  ],
  "10": [
    "Selecionar a opção 2 cadastra algum dado? O menu reaparece?",
    "Não. Este exemplo apenas mostra a mensagem do caso 2 e encerra. Para repetir o menu, será necessário um laço."
  ],
  "11": [
    "Por que soma começa fora do laço? Qual total restaria se ela fosse zerada antes de cada leitura?",
    "Ela precisa conservar o total anterior entre as passagens. Se fosse zerada em cada passagem, ao final restaria apenas o último valor: 10 no teste proposto."
  ],
  "17": [
    "Se i começar em 4, o enquanto executa? E o repita da nota?",
    "O enquanto não executa, porque 4 <= 3 já é falso. A leitura no repita acontece ao menos uma vez, pois o teste vem depois do bloco."
  ],
  "12": [
    "abs(numero) muda o conteúdo de numero?",
    "Não por si só. A função produz um resultado. Para substituir a variável, é preciso atribuir esse resultado a ela."
  ],
  "13": [
    "Com n = 8, quais valores existem após dobro receber calculaDobro(n)?",
    "n continua em 8 e dobro passa a 16. O parâmetro x recebe uma cópia do valor e retorne devolve o resultado para a atribuição."
  ],
  "14": [
    "Por que o segundo para não precisa chamar leia novamente?",
    "As três notas já estão guardadas nas posições do vetor. O segundo laço apenas consulta essas posições."
  ],
  "15": [
    "Onde zerar soma para calcular um total por linha?",
    "Dentro do laço externo e antes do laço das colunas. Para um único total geral, zere antes dos dois laços."
  ]
};
  Object.entries(checkpoints).forEach(([id, item]) => {
    const etapa = steps.find(step => step.id === Number(id));
    if (etapa) etapa.checkpoint = `<p><strong>Confira sua compreensão:</strong> ${item[0]}</p><details><summary>Conferir o raciocínio depois de tentar</summary><p>${item[1]}</p></details>`;
  });

  const titulo = document.querySelector('#newCodeCard .panel-title span');
  if (titulo) titulo.textContent = 'Consulta — explicações e trechos de sintaxe';
})();

