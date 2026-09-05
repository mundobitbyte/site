(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você chega a um terminal de balsa. Enquanto espera para embarcar, deixa cair uma moeda de aço numa poça e pensa: “aço afunda”. Minutos depois, vê uma embarcação enorme de aço sustentando carros e pessoas.</strong>
        <p>Se o material é o mesmo, por que a moeda afunda e a balsa não? A resposta não cabe numa frase sobre “ser leve” ou “ser oco”. Precisamos entender massa, volume, pressão e as forças que a água exerce sobre o casco.</p>
        <div class="quick-question" data-choice-question data-correct="b"><strong>Antes de continuar, faça uma aposta</strong><p>Um navio flutua simplesmente porque pesa menos do que uma moeda?</p><div class="choice-row"><button type="button" data-choice="a">Sim, navios são sempre mais leves</button><button type="button" data-choice="b">Não; massa sozinha não decide a flutuação</button><button type="button" data-choice="c">Só flutua porque o motor está ligado</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Exato. Precisaremos considerar quanto volume o conjunto ocupa e quanto fluido ele desloca." data-wrong-text="Compare a massa total de um navio com a de uma moeda."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> acompanhar o embarque e descobrir por que o casco flutua, por que a pressão aumenta com a profundidade e como sistemas hidráulicos conseguem multiplicar forças.</p>
      </div>
    </section>

    <section>
      <h3>1. A moeda e o navio obrigam a comparar massa com volume</h3>
      <p>Uma moeda concentra sua massa em um volume pequeno. Já uma balsa, embora tenha enorme massa, ocupa também um volume muito grande porque o casco inclui espaços preenchidos por ar.</p>
      <p>Para comparar essas situações, precisamos saber <strong>quanta massa existe por unidade de volume</strong>. Essa razão é a densidade.</p>
      <div class="formula-box"><span class="formula-name">A fórmula nasce da comparação massa ÷ volume</span><div class="big-formula">ρ = m / V</div><p>No SI, densidade é expressa em kg/m³.</p></div>
      <div class="example-box"><strong class="card-title">Mesmo volume, massas diferentes</strong><p>Dois blocos têm o mesmo tamanho. Um tem 2 kg e o outro 6 kg. O segundo possui três vezes mais massa no mesmo volume, portanto maior densidade.</p></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a previsão</strong><p>Dois objetos têm a mesma massa. A ocupa o dobro do volume de B. Qual tem menor densidade média?</p><div class="choice-row"><button type="button" data-choice="a">A</button><button type="button" data-choice="b">B</button><button type="button" data-choice="c">As duas são necessariamente iguais</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Com a mesma massa, maior volume significa menor densidade média." data-wrong-text="Mantenha m e compare V em ρ = m/V."></div></div>
    </section>

    <section>
      <h3>2. Antes de embarcar, você vê o pneu do carro pressionando a rampa</h3>
      <p>Uma força pode produzir efeitos diferentes dependendo da área em que ela se distribui. É por isso que uma ponta fina pode perfurar com facilidade e uma base larga espalha melhor a carga.</p>
      <p>A grandeza que relaciona força perpendicular e área é a <strong>pressão</strong>.</p>
      <div class="formula-box"><span class="formula-name">Precisamos medir força distribuída por área</span><div class="big-formula">p = F / A</div><p>A unidade é o pascal: 1 Pa = 1 N/m².</p></div>
      <div class="example-box"><strong class="card-title">Mesma força, áreas diferentes</strong><p>Se 600 N atuam sobre 0,020 m², p = 30.000 Pa. Se a mesma força for distribuída pelo dobro da área, a pressão cai pela metade.</p></div>
    </section>

    <section>
      <h3>3. Durante a travessia, você percebe que mergulhar mais fundo muda a sensação nos ouvidos</h3>
      <p>Num líquido em repouso, as regiões mais profundas suportam uma coluna maior de líquido acima. Por isso a pressão aumenta com a profundidade.</p>
      <p>Para comparar dois pontos do mesmo líquido, precisamos considerar a densidade do fluido, a gravidade e a diferença de profundidade.</p>
      <div class="formula-box"><span class="formula-name">Lei de Stevin: variação da pressão com a profundidade</span><div class="big-formula">Δp = ρ · g · h</div><p>Essa expressão fornece o aumento de pressão devido à coluna de fluido. Para pressão absoluta, também precisamos considerar a pressão na superfície.</p></div>
      <div class="example-box"><strong class="card-title">Dois metros abaixo da superfície</strong><p>Na água, use ρ = 1.000 kg/m³ e g ≈ 10 m/s².</p><ol class="reason-steps"><li>h = 2 m.</li><li>Δp = 1.000·10·2.</li><li><strong>Δp = 20.000 Pa</strong>.</li></ol></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>Sem fazer conta</strong><p>No mesmo líquido parado, qual ponto tende a ter maior pressão?</p><div class="choice-row"><button type="button" data-choice="a">O mais próximo da superfície</button><button type="button" data-choice="b">Todos têm a mesma pressão</button><button type="button" data-choice="c">O mais profundo</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Maior profundidade corresponde a maior contribuição ρgh." data-wrong-text="Compare o tamanho da coluna de líquido acima de cada ponto."></div></div>
    </section>

    <section>
      <h3>4. A balsa abre uma plataforma hidráulica para embarcar um veículo</h3>
      <p>Você vê um sistema compacto levantar uma carga pesada e surge outra pergunta: como uma força relativamente pequena pode produzir uma força maior em outro pistão?</p>
      <p>Num fluido confinado e praticamente incompressível, uma variação de pressão aplicada em uma região é transmitida às demais. É o <strong>Princípio de Pascal</strong>.</p>
      <div class="formula-box"><span class="formula-name">Prensa hidráulica ideal</span><div class="big-formula">F₁ / A₁ = F₂ / A₂</div><p>A mesma pressão atuando numa área maior corresponde a uma força maior. Isso não cria energia: o pistão de maior área se desloca menos.</p></div>
      <div class="example-box"><strong class="card-title">Plataforma hidráulica simplificada</strong><p>A₁ = 5 cm², A₂ = 100 cm² e F₁ = 100 N.</p><ol class="reason-steps"><li>100/5 = F₂/100.</li><li>F₂ = 2.000 N.</li><li>A força ficou 20 vezes maior porque a área também ficou 20 vezes maior.</li></ol></div>
    </section>

    <section>
      <h3>5. Agora voltamos ao casco: a água empurra por todos os lados</h3>
      <p>A pressão atua em todas as direções. Como a parte inferior do casco está mais profunda que a superior, as forças de pressão não se cancelam completamente: surge uma resultante para cima.</p>
      <p>Essa resultante é o <strong>empuxo</strong>. O Princípio de Arquimedes diz que seu módulo é igual ao peso do fluido deslocado.</p>
      <div class="formula-box"><span class="formula-name">Empuxo</span><div class="big-formula">E = ρ<sub>fluido</sub> · g · V<sub>deslocado</sub></div><p>Quanto maior o volume de fluido deslocado, maior o empuxo, mantendo fluido e gravidade.</p></div>
      <div class="example-box"><strong class="card-title">Um corpo desloca 0,003 m³ de água</strong><p>E = 1.000·10·0,003 = <strong>30 N</strong>.</p></div>
      <div class="note-box"><strong>O navio não “anula o peso”</strong><p>Quando flutua em repouso, o peso continua atuando para baixo. O empuxo para cima ajusta-se ao volume submerso até equilibrar o peso.</p></div>
    </section>

    <section>
      <h3>6. Finalmente podemos resolver o mistério da moeda e do navio</h3>
      <p>A moeda compacta de aço tem densidade média maior que a água e desloca pouco volume antes de ficar totalmente submersa. O empuxo máximo disponível não equilibra seu peso, então ela afunda.</p>
      <p>O casco oco do navio faz a <strong>densidade média do conjunto</strong> — aço, ar, cargas e espaços internos — ser muito menor do que seria para um bloco maciço de aço. Ele pode deslocar água suficiente para que o empuxo iguale o peso antes de ficar totalmente submerso.</p>
      <div class="three-col"><div class="example-box"><strong class="card-title">ρobj &lt; ρfluido</strong><p>Tende a flutuar parcialmente até E = P.</p></div><div class="example-box"><strong class="card-title">ρobj ≈ ρfluido</strong><p>Pode permanecer submerso em equilíbrio aproximado no modelo ideal.</p></div><div class="example-box"><strong class="card-title">ρobj &gt; ρfluido</strong><p>Tende a afundar se o empuxo máximo não equilibrar o peso.</p></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Agora responda a pergunta inicial</strong><p>Por que um grande navio de aço pode flutuar?</p><div class="choice-row"><button type="button" data-choice="a">Porque o aço perde massa na água</button><button type="button" data-choice="b">Porque a forma do casco permite grande volume deslocado e reduz a densidade média do conjunto</button><button type="button" data-choice="c">Porque a gravidade deixa de atuar</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa é a explicação física central." data-wrong-text="Relacione massa total, volume total e volume de água deslocado."></div></div>
    </section>

    <section>
      <h3>7. Água salgada muda alguma coisa?</h3>
      <p>Sim. A água salgada é um pouco mais densa que a água doce. Pela expressão do empuxo, para o mesmo volume deslocado ela pode produzir empuxo maior.</p>
      <p>Um corpo que já flutua não passa a receber uma força resultante permanente para cima: ele sobe um pouco e passa a deslocar <strong>menos volume</strong> até o empuxo voltar a igualar o peso.</p>
      <div class="quick-question" data-choice-question data-correct="a"><strong>Faça a previsão</strong><p>Ao passar da água doce para água mais salgada, um mesmo corpo flutuante tende a:</p><div class="choice-row"><button type="button" data-choice="a">ficar menos submerso</button><button type="button" data-choice="b">afundar obrigatoriamente</button><button type="button" data-choice="c">perder massa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Fluido mais denso exige menor volume deslocado para equilibrar o mesmo peso." data-wrong-text="Mantenha o peso e observe E = ρgV."></div></div>
    </section>

    <section>
      <h3>8. Laboratório: troque o objeto e o fluido sem sair do terminal</h3>
      <div class="interactive-lab" id="buoyancyLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Densidade, volume deslocado e empuxo</h4></div>
        <div class="lab-controls"><label>Densidade do objeto <strong><span id="objectDensityValue">700</span> kg/m³</strong><input id="objectDensityRange" type="range" min="200" max="1600" step="50" value="700"></label><label>Volume do objeto <strong><span id="objectVolumeValue">5,0</span> L</strong><input id="objectVolumeRange" type="range" min="1" max="10" step="0.5" value="5"></label><label>Fluido <strong><span id="fluidName">Água</span></strong><select id="fluidSelect"><option value="water">Água</option><option value="salt">Água salgada</option><option value="oil">Óleo</option></select></label></div>
        <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Simulação de um bloco em um líquido"><rect id="buoyancyFluid" x="140" y="55" width="480" height="210" rx="12" fill="#e8f5ff" stroke="#6fa9dc" stroke-width="3"/><line x1="140" y1="80" x2="620" y2="80" stroke="#1967d2" stroke-width="3"/><text x="635" y="85" class="visual-note">superfície</text><rect id="buoyancyBlock" x="330" y="53" width="100" height="90" rx="8" fill="#6d4aff" stroke="#49338f" stroke-width="3"/><text x="275" y="295" class="visual-note">compare densidades antes de observar o resultado</text></svg>
        <div class="lab-result" aria-live="polite"><span>Peso:</span><strong id="objectWeightValue">35,0 N</strong><span>Empuxo máximo:</span><strong id="maxBuoyancyValue">50,0 N</strong><span>Submerso:</span><strong id="submergedValue">70%</strong><span>Resultado:</span><strong id="buoyancyStatus">Flutua</strong></div><p id="buoyancyConclusion">O objeto flutua e ajusta a parte submersa até o empuxo igualar seu peso.</p>
      </div>
    </section>

    <section>
      <h3>9. Experimento: transforme a mesma folha de alumínio em dois objetos diferentes</h3>
      <div class="experiment-box"><strong class="card-title">Bola compacta e pequeno casco</strong><ol class="reason-steps"><li>Separe dois pedaços iguais de papel-alumínio.</li><li>Amasse um formando uma bola compacta.</li><li>Modele o outro como um pequeno barco de base larga e bordas elevadas.</li><li>Coloque cada um separadamente numa bacia com pouca água.</li><li>No barquinho, acrescente moedas aos poucos e registre quantas suporta.</li></ol><p class="safety-note"><strong>Segurança:</strong> use recipiente estável, pouca água e objetos leves; seque qualquer derramamento.</p></div>
      <p>A massa do alumínio praticamente não mudou. O que mudou foi a forma e, portanto, quanto volume de água pode ser deslocado antes de o casco encher ou afundar.</p>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Fim da travessia</span>
      <h3>10. Você consegue explicar o que viu no terminal?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Densidade</strong><p>3 kg ocupam 0,003 m³. Qual a densidade?</p><div class="choice-row"><button type="button" data-choice="a">100 kg/m³</button><button type="button" data-choice="b">1.000 kg/m³</button><button type="button" data-choice="c">9.000 kg/m³</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="ρ = 3/0,003 = 1.000 kg/m³." data-wrong-text="Use m/V."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>2. Pressão</strong><p>Mesma força, área menor:</p><div class="choice-row"><button type="button" data-choice="a">pressão maior</button><button type="button" data-choice="b">pressão menor</button><button type="button" data-choice="c">pressão zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="p = F/A." data-wrong-text="Observe o denominador."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>3. Profundidade</strong><p>No mesmo líquido parado, maior profundidade significa:</p><div class="choice-row"><button type="button" data-choice="a">menor pressão</button><button type="button" data-choice="b">mesma pressão sempre</button><button type="button" data-choice="c">maior pressão</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Δp cresce com h." data-wrong-text="Use a Lei de Stevin."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Pascal</strong><p>Numa prensa ideal, maior área de saída permite:</p><div class="choice-row"><button type="button" data-choice="a">criar energia</button><button type="button" data-choice="b">obter maior força</button><button type="button" data-choice="c">eliminar a pressão</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A mesma pressão em área maior corresponde a maior força." data-wrong-text="Compare F/A."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Empuxo</strong><p>0,002 m³ de água deslocada, ρ=1.000 e g=10. Qual E?</p><div class="choice-row"><button type="button" data-choice="a">20 N</button><button type="button" data-choice="b">200 N</button><button type="button" data-choice="c">2 N</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="E = 1.000·10·0,002 = 20 N." data-wrong-text="Use ρgV."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>6. Flutuando</strong><p>Corpo em repouso na superfície, sem tocar o fundo:</p><div class="choice-row"><button type="button" data-choice="a">peso zero</button><button type="button" data-choice="b">empuxo maior para sempre</button><button type="button" data-choice="c">empuxo igual ao peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Equilíbrio vertical: E=P." data-wrong-text="Resultante zero."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>7. Navio</strong><p>O casco oco ajuda porque:</p><div class="choice-row"><button type="button" data-choice="a">remove a massa do aço</button><button type="button" data-choice="b">aumenta o volume total e permite deslocar mais água</button><button type="button" data-choice="c">desliga a gravidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Isso reduz a densidade média e permite empuxo suficiente." data-wrong-text="Compare moeda maciça e casco oco."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Água salgada</strong><p>Um corpo já flutuante entra em água mais densa. Tende a:</p><div class="choice-row"><button type="button" data-choice="a">ficar menos submerso</button><button type="button" data-choice="b">afundar sempre</button><button type="button" data-choice="c">perder peso</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Precisa deslocar menor volume para obter o mesmo empuxo." data-wrong-text="Mantenha P e aumente ρ do fluido."></div></div>
      <div class="challenge-box"><strong>Desafio MbB — projete um pequeno cargueiro</strong><p>Com uma folha de alumínio de massa fixa, proponha um formato capaz de carregar muitas moedas. Explique sua escolha usando volume deslocado, empuxo, peso total e estabilidade. Depois descreva como faria um teste justo entre dois formatos.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo trabalha os objetos previstos de <strong>Hidrostática</strong>: pressão, densidade, Lei de Stevin, Princípio de Pascal e Princípio de Arquimedes/empuxo. A travessia de balsa funciona como fio condutor para integrar os conceitos.</p></details>
  `;

  function initBuoyancyLab(root){
    const objectDensity=$('#objectDensityRange',root),objectVolume=$('#objectVolumeRange',root),fluid=$('#fluidSelect',root),block=$('#buoyancyBlock',root),fluidRect=$('#buoyancyFluid',root);
    if(!objectDensity||!objectVolume||!fluid||!block||!fluidRect)return;
    const fluids={water:{name:'Água',rho:1000,fill:'#e8f5ff'},salt:{name:'Água salgada',rho:1025,fill:'#e3f4ff'},oil:{name:'Óleo',rho:800,fill:'#fff6d9'}};
    const format=(v,d=1)=>Number(v).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
    const draw=()=>{const rhoObj=Number(objectDensity.value),volumeL=Number(objectVolume.value),V=volumeL/1000,selected=fluids[fluid.value]||fluids.water,g=10,mass=rhoObj*V,weight=mass*g,maxE=selected.rho*g*V,ratio=rhoObj/selected.rho,sub=Math.min(100,Math.max(0,ratio*100)); $('#objectDensityValue',root).textContent=rhoObj.toLocaleString('pt-BR'); $('#objectVolumeValue',root).textContent=format(volumeL); $('#fluidName',root).textContent=selected.name; $('#objectWeightValue',root).textContent=`${format(weight)} N`; $('#maxBuoyancyValue',root).textContent=`${format(maxE)} N`; $('#submergedValue',root).textContent=ratio<=1?`${format(sub,0)}%`:'100%'; fluidRect.setAttribute('fill',selected.fill); const status=$('#buoyancyStatus',root),conclusion=$('#buoyancyConclusion',root); if(ratio<.98){block.setAttribute('y',String(Math.max(8,80-(1-ratio)*90))); block.setAttribute('fill','#6d4aff'); status.textContent='Flutua'; conclusion.textContent=`Aproximadamente ${format(sub,0)}% do volume fica submerso até o empuxo igualar o peso.`;}else if(ratio<=1.02){block.setAttribute('y','135'); block.setAttribute('fill','#087f5b'); status.textContent='Equilíbrio aproximado'; conclusion.textContent='As densidades são muito próximas; no modelo ideal, o corpo pode ficar praticamente submerso em equilíbrio.';}else{block.setAttribute('y','170'); block.setAttribute('fill','#b42318'); status.textContent='Afunda'; conclusion.textContent='Mesmo totalmente submerso, o empuxo máximo é menor que o peso.';}};
    [objectDensity,objectVolume].forEach(input=>input.addEventListener('input',draw)); fluid.addEventListener('input',draw); fluid.addEventListener('change',draw); draw();
  }

  MBB.enableChapter?.('07 Por que navios flutuam?',()=>{MBB.showLesson({unit:'Equilíbrio e fluidos',technical:'Hidrostática • pressão • densidade • Stevin • Pascal • Arquimedes e empuxo',title:'Por que navios flutuam?',objective:'<strong>Propósito:</strong> acompanhar uma travessia de balsa para relacionar densidade, pressão e empuxo e explicar flutuação e aplicações hidráulicas.',html:lessonHtml,init:initBuoyancyLab});});
})();