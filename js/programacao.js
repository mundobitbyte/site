const roteiroSteps = [
  {
    id: 1,
    menu: '1 Como aprender',
    title: 'Programação começa antes do código',
    objective: 'Entender a lógica do percurso: necessidade primeiro, conceito depois e sintaxe no momento certo.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Modo MbB</span>
        <h3>O ponto de partida é um problema</h3>
        <p>Programar não começa decorando comandos. Primeiro existe alguém com uma necessidade. Depois organizamos uma solução, descobrimos quais ideias de computação são necessárias e só então aprendemos como expressá-las em uma linguagem.</p>
      </div>

      <div class="concept-box"><strong>Regra central deste módulo:</strong><br>necessidade → ideia → nome técnico → sintaxe.</div>

      <h3>O ciclo que vamos repetir</h3>
      <div class="cycle-grid">
        <div class="cycle-card"><strong>Entender</strong>Compreender o problema e o resultado esperado.</div>
        <div class="cycle-card"><strong>Experimentar</strong>Prever, executar, alterar e observar o que acontece.</div>
        <div class="cycle-card"><strong>Programar</strong>Transformar a solução em instruções executáveis.</div>
        <div class="cycle-card"><strong>Aplicar</strong>Resolver um problema diferente com menos ajuda.</div>
      </div>

      <h3>Um modelo mental que nos acompanhará</h3>
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>O que o sistema precisa receber ou conhecer para poder agir.</div>
        <div class="mbb-card"><strong>FAZER</strong>O que o sistema precisa calcular, comparar, decidir ou transformar internamente.</div>
        <div class="mbb-card"><strong>RESPONDER</strong>O que o sistema precisa externalizar como consequência do processamento.</div>
      </div>
      <p>Esse modelo será muito usado no começo. Depois, à medida que o raciocínio ficar natural, ele aparecerá menos.</p>

      <div class="note-box"><strong>Importante:</strong> não vamos criar exemplos isolados apenas para “usar um comando”. A maior parte dos conceitos nascerá da evolução de problemas reais de baixa complexidade.</div>`
  },
  {
    id: 2,
    menu: '2 Jornada 120 h/a',
    title: 'Mapa da jornada',
    objective: 'Visualizar a progressão completa sem transformar o plano de curso em uma lista burocrática para o aluno.',
    content: `
      <div class="hero-box">
        <h3>Do problema ao programa</h3>
        <p>O percurso foi organizado para que os assuntos se apoiem uns nos outros. Um conceito não desaparece quando o próximo chega: ele reaparece em uma situação mais complexa.</p>
      </div>

      <div class="roadmap">
        <div class="roadmap-item"><strong>1. Problema, algoritmo, pseudocódigo e fluxograma</strong><span class="hours">12 h/a</span><br>Aprender a organizar uma solução antes da linguagem.</div>
        <div class="roadmap-item"><strong>2. VisuAlg, variáveis, constantes, tipos, memória e bit/Byte</strong><span class="hours">12 h/a</span><br>Fazer a solução começar a ser executada.</div>
        <div class="roadmap-item"><strong>3. Processamento, expressões, operadores e funções prontas</strong><span class="hours">10 h/a</span><br>Transformar dados de forma controlada.</div>
        <div class="roadmap-item"><strong>4. Decisões</strong><span class="hours">12 h/a</span><br>Comparar situações e escolher caminhos.</div>
        <div class="roadmap-item"><strong>5. Repetições</strong><span class="hours">14 h/a</span><br>Enquanto, Repita, Para, contador e acumulador.</div>
        <div class="roadmap-item"><strong>6. Organização do programa</strong><span class="hours">10 h/a</span><br>Funções, procedimentos, parâmetros, retorno, escopo e bibliotecas.</div>
        <div class="roadmap-item"><strong>7. Sistema da Cantina em VisuAlg</strong><span class="hours">12 h/a</span><br>Integrar o que foi aprendido em um problema único.</div>
        <div class="roadmap-item"><strong>8. Transferência para Python</strong><span class="hours">16 h/a</span><br>Mostrar que a linguagem muda, mas os conceitos permanecem.</div>
        <div class="roadmap-item"><strong>9. Python: aplicação, validação, testes e depuração</strong><span class="hours">14 h/a</span><br>Fazer o programa funcionar de forma mais confiável.</div>
        <div class="roadmap-item"><strong>10. Projeto, desktop e paradigmas</strong><span class="hours">8 h/a</span><br>Aplicar em outro problema e abrir a porta para eventos e objetos.</div>
      </div>

      <div class="optional-box"><strong>Aprofundamentos opcionais:</strong> coleções, arquivos/persistência e tratamento mais profundo de exceções podem ser explorados quando a turma e o tempo permitirem. Eles não devem roubar o tempo do núcleo essencial.</div>
`
  }
];

const pensarSteps = [
  {
    id: 1,
    menu: '1 O problema',
    title: 'Existe um problema antes de existir um programa',
    objective: 'Partir de uma necessidade concreta e descobrir o que a tecnologia precisa resolver.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Entender</span>
        <h3>A cantina da escola</h3>
        <p>Uma atendente vende 2 salgados a R$ 7,50 cada e 1 refrigerante a R$ 6,00. O cliente entrega R$ 30,00. Ela precisa informar o total da compra e o troco.</p>
      </div>

      <p>Antes de pensar em linguagem, comandos ou variáveis, resolva como uma pessoa resolveria:</p>
      <pre class="command">2 × 7,50 = 15,00
1 × 6,00 = 6,00
Total = 21,00
Troco = 30,00 - 21,00 = 9,00</pre>

      <div class="concept-box"><strong>Primeira regra:</strong> antes de programar, precisamos saber resolver o problema.</div>

      <h3>Quem precisa disso?</h3>
      <p>A atendente precisa de uma resposta rápida e correta para fechar a venda. O programa não existe “para usar programação”; ele existe para ajudar alguém a realizar uma tarefa.</p>

      <div class="task-box">
        <h4>Experimente</h4>
        <p>Se a quantidade de salgados passar de 2 para 4, o que muda na solução? E se o cliente entregar R$ 50,00? Faça a conta antes de pensar em código.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Saber/Fazer/Responder',
    title: 'O que a tecnologia precisa Saber, Fazer e Responder?',
    objective: 'Construir um modelo mental para entrada, processamento e saída antes do jargão técnico.',
    content: `
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>Quantidade, preços e valor recebido. Em outros sistemas, isso também pode vir de sensor, arquivo, banco de dados, API ou outro equipamento.</div>
        <div class="mbb-card"><strong>FAZER</strong>Multiplicar, somar e calcular o troco. Em outros problemas, pode comparar, decidir, ordenar, converter ou transformar informações.</div>
        <div class="mbb-card"><strong>RESPONDER</strong>Informar total e troco. Uma resposta também pode ser salvar um dado, enviar uma mensagem, devolver dados a outro sistema ou acionar um dispositivo.</div>
      </div>

      <h3>Agora aparecem os nomes técnicos</h3>
      <div class="term-grid">
        <div class="head">Ideia</div><div class="head">Termo técnico</div><div class="head">Jargão comum</div>
        <div><strong>SABER</strong></div><div>Entrada</div><div>Ler / receber dados</div>
        <div><strong>FAZER</strong></div><div>Processamento</div><div>Processar</div>
        <div><strong>RESPONDER</strong></div><div>Saída</div><div>Escrever / exibir / retornar / enviar</div>
      </div>

      <div class="note-box"><strong>“Ler” e “escrever” são usados em programação em vários contextos.</strong> Mais adiante podemos ler do teclado, de um arquivo, de um sensor ou de outro sistema; e podemos escrever na tela, em arquivo, no banco de dados ou enviar pela rede.</div>

      <div class="task-box">
        <h4>Faça sem código</h4>
        <p>Uma máquina de estacionamento precisa calcular o valor devido a partir do tempo de permanência. Identifique apenas: o que precisa <strong>Saber</strong>, o que precisa <strong>Fazer</strong> e como precisa <strong>Responder</strong>.</p>
      </div>`
  },
  {
    id: 3,
    menu: '3 Algoritmo',
    title: 'Da solução humana para um algoritmo',
    objective: 'Organizar passos claros e transformar a solução em pseudocódigo sem depender de uma linguagem real.',
    content: `
      <div class="hero-box">
        <h3>Como explicar a solução para outra pessoa?</h3>
        <p>Se alguém nunca tivesse feito essa venda, quais instruções seriam necessárias para chegar ao total e ao troco?</p>
      </div>

      <ol>
        <li>Obter a quantidade e o preço dos salgados.</li>
        <li>Obter a quantidade e o preço dos refrigerantes.</li>
        <li>Calcular o valor de cada grupo de produtos.</li>
        <li>Somar os valores e obter o total.</li>
        <li>Obter o valor recebido.</li>
        <li>Subtrair o total do valor recebido.</li>
        <li>Informar total e troco.</li>
      </ol>

      <p>Depois que a sequência já existe, damos o nome técnico:</p>
      <div class="concept-box"><strong>Algoritmo</strong> é uma sequência organizada e finita de passos para resolver um problema.</div>

      <h3>Pseudocódigo</h3>
      <p>Podemos aproximar a solução da forma de um programa sem depender ainda de uma linguagem específica:</p>
      <pre class="command">receber quantidade de salgados
receber preço do salgado
receber quantidade de refrigerantes
receber preço do refrigerante

valor dos salgados ← quantidade de salgados × preço do salgado
valor dos refrigerantes ← quantidade de refrigerantes × preço do refrigerante
total ← valor dos salgados + valor dos refrigerantes

receber valor pago
troco ← valor pago - total

mostrar total
mostrar troco</pre>

      <div class="ok-box"><strong>Algoritmo não é código.</strong> A solução pode ser representada em linguagem natural, pseudocódigo, fluxograma e depois em diferentes linguagens de programação.</div>

      <div class="task-box">
        <h4>Aplique</h4>
        <p>Um serviço de entrega calcula o valor a partir da distância e de uma tarifa por quilômetro. Escreva os passos e depois transforme-os em pseudocódigo.</p>
      </div>`
  },
  {
    id: 4,
    menu: '4 Fluxograma',
    title: 'Enxergando o caminho da solução',
    objective: 'Usar poucos símbolos de fluxograma para representar visualmente o algoritmo sem antecipar decisões e repetições.',
    content: `
      <div class="hero-box">
        <h3>O mesmo algoritmo pode ser visto</h3>
        <p>O fluxograma permite representar graficamente o caminho percorrido pela solução. Neste primeiro contato, bastam poucos elementos.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Início / fim</strong><br>Marca onde o fluxo começa e termina.</div>
        <div class="mini-card"><strong>Entrada / saída</strong><br>Representa informações recebidas ou respostas produzidas.</div>
        <div class="mini-card"><strong>Processamento</strong><br>Representa uma transformação ou cálculo.</div>
        <div class="mini-card"><strong>Setas</strong><br>Mostram a direção do fluxo.</div>
      </div>

      <div class="placeholder-flow">
        <strong>IMAGEM A INSERIR — Fluxograma de sequência</strong>
        <span>Usar o mesmo problema da cantina: receber dados → calcular total → calcular troco → informar resultados. A imagem será produzida posteriormente pelo professor.</span>
      </div>

      <p>Depois da imagem, o aluno deverá conseguir relacionar:</p>
      <div class="flow">problema → passos → pseudocódigo → fluxograma → programa</div>

      <div class="note-box"><strong>Por enquanto, é suficiente.</strong> Quando nosso algoritmo precisar escolher caminhos, aparecerá o símbolo de decisão. Quando precisar voltar e repetir, veremos como representar esse retorno.</div>

      <div class="deep-box"><strong>Existe mais.</strong> Fluxogramas possuem outros recursos e podem representar processos muito mais complexos. Não precisamos antecipá-los: voltaremos quando um problema realmente exigir.</div>`
  },
  {
    id: 5,
    menu: '5 Linguagem e ambiente',
    title: 'Como a solução chega ao computador?',
    objective: 'Diferenciar linguagem, plataforma e ambiente de desenvolvimento antes de começar a programar.',
    content: `
      <div class="hero-box">
        <h3>Nosso algoritmo ainda não é um programa executável</h3>
        <p>Para a máquina executar a solução, precisamos expressá-la de acordo com regras que um ambiente de computação consiga tratar.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Linguagem de programação</strong><br>Define formas e regras para expressar instruções e dados.</div>
        <div class="mini-card"><strong>Plataforma</strong><br>É o contexto tecnológico em que o programa é desenvolvido ou executado, como um sistema operacional, navegador, dispositivo ou runtime.</div>
        <div class="mini-card"><strong>Ambiente de desenvolvimento</strong><br>É a ferramenta usada para escrever, executar, testar e corrigir o programa.</div>
        <div class="mini-card"><strong>VisuAlg</strong><br>Será nossa ponte didática entre o pseudocódigo e um programa que podemos executar e observar.</div>
      </div>

      <p>Mais adiante, faremos a mesma lógica em <strong>Python</strong>. Essa troca será intencional:</p>
      <div class="concept-box"><strong>A linguagem pode mudar. O raciocínio de programação não precisa recomeçar do zero.</strong></div>

      <h3>Código-fonte, execução e compilação</h3>
      <p><strong>Código-fonte</strong> é aquilo que o programador escreve. A forma de transformar esse código em algo executável depende da linguagem e da plataforma: há ambientes que compilam antes da execução, outros que utilizam interpretadores ou máquinas virtuais, e alguns combinam etapas.</p>
      <p>No VisuAlg, nosso foco será executar o algoritmo para observar a lógica. No Python, usaremos o interpretador para executar o código-fonte. A preparação de um executável distribuível é uma etapa própria e depende do ambiente adotado.</p>

      <div class="note-box">Não precisamos decidir agora se uma linguagem é “melhor”. Primeiro vamos aprender a reconhecer o problema e as ferramentas conceituais necessárias para resolvê-lo.</div>`
  }
];

const visualgSteps = [
  {
    id: 1,
    menu: '1 Cantina executável',
    title: 'Fazendo a cantina existir no VisuAlg',
    objective: 'Transformar o algoritmo já compreendido em um programa sequencial executável.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Programar</span>
        <h3>Agora vamos executar a solução</h3>
        <p>Não começaremos com um programa sem finalidade. Vamos transformar diretamente o problema da cantina que já entendemos.</p>
      </div>

      <pre class="command">algoritmo "Cantina"
var
   qtdSalgado, qtdRefrigerante: inteiro
   precoSalgado, precoRefrigerante: real
   total, valorRecebido, troco: real

inicio
   escreva("Quantidade de salgados: ")
   leia(qtdSalgado)

   escreva("Preço do salgado: R$ ")
   leia(precoSalgado)

   escreva("Quantidade de refrigerantes: ")
   leia(qtdRefrigerante)

   escreva("Preço do refrigerante: R$ ")
   leia(precoRefrigerante)

   total <- qtdSalgado * precoSalgado + qtdRefrigerante * precoRefrigerante

   escreva("Valor recebido: R$ ")
   leia(valorRecebido)

   troco <- valorRecebido - total

   escreval("Total: R$ ", total:0:2)
   escreval("Troco: R$ ", troco:0:2)

fimalgoritmo</pre>

      <h3>Encontre o que já conhecemos</h3>
      <div class="term-grid">
        <div class="head">Saber</div><div class="head">Fazer</div><div class="head">Responder</div>
        <div><span class="inline-code">leia(...)</span></div><div>expressões e atribuições</div><div><span class="inline-code">escreva / escreval</span></div>
      </div>

      <p>Agora as palavras <strong>ler</strong> e <strong>escrever</strong> deixaram de ser apenas jargão: aparecem como comandos porque o programa precisa receber informações e produzir respostas.</p>

      <div class="task-box">
        <h4>Experimente</h4>
        <p>Execute com os dados originais e depois altere quantidades, preços e valor recebido. Antes de cada execução, preveja o total e o troco.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Dados e memória',
    title: 'Onde o programa guarda aquilo que sabe?',
    objective: 'Compreender variáveis, constantes, tipos, memória e a relação com bits e bytes.',
    content: `
      <div class="hero-box">
        <h3>O programa recebeu um valor. E agora?</h3>
        <p>Quando a atendente informa uma quantidade ou um preço, o programa precisa manter essa informação disponível para os cálculos seguintes.</p>
      </div>

      <h3>Variáveis</h3>
      <p>Nomes como <span class="inline-code">qtdSalgado</span>, <span class="inline-code">precoSalgado</span> e <span class="inline-code">total</span> representam valores utilizados durante a execução.</p>
      <div class="concept-box"><strong>Variável:</strong> um nome usado no programa para referenciar um valor que pode ser armazenado e utilizado durante a execução.</div>

      <h3>Tipos</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>inteiro</strong><br>Quantidade de itens, contadores e outros valores sem parte fracionária.</div>
        <div class="mini-card"><strong>real</strong><br>Preços, medidas e valores que podem ter parte decimal.</div>
        <div class="mini-card"><strong>caractere</strong><br>Textos e códigos representados como caracteres.</div>
        <div class="mini-card"><strong>lógico</strong><br>Representa condições como verdadeiro ou falso. Sua utilidade ficará clara nas decisões.</div>
      </div>

      <h3>Constantes</h3>
      <p>Nem todo valor deve mudar. Uma taxa definida pelas regras do sistema, por exemplo, pode ser tratada conceitualmente como uma <strong>constante</strong> quando deve permanecer inalterada naquele contexto.</p>
      <div class="note-box">A forma de declarar constantes varia entre linguagens e ambientes. O conceito vem antes da sintaxe: é um valor identificado pelo programa que não deve ser alterado durante aquele uso.</div>

      <div class="deep-box">
        <strong>Indo até o bit — onde isso fica de verdade?</strong>
        <p>Durante a execução, valores precisam ser representados na memória. Sistemas digitais representam informações por estados que podemos descrever com 0 e 1.</p>
        <div class="flow">1 bit = 2 possibilidades: 0 ou 1
1 byte = 8 bits
16 bits = 2 bytes
32 bits = 4 bytes
64 bits = 8 bytes</div>
        <p>A quantidade de bits usada por um tipo <strong>depende da linguagem, do ambiente e da implementação</strong>. Portanto, não vamos decorar uma regra falsa como “inteiro sempre ocupa 32 bits”.</p>
        <p>Como exemplo de representação binária, o valor decimal 2 pode ser escrito em oito posições como <span class="inline-code">00000010</span>. Isso é uma ilustração da representação, não uma afirmação de que a variável inteira do VisuAlg ocupe exatamente um byte.</p>
      </div>

      <div class="concept-box"><strong>Outra ideia importante:</strong> bits sozinhos não dizem se representam número, texto, cor ou instrução. O significado depende de como os dados são interpretados.</div>`
  },
  {
    id: 3,
    menu: '3 Processamento',
    title: 'O que o programa faz com os dados?',
    objective: 'Usar expressões, operadores, atribuição e funções predefinidas a partir de necessidades reais.',
    content: `
      <div class="hero-box">
        <h3>O programa já sabe os valores. Agora precisa transformá-los.</h3>
        <p>No caixa, multiplicamos quantidade por preço, somamos subtotais e subtraímos o total do valor recebido.</p>
      </div>

      <pre class="command">valorSalgados <- qtdSalgado * precoSalgado
valorRefrigerantes <- qtdRefrigerante * precoRefrigerante
total <- valorSalgados + valorRefrigerantes
troco <- valorRecebido - total</pre>

      <h3>Operadores aritméticos</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>+</strong><br>somar valores</div>
        <div class="mini-card"><strong>-</strong><br>subtrair valores</div>
        <div class="mini-card"><strong>*</strong><br>multiplicar valores</div>
        <div class="mini-card"><strong>/</strong><br>dividir valores</div>
      </div>

      <p>Os parênteses ajudam a deixar explícita a ordem desejada quando a expressão cresce:</p>
      <pre class="command">media <- (valor1 + valor2) / 2</pre>

      <h3>Atribuição</h3>
      <p>Em <span class="inline-code">total <- ...</span>, primeiro a expressão do lado direito é calculada; depois o resultado é atribuído a <span class="inline-code">total</span>. Leia mentalmente como “total recebe”.</p>

      <h3>Funções predefinidas</h3>
      <p>O ambiente também disponibiliza operações já prontas. No VisuAlg, por exemplo, funções como <span class="inline-code">abs()</span> e <span class="inline-code">raizq()</span> podem ser usadas quando o problema precisar delas.</p>
      <div class="example-box"><strong>Uso com sentido:</strong> <span class="inline-code">abs(valorEsperado - valorApurado)</span> pode calcular a diferença absoluta entre dois valores, sem importar qual deles é maior.</div>

      <div class="note-box"><strong>Não é para decorar um catálogo.</strong> Primeiro reconheça o que precisa ser feito. Depois verifique se a linguagem ou o ambiente já oferece uma função adequada.</div>

      <div class="task-box">
        <h4>Experimente</h4>
        <p>Introduza propositalmente um erro lógico, trocando uma multiplicação por soma. O programa provavelmente executará. Compare o resultado esperado com o obtido.</p>
      </div>`
  },
  {
    id: 4,
    menu: '4 Decisões',
    title: 'Como o programa escolhe o que fazer?',
    objective: 'Construir comparações, condições, operadores lógicos, Se/Senão e Escolha/Caso quando o problema exige caminhos diferentes.',
    content: `
      <div class="hero-box">
        <h3>O primeiro problema do nosso caixa</h3>
        <p>Se a compra custa R$ 21,00 e o cliente entrega R$ 10,00, o cálculo simples produz troco negativo. A conta matemática está coerente, mas o comportamento do sistema não.</p>
      </div>

      <p>Precisamos perguntar:</p>
      <pre class="command">valorRecebido >= total</pre>
      <p>A resposta de uma comparação é lógica: <strong>verdadeiro</strong> ou <strong>falso</strong>.</p>

      <h3>Operadores relacionais</h3>
      <div class="flow">&gt;   maior que
&lt;   menor que
&gt;=  maior ou igual
&lt;=  menor ou igual
=   igual
&lt;&gt;  diferente</div>

      <h3>Se / Senão</h3>
      <pre class="command">se valorRecebido >= total entao
   troco <- valorRecebido - total
   escreval("Troco: R$ ", troco:0:2)
senao
   escreval("Valor insuficiente.")
fimse</pre>

      <div class="placeholder-flow">
        <strong>IMAGEM A INSERIR — Fluxograma de decisão</strong>
        <span>Usar a pergunta “o valor recebido é suficiente?” com dois caminhos: calcular o troco ou informar valor insuficiente.</span>
      </div>

      <h3>Mais de uma condição</h3>
      <p>Uma regra pode exigir condições combinadas:</p>
      <pre class="command">se total > 50 e clienteCadastrado entao
   desconto <- total * 0.05
fimse</pre>
      <div class="flow">E   → todas as condições precisam ser verdadeiras
OU  → pelo menos uma condição precisa ser verdadeira
NAO → inverte o resultado lógico</div>

      <h3>Escolha / Caso</h3>
      <p>Quando temos uma única informação e várias opções conhecidas, uma decisão múltipla pode expressar melhor o problema:</p>
      <pre class="command">escolha opcaoPagamento
   caso 1
      escreval("Dinheiro")
   caso 2
      escreval("Pix")
   caso 3
      escreval("Cartão")
   outrocaso
      escreval("Opção inválida")
fimescolha</pre>

      <div class="concept-box"><strong>Escolha a estrutura pela necessidade.</strong> <span class="inline-code">Se</span> é natural para avaliar condições. <span class="inline-code">Escolha</span> costuma ser clara quando selecionamos entre opções discretas conhecidas.</div>

      <div class="task-box"><h4>Aplique</h4><p>Uma empresa cobra frete para compras de até determinado valor e oferece frete gratuito acima desse limite. Modele a condição e teste exatamente no valor de fronteira, um pouco abaixo e um pouco acima.</p></div>`
  },
  {
    id: 5,
    menu: '5 Repetições',
    title: 'Como fazer o computador repetir por nós?',
    objective: 'Escolher entre Enquanto, Repita e Para, usando contador e acumulador sem tratar repetição como um único comando.',
    content: `
      <div class="hero-box">
        <h3>A cantina não atende um único cliente</h3>
        <p>Executar manualmente o programa outra vez para cada atendimento desperdiça justamente uma das capacidades do computador: repetir tarefas.</p>
      </div>

      <h3>Enquanto</h3>
      <p>Não sabemos antecipadamente quantos clientes chegarão. A ideia natural é:</p>
      <pre class="command">enquanto continuar = "S" faca
   // realizar uma venda
fimenquanto</pre>
      <p>Use quando a continuidade depende de uma condição verificada antes de cada nova repetição.</p>

      <h3>Repita</h3>
      <p>A forma de pagamento precisa ser solicitada pelo menos uma vez e repetida se a opção for inválida:</p>
      <pre class="command">repita
   escreval("1 - Dinheiro")
   escreval("2 - Pix")
   escreval("3 - Cartão")
   leia(opcaoPagamento)
ate opcaoPagamento >= 1 e opcaoPagamento <= 3</pre>
      <p>A verificação acontece depois de executar o bloco ao menos uma vez.</p>

      <h3>Para</h3>
      <p>Quando uma venda possui uma quantidade conhecida de tipos de item, podemos percorrê-los:</p>
      <pre class="command">para item de 1 ate quantidadeItens faca
   leia(quantidadeProduto)
   leia(precoProduto)
   subtotal <- subtotal + quantidadeProduto * precoProduto
fimpara</pre>

      <div class="term-grid">
        <div class="head">Estrutura</div><div class="head">Necessidade típica</div><div class="head">Pergunta mental</div>
        <div><strong>Enquanto</strong></div><div>quantidade de repetições não conhecida previamente</div><div>“continuo enquanto isso for verdade?”</div>
        <div><strong>Repita</strong></div><div>o bloco precisa ocorrer ao menos uma vez</div><div>“faço e depois verifico se termino?”</div>
        <div><strong>Para</strong></div><div>quantidade conhecida ou intervalo controlado</div><div>“quantas vezes / para cada posição?”</div>
      </div>

      <h3>Contador e acumulador</h3>
      <pre class="command">clientesAtendidos <- clientesAtendidos + 1
faturamento <- faturamento + total</pre>
      <div class="mini-grid">
        <div class="mini-card"><strong>Contador</strong><br>responde “quantos?”.</div>
        <div class="mini-card"><strong>Acumulador</strong><br>reúne valores ao longo das repetições.</div>
      </div>

      <div class="placeholder-flow">
        <strong>IMAGEM A INSERIR — Fluxograma de repetição</strong>
        <span>Mostrar claramente o ponto em que o fluxo volta para testar a condição e repetir o atendimento.</span>
      </div>

      <div class="deep-box"><strong>Existe mais.</strong> Repetições podem ser combinadas e aninhadas quando um problema realmente exigir. Não precisamos criar complexidade antes da necessidade.</div>`
  },
  {
    id: 6,
    menu: '6 Funções',
    title: 'Como evitar que o programa vire um bloco gigante?',
    objective: 'Separar responsabilidades usando funções, procedimentos, parâmetros, retorno e escopo.',
    content: `
      <div class="hero-box">
        <h3>O programa cresceu</h3>
        <p>Receber dados, calcular subtotal, desconto, pagamento, relatório e validações em um único bloco dificulta leitura, teste e manutenção.</p>
      </div>

      <div class="concept-box"><strong>Decomposição:</strong> um problema grande pode ser dividido em tarefas menores com responsabilidades claras.</div>

      <h3>Uma função para calcular desconto</h3>
      <pre class="command">funcao calcularDesconto(valor: real): real
inicio
   se valor > 100 entao
      retorne valor * 0.10
   senao
      se valor > 50 entao
         retorne valor * 0.05
      senao
         retorne 0
      fimse
   fimse
fimfuncao</pre>

      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>Recebe o valor da compra como parâmetro.</div>
        <div class="mbb-card"><strong>FAZER</strong>Aplica a regra de desconto.</div>
        <div class="mbb-card"><strong>RESPONDER</strong>Retorna o valor do desconto.</div>
      </div>

      <h3>Procedimento</h3>
      <p>Quando queremos agrupar uma tarefa sem precisar devolver um valor para outra parte do algoritmo, podemos usar um procedimento:</p>
      <pre class="command">procedimento mostrarResumo(total: real; desconto: real)
inicio
   escreval("Total: R$ ", total:0:2)
   escreval("Desconto: R$ ", desconto:0:2)
fimprocedimento</pre>

      <h3>Parâmetro, retorno e escopo</h3>
      <ul>
        <li><strong>Parâmetro:</strong> informação entregue à função ou procedimento.</li>
        <li><strong>Retorno:</strong> valor devolvido por uma função.</li>
        <li><strong>Escopo:</strong> contexto em que uma variável está disponível. Nem toda variável precisa existir para o programa inteiro.</li>
      </ul>

      <h3>Bibliotecas</h3>
      <p>Programar profissionalmente também envolve reutilizar recursos já construídos. Bibliotecas reúnem funcionalidades que podem ser usadas sem implementar tudo do zero.</p>
      <div class="note-box">A sintaxe e a forma de usar bibliotecas variam entre linguagens. No Python isso ficará muito mais visível.</div>`
  },
  {
    id: 7,
    menu: '7 Sistema integrado',
    title: 'Cantina — integrando o que aprendemos',
    objective: 'Usar sequência, decisão, Escolha, Enquanto, Repita, Para, contador, acumulador e função no mesmo sistema, cada recurso com um motivo.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Integrar</span>
        <h3>Agora não é mais um exercício de um único comando</h3>
        <p>O sistema atende vários clientes. Cada venda pode possuir vários tipos de item, possui regra de desconto, escolha da forma de pagamento e produz um fechamento do dia.</p>
      </div>

      <pre class="command">algoritmo "Cantina_Integrada"
var
   continuar: caractere
   item, quantidadeItens, quantidadeProduto: inteiro
   opcaoPagamento, clientesAtendidos: inteiro
   precoProduto, subtotal, desconto, total, faturamento: real

funcao calcularDesconto(valor: real): real
inicio
   se valor > 100 entao
      retorne valor * 0.10
   senao
      se valor > 50 entao
         retorne valor * 0.05
      senao
         retorne 0
      fimse
   fimse
fimfuncao

inicio
   clientesAtendidos <- 0
   faturamento <- 0
   continuar <- "S"

   enquanto continuar = "S" faca
      subtotal <- 0

      escreva("Quantos tipos de item há nesta venda? ")
      leia(quantidadeItens)

      para item de 1 ate quantidadeItens faca
         escreva("Quantidade do item ", item, ": ")
         leia(quantidadeProduto)
         escreva("Preço unitário: R$ ")
         leia(precoProduto)

         subtotal <- subtotal + quantidadeProduto * precoProduto
      fimpara

      desconto <- calcularDesconto(subtotal)
      total <- subtotal - desconto

      repita
         escreval("1 - Dinheiro")
         escreval("2 - Pix")
         escreval("3 - Cartão")
         escreva("Forma de pagamento: ")
         leia(opcaoPagamento)
      ate opcaoPagamento >= 1 e opcaoPagamento <= 3

      escolha opcaoPagamento
         caso 1
            escreval("Pagamento em dinheiro")
         caso 2
            escreval("Pagamento via Pix")
         caso 3
            escreval("Pagamento com cartão")
      fimescolha

      clientesAtendidos <- clientesAtendidos + 1
      faturamento <- faturamento + total

      escreval("Total: R$ ", total:0:2)
      escreva("Atender outro cliente? S/N: ")
      leia(continuar)
   fimenquanto

   escreval("Clientes atendidos: ", clientesAtendidos)
   escreval("Faturamento: R$ ", faturamento:0:2)

fimalgoritmo</pre>

      <h3>Por que cada estrutura está aí?</h3>
      <ul class="check-list">
        <li><strong>Para:</strong> percorre a quantidade conhecida de tipos de item de uma venda.</li>
        <li><strong>Enquanto:</strong> mantém o atendimento enquanto houver novos clientes.</li>
        <li><strong>Repita:</strong> garante que a forma de pagamento seja solicitada antes de validar.</li>
        <li><strong>Escolha:</strong> trata opções discretas de pagamento.</li>
        <li><strong>Se:</strong> decide a faixa de desconto.</li>
        <li><strong>Contador e acumulador:</strong> produzem o fechamento do dia.</li>
        <li><strong>Função:</strong> isola a responsabilidade de calcular desconto.</li>
      </ul>

      <div class="note-box"><strong>Esta é uma solução de referência, não a única solução possível.</strong> O objetivo é justificar as escolhas, não copiar uma estrutura porque “o professor mandou usar”.</div>`
  }
];

