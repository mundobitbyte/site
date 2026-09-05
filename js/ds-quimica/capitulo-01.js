(() => {
  'use strict';

  const MBB = window.MBBQuimica = window.MBBQuimica || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="chemistry-opening">
      <span class="lesson-kicker">Uma situação para investigar</span>
      <div class="hero-box chemistry-story">
        <strong class="card-title">Antes de uma atividade no laboratório da escola, o professor pede que você organize quatro amostras numa bandeja e confira os rótulos antes de entregá-las ao grupo: um fio de cobre, uma lâmina de alumínio, um prego de ferro e uma porção de sal de cozinha.</strong>
        <p>Nos rótulos aparecem <strong>Cu</strong>, <strong>Al</strong>, <strong>Fe</strong> e <strong>NaCl</strong>. Os três primeiros parecem abreviações; o último tem quatro letras. Se todos identificam materiais, por que não são escritos do mesmo jeito?</p>

        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Antes de continuar, faça uma aposta</strong>
          <p>Qual afirmação parece mais provável?</p>
          <div class="choice-row">
            <button type="button" data-choice="a">Cu, Al, Fe e NaCl são quatro símbolos de elementos químicos</button>
            <button type="button" data-choice="b">Cu, Al e Fe são símbolos de elementos; NaCl reúne símbolos de mais de um elemento</button>
            <button type="button" data-choice="c">O número de letras não tem relação com a linguagem química</button>
          </div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Boa hipótese. Agora precisamos entender o que um elemento é, como seu símbolo é definido e por que NaCl representa outra coisa." data-wrong-text="Observe que NaCl pode ser separado visualmente em Na e Cl. A pergunta é o que cada parte significa."></div>
        </div>

        <p class="central-question"><strong>Nossa missão:</strong> descobrir o que esses rótulos realmente informam sobre a matéria e como a Química identifica diferentes tipos de átomos.</p>
      </div>
    </section>

    <section>
      <h3>1. Um objeto não é automaticamente uma única substância</h3>
      <p>Na bandeja há objetos e materiais reais. O fio de cobre pode ter revestimento; o prego comercial pode conter outros elementos além do ferro; o sal de cozinha vendido no mercado pode trazer aditivos. Por isso, olhar para um objeto e dizer que ele é “uma substância pura” sem verificar sua composição pode ser errado.</p>
      <p>Para estudar a linguagem química sem essa complicação, vamos usar um <strong>modelo simplificado de laboratório</strong>: considerar que a amostra identificada como Cu é cobre metálico, Al é alumínio metálico, Fe é ferro metálico e NaCl é cloreto de sódio.</p>

      <div class="two-col">
        <div class="example-box">
          <strong class="card-title">Material</strong>
          <p>É a porção de matéria que usamos ou analisamos. Um material real pode conter uma ou várias substâncias.</p>
        </div>
        <div class="example-box">
          <strong class="card-title">Substância</strong>
          <p>É um tipo de matéria com composição característica. Água, cobre e cloreto de sódio são exemplos quando considerados como substâncias.</p>
        </div>
      </div>

      <div class="note-box">
        <strong>Então, do que as coisas ao nosso redor são feitas?</strong>
        <p>Em nível microscópico, os materiais são formados por átomos organizados de diferentes maneiras. Esses átomos podem formar estruturas, moléculas ou íons. Neste capítulo vamos começar pela identidade dos átomos: os <strong>elementos químicos</strong>.</p>
      </div>
    </section>

    <section>
      <h3>2. Elemento químico é uma identidade, não apenas um nome</h3>
      <p>Hoje definimos um <strong>elemento químico</strong> como o conjunto de átomos que possuem o mesmo <strong>número atômico</strong>. Em outras palavras, todos os átomos de um mesmo elemento têm a mesma quantidade de prótons em seu núcleo.</p>
      <p>Essa definição é moderna. Ela será compreendida melhor no próximo capítulo, quando acompanharmos a evolução dos modelos atômicos. Por enquanto, guarde a ideia principal: <strong>o número de prótons identifica o elemento</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Uma identidade que não depende do tamanho da amostra</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Quatro cartões mostram alumínio com número atômico 13, ferro com número atômico 26, cobre com número atômico 29 e cloro com número atômico 17. Cada número atômico corresponde ao número de prótons e identifica o elemento.">
          <rect x="30" y="60" width="155" height="160" rx="16" fill="#eef5ff" stroke="#8fb7eb" stroke-width="2"/>
          <rect x="210" y="60" width="155" height="160" rx="16" fill="#eef5ff" stroke="#8fb7eb" stroke-width="2"/>
          <rect x="390" y="60" width="155" height="160" rx="16" fill="#eef5ff" stroke="#8fb7eb" stroke-width="2"/>
          <rect x="570" y="60" width="155" height="160" rx="16" fill="#eef5ff" stroke="#8fb7eb" stroke-width="2"/>
          <text x="107" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="#104a9b">Alumínio</text>
          <text x="287" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="#104a9b">Ferro</text>
          <text x="467" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="#104a9b">Cobre</text>
          <text x="647" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="#104a9b">Cloro</text>
          <text x="107" y="155" text-anchor="middle" font-size="38" font-weight="800" fill="#1967d2">Al</text>
          <text x="287" y="155" text-anchor="middle" font-size="38" font-weight="800" fill="#1967d2">Fe</text>
          <text x="467" y="155" text-anchor="middle" font-size="38" font-weight="800" fill="#1967d2">Cu</text>
          <text x="647" y="155" text-anchor="middle" font-size="38" font-weight="800" fill="#1967d2">Cl</text>
          <text x="107" y="195" text-anchor="middle" font-size="14" fill="#41536b">Z = 13 → 13 prótons</text>
          <text x="287" y="195" text-anchor="middle" font-size="14" fill="#41536b">Z = 26 → 26 prótons</text>
          <text x="467" y="195" text-anchor="middle" font-size="14" fill="#41536b">Z = 29 → 29 prótons</text>
          <text x="647" y="195" text-anchor="middle" font-size="14" fill="#41536b">Z = 17 → 17 prótons</text>
          <text x="380" y="265" text-anchor="middle" font-size="15" font-weight="700" fill="#104a9b">Mesmo número atômico = mesmo elemento químico</text>
        </svg>
        <p class="visual-caption">O símbolo é o nome abreviado; o número atômico informa a identidade microscópica do elemento.</p>
      </div>

      <div class="formula-box">
        <span class="formula-name">Número atômico</span>
        <div class="big-formula">Z = número de prótons</div>
        <p>Se um átomo possui 29 prótons, ele pertence ao elemento cobre. Se possui 13 prótons, pertence ao alumínio.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Teste a identidade</strong>
        <p>Um átomo possui 26 prótons. Qual informação é suficiente para afirmar a qual elemento ele pertence?</p>
        <div class="choice-row"><button type="button" data-choice="a">A cor do material</button><button type="button" data-choice="b">A massa da amostra</button><button type="button" data-choice="c">O número atômico Z = 26</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Z é definido pelo número de prótons e identifica o elemento." data-wrong-text="A identidade do elemento não depende da quantidade de material nem de sua aparência macroscópica."></div>
      </div>
    </section>

    <section>
      <h3>3. Os símbolos químicos formam uma linguagem internacional</h3>
      <p>Escrever o nome completo de cada elemento em toda equação seria pouco prático. Por isso cada elemento possui um <strong>símbolo químico padronizado</strong>, normalmente com uma ou duas letras.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Elemento</th><th>Símbolo</th><th>Observação</th></tr></thead>
          <tbody>
            <tr><td>Hidrogênio</td><td><strong>H</strong></td><td>uma letra, maiúscula</td></tr>
            <tr><td>Oxigênio</td><td><strong>O</strong></td><td>uma letra, maiúscula</td></tr>
            <tr><td>Sódio</td><td><strong>Na</strong></td><td>primeira letra maiúscula, segunda minúscula</td></tr>
            <tr><td>Cloro</td><td><strong>Cl</strong></td><td>Cl, e não CL</td></tr>
            <tr><td>Ferro</td><td><strong>Fe</strong></td><td>símbolo de origem histórica/linguística</td></tr>
            <tr><td>Cobre</td><td><strong>Cu</strong></td><td>símbolo de origem histórica/linguística</td></tr>
          </tbody>
        </table>
      </div>

      <p>A combinação de maiúsculas e minúsculas importa. <strong>Co</strong> é o símbolo do elemento cobalto. Já <strong>CO</strong> é uma fórmula formada pelos símbolos C e O. Não é apenas uma diferença de digitação.</p>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Leia como químico</strong>
        <p>Qual escrita representa corretamente o símbolo do cloro?</p>
        <div class="choice-row"><button type="button" data-choice="a">CL</button><button type="button" data-choice="b">Cl</button><button type="button" data-choice="c">cl</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Correto. A primeira letra é maiúscula e a segunda, quando existe, é minúscula." data-wrong-text="Símbolos de duas letras usam a primeira maiúscula e a segunda minúscula."></div>
      </div>
    </section>

    <section>
      <h3>4. Antes de conhecermos prótons, a ideia de átomo já ajudava a explicar reações</h3>
      <p>No início do século XIX, <strong>John Dalton</strong> propôs um modelo em que a matéria era formada por partículas muito pequenas chamadas átomos. No modelo de Dalton, os átomos eram tratados como esferas maciças e indivisíveis, e átomos de elementos diferentes eram diferentes entre si.</p>
      <p>O modelo também ajudava a explicar por que substâncias se formam em proporções definidas e por que, numa reação química, a matéria pode ser entendida como uma <strong>reorganização de átomos</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Representação inspirada no modelo de Dalton</strong>
        <svg class="lesson-visual" viewBox="0 0 760 280" role="img" aria-label="Representação didática do modelo de Dalton com esferas de dois tipos. À esquerda há átomos separados de dois elementos e à direita pares formados por um átomo de cada tipo, mostrando reorganização em proporção fixa.">
          <text x="170" y="40" text-anchor="middle" font-size="16" font-weight="700" fill="#104a9b">Antes</text>
          <text x="585" y="40" text-anchor="middle" font-size="16" font-weight="700" fill="#104a9b">Depois</text>
          <circle cx="95" cy="105" r="28" fill="#1967d2"/><circle cx="175" cy="105" r="28" fill="#1967d2"/>
          <circle cx="95" cy="190" r="28" fill="#d08700"/><circle cx="175" cy="190" r="28" fill="#d08700"/>
          <text x="95" y="111" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">A</text><text x="175" y="111" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">A</text>
          <text x="95" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">B</text><text x="175" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">B</text>
          <path d="M275 140 H450" stroke="#1967d2" stroke-width="5" marker-end="url(#chemArrow)"/>
          <circle cx="535" cy="105" r="28" fill="#1967d2"/><circle cx="585" cy="105" r="28" fill="#d08700"/>
          <circle cx="535" cy="190" r="28" fill="#1967d2"/><circle cx="585" cy="190" r="28" fill="#d08700"/>
          <text x="535" y="111" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">A</text><text x="585" y="111" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">B</text>
          <text x="535" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">A</text><text x="585" y="196" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">B</text>
          <defs><marker id="chemArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1967d2"/></marker></defs>
        </svg>
        <p class="visual-caption">As cores e letras são apenas recursos didáticos para distinguir tipos de átomos. Não representam cor, tamanho ou aparência real de um átomo.</p>
      </div>

      <div class="note-box">
        <strong>Um modelo científico não é uma fotografia</strong>
        <p>O modelo de Dalton foi importante porque organizou evidências conhecidas em sua época. Hoje sabemos que o átomo possui estrutura interna e que existem átomos do mesmo elemento com massas diferentes. Um modelo pode ser útil mesmo quando posteriormente é ampliado ou substituído.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Retome uma ideia do diagnóstico</strong>
        <p>Quando desenhamos um átomo como uma esfera, o desenho deve ser entendido como:</p>
        <div class="choice-row"><button type="button" data-choice="a">uma representação baseada em um modelo</button><button type="button" data-choice="b">uma fotografia ampliada do átomo</button><button type="button" data-choice="c">a cor real do átomo</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Modelos representam aspectos do sistema para explicar e prever fenômenos; não são fotografias literais." data-wrong-text="Pergunte se alguém realmente observou uma esfera maciça colorida daquele tamanho ou se o desenho está representando uma ideia."></div>
      </div>
    </section>

    <section>
      <h3>5. Número atômico e massa atômica respondem perguntas diferentes</h3>
      <p>Na Tabela Periódica, cada elemento aparece acompanhado de números. Dois deles costumam causar confusão: <strong>número atômico</strong> e <strong>massa atômica</strong>.</p>

      <div class="comparison-grid">
        <div class="example-box">
          <strong class="card-title">Número atômico (Z)</strong>
          <p>É o número de prótons. É sempre um número inteiro e identifica o elemento.</p>
          <span class="mini-formula">Cu: Z = 29</span>
        </div>
        <div class="example-box">
          <strong class="card-title">Massa atômica</strong>
          <p>É uma massa relativa expressa em unidade de massa atômica (<strong>u</strong>). Nas tabelas, geralmente aparece como uma média ponderada das massas dos isótopos encontrados na natureza.</p>
          <span class="mini-formula">Cu: ≈ 63,55 u</span>
        </div>
      </div>

      <p><strong>Isótopos</strong> são átomos do mesmo elemento — portanto com o mesmo número de prótons — que podem ter massas diferentes por possuírem diferentes quantidades de nêutrons. É por isso que a massa atômica da tabela pode aparecer com casas decimais.</p>
      <p>A massa atômica em <strong>u</strong> também não significa que um átomo de cobre tenha massa de 63,55 gramas. A unidade é outra e foi criada para trabalhar com massas extremamente pequenas.</p>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Não confunda os números</strong>
        <p>O cloro apresenta número atômico 17 e massa atômica aproximada 35,45 u. Qual número identifica que seus átomos pertencem ao elemento cloro?</p>
        <div class="choice-row"><button type="button" data-choice="a">35,45</button><button type="button" data-choice="b">17</button><button type="button" data-choice="c">Os dois identificam da mesma forma</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Z = 17 significa 17 prótons, e é essa quantidade que define o elemento cloro." data-wrong-text="Massa atômica e número atômico não têm a mesma função. Procure o número ligado aos prótons."></div>
      </div>
    </section>

    <section>
      <h3>6. Agora podemos decifrar os quatro rótulos da bandeja</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Rótulo</th><th>O que representa?</th><th>O que podemos dizer agora?</th></tr></thead>
          <tbody>
            <tr><td><strong>Cu</strong></td><td>símbolo do elemento cobre</td><td>Z = 29; massa atômica ≈ 63,55 u</td></tr>
            <tr><td><strong>Al</strong></td><td>símbolo do elemento alumínio</td><td>Z = 13; massa atômica ≈ 26,98 u</td></tr>
            <tr><td><strong>Fe</strong></td><td>símbolo do elemento ferro</td><td>Z = 26; massa atômica ≈ 55,85 u</td></tr>
            <tr><td><strong>NaCl</strong></td><td>fórmula química do cloreto de sódio</td><td>contém os elementos Na e Cl; NaCl não é um único símbolo de elemento</td></tr>
          </tbody>
        </table>
      </div>

      <div class="ok-box">
        <strong>Resposta à pergunta do início</strong>
        <p><strong>Cu, Al e Fe</strong> são símbolos de elementos químicos. <strong>NaCl</strong> é uma fórmula química formada pelos símbolos <strong>Na</strong> e <strong>Cl</strong>. Por isso os quatro rótulos não têm a mesma estrutura: eles não estão representando a mesma categoria de informação.</p>
      </div>
    </section>

    <section>
      <h3>7. Laboratório de leitura: o que o rótulo permite concluir?</h3>
      <div class="interactive-lab" id="labelDecoderLab">
        <div class="lab-heading"><h4>Decodificador de símbolos e fórmulas</h4></div>
        <div class="lab-controls">
          <label>Escolha um rótulo
            <select id="labelSampleSelect">
              <option value="Cu">Cu</option>
              <option value="Al">Al</option>
              <option value="Fe">Fe</option>
              <option value="NaCl">NaCl</option>
              <option value="H2O">H₂O</option>
            </select>
          </label>
          <div class="lab-result"><strong id="labelKind">Símbolo de elemento</strong><span id="labelDetails">Cu representa o elemento cobre: Z = 29.</span></div>
        </div>
        <p class="visual-caption">O laboratório trabalha apenas com a leitura da linguagem química. Ele não afirma que um objeto comercial seja formado exclusivamente pela substância indicada no rótulo.</p>
      </div>
    </section>

    <section>
      <h3>8. Investigue sem misturar substâncias</h3>
      <div class="experiment-box">
        <strong class="card-title">Atividade segura: linguagem química no cotidiano</strong>
        <p>Escolha três embalagens ou objetos que tenham composição ou material informado pelo fabricante. Anote exatamente o que está escrito e separe em três colunas:</p>
        <ol class="reason-steps">
          <li><strong>nome do material ou substância</strong>;</li>
          <li><strong>símbolo ou fórmula que aparece no rótulo</strong>, se houver;</li>
          <li><strong>o que você ainda não pode concluir</strong> apenas olhando para a embalagem.</li>
        </ol>
        <p class="safety-note"><strong>Importante:</strong> não abra, misture, aqueça, cheire diretamente ou teste produtos. Aqui a investigação é de rótulos e informações, não de reatividade.</p>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>9. Verifique se a linguagem ficou clara</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Elemento químico</strong><p>O que define que dois átomos pertencem ao mesmo elemento químico?</p><div class="choice-row"><button type="button" data-choice="a">Terem a mesma massa total</button><button type="button" data-choice="b">Terem o mesmo número de prótons</button><button type="button" data-choice="c">Terem a mesma cor</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto. O número de prótons determina o número atômico e identifica o elemento." data-wrong-text="A identidade do elemento está ligada ao número atômico Z."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Símbolos</strong><p>Qual é a escrita correta do símbolo do sódio?</p><div class="choice-row"><button type="button" data-choice="a">Na</button><button type="button" data-choice="b">NA</button><button type="button" data-choice="c">na</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A primeira letra é maiúscula e a segunda, minúscula." data-wrong-text="Símbolos de duas letras seguem maiúscula + minúscula."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Fórmula ou símbolo?</strong><p>NaCl representa:</p><div class="choice-row"><button type="button" data-choice="a">um único elemento chamado NaCl</button><button type="button" data-choice="b">apenas o elemento cloro</button><button type="button" data-choice="c">uma fórmula que contém os elementos Na e Cl</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. Na e Cl são símbolos de elementos; juntos em NaCl formam uma fórmula química." data-wrong-text="Separe a escrita em símbolos químicos: Na + Cl."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Modelo de Dalton</strong><p>Por que não devemos interpretar a esfera do modelo de Dalton como uma fotografia de um átomo?</p><div class="choice-row"><button type="button" data-choice="a">Porque átomos não existem</button><button type="button" data-choice="b">Porque o desenho representa um modelo explicativo, não a aparência literal do átomo</button><button type="button" data-choice="c">Porque Dalton estudava apenas metais</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Modelos selecionam aspectos importantes para explicar fenômenos." data-wrong-text="Pense na diferença entre representação científica e fotografia literal."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Número atômico</strong><p>Um átomo possui 8 prótons. Qual é seu número atômico?</p><div class="choice-row"><button type="button" data-choice="a">8</button><button type="button" data-choice="b">16</button><button type="button" data-choice="c">Não é possível saber</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto: Z é exatamente o número de prótons." data-wrong-text="Use a definição Z = número de prótons."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Massa atômica</strong><p>Por que a massa atômica apresentada na Tabela Periódica pode ter valor decimal?</p><div class="choice-row"><button type="button" data-choice="a">Porque o número de prótons pode ser fracionário</button><button type="button" data-choice="b">Porque o símbolo químico é aproximado</button><button type="button" data-choice="c">Porque geralmente representa uma média ponderada das massas dos isótopos naturais</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Isótopos do mesmo elemento podem ter massas diferentes, e a tabela combina essas contribuições." data-wrong-text="O número de prótons é inteiro. A explicação está nas diferentes massas isotópicas e suas abundâncias."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Objeto real</strong><p>Uma lata é vendida como “lata de alumínio”. O que é mais responsável concluir sem analisar a composição completa?</p><div class="choice-row"><button type="button" data-choice="a">Ela é obrigatoriamente 100% alumínio puro, sem revestimentos ou outros componentes</button><button type="button" data-choice="b">Alumínio é um material importante do objeto, mas a composição completa exige informação adicional</button><button type="button" data-choice="c">O objeto não contém alumínio</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Boa leitura. Um nome cotidiano de material não garante pureza química absoluta." data-wrong-text="Diferencie o nome de um material comercial da descrição química completa de tudo que compõe o objeto."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Identidade e massa</strong><p>Dois átomos possuem o mesmo número atômico, mas massas diferentes. O que isso indica?</p><div class="choice-row"><button type="button" data-choice="a">São isótopos do mesmo elemento</button><button type="button" data-choice="b">São obrigatoriamente elementos diferentes</button><button type="button" data-choice="c">Um deles não é átomo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. Mesmo Z significa mesmo elemento; massas diferentes podem ocorrer entre isótopos." data-wrong-text="A identidade química é determinada pelo número atômico, não pela massa isoladamente."></div></div>

      <div class="challenge-box">
        <strong>Desafio MbB — monte uma ficha de identificação</strong>
        <p>Escolha um elemento da Tabela Periódica e registre: nome, símbolo, número atômico, número de prótons e massa atômica aproximada. Depois explique em duas frases por que <strong>número atômico</strong> e <strong>massa atômica</strong> não significam a mesma coisa.</p>
        <details><summary>O que uma boa resposta deve conter?</summary><p>O número atômico deve coincidir com o número de prótons e identificar o elemento. A massa atômica deve aparecer em unidade de massa atômica (u) e ser tratada como valor relacionado às massas dos isótopos naturais, não como quantidade de prótons.</p></details>
      </div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p><strong>Matéria e Energia — Estrutura e constituição da matéria:</strong> modelo atômico de Dalton, elementos, símbolos, massa atômica e número atômico.</p>
    </details>
  `;

  function initLabelDecoder(root) {
    const select = $('#labelSampleSelect', root);
    const kind = $('#labelKind', root);
    const details = $('#labelDetails', root);
    if (!select || !kind || !details) return;

    const data = {
      Cu: ['Símbolo de elemento', 'Cu representa o elemento cobre: Z = 29; massa atômica aproximada 63,55 u.'],
      Al: ['Símbolo de elemento', 'Al representa o elemento alumínio: Z = 13; massa atômica aproximada 26,98 u.'],
      Fe: ['Símbolo de elemento', 'Fe representa o elemento ferro: Z = 26; massa atômica aproximada 55,85 u.'],
      NaCl: ['Fórmula química', 'NaCl reúne os elementos sódio (Na) e cloro (Cl). Não existe um único número atômico para a fórmula inteira.'],
      H2O: ['Fórmula química', 'H₂O reúne os elementos hidrogênio (H) e oxigênio (O). Os índices fazem parte da fórmula e serão explorados nos próximos capítulos.']
    };

    const update = () => {
      const [type, text] = data[select.value];
      kind.textContent = type;
      details.textContent = text;
    };

    select.addEventListener('change', update);
    update();
  }

  function showLesson() {
    MBB.showLesson({
      unit:'Matéria e Energia',
      technical:'Estrutura e constituição da matéria',
      title:'Do que as coisas ao nosso redor são feitas?',
      objective:'<strong>Propósito:</strong> distinguir material, substância e elemento; interpretar símbolos químicos, número atômico e massa atômica; e compreender o papel do modelo de Dalton.',
      html:lessonHtml,
      init:initLabelDecoder
    });
  }

  MBB.enableChapter?.('01 Matéria e elementos', showLesson);
})();
