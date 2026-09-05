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
        <strong class="card-title">O ônibus arranca, freia, faz uma curva e começa a subir uma ladeira</strong>
        <p>Você sente o corpo reagir em cada momento. Ao arrancar, parece que vai para trás. Na freada, tende a seguir para a frente. Na curva, sente o corpo deslocar para o lado. Na subida, o motor precisa trabalhar de outro jeito.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> o que realmente faz um movimento mudar?</p>
      </div>
      <div id="diagnosticRecall" class="diagnostic-recall" aria-live="polite"></div>
    </section>

    <section>
      <h3>1. Força não é movimento: força é interação</h3>
      <p>Um objeto pode estar em movimento sem que exista uma força resultante empurrando-o na direção do movimento. O papel da <strong>força resultante</strong> é mudar o estado de movimento: aumentar a velocidade, diminuir, mudar a direção ou produzir uma combinação dessas mudanças.</p>

      <div class="visual-box">
        <strong class="card-title">O mesmo carrinho em três situações</strong>
        <svg class="lesson-visual" viewBox="0 0 760 285" role="img" aria-label="Três situações de um carrinho: forças equilibradas, força resultante para a direita e força resultante para a esquerda.">
          <defs><marker id="arrowForce02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <g transform="translate(30 25)">
            <text x="95" y="20" class="c2-visual-title">forças equilibradas</text>
            <rect x="95" y="82" width="110" height="58" rx="10" class="c2-cart"/><circle cx="118" cy="151" r="14" class="c2-wheel"/><circle cx="182" cy="151" r="14" class="c2-wheel"/>
            <line x1="92" y1="108" x2="38" y2="108" class="c2-force-arrow" marker-end="url(#arrowForce02)"/><line x1="208" y1="108" x2="262" y2="108" class="c2-force-arrow" marker-end="url(#arrowForce02)"/>
            <text x="75" y="188" class="c2-caption">resultante = 0</text>
          </g>
          <g transform="translate(260 25)">
            <text x="83" y="20" class="c2-visual-title">resultante para a direita</text>
            <rect x="95" y="82" width="110" height="58" rx="10" class="c2-cart"/><circle cx="118" cy="151" r="14" class="c2-wheel"/><circle cx="182" cy="151" r="14" class="c2-wheel"/>
            <line x1="92" y1="108" x2="58" y2="108" class="c2-force-arrow muted" marker-end="url(#arrowForce02)"/><line x1="208" y1="108" x2="285" y2="108" class="c2-force-arrow" marker-end="url(#arrowForce02)"/>
            <text x="78" y="188" class="c2-caption">aceleração →</text>
          </g>
          <g transform="translate(505 25)">
            <text x="73" y="20" class="c2-visual-title">resultante para a esquerda</text>
            <rect x="95" y="82" width="110" height="58" rx="10" class="c2-cart"/><circle cx="118" cy="151" r="14" class="c2-wheel"/><circle cx="182" cy="151" r="14" class="c2-wheel"/>
            <line x1="92" y1="108" x2="18" y2="108" class="c2-force-arrow" marker-end="url(#arrowForce02)"/><line x1="208" y1="108" x2="242" y2="108" class="c2-force-arrow muted" marker-end="url(#arrowForce02)"/>
            <text x="75" y="188" class="c2-caption">aceleração ←</text>
          </g>
        </svg>
        <p class="visual-caption">Não olhe apenas para uma força isolada. Pergunte sempre: <strong>qual é a resultante de todas as forças que atuam neste corpo?</strong></p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Verificação rápida</strong>
        <p>Um carrinho se move em linha reta com velocidade constante. Qual é a conclusão mais adequada sobre a força resultante nele?</p>
        <div class="choice-row"><button type="button" data-choice="a">Deve apontar para a frente</button><button type="button" data-choice="b">Deve apontar para trás</button><button type="button" data-choice="c">Pode ser zero</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Velocidade constante em linha reta não exige força resultante diferente de zero." data-wrong-text="Movimento e força resultante não são a mesma coisa. A força resultante está ligada à mudança da velocidade."></div>
      </div>
    </section>

    <section>
      <h3>2. Primeira Lei de Newton: o corpo não muda sozinho</h3>
      <p>Quando a força resultante é zero, um corpo tende a manter seu estado: se estava parado, permanece parado; se já se movia em linha reta com velocidade constante, tende a continuar assim. Essa resistência a mudar o estado de movimento é chamada de <strong>inércia</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Por que o passageiro tende a seguir para a frente quando o ônibus freia?</strong>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Ônibus em movimento que freia enquanto o passageiro tende a continuar para a frente por inércia.">
          <defs><marker id="arrowInertia02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <rect x="75" y="105" width="530" height="105" rx="24" class="c2-bus"/><rect x="120" y="125" width="92" height="48" rx="8" class="c2-window"/><rect x="230" y="125" width="92" height="48" rx="8" class="c2-window"/><rect x="340" y="125" width="92" height="48" rx="8" class="c2-window"/>
          <circle cx="170" cy="220" r="28" class="c2-wheel"/><circle cx="520" cy="220" r="28" class="c2-wheel"/>
          <circle cx="388" cy="130" r="15" class="c2-person"/><line x1="388" y1="145" x2="410" y2="190" class="c2-person-line"/><line x1="404" y1="163" x2="437" y2="170" class="c2-person-line"/>
          <line x1="105" y1="75" x2="330" y2="75" class="c2-motion-arrow" marker-end="url(#arrowInertia02)"/><text x="145" y="58" class="c2-caption">movimento antes da freada</text>
          <line x1="405" y1="82" x2="535" y2="82" class="c2-inertia-arrow" marker-end="url(#arrowInertia02)"/><text x="390" y="58" class="c2-caption">tendência do corpo</text>
          <text x="610" y="160" class="c2-brake">FREIO</text>
        </svg>
      </div>

      <div id="diagnosticCompare" class="ok-box diagnostic-compare"></div>

      <div class="experiment-box">
        <strong class="card-title">Experimento simples: a moeda e o cartão</strong>
        <p>Coloque um cartão rígido sobre um copo plástico e uma moeda sobre o cartão. Dê um toque rápido e horizontal no cartão. O cartão sai, enquanto a moeda tende a manter seu estado e cai quase verticalmente no copo.</p>
        <p class="safety-note"><strong>Segurança:</strong> use copo plástico, superfície estável e faça o movimento longe da borda da mesa.</p>
      </div>
    </section>

    <section>
      <h3>3. Segunda Lei de Newton: mesma força, efeitos diferentes</h3>
      <p>Empurrar um carrinho de supermercado vazio e outro carregado deixa uma ideia evidente: com a <strong>mesma força resultante</strong>, o carrinho de menor massa muda sua velocidade mais rapidamente.</p>

      <div class="equation-walk">
        <div><span>1</span><p>Primeiro descubra a <strong>força resultante</strong>.</p></div>
        <div><span>2</span><p>Depois observe a <strong>massa</strong>: quanto maior, maior a resistência à aceleração.</p></div>
        <div><span>3</span><p>A <strong>aceleração</strong> mostra quanto a velocidade muda.</p></div>
      </div>

      <div class="formula-box">
        <span class="formula-name">Agora a relação matemática faz sentido</span>
        <div class="big-formula">F<sub>R</sub> = m · a</div>
        <p>A unidade de força no Sistema Internacional é o <strong>newton (N)</strong>. Uma força resultante de 1 N produz aceleração de 1 m/s² em uma massa de 1 kg.</p>
      </div>

      <div class="interactive-lab force-lab" id="forceLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Empurre o carrinho e observe a resultante</h4></div>
        <div class="force-lab-controls">
          <label>Força aplicada <strong><span id="appliedForceValue">30</span> N</strong><input id="appliedForceRange" type="range" min="20" max="60" step="5" value="30"></label>
          <label>Força resistente <strong><span id="resistForceValue">10</span> N</strong><input id="resistForceRange" type="range" min="0" max="20" step="5" value="10"></label>
          <label>Massa do carrinho <strong><span id="massValue">5</span> kg</strong><input id="massRange" type="range" min="2" max="20" step="1" value="5"></label>
        </div>
        <div class="force-lab-scene">
          <div class="force-arrow-left" id="resistArrow"><span>resistente</span></div>
          <div class="force-cart" aria-hidden="true"><span></span><i></i><i></i></div>
          <div class="force-arrow-right" id="appliedArrow"><span>aplicada</span></div>
        </div>
        <div class="force-lab-result">
          <div><span>Força resultante</span><strong id="resultantValue">20 N →</strong></div>
          <div><span>Aceleração</span><strong id="accelerationValue">4,0 m/s²</strong></div>
          <div><span>Leitura física</span><strong id="forceInterpretation">o carrinho acelera para a direita</strong></div>
        </div>
        <p>Teste duas estratégias: primeiro mantenha a massa e aumente a força resultante; depois mantenha as forças e aumente a massa. Observe o que acontece com a aceleração.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Interprete antes de calcular</strong>
        <p>Dois carrinhos recebem a mesma força resultante. Um tem 4 kg e o outro 8 kg. Qual tende a ter maior aceleração?</p>
        <div class="choice-row"><button type="button" data-choice="a">O de 8 kg</button><button type="button" data-choice="b">O de 4 kg</button><button type="button" data-choice="c">Os dois sempre aceleram igual</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Com a mesma força resultante, a menor massa apresenta maior aceleração." data-wrong-text="Use a ideia F = m·a: mantendo F, aumentar a massa reduz a aceleração."></div>
      </div>
    </section>

    <section>
      <h3>4. As forças que aparecem o tempo todo</h3>
      <p>Em vez de decorar uma lista, observe <strong>quem interage com quem</strong>. Isso ajuda a descobrir quais forças realmente atuam no corpo analisado.</p>

      <div class="force-cards">
        <article>
          <strong>Peso</strong>
          <p>É a força gravitacional exercida pela Terra sobre o corpo. Próximo à superfície terrestre:</p>
          <span class="mini-formula">P = m · g</span>
          <small>Nos exercícios iniciais, podemos usar g ≈ 10 m/s² quando indicado.</small>
        </article>
        <article>
          <strong>Normal</strong>
          <p>É a força de contato exercida por uma superfície, perpendicular a ela. <strong>Não é automaticamente igual ao peso.</strong></p>
        </article>
        <article>
          <strong>Tração</strong>
          <p>É a força transmitida por cordas, cabos ou fios tensionados. Sua direção acompanha o cabo que puxa o corpo.</p>
        </article>
      </div>

      <div class="visual-box">
        <strong class="card-title">Três diagramas de forças</strong>
        <svg class="lesson-visual" viewBox="0 0 780 350" role="img" aria-label="Diagramas de forças de um livro sobre mesa, uma luminária suspensa e uma caixa puxada por uma corda.">
          <defs><marker id="arrowBodies02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <g transform="translate(25 25)">
            <text x="70" y="20" class="c2-visual-title">livro sobre a mesa</text>
            <rect x="80" y="160" width="130" height="38" rx="5" class="c2-object"/><rect x="42" y="198" width="205" height="18" class="c2-surface"/>
            <line x1="145" y1="158" x2="145" y2="82" class="c2-normal-arrow" marker-end="url(#arrowBodies02)"/><text x="153" y="96" class="c2-force-label">N</text>
            <line x1="145" y1="200" x2="145" y2="278" class="c2-weight-arrow" marker-end="url(#arrowBodies02)"/><text x="153" y="266" class="c2-force-label">P</text>
          </g>
          <g transform="translate(275 25)">
            <text x="65" y="20" class="c2-visual-title">objeto suspenso</text>
            <line x1="145" y1="50" x2="145" y2="152" class="c2-rope"/><circle cx="145" cy="184" r="32" class="c2-object-round"/>
            <line x1="145" y1="150" x2="145" y2="83" class="c2-tension-arrow" marker-end="url(#arrowBodies02)"/><text x="154" y="96" class="c2-force-label">T</text>
            <line x1="145" y1="217" x2="145" y2="287" class="c2-weight-arrow" marker-end="url(#arrowBodies02)"/><text x="154" y="275" class="c2-force-label">P</text>
          </g>
          <g transform="translate(520 25)">
            <text x="52" y="20" class="c2-visual-title">caixa puxada</text>
            <rect x="72" y="160" width="125" height="58" rx="7" class="c2-object"/><line x1="197" y1="170" x2="265" y2="120" class="c2-rope"/>
            <line x1="198" y1="170" x2="262" y2="123" class="c2-tension-arrow" marker-end="url(#arrowBodies02)"/><text x="245" y="108" class="c2-force-label">T</text>
            <line x1="135" y1="158" x2="135" y2="82" class="c2-normal-arrow" marker-end="url(#arrowBodies02)"/><text x="144" y="96" class="c2-force-label">N</text>
            <line x1="135" y1="220" x2="135" y2="292" class="c2-weight-arrow" marker-end="url(#arrowBodies02)"/><text x="144" y="280" class="c2-force-label">P</text>
          </g>
        </svg>
      </div>

      <div class="example-box">
        <strong class="card-title">Exemplo guiado: quanto pesa um corpo de 6 kg?</strong>
        <p>Usando g ≈ 10 m/s², primeiro interprete: cada quilograma recebe aproximadamente 10 N de força gravitacional.</p>
        <ol class="reason-steps"><li>massa: 6 kg;</li><li>gravidade aproximada: 10 m/s²;</li><li>peso: P = 6 · 10 = <strong>60 N</strong>.</li></ol>
        <p><strong>Atenção:</strong> massa é medida em kg; peso é uma força e é medido em N.</p>
      </div>
    </section>

    <section>
      <h3>5. Atrito: a força que pode atrapalhar ou salvar</h3>
      <p>Sem atrito seria difícil caminhar, arrancar com um carro ou fazer uma curva. Ao mesmo tempo, o atrito pode dificultar o deslizamento de uma caixa. Ele atua no contato entre superfícies e se opõe à tendência de deslizamento relativo.</p>

      <div class="comparison-grid c2-comparison">
        <div><strong>Quando queremos atrito</strong><p>pneus no asfalto, sapato no chão, freios, objetos que não devem escorregar.</p></div>
        <div><strong>Quando queremos reduzir atrito</strong><p>rolamentos, lubrificação, peças móveis e sistemas em que o atrito desperdiça energia.</p></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Física no cotidiano</strong>
        <p>Por que um carro pode ter mais dificuldade para frear em uma pista muito escorregadia?</p>
        <div class="choice-row"><button type="button" data-choice="a">Porque a interação pneu-pista oferece menos força de atrito disponível</button><button type="button" data-choice="b">Porque a massa do carro desaparece</button><button type="button" data-choice="c">Porque a gravidade deixa de atuar</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="A frenagem depende da interação entre pneus e pista; menos aderência reduz a capacidade de produzir a força necessária." data-wrong-text="A massa e a gravidade continuam existindo. Pense na interação entre pneu e superfície."></div>
      </div>
    </section>

    <section>
      <h3>6. Plano inclinado: a gravidade continua vertical, mas o efeito muda</h3>
      <p>Em uma rampa, o peso continua apontando verticalmente para baixo. A superfície, porém, está inclinada. Por isso a força normal muda de direção e parte do efeito do peso tende a fazer o corpo descer ao longo da rampa.</p>

      <div class="visual-box">
        <strong class="card-title">Leia as direções antes de fazer contas</strong>
        <svg class="lesson-visual" viewBox="0 0 760 360" role="img" aria-label="Caixa sobre um plano inclinado com vetores peso para baixo, normal perpendicular ao plano e tendência de movimento para baixo da rampa.">
          <defs><marker id="arrowRamp02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <polygon points="90,300 650,300 650,80" class="c2-ramp"/>
          <g transform="rotate(-21.5 410 185)"><rect x="350" y="145" width="120" height="80" rx="8" class="c2-object"/></g>
          <line x1="410" y1="185" x2="410" y2="315" class="c2-weight-arrow" marker-end="url(#arrowRamp02)"/><text x="424" y="294" class="c2-force-label">peso</text>
          <line x1="410" y1="185" x2="360" y2="60" class="c2-normal-arrow" marker-end="url(#arrowRamp02)"/><text x="320" y="67" class="c2-force-label">normal</text>
          <line x1="392" y1="215" x2="250" y2="270" class="c2-tendency-arrow" marker-end="url(#arrowRamp02)"/><text x="208" y="294" class="c2-force-label">tendência de descer</text>
          <text x="505" y="330" class="c2-caption">a normal é perpendicular à superfície</text>
        </svg>
      </div>

      <div class="note-box"><strong>Uma armadilha comum</strong><p>Em uma superfície horizontal simples, normal e peso podem ter o mesmo valor. Em uma rampa, isso já não é verdade automaticamente. A direção da superfície mudou.</p></div>
    </section>

    <section>
      <h3>7. Terceira Lei de Newton: forças aparecem em pares de interação</h3>
      <p>Quando o corpo A exerce força sobre o corpo B, o corpo B exerce uma força de mesma intensidade e direção, mas sentido oposto, sobre o corpo A. É o par de <strong>ação e reação</strong>.</p>

      <div class="visual-box">
        <strong class="card-title">Dois patinadores se empurram</strong>
        <svg class="lesson-visual" viewBox="0 0 760 285" role="img" aria-label="Dois patinadores se empurrando e se afastando em sentidos opostos, com forças iguais e opostas atuando em corpos diferentes.">
          <defs><marker id="arrowPair02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <line x1="75" y1="235" x2="685" y2="235" class="c2-floor"/>
          <g transform="translate(230 75)"><circle cx="0" cy="0" r="20" class="c2-person"/><line x1="0" y1="20" x2="18" y2="95" class="c2-person-line"/><line x1="12" y1="45" x2="65" y2="58" class="c2-person-line"/><line x1="17" y1="95" x2="-15" y2="135" class="c2-person-line"/><line x1="17" y1="95" x2="50" y2="135" class="c2-person-line"/></g>
          <g transform="translate(530 75)"><circle cx="0" cy="0" r="20" class="c2-person alt"/><line x1="0" y1="20" x2="-18" y2="95" class="c2-person-line alt"/><line x1="-12" y1="45" x2="-65" y2="58" class="c2-person-line alt"/><line x1="-17" y1="95" x2="15" y2="135" class="c2-person-line alt"/><line x1="-17" y1="95" x2="-50" y2="135" class="c2-person-line alt"/></g>
          <line x1="350" y1="135" x2="245" y2="135" class="c2-pair-arrow" marker-end="url(#arrowPair02)"/><line x1="410" y1="135" x2="515" y2="135" class="c2-pair-arrow" marker-end="url(#arrowPair02)"/>
          <text x="260" y="118" class="c2-caption">força em A</text><text x="435" y="118" class="c2-caption">força em B</text>
        </svg>
        <p class="visual-caption">As duas forças não se anulam entre si porque atuam em <strong>corpos diferentes</strong>.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Evite a confusão clássica</strong>
        <p>O peso de um livro e a força normal da mesa sobre o livro formam um par de ação e reação?</p>
        <div class="choice-row"><button type="button" data-choice="a">Sim, porque têm sentidos opostos</button><button type="button" data-choice="b">Sim, sempre que os valores forem iguais</button><button type="button" data-choice="c">Não, porque as duas forças atuam no mesmo corpo</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Pares de ação e reação atuam em corpos diferentes. Peso e normal atuam ambos no livro." data-wrong-text="Sentidos opostos não bastam. Procure em quais corpos as forças atuam."></div>
      </div>
    </section>

    <section>
      <h3>8. Curvas: mudar a direção também é acelerar</h3>
      <p>No capítulo anterior vimos que, em movimento circular, a direção da velocidade muda o tempo todo. Logo, existe aceleração mesmo que o valor da rapidez permaneça constante. Para produzir essa mudança é necessária uma <strong>força resultante dirigida para o centro</strong>: a força centrípeta.</p>

      <div class="visual-box">
        <strong class="card-title">A velocidade aponta ao longo da trajetória; a resultante aponta para o centro</strong>
        <svg class="lesson-visual" viewBox="0 0 760 360" role="img" aria-label="Carro em trajetória circular com vetor velocidade tangente e força centrípeta apontando para o centro da curva.">
          <defs><marker id="arrowCircle02" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c2-arrow-fill"/></marker></defs>
          <circle cx="370" cy="185" r="125" class="c2-orbit"/><circle cx="370" cy="185" r="10" class="c2-center"/><text x="385" y="178" class="c2-caption">centro</text>
          <g transform="translate(495 170)"><rect x="-28" y="-16" width="56" height="32" rx="9" class="c2-car"/><circle cx="-17" cy="19" r="7" class="c2-wheel"/><circle cx="17" cy="19" r="7" class="c2-wheel"/></g>
          <line x1="495" y1="185" x2="395" y2="185" class="c2-centripetal-arrow" marker-end="url(#arrowCircle02)"/><text x="412" y="166" class="c2-force-label">F centrípeta</text>
          <line x1="500" y1="165" x2="500" y2="70" class="c2-velocity-arrow" marker-end="url(#arrowCircle02)"/><text x="512" y="88" class="c2-force-label">velocidade</text>
        </svg>
      </div>

      <div class="formula-box">
        <span class="formula-name">Quando precisamos calcular a resultante radial</span>
        <div class="big-formula">F<sub>c</sub> = m · v² / r</div>
        <p>A força centrípeta <strong>não é uma nova força misteriosa</strong>. É o nome dado à resultante que aponta para o centro. Dependendo da situação, ela pode ser produzida por atrito, tração, gravidade ou outra interação.</p>
      </div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Conexão com a estrada</strong>
        <p>Em uma curva plana, qual interação normalmente ajuda a produzir a força centrípeta sobre um automóvel?</p>
        <div class="choice-row"><button type="button" data-choice="a">A força normal apontando para a frente</button><button type="button" data-choice="b">O atrito entre pneus e pista</button><button type="button" data-choice="c">A massa do carro</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Em uma curva plana, o atrito pneu-pista pode fornecer a resultante horizontal apontando para o centro." data-wrong-text="Pergunte qual interação horizontal consegue apontar para o centro da curva."></div>
      </div>
    </section>

    <section>
      <h3>9. Como analisar qualquer situação de forças</h3>
      <div class="analysis-steps">
        <div><span>1</span><strong>Escolha o corpo</strong><p>Decida exatamente qual objeto será analisado.</p></div>
        <div><span>2</span><strong>Liste as interações</strong><p>Terra, superfície, corda, pessoa, ar, pneus etc.</p></div>
        <div><span>3</span><strong>Desenhe as forças</strong><p>Use setas partindo do corpo e respeite suas direções.</p></div>
        <div><span>4</span><strong>Encontre a resultante</strong><p>Veja quais forças se equilibram e quais não.</p></div>
        <div><span>5</span><strong>Relacione com o movimento</strong><p>Se a resultante não é zero, procure a aceleração correspondente.</p></div>
      </div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Exercícios excelentes, não repetição de fórmula</span>
      <h3>10. Checkpoint — você consegue explicar as forças?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Inércia</strong><p>Ao puxar rapidamente uma toalha sob objetos leves, alguns tendem a permanecer quase no mesmo lugar. Qual ideia explica isso?</p><div class="choice-row"><button type="button" data-choice="a">Peso zero</button><button type="button" data-choice="b">Inércia</button><button type="button" data-choice="c">Ação e reação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A inércia é a tendência de resistir a mudanças no estado de movimento." data-wrong-text="Pense na tendência de manter o estado que o corpo já possuía."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Resultante</strong><p>Uma pessoa empurra uma caixa com 50 N para a direita e uma força resistente de 20 N atua para a esquerda. Qual é a resultante horizontal?</p><div class="choice-row"><button type="button" data-choice="a">70 N para a direita</button><button type="button" data-choice="b">30 N para a esquerda</button><button type="button" data-choice="c">30 N para a direita</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="As forças têm sentidos opostos: 50 − 20 = 30 N para a direita." data-wrong-text="Como os sentidos são opostos, subtraia os módulos e mantenha o sentido da maior força."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Segunda Lei</strong><p>Uma força resultante de 24 N atua sobre um corpo de 6 kg. Qual é a aceleração?</p><div class="choice-row"><button type="button" data-choice="a">4 m/s²</button><button type="button" data-choice="b">18 m/s²</button><button type="button" data-choice="c">144 m/s²</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="a = F/m = 24/6 = 4 m/s²." data-wrong-text="Reorganize F = m·a: para descobrir a aceleração, divida a força pela massa."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Peso</strong><p>Usando g ≈ 10 m/s², qual é o peso aproximado de uma mochila de 7 kg?</p><div class="choice-row"><button type="button" data-choice="a">7 N</button><button type="button" data-choice="b">70 N</button><button type="button" data-choice="c">700 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="P = m·g = 7·10 = 70 N." data-wrong-text="Massa e peso não têm a mesma unidade. Use P = m·g."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Plano inclinado</strong><p>Qual afirmação é correta para uma caixa apoiada em uma rampa?</p><div class="choice-row"><button type="button" data-choice="a">O peso fica perpendicular à rampa</button><button type="button" data-choice="b">A gravidade deixa de atuar</button><button type="button" data-choice="c">O peso continua vertical e a normal fica perpendicular à superfície</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A orientação da rampa muda a direção da normal, não a direção da gravidade." data-wrong-text="A gravidade continua apontando para baixo, independentemente da inclinação da superfície."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Ação e reação</strong><p>Ao nadar, uma pessoa empurra a água para trás e a água exerce força sobre a pessoa. Qual lei descreve esse par de interação?</p><div class="choice-row"><button type="button" data-choice="a">Terceira Lei de Newton</button><button type="button" data-choice="b">Lei da gravitação apenas</button><button type="button" data-choice="c">Princípio de Pascal</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="As forças de interação aparecem em corpos diferentes, com sentidos opostos." data-wrong-text="Procure a lei que descreve pares de forças entre dois corpos em interação."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Curva</strong><p>Um carro faz uma curva com rapidez aproximadamente constante. Podemos dizer que sua aceleração é zero?</p><div class="choice-row"><button type="button" data-choice="a">Sim, porque o velocímetro não mudou</button><button type="button" data-choice="b">Não, porque a direção da velocidade está mudando</button><button type="button" data-choice="c">Sim, porque toda curva anula as forças</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Velocidade inclui direção. Mudar a direção significa acelerar." data-wrong-text="Rapidez constante não significa velocidade vetorial constante quando a direção muda."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Diagrama de forças</strong><p>Qual deve ser o primeiro passo para desenhar corretamente as forças de uma situação?</p><div class="choice-row"><button type="button" data-choice="a">Somar todos os números do problema</button><button type="button" data-choice="b">Escolher uma fórmula qualquer</button><button type="button" data-choice="c">Definir qual corpo está sendo analisado</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Definir o corpo evita misturar forças que atuam em objetos diferentes." data-wrong-text="Antes de desenhar setas, diga exatamente qual objeto será analisado."></div></div>

      <div class="challenge-box"><strong>Desafio MbB</strong><p>Um carro entra em uma curva e começa a derrapar em pista molhada. Explique, sem começar por fórmulas, por que reduzir a aderência entre pneu e pista pode impedir que o carro acompanhe a curva. Depois relacione sua explicação à ideia de força centrípeta.</p><details><summary>Conferir uma boa linha de raciocínio</summary><p>Para acompanhar uma curva, a direção da velocidade precisa mudar. Isso exige uma resultante apontando para o centro. Em uma curva plana, o atrito entre pneu e pista pode fornecer essa resultante. Se a aderência diminui demais, a força disponível pode ser insuficiente e o carro deixa de seguir a trajetória desejada.</p></details></div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo trabalha os objetos de conhecimento previstos para Física na 1ª série relacionados à Dinâmica: Leis de Newton, forças peso, tração e normal, força de atrito, plano inclinado e força centrípeta. O impulso será aprofundado no capítulo de quantidade de movimento e colisões, onde aparece conectado ao restante desse conjunto.</p>
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

  function initDiagnosticRecall(root) {
    const recall = $('#diagnosticRecall', root);
    const compare = $('#diagnosticCompare', root);
    if (!recall || !compare) return;

    const options = [
      'O corpo tende a continuar o movimento que possuía.',
      'A frenagem cria uma força que empurra o passageiro para a frente.',
      'A gravidade aumenta durante a frenagem.',
      'Ainda não sei.'
    ];

    let selected = null;
    try {
      const saved = JSON.parse(localStorage.getItem('mbbPhysicsDiagnostic') || '{}');
      const value = saved?.firstAttempt?.conceptions?.['Concepção inicial: movimento e força'];
      if (Number.isInteger(value)) selected = value;
    } catch (_) {
      selected = null;
    }

    if (selected === null) {
      recall.innerHTML = '<strong>Conexão com a avaliação diagnóstica</strong><p>Lembra da questão do ônibus freando? Agora vamos construir a explicação física que estava por trás daquela situação.</p>';
      compare.innerHTML = '<strong>Agora podemos responder.</strong><p>O passageiro tende a continuar com o movimento que possuía. Essa tendência é a inércia; não é uma força misteriosa empurrando-o para a frente.</p>';
      return;
    }

    recall.innerHTML = `<strong>Sua ideia no começo do curso</strong><p>Na avaliação diagnóstica você marcou: <em>“${options[selected]}”</em> Guarde essa resposta por alguns minutos; ainda não vamos julgá-la.</p>`;
    compare.innerHTML = selected === 0
      ? '<strong>Sua intuição já apontava para a ideia física.</strong><p>Agora você pode dar nome e fundamento ao raciocínio: a tendência de manter o estado de movimento é a <strong>inércia</strong>.</p>'
      : '<strong>Compare com sua ideia inicial.</strong><p>O corpo não é empurrado para a frente pela frenagem. Ele tende a manter o movimento que já possuía enquanto o ônibus reduz sua velocidade. Essa tendência é a <strong>inércia</strong>.</p>';
  }

  function initForceLab(root) {
    const applied = $('#appliedForceRange', root);
    const resist = $('#resistForceRange', root);
    const mass = $('#massRange', root);
    const appliedArrow = $('#appliedArrow', root);
    const resistArrow = $('#resistArrow', root);
    if (!applied || !resist || !mass || !appliedArrow || !resistArrow) return;

    const draw = () => {
      const fa = Number(applied.value);
      const fr = Number(resist.value);
      const m = Number(mass.value);
      const resultant = fa - fr;
      const acceleration = resultant / m;

      $('#appliedForceValue', root).textContent = fa;
      $('#resistForceValue', root).textContent = fr;
      $('#massValue', root).textContent = m;
      $('#resultantValue', root).textContent = resultant === 0 ? '0 N' : `${resultant} N →`;
      $('#accelerationValue', root).textContent = `${acceleration.toLocaleString('pt-BR', { minimumFractionDigits:1, maximumFractionDigits:2 })} m/s²`;
      $('#forceInterpretation', root).textContent = resultant === 0 ? 'não há aceleração horizontal' : 'o carrinho acelera para a direita';

      appliedArrow.style.setProperty('--arrow-size', `${70 + fa * 2.1}px`);
      resistArrow.style.setProperty('--arrow-size', `${38 + fr * 3.2}px`);
    };

    applied.addEventListener('input', draw);
    resist.addEventListener('input', draw);
    mass.addEventListener('input', draw);
    draw();
  }

  function showChapter() {
    $('#unitName').textContent = 'Movimento e forças';
    $('#technicalTitle').textContent = 'Dinâmica • Leis de Newton e forças';
    $('#lessonTitle').textContent = 'Por que as coisas mudam de movimento?';
    $('#lessonObjective').innerHTML = '<strong>Propósito:</strong> compreender como as forças e suas resultantes explicam acelerações, equilíbrio, atrito, rampas e movimentos em curvas.';
    content.innerHTML = lessonHtml;
    initChoiceQuestions(content);
    initDiagnosticRecall(content);
    initForceLab(content);
    menu.classList.remove('open');
    openMenu?.setAttribute('aria-expanded', 'false');
    if (content.scrollTo) content.scrollTo({ top:0, behavior:'auto' });
  }

  const chapterButton = $$('.menu-item', menu).find((button) => button.textContent.trim().startsWith('02 Por que as coisas mudam de movimento?'));
  if (!chapterButton) return;

  chapterButton.disabled = false;
  chapterButton.title = '';
  chapterButton.classList.remove('pending');
  chapterButton.dataset.physicsLesson = 'forcas';
  chapterButton.addEventListener('click', showChapter);
})();