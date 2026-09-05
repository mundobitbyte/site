(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você está em pé num ônibus a caminho da escola. Uma mão segura a barra; a mochila está nas costas. O ônibus arranca.</strong>
        <p>Seu corpo parece ficar para trás. Alguns minutos depois, o motorista freia e você tende a ir para a frente. Na rotatória, seu corpo parece escapar para o lado. Nada disso acontece porque o ônibus “tem vontade” de empurrar você: existe uma relação entre <strong>interações, forças e mudanças do movimento</strong>.</p>
        <div class="quick-question" data-choice-question data-correct="b">
          <strong>Antes de continuar, faça uma aposta</strong>
          <p>Se o ônibus já estiver andando em linha reta e mantiver exatamente a mesma velocidade, ele precisa de uma força resultante para a frente só para continuar andando?</p>
          <div class="choice-row"><button type="button" data-choice="a">Sim, senão o movimento desaparece</button><button type="button" data-choice="b">Não necessariamente; força resultante está ligada à mudança da velocidade</button><button type="button" data-choice="c">Só se houver passageiros</button></div>
          <div class="choice-feedback" data-choice-feedback data-correct-text="Essa é a ideia que vamos construir: movimento e força resultante não são a mesma coisa." data-wrong-text="Lembre do capítulo anterior: aceleração aparece quando a velocidade muda em valor ou direção."></div>
        </div>
        <p class="central-question"><strong>Nossa missão:</strong> acompanhar essa viagem e descobrir por que você se desequilibra, como o ônibus acelera e freia, o que o mantém numa curva e por que massa, atrito e inclinação mudam o resultado.</p>
      </div>
      <div id="diagnosticRecall" class="diagnostic-recall" aria-live="polite"></div>
    </section>

    <section>
      <h3>1. O ônibus arranca, mas seu corpo tenta manter o que já estava fazendo</h3>
      <p>Antes da partida, você e o ônibus estavam parados em relação à rua. Quando o ônibus começa a acelerar para a frente, seus pés acompanham o piso porque há contato e atrito. O restante do corpo, porém, tende a manter o estado que possuía por um instante. Por isso você sente como se fosse “jogado para trás”.</p>
      <p>Na freada acontece o inverso: o ônibus reduz sua velocidade, mas seu corpo tende a continuar avançando. Essa tendência de resistir a mudanças no estado de movimento recebe o nome de <strong>inércia</strong>.</p>

      <div class="note-box">
        <strong>Pare e explique antes de ver o nome da lei</strong>
        <p>Se o ônibus freia e você tende a seguir para a frente, existe realmente uma nova força misteriosa empurrando seu corpo para a frente?</p>
        <details><summary>Compare sua explicação</summary><p>Não. Seu corpo já estava em movimento e tende a manter esse estado enquanto o ônibus reduz sua velocidade. A mudança exige uma força resultante. Essa é a ideia central da <strong>Primeira Lei de Newton</strong>.</p></details>
      </div>

      <div class="formula-box">
        <span class="formula-name">Primeira Lei de Newton, em linguagem de movimento</span>
        <div class="big-formula">ΣF = 0 → a = 0</div>
        <p>Se a força resultante é zero, não há aceleração: o corpo permanece em repouso ou continua em movimento retilíneo com velocidade constante.</p>
      </div>

      <div id="diagnosticCompare" class="ok-box diagnostic-compare"></div>

      <div class="experiment-box">
        <strong class="card-title">Experimente sem ônibus: moeda, cartão e copo</strong>
        <p>Coloque um cartão rígido sobre um copo plástico e uma moeda sobre o cartão. Dê um toque rápido e horizontal no cartão. O cartão sai; a moeda tende a manter seu estado e cai quase verticalmente no copo.</p>
        <p class="safety-note"><strong>Segurança:</strong> use copo plástico, superfície estável e faça o movimento longe da borda da mesa.</p>
      </div>
    </section>

    <section>
      <h3>2. Então o que faz o ônibus realmente acelerar?</h3>
      <p>Agora imagine o ônibus parado no ponto. O motor faz as rodas interagirem com o chão e a pista exerce forças sobre os pneus. Se, considerando todas as forças horizontais, sobra uma resultante para a frente, a velocidade do ônibus muda: ele acelera.</p>
      <p>Isso nos obriga a separar duas ideias: <strong>força</strong> é uma interação; <strong>força resultante</strong> é o efeito combinado das forças que atuam no corpo escolhido.</p>

      <div class="visual-box">
        <strong class="card-title">Uma seta não conta a história inteira</strong>
        <svg class="lesson-visual" viewBox="0 0 760 250" role="img" aria-label="Ônibus com forças horizontais em sentidos opostos e uma resultante para a direita.">
          <defs><marker id="c2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <rect x="235" y="95" width="290" height="85" rx="22" class="c2-bus"/><circle cx="295" cy="190" r="24" class="c2-wheel"/><circle cx="470" cy="190" r="24" class="c2-wheel"/>
          <line x1="530" y1="130" x2="680" y2="130" class="c2-force-arrow" marker-end="url(#c2a)"/><text x="555" y="110" class="c2-caption">forças para a frente</text>
          <line x1="230" y1="150" x2="125" y2="150" class="c2-force-arrow muted" marker-end="url(#c2a)"/><text x="82" y="178" class="c2-caption">resistências</text>
          <text x="285" y="55" class="c2-visual-title">se a soma não zera, aparece aceleração</text>
        </svg>
        <p class="visual-caption">Escolha sempre o corpo analisado e só depois some as forças que atuam nele.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Leia antes da fórmula</strong>
        <p>O ônibus recebe 8.000 N efetivos para a frente e 8.000 N de forças resistentes para trás. O que esperamos da aceleração horizontal?</p>
        <div class="choice-row"><button type="button" data-choice="a">Acelera para a frente</button><button type="button" data-choice="b">Acelera para trás</button><button type="button" data-choice="c">É zero</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="As forças se equilibram: a resultante horizontal é zero." data-wrong-text="Compare os sentidos e os módulos antes de pensar no movimento."></div>
      </div>
    </section>

    <section>
      <h3>3. O mesmo motorista, dois ônibus diferentes: por que a massa importa?</h3>
      <p>Pense agora em dois ônibus recebendo a mesma força resultante: um praticamente vazio e outro lotado. O lotado tem maior massa. A experiência cotidiana sugere que ele responde mais lentamente: para a mesma resultante, sua aceleração é menor.</p>
      <p>Agora já temos a relação que precisamos: mais força resultante tende a produzir mais aceleração; mais massa, mantendo a força, tende a produzir menos aceleração.</p>

      <div class="equation-walk">
        <div><span>1</span><p>Descubra a <strong>força resultante</strong>.</p></div>
        <div><span>2</span><p>Observe a <strong>massa</strong> do corpo.</p></div>
        <div><span>3</span><p>Relacione isso à <strong>aceleração</strong>.</p></div>
      </div>

      <div class="formula-box">
        <span class="formula-name">A fórmula aparece porque queremos prever a aceleração</span>
        <div class="big-formula">F<sub>R</sub> = m · a</div>
        <p>Essa é a <strong>Segunda Lei de Newton</strong>. Se conhecemos a resultante e a massa, podemos prever: <strong>a = F<sub>R</sub>/m</strong>. A unidade de força é o newton (N).</p>
      </div>

      <div class="example-box">
        <strong class="card-title">Exemplo construído</strong>
        <p>Um carrinho de 5 kg recebe 30 N para a direita e 10 N para a esquerda.</p>
        <ol class="reason-steps"><li>Resultante: 30 − 10 = <strong>20 N para a direita</strong>.</li><li>Massa: <strong>5 kg</strong>.</li><li>Aceleração: a = 20/5 = <strong>4 m/s² para a direita</strong>.</li></ol>
        <p>Perceba a ordem: primeiro entendemos as forças; só depois usamos a fórmula.</p>
      </div>

      <div class="interactive-lab force-lab" id="forceLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Faça a resultante mudar e veja a aceleração nascer</h4></div>
        <div class="force-lab-controls">
          <label>Força aplicada <strong><span id="appliedForceValue">30</span> N</strong><input id="appliedForceRange" type="range" min="20" max="60" step="5" value="30"></label>
          <label>Força resistente <strong><span id="resistForceValue">10</span> N</strong><input id="resistForceRange" type="range" min="0" max="20" step="5" value="10"></label>
          <label>Massa <strong><span id="massValue">5</span> kg</strong><input id="massRange" type="range" min="2" max="20" step="1" value="5"></label>
        </div>
        <div class="force-lab-result"><div><span>Resultante</span><strong id="resultantValue">20 N →</strong></div><div><span>Aceleração</span><strong id="accelerationValue">4,0 m/s²</strong></div><div><span>Leitura</span><strong id="forceInterpretation">acelera para a direita</strong></div></div>
        <p>Faça dois testes: mantenha a massa e aumente a resultante; depois mantenha as forças e aumente a massa. Antes de mover cada controle, tente prever o resultado.</p>
      </div>
    </section>

    <section>
      <h3>4. Você olha para a mochila e percebe que nem toda força aponta para a frente</h3>
      <p>Enquanto o ônibus segue, a Terra puxa sua mochila para baixo: essa força é o <strong>peso</strong>. A alça tensionada puxa a mochila para cima: é uma <strong>tração</strong>. Quando você está em pé, o piso empurra seus pés numa direção perpendicular à superfície: é a <strong>força normal</strong>.</p>
      <p>Esses nomes ficam mais fáceis quando perguntamos <strong>quem está interagindo com quem</strong>: Terra–mochila, alça–mochila, piso–pessoa.</p>

      <div class="formula-box">
        <span class="formula-name">Para prever o peso perto da superfície da Terra</span>
        <div class="big-formula">P = m · g</div>
        <p>Uma mochila de 7 kg, usando g ≈ 10 m/s², tem peso aproximado de <strong>70 N</strong>. Massa continua sendo 7 kg; peso é força e é medido em newtons.</p>
      </div>

      <div class="note-box"><strong>Não transforme normal em regra decorada</strong><p>A normal não é “sempre igual ao peso”. Ela é a força perpendicular exercida pela superfície. Em situações simples de apoio horizontal pode ter o mesmo módulo do peso, mas isso depende do conjunto de forças e do movimento.</p></div>
    </section>

    <section>
      <h3>5. Começa a chover justamente antes da freada</h3>
      <p>O motorista pisa no freio. Para o ônibus reduzir a velocidade sem deslizar, os pneus precisam interagir adequadamente com a pista. Em piso molhado ou contaminado, a aderência disponível pode diminuir.</p>
      <p>O <strong>atrito</strong> não é simplesmente uma força que “sempre atrapalha”. Sem atrito, seria difícil caminhar, arrancar, frear ou fazer uma curva. Ele se opõe à tendência de deslizamento relativo entre superfícies em contato.</p>

      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a previsão</strong><p>Se a aderência pneu–pista diminuir muito, o que pode acontecer numa frenagem?</p><div class="choice-row"><button type="button" data-choice="a">A força horizontal disponível pode ser insuficiente e a distância de frenagem aumentar</button><button type="button" data-choice="b">A massa do ônibus desaparece</button><button type="button" data-choice="c">A gravidade deixa de atuar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. A frenagem depende da interação entre pneus e pista." data-wrong-text="Massa e gravidade continuam existindo; concentre-se no contato pneu–pista."></div></div>
    </section>

    <section>
      <h3>6. O ônibus entra na rotatória: o velocímetro quase não muda, mas o movimento muda</h3>
      <p>No capítulo 1 você viu que velocidade inclui direção. Na rotatória, mesmo que a rapidez fique aproximadamente constante, a direção muda continuamente. Portanto existe aceleração.</p>
      <p>Se há aceleração apontando para o centro da curva, a <strong>resultante das forças horizontais</strong> também precisa apontar para o centro. Chamamos essa resultante radial de <strong>força centrípeta</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Na curva, procure o centro</strong>
        <svg class="lesson-visual" viewBox="0 0 700 310" role="img" aria-label="Veículo em trajetória circular com velocidade tangente e resultante centrípeta apontando para o centro.">
          <defs><marker id="c2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <circle cx="330" cy="165" r="115" class="c2-orbit"/><circle cx="330" cy="165" r="9" class="c2-center"/>
          <rect x="435" y="150" width="58" height="30" rx="8" class="c2-car"/>
          <line x1="435" y1="165" x2="350" y2="165" class="c2-centripetal-arrow" marker-end="url(#c2b)"/><text x="360" y="145" class="c2-force-label">resultante</text>
          <line x1="465" y1="145" x2="465" y2="65" class="c2-velocity-arrow" marker-end="url(#c2b)"/><text x="478" y="80" class="c2-force-label">velocidade</text>
        </svg>
        <p class="visual-caption">Velocidade tangente à trajetória; resultante para o centro.</p>
      </div>

      <div class="formula-box"><span class="formula-name">Quando precisamos calcular a resultante que mantém a curva</span><div class="big-formula">F<sub>c</sub> = m · v² / r</div><p>Não é uma “nova força” além das demais. Dependendo da situação, atrito, tração ou gravidade podem fornecer a resultante centrípeta.</p></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Conecte duas partes da viagem</strong><p>Por que pista escorregadia também pode ser perigosa numa curva plana?</p><div class="choice-row"><button type="button" data-choice="a">Porque a velocidade deixa de ter direção</button><button type="button" data-choice="b">Porque pode faltar atrito suficiente para fornecer a resultante dirigida ao centro</button><button type="button" data-choice="c">Porque o peso se torna zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso. A curva exige mudança de direção e, portanto, uma resultante para o centro." data-wrong-text="Junte as ideias de atrito e mudança da direção da velocidade."></div></div>
    </section>

    <section>
      <h3>7. Perto da escola, o ônibus sobe uma rampa</h3>
      <p>A gravidade não “gira” junto com a rua: o peso continua verticalmente para baixo. O que muda é a orientação da superfície. A força normal continua perpendicular ao piso inclinado, e parte do efeito do peso fica associada à tendência de descer a rampa.</p>
      <div class="note-box"><strong>Desenhe antes de calcular</strong><p>Em plano inclinado, comece pelo corpo, desenhe o peso vertical e a normal perpendicular à superfície. Só depois escolha eixos convenientes. Isso evita a falsa regra “normal = peso”.</p></div>
    </section>

    <section>
      <h3>8. Você desce do ônibus e começa a caminhar: surge a Terceira Lei de Newton</h3>
      <p>Para avançar, seu pé empurra o chão para trás. Ao mesmo tempo, o chão exerce uma força sobre você para a frente. São forças da mesma interação, com mesma intensidade e direção, sentidos opostos e <strong>atuando em corpos diferentes</strong>.</p>
      <p>Esse par é descrito pela <strong>Terceira Lei de Newton</strong>: se A exerce força em B, B exerce força em A.</p>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Evite a confusão clássica</strong><p>O peso de um livro e a normal da mesa sobre esse mesmo livro formam um par de ação e reação?</p><div class="choice-row"><button type="button" data-choice="a">Sim, porque apontam em sentidos opostos</button><button type="button" data-choice="b">Sim, sempre que tiverem o mesmo valor</button><button type="button" data-choice="c">Não; ambas atuam no livro, e pares de ação e reação atuam em corpos diferentes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exatamente. Para procurar o par, troque os corpos da interação." data-wrong-text="Sentidos opostos não bastam. Pergunte em quais corpos as forças atuam."></div></div>
    </section>

    <section>
      <h3>9. Um método para não se perder em problemas de forças</h3>
      <div class="equation-walk"><div><span>1</span><p><strong>Escolha o corpo</strong> que será analisado.</p></div><div><span>2</span><p><strong>Liste as interações</strong>: Terra, piso, corda, pneu, pessoa etc.</p></div><div><span>3</span><p><strong>Desenhe as forças</strong> com direção e sentido.</p></div><div><span>4</span><p><strong>Encontre a resultante</strong> e só então relacione com a aceleração.</p></div></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">A viagem de volta</span>
      <h3>10. Você consegue reconstruir o que aconteceu sem decorar uma lista?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Partida</strong><p>Ao arrancar, por que seu corpo tende a manter o estado anterior?</p><div class="choice-row"><button type="button" data-choice="a">Porque o peso desaparece</button><button type="button" data-choice="b">Por inércia</button><button type="button" data-choice="c">Por causa da força centrípeta</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A inércia é a tendência de manter o estado de movimento." data-wrong-text="Volte à primeira situação da viagem."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Resultante</strong><p>50 N para a direita e 20 N para a esquerda atuam numa caixa. Qual é a resultante?</p><div class="choice-row"><button type="button" data-choice="a">70 N para a direita</button><button type="button" data-choice="b">30 N para a esquerda</button><button type="button" data-choice="c">30 N para a direita</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="50 − 20 = 30 N, no sentido da maior força." data-wrong-text="As forças têm sentidos opostos."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Segunda Lei</strong><p>Uma resultante de 24 N atua numa massa de 6 kg. Qual é a aceleração?</p><div class="choice-row"><button type="button" data-choice="a">4 m/s²</button><button type="button" data-choice="b">18 m/s²</button><button type="button" data-choice="c">144 m/s²</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="a = F/m = 24/6 = 4 m/s²." data-wrong-text="Isole a em F = m·a."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Mochila</strong><p>Usando g ≈ 10 m/s², qual é o peso aproximado de uma mochila de 7 kg?</p><div class="choice-row"><button type="button" data-choice="a">7 N</button><button type="button" data-choice="b">70 N</button><button type="button" data-choice="c">700 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="P = m·g = 70 N." data-wrong-text="Massa e peso não são a mesma grandeza."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Chuva</strong><p>Qual interação é decisiva para frear e fazer uma curva plana sem deslizar?</p><div class="choice-row"><button type="button" data-choice="a">Atrito pneu–pista</button><button type="button" data-choice="b">Cor do veículo</button><button type="button" data-choice="c">Som do motor</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A aderência pneu–pista é essencial para produzir forças horizontais." data-wrong-text="Pense no contato com a rua."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Rampa</strong><p>Em uma rampa, qual afirmação é correta?</p><div class="choice-row"><button type="button" data-choice="a">O peso fica perpendicular à rampa</button><button type="button" data-choice="b">A gravidade deixa de atuar</button><button type="button" data-choice="c">O peso continua vertical e a normal fica perpendicular à superfície</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A superfície muda de orientação; a gravidade não." data-wrong-text="Desenhe o peso antes da rampa."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Rotatória</strong><p>Rapidez constante numa curva significa aceleração zero?</p><div class="choice-row"><button type="button" data-choice="a">Sim</button><button type="button" data-choice="b">Não, porque a direção da velocidade muda</button><button type="button" data-choice="c">Só à noite</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Velocidade inclui direção." data-wrong-text="Compare rapidez com velocidade vetorial."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Caminhada</strong><p>Quando você empurra o chão para trás e o chão empurra você para a frente, essas forças:</p><div class="choice-row"><button type="button" data-choice="a">Se anulam porque atuam em você</button><button type="button" data-choice="b">São duas forças inventadas</button><button type="button" data-choice="c">Formam um par de interação em corpos diferentes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="É a Terceira Lei de Newton." data-wrong-text="Identifique em qual corpo atua cada força."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Conte a viagem do ônibus usando apenas quatro ideias: inércia, resultante, atrito e força centrípeta. Para cada uma, escolha um acontecimento real da história e explique a relação causa → efeito sem começar por fórmulas.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo desenvolve os objetos previstos de Dinâmica: Leis de Newton; forças peso, tração e normal; atrito; plano inclinado; força centrípeta. As fórmulas aparecem depois das situações que tornam essas relações necessárias.</p></details>
  `;

  function initDiagnostic(root) {
    const recall = $('#diagnosticRecall', root);
    const compare = $('#diagnosticCompare', root);
    if (!recall || !compare) return;
    const options = ['O corpo tende a continuar o movimento que possuía.','A frenagem cria uma força que empurra o passageiro para a frente.','A gravidade aumenta durante a frenagem.','Ainda não sei.'];
    let selected = null;
    try {
      const saved = JSON.parse(localStorage.getItem('mbbPhysicsDiagnostic') || '{}');
      const value = saved?.firstAttempt?.conceptions?.['Concepção inicial: movimento e força'];
      if (Number.isInteger(value)) selected = value;
    } catch (_) {}
    if (selected === null) {
      recall.innerHTML = '<strong>Conexão com o diagnóstico</strong><p>A questão do ônibus freando já apareceu no começo do curso. Agora vamos construir a explicação.</p>';
      compare.innerHTML = '<strong>Agora podemos responder.</strong><p>O passageiro tende a manter o movimento que possuía. Essa tendência é a inércia.</p>';
      return;
    }
    recall.innerHTML = `<strong>Sua ideia no começo do curso</strong><p>Você marcou: <em>“${options[selected]}”</em>. Guarde essa resposta enquanto acompanha a primeira parte da viagem.</p>`;
    compare.innerHTML = selected === 0 ? '<strong>Sua intuição já apontava para a ideia física.</strong><p>Agora ela tem nome: <strong>inércia</strong>.</p>' : '<strong>Compare com sua ideia inicial.</strong><p>A frenagem não cria uma força para a frente; seu corpo tende a manter o movimento anterior.</p>';
  }

  function initForceLab(root) {
    const applied = $('#appliedForceRange', root);
    const resist = $('#resistForceRange', root);
    const mass = $('#massRange', root);
    if (!applied || !resist || !mass) return;
    const draw = () => {
      const fa = Number(applied.value), fr = Number(resist.value), m = Number(mass.value);
      const result = fa - fr, acc = result / m;
      $('#appliedForceValue', root).textContent = fa;
      $('#resistForceValue', root).textContent = fr;
      $('#massValue', root).textContent = m;
      $('#resultantValue', root).textContent = result === 0 ? '0 N' : `${Math.abs(result)} N ${result > 0 ? '→' : '←'}`;
      $('#accelerationValue', root).textContent = `${Math.abs(acc).toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:2})} m/s²`;
      $('#forceInterpretation', root).textContent = result === 0 ? 'sem aceleração horizontal' : `acelera para ${result > 0 ? 'a direita' : 'a esquerda'}`;
    };
    applied.addEventListener('input', draw); resist.addEventListener('input', draw); mass.addEventListener('input', draw); draw();
  }

  MBB.enableChapter?.('02 Por que as coisas mudam de movimento?', () => {
    MBB.showLesson({
      unit: 'Movimento e forças',
      technical: 'Dinâmica • Leis de Newton e forças',
      title: 'Por que as coisas mudam de movimento?',
      objective: '<strong>Propósito:</strong> descobrir, numa viagem de ônibus, como interações e forças resultantes explicam aceleração, inércia, atrito, rampas e curvas.',
      html: lessonHtml,
      init(root) { initDiagnostic(root); initForceLab(root); }
    });
  });
})();