const pythonSteps = [
  {
    id: 1,
    menu: '1 A ponte',
    title: 'A linguagem mudou. A programação mudou?',
    objective: 'Transferir uma solução já conhecida do VisuAlg para Python sem recomeçar a lógica do zero.',
    content: `
      <div class="hero-box">
        <h3>Não vamos “começar tudo de novo em Python”</h3>
        <p>Já sabemos o que o sistema precisa Saber, Fazer e Responder. Agora queremos descobrir como Python expressa essas mesmas ideias.</p>
      </div>

      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">leia(quantidade)
leia(preco)

total <- quantidade * preco

escreval(total)</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">quantidade = int(input("Quantidade: "))
preco = float(input("Preço: "))

total = quantidade * preco

print(total)</pre>
        </div>
      </div>

      <div class="concept-box"><strong>O que mudou?</strong> A sintaxe.<br><strong>O que permaneceu?</strong> Entrada, dados, processamento e saída.</div>

      <h3>Uma diferença importante: input recebe texto</h3>
      <pre class="command">a = input("Primeiro valor: ")
b = input("Segundo valor: ")
print(a + b)</pre>
      <p>Se o usuário digitar 2 e 3, o resultado será <span class="inline-code">23</span>, porque os valores recebidos por <span class="inline-code">input()</span> são textos. Por isso convertemos quando precisamos operar numericamente:</p>
      <pre class="command">quantidade = int(input("Quantidade: "))
preco = float(input("Preço: "))</pre>

      <div class="note-box"><strong>Conceito ≠ comando.</strong> Tipo de dado já existia no nosso raciocínio. Python apenas possui sua própria maneira de trabalhar com tipos e conversões.</div>`
  },
  {
    id: 2,
    menu: '2 Decisões',
    title: 'As mesmas decisões em Python',
    objective: 'Mapear condições, operadores lógicos e decisão múltipla para a sintaxe de Python.',
    content: `
      <h3>Se / Senão</h3>
      <pre class="command">if valor_recebido >= total:
    troco = valor_recebido - total
    print(f"Troco: R$ {troco:.2f}")
else:
    print("Valor insuficiente.")</pre>

      <h3>Operadores lógicos</h3>
      <div class="term-grid">
        <div class="head">Ideia</div><div class="head">VisuAlg</div><div class="head">Python</div>
        <div>E</div><div>e</div><div>and</div>
        <div>OU</div><div>ou</div><div>or</div>
        <div>NÃO</div><div>nao</div><div>not</div>
      </div>

      <h3>Faixas de desconto</h3>
      <pre class="command">if total > 100:
    desconto = total * 0.10
elif total > 50:
    desconto = total * 0.05
else:
    desconto = 0</pre>
      <p>A ordem das condições importa. Uma compra de R$ 150 também é maior que R$ 50; por isso testamos primeiro a faixa mais alta.</p>

      <h3>Escolha/Caso → match/case</h3>
      <pre class="command">match forma_pagamento:
    case 1:
        print("Dinheiro")
    case 2:
        print("Pix")
    case 3:
        print("Cartão")
    case _:
        print("Opção inválida")</pre>

      <div class="note-box">Uma sequência de <span class="inline-code">if / elif</span> também pode resolver muitas escolhas. O importante é perceber o comportamento necessário e escolher uma forma clara de expressá-lo.</div>`
  },
  {
    id: 3,
    menu: '3 Repetições',
    title: 'Repetição: comportamento antes do comando',
    objective: 'Usar while e for e compreender como reproduzir uma repetição com teste no final quando a linguagem não possui Repita nativo.',
    content: `
      <h3>Enquanto → while</h3>
      <pre class="command">continuar = "S"

while continuar == "S":
    # realizar uma venda
    continuar = input("Atender outro cliente? S/N: ").strip().upper()</pre>

      <h3>Para → for</h3>
      <pre class="command">quantidade_itens = int(input("Quantos tipos de item? "))
subtotal = 0.0

for item in range(1, quantidade_itens + 1):
    quantidade = int(input(f"Quantidade do item {item}: "))
    preco = float(input("Preço unitário: "))
    subtotal += quantidade * preco</pre>

      <h3>E o Repita?</h3>
      <p>Python não possui um comando nativo equivalente ao <span class="inline-code">repita ... ate</span> do VisuAlg. A ideia continua existindo e pode ser construída, por exemplo:</p>
      <pre class="command">while True:
    opcao = int(input("Forma de pagamento (1 a 3): "))

    if 1 <= opcao <= 3:
        break</pre>

      <div class="concept-box"><strong>Lição importante:</strong> você não precisa procurar um comando idêntico em todas as linguagens. Primeiro reconheça o comportamento; depois descubra como aquela linguagem o expressa.</div>`
  },
  {
    id: 4,
    menu: '4 Funções e bibliotecas',
    title: 'Organização e recursos prontos em Python',
    objective: 'Criar funções, usar parâmetros/retorno e aproveitar recursos predefinidos e bibliotecas quando fizer sentido.',
    content: `
      <h3>Função criada por nós</h3>
      <pre class="command">def calcular_desconto(total):
    if total > 100:
        return total * 0.10
    if total > 50:
        return total * 0.05
    return 0</pre>

      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong><span class="inline-code">total</span> entra como parâmetro.</div>
        <div class="mbb-card"><strong>FAZER</strong>A função aplica a regra.</div>
        <div class="mbb-card"><strong>RESPONDER</strong><span class="inline-code">return</span> devolve o resultado para quem chamou.</div>
      </div>

      <h3>Funções já disponíveis</h3>
      <pre class="command">round(valor, 2)
abs(diferenca)
len(texto)
max(valores)
min(valores)
sum(valores)</pre>
      <p>Não é necessário memorizar todas. O importante é saber que muitas tarefas comuns já possuem recursos prontos e aprender a consultar documentação.</p>

      <h3>Texto com necessidade real</h3>
      <p>Uma placa ou código de produto pode chegar com espaços e letras minúsculas. Antes de comparar ou armazenar, podemos normalizar:</p>
      <pre class="command">placa = input("Placa: ").strip().upper()</pre>

      <h3>Biblioteca math — um problema geométrico</h3>
      <p>Se uma rampa possui comprimento conhecido e determinado ângulo, podemos calcular a altura usando trigonometria:</p>
      <pre class="command">import math

angulo = float(input("Ângulo em graus: "))
comprimento = float(input("Comprimento da rampa: "))

altura = comprimento * math.sin(math.radians(angulo))
print(f"Altura aproximada: {altura:.2f}")</pre>
      <p>A trigonometria aparece porque o problema precisa dela, e não porque precisamos encaixar <span class="inline-code">sin()</span> em um caixa de cantina.</p>

      <h3>Biblioteca random — venda premiada</h3>
      <pre class="command">import random

numero = random.randint(1, 10)
if numero == 7:
    print("Venda premiada!")</pre>
      <div class="note-box">Geradores comuns de números aleatórios em software são pseudoaleatórios. Para nosso sorteio didático isso é suficiente; aplicações que exigem segurança usam recursos apropriados para esse fim.</div>`
  },
  {
    id: 5,
    menu: '5 Confiabilidade',
    title: 'Funcionar uma vez não basta',
    objective: 'Validar entradas, tratar erros previsíveis, testar casos de fronteira e depurar de forma organizada.',
    content: `
      <div class="hero-box">
        <h3>O usuário real não segue sempre o roteiro perfeito</h3>
        <p>Ele pode digitar texto onde esperamos número, informar um valor impossível ou escolher uma opção inexistente.</p>
      </div>

      <h3>Erro de conversão</h3>
      <pre class="command">while True:
    try:
        quantidade = int(input("Quantidade: "))

        if quantidade > 0:
            break

        print("A quantidade deve ser maior que zero.")

    except ValueError:
        print("Digite um número inteiro.")</pre>

      <div class="mini-grid">
        <div class="mini-card"><strong>Entrada incompatível</strong><br><span class="inline-code">abc</span> não pode ser convertida para inteiro.</div>
        <div class="mini-card"><strong>Regra do problema</strong><br><span class="inline-code">-5</span> é um inteiro válido para Python, mas uma quantidade negativa pode ser inválida para o sistema.</div>
      </div>

      <h3>Três tipos de problema que precisamos reconhecer</h3>
      <ul>
        <li><strong>Sintaxe:</strong> a escrita não segue as regras da linguagem.</li>
        <li><strong>Execução:</strong> o programa encontra uma operação que não consegue realizar naquele momento.</li>
        <li><strong>Lógica:</strong> o programa executa, mas a solução ou o cálculo está errado.</li>
      </ul>

      <h3>Teste com intenção</h3>
      <div class="flow">entrada → resultado esperado → resultado obtido → comparação</div>
      <p>Para uma regra “acima de 50”, teste pelo menos <span class="inline-code">49.99</span>, <span class="inline-code">50.00</span> e <span class="inline-code">50.01</span>. Limites revelam muitos erros de lógica.</p>

      <h3>Depuração</h3>
      <ol>
        <li>Defina o que deveria acontecer.</li>
        <li>Observe o que realmente aconteceu.</li>
        <li>Localize o primeiro ponto em que os valores divergem.</li>
        <li>Formule uma hipótese.</li>
        <li>Corrija e teste novamente.</li>
      </ol>
      <div class="note-box">A IDE pode ajudar com execução passo a passo, breakpoints e inspeção de variáveis. A ferramenta vem depois do raciocínio de depuração.</div>`
  },
  {
    id: 6,
    menu: '6 Aprofunde se precisar',
    title: 'Quando um valor já não basta',
    objective: 'Apresentar coleções e persistência como aprofundamentos naturais, sem deixar que ultrapassem o núcleo do componente.',
    content: `
      <div class="optional-box"><strong>Aprofundamento opcional.</strong> Esta etapa pode ser usada conforme tempo e ritmo da turma. O núcleo do componente não depende dela.</div>

      <h3>Várias vendas relacionadas</h3>
      <p>Se quisermos analisar valores de várias vendas, criar <span class="inline-code">venda1</span>, <span class="inline-code">venda2</span>, <span class="inline-code">venda3</span>... rapidamente deixa de fazer sentido.</p>
      <pre class="command">vendas = [25.0, 18.5, 62.0, 40.0]

for venda in vendas:
    print(venda)</pre>
      <p>Em Python, listas permitem reunir vários valores. No VisuAlg, a ideia correspondente pode aparecer com vetores.</p>

      <h3>Persistência</h3>
      <p>Uma lista existe durante a execução. Se o programa fecha, precisamos de algum armazenamento persistente para recuperar os dados depois.</p>
      <div class="flow">memória durante a execução → arquivo → programa fecha → arquivo → nova execução</div>

      <p>Esse ponto abre caminho para arquivos e, em problemas maiores, para bancos de dados. Não precisamos antecipar todo esse conteúdo aqui.</p>

      <div class="deep-box"><strong>Voltando ao bit e ao Byte.</strong> Textos, números e arquivos acabam armazenados como bytes. No caso de texto, uma codificação define como caracteres são representados em bytes; por isso “um caractere” não significa necessariamente “um byte”.</div>`
  }
];

