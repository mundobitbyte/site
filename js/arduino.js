(() => {
  const style = document.createElement('style');
  style.textContent = `
    body > header{
      height:46px !important;
      min-height:46px !important;
      max-height:46px !important;
      padding:0 16px !important;
      display:flex !important;
      flex-direction:row !important;
      align-items:center !important;
      justify-content:space-between !important;
      gap:12px !important;
      text-align:left !important;
    }
    body > header .header-left{
      display:flex !important;
      flex-direction:row !important;
      align-items:center !important;
      justify-content:flex-start !important;
      gap:12px !important;
      min-width:0 !important;
      flex:1 1 auto !important;
      text-align:left !important;
    }
    body > header h1{
      margin:0 !important;
      text-align:left !important;
    }
    body > header .brand{
      margin-left:auto !important;
      text-align:right !important;
    }
    #arduinoModuleMenu .module-btn{
      font-family:inherit !important;
    }
    @media(max-width:760px){
      body > header{
        padding:0 10px !important;
        gap:8px !important;
      }
      body > header .header-left{
        gap:8px !important;
      }
      body > header .brand{
        display:none !important;
      }
    }
  `;
  document.head.appendChild(style);
})();

function copyCode(id){
  const code = document.getElementById(id);
  if(code && navigator.clipboard){
    navigator.clipboard.writeText(code.textContent);
  }
}

document.addEventListener('click', function(event){
  const btn = event.target.closest('.mc-option');
  if(!btn) return;

  const question = btn.closest('.mc-question');
  if(!question || question.classList.contains('answered')) return;

  const feedback = question.querySelector('.mc-feedback');
  const options = question.querySelectorAll('.mc-option');
  const correct = btn.dataset.correct === 'true';

  question.classList.add('answered');

  options.forEach(option => {
    option.disabled = true;
    if(option.dataset.correct === 'true'){
      option.classList.add('correct');
    }
  });

  if(correct){
    btn.classList.add('correct');
    feedback.textContent = 'Certa.';
    feedback.className = 'mc-feedback ok';
  }else{
    btn.classList.add('wrong');
    feedback.textContent = 'Errada.';
    feedback.className = 'mc-feedback no';
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const moduleButtons = Array.from(document.querySelectorAll('#arduinoModuleMenu .module-btn'));
  const stageLinks = Array.from(document.querySelectorAll('#stageMenu .stage-link'));
  const stageToggle = document.getElementById('stageToggle');
  const stageClose = document.getElementById('stageClose');
  const stageBackdrop = document.getElementById('stageBackdrop');

  if(!layout || !moduleButtons.length) return;

  const modules = {
    fundamentos: { first: '#intro', sidebar: false },
    io: { first: '#p1', sidebar: true },
    sensores: { first: '#p6', sidebar: true },
    atuadores: { first: '#p8', sidebar: true }
  };

  const sectionModule = {
    '#intro': 'fundamentos',
    '#p1': 'io', '#p2': 'io', '#p3': 'io', '#p4': 'io', '#p5': 'io', '#lab1': 'io',
    '#p6': 'sensores', '#p7': 'sensores', '#lab2': 'sensores',
    '#p8': 'atuadores', '#lab3': 'atuadores', '#p9': 'atuadores', '#lab4': 'atuadores'
  };

  let currentModule = 'fundamentos';

  function closeDrawer(){
    layout.classList.remove('drawer-open');
    if(stageBackdrop) stageBackdrop.hidden = true;
    if(stageToggle) stageToggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer(){
    if(layout.classList.contains('no-sidebar')) return;
    layout.classList.add('drawer-open');
    if(stageBackdrop) stageBackdrop.hidden = false;
    if(stageToggle) stageToggle.setAttribute('aria-expanded', 'true');
  }

  function setModule(moduleName){
    if(!modules[moduleName]) return;
    currentModule = moduleName;
    const hasSidebar = modules[moduleName].sidebar;

    moduleButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.module === moduleName);
    });

    layout.classList.toggle('no-sidebar', !hasSidebar);

    stageLinks.forEach(link => {
      const allowed = (link.dataset.module || '').split(/\s+/).includes(moduleName);
      link.classList.toggle('module-visible', allowed && hasSidebar);
    });

    closeDrawer();
  }

  function setActiveStage(hash){
    stageLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
  }

  function showPanel(hash, updateUrl){
    const target = document.querySelector(hash);
    if(!target) return;

    const topPanel = target.matches('main > section[id]')
      ? target
      : target.closest('main > section[id]');

    if(!topPanel) return;

    document.querySelectorAll('main > section[id]').forEach(section => {
      section.classList.remove('active-panel');
    });
    topPanel.classList.add('active-panel');

    const topHash = '#' + topPanel.id;
    setActiveStage(topHash);

    if(updateUrl){
      history.replaceState(null, '', hash);
    }

    window.scrollTo(0, 0);
    if(hash !== topHash){
      requestAnimationFrame(() => {
        const nested = document.querySelector(hash);
        if(nested) nested.scrollIntoView({block:'start'});
      });
    }
  }

  function activateModule(moduleName, targetHash, updateUrl){
    setModule(moduleName);
    const hash = targetHash || modules[moduleName].first;
    showPanel(hash, updateUrl);
  }

  moduleButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      const moduleName = this.dataset.module;
      const target = this.dataset.target || modules[moduleName].first;
      activateModule(moduleName, target, true);
    });
  });

  stageLinks.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const hash = this.getAttribute('href');
      showPanel(hash, true);
      closeDrawer();
    });
  });

  if(stageToggle) stageToggle.addEventListener('click', openDrawer);
  if(stageClose) stageClose.addEventListener('click', closeDrawer);
  if(stageBackdrop) stageBackdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeDrawer();
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : '#intro';

  let initialModule = sectionModule[initialHash];
  if(!initialModule){
    const initialTarget = document.querySelector(initialHash);
    const topPanel = initialTarget && (initialTarget.matches('main > section[id]')
      ? initialTarget
      : initialTarget.closest('main > section[id]'));
    if(topPanel && topPanel.id === 'exercicios'){
      initialModule = 'io';
    }
  }

  activateModule(initialModule || 'fundamentos', initialHash, false);
});

