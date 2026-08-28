window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: 'bits-bytes',
  number: '05',
  unit: 'Ato 2 · Como funciona',
  menuTitle: 'Bits e Bytes',
  technicalTitle: 'analógico • digital • binário • bit • byte • ASCII • Unicode • unidades',
  title: 'Como texto, imagens e músicas viram dados?',
  objective: 'Entender por que a computação moderna usa representação binária, o que são bit e byte e como diferentes tipos de informação podem ser codificados.',
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">A pergunta invisível</span>
      <h2>Dentro do SSD não existe uma fotografia em miniatura.</h2>
      <p>Também não existe uma letra “A” guardada fisicamente como letra. Para armazenar e processar informação, precisamos <strong>representá-la</strong> de uma forma que os circuitos consigam distinguir.</p>
    </div>

    <h3>Analógico e digital</h3>
    <div class="comparison-grid">
      <article>
        <strong>Analógico</strong>
        <p>Representa uma grandeza que pode variar continuamente dentro de um intervalo, como uma tensão ou um sinal de áudio antes da digitalização.</p>
      </article>
      <article>
        <strong>Digital</strong>
        <p>Representa valores por estados discretos, isto é, estados que podemos distinguir individualmente.</p>
      </article>
    </div>

    <div class="note-box">
      <strong>Digital não significa obrigatoriamente binário.</strong>
      <p>O ENIAC era digital e trabalhava principalmente com representação decimal. <strong>Binário</strong> é um caso de representação digital que utiliza dois símbolos ou estados.</p>
    </div>

    <div class="definition-box">
      <span class="term">Sistema binário</span>
      <p>É um sistema de numeração de <strong>base 2</strong>, que utiliza apenas os algarismos <strong>0 e 1</strong>.</p>
    </div>

    <h3>Por que dois estados?</h3>
    <p>Circuitos eletrônicos podem ser projetados para distinguir duas condições físicas com boa margem de segurança. Podemos representá-las, por convenção, como:</p>

    <div class="binary-states" aria-label="Dois estados binários">
      <div><strong>0</strong><span>um estado</span></div>
      <div><strong>1</strong><span>outro estado</span></div>
    </div>

    <div class="danger-box compact">
      <strong>Importante:</strong>
      <p>Não existem pequenos algarismos 0 e 1 “correndo” dentro do computador. <strong>0 e 1 são símbolos usados por nós para representar estados físicos que o circuito consegue distinguir.</strong></p>
    </div>

    <div class="definition-box featured">
      <span class="term">Bit</span>
      <p>É um <strong>dígito binário</strong> capaz de representar um entre dois estados possíveis, convencionalmente indicados por 0 e 1.</p>
    </div>

    <h3>Mais bits, mais combinações</h3>
    <div class="bit-combinations">
      <div><strong>1 bit</strong><span>2 combinações</span><code>0 · 1</code></div>
      <div><strong>2 bits</strong><span>4 combinações</span><code>00 · 01 · 10 · 11</code></div>
      <div><strong>3 bits</strong><span>8 combinações</span><code>000 ... 111</code></div>
      <div><strong>8 bits</strong><span>256 combinações</span><code>00000000 ... 11111111</code></div>
    </div>
    <p>Em geral, <strong>n bits permitem 2<sup>n</sup> combinações</strong>. O importante agora não é decorar a fórmula: é perceber que aumentar a quantidade de bits aumenta a quantidade de estados que podemos representar.</p>

    <h3>Como um número decimal aparece em binário?</h3>
    <p>O sistema decimal usa potências de 10. O binário faz a mesma ideia funcionar com <strong>potências de 2</strong>.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Posição</th><th>8</th><th>4</th><th>2</th><th>1</th></tr></thead>
        <tbody><tr><td><strong>1101₂</strong></td><td>1</td><td>1</td><td>0</td><td>1</td></tr></tbody>
      </table>
    </div>
    <div class="example-box compact">
      <strong>Exemplo:</strong>
      <p><strong>1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13₁₀.</strong> Assim, o mesmo valor pode ser escrito de maneiras diferentes conforme a base numérica utilizada.</p>
    </div>

    <h3>Um padrão de bits não traz significado sozinho</h3>
    <div class="code-focus"><code>01000001</code></div>
    <p>Isso é número? letra? cor? parte de uma instrução?</p>
    <p><strong>Sem conhecer a regra de interpretação, não sabemos.</strong> Bits ganham significado quando um formato ou uma convenção diz como interpretá-los.</p>

    <div class="two-col">
      <div class="definition-box">
        <span class="term">Dado</span>
        <p>É uma representação registrada de um valor, fato, símbolo ou ocorrência que pode ser armazenada e processada.</p>
      </div>
      <div class="definition-box">
        <span class="term">Informação</span>
        <p>É o significado obtido quando dados são interpretados dentro de um contexto.</p>
      </div>
    </div>
    <div class="example-box compact">
      <strong>Exemplo:</strong>
      <p><code>38</code> é um dado. “Temperatura do paciente: <strong>38 °C</strong>” acrescenta contexto e permite interpretar o dado como informação.</p>
    </div>

    <h3>Byte</h3>
    <div class="definition-box">
      <span class="term">Byte</span>
      <p>É uma sequência de <strong>8 bits</strong>. Como 8 bits permitem 256 combinações, um byte pode representar 256 padrões diferentes.</p>
    </div>

    <h3>Como uma letra vira bits?</h3>
    <p>Precisamos de uma convenção que associe caracteres a valores numéricos. Um padrão histórico muito importante é o <strong>ASCII</strong>, que usa 7 bits para 128 códigos.</p>
    <div class="encoding-demo">
      <span>caractere</span><strong>A</strong><span>→ código</span><strong>65</strong><span>→ bits</span><code>01000001</code>
    </div>
    <p>O padrão não afirma que “01000001 é naturalmente A”. Ele estabelece uma <strong>convenção</strong> para que sistemas interpretem esse valor como o caractere A.</p>

    <h3>Unicode e UTF-8</h3>
    <p>ASCII não consegue representar todos os sistemas de escrita do mundo. O <strong>Unicode</strong> atribui pontos de código a caracteres de muitas línguas, símbolos e outros elementos.</p>
    <p>O <strong>UTF-8</strong> é uma forma de codificar pontos de código Unicode usando sequências de <strong>1 a 4 bytes</strong>.</p>
    <div class="note-box compact">
      <strong>Logo:</strong>
      <p><strong>Um caractere não tem tamanho fixo de 1 byte.</strong> Em UTF-8, a quantidade de bytes depende do ponto de código representado, e alguns símbolos visuais podem até combinar mais de um ponto de código.</p>
    </div>

    <h3>E imagens e sons?</h3>
    <div class="comparison-grid">
      <article>
        <strong>Imagem</strong>
        <p>Pode ser representada por pixels. Em uma representação RGB comum, componentes de cor podem usar valores de 0 a 255. Esse intervalo aparece porque <strong>8 bits oferecem 256 combinações</strong>.</p>
      </article>
      <article>
        <strong>Áudio</strong>
        <p>Um sinal pode ser medido em vários instantes. A coleta dessas medições é a <strong>amostragem</strong>; a transformação das medições em valores discretos envolve <strong>quantização</strong>.</p>
      </article>
    </div>

    <div class="representation-flow" aria-label="Representação digital">
      <div><strong>texto · imagem · som</strong></div>
      <span class="flow-arrow">→</span>
      <div><strong>regras de representação</strong></div>
      <span class="flow-arrow">→</span>
      <div><strong>números / códigos</strong></div>
      <span class="flow-arrow">→</span>
      <div><strong>bits</strong></div>
    </div>

    <h3>Como circuitos fazem alguma coisa com bits?</h3>
    <p>Transistores podem ser combinados em circuitos que implementam operações lógicas. Entre as mais básicas estão <strong>NOT</strong>, <strong>AND</strong> e <strong>OR</strong>.</p>
    <p>Para compreender a ideia central neste momento, basta perceber a cadeia:</p>
    <div class="mbb-pause-question">
      <strong>transistores → portas lógicas → circuitos maiores → processamento</strong>
      <p>Funções muito complexas podem surgir da combinação de uma quantidade enorme de operações simples.</p>
    </div>

    <h3>kB, MB, GB e TB</h3>
    <p>Para medir quantidades de dados, usamos múltiplos do byte.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Unidade</th><th>Valor decimal</th></tr></thead>
        <tbody>
          <tr><td>1 kB</td><td>1.000 bytes</td></tr>
          <tr><td>1 MB</td><td>1.000.000 bytes</td></tr>
          <tr><td>1 GB</td><td>1.000.000.000 bytes</td></tr>
          <tr><td>1 TB</td><td>1.000.000.000.000 bytes</td></tr>
        </tbody>
      </table>
    </div>
    <p>Para potências de 2 existem os prefixos <strong>KiB, MiB, GiB</strong>: por exemplo, 1 KiB = 1.024 bytes. Muitos programas ainda usam nomenclaturas históricas de forma inconsistente, por isso é comum encontrar diferenças no uso real.</p>

    <h3>b e B não são a mesma coisa</h3>
    <div class="unit-contrast">
      <div><strong>b</strong><span>bit</span></div>
      <div><strong>B</strong><span>byte = 8 bits</span></div>
    </div>
    <p>Por isso, <strong>600 Mb/s</strong> não significa 600 MB/s. Apenas convertendo bits para bytes:</p>
    <div class="code-focus"><code>600 Mb/s ÷ 8 = 75 MB/s</code></div>
    <p>Na prática, protocolos e outras condições ainda afetam a taxa observada.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span>
      <h3>O significado está firme?</h3>

      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Sem conhecer a codificação ou o contexto, um padrão de bits não possui um significado único.">
        <p>Ao encontrar <code>01000001</code>, podemos afirmar imediatamente que é a letra A?</p>
        <label><input type="radio" name="q5a" value="a"> Sim, qualquer sequência de 8 bits é uma letra.</label>
        <label><input type="radio" name="q5a" value="b"> Sim, porque todo byte usa ASCII.</label>
        <label><input type="radio" name="q5a" value="c"> Não. Precisamos saber como aquele padrão está sendo interpretado.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="b minúsculo representa bit; B maiúsculo representa byte.">
        <p>Uma conexão de 800 Mb/s está anunciando:</p>
        <label><input type="radio" name="q5b" value="a"> 800 megabytes por segundo.</label>
        <label><input type="radio" name="q5b" value="b"> 800 megabits por segundo.</label>
        <label><input type="radio" name="q5b" value="c"> 800 milhões de arquivos por segundo.</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="1101₂ representa 8 + 4 + 1, totalizando 13 no sistema decimal.">
        <p>Qual é o valor decimal de <code>1101₂</code>?</p>
        <label><input type="radio" name="q5c" value="a"> 13</label>
        <label><input type="radio" name="q5c" value="b"> 11</label>
        <label><input type="radio" name="q5c" value="c"> 1101</label>
      </div>

      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="Texto, imagem e áudio podem ser convertidos em representações numéricas e codificados em bits.">
        <p>Como uma foto e uma música podem ser armazenadas no mesmo SSD?</p>
        <label><input type="radio" name="q5d" value="a"> Porque ambas podem ser representadas digitalmente como dados codificados em bits.</label>
        <label><input type="radio" name="q5d" value="b"> Porque o SSD guarda uma miniatura física de cada conteúdo.</label>
        <label><input type="radio" name="q5d" value="c"> Porque fotos e músicas são o mesmo formato de arquivo.</label>
      </div>

      <button class="action-button primary" type="button" data-check-quiz>Conferir</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence">
      <strong>Essência</strong>
      <p><strong>Bit</strong> representa um entre dois estados; <strong>8 bits formam um byte</strong>. Bits não têm significado único sozinhos: convenções dizem se um padrão representa número, caractere, pixel, áudio ou instrução. É isso que permite ao mesmo computador armazenar e processar tipos de informação tão diferentes.</p>
    </div>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Agora sabemos como a informação pode ser representada. Mas quem, fisicamente, processa, guarda e movimenta esses dados dentro do computador?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes</summary>
      <ul>
        <li><a href="https://csrc.nist.gov/glossary/term/bit" target="_blank" rel="noopener">NIST — bit</a></li>
        <li><a href="https://csrc.nist.gov/glossary/term/byte" target="_blank" rel="noopener">NIST — byte</a></li>
        <li><a href="https://datatracker.ietf.org/doc/rfc20/" target="_blank" rel="noopener">RFC 20 — ASCII</a></li>
        <li><a href="https://www.unicode.org/versions/latest/" target="_blank" rel="noopener">Unicode Standard</a></li>
        <li><a href="https://www.nist.gov/pml/special-publication-330/sp-330-section-3" target="_blank" rel="noopener">NIST — prefixos SI e binários</a></li>
      </ul>
    </details>
  `
});