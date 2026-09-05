(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Comece por uma situação real</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Duas pessoas sobem a mesma escada. Uma corre; a outra sobe devagar.</strong>
        <p>As duas chegam ao mesmo andar e elevaram seus corpos pela mesma altura. Mas uma fez isso em menos tempo.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> elas realizaram o mesmo trabalho? Têm a mesma energia? Desenvolveram a mesma potência?</p>
      </div>
    </section>

    <section>
      <h3>1. Trabalho mecânico: quando uma força produz deslocamento</h3>
      <p>Na Física, <strong>trabalho</strong> não significa simplesmente “fazer esforço”. Ele acontece quando uma força atua sobre um corpo e existe deslocamento relacionado a essa força.</p>

      <div class="energy-story-grid">
        <div class="energy-story-card"><strong>Empurrar e deslocar</strong><p>Você empurra uma caixa e ela anda 4 m. A força participa do deslocamento: há trabalho mecânico.</p></div>
        <div class="energy-story-card"><strong>Empurrar sem mover</strong><p>Você empurra uma parede e ela não se desloca. Há esforço muscular, mas o trabalho mecânico da força sobre a parede é zero.</p></div>
      </div>

      <div class="equation-walk">
        <div><span>1</span><p>Uma força de 50 N empurra uma caixa.</p></div>
        <div><span>2</span><p>A caixa se desloca 3 m na mesma direção da força.</p></div>
        <div><span>3</span><p>O trabalho é 50 × 3 = <strong>150 J</strong>.</p></div>
      </div>

      <div class="formula-box"><span class="formula-name">Quando força e deslocamento têm a mesma direção</span><div class="big-formula">W = F · d</div><p>A unidade é o <strong>joule (J)</strong>. Em situações gerais, a direção entre força e deslocamento também importa.</p></div>

      <div class="note-box"><strong>Uma ideia importante</strong><p>Se a força estiver perpendicular ao deslocamento, ela não realiza trabalho nessa direção. Por isso, carregar uma mochila horizontalmente numa altura constante não significa que a força vertical que sustenta a mochila esteja realizando trabalho sobre ela.</p></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Verificação rápida</strong><p>Uma força horizontal de 30 N desloca uma caixa 5 m na mesma direção. Qual é o trabalho dessa força?</p><div class="choice-row"><button type="button" data-choice="a">6 J</button><button type="button" data-choice="b">35 J</button><button type="button" data-choice="c">150 J</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="W = F·d = 30·5 = 150 J." data-wrong-text="Como força e deslocamento estão na mesma direção, multiplique 30 N por 5 m."></div></div>
    </section>

    <section>
      <h3>2. Energia cinética: movimento também armazena capacidade de produzir mudanças</h3>
      <p>Um carrinho parado e o mesmo carrinho em alta velocidade não produzem o mesmo efeito numa colisão. A energia associada ao movimento é chamada de <strong>energia cinética</strong>.</p>

      <div class="energy-flow">
        <div><strong>Mesmo corpo</strong><p>massa constante</p><div class="energy-bar" style="--energy:25%"><span></span></div><small>velocidade v</small></div>
        <div><strong>Dobrou a velocidade</strong><p>a energia não dobra</p><div class="energy-bar" style="--energy:100%"><span></span></div><small>velocidade 2v</small></div>
        <div><strong>Consequência</strong><p>como v aparece ao quadrado, dobrar a velocidade quadruplica a energia cinética.</p></div>
      </div>

      <div class="formula-box"><span class="formula-name">Energia cinética</span><div class="big-formula">E<sub>c</sub> = m · v² / 2</div><p><strong>m</strong> é a massa em kg e <strong>v</strong> é a velocidade em m/s.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo guiado</strong><p>Um objeto de 2 kg move-se a 4 m/s.</p><ol class="reason-steps"><li>Eleve a velocidade ao quadrado: 4² = 16.</li><li>Multiplique pela massa: 2·16 = 32.</li><li>Divida por 2: <strong>E<sub>c</sub> = 16 J</strong>.</li></ol></div>
    </section>

    <section>
      <h3>3. Energia potencial gravitacional: a altura importa</h3>
      <p>Quando levantamos um objeto, fazemos trabalho contra a gravidade. Essa energia pode ficar associada à posição do objeto em relação a um nível de referência.</p>

      <div class="energy-diagram">
        <div><strong>Mais baixo</strong><p>menor energia potencial gravitacional</p><div class="energy-bar potential" style="--energy:25%"><span></span></div></div>
        <div class="energy-arrow">→</div>
        <div><strong>Mais alto</strong><p>maior energia potencial gravitacional</p><div class="energy-bar potential" style="--energy:90%"><span></span></div></div>
      </div>

      <div class="formula-box"><span class="formula-name">Energia potencial gravitacional</span><div class="big-formula">E<sub>pg</sub> = m · g · h</div><p><strong>h</strong> é a altura em relação ao nível escolhido. Próximo à superfície da Terra, em exercícios introdutórios, podemos usar g ≈ 10 m/s² quando indicado.</p></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Interprete antes de calcular</strong><p>Uma caixa é elevada do chão até uma prateleira. Se a massa e g permanecem iguais, o que faz a energia potencial gravitacional aumentar?</p><div class="choice-row"><button type="button" data-choice="a">Apenas o tempo gasto</button><button type="button" data-choice="b">A altura</button><button type="button" data-choice="c">A cor da caixa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Com massa e g constantes, aumentar h aumenta Epg." data-wrong-text="Observe a relação Epg = m·g·h."></div></div>
    </section>

    <section>
      <h3>4. Energia potencial elástica: deformar uma mola também pode armazenar energia</h3>
      <p>Ao comprimir ou esticar uma mola, fazemos trabalho para deformá-la. Parte dessa energia fica armazenada e pode voltar a produzir movimento quando a mola é liberada.</p>

      <div class="spring-scene" aria-label="Representação de uma mola presa a uma parede e comprimida por um bloco"><div class="spring-wall"></div><div class="spring-coil"></div><div class="spring-block">bloco</div></div>

      <div class="formula-box"><span class="formula-name">Energia potencial elástica</span><div class="big-formula">E<sub>pe</sub> = k · x² / 2</div><p><strong>k</strong> indica a rigidez da mola e <strong>x</strong> é a deformação em relação à posição natural.</p></div>

      <div class="note-box"><strong>Observe o quadrado novamente</strong><p>A deformação aparece ao quadrado. Se uma mesma mola for deformada duas vezes mais, a energia elástica armazenada fica quatro vezes maior.</p></div>
    </section>

    <section>
      <h3>5. Conservação da energia: ela muda de forma</h3>
      <p>Uma das ideias centrais deste capítulo é que a energia pode ser <strong>transformada e transferida</strong>. Em um sistema ideal sem perdas mecânicas relevantes, podemos acompanhar a troca entre energia potencial e cinética.</p>

      <div class="conservation-track" aria-label="Pista em forma de vale com uma esfera no alto e indicações de energia potencial e cinética"><div class="track-line"></div><div class="track-ball"></div><span class="energy-label top">alto: mais Epg, menos Ec</span><span class="energy-label bottom">baixo: menos Epg, mais Ec</span><span class="energy-label end">ao subir novamente, Ec volta a se transformar em Epg</span></div>

      <div class="concept-flow"><div><strong>energia potencial</strong><span>E<sub>p</sub></span></div><div class="flow-arrow">↔</div><div><strong>energia cinética</strong><span>E<sub>c</sub></span></div><div class="flow-arrow">=</div><div><strong>energia mecânica</strong><span>E<sub>m</sub></span></div></div>
      <div class="formula-box"><span class="formula-name">Em situações ideais</span><div class="big-formula">E<sub>m</sub> = E<sub>c</sub> + E<sub>p</sub></div><p>Se não houver trabalho de forças dissipativas, a energia mecânica permanece constante.</p></div>

      <div class="note-box"><strong>E quando existe atrito?</strong><p>A energia mecânica pode diminuir porque parte dela é transformada em outras formas, como energia térmica. Isso não significa que a energia desapareceu.</p></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>Montanha-russa ideal</strong><p>Ao descer de um ponto alto para um ponto mais baixo, sem atrito, o que acontece?</p><div class="choice-row"><button type="button" data-choice="a">Epg diminui e Ec aumenta</button><button type="button" data-choice="b">Epg e Ec desaparecem</button><button type="button" data-choice="c">Ec diminui porque a velocidade aumenta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A energia potencial gravitacional se transforma em energia cinética." data-wrong-text="A descida reduz a altura e, sem perdas, aumenta o movimento."></div></div>
    </section>

    <section>
      <h3>6. Potência: fazer a mesma transformação em menos tempo</h3>
      <p>Volte à situação inicial da escada. Se duas pessoas de mesma massa chegam à mesma altura, a variação de energia potencial gravitacional pode ser a mesma. Mas quem sobe em menos tempo desenvolve maior <strong>potência média</strong>.</p>

      <div class="power-comparison"><div><strong>Pessoa A</strong><p>Sobe devagar. Mesmo ganho de energia, maior tempo.</p></div><div><strong>Pessoa B</strong><p>Sobe rápido. Mesmo ganho de energia, menor tempo → maior potência.</p></div></div>
      <div class="formula-box"><span class="formula-name">Potência média</span><div class="big-formula">P = W / Δt</div><p>Também podemos pensar em potência como rapidez de transformação ou transferência de energia. A unidade é o <strong>watt (W)</strong>, equivalente a joule por segundo.</p></div>

      <div class="interactive-lab" id="powerLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Suba a escada e compare energia e potência</h4></div>
        <div class="lab-controls">
          <label>Massa <strong><span id="massEnergyValue">60</span> kg</strong><input id="massEnergyRange" type="range" min="40" max="100" value="60"></label>
          <label>Altura <strong><span id="heightEnergyValue">3</span> m</strong><input id="heightEnergyRange" type="range" min="1" max="6" value="3"></label>
          <label>Tempo <strong><span id="timeEnergyValue">6</span> s</strong><input id="timeEnergyRange" type="range" min="2" max="20" value="6"></label>
        </div>
        <div class="stairs-scene" aria-hidden="true"><div class="stairs-step" style="left:8%;width:18%;"></div><div class="stairs-step" style="left:26%;width:18%;height:48px"></div><div class="stairs-step" style="left:44%;width:18%;height:72px"></div><div class="stairs-step" style="left:62%;width:30%;height:96px"></div><div id="stairsPerson" class="stairs-person">🚶</div></div>
        <div class="power-lab-results"><div><span>Ganho de Epg</span><strong id="energyGainValue">1.800 J</strong></div><div><span>Trabalho aproximado</span><strong id="workValue">1.800 J</strong></div><div><span>Potência média</span><strong id="powerValue">300 W</strong></div></div>
        <p>Use g ≈ 10 m/s². Primeiro mantenha massa e altura e altere apenas o tempo. Depois compare o efeito de mudar a altura.</p>
      </div>
    </section>

    <section>
      <h3>7. Experimento simples: estime sua potência ao subir escadas</h3>
      <div class="experiment-box"><strong class="card-title">O que medir</strong><ol class="reason-steps"><li>Meça ou estime a altura vertical total da escada.</li><li>Use sua massa em kg.</li><li>Cronometre o tempo de subida com segurança, sem correr em escada inadequada.</li><li>Calcule Epg = m·g·h.</li><li>Divida essa energia pelo tempo para estimar a potência média.</li></ol><p class="safety-note"><strong>Segurança:</strong> faça apenas em uma escada segura, com corrimão e sem disputa de velocidade. O objetivo é medir, não competir.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>8. Você consegue pensar em energia antes da fórmula?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Trabalho</strong><p>Uma pessoa empurra uma parede que não se move. Qual é o trabalho mecânico dessa força sobre a parede?</p><div class="choice-row"><button type="button" data-choice="a">Muito grande</button><button type="button" data-choice="b">Zero</button><button type="button" data-choice="c">Igual ao peso da pessoa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Sem deslocamento da parede, o trabalho mecânico dessa força sobre ela é zero." data-wrong-text="Na definição mecânica, o deslocamento participa diretamente do trabalho."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Energia cinética</strong><p>Para um mesmo corpo, se a velocidade dobra, a energia cinética fica:</p><div class="choice-row"><button type="button" data-choice="a">metade</button><button type="button" data-choice="b">duas vezes maior</button><button type="button" data-choice="c">quatro vezes maior</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A velocidade aparece ao quadrado: (2v)² = 4v²." data-wrong-text="Observe o quadrado em Ec = mv²/2."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Energia potencial gravitacional</strong><p>Um objeto de 5 kg está a 4 m de altura. Usando g = 10 m/s², qual é sua Epg?</p><div class="choice-row"><button type="button" data-choice="a">200 J</button><button type="button" data-choice="b">50 J</button><button type="button" data-choice="c">20 J</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Epg = 5·10·4 = 200 J." data-wrong-text="Multiplique massa, gravidade e altura."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Mola</strong><p>Ao comprimir uma mola ideal e depois soltá-la, a energia potencial elástica pode se transformar principalmente em:</p><div class="choice-row"><button type="button" data-choice="a">massa</button><button type="button" data-choice="b">energia cinética</button><button type="button" data-choice="c">altura obrigatoriamente</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A energia armazenada na deformação pode produzir movimento." data-wrong-text="Pense no que acontece com o bloco quando a mola é liberada."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Conservação</strong><p>Em uma pista ideal sem atrito, uma esfera desce de uma região alta. Qual afirmação é melhor?</p><div class="choice-row"><button type="button" data-choice="a">A energia desaparece</button><button type="button" data-choice="b">Só existe energia potencial</button><button type="button" data-choice="c">Energia potencial se transforma em cinética mantendo a energia mecânica</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Sem dissipação, a energia mecânica se conserva." data-wrong-text="A energia muda de forma ao longo do movimento."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Potência</strong><p>Duas máquinas realizam o mesmo trabalho. A máquina A faz em metade do tempo da B. Qual tem maior potência média?</p><div class="choice-row"><button type="button" data-choice="a">A</button><button type="button" data-choice="b">B</button><button type="button" data-choice="c">As duas têm potência igual</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Mesmo trabalho em menor tempo significa maior potência." data-wrong-text="Use a ideia P = W/Δt."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Atrito</strong><p>Num sistema real com atrito, por que a energia mecânica pode diminuir?</p><div class="choice-row"><button type="button" data-choice="a">Porque energia deixa de existir</button><button type="button" data-choice="b">Porque parte dela é transformada em outras formas, como energia térmica</button><button type="button" data-choice="c">Porque a massa some</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A conservação vale para a energia total; a energia mecânica pode ser convertida em outras formas." data-wrong-text="Atrito transforma energia, não a destrói."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Escada</strong><p>Duas pessoas de mesma massa sobem a mesma altura. A segunda leva metade do tempo. Comparando apenas essa subida, a segunda desenvolve:</p><div class="choice-row"><button type="button" data-choice="a">metade da potência</button><button type="button" data-choice="b">a mesma potência</button><button type="button" data-choice="c">o dobro da potência média</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="O trabalho associado ao ganho de altura é o mesmo; reduzir o tempo pela metade dobra a potência média." data-wrong-text="Mantenha o trabalho igual e compare os tempos em P = W/Δt."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Uma montanha-russa parte de uma região alta quase parada, desce e depois sobe outro trecho. Explique, sem começar por fórmulas, onde você espera maior energia potencial, onde espera maior energia cinética e por que a segunda subida não ultrapassaria a altura inicial em um modelo ideal sem fonte externa de energia.</p><details><summary>Conferir uma boa linha de raciocínio</summary><p>No ponto mais alto, a energia potencial gravitacional é maior. Durante a descida ela se transforma em energia cinética, que tende a ser maior nas regiões mais baixas. Na subida ocorre o processo inverso. Sem fonte externa de energia, a energia mecânica disponível limita a altura máxima ao valor compatível com a energia inicial.</p></details></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>Este capítulo trabalha os objetos previstos em conservação da energia: trabalho mecânico, potência, energia cinética, energia potencial gravitacional e elástica e conservação da energia.</p></details>
  `;

  function initPowerLab(root) {
    const mass = $('#massEnergyRange', root);
    const height = $('#heightEnergyRange', root);
    const time = $('#timeEnergyRange', root);
    const person = $('#stairsPerson', root);
    if (!mass || !height || !time || !person) return;

    const draw = () => {
      const m = Number(mass.value);
      const h = Number(height.value);
      const t = Number(time.value);
      const energy = m * 10 * h;
      const power = energy / t;
      $('#massEnergyValue', root).textContent = m;
      $('#heightEnergyValue', root).textContent = h;
      $('#timeEnergyValue', root).textContent = t;
      $('#energyGainValue', root).textContent = `${energy.toLocaleString('pt-BR')} J`;
      $('#workValue', root).textContent = `${energy.toLocaleString('pt-BR')} J`;
      $('#powerValue', root).textContent = `${power.toLocaleString('pt-BR', { maximumFractionDigits:1 })} W`;
      const pct = 10 + ((h - 1) / 5) * 70;
      person.style.left = `${pct}%`;
      person.style.bottom = `${52 + ((h - 1) / 5) * 82}px`;
    };

    mass.addEventListener('input', draw);
    height.addEventListener('input', draw);
    time.addEventListener('input', draw);
    draw();
  }

  function showChapter() {
    MBB.showLesson?.({
      unit:'Energia e matéria',
      technical:'Conservação da energia • trabalho, potência e energias mecânicas',
      title:'Energia: de onde vem e para onde vai?',
      objective:'<strong>Propósito:</strong> compreender como trabalho, energia e potência descrevem transformações em situações reais e como a energia muda de forma sem simplesmente desaparecer.',
      html:lessonHtml,
      init:initPowerLab
    });
  }

  MBB.enableChapter?.('03 Energia: de onde vem e para onde vai?', showChapter);
})();