from pathlib import Path

PATH = Path('pages/arduino.html')
text = PATH.read_text(encoding='utf-8')
changed = False


def insert_after_once(marker: str, insert: str, guard: str, label: str):
    global text, changed
    if guard in text:
        print(f'{label}: já aplicado.')
        return
    count = text.count(marker)
    if count != 1:
        raise SystemExit(f'{label}: marcador inesperado, encontrado {count} vez(es).')
    text = text.replace(marker, marker + insert, 1)
    changed = True
    print(f'{label}: aplicado.')


def insert_before_once(marker: str, insert: str, guard: str, label: str):
    global text, changed
    if guard in text:
        print(f'{label}: já aplicado.')
        return
    count = text.count(marker)
    if count != 1:
        raise SystemExit(f'{label}: marcador inesperado, encontrado {count} vez(es).')
    text = text.replace(marker, insert + marker, 1)
    changed = True
    print(f'{label}: aplicado.')


# 2. Entrada/Saída — P2: linguagem, IDE, compilação, gravação e execução
marker_p2 = '<div class="projectHead"><span class="badge">P2</span><div><h2>Projeto 2 — Blink com LED externo</h2><p>O LED externo deixa de ser ligado diretamente ao 5V e passa a ser controlado pelo pino digital 8.</p></div></div>\n'
insert_p2 = '''<div class="cards" id="p2-fluxo-programacao">
<article class="card wide">
<h3>Antes de piscar: como o programa chega ao microcontrolador?</h3>
<p>No Projeto 1, o Arduino funcionou apenas como fonte de alimentação. Agora o comportamento do LED dependerá de um programa. Em uma placa física, escrever o código é apenas o primeiro passo: ele precisa ser <strong>verificado, compilado e gravado</strong> no microcontrolador.</p>
<img alt="Fluxo da Arduino IDE: escrever o sketch, verificar e compilar, selecionar placa e porta, enviar e executar no microcontrolador" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/fluxo-codigo-microcontrolador.svg"/>
</article>
<article class="card">
<h3>Sketch e linguagem Arduino/C++</h3>
<p>Na Arduino IDE, cada programa é normalmente chamado de <strong>sketch</strong>. O código usa C++ com recursos e bibliotecas do ecossistema Arduino que simplificam tarefas de hardware, como <code>pinMode()</code> e <code>digitalWrite()</code>.</p>
<p>Isso significa que não existe uma “linguagem Arduino” totalmente separada do C++: o ambiente Arduino oferece uma forma acessível de programar microcontroladores usando essa base.</p>
</article>
<article class="card">
<h3>O ciclo na placa física</h3>
<ol><li>Escreva ou abra o sketch.</li><li>Selecione o modelo correto da placa.</li><li>Selecione a porta em que a placa foi reconhecida.</li><li>Use <strong>Verificar</strong> para compilar e detectar erros de código.</li><li>Use <strong>Enviar</strong> para gravar o programa na placa.</li><li>Observe o resultado físico e, se necessário, corrija código ou montagem.</li></ol>
<p><strong>Compilar</strong> transforma o código-fonte em instruções que o microcontrolador pode executar. <strong>Enviar/gravar</strong> transfere esse resultado para a memória de programa da placa.</p>
</article>
<article class="card worked wide">
<h3>Ligação com o Tinkercad</h3>
<p>No simulador, parte desse processo acontece nos bastidores quando você inicia a simulação. Na placa real, a Arduino IDE deixa o caminho mais explícito. A lógica de aprendizagem permanece a mesma: <strong>escrever → verificar → executar → observar → corrigir</strong>.</p>
</article>
</div>
'''
insert_after_once(marker_p2, insert_p2, 'id="p2-fluxo-programacao"', 'P2 — fluxo de programação')

