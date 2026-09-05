(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Comece por uma situação real</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Por que cinto, airbag e zonas de deformação ajudam numa colisão?</strong>
        <p>Quando um carro para bruscamente, a velocidade de quem está dentro precisa mudar em pouco tempo. A mudança do movimento pode ser a mesma, mas a força média depende de <strong>quanto tempo essa mudança leva</strong>.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> como massa, velocidade, força e tempo se conectam durante uma batida?</p>
      </div>
    </section>

    <section>
      <h3>1. Quantidade de movimento: massa e velocidade contam juntas</h3>
      <p>Compare uma bola leve e um carrinho pesado movendo-se com a mesma velocidade. Parar o carrinho exige uma mudança de movimento maior. Para representar isso, usamos a <strong>quantidade de movimento</strong>, também chamada de momento linear.</p>

      <div class="momentum-comparison">
        <div><strong>Objeto A</strong><span>1 kg</span><span>4 m/s →</span><b>p = 4 kg·m/s</b></div>
        <div><strong>Objeto B</strong><span>3 kg</span><span>4 m/s →</span><b>p = 12 kg·m/s</b></div>
      </div>

      <div class="formula-box">
        <span class="formula-name">Quantidade de movimento</span>
        <div class="big-formula">p = m · v</div>
        <p><strong>m</strong> é a massa e <strong>v</strong> é a velocidade. Como a velocidade tem direção e sentido, a quantidade de movimento também tem.</p>
      </div>

      <div class="note-box"><strong>O sinal pode representar o sentido</strong><p>Em movimentos sobre uma linha reta, podemos escolher a direita como positiva. Assim, 5 m/s para a direita pode ser +5 m/s e 5 m/s para a esquerda, −5 m/s.</p></div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Verificação rápida</strong>
        <p>Um carrinho de 2 kg move-se a 3 m/s para a direita. Qual é o módulo de sua quantidade de movimento?</p>
        <div class="choice-row"><button type="button" data-choice="a">1,5 kg·m/s</button><button type="button" data-choice="b">6 kg·m/s</button><button type="button" data-choice="c">9 kg·m/s</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="p = m·v = 2·3 = 6 kg·m/s." data-wrong-text="Multiplique a massa pela velocidade."></div>
      </div>
    </section>

    <section>
      <h3>2. Impulso: uma força atuando durante um intervalo de tempo</h3>
      <p>Uma força pode agir por pouco ou muito tempo. O efeito acumulado dessa ação sobre o movimento é representado pelo <strong>impulso</strong>.</p>

      <div class="impulse-scene" aria-label="Comparação entre uma força grande por pouco tempo e uma força menor por mais tempo">
        <div><strong>Força maior</strong><span class="impulse-bar short"></span><small>tempo curto</small></div>
        <div><strong>Força menor</strong><span class="impulse-bar long"></span><small>tempo maior</small></div>
      </div>

      <div class="formula-box">
        <span class="formula-name">Força média constante no intervalo</span>
        <div class="big-formula">I = F · Δt</div>
        <p>A unidade do impulso é <strong>N·s</strong>, equivalente a kg·m/s.</p>
      </div>

      <div class="example-box"><strong class="card-title">Exemplo guiado</strong><p>Uma força média de 200 N atua durante 0,30 s.</p><ol class="reason-steps"><li>Identifique F = 200 N.</li><li>Identifique Δt = 0,30 s.</li><li>I = 200·0,30 = <strong>60 N·s</strong>.</li></ol></div>
    </section>

    <section>
      <h3>3. Teorema do impulso: mudar o movimento exige impulso</h3>
      <p>O elo central do capítulo é este: o impulso resultante sobre um corpo corresponde à <strong>variação de sua quantidade de movimento</strong>.</p>

      <div class="concept-flow">
        <div><strong>antes</strong><span>p<sub>i</sub></span></div><div class="flow-arrow">→</div><div><strong>impulso</strong><span>I</span></div><div class="flow-arrow">→</div><div><strong>depois</strong><span>p<sub>f</sub></span></div>
      </div>

      <div class="formula-box"><span class="formula-name">Teorema do impulso</span><div class="big-formula">I = Δp = p<sub>f</sub> − p<sub>i</sub></div><p>Se a massa permanecer constante, a mudança de velocidade produz a mudança da quantidade de movimento.</p></div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Pense antes de calcular</strong>
        <p>Uma bola de 0,5 kg estava parada e passa a 8 m/s para a direita. Qual é o módulo da variação de sua quantidade de movimento?</p>
        <div class="choice-row"><button type="button" data-choice="a">0,0625 kg·m/s</button><button type="button" data-choice="b">8,5 kg·m/s</button><button type="button" data-choice="c">4 kg·m/s</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Δp = m·(vf−vi) = 0,5·8 = 4 kg·m/s." data-wrong-text="A bola partiu do repouso: compare o momento final com zero."></div>
      </div>
    </section>

    <section>
      <h3>4. Segurança em colisões: aumentar o tempo pode reduzir a força média</h3>
      <p>Se uma pessoa precisa ir de uma velocidade inicial até o repouso, a variação de quantidade de movimento é determinada por sua massa e pela mudança de velocidade. O que dispositivos de segurança podem fazer é <strong>aumentar o intervalo de tempo da desaceleração</strong>.</p>

      <div class="safety-collision-grid">
        <div><strong>Parada quase instantânea</strong><div class="collision-time tiny"></div><p>Mesmo Δp em tempo muito curto → força média maior.</p></div>
        <div><strong>Parada mais prolongada</strong><div class="collision-time safer"></div><p>Mesmo Δp distribuído em mais tempo → força média menor.</p></div>
      </div>

      <div class="example-box"><strong class="card-title">Compare os números</strong><p>Considere uma pessoa de 70 kg reduzindo sua velocidade de 10 m/s para 0.</p><ol class="reason-steps"><li>O módulo da variação é |Δp| = 70·10 = <strong>700 kg·m/s</strong>.</li><li>Se isso ocorre em 0,05 s, a força média tem módulo aproximado de <strong>14.000 N</strong>.</li><li>Se ocorre em 0,50 s, a força média cai para cerca de <strong>1.400 N</strong>.</li></ol></div>

      <div class="note-box"><strong>Importante</strong><p>Cinto e airbag não “eliminam” a mudança de movimento. Eles ajudam a controlar como ela acontece e distribuem forças de maneira mais segura. Uma colisão real envolve muitos detalhes além deste modelo introdutório.</p></div>
    </section>

    <section>
      <h3>5. Conservação da quantidade de movimento</h3>
      <p>Durante uma colisão, os corpos exercem forças uns sobre os outros. Essas forças internas aparecem em pares. Se o impulso externo sobre o sistema for desprezível durante o curto intervalo da colisão, a <strong>quantidade de movimento total do sistema se conserva</strong>.</p>

      <div class="collision-before-after">
        <div class="collision-panel"><span>Antes</span><div class="cart-token blue">A →</div><div class="cart-token purple">B</div><strong>p<sub>total, antes</sub></strong></div>
        <div class="collision-arrow">→</div>
        <div class="collision-panel"><span>Depois</span><div class="cart-token blue">A</div><div class="cart-token purple">B →</div><strong>p<sub>total, depois</sub></strong></div>
      </div>

      <div class="formula-box"><span class="formula-name">Sistema isolado durante a colisão</span><div class="big-formula">Σp<sub>antes</sub> = Σp<sub>depois</sub></div><p>Em uma dimensão: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.</p></div>

      <div class="example-box"><strong class="card-title">Colisão perfeitamente inelástica</strong><p>Um carrinho de 2 kg a 4 m/s encontra outro de 2 kg parado e eles ficam unidos.</p><ol class="reason-steps"><li>Antes: p = 2·4 + 2·0 = 8 kg·m/s.</li><li>Depois: a massa total é 4 kg.</li><li>4·v = 8 → <strong>v = 2 m/s</strong>.</li></ol></div>
    </section>

    <section>
      <h3>6. Colisão elástica e inelástica não significam a mesma coisa</h3>
      <p>Em qualquer colisão de um sistema adequadamente isolado, a quantidade de movimento total se conserva. O que muda entre os tipos de choque é o comportamento da <strong>energia cinética</strong>.</p>

      <div class="collision-types">
        <article><strong>Elástica</strong><p>A quantidade de movimento total se conserva e a energia cinética total também.</p><span>Exemplo ideal: esferas rígidas em modelos de laboratório.</span></article>
        <article><strong>Inelástica</strong><p>A quantidade de movimento total se conserva, mas parte da energia cinética se transforma em outras formas.</p><span>Som, deformação, aquecimento...</span></article>
        <article><strong>Perfeitamente inelástica</strong><p>Os corpos seguem juntos depois da colisão. É o caso extremo de inelasticidade.</p><span>v₁ = v₂ depois do choque.</span></article>
      </div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Uma confusão comum</strong>
        <p>Em um choque inelástico de um sistema isolado, o que continua conservado?</p>
        <div class="choice-row"><button type="button" data-choice="a">A quantidade de movimento total</button><button type="button" data-choice="b">Obrigatoriamente a energia cinética total</button><button type="button" data-choice="c">A velocidade de cada corpo</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="A quantidade de movimento total do sistema se conserva; a energia cinética total pode diminuir." data-wrong-text="Separe conservação de momento da conservação de energia cinética."></div>
      </div>
    </section>

    <section>
      <h3>7. Coeficiente de restituição: quanto os corpos se separam depois da batida?</h3>
      <p>O <strong>coeficiente de restituição</strong> compara a velocidade relativa de afastamento depois da colisão com a velocidade relativa de aproximação antes dela.</p>

      <div class="formula-box"><span class="formula-name">Choques frontais em uma dimensão</span><div class="big-formula">e = velocidade relativa de afastamento / velocidade relativa de aproximação</div><p>Em situações usuais de colisão passiva, 0 ≤ e ≤ 1.</p></div>

      <div class="restitution-scale">
        <div><strong>e = 0</strong><span>perfeitamente inelástica</span></div>
        <div><strong>0 &lt; e &lt; 1</strong><span>inelástica</span></div>
        <div><strong>e = 1</strong><span>elástica ideal</span></div>
      </div>

      <div class="note-box"><strong>Não é uma porcentagem de energia</strong><p>O coeficiente de restituição é definido a partir de <strong>velocidades relativas</strong>. Não devemos interpretá-lo diretamente como “porcentagem de energia que sobrou”.</p></div>
    </section>

    <section>
      <h3>8. Laboratório interativo: varie massas, velocidades e restituição</h3>
      <div class="interactive-lab" id="collisionLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Colisão em linha reta</h4></div>
        <p>Considere a direita como sentido positivo. O modelo usa conservação da quantidade de movimento e o coeficiente de restituição para calcular as velocidades depois do choque.</p>
        <div class="collision-lab-controls">
          <label>Massa A <strong><span id="m1Value">2</span> kg</strong><input id="m1Range" type="range" min="1" max="5" step="1" value="2"></label>
          <label>Velocidade A antes <strong><span id="u1Value">4</span> m/s</strong><input id="u1Range" type="range" min="-6" max="6" step="1" value="4"></label>
          <label>Massa B <strong><span id="m2Value">1</span> kg</strong><input id="m2Range" type="range" min="1" max="5" step="1" value="1"></label>
          <label>Velocidade B antes <strong><span id="u2Value">0</span> m/s</strong><input id="u2Range" type="range" min="-6" max="6" step="1" value="0"></label>
          <label>Restituição <strong>e = <span id="eValue">1,0</span></strong><input id="eRange" type="range" min="0" max="1" step="0.1" value="1"></label>
        </div>

        <div class="collision-lab-scene">
          <div class="collision-lane before"><span>ANTES</span><div class="lab-collision-cart a" id="cartABefore">A</div><div class="lab-collision-cart b" id="cartBBefore">B</div></div>
          <div class="collision-lane after"><span>DEPOIS</span><div class="lab-collision-cart a" id="cartAAfter">A</div><div class="lab-collision-cart b" id="cartBAfter">B</div></div>
        </div>

        <div class="collision-results">
          <div><span>vA depois</span><strong id="v1Result">0,0 m/s</strong></div>
          <div><span>vB depois</span><strong id="v2Result">0,0 m/s</strong></div>
          <div><span>p total antes</span><strong id="pBeforeResult">0,0 kg·m/s</strong></div>
          <div><span>p total depois</span><strong id="pAfterResult">0,0 kg·m/s</strong></div>
          <div><span>Ec antes</span><strong id="kBeforeResult">0,0 J</strong></div>
          <div><span>Ec depois</span><strong id="kAfterResult">0,0 J</strong></div>
        </div>
        <p id="collisionConclusion" class="collision-conclusion"></p>
      </div>
    </section>

    <section>
      <h3>9. Experimento MbB: carrinhos ou moedas</h3>
      <div class="experiment-box">
        <strong class="card-title">Observe o que muda antes e depois</strong>
        <ol class="reason-steps">
          <li>Use dois carrinhos de brinquedo ou duas moedas sobre uma superfície lisa.</li>
          <li>Faça uma colisão frontal suave e observe os sentidos antes e depois.</li>
          <li>Repita alterando apenas uma condição: massa, velocidade inicial ou material de contato.</li>
          <li>Registre o que parece permanecer e o que claramente muda.</li>
          <li>Se puder gravar em câmera lenta, compare os movimentos quadro a quadro.</li>
        </ol>
        <p class="safety-note"><strong>Segurança:</strong> use objetos leves, velocidades baixas e uma área livre. Não lance objetos em direção a pessoas, animais ou superfícies frágeis.</p>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>10. Agora conecte as ideias</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Momento</strong><p>Dois objetos têm a mesma velocidade. Qual tem maior quantidade de movimento?</p><div class="choice-row"><button type="button" data-choice="a">Sempre o mais leve</button><button type="button" data-choice="b">O de maior massa</button><button type="button" data-choice="c">Os dois necessariamente têm o mesmo momento</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Com a mesma velocidade, p = m·v cresce com a massa." data-wrong-text="Compare as massas na expressão p = m·v."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Impulso</strong><p>Uma força média de 100 N atua por 0,2 s. Qual é o impulso?</p><div class="choice-row"><button type="button" data-choice="a">500 N·s</button><button type="button" data-choice="b">100,2 N·s</button><button type="button" data-choice="c">20 N·s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="I = F·Δt = 100·0,2 = 20 N·s." data-wrong-text="Multiplique força pelo intervalo de tempo."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Airbag</strong><p>Para uma mesma variação de quantidade de movimento, aumentar o tempo da colisão tende a:</p><div class="choice-row"><button type="button" data-choice="a">diminuir a força média</button><button type="button" data-choice="b">aumentar obrigatoriamente a força média</button><button type="button" data-choice="c">zerar o impulso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como I = Fmédia·Δt, distribuir a mesma variação em mais tempo reduz a força média." data-wrong-text="O impulso precisa continuar compatível com a mesma Δp."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Sistema isolado</strong><p>Em uma colisão de dois carrinhos com impulso externo desprezível, o que é igual antes e depois?</p><div class="choice-row"><button type="button" data-choice="a">A velocidade de cada carrinho</button><button type="button" data-choice="b">A quantidade de movimento total</button><button type="button" data-choice="c">A energia cinética de cada carrinho</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A soma vetorial das quantidades de movimento é conservada." data-wrong-text="A conservação vale para a quantidade de movimento total do sistema."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Choque elástico</strong><p>Além do momento total, qual grandeza também se conserva em uma colisão elástica ideal?</p><div class="choice-row"><button type="button" data-choice="a">A aceleração</button><button type="button" data-choice="b">A força instantânea</button><button type="button" data-choice="c">A energia cinética total</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o traço que distingue a colisão elástica ideal." data-wrong-text="Em choques elásticos ideais, momento total e energia cinética total se conservam."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Perfeitamente inelástico</strong><p>Depois da colisão, os corpos:</p><div class="choice-row"><button type="button" data-choice="a">seguem juntos</button><button type="button" data-choice="b">sempre voltam com velocidades iguais e opostas</button><button type="button" data-choice="c">ficam necessariamente parados</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Seguir juntos é a característica do caso perfeitamente inelástico." data-wrong-text="Eles compartilham a mesma velocidade final, que não precisa ser zero."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Restituição</strong><p>Um choque idealmente elástico tem coeficiente de restituição:</p><div class="choice-row"><button type="button" data-choice="a">0</button><button type="button" data-choice="b">1</button><button type="button" data-choice="c">10</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Para e = 1, a velocidade relativa de afastamento iguala a de aproximação." data-wrong-text="Na escala introdutória, e = 1 representa o choque elástico ideal."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Direção</strong><p>Se adotamos direita como positiva, um corpo de 2 kg a 3 m/s para a esquerda tem quantidade de movimento:</p><div class="choice-row"><button type="button" data-choice="a">+6 kg·m/s</button><button type="button" data-choice="b">0</button><button type="button" data-choice="c">−6 kg·m/s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="v = −3 m/s, então p = 2·(−3) = −6 kg·m/s." data-wrong-text="O sinal acompanha o sentido escolhido para a velocidade."></div></div>

      <div class="challenge-box">
        <strong>Desafio MbB — carrinhos que grudam</strong>
        <p>Um carrinho A de 3 kg move-se a +4 m/s. Um carrinho B de 1 kg move-se a −2 m/s. Eles colidem e ficam unidos. Qual é a velocidade do conjunto imediatamente depois?</p>
        <details><summary>Ver resolução depois de tentar</summary><ol class="reason-steps"><li>p antes = 3·4 + 1·(−2) = 12 − 2 = 10 kg·m/s.</li><li>Massa total depois = 3 + 1 = 4 kg.</li><li>4·v = 10.</li><li><strong>v = +2,5 m/s</strong>, portanto o conjunto segue para a direita.</li></ol></details>
      </div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo desenvolve os objetos de conhecimento previstos para conservação da quantidade de movimento: <strong>impulso, quantidade de movimento, conservação, choques mecânicos, coeficiente de restituição e colisões elásticas e inelásticas</strong>.</p>
    </details>`;

  function initCollisionLab(root) {
    const m1 = $('#m1Range', root), u1 = $('#u1Range', root), m2 = $('#m2Range', root), u2 = $('#u2Range', root), e = $('#eRange', root);
    if (!m1 || !u1 || !m2 || !u2 || !e) return;

    const format = (value, digits = 1) => Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
    const directionText = (value) => value > 0 ? '→' : value < 0 ? '←' : '•';

    const draw = () => {
      const M1 = Number(m1.value), U1 = Number(u1.value), M2 = Number(m2.value), U2 = Number(u2.value), E = Number(e.value);
      const denominator = M1 + M2;
      const V1 = (M1 * U1 + M2 * U2 - M2 * E * (U1 - U2)) / denominator;
      const V2 = (M1 * U1 + M2 * U2 + M1 * E * (U1 - U2)) / denominator;
      const pBefore = M1 * U1 + M2 * U2;
      const pAfter = M1 * V1 + M2 * V2;
      const kBefore = 0.5 * M1 * U1 * U1 + 0.5 * M2 * U2 * U2;
      const kAfter = 0.5 * M1 * V1 * V1 + 0.5 * M2 * V2 * V2;

      $('#m1Value', root).textContent = M1;
      $('#u1Value', root).textContent = U1;
      $('#m2Value', root).textContent = M2;
      $('#u2Value', root).textContent = U2;
      $('#eValue', root).textContent = format(E, 1);
      $('#v1Result', root).textContent = `${format(V1)} m/s ${directionText(V1)}`;
      $('#v2Result', root).textContent = `${format(V2)} m/s ${directionText(V2)}`;
      $('#pBeforeResult', root).textContent = `${format(pBefore)} kg·m/s`;
      $('#pAfterResult', root).textContent = `${format(pAfter)} kg·m/s`;
      $('#kBeforeResult', root).textContent = `${format(kBefore)} J`;
      $('#kAfterResult', root).textContent = `${format(kAfter)} J`;

      const afterLoss = kBefore > 0 ? Math.max(0, (1 - kAfter / kBefore) * 100) : 0;
      const conclusion = $('#collisionConclusion', root);
      if (conclusion) {
        conclusion.innerHTML = E === 1
          ? '<strong>Choque elástico ideal:</strong> neste modelo, a quantidade de movimento e a energia cinética total permanecem iguais antes e depois.'
          : E === 0
            ? `<strong>Choque perfeitamente inelástico:</strong> os carrinhos saem com a mesma velocidade. A energia cinética diminui cerca de ${format(afterLoss, 0)}% neste exemplo.`
            : `<strong>Choque inelástico:</strong> a quantidade de movimento total permanece, mas a energia cinética diminui cerca de ${format(afterLoss, 0)}% neste exemplo.`;
      }

      const aBefore = $('#cartABefore', root), bBefore = $('#cartBBefore', root), aAfter = $('#cartAAfter', root), bAfter = $('#cartBAfter', root);
      if (aBefore) aBefore.textContent = `A ${directionText(U1)}`;
      if (bBefore) bBefore.textContent = `B ${directionText(U2)}`;
      if (aAfter) aAfter.textContent = `A ${directionText(V1)}`;
      if (bAfter) bAfter.textContent = `B ${directionText(V2)}`;
    };

    [m1, u1, m2, u2, e].forEach((input) => input.addEventListener('input', draw));
    draw();
  }

  MBB.enableChapter?.('04 Batidas, impulsos e colisões', () => {
    MBB.showLesson({
      unit: 'Energia e matéria',
      technical: 'Quantidade de movimento • impulso • conservação • colisões',
      title: 'Batidas, impulsos e colisões',
      objective: '<strong>Propósito:</strong> compreender como a quantidade de movimento muda, por que o tempo de colisão importa e como prever o resultado de choques usando conservação e coeficiente de restituição.',
      html: lessonHtml,
      init: initCollisionLab
    });
  });
})();
