(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const menu = $('#lessonMenu');
  const content = $('#lessonContent');
  const openMenu = $('#openMenu');
  if (!menu || !content) return;

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Imagine esta situação</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você saiu de casa e o celular diz: “2,4 km • 8 min”</strong>
        <p>O aplicativo sabe onde você está, acompanha sua posição ao longo do tempo, estima sua velocidade e prevê quando você chegará. Se você para no semáforo, a previsão muda. Se acelera, muda de novo.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> como transformar um movimento que vemos no mundo real em números, gráficos e previsões?</p>
      </div>
    </section>

    <section>
      <h3>1. Antes da velocidade, precisamos saber onde o objeto está</h3>
      <p>Para descrever um movimento, a Física escolhe primeiro um <strong>referencial</strong>: um ponto ou sistema usado para indicar posições. Depois marcamos onde o objeto está em diferentes instantes.</p>

      <div class="visual-box">
        <strong class="card-title">Uma rua transformada em linha de posições</strong>
        <svg class="lesson-visual" viewBox="0 0 760 250" role="img" aria-label="Rua representada por uma linha horizontal com posições zero, cem, duzentos e trezentos metros e um ciclista na posição duzentos metros.">
          <rect x="45" y="112" width="670" height="50" rx="18" class="road"/>
          <line x1="70" y1="137" x2="690" y2="137" class="road-center"/>
          <g class="position-mark"><line x1="80" y1="92" x2="80" y2="182"/><text x="63" y="205">0 m</text></g>
          <g class="position-mark"><line x1="280" y1="92" x2="280" y2="182"/><text x="251" y="205">100 m</text></g>
          <g class="position-mark"><line x1="480" y1="92" x2="480" y2="182"/><text x="451" y="205">200 m</text></g>
          <g class="position-mark"><line x1="680" y1="92" x2="680" y2="182"/><text x="651" y="205">300 m</text></g>
          <circle cx="480" cy="111" r="17" class="bike-wheel"/><circle cx="520" cy="111" r="17" class="bike-wheel"/>
          <path d="M480 111 L494 84 L514 111 L496 111 L506 92 M494 84 L514 82" class="bike-frame"/>
          <circle cx="504" cy="66" r="9" class="rider-head"/><path d="M504 75 L496 91 L516 98" class="rider"/>
          <text x="430" y="40" class="visual-title">posição do ciclista: 200 m</text>
          <path d="M95 66 H468" class="distance-arrow" marker-end="url(#arrowPosition)"/>
          <text x="245" y="55" class="visual-note">200 m desde o referencial</text>
          <defs><marker id="arrowPosition" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="arrow-fill"/></marker></defs>
        </svg>
      </div>

      <div class="two-col">
        <div class="concept-box"><strong class="card-title">Posição</strong><p>Diz <strong>onde</strong> o objeto está em relação ao referencial. Podemos representar por <span class="formula">s</span> ou <span class="formula">x</span>, dependendo do livro.</p></div>
        <div class="concept-box"><strong class="card-title">Distância percorrida</strong><p>Diz <strong>quanto caminho</strong> foi efetivamente percorrido. Se alguém vai 100 m e volta 100 m, percorreu 200 m, embora termine no ponto inicial.</p></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Verificação rápida</strong>
        <p>Uma pessoa sai do marco 0 m, caminha até 80 m e volta ao marco 20 m. Qual foi a distância total percorrida?</p>
        <div class="choice-row"><button type="button" data-choice="a">60 m</button><button type="button" data-choice="b">140 m</button><button type="button" data-choice="c">20 m</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Ela percorreu 80 m na ida e 60 m na volta: 140 m ao todo." data-wrong-text="Separe o caminho de ida do caminho de volta. Distância soma todo o trajeto percorrido."></div>
      </div>
    </section>

    <section>
      <h3>2. Movimento é uma história de posições ao longo do tempo</h3>
      <p>Uma única posição é como uma fotografia. Para saber se houve movimento, precisamos de <strong>pelo menos duas posições em instantes diferentes</strong>.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Tempo (s)</th><th>Posição (m)</th><th>O que observamos?</th></tr></thead>
          <tbody><tr><td>0</td><td>0</td><td>início</td></tr><tr><td>5</td><td>25</td><td>avançou 25 m</td></tr><tr><td>10</td><td>50</td><td>avançou mais 25 m</td></tr><tr><td>15</td><td>75</td><td>mantém o mesmo padrão</td></tr></tbody>
        </table>
      </div>

      <div class="visual-box">
        <strong class="card-title">Os mesmos dados em um gráfico posição × tempo</strong>
        <svg class="lesson-visual graph-visual" viewBox="0 0 700 330" role="img" aria-label="Gráfico posição por tempo em linha reta crescente, passando pelos pontos zero zero, cinco vinte e cinco, dez cinquenta e quinze setenta e cinco.">
          <line x1="80" y1="265" x2="650" y2="265" class="axis"/><line x1="80" y1="265" x2="80" y2="35" class="axis"/>
          <g class="grid-lines"><line x1="80" y1="190" x2="650" y2="190"/><line x1="80" y1="115" x2="650" y2="115"/><line x1="80" y1="40" x2="650" y2="40"/><line x1="270" y1="265" x2="270" y2="40"/><line x1="460" y1="265" x2="460" y2="40"/><line x1="650" y1="265" x2="650" y2="40"/></g>
          <polyline points="80,265 270,190 460,115 650,40" class="motion-line"/>
          <g class="motion-points"><circle cx="80" cy="265" r="6"/><circle cx="270" cy="190" r="6"/><circle cx="460" cy="115" r="6"/><circle cx="650" cy="40" r="6"/></g>
          <g class="graph-labels"><text x="73" y="290">0</text><text x="263" y="290">5</text><text x="450" y="290">10</text><text x="640" y="290">15</text><text x="47" y="270">0</text><text x="39" y="195">25</text><text x="39" y="120">50</text><text x="39" y="45">75</text><text x="330" y="320">tempo (s)</text><text x="10" y="28">posição (m)</text></g>
        </svg>
        <p class="visual-caption">Quando o gráfico sobe de forma regular, a posição está aumentando em intervalos iguais de tempo.</p>
      </div>
    </section>

    <section>
      <h3>3. Velocidade: quanto a posição muda em certo tempo?</h3>
      <p>Imagine que o ciclista percorreu <strong>1.200 m em 240 s</strong>. Antes de decorar qualquer fórmula, a pergunta é simples: <em>quantos metros, em média, ele percorreu a cada segundo?</em></p>
      <div class="equation-walk">
        <div><span>1</span><p>Temos 1.200 m distribuídos em 240 s.</p></div>
        <div><span>2</span><p>Dividimos o caminho pelo tempo: <strong>1.200 ÷ 240 = 5</strong>.</p></div>
        <div><span>3</span><p>A interpretação vem antes do símbolo: <strong>5 metros por segundo</strong>.</p></div>
      </div>

      <div class="formula-box"><span class="formula-name">Agora a fórmula faz sentido</span><div class="big-formula">v<sub>m</sub> = Δs / Δt</div><p><strong>Δs</strong> é a variação da posição e <strong>Δt</strong> é o intervalo de tempo. Em movimentos sem retorno, essa variação tem o mesmo valor da distância percorrida.</p></div>

      <div class="note-box"><strong>m/s e km/h</strong><p>Para converter de m/s para km/h, multiplicamos por 3,6. Assim, 5 m/s = 18 km/h. Não é uma nova Física: é apenas outra unidade para a mesma velocidade.</p></div>

      <div class="interactive-lab" id="motionLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Veja velocidade, tempo e posição trabalhando juntas</h4></div>
        <div class="lab-controls">
          <label>Velocidade constante <strong><span id="speedValue">5</span> m/s</strong><input id="speedRange" type="range" min="1" max="10" value="5"></label>
          <label>Tempo decorrido <strong><span id="timeValue">8</span> s</strong><input id="timeRange" type="range" min="0" max="20" value="8"></label>
        </div>
        <div class="motion-track" aria-hidden="true"><span class="track-start">0 m</span><div id="labCar" class="lab-car">🚗</div><span class="track-end">200 m</span></div>
        <div class="lab-result"><strong>Posição alcançada:</strong> <span id="positionValue">40</span> m <span class="lab-equation" id="positionEquation">s = 0 + 5 · 8 = 40 m</span></div>
        <p>Mexa primeiro no tempo mantendo a velocidade fixa. Depois altere a velocidade. Observe qual grandeza faz o carro avançar mais rapidamente.</p>
      </div>
    </section>

    <section>
      <h3>4. Aceleração: quando a velocidade muda</h3>
      <p>Se um carro passa de 0 para 20 m/s, dizer apenas a velocidade final esconde parte da história. Precisamos saber <strong>quanto a velocidade mudou e em quanto tempo</strong>.</p>

      <div class="speed-sequence" aria-label="Sequência de velocidades crescentes">
        <div><span>t = 0 s</span><strong>0 m/s</strong><div class="speed-bar" style="--p:0%"></div></div>
        <div><span>t = 2 s</span><strong>5 m/s</strong><div class="speed-bar" style="--p:25%"></div></div>
        <div><span>t = 4 s</span><strong>10 m/s</strong><div class="speed-bar" style="--p:50%"></div></div>
        <div><span>t = 6 s</span><strong>15 m/s</strong><div class="speed-bar" style="--p:75%"></div></div>
        <div><span>t = 8 s</span><strong>20 m/s</strong><div class="speed-bar" style="--p:100%"></div></div>
      </div>

      <div class="formula-box"><span class="formula-name">Depois de enxergar a mudança</span><div class="big-formula">a = Δv / Δt</div><p>Se a velocidade aumentou 20 m/s em 8 s, a aceleração média foi <strong>2,5 m/s²</strong>. Isso significa que, em média, a velocidade aumentou 2,5 m/s a cada segundo.</p></div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Interprete antes de calcular</strong>
        <p>Um carro mantém 60 km/h por vários segundos em uma estrada reta. O que podemos dizer sobre sua aceleração nesse intervalo?</p>
        <div class="choice-row"><button type="button" data-choice="a">É 60 km/h</button><button type="button" data-choice="b">Está aumentando</button><button type="button" data-choice="c">É zero</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Se a velocidade não muda em módulo nem direção, a aceleração é zero." data-wrong-text="Aceleração mede mudança de velocidade, não o valor da própria velocidade."></div>
      </div>
    </section>

    <section>
      <h3>5. A equação horária nasce de uma previsão</h3>
      <p>Se um objeto começa na posição <strong>s₀</strong> e mantém velocidade constante, sua posição futura pode ser prevista. Em cada segundo ele acrescenta a mesma quantidade à posição.</p>

      <div class="concept-flow">
        <div><strong>posição inicial</strong><span>s₀</span></div><div class="flow-arrow">+</div><div><strong>quanto avança</strong><span>v · t</span></div><div class="flow-arrow">=</div><div><strong>posição final</strong><span>s</span></div>
      </div>
      <div class="formula-box"><div class="big-formula">s = s₀ + v · t</div><p>Esta é a <strong>equação horária do movimento uniforme</strong>. Ela não aparece por mágica: é apenas “posição inicial + o que foi percorrido durante o tempo”.</p></div>

      <div class="example-box">
        <strong class="card-title">Exemplo guiado</strong>
        <p>Um ônibus está no marco 100 m de uma avenida e segue a 12 m/s. Onde estará 15 s depois, supondo velocidade constante?</p>
        <ol class="reason-steps"><li><strong>O que sabemos?</strong> s₀ = 100 m, v = 12 m/s, t = 15 s.</li><li><strong>Quanto ele avança?</strong> 12 · 15 = 180 m.</li><li><strong>Somamos à posição inicial:</strong> 100 + 180 = 280 m.</li><li><strong>Interpretação:</strong> estará no marco 280 m.</li></ol>
      </div>
    </section>

    <section>
      <h3>6. Movimento circular: a direção também importa</h3>
      <p>Um carro pode fazer uma curva mantendo 40 km/h no velocímetro. Mesmo assim, sua <strong>velocidade está mudando</strong>, porque a direção do movimento muda continuamente.</p>

      <div class="visual-box">
        <svg class="lesson-visual" viewBox="0 0 680 360" role="img" aria-label="Objeto em trajetória circular com vetores de velocidade tangentes em três pontos diferentes.">
          <circle cx="340" cy="180" r="120" class="orbit"/>
          <circle cx="340" cy="60" r="14" class="orbit-object"/><circle cx="460" cy="180" r="14" class="orbit-object"/><circle cx="340" cy="300" r="14" class="orbit-object"/>
          <path d="M340 60 H455" class="vector" marker-end="url(#arrowCircle)"/><path d="M460 180 V292" class="vector" marker-end="url(#arrowCircle)"/><path d="M340 300 H225" class="vector" marker-end="url(#arrowCircle)"/>
          <text x="458" y="53" class="visual-note">velocidade</text><text x="478" y="244" class="visual-note">velocidade</text><text x="145" y="294" class="visual-note">velocidade</text>
          <text x="275" y="178" class="visual-title">trajetória circular</text>
          <defs><marker id="arrowCircle" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="arrow-fill"/></marker></defs>
        </svg>
        <p class="visual-caption">Os vetores têm o mesmo tamanho, mas apontam em direções diferentes. Por isso existe mudança de velocidade.</p>
      </div>
    </section>

    <section>
      <h3>7. Queda livre: cair também é acelerar</h3>
      <p>Quando desprezamos a resistência do ar, objetos próximos à superfície da Terra aceleram para baixo aproximadamente a <strong>9,8 m/s²</strong>. Em estimativas escolares, muitas vezes usamos <strong>10 m/s²</strong> para facilitar contas.</p>

      <div class="visual-box fall-visual">
        <svg class="lesson-visual" viewBox="0 0 720 360" role="img" aria-label="Bola caindo em posições cada vez mais afastadas ao longo de intervalos iguais de tempo.">
          <line x1="120" y1="35" x2="120" y2="320" class="fall-guide"/>
          <g class="fall-ball"><circle cx="120" cy="55" r="16"/><text x="155" y="61">t = 0 s</text></g>
          <g class="fall-ball"><circle cx="120" cy="105" r="16"/><text x="155" y="111">t = 1 s</text></g>
          <g class="fall-ball"><circle cx="120" cy="205" r="16"/><text x="155" y="211">t = 2 s</text></g>
          <g class="fall-ball"><circle cx="120" cy="315" r="16"/><text x="155" y="321">t ≈ 2,5 s</text></g>
          <path d="M420 65 Q555 110 610 300" class="projectile-path"/>
          <circle cx="420" cy="65" r="14" class="projectile-ball"/><circle cx="488" cy="93" r="10" class="projectile-ghost"/><circle cx="553" cy="170" r="10" class="projectile-ghost"/><circle cx="610" cy="300" r="14" class="projectile-ball"/>
          <line x1="420" y1="65" x2="510" y2="65" class="vector" marker-end="url(#arrowFall)"/><line x1="553" y1="170" x2="553" y2="250" class="gravity-vector" marker-end="url(#arrowFall)"/>
          <text x="440" y="48" class="visual-note">movimento horizontal</text><text x="565" y="225" class="visual-note">gravidade</text><text x="420" y="337" class="visual-title">lançamento de projétil</text>
          <defs><marker id="arrowFall" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="arrow-fill"/></marker></defs>
        </svg>
      </div>

      <div class="two-col">
        <div class="concept-box"><strong class="card-title">Queda livre</strong><p>A velocidade vertical aumenta devido à gravidade. Se o objeto começa do repouso, podemos representar a velocidade por <span class="formula">v = g · t</span> e a distância de queda por <span class="formula">d = ½ · g · t²</span>.</p></div>
        <div class="concept-box"><strong class="card-title">Lançamento de projétil</strong><p>Há dois movimentos acontecendo ao mesmo tempo: horizontalmente o objeto avança; verticalmente a gravidade modifica sua velocidade. A combinação produz a trajetória curva.</p></div>
      </div>

      <div class="note-box"><strong>Uma ideia importante</strong><p>As fórmulas de queda livre valem para um modelo em que a resistência do ar é desprezada. Uma folha de papel aberta e uma bola não caem do mesmo modo no ar porque o ar interfere fortemente na folha.</p></div>
    </section>

    <section>
      <h3>8. Voltando ao celular do começo</h3>
      <p>Agora já podemos reconstruir o que parecia “mágica”. O aplicativo recebe posições em diferentes instantes, calcula variações, estima velocidades, observa mudanças e usa modelos para prever posições futuras e tempo de chegada.</p>
      <div class="connection-grid">
        <div><strong>GPS</strong><p>fornece estimativas de posição</p></div><div><strong>relógio</strong><p>marca os intervalos de tempo</p></div><div><strong>cálculo</strong><p>relaciona distância e tempo</p></div><div><strong>modelo</strong><p>projeta o que pode acontecer depois</p></div>
      </div>
      <div class="ok-box"><strong>Essência da aula</strong><p>Movimento não é uma lista de fórmulas. É a descrição de <strong>onde</strong> algo está, <strong>quando</strong> está lá e <strong>como essa posição muda</strong>. Velocidade mede a mudança de posição; aceleração mede a mudança da velocidade.</p></div>
    </section>

    <section>
      <h3>9. Experimento MbB — meça sua própria velocidade</h3>
      <div class="experiment-box">
        <strong class="card-title">Você precisa apenas de uma distância conhecida e um cronômetro</strong>
        <ol class="reason-steps"><li>Marque um percurso reto de 10 m, se houver um local seguro disponível.</li><li>Caminhe normalmente enquanto outra pessoa mede o tempo.</li><li>Calcule <strong>v = 10 / t</strong>.</li><li>Repita andando mais rápido e compare.</li><li>Explique: o que mudou — a distância, o tempo ou ambos?</li></ol>
        <p class="safety-note"><strong>Segurança:</strong> faça apenas em local livre de trânsito, obstáculos e risco de queda.</p>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>Você consegue reconstruir as ideias sem decorar?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Posição e distância</strong><p>Um corredor sai de 0 m, vai até 100 m e retorna a 40 m. Qual distância percorreu?</p><div class="choice-row"><button type="button" data-choice="a">40 m</button><button type="button" data-choice="b">160 m</button><button type="button" data-choice="c">60 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="100 m na ida + 60 m na volta = 160 m." data-wrong-text="Distância soma todo o caminho percorrido, não apenas a posição final."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Velocidade média</strong><p>Uma pessoa percorre 150 m em 30 s. Qual é sua velocidade média nesse trecho?</p><div class="choice-row"><button type="button" data-choice="a">3 m/s</button><button type="button" data-choice="b">4 m/s</button><button type="button" data-choice="c">5 m/s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="150 ÷ 30 = 5 m/s." data-wrong-text="Pergunte quantos metros correspondem, em média, a cada segundo."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Aceleração</strong><p>Um ciclista passa de 4 m/s para 10 m/s em 3 s. Qual foi a aceleração média?</p><div class="choice-row"><button type="button" data-choice="a">2 m/s²</button><button type="button" data-choice="b">3 m/s²</button><button type="button" data-choice="c">6 m/s²</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A velocidade mudou 6 m/s em 3 s: 6 ÷ 3 = 2 m/s²." data-wrong-text="Calcule primeiro a mudança da velocidade: 10 − 4. Depois divida pelo tempo."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Equação horária</strong><p>Um objeto começa em 20 m e move-se a 5 m/s durante 6 s. Qual posição final?</p><div class="choice-row"><button type="button" data-choice="a">30 m</button><button type="button" data-choice="b">50 m</button><button type="button" data-choice="c">120 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Ele avança 5 · 6 = 30 m. Somando aos 20 m iniciais: 50 m." data-wrong-text="Não esqueça a posição inicial: s = s₀ + v·t."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Movimento circular</strong><p>Um carro faz uma curva mantendo 40 km/h. Por que ainda podemos dizer que sua velocidade muda?</p><div class="choice-row"><button type="button" data-choice="a">Porque o tempo para</button><button type="button" data-choice="b">Porque a massa muda</button><button type="button" data-choice="c">Porque a direção muda</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Velocidade inclui direção. Na curva, a direção muda continuamente." data-wrong-text="O velocímetro pode manter o mesmo valor, mas o sentido do movimento está mudando."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Queda livre</strong><p>Desprezando a resistência do ar, o que acontece com a velocidade de um objeto em queda próximo à superfície da Terra?</p><div class="choice-row"><button type="button" data-choice="a">Aumenta devido à gravidade</button><button type="button" data-choice="b">Permanece sempre zero</button><button type="button" data-choice="c">Diminui até parar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A gravidade produz aceleração para baixo, aumentando o módulo da velocidade na queda." data-wrong-text="Queda livre é um movimento acelerado, quando desprezamos a resistência do ar."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Lançamento de projétil</strong><p>Por que a trajetória de uma bola lançada para frente é curva?</p><div class="choice-row"><button type="button" data-choice="a">Porque ela perde toda a velocidade horizontal de imediato</button><button type="button" data-choice="b">Porque combina movimento horizontal com aceleração vertical da gravidade</button><button type="button" data-choice="c">Porque a gravidade empurra para frente</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="O movimento horizontal continua enquanto a gravidade altera o movimento vertical." data-wrong-text="Separe mentalmente o movimento em duas direções: horizontal e vertical."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um entregador percorre 900 m em 3 min, fica parado por 1 min e depois percorre mais 600 m em 2 min. Sem começar pela fórmula, explique como você calcularia a velocidade média considerando todo o trajeto e todo o tempo.</p><details><summary>Conferir caminho de resolução</summary><p>Some as distâncias: 1.500 m. Some todo o tempo, inclusive a parada: 6 min = 360 s. Depois faça 1.500 ÷ 360 ≈ 4,17 m/s. A parada faz parte do tempo total e reduz a média.</p></details></div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo trabalha os objetos de conhecimento previstos para Física na 1ª série: espaço, tempo, distância, velocidade, aceleração, equação horária, movimento circular, queda livre e lançamento de projétil. A abordagem também desenvolve interpretação de representações e previsões de movimento.</p>
    </details>
  `;

  function initChoiceQuestions(root) {
    $$('[data-choice-question]', root).forEach((box) => {
      const correct = box.dataset.correct;
      const feedback = $('[data-choice-feedback]', box);
      $$('[data-choice]', box).forEach((button) => {
        button.addEventListener('click', () => {
          const ok = button.dataset.choice === correct;
          $$('[data-choice]', box).forEach((item) => item.classList.remove('is-selected', 'is-correct', 'is-wrong'));
          button.classList.add('is-selected', ok ? 'is-correct' : 'is-wrong');
          if (feedback) {
            feedback.className = `choice-feedback ${ok ? 'is-correct' : 'is-wrong'}`;
            feedback.innerHTML = `<strong>${ok ? 'Correto.' : 'Ainda não.'}</strong> ${ok ? feedback.dataset.correctText : feedback.dataset.wrongText}`;
          }
        });
      });
    });
  }

  function initMotionLab(root) {
    const speed = $('#speedRange', root);
    const time = $('#timeRange', root);
    const car = $('#labCar', root);
    if (!speed || !time || !car) return;

    const draw = () => {
      const v = Number(speed.value);
      const t = Number(time.value);
      const s = v * t;
      $('#speedValue', root).textContent = v;
      $('#timeValue', root).textContent = t;
      $('#positionValue', root).textContent = s;
      $('#positionEquation', root).textContent = `s = 0 + ${v} · ${t} = ${s} m`;
      const pct = 6 + Math.min(s / 200, 1) * 86;
      car.style.left = `${pct}%`;
    };

    speed.addEventListener('input', draw);
    time.addEventListener('input', draw);
    draw();
  }

  function showChapter() {
    $('#unitName').textContent = 'Movimento e forças';
    $('#technicalTitle').textContent = 'Cinemática • espaço, tempo, velocidade e aceleração';
    $('#lessonTitle').textContent = 'O mundo está em movimento';
    $('#lessonObjective').innerHTML = '<strong>Propósito:</strong> aprender a transformar movimentos reais em posições, tempos, velocidades, acelerações, gráficos e previsões.';
    content.innerHTML = lessonHtml;
    initChoiceQuestions(content);
    initMotionLab(content);
    menu.classList.remove('open');
    openMenu?.setAttribute('aria-expanded', 'false');
    if (content.scrollTo) content.scrollTo({ top:0, behavior:'auto' });
  }

  const movementButton = $$('.menu-item', menu).find((button) => button.textContent.trim().startsWith('01 O mundo está em movimento'));
  if (!movementButton) return;

  movementButton.disabled = false;
  movementButton.title = '';
  movementButton.classList.remove('pending');
  movementButton.dataset.physicsLesson = 'movimento';
  movementButton.addEventListener('click', showChapter);

  menu.addEventListener('click', (event) => {
    const button = event.target.closest('.menu-item');
    if (!button || button.disabled) return;
    $$('.menu-item', menu).forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
})();