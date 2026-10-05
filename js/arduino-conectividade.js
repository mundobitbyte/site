document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

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

function copyCode(id, button){
  const code = document.getElementById(id);
  if(!code) return;

  const text = code.textContent;

  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(() => showCopied(button));
    return;
  }

  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try{
    document.execCommand('copy');
    showCopied(button);
  }finally{
    area.remove();
  }
}

function showCopied(button){
  if(!button) return;
  const original = button.textContent;
  button.textContent = 'Copiado';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1200);
}

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const links = Array.from(document.querySelectorAll('#stageMenu .stage-link[href^="#"]'));
  const panels = Array.from(document.querySelectorAll('.mbb6-panel'));
  const toggle = document.getElementById('stageToggle');
  const close = document.getElementById('stageClose');
  const backdrop = document.getElementById('stageBackdrop');

  function closeDrawer(){
    if(!layout) return;
    layout.classList.remove('drawer-open');
    if(backdrop) backdrop.hidden = true;
    if(toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer(){
    if(!layout) return;
    layout.classList.add('drawer-open');
    if(backdrop) backdrop.hidden = false;
    if(toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function showPanel(hash, updateUrl){
    const panel = document.querySelector(hash);
    if(!panel || !panel.classList.contains('mbb6-panel')) return;

    panels.forEach(item => item.classList.toggle('active-panel', item === panel));
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === hash));

    if(updateUrl){
      history.replaceState(null, '', hash);
    }

    const irDiretoAoTopico = updateUrl || location.hash === hash;
    closeDrawer();

    if(irDiretoAoTopico){
      requestAnimationFrame(() => panel.scrollIntoView({ block: 'start' }));
    }else{
      window.scrollTo(0, 0);
    }
  }

  links.forEach(link => {
    link.addEventListener('click', function(event){
      event.preventDefault();
      showPanel(this.getAttribute('href'), true);
    });
  });

  if(toggle) toggle.addEventListener('click', openDrawer);
  if(close) close.addEventListener('click', closeDrawer);
  if(backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape') closeDrawer();
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : '#b6-prep';

  showPanel(initialHash, false);
});

function manterModuloAtivoVisivel(){
  const menu = document.getElementById('arduinoModuleMenu');
  const ativo = menu && menu.querySelector('.module-btn.active');
  if(!menu || !ativo) return;

  requestAnimationFrame(() => {
    const menuRect = menu.getBoundingClientRect();
    const itemRect = ativo.getBoundingClientRect();
    const alvo = menu.scrollLeft + (itemRect.left - menuRect.left) - ((menu.clientWidth - itemRect.width) / 2);
    const maximo = Math.max(0, menu.scrollWidth - menu.clientWidth);
    menu.scrollLeft = Math.min(maximo, Math.max(0, alvo));
  });
}

document.addEventListener('DOMContentLoaded', manterModuloAtivoVisivel);
window.addEventListener('pageshow', manterModuloAtivoVisivel);
window.addEventListener('resize', manterModuloAtivoVisivel);

/* O circuito-base é conteúdo desta própria página. Mantemos o mesmo data-attribute do fallback antigo para impedir duplicação. */
document.addEventListener('DOMContentLoaded', function(){
  const secao = document.getElementById('b6-prep');
  if(!secao || secao.querySelector('[data-mbb-circuito="b6-prep"]')) return;

  const cabecalho = secao.querySelector('.projectHead');
  if(!cabecalho) return;

  cabecalho.insertAdjacentHTML('afterend', `
    <div class="circuitPanel" data-mbb-circuito="b6-prep">
      <h3>Circuito-base do bloco</h3>
      <figure class="circuitFigure">
        <img class="circuitPhoto" src="../img/arduino/esp32-led-gpio23.svg" alt="Diagrama técnico do ESP32 com GPIO 23 ligado a resistor de 220 ohms, LED e GND." loading="lazy" decoding="async"/>
        <figcaption>Use este circuito-base durante o Bloco 6: GPIO 23 → resistor de 220 Ω → LED → GND. A comunicação muda; a montagem permanece.</figcaption>
      </figure>
    </div>
  `);
});

/*
 * Bluetooth no Wokwi x placa física.
 * Bluetooth real continua sendo o conteúdo principal.
 * O Wokwi entra depois, apenas para testar a lógica L/D via Monitor Serial.
 */
document.addEventListener('DOMContentLoaded', function(){
  const secao = document.getElementById('b6-1');
  if(!secao || secao.querySelector('[data-mbb-wokwi-bluetooth]')) return;

  const codigoFisico = document.getElementById('b6-1-code')?.closest('article');
  const cards = Array.from(secao.querySelectorAll('.card'));
  const explicacaoBluetooth = cards.find(card => /^5\.\s*Entendendo as novidades/.test(card.querySelector('h3')?.textContent.trim() || ''));
  const testeFisico = cards.find(card => /^6\.\s*Testando/.test(card.querySelector('h3')?.textContent.trim() || ''));
  const resultadoFisico = cards.find(card => /^7\.\s*Resultado esperado/.test(card.querySelector('h3')?.textContent.trim() || ''));

  if(!codigoFisico || !testeFisico) return;

  const tituloCodigoFisico = codigoFisico.querySelector('h3');
  if(tituloCodigoFisico){
    const botao = tituloCodigoFisico.querySelector('button');
    Array.from(tituloCodigoFisico.childNodes).forEach(node => {
      if(node.nodeType === Node.TEXT_NODE) node.textContent = '';
    });
    tituloCodigoFisico.insertBefore(document.createTextNode('4. Código completo — Bluetooth real na placa física '), botao || null);
  }

  const aviso = document.createElement('article');
  aviso.className = 'card wide';
  aviso.setAttribute('data-mbb-wokwi-bluetooth', 'aviso');
  aviso.innerHTML = `
    <h3>6A. E no Wokwi?</h3>
    <p class="mbb6-warning"><strong>O Wokwi não simula o rádio Bluetooth do ESP32.</strong> Portanto, o celular não encontrará <code>MBB-ESP32</code> e não existe pareamento Bluetooth real dentro do simulador.</p>
    <p>Isso não invalida o tópico. O código acima é o código Bluetooth real para um ESP32 físico compatível. No Wokwi podemos testar apenas a <strong>lógica de receber L ou D e controlar o LED</strong>, substituindo temporariamente a origem Bluetooth pelo Monitor Serial.</p>
    <div class="mbb6-route"><span>Wokwi: Monitor Serial</span><b>→</b><span>Serial</span><b>→</b><span>ESP32</span><b>→</b><span>LED</span></div>
    <div class="mbb6-route"><span>Placa física: celular Android</span><b>→</b><span>Bluetooth clássico/SPP</span><b>→</b><span>ESP32</span><b>→</b><span>LED</span></div>
  `;

  const wokwi = document.createElement('article');
  wokwi.className = 'card code wide';
  wokwi.setAttribute('data-mbb-wokwi-bluetooth', 'codigo');
  wokwi.innerHTML = `
    <h3>6A. Código alternativo somente para o Wokwi <button type="button" onclick="copyCode('b6-1-wokwi-code',this)">Copiar</button></h3>
    <pre id="b6-1-wokwi-code">const int LED = 23;

void setup() {
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);

  Serial.begin(115200);

  Serial.println("Simulacao no Wokwi");
  Serial.println("Digite L para ligar o LED.");
  Serial.println("Digite D para desligar o LED.");
}

void loop() {
  if (Serial.available()) {
    char comando = Serial.read();

    if (comando == 'L' || comando == 'l') {
      digitalWrite(LED, HIGH);
      Serial.println("LED LIGADO");
    }

    if (comando == 'D' || comando == 'd') {
      digitalWrite(LED, LOW);
      Serial.println("LED DESLIGADO");
    }
  }
}</pre>
    <div class="explain" style="margin-top:12px">
      <p><strong>Como testar:</strong> execute a simulação, abra o Monitor Serial em 115200 e envie <code>L</code> ou <code>D</code>.</p>
      <p><strong>O que estamos simulando:</strong> somente a chegada do comando. Não existe Bluetooth nesse teste.</p>
      <p>No Bluetooth real, <code>SerialBT.available()</code> e <code>SerialBT.read()</code> recebem o comando pelo rádio. No Wokwi, <code>Serial.available()</code> e <code>Serial.read()</code> recebem o mesmo comando pelo terminal.</p>
    </div>
  `;

  testeFisico.parentNode.insertBefore(aviso, testeFisico);
  testeFisico.parentNode.insertBefore(wokwi, testeFisico);

  const tituloTeste = testeFisico.querySelector('h3');
  if(tituloTeste) tituloTeste.textContent = '6B. Testando Bluetooth real na placa física';

  const lista = testeFisico.querySelector('ol');
  if(lista && !lista.querySelector('[data-mbb-pareamento]')){
    const item = document.createElement('li');
    item.setAttribute('data-mbb-pareamento', '1');
    item.innerHTML = 'Se necessário, faça o <strong>pareamento</strong> do Android com <strong>MBB-ESP32</strong> nas configurações de Bluetooth e autorize as permissões solicitadas pelo aplicativo.';
    lista.insertBefore(item, lista.children[3] || null);
  }

  if(resultadoFisico){
    const titulo = resultadoFisico.querySelector('h3');
    if(titulo) titulo.textContent = '7. Resultado esperado — Bluetooth real';
  }

  if(explicacaoBluetooth){
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>Até aqui estamos falando de Bluetooth real.</strong> O caminho Wokwi vem a seguir apenas porque o simulador não implementa o rádio Bluetooth.';
    explicacaoBluetooth.appendChild(nota);
  }
});

function carregarContextualizacaoMbb(){
  if(document.querySelector('script[data-mbb-contextualizacao-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-contextualizacao-mbb.js?v=20260911-1';
  script.dataset.mbbContextualizacaoLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarContextualizacaoMbb);
else carregarContextualizacaoMbb();

function carregarDestaquesMbb(){
  if(document.querySelector('script[data-mbb-arduino-destaques-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-destaques-mbb.js?v=20260926-2';
  script.dataset.mbbArduinoDestaquesLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarDestaquesMbb);
else carregarDestaquesMbb();