const aplicarSteps = [
  {
    id: 1,
    menu: '1 Projeto final',
    title: 'Aplicar: Sistema de Estacionamento',
    objective: 'Transferir o raciocínio para um problema diferente, sem revelar previamente quais comandos devem ser usados.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Aplicar</span>
        <h3>A cantina ficou para trás</h3>
        <p>Agora o aluno recebe outro problema. O objetivo não é trocar “salgado” por “carro”; é decidir quais ferramentas de programação são necessárias.</p>
      </div>

      <div class="example-box"><strong>Problema:</strong> um estacionamento precisa registrar atendimentos, calcular o valor devido conforme tipo de veículo e tempo de permanência, considerar regras para mensalistas, registrar forma de pagamento e apresentar o movimento do dia.</div>

      <h3>Comece somente com as três perguntas</h3>
      <div class="mbb-grid">
        <div class="mbb-card"><strong>SABER</strong>Quais informações são indispensáveis para realizar um atendimento?</div>
        <div class="mbb-card"><strong>FAZER</strong>Quais cálculos, comparações, validações e registros serão necessários?</div>
        <div class="mbb-card"><strong>RESPONDER</strong>O que o atendente e o fechamento do dia precisam receber?</div>
      </div>

      <p>Depois o aluno deve decidir:</p>
      <ul>
        <li>quais dados precisam ser guardados e de que tipos;</li>
        <li>onde existem decisões;</li>
        <li>o que se repete;</li>
        <li>quais responsabilidades merecem funções;</li>
        <li>o que precisa ser validado;</li>
        <li>quais resultados precisam ser acumulados ou contados.</li>
      </ul>

      <details class="answer-box">
        <summary>Ver possíveis decisões depois de planejar</summary>
        <div class="answer-content">
          <p>Uma solução pode usar condição para regras de permanência ou desconto, escolha para tipos/opções, repetição para manter o sistema atendendo, contador para veículos e acumulador para faturamento. Isso é uma referência, não um roteiro obrigatório.</p>
        </div>
      </details>

      <div class="concept-box"><strong>O teste real de aprendizagem:</strong> reconhecer sozinho que o problema precisa de uma estrutura, em vez de usar uma estrutura porque o enunciado mandou.</div>`
  },
  {
    id: 2,
    menu: '2 Testar e explicar',
    title: 'Como saber se o sistema está realmente funcionando?',
    objective: 'Testar casos normais, limites e entradas inválidas e conseguir explicar a lógica sem depender do código na tela.',
    content: `
      <h3>Bateria mínima de testes</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Caso normal</strong><br>Veículo e tempo válidos, pagamento comum.</div>
        <div class="mini-card"><strong>Fronteira</strong><br>Exatamente no limite em que uma regra muda.</div>
        <div class="mini-card"><strong>Formato inválido</strong><br>Texto em um campo numérico.</div>
        <div class="mini-card"><strong>Valor impossível</strong><br>Tempo negativo ou opção fora da faixa.</div>
        <div class="mini-card"><strong>Primeiro atendimento</strong><br>Conferir inicialização de contadores e acumuladores.</div>
        <div class="mini-card"><strong>Vários atendimentos</strong><br>Conferir fechamento e totais acumulados.</div>
      </div>

      <h3>Bugs propositais</h3>
      <pre class="command">valor = horas + tarifa        # deveria multiplicar
faturamento = valor           # deveria acumular
if horas > 3:                 # a regra talvez exija >=</pre>
      <p>O aluno deve comparar esperado e obtido, localizar a primeira divergência e justificar a correção.</p>

      <h3>Explique sem mostrar o código</h3>
      <div class="task-box"><p>Descreva verbalmente o fluxo do sistema: o que ele recebe, quais regras aplica, quando repete, como encerra e quais resultados produz. Se o raciocínio não puder ser explicado, o código sozinho não prova compreensão.</p></div>`
  },
  {
    id: 3,
    menu: '3 Desktop e eventos',
    title: 'Do console para uma aplicação desktop',
    objective: 'Mostrar que uma interface reage a eventos e conectar a lógica já conhecida a uma pequena aplicação de janela.',
    content: `
      <div class="hero-box">
        <h3>Quem decide a próxima ação?</h3>
        <p>Num programa de console, seguimos normalmente uma sequência controlada pelo próprio fluxo. Numa janela, o usuário pode clicar em diferentes controles em momentos diferentes. O programa precisa reagir aos eventos.</p>
      </div>

      <p>Em uma instalação de Python que inclua Tkinter, podemos construir uma pequena janela para calcular o valor do estacionamento:</p>
      <pre class="command">import tkinter as tk
from tkinter import messagebox

TARIFA_HORA = 8.0

def calcular():
    try:
        horas = float(entrada_horas.get().replace(",", "."))
        if horas <= 0:
            raise ValueError

        total = horas * TARIFA_HORA
        resultado.config(text=f"Total: R$ {total:.2f}")

    except ValueError:
        messagebox.showerror(
            "Dado inválido",
            "Informe um número de horas maior que zero."
        )

janela = tk.Tk()
janela.title("Estacionamento")

rotulo = tk.Label(janela, text="Horas de permanência:")
rotulo.pack(padx=16, pady=(16, 4))

entrada_horas = tk.Entry(janela)
entrada_horas.pack(padx=16, pady=4)

botao = tk.Button(janela, text="Calcular", command=calcular)
botao.pack(padx=16, pady=8)

resultado = tk.Label(janela, text="Total: R$ 0,00")
resultado.pack(padx=16, pady=(4, 16))

janela.mainloop()</pre>

      <div class="concept-box"><strong>O ponto importante não é decorar Tkinter.</strong> O clique no botão é um evento; quando ele ocorre, a função <span class="inline-code">calcular</span> é executada.</div>

      <p>A lógica continua conhecida:</p>
      <div class="flow">SABER → ler o valor do campo
FAZER → validar e calcular
RESPONDER → atualizar a interface ou informar o erro</div>

      <h3>Execução, compilação e distribuição</h3>
      <p>Python normalmente executa o código por meio do interpretador. Quando for necessário entregar uma aplicação de janela como um executável independente, pode-se usar uma ferramenta de empacotamento do ambiente. Uma possibilidade é o PyInstaller:</p>
      <pre class="command">python -m pip install pyinstaller
pyinstaller --onefile --windowed estacionamento.py</pre>
      <p>O resultado é um pacote executável para distribuição. <strong>Empacotar não é a mesma coisa que compilar código Python para código nativo</strong>; por isso fazemos a distinção em vez de usar os termos como se fossem sinônimos.</p>
      <div class="note-box">Esta etapa depende do computador e das permissões do laboratório. Se não houver instalação de pacotes, a aplicação desktop continua válida sendo executada pelo Python.</div>`
  },
  {
    id: 4,
    menu: '4 Paradigmas',
    title: 'Existem outras maneiras de organizar programas',
    objective: 'Reconhecer programação estruturada, orientada a eventos e orientada a objetos a partir de experiências já construídas.',
    content: `
      <div class="hero-box">
        <h3>Agora os nomes têm referência concreta</h3>
        <p>Não começamos o curso decorando paradigmas. Primeiro programamos. Agora podemos olhar para o que fizemos e identificar maneiras diferentes de organizar o software.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Programação estruturada</strong><br>Organiza a solução com sequência, decisões, repetições e divisão em funções/procedimentos. Foi a base principal deste módulo.</div>
        <div class="mini-card"><strong>Orientada a eventos</strong><br>O programa reage a acontecimentos: clique, digitação, mensagem, sensor, temporizador etc. A janela anterior é um exemplo.</div>
        <div class="mini-card"><strong>Orientada a objetos</strong><br>Organiza software em torno de entidades que reúnem dados e comportamentos relacionados, como Produto, Cliente ou Venda.</div>
        <div class="mini-card"><strong>Sistemas reais</strong><br>Podem combinar ideias de mais de um paradigma. Esses rótulos não são caixas absolutas.</div>
      </div>

      <h3>Uma primeira visão de objeto</h3>
      <p>Na cantina, um <strong>Produto</strong> pode possuir descrição, preço e estoque. Uma <strong>Venda</strong> pode reunir itens, total e forma de pagamento. Em orientação a objetos, começamos a pensar também em quais dados e comportamentos pertencem a cada entidade.</p>

      <div class="deep-box"><strong>Existe muito mais aqui.</strong> Classes, herança, composição, interfaces, arquitetura, persistência, aplicações web, mobile e sistemas distribuídos ampliam bastante esse mundo. Neste componente, o objetivo é reconhecer que existem outras formas de organizar software e saber que o aprofundamento virá quando houver necessidade.</div>`
  },
  {
    id: 5,
    menu: '5 Fechamento',
    title: 'O que realmente deve ficar',
    objective: 'Fechar o componente reforçando transferência de raciocínio, e não memorização de uma linguagem específica.',
    content: `
      <div class="hero-box">
        <h3>Você começou com uma venda simples</h3>
        <p>E terminou capaz de analisar um problema, representar a solução, escolher estruturas, programar em mais de uma linguagem, testar, depurar e reconhecer diferentes formas de organizar um programa.</p>
      </div>

      <div class="flow">problema
↓
Saber → Fazer → Responder
↓
algoritmo
↓
pseudocódigo / fluxograma
↓
programa
↓
dados e memória → bit / Byte
↓
expressões e operadores
↓
decisões
↓
repetições
↓
funções e bibliotecas
↓
VisuAlg → Python
↓
testes e depuração
↓
aplicação em outro problema</div>

      <div class="concept-box"><strong>O objetivo não é sair dizendo “eu sei VisuAlg” ou apenas “eu sei Python”.</strong><br>O objetivo é saber transformar um problema em uma solução programável e aprender como expressar essa solução nas ferramentas adequadas.</div>

      <div class="task-box">
        <h4>Desafio final</h4>
        <p>Escolha um problema diferente dos exemplos do módulo. Antes de programar, descreva o usuário, a necessidade, o que o sistema precisa Saber, Fazer e Responder. Depois justifique quais estruturas escolheu e teste a solução com casos normais e limites.</p>
      </div>

      <div class="deep-box"><strong>E depois?</strong> O programa pode ganhar interface, dados persistentes, conexão com outros sistemas, sensores, web, mobile e muitas outras camadas. O próximo passo deve nascer de uma nova necessidade — como fizemos desde o começo.</div>`
  }
];

const stepGroups = {
  roteiro: roteiroSteps,
  pensar: pensarSteps,
  visualg: visualgSteps,
  python: pythonSteps,
  aplicar: aplicarSteps
};

let currentModule = 'roteiro';
let currentIndex = 0;

function stepsFor(moduleName) {
  return stepGroups[moduleName] || [];
}

function renderMenu() {
  const menu = document.getElementById('menu');
  const steps = stepsFor(currentModule);
  menu.innerHTML = '<h3>Etapas</h3>';

  steps.forEach((step, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-btn' + (index === currentIndex ? ' active' : '');
    btn.textContent = step.menu;
    btn.addEventListener('click', () => {
      currentIndex = index;
      renderMenu();
      renderStep();
    });
    menu.appendChild(btn);
  });
}

function renderStep() {
  const steps = stepsFor(currentModule);
  const step = steps[currentIndex];
  if (!step) return;

  document.getElementById('stepTitle').textContent = step.title;
  document.getElementById('objective').textContent = step.objective;
  const lesson = document.getElementById('lesson');

  const prevDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === steps.length - 1;

  lesson.innerHTML = step.content + `
    <div class="lesson-footer">
      <button type="button" id="prevStep" ${prevDisabled ? 'disabled' : ''}>← Anterior</button>
      <button type="button" id="nextStep" ${nextDisabled ? 'disabled' : ''}>Próxima →</button>
    </div>`;

  lesson.scrollTop = 0;

  const prev = document.getElementById('prevStep');
  const next = document.getElementById('nextStep');
  if (prev && !prevDisabled) {
    prev.addEventListener('click', () => {
      currentIndex -= 1;
      renderMenu();
      renderStep();
    });
  }
  if (next && !nextDisabled) {
    next.addEventListener('click', () => {
      currentIndex += 1;
      renderMenu();
      renderStep();
    });
  }
}

function setModule(moduleName) {
  currentModule = moduleName;
  currentIndex = 0;

  document.querySelectorAll('.module-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.module === moduleName);
  });

  renderMenu();
  renderStep();
}

document.querySelectorAll('.module-btn').forEach(btn => {
  btn.addEventListener('click', () => setModule(btn.dataset.module));
});

renderMenu();
renderStep();