# 2. Entrada/Saída — P3: operadores em contexto
marker_p3 = '<div class="projectHead"><span class="badge">P3</span><div><h2>Projeto 3 — Botão com LED</h2><p>O botão é lido no pino digital 2 e o LED é acionado pelo pino digital 8 somente enquanto o botão estiver pressionado.</p></div></div>\n'
insert_p3 = '''<div class="cards" id="p3-operadores">
<article class="card wide">
<h3>O programa agora precisa comparar e decidir</h3>
<p>No Blink, o Arduino executava sempre a mesma sequência. Com o botão, o programa precisa <strong>ler um valor, comparar uma condição e escolher o que fazer</strong>. É aqui que os operadores deixam de parecer apenas símbolos e passam a controlar decisões reais.</p>
<table><tr><th>Família</th><th>Exemplos</th><th>Uso</th></tr><tr><td><strong>Aritméticos</strong></td><td><code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code></td><td>Realizam cálculos e transformações numéricas.</td></tr><tr><td><strong>Comparação</strong></td><td><code>==</code> <code>!=</code> <code>&lt;</code> <code>&gt;</code> <code>&lt;=</code> <code>&gt;=</code></td><td>Comparam valores e produzem uma condição verdadeira ou falsa.</td></tr><tr><td><strong>Lógicos</strong></td><td><code>&amp;&amp;</code> <code>||</code> <code>!</code></td><td>Combinam ou invertem condições.</td></tr></table>
</article>
<article class="card">
<h3><code>=</code> não é <code>==</code></h3>
<p><code>estadoBotao = digitalRead(pinoBotao);</code> usa <strong>atribuição</strong>: guarda um valor na variável.</p><p><code>estadoBotao == LOW</code> usa <strong>comparação</strong>: pergunta se o valor é igual a LOW.</p><p>Confundir os dois é um erro comum porque os símbolos são parecidos, mas as funções são diferentes.</p>
</article>
<article class="card">
<h3>Duas condições ao mesmo tempo</h3>
<p>Mais adiante, a lixeira automática usa uma condição como <code>distancia &lt;= 15 &amp;&amp; podeAbrir</code>. O operador <code>&amp;&amp;</code> significa que <strong>as duas condições precisam ser verdadeiras</strong> para o bloco executar.</p><p>Assim, os operadores aparecem primeiro em problemas concretos e depois se combinam em sistemas maiores.</p>
</article>
</div>
'''
insert_after_once(marker_p3, insert_p3, 'id="p3-operadores"', 'P3 — operadores')

# 2. Entrada/Saída — P5: ADC, referência analógica e distinção de PWM
marker_p5 = '<div class="projectHead"><span class="badge">P5</span><div><h2>Projeto 5 — Potenciômetro com PWM</h2><p>O potenciômetro é lido no A0 e controla o brilho do LED ligado ao pino PWM 9.</p></div></div>\n'
insert_p5 = '''<div class="cards" id="p5-referencia-analogica">
<article class="card wide">
<h3>De onde vem o valor lido em A0?</h3>
<p>O pino A0 recebe uma tensão variável. O conversor analógico-digital (ADC) compara essa tensão com uma <strong>tensão de referência</strong> e transforma o resultado em um número. No Arduino Uno usado neste percurso, a leitura padrão trabalha com a referência configurada pela própria placa.</p>
<p>A função <code>analogReference()</code> permite alterar a referência do ADC em placas que oferecem essa opção. Ela influencia <strong>analogRead()</strong>; não controla a saída PWM.</p>
</article>
<article class="card">
<h3>Referência padrão e outras opções</h3>
<p><code>analogReference(DEFAULT)</code> explicita a referência padrão. Em placas AVR como o Uno também existem opções internas e externas, mas os nomes e limites podem mudar de uma família de placas para outra.</p><p>Neste projeto com potenciômetro de 0 a 5 V, <strong>não precisamos alterar a referência</strong>. O objetivo é compreender que a conversão depende de um valor de referência.</p>
</article>
<article class="card errors">
<h3>Cuidado com AREF</h3>
<p>Uma referência externa exige ligação correta ao pino AREF e respeito aos limites elétricos da placa. Nunca conecte uma tensão arbitrária nesse pino. Consulte a documentação da placa antes de usar <code>EXTERNAL</code>.</p>
</article>
<article class="card worked wide">
<h3><code>analogWrite()</code> no Uno não é um DAC real</h3>
<p>Apesar do nome, <code>analogWrite()</code> no Arduino Uno gera <strong>PWM</strong>: pulsos digitais rápidos que simulam níveis intermediários para cargas como LEDs. Portanto, neste projeto temos uma <strong>entrada realmente convertida pelo ADC</strong> e uma <strong>saída PWM</strong>, não uma tensão analógica contínua produzida por um conversor digital-analógico.</p>
</article>
</div>
'''
insert_after_once(marker_p5, insert_p5, 'id="p5-referencia-analogica"', 'P5 — referência analógica')

