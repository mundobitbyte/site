(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você chega a um parque de diversões e para diante de uma montanha-russa. O trem está parado embaixo. Um motor o puxa lentamente até o ponto mais alto.</strong>
        <p>Quando o trem chega ao topo, ele ainda está quase parado. Mesmo assim, todos sabem que há algo “guardado” naquela altura: basta começar a descida para o movimento aparecer. Depois, perto da estação, os freios reduzem a velocidade e o trem para.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Se o trem chega ao topo quase sem velocidade, por que ele consegue ganhar tanta velocidade na descida?</p><div class="choice-row"><button type="button" data-choice="a">Porque o movimento surge do nada</button><button type="button" data-choice="b">Porque a energia associada à altura pode se transformar em energia de movimento</button><button type="button" data-choice="c">Porque a massa deixa de existir</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa é a pista central do capítulo: acompanhar transformações de energia." data-wrong-text="Observe o que mudou quando o trem foi levado do chão ao alto."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> seguir uma volta completa da montanha-russa e descobrir onde entram trabalho, energia cinética, energia potencial, conservação e potência — sem começar pelas fórmulas.</p>
      </div>
    </section>

    <section>
      <h3>1. Primeiro o motor precisa tirar o trem do lugar e levá-lo para cima</h3>
      <p>O motor puxa o trem por meio de uma corrente. Existe uma força atuando ao longo de um deslocamento. Na Física, quando uma força participa do deslocamento de um corpo, dizemos que essa força realiza <strong>trabalho mecânico</strong>.</p>
      <p>Isso explica por que “fazer força” e “realizar trabalho mecânico” não são sinônimos. Você pode empurrar uma parede com grande esforço e, se ela não se deslocar, o trabalho mecânico da sua força sobre a parede é zero.</p>

      <div class="equation-walk"><div><span>1</span><p>Imagine a corrente puxando com <strong>5.000 N</strong>.</p></div><div><span>2</span><p>O trem avança <strong>20 m</strong> na mesma direção da força.</p></div><div><span>3</span><p>Precisamos de uma forma de representar “força atuando ao longo de uma distância”.</p></div></div>
      <div class="formula-box"><span class="formula-name">A fórmula nasce dessa necessidade</span><div class="big-formula">W = F · d</div><p>Quando força e deslocamento têm a mesma direção, o trabalho é o produto entre eles. No exemplo: 5.000 × 20 = <strong>100.000 J</strong>. A unidade é o joule (J).</p></div>
      <div class="note-box"><strong>Um detalhe importante</strong><p>Em situações gerais, o ângulo entre força e deslocamento importa. Aqui começamos pelo caso em que ambos têm a mesma direção para construir o significado antes da generalização.</p></div>
    </section>

    <section>
      <h3>2. O trem chega ao alto quase parado — então para onde foi o trabalho do motor?</h3>
      <p>O motor transferiu energia ao sistema ao elevar o trem. A altura mudou. Em vez de dizer que essa energia “sumiu”, a Física acompanha uma forma de energia associada à posição no campo gravitacional: a <strong>energia potencial gravitacional</strong>.</p>
      <p>Quanto maior a massa e quanto maior a altura escolhida em relação ao nível de referência, maior essa energia.</p>

      <div class="formula-box"><span class="formula-name">Agora precisamos prever quanto a altura representa em energia</span><div class="big-formula">E<sub>pg</sub> = m · g · h</div><p>Se um conjunto de 1.000 kg está 20 m acima do nível de referência e usamos g ≈ 10 m/s², temos E<sub>pg</sub> ≈ <strong>200.000 J</strong>.</p></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Faça a previsão antes da conta</strong><p>Com a mesma massa, se a altura dobrar, o que acontece com a energia potencial gravitacional?</p><div class="choice-row"><button type="button" data-choice="a">Fica pela metade</button><button type="button" data-choice="b">Dobra</button><button type="button" data-choice="c">Não muda</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como h aparece diretamente na relação m·g·h, dobrar h dobra Epg." data-wrong-text="Mantenha m e g constantes e observe o papel de h."></div></div>
    </section>

    <section>
      <h3>3. A corrente solta o trem. Ele desce e a velocidade cresce.</h3>
      <p>Agora a altura diminui e o movimento aumenta. A forma de energia associada ao movimento é a <strong>energia cinética</strong>.</p>
      <p>Há uma surpresa importante: a velocidade aparece ao quadrado. Isso significa que aumentar a velocidade tem um efeito muito forte sobre a energia cinética.</p>

      <div class="formula-box"><span class="formula-name">Queremos relacionar massa e velocidade com energia de movimento</span><div class="big-formula">E<sub>c</sub> = m · v² / 2</div><p>Para um corpo de 500 kg a 10 m/s: E<sub>c</sub> = 500·100/2 = <strong>25.000 J</strong>.</p></div>

      <div class="note-box"><strong>Pare e pense</strong><p>Se a velocidade dobrar de v para 2v, a energia cinética não dobra: ela fica <strong>quatro vezes maior</strong>, porque a velocidade está ao quadrado.</p></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Teste a relação</strong><p>O mesmo trem passa de 5 m/s para 10 m/s. A energia cinética fica aproximadamente:</p><div class="choice-row"><button type="button" data-choice="a">metade</button><button type="button" data-choice="b">duas vezes maior</button><button type="button" data-choice="c">quatro vezes maior</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="10 é o dobro de 5, e o quadrado torna a energia quatro vezes maior." data-wrong-text="Compare 5² com 10²."></div></div>
    </section>

    <section>
      <h3>4. No vale da pista, a pergunta muda: a energia desapareceu ou apenas mudou de forma?</h3>
      <p>No alto, o trem tinha muita energia potencial gravitacional e pouca cinética. Na descida, a altura diminuiu e a velocidade aumentou. Em um modelo ideal sem perdas relevantes, uma forma se transforma na outra.</p>
      <div class="visual-box"><strong class="card-title">Leia a pista como um mapa de energia</strong><svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Montanha-russa com um ponto alto, um vale e outro ponto alto, mostrando transformação entre energia potencial e cinética."><path d="M60 80 Q180 250 330 220 Q500 190 700 90" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="85" cy="115" r="14" class="motion-point"/><text x="55" y="55">alto: mais Epg</text><circle cx="330" cy="220" r="14" class="motion-point"/><text x="270" y="270">baixo: mais Ec</text><circle cx="675" cy="110" r="14" class="motion-point"/><text x="580" y="55">subida: Ec → Epg</text></svg><p class="visual-caption">A energia mecânica pode mudar de “endereço” entre formas diferentes.</p></div>
      <div class="formula-box"><span class="formula-name">Para acompanhar o total mecânico</span><div class="big-formula">E<sub>m</sub> = E<sub>c</sub> + E<sub>p</sub></div><p>Sem forças dissipativas realizando trabalho, a energia mecânica permanece constante. Isso não significa que Ec e Ep ficam constantes separadamente.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a leitura física</strong><p>Num trecho ideal de descida, sem atrito, o que esperamos?</p><div class="choice-row"><button type="button" data-choice="a">Epg diminui enquanto Ec aumenta</button><button type="button" data-choice="b">As duas desaparecem</button><button type="button" data-choice="c">Ec diminui porque a velocidade aumenta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A energia associada à altura se transforma em energia associada ao movimento." data-wrong-text="Compare altura e velocidade durante a descida."></div></div>
    </section>

    <section>
      <h3>5. Mas a montanha-russa real não volta para sempre à mesma altura</h3>
      <p>Se tudo fosse perfeitamente ideal, o trem poderia continuar convertendo energia potencial e cinética sem perdas mecânicas. Na realidade existem atrito nos rolamentos, resistência do ar, deformações e aquecimento.</p>
      <p>A energia mecânica do trem pode diminuir porque parte da energia é transferida e transformada em outras formas, especialmente energia térmica. <strong>A energia não “some”.</strong></p>
      <div class="note-box"><strong>Uma frase para guardar</strong><p>Conservação de energia não significa “a energia mecânica é sempre constante”. Significa que, ao definir adequadamente o sistema e acompanhar todas as formas e transferências, a energia é conservada.</p></div>
    </section>

    <section>
      <h3>6. Em outra atração, o trem não começa no alto: uma mola comprimida o lança</h3>
      <p>Algumas atrações usam mecanismos elásticos. Antes do lançamento, o sistema comprime ou estica um elemento elástico. A deformação armazena <strong>energia potencial elástica</strong>, que depois pode se transformar em movimento.</p>
      <div class="formula-box"><span class="formula-name">Quando precisamos estimar a energia armazenada numa mola ideal</span><div class="big-formula">E<sub>pe</sub> = k · x² / 2</div><p><strong>k</strong> representa a rigidez da mola e <strong>x</strong> sua deformação. Como x está ao quadrado, dobrar a deformação quadruplica a energia armazenada.</p></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de calcular</strong><p>Na mesma mola, se a deformação passar de x para 2x, a energia elástica:</p><div class="choice-row"><button type="button" data-choice="a">dobra</button><button type="button" data-choice="b">quadruplica</button><button type="button" data-choice="c">não muda</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A deformação aparece ao quadrado." data-wrong-text="Compare x² e (2x)²."></div></div>
    </section>

    <section>
      <h3>7. Duas montanhas-russas chegam ao mesmo alto, mas uma sobe muito mais rápido</h3>
      <p>Imagine dois motores elevando trens de mesma massa até a mesma altura. Se a transformação de energia é semelhante, o trabalho necessário pode ser semelhante. Mas um motor faz isso em 20 s e outro em 40 s.</p>
      <p>Precisamos então de uma grandeza que diga <strong>quão rapidamente o trabalho é realizado ou a energia é transferida</strong>. Essa grandeza é a <strong>potência</strong>.</p>
      <div class="formula-box"><span class="formula-name">A fórmula aparece porque o tempo passou a importar</span><div class="big-formula">P = W / Δt</div><p>A unidade é o watt (W), equivalente a joule por segundo. Fazer o mesmo trabalho em menos tempo significa maior potência média.</p></div>

      <div class="interactive-lab" id="powerLab"><div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Simule a subida do trem até a primeira colina</h4></div><div class="lab-controls"><label>Massa <strong><span id="massEnergyValue">60</span> kg</strong><input id="massEnergyRange" type="range" min="40" max="100" value="60"></label><label>Altura <strong><span id="heightEnergyValue">3</span> m</strong><input id="heightEnergyRange" type="range" min="1" max="6" value="3"></label><label>Tempo <strong><span id="timeEnergyValue">6</span> s</strong><input id="timeEnergyRange" type="range" min="2" max="20" value="6"></label></div><div class="power-lab-results"><div><span>Ganho de Epg</span><strong id="energyGainValue">1.800 J</strong></div><div><span>Trabalho aproximado</span><strong id="workValue">1.800 J</strong></div><div><span>Potência média</span><strong id="powerValue">300 W</strong></div></div><p>Mantenha massa e altura e mude apenas o tempo. Antes de mover o controle, preveja o que acontecerá com a potência.</p></div>
    </section>

    <section>
      <h3>8. Traga a ideia para você: estime sua potência numa escada</h3>
      <div class="experiment-box"><strong class="card-title">Experimento seguro</strong><ol class="reason-steps"><li>Meça ou estime a altura vertical total de uma escada segura.</li><li>Use sua massa em kg.</li><li>Cronometre uma subida normal, sem corrida.</li><li>Estime Epg = m·g·h.</li><li>Divida pelo tempo para obter uma potência média aproximada.</li></ol><p class="safety-note"><strong>Segurança:</strong> use uma escada adequada, com corrimão, sem disputa de velocidade.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Depois da volta</span>
      <h3>9. Você consegue contar a história da energia da atração?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Trabalho</strong><p>Você empurra uma parede e ela não se desloca. O trabalho mecânico da sua força sobre a parede é:</p><div class="choice-row"><button type="button" data-choice="a">máximo</button><button type="button" data-choice="b">zero</button><button type="button" data-choice="c">igual ao seu peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Sem deslocamento da parede, esse trabalho é zero." data-wrong-text="Trabalho mecânico exige relação entre força e deslocamento."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Trabalho calculado</strong><p>Uma força de 30 N desloca um corpo 5 m na mesma direção. Qual trabalho?</p><div class="choice-row"><button type="button" data-choice="a">6 J</button><button type="button" data-choice="b">35 J</button><button type="button" data-choice="c">150 J</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="W = 30·5 = 150 J." data-wrong-text="Multiplique força por deslocamento neste caso simples."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. No topo</strong><p>Com mesma massa, aumentar a altura aumenta principalmente:</p><div class="choice-row"><button type="button" data-choice="a">energia potencial gravitacional</button><button type="button" data-choice="b">a massa</button><button type="button" data-choice="c">o tempo universal</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A altura entra diretamente em m·g·h." data-wrong-text="Pense no que mudou entre o vale e o topo."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Velocidade</strong><p>Se a velocidade dobra, mantendo a massa, a energia cinética fica:</p><div class="choice-row"><button type="button" data-choice="a">duas vezes maior</button><button type="button" data-choice="b">quatro vezes maior</button><button type="button" data-choice="c">igual</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A velocidade está ao quadrado." data-wrong-text="Compare v² com (2v)²."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Descida ideal</strong><p>Durante uma descida sem atrito:</p><div class="choice-row"><button type="button" data-choice="a">a energia some</button><button type="button" data-choice="b">Ec diminui</button><button type="button" data-choice="c">Epg diminui e Ec aumenta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Uma forma se transforma na outra." data-wrong-text="Observe altura e velocidade."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Atrito</strong><p>Se parte da energia mecânica vira energia térmica, isso significa que a energia total:</p><div class="choice-row"><button type="button" data-choice="a">foi transformada, não destruída</button><button type="button" data-choice="b">desapareceu</button><button type="button" data-choice="c">virou massa obrigatoriamente</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Conservação envolve acompanhar transformações e transferências." data-wrong-text="Não confunda energia mecânica com energia total."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Mola</strong><p>Dobrar a deformação de uma mesma mola ideal faz a energia elástica:</p><div class="choice-row"><button type="button" data-choice="a">dobrar</button><button type="button" data-choice="b">quadruplicar</button><button type="button" data-choice="c">zerar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="x aparece ao quadrado." data-wrong-text="Compare x² com (2x)²."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Potência</strong><p>Dois motores realizam o mesmo trabalho; um leva metade do tempo. Ele desenvolve potência média:</p><div class="choice-row"><button type="button" data-choice="a">metade</button><button type="button" data-choice="b">igual</button><button type="button" data-choice="c">duas vezes maior</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="P = W/Δt: reduzir o tempo à metade dobra a potência." data-wrong-text="Mantenha W e compare o denominador."></div></div>
      <div class="challenge-box"><strong>Desafio MbB</strong><p>Escolha três pontos de uma montanha-russa — topo, vale e subida seguinte — e explique, em palavras, como Epg e Ec se transformam. Depois diga o que muda na história quando incluímos atrito real.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo desenvolve trabalho mecânico, potência, energia cinética, energia potencial gravitacional e elástica e conservação da energia, sempre partindo das transformações observadas na situação real.</p></details>
  `;

  function initPowerLab(root) {
    const mass = $('#massEnergyRange', root), height = $('#heightEnergyRange', root), time = $('#timeEnergyRange', root);
    if (!mass || !height || !time) return;
    const draw = () => {
      const m = Number(mass.value), h = Number(height.value), t = Number(time.value);
      const e = m * 10 * h, p = e / t;
      $('#massEnergyValue', root).textContent = m;
      $('#heightEnergyValue', root).textContent = h;
      $('#timeEnergyValue', root).textContent = t;
      $('#energyGainValue', root).textContent = `${e.toLocaleString('pt-BR')} J`;
      $('#workValue', root).textContent = `${e.toLocaleString('pt-BR')} J`;
      $('#powerValue', root).textContent = `${p.toLocaleString('pt-BR',{maximumFractionDigits:1})} W`;
    };
    mass.addEventListener('input', draw); height.addEventListener('input', draw); time.addEventListener('input', draw); draw();
  }

  MBB.enableChapter?.('03 Energia: de onde vem e para onde vai?', () => {
    MBB.showLesson({
      unit: 'Energia e matéria',
      technical: 'Trabalho • potência • energia cinética • energia potencial • conservação',
      title: 'Energia: de onde vem e para onde vai?',
      objective: '<strong>Propósito:</strong> acompanhar uma volta de montanha-russa para compreender como trabalho e energia se transferem e se transformam, e por que o tempo leva ao conceito de potência.',
      html: lessonHtml,
      init: initPowerLab
    });
  });
})();