/* Blocos 5 a 10: acrescentam apenas acessos às novas páginas, preservando os módulos 1–4. */
document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

  if(!menu.querySelector('a[href="arduino-programacao-aplicada.html"]')){
    const link5 = document.createElement('a');
    link5.className = 'module-btn';
    link5.href = 'arduino-programacao-aplicada.html';
    link5.textContent = '5. Programação Aplicada';
    link5.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link5, exercicios);
    else menu.appendChild(link5);
  }

  if(!menu.querySelector('a[href="arduino-conectividade.html"]')){
    const link6 = document.createElement('a');
    link6.className = 'module-btn';
    link6.href = 'arduino-conectividade.html';
    link6.textContent = '6. Conectividade';
    link6.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link6, exercicios);
    else menu.appendChild(link6);
  }

  if(!menu.querySelector('a[href="arduino-iot.html"]')){
    const link7 = document.createElement('a');
    link7.className = 'module-btn';
    link7.href = 'arduino-iot.html';
    link7.textContent = '7. Internet das Coisas';
    link7.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link7, exercicios);
    else menu.appendChild(link7);
  }

  if(!menu.querySelector('a[href="arduino-protocolos.html"]')){
    const link8 = document.createElement('a');
    link8.className = 'module-btn';
    link8.href = 'arduino-protocolos.html';
    link8.textContent = '8. RTOS e Protocolos';
    link8.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link8, exercicios);
    else menu.appendChild(link8);
  }

  if(!menu.querySelector('a[href="arduino-seguranca.html"]')){
    const link9 = document.createElement('a');
    link9.className = 'module-btn';
    link9.href = 'arduino-seguranca.html';
    link9.textContent = '9. Proteção e Segurança';
    link9.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link9, exercicios);
    else menu.appendChild(link9);
  }

  if(!menu.querySelector('a[href="arduino-projeto-iot.html"]')){
    const link10 = document.createElement('a');
    link10.className = 'module-btn';
    link10.href = 'arduino-projeto-iot.html';
    link10.textContent = '10. Projeto IoT';
    link10.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link10, exercicios);
    else menu.appendChild(link10);
  }
});

