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
    const alvo = document.getElementById(hash.slice(1));
    const panel = alvo?.closest('.mbb6-panel') || panels[0];
    if(!panel) return;

    panels.forEach(item => item.classList.toggle('active-panel', item === panel));
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + panel.id));

    if(updateUrl){
      history.replaceState(null, '', hash);
      // O Meu MbB acompanha a etapa pelo evento de mudança da âncora.
      window.dispatchEvent(new Event('hashchange'));
    }

    const irDiretoAoTopico = updateUrl || location.hash === hash;
    closeDrawer();

    if(irDiretoAoTopico){
      requestAnimationFrame(() => (alvo && panel.contains(alvo) ? alvo : panel).scrollIntoView({ block: 'start' }));
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

  const initialHash = location.hash && document.getElementById(location.hash.slice(1))
    ? location.hash
    : '#b6-0';

  showPanel(initialHash, false);
  if (location.hash) requestAnimationFrame(() => showPanel(location.hash, false));
  window.addEventListener('hashchange', () => showPanel(location.hash || '#' + panels[0].id, false));
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

  const montagem = Array.from(secao.querySelectorAll('.card')).find(card => card.querySelector('h3')?.textContent.includes('Montando o circuito-base'));
  if(!montagem) return;

  montagem.insertAdjacentHTML('beforeend', `
    <div class="circuitPanel" data-mbb-circuito="b6-prep">
      <h3>Circuito-base do bloco</h3>
      <figure class="circuitFigure">
        <img class="circuitPhoto" src="../img/arduino/esp32-led-gpio23.webp?v=20261008-2" alt="Diagrama da ESP32 com LED e resistor de 220 ohms em série entre o GPIO 23 e o GND." loading="lazy" decoding="async"/>
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
  const explicacaoBluetooth = secao.querySelector('[data-mbb6-role="bluetooth-explicacao"]');
  const testeFisico = secao.querySelector('[data-mbb6-role="bluetooth-teste"]');
  const resultadoFisico = secao.querySelector('[data-mbb6-role="bluetooth-resultado"]');

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
  arquivo.className = 'card wide mbb6-wokwi-aux';
  arquivo.setAttribute('data-mbb-wokwi-bluetooth', 'arquivo');
  arquivo.innerHTML = `
    <h3>6A.1 — Crie o arquivo <code>BluetoothSerial.h</code> no Wokwi</h3>
    <p class="mbb6-aux-intro">No Wokwi, crie uma nova aba de arquivo e digite exatamente <code>BluetoothSerial.h</code>, respeitando as letras maiúsculas e minúsculas. Clique em <strong>Copiar</strong> no quadro abaixo e cole o conteúdo nesse arquivo. Ao final, seu projeto terá <code>sketch.ino</code> e <code>BluetoothSerial.h</code>.</p>
    <div class="mbb6-aux-codebox">
      <div class="mbb6-aux-toolbar"><button type="button" class="mbb6-aux-copy" onclick="copyCode('b6-1-wokwi-header', this)" aria-label="Copiar o conteúdo completo do arquivo BluetoothSerial.h">Copiar</button></div>
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
    </div>
    <p class="mbb6-aux-note"><strong>Não confunda:</strong> <code>BluetoothSerial.h</code> é o nome do arquivo. <code>BLUETOOTH_SERIAL_H</code>, escrito nos comandos <code>#ifndef</code> e <code>#define</code>, é apenas um identificador interno usado para evitar inclusões repetidas.</p>
    <div class="explain">
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
      <li>Inicie a simulação e abra o Monitor Serial. O Wokwi detecta automaticamente a velocidade configurada por <code>Serial.begin(115200)</code>.</li>
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
  descarteAuxiliar.innerHTML = '<strong>Na ESP32 física:</strong> remova do projeto a aba auxiliar <code>BluetoothSerial.h</code> criada para o Wokwi antes de compilar o <code>sketch.ino</code>. Como a inclusão usa aspas, manter esse arquivo local pode ocultar a biblioteca real e continuar usando o Monitor Serial. Na placa física, use a biblioteca Bluetooth real fornecida pelo suporte do ESP32.';
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

  const acharPapel = (id, papel, inicioTitulo) => {
    const secao = document.getElementById(id);
    return secao?.querySelector(`[data-mbb6-role="${papel}"]`) || acharCard(id, inicioTitulo);
  };

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

  const prepararIde = acharPapel('b6-prep', 'prep-ide', '4. Preparando a Arduino IDE');
  if(prepararIde && marcar(prepararIde, 'mbb6PrepWokwi')){
    const p = document.createElement('p');
    p.className = 'mbb6-note';
    p.innerHTML = '<strong>Se você está no Wokwi:</strong> não precisa instalar driver, escolher porta USB nem conectar cabo. Use uma placa ESP32 DevKit compatível no projeto e mantenha o LED no GPIO 23. Estas etapas da Arduino IDE valem para a placa física.';
    prepararIde.appendChild(p);
  }

  // 6.2 Wi-Fi: prática completa em ambos os ambientes e código Wokwi explícito.
  const wifi = document.getElementById('b6-2');
  if(wifi && !wifi.querySelector('[data-mbb6-wifi-wokwi]')){
    const cardWokwiOriginal = acharPapel('b6-2', 'wifi-wokwi', '4A. Wi-Fi no Wokwi');
    if(cardWokwiOriginal){
      cardWokwiOriginal.dataset.mbb6WifiWokwi = '1';
      cardWokwiOriginal.innerHTML = `
        <h3>4A. Wi-Fi no Wokwi — rede virtual</h3>
        <p>Se você usa o simulador, escolha <strong>somente o código 4A</strong>. A rede <code>Wokwi-GUEST</code> já existe no ambiente e não exige senha. Não substitua o nome dela pelas credenciais de casa ou da escola.</p>
        <p>Abra seu projeto ESP32 no Wokwi, copie o código do quadro a seguir para <code>sketch.ino</code>, inicie a simulação e observe o <strong>Monitor Serial</strong>. O LED do circuito-base pode continuar conectado, mas não será acionado neste teste.</p>
      `;

      const codigo = document.createElement('article');
      codigo.className = 'card code wide';
      codigo.dataset.mbb6WifiWokwi = 'codigo';
      codigo.innerHTML = `
        <h3>4A. Código completo — Wokwi <button type="button" onclick="copyCode('b6-2-wokwi-code',this)">Copiar</button></h3>
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
          <p><strong>Entenda os parâmetros:</strong> em <code>WiFi.begin("Wokwi-GUEST", "", 6)</code>, o primeiro texto é o nome da rede, <code>""</code> indica senha vazia e <code>6</code> é o canal usado pelo Wokwi para evitar a busca de redes e acelerar este exemplo. <strong>Outras redes podem utilizar outros canais.</strong></p>
          <p><strong>O que observar:</strong> surgem pontos enquanto o ESP32 tenta conectar, depois a confirmação e um endereço IP virtual. O Monitor Serial do Wokwi reconhece a velocidade configurada pelo programa.</p>
        </div>
      `;
      // Apresenta as duas alternativas logo após a escolha: primeiro Wokwi, depois placa física.
      const codigoFisico = wifi.querySelector('#b6-2-code')?.closest('article.card');
      if (codigoFisico && cardWokwiOriginal.parentNode === codigoFisico.parentNode) {
        cardWokwiOriginal.parentNode.insertBefore(cardWokwiOriginal, codigoFisico);
      }
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
        <h3>Antes dos códigos — escolha o papel e o ambiente</h3>
        <p><strong>HTTP</strong> organiza pedidos e respostas. Na <strong>Parte A</strong>, o ESP32 é cliente e consulta outro servidor; começamos por ela porque funciona no Wokwi padrão. Na <strong>Parte B</strong>, o ESP32 é servidor e o navegador faz pedidos para controlar o LED. <strong>São dois testes diferentes:</strong> você pode executar apenas o que seu ambiente permite.</p>
        <div class="mbb6-connections">
          <div><strong>Wokwi padrão — comece pela Parte A (3A)</strong><span>Use o código pronto para <code>Wokwi-GUEST</code>. Ele envia um pedido HTTP e mostra o resultado no Monitor Serial. <strong>Não é necessário executar a Parte B.</strong></span></div>
          <div><strong>ESP32 físico — Partes A e B</strong><span>Na Parte A, use o código 3B para consultar uma página pela rede Wi-Fi real de 2,4 GHz. Na Parte B, o navegador precisa alcançar o servidor ESP32 na mesma rede para controlar o LED.</span></div>
          <div><strong>Wokwi + Private IoT Gateway — Parte B opcional</strong><span>Se o recurso privado estiver disponível e habilitado, um servidor HTTP simulado na porta 80 pode ser acessado em <code>http://localhost:9080/</code>. Não é necessário contratar esse serviço para acompanhar a aula.</span></div>
          <div><strong>O que vamos observar?</strong><span>Como servidor: página e LED respondem aos links. Como cliente: o Monitor Serial mostra o retorno do pedido <code>GET</code>. Falhar um acesso de entrada no Wokwi público não significa que o programa do servidor esteja errado.</span></div>
        </div>
        <p class="mbb6-note"><strong>Bibliotecas:</strong> <code>WiFi.h</code> cuida da rede, <code>WebServer.h</code> permite atender pedidos e <code>HTTPClient.h</code> permite enviá-los. Essas bibliotecas integram o ambiente Arduino para ESP32 corretamente instalado e são disponibilizadas nos projetos ESP32 do Wokwi. Na placa física, substitua o nome e a senha da rede. No Wokwi padrão, escolha o código 3A já configurado; se usar o gateway privado para experimentar o servidor da Parte B, adapte a conexão desse programa para <code>Wokwi-GUEST</code> sem senha.</p>
      `;
      cards.insertBefore(guia, cards.firstElementChild?.nextSibling || cards.firstElementChild);
    }
  }

  const testeHttp = acharPapel('b6-3', 'http-servidor-teste', '8. Testando o servidor');
  if(testeHttp && marcar(testeHttp, 'mbb6HttpTeste')){
    const titulo = testeHttp.querySelector('h3');
    if(titulo) titulo.textContent = '8. Testando o servidor — placa física';
    const nota = document.createElement('p');
    nota.className = 'mbb6-note';
    nota.innerHTML = '<strong>No Wokwi:</strong> só siga exatamente este teste pelo navegador se estiver usando o Private IoT Gateway. Nesse caso, use <code>http://localhost:9080/</code> em vez do IP virtual mostrado pelo ESP32.';
    testeHttp.appendChild(nota);
  }

  // As práticas 6.4 e 6.5 são mantidas no HTML, com evidências e códigos próprios.

});

function carregarDestaquesMbb(){
  if(document.querySelector('script[data-mbb-arduino-destaques-loader]')) return;
  const script = document.createElement('script');
  script.src = '../js/arduino-destaques-mbb.js?v=20261005-1';
  script.dataset.mbbArduinoDestaquesLoader = '1';
  document.head.appendChild(script);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', carregarDestaquesMbb);
else carregarDestaquesMbb();
