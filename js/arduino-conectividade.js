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
    : '#b6-0';

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
        <img class="circuitPhoto" src="../img/arduino/esp32-led-gpio23.webp" alt="ESP32 com LED e resistor de 220 ohms em série entre o GPIO 23 e o GND." loading="lazy" decoding="async"/>
        <figcaption>Use este circuito-base durante o Bloco 6: LED e resistor de 220 Ω em série entre o GPIO 23 e o GND.</figcaption>
      </figure>
    </div>
  `);
});

/*
 * Bluetooth no Wokwi x placa física.
 * O sketch principal permanece exatamente o mesmo nos dois ambientes.
 * No Wokwi, um arquivo auxiliar BluetoothSerial.h simula somente a interface
 * necessária para testar a lógica L/D pelo Monitor Serial.
 */
document.addEventListener('DOMContentLoaded', function(){
  const secao = document.getElementById('b6-1');
  if(!secao || secao.querySelector('[data-mbb-wokwi-bluetooth]')) return;

  const codigoPrincipal = document.getElementById('b6-1-code')?.closest('article');
  const cards = Array.from(secao.querySelectorAll('.card'));
  const explicacaoBluetooth = cards.find(card => /^5\.\s*Entendendo as novidades/.test(card.querySelector('h3')?.textContent.trim() || ''));
  const testeFisico = cards.find(card => /^6\.\s*Testando/.test(card.querySelector('h3')?.textContent.trim() || ''));
  const resultadoFisico = cards.find(card => /^7\.\s*Resultado esperado/.test(card.querySelector('h3')?.textContent.trim() || ''));

  if(!codigoPrincipal || !testeFisico) return;

  const tituloCodigo = codigoPrincipal.querySelector('h3');
  if(tituloCodigo){
    const botao = tituloCodigo.querySelector('button');
    Array.from(tituloCodigo.childNodes).forEach(node => {
      if(node.nodeType === Node.TEXT_NODE) node.textContent = '';
    });
    tituloCodigo.insertBefore(document.createTextNode('4. Código completo '), botao || null);
  }

  const aviso = document.createElement('article');
  aviso.className = 'card wide';
  aviso.setAttribute('data-mbb-wokwi-bluetooth', 'aviso');
  aviso.innerHTML = `
    <h3>6A. Teste no Wokwi</h3>
    <p class="mbb6-warning"><strong>O Wokwi não simula o rádio Bluetooth do ESP32.</strong> Por isso, um celular real não encontrará <code>MBB-ESP32</code> nessa simulação.</p>
    <p>Para testar a lógica no Wokwi, crie um arquivo auxiliar chamado <code>BluetoothSerial.h</code>. Ele fará o Monitor Serial representar temporariamente a entrada e a saída que, na placa física, passam pelo Bluetooth.</p>
    <p class="mbb6-note"><strong>Circuito:</strong> use exatamente o mesmo circuito da etapa <em>Preparação — ESP32</em>: LED e resistor de 220 Ω em série entre o GPIO 23 e o GND. Não há nova montagem.</p>
    <div class="mbb6-route"><span>Wokwi: Monitor Serial</span><b>→</b><span>BluetoothSerial.h auxiliar</span><b>→</b><span>sketch.ino</span><b>→</b><span>LED</span></div>
    <div class="mbb6-route"><span>Placa física: celular Android</span><b>→</b><span>Bluetooth Classic/SPP</span><b>→</b><span>sketch.ino</span><b>→</b><span>LED</span></div>
  `;

  const arquivo = document.createElement('article');
  arquivo.className = 'card code wide';
  arquivo.setAttribute('data-mbb-wokwi-bluetooth', 'arquivo');
  arquivo.innerHTML = `
    <h3>6A.1 Crie o arquivo <code>BluetoothSerial.h</code> no Wokwi <button type="button" onclick="copyCode('b6-1-wokwi-header',this)">Copiar</button></h3>
    <p>No editor do projeto Wokwi, crie uma nova aba/arquivo com o nome exato <code>BluetoothSerial.h</code> e cole o conteúdo abaixo. O projeto ficará com dois arquivos: <code>sketch.ino</code> e <code>BluetoothSerial.h</code>.</p>
    <pre id="b6-1-wokwi-header">#ifndef BLUETOOTH_SERIAL_H
#define BLUETOOTH_SERIAL_H

#include &lt;Arduino.h&gt;

class BluetoothSerial {
public:

  bool begin(const char *nome) {
    Serial.println("[Bluetooth simulado no Wokwi]");
    return true;
  }

  int available() {
    return Serial.available();
  }

  int read() {
    return Serial.read();
  }

  void println(const char *texto) {
    Serial.println(texto);
  }
};