/* Fechamento curricular MbB 2026: correções cirúrgicas dos Blocos 1–4. */
document.addEventListener('DOMContentLoaded', function(){
  function cardByTitle(scope, prefix){
    if(!scope) return null;
    return Array.from(scope.querySelectorAll('.card')).find(card => {
      const h3 = card.querySelector('h3');
      return h3 && h3.textContent.trim().startsWith(prefix);
    }) || null;
  }

  function replaceWithPlaceholders(scope, pairs){
    if(!scope) return;
    let html = scope.innerHTML;
    const tokens = [];
    pairs.forEach((pair, index) => {
      const token = `__MBB_REN_${index}_${Date.now()}__`;
      tokens.push([token, pair[1]]);
      html = html.split(pair[0]).join(token);
    });
    tokens.forEach(pair => {
      html = html.split(pair[0]).join(pair[1]);
    });
    scope.innerHTML = html;
  }

  /* Base 2 — a ementa pede prática de manuseio, não apenas reconhecimento. */
  const intro = document.getElementById('intro');
  if(intro && !document.getElementById('fund-manuseio-componentes')){
    const profundidade = Array.from(intro.querySelectorAll('h3')).find(h => h.textContent.trim() === 'O nível de profundidade agora');
    const ancora = profundidade && profundidade.closest('.closing-panel');
    if(ancora){
      ancora.insertAdjacentHTML('afterend', `
        <div class="closing-panel" id="fund-manuseio-componentes">
          <h3>Prática de manuseio — reconhecer antes de energizar</h3>
          <p>Separe, com o circuito desligado, <strong>um capacitor, um indutor e um circuito integrado</strong> do kit. O objetivo não é montar um circuito avançado, mas aprender a observar o componente físico antes de usá-lo.</p>
          <div class="journey-grid">
            <article class="journey-card"><h3>1. Capacitor</h3><p>Leia as marcações disponíveis. Se for eletrolítico, identifique a indicação de polaridade e localize o terminal negativo antes de colocá-lo na protoboard. Não energize um capacitor cuja tensão nominal ou polaridade você não conferiu.</p></article>
            <article class="journey-card"><h3>2. Indutor</h3><p>Observe formato e identificação. Diferencie-o visualmente de um resistor e registre sua função geral. Nesta prática, ele será apenas reconhecido e manuseado, sem exigir cálculo de indutância.</p></article>
            <article class="journey-card"><h3>3. Circuito integrado</h3><p>Localize a marca de orientação — chanfro ou ponto, conforme o encapsulamento — e posicione o CI atravessando o vão central da protoboard. Não force terminais e não alimente um CI desconhecido sem consultar sua identificação.</p></article>
            <article class="journey-card wide"><h3>4. Registro de bancada</h3><p>Anote para cada peça: <strong>nome, como foi identificada, função geral e um cuidado de manuseio</strong>. Depois retire os componentes com o circuito ainda desligado. A evidência da prática é saber reconhecer e manipular a peça com segurança, não fazê-la “funcionar” a qualquer custo.</p></article>
          </div>
        </div>
      `);
    }
  }

  /* Projeto 4 — buzzer ativo: acionamento digital; tone() fica para o buzzer passivo do sensor de ré. */
  const p4 = document.getElementById('p4');
  if(p4){
    const resumo = p4.querySelector('.projectHead p');
    if(resumo) resumo.textContent = 'O buzzer ativo é ligado e desligado pelo pino digital 8, reutilizando o mesmo princípio de saída digital já visto no LED.';

    const imagem = p4.querySelector('.circuitPhoto');
    if(imagem) imagem.alt = 'Projeto 4 — Buzzer ativo ligado ao pino digital 8 e ao GND, funcionando como saída sonora liga/desliga.';
    const legenda = p4.querySelector('figcaption');
    if(legenda) legenda.textContent = 'Projeto 4 — Buzzer ativo: o pino digital 8 liga ou desliga a saída sonora; o terminal negativo retorna ao GND.';

    const objetivo = cardByTitle(p4, '1. Objetivo');
    if(objetivo) objetivo.innerHTML = '<h3>1. Objetivo do projeto</h3><p>Fazer o Arduino controlar um <strong>buzzer ativo</strong>, alternando som e silêncio. O buzzer ativo já possui um oscilador interno: nesta etapa não precisamos escolher uma frequência. O objetivo é perceber que ele é uma saída sonora que pode ser ligada e desligada por um pino digital, assim como o LED era uma saída visual.</p>';

    const montagem = cardByTitle(p4, '4. Explicação');
    if(montagem) montagem.innerHTML = '<h3>4. Explicação da montagem</h3><p>O terminal positivo do buzzer ativo é ligado ao pino digital <strong>8</strong> e o terminal negativo ao <strong>GND</strong>. O caminho elétrico é: <strong>pino digital 8 → buzzer ativo → GND</strong>.</p><p>Quando o programa executa <code>digitalWrite(pinoBuzzer, HIGH)</code>, o buzzer recebe o nível de acionamento e produz seu próprio tom. Com <code>digitalWrite(pinoBuzzer, LOW)</code>, ele é desligado. A frequência do som não é definida pelo Arduino neste projeto.</p>';

    const descricao = cardByTitle(p4, '5. Descrição');
    if(descricao) descricao.innerHTML = '<h3>5. Descrição textual do circuito visual</h3><p>A imagem mostra o Arduino Uno R3 e a protoboard. O terminal positivo do buzzer ativo vai ao pino digital <strong>8</strong>; o terminal negativo vai ao <strong>GND</strong>. O desenho deve destacar que se trata de uma saída sonora simples, controlada pelos estados digitais HIGH e LOW.</p><p>Em uma montagem física, confirme também a corrente exigida pelo buzzer ou módulo utilizado. Cargas que ultrapassem a capacidade do GPIO precisam de acionamento apropriado, como um transistor.</p>';

    const code = document.getElementById('p4code');
    if(code) code.textContent = `// Projeto 4: Buzzer ativo
// O buzzer ativo possui oscilador interno.
// O Arduino apenas liga e desliga a saída no pino digital 8.

int pinoBuzzer = 8;

void setup() {
  pinMode(pinoBuzzer, OUTPUT);
  digitalWrite(pinoBuzzer, LOW);
}

void loop() {
  digitalWrite(pinoBuzzer, HIGH);
  delay(1000);

  digitalWrite(pinoBuzzer, LOW);
  delay(1000);
}`;

    const explicacao = cardByTitle(p4, '7. Explicação');
    if(explicacao) explicacao.innerHTML = '<h3>7. Explicação linha por linha</h3><div class="explain"><p><code>int pinoBuzzer = 8;</code> — guarda o pino usado pelo buzzer.</p><p><code>pinMode(pinoBuzzer, OUTPUT);</code> — configura o pino 8 como saída digital.</p><p><code>digitalWrite(pinoBuzzer, LOW);</code> — começa com o buzzer desligado.</p><p><code>digitalWrite(pinoBuzzer, HIGH);</code> — liga o buzzer ativo; o oscilador interno produz o som.</p><p><code>delay(1000);</code> — mantém o estado atual por um segundo.</p><p><code>digitalWrite(pinoBuzzer, LOW);</code> — desliga o buzzer.</p><p><code>loop()</code> — repete continuamente o ciclo de som e silêncio.</p></div>';

    const trabalhado = cardByTitle(p4, '8. O que foi trabalhado');
    if(trabalhado) trabalhado.innerHTML = '<h3>8. O que foi trabalhado</h3><ul><li>Buzzer ativo como dispositivo de saída</li><li>Diferença entre saída visual e saída sonora</li><li>Reutilização de <code>pinMode()</code> e <code>digitalWrite()</code></li><li>Estados <code>HIGH</code> e <code>LOW</code></li><li>Controle de tempo com <code>delay()</code></li><li>Repetição contínua com <code>loop()</code></li><li>Polaridade e GND comum</li><li>Diferença conceitual entre buzzer ativo e passivo</li></ul><p><strong>Ponte:</strong> mais adiante, o Sensor de ré usa um <strong>buzzer passivo</strong>. Ali <code>tone()</code> fará sentido porque o Arduino precisará gerar um sinal oscilante e escolher a frequência.</p>';

    const erros = cardByTitle(p4, '10. Erros comuns');
    if(erros) erros.innerHTML = '<h3>10. Erros comuns</h3><table><tr><th>Erro</th><th>Consequência</th></tr><tr><td>Inverter positivo e negativo do buzzer</td><td>O componente pode não funcionar corretamente.</td></tr><tr><td>Ligar o positivo em pino diferente do código</td><td>O buzzer não responde ao programa esperado.</td></tr><tr><td>Esquecer o GND</td><td>O circuito não fecha.</td></tr><tr><td>Ligar o buzzer diretamente ao 5V</td><td>Ele fica ligado sem obedecer ao controle do pino digital.</td></tr><tr><td>Usar um buzzer passivo esperando o mesmo comportamento</td><td>Um passivo precisa de um sinal oscilante, como o gerado por <code>tone()</code>, para produzir um tom de forma adequada.</td></tr><tr><td>Usar um buzzer ou módulo que exija corrente acima da capacidade do GPIO</td><td>O acionamento direto deixa de ser adequado; use um estágio de acionamento compatível.</td></tr></table>';

    const exercicio = cardByTitle(p4, '11. Exercício');
    if(exercicio) exercicio.innerHTML = '<h3>11. Exercício proposto</h3><p>Troque os dois <code>delay(1000)</code> por <code>delay(300)</code>. O ciclo ficou mais rápido ou mais lento? Explique separadamente o papel de <code>HIGH/LOW</code> e o papel do <code>delay()</code>.</p>';
  }

  /* Exercícios do Projeto 4 acompanham a correção do buzzer ativo. */
  const exBuzzer = document.getElementById('ex-buzzer');
  if(exBuzzer){
    exBuzzer.innerHTML = `
      <h3>Projeto 4 — Buzzer</h3>
      <p class="topic-intro">Exercícios sobre saída sonora, buzzer ativo, pino digital 8, digitalWrite(), HIGH/LOW e controle de tempo com delay().</p>
      <div class="exercise-grid">
        <article class="exercise-box wide"><h4>Questionário interativo — 10 questões de múltipla escolha</h4><div class="box-body"><div class="use-note">Clique em uma alternativa. Após a escolha, a questão será bloqueada e o sistema informará se a resposta está certa ou errada.</div><ol>
          <li class="mc-question"><span class="level">Fácil</span>O buzzer está ligado ao:<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) A0</button><button class="mc-option" data-correct="true" type="button">B) Pino digital 8</button><button class="mc-option" data-correct="false" type="button">C) Pino 2</button><button class="mc-option" data-correct="false" type="button">D) 5V direto sem controle</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span>O buzzer é dispositivo de:<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) Entrada</button><button class="mc-option" data-correct="true" type="button">B) Saída</button><button class="mc-option" data-correct="false" type="button">C) Armazenamento</button><button class="mc-option" data-correct="false" type="button">D) Leitura analógica</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span>Qual estado liga o buzzer ativo neste projeto?<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) HIGH</button><button class="mc-option" data-correct="false" type="button">B) LOW</button><button class="mc-option" data-correct="false" type="button">C) INPUT</button><button class="mc-option" data-correct="false" type="button">D) A0</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span>Qual comando é usado para alterar o estado do buzzer ativo?<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) analogRead()</button><button class="mc-option" data-correct="true" type="button">B) digitalWrite()</button><button class="mc-option" data-correct="false" type="button">C) map()</button><button class="mc-option" data-correct="false" type="button">D) digitalRead()</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span>O que <code>digitalWrite(pinoBuzzer, LOW)</code> faz neste projeto?<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) Mede frequência</button><button class="mc-option" data-correct="true" type="button">B) Desliga o buzzer</button><button class="mc-option" data-correct="false" type="button">C) Lê o botão</button><button class="mc-option" data-correct="false" type="button">D) Muda o resistor</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span><code>delay()</code> controla:<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) A duração de som e silêncio</button><button class="mc-option" data-correct="false" type="button">B) O valor do resistor</button><button class="mc-option" data-correct="false" type="button">C) A leitura do potenciômetro</button><button class="mc-option" data-correct="false" type="button">D) A posição do botão</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level mid">Intermediário</span>Buzzer ativo ligado direto no 5V tende a:<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) Ficar ligado sem controle do código</button><button class="mc-option" data-correct="false" type="button">B) Ler valor analógico</button><button class="mc-option" data-correct="false" type="button">C) Controlar LED</button><button class="mc-option" data-correct="false" type="button">D) Alterar PWM</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span>Cuidado elétrico importante no buzzer ativo:<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) Respeitar polaridade e corrente do componente</button><button class="mc-option" data-correct="false" type="button">B) Ligar o terminal central no A0</button><button class="mc-option" data-correct="false" type="button">C) Atravessar o vão central</button><button class="mc-option" data-correct="false" type="button">D) Usar INPUT_PULLUP</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level mid">Intermediário</span>Por que <code>tone()</code> não é necessário neste projeto?<div class="mc-options"><button class="mc-option" data-correct="true" type="button">A) O buzzer ativo já possui oscilador interno</button><button class="mc-option" data-correct="false" type="button">B) O Arduino não aceita funções</button><button class="mc-option" data-correct="false" type="button">C) O pino 8 é analógico</button><button class="mc-option" data-correct="false" type="button">D) O GND gera a frequência</button></div><div aria-live="polite" class="mc-feedback"></div></li>
          <li class="mc-question"><span class="level">Fácil</span>Comportamento esperado:<div class="mc-options"><button class="mc-option" data-correct="false" type="button">A) Som contínuo sem pausa</button><button class="mc-option" data-correct="true" type="button">B) Som intermitente</button><button class="mc-option" data-correct="false" type="button">C) Brilho gradual</button><button class="mc-option" data-correct="false" type="button">D) Botão invertendo lógica</button></div><div aria-live="polite" class="mc-feedback"></div></li>
        </ol></div></article>
        <article class="exercise-box"><h4>Questões abertas</h4><div class="box-body"><ol class="open-list"><li><span class="level">Fácil</span>Explique a diferença entre saída visual e saída sonora.</li><li><span class="level">Fácil</span>Descreva o ciclo HIGH → espera → LOW → espera.</li><li><span class="level">Fácil</span>Explique por que um buzzer ativo pode ser ligado e desligado sem definir frequência no código.</li><li><span class="level">Fácil</span>O que acontece se reduzir os delays de 1000 para 300?</li><li><span class="level hard">Difícil</span>Qual é a diferença conceitual entre o buzzer ativo deste projeto e o buzzer passivo usado depois no Sensor de ré?</li></ol></div></article>
        <article class="exercise-box"><h4>Complete o código</h4><div class="box-body"><div class="task-note"><strong>Como pensar:</strong> o buzzer ativo é uma saída digital: um estado liga, o outro desliga.</div><p>Circuito usado: buzzer ativo no pino digital 8. Objetivo: emitir som intermitente.</p><pre class="exercise-code">int pinoBuzzer = ____;

void setup() {
  pinMode(pinoBuzzer, ______);
}

void loop() {
  ____________(pinoBuzzer, HIGH);
  delay(1000);

  ____________(pinoBuzzer, LOW);
  delay(1000);
}</pre></div></article>
        <article class="exercise-box wide"><h4>Interpretação de código</h4><div class="box-body"><p>Explique como será o som produzido e compare o tempo ligado com o tempo em silêncio.</p><pre class="exercise-code">int pinoBuzzer = 8;

void setup() {
  pinMode(pinoBuzzer, OUTPUT);
}

void loop() {
  digitalWrite(pinoBuzzer, HIGH);
  delay(200);
  digitalWrite(pinoBuzzer, LOW);
  delay(1200);
}</pre></div></article>
      </div>
    `;
  }

  /* Numeração visível: mantém IDs antigos para não quebrar links e JavaScript. */
  const p8 = document.getElementById('p8');
  if(p8){
    replaceWithPlaceholders(p8, [['Projeto 10', 'Projeto 8']]);
    const badge = p8.querySelector('.projectHead .badge');
    if(badge) badge.textContent = 'P8';
  }
  const p9 = document.getElementById('p9');
  if(p9){
    replaceWithPlaceholders(p9, [['Projeto 11', 'Projeto 9']]);
    const badge = p9.querySelector('.projectHead .badge');
    if(badge) badge.textContent = 'P9';
  }
  const lab1 = document.getElementById('lab1');
  if(lab1){
    replaceWithPlaceholders(lab1, [['Laboratório 2', 'Laboratório 1']]);
    const badge = lab1.querySelector('.projectHead .badge');
    if(badge) badge.textContent = 'Lab 1';
  }
  const lab2 = document.getElementById('lab2');
  if(lab2){
    replaceWithPlaceholders(lab2, [['Laboratório 3', 'Laboratório 2']]);
    const badge = lab2.querySelector('.projectHead .badge');
    if(badge) badge.textContent = 'Lab 2';
  }
  const lab3 = document.getElementById('lab3');
  if(lab3){
    replaceWithPlaceholders(lab3, [['Laboratório 6', 'Laboratório 3'], ['Projeto 10', 'Projeto 8']]);
    const badge = lab3.querySelector('.projectHead .badge');
    if(badge) badge.textContent = 'Lab 3';
  }
  const lab4 = document.getElementById('lab4');
  if(lab4){
    replaceWithPlaceholders(lab4, [['Laboratório 7', 'Laboratório 4'], ['Projeto 11', 'Projeto 9']]);
    const badge = lab4.querySelector('.projectHead .badge');
    if(badge) badge.textContent = 'Lab 4';
  }
  const exercicios = document.getElementById('exercicios');
  if(exercicios){
    replaceWithPlaceholders(exercicios, [
      ['Projeto 10', 'Projeto 8'],
      ['Projeto 11', 'Projeto 9'],
      ['Laboratório 2', 'Laboratório 1'],
      ['Laboratório 3', 'Laboratório 2'],
      ['Laboratório 6', 'Laboratório 3'],
      ['Laboratório 7', 'Laboratório 4']
    ]);
  }

  /* HC-SR04: timeout explícito e comportamento definido quando não há eco. */
  const p7code = document.getElementById('p7code');
  if(p7code && !p7code.textContent.includes('30000UL')){
    let code = p7code.textContent;
    code = code.replace(
      'distancia = medirDistancia();\n\n  Serial.print("Distancia: ");',
      'distancia = medirDistancia();\n\n  if (distancia < 0) {\n    Serial.println("Sem eco valido.");\n    delay(200);\n    return;\n  }\n\n  Serial.print("Distancia: ");'
    );
    code = code.replace(
      'duracao = pulseIn(pinoEcho, HIGH);\n\n  return duracao / 58.0;',
      'duracao = pulseIn(pinoEcho, HIGH, 30000UL);\n\n  if (duracao == 0) return -1;\n  return duracao / 58.0;'
    );
    p7code.textContent = code;
  }

  const p7 = document.getElementById('p7');
  if(p7 && !p7.querySelector('[data-mbb-timeout-hcsr04]')){
    const erros = cardByTitle(p7, '10. Erros comuns');
    if(erros){
      const nota = document.createElement('p');
      nota.dataset.mbbTimeoutHcsr04 = '1';
      nota.innerHTML = '<strong>Falha prevista:</strong> <code>pulseIn(..., 30000UL)</code> espera o eco por um tempo limitado. Se ele não chegar, a função retorna <code>-1</code> e o programa trata a leitura como inválida em vez de ficar aguardando indefinidamente.';
      erros.appendChild(nota);
    }
  }

  const lab2code = document.getElementById('lab2code');
  if(lab2code && !lab2code.textContent.includes('30000UL')){
    let code = lab2code.textContent;
    code = code.replace(
      'distancia = medirDistancia();\n\n  Serial.print("Distancia: ");',
      'distancia = medirDistancia();\n\n  if (distancia < 0) {\n    noTone(pinoBuzzer);\n    for (int pino = 8; pino <= 13; pino++) digitalWrite(pino, LOW);\n    Serial.println("Sem eco valido.");\n    delay(200);\n    return;\n  }\n\n  Serial.print("Distancia: ");'
    );
    code = code.replace(
      'long duracao = pulseIn(pinoEcho, HIGH);\n  return duracao / 58.0;',
      'long duracao = pulseIn(pinoEcho, HIGH, 30000UL);\n  if (duracao == 0) return -1;\n  return duracao / 58.0;'
    );
    lab2code.textContent = code;
  }

  if(lab2 && !lab2.querySelector('[data-mbb-timeout-hcsr04]')){
    const erros = cardByTitle(lab2, '10. Erros comuns');
    if(erros){
      const nota = document.createElement('p');
      nota.dataset.mbbTimeoutHcsr04 = '1';
      nota.innerHTML = '<strong>Sem eco:</strong> a versão final limita a espera do HC-SR04. Quando não chega retorno válido, os LEDs e o buzzer ficam desligados até a próxima leitura, evitando transformar uma falha de sensor em alerta falso.';
      erros.appendChild(nota);
    }
  }

  const lab4code = document.getElementById('lab4code');
  if(lab4code && !lab4code.textContent.includes('30000UL')){
    let code = lab4code.textContent;
    code = code.replace(
      'distancia = medirDistancia(TRIG, ECHO);\n\n  Serial.println(distancia);',
      'distancia = medirDistancia(TRIG, ECHO);\n\n  if (distancia < 0) {\n    Serial.println("Sem eco valido. Tampa mantida fechada.");\n    meuServo.write(0);\n    delay(200);\n    return;\n  }\n\n  Serial.println(distancia);'
    );
    code = code.replace(
      'return pulseIn(pinoEcho, HIGH) / 58;',
      'long duracao = pulseIn(pinoEcho, HIGH, 30000UL);\n  if (duracao == 0) return -1;\n  return duracao / 58.0;'
    );
    lab4code.textContent = code;
  }

  if(lab4 && !lab4.querySelector('[data-mbb-timeout-hcsr04]')){
    const erros = cardByTitle(lab4, '12. Erros comuns');
    if(erros){
      const nota = document.createElement('p');
      nota.dataset.mbbTimeoutHcsr04 = '1';
      nota.innerHTML = '<strong>Comportamento seguro:</strong> se o HC-SR04 não devolver eco dentro do tempo definido, a leitura é considerada inválida e a tampa permanece fechada. O sistema não interpreta ausência de dado como aproximação.';
      erros.appendChild(nota);
    }
  }
});
