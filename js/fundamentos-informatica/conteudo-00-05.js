window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push(
  {
    id: 'diagnostico',
    number: '00',
    unit: 'Começo',
    menuTitle: 'Diagnóstico',
    technicalTitle: 'Seu ponto de partida',
    title: 'Avaliação diagnóstica',
    objective: 'Propósito: descobrir o que já está firme e quais ideias merecem mais atenção. Não vale nota.',
    content: `
      <div class="hero-box">
        <span class="card-title">Antes de começar, descubra o que já faz sentido</span>
        <p>Você não precisa chegar aqui lembrando de tudo. Use o celular, o computador e a Internet há anos e, ainda assim, algumas palavras podem continuar meio soltas: RAM, DNS, hardware, roteador...</p>
        <p>Faça as questões sem pesquisar. O resultado não é uma nota; é apenas um retrato do começo para que as próximas aulas tenham mais sentido.</p>
      </div>

      <h3>Responda com o que você sabe agora</h3>
      <p>Se alguma resposta estiver errada, ótimo: encontramos um ponto que vale compreender melhor.</p>

      <div class="quiz-item" data-diagnostic-question data-answer="b">
        <p>1. Qual alternativa descreve melhor a memória RAM?</p>
        <label><input type="radio" name="d1" value="a"> É onde os arquivos ficam guardados permanentemente.</label>
        <label><input type="radio" name="d1" value="b"> É uma área rápida de trabalho usada enquanto programas e dados estão em uso.</label>
        <label><input type="radio" name="d1" value="c"> É o componente que fornece acesso à Internet.</label>
      </div>

      <div class="quiz-item" data-diagnostic-question data-answer="c">
        <p>2. Quando você digita mundobitbyte.com.br, qual serviço ajuda a descobrir o endereço IP do servidor?</p>
        <label><input type="radio" name="d2" value="a"> Bluetooth</label>
        <label><input type="radio" name="d2" value="b"> HDMI</label>
        <label><input type="radio" name="d2" value="c"> DNS</label>
      </div>

      <div class="quiz-item" data-diagnostic-question data-answer="a">
        <p>3. Hardware e software são:</p>
        <label><input type="radio" name="d3" value="a"> partes físicas e instruções/programas que trabalham em conjunto.</label>
        <label><input type="radio" name="d3" value="b"> dois tipos diferentes de Internet.</label>
        <label><input type="radio" name="d3" value="c"> nomes diferentes para a mesma coisa.</label>
      </div>

      <div class="quiz-item" data-diagnostic-question data-answer="b">
        <p>4. Um roteador doméstico serve principalmente para:</p>
        <label><input type="radio" name="d4" value="a"> aumentar a memória do computador.</label>
        <label><input type="radio" name="d4" value="b"> encaminhar dados entre redes e permitir que dispositivos da rede local se comuniquem com outras redes.</label>
        <label><input type="radio" name="d4" value="c"> armazenar permanentemente todos os sites acessados.</label>
      </div>

      <div class="quiz-item" data-diagnostic-question data-answer="c">
        <p>5. Por que um smartphone pode ser considerado um computador?</p>
        <label><input type="radio" name="d5" value="a"> Porque possui uma tela sensível ao toque.</label>
        <label><input type="radio" name="d5" value="b"> Porque se conecta à Internet.</label>
        <label><input type="radio" name="d5" value="c"> Porque possui processador e memória, executa programas armazenados e manipula dados.</label>
      </div>

      <div class="quiz-actions">
        <button class="action-button primary" type="button" id="checkDiagnostic">Ver meu ponto de partida</button>
      </div>
      <div id="diagnosticResult" class="quiz-result" aria-live="polite"></div>

      <div class="note-box">
        <span class="card-title">Guarde esta ideia</span>
        <p>No fim do módulo, palavras que hoje podem parecer assuntos separados deverão formar uma história única: ligar uma máquina, executar programas, representar dados, comunicar-se em rede e resolver problemas.</p>
      </div>
    `
  },
  {
    id: 'computador',
    number: '01',
    unit: 'Fundamentos',
    menuTitle: 'Computador',
    technicalTitle: 'Computadores • sistemas especializados • periféricos',
    title: 'O que é um computador?',
    objective: 'Propósito: construir um critério claro para reconhecer um computador e distinguir computadores de propósito geral, sistemas especializados e periféricos.',
    content: `
      <div class="hero-box">
        <span class="card-title">A aparência engana</span>
        <p>Se eu colocar um notebook na sua frente e perguntar “isso é um computador?”, a resposta parece óbvia.</p>
        <p>Mas e um smartphone? Um videogame? Um roteador Wi-Fi? Uma Smart TV? Uma placa Arduino? E um teclado?</p>
        <p>Se dissermos que computador é apenas aquilo que tem monitor, teclado e gabinete, vamos excluir máquinas que claramente fazem computação. Se chamarmos qualquer aparelho eletrônico de computador, a palavra perde o sentido.</p>
        <p><strong>Então precisamos de um critério melhor do que a aparência.</strong></p>
      </div>

      <figure class="device-figure" aria-labelledby="deviceFigureTitle">
        <figcaption id="deviceFigureTitle">O formato muda bastante — o critério ainda não apareceu</figcaption>
        <div class="device-visual-grid">
          <div class="device-visual-card">
            <svg viewBox="0 0 96 72" aria-hidden="true"><rect x="19" y="9" width="58" height="40" rx="4"/><path d="M11 57h74l-7 7H18z"/></svg>
            <strong>Notebook</strong><span>O que ele é?</span>
          </div>
          <div class="device-visual-card">
            <svg viewBox="0 0 96 72" aria-hidden="true"><rect x="34" y="5" width="28" height="60" rx="6"/><line x1="41" y1="12" x2="55" y2="12"/><circle cx="48" cy="58" r="2"/></svg>
            <strong>Smartphone</strong><span>O que ele é?</span>
          </div>
          <div class="device-visual-card">
            <svg viewBox="0 0 96 72" aria-hidden="true"><path d="M27 27h42c8 0 14 10 12 21l-2 10c-1 6-8 8-12 3l-9-10H38l-9 10c-4 5-11 3-12-3l-2-10c-2-11 4-21 12-21z"/><line x1="31" y1="35" x2="31" y2="47"/><line x1="25" y1="41" x2="37" y2="41"/><circle cx="64" cy="38" r="3"/><circle cx="71" cy="45" r="3"/></svg>
            <strong>Console</strong><span>O que ele é?</span>
          </div>
          <div class="device-visual-card">
            <svg viewBox="0 0 96 72" aria-hidden="true"><rect x="18" y="37" width="60" height="22" rx="4"/><line x1="31" y1="37" x2="31" y2="14"/><line x1="48" y1="37" x2="48" y2="9"/><line x1="65" y1="37" x2="65" y2="14"/><circle cx="29" cy="49" r="2"/><circle cx="37" cy="49" r="2"/></svg>
            <strong>Roteador</strong><span>O que ele é?</span>
          </div>
          <div class="device-visual-card">
            <svg viewBox="0 0 96 72" aria-hidden="true"><rect x="18" y="16" width="60" height="40" rx="4"/><rect x="38" y="27" width="20" height="16" rx="2"/><line x1="23" y1="23" x2="31" y2="23"/><line x1="23" y1="31" x2="31" y2="31"/><line x1="65" y1="24" x2="73" y2="24"/><line x1="65" y1="32" x2="73" y2="32"/></svg>
            <strong>Arduino</strong><span>O que ele é?</span>
          </div>
          <div class="device-visual-card">
            <svg viewBox="0 0 96 72" aria-hidden="true"><rect x="12" y="23" width="56" height="28" rx="3"/><path d="M18 30h44M18 36h44M18 42h44"/><ellipse cx="79" cy="42" rx="8" ry="13"/></svg>
            <strong>Teclado e mouse</strong><span>O que eles são?</span>
          </div>
        </div>
      </figure>

      <h3>1. Antes da resposta, faça sua aposta</h3>
      <p>Classifique os itens abaixo. Não se preocupe em acertar todos agora: a atividade existe justamente para revelar onde a fronteira fica confusa.</p>

      <div class="task-box">
        <span class="card-title">Investigação rápida</span>
        <div class="classifier" id="deviceClassifier">
          <label class="classifier-row" data-answer="geral" data-explanation="Notebook é um computador de propósito geral: pode executar muitos tipos diferentes de programas."><strong>Notebook</strong><select><option value="">Escolha...</option><option value="geral">Computador de propósito geral</option><option value="especializado">Computador/sistema especializado</option><option value="periferico">Periférico</option></select></label>
          <label class="classifier-row" data-answer="geral" data-explanation="Smartphone também é um computador de propósito geral: possui processador, memória, sistema operacional e executa aplicativos variados."><strong>Smartphone</strong><select><option value="">Escolha...</option><option value="geral">Computador de propósito geral</option><option value="especializado">Computador/sistema especializado</option><option value="periferico">Periférico</option></select></label>
          <label class="classifier-row" data-answer="especializado" data-explanation="Um console é um computador especializado, projetado principalmente para executar jogos e serviços relacionados."><strong>Console de videogame</strong><select><option value="">Escolha...</option><option value="geral">Computador de propósito geral</option><option value="especializado">Computador/sistema especializado</option><option value="periferico">Periférico</option></select></label>
          <label class="classifier-row" data-answer="especializado" data-explanation="Um roteador contém processador, memória e firmware, mas foi projetado para uma função específica: encaminhar e controlar tráfego de rede."><strong>Roteador Wi-Fi</strong><select><option value="">Escolha...</option><option value="geral">Computador de propósito geral</option><option value="especializado">Computador/sistema especializado</option><option value="periferico">Periférico</option></select></label>
          <label class="classifier-row" data-answer="especializado" data-explanation="Uma placa Arduino contém um microcontrolador programável. É uma plataforma de computação embarcada, feita para controlar circuitos, sensores e atuadores."><strong>Arduino</strong><select><option value="">Escolha...</option><option value="geral">Computador de propósito geral</option><option value="especializado">Computador/sistema especializado</option><option value="periferico">Periférico</option></select></label>
          <label class="classifier-row" data-answer="periferico" data-explanation="Um teclado participa do sistema como dispositivo de entrada. Ele não é, por si só, o computador que executa os programas do usuário."><strong>Teclado comum</strong><select><option value="">Escolha...</option><option value="geral">Computador de propósito geral</option><option value="especializado">Computador/sistema especializado</option><option value="periferico">Periférico</option></select></label>
        </div>
        <div class="quiz-actions"><button class="action-button primary" type="button" id="checkDeviceClassifier">Conferir e entender</button></div>
        <div id="deviceClassifierFeedback" class="classifier-feedback" aria-live="polite"></div>
      </div>

      <h3>2. O primeiro critério: não é o formato</h3>
      <p>Notebook e smartphone parecem objetos muito diferentes. Mesmo assim, os dois possuem um <strong>processador</strong>, usam <strong>memória</strong>, executam <strong>programas</strong> e manipulam <strong>dados</strong>.</p>
      <p>Isso já elimina uma ideia comum: computador não é sinônimo de “máquina com gabinete, monitor, teclado e mouse”. Esse é apenas um dos formatos possíveis.</p>

      <div class="mbb-pause-question">
        <strong>Pare e pense:</strong> se retirar o teclado de um notebook e controlá-lo por toque ou por voz, ele deixa de ser computador? Não. O formato da entrada mudou; a capacidade de executar programas continuou existindo.
      </div>

      <h3>3. O que realmente define um computador?</h3>
      <p>Agora podemos construir uma resposta mais precisa. Um computador precisa conseguir <strong>executar instruções</strong>. Essas instruções formam programas e ficam disponíveis na memória para que um processador possa buscá-las e executá-las.</p>

      <div class="concept-box definition-box">
        <span class="card-title">Definição construída</span>
        <p>Um <strong>computador</strong> é um sistema eletrônico programável que executa instruções armazenadas em memória para processar dados e produzir resultados.</p>
      </div>

      <div class="danger-box">
        <strong>Entrada, processamento e saída não bastam como definição.</strong>
        <p>Muitos aparelhos recebem sinais, transformam algo e produzem uma resposta. O ponto decisivo é existir um sistema programável, com processador e memória, capaz de executar instruções.</p>
      </div>

      <figure class="architecture-figure" aria-labelledby="architectureTitle">
        <figcaption id="architectureTitle">Uma visão simples do que acontece por dentro</figcaption>
        <div class="architecture-flow">
          <div class="architecture-node"><span class="architecture-icon">↘</span><strong>Entrada</strong><small>dados chegam</small></div>
          <div class="architecture-arrow" aria-hidden="true">→</div>
          <div class="architecture-core">
            <div><strong>Processador</strong><small>executa instruções</small></div>
            <div><strong>Memória</strong><small>mantém dados e instruções em uso</small></div>
          </div>
          <div class="architecture-arrow" aria-hidden="true">→</div>
          <div class="architecture-node"><span class="architecture-icon">▣</span><strong>Armazenamento</strong><small>guarda dados e programas</small></div>
          <div class="architecture-arrow" aria-hidden="true">→</div>
          <div class="architecture-node"><span class="architecture-icon">↗</span><strong>Saída</strong><small>resultado aparece ou é enviado</small></div>
        </div>
        <p class="figure-note"><strong>Software</strong> é o conjunto de instruções que dá trabalho ao hardware. <strong>Dados</strong> são aquilo que essas instruções recebem, transformam, guardam ou produzem.</p>
      </figure>

      <h3>4. Então o celular é computador? E o roteador?</h3>
      <p>Sim, mas não precisamos fingir que todos os computadores são iguais. A distinção mais útil é perguntar <strong>para quantas finalidades aquele sistema foi projetado</strong>.</p>

      <div class="three-col classification-cards">
        <article class="mini-card category-general">
          <strong>Propósito geral</strong>
          <p>Executam muitos tipos de programas e tarefas escolhidas pelo usuário.</p>
          <p><b>Exemplos:</b> desktop, notebook e smartphone.</p>
        </article>
        <article class="mini-card category-specialized">
          <strong>Especializados ou embarcados</strong>
          <p>Também fazem computação, mas foram projetados para uma função ou conjunto mais restrito de funções.</p>
          <p><b>Exemplos:</b> console, roteador, Smart TV, caixa eletrônico e sistemas com microcontroladores.</p>
        </article>
        <article class="mini-card category-peripheral">
          <strong>Periféricos</strong>
          <p>Participam da entrada, saída ou comunicação do sistema, mas não são o computador principal que executa os programas do usuário.</p>
          <p><b>Exemplos:</b> teclado, mouse e monitor comum.</p>
        </article>
      </div>

      <div class="note-box">
        <span class="card-title">Por que às vezes ouvimos respostas diferentes?</span>
        <p>No uso cotidiano, muita gente reserva a palavra “computador” para desktop e notebook. Tecnicamente, smartphone, console e roteador também executam computação. Por isso é melhor dizer <strong>que tipo de computador ou sistema computacional</strong> estamos descrevendo, em vez de brigar apenas pelo nome.</p>
      </div>

      <div class="danger-box">
        <strong>Ter um chip não basta.</strong>
        <p>Um teclado moderno pode ter um pequeno controlador e firmware próprio. Isso não faz dele o computador principal do sistema. O que importa é observar <strong>qual papel o equipamento desempenha no conjunto</strong> e que tipo de programa ele foi projetado para executar.</p>
      </div>

      <h3>5. Hardware, software e dados: agora os nomes têm um lugar</h3>
      <div class="three-col">
        <article class="mini-card">
          <strong>Hardware</strong>
          <p>É a parte física do sistema: processador, memória, placa, tela, sensores, teclado, armazenamento e outros componentes.</p>
        </article>
        <article class="mini-card">
          <strong>Software</strong>
          <p>São as instruções e programas executados pelo hardware: sistema operacional, navegador, aplicativo, jogo, firmware e muitos outros.</p>
        </article>
        <article class="mini-card">
          <strong>Dados</strong>
          <p>São as informações representadas pelo sistema: texto, números, imagens, sons, medições, comandos e registros.</p>
        </article>
      </div>

      <h3>6. Veja a ideia funcionando: tirar uma foto</h3>
      <div class="example-box mbb-guided-example">
        <span class="card-title">O smartphone como computador</span>
        <div class="guided-steps">
          <div class="guided-step"><span>1</span><p><strong>Entrada:</strong> o sensor da câmera capta luz e a transforma em sinais.</p></div>
          <div class="guided-step"><span>2</span><p><strong>Processamento:</strong> o processador executa instruções do software da câmera para formar e corrigir a imagem.</p></div>
          <div class="guided-step"><span>3</span><p><strong>Memória e armazenamento:</strong> dados temporários ficam em memória; a foto pronta pode ser gravada no aparelho ou enviada à nuvem.</p></div>
          <div class="guided-step"><span>4</span><p><strong>Saída:</strong> a imagem aparece na tela, pode gerar uma miniatura e pode ser enviada pela rede.</p></div>
        </div>
      </div>

      <div class="task-box thought-task">
        <span class="card-title">Tente explicar com suas palavras</span>
        <p>Um monitor comum recebe dados de imagem e produz luz na tela. Por que isso, sozinho, não o transforma no mesmo tipo de computador que um notebook?</p>
        <details class="solution"><summary>Ver uma resposta possível</summary><p>Porque mostrar uma imagem é apenas uma função de saída. O notebook possui um sistema programável com processador e memória capaz de executar programas variados. O monitor participa desse sistema como periférico.</p></details>
      </div>

      <div class="essence">
        <strong>Essência da aula</strong>
        <p><strong>Computador não é definido pelo formato.</strong> É um sistema eletrônico programável que executa instruções armazenadas em memória para processar dados e produzir resultados. Alguns computadores são de propósito geral; outros são especializados ou embarcados. Periféricos participam do sistema, mas não são o computador principal.</p>
      </div>

      <div class="bridge-box">
        <span class="card-title">Agora surge a próxima pergunta</span>
        <p>Falamos em programas, memória e dados. Mas dentro dos circuitos não existe uma fotografia “como fotografia”, nem uma letra A “como letra”.</p>
        <p><strong>Como texto, números, imagens e sons viram algo que circuitos eletrônicos conseguem armazenar e processar?</strong></p>
        <p>Essa é a investigação da Aula 02: <strong>Bits e Bytes</strong>.</p>
      </div>
    `
  }
);
