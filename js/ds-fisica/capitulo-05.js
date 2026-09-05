(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);

  const lessonHtml = `
    <section class="physics-opening">
      <span class="lesson-kicker">Comece por uma situação real</span>
      <div class="hero-box physics-story">
        <strong class="card-title">Na praia, o aplicativo marca 32 °C. A areia queima os pés, mas a água está bem mais fria.</strong>
        <p>Horas depois, a areia esfria rapidamente enquanto o mar permanece relativamente mais quente. O Sol atingiu os dois lugares, mas eles não responderam do mesmo modo.</p>
        <p class="central-question"><strong>Pergunta que vai guiar esta aula:</strong> o que a temperatura realmente mede, por que ela não é a mesma coisa que calor e por que materiais diferentes aquecem e dilatam de formas diferentes?</p>
      </div>
    </section>

    <section>
      <h3>1. Temperatura não é quantidade de calor</h3>
      <p>A <strong>temperatura</strong> indica o estado térmico de um corpo. Em uma interpretação microscópica introdutória, ela está relacionada ao grau de agitação das partículas. Já <strong>calor</strong> é energia sendo transferida entre corpos ou regiões por causa de uma diferença de temperatura.</p>

      <svg class="lesson-visual" viewBox="0 0 760 250" role="img" aria-label="Dois recipientes com partículas menos agitadas e mais agitadas e uma seta de transferência de energia do mais quente para o mais frio">
        <text x="80" y="32" class="visual-title">Menor temperatura</text>
        <rect x="55" y="55" width="235" height="140" rx="16" fill="#eef5ff" stroke="#9fc1ec" stroke-width="2"/>
        <circle cx="105" cy="105" r="8" fill="#1967d2"/><circle cx="160" cy="140" r="8" fill="#1967d2"/><circle cx="220" cy="95" r="8" fill="#1967d2"/><circle cx="245" cy="160" r="8" fill="#1967d2"/><circle cx="120" cy="165" r="8" fill="#1967d2"/>
        <line x1="95" y1="105" x2="114" y2="105" stroke="#1967d2" stroke-width="3"/><line x1="151" y1="140" x2="168" y2="140" stroke="#1967d2" stroke-width="3"/><line x1="211" y1="95" x2="229" y2="95" stroke="#1967d2" stroke-width="3"/>

        <text x="500" y="32" class="visual-title">Maior temperatura</text>
        <rect x="470" y="55" width="235" height="140" rx="16" fill="#fff4ef" stroke="#efb09a" stroke-width="2"/>
        <circle cx="520" cy="105" r="8" fill="#b42318"/><circle cx="575" cy="140" r="8" fill="#b42318"/><circle cx="635" cy="95" r="8" fill="#b42318"/><circle cx="660" cy="160" r="8" fill="#b42318"/><circle cx="535" cy="165" r="8" fill="#b42318"/>
        <line x1="500" y1="105" x2="540" y2="105" stroke="#b42318" stroke-width="3"/><line x1="555" y1="140" x2="595" y2="140" stroke="#b42318" stroke-width="3"/><line x1="615" y1="95" x2="655" y2="95" stroke="#b42318" stroke-width="3"/>

        <line x1="440" y1="125" x2="320" y2="125" stroke="#d08700" stroke-width="5"/>
        <polygon points="320,125 340,114 340,136" fill="#d08700"/>
        <text x="342" y="108" class="visual-note">transferência de energia</text>
        <text x="274" y="230" class="visual-note">O fluxo líquido ocorre do corpo de maior temperatura para o de menor temperatura.</text>
      </svg>

      <div class="note-box"><strong>Uma distinção essencial</strong><p>Um corpo pode ter temperatura alta e pouca energia térmica total, enquanto outro, muito maior, pode estar a uma temperatura menor e envolver muito mais energia. Temperatura não mede “quanto calor existe dentro” de um objeto.</p></div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Verificação rápida</strong>
        <p>Dois corpos com temperaturas diferentes são colocados em contato. Em qual situação ocorre transferência líquida de energia por calor?</p>
        <div class="choice-row"><button type="button" data-choice="a">Do mais frio para o mais quente</button><button type="button" data-choice="b">Do mais quente para o mais frio</button><button type="button" data-choice="c">Não existe transferência</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Enquanto houver diferença de temperatura, a transferência líquida de energia ocorre do mais quente para o mais frio." data-wrong-text="Pense em qual corpo perde energia e qual ganha energia até o equilíbrio térmico."></div>
      </div>
    </section>

    <section>
      <h3>2. Termômetros e escalas: como transformar sensação em medida</h3>
      <p>Nossa sensação térmica não é um instrumento de medida confiável. Um <strong>termômetro</strong> usa alguma propriedade física que varia com a temperatura e associa essa variação a uma escala.</p>

      <svg class="lesson-visual" viewBox="0 0 760 300" role="img" aria-label="Comparação das escalas Celsius, Kelvin e Fahrenheit em três temperaturas de referência">
        <text x="95" y="30" class="visual-title">Celsius</text><text x="345" y="30" class="visual-title">Kelvin</text><text x="585" y="30" class="visual-title">Fahrenheit</text>
        <line x1="135" y1="65" x2="135" y2="250" stroke="#70829a" stroke-width="8" stroke-linecap="round"/>
        <line x1="380" y1="65" x2="380" y2="250" stroke="#70829a" stroke-width="8" stroke-linecap="round"/>
        <line x1="625" y1="65" x2="625" y2="250" stroke="#70829a" stroke-width="8" stroke-linecap="round"/>
        <circle cx="135" cy="250" r="18" fill="#1967d2"/><circle cx="380" cy="250" r="18" fill="#1967d2"/><circle cx="625" cy="250" r="18" fill="#1967d2"/>
        <line x1="115" y1="205" x2="155" y2="205" stroke="#41536b" stroke-width="2"/><text x="72" y="210" class="visual-note">0 °C</text>
        <line x1="360" y1="205" x2="400" y2="205" stroke="#41536b" stroke-width="2"/><text x="302" y="210" class="visual-note">273,15 K</text>
        <line x1="605" y1="205" x2="645" y2="205" stroke="#41536b" stroke-width="2"/><text x="548" y="210" class="visual-note">32 °F</text>
        <line x1="115" y1="90" x2="155" y2="90" stroke="#b42318" stroke-width="2"/><text x="60" y="95" class="visual-note">100 °C</text>
        <line x1="360" y1="90" x2="400" y2="90" stroke="#b42318" stroke-width="2"/><text x="295" y="95" class="visual-note">373,15 K</text>
        <line x1="605" y1="90" x2="645" y2="90" stroke="#b42318" stroke-width="2"/><text x="548" y="95" class="visual-note">212 °F</text>
        <text x="155" y="278" class="visual-note">referências usuais à pressão atmosférica padrão</text>
      </svg>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Celsius (°C)</strong><p>Muito usada no cotidiano no Brasil.</p></div>
        <div class="example-box"><strong class="card-title">Kelvin (K)</strong><p>Escala absoluta usada amplamente em ciência. Não se escreve “grau Kelvin”.</p></div>
        <div class="example-box"><strong class="card-title">Fahrenheit (°F)</strong><p>Usada em alguns países, como os Estados Unidos.</p></div>
      </div>

      <div class="formula-box"><span class="formula-name">Conversões úteis</span><div class="big-formula">K = °C + 273,15 &nbsp;&nbsp; | &nbsp;&nbsp; °F = 1,8·°C + 32</div><p>Uma diferença de 1 K tem o mesmo tamanho de uma diferença de 1 °C.</p></div>

      <div class="interactive-lab" id="scaleLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Converta uma mesma temperatura entre três escalas</h4></div>
        <div class="lab-controls">
          <label>Temperatura em Celsius <strong><span id="celsiusValue">25</span> °C</strong><input id="celsiusRange" type="range" min="-40" max="100" step="1" value="25"></label>
        </div>
        <div class="lab-result" aria-live="polite"><strong id="kelvinValue">298,15 K</strong><span>e</span><strong id="fahrenheitValue">77 °F</strong></div>
        <p>Experimente 0 °C, 25 °C e 100 °C e observe como cada escala representa a mesma condição térmica.</p>
      </div>
    </section>

    <section>
      <h3>3. Temperatura do ar, tempo e clima: medir bem importa</h3>
      <p>Quando um aplicativo informa “32 °C”, ele está se referindo à <strong>temperatura do ar medida em condições meteorológicas controladas</strong>, evitando que o sensor seja aquecido diretamente pelo Sol. Um termômetro deixado sobre o asfalto ou dentro de um carro fechado pode indicar outra temperatura porque está medindo uma situação local diferente.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Temperatura do ar</strong><p>É uma grandeza física medida com instrumentos. Deve ser distinguida da temperatura de superfícies como asfalto, telhado, areia ou lataria.</p></div>
        <div class="example-box"><strong class="card-title">Sensação térmica</strong><p>É uma percepção influenciada por fatores como vento e umidade. Ela não substitui a medida da temperatura do ar.</p></div>
      </div>

      <div class="note-box"><strong>Tempo e clima não são sinônimos</strong><p>O <strong>tempo</strong> descreve condições atmosféricas em curto prazo. O <strong>clima</strong> envolve padrões observados ao longo de períodos muito maiores. Temperaturas medidas ao longo do tempo ajudam a construir essas análises.</p></div>

      <div class="quick-question" data-choice-question data-correct="c">
        <strong>Pense como um investigador</strong>
        <p>Para representar melhor a temperatura do ar, qual situação é mais adequada?</p>
        <div class="choice-row"><button type="button" data-choice="a">Termômetro sobre o capô ao Sol</button><button type="button" data-choice="b">Termômetro encostado no asfalto</button><button type="button" data-choice="c">Sensor protegido da radiação solar direta e em contato com o ar</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Assim reduzimos a influência do aquecimento direto do sensor e medimos melhor o ar ao redor." data-wrong-text="Superfícies expostas ao Sol podem atingir temperaturas muito diferentes da temperatura do ar."></div>
      </div>
    </section>

    <section>
      <h3>4. Dilatação térmica: aquecer pode mudar dimensões</h3>
      <p>Ao variar a temperatura, muitos materiais mudam ligeiramente suas dimensões. Esse efeito é chamado de <strong>dilatação térmica</strong>. Em sólidos, podemos observar mudanças no comprimento, na área e no volume.</p>

      <svg class="lesson-visual" viewBox="0 0 760 260" role="img" aria-label="Barra metálica mais curta em temperatura menor e mais longa em temperatura maior, com junta de dilatação em uma ponte">
        <text x="70" y="35" class="visual-title">Mais fria</text>
        <rect x="70" y="70" width="245" height="32" rx="6" fill="#9fc1ec"/>
        <line x1="70" y1="122" x2="315" y2="122" stroke="#41536b" stroke-width="2"/><text x="160" y="145" class="visual-note">comprimento L₀</text>
        <text x="445" y="35" class="visual-title">Mais quente</text>
        <rect x="420" y="70" width="295" height="32" rx="6" fill="#efb09a"/>
        <line x1="420" y1="122" x2="715" y2="122" stroke="#41536b" stroke-width="2"/><text x="520" y="145" class="visual-note">L₀ + ΔL</text>
        <rect x="100" y="185" width="230" height="28" fill="#70829a"/><rect x="360" y="185" width="230" height="28" fill="#70829a"/>
        <line x1="330" y1="180" x2="360" y2="218" stroke="#d08700" stroke-width="4"/>
        <text x="285" y="243" class="visual-note">espaço previsto para a expansão</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Dilatação linear de muitos sólidos em intervalos moderados de temperatura</span><div class="big-formula">ΔL = L₀ · α · ΔT</div><p><strong>α</strong> depende do material. A fórmula modela a variação de comprimento quando o coeficiente pode ser tratado como aproximadamente constante.</p></div>

      <div class="three-col">
        <div class="example-box"><strong class="card-title">Sólidos</strong><p>Pontes, trilhos, estruturas metálicas e fios precisam considerar pequenas variações dimensionais.</p></div>
        <div class="example-box"><strong class="card-title">Líquidos</strong><p>A variação de volume de um líquido pode ser usada em termômetros de líquido, desde que o recipiente também seja considerado.</p></div>
        <div class="example-box"><strong class="card-title">Gases</strong><p>Ao aquecer um gás, volume e pressão podem mudar. O resultado depende de como o gás está confinado.</p></div>
      </div>

      <div class="quick-question" data-choice-question data-correct="a">
        <strong>Aplicação tecnológica</strong>
        <p>Por que pontes e trilhos podem precisar de espaços ou juntas de dilatação?</p>
        <div class="choice-row"><button type="button" data-choice="a">Para permitir pequenas variações de dimensão com a temperatura</button><button type="button" data-choice="b">Para impedir a ação da gravidade</button><button type="button" data-choice="c">Para reduzir a massa do material a zero</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="A estrutura precisa acomodar expansão e contração térmica sem gerar esforços indesejados." data-wrong-text="Relacione a mudança de temperatura à mudança de dimensões do material."></div>
      </div>
    </section>

    <section>
      <h3>5. Calor específico: por que areia e água respondem de modos diferentes?</h3>
      <p>Volte à praia. Mesmo recebendo energia do ambiente, areia e água não apresentam necessariamente a mesma variação de temperatura. Uma propriedade importante para entender isso é o <strong>calor específico</strong>.</p>

      <svg class="lesson-visual" viewBox="0 0 760 260" role="img" aria-label="Comparação conceitual entre areia e água recebendo a mesma energia e apresentando diferentes variações de temperatura">
        <text x="88" y="32" class="visual-title">Mesma massa de areia</text><text x="470" y="32" class="visual-title">Mesma massa de água</text>
        <rect x="70" y="65" width="250" height="110" rx="14" fill="#fff1c9" stroke="#d7a83a" stroke-width="2"/>
        <rect x="440" y="65" width="250" height="110" rx="14" fill="#e7f3ff" stroke="#69a8df" stroke-width="2"/>
        <text x="145" y="115" class="visual-note">mesma energia Q</text><text x="515" y="115" class="visual-note">mesma energia Q</text>
        <text x="125" y="148" class="visual-title">ΔT maior</text><text x="500" y="148" class="visual-title">ΔT menor</text>
        <line x1="195" y1="205" x2="195" y2="178" stroke="#b42318" stroke-width="5"/><polygon points="195,168 185,184 205,184" fill="#b42318"/>
        <line x1="565" y1="205" x2="565" y2="190" stroke="#1967d2" stroke-width="5"/><polygon points="565,180 555,196 575,196" fill="#1967d2"/>
        <text x="205" y="225" class="visual-note">menor c</text><text x="575" y="225" class="visual-note">maior c</text>
      </svg>

      <div class="formula-box"><span class="formula-name">Aquecimento ou resfriamento sem mudança de estado</span><div class="big-formula">Q = m · c · ΔT</div><p><strong>Q</strong> é a energia transferida por calor, <strong>m</strong> a massa, <strong>c</strong> o calor específico e <strong>ΔT</strong> a variação de temperatura.</p></div>

      <div class="note-box"><strong>O que o valor de c nos diz?</strong><p>Quanto maior o calor específico, mais energia é necessária, por unidade de massa, para produzir a mesma variação de temperatura. A água tem calor específico bem maior que muitos materiais comuns, o que ajuda a explicar por que ela varia de temperatura mais lentamente.</p></div>

      <div class="quick-question" data-choice-question data-correct="b">
        <strong>Compare sem calcular</strong>
        <p>Duas amostras de mesma massa recebem a mesma quantidade de energia. A amostra B tem calor específico maior. Qual tende a apresentar menor variação de temperatura?</p>
        <div class="choice-row"><button type="button" data-choice="a">A amostra A</button><button type="button" data-choice="b">A amostra B</button><button type="button" data-choice="c">As duas obrigatoriamente variam igual</button></div>
        <div class="choice-feedback" data-choice-feedback data-correct-text="Com Q e m iguais, maior c implica menor ΔT." data-wrong-text="Reorganize mentalmente Q = m·c·ΔT e mantenha Q e m constantes."></div>
      </div>
    </section>

    <section>
      <h3>6. Capacidade térmica: agora importa o corpo inteiro</h3>
      <p>O <strong>calor específico</strong> é uma propriedade do material. Já a <strong>capacidade térmica</strong> depende do corpo considerado, inclusive de sua massa.</p>

      <div class="two-col">
        <div class="example-box"><strong class="card-title">Calor específico — c</strong><p>Indica a energia necessária por unidade de massa para variar a temperatura em uma unidade. Unidade típica: J/(kg·°C).</p></div>
        <div class="example-box"><strong class="card-title">Capacidade térmica — C</strong><p>Indica a energia necessária para variar a temperatura daquele corpo em uma unidade. Unidade típica: J/°C.</p></div>
      </div>

      <div class="formula-box"><span class="formula-name">Capacidade térmica</span><div class="big-formula">C = Q / ΔT &nbsp;&nbsp; e &nbsp;&nbsp; C = m · c</div><p>Dois objetos feitos do mesmo material podem ter capacidades térmicas diferentes se tiverem massas diferentes.</p></div>

      <div class="example-box"><strong class="card-title">Exemplo guiado</strong><p>Um corpo recebe 6.000 J e sua temperatura aumenta 20 °C.</p><ol class="reason-steps"><li>Use C = Q/ΔT.</li><li>C = 6.000/20.</li><li><strong>C = 300 J/°C.</strong></li></ol></div>
    </section>

    <section>
      <h3>7. Laboratório interativo: mesma energia, materiais diferentes</h3>
      <div class="interactive-lab" id="specificHeatLab">
        <div class="lab-heading"><span class="lesson-kicker">Laboratório interativo</span><h4>Quanto a temperatura varia?</h4></div>
        <p>O modelo considera aquecimento sem mudança de estado e sem perdas de energia para o ambiente.</p>
        <div class="lab-controls">
          <label>Material <strong><span id="materialName">Água</span></strong><select id="materialSelect"><option value="water">Água</option><option value="sand">Areia seca</option><option value="aluminum">Alumínio</option></select></label>
          <label>Massa <strong><span id="heatMassValue">1,0</span> kg</strong><input id="heatMassRange" type="range" min="0.5" max="5" step="0.5" value="1"></label>
          <label>Energia recebida <strong><span id="heatEnergyValue">42</span> kJ</strong><input id="heatEnergyRange" type="range" min="10" max="100" step="2" value="42"></label>
        </div>
        <div class="lab-result" aria-live="polite"><span>Calor específico aproximado:</span><strong id="specificHeatValue">4.200 J/(kg·°C)</strong><span>Variação de temperatura:</span><strong id="deltaTempValue">10,0 °C</strong></div>
        <p id="heatLabConclusion">Com a água, uma quantidade considerável de energia produz uma variação de temperatura relativamente pequena.</p>
      </div>
    </section>

    <section>
      <h3>8. Experimento simples: compare como materiais aquecem</h3>
      <div class="experiment-box">
        <strong class="card-title">Água e areia sob as mesmas condições</strong>
        <ol class="reason-steps">
          <li>Coloque massas semelhantes de água e areia seca em recipientes semelhantes.</li>
          <li>Deixe os dois inicialmente no mesmo ambiente até estarem em temperaturas próximas.</li>
          <li>Exponha-os juntos a uma fonte suave e segura, como luz solar moderada.</li>
          <li>Meça a temperatura em intervalos regulares com termômetros adequados.</li>
          <li>Compare as curvas de temperatura ao longo do tempo.</li>
        </ol>
        <p class="safety-note"><strong>Segurança:</strong> não use chama, resistência elétrica improvisada nem recipientes que possam superaquecer. A proposta é observar tendências, não atingir temperaturas altas.</p>
      </div>
      <p>O experimento real não entrega exatamente a mesma energia a cada amostra, porque há diferenças de absorção e perdas para o ambiente. Por isso, ele serve para <strong>investigar tendências</strong>, enquanto o laboratório matemático acima isola as variáveis do modelo.</p>
    </section>

    <section class="chapter-checkpoint">
      <span class="lesson-kicker">Checkpoint</span>
      <h3>9. Você consegue distinguir temperatura, calor e resposta térmica?</h3>

      <div class="quick-question" data-choice-question data-correct="b"><strong>1. Conceito</strong><p>Qual afirmação está correta?</p><div class="choice-row"><button type="button" data-choice="a">Temperatura é a quantidade de calor armazenada</button><button type="button" data-choice="b">Calor é energia transferida devido a diferença de temperatura</button><button type="button" data-choice="c">Corpos frios não possuem energia</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Temperatura e calor são grandezas diferentes; calor descreve transferência de energia." data-wrong-text="Retome a distinção conceitual apresentada no início do capítulo."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>2. Kelvin</strong><p>25 °C correspondem aproximadamente a:</p><div class="choice-row"><button type="button" data-choice="a">25 K</button><button type="button" data-choice="b">248 K</button><button type="button" data-choice="c">298 K</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="K = 25 + 273,15 ≈ 298 K." data-wrong-text="Na conversão Celsius → Kelvin, some aproximadamente 273."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>3. Fahrenheit</strong><p>20 °C correspondem a:</p><div class="choice-row"><button type="button" data-choice="a">68 °F</button><button type="button" data-choice="b">52 °F</button><button type="button" data-choice="c">36 °F</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="°F = 1,8·20 + 32 = 68 °F." data-wrong-text="Use °F = 1,8·°C + 32."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>4. Dilatação</strong><p>Uma barra metálica é aquecida dentro de um intervalo em que α pode ser considerado constante. O que tende a ocorrer?</p><div class="choice-row"><button type="button" data-choice="a">Sua massa desaparece</button><button type="button" data-choice="b">Seu comprimento obrigatoriamente diminui</button><button type="button" data-choice="c">Seu comprimento pode aumentar ligeiramente</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Esse é o comportamento descrito pela dilatação linear usual de muitos sólidos." data-wrong-text="Relacione ΔL = L₀·α·ΔT para ΔT positivo e α positivo."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>5. Calor específico</strong><p>Dois corpos de mesma massa recebem a mesma energia. O corpo de menor calor específico tende a:</p><div class="choice-row"><button type="button" data-choice="a">Variar mais sua temperatura</button><button type="button" data-choice="b">Variar menos sua temperatura</button><button type="button" data-choice="c">Manter necessariamente a mesma temperatura</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Com Q e m fixos, diminuir c aumenta ΔT." data-wrong-text="Observe Q = m·c·ΔT."></div></div>

      <div class="quick-question" data-choice-question data-correct="b"><strong>6. Capacidade térmica</strong><p>Um corpo tem C = 500 J/°C. Quanta energia é necessária para aumentar sua temperatura em 4 °C?</p><div class="choice-row"><button type="button" data-choice="a">125 J</button><button type="button" data-choice="b">2.000 J</button><button type="button" data-choice="c">504 J</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="Q = C·ΔT = 500·4 = 2.000 J." data-wrong-text="Capacidade térmica informa energia necessária por unidade de variação de temperatura."></div></div>

      <div class="quick-question" data-choice-question data-correct="c"><strong>7. Temperatura do ar</strong><p>Um termômetro deixado sobre o asfalto ao Sol marca 48 °C enquanto uma estação próxima informa 33 °C. A melhor interpretação é:</p><div class="choice-row"><button type="button" data-choice="a">Uma das medidas precisa estar quebrada</button><button type="button" data-choice="b">Todo o ar está a 48 °C</button><button type="button" data-choice="c">Os instrumentos estão medindo condições térmicas locais diferentes</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="A superfície aquecida pelo Sol pode ficar muito mais quente que o ar medido em condições meteorológicas apropriadas." data-wrong-text="Diferencie temperatura de superfície e temperatura do ar."></div></div>

      <div class="quick-question" data-choice-question data-correct="a"><strong>8. Cálculo térmico</strong><p>0,5 kg de água, com c ≈ 4.200 J/(kg·°C), recebe 21.000 J sem mudar de estado. Qual é aproximadamente a variação de temperatura?</p><div class="choice-row"><button type="button" data-choice="a">10 °C</button><button type="button" data-choice="b">21 °C</button><button type="button" data-choice="c">100 °C</button></div><div class="choice-feedback" data-choice-feedback data-correct-text="ΔT = Q/(m·c) = 21.000/(0,5·4.200) = 10 °C." data-wrong-text="Isole ΔT em Q = m·c·ΔT."></div></div>

      <div class="challenge-box"><strong>Desafio MbB — explique a praia</strong><p>Durante o dia, a areia costuma variar de temperatura mais rapidamente que a água do mar; à noite, a água tende a manter sua temperatura por mais tempo. Explique esse comportamento usando <strong>calor específico, massa, transferência de energia e variação de temperatura</strong>. Depois diga por que apenas afirmar “a água recebe menos calor” não é uma explicação suficiente.</p><details><summary>Critérios para conferir sua explicação</summary><p>Uma boa resposta distingue temperatura de calor, reconhece que diferentes materiais têm diferentes calores específicos e explica que a mesma quantidade de energia por unidade de massa pode produzir variações de temperatura diferentes. Em situações reais, também existem trocas de energia e condições ambientais que tornam o fenômeno mais complexo que o modelo ideal.</p></details></div>
    </section>

    <details class="curriculum-box">
      <summary>Conexão com o plano de curso</summary>
      <p>Este capítulo trabalha os objetos previstos para a 1ª série em <strong>termometria</strong> (temperatura e escalas; condições do ar/clima), <strong>dilatação térmica</strong> de sólidos, líquidos e gases, além de <strong>capacidade térmica e calor específico</strong>. A ideia de calor aparece aqui como conceito necessário para compreender essas relações, sem transformar o capítulo em um estudo separado de todos os processos de transferência térmica.</p>
    </details>`;

  function initTemperatureLabs(root) {
    const format = (value, digits = 1) => Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

    const celsius = $('#celsiusRange', root);
    const celsiusValue = $('#celsiusValue', root);
    const kelvinValue = $('#kelvinValue', root);
    const fahrenheitValue = $('#fahrenheitValue', root);

    if (celsius && celsiusValue && kelvinValue && fahrenheitValue) {
      const drawScale = () => {
        const C = Number(celsius.value);
        const K = C + 273.15;
        const F = 1.8 * C + 32;
        celsiusValue.textContent = format(C, 0);
        kelvinValue.textContent = `${format(K, 2)} K`;
        fahrenheitValue.textContent = `${format(F, 1)} °F`;
      };
      celsius.addEventListener('input', drawScale);
      drawScale();
    }

    const materials = {
      water: { name: 'Água', c: 4200, text: 'A água tem calor específico elevado e, neste modelo, sua temperatura varia relativamente pouco para a mesma energia por unidade de massa.' },
      sand: { name: 'Areia seca', c: 830, text: 'A areia seca tem calor específico bem menor que o da água, então a mesma energia por unidade de massa produz uma variação de temperatura maior.' },
      aluminum: { name: 'Alumínio', c: 900, text: 'O alumínio também apresenta calor específico muito menor que o da água e responde com variações de temperatura maiores no mesmo modelo ideal.' }
    };

    const material = $('#materialSelect', root);
    const mass = $('#heatMassRange', root);
    const energy = $('#heatEnergyRange', root);
    if (!material || !mass || !energy) return;

    const drawHeat = () => {
      const selected = materials[material.value] || materials.water;
      const m = Number(mass.value);
      const qKJ = Number(energy.value);
      const Q = qKJ * 1000;
      const deltaT = Q / (m * selected.c);

      $('#materialName', root).textContent = selected.name;
      $('#heatMassValue', root).textContent = format(m, 1);
      $('#heatEnergyValue', root).textContent = format(qKJ, 0);
      $('#specificHeatValue', root).textContent = `${selected.c.toLocaleString('pt-BR')} J/(kg·°C)`;
      $('#deltaTempValue', root).textContent = `${format(deltaT, 1)} °C`;
      $('#heatLabConclusion', root).textContent = selected.text;
    };

    [material, mass, energy].forEach((input) => input.addEventListener('input', drawHeat));
    material.addEventListener('change', drawHeat);
    drawHeat();
  }

  MBB.enableChapter?.('05 Temperatura não é calor', () => {
    MBB.showLesson({
      unit: 'Energia e matéria',
      technical: 'Termometria • escalas • dilatação térmica • capacidade térmica • calor específico',
      title: 'Temperatura não é calor',
      objective: '<strong>Propósito:</strong> distinguir temperatura de calor, interpretar escalas termométricas e explicar como materiais respondem ao aquecimento por meio da dilatação, da capacidade térmica e do calor específico.',
      html: lessonHtml,
      init: initTemperatureLabs
    });
  });
})();