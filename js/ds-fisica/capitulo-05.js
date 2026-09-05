(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Uma história para investigar</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Você chega à praia às 14h. O aplicativo mostra 32 °C. Pisa na areia e tira o pé rapidamente; entra no mar e a água parece muito mais fria.</strong>
        <p>Se “está 32 °C”, como a areia pode parecer tão quente e a água tão diferente? Horas depois, ao anoitecer, acontece quase o contrário: a areia esfria depressa e o mar conserva melhor sua temperatura.</p>
        <div class="quick-question" data-choice-question data-correct="c"><strong>Antes de continuar, faça uma aposta</strong><p>Os 32 °C do aplicativo significam que ar, areia, água, guarda-sol e seu corpo estão todos exatamente a 32 °C?</p><div class="choice-row"><button type="button" data-choice="a">Sim, porque existe uma única temperatura no lugar</button><button type="button" data-choice="b">Sim, desde que esteja fazendo Sol</button><button type="button" data-choice="c">Não; o aplicativo informa uma medida do ar em condições específicas, e diferentes corpos podem ter outras temperaturas</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa distinção será essencial para resolver o mistério da praia." data-wrong-text="Pense no que exatamente o sensor meteorológico está medindo."></div></div>
        <p class="central-question"><strong>Nossa missão:</strong> acompanhar uma tarde na praia e descobrir o que temperatura mede, o que chamamos de calor, por que usamos escalas, por que materiais dilatam e por que areia e água respondem de maneira tão diferente à energia recebida.</p>
      </div>
    </section>

    <section>
      <h3>1. Primeiro precisamos separar sensação de medida</h3>
      <p>Seu pé percebe a areia como “muito quente” e a água como “fria”, mas sensação não é um instrumento de medida. A pele troca energia com o ambiente, e a rapidez dessa troca depende de várias condições.</p>
      <p>A <strong>temperatura</strong> é uma grandeza física associada ao estado térmico. Em uma introdução microscópica, podemos relacioná-la ao grau de agitação das partículas. Já <strong>calor</strong> é energia em transferência por causa de uma diferença de temperatura.</p>
      <div class="note-box"><strong>Uma frase que evita muita confusão</strong><p>Um corpo não “contém calor” como se calor fosse uma substância guardada dentro dele. Quando há diferença de temperatura, pode ocorrer <strong>transferência de energia por calor</strong>.</p></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Contato térmico</strong><p>Se um corpo mais quente é colocado em contato com outro mais frio, qual é o sentido líquido da transferência de energia por calor?</p><div class="choice-row"><button type="button" data-choice="a">Do mais frio para o mais quente</button><button type="button" data-choice="b">Do mais quente para o mais frio</button><button type="button" data-choice="c">Não pode haver transferência</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A transferência líquida ocorre do corpo de maior temperatura para o de menor temperatura até o equilíbrio térmico." data-wrong-text="Pense em qual corpo perde energia e qual ganha."></div></div>
    </section>

    <section>
      <h3>2. “Mas o aplicativo marcou 32 °C”: que temperatura é essa?</h3>
      <p>O valor mostrado pelo aplicativo costuma vir de medições ou modelos meteorológicos referentes à <strong>temperatura do ar</strong>. Para medir o ar adequadamente, o sensor deve ser protegido da radiação solar direta e instalado em condições padronizadas.</p>
      <p>Um termômetro encostado no asfalto, dentro de um carro fechado ou sobre a areia ao Sol pode indicar valores bem diferentes porque está medindo outra condição térmica.</p>
      <div class="two-col"><div class="example-box"><strong class="card-title">Temperatura do ar</strong><p>Grandeza medida por instrumentos em condições meteorológicas apropriadas.</p></div><div class="example-box"><strong class="card-title">Sensação térmica</strong><p>Percepção influenciada por vento, umidade, radiação e trocas de energia com o corpo.</p></div></div>
      <div class="note-box"><strong>Tempo e clima também não são sinônimos</strong><p>O <strong>tempo</strong> descreve condições atmosféricas em curto prazo. O <strong>clima</strong> envolve padrões observados ao longo de períodos muito maiores. Uma tarde quente não define sozinha o clima de uma região.</p></div>
    </section>

    <section>
      <h3>3. Um amigo olha outro aplicativo e diz: “aqui aparece 89,6 °F”</h3>
      <p>O fenômeno físico é o mesmo, mas diferentes escalas usam números diferentes para representar a temperatura. No Brasil é comum usar Celsius; em ciência, Kelvin é fundamental; em alguns países, Fahrenheit aparece no cotidiano.</p>
      <div class="formula-box"><span class="formula-name">Agora as fórmulas têm um motivo: traduzir a mesma condição entre escalas</span><div class="big-formula">K = °C + 273,15 &nbsp;&nbsp; | &nbsp;&nbsp; °F = 1,8·°C + 32</div><p>32 °C correspondem a 305,15 K e 89,6 °F. Em Kelvin não usamos o símbolo de grau.</p></div>
      <div class="interactive-lab" id="scaleLab"><div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Troque a escala sem trocar o fenômeno</h4></div><div class="lab-controls"><label>Temperatura em Celsius <strong><span id="celsiusValue">25</span> °C</strong><input id="celsiusRange" type="range" min="-40" max="100" step="1" value="25"></label></div><div class="lab-result" aria-live="polite"><strong id="kelvinValue">298,15 K</strong><span>e</span><strong id="fahrenheitValue">77 °F</strong></div><p>Experimente 0 °C, 32 °C e 100 °C. A condição física é a mesma; o número muda porque a escala mudou.</p></div>
    </section>

    <section>
      <h3>4. No fim da tarde você atravessa uma passarela e nota pequenos espaços entre peças metálicas</h3>
      <p>Esses espaços não estão ali por descuido. Muitos materiais mudam ligeiramente suas dimensões quando a temperatura varia. Em estruturas longas, uma pequena variação em cada trecho pode se tornar importante.</p>
      <p>Esse fenômeno é a <strong>dilatação térmica</strong>. Ele ocorre em sólidos, líquidos e gases, embora o comportamento de cada material e estado físico tenha particularidades.</p>
      <div class="formula-box"><span class="formula-name">Quando precisamos prever a variação de comprimento de um sólido</span><div class="big-formula">ΔL = L₀ · α · ΔT</div><p>L₀ é o comprimento inicial, ΔT a variação de temperatura e α um coeficiente característico do material no intervalo considerado.</p></div>
      <div class="example-box"><strong class="card-title">Por que o comprimento inicial importa?</strong><p>Duas barras do mesmo material sofrem o mesmo ΔT. Se uma tem 10 vezes o comprimento da outra, sua variação de comprimento também tende a ser 10 vezes maior no mesmo modelo.</p></div>
      <div class="note-box"><strong>E líquidos e gases?</strong><p>Também se expandem com a variação de temperatura. Em líquidos, normalmente analisamos variação de volume; em gases, temperatura, pressão e volume estão fortemente relacionados. Nunca aqueça recipientes fechados improvisados para “testar dilatação”.</p></div>
    </section>

    <section>
      <h3>5. Voltamos à areia e à água: por que uma muda de temperatura tão depressa?</h3>
      <p>Agora já sabemos que temperatura é uma medida e calor é transferência de energia. Falta descobrir por que a mesma exposição ao ambiente pode produzir variações de temperatura muito diferentes em materiais distintos.</p>
      <p>A propriedade que nos ajuda é o <strong>calor específico</strong>: ele indica quanta energia é necessária, por unidade de massa, para produzir determinada variação de temperatura.</p>
      <div class="equation-walk"><div><span>1</span><p>Quanto maior a <strong>massa</strong>, mais material precisa responder.</p></div><div><span>2</span><p>Quanto maior o <strong>calor específico c</strong>, mais energia é necessária para a mesma variação de temperatura por unidade de massa.</p></div><div><span>3</span><p>Queremos relacionar energia transferida e <strong>ΔT</strong>.</p></div></div>
      <div class="formula-box"><span class="formula-name">A relação aparece para quantificar o que vimos na praia</span><div class="big-formula">Q = m · c · ΔT</div><p>Aqui Q representa a energia transferida por calor no processo modelado. Se não houver mudança de estado e as perdas forem desprezadas, podemos usar essa relação para estimar a variação de temperatura.</p></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>Antes da conta</strong><p>Dois materiais de mesma massa recebem a mesma energia. O material com maior calor específico tende a apresentar:</p><div class="choice-row"><button type="button" data-choice="a">maior ΔT</button><button type="button" data-choice="b">menor ΔT</button><button type="button" data-choice="c">sempre a mesma ΔT</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Como ΔT = Q/(m·c), aumentar c reduz a variação de temperatura no mesmo modelo." data-wrong-text="Isole ΔT na relação Q = m·c·ΔT."></div></div>
    </section>

    <section>
      <h3>6. “Então um copo de água e uma piscina reagem do mesmo jeito?”</h3>
      <p>Não. O calor específico é uma propriedade do material, mas o efeito térmico de um corpo inteiro também depende de sua massa. Para representar a quantidade de energia necessária para variar a temperatura de <strong>todo o corpo</strong>, usamos a <strong>capacidade térmica</strong>.</p>
      <div class="formula-box"><span class="formula-name">Capacidade térmica do corpo</span><div class="big-formula">C = Q / ΔT = m · c</div><p>Um corpo maior, feito do mesmo material, possui maior capacidade térmica porque contém mais massa.</p></div>
      <div class="example-box"><strong class="card-title">Exemplo guiado</strong><p>Se um corpo recebe 6.000 J e sua temperatura varia 20 °C, então C = 6.000/20 = <strong>300 J/°C</strong>.</p></div>
    </section>

    <section>
      <h3>7. Laboratório: dê a mesma energia para água, areia e alumínio</h3>
      <div class="interactive-lab" id="heatLab"><div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Compare a variação de temperatura</h4></div><div class="lab-controls"><label>Material <select id="materialSelect"><option value="water">Água</option><option value="sand">Areia seca</option><option value="aluminum">Alumínio</option></select></label><label>Massa <strong><span id="heatMassValue">1,0</span> kg</strong><input id="heatMassRange" type="range" min="0.5" max="5" step="0.5" value="1"></label><label>Energia transferida <strong><span id="heatEnergyValue">20</span> kJ</strong><input id="heatEnergyRange" type="range" min="10" max="100" step="10" value="20"></label></div><div class="lab-result"><strong id="materialName">Água</strong><span>c = <b id="specificHeatValue">4.200 J/(kg·°C)</b></span><span>ΔT ≈ <b id="deltaTempValue">4,8 °C</b></span></div><p id="heatLabConclusion">A água tem calor específico elevado e sua temperatura varia relativamente pouco para a mesma energia por unidade de massa.</p><p>Este é um modelo ideal: desconsidera mudanças de estado e perdas para o ambiente.</p></div>
    </section>

    <section>
      <h3>8. Experimento simples: reproduza uma versão segura do mistério da praia</h3>
      <div class="experiment-box"><strong class="card-title">Água e areia sob a mesma condição ambiental</strong><p>Coloque quantidades semelhantes de água e areia em recipientes rasos e seguros, lado a lado, em local com iluminação solar moderada. Meça as temperaturas iniciais e depois em intervalos regulares.</p><ol class="reason-steps"><li>Use recipientes semelhantes.</li><li>Registre tempo e temperatura numa tabela.</li><li>Compare as variações, não apenas os valores finais.</li><li>Depois leve os recipientes à sombra e observe o resfriamento.</li></ol><p class="safety-note"><strong>Segurança:</strong> não use chama, resistência elétrica improvisada ou recipientes fechados.</p></div>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Voltando para casa</span>
      <h3>9. Você consegue explicar a tarde inteira usando Física?</h3>
      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Temperatura e calor</strong><p>Qual afirmação é correta?</p><div class="choice-row"><button type="button" data-choice="a">Calor é uma substância dentro do corpo</button><button type="button" data-choice="b">Calor é energia em transferência por diferença de temperatura</button><button type="button" data-choice="c">Temperatura mede massa</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Essa distinção é central." data-wrong-text="Volte à situação de contato térmico."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Kelvin</strong><p>25 °C correspondem aproximadamente a:</p><div class="choice-row"><button type="button" data-choice="a">25 K</button><button type="button" data-choice="b">248 K</button><button type="button" data-choice="c">298 K</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="25 + 273,15 ≈ 298,15 K." data-wrong-text="Use K = °C + 273,15."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Fahrenheit</strong><p>0 °C equivalem a:</p><div class="choice-row"><button type="button" data-choice="a">32 °F</button><button type="button" data-choice="b">0 °F</button><button type="button" data-choice="c">273 °F</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="°F = 1,8·0 + 32." data-wrong-text="Use a conversão."></div></div>
      <div class="quick-question" data-choice-question data-correct="b"><strong>4. Ponte</strong><p>Por que estruturas longas podem ter juntas de dilatação?</p><div class="choice-row"><button type="button" data-choice="a">Para aumentar a massa</button><button type="button" data-choice="b">Para acomodar variações dimensionais com a temperatura</button><button type="button" data-choice="c">Para eliminar a gravidade</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Materiais podem expandir e contrair." data-wrong-text="Relacione comprimento e temperatura."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>5. Calor específico</strong><p>Mesma massa, mesma energia: maior c tende a produzir:</p><div class="choice-row"><button type="button" data-choice="a">maior ΔT</button><button type="button" data-choice="b">massa menor</button><button type="button" data-choice="c">menor ΔT</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="ΔT = Q/(m·c)." data-wrong-text="Isole ΔT."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>6. Capacidade térmica</strong><p>Dois corpos do mesmo material; um tem o dobro da massa. Sua capacidade térmica tende a ser:</p><div class="choice-row"><button type="button" data-choice="a">o dobro</button><button type="button" data-choice="b">a metade</button><button type="button" data-choice="c">zero</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="C = m·c." data-wrong-text="Mantenha o material e varie m."></div></div>
      <div class="quick-question" data-choice-question data-correct="c"><strong>7. Aplicativo</strong><p>O termômetro no asfalto marca 48 °C e a estação 33 °C. A melhor leitura é:</p><div class="choice-row"><button type="button" data-choice="a">um dos aparelhos está necessariamente quebrado</button><button type="button" data-choice="b">todo o ar está a 48 °C</button><button type="button" data-choice="c">estão sendo medidas condições térmicas locais diferentes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Superfícies ao Sol podem ter temperatura muito diferente do ar." data-wrong-text="Pergunte o que cada sensor mede."></div></div>
      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Cálculo</strong><p>0,5 kg de água com c = 4.200 J/(kg·°C) recebe 21.000 J. Qual ΔT ideal?</p><div class="choice-row"><button type="button" data-choice="a">10 °C</button><button type="button" data-choice="b">21 °C</button><button type="button" data-choice="c">100 °C</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="ΔT = 21.000/(0,5·4.200) = 10 °C." data-wrong-text="Use Q = m·c·ΔT."></div></div>
      <div class="challenge-box"><strong>Desafio MbB — explique a praia inteira</strong><p>Explique por que areia e água podem atingir temperaturas diferentes durante o dia e esfriar de formas diferentes à noite. Sua resposta deve distinguir temperatura de calor e usar calor específico, massa e transferência de energia. Depois explique por que dizer apenas “a água recebe menos calor” é insuficiente.</p></div>
    </section>

    <details class="curriculum-box"><summary>Conexão com o plano de curso</summary><p>O capítulo trabalha os objetos previstos de <strong>termometria</strong> — temperatura e escalas, condições do ar e clima —, <strong>dilatação térmica</strong> de sólidos, líquidos e gases, além de <strong>capacidade térmica e calor específico</strong>. A ideia de calor aparece como conceito necessário para compreender essas relações.</p></details>
  `;

  function initTemperatureLabs(root) {
    const format=(value,digits=1)=>Number(value).toLocaleString('pt-BR',{minimumFractionDigits:digits,maximumFractionDigits:digits});
    const celsius=$('#celsiusRange',root);
    if(celsius){
      const drawScale=()=>{const C=Number(celsius.value),K=C+273.15,F=1.8*C+32; $('#celsiusValue',root).textContent=format(C,0); $('#kelvinValue',root).textContent=`${format(K,2)} K`; $('#fahrenheitValue',root).textContent=`${format(F,1)} °F`;};
      celsius.addEventListener('input',drawScale); drawScale();
    }
    const materials={water:{name:'Água',c:4200,text:'A água tem calor específico elevado e, neste modelo, sua temperatura varia relativamente pouco para a mesma energia por unidade de massa.'},sand:{name:'Areia seca',c:830,text:'A areia seca tem calor específico bem menor que o da água, então a mesma energia por unidade de massa produz uma variação de temperatura maior.'},aluminum:{name:'Alumínio',c:900,text:'O alumínio também apresenta calor específico muito menor que o da água e responde com variações de temperatura maiores no mesmo modelo ideal.'}};
    const material=$('#materialSelect',root),mass=$('#heatMassRange',root),energy=$('#heatEnergyRange',root);
    if(!material||!mass||!energy)return;
    const drawHeat=()=>{const selected=materials[material.value]||materials.water,m=Number(mass.value),qKJ=Number(energy.value),dT=qKJ*1000/(m*selected.c); $('#materialName',root).textContent=selected.name; $('#heatMassValue',root).textContent=format(m,1); $('#heatEnergyValue',root).textContent=format(qKJ,0); $('#specificHeatValue',root).textContent=`${selected.c.toLocaleString('pt-BR')} J/(kg·°C)`; $('#deltaTempValue',root).textContent=`${format(dT,1)} °C`; $('#heatLabConclusion',root).textContent=selected.text;};
    [material,mass,energy].forEach(input=>input.addEventListener('input',drawHeat)); material.addEventListener('change',drawHeat); drawHeat();
  }

  MBB.enableChapter?.('05 Temperatura não é calor', () => {
    MBB.showLesson({unit:'Energia e matéria',technical:'Termometria • escalas • dilatação térmica • capacidade térmica • calor específico',title:'Temperatura não é calor',objective:'<strong>Propósito:</strong> investigar uma tarde na praia para distinguir temperatura de calor e compreender escalas, dilatação, capacidade térmica e calor específico.',html:lessonHtml,init:initTemperatureLabs});
  });
})();