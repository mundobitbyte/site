window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push(
  {
    id: 'diagnostico',
    number: '00',
    unit: 'Começo',
    technicalTitle: 'Avaliação diagnóstica',
    title: 'O que você realmente entende quando usa um computador?',
    objective: 'Propósito: perceber o que você já compreende e quais ideias ainda precisam ser construídas. Não vale nota.',
    content: `
      <div class="hero-box">
        <span class="card-title">Antes de começar</span>
        <p>Você provavelmente usa computadores todos os dias. Celular, notebook, videogame, caixa eletrônico e até alguns eletrodomésticos possuem sistemas computacionais.</p>
        <p>Mas <strong>usar</strong> uma tecnologia e <strong>entender o que está acontecendo</strong> são coisas diferentes.</p>
      </div>

      <h3>Responda sem pesquisar</h3>
      <p>O objetivo é descobrir seu ponto de partida. Se errar, ótimo: encontramos algo que vale aprender.</p>

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
        <label><input type="radio" name="d4" value="b"> encaminhar dados entre redes e permitir que os dispositivos da rede local se comuniquem com outras redes.</label>
        <label><input type="radio" name="d4" value="c"> armazenar permanentemente todos os sites acessados.</label>
      </div>

      <div class="quiz-item" data-diagnostic-question data-answer="c">
        <p>5. Qual frase está mais correta?</p>
        <label><input type="radio" name="d5" value="a"> Um smartphone não é computador porque não possui teclado físico.</label>
        <label><input type="radio" name="d5" value="b"> Apenas desktops e notebooks são computadores.</label>
        <label><input type="radio" name="d5" value="c"> Um smartphone é um sistema computacional porque recebe dados, processa instruções, armazena informações e produz saídas.</label>
      </div>

      <div class="quiz-actions">
        <button class="action-button primary" type="button" id="checkDiagnostic">Ver meu ponto de partida</button>
      </div>
      <div id="diagnosticResult" class="quiz-result" aria-live="polite"></div>

      <div class="note-box">
        <span class="card-title">Importante</span>
        <p>Este diagnóstico não pretende medir toda a sua experiência. Ele apenas mostra que muitos conceitos usados diariamente ficam invisíveis quando ninguém para para explicá-los.</p>
      </div>
    `
  },
  {
    id: 'computador',
    number: '01',
    unit: 'Fundamentos',
    technicalTitle: 'Sistemas computacionais • hardware • software • dados',
    title: 'O que faz uma máquina ser um computador?',
    objective: 'Propósito: compreender o que caracteriza um sistema computacional e perceber que computador não significa apenas desktop ou notebook.',
    content: `
      <div class="hero-box">
        <span class="card-title">Imagine a seguinte situação cotidiana:</span>
        <p>Você olha ao redor e encontra vários equipamentos:</p>
        <div class="device-list" aria-label="Exemplos de dispositivos">
          <span class="device-chip">Notebook</span>
          <span class="device-chip">Smartphone</span>
          <span class="device-chip">Videogame</span>
          <span class="device-chip">Smart TV</span>
          <span class="device-chip">Caixa eletrônico</span>
          <span class="device-chip">Roteador Wi-Fi</span>
          <span class="device-chip">Arduino</span>
          <span class="device-chip">Calculadora</span>
        </div>
        <p><strong>Todos eles são computadores?</strong></p>
        <p>Se não podemos decidir apenas olhando o formato, precisamos descobrir o que existe em comum entre eles.</p>
      </div>

      <h3>Comece observando o que a máquina faz</h3>
      <p>Em vez de decorar uma definição, pense no caminho percorrido pela informação.</p>

      <div class="flow" aria-label="Fluxo básico de um sistema computacional">
        <div class="flow-step"><strong>Entrada</strong><span>recebe dados</span></div>
        <div class="flow-arrow" aria-hidden="true">→</div>
        <div class="flow-step"><strong>Processamento</strong><span>executa instruções</span></div>
        <div class="flow-arrow" aria-hidden="true">→</div>
        <div class="flow-step"><strong>Saída</strong><span>apresenta ou envia resultados</span></div>
      </div>

      <p>Durante esse processo, o sistema também pode <strong>armazenar</strong> dados e instruções para usar agora ou depois.</p>

      <div class="example-box">
        <span class="card-title">Exemplo: tirar uma foto com o celular</span>
        <p><strong>Entrada:</strong> o sensor da câmera capta luz.</p>
        <p><strong>Processamento:</strong> o sistema transforma os sinais captados em uma imagem digital e aplica correções.</p>
        <p><strong>Armazenamento:</strong> a foto é gravada na memória do aparelho ou enviada para a nuvem.</p>
        <p><strong>Saída:</strong> a imagem aparece na tela e pode ser compartilhada.</p>
      </div>

      <h3>Então, o que é um computador?</h3>
      <div class="concept-box">
        <span class="card-title">Construindo a ideia</span>
        <p>Um <strong>sistema computacional</strong> combina componentes capazes de receber dados, executar instruções, processar informações, armazená-las e produzir resultados.</p>
        <p>Nem todo equipamento precisa ter o mesmo formato nem realizar todas essas funções da mesma maneira.</p>
      </div>

      <div class="three-col">
        <article class="mini-card">
          <strong>Hardware</strong>
          <p>São os componentes físicos: processador, memória, tela, teclado, sensores, cabos, placas e outros dispositivos.</p>
        </article>
        <article class="mini-card">
          <strong>Software</strong>
          <p>São programas e instruções que dizem ao hardware o que fazer: sistema operacional, navegador, aplicativo, jogo e muitos outros.</p>
        </article>
        <article class="mini-card">
          <strong>Dados</strong>
          <p>São os valores e representações manipulados pelo sistema: textos, números, imagens, sons, medições, comandos e registros.</p>
        </article>
      </div>

      <div class="note-box">
        <span class="card-title">Uma distinção útil</span>
        <p><strong>Computação</strong> estuda e aplica formas de representar informações e resolver problemas por meio de processos computacionais. <strong>Informática</strong> é um termo muito usado para o conjunto de tecnologias e práticas ligadas ao tratamento automático da informação. <strong>Tecnologia da Informação (TI)</strong> amplia o olhar para o uso e a gestão de sistemas, dados, infraestrutura e serviços tecnológicos em diferentes contextos.</p>
        <p>Esses termos podem aparecer com fronteiras um pouco diferentes conforme o contexto. Aqui, o mais importante é compreender a ideia antes de se preocupar com a etiqueta.</p>
      </div>

      <h3>Experimente: qual é o papel de cada componente?</h3>
      <p>Escolha a função predominante em cada caso. Em alguns dispositivos, mais de uma função pode existir ao mesmo tempo.</p>

      <div class="task-box">
        <span class="card-title">Laboratório rápido</span>
        <div class="classifier" id="roleClassifier">
          <label class="classifier-row" data-answer="entrada"><strong>Teclado</strong><select><option value="">Escolha...</option><option value="entrada">Entrada</option><option value="processamento">Processamento</option><option value="armazenamento">Armazenamento</option><option value="saida">Saída</option><option value="entrada-saida">Entrada e saída</option></select></label>
          <label class="classifier-row" data-answer="processamento"><strong>CPU / processador</strong><select><option value="">Escolha...</option><option value="entrada">Entrada</option><option value="processamento">Processamento</option><option value="armazenamento">Armazenamento</option><option value="saida">Saída</option><option value="entrada-saida">Entrada e saída</option></select></label>
          <label class="classifier-row" data-answer="armazenamento"><strong>SSD</strong><select><option value="">Escolha...</option><option value="entrada">Entrada</option><option value="processamento">Processamento</option><option value="armazenamento">Armazenamento</option><option value="saida">Saída</option><option value="entrada-saida">Entrada e saída</option></select></label>
          <label class="classifier-row" data-answer="saida"><strong>Monitor comum</strong><select><option value="">Escolha...</option><option value="entrada">Entrada</option><option value="processamento">Processamento</option><option value="armazenamento">Armazenamento</option><option value="saida">Saída</option><option value="entrada-saida">Entrada e saída</option></select></label>
          <label class="classifier-row" data-answer="entrada-saida"><strong>Tela touchscreen</strong><select><option value="">Escolha...</option><option value="entrada">Entrada</option><option value="processamento">Processamento</option><option value="armazenamento">Armazenamento</option><option value="saida">Saída</option><option value="entrada-saida">Entrada e saída</option></select></label>
          <label class="classifier-row" data-answer="entrada-saida"><strong>Placa de rede</strong><select><option value="">Escolha...</option><option value="entrada">Entrada</option><option value="processamento">Processamento</option><option value="armazenamento">Armazenamento</option><option value="saida">Saída</option><option value="entrada-saida">Entrada e saída</option></select></label>
        </div>
        <div class="quiz-actions"><button class="action-button primary" type="button" id="checkClassifier">Conferir</button></div>
        <div id="classifierFeedback" class="classifier-feedback" aria-live="polite"></div>
      </div>

      <h3>Por que a classificação não é uma caixinha rígida?</h3>
      <p>Um monitor tradicional é principalmente um dispositivo de saída. Já uma tela touchscreen mostra informações e também recebe toques. Uma placa de rede recebe e envia dados. Isso é importante porque sistemas reais possuem componentes que podem desempenhar mais de um papel.</p>

      <div class="example-box">
        <span class="card-title">Na tecnologia e na programação</span>
        <p>Um programa também pode ser observado por esse fluxo. Ele recebe dados, executa instruções, pode guardar resultados e produz alguma saída. Mais adiante você verá que essa ideia reaparece em programação, bancos de dados, redes, sistemas embarcados e aplicações web.</p>
      </div>

      <div class="essence">
        <strong>Essência da aula</strong>
        <p>Computador não é definido pelo formato. Um sistema computacional combina <strong>hardware</strong>, <strong>software</strong> e <strong>dados</strong> para receber informações, executar instruções, processar, armazenar e produzir resultados.</p>
      </div>

      <div class="bridge-box">
        <span class="card-title">Conexão com a próxima aula</span>
        <p>Falamos várias vezes em dados: texto, imagem, som, número. Mas os componentes eletrônicos não enxergam uma letra A nem uma fotografia como nós.</p>
        <p><strong>Como todas essas coisas viram algo que o computador consegue armazenar e processar?</strong></p>
        <p>Essa será a pergunta da Aula 02: <strong>Dados viram bits</strong>.</p>
      </div>
    `
  }
);