function prepararFundamentosMbb(){
  const intro = document.getElementById('intro');
  const p1 = document.getElementById('p1');
  if(!intro || !p1) return;

  if(!document.getElementById('fund-experimentar')){
    intro.insertAdjacentHTML('afterend', `
      <section class="project" id="fund-experimentar">
        <div class="projectHead"><span class="badge">Fundamentos</span><div><h2>Experimentar — bancada de componentes</h2><p>Reconhecer, orientar e manusear componentes antes de energizar qualquer montagem.</p></div></div>
        <div class="cards">
          <article class="card wide"><h3>Por que esta etapa existe?</h3><p>Na teoria, capacitor, indutor e circuito integrado são nomes. Na bancada, eles têm formato, marcações, orientação e limites elétricos. Antes de usá-los, você precisa saber <strong>o que está segurando e o que deve conferir</strong>.</p></article>
          <article class="card"><h3>Capacitor</h3><p>Leia as marcações disponíveis. Se for eletrolítico, identifique a faixa do terminal negativo e confirme a tensão nominal. Não inverta a polaridade nem aplique tensão acima da indicada.</p></article>
          <article class="card"><h3>Indutor</h3><p>Observe formato e identificação. Diferencie-o visualmente de resistor e capacitor e registre sua função geral: armazenar energia em campo magnético e participar de filtros e conversores.</p></article>
          <article class="card"><h3>Circuito integrado</h3><p>Localize a marca de orientação — chanfro ou ponto, conforme o encapsulamento — e identifique o código do componente. Antes de alimentar um CI desconhecido, consulte o datasheet e confirme pinagem e tensão.</p></article>
          <article class="card"><h3>Registro de bancada</h3><p>Para cada peça, anote: <strong>nome, identificação, função geral, polaridade/orientação quando houver e um cuidado de manuseio</strong>.</p></article>
          <article class="card exercise wide"><h3>Atividade prática</h3><p>Separe fisicamente um capacitor, um indutor e um circuito integrado do kit. Sem energizar nada, faça o registro de bancada dos três componentes e explique qual deles exigiu mais pesquisa para ser identificado corretamente.</p></article>
        </div>
      </section>
    `);
  }

  if(!document.getElementById('fund-minilabs')){
    p1.insertAdjacentHTML('afterend', `
      <section class="project" id="fund-minilabs">
        <div class="projectHead"><span class="badge">Prática</span><div><h2>Mini-laboratórios — observar componentes funcionando</h2><p>Depois do primeiro circuito com LED, use experiências curtas para transformar conceitos em comportamento físico observável.</p></div></div>
        <div class="cards">
          <article class="card wide"><h3>Mini-lab 1 — O capacitor mantém energia por um instante</h3><p><strong>Situação:</strong> você já montou o LED protegido e sabe que o resistor limita corrente. Agora vamos acrescentar um capacitor para observar o que acontece quando a alimentação é retirada.</p><p><strong>Componentes:</strong> Arduino Uno usado apenas como fonte de 5 V e GND, protoboard, 1 LED, 1 resistor de 220 Ω, 1 resistor de 1 kΩ, 1 capacitor eletrolítico entre 470 µF e 1000 µF com tensão nominal de pelo menos 10 V e jumpers.</p></article>
          <article class="card wide"><h3>Montagem</h3><figure class="circuitFigure"><img class="circuitPhoto" src="../img/arduino/fundamentos/lab-capacitor-rc.svg" alt="Diagrama do mini-laboratório de capacitor: 5 V passa por resistor de 220 ohms até um nó ligado ao capacitor eletrolítico e a um ramo com resistor de 1 quilohm e LED até o GND." loading="lazy" decoding="async"/><figcaption>5 V → 220 Ω → nó de carga. No mesmo nó ficam o capacitor e o ramo 1 kΩ → LED → GND. O terminal negativo do capacitor vai ao GND.</figcaption></figure><p><strong>Atenção:</strong> respeite a polaridade do capacitor eletrolítico e use apenas os 5 V do Arduino nesta experiência.</p></article>
          <article class="card"><h3>Como testar</h3><ol><li>Com o circuito desligado, confira polaridade do LED e do capacitor.</li><li>Conecte o jumper de 5 V e observe o LED acender.</li><li>Aguarde alguns segundos para o capacitor carregar.</li><li>Retire <strong>apenas o jumper de 5 V</strong>, mantendo o GND conectado.</li><li>Observe se o LED permanece aceso ou enfraquece por um breve instante.</li><li>Repita a experiência removendo o capacitor e compare.</li></ol></article>
          <article class="card"><h3>O que significa</h3><p>Sem o capacitor, retirar os 5 V interrompe praticamente de imediato a alimentação do LED. Com o capacitor carregado, parte da energia armazenada é liberada pelo ramo do LED durante a descarga. O efeito depende da capacitância e da corrente do circuito.</p></article>
          <article class="card wide"><h3>Mini-lab 2 — CI sem adivinhação</h3><p>Escolha um circuito integrado disponível no kit. Sem energizá-lo, localize o código do componente, identifique o pino 1 pela marca de orientação e consulte o datasheet. Registre <strong>função, tensão de alimentação, pinos de alimentação e uma aplicação possível</strong>.</p><p><strong>Regra:</strong> se você não conseguiu identificar o CI e sua alimentação, a prática termina na pesquisa. Não ligue um chip desconhecido apenas “para ver o que acontece”.</p></article>
          <article class="card worked wide"><h3>Por que o indutor não ganhou um circuito forçado?</h3><p>O Plano pede contato e manuseio do componente, mas um experimento realmente significativo com indutor costuma exigir um contexto de filtro, conversão de energia ou acionamento magnético. Nesta etapa, reconhecer e compreender sua função é mais pedagógico do que criar uma montagem artificial apenas para dizer que ele foi usado.</p></article>
        </div>
      </section>
    `);
  }

  const mini = document.getElementById('fund-minilabs');
  if(mini && !document.getElementById('fund-desafios')){
    mini.insertAdjacentHTML('afterend', `
      <section class="project" id="fund-desafios">
        <div class="projectHead"><span class="badge">Transferir</span><div><h2>Desafios — escolher e justificar</h2><p>Sem receita pronta: use o que foi aprendido para tomar decisões de bancada.</p></div></div>
        <div class="cards">
          <article class="card"><h3>1. LED sem proteção</h3><p>Um LED será ligado a uma saída do Arduino. Qual componente deve limitar a corrente e por quê?</p></article>
          <article class="card"><h3>2. Energia por um instante</h3><p>Você quer que um circuito mantenha uma pequena quantidade de energia por um curto período depois que a alimentação for retirada. Qual componente básico pode ajudar?</p></article>
          <article class="card"><h3>3. CI desconhecido</h3><p>Você encontra um chip com vários terminais. O que precisa descobrir antes de conectá-lo à alimentação?</p></article>
          <article class="card"><h3>4. Campo magnético</h3><p>Qual componente básico está associado ao armazenamento de energia em campo magnético e aparece em filtros e conversores?</p></article>
          <article class="card wide"><h3>5. Diagnóstico de bancada</h3><p>Escolha dois componentes desta etapa e explique: <strong>como identificá-los fisicamente, qual função geral possuem, qual cuidado de manuseio adotaria e que informação consultaria antes de ligá-los</strong>.</p></article>
          <article class="card exercise wide"><h3>Desafio de transferência</h3><p>Imagine que você recebeu uma caixa com peças misturadas. Organize um procedimento para separar resistores, capacitores, indutores e circuitos integrados sem energizar nada. Explique quais evidências visuais e documentais usaria e em que momento consultaria um datasheet.</p></article>
        </div>
      </section>
    `);
  }
}

window.MbbArduinoFundamentos = { preparar: prepararFundamentosMbb };
