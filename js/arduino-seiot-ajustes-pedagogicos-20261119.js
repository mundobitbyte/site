/* MbB — explicações aditivas para iniciantes (SEIoT 6 a 10).
   Nenhum código de prática, link, circuito ou elemento existente é substituído.
   Arquivo separado para permitir reversão sem afetar os módulos originais. */
document.addEventListener('DOMContentLoaded', function () {
  function inserir(elemento, conteudo, posicao = 'afterbegin') {
    if (elemento && !elemento.querySelector('[data-mbb-explica="1"]') && !elemento.previousElementSibling?.matches?.('[data-mbb-explica="1"]')) {
      elemento.insertAdjacentHTML(posicao, conteudo);
    }
  }
  function bloco(titulo, dentro) {
    return [...document.querySelectorAll(dentro + ' h3')].find(h => h.textContent.trim() === titulo)?.closest('article');
  }
  function texto(conteudo) { return '<div data-mbb-explica="1">' + conteudo + '</div>'; }
  const pagina = location.pathname.split('/').pop();
  if (pagina === 'arduino-conectividade.html') {
    const bluetooth = document.querySelector('[data-mbb6-role="bluetooth-explicacao"] .explain');
    inserir(bluetooth, texto(
      '<p><strong>Comecemos pelo problema:</strong> como acender um LED conectado ao ESP32 usando um celular, sem cabo? O celular envia uma letra pelo Bluetooth Classic/SPP. O ESP32 recebe essa letra, decide o que fazer com o LED e pode responder ao celular.</p>' +
      '<p><code>#include "BluetoothSerial.h"</code> inclui a biblioteca que oferece as funções para essa comunicação. <code>BluetoothSerial SerialBT;</code> cria um objeto chamado <code>SerialBT</code>, pelo qual o programa acessa essas funções. Pense nele como a nossa porta de conversa sem fio.</p>' +
      '<p><code>SerialBT.begin("MBB-ESP32")</code> inicia o serviço e informa o nome a procurar no celular; não é uma senha. <code>SerialBT.available()</code> conta os bytes à espera de leitura; por isso <code>if (SerialBT.available())</code> só executa o bloco quando algo chegou. <code>SerialBT.read()</code> retira um byte, representado por uma letra em nossa prática, e <code>char comando</code> guarda essa letra.</p>' +
      '<p><code>comando == &#39;L&#39; || comando == &#39;l&#39;</code> significa “recebemos L maiúsculo <strong>ou</strong> l minúsculo?”. <code>==</code> compara, <code>||</code> significa OU e aspas simples identificam um caractere. Quando verdadeiro, <code>digitalWrite(LED, HIGH)</code> acende o LED do circuito e <code>SerialBT.println("LED LIGADO")</code> envia a confirmação ao celular.</p>' +
      '<p><code>Serial.begin(115200)</code> configura o Monitor Serial do computador, e não a velocidade do Bluetooth. <strong>Acompanhe a sequência:</strong> celular envia L → ESP32 lê e compara → LED acende → celular recebe a confirmação. O Bluetooth aqui é Classic/SPP do ESP32 original: não funciona igualmente em todas as variantes de placa nem em qualquer aplicativo de celular.</p>'
    ));
    const wifi = bloco('5. Entendendo as novidades', '#b6-2');
    inserir(wifi?.querySelector('.explain'), texto(
      '<p><strong>Imagine o ESP32 entrando na rede da escola.</strong> <code>#include &lt;WiFi.h&gt;</code> disponibiliza funções para usar Wi-Fi; <code>ssid</code> guarda o nome da rede e <code>senha</code>, a senha quando necessária. <code>WiFi.mode(WIFI_STA)</code> coloca a placa como participante da rede; <code>WiFi.begin(ssid, senha)</code> inicia a tentativa de conexão.</p>' +
      '<p><code>while (WiFi.status() != WL_CONNECTED)</code> repete a espera enquanto <strong>não</strong> estiver conectado: <code>!=</code> significa “diferente de” e <code>delay(500)</code> aguarda meio segundo. Neste programa inicial, uma rede indisponível pode manter a espera; em automação real, é importante tratar a falha. <code>WiFi.localIP()</code> mostra o endereço local, não uma prova de que a Internet esteja funcionando.</p>'
    ));
    const cliente = bloco('4. Como o cliente funciona', '#b6-3');
    inserir(cliente?.querySelector('.explain'), texto(
      '<p><strong>Pense no ESP32 como um navegador:</strong> ele é o cliente, isto é, pede uma página. <code>#include &lt;HTTPClient.h&gt;</code> oferece funções para isso. <code>HTTPClient http;</code> cria o objeto de consulta; <code>http.begin(...)</code> indica a URL; <code>http.GET()</code> solicita o recurso; <code>http.getString()</code> lê a resposta; <code>http.end()</code> encerra o uso dos recursos.</p>' +
      '<p><code>int codigo</code> guarda o resultado do pedido. O código HTTP <code>200</code> indica sucesso, mas <code>404</code> indica que a página não foi encontrada. Portanto, <code>if (codigo &gt; 0)</code> não significa necessariamente sucesso: apenas verifica se a biblioteca retornou um código HTTP positivo.</p>'
    ));
    const servidor = bloco('7. Como o servidor funciona', '#b6-3');
    inserir(servidor?.querySelector('.explain'), texto(
      '<p><strong>Agora o papel muda:</strong> o navegador pede, e o ESP32 responde. <code>#include &lt;WebServer.h&gt;</code> fornece funções de servidor. <code>WebServer servidor(80)</code> indica a porta HTTP; <code>servidor.on("/ligar", ...)</code> associa o caminho à ação de acender o LED. <code>servidor.begin()</code> inicia o atendimento e <code>servidor.handleClient()</code>, no <code>loop()</code>, verifica os pedidos recebidos.</p>' +
      '<p>Ao abrir <code>/ligar</code>, o pedido chega ao ESP32, o programa modifica o LED e devolve uma resposta ao navegador. <strong>É uma demonstração didática local:</strong> um sistema real precisa controlar quem está autorizado a dar comandos.</p>'
    ));
    inserir(bloco('2. As linhas novas', '#b6-4'), texto(
      '<p><strong>Por que um nome?</strong> Pense no IP como o número de uma casa e em <code>ambiente-mbb.local</code> como um nome mais fácil de lembrar. <code>#include &lt;ESPmDNS.h&gt;</code> oferece as funções do anúncio; <code>MDNS.begin("ambiente-mbb")</code> tenta iniciar o nome e <code>MDNS.addService("http", "tcp", 80)</code> anuncia o serviço HTTP.</p>' +
      '<p>Anunciar não comprova que todo computador encontrará o dispositivo: o cliente precisa ter suporte a mDNS e estar em uma rede adequada. O servidor HTTP continua sendo o mesmo; mDNS ajuda a encontrá-lo e não publica a placa na Internet.</p>'
    ), 'afterbegin');
    inserir(bloco('1. Escolha a bancada que você consegue executar', '#b6-5'), texto(
      '<p><strong>Imagine uma sala acessível apenas pela rede da escola.</strong> O túnel reverso é uma passagem temporária: o computador local estabelece uma conexão de saída com um intermediário, que encaminha pedidos vindos de fora para o servidor de demonstração.</p>' +
      '<p>Primeiro confirme a página local, depois o endereço externo e finalmente o encerramento do acesso pelo túnel. O exemplo é somente de leitura e usa informação fictícia: publicar um túnel não significa que qualquer serviço seja seguro para exposição.</p>'
    ), 'afterbegin');
  }
  if (pagina === 'arduino-iot.html') {
    inserir(document.querySelector('#b7-1 .cards'), '<article class="card wide" data-mbb-explica="1"><h3>Antes de começar — quem percebe, decide e avisa?</h3><p>O sensor percebe uma condição física, como temperatura. O ESP32 interpreta a leitura e pode agir localmente, como acionar um LED que representa um ventilador. A rede transmite a informação para outro sistema ou pessoa.</p><p><strong>Preveja:</strong> se o Wi-Fi cair, o sensor deixa de medir? O ventilador precisa parar? Neste projeto, não. Medição e decisão local continuam; o aviso remoto pode ficar indisponível. Vamos reencontrar essa distinção na Granja Inteligente.</p></article>');
  }
  if (pagina === 'arduino-granja-inteligente.html') {
    const etapa = document.querySelector('#etapa7');
    inserir(etapa?.querySelector('h2'), '<p data-mbb-explica="1"><strong>Quem faz cada parte?</strong> O sensor mede, o ESP32 decide, o Wi-Fi leva a solicitação pela rede e a API do Telegram oferece um caminho para enviar a mensagem. <strong>API</strong> é a forma combinada de um programa pedir um serviço a outro. HTTPS protege o transporte quando configurado corretamente; não prova sozinho que o aviso apareceu no celular.</p>', 'afterend');
    const json = [...(etapa?.querySelectorAll('h3') || [])].find(x => x.textContent.includes('JSON:'));
    inserir(json, '<p data-mbb-explica="1"><strong>Por que usar JSON?</strong> Se vários aviários enviarem avisos, precisamos saber qual aviário, o que ocorreu e quando. Em JSON, cada nome antes dos dois-pontos é uma chave, seguida do valor; vírgulas separam os campos. <code>15000</code>, sem aspas, significa 15 segundos desde o início do programa, não o horário do relógio.</p>', 'afterend');
  }
  if (pagina === 'arduino-protocolos.html') {
    inserir(bloco('6. O que é novidade', '#b8-1'), texto('<p><strong>Por que criar tarefas?</strong> Imagine piscar um LED e registrar informações em ritmos diferentes. O RTOS ajuda a organizar as oportunidades de execução, em vez de uma longa sequência bloquear as demais ações. As tarefas ainda pertencem ao mesmo programa; nem todo prazo está automaticamente garantido.</p>'));
    inserir(bloco('7. Resultado esperado', '#b8-2'), '<article class="card wide" data-mbb-explica="1"><h3>Entenda o scanner I2C antes do resultado</h3><p><code>#include &lt;Wire.h&gt;</code> inclui a biblioteca I2C; <code>Wire.begin(21, 22)</code> utiliza os GPIOs 21 (SDA: dados) e 22 (SCL: sincronização). Os dispositivos compartilham esses fios e são identificados por endereços.</p><p><code>for (byte endereco = 1; endereco &lt; 127; endereco++)</code> testa endereços um de cada vez; <code>++</code> aumenta o número em um. <code>Wire.beginTransmission(endereco)</code> inicia uma tentativa, e <code>Wire.endTransmission()</code> informa o resultado. Se <code>erro == 0</code>, houve resposta sem erro e o scanner imprime o endereço em hexadecimal, como <code>0x27</code>; não é um IP nem um pino.</p><p>Se não aparecer endereço, confira alimentação, GND, SDA/SCL e compatibilidade elétrica antes de mudar o código.</p></article>', 'beforebegin');
  }
  if (pagina === 'arduino-seguranca.html') {
    inserir(bloco('3. Autenticar', 'main'), texto('<p><strong>Exemplo cotidiano:</strong> conferir um crachá na recepção ajuda a identificar quem entrou. Em IoT, autenticar é verificar quem pede acesso, sem confiar simplesmente no nome que a pessoa informou.</p>'));
    inserir(bloco('4. Autorizar', 'main'), texto('<p><strong>Reconhecer não é permitir tudo:</strong> alguém pode consultar a temperatura e não ter permissão para mudar os limites da ventilação. A autorização decide quais ações aquela identidade pode executar; ler um cartão RFID, sozinho, não concede permissões.</p>'));
    inserir(bloco('7. HTTP, HTTPS e autenticação não são a mesma coisa', 'main'), texto('<p><strong>Imagine uma ordem remota para ligar uma bomba:</strong> HTTP organiza o pedido; HTTPS protege a comunicação em trânsito quando implementado corretamente; autenticação verifica quem pediu, e autorização decide se essa pessoa pode mandar ligar. Um endereço HTTPS ainda pode aceitar comandos indevidos se não houver controle de acesso.</p>'));
  }
  if (pagina === 'arduino-projeto-iot.html') {
    const codigo = document.getElementById('b10-final')?.closest('article');
    inserir(codigo, '<article class="card wide" data-mbb-explica="1"><h3>Antes do código integrado — entenda as peças</h3><p><code>#include &lt;WiFi.h&gt;</code> e <code>#include &lt;WebServer.h&gt;</code> trazem os recursos de rede. <code>analogRead(LDR)</code> lê o circuito de luminosidade, <code>ambienteEscuro(...)</code> compara a leitura com o limite calibrado e <code>definirLed(...)</code> modifica a saída. Essa leitura não equivale diretamente a lux.</p><p><code>enum Modo { MANUAL, AUTOMATICO }</code> cria duas opções: comando pela página ou decisão pelo sensor. <code>estado ? HIGH : LOW</code> escolhe entre dois valores, como em um <code>if/else</code>. <code>servidor.on(...)</code> associa endereços a ações; <code>servidor.handleClient()</code> verifica pedidos no <code>loop()</code>.</p><p><strong>Por que limitar o tempo de conexão?</strong> Se a rede falhar, a automação local precisa continuar. Por isso o programa ainda chama <code>atualizarAutomacao()</code> durante a tentativa de Wi-Fi e depois continua o controle no <code>loop()</code>.</p></article>', 'beforebegin');
  }
});