#endif</pre>
    <div class="explain" style="margin-top:12px">
      <p><strong>O que esse arquivo faz:</strong> disponibiliza no Wokwi os comandos <code>SerialBT.begin()</code>, <code>SerialBT.available()</code>, <code>SerialBT.read()</code> e <code>SerialBT.println()</code>, encaminhando a comunicação ao Monitor Serial durante a simulação.</p>
      <p><strong>Importante:</strong> ele não cria Bluetooth dentro do Wokwi. Ele apenas simula a interface necessária para testar a lógica do programa.</p>
    </div>
  `;

  const testarWokwi = document.createElement('article');
  testarWokwi.className = 'card wide';
  testarWokwi.setAttribute('data-mbb-wokwi-bluetooth', 'teste');
  testarWokwi.innerHTML = `
    <h3>6A.2 Execute e comprove a lógica</h3>
    <ol>
      <li>Mantenha no <code>sketch.ino</code> exatamente o código Bluetooth apresentado no passo 4.</li>
      <li>Confirme que o projeto também contém o arquivo <code>BluetoothSerial.h</code>.</li>
      <li>Inicie a simulação e abra o Monitor Serial em <strong>115200</strong>.</li>
      <li>Envie <code>L</code>. O LED deve acender e o terminal deve mostrar <code>LED LIGADO</code>.</li>
      <li>Envie <code>D</code>. O LED deve apagar e o terminal deve mostrar <code>LED DESLIGADO</code>.</li>
    </ol>
    <p class="mbb6-note"><strong>No Wokwi:</strong> este teste verifica a leitura dos comandos e o controle do LED. O pareamento Bluetooth é testado na ESP32 física.</p>
  `;

  testeFisico.parentNode.insertBefore(aviso, testeFisico);
  testeFisico.parentNode.insertBefore(arquivo, testeFisico);
  testeFisico.parentNode.insertBefore(testarWokwi, testeFisico);

  const tituloTeste = testeFisico.querySelector('h3');
  if(tituloTeste) tituloTeste.textContent = '6B. Testando Bluetooth real na ESP32 física';

  const lista = testeFisico.querySelector('ol');
  if(lista && !lista.querySelector('[data-mbb-pareamento]')){
    const item = document.createElement('li');
    item.setAttribute('data-mbb-pareamento', '1');
    item.innerHTML = 'Se necessário, faça o <strong>pareamento</strong> do Android com <strong>MBB-ESP32</strong> nas configurações de Bluetooth e autorize as permissões solicitadas pelo aplicativo.';
    lista.insertBefore(item, lista.children[3] || null);
  }

  const descarteAuxiliar = document.createElement('p');
  descarteAuxiliar.className = 'mbb6-warning';
  descarteAuxiliar.innerHTML = '<strong>Na ESP32 física:</strong> use apenas o <code>sketch.ino</code>. O arquivo auxiliar <code>BluetoothSerial.h</code> do Wokwi não é necessário, pois a biblioteca Bluetooth real é fornecida pelo suporte do ESP32.';
  testeFisico.appendChild(descarteAuxiliar);

  if(resultadoFisico){
    const titulo = resultadoFisico.querySelector('h3');
    if(titulo) titulo.textContent = '7. Resultado esperado — Bluetooth real';
  }

  if(explicacaoBluetooth){
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>No Wokwi:</strong> o arquivo auxiliar representa a comunicação Bluetooth pelo Monitor Serial. <strong>Na ESP32 física:</strong> a comunicação ocorre pelo Bluetooth real.';
    explicacaoBluetooth.appendChild(nota);
  }
});

/*
 * Revisão operacional MbB do Bloco 6.
 * Deixa explícito o que é executável no Wokwi padrão e o que depende de placa física
 * ou do Private Wokwi IoT Gateway. Não substitui os códigos físicos já aprovados.
 */
document.addEventListener('DOMContentLoaded', function(){
  const marcar = (elemento, nome) => {
    if(!elemento || elemento.dataset[nome] === '1') return false;
    elemento.dataset[nome] = '1';
    return true;
  };

  const cardsDe = id => {
    const secao = document.getElementById(id);
    if(!secao) return [];
    return Array.from(secao.querySelectorAll('.cards > .card'));
  };

  const acharCard = (id, inicioTitulo) => cardsDe(id).find(card => {
    const h3 = card.querySelector('h3');
    return h3 && h3.textContent.trim().startsWith(inicioTitulo);
  });

  // Preparação: apresenta os dois ambientes antes de qualquer prática.
  const prep = document.getElementById('b6-prep');
  if(prep && !prep.querySelector('[data-mbb6-ambientes]')){
    const cards = prep.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6Ambientes = '1';
      guia.innerHTML = `
        <h3>Antes de começar — escolha onde testar</h3>
        <p>Você pode acompanhar as etapas no Wokwi ou com uma ESP32 física. Alguns testes dependem dos recursos disponíveis em cada ambiente.</p>
        <div class="mbb6-route"><span>Wokwi</span><b>→</b><span>simulação no navegador</span><b>→</b><span>sem placa física</span></div>
        <div class="mbb6-route"><span>ESP32 físico</span><b>→</b><span>Arduino IDE</span><b>→</b><span>rede e rádio reais</span></div>
        <p class="mbb6-note"><strong>Atenção:</strong> quando o Wokwi não reproduzir um recurso da placa física, a própria etapa indicará como realizar o teste e qual resultado deve ser observado.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild);
    }
  }

  const prepararIde = acharCard('b6-prep', '4. Preparando a Arduino IDE');
  if(prepararIde && marcar(prepararIde, 'mbb6PrepWokwi')){
    const p = document.createElement('p');
    p.className = 'mbb6-note';
    p.innerHTML = '<strong>Se você está no Wokwi:</strong> não precisa instalar driver, escolher porta USB nem conectar cabo. Use uma placa ESP32 DevKit compatível no projeto e mantenha o LED no GPIO 23. Estas etapas da Arduino IDE valem para a placa física.';
    prepararIde.appendChild(p);
  }

  // 6.2 Wi-Fi: prática completa em ambos os ambientes e código Wokwi explícito.
  const wifi = document.getElementById('b6-2');
  if(wifi && !wifi.querySelector('[data-mbb6-wifi-wokwi]')){
    const cardWokwiOriginal = acharCard('b6-2', '9. Teste no Wokwi');
    if(cardWokwiOriginal){
      cardWokwiOriginal.dataset.mbb6WifiWokwi = '1';
      cardWokwiOriginal.innerHTML = `
        <h3>9. Teste de Wi-Fi no Wokwi</h3>
        <p>No Wokwi, conecte o ESP32 à rede virtual aberta <code>Wokwi-GUEST</code>. Ela não usa senha. O canal 6 pode ser informado para evitar a etapa de varredura e acelerar a conexão.</p>
        <p class="mbb6-note"><strong>O que este teste comprova:</strong> o ESP32 entrou na rede virtual e recebeu um endereço IP. No próximo tópico veremos que receber um IP e aceitar conexões vindas do navegador são coisas diferentes.</p>
      `;

      const codigo = document.createElement('article');
      codigo.className = 'card code wide';
      codigo.dataset.mbb6WifiWokwi = 'codigo';
      codigo.innerHTML = `
        <h3>Código para o Wokwi <button type="button" onclick="copyCode('b6-2-wokwi-code',this)">Copiar</button></h3>
        <pre id="b6-2-wokwi-code">#include &lt;WiFi.h&gt;

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  Serial.print("Conectando ao Wokwi-GUEST");
  WiFi.begin("Wokwi-GUEST", "", 6);

  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("Wi-Fi conectado.");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
}</pre>
        <div class="explain" style="margin-top:12px">
          <p><strong>Faça:</strong> execute a simulação e abra o Monitor Serial em 115200.</p>
          <p><strong>O que observar:</strong> a mensagem de conexão e um endereço IP virtual confirmam que o ESP32 entrou na rede Wi-Fi simulada.</p>
        </div>
      `;
      cardWokwiOriginal.parentNode.insertBefore(codigo, cardWokwiOriginal.nextSibling);
    }
  }

  // 6.3 HTTP: separa servidor físico, Wokwi padrão e Private Gateway.
  const http = document.getElementById('b6-3');
  if(http && !http.querySelector('[data-mbb6-http-ambientes]')){
    const cards = http.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6HttpAmbientes = '1';
      guia.innerHTML = `
        <h3>Antes de testar o servidor — o resultado depende do ambiente</h3>
        <div class="mbb6-connections">
          <div><strong>ESP32 físico</strong><span>Celular/computador e ESP32 ficam na mesma rede. Abra <code>http://IP_DO_ESP32</code> para testar o servidor.</span></div>
          <div><strong>Wokwi padrão</strong><span>O código pode conectar à Internet e fazer conexões de saída, mas o gateway público não aceita conexão de entrada do seu navegador para o servidor simulado.</span></div>
          <div><strong>Wokwi + Private IoT Gateway</strong><span>Com o gateway privado ativo, o servidor HTTP na porta 80 pode ser acessado pelo navegador em <code>http://localhost:9080/</code>.</span></div>
          <div><strong>Sem Private Gateway?</strong><span>Não tente “consertar” o código para fazer o navegador entrar. No Wokwi padrão, a limitação é do caminho de rede, não do <code>WebServer</code>.</span></div>
        </div>
        <p class="mbb6-note"><strong>O que observar:</strong> na placa física ou com Private Gateway, os botões da página devem controlar o LED. No Wokwi padrão, o servidor pode ser estudado e compilado, mas o navegador não consegue iniciar essa conexão de entrada pelo gateway público.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const testeHttp = acharCard('b6-3', '5. Testando o servidor');
  if(testeHttp && marcar(testeHttp, 'mbb6HttpTeste')){
    const titulo = testeHttp.querySelector('h3');
    if(titulo) titulo.textContent = '5. Testando o servidor — placa física';
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>No Wokwi:</strong> só siga exatamente este teste pelo navegador se estiver usando o Private IoT Gateway. Nesse caso, use <code>http://localhost:9080/</code> em vez do IP virtual mostrado pelo ESP32.';
    testeHttp.appendChild(nota);
  }

  // 6.4 mDNS: prática principal física; no Wokwi não promete .local.
  const mdns = document.getElementById('b6-4');
  if(mdns && !mdns.querySelector('[data-mbb6-mdns-ambientes]')){
    const cards = mdns.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6MdnsAmbientes = '1';
      guia.innerHTML = `
        <h3>Onde esta prática faz sentido?</h3>
        <p><strong>Placa física:</strong> primeiro confirme que o servidor abre pelo IP e só depois teste <code>http://ambiente-mbb.local</code> na mesma rede.</p>
        <p><strong>Wokwi padrão:</strong> não use <code>.local</code> como teste obrigatório. O navegador não está na mesma rede local do ESP32 simulado e o gateway público não oferece a mesma descoberta mDNS da sua rede local.</p>
        <p class="mbb6-note"><strong>Mesmo na placa física:</strong> se o acesso por IP funcionar e <code>.local</code> não, o servidor pode estar correto. A resolução mDNS depende também do sistema operacional, do navegador e da rede permitirem esse tipo de descoberta.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const testeMdns = acharCard('b6-4', '6. Testando');
  if(testeMdns && marcar(testeMdns, 'mbb6MdnsTeste')){
    const titulo = testeMdns.querySelector('h3');
    if(titulo) titulo.textContent = '6. Testando — rede local com ESP32 físico';
  }

  // 6.5 Tunelamento: não promete execução no Wokwi padrão e antecipa a segurança.
  const tunel = document.getElementById('b6-5');
  if(tunel && !tunel.querySelector('[data-mbb6-tunel-ambientes]')){
    const cards = tunel.querySelector('.cards');
    if(cards){
      const guia = document.createElement('article');
      guia.className = 'card wide';
      guia.dataset.mbb6TunelAmbientes = '1';
      guia.innerHTML = `
        <h3>Antes do túnel — confirme de onde você está partindo</h3>
        <p><strong>ESP32 físico:</strong> o computador precisa conseguir abrir o servidor do ESP32 pela rede local antes de criar o túnel.</p>
        <p><strong>Wokwi padrão:</strong> não execute o comando esperando alcançar o IP virtual do ESP32. O computador não possui uma rota de entrada até o servidor do simulador pelo gateway público.</p>
        <p><strong>Wokwi com Private Gateway:</strong> outros encaminhamentos são possíveis, mas exigem configuração adicional. Para esta prática, basta compreender que o túnel é criado no computador e encaminha temporariamente um serviço que já funciona na rede local.</p>
        <p class="mbb6-warning"><strong>Segurança:</strong> ao criar um endereço público, alguém que obtiver esse endereço poderá tentar acessar o serviço exposto. Faça o teste apenas com o protótipo didático, sem dados reais, sem credenciais reutilizadas e encerre o túnel ao terminar.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const ferramentaTunel = acharCard('b6-5', '4. Ferramenta escolhida');
  if(ferramentaTunel && marcar(ferramentaTunel, 'mbb6TunelFerramenta')){
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>Checkpoint antes de continuar:</strong> no computador que criará o túnel, abra primeiro <code>http://IP_DO_ESP32</code>. Se esse acesso local não funcionar, o túnel também não terá para onde encaminhar a requisição.';
    ferramentaTunel.appendChild(nota);
  }
});

function carregarContextualizacaoMbb(){
  if(document.querySelector('script[data-mbb-contextualizacao-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-contextualizacao-mbb.js?v=20261007-1';
  script.dataset.mbbContextualizacaoLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarContextualizacaoMbb);
else carregarContextualizacaoMbb();

function carregarDestaquesMbb(){
  if(document.querySelector('script[data-mbb-arduino-destaques-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-destaques-mbb.js?v=20261005-1';
  script.dataset.mbbArduinoDestaquesLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarDestaquesMbb);
else carregarDestaquesMbb();