# 3. Sensores — após o HC-SR04: tempo, memória, modularização e escopo
marker_p7_end = '</div>\n</section>\n\n<section class="project" id="p8">'
insert_p7 = '''</div>
<div class="cards" id="p7-tempo-memoria-modular">
<article class="card wide">
<h3>Depois do HC-SR04: controlar tempo sem bloquear o programa</h3>
<p>Você já utilizou <code>delay()</code> em segundos ou milissegundos e <code>delayMicroseconds()</code> para criar o pulso curto do sensor. Essas funções são úteis, mas existe uma diferença importante: durante um <code>delay()</code>, o fluxo normal do programa fica esperando.</p>
<p>Imagine uma lixeira que precisa esperar três segundos com a tampa aberta e, ao mesmo tempo, continuar observando outro sensor. Se o programa ficar preso em uma pausa longa, ele perde a oportunidade de realizar outras tarefas nesse intervalo.</p>
<img alt="Comparação entre delay, que bloqueia o fluxo, e millis, que permite acompanhar o tempo e continuar executando outras tarefas" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/tempo-delay-millis.svg"/>
</article>
<article class="card">
<h3><code>millis()</code> e <code>micros()</code></h3>
<p><code>millis()</code> informa quantos milissegundos se passaram desde o início da execução. <code>micros()</code> faz ideia semelhante em microssegundos.</p><p>Em vez de mandar o programa parar, podemos guardar um instante anterior, consultar o instante atual e decidir se o intervalo desejado já passou.</p>
</article>
<article class="card">
<h3>Timers e contadores — visão de alto nível</h3>
<p>Um <strong>timer</strong> acompanha a passagem do tempo a partir do relógio do microcontrolador. Um <strong>contador</strong> registra quantas vezes um evento ocorreu. Microcontroladores possuem recursos internos para essas tarefas; funções de alto nível podem utilizar esses recursos sem exigir que o iniciante configure registradores diretamente.</p>
</article>
<article class="card code wide">
<h3>Blink sem <code>delay()</code> <button onclick="copyCode('p7milliscode')">Copiar</button></h3>
<pre id="p7milliscode">const int pinoLed = 8;
const unsigned long intervalo = 1000;

unsigned long instanteAnterior = 0;
bool estadoLed = false;

void setup() {
  pinMode(pinoLed, OUTPUT);
}

void loop() {
  unsigned long agora = millis();

  if (agora - instanteAnterior >= intervalo) {
    instanteAnterior = agora;
    estadoLed = !estadoLed;
    digitalWrite(pinoLed, estadoLed);
  }

  // Outras leituras e decisões podem acontecer aqui.
}</pre>
<p>O LED continua alternando aproximadamente a cada segundo, mas o <code>loop()</code> não fica parado esperando. Esse padrão será útil quando um sistema precisar cuidar de várias tarefas.</p>
</article>

<article class="card wide">
<h3>Memória: por que o programa fica e algumas variáveis somem?</h3>
<p>Depois de vários projetos, já temos programa, leituras de sensores, estados e limites. Agora faz sentido perguntar onde cada informação fica armazenada. O microcontrolador usa áreas de memória com finalidades diferentes.</p>
<img alt="Diagrama introdutório de memória de programa Flash, memória de trabalho RAM e dados persistentes em EEPROM ou equivalente" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/memoria-arduino.svg"/>
</article>
<article class="card">
<h3>Memória física</h3>
<p><strong>Flash</strong> guarda o programa compilado e continua armazenando-o após desligar. <strong>RAM</strong> guarda variáveis e dados enquanto o programa está executando e perde esse conteúdo quando a placa é desligada ou reiniciada. <strong>EEPROM ou recurso persistente equivalente</strong> pode guardar pequenas configurações que precisam sobreviver ao desligamento.</p>
</article>
<article class="card">
<h3>Organização lógica dos dados</h3>
<p>No software, organizamos a memória por meio de variáveis, constantes, tipos e escopos. Quando criamos <code>float distancia</code>, por exemplo, não estamos escolhendo manualmente um endereço físico; estamos declarando ao compilador que o programa precisa guardar um valor com determinada finalidade e tipo.</p>
</article>
<article class="card errors wide">
<h3>Persistência não significa gravar o tempo todo</h3>
<p>Memórias persistentes possuem limites de escrita. Um valor de calibração pode ser salvo quando o usuário realmente altera a configuração, mas não deve ser regravado sem necessidade a cada passagem pelo <code>loop()</code>.</p>
<pre><code>#include &lt;EEPROM.h&gt;

byte limiteLuz = 40;
EEPROM.update(0, limiteLuz);   // grave quando a configuração mudar
byte recuperado = EEPROM.read(0);</code></pre>
<p>O exemplo usa um único byte apenas para mostrar a ideia. Projetos maiores exigem planejamento de endereços, tipos e quantidade de dados.</p>
</article>

<article class="card wide">
<h3>Você já começou a programar de forma modular</h3>
<p>No código do HC-SR04, o <code>loop()</code> não contém todos os detalhes do pulso e do cálculo. Ele chama <code>medirDistancia()</code>. Essa separação transforma uma tarefa específica em um bloco reutilizável e deixa o fluxo principal mais legível.</p>
<p><strong>Programação modular</strong> organiza o programa em partes com responsabilidades claras. Funções podem receber parâmetros e devolver resultados; procedimentos do tipo <code>void</code> executam uma tarefa sem devolver um valor.</p>
</article>
<article class="card">
<h3>Parâmetros e retorno</h3>
<pre><code>float medirDistancia(int trig, int echo) {
  // usa trig e echo recebidos como parâmetros
  // ...
  return distanciaCalculada;
}</code></pre>
<p>Parâmetros permitem usar a mesma lógica com valores diferentes. O <code>return</code> devolve um resultado para quem chamou a função.</p>
</article>
<article class="card">
<h3>Procedimento <code>void</code></h3>
<pre><code>void acenderAlerta() {
  digitalWrite(8, HIGH);
}</code></pre>
<p>A função executa uma ação, mas não devolve um valor. Essa divisão evita repetir comandos e ajuda a dar nomes claros às tarefas do sistema.</p>
</article>
<article class="card wide">
<h3>Escopo: uma variável existe onde?</h3>
<p>Uma variável declarada fora das funções costuma ter <strong>escopo global</strong> e pode ser usada em diferentes partes do programa. Uma variável declarada dentro de uma função ou bloco possui <strong>escopo local</strong> e só pode ser usada naquele contexto.</p>
<img alt="Diagrama de escopo mostrando variável global acessível por várias funções e variável local limitada à função em que foi criada" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/escopo-variaveis.svg"/>
<p>Prefira variáveis locais quando o dado só é necessário dentro de uma função. Isso reduz dependências e facilita entender o programa. Use globais quando vários módulos realmente precisam compartilhar aquele estado.</p>
</article>
<article class="card worked wide">
<h3>Ponte para Atuadores e Automação</h3>
<p>Agora os programas podem crescer sem virar uma sequência difícil de manter: sabemos medir tempo sem bloquear, entendemos onde programa e dados ficam e conseguimos dividir tarefas em funções com escopos claros. Nos projetos de atuadores e automação, esses conhecimentos passam a funcionar juntos.</p>
</article>
</div>
'''
# O marcador inclui o fechamento original do P7. Substituímos apenas para inserir conteúdo antes dele.
if 'id="p7-tempo-memoria-modular"' not in text:
    count = text.count(marker_p7_end)
    if count != 1:
        raise SystemExit(f'P7 — fechamento inesperado: encontrado {count} vez(es).')
    text = text.replace(marker_p7_end, insert_p7 + '</section>\n\n<section class="project" id="p8">', 1)
    changed = True
    print('P7 — tempo, memória e modularização: aplicado.')
else:
    print('P7 — tempo, memória e modularização: já aplicado.')

if changed:
    PATH.write_text(text, encoding='utf-8')
    print('Complementações curriculares aplicadas com sucesso.')
else:
    print('Nenhuma alteração necessária.')
