(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Comece por uma situação real</span>
      <div class="hero-box physics-story">
        <strong class="card-title">A mesma gravidade que faz uma maçã cair também mantém a Lua em órbita.</strong>
        <p>Quando um objeto cai, parece que ele apenas se aproxima da Terra. Já a Lua permanece no céu e um satélite pode dar voltas ao redor do planeta durante anos.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> como a mesma interação gravitacional explica quedas, órbitas, o Sistema Solar e até parte da história do Universo?</p>
      </div>
    </section>

    <section>
      <h3>1. Uma mesma interação: da queda à órbita</h3>
      <p>Todo corpo com massa participa da interação gravitacional. Perto da superfície terrestre, percebemos isso principalmente como <strong>peso</strong>. Em escalas astronômicas, a mesma interação ajuda a explicar órbitas de luas, planetas e satélites.</p>

      <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Terra atraindo uma maçã próxima e a Lua em órbita">
        <defs><marker id="c8gravArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1967d2"/></marker></defs>
        <circle cx="380" cy="170" r="72" fill="#d9efff" stroke="#1967d2" stroke-width="4"/>
        <path d="M330 150 Q350 115 385 130 Q420 105 445 145 Q430 180 400 205 Q355 210 330 180 Z" fill="#8bcf8b"/>
        <text x="355" y="175" class="visual-title">Terra</text>
        <circle cx="132" cy="96" r="16" fill="#d08700"/>
        <text x="75" y="65" class="visual-note">maçã</text>
        <line x1="145" y1="104" x2="310" y2="150" stroke="#1967d2" stroke-width="5" marker-end="url(#c8gravArrow)"/>
        <ellipse cx="380" cy="170" rx="265" ry="118" fill="none" stroke="#aab9ca" stroke-width="3" stroke-dasharray="9 7"/>
        <circle cx="630" cy="132" r="24" fill="#c9d0d7" stroke="#7b8795" stroke-width="2"/>
        <line x1="607" y1="139" x2="455" y2="165" stroke="#1967d2" stroke-width="5" marker-end="url(#c8gravArrow)"/>
        <text x="615" y="94" class="visual-note">Lua</text>
        <text x="170" y="278" class="visual-title">a interação gravitacional aponta para o centro de atração</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Lei da Gravitação Universal</span><div class="big-formula">F = G · m₁ · m₂ / r²</div><p>A força aumenta com as massas e diminui rapidamente com a distância entre os centros dos corpos. <strong>G</strong> é a constante gravitacional.</p></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>Previsão</strong><p>Se a distância entre dois corpos dobra e as massas permanecem iguais, a força gravitacional passa a ser:</p><div class="choice-row"><button type="button" data-choice="a">2 vezes maior</button><button type="button" data-choice="b">Metade</button><button type="button" data-choice="c">Um quarto</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como a distância aparece ao quadrado, dobrar r torna a força 1/4 do valor anterior." data-wrong-text="Observe o termo r² no denominador da lei da gravitação universal."></div></div>
    </section>

    <section>
      <h3>2. Órbita: cair sem atingir o chão</h3>
      <p>Imagine lançar um objeto horizontalmente cada vez mais rápido a partir de uma grande altura. Enquanto ele cai, a superfície curva da Terra também se afasta de sua trajetória. Com uma velocidade adequada e sem obstáculos atmosféricos relevantes, o objeto pode permanecer em <strong>queda contínua ao redor da Terra</strong>.</p>

      <svg class="lesson-visual" viewBox="0 0 760 310" role="img" aria-label="Satélite com velocidade tangencial e aceleração gravitacional voltada para a Terra">
        <defs><marker id="c8blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1967d2"/></marker><marker id="c8green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#087f5b"/></marker></defs>
        <circle cx="375" cy="180" r="75" fill="#d9efff" stroke="#1967d2" stroke-width="4"/>
        <circle cx="375" cy="180" r="150" fill="none" stroke="#bdc9d6" stroke-width="3" stroke-dasharray="8 7"/>
        <rect x="510" y="126" width="42" height="25" rx="5" fill="#6d4aff"/>
        <line x1="530" y1="126" x2="530" y2="60" stroke="#087f5b" stroke-width="5" marker-end="url(#c8green)"/>
        <text x="548" y="72" class="visual-note">velocidade tangencial</text>
        <line x1="510" y1="145" x2="445" y2="170" stroke="#1967d2" stroke-width="5" marker-end="url(#c8blue)"/>
        <text x="465" y="205" class="visual-note">gravidade</text>
        <text x="130" y="295" class="visual-title">a gravidade muda continuamente a direção do movimento</text>
      </svg>

      <div class="note-box"><strong>Astronautas em órbita não estão “sem gravidade”</strong><p>Eles e a nave estão caindo juntos ao redor da Terra. A sensação de ausência de peso aparente ocorre porque não há uma força de apoio sustentando o corpo como acontece quando estamos parados no chão.</p></div>
    </section>

    <section>
      <h3>3. Kepler: padrões observados nas órbitas planetárias</h3>
      <p>Antes da explicação gravitacional de Newton, Johannes Kepler identificou regularidades matemáticas no movimento dos planetas a partir de observações astronômicas. Essas leis descrevem <strong>como</strong> os planetas se movem.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">1ª lei — órbitas elípticas</strong><p>Os planetas descrevem elipses com o Sol em um dos focos. Uma circunferência é um caso particular de elipse.</p></div>
        <div class="example-box"><strong class="card-title">2ª lei — áreas iguais</strong><p>A linha que liga o planeta ao Sol varre áreas iguais em tempos iguais. O planeta se move mais rápido quando está mais próximo do Sol.</p></div>
        <div class="example-box"><strong class="card-title">3ª lei — período e tamanho da órbita</strong><p>Para corpos orbitando o mesmo centro, o quadrado do período é proporcional ao cubo do semieixo maior.</p></div>
      </div>

      <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Órbita elíptica com o Sol em um foco e setores indicando a segunda lei de Kepler">
        <ellipse cx="380" cy="150" rx="270" ry="105" fill="none" stroke="#70829a" stroke-width="4"/>
        <circle cx="245" cy="150" r="28" fill="#f6c453"/>
        <text x="220" y="198" class="visual-note">Sol em um foco</text>
        <path d="M245 150 L330 73 A270 105 0 0 1 415 50 Z" fill="#d9efff" opacity=".85"/>
        <path d="M245 150 L635 115 A270 105 0 0 1 645 175 Z" fill="#eadfff" opacity=".85"/>
        <circle cx="350" cy="66" r="12" fill="#1967d2"/><circle cx="642" cy="145" r="12" fill="#6d4aff"/>
        <text x="455" y="270" class="visual-title">áreas iguais em tempos iguais</text>
      </svg>

      <div class="formula-box"><span class="formula-name">3ª lei de Kepler — para o mesmo corpo central</span><div class="big-formula">T² ∝ a³</div><p><strong>T</strong> é o período orbital e <strong>a</strong> é o semieixo maior da órbita.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo proporcional</strong><p>Se, num sistema idealizado, um planeta orbita a uma distância característica 4 vezes maior que a da Terra, então T² = 4³ = 64. Logo, <strong>T = 8 vezes</strong> o período da Terra.</p></div>
    </section>

    <section>
      <h3>4. Laboratório interativo: afaste o planeta e observe o que muda</h3>
      <div class="interactive-lab" id="orbitLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Distância, gravidade e período orbital</h4></div>
        <p>O modelo usa relações proporcionais para órbitas circulares ao redor do mesmo corpo central. A posição inicial de referência é r = 1.</p>
        <div class="lab-controls">
          <label>Distância orbital relativa <strong><span id="orbitRadiusValue">1,00</span> r</strong><input id="orbitRadiusRange" type="range" min="1" max="5" step="0.25" value="1"></label>
        </div>

        <svg class="lesson-visual" id="orbitLabSvg" viewBox="0 0 760 300" role="img" aria-label="Simulação de uma órbita circular cuja distância pode ser alterada">
          <circle cx="380" cy="150" r="32" fill="#f6c453"/>
          <circle id="orbitPath" cx="380" cy="150" r="70" fill="none" stroke="#aab9ca" stroke-width="3" stroke-dasharray="8 7"/>
          <circle id="orbitPlanet" cx="450" cy="150" r="13" fill="#1967d2"/>
          <text x="350" y="158" class="visual-note">Sol</text>
        </svg>

        <div class="lab-result" aria-live="polite">
          <span>Força gravitacional relativa:</span><strong id="relativeGravityValue">1,00</strong>
          <span>Velocidade orbital relativa:</span><strong id="relativeSpeedValue">1,00</strong>
          <span>Período orbital relativo:</span><strong id="relativePeriodValue">1,00</strong>
        </div>
        <p id="orbitConclusion">Perto do corpo central, a atração é mais intensa e o período orbital é menor.</p>
      </div>
    </section>

    <section>
      <h3>5. Do Sistema Solar ao Big Bang</h3>
      <p>Quando olhamos para escalas muito maiores que o Sistema Solar, a pergunta deixa de ser apenas “como um planeta orbita?” e passa a incluir “como o próprio Universo evolui?”. O modelo do <strong>Big Bang</strong> descreve um Universo que, no passado, esteve em um estado extremamente quente e denso e que vem se expandindo e evoluindo.</p>

      <div class="note-box"><strong>Big Bang não é uma explosão comum dentro de um espaço vazio</strong><p>No modelo cosmológico, é o próprio espaço em grande escala que se expande. Por isso, a analogia de uma bomba explodindo a partir de um ponto central do espaço é inadequada.</p></div>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Expansão observada</strong><p>Em grande escala, observações de galáxias mostram um padrão consistente com o afastamento cosmológico.</p></div>
        <div class="example-box"><strong class="card-title">Radiação cósmica de fundo</strong><p>Uma radiação muito antiga permeia o Universo e é uma evidência importante de um passado quente e denso.</p></div>
        <div class="example-box"><strong class="card-title">Elementos leves</strong><p>As abundâncias observadas de elementos leves são compatíveis com previsões de processos ocorridos no Universo primordial.</p></div>
      </div>
    </section>

    <section>
      <h3>6. Expansão do Universo: uma analogia útil, mas limitada</h3>
      <p>Uma forma de visualizar a expansão é imaginar pontos desenhados na superfície de um balão enquanto ele infla. Cada ponto vê os outros se afastarem. A analogia ajuda a compreender que a distância entre regiões pode aumentar sem exigir que exista um “centro da expansão” localizado sobre aquela superfície.</p>

      <svg class="lesson-visual" viewBox="0 0 760 310" role="img" aria-label="Duas etapas de uma malha cósmica com pontos mais afastados na segunda etapa">
        <text x="115" y="35" class="visual-title">antes</text><text x="550" y="35" class="visual-title">depois</text>
        <circle cx="180" cy="155" r="95" fill="#f8fbff" stroke="#70829a" stroke-width="3"/>
        <circle cx="565" cy="155" r="130" fill="#f8fbff" stroke="#70829a" stroke-width="3"/>
        <circle cx="145" cy="120" r="8" fill="#1967d2"/><circle cx="215" cy="115" r="8" fill="#6d4aff"/><circle cx="170" cy="190" r="8" fill="#087f5b"/><circle cx="225" cy="180" r="8" fill="#d08700"/>
        <circle cx="505" cy="100" r="8" fill="#1967d2"/><circle cx="625" cy="95" r="8" fill="#6d4aff"/><circle cx="550" cy="220" r="8" fill="#087f5b"/><circle cx="645" cy="205" r="8" fill="#d08700"/>
        <line x1="145" y1="120" x2="215" y2="115" stroke="#aab9ca" stroke-width="2"/><line x1="505" y1="100" x2="625" y2="95" stroke="#aab9ca" stroke-width="2"/>
        <text x="225" y="290" class="visual-note">a analogia representa distâncias crescendo; o Universo real não precisa ser a superfície de um balão</text>
      </svg>

      <div class="quick-question" data-choice-question data-correct="b"><strong>Interprete o modelo</strong><p>No modelo cosmológico do Big Bang, qual afirmação é mais adequada?</p><div class="choice-row"><button type="button" data-choice="a">Toda matéria explodiu para dentro de um espaço vazio já existente</button><button type="button" data-choice="b">O Universo evoluiu a partir de um estado quente e denso e o espaço em grande escala se expande</button><button type="button" data-choice="c">Existe obrigatoriamente uma borda do Universo se afastando de um centro visível</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa descrição é compatível com o modelo cosmológico moderno em nível introdutório." data-wrong-text="Evite imaginar o Big Bang como uma explosão comum com centro e borda dentro de um espaço preexistente."></div></div>
    </section>

    <section>
      <h3>7. Modelos mudam quando surgem melhores explicações</h3>
      <p>A história da Astronomia mostra que modelos científicos são construídos, testados e aperfeiçoados. Uma explicação nova precisa dar conta das evidências que o modelo anterior explicava e, idealmente, resolver problemas que antes permaneciam abertos.</p>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Modelos geocêntricos</strong><p>Foram usados por longos períodos para organizar observações do céu a partir da Terra.</p></div>
        <div class="example-box"><strong class="card-title">Heliocentrismo + Kepler + Newton</strong><p>O movimento planetário passou a ser descrito com órbitas elípticas e explicado pela interação gravitacional.</p></div>
        <div class="example-box"><strong class="card-title">Cosmologia relativística</strong><p>A relatividade geral permitiu tratar a gravidade e a dinâmica do Universo em escalas onde a descrição newtoniana não é suficiente.</p></div>
      </div>

      <div class="note-box"><strong>Ciência não troca um modelo apenas porque ele é “antigo”</strong><p>Modelos são avaliados pelo poder explicativo, pelas previsões e pela compatibilidade com as evidências. A Física newtoniana continua extremamente útil em muitas situações mesmo existindo uma teoria mais geral.</p></div>
    </section>

    <section>
      <h3>8. Relatividade geral: outra forma de compreender a gravidade</h3>
      <p>Na relatividade geral, desenvolvida por Albert Einstein, a gravidade não é tratada apenas como uma força à distância. Massa e energia estão relacionadas à geometria do <strong>espaço-tempo</strong>, e corpos seguem trajetórias nessa geometria.</p>

      <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Malha curvada ao redor de uma massa central como representação conceitual do espaço-tempo">
        <path d="M90 70 Q380 170 670 70" fill="none" stroke="#c7d2df" stroke-width="2"/><path d="M90 110 Q380 205 670 110" fill="none" stroke="#c7d2df" stroke-width="2"/><path d="M90 150 Q380 235 670 150" fill="none" stroke="#c7d2df" stroke-width="2"/><path d="M90 190 Q380 250 670 190" fill="none" stroke="#c7d2df" stroke-width="2"/>
        <path d="M180 45 Q250 150 180 240" fill="none" stroke="#c7d2df" stroke-width="2"/><path d="M280 45 Q320 165 280 240" fill="none" stroke="#c7d2df" stroke-width="2"/><path d="M480 45 Q440 165 480 240" fill="none" stroke="#c7d2df" stroke-width="2"/><path d="M580 45 Q510 150 580 240" fill="none" stroke="#c7d2df" stroke-width="2"/>
        <circle cx="380" cy="155" r="48" fill="#6d4aff"/>
        <text x="348" y="160" fill="#fff" font-weight="800">massa</text>
        <text x="190" y="278" class="visual-note">representação conceitual: a geometria do espaço-tempo é quadridimensional, não uma “folha” real</text>
      </svg>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Newton continua funcionando</strong><p>Para velocidades bem abaixo da luz e campos gravitacionais não extremos, a gravitação newtoniana fornece resultados muito bons.</p></div>
        <div class="example-box"><strong class="card-title">Einstein amplia a descrição</strong><p>Em situações mais exigentes, a relatividade geral explica efeitos que a teoria de Newton não descreve completamente.</p></div>
      </div>
    </section>

    <section>
      <h3>9. Experimento de modelagem: desenhe uma elipse como Kepler</h3>
      <div class="experiment-box">
        <strong class="card-title">Dois focos, barbante e lápis</strong>
        <ol class="reason-steps">
          <li>Em uma folha apoiada sobre papelão, marque dois pontos separados por alguns centímetros.</li>
          <li>Fixe cuidadosamente dois percevejos nesses pontos e passe um laço de barbante ao redor deles.</li>
          <li>Mantenha o barbante esticado com a ponta do lápis e trace uma volta completa.</li>
          <li>Observe a elipse formada e identifique os dois focos.</li>
          <li>Escolha um dos focos para representar o Sol e compare as distâncias até diferentes pontos da órbita.</li>
        </ol>
        <p class="safety-note"><strong>Segurança:</strong> percevejos devem ser usados apenas com supervisão e sobre uma base adequada. Se isso não for possível, faça a atividade com dois pontos desenhados e um aplicativo de geometria.</p>
      </div>
      <p>A atividade mostra geometricamente por que uma órbita elíptica possui dois focos e por que o Sol não ocupa o centro geométrico da elipse na 1ª lei de Kepler.</p>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>10. Você consegue ligar queda, órbitas e Universo?</h3>

      <div class="quick-question" data-choice-question data-correct="c"><strong>1. Gravidade e distância</strong><p>Se a distância entre dois corpos triplica, mantendo as massas, a força gravitacional fica:</p><div class="choice-row"><button type="button" data-choice="a">3 vezes maior</button><button type="button" data-choice="b">1/3 do valor</button><button type="button" data-choice="c">1/9 do valor</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="F ∝ 1/r², então r × 3 produz F/9." data-wrong-text="A distância aparece elevada ao quadrado no denominador."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>2. Satélite</strong><p>Um satélite em órbita circular da Terra:</p><div class="choice-row"><button type="button" data-choice="a">Está fora da ação da gravidade</button><button type="button" data-choice="b">Está em queda contínua ao redor da Terra</button><button type="button" data-choice="c">Não possui velocidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A gravidade fornece a aceleração que curva continuamente a trajetória." data-wrong-text="Órbita não significa ausência de gravidade."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Kepler</strong><p>Na 1ª lei de Kepler, o Sol fica:</p><div class="choice-row"><button type="button" data-choice="a">Em um dos focos da elipse</button><button type="button" data-choice="b">Sempre no centro geométrico da elipse</button><button type="button" data-choice="c">Fora do plano da órbita</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa é a característica central da 1ª lei." data-wrong-text="Uma elipse possui dois focos; o Sol ocupa um deles."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>4. 2ª lei de Kepler</strong><p>Um planeta se move mais rapidamente quando:</p><div class="choice-row"><button type="button" data-choice="a">Está sempre na mesma velocidade</button><button type="button" data-choice="b">Está mais longe do Sol</button><button type="button" data-choice="c">Está mais perto do Sol</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A lei das áreas implica velocidade orbital maior nas regiões mais próximas do Sol." data-wrong-text="Pense em como áreas iguais precisam ser varridas no mesmo intervalo de tempo."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>5. 3ª lei de Kepler</strong><p>Em torno do mesmo corpo central, uma órbita maior tende a ter:</p><div class="choice-row"><button type="button" data-choice="a">Período menor</button><button type="button" data-choice="b">Período maior</button><button type="button" data-choice="c">Período obrigatoriamente zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="T² ∝ a³: aumentar o tamanho da órbita aumenta o período." data-wrong-text="Relacione o período ao semieixo maior."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>6. Big Bang</strong><p>Qual descrição evita uma interpretação inadequada?</p><div class="choice-row"><button type="button" data-choice="a">Uma bomba explodiu num ponto central de um espaço vazio</button><button type="button" data-choice="b">O Universo evoluiu de um estado quente e denso e o espaço em grande escala se expande</button><button type="button" data-choice="c">O modelo afirma que todas as galáxias saíram de uma única galáxia</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa formulação corresponde melhor ao modelo cosmológico introdutório." data-wrong-text="O Big Bang não deve ser tratado como uma explosão comum dentro de um espaço já pronto."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>7. Modelos científicos</strong><p>Por que a Física newtoniana ainda é usada se existe a relatividade geral?</p><div class="choice-row"><button type="button" data-choice="a">Porque a relatividade foi abandonada</button><button type="button" data-choice="b">Porque Newton explica absolutamente todas as situações</button><button type="button" data-choice="c">Porque Newton é uma excelente aproximação em muitas situações comuns</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Teorias mais gerais não tornam automaticamente inúteis modelos anteriores dentro de seus domínios de validade." data-wrong-text="Compare domínio de validade e precisão necessária."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Relatividade geral</strong><p>Em nível introdutório, a relatividade geral descreve a gravidade relacionando massa e energia com:</p><div class="choice-row"><button type="button" data-choice="a">A geometria do espaço-tempo</button><button type="button" data-choice="b">A inexistência de movimento</button><button type="button" data-choice="c">Uma ausência completa de interação</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A geometria do espaço-tempo é central na descrição relativística da gravidade." data-wrong-text="Retome a seção sobre a ampliação da descrição newtoniana."></div></div>

      <div class="challenge-box"><strong>Desafio MbB — por que um astronauta flutua?</strong><p>Explique por que um astronauta dentro de uma estação orbital parece flutuar mesmo estando sob ação da gravidade terrestre. Sua resposta deve usar as ideias de <strong>queda contínua, velocidade tangencial e órbita</strong>. Depois explique por que dizer simplesmente “lá não existe gravidade” está errado.</p><details><summary>Critérios para conferir sua explicação</summary><p>A estação e o astronauta caem juntos ao redor da Terra. A velocidade tangencial faz com que, enquanto caem, continuem contornando o planeta. A gravidade permanece atuando e fornece a aceleração que curva a trajetória. O que desaparece praticamente é a força normal de apoio que sentimos quando estamos parados sobre uma superfície.</p></details></div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo trabalha os objetos previstos para a 1ª série em <strong>Astronomia e Universo</strong>: Big Bang, expansão do Universo, leis de Kepler, gravitação universal, modelos cosmológicos e relatividade geral. A organização liga esses temas ao estudo dos movimentos e das interações gravitacionais.</p>
    </details>`;

  function initOrbitLab(root) {
    const radius = $('#orbitRadiusRange', root);
    const radiusValue = $('#orbitRadiusValue', root);
    const gravityValue = $('#relativeGravityValue', root);
    const speedValue = $('#relativeSpeedValue', root);
    const periodValue = $('#relativePeriodValue', root);
    const path = $('#orbitPath', root);
    const planet = $('#orbitPlanet', root);
    const conclusion = $('#orbitConclusion', root);
    if (!radius || !radiusValue || !gravityValue || !speedValue || !periodValue || !path || !planet || !conclusion) return;

    const format = (value, digits = 2) => Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

    const draw = () => {
      const r = Number(radius.value);
      const force = 1 / (r * r);
      const speed = 1 / Math.sqrt(r);
      const period = Math.pow(r, 1.5);

      radiusValue.textContent = format(r, 2);
      gravityValue.textContent = format(force);
      speedValue.textContent = format(speed);
      periodValue.textContent = format(period);

      const visualRadius = 55 + ((r - 1) / 4) * 110;
      path.setAttribute('r', visualRadius.toFixed(1));
      planet.setAttribute('cx', (380 + visualRadius).toFixed(1));
      planet.setAttribute('cy', '150');

      if (r < 2) {
        conclusion.textContent = 'Mais perto do corpo central, a atração é mais intensa, a velocidade orbital circular é maior e o período é menor.';
      } else if (r < 4) {
        conclusion.textContent = 'Ao afastar a órbita, a atração cai com 1/r² e o período cresce conforme r^(3/2).';
      } else {
        conclusion.textContent = 'Em uma órbita bem mais distante, a atração é muito menor e o tempo necessário para completar uma volta é muito maior.';
      }
    };

    radius.addEventListener('input', draw);
    draw();
  }

  MBB.enableChapter?.('08 Da queda de uma maçã ao Universo', () => {
    MBB.showLesson({
      unit: 'Terra e Cosmos',
      technical: 'Astronomia • Big Bang • expansão do Universo • Kepler • gravitação universal • modelos cosmológicos • relatividade geral',
      title: 'Da queda de uma maçã ao Universo',
      objective: '<strong>Propósito:</strong> conectar a interação gravitacional ao movimento orbital e compreender como modelos de Kepler, Newton e da cosmologia moderna ajudam a explicar o Sistema Solar e a evolução do Universo.',
      html: lessonHtml,
      init: initOrbitLab
    });
  });
})();