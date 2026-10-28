// Bloco 6 — lapidação MbB com Wokwi como caminho de prática sempre que o simulador permite.
// Atua somente em textos e blocos de orientação já existentes; não altera navegação nem códigos físicos originais.
(() => {
  function aplicar(){
    if (!document.getElementById('b6-prep')) return;

    const acharCard = (secaoId, inicio) => {
      const secao = document.getElementById(secaoId);
      if (!secao) return null;
      return Array.from(secao.querySelectorAll('.card')).find(card => {
        const h3 = card.querySelector('h3');
        return h3 && h3.textContent.trim().startsWith(inicio);
      }) || null;
    };

    // Preparação — Wokwi é o caminho de prática imediato; placa física aparece como extensão real.
    const ambientes = document.querySelector('[data-mbb6-ambientes]');
    if (ambientes) {
      ambientes.innerHTML = `
        <h3>Como vamos praticar este bloco</h3>
        <p>Vamos usar o <strong>Wokwi sempre que ele conseguir reproduzir a tecnologia estudada</strong>. Assim podemos montar, programar, executar e observar o resultado diretamente no navegador.</p>
        <div class="mbb6-route"><span>Wokwi</span><b>→</b><span>montar e programar</span><b>→</b><span>executar</span><b>→</b><span>observar a evidência</span></div>
        <p>Alguns recursos dependem de características que o simulador não reproduz, como o rádio Bluetooth ou certas formas de acesso à rede local. Nesses casos, vamos separar duas coisas: <strong>a lógica que pode ser experimentada no Wokwi</strong> e <strong>o comportamento completo em um ESP32 físico</strong>.</p>
        <p class="mbb6-note"><strong>O importante:</strong> antes de cada teste você saberá exatamente o que deve funcionar e qual resultado comprova que a etapa deu certo.</p>
      `;
    }

    const prepararIde = acharCard('b6-prep', '4. Preparando a Arduino IDE');
    if (prepararIde) {
      const nota = prepararIde.querySelector('[data-mbb6-prep-wokwi], .mbb6-note:last-child');
      if (nota && /Wokwi/i.test(nota.textContent)) {
        nota.innerHTML = '<strong>No Wokwi:</strong> use uma placa ESP32 DevKit compatível no projeto e mantenha o LED no GPIO 23. Driver, porta USB e cabo de dados são etapas necessárias apenas quando o programa será enviado para uma placa física.';
      }
    }

    // Bluetooth — mantém a tecnologia real como conceito, mas a experiência do aluno acontece no Wokwi.
    const btAviso = document.querySelector('[data-mbb-wokwi-bluetooth="aviso"]');
    if (btAviso) {
      btAviso.innerHTML = `
        <h3>6A. No Wokwi — experimente a lógica do comando</h3>
        <p>O objetivo do programa é simples: receber um caractere, interpretar esse comando e agir sobre o LED. Em um ESP32 físico, esse caractere pode chegar pelo Bluetooth.</p>
        <p class="mbb6-warning"><strong>O Wokwi não simula o rádio Bluetooth do ESP32.</strong> Por isso o celular não encontrará <code>MBB-ESP32</code>. Isso é uma limitação do simulador, não um erro do código Bluetooth.</p>
        <p>No simulador, o <strong>Monitor Serial</strong> fará o papel de quem envia <code>L</code> ou <code>D</code>. Assim conseguimos experimentar a parte mais importante da lógica: <strong>receber → interpretar → agir</strong>.</p>
        <div class="mbb6-route"><span>Wokwi: Monitor Serial</span><b>→</b><span>comando L/D</span><b>→</b><span>ESP32</span><b>→</b><span>LED</span></div>
        <div class="mbb6-route"><span>ESP32 físico</span><b>→</b><span>Bluetooth</span><b>→</b><span>comando L/D</span><b>→</b><span>LED</span></div>
        <p class="mbb6-note"><strong>Compare:</strong> muda o meio por onde o comando chega; a decisão sobre o que fazer com <code>L</code> e <code>D</code> continua a mesma.</p>
      `;
    }

    const btCodigo = document.querySelector('[data-mbb-wokwi-bluetooth="codigo"]');
    if (btCodigo) {
      const h3 = btCodigo.querySelector('h3');
      if (h3) {
        const botao = h3.querySelector('button');
        h3.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) node.textContent = '';
        });
        h3.insertBefore(document.createTextNode('Código para praticar no Wokwi '), botao || null);
      }
      const explicacao = btCodigo.querySelector('.explain');
      if (explicacao) {
        explicacao.innerHTML = `
          <p><strong>Faça agora:</strong> execute a simulação, abra o Monitor Serial em 115200 e envie <code>L</code>. Depois envie <code>D</code>.</p>
          <p><strong>Observe:</strong> o LED deve acender com <code>L</code> e apagar com <code>D</code>. O Monitor Serial também confirma o estado.</p>
          <p><strong>Entenda a troca:</strong> no Bluetooth real usamos <code>SerialBT.available()</code> e <code>SerialBT.read()</code>. No Wokwi usamos <code>Serial.available()</code> e <code>Serial.read()</code>. Depois da leitura, a lógica é a mesma.</p>
        `;
      }
    }

    // Wi-Fi — prática completa no Wokwi.
    const wifi = document.querySelector('[data-mbb6-wifi-wokwi="1"]');
    if (wifi) {
      wifi.innerHTML = `
        <h3>9. No Wokwi — agora o ESP32 entra em uma rede</h3>
        <p>Na placa física o ESP32 entra em uma rede Wi-Fi disponível no local. No Wokwi usamos a rede virtual <code>Wokwi-GUEST</code>, criada justamente para permitir experiências de conectividade.</p>
        <p>Ela não usa senha. O canal 6 pode ser informado para tornar a conexão mais rápida.</p>
        <p class="mbb6-note"><strong>O que queremos comprovar:</strong> o ESP32 consegue se conectar e recebe um endereço IP. Esse endereço será a evidência desta etapa.</p>
      `;
    }

    const wifiCodigo = document.querySelector('[data-mbb6-wifi-wokwi="codigo"] .explain');
    if (wifiCodigo) {
      wifiCodigo.innerHTML = `
        <p><strong>Faça agora:</strong> execute a simulação e abra o Monitor Serial em 115200.</p>
        <p><strong>Observe:</strong> aparecem os pontos enquanto a conexão é tentada; depois surgem a confirmação de conexão e um endereço IP.</p>
        <p><strong>Evidência:</strong> se o IP apareceu, o ESP32 entrou na rede virtual. No próximo tópico veremos que <em>estar na rede</em> e <em>receber uma conexão do navegador</em> são problemas diferentes.</p>
      `;
    }

    // HTTP — Wokwi prioriza o papel de cliente, que funciona no gateway padrão.
    // O guia de ambientes é preparado no script principal; não o substituir por uma versão antiga.

    const testeServidor = acharCard('b6-3', '8. Testando o servidor');
    if (testeServidor) {
      // Preserve o título e a nota mais completos definidos no HTML e no script principal.
      const jaExplicado = Array.from(testeServidor.querySelectorAll('p')).some(p => /Wokwi/i.test(p.textContent));
      if (!jaExplicado) {
        const nota = document.createElement('p');
        nota.className = 'mbb6-note';
        nota.innerHTML = '<strong>Wokwi padrão:</strong> o navegador não acessa o servidor HTTP simulado pelo gateway público. Para executar o pedido HTTP no simulador, siga a Parte A, código 3A.';
        testeServidor.appendChild(nota);
      }
    }

    const parteB = acharCard('b6-3', 'Parte A');
    if (parteB) {
      const explicacao = parteB.querySelector('.explain');
      if (explicacao && !explicacao.querySelector('[data-mbb6-http-wokwi-principal]')) {
        const p = document.createElement('p');
        p.dataset.mbb6HttpWokwiPrincipal = '1';
        p.className = 'mbb6-note';
        p.innerHTML = '<strong>Esta é a prática principal no Wokwi:</strong> o ESP32 fará uma requisição HTTP real para um servidor na Internet e mostrará a resposta no Monitor Serial.';
        explicacao.appendChild(p);
      }
    }

    const clienteOriginal = document.getElementById('b6-3-client-code');
    if (clienteOriginal && !document.getElementById('b6-3-client-wokwi-code')) {
      const cardOriginal = clienteOriginal.closest('article');
      if (cardOriginal) {
        const card = document.createElement('article');
        card.className = 'card code wide';
        card.innerHTML = `
          <h3>3A. Código para praticar cliente HTTP no Wokwi <button type="button" onclick="copyCode('b6-3-client-wokwi-code',this)">Copiar</button></h3>
          <pre id="b6-3-client-wokwi-code">#include &lt;WiFi.h&gt;
#include &lt;HTTPClient.h&gt;

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin("Wokwi-GUEST", "", 6);

  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("Wi-Fi conectado.");

  HTTPClient http;
  http.begin("http://example.com/index.html");

  int codigo = http.GET();

  Serial.print("Codigo HTTP: ");
  Serial.println(codigo);

  if (codigo &gt; 0) {
    String resposta = http.getString();
    Serial.println("Resposta recebida:");
    Serial.println(resposta);
  }

  http.end();
}

void loop() {
}</pre>
          <div class="explain" style="margin-top:12px">
            <p><strong>Faça agora:</strong> execute no Wokwi e abra o Monitor Serial em 115200.</p>
            <p><strong>Observe:</strong> o ESP32 conecta à rede, faz uma requisição GET e mostra o código HTTP e o conteúdo recebido.</p>
            <p><strong>Evidência:</strong> receber um código HTTP positivo e uma resposta mostra que o ESP32 atuou como cliente e conversou com um servidor externo.</p>
          </div>
        `;
        cardOriginal.parentNode.insertBefore(card, cardOriginal);
        const h3 = cardOriginal.querySelector('h3');
        if (h3) {
          const botao = h3.querySelector('button');
          h3.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) node.textContent = '';
          });
          h3.insertBefore(document.createTextNode('3B. Código equivalente para uma rede Wi-Fi real '), botao || null);
        }
      }
    }

    const testeCliente = acharCard('b6-3', '5. Testando o cliente');
    if (testeCliente) {
      const ol = testeCliente.querySelector('ol');
      if (ol) {
        ol.innerHTML = '<li><strong>Escolha apenas um código:</strong> 3A para Wokwi com <code>Wokwi-GUEST</code> ou 3B para a placa física, substituindo SSID e senha da rede real.</li><li>Execute a simulação ou envie o programa para a placa.</li><li>Abra o Monitor Serial em 115200 e acompanhe a conexão.</li><li>Observe o código retornado pelo pedido GET e, quando disponível, o conteúdo recebido. Um valor negativo indica erro da biblioteca; uma resposta HTTP positiva não é necessariamente o status 200.</li>';
      }
    }

    // mDNS — no Wokwi, aprende-se o problema que ele resolve e lê-se o código sem prometer .local no navegador.
    // Preserve a orientação mDNS do script principal, inclusive a distinção entre Wokwi e placa física.

    // O título de teste mDNS já especifica a rede local com ESP32 físico: não sobrescrever.


    // Tunelamento — no Wokwi padrão, compreensão do caminho; execução integral exige um servidor alcançável pelo computador.
    // Preserve os avisos do script principal sobre exposição pública e supervisão.

    const antesTunel = acharCard('b6-5', '3. Antes de criar o túnel');
    if (antesTunel) {
      const h3 = antesTunel.querySelector('h3');
      if (h3) h3.textContent = '3. Condição para executar o túnel em uma rede real';
    }

    const ferramentaTunel = acharCard('b6-5', '4. Ferramenta escolhida');
    if (ferramentaTunel) {
      const p = ferramentaTunel.querySelector('p');
      if (p) p.innerHTML = 'Uma forma simples de observar esse mecanismo é usar <strong>localhost.run</strong>, que cria um túnel temporário por SSH. O comando mostrado a seguir faz sentido quando o computador já consegue acessar diretamente o servidor HTTP do ESP32 na rede local.';
      const notas = ferramentaTunel.querySelectorAll('.mbb6-note');
      notas.forEach(n => {
        n.innerHTML = '<strong>Checkpoint:</strong> antes do túnel, o computador precisa conseguir abrir <code>http://IP_DO_ESP32</code>. Se esse acesso local não existe, ainda não há um serviço alcançável para encaminhar.';
      });
    }

    const testeTunel = acharCard('b6-5', '7. Testando de verdade');
    if (testeTunel) {
      const h3 = testeTunel.querySelector('h3');
      if (h3) h3.textContent = '7. Executando quando houver um ESP32 acessível na rede local';
    }

    // Fecha o bloco preservando a diferença entre conceito e evidência executável.
    const fechamento = acharCard('b6-5', '11. O que o Bloco 6 construiu');
    if (fechamento) {
      const p = fechamento.querySelector('p');
      if (p) p.innerHTML = 'O sistema ganhou diferentes formas de comunicação. No Wokwi conseguimos praticar a lógica de comandos, a conexão Wi-Fi e requisições HTTP de saída. Bluetooth real, descoberta <code>.local</code> e exposição por túnel dependem de recursos de rede ou hardware que o simulador padrão não reproduz da mesma forma. Saber distinguir essas camadas também faz parte de compreender conectividade.';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicar);
  else aplicar();
})();