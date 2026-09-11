function mbbCardByTitle(scope, prefix){
  if(!scope) return null;
  return Array.from(scope.querySelectorAll('.card')).find(card => {
    const h3 = card.querySelector('h3');
    return h3 && h3.textContent.trim().startsWith(prefix);
  }) || null;
}

function mbbReplaceVisible(scope, pairs){
  if(!scope) return;
  let html = scope.innerHTML;
  const tokens = [];
  pairs.forEach((pair, index) => {
    const token = `__MBB_REN_${index}_${Date.now()}__`;
    tokens.push([token, pair[1]]);
    html = html.split(pair[0]).join(token);
  });
  tokens.forEach(pair => { html = html.split(pair[0]).join(pair[1]); });
  scope.innerHTML = html;
}

function prepararFundamentosMbb(){
  const intro = document.getElementById('intro');
  if(!intro) return;

  const profundidade = Array.from(intro.querySelectorAll('h3')).find(h => h.textContent.trim() === 'O nível de profundidade agora');
  const ancora = profundidade && profundidade.closest('.closing-panel');

  if(ancora && !document.getElementById('fund-experimentar')){
    ancora.insertAdjacentHTML('afterend', `
      <section class="section-card" id="fund-experimentar">
        <h2>Experimentar — bancada de componentes</h2>
        <p>Antes de energizar qualquer montagem, transforme os nomes dos componentes em objetos reais de bancada. O objetivo é <strong>identificar, orientar, manusear e registrar</strong> o que você tem em mãos.</p>
        <div class="journey-grid">
          <article class="journey-card"><h3>Capacitor</h3><p>Leia as marcações disponíveis. Se for eletrolítico, identifique a faixa do terminal negativo e confirme a tensão nominal. Não inverta a polaridade nem aplique tensão acima da indicada.</p></article>
          <article class="journey-card"><h3>Indutor</h3><p>Observe formato e identificação. Diferencie-o visualmente de resistor e capacitor e registre sua função geral: armazenar energia em campo magnético e participar de filtros e conversores.</p></article>
          <article class="journey-card"><h3>Circuito integrado</h3><p>Localize a marca de orientação — chanfro ou ponto, conforme o encapsulamento — e identifique o código do componente. Antes de alimentar um CI desconhecido, consulte o datasheet e confirme pinagem e tensão.</p></article>
          <article class="journey-card wide"><h3>Registro de bancada</h3><p>Para cada peça, anote: <strong>nome, como foi identificada, função geral, polaridade/orientação quando houver e um cuidado de manuseio</strong>. A prática termina quando você consegue reconhecer e manipular a peça com segurança — não quando força uma montagem sem saber o que está fazendo.</p></article>
        </div>
      </section>
    `);
  }

  const experimentar = document.getElementById('fund-experimentar');
  if(experimentar && !document.getElementById('fund-minilabs')){
    experimentar.insertAdjacentHTML('afterend', `
      <section class="section-card" id="fund-minilabs">
        <h2>Mini-laboratórios — observar o componente funcionando</h2>
        <p>Nem todo componente precisa virar um projeto grande. Aqui, uma experiência curta serve para ligar o conceito ao comportamento físico.</p>
        <div class="cards">
          <article class="card wide">
            <h3>Mini-lab 1 — Curva de carga e descarga de um capacitor</h3>
            <p><strong>Situação:</strong> até aqui você leu que o capacitor armazena carga. Agora vamos observar essa característica no Monitor Serial.</p>
            <p><strong>Componentes:</strong> Arduino Uno, protoboard, 1 capacitor eletrolítico de 100 µF com tensão nominal de pelo menos 10 V, 1 resistor de 10 kΩ e jumpers.</p>
          </article>
          <article class="card wide">
            <h3>Montagem</h3>
            <figure class="circuitFigure">
              <img class="circuitPhoto" src="../img/arduino/fundamentos/lab-capacitor-rc.svg" alt="Diagrama do mini-laboratório de capacitor: pino digital 8 ligado por resistor de 10 kΩ ao nó de leitura A0 e ao terminal positivo de um capacitor de 100 µF, com terminal negativo no GND." loading="lazy" decoding="async"/>
              <figcaption>D8 → resistor de 10 kΩ → nó de leitura. Esse nó vai ao A0 e ao terminal positivo do capacitor de 100 µF; o terminal negativo do capacitor vai ao GND.</figcaption>
            </figure>
            <p><strong>Atenção:</strong> use apenas a alimentação de 5 V do Arduino neste experimento e respeite a polaridade do capacitor eletrolítico.</p>
          </article>
          <article class="card code wide">
            <h3>Código completo <button onclick="copyCode('fundCapCode')">Copiar</button></h3>
            <pre id="fundCapCode">const int pinoCarga = 8;
const int pinoLeitura = A0;

void mostrarCurva(const char* etapa) {
  for (int i = 0; i &lt; 30; i++) {
    int valor = analogRead(pinoLeitura);
    Serial.print(etapa);
    Serial.print(";");
    Serial.println(valor);
    delay(100);
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(pinoCarga, OUTPUT);
  digitalWrite(pinoCarga, LOW);
  delay(1000);
}

void loop() {
  digitalWrite(pinoCarga, HIGH);
  mostrarCurva("carga");

  digitalWrite(pinoCarga, LOW);
  mostrarCurva("descarga");

  delay(1500);
}</pre>
          </article>
          <article class="card">
            <h3>O que observar</h3>
            <ol><li>Abra o Monitor Serial em 9600.</li><li>Observe os valores durante a etapa <strong>carga</strong>.</li><li>Depois observe a etapa <strong>descarga</strong>.</li><li>Compare a mudança gradual com um simples HIGH/LOW digital.</li></ol>
          </article>
          <article class="card">
            <h3>O que significa</h3>
            <p>O resistor limita a corrente e, junto com o capacitor, faz a tensão do nó variar ao longo do tempo. O A0 permite enxergar essa variação numericamente. O objetivo não é calcular eletrônica avançada, mas <strong>ver o capacitor armazenando e liberando carga</strong>.</p>
          </article>
          <article class="card wide">
            <h3>Mini-lab 2 — CI sem adivinhação</h3>
            <p>Escolha um circuito integrado disponível no kit. Sem energizá-lo, localize o código do componente, identifique o pino 1 pela marca de orientação e consulte o datasheet. Registre <strong>função, tensão de alimentação, pinos de alimentação e uma aplicação possível</strong>.</p>
            <p><strong>Regra:</strong> se você não conseguiu identificar o CI e sua alimentação, a prática termina na pesquisa. Não existe ganho pedagógico em ligar um chip desconhecido “para ver o que acontece”.</p>
          </article>
        </div>
      </section>
    `);
  }

  const mini = document.getElementById('fund-minilabs');
  if(mini && !document.getElementById('fund-desafios')){
    mini.insertAdjacentHTML('afterend', `
      <section class="section-card" id="fund-desafios">
        <h2>Desafios — escolher e justificar</h2>
        <p>Agora não há montagem pronta para copiar. Leia a situação, escolha o componente ou procedimento mais adequado e justifique.</p>
        <div class="journey-grid">
          <article class="journey-card"><h3>1. LED sem proteção</h3><p>Um LED será ligado a uma saída do Arduino. Qual componente deve limitar a corrente e por quê?</p></article>
          <article class="journey-card"><h3>2. Valor que muda aos poucos</h3><p>Você quer observar uma tensão que não salta instantaneamente de 0 para 5 V. Qual componente do mini-lab ajuda a produzir esse comportamento?</p></article>
          <article class="journey-card"><h3>3. CI desconhecido</h3><p>Você encontra um chip com oito ou mais terminais. O que deve descobrir antes de conectá-lo à alimentação?</p></article>
          <article class="journey-card"><h3>4. Campo magnético</h3><p>Qual componente básico está associado ao armazenamento de energia em campo magnético e aparece em filtros e conversores?</p></article>
          <article class="journey-card wide"><h3>5. Transferência</h3><p>Escolha dois componentes desta etapa e explique: <strong>como identificá-los fisicamente, qual função geral possuem e qual erro de manuseio você evitaria</strong>.</p></article>
        </div>
      </section>
    `);
  }
}

window.MbbArduinoFundamentos = { preparar: prepararFundamentosMbb };
