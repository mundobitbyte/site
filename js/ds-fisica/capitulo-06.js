(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Na sala de informática da escola, você ajuda a organizar uma prateleira nova para livros e equipamentos leves. Ela está presa à parede por suportes e parece perfeitamente parada.</strong>
        <p>Mas “parada” não significa “sem forças”. O peso puxa tudo para baixo, os suportes reagem, os livros podem ficar mais perto ou mais longe da parede e uma distribuição ruim pode aumentar a tendência de giro.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Se a soma das forças sobre a prateleira for zero, isso sozinho garante que ela não possa começar a girar?</p><div class="choice-row"><button type="button" data-choice="a">Sim, sempre</button><button type="button" data-choice="b">Não; também precisamos analisar a tendência de rotação</button><button type="button" data-choice="c">Só depende da cor da madeira</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. Um corpo rígido pode ter resultante de forças zero e ainda ter torque resultante diferente de zero." data-wrong-text="Pense numa régua empurrada por duas forças opostas aplicadas em pontos diferentes."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> descobrir o que precisa estar equilibrado para a prateleira não cair nem girar, e por que posição das cargas, centro de massa e distância ao apoio fazem diferença.</p>
      </div>
    </section>

    <section>
      <h3>1. Antes de colocar os livros, precisamos aprender a ler as forças como setas</h3>
      <p>Você sabe que a prateleira tem 1,0 m de comprimento e que os livros têm certa massa. Comprimento e massa podem ser descritos por valor e unidade. São <strong>grandezas escalares</strong>.</p>
      <p>Já uma força não fica completamente descrita por “100 N”. Precisamos saber também <strong>direção e sentido</strong>. Por isso força é uma <strong>grandeza vetorial</strong>.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Escalar</strong><p>massa = 5 kg; comprimento = 1,0 m; tempo = 3 s.</p></div><div class="example-box"><strong class="card-title">Vetorial</strong><p>força = 100 N verticalmente para baixo; força = 80 N para a direita.</p></div></div>
      <div class="note-box"><strong>Revisão importante</strong><p>Grandezas escalares e vetoriais já foram apresentadas como ferramenta no início do curso. Aqui elas voltam porque, em Estática, somar forças exige considerar direção e sentido.</p></div>
    </section>

    <section>
      <h3>2. A prateleira não sobe nem desce: o primeiro equilíbrio aparece</h3>
      <p>Imagine que prateleira e livros exercem um peso total de 300 N para baixo. Os suportes e fixações precisam fornecer, em conjunto, uma ação vertical equivalente para cima se o sistema permanecer sem aceleração vertical.</p>
      <p>Não significa que “não existem forças”; significa que a <strong>soma vetorial</strong> delas é nula.</p>
      <div class="formula-box"><span class="formula-name">Condição de equilíbrio de translação</span><div class="big-formula">ΣF<sub>x</sub> = 0 &nbsp;&nbsp; e &nbsp;&nbsp; ΣF<sub>y</sub> = 0</div><p>Quando a força resultante é zero, a aceleração translacional é zero.</p></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Leia a situação</strong><p>Duas forças horizontais de 50 N atuam em sentidos opostos sobre uma caixa parada. Qual é a resultante horizontal?</p><div class="choice-row"><button type="button" data-choice="a">100 N</button><button type="button" data-choice="b">50 N</button><button type="button" data-choice="c">0 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Mesmo módulo e sentidos opostos: resultante zero nessa direção." data-wrong-text="Some vetores, não apenas números positivos."></div></div>
    </section>

    <section>
      <h3>3. Você coloca todos os livros na ponta da prateleira — e surge um problema novo</h3>
      <p>Mesmo que o peso total dos livros seja o mesmo, colocar a carga longe da parede aumenta a tendência de girar a prateleira em torno da região de apoio. A força não mudou; mudou a <strong>distância até o eixo</strong>.</p>
      <p>É a mesma razão pela qual empurrar uma porta pela maçaneta é mais eficiente do que empurrá-la perto da dobradiça.</p>
      <div class="equation-walk"><div><span>1</span><p>Existe uma força F.</p></div><div><span>2</span><p>Ela atua a uma distância perpendicular d<sub>⊥</sub> do eixo.</p></div><div><span>3</span><p>Precisamos medir a tendência de rotação produzida por esse conjunto.</p></div></div>
      <div class="formula-box"><span class="formula-name">Essa medida recebe o nome de momento ou torque</span><div class="big-formula">τ = F · d<sub>⊥</sub></div><p>A unidade é N·m. Embora N·m tenha as mesmas dimensões de J, <strong>torque não é energia</strong>.</p></div>
      <div class="example-box"><strong class="card-title">Os mesmos 120 N em dois lugares</strong><p>Se os livros exercem 120 N:</p><ol class="reason-steps"><li>a 0,25 m do apoio: τ = 120·0,25 = <strong>30 N·m</strong>;</li><li>a 0,75 m do apoio: τ = 120·0,75 = <strong>90 N·m</strong>.</li></ol><p>A força é a mesma; a tendência de giro triplicou porque a distância triplicou.</p></div>
    </section>

    <section>
      <h3>4. Então a prateleira precisa equilibrar duas coisas ao mesmo tempo</h3>
      <p>Para permanecer em equilíbrio estático no plano, não basta impedir a translação. Também precisamos impedir aceleração angular. Isso exige que os torques horários e anti-horários se compensem.</p>
      <div class="formula-box"><span class="formula-name">Condição de equilíbrio rotacional</span><div class="big-formula">Στ = 0</div><p>Podemos adotar, por convenção, anti-horário como positivo e horário como negativo. O importante é usar a mesma convenção até o fim.</p></div>
      <div class="note-box"><strong>Agora temos o equilíbrio completo</strong><p>Em Estática no plano: <strong>ΣF = 0</strong> impede aceleração de translação e <strong>Στ = 0</strong> impede aceleração de rotação.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a conta depois da ideia</strong><p>Uma força de 200 N atua perpendicularmente a 3 m do eixo. Qual é o torque em módulo?</p><div class="choice-row"><button type="button" data-choice="a">600 N·m</button><button type="button" data-choice="b">203 N·m</button><button type="button" data-choice="c">66,7 N·m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="τ = 200·3 = 600 N·m." data-wrong-text="Multiplique força pela distância perpendicular."></div></div>
    </section>

    <section>
      <h3>5. Agora você distribui os livros: onde fica o “ponto médio da massa” do conjunto?</h3>
      <p>Se todos os livros tivessem a mesma massa e estivessem distribuídos simetricamente, o centro de massa ficaria próximo do centro geométrico. Mas se colocarmos livros muito mais pesados de um lado, ele se desloca para esse lado.</p>
      <p>O <strong>centro de massa</strong> é um ponto útil para representar a distribuição da massa de um corpo ou sistema.</p>
      <div class="formula-box"><span class="formula-name">Para massas posicionadas ao longo de um eixo</span><div class="big-formula">x<sub>cm</sub> = Σ(m·x) / Σm</div><p>É uma média das posições ponderada pelas massas: a massa maior “pesa mais” no cálculo.</p></div>
      <div class="example-box"><strong class="card-title">Dois conjuntos de livros</strong><p>2 kg estão em x = 0 m e 1 kg em x = 3 m.</p><ol class="reason-steps"><li>x<sub>cm</sub> = (2·0 + 1·3)/(2+1).</li><li>x<sub>cm</sub> = 3/3.</li><li><strong>x<sub>cm</sub> = 1 m.</strong></li></ol><p>O centro de massa ficou mais perto da massa maior.</p></div>
    </section>

    <section>
      <h3>6. Você percebe por que uma estante alta e estreita tomba mais facilmente</h3>
      <p>O raciocínio do centro de massa também ajuda a entender estabilidade. Enquanto a projeção vertical do centro de massa permanece dentro da <strong>base de apoio</strong>, o peso não produz um torque de tombamento capaz de levar o corpo para fora dessa base.</p>
      <p>Quando essa projeção ultrapassa a borda, surge uma tendência de tombamento. Por isso baixar o centro de massa ou aumentar a base costuma aumentar a estabilidade.</p>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Aplicação</strong><p>Qual mudança tende a aumentar a estabilidade de um objeto alto?</p><div class="choice-row"><button type="button" data-choice="a">Elevar ainda mais o centro de massa</button><button type="button" data-choice="b">Aumentar a base de apoio e/ou baixar o centro de massa</button><button type="button" data-choice="c">Eliminar a massa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso aumenta a margem antes que a projeção do centro de massa ultrapasse a base." data-wrong-text="Pense em quanto o corpo pode inclinar antes de a projeção sair da base."></div></div>
    </section>

    <section>
      <h3>7. Antes de confiar a prateleira aos livros, testamos o princípio numa gangorra</h3>
      <div class="interactive-lab" id="torqueLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Equilibre força e distância</h4></div>
        <p>A gangorra é um modelo simples para enxergar torques em sentidos opostos. Antes de mover um controle, tente prever para qual lado ela tenderá a girar.</p>
        <div class="torque-lab-controls"><label>Força à esquerda <strong><span id="leftForceValue">300</span> N</strong><input id="leftForceRange" type="range" min="100" max="800" step="50" value="300"></label><label>Distância à esquerda <strong><span id="leftDistanceValue">2,0</span> m</strong><input id="leftDistanceRange" type="range" min="0.5" max="3" step="0.5" value="2"></label><label>Força à direita <strong><span id="rightForceValue">600</span> N</strong><input id="rightForceRange" type="range" min="100" max="800" step="50" value="600"></label><label>Distância à direita <strong><span id="rightDistanceValue">1,0</span> m</strong><input id="rightDistanceRange" type="range" min="0.5" max="3" step="0.5" value="1"></label></div>
        <div class="torque-lab-scene" aria-hidden="true"><div id="torqueBeam" class="torque-beam"><span class="torque-load left">↓</span><span class="torque-load right">↓</span></div><div class="torque-pivot">▲</div></div>
        <div class="torque-results"><div><span>Torque anti-horário</span><strong id="leftTorqueValue">600 N·m</strong></div><div><span>Torque horário</span><strong id="rightTorqueValue">600 N·m</strong></div><div><span>Situação</span><strong id="torqueStatus">Equilíbrio rotacional</strong></div></div><p id="torqueConclusion">Os torques têm mesmo módulo e sentidos opostos.</p>
      </div>
    </section>

    <section>
      <h3>8. Faça isso de verdade com objetos leves</h3>
      <div class="experiment-box"><strong class="card-title">Régua, lápis e moedas</strong><ol class="reason-steps"><li>Apoie uma régua horizontalmente sobre um lápis colocado perpendicularmente a ela.</li><li>Encontre aproximadamente o ponto de equilíbrio da régua.</li><li>Coloque uma moeda perto de uma extremidade.</li><li>Na outra extremidade, mova outra moeda até recuperar o equilíbrio.</li><li>Compare distância ao apoio e tendência de giro.</li></ol><p class="safety-note"><strong>Segurança:</strong> use apenas objetos leves sobre uma mesa; não use vidro, lâminas ou objetos pesados.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Antes de terminar a organização</span>
      <h3>9. Você consegue justificar onde colocar as cargas?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Vetor</strong><p>Qual grandeza precisa de módulo, direção e sentido?</p><div class="choice-row"><button type="button" data-choice="a">Massa</button><button type="button" data-choice="b">Força</button><button type="button" data-choice="c">Temperatura</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Força é vetorial." data-wrong-text="Procure a grandeza representada por seta."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Translação</strong><p>70 N para a direita e 70 N para a esquerda produzem resultante:</p><div class="choice-row"><button type="button" data-choice="a">140 N</button><button type="button" data-choice="b">70 N</button><button type="button" data-choice="c">0 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="As forças se cancelam nessa direção." data-wrong-text="Considere o sentido."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Torque</strong><p>40 N atuam perpendicularmente a 0,5 m do eixo. Qual o torque?</p><div class="choice-row"><button type="button" data-choice="a">20 N·m</button><button type="button" data-choice="b">40,5 N·m</button><button type="button" data-choice="c">80 N·m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="τ = 40·0,5 = 20 N·m." data-wrong-text="Use F·d⊥."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Equilíbrio completo</strong><p>Para equilíbrio estático no plano:</p><div class="choice-row"><button type="button" data-choice="a">basta ΣF=0</button><button type="button" data-choice="b">precisamos ΣF=0 e Στ=0</button><button type="button" data-choice="c">basta Στ=0</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="É preciso impedir translação e rotação." data-wrong-text="Analise os dois tipos de movimento."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Gangorra</strong><p>300 N a 2 m equilibram 600 N a qual distância?</p><div class="choice-row"><button type="button" data-choice="a">0,5 m</button><button type="button" data-choice="b">2 m</button><button type="button" data-choice="c">1 m</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="300·2 = 600·1 = 600 N·m." data-wrong-text="Iguale os torques."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Centro de massa</strong><p>Entre duas massas diferentes, o centro de massa tende a ficar:</p><div class="choice-row"><button type="button" data-choice="a">mais próximo da massa maior</button><button type="button" data-choice="b">sempre no meio geométrico</button><button type="button" data-choice="c">sempre fora do sistema</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A média é ponderada pela massa." data-wrong-text="A maior massa influencia mais."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Estabilidade</strong><p>Um corpo tende a tombar quando:</p><div class="choice-row"><button type="button" data-choice="a">o peso zera</button><button type="button" data-choice="b">a projeção do centro de massa ultrapassa a base</button><button type="button" data-choice="c">o centro de massa abaixa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Fora da base, o peso produz torque de tombamento." data-wrong-text="Observe a projeção vertical do centro de massa."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>8. Ferramenta</strong><p>Por que um cabo mais longo facilita girar uma porca com a mesma força?</p><div class="choice-row"><button type="button" data-choice="a">reduz a massa da porca</button><button type="button" data-choice="b">elimina o peso</button><button type="button" data-choice="c">aumenta o braço de alavanca e o torque</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Maior distância perpendicular → maior torque." data-wrong-text="Compare τ = F·d⊥."></div></div>
      <div class="challenge-box"><strong>Desafio MbB — volte à prateleira</strong><p>Um conjunto de livros exerce peso de 120 N a 0,75 m do apoio. Calcule o torque e explique, em palavras, por que aproximar os livros da parede reduz a tendência de giro. Depois diga quais outras informações reais seriam necessárias para decidir se a prateleira é segura.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo trabalha os objetos previstos de <strong>Estática</strong>: equilíbrio dos sólidos, centro de massa, momento ou torque e grandezas escalares e vetoriais. As grandezas escalares e vetoriais são retomadas no contexto em que se tornam necessárias para analisar forças e torques.</p></details>
  `;

  function initTorqueLab(root){
    const leftForce=$('#leftForceRange',root),leftDistance=$('#leftDistanceRange',root),rightForce=$('#rightForceRange',root),rightDistance=$('#rightDistanceRange',root),beam=$('#torqueBeam',root);
    if(!leftForce||!leftDistance||!rightForce||!rightDistance||!beam)return;
    const format=(value,digits=0)=>Number(value).toLocaleString('pt-BR',{minimumFractionDigits:digits,maximumFractionDigits:digits});
    const draw=()=>{const fL=Number(leftForce.value),dL=Number(leftDistance.value),fR=Number(rightForce.value),dR=Number(rightDistance.value),tL=fL*dL,tR=fR*dR,diff=tL-tR; $('#leftForceValue',root).textContent=format(fL); $('#leftDistanceValue',root).textContent=format(dL,1); $('#rightForceValue',root).textContent=format(fR); $('#rightDistanceValue',root).textContent=format(dR,1); $('#leftTorqueValue',root).textContent=`${format(tL)} N·m`; $('#rightTorqueValue',root).textContent=`${format(tR)} N·m`; beam.style.transform=`rotate(${Math.max(-8,Math.min(8,diff/80))}deg)`; const status=$('#torqueStatus',root),conclusion=$('#torqueConclusion',root); if(Math.abs(diff)<=0.5){status.textContent='Equilíbrio rotacional'; conclusion.textContent='Os torques têm mesmo módulo e sentidos opostos. A soma dos torques é zero.';}else if(diff>0){status.textContent='Lado esquerdo domina'; conclusion.textContent=`O torque anti-horário é ${format(Math.abs(diff))} N·m maior.`;}else{status.textContent='Lado direito domina'; conclusion.textContent=`O torque horário é ${format(Math.abs(diff))} N·m maior.`;}};
    [leftForce,leftDistance,rightForce,rightDistance].forEach(input=>input.addEventListener('input',draw)); draw();
  }

  MBB.enableChapter?.('06 Como as coisas ficam em equilíbrio',()=>{MBB.showLesson({unit:'Equilíbrio e fluidos',technical:'Estática • grandezas escalares e vetoriais • equilíbrio • torque • centro de massa',title:'Como as coisas ficam em equilíbrio',objective:'<strong>Propósito:</strong> investigar uma prateleira real para compreender como forças, torques e centro de massa determinam equilíbrio e estabilidade.',html:lessonHtml,init:initTorqueLab});});
})();