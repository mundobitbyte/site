window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "software-programacao",
  number: "08",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Software e programação",
  technicalTitle: "software • algoritmo • pensamento computacional • código-fonte • compilação • interpretação • processo • firmware • driver • bug",
  title: "Se o hardware executa instruções, quem diz o que fazer?",
  objective: "Relacionar problema, algoritmo, código, execução e software, distinguindo programa, processo, firmware, driver e diferentes tipos de erro.",
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">A parte lógica</span><h2>Um computador montado possui capacidade. Software transforma essa capacidade em tarefas.</h2><p>As mesmas peças podem editar texto, tocar música, navegar na Web ou executar um jogo porque recebem <strong>programas e dados diferentes</strong>.</p></div>

    <div class="definition-box featured"><span class="term">Software</span><p><strong>É o conjunto de programas, instruções e dados associados que fazem um sistema computacional realizar determinadas funções.</strong></p></div>

    <h3>Programa, software e aplicativo</h3>
    <div class="comparison-grid three"><article><strong>Programa</strong><p>Conjunto organizado de instruções capaz de realizar uma tarefa.</p></article><article><strong>Software</strong><p>Conceito mais amplo, podendo envolver programas, bibliotecas, configurações e dados associados.</p></article><article><strong>Aplicativo</strong><p>Software voltado principalmente a uma tarefa útil para o usuário, como navegador, planilha ou jogo.</p></article></div>

    <h3>Antes do código existe o problema</h3>
    <div class="definition-box"><span class="term">Algoritmo</span><p>É uma sequência finita e organizada de passos para resolver um problema ou realizar uma tarefa.</p></div>
    <div class="example-box compact"><strong>Calcular a média de duas notas:</strong><p>receber nota 1 → receber nota 2 → somar → dividir por 2 → apresentar resultado.</p></div>

    <h3>Pensamento computacional</h3>
    <p>Programar começa por estruturar o problema. Quatro ideias aparecem com frequência:</p>
    <div class="comparison-grid four"><article><strong>Decomposição</strong><p>Dividir um problema grande em partes menores.</p></article><article><strong>Padrões</strong><p>Reconhecer situações semelhantes e soluções reutilizáveis.</p></article><article><strong>Abstração</strong><p>Concentrar-se nos detalhes relevantes para o problema.</p></article><article><strong>Algoritmo</strong><p>Organizar passos que levam ao resultado.</p></article></div>

    <h3>Código-fonte e linguagem de programação</h3>
    <div class="definition-box"><span class="term">Linguagem de programação</span><p>É uma linguagem formal usada para expressar instruções e estruturas de um programa segundo regras de sintaxe e significado.</p></div>
    <div class="example-box"><strong>Exemplo em Python</strong><p><code>nota1 = 8</code><br><code>nota2 = 6</code><br><code>media = (nota1 + nota2) / 2</code><br><code>print(media)</code></p></div>
    <p>Esse texto é o <strong>código-fonte</strong>. A CPU, porém, executa instruções codificadas para sua arquitetura, não palavras como <code>print</code> diretamente.</p>

    <h3>Como o código chega à máquina?</h3>
    <div class="comparison-grid"><article><strong>Compilador</strong><p>Traduz código para outra representação, que pode ser código de máquina ou uma forma intermediária.</p></article><article><strong>Interpretador</strong><p>Executa um programa por meio de outro software durante a execução, sem exigir necessariamente um executável nativo completo produzido antecipadamente.</p></article></div>
    <div class="note-box compact"><strong>“Compilada” × “interpretada” não é uma divisão absoluta.</strong><p>Implementações reais podem combinar tradução prévia, bytecode, máquina virtual e compilação durante a execução. O importante é entender que o código escrito pelo programador precisa chegar a uma forma executável.</p></div>
    <details class="sources-box"><summary>Aprofunde: bytecode e JIT</summary><p>CPython, por exemplo, transforma código Python em <strong>bytecode</strong> executado pela máquina virtual do Python. Plataformas como Java, .NET e motores modernos de JavaScript podem utilizar <strong>JIT — Just-In-Time Compilation</strong>, compilando partes do código durante a execução.</p></details>

    <h3>Programa armazenado × processo em execução</h3>
    <div class="two-col"><div class="definition-box"><span class="term">Programa</span><p>Conjunto de instruções armazenado em arquivos ou outra forma de software.</p></div><div class="definition-box"><span class="term">Processo</span><p>Uma instância de programa em execução, com estado, memória e recursos associados.</p></div></div>
    <p>O navegador instalado no SSD é software armazenado. Ao abri-lo, o sistema operacional cria processos para executar seu trabalho.</p>

    <h3>Firmware e driver</h3>
    <div class="comparison-grid"><article><strong>Firmware</strong><p>Software armazenado de forma não volátil no equipamento e fortemente ligado ao controle de suas funções. Aparece em roteadores, SSDs, placas-mãe, câmeras e muitos outros dispositivos.</p></article><article><strong>Driver</strong><p>Software que permite ao sistema operacional controlar e se comunicar com um dispositivo ou classe de dispositivos.</p></article></div>
    <p>Firmware continua sendo <strong>software</strong>, mesmo estando fortemente associado ao hardware. E um problema de driver pode produzir sintomas que parecem defeito físico.</p>

    <h3>Software livre, proprietário e código aberto</h3>
    <div class="comparison-grid three"><article><strong>Software livre</strong><p>Enfatiza liberdades para executar, estudar, modificar e redistribuir, conforme a licença.</p></article><article><strong>Proprietário</strong><p>Possui restrições definidas pelo detentor dos direitos, podendo limitar código-fonte, modificação e redistribuição.</p></article><article><strong>Código aberto</strong><p>É distribuído sob licenças que permitem acesso e direitos sobre o código segundo critérios de open source.</p></article></div>
    <div class="note-box compact"><strong>Preço não define liberdade.</strong><p>Software gratuito pode continuar sendo proprietário; software livre pode ser distribuído gratuitamente ou comercialmente.</p></div>

    <h3>Quando o programa não faz o que deveria</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/960px-First_Computer_Bug%2C_1947.jpg" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/330px-First_Computer_Bug%2C_1947.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/960px-First_Computer_Bug%2C_1947.jpg 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/1280px-First_Computer_Bug%2C_1947.jpg 1280w" sizes="(max-width:700px) 92vw, 520px" alt="Página do registro do Harvard Mark II com uma mariposa colada e a anotação de 1947" width="960" height="759" loading="lazy" decoding="async">
        <figcaption><strong>A mariposa do Harvard Mark II, 1947.</strong> O registro brinca com um termo técnico que já existia: “First actual case of bug being found”.<span class="credit">U.S. Navy / Naval Surface Warfare Center · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div><div class="definition-box"><span class="term">Bug</span><p>É um defeito em hardware ou software que pode provocar comportamento incorreto ou inesperado.</p></div><p>Em 1947, uma mariposa foi encontrada presa em um relé do <strong>Harvard Mark II</strong>. O inseto foi colado ao registro com uma brincadeira sobre um “bug real”.</p><p><strong>A mariposa não criou o termo.</strong> O uso de <em>bug</em> para defeitos técnicos era anterior; a graça da anotação dependia justamente desse uso já conhecido.</p></div>
    </div>
    <p>Grace Hopper esteve ligada à equipe e ajudou a tornar o episódio famoso, mas sua importância histórica vai muito além dessa história: ela teve papel relevante no desenvolvimento inicial de compiladores e linguagens de programação.</p>

    <h3>Debugging — depuração</h3>
    <div class="definition-box"><span class="term">Depuração</span><p>É o processo de reproduzir um problema, localizar sua causa, compreendê-la, corrigi-la e testar novamente.</p></div>
    <div class="comparison-grid three"><article><strong>Erro de sintaxe</strong><p>O código viola regras da linguagem e não pode ser analisado corretamente.</p></article><article><strong>Erro de execução</strong><p>O programa começa a rodar, mas encontra uma situação que impede ou compromete a execução.</p></article><article><strong>Erro lógico</strong><p>O programa executa, porém a lógica produz resultado incorreto.</p></article></div>
    <div class="mbb-pause-question"><strong>Um programa pode “funcionar” e ainda estar errado.</strong><p>Se a fórmula calcula 10% de desconto como 1%, o programa pode abrir, executar e fechar normalmente — e ainda assim produzir um resultado incorreto.</p></div>

    <h3>Da necessidade ao resultado</h3>
    <div class="representation-flow" aria-label="Da solução ao programa em execução"><div><strong>Problema</strong></div><span class="flow-arrow">→</span><div><strong>Algoritmo e código</strong></div><span class="flow-arrow">→</span><div><strong>Tradução / execução</strong></div><span class="flow-arrow">→</span><div><strong>Resultado</strong></div></div>

    <section class="checkpoint compact-check" data-quiz-group><span class="eyebrow">Verificação rápida</span><h3>Software não é apenas “programa instalado”</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Processo é uma instância de um programa em execução."><p>Qual é a melhor diferença entre programa e processo?</p><label><input type="radio" name="q8a" value="a"> Processo é sempre hardware.</label><label><input type="radio" name="q8a" value="b"> Programa pode estar armazenado; processo é uma execução desse programa.</label><label><input type="radio" name="q8a" value="c"> Não existe diferença.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Firmware é software fortemente associado ao funcionamento de um equipamento e armazenado de forma não volátil."><p>Firmware é:</p><label><input type="radio" name="q8b" value="a"> um tipo de gabinete.</label><label><input type="radio" name="q8b" value="b"> necessariamente um aplicativo de usuário.</label><label><input type="radio" name="q8b" value="c"> software ligado ao controle de funções de um dispositivo.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="O termo bug já era usado para defeitos técnicos antes de 1947; o episódio foi um trocadilho literal."><p>A mariposa encontrada no Mark II criou a palavra “bug” na informática?</p><label><input type="radio" name="q8c" value="a"> Não. O termo técnico já existia.</label><label><input type="radio" name="q8c" value="b"> Sim, e foi criado por Grace Hopper naquele dia.</label><label><input type="radio" name="q8c" value="c"> Sim, mas apenas para erros de hardware.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p><strong>Algoritmo</strong> organiza a solução; <strong>código-fonte</strong> expressa essa solução em uma linguagem; mecanismos de compilação e interpretação levam o programa a uma forma executável. Programa e processo são diferentes; firmware e drivers também são software. E <strong>bug</strong> é defeito — a mariposa de 1947 tornou famosa uma palavra que já existia.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se vários programas querem CPU, RAM, arquivos, rede e dispositivos ao mesmo tempo, quem organiza esse compartilhamento?</p></div>
    <details class="sources-box"><summary>Fontes e crédito da imagem</summary><ul><li><a href="https://csrc.nist.gov/glossary/term/hardware" target="_blank" rel="noopener">NIST — hardware, software e firmware</a></li><li><a href="https://www.ibm.com/think/topics/firmware" target="_blank" rel="noopener">IBM — Firmware</a></li><li><a href="https://americanhistory.si.edu/collections/object/nmah_334663" target="_blank" rel="noopener">Smithsonian — registro do “computer bug”</a></li><li><a href="https://commons.wikimedia.org/wiki/File:First_Computer_Bug,_1947.jpg" target="_blank" rel="noopener">Wikimedia Commons — fotografia do registro</a></li></ul></details>
  `
});
