window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "memoria-armazenamento",
  number: "07",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Memória e armazenamento",
  technicalTitle: "registradores • cache • RAM • volatilidade • SSD • HDD • latência • SATA • NVMe • memória virtual",
  title: "Se todos guardam dados, por que precisamos de vários níveis?",
  objective: "Entender a hierarquia de memória e diferenciar velocidade, capacidade, volatilidade, armazenamento e memória virtual.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Velocidade × capacidade × permanência</span>
      <h2>Por que não usar apenas o SSD, que tem muito mais espaço que a RAM?</h2>
      <p>Porque nenhuma tecnologia oferece ao mesmo tempo <strong>velocidade máxima, capacidade enorme, baixo custo e permanência dos dados</strong>. O computador combina níveis diferentes para equilibrar essas características.</p>
    </div>

    <h3>Memória e armazenamento: uma distinção útil</h3>
    <div class="comparison-grid">
      <article><strong>Memória de trabalho</strong><p>Registradores, cache e RAM mantêm dados e instruções muito próximos do processamento. A RAM principal é normalmente volátil.</p></article>
      <article><strong>Armazenamento</strong><p>SSD e HDD preservam arquivos e programas de forma não volátil, mesmo quando o computador é desligado.</p></article>
    </div>
    <p>No cotidiano, “memória” também é usada para falar do armazenamento de celulares. O contexto importa; tecnicamente, nesta aula, vamos separar os papéis.</p>

    <h3>A hierarquia</h3>
    <div class="fact-strip" aria-label="Hierarquia simplificada de memória">
      <div><strong>Registradores</strong><span>mínimos e muito próximos da CPU</span></div>
      <div><strong>Cache</strong><span>muito rápida e pequena</span></div>
      <div><strong>RAM</strong><span>área principal de trabalho</span></div>
      <div><strong>SSD / HDD</strong><span>armazenamento persistente</span></div>
    </div>
    <div class="note-box compact"><strong>É uma tendência geral:</strong><p>quanto mais perto do processamento, menor e mais rápido tende a ser o nível; quanto mais buscamos capacidade e baixo custo por byte, maior tende a ser a distância e o tempo de acesso.</p></div>

    <h3>Registradores e cache</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Registradores</span><p>São pequenas áreas de armazenamento dentro da CPU usadas diretamente durante a execução das instruções.</p></div>
      <div class="definition-box"><span class="term">Cache</span><p>Mantém cópias de dados e instruções que provavelmente serão necessários em breve, evitando acessos mais demorados à RAM.</p></div>
    </div>
    <details class="sources-box"><summary>Aprofunde: por que cache costuma funcionar tão bem?</summary><p>Programas apresentam padrões. <strong>Localidade temporal</strong>: algo usado recentemente pode ser usado de novo. <strong>Localidade espacial</strong>: dados próximos de um dado acessado têm boa chance de também serem necessários. Caches exploram esses padrões.</p><p>É comum encontrar níveis <strong>L1, L2 e L3</strong>. A organização exata varia conforme o processador.</p></details>

    <h3>RAM: a área de trabalho</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/960px-Memoria_RAM.JPG" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/330px-Memoria_RAM.JPG 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/960px-Memoria_RAM.JPG 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Memoria_RAM.JPG/1280px-Memoria_RAM.JPG 1280w" sizes="(max-width:700px) 92vw, 520px" alt="Módulos de memória RAM instalados em slots de uma placa-mãe" width="960" height="720" loading="lazy" decoding="async">
        <figcaption><strong>Módulos de RAM instalados na placa-mãe.</strong><span class="credit">Chrihern · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div><div class="definition-box"><span class="term">RAM — Random Access Memory</span><p>É a memória principal usada para manter temporariamente dados e instruções necessários aos programas em execução.</p></div><div class="definition-box compact"><span class="term">Volátil</span><p>Precisa de energia para manter os dados. Desligar o equipamento apaga o conteúdo da RAM convencional.</p></div></div>
    </div>
    <p>“Acesso aleatório” não significa bagunça. Significa que uma posição pode ser acessada diretamente, sem precisar percorrer todas as anteriores como num meio puramente sequencial.</p>

    <h3>Salvar é tornar persistente</h3>
    <p>Enquanto você edita um documento, informações ficam na RAM. Ao <strong>salvar</strong>, os dados são registrados em armazenamento não volátil, como SSD ou HDD. É por isso que perder energia antes de salvar pode eliminar alterações que ainda não foram persistidas.</p>

    <h3>SSD e HDD</h3>
    <div class="media-text reverse">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/960px-Open_hard-drive.jpg" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/330px-Open_hard-drive.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/960px-Open_hard-drive.jpg 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Open_hard-drive.jpg/1280px-Open_hard-drive.jpg 1280w" sizes="(max-width:700px) 92vw, 520px" alt="Disco rígido aberto mostrando prato e braço de leitura e gravação" width="960" height="837" loading="lazy" decoding="async">
        <figcaption><strong>HDD aberto.</strong> O prato magnético e o braço de leitura/gravação deixam claro que existe movimento mecânico.<span class="credit">Zzubnik · domínio público · Wikimedia Commons.</span></figcaption>
      </figure>
      <div><div class="comparison-grid"><article><strong>HDD</strong><p>Armazena dados magneticamente em discos giratórios. O deslocamento mecânico da cabeça influencia o tempo de acesso.</p></article><article><strong>SSD</strong><p>Usa memória eletrônica não volátil, normalmente flash NAND, sem os discos giratórios de um HDD.</p></article></div><p>SSD costuma oferecer respostas muito mais rápidas no uso cotidiano. HDD continua útil quando grande capacidade por custo é uma prioridade.</p></div>
    </div>

    <h3>“Mais rápido” pode significar coisas diferentes</h3>
    <div class="two-col"><div class="definition-box"><span class="term">Taxa de transferência</span><p>Quantidade de dados que pode ser transferida em determinado intervalo de tempo, por exemplo MB/s.</p></div><div class="definition-box"><span class="term">Latência</span><p>Tempo de espera até que uma operação de acesso produza resposta.</p></div></div>
    <p>Copiar um vídeo enorme valoriza alta transferência sequencial. Abrir milhares de arquivos pequenos pode depender muito de latência e de acessos aleatórios. <strong>Uma única medida não descreve todo o desempenho.</strong></p>

    <h3>SATA, PCIe, NVMe e M.2</h3>
    <div class="comparison-grid four"><article><strong>SATA</strong><p>Interface usada historicamente por HDDs e também por SSDs.</p></article><article><strong>PCIe</strong><p>Interconexão de alta velocidade usada por diversos dispositivos.</p></article><article><strong>NVMe</strong><p>Protocolo projetado para armazenamento não volátil rápido, normalmente sobre PCIe.</p></article><article><strong>M.2</strong><p>Formato/especificação física de módulos; um M.2 pode usar SATA ou PCIe/NVMe conforme o dispositivo.</p></article></div>
    <div class="note-box compact"><strong>M.2 não significa automaticamente NVMe.</strong><p>Dois módulos visualmente parecidos podem usar interfaces diferentes e não oferecer a mesma compatibilidade ou desempenho.</p></div>

    <h3>E quando a RAM não é suficiente?</h3>
    <div class="definition-box"><span class="term">Memória virtual</span><p>É um mecanismo de gerenciamento de memória que fornece aos processos espaços de endereçamento organizados e permite que partes menos necessárias naquele momento sejam mantidas fora da RAM física, inclusive em armazenamento.</p></div>
    <p>Windows pode usar um <em>pagefile</em>; sistemas Linux podem usar <em>swap</em>. Isso <strong>não transforma SSD em RAM</strong>. Se o sistema precisa mover dados entre RAM e armazenamento com frequência, o desempenho pode cair bastante.</p>

    <h3>Um dado pode passar por vários níveis</h3>
    <div class="concept-flow"><div><strong>SSD</strong><span>arquivo persistente</span></div><span class="flow-arrow">→</span><div><strong>RAM / cache</strong><span>dados próximos do processamento</span></div><span class="flow-arrow">→</span><div><strong>Registradores</strong><span>uso imediato pela CPU</span></div></div>
    <p>A mesma informação pode existir simultaneamente em mais de um nível. O sistema cria cópias e movimenta dados para equilibrar desempenho e capacidade.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Checkpoint 2</span><h3>Memória não é uma coisa só</h3>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="RAM é volátil e foi projetada para memória de trabalho; SSD é persistente e possui características de acesso diferentes."><p>Por que um SSD grande não substitui simplesmente a RAM?</p><label><input type="radio" name="q7a" value="a"> Porque SSD não consegue armazenar dados.</label><label><input type="radio" name="q7a" value="b"> Porque RAM só serve para arquivos.</label><label><input type="radio" name="q7a" value="c"> Porque possuem funções e características de desempenho diferentes.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="M.2 descreve formato/especificação do módulo; NVMe é um protocolo de armazenamento normalmente usado sobre PCIe."><p>Qual afirmação é correta?</p><label><input type="radio" name="q7b" value="a"> Todo M.2 é NVMe.</label><label><input type="radio" name="q7b" value="b"> Um M.2 pode usar SATA ou PCIe/NVMe, conforme o dispositivo.</label><label><input type="radio" name="q7b" value="c"> NVMe é o formato físico do conector.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Memória virtual pode usar armazenamento como apoio, mas ele continua muito mais lento que a RAM."><p>Quando a RAM fica insuficiente, o uso intenso de paginação pode:</p><label><input type="radio" name="q7c" value="a"> reduzir muito o desempenho.</label><label><input type="radio" name="q7c" value="b"> transformar permanentemente o SSD em RAM.</label><label><input type="radio" name="q7c" value="c"> aumentar a quantidade de núcleos da CPU.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir checkpoint</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>A hierarquia existe porque precisamos equilibrar <strong>velocidade, capacidade, custo e permanência</strong>. Registradores e cache ficam muito próximos da CPU; RAM mantém o trabalho ativo; SSD/HDD preservam dados. Latência e taxa de transferência medem aspectos diferentes, e memória virtual ajuda a administrar RAM limitada sem transformar armazenamento em RAM física.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se o hardware apenas executa instruções, quem organiza essas instruções e diz à máquina o que fazer?</p></div>
    <details class="sources-box"><summary>Fontes e créditos das imagens</summary><ul><li><a href="https://www.ibm.com/think/topics/central-processing-unit" target="_blank" rel="noopener">IBM — CPU, memória e armazenamento</a></li><li><a href="https://commons.wikimedia.org/wiki/File:Memoria_RAM.JPG" target="_blank" rel="noopener">Wikimedia Commons — RAM</a></li><li><a href="https://commons.wikimedia.org/wiki/File:Open_hard-drive.jpg" target="_blank" rel="noopener">Wikimedia Commons — HDD aberto</a></li></ul></details>
  `
});
