const steps=[
{id:0,menu:'Intro',title:'Como usar esta apostila',objective:'Aprender VisuAlg do zero, copiando, executando e observando a saída.',intro:true},
{id:1,menu:'1 Lógica',title:'1 — Conceitos de Lógica e Algoritmos',objective:'Compreender lógica e algoritmo antes de programar.',theoryPage:true,content:`<div class="theory-page"><div class="theory-hero"><h3>Página teórica — Lógica e Algoritmos</h3><p>Esta primeira etapa é somente conceitual. O aluno ainda não programa: aprende a pensar, organizar passos, identificar entrada, processamento e saída, e resolver problemas simples no papel.</p></div><h3>Lógica e algoritmos</h3><p><strong>Lógica</strong> é organizar o pensamento de forma coerente para resolver um problema. Em programação, isso significa pensar em uma sequência de ações que faça sentido.</p><p><strong>Algoritmo</strong> é uma sequência finita, ordenada e clara de passos para resolver uma tarefa.</p><div class="intro-grid"><div class="intro-box"><strong>Sequência</strong><br>Os passos precisam estar em uma ordem correta.</div><div class="intro-box"><strong>Clareza</strong><br>Cada instrução deve ser objetiva e sem ambiguidade.</div><div class="intro-box"><strong>Fim definido</strong><br>O algoritmo precisa terminar em algum momento.</div></div><h4>Exemplo 1 — Algoritmo do dia a dia</h4><div class="example-box"><strong>Problema:</strong> preparar um café simples.<ol><li>Pegar uma xícara.</li><li>Colocar café.</li><li>Aquecer a água.</li><li>Colocar a água na xícara.</li><li>Misturar.</li><li>Servir.</li></ol></div><h4>Exemplo 2 — Melhorando a lógica</h4><p>O algoritmo anterior funciona, mas pode ser mais claro se explicar quantidades e condições.</p><div class="example-box"><ol><li>Pegar uma xícara limpa.</li><li>Colocar uma colher de café solúvel.</li><li>Aquecer 200 ml de água.</li><li>Se quiser açúcar, colocar açúcar.</li><li>Misturar até dissolver.</li><li>Servir.</li></ol></div><h4>Conceitos importantes</h4><ul><li><strong>Entrada:</strong> informação necessária para resolver o problema.</li><li><strong>Processamento:</strong> ação feita com os dados.</li><li><strong>Saída:</strong> resultado apresentado.</li></ul><div class="example-box"><strong>Exemplo:</strong> calcular a média de duas notas.<br><br><strong>Entrada:</strong> nota 1 e nota 2.<br><strong>Processamento:</strong> somar as notas e dividir por 2.<br><strong>Saída:</strong> média final.</div><div class="theory-two"><div class="example-box"><strong>Exemplo prático sem programação:</strong><br>Problema: decidir se o aluno foi aprovado.<br><br>Entrada: nota final.<br>Processamento: verificar se a nota é maior ou igual a 6.<br>Saída: aprovado ou recuperação.</div><div class="example-box"><strong>Teste de lógica:</strong><br>Se a nota for 8, a saída é aprovado.<br>Se a nota for 5, a saída é recuperação.<br>Se a nota for 6, a saída é aprovado.</div></div><div class="exercise-box"><strong>Exercício 1:</strong> escreva, em linguagem comum, um algoritmo para escovar os dentes com pelo menos 6 passos.<br><br><strong>Exercício 2:</strong> identifique entrada, processamento e saída em um algoritmo para calcular o preço total de uma compra.<br><br><strong>Exercício 3:</strong> crie um algoritmo, em português comum, para decidir se uma pessoa pode entrar no cinema usando idade mínima de 12 anos.</div></div>`},
{id:2,menu:'2 Fluxo',title:'2 — Construção de Fluxogramas',objective:'Compreender símbolos, fluxo, sequência, decisão e repetição antes de programar.',theoryPage:true,content:`<div class="theory-page flowchart-page">
  <div class="theory-hero">
    <h3>Página teórica — Fluxogramas</h3>
    <p>Fluxograma é o desenho da lógica de um algoritmo. Ele mostra, em ordem, onde o processo começa, quais dados entram, quais ações são feitas, quais decisões são tomadas, quando ocorre repetição e onde o processo termina.</p>
  </div>

  <h3>1. O que um fluxograma precisa mostrar?</h3>
  <p>Um fluxograma de algoritmo deve deixar claro o caminho completo da solução. Para isso, ele normalmente contém <strong>início</strong>, <strong>entrada de dados</strong>, <strong>processamento</strong>, <strong>saída</strong>, <strong>decisão</strong> e, quando necessário, <strong>repetição</strong>. As setas indicam a direção do raciocínio.</p>

  <div class="intro-grid">
    <div class="intro-box"><strong>Entrada</strong><br>Dados recebidos do usuário, como nome, idade, nota ou preço.</div>
    <div class="intro-box"><strong>Processamento</strong><br>Cálculos ou ações feitas com os dados, como média, soma ou contador.</div>
    <div class="intro-box"><strong>Saída</strong><br>Resultado exibido ao usuário, como mensagem, valor calculado ou classificação.</div>
  </div>

  <h3>2. Símbolos básicos usados em fluxogramas</h3>
  <p>Os símbolos abaixo são os mais usados em fluxogramas de programação. Eles seguem a convenção comum: oval para início/fim, paralelogramo para entrada/saída, retângulo para processamento, losango para decisão, círculo para conector e setas para fluxo.</p>

  <div class="example-box svg-box">
    <svg viewBox="0 0 1120 520" width="100%" height="520" role="img" aria-label="Símbolos básicos de fluxograma">
      <defs>
        <marker id="setaLegenda" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" />
        </marker>
      </defs>
      <rect x="20" y="20" width="1080" height="480" rx="18" fill="#f8fbff" stroke="#d6e0ee"/>

      <rect x="70" y="70" width="190" height="70" rx="35" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="165" y="101" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Terminal</text>
      <text x="165" y="126" text-anchor="middle" font-size="14" fill="#334155">Início ou fim</text>

      <polygon points="365,70 595,70 555,140 325,140" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="460" y="101" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Entrada/Saída</text>
      <text x="460" y="126" text-anchor="middle" font-size="14" fill="#334155">Ler ou mostrar dados</text>

      <rect x="720" y="70" width="220" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="830" y="101" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Processamento</text>
      <text x="830" y="126" text-anchor="middle" font-size="14" fill="#334155">Cálculo ou atribuição</text>

      <polygon points="170,220 270,285 170,350 70,285" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="170" y="280" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Decisão</text>
      <text x="170" y="305" text-anchor="middle" font-size="14" fill="#334155">Sim / Não</text>

      <line x1="340" y1="285" x2="540" y2="285" stroke="#1e3a8a" stroke-width="5" marker-end="url(#setaLegenda)"/>
      <text x="440" y="260" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Seta de fluxo</text>
      <text x="440" y="325" text-anchor="middle" font-size="14" fill="#334155">Mostra a direção dos passos</text>

      <circle cx="675" cy="285" r="45" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
      <text x="675" y="281" text-anchor="middle" font-size="17" font-weight="800" fill="#0f172a">Conector</text>
      <text x="675" y="305" text-anchor="middle" font-size="13" fill="#334155">continuação</text>

      <path d="M820 245 h210 v85 h-210 z" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
      <line x1="840" y1="245" x2="840" y2="330" stroke="#0284c7" stroke-width="3"/>
      <line x1="1010" y1="245" x2="1010" y2="330" stroke="#0284c7" stroke-width="3"/>
      <text x="925" y="280" text-anchor="middle" font-size="18" font-weight="800" fill="#0f172a">Sub-rotina</text>
      <text x="925" y="306" text-anchor="middle" font-size="14" fill="#334155">processo separado</text>

      <rect x="70" y="405" width="970" height="54" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="555" y="438" text-anchor="middle" font-size="17" fill="#0f172a">Regra prática: todo fluxograma deve ter começo, fim e setas conectando todos os caminhos possíveis.</text>
    </svg>
  </div>

  <h3>3. Exemplo completo — estrutura sequencial</h3>
  <p>Na estrutura sequencial, os passos acontecem um depois do outro. Exemplo: ler duas notas, calcular a média e mostrar o resultado.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1000 680" width="100%" height="680" role="img" aria-label="Fluxograma sequencial para calcular média de duas notas">
      <defs><marker id="seqSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="950" height="640" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="500" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Calcular média de duas notas</text>

      <rect x="400" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="500" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="500" y1="150" x2="500" y2="195" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <polygon points="380,200 650,200 620,270 350,270" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="500" y="230" text-anchor="middle" font-size="17" font-weight="800">Entrada</text>
      <text x="500" y="253" text-anchor="middle" font-size="15">Ler nota1 e nota2</text>
      <line x1="500" y1="270" x2="500" y2="315" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <rect x="345" y="320" width="310" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="500" y="350" text-anchor="middle" font-size="17" font-weight="800">Processamento</text>
      <text x="500" y="374" text-anchor="middle" font-size="15">media ← (nota1 + nota2) / 2</text>
      <line x1="500" y1="390" x2="500" y2="435" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <polygon points="380,440 650,440 620,510 350,510" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="500" y="470" text-anchor="middle" font-size="17" font-weight="800">Saída</text>
      <text x="500" y="493" text-anchor="middle" font-size="15">Mostrar media</text>
      <line x1="500" y1="510" x2="500" y2="555" stroke="#1e3a8a" stroke-width="4" marker-end="url(#seqSeta)"/>

      <rect x="400" y="560" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="500" y="597" text-anchor="middle" font-size="18" font-weight="800">Fim</text>
    </svg>
  </div>

  <h3>4. Exemplo completo — estrutura de decisão</h3>
  <p>Na decisão, o algoritmo faz uma pergunta lógica. O caminho muda conforme a resposta: verdadeiro/falso, sim/não.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1050 760" width="100%" height="760" role="img" aria-label="Fluxograma de decisão para maioridade">
      <defs><marker id="decSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="1000" height="720" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="525" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Verificar maioridade</text>

      <rect x="425" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="525" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="525" y1="150" x2="525" y2="195" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>

      <polygon points="405,200 675,200 645,270 375,270" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="525" y="230" text-anchor="middle" font-size="17" font-weight="800">Entrada</text>
      <text x="525" y="253" text-anchor="middle" font-size="15">Ler idade</text>
      <line x1="525" y1="270" x2="525" y2="325" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>

      <polygon points="525,330 650,410 525,490 400,410" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="525" y="400" text-anchor="middle" font-size="17" font-weight="900">idade &gt;= 18?</text>
      <text x="525" y="425" text-anchor="middle" font-size="14">decisão</text>

      <line x1="400" y1="410" x2="230" y2="410" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <text x="310" y="390" font-size="16" font-weight="900" fill="#14532d">Sim</text>
      <polygon points="95,375 230,375 205,445 70,445" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="150" y="405" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="150" y="428" text-anchor="middle" font-size="14">Maior de idade</text>

      <line x1="650" y1="410" x2="820" y2="410" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <text x="730" y="390" font-size="16" font-weight="900" fill="#7f1d1d">Não</text>
      <polygon points="845,375 985,375 960,445 820,445" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="902" y="405" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="902" y="428" text-anchor="middle" font-size="14">Menor de idade</text>

      <path d="M150 445 V610 H525" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <path d="M902 445 V610 H625" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#decSeta)"/>
      <rect x="425" y="580" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="525" y="617" text-anchor="middle" font-size="18" font-weight="800">Fim</text>
    </svg>
  </div>

  <h3>5. Exemplo completo — estrutura de repetição</h3>
  <p>Na repetição, uma parte do algoritmo volta a ser executada enquanto uma condição for verdadeira. O fluxograma precisa mostrar claramente o ponto de retorno.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1100 850" width="100%" height="850" role="img" aria-label="Fluxograma de repetição para mostrar números de 1 a 10">
      <defs><marker id="repSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="1050" height="810" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="550" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Mostrar os números de 1 até 10</text>

      <rect x="450" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="550" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="550" y1="150" x2="550" y2="195" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>

      <rect x="405" y="200" width="290" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="550" y="230" text-anchor="middle" font-size="17" font-weight="800">Processamento</text>
      <text x="550" y="253" text-anchor="middle" font-size="15">contador ← 1</text>
      <line x1="550" y1="270" x2="550" y2="325" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>

      <polygon points="550,330 690,420 550,510 410,420" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="550" y="410" text-anchor="middle" font-size="17" font-weight="900">contador &lt;= 10?</text>
      <text x="550" y="435" text-anchor="middle" font-size="14">condição do laço</text>

      <line x1="410" y1="420" x2="250" y2="420" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <text x="325" y="397" font-size="16" font-weight="900" fill="#14532d">Sim</text>
      <polygon points="105,385 250,385 225,455 80,455" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="165" y="415" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="165" y="438" text-anchor="middle" font-size="14">Mostrar contador</text>

      <line x1="165" y1="455" x2="165" y2="555" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <rect x="60" y="560" width="210" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
      <text x="165" y="590" text-anchor="middle" font-size="16" font-weight="800">Processamento</text>
      <text x="165" y="613" text-anchor="middle" font-size="14">contador ← contador + 1</text>

      <path d="M270 595 H330 V235 H405" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <text x="310" y="575" font-size="15" font-weight="900" fill="#1e3a8a">volta para testar de novo</text>

      <line x1="690" y1="420" x2="840" y2="420" stroke="#1e3a8a" stroke-width="4" marker-end="url(#repSeta)"/>
      <text x="760" y="397" font-size="16" font-weight="900" fill="#7f1d1d">Não</text>
      <rect x="840" y="390" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="940" y="427" text-anchor="middle" font-size="18" font-weight="800">Fim</text>

      <rect x="385" y="690" width="650" height="70" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="710" y="718" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">Leitura do fluxo</text>
      <text x="710" y="744" text-anchor="middle" font-size="15" fill="#334155">Enquanto contador for menor ou igual a 10, mostra o número, soma 1 e volta para a decisão.</text>
    </svg>
  </div>

  <h3>6. Exemplo completo — repetição com entrada, decisão, processamento e saída</h3>
  <p>Este exemplo mostra uma validação: o usuário deve digitar uma nota entre 0 e 10. Se digitar valor inválido, o fluxograma volta para a entrada.</p>
  <div class="example-box svg-box">
    <svg viewBox="0 0 1100 820" width="100%" height="820" role="img" aria-label="Fluxograma de validação de nota entre zero e dez">
      <defs><marker id="valSeta" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1e3a8a" /></marker></defs>
      <rect x="25" y="20" width="1050" height="780" rx="18" fill="#ffffff" stroke="#d6e0ee"/>
      <text x="550" y="60" text-anchor="middle" font-size="24" font-weight="900" fill="#114b9e">Validar uma nota entre 0 e 10</text>

      <rect x="450" y="90" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="550" y="127" text-anchor="middle" font-size="18" font-weight="800">Início</text>
      <line x1="550" y1="150" x2="550" y2="205" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>

      <polygon points="405,210 715,210 675,285 365,285" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="550" y="242" text-anchor="middle" font-size="17" font-weight="800">Entrada</text>
      <text x="550" y="266" text-anchor="middle" font-size="15">Ler nota</text>
      <line x1="550" y1="285" x2="550" y2="340" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>

      <polygon points="550,345 715,445 550,545 385,445" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="550" y="435" text-anchor="middle" font-size="17" font-weight="900">nota &gt;= 0</text>
      <text x="550" y="458" text-anchor="middle" font-size="17" font-weight="900">e nota &lt;= 10?</text>

      <line x1="715" y1="445" x2="860" y2="445" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>
      <text x="780" y="422" font-size="16" font-weight="900" fill="#14532d">Sim</text>
      <polygon points="880,410 1040,410 1010,480 850,480" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="945" y="440" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="945" y="463" text-anchor="middle" font-size="14">Nota válida</text>
      <line x1="945" y1="480" x2="945" y2="620" stroke="#1e3a8a" stroke-width="4"/>
      <line x1="945" y1="620" x2="650" y2="620" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>

      <line x1="385" y1="445" x2="225" y2="445" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>
      <text x="300" y="422" font-size="16" font-weight="900" fill="#7f1d1d">Não</text>
      <polygon points="75,410 225,410 195,480 45,480" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
      <text x="135" y="440" text-anchor="middle" font-size="16" font-weight="800">Saída</text>
      <text x="135" y="463" text-anchor="middle" font-size="14">Nota inválida</text>
      <path d="M135 410 V250 H365" fill="none" stroke="#1e3a8a" stroke-width="4" marker-end="url(#valSeta)"/>
      <text x="150" y="230" font-size="15" font-weight="900" fill="#1e3a8a">volta para digitar novamente</text>

      <rect x="450" y="590" width="200" height="60" rx="30" fill="#dbeafe" stroke="#1967d2" stroke-width="3"/>
      <text x="550" y="627" text-anchor="middle" font-size="18" font-weight="800">Fim</text>
    </svg>
  </div>

  <div class="exercise-box">
    <strong>Exercício 1:</strong> desenhe um fluxograma sequencial para ler o preço e a quantidade de um produto, calcular o total e mostrar o total.<br><br>
    <strong>Exercício 2:</strong> desenhe um fluxograma de decisão para ler uma nota e mostrar “Aprovado” se a nota for maior ou igual a 6; caso contrário, mostrar “Reprovado”.<br><br>
    <strong>Exercício 3:</strong> desenhe um fluxograma de repetição para mostrar os números de 1 até 10.<br><br>
    <strong>Exercício 4:</strong> desenhe um fluxograma de validação para ler uma idade. Enquanto a idade for menor que 0, pedir novamente. Ao final, mostrar “idade cadastrada”.
  </div>
</div>`},{id:3,menu:'3 Estrutura',title:'3 — Primeiro Programa no VisuAlg',objective:'Conhecer a estrutura mínima de um algoritmo.',code:`algoritmo "Ola_Mundo"
inicio
   escreval("Olá, mundo!")
   escreval("Meu primeiro programa no VisuAlg.")
fimalgoritmo`,added:`Conceito:
Todo programa no VisuAlg precisa de uma estrutura básica.

Sintaxe:
algoritmo "Nome_Do_Algoritmo"
inicio
   comandos
fimalgoritmo`,out:`Olá, mundo!
Meu primeiro programa no VisuAlg.`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que mostre seu nome, sua turma e uma frase dizendo: "Estou aprendendo lógica de programação".`},
{id:4,menu:'4 Variáveis',title:'4 — Memória, Tipos de Dados e Variáveis',objective:'Guardar dados na memória usando variáveis.',code:`algoritmo "Variaveis_Basicas"
var
   idade: inteiro
   altura: real
   nome: caractere
   aprovado: logico
inicio
   idade <- 15
   altura <- 1.72
   nome <- "Ana"
   aprovado <- verdadeiro

   escreval("Nome: ", nome)
   escreval("Idade: ", idade)
   escreval("Altura: ", altura)
   escreval("Aprovado: ", aprovado)
fimalgoritmo`,added:`Conceito:
Variável é um espaço da memória usado para guardar um valor. Cada variável possui nome e tipo.

Tipos usados:
inteiro: números sem casas decimais.
real: números com casas decimais.
caractere: textos.
logico: verdadeiro ou falso.

Sintaxe:
var
   nomeDaVariavel: tipo`,out:`Nome: Ana
Idade: 15
Altura: 1.72
Aprovado: VERDADEIRO`,note:`<span class="badge">Exercício</span><br>Crie variáveis para nome de um produto, preço, quantidade e disponível. Atribua valores e mostre tudo na tela.`},
{id:5,menu:'5 Entrada',title:'5 — Entrada, Saída e Conversão Simples',objective:'Ler dados digitados pelo usuário e mostrar respostas.',code:`algoritmo "Entrada_Saida"
var
   nome: caractere
   idade: inteiro
inicio
   escreva("Digite seu nome: ")
   leia(nome)

   escreva("Digite sua idade: ")
   leia(idade)

   escreval("Olá, ", nome, "!")
   escreval("Você tem ", idade, " anos.")
fimalgoritmo`,added:`Conceito:
Entrada é quando o usuário digita dados. Saída é quando o programa mostra informações na tela.

Sintaxe:
escreva("mensagem")
leia(variavel)
escreval("mensagem", variavel)

Diferença:
escreva mantém o cursor na mesma linha.
escreval pula para a próxima linha.`,out:`Digite seu nome: Maria
Digite sua idade: 16
Olá, Maria!
Você tem 16 anos.`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que leia o nome de um aluno e duas notas. Depois, mostre os dados digitados na tela.`},
{id:6,menu:'6 Operadores',title:'6 — Operadores Aritméticos, Relacionais e Lógicos',objective:'Usar cálculos e comparações.',code:`algoritmo "Operadores"
var
   a, b, soma: inteiro
   maior: logico
inicio
   a <- 10
   b <- 5
   soma <- a + b
   maior <- a > b

   escreval("Soma: ", soma)
   escreval("A é maior que B? ", maior)
   escreval("Dobro de A: ", a * 2)
   escreval("Resto de 10 dividido por 3: ", 10 % 3)
fimalgoritmo`,added:`Conceito:
Operadores permitem calcular, comparar e montar condições lógicas.

Aritméticos:
+ soma | - subtração | * multiplicação | / divisão | % resto | ^ potência

Relacionais:
> maior | < menor | >= maior ou igual | <= menor ou igual | = igual | <> diferente

Lógicos:
e: as duas condições precisam ser verdadeiras.
ou: pelo menos uma condição precisa ser verdadeira.
nao: inverte o valor lógico.`,out:`Soma: 15
A é maior que B? VERDADEIRO
Dobro de A: 20
Resto de 10 dividido por 3: 1`,note:`<span class="badge">Exercício</span><br>Leia dois números e mostre: soma, subtração, multiplicação, divisão e se o primeiro é maior que o segundo.`},
{id:7,menu:'7 Verdade',title:'7 — Expressões e Tabela Verdade',objective:'Entender resultados verdadeiro/falso.',code:`algoritmo "Tabela_Verdade"
var
   idade: inteiro
   temCarteira: logico
inicio
   idade <- 20
   temCarteira <- verdadeiro

   escreval("Pode dirigir? ", (idade >= 18) e (temCarteira = verdadeiro))
   escreval("É menor de idade? ", idade < 18)
   escreval("Não tem carteira? ", nao temCarteira)
fimalgoritmo`,added:`Conceito:
Expressões lógicas produzem resultado verdadeiro ou falso. A tabela verdade ajuda a prever esses resultados.

Sintaxe:
(condicao1) e (condicao2)
(condicao1) ou (condicao2)
nao condicao`,out:`Pode dirigir? VERDADEIRO
É menor de idade? FALSO
Não tem carteira? FALSO`,note:`<span class="badge">Exercício</span><br>Crie um algoritmo que informe se uma pessoa pode entrar em um evento: idade maior ou igual a 18 e convite verdadeiro.`},
{id:8,menu:'8 Mesa',title:'8 — Teste de Mesa',objective:'Simular manualmente os valores das variáveis.',code:`algoritmo "Teste_De_Mesa"
var
   x, y, resultado: inteiro
inicio
   x <- 4
   y <- 3
   resultado <- x + y * 2

   escreval("x = ", x)
   escreval("y = ", y)
   escreval("resultado = ", resultado)
fimalgoritmo`,added:`Conceito:
Teste de mesa é simular o algoritmo manualmente antes de executar. Serve para descobrir erros de lógica.

Como fazer:
1. Liste as variáveis.
2. Execute cada linha mentalmente.
3. Atualize os valores.
4. Confira a saída esperada.`,out:`x = 4
y = 3
resultado = 10`,note:`<span class="badge">Exercício</span><br>Faça o teste de mesa deste cálculo antes de executar: a <- 5; b <- 2; c <- a * b + 3.`},
{id:9,menu:'9 Se',title:'9 — Decisão Simples e Composta',objective:'Executar comandos conforme uma condição.',code:`algoritmo "Aprovacao"
var
   nota: real
inicio
   escreva("Digite a nota: ")
   leia(nota)

   se nota >= 6 entao
      escreval("Aluno aprovado")
   senao
      escreval("Aluno reprovado")
   fimse
fimalgoritmo`,added:`Conceito:
Decisão permite executar comandos diferentes conforme uma condição.

Sintaxe:
se condicao entao
   comandos se verdadeiro
senao
   comandos se falso
fimse`,out:`Digite a nota: 7
Aluno aprovado`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que leia a idade e diga se a pessoa é maior ou menor de idade.`},
{id:10,menu:'10 Escolha',title:'10 — Decisão Múltipla',objective:'Escolher uma ação entre várias opções.',code:`algoritmo "Menu_Operacoes"
var
   opcao: inteiro
inicio
   escreval("1 - Cadastrar")
   escreval("2 - Consultar")
   escreval("3 - Sair")
   escreva("Escolha uma opção: ")
   leia(opcao)

   escolha opcao
      caso 1
         escreval("Cadastro selecionado")
      caso 2
         escreval("Consulta selecionada")
      caso 3
         escreval("Saindo do sistema")
      outrocaso
         escreval("Opção inválida")
   fimescolha
fimalgoritmo`,added:`Conceito:
Decisão múltipla é usada quando existem várias opções possíveis para uma mesma variável.

Sintaxe:
escolha variavel
   caso valor1
      comandos
   caso valor2
      comandos
   outrocaso
      comandos
fimescolha`,out:`1 - Cadastrar
2 - Consultar
3 - Sair
Escolha uma opção: 2
Consulta selecionada`,note:`<span class="badge">Exercício</span><br>Crie um menu com três opções de lanche. O usuário escolhe um número e o programa mostra o lanche escolhido.`},
{id:11,menu:'11 Laços',title:'11 — Iteração e Laços',objective:'Repetir comandos usando enquanto, repita e para.',code:`algoritmo "Contagem"
var
   i: inteiro
inicio
   para i de 1 ate 5 faca
      escreval("Número: ", i)
   fimpara
fimalgoritmo`,added:`Conceito:
Laço de repetição executa o mesmo bloco várias vezes. O comando para é indicado quando já sabemos a quantidade de repetições.

Sintaxe:
para variavel de inicio ate fim faca
   comandos
fimpara`,out:`Número: 1
Número: 2
Número: 3
Número: 4
Número: 5`,note:`<span class="badge">Exercício</span><br>Faça um algoritmo que mostre os números pares de 2 até 20 usando <strong>para</strong> com <strong>passo 2</strong>.`},
{id:12,menu:'12 Funções',title:'12 — Funções Pré-definidas',objective:'Usar funções prontas do VisuAlg.',code:`algoritmo "Funcoes_Predefinidas"
var
   numero: real
inicio
   numero <- -25

   escreval("Valor original: ", numero)
   escreval("Valor absoluto: ", abs(numero))
   escreval("Raiz quadrada de 25: ", raizq(25))
   escreval("Potência 2 elevado a 3: ", exp(2,3))
fimalgoritmo`,added:`Conceito:
Funções pré-definidas são comandos prontos do VisuAlg que retornam um resultado.

Sintaxe geral:
funcao(valor)

Exemplos:
abs(numero): valor absoluto.
raizq(25): raiz quadrada.
exp(2,3): potência, 2 elevado a 3.

Exemplo aplicado:
escreval("Raiz de 25: ", raizq(25))`,out:`Valor original: -25
Valor absoluto: 25
Raiz quadrada de 25: 5
Potência 2 elevado a 3: 8`,note:`<span class="badge">Exercício</span><br>Leia um número e mostre seu valor absoluto e sua raiz quadrada. Use valores positivos para a raiz.`},
{id:13,menu:'13 Modular',title:'13 — Sub-rotinas, Procedimentos e Funções',objective:'Dividir o programa em partes menores.',code:`algoritmo "Procedimento_Funcao"
var
   n, dobro: inteiro

procedimento linha()
inicio
   escreval("---------------------")
fimprocedimento

funcao calculaDobro(x: inteiro): inteiro
inicio
   retorne x * 2
fimfuncao

inicio
   escreva("Digite um número: ")
   leia(n)

   linha()
   dobro <- calculaDobro(n)
   escreval("Dobro: ", dobro)
   linha()
fimalgoritmo`,added:`Conceito:
Programação modular divide o algoritmo em partes menores. Procedimento executa ações. Função executa ações e retorna um valor.

Procedimento:
procedimento nome()
inicio
   comandos
fimprocedimento

Função:
funcao nome(parametro: tipo): tipoRetorno
inicio
   retorne valor
fimfuncao`,out:`Digite um número: 8
---------------------
Dobro: 16
---------------------`,note:`<span class="badge">Exercício</span><br>Crie uma função chamada triplo que receba um número inteiro e retorne esse número multiplicado por 3.`},
{id:14,menu:'14 Vetores',title:'14 — Vetores',objective:'Guardar vários valores em uma única variável indexada.',code:`algoritmo "Vetor_Notas"
var
   notas: vetor[1..3] de real
   i: inteiro
inicio
   para i de 1 ate 3 faca
      escreva("Digite a nota ", i, ": ")
      leia(notas[i])
   fimpara

   escreval("Notas digitadas:")
   para i de 1 ate 3 faca
      escreval("Nota ", i, ": ", notas[i])
   fimpara
fimalgoritmo`,added:`Conceito:
Vetor guarda vários valores do mesmo tipo usando um único nome e posições numeradas.

Sintaxe:
nome: vetor[inicio..fim] de tipo`,out:`Digite a nota 1: 7
Digite a nota 2: 8
Digite a nota 3: 9
Notas digitadas:
Nota 1: 7
Nota 2: 8
Nota 3: 9`,note:`<span class="badge">Exercício</span><br>Crie um vetor com 5 nomes de alunos e depois mostre todos os nomes usando um laço.`},
{id:15,menu:'15 Matrizes',title:'15 — Matrizes',objective:'Organizar dados em linhas e colunas.',code:`algoritmo "Matriz_2x2"
var
   matriz: vetor[1..2,1..2] de inteiro
   linha, coluna: inteiro
inicio
   para linha de 1 ate 2 faca
      para coluna de 1 ate 2 faca
         escreva("Digite o valor [", linha, ",", coluna, "]: ")
         leia(matriz[linha,coluna])
      fimpara
   fimpara

   escreval("Matriz digitada:")
   para linha de 1 ate 2 faca
      para coluna de 1 ate 2 faca
         escreva(matriz[linha,coluna], " ")
      fimpara
      escreval("")
   fimpara
fimalgoritmo`,added:`Conceito:
Matriz é uma estrutura com linhas e colunas. É como uma tabela.

Sintaxe:
nome: vetor[linhaInicial..linhaFinal, colunaInicial..colunaFinal] de tipo`,out:`Digite o valor [1,1]: 1
Digite o valor [1,2]: 2
Digite o valor [2,1]: 3
Digite o valor [2,2]: 4
Matriz digitada:
1 2
3 4`,note:`<span class="badge">Exercício</span><br>Crie uma matriz 3x3 de inteiros e mostre todos os valores digitados.`},
{id:16,menu:'16 Teoria',title:'16 — Teoria Final: Ferramentas, Depuração, Versionamento e Boas Práticas',objective:'Revisar conceitos profissionais de desenvolvimento.',theoryPage:true,content:`<div class="theory-page"><div class="theory-hero"><h3>Página teórica final</h3><p>Esta parte não exige programação. O foco é compreender ferramentas, erros, depuração, modularização, versionamento e boas práticas profissionais.</p></div><h3>Teoria final com exemplos</h3><h4>1. IDE e ferramentas</h4><p><strong>IDE</strong> é o ambiente usado para escrever, executar, testar e corrigir programas. O VisuAlg é uma ferramenta didática para aprender lógica usando algoritmos.</p><div class="example-box"><strong>Exemplo:</strong> o aluno escreve o algoritmo, executa, observa a saída e corrige erros de digitação ou de lógica.</div><h4>2. Editor de código</h4><p>É a área onde o programador digita o código. Bons editores ajudam com organização, cores e identificação de erros.</p><ul><li><strong>Coloração de sintaxe:</strong> palavras como <code>algoritmo</code>, <code>var</code>, <code>inicio</code> e <code>fimse</code> aparecem destacadas.</li><li><strong>Marcas de erro:</strong> indicam problemas como palavra escrita errada ou comando incompleto.</li><li><strong>Navegação:</strong> permite localizar partes do programa com facilidade.</li></ul><h4>3. Compilação, execução e distribuição</h4><p>Em linguagens profissionais, o código pode passar por compilação, empacotamento e distribuição. No VisuAlg, o foco é executar o algoritmo para testar a lógica.</p><div class="example-box"><strong>Exemplo conceitual:</strong> código-fonte é o que o programador escreve; código executável é o programa pronto para rodar em uma máquina.</div><h4>4. Bibliotecas, frameworks e dependências</h4><p>Bibliotecas são conjuntos de recursos prontos. Frameworks são estruturas maiores que orientam a criação de sistemas. Dependências são recursos externos necessários para um projeto funcionar.</p><div class="example-box"><strong>Analogia:</strong> em vez de fabricar todas as peças, o programador usa peças prontas confiáveis.</div><h4>5. Depuração e erros</h4><p><strong>Depurar</strong> é encontrar e corrigir problemas no código.</p><ul><li><strong>Erro de sintaxe:</strong> comando escrito errado. Exemplo: escrever <code>fims</code> em vez de <code>fimse</code>.</li><li><strong>Erro de lógica:</strong> o programa executa, mas o resultado está errado.</li><li><strong>Erro em tempo de execução:</strong> acontece durante a execução, como uma operação inválida.</li></ul><h4>6. Execução passo a passo, breakpoints e variáveis</h4><p>A execução passo a passo permite acompanhar o programa linha por linha. Breakpoint é um ponto de parada usado para analisar o estado do programa.</p><div class="example-box"><strong>Exemplo:</strong> parar antes de calcular a média para verificar se as notas foram lidas corretamente.</div><h4>7. Pilha de chamadas</h4><p>A pilha de chamadas mostra qual função ou procedimento chamou outro. Esse conceito fica mais importante quando o programa usa várias sub-rotinas.</p><div class="example-box"><strong>Exemplo:</strong> o programa principal chama uma função <code>calculaDobro</code>; durante a execução, essa chamada fica registrada até a função terminar.</div><h4>8. Modularização e organização de projetos</h4><p>Modularizar é dividir um programa em partes menores e mais fáceis de entender.</p><ul><li>Facilita manutenção.</li><li>Evita repetição de código.</li><li>Deixa o programa mais organizado.</li></ul><h4>9. Versionamento</h4><p>Versionamento é controlar alterações no código ao longo do tempo.</p><ul><li><strong>Repositório local:</strong> fica no computador do programador.</li><li><strong>Repositório remoto:</strong> fica na internet ou em servidor.</li><li><strong>Commit:</strong> registro de uma versão do projeto.</li><li><strong>Checkout:</strong> resgate ou troca para outra versão.</li></ul><div class="example-box"><strong>Exemplo:</strong> salvar uma versão antes de alterar um algoritmo. Se der errado, é possível voltar à versão anterior.</div><h4>10. Software livre e colaboração</h4><p>Software livre permite estudar, modificar e compartilhar o código conforme sua licença. Repositórios remotos facilitam colaboração entre várias pessoas.</p><h4>11. Boas práticas de programação</h4><ul><li>Usar nomes claros para variáveis.</li><li>Manter indentação organizada.</li><li>Comentar apenas o que ajuda a entender.</li><li>Testar com valores diferentes.</li><li>Evitar copiar código sem compreender.</li></ul><pre>// Comentário útil: calcula a média de duas notas
media <- (nota1 + nota2) / 2</pre><div class="example-box"><strong>Exemplo ruim:</strong> variável chamada <code>x</code> para guardar nome do aluno.<br><strong>Exemplo melhor:</strong> variável chamada <code>nomeAluno</code>.</div><h4>12. Programação em par</h4><p>Dois alunos trabalham juntos: um escreve o código e o outro revisa, sugere melhorias e observa erros.</p><div class="example-box"><strong>Exemplo em sala:</strong> um aluno digita o algoritmo de média; o outro confere se as variáveis foram declaradas, se os parênteses estão corretos e se a saída faz sentido.</div><h4>13. Testes unitários</h4><p>Teste unitário verifica uma parte pequena do programa. Em VisuAlg, pode ser feito testando uma função ou trecho com valores conhecidos.</p><div class="example-box"><strong>Exemplo:</strong> se a função calculaDobro recebe 4, o resultado esperado é 8.</div><h4>Questionário de múltipla escolha</h4><div class="question"><strong>1. Para que serve a IDE?</strong><div class="answers">A) Guardar fotos<br>B) Escrever, executar e testar programas<br>C) Trocar peças do computador<br>D) Criar senhas</div></div><div class="question"><strong>2. O que é depuração?</strong><div class="answers">A) Procurar e corrigir erros no código<br>B) Pintar a tela<br>C) Apagar o programa<br>D) Criar uma variável</div></div><div class="question"><strong>3. O que é breakpoint?</strong><div class="answers">A) Um ponto de parada para analisar a execução<br>B) Um tipo de laço<br>C) Um operador lógico<br>D) Um arquivo de imagem</div></div><div class="question"><strong>4. O que é versionamento?</strong><div class="answers">A) Controlar versões do código<br>B) Aumentar a fonte<br>C) Converter real para inteiro<br>D) Executar o programa sem salvar</div></div><div class="question"><strong>5. Boa prática de programação é:</strong><div class="answers">A) Escrever tudo sem espaço<br>B) Usar nomes claros, indentação e comentários úteis<br>C) Nunca testar<br>D) Copiar sem entender</div></div><div class="question"><strong>6. O que é programação em par?</strong><div class="answers">A) Programar só com números pares<br>B) Dois programadores trabalhando juntos no mesmo problema<br>C) Usar duas telas obrigatoriamente<br>D) Criar dois algoritmos iguais</div></div><hr><br><strong>Gabarito:</strong> 1-B, 2-A, 3-A, 4-A, 5-B, 6-B.</div>`}
];
const menu=document.getElementById('menu');steps.forEach(s=>{const b=document.createElement('button');b.className='nav-btn';b.textContent=s.menu;b.id='btn-'+s.id;b.onclick=()=>showStep(s.id);menu.appendChild(b)});
function showStep(id){const s=steps.find(x=>x.id===id);document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+id).classList.add('active');document.getElementById('stepTitle').textContent=s.title;document.getElementById('objective').innerHTML='<strong>Objetivo:</strong> '+s.objective;const ws=document.getElementById('workspace');let intro=document.getElementById('introView');if(intro)intro.remove();const hideAll=()=>{['codeCard','resultCard','newCodeCard','noteWrap'].forEach(x=>document.getElementById(x).style.display='none')};if(id===0){hideAll();intro=document.createElement('section');intro.id='introView';intro.className='intro-view';intro.innerHTML=`<h3>Como usar esta apostila — versão revisada</h3><p><strong>Revisão aplicada:</strong> páginas teóricas com layout próprio, teoria final expandida e painel “O que foi trabalhado” com foco em conceitos e sintaxes.</p><p>Este material foi feito para alunos que nunca programaram. Em cada etapa prática, o aluno vê o código completo, copia para o VisuAlg, executa e observa a saída simulada.</p><div class="intro-grid"><div class="intro-box"><strong>1. Teoria quando necessário</strong><br>Alguns tópicos aparecem em página própria, sem código, para estudo conceitual.</div><div class="intro-box"><strong>2. Código completo</strong><br>Nos tópicos práticos, todo exemplo é funcional para copiar e colar.</div><div class="intro-box"><strong>3. Saída estilo VisuAlg</strong><br>A área da direita mostra uma simulação do que deve aparecer ao executar.</div></div><div class="quick"><h3>Primeiros passos no VisuAlg</h3><div class="quick-grid"><div class="quick-card"><strong>1. Abrir</strong><br>Abra o VisuAlg e crie um novo algoritmo.</div><div class="quick-card"><strong>2. Colar</strong><br>Copie o código da etapa e cole no editor.</div><div class="quick-card"><strong>3. Executar</strong><br>Use F9 ou o botão de executar.</div><div class="quick-card"><strong>4. Testar</strong><br>Quando o programa pedir dados, digite no console.</div><div class="quick-card"><strong>5. Corrigir</strong><br>Confira acentos, aspas, parênteses, fimse, fimpara e fimalgoritmo.</div><div class="quick-card"><strong>6. Salvar</strong><br>Salve cada exercício com nome organizado.</div></div></div>`;ws.appendChild(intro);return}if(s.theoryPage){hideAll();intro=document.createElement('section');intro.id='introView';intro.className='intro-view';intro.innerHTML=s.content;ws.appendChild(intro);return}['codeCard','resultCard','newCodeCard'].forEach(x=>document.getElementById(x).style.display='flex');document.getElementById('noteWrap').style.display='grid';document.getElementById('fullCode').textContent=s.code||'';document.getElementById('newCode').textContent=s.added||'';document.getElementById('preview').textContent=s.out||'';document.getElementById('note').innerHTML=s.note||''}
function copyText(id){navigator.clipboard.writeText(document.getElementById(id).textContent)}showStep(0);
