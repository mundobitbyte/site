(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você está pesquisando a segurança de um carro e abre um vídeo de crash test. Em poucos décimos de segundo, o veículo vai de uma velocidade alta praticamente ao repouso.</strong>
        <p>A primeira reação é pensar apenas na “força da batida”. Mas o vídeo mostra mais: o carro deforma, o cinto segura o ocupante e o airbag aumenta o tempo de contato. Para entender por que isso importa, precisamos acompanhar <strong>quanto movimento existia antes, quanto ele mudou e em quanto tempo a mudança aconteceu</strong>.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Se duas pessoas têm a mesma mudança de movimento, mas uma para em 0,05 s e outra em 0,50 s, em qual caso a força média tende a ser menor?</p><div class="choice-row"><button type="button" data-choice="a">Na parada de 0,05 s</button><button type="button" data-choice="b">Na parada de 0,50 s</button><button type="button" data-choice="c">O tempo não interfere</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa é a pista: distribuir a mudança por mais tempo pode reduzir a força média." data-wrong-text="Imagine fazer a mesma mudança de movimento de modo quase instantâneo ou mais gradual."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> reconstruir o crash test e descobrir por que massa, velocidade, tempo de contato e tipo de colisão mudam o resultado.</p>
      </div>
    </section>

    <section>
      <h3>1. Antes da batida, o carro já carrega uma “quantidade de movimento”</h3>
      <p>Compare um carrinho de supermercado e um automóvel movendo-se com a mesma velocidade. Parar o automóvel exige uma mudança muito maior. A massa importa. Agora compare o mesmo automóvel a 20 km/h e a 80 km/h: a velocidade também importa.</p>
      <p>Precisamos de uma grandeza que reúna essas duas informações. Ela é a <strong>quantidade de movimento</strong>, ou momento linear.</p>
      <div class="formula-box"><span class="formula-name">A fórmula aparece porque massa e velocidade precisam entrar juntas</span><div class="big-formula">p = m · v</div><p>Em uma linha reta, podemos escolher a direita como sentido positivo. Assim o sinal da velocidade também registra o sentido da quantidade de movimento.</p></div>
      <div class="example-box"><strong class="card-title">Exemplo construído</strong><p>Um carrinho de teste de 800 kg desloca-se a 10 m/s para a direita.</p><ol class="reason-steps"><li>m = 800 kg.</li><li>v = +10 m/s.</li><li>p = 800·10 = <strong>8.000 kg·m/s para a direita</strong>.</li></ol></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Faça a previsão</strong><p>Se a massa dobrar e a velocidade permanecer igual, a quantidade de movimento:</p><div class="choice-row"><button type="button" data-choice="a">cai pela metade</button><button type="button" data-choice="b">não muda</button><button type="button" data-choice="c">dobra</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="p é diretamente proporcional à massa." data-wrong-text="Mantenha v e observe p = m·v."></div></div>
    </section>

    <section>
      <h3>2. No impacto, o que importa não é só a força: importa por quanto tempo ela atua</h3>
      <p>Durante a colisão, as forças atuam por um intervalo curto. Para representar o efeito acumulado de uma força ao longo desse tempo, usamos o <strong>impulso</strong>.</p>
      <div class="equation-walk"><div><span>1</span><p>Uma força média atua durante um intervalo Δt.</p></div><div><span>2</span><p>Se ela agir por mais tempo, seu efeito acumulado pode aumentar.</p></div><div><span>3</span><p>Precisamos juntar força e tempo na mesma grandeza.</p></div></div>
      <div class="formula-box"><span class="formula-name">Impulso para uma força média constante</span><div class="big-formula">I = F · Δt</div><p>A unidade é N·s. Um impulso de 60 N·s pode resultar, por exemplo, de 200 N por 0,30 s.</p></div>
      <div class="note-box"><strong>Não decore sem ligar ao fenômeno</strong><p>Impulso não é “força maior”. É o efeito da força <strong>ao longo do tempo</strong>.</p></div>
    </section>

    <section>
      <h3>3. Agora conectamos as duas partes: o impulso é a mudança da quantidade de movimento</h3>
      <p>No crash test, o veículo tinha uma quantidade de movimento antes e quase nenhuma depois. A colisão produziu uma grande mudança. O elo entre a ação das forças durante o impacto e essa mudança é o <strong>teorema do impulso</strong>.</p>
      <div class="formula-box"><span class="formula-name">O que a colisão realmente precisa produzir</span><div class="big-formula">I = Δp = p<sub>f</sub> − p<sub>i</sub></div><p>Se a massa permanece aproximadamente constante, mudar a velocidade significa mudar a quantidade de movimento.</p></div>
      <div class="example-box"><strong class="card-title">Do movimento ao impulso</strong><p>Um corpo de 70 kg passa de 10 m/s para 0.</p><ol class="reason-steps"><li>p<sub>i</sub> = 70·10 = 700 kg·m/s.</li><li>p<sub>f</sub> = 0.</li><li>Δp = −700 kg·m/s. O sinal indica sentido oposto ao movimento inicial; o módulo da mudança é <strong>700 kg·m/s</strong>.</li></ol></div>
    </section>

    <section>
      <h3>4. É aqui que cinto, airbag e deformação deixam de parecer “acessórios”</h3>
      <p>Para levar a pessoa de uma velocidade inicial até o repouso, a mudança de quantidade de movimento é determinada pela massa e pela mudança de velocidade. Dispositivos de segurança não fazem essa mudança desaparecer. Eles ajudam a <strong>aumentar o tempo em que ela ocorre</strong> e a distribuir melhor as forças pelo corpo.</p>
      <div class="example-box"><strong class="card-title">Mesma mudança, tempos diferentes</strong><p>Para |Δp| = 700 kg·m/s:</p><ol class="reason-steps"><li>Em 0,05 s: F<sub>média</sub> ≈ 700/0,05 = <strong>14.000 N</strong>.</li><li>Em 0,50 s: F<sub>média</sub> ≈ 700/0,50 = <strong>1.400 N</strong>.</li><li>O tempo ficou 10 vezes maior e a força média caiu por um fator 10 neste modelo simplificado.</li></ol></div>
      <div class="note-box"><strong>Modelo não é acidente real</strong><p>Uma colisão real envolve deformações, diferentes regiões do corpo, orientação, materiais e muitos outros fatores. Aqui isolamos uma relação física para compreender por que aumentar o tempo de desaceleração pode ser importante.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Pare e explique</strong><p>Por que dizer “o airbag diminui a velocidade” é uma explicação incompleta?</p><div class="choice-row"><button type="button" data-choice="a">Porque o ponto central é como a mudança de movimento acontece ao longo do tempo e como as forças são distribuídas</button><button type="button" data-choice="b">Porque o airbag aumenta a massa da pessoa</button><button type="button" data-choice="c">Porque velocidade não existe em colisões</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. A pessoa precisa reduzir a velocidade de qualquer forma; o modo e o tempo dessa mudança são decisivos." data-wrong-text="A pergunta é como ocorre a desaceleração, não apenas se ela ocorre."></div></div>
    </section>

    <section>
      <h3>5. O engenheiro agora troca o carro real por dois carrinhos de laboratório</h3>
      <p>Para estudar colisões sem todas as complicações de um automóvel, podemos usar dois carrinhos sobre uma pista. Durante o curto intervalo do choque, eles exercem forças um sobre o outro. Se o impulso externo for desprezível, a <strong>quantidade de movimento total do sistema</strong> permanece a mesma antes e depois.</p>
      <div class="formula-box"><span class="formula-name">Conservação da quantidade de movimento</span><div class="big-formula">Σp<sub>antes</sub> = Σp<sub>depois</sub></div><p>Em uma dimensão: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.</p></div>
      <div class="example-box"><strong class="card-title">Quando os carrinhos grudam</strong><p>Um carrinho de 2 kg a 4 m/s encontra outro de 2 kg parado e os dois seguem unidos.</p><ol class="reason-steps"><li>Antes: p = 2·4 + 2·0 = 8 kg·m/s.</li><li>Depois: massa total = 4 kg.</li><li>4·v = 8 → <strong>v = 2 m/s</strong>.</li></ol></div>
      <div class="note-box"><strong>O que foi conservado?</strong><p>A quantidade de movimento total. Isso não significa que a energia cinética total tenha permanecido igual.</p></div>
    </section>

    <section>
      <h3>6. Nem toda batida “quica” do mesmo jeito</h3>
      <p>No laboratório, algumas colisões fazem os carrinhos se separar quase sem perda de energia cinética; outras produzem deformação, som e aquecimento; em um caso extremo, os corpos ficam unidos.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Choque elástico ideal</strong><p>Conservam-se a quantidade de movimento total e a energia cinética total.</p></div><div class="example-box"><strong class="card-title">Choque inelástico</strong><p>A quantidade de movimento total do sistema isolado se conserva, mas parte da energia cinética se transforma em outras formas.</p></div></div>
      <p>Quando os corpos seguem juntos depois, temos um choque <strong>perfeitamente inelástico</strong>.</p>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Separe as duas conservações</strong><p>Em uma colisão inelástica de um sistema isolado, qual afirmação é correta?</p><div class="choice-row"><button type="button" data-choice="a">A energia cinética total sempre se conserva</button><button type="button" data-choice="b">A quantidade de movimento total se conserva, mas a energia cinética total pode diminuir</button><button type="button" data-choice="c">Nenhuma grandeza pode ser analisada</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa distinção é essencial." data-wrong-text="Não trate conservação de momento e de energia cinética como a mesma coisa."></div></div>
    </section>

    <section>
      <h3>7. Precisamos de uma medida para dizer “quanto a colisão rebate”</h3>
      <p>O <strong>coeficiente de restituição</strong> compara a velocidade relativa com que os corpos se afastam depois do choque com a velocidade relativa de aproximação antes dele.</p>
      <div class="formula-box"><span class="formula-name">Em uma colisão frontal</span><div class="big-formula">e = velocidade relativa de afastamento / velocidade relativa de aproximação</div><p>Em modelos usuais de colisão passiva, 0 ≤ e ≤ 1: e = 1 corresponde ao choque elástico ideal; e = 0 ao perfeitamente inelástico.</p></div>
      <div class="note-box"><strong>Não transforme e em “porcentagem de energia”</strong><p>O coeficiente de restituição é definido a partir de <strong>velocidades relativas</strong>, não diretamente da porcentagem de energia cinética restante.</p></div>
    </section>

    <section>
      <h3>8. Laboratório: faça dois carrinhos realmente se aproximarem antes de calcular o “depois”</h3>
      <div class="interactive-lab" id="collisionLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Colisão em linha reta</h4></div>
        <p>Adotamos a direita como sentido positivo. Para garantir que exista colisão no modelo, o carrinho A começa à esquerda e sua velocidade inicial é sempre maior que a de B.</p>
        <div class="collision-lab-controls">
          <label>Massa A <strong><span id="m1Value">2</span> kg</strong><input id="m1Range" type="range" min="1" max="5" step="1" value="2"></label>
          <label>Velocidade A antes <strong><span id="u1Value">4</span> m/s</strong><input id="u1Range" type="range" min="2" max="8" step="1" value="4"></label>
          <label>Massa B <strong><span id="m2Value">1</span> kg</strong><input id="m2Range" type="range" min="1" max="5" step="1" value="1"></label>
          <label>Velocidade B antes <strong><span id="u2Value">0</span> m/s</strong><input id="u2Range" type="range" min="-4" max="1" step="1" value="0"></label>
          <label>Restituição <strong>e = <span id="eValue">1,0</span></strong><input id="eRange" type="range" min="0" max="1" step="0.1" value="1"></label>
        </div>
        <div class="collision-lab-scene"><div class="collision-lane before"><span>ANTES</span><div class="lab-collision-cart a" id="cartABefore">A →</div><div class="lab-collision-cart b" id="cartBBefore">B •</div></div><div class="collision-lane after"><span>DEPOIS</span><div class="lab-collision-cart a" id="cartAAfter">A</div><div class="lab-collision-cart b" id="cartBAfter">B</div></div></div>
        <div class="collision-results"><div><span>vA depois</span><strong id="v1Result">—</strong></div><div><span>vB depois</span><strong id="v2Result">—</strong></div><div><span>p total antes</span><strong id="pBeforeResult">—</strong></div><div><span>p total depois</span><strong id="pAfterResult">—</strong></div><div><span>Ec antes</span><strong id="kBeforeResult">—</strong></div><div><span>Ec depois</span><strong id="kAfterResult">—</strong></div></div>
        <div class="note-box" id="collisionConclusion"></div>
        <p>Primeiro mude apenas e. Depois altere uma massa ou velocidade. Tente prever qual resultado será mais sensível antes de mover o controle.</p>
      </div>
    </section>

    <section>
      <h3>9. Experimento simples: bola e superfícies diferentes</h3>
      <div class="experiment-box"><strong class="card-title">Observe o quanto a bola retorna</strong><p>Deixe a mesma bola cair da mesma altura sobre superfícies diferentes e compare a altura aproximada do primeiro retorno. Não é uma medição completa de e, mas ajuda a perceber que materiais e deformações mudam o comportamento do choque.</p><p class="safety-note"><strong>Segurança:</strong> use bola leve, altura pequena e área livre de objetos frágeis.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Depois do crash test</span>
      <h3>10. Você consegue explicar a colisão antes de escolher uma fórmula?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Momento</strong><p>Um corpo de 2 kg move-se a 3 m/s. Qual o módulo de p?</p><div class="choice-row"><button type="button" data-choice="a">1,5</button><button type="button" data-choice="b">6 kg·m/s</button><button type="button" data-choice="c">9</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="p = 2·3 = 6 kg·m/s." data-wrong-text="Multiplique massa por velocidade."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Impulso</strong><p>200 N atuam por 0,30 s. Qual o impulso?</p><div class="choice-row"><button type="button" data-choice="a">0,0015 N·s</button><button type="button" data-choice="b">200,3 N·s</button><button type="button" data-choice="c">60 N·s</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="I = F·Δt = 60 N·s." data-wrong-text="Multiplique força pelo intervalo."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Segurança</strong><p>Para a mesma |Δp|, aumentar o tempo de parada tende a:</p><div class="choice-row"><button type="button" data-choice="a">reduzir a força média</button><button type="button" data-choice="b">aumentar a massa</button><button type="button" data-choice="c">eliminar a gravidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="F média ≈ Δp/Δt." data-wrong-text="Mantenha a mudança e aumente o tempo."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Sistema</strong><p>Quando o impulso externo é desprezível durante a colisão:</p><div class="choice-row"><button type="button" data-choice="a">cada velocidade se conserva</button><button type="button" data-choice="b">a quantidade de movimento total se conserva</button><button type="button" data-choice="c">os corpos precisam grudar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A conservação vale para o total do sistema." data-wrong-text="Não confunda grandeza total com velocidade individual."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Inelástico</strong><p>Num choque inelástico isolado:</p><div class="choice-row"><button type="button" data-choice="a">p total desaparece</button><button type="button" data-choice="b">Ec total sempre aumenta</button><button type="button" data-choice="c">p total se conserva, mas Ec total pode diminuir</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Correto." data-wrong-text="Separe as duas conservações."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. e = 1</strong><p>O que representa e = 1 no modelo ideal?</p><div class="choice-row"><button type="button" data-choice="a">choque elástico</button><button type="button" data-choice="b">corpos grudados</button><button type="button" data-choice="c">sem movimento antes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="e = 1 corresponde ao choque elástico ideal." data-wrong-text="Veja a escala de restituição."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. e = 0</strong><p>Em um choque perfeitamente inelástico:</p><div class="choice-row"><button type="button" data-choice="a">os corpos se afastam com máxima velocidade relativa</button><button type="button" data-choice="b">os corpos seguem juntos depois</button><button type="button" data-choice="c">a quantidade de movimento total vira zero sempre</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="É o caso extremo de inelasticidade." data-wrong-text="Pense na velocidade relativa de afastamento nula."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Antes da conta</strong><p>Qual pergunta deve vir antes de usar conservação de momento?</p><div class="choice-row"><button type="button" data-choice="a">Qual fórmula parece mais bonita?</button><button type="button" data-choice="b">Qual carro é mais novo?</button><button type="button" data-choice="c">Qual sistema estou analisando e o impulso externo é desprezível no intervalo?</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A escolha do sistema vem antes da equação." data-wrong-text="Conservação depende das condições do sistema."></div></div>
      <div class="challenge-box"><strong>Desafio MbB</strong><p>Explique para alguém, sem começar por fórmulas, por que cinto, airbag e zonas de deformação podem reduzir danos. Depois use as ideias de Δp, impulso e tempo para sustentar sua explicação.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo desenvolve os objetos previstos para <strong>conservação da quantidade de movimento — impulso e choques mecânicos, incluindo coeficiente de restituição e colisões elásticas e inelásticas</strong>. A quantidade de movimento é introduzida como conceito necessário para compreender esses objetos.</p></details>
  `;

  function initCollisionLab(root) {
    const m1 = $('#m1Range', root), u1 = $('#u1Range', root), m2 = $('#m2Range', root), u2 = $('#u2Range', root), e = $('#eRange', root);
    if (!m1 || !u1 || !m2 || !u2 || !e) return;
    const format = (value, digits = 1) => Number(value).toLocaleString('pt-BR',{minimumFractionDigits:digits,maximumFractionDigits:digits});
    const arrow = (value) => value > 0 ? '→' : value < 0 ? '←' : '•';
    const draw = () => {
      const M1=Number(m1.value), U1=Number(u1.value), M2=Number(m2.value), U2=Number(u2.value), E=Number(e.value);
      const den=M1+M2;
      const V1=(M1*U1+M2*U2-M2*E*(U1-U2))/den;
      const V2=(M1*U1+M2*U2+M1*E*(U1-U2))/den;
      const p0=M1*U1+M2*U2, p1=M1*V1+M2*V2;
      const k0=.5*M1*U1*U1+.5*M2*U2*U2, k1=.5*M1*V1*V1+.5*M2*V2*V2;
      $('#m1Value',root).textContent=M1; $('#u1Value',root).textContent=U1; $('#m2Value',root).textContent=M2; $('#u2Value',root).textContent=U2; $('#eValue',root).textContent=format(E);
      $('#v1Result',root).textContent=`${format(V1)} m/s ${arrow(V1)}`; $('#v2Result',root).textContent=`${format(V2)} m/s ${arrow(V2)}`;
      $('#pBeforeResult',root).textContent=`${format(p0)} kg·m/s`; $('#pAfterResult',root).textContent=`${format(p1)} kg·m/s`; $('#kBeforeResult',root).textContent=`${format(k0)} J`; $('#kAfterResult',root).textContent=`${format(k1)} J`;
      $('#cartABefore',root).textContent=`A ${arrow(U1)}`; $('#cartBBefore',root).textContent=`B ${arrow(U2)}`; $('#cartAAfter',root).textContent=`A ${arrow(V1)}`; $('#cartBAfter',root).textContent=`B ${arrow(V2)}`;
      const loss=k0>0?Math.max(0,(1-k1/k0)*100):0;
      const box=$('#collisionConclusion',root);
      if(box) box.innerHTML=E===1?'<strong>Choque elástico ideal:</strong> p total e Ec total permanecem no modelo.':E===0?`<strong>Perfeitamente inelástico:</strong> os carrinhos saem com a mesma velocidade; Ec diminui cerca de ${format(loss,0)}%.`:`<strong>Choque inelástico:</strong> p total permanece; Ec diminui cerca de ${format(loss,0)}%.`;
    };
    [m1,u1,m2,u2,e].forEach(input=>input.addEventListener('input',draw)); draw();
  }

  MBB.enableChapter?.('04 Batidas, impulsos e colisões', () => {
    MBB.showLesson({
      unit:'Energia e matéria',
      technical:'Quantidade de movimento • impulso • conservação • colisões',
      title:'Batidas, impulsos e colisões',
      objective:'<strong>Propósito:</strong> investigar um crash test para compreender como quantidade de movimento, impulso, tempo de colisão e conservação explicam choques e dispositivos de segurança.',
      html:lessonHtml,
      init:initCollisionLab
    });
  });
})();