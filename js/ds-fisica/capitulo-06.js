(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Comece por uma situação real</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Uma prateleira cheia de livros está parada na parede. Mesmo assim, várias forças atuam nela o tempo todo.</strong>
        <p>O peso dos livros puxa para baixo, os suportes empurram e sustentam, e essas forças também podem produzir tendência de rotação. Se tudo estiver corretamente equilibrado, a prateleira não cai nem gira.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> como um corpo pode sofrer várias forças e ainda assim permanecer em equilíbrio?</p>
      </div>
    </section>

    <section>
      <h3>1. Antes de equilibrar: grandezas escalares e vetoriais</h3>
      <p>Algumas grandezas ficam determinadas apenas por um valor e uma unidade. Outras precisam também de <strong>direção e sentido</strong>. Essa diferença é indispensável quando analisamos forças.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Grandezas escalares</strong><p>Massa, tempo e temperatura podem ser descritos por valor e unidade. Exemplo: <strong>5 kg</strong>.</p></div>
        <div class="example-box"><strong class="card-title">Grandezas vetoriais</strong><p>Força, deslocamento e velocidade exigem módulo, direção e sentido. Exemplo: <strong>20 N para a direita</strong>.</p></div>
      </div>

      <svg class="lesson-visual" viewBox="0 0 760 250" role="img" aria-label="Duas forças horizontais opostas de 80 newtons atuando sobre uma caixa e produzindo resultante nula">
        <defs><marker id="c6ArrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1967d2"/></marker></defs>
        <rect x="300" y="85" width="160" height="85" rx="12" fill="#eaf2ff" stroke="#1967d2" stroke-width="3"/>
        <text x="350" y="135" class="visual-title">caixa</text>
        <line x1="295" y1="125" x2="120" y2="125" stroke="#1967d2" stroke-width="5" marker-end="url(#c6ArrowBlue)"/>
        <line x1="465" y1="125" x2="640" y2="125" stroke="#1967d2" stroke-width="5" marker-end="url(#c6ArrowBlue)"/>
        <text x="128" y="105" class="visual-note">80 N</text><text x="585" y="105" class="visual-note">80 N</text>
        <text x="236" y="218" class="visual-title">forças opostas e iguais → resultante = 0</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Resultante das forças</span><div class="big-formula">R⃗ = ΣF⃗</div><p>Somar vetores significa considerar seus sentidos e direções, não apenas somar números.</p></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Verificação rápida</strong><p>Duas forças horizontais de 50 N atuam em sentidos opostos sobre uma caixa. Qual é a resultante horizontal?</p><div class="choice-row"><button type="button" data-choice="a">100 N</button><button type="button" data-choice="b">50 N</button><button type="button" data-choice="c">0 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como têm mesmo módulo e sentidos opostos, elas se cancelam vetorialmente." data-wrong-text="Considere o sentido de cada força antes de somar."></div></div>
    </section>

    <section>
      <h3>2. Equilíbrio de translação: não acelerar em nenhuma direção</h3>
      <p>Para um corpo permanecer em equilíbrio, a soma vetorial das forças deve ser nula. Em problemas no plano, costuma ser útil separar as componentes horizontal e vertical.</p>

      <div class="formula-box"><span class="formula-name">Condição de equilíbrio translacional</span><div class="big-formula">ΣF<sub>x</sub> = 0 &nbsp;&nbsp; e &nbsp;&nbsp; ΣF<sub>y</sub> = 0</div><p>Na Estática, estudamos especialmente corpos que permanecem em repouso.</p></div>

      <div class="example-box"><strong class="card-title">Placa suspensa por dois cabos verticais iguais</strong><p>Uma placa pesa 200 N e é sustentada simetricamente por dois cabos verticais. Se as tensões forem iguais, cada cabo precisa fornecer 100 N para cima.</p><ol class="reason-steps"><li>Força total para baixo: 200 N.</li><li>As duas tensões somadas precisam fornecer 200 N para cima.</li><li>Como são iguais: 100 N + 100 N = 200 N.</li><li>Logo, ΣF<sub>y</sub> = 0.</li></ol></div>

      <div class="note-box"><strong>Equilíbrio não significa ausência de forças</strong><p>Um corpo pode estar sob várias forças e continuar parado. O que importa é a <strong>resultante</strong> e, como veremos a seguir, também a tendência de rotação.</p></div>
    </section>

    <section>
      <h3>3. Momento ou torque: força também pode tentar girar um corpo</h3>
      <p>Empurrar uma porta perto da dobradiça é bem mais difícil do que empurrá-la pela maçaneta. A força pode ser a mesma; o que muda é a distância até o eixo de rotação.</p>

      <svg class="lesson-visual" viewBox="0 0 760 285" role="img" aria-label="Vista superior de uma porta mostrando uma força perto da dobradiça e outra força igual aplicada mais longe com maior torque">
        <defs><marker id="c6ArrowRed" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b42318"/></marker></defs>
        <circle cx="110" cy="145" r="12" fill="#304257"/><text x="52" y="115" class="visual-note">dobradiça</text>
        <rect x="110" y="128" width="520" height="34" rx="5" fill="#d7b28d" stroke="#8c6a4d" stroke-width="2"/>
        <line x1="220" y1="125" x2="220" y2="62" stroke="#b42318" stroke-width="5" marker-end="url(#c6ArrowRed)"/>
        <line x1="590" y1="125" x2="590" y2="62" stroke="#b42318" stroke-width="5" marker-end="url(#c6ArrowRed)"/>
        <text x="180" y="48" class="visual-note">mesma força</text><text x="550" y="48" class="visual-note">mesma força</text>
        <line x1="110" y1="205" x2="220" y2="205" stroke="#1967d2" stroke-width="3"/><line x1="110" y1="235" x2="590" y2="235" stroke="#1967d2" stroke-width="3"/>
        <text x="135" y="198" class="visual-note">distância menor</text><text x="295" y="228" class="visual-note">distância maior → maior torque</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Quando usamos a distância perpendicular ao eixo</span><div class="big-formula">τ = F · d<sub>⊥</sub></div><p><strong>τ</strong> é o torque, <strong>F</strong> é a força e <strong>d<sub>⊥</sub></strong> é a distância perpendicular entre o eixo e a linha de ação da força. A unidade é N·m.</p></div>

      <div class="note-box"><strong>Forma mais geral</strong><p>Se a força não for perpendicular ao braço, podemos escrever τ = r·F·senθ. Usar d<sub>⊥</sub> permite resumir a mesma ideia como τ = F·d<sub>⊥</sub>.</p></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Pense antes da fórmula</strong><p>Com a mesma força, onde é mais eficiente empurrar uma porta para fazê-la girar?</p><div class="choice-row"><button type="button" data-choice="a">Muito perto da dobradiça</button><button type="button" data-choice="b">Mais longe da dobradiça</button><button type="button" data-choice="c">A distância não importa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Aumentar a distância perpendicular aumenta o torque produzido pela mesma força." data-wrong-text="Compare τ = F·d⊥ mantendo F constante."></div></div>
    </section>

    <section>
      <h3>4. Equilíbrio de rotação: torques horários e anti-horários se compensam</h3>
      <p>Não basta a resultante das forças ser zero. Um corpo também não pode ter uma tendência líquida de girar.</p>

      <div class="formula-box"><span class="formula-name">Condição de equilíbrio rotacional</span><div class="big-formula">Στ = 0</div><p>Podemos escolher um sentido de rotação como positivo e o outro como negativo. O importante é manter a convenção durante todo o cálculo.</p></div>

      <div class="lever-example">
        <div><strong>Criança</strong><span>300 N</span><small>2,0 m do apoio</small><b>τ = 600 N·m</b></div>
        <div class="lever-center">▲</div>
        <div><strong>Adulto</strong><span>600 N</span><small>1,0 m do apoio</small><b>τ = 600 N·m</b></div>
      </div>

      <p>Nesse exemplo, os torques têm módulos iguais e sentidos opostos. A gangorra pode permanecer horizontal.</p>

      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a previsão</strong><p>Uma força de 200 N atua perpendicularmente a 3 m do eixo. Qual é o torque em módulo?</p><div class="choice-row"><button type="button" data-choice="a">600 N·m</button><button type="button" data-choice="b">203 N·m</button><button type="button" data-choice="c">66,7 N·m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="τ = F·d⊥ = 200·3 = 600 N·m." data-wrong-text="Multiplique a força pela distância perpendicular ao eixo."></div></div>
    </section>

    <section>
      <h3>5. Centro de massa: onde o peso do conjunto pode ser representado</h3>
      <p>Em muitas análises, podemos imaginar que o peso total de um corpo ou sistema atua em um ponto chamado <strong>centro de massa</strong>. Em objetos uniformes e simétricos, ele costuma coincidir com o centro geométrico; em sistemas irregulares, pode estar deslocado.</p>

      <svg class="lesson-visual" viewBox="0 0 760 270" role="img" aria-label="Barra com duas massas diferentes e indicação do centro de massa mais próximo da massa maior">
        <line x1="100" y1="145" x2="660" y2="145" stroke="#70829a" stroke-width="10" stroke-linecap="round"/>
        <circle cx="190" cy="110" r="38" fill="#6d4aff"/><text x="174" y="116" fill="#fff" font-weight="800">3 kg</text>
        <circle cx="580" cy="116" r="27" fill="#1967d2"/><text x="566" y="121" fill="#fff" font-weight="800">1 kg</text>
        <line x1="287" y1="82" x2="287" y2="192" stroke="#b42318" stroke-width="4" stroke-dasharray="7 5"/>
        <polygon points="287,205 273,225 301,225" fill="#b42318"/>
        <text x="225" y="55" class="visual-title">centro de massa</text>
        <text x="210" y="250" class="visual-note">fica mais próximo da maior concentração de massa</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Duas ou mais massas alinhadas em um eixo</span><div class="big-formula">x<sub>cm</sub> = Σ(m·x) / Σm</div><p>A posição do centro de massa é uma média ponderada pelas massas.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo simples</strong><p>Uma massa de 2 kg está em x = 0 m e outra de 1 kg está em x = 3 m.</p><ol class="reason-steps"><li>x<sub>cm</sub> = (2·0 + 1·3)/(2 + 1).</li><li>x<sub>cm</sub> = 3/3.</li><li><strong>x<sub>cm</sub> = 1 m.</strong></li></ol><p>O centro de massa fica mais perto da massa de 2 kg.</p></div>
    </section>

    <section>
      <h3>6. Centro de massa e estabilidade: quando um corpo tomba?</h3>
      <p>Para um corpo apoiado permanecer estável, a projeção vertical do centro de massa precisa ficar dentro da <strong>base de apoio</strong>. Se ela ultrapassar a base, surge uma tendência de tombamento.</p>

      <div class="stability-grid">
        <div><strong>Estável</strong><div class="stability-scene stable"><span class="stability-body"></span><i class="stability-cm"></i><b></b></div><p>A projeção do centro de massa cai dentro da base.</p></div>
        <div><strong>Prestes a tombar</strong><div class="stability-scene tipping"><span class="stability-body"></span><i class="stability-cm"></i><b></b></div><p>A projeção ultrapassa a borda da base.</p></div>
      </div>

      <div class="note-box"><strong>Por isso veículos altos exigem atenção em curvas</strong><p>Elevar o centro de massa pode reduzir a margem de estabilidade. A forma da base, a distribuição da massa e as forças durante o movimento também importam.</p></div>
    </section>

    <section>
      <h3>7. Laboratório interativo: equilibre uma gangorra</h3>
      <div class="interactive-lab" id="torqueLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Força maior precisa ficar sempre mais longe?</h4></div>
        <p>Aplique forças verticais em lados opostos do apoio e observe os torques produzidos.</p>
        <div class="torque-lab-controls">
          <label>Força à esquerda <strong><span id="leftForceValue">300</span> N</strong><input id="leftForceRange" type="range" min="100" max="800" step="50" value="300"></label>
          <label>Distância à esquerda <strong><span id="leftDistanceValue">2,0</span> m</strong><input id="leftDistanceRange" type="range" min="0.5" max="3" step="0.5" value="2"></label>
          <label>Força à direita <strong><span id="rightForceValue">600</span> N</strong><input id="rightForceRange" type="range" min="100" max="800" step="50" value="600"></label>
          <label>Distância à direita <strong><span id="rightDistanceValue">1,0</span> m</strong><input id="rightDistanceRange" type="range" min="0.5" max="3" step="0.5" value="1"></label>
        </div>
        <div class="torque-lab-scene" aria-hidden="true"><div id="torqueBeam" class="torque-beam"><span class="torque-load left">↓</span><span class="torque-load right">↓</span></div><div class="torque-pivot">▲</div></div>
        <div class="torque-results"><div><span>Torque anti-horário</span><strong id="leftTorqueValue">600 N·m</strong></div><div><span>Torque horário</span><strong id="rightTorqueValue">600 N·m</strong></div><div><span>Situação</span><strong id="torqueStatus">Equilíbrio rotacional</strong></div></div>
        <p id="torqueConclusion">Os torques têm mesmo módulo e sentidos opostos. A soma dos torques é zero.</p>
      </div>
    </section>

    <section>
      <h3>8. Experimento simples: encontre um ponto de equilíbrio</h3>
      <div class="experiment-box"><strong class="card-title">Régua, lápis e moedas</strong><ol class="reason-steps"><li>Apoie uma régua horizontalmente sobre um lápis colocado perpendicularmente a ela.</li><li>Desloque a régua até encontrar aproximadamente seu ponto de equilíbrio.</li><li>Coloque uma moeda perto de uma extremidade.</li><li>Na outra extremidade, teste posições diferentes para uma segunda moeda até recuperar o equilíbrio.</li><li>Compare força e distância em cada lado do apoio.</li></ol><p class="safety-note"><strong>Segurança:</strong> faça sobre uma mesa, com objetos leves. Não use lâminas, vidro ou objetos pesados como apoio.</p></div>
      <p>O experimento mostra que equilíbrio não depende apenas do peso: a <strong>distância ao ponto de apoio</strong> também altera o torque.</p>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>9. Você consegue reconhecer e calcular condições de equilíbrio?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Escalar ou vetorial?</strong><p>Qual grandeza precisa de módulo, direção e sentido?</p><div class="choice-row"><button type="button" data-choice="a">Temperatura</button><button type="button" data-choice="b">Força</button><button type="button" data-choice="c">Massa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Força é uma grandeza vetorial." data-wrong-text="Procure a grandeza cuja descrição exige também direção e sentido."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Resultante</strong><p>Uma caixa recebe 70 N para a direita e 70 N para a esquerda. A resultante horizontal é:</p><div class="choice-row"><button type="button" data-choice="a">140 N para a direita</button><button type="button" data-choice="b">70 N</button><button type="button" data-choice="c">0 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Forças iguais e opostas se cancelam nessa direção." data-wrong-text="Considere os sentidos opostos antes de somar."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Torque</strong><p>Uma força perpendicular de 40 N atua a 0,5 m do eixo. O torque em módulo é:</p><div class="choice-row"><button type="button" data-choice="a">20 N·m</button><button type="button" data-choice="b">40,5 N·m</button><button type="button" data-choice="c">80 N·m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="τ = F·d⊥ = 40·0,5 = 20 N·m." data-wrong-text="Multiplique a força pela distância perpendicular."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Equilíbrio completo</strong><p>Para um corpo rígido permanecer em equilíbrio estático no plano, precisamos:</p><div class="choice-row"><button type="button" data-choice="a">Apenas ΣF = 0</button><button type="button" data-choice="b">ΣF = 0 e Στ = 0</button><button type="button" data-choice="c">Apenas Στ = 0</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="É preciso impedir tanto a aceleração translacional quanto a angular." data-wrong-text="Pense separadamente em translação e rotação."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Gangorra</strong><p>Uma criança exerce 300 N a 2 m do apoio. Para equilibrar, um adulto de 600 N deve ficar a:</p><div class="choice-row"><button type="button" data-choice="a">0,5 m</button><button type="button" data-choice="b">2 m</button><button type="button" data-choice="c">1 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="300·2 = 600 N·m; então 600·d = 600 e d = 1 m." data-wrong-text="Iguale os módulos dos torques nos dois lados."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Centro de massa</strong><p>Em um sistema com duas massas diferentes, o centro de massa tende a ficar:</p><div class="choice-row"><button type="button" data-choice="a">Mais próximo da massa maior</button><button type="button" data-choice="b">Sempre exatamente no meio geométrico</button><button type="button" data-choice="c">Sempre fora do sistema</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A média da posição é ponderada pela massa." data-wrong-text="A massa maior pesa mais no cálculo de xcm."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Estabilidade</strong><p>Um bloco apoiado começa a tombar quando:</p><div class="choice-row"><button type="button" data-choice="a">Seu peso se torna zero</button><button type="button" data-choice="b">A projeção do centro de massa ultrapassa a base de apoio</button><button type="button" data-choice="c">Seu centro de massa fica mais baixo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Fora da base de apoio, o peso produz um torque de tombamento." data-wrong-text="Observe a relação entre a projeção do centro de massa e a base."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Aplicação</strong><p>Por que uma chave de boca com cabo mais longo pode facilitar o giro de uma porca?</p><div class="choice-row"><button type="button" data-choice="a">Porque reduz a massa da porca</button><button type="button" data-choice="b">Porque elimina todas as forças</button><button type="button" data-choice="c">Porque aumenta o braço de alavanca e o torque para a mesma força</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Maior distância perpendicular permite maior torque com a mesma força." data-wrong-text="Relacione τ = F·d⊥."></div></div>

      <div class="challenge-box"><strong>Desafio MbB — uma prateleira segura</strong><p>Uma prateleira de 1,0 m está presa à parede por um suporte na extremidade esquerda. Um conjunto de livros exerce peso de 120 N a 0,75 m do suporte. Calcule o torque desse peso em relação ao suporte e explique por que colocar os livros mais perto da parede reduz a tendência de rotação. Depois relacione sua explicação com uma decisão real de projeto.</p><details><summary>Confira o raciocínio</summary><p>O torque é 120·0,75 = 90 N·m. Aproximar os livros do suporte diminui d<sub>⊥</sub> e, portanto, diminui o torque produzido pelo mesmo peso. Em uma estrutura real, forças nos suportes, resistência dos materiais, fixações e margens de segurança também precisam ser consideradas.</p></details></div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo trabalha os objetos previstos para a 1ª série em <strong>Estática</strong>: equilíbrio dos sólidos, centro de massa, momento ou torque e grandezas escalares e vetoriais. A organização começa pelas forças e vetores necessários para compreender as condições de equilíbrio e avança para rotação, centro de massa e estabilidade.</p>
    </details>`;

  function initTorqueLab(root) {
    const leftForce = $('#leftForceRange', root);
    const leftDistance = $('#leftDistanceRange', root);
    const rightForce = $('#rightForceRange', root);
    const rightDistance = $('#rightDistanceRange', root);
    const beam = $('#torqueBeam', root);
    if (!leftForce || !leftDistance || !rightForce || !rightDistance || !beam) return;

    const format = (value, digits = 0) => Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

    const draw = () => {
      const fL = Number(leftForce.value);
      const dL = Number(leftDistance.value);
      const fR = Number(rightForce.value);
      const dR = Number(rightDistance.value);
      const tL = fL * dL;
      const tR = fR * dR;
      const diff = tL - tR;
      const tolerance = 0.5;

      $('#leftForceValue', root).textContent = format(fL);
      $('#leftDistanceValue', root).textContent = format(dL, 1);
      $('#rightForceValue', root).textContent = format(fR);
      $('#rightDistanceValue', root).textContent = format(dR, 1);
      $('#leftTorqueValue', root).textContent = `${format(tL, 0)} N·m`;
      $('#rightTorqueValue', root).textContent = `${format(tR, 0)} N·m`;

      const angle = Math.max(-8, Math.min(8, diff / 80));
      beam.style.transform = `rotate(${angle}deg)`;

      const status = $('#torqueStatus', root);
      const conclusion = $('#torqueConclusion', root);
      if (Math.abs(diff) <= tolerance) {
        status.textContent = 'Equilíbrio rotacional';
        conclusion.textContent = 'Os torques têm mesmo módulo e sentidos opostos. A soma dos torques é zero.';
      } else if (diff > 0) {
        status.textContent = 'Lado esquerdo domina';
        conclusion.textContent = `O torque anti-horário é ${format(Math.abs(diff), 0)} N·m maior. Para equilibrar, reduza força/distância à esquerda ou aumente força/distância à direita.`;
      } else {
        status.textContent = 'Lado direito domina';
        conclusion.textContent = `O torque horário é ${format(Math.abs(diff), 0)} N·m maior. Para equilibrar, reduza força/distância à direita ou aumente força/distância à esquerda.`;
      }
    };

    [leftForce, leftDistance, rightForce, rightDistance].forEach((input) => input.addEventListener('input', draw));
    draw();
  }

  MBB.enableChapter?.('06 Como as coisas ficam em equilíbrio', () => {
    MBB.showLesson({
      unit: 'Equilíbrio e fluidos',
      technical: 'Estática • grandezas escalares e vetoriais • equilíbrio • torque • centro de massa',
      title: 'Como as coisas ficam em equilíbrio',
      objective: '<strong>Propósito:</strong> analisar quando forças e torques se equilibram, reconhecer o papel do centro de massa e explicar a estabilidade de corpos e estruturas.',
      html: lessonHtml,
      init: initTorqueLab
    });
  });
})();