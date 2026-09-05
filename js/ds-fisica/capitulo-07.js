(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Comece por uma situação real</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Uma moeda de aço afunda. Um navio feito com milhares de toneladas de aço pode flutuar.</strong>
        <p>O material do navio é denso, mas sua forma faz com que ele desloque um grande volume de água. Ao mesmo tempo, a água exerce forças sobre toda a parte submersa do casco.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> o que decide se um corpo afunda, flutua ou permanece suspenso dentro de um líquido?</p>
      </div>
    </section>

    <section>
      <h3>1. Densidade: massa distribuída em um volume</h3>
      <p>Antes de falar em flutuação, precisamos comparar <strong>quanto de massa existe em determinado volume</strong>. Essa relação é a densidade.</p>

      <div class="formula-box">
        <span class="formula-name">Densidade</span>
        <div class="big-formula">ρ = m / V</div>
        <p><strong>ρ</strong> é a densidade, <strong>m</strong> é a massa e <strong>V</strong> é o volume. No SI, a unidade é kg/m³.</p>
      </div>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Mesmo volume, massas diferentes</strong><p>Dois blocos com o mesmo tamanho podem ter massas diferentes. O mais massivo tem maior densidade.</p></div>
        <div class="example-box"><strong class="card-title">Mesma massa, volumes diferentes</strong><p>Se a mesma massa ocupar um volume maior, a densidade média será menor.</p></div>
      </div>

      <div class="example-box"><strong class="card-title">Exemplo guiado</strong><p>Um objeto tem massa de 2 kg e volume de 0,002 m³.</p><ol class="reason-steps"><li>Use ρ = m/V.</li><li>ρ = 2/0,002.</li><li><strong>ρ = 1.000 kg/m³.</strong></li></ol></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>Compare antes de calcular</strong><p>Dois objetos têm a mesma massa. O objeto A ocupa o dobro do volume de B. Qual tem menor densidade média?</p><div class="choice-row"><button type="button" data-choice="a">A</button><button type="button" data-choice="b">B</button><button type="button" data-choice="c">As densidades são sempre iguais</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Com a mesma massa, aumentar o volume diminui a densidade média." data-wrong-text="Observe a relação ρ = m/V mantendo m constante."></div></div>
    </section>

    <section>
      <h3>2. Pressão: a mesma força pode produzir efeitos diferentes</h3>
      <p>Pressão relaciona a força aplicada perpendicularmente a uma superfície com a área sobre a qual essa força se distribui.</p>

      <div class="pressure-compare">
        <div><strong>Área pequena</strong><span class="pressure-foot narrow"></span><p>Mesma força concentrada em uma área menor → pressão maior.</p></div>
        <div><strong>Área grande</strong><span class="pressure-foot wide"></span><p>Mesma força distribuída em uma área maior → pressão menor.</p></div>
      </div>

      <div class="formula-box"><span class="formula-name">Pressão média sobre uma superfície</span><div class="big-formula">p = F / A</div><p>A unidade no SI é o <strong>pascal (Pa)</strong>, equivalente a N/m².</p></div>

      <div class="example-box"><strong class="card-title">Exemplo</strong><p>Uma força perpendicular de 600 N está distribuída por 0,020 m².</p><ol class="reason-steps"><li>p = F/A.</li><li>p = 600/0,020.</li><li><strong>p = 30.000 Pa.</strong></li></ol></div>
    </section>

    <section>
      <h3>3. Pressão em um líquido: quanto mais fundo, maior</h3>
      <p>Em um líquido em repouso, a pressão aumenta com a profundidade porque as camadas mais profundas sustentam o peso de uma coluna maior de líquido acima delas.</p>

      <svg class="lesson-visual" viewBox="0 0 760 310" role="img" aria-label="Reservatório com três pontos em profundidades diferentes e setas de pressão maiores nos pontos mais profundos">
        <rect x="170" y="45" width="420" height="225" rx="12" fill="#e8f5ff" stroke="#6fa9dc" stroke-width="3"/>
        <line x1="170" y1="75" x2="590" y2="75" stroke="#1967d2" stroke-width="3"/>
        <text x="605" y="80" class="visual-note">superfície</text>
        <circle cx="310" cy="115" r="8" fill="#1967d2"/><circle cx="310" cy="175" r="8" fill="#1967d2"/><circle cx="310" cy="235" r="8" fill="#1967d2"/>
        <line x1="320" y1="115" x2="385" y2="115" stroke="#1967d2" stroke-width="4"/><polygon points="385,115 370,106 370,124" fill="#1967d2"/>
        <line x1="320" y1="175" x2="430" y2="175" stroke="#1967d2" stroke-width="5"/><polygon points="430,175 413,165 413,185" fill="#1967d2"/>
        <line x1="320" y1="235" x2="485" y2="235" stroke="#1967d2" stroke-width="6"/><polygon points="485,235 466,224 466,246" fill="#1967d2"/>
        <text x="95" y="120" class="visual-note">menor h</text><text x="95" y="180" class="visual-note">h intermediária</text><text x="95" y="240" class="visual-note">maior h</text>
        <text x="225" y="298" class="visual-title">no mesmo líquido, maior profundidade → maior pressão</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Lei de Stevin — variação de pressão</span><div class="big-formula">Δp = ρ · g · h</div><p><strong>h</strong> é a diferença de profundidade. Se quisermos a pressão absoluta em um ponto, somamos a pressão existente na superfície.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo na água</strong><p>Considere ρ = 1.000 kg/m³, g ≈ 10 m/s² e profundidade de 2 m.</p><ol class="reason-steps"><li>Δp = ρ·g·h.</li><li>Δp = 1.000·10·2.</li><li><strong>Δp = 20.000 Pa.</strong></li></ol><p>Esse é o aumento de pressão devido à coluna de água, além da pressão na superfície.</p></div>

      <div class="note-box"><strong>A forma do recipiente não entra na fórmula</strong><p>Para pontos no mesmo líquido, em repouso e na mesma profundidade, a pressão é a mesma mesmo que os recipientes tenham formatos diferentes.</p></div>
    </section>

    <section>
      <h3>4. Princípio de Pascal: pressão transmitida em um fluido confinado</h3>
      <p>Em um fluido praticamente incompressível e confinado, uma variação de pressão aplicada em uma região é transmitida às demais regiões do fluido. É a ideia usada em sistemas hidráulicos.</p>

      <div class="hydraulic-visual">
        <div class="hydraulic-piston small"><strong>F₁</strong><span>A₁</span></div>
        <div class="hydraulic-fluid"><span>mesma variação de pressão</span></div>
        <div class="hydraulic-piston large"><strong>F₂</strong><span>A₂ maior</span></div>
      </div>

      <div class="formula-box"><span class="formula-name">Prensa hidráulica ideal</span><div class="big-formula">F₁ / A₁ = F₂ / A₂</div><p>Uma força menor em uma área menor pode corresponder a uma força maior em uma área maior. Isso não cria energia: o deslocamento do pistão maior é menor na proporção adequada.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo</strong><p>Em uma prensa ideal, A₁ = 5 cm², A₂ = 100 cm² e F₁ = 100 N.</p><ol class="reason-steps"><li>F₁/A₁ = F₂/A₂.</li><li>100/5 = F₂/100.</li><li><strong>F₂ = 2.000 N.</strong></li></ol></div>
    </section>

    <section>
      <h3>5. Empuxo: por que o líquido pode sustentar um corpo</h3>
      <p>Um corpo mergulhado recebe pressão por todos os lados. Como a parte inferior está, em geral, mais profunda que a superior, as forças de pressão produzem uma resultante para cima: o <strong>empuxo</strong>.</p>

      <svg class="lesson-visual" viewBox="0 0 760 320" role="img" aria-label="Bloco submerso com pressão maior na parte inferior e uma seta de empuxo para cima, além do peso para baixo">
        <defs><marker id="c7ArrowUp" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1967d2"/></marker><marker id="c7ArrowDown" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b42318"/></marker></defs>
        <rect x="155" y="40" width="450" height="245" rx="12" fill="#e8f5ff" stroke="#6fa9dc" stroke-width="3"/>
        <line x1="155" y1="75" x2="605" y2="75" stroke="#1967d2" stroke-width="3"/>
        <rect x="315" y="125" width="130" height="95" rx="8" fill="#f5f8fb" stroke="#304257" stroke-width="3"/>
        <line x1="380" y1="135" x2="380" y2="88" stroke="#1967d2" stroke-width="6" marker-end="url(#c7ArrowUp)"/><text x="395" y="103" class="visual-note">empuxo E</text>
        <line x1="380" y1="210" x2="380" y2="265" stroke="#b42318" stroke-width="6" marker-end="url(#c7ArrowDown)"/><text x="395" y="257" class="visual-note">peso P</text>
        <line x1="280" y1="150" x2="315" y2="150" stroke="#6fa9dc" stroke-width="3"/><line x1="280" y1="195" x2="315" y2="195" stroke="#1967d2" stroke-width="6"/>
        <line x1="480" y1="150" x2="445" y2="150" stroke="#6fa9dc" stroke-width="3"/><line x1="480" y1="195" x2="445" y2="195" stroke="#1967d2" stroke-width="6"/>
        <text x="184" y="310" class="visual-title">pressão maior em regiões mais profundas contribui para a resultante para cima</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Princípio de Arquimedes</span><div class="big-formula">E = ρ<sub>fluido</sub> · g · V<sub>deslocado</sub></div><p>O empuxo tem o mesmo módulo do peso do fluido deslocado pelo corpo.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo</strong><p>Um corpo totalmente submerso desloca 0,003 m³ de água. Use ρ = 1.000 kg/m³ e g ≈ 10 m/s².</p><ol class="reason-steps"><li>E = ρ·g·V.</li><li>E = 1.000·10·0,003.</li><li><strong>E = 30 N.</strong></li></ol></div>
    </section>

    <section>
      <h3>6. Afundar, flutuar ou ficar suspenso</h3>
      <p>O comportamento do corpo depende da comparação entre seu peso e o empuxo disponível. Uma comparação de densidades ajuda a prever o resultado em situações simples.</p>

      <div class="float-cases">
        <article><strong>ρ<sub>obj</sub> &lt; ρ<sub>fluido</sub></strong><div class="mini-tank float"><span></span></div><p>O corpo tende a flutuar parcialmente submerso até que <strong>E = P</strong>.</p></article>
        <article><strong>ρ<sub>obj</sub> ≈ ρ<sub>fluido</sub></strong><div class="mini-tank neutral"><span></span></div><p>No modelo ideal, pode permanecer em equilíbrio praticamente submerso.</p></article>
        <article><strong>ρ<sub>obj</sub> &gt; ρ<sub>fluido</sub></strong><div class="mini-tank sink"><span></span></div><p>Mesmo totalmente submerso, o empuxo máximo é insuficiente e o corpo tende a afundar.</p></article>
      </div>

      <div class="note-box"><strong>Então por que um navio de aço flutua?</strong><p>Porque não devemos comparar apenas a densidade do aço maciço com a da água. O casco oco ocupa um volume muito grande para a massa total do navio. A <strong>densidade média do conjunto</strong> pode ficar menor que a da água, permitindo deslocar água suficiente para que o empuxo iguale o peso antes de o casco ficar totalmente submerso.</p></div>
    </section>

    <section>
      <h3>7. Laboratório interativo: faça o corpo flutuar ou afundar</h3>
      <div class="interactive-lab" id="buoyancyLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Densidade, volume deslocado e empuxo</h4></div>
        <div class="buoyancy-controls">
          <label>Densidade do objeto <strong><span id="objectDensityValue">700</span> kg/m³</strong><input id="objectDensityRange" type="range" min="200" max="1600" step="50" value="700"></label>
          <label>Volume do objeto <strong><span id="objectVolumeValue">5,0</span> L</strong><input id="objectVolumeRange" type="range" min="1" max="10" step="0.5" value="5"></label>
          <label>Fluido <strong><span id="fluidName">Água</span></strong><select id="fluidSelect"><option value="water">Água</option><option value="salt">Água salgada</option><option value="oil">Óleo</option></select></label>
        </div>

        <div class="buoyancy-scene" aria-hidden="true">
          <div class="buoyancy-water"></div>
          <div id="buoyancyBlock" class="buoyancy-block"></div>
          <span class="buoyancy-surface">superfície</span>
        </div>

        <div class="buoyancy-results">
          <div><span>Peso do objeto</span><strong id="objectWeightValue">35,0 N</strong></div>
          <div><span>Empuxo máximo submerso</span><strong id="maxBuoyancyValue">50,0 N</strong></div>
          <div><span>Parte submersa se flutuar</span><strong id="submergedValue">70%</strong></div>
          <div><span>Resultado</span><strong id="buoyancyStatus">Flutua</strong></div>
        </div>
        <p id="buoyancyConclusion">O objeto flutua e ajusta a parte submersa até o empuxo igualar seu peso.</p>
      </div>
    </section>

    <section>
      <h3>8. Experimento simples: construa um pequeno “navio”</h3>
      <div class="experiment-box"><strong class="card-title">Folha de alumínio e moedas</strong><ol class="reason-steps"><li>Separe dois pedaços iguais de papel-alumínio.</li><li>Amasse um deles formando uma bola compacta.</li><li>Modele o outro como um pequeno barco com base larga e bordas elevadas.</li><li>Coloque os dois, um de cada vez, em uma bacia com água e observe.</li><li>No barquinho, adicione moedas aos poucos e registre quantas ele suporta antes de afundar.</li></ol><p class="safety-note"><strong>Segurança:</strong> use apenas recipiente estável com pouca água e objetos leves. Seque imediatamente qualquer água derramada.</p></div>
      <p>A massa do alumínio é praticamente a mesma nos dois casos, mas a forma do barquinho permite deslocar um volume de água muito maior antes de afundar.</p>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>9. Você consegue explicar pressão e flutuação?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Densidade</strong><p>Um corpo de 3 kg ocupa 0,003 m³. Sua densidade é:</p><div class="choice-row"><button type="button" data-choice="a">100 kg/m³</button><button type="button" data-choice="b">1.000 kg/m³</button><button type="button" data-choice="c">9.000 kg/m³</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="ρ = 3/0,003 = 1.000 kg/m³." data-wrong-text="Use ρ = m/V."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Pressão</strong><p>Para a mesma força perpendicular, reduzir a área de contato faz a pressão:</p><div class="choice-row"><button type="button" data-choice="a">Aumentar</button><button type="button" data-choice="b">Diminuir</button><button type="button" data-choice="c">Ficar necessariamente zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como p = F/A, menor área com a mesma força produz maior pressão." data-wrong-text="Mantenha F constante e observe o denominador da fórmula."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Stevin</strong><p>Em um mesmo líquido em repouso, qual ponto tende a ter maior pressão?</p><div class="choice-row"><button type="button" data-choice="a">O mais próximo da superfície</button><button type="button" data-choice="b">Todos, independentemente da profundidade</button><button type="button" data-choice="c">O mais profundo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A variação de pressão cresce com h: Δp = ρgh." data-wrong-text="Compare as profundidades."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Pascal</strong><p>Em uma prensa hidráulica ideal, aumentar a área do pistão de saída permite:</p><div class="choice-row"><button type="button" data-choice="a">Criar energia do nada</button><button type="button" data-choice="b">Obter força maior no pistão de maior área</button><button type="button" data-choice="c">Eliminar a pressão no fluido</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A mesma pressão atuando em área maior corresponde a força maior; o deslocamento compensa essa vantagem." data-wrong-text="Use F/A igual nos dois pistões do modelo ideal."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Empuxo</strong><p>Um corpo desloca 0,002 m³ de água. Com ρ = 1.000 kg/m³ e g = 10 m/s², o empuxo é:</p><div class="choice-row"><button type="button" data-choice="a">20 N</button><button type="button" data-choice="b">200 N</button><button type="button" data-choice="c">2 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="E = 1.000·10·0,002 = 20 N." data-wrong-text="Use E = ρ·g·Vdeslocado."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Corpo flutuando</strong><p>Quando um corpo permanece flutuando em repouso, sem tocar o fundo, temos:</p><div class="choice-row"><button type="button" data-choice="a">Peso zero</button><button type="button" data-choice="b">Empuxo maior que o peso para sempre</button><button type="button" data-choice="c">Empuxo igual ao peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Em equilíbrio vertical, a resultante é zero: E = P." data-wrong-text="Relacione a flutuação em repouso com equilíbrio de forças."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Navio</strong><p>Por que um grande navio de aço pode flutuar?</p><div class="choice-row"><button type="button" data-choice="a">Porque o aço deixa de ter massa na água</button><button type="button" data-choice="b">Porque o casco permite grande volume deslocado e baixa densidade média do conjunto</button><button type="button" data-choice="c">Porque a gravidade deixa de atuar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A forma oca permite deslocar água suficiente para que o empuxo iguale o peso." data-wrong-text="Compare o volume total ocupado pelo navio com sua massa total."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Água salgada</strong><p>Um mesmo corpo flutuante passa da água doce para água salgada, mais densa. O que tende a acontecer?</p><div class="choice-row"><button type="button" data-choice="a">Ele precisa deslocar menor volume e fica menos submerso</button><button type="button" data-choice="b">Ele obrigatoriamente afunda</button><button type="button" data-choice="c">O empuxo desaparece</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como E = ρfluido·g·Vdeslocado, um fluido mais denso exige menor volume deslocado para equilibrar o mesmo peso." data-wrong-text="Mantenha o peso do corpo e compare a densidade do fluido."></div></div>

      <div class="challenge-box"><strong>Desafio MbB — projete um cargueiro de alumínio</strong><p>Você recebe uma folha de alumínio de massa fixa e precisa transportar o maior número possível de moedas sem afundar. Explique quais características de forma aumentariam a capacidade de carga usando <strong>volume deslocado, empuxo, peso total e estabilidade</strong>. Depois proponha como faria um teste justo entre dois formatos.</p><details><summary>Critérios para conferir sua proposta</summary><p>Uma boa proposta aumenta o volume de água que pode ser deslocado antes de a borda ficar submersa, distribui a carga para manter o equilíbrio e compara formatos mantendo constantes a quantidade de alumínio, o tipo de moeda e as condições da água.</p></details></div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo trabalha os objetos previstos para a 1ª série em <strong>Hidrostática</strong>: pressão, densidade, Lei de Stevin, Princípio de Pascal e Princípio de Arquimedes/empuxo. A flutuação de navios é usada como situação real para integrar esses conceitos.</p>
    </details>`;

  function initBuoyancyLab(root) {
    const objectDensity = $('#objectDensityRange', root);
    const objectVolume = $('#objectVolumeRange', root);
    const fluid = $('#fluidSelect', root);
    const block = $('#buoyancyBlock', root);
    if (!objectDensity || !objectVolume || !fluid || !block) return;

    const fluids = {
      water: { name: 'Água', rho: 1000 },
      salt: { name: 'Água salgada', rho: 1025 },
      oil: { name: 'Óleo', rho: 800 }
    };

    const format = (value, digits = 1) => Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

    const draw = () => {
      const rhoObj = Number(objectDensity.value);
      const volumeL = Number(objectVolume.value);
      const volumeM3 = volumeL / 1000;
      const selected = fluids[fluid.value] || fluids.water;
      const g = 10;
      const mass = rhoObj * volumeM3;
      const weight = mass * g;
      const maxBuoyancy = selected.rho * g * volumeM3;
      const ratio = rhoObj / selected.rho;

      $('#objectDensityValue', root).textContent = rhoObj.toLocaleString('pt-BR');
      $('#objectVolumeValue', root).textContent = format(volumeL, 1);
      $('#fluidName', root).textContent = selected.name;
      $('#objectWeightValue', root).textContent = `${format(weight, 1)} N`;
      $('#maxBuoyancyValue', root).textContent = `${format(maxBuoyancy, 1)} N`;

      const submerged = Math.min(100, Math.max(0, ratio * 100));
      $('#submergedValue', root).textContent = ratio <= 1 ? `${format(submerged, 0)}%` : '100%';

      const status = $('#buoyancyStatus', root);
      const conclusion = $('#buoyancyConclusion', root);

      block.classList.remove('floating', 'neutral', 'sinking');
      if (ratio < 0.98) {
        status.textContent = 'Flutua';
        conclusion.textContent = `O objeto flutua. Aproximadamente ${format(submerged, 0)}% de seu volume fica submerso até o empuxo igualar o peso.`;
        block.classList.add('floating');
        block.style.setProperty('--submerged', `${submerged}%`);
      } else if (ratio <= 1.02) {
        status.textContent = 'Equilíbrio aproximado';
        conclusion.textContent = 'As densidades são muito próximas. No modelo ideal, o corpo pode permanecer praticamente submerso em equilíbrio.';
        block.classList.add('neutral');
        block.style.setProperty('--submerged', '100%');
      } else {
        status.textContent = 'Afunda';
        conclusion.textContent = 'Mesmo totalmente submerso, o empuxo máximo é menor que o peso. A resultante permanece para baixo.';
        block.classList.add('sinking');
        block.style.setProperty('--submerged', '100%');
      }
    };

    [objectDensity, objectVolume].forEach((input) => input.addEventListener('input', draw));
    fluid.addEventListener('input', draw);
    fluid.addEventListener('change', draw);
    draw();
  }

  MBB.enableChapter?.('07 Por que navios flutuam?', () => {
    MBB.showLesson({
      unit: 'Equilíbrio e fluidos',
      technical: 'Hidrostática • pressão • densidade • Stevin • Pascal • Arquimedes e empuxo',
      title: 'Por que navios flutuam?',
      objective: '<strong>Propósito:</strong> relacionar pressão, densidade e empuxo para explicar o comportamento de corpos em líquidos e aplicações hidráulicas.',
      html: lessonHtml,
      init: initBuoyancyLab
    });
  });
})();