/* Ampliações conservadoras sobre a última versão aprovada (commit be49be67).
 * Este script NÃO substitui as práticas originais: só acrescenta exercícios opcionais.
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  function inserir(etapa, codigo, conteudo) {
    const secao = document.getElementById(etapa);
    const cards = secao && secao.querySelector('.cards');
    if (!cards || secao.querySelector('[data-mbb6-acrescimo="' + codigo + '"]')) return;
    const card = document.createElement('article');
    card.className = 'card wide mbb6-acrescimo';
    card.setAttribute('data-mbb6-acrescimo', codigo);
    card.innerHTML = conteudo;
    // O JSON é uma alternativa de montagem: aparece logo após o passo 7,
    // antes do sketch, sem substituir a montagem manual nem suas instruções.
    if (etapa === 'b6-prep' && (codigo === 'diagrama' || codigo === 'guia-json')) {
      const referencia = codigo === 'diagrama'
        ? [...cards.children].find(el => el.querySelector('h3')?.textContent.includes('7. Montando o circuito-base'))
        : cards.querySelector('[data-mbb6-acrescimo="diagrama"]');
      if (referencia) {
        cards.insertBefore(card, referencia.nextSibling);
        return;
      }
    }
    const ponte = [...cards.children].reverse().find(el => el.matches('.mbb6-bridge'));
    cards.insertBefore(card, ponte || null);
  }

  function anexo(etapa, nome, titulo, arquivo, id, explicacao, lista) {
    inserir(etapa, nome,
      '<h3>' + titulo + '</h3>' +
      '<p>' + explicacao + '</p>' +
      '<details><summary>Ver código completo e copiar</summary>' +
      '<div class="mbb6-aux-toolbar"><button type="button" disabled data-mbb6-carregando="' + id +
      '" onclick="copyCode(\'' + id + '\',this)">Carregando código...</button></div>' +
      '<pre tabindex="0" id="' + id + '" class="mbb6-recuperado-code">Carregando o arquivo original...</pre>' +
      '<p><a href="' + arquivo + '">Abrir arquivo-fonte diretamente</a>.</p></details>' +
      lista
    );
    const painel = document.getElementById(etapa);
    const caixa = painel && painel.querySelector('#' + id);
    const botao = painel && painel.querySelector('[data-mbb6-carregando="' + id + '"]');
    if (!caixa || !botao) return;
    fetch(arquivo, {cache:'no-store'}).then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    }).then(codigoFonte => {
      caixa.textContent = codigoFonte;
      botao.disabled = false;
      botao.textContent = 'Copiar';
    }).catch(() => {
      caixa.textContent = 'Arquivo temporariamente indisponível. Use o link Abrir arquivo-fonte diretamente.';
      botao.disabled = true;
      botao.textContent = 'Arquivo indisponível';
    });
  }

  anexo('b6-prep', 'diagrama',
    'Opção 2 (facultativa) — montar o mesmo circuito colando o diagram.json',
    '../materiais/arduino/conectividade/wokwi/diagram.json', 'b6-prep-diagrama-extra',
    '<p><strong>Para que serve?</strong> O arquivo <code>diagram.json</code> é um texto que informa ao Wokwi quais componentes desenhar e quais pinos ligar. Em <code>parts</code> estão as peças; em <code>connections</code>, os fios. Ele <strong>não contém o programa</strong> do ESP32 e não substitui o <code>sketch.ino</code>.</p>' +
    '<p><strong>Escolha um caminho:</strong> você pode montar LED e resistor manualmente no passo 7 <em>ou</em> usar este diagrama pronto. Os dois caminhos resultam no mesmo circuito-base. <strong>Não precisa fazer as duas montagens.</strong></p>' +
    '<ol><li>No <a href="https://wokwi.com/projects/new/esp32" target="_blank" rel="noopener noreferrer">projeto ESP32 do Wokwi</a>, pare a simulação (■) se ela estiver em execução.</li>' +
    '<li>Nesta apostila, abra <strong>Ver código completo e copiar</strong> logo abaixo e clique em <strong>Copiar</strong> para copiar o JSON inteiro.</li>' +
    '<li><strong>Na aba do Wokwi</strong>, abra o arquivo <code>diagram.json</code> (não <code>sketch.ino</code>). Clique dentro do editor de texto, pressione <strong>Ctrl+A</strong> para selecionar tudo e depois <strong>Ctrl+V</strong> para colar. Se preferir, use os comandos Selecionar tudo e Colar do seu dispositivo.</li>' +
    '<li>Volte à área do circuito. Verifique que aparecem <strong>ESP32, LED vermelho, resistor de 220 Ω e fios</strong>. O GPIO 23 liga-se ao ânodo (A) do LED; o cátodo (C) passa pelo resistor até o GND. O Monitor Serial também fica configurado.</li>' +
    '<li>Agora, na aba <code>sketch.ino</code>, utilize o <strong>código de piscar o LED do passo 8</strong> e inicie a simulação (▶). Observe o LED acender e apagar: <strong>o JSON monta o circuito; o sketch programa seu comportamento.</strong></li></ol>',
    '<p class="mbb6-checkpoint"><strong>Quando usar de novo?</strong> Guarde este circuito no mesmo projeto Wokwi. Ele será reutilizado nas etapas de Bluetooth, Wi-Fi, HTTP, mDNS e tunelamento, trocando o <code>sketch.ino</code> conforme cada prática. Na simulação do Bluetooth (6.1), crie também o arquivo auxiliar <code>BluetoothSerial.h</code> solicitado na própria etapa.</p>' +
    '<p><strong>Se não aparecer a montagem:</strong> confira se colou no <code>diagram.json</code>, se copiou desde a primeira <code>{</code> até a última <code>}</code> e se não apagou aspas, vírgulas ou colchetes. O código fonte também está disponível pelo link abaixo do quadro.</p>');

  // Pequeno manual contextual: não remove o circuito-base nem altera o sketch aprovado.
  inserir('b6-prep', 'guia-json', \`
    <h3>Entenda o diagram.json — dicionário dos campos mais usados</h3>
    <p>O quadro anterior fornece um circuito pronto. <strong>Aqui você aprende a ler e modificar o JSON</strong>, sem precisar decorar seus comandos. Ele descreve as peças, sua posição e as conexões; quem programa o comportamento da placa continua sendo o <code>sketch.ino</code>.</p>
    <p><strong>Leia primeiro o básico:</strong> <code>{ }</code> delimitam um objeto; <code>[ ]</code> representam uma lista; <code>"texto"</code> indica texto; <code>220</code> é número e <code>true</code>/<code>false</code> são valores lógicos. Cada propriedade usa <code>"nome": valor</code>, e os itens são separados por vírgulas. <strong>JSON não aceita comentários</strong> com <code>//</code> nem vírgula depois do último item.</p>
    <details>
      <summary><strong>1. Estrutura geral do arquivo</strong> — os campos da primeira camada</summary>
      <div class="mbb6-table-scroll" tabindex="0" aria-label="Tabela de campos principais do diagram.json">
        <table><thead><tr><th>Campo</th><th>Para que serve</th><th>Valor neste circuito / opções</th></tr></thead><tbody>
          <tr><th scope="row"><code>version</code></th><td>Versão do formato usado pelo Wokwi.</td><td><code>1</code> — mantenha esse valor.</td></tr>
          <tr><th scope="row"><code>author</code></th><td>Identifica o autor do arquivo.</td><td><code>"Mundo bit Byte"</code> — pode ser outro texto.</td></tr>
          <tr><th scope="row"><code>editor</code></th><td>Identifica o editor do circuito.</td><td><code>"wokwi"</code> — mantenha esse valor.</td></tr>
          <tr><th scope="row"><code>parts</code></th><td>Lista dos componentes (placa, LED, resistor etc.).</td><td><code>[ { ... }, { ... } ]</code>: cada <code>{ }</code> descreve uma peça.</td></tr>
          <tr><th scope="row"><code>connections</code></th><td>Lista dos fios entre os pinos.</td><td><code>[ [origem, destino, cor, trajeto], ... ]</code>.</td></tr>
          <tr><th scope="row"><code>serialMonitor</code></th><td>Configura a exibição e a entrada de texto do Monitor Serial.</td><td><code>{ "display": "always", "newline": "lf" }</code> neste circuito.</td></tr>
        </tbody></table>
      </div>
    </details>
    <details>
      <summary><strong>2. Campos de cada componente em parts</strong> — posição, tipo e atributos</summary>
      <div class="mbb6-table-scroll" tabindex="0" aria-label="Tabela de campos dos componentes Wokwi">
        <table><thead><tr><th>Campo</th><th>Significado</th><th>Exemplos e valores possíveis</th></tr></thead><tbody>
          <tr><th scope="row"><code>id</code></th><td>Identificador único; é usado para localizar a peça nas conexões.</td><td><code>"esp"</code>, <code>"led"</code>, <code>"resistor"</code>; você pode escolher o texto, sem repetir IDs.</td></tr>
          <tr><th scope="row"><code>type</code></th><td>Modelo de peça reconhecido pelo Wokwi.</td><td><code>"board-esp32-devkit-c-v4"</code>, <code>"wokwi-led"</code>, <code>"wokwi-resistor"</code>. Outros exemplos: <code>"wokwi-pushbutton"</code>, <code>"wokwi-dht22"</code>, <code>"wokwi-hc-sr04"</code>. Não invente nomes.</td></tr>
          <tr><th scope="row"><code>left</code></th><td>Posição horizontal na tela, em pixels.</td><td><code>0</code>, <code>220</code>, <code>-50</code>; aumente ou diminua para mover a peça.</td></tr>
          <tr><th scope="row"><code>top</code></th><td>Posição vertical na tela, em pixels.</td><td><code>0</code>, <code>-50</code>, <code>110</code>; valores negativos são possíveis.</td></tr>
          <tr><th scope="row"><code>rotate</code></th><td>Gira a representação da peça; é opcional.</td><td><code>0</code>, <code>90</code>, <code>180</code>, <code>270</code> (graus).</td></tr>
          <tr><th scope="row"><code>hide</code></th><td>Oculta a peça no desenho; não significa excluir o componente.</td><td><code>true</code> ou <code>false</code> (sem aspas). Normalmente não é necessário.</td></tr>
          <tr><th scope="row"><code>attrs</code></th><td>Propriedades específicas daquela peça; não são iguais para todos os tipos.</td><td>LED: <code>{ "color": "red" }</code>; resistor: <code>{ "value": "220" }</code>.</td></tr>
        </tbody></table>
      </div>
      <p><strong>Obrigatórios para uma peça:</strong> <code>id</code> e <code>type</code>. <code>left</code>, <code>top</code>, <code>attrs</code>, <code>rotate</code> e <code>hide</code> são opcionais. <strong>Atenção:</strong> se trocar um <code>id</code>, atualize também as referências a ele em <code>connections</code>.</p>
      <p><strong>Atributos que você usará agora:</strong> para o LED, <code>color</code> pode ser <code>"red"</code>, <code>"green"</code>, <code>"blue"</code>, <code>"white"</code> ou uma cor hexadecimal como <code>"#FFFF00"</code>; <code>label</code> acrescenta um texto sob o LED, como <code>"Teste"</code>. Para o resistor, <code>value</code> define a resistência em ohms, por exemplo <code>"220"</code> ou <code>"330"</code>. Os nomes e valores admitidos dependem do <code>type</code> de cada componente.</p>
    </details>
    <details>
      <summary><strong>3. Como entender connections</strong> — fios, pinos e Monitor Serial</summary>
      <p>Cada fio tem <strong>quatro informações, nesta ordem</strong>: <code>[ "origem:pino", "destino:pino", "cor", [] ]</code>. O <code>id</code> é o nome da peça declarado em <code>parts</code>; depois de <code>:</code> vem o pino daquela peça.</p>
      <div class="mbb6-table-scroll" tabindex="0" aria-label="Tabela das conexões do circuito-base">
        <table><thead><tr><th>Trecho do arquivo</th><th>O que significa</th></tr></thead><tbody>
          <tr><th scope="row"><code>"esp:23"</code> → <code>"led:A"</code></th><td>GPIO 23 do ESP32 ligado ao ânodo (A) do LED.</td></tr>
          <tr><th scope="row"><code>"led:C"</code> → <code>"resistor:1"</code></th><td>Cátodo (C) do LED ligado a uma ponta do resistor.</td></tr>
          <tr><th scope="row"><code>"resistor:2"</code> → <code>"esp:GND.1"</code></th><td>Outra ponta do resistor ligada ao GND da placa.</td></tr>
          <tr><th scope="row"><code>"esp:TX"</code> → <code>"$serialMonitor:RX"</code></th><td>Saída serial da placa ligada à entrada virtual do monitor.</td></tr>
          <tr><th scope="row"><code>"esp:RX"</code> → <code>"$serialMonitor:TX"</code></th><td>Entrada serial da placa ligada à saída virtual do monitor.</td></tr>
        </tbody></table>
      </div>
      <p><strong>Cor do fio:</strong> <code>"green"</code>, <code>"black"</code>, <code>"red"</code>, <code>"blue"</code> etc. mudam o desenho do fio, não o pino onde ele está ligado. A cor vazia <code>""</code> oculta a linha (usada nas ligações virtuais do Monitor Serial). O último <code>[]</code> deixa o Wokwi desenhar o trajeto automaticamente; em exemplos avançados, pode receber comandos de percurso, como <code>["v10", "h20"]</code>.</p>
      <p>Os nomes dos pinos não são universais: dependem de cada peça. Para descobri-los, passe o mouse sobre um pino no Wokwi ou consulte a referência oficial do componente.</p>
    </details>
    <details>
      <summary><strong>4. Opções do serialMonitor</strong> — quando aparece e como recebe texto</summary>
      <div class="mbb6-table-scroll" tabindex="0" aria-label="Tabela de opções do Monitor Serial">
        <table><thead><tr><th>Campo</th><th>Valores usuais</th><th>Efeito</th></tr></thead><tbody>
          <tr><th scope="row"><code>display</code></th><td><code>"auto"</code>, <code>"always"</code>, <code>"never"</code>, <code>"plotter"</code>, <code>"terminal"</code></td><td>Abre quando há saída; abre sempre; não abre; mostra gráfico; ou usa um terminal.</td></tr>
          <tr><th scope="row"><code>newline</code></th><td><code>"lf"</code>, <code>"cr"</code>, <code>"crlf"</code>, <code>"none"</code></td><td>Escolhe qual caractere de fim de linha é enviado junto com a entrada digitada.</td></tr>
          <tr><th scope="row"><code>collapse</code></th><td><code>true</code>, <code>false</code></td><td>Define se o monitor inicia recolhido.</td></tr>
        </tbody></table>
      </div>
      <p>Neste circuito usamos <code>"display": "always"</code> para deixar o Monitor Serial visível e <code>"newline": "lf"</code> para enviar uma quebra de linha. Na prática Bluetooth com arquivo auxiliar, essa entrada é usada para representar comandos recebidos; isso <strong>não simula a transmissão por rádio</strong>.</p>
    </details>
    <details>
      <summary><strong>5. Faça pequenas experiências e saiba o que comprovar</strong></summary>
      <ol>
        <li><strong>Cor:</strong> no <code>diagram.json</code>, mude somente <code>"color": "red"</code> para <code>"color": "green"</code>. O LED desenhado muda de cor; o código que liga e desliga continua igual.</li>
        <li><strong>Posição:</strong> mude <code>"top": -50</code> do LED para <code>"top": -90</code>. A peça muda de posição no desenho, mas permanece ligada ao GPIO 23.</li>
        <li><strong>Monitor Serial:</strong> troque <code>"display": "always"</code> por <code>"display": "auto"</code>. Ele aparecerá quando houver saída serial, em vez de ser aberto sempre.</li>
      </ol>
      <p><strong>Como realizar:</strong> salve uma cópia do JSON original; pare a simulação, altere um campo por vez, volte ao circuito, inicie a simulação e compare com o resultado esperado. Depois, restaure o JSON para continuar as próximas etapas. <strong>Não altere o GPIO 23 nem elimine o resistor nesta atividade.</strong></p>
    </details>
    <p class="mbb6-note"><strong>Onde descobrir mais componentes e campos?</strong> Use <strong>+</strong> no editor visual do Wokwi, inspecione o <code>diagram.json</code> gerado e consulte as referências oficiais: <a href="https://docs.wokwi.com/diagram-format" target="_blank" rel="noopener noreferrer">formato diagram.json</a>, <a href="https://docs.wokwi.com/parts/wokwi-led" target="_blank" rel="noopener noreferrer">LED e atributos</a>, <a href="https://docs.wokwi.com/parts/wokwi-resistor" target="_blank" rel="noopener noreferrer">resistor</a>, <a href="https://docs.wokwi.com/guides/serial-monitor" target="_blank" rel="noopener noreferrer">Monitor Serial</a> e <a href="https://docs.wokwi.com/guides/diagram-editor" target="_blank" rel="noopener noreferrer">editor visual</a>. Esta é uma seleção dos campos mais úteis para começar, não a lista de todos os componentes do simulador.</p>
    <p class="mbb6-checkpoint"><strong>Conferência final:</strong> você consegue explicar qual parte do JSON cria o LED, qual linha liga o GPIO 23 ao LED e por que alterar <code>diagram.json</code> não substitui modificar <code>sketch.ino</code>? Se sim, avance para o código de piscar do passo 8.</p>
  \`);

  inserir('b6-1', 'prova-bluetooth',
    '<h3>Conferência complementar — rádio real ou interface simulada?</h3>' +
    '<div class="mbb6-table-scroll"><table><thead><tr><th>Onde</th><th>O que executa</th><th>O que a evidência prova</th></tr></thead><tbody>' +
    '<tr><td>ESP32 original + Android</td><td><code>BluetoothSerial.h</code> real, pareamento e comandos L/D</td><td>Rádio Bluetooth Classic/SPP e LED físico</td></tr>' +
    '<tr><td>Wokwi + arquivo auxiliar</td><td>Mesmo <code>sketch.ino</code> e classe <code>BluetoothSerial</code> que encaminha dados ao Monitor Serial</td><td>Lógica de recepção, ação e retorno; <strong>não</strong> rádio Bluetooth</td></tr>' +
    '</tbody></table></div><p>Os comandos <code>SerialBT.begin()</code>, <code>SerialBT.available()</code>, <code>SerialBT.read()</code> e <code>SerialBT.println()</code> permanecem no programa original de ambos os caminhos. Antes de gravar na placa física, retire o arquivo auxiliar local para usar a biblioteca Bluetooth genuína.</p>');

  inserir('b6-2', 'evidencias-wifi',
    '<h3>Conferência adicional — diferenciar rede, IP e exemplo</h3>' +
    '<p>Ao conectar o Wokwi à rede <code>Wokwi-GUEST</code>, anote o IP recebido de fato. Na ESP32 física, substitua o nome e a senha pelos dados da rede autorizada. <strong>Um endereço escrito manualmente como exemplo não comprova conexão.</strong> Se a rede falhar, verifique a grafia do SSID, a senha, a mensagem de status e o prazo de espera antes de concluir que houve erro no programa.</p>' +
    '<p class="mbb6-checkpoint"><strong>Evidência:</strong> diga quem atribuiu o IP, qual interface foi usada e o que deixaria de funcionar se a rede estivesse indisponível.</p>');

  anexo('b6-3', 'http-loopback',
    'Experimento complementar — HTTP verdadeiro dentro do ESP32 simulado',
    '../materiais/arduino/conectividade/wokwi/http-local.ino', 'b6-3-loopback-extra',
    'A prática principal mantém o cliente HTTP e o servidor HTTP na rede e na ESP32 física. Como <strong>opção adicional</strong> para quem usa somente o Wokwi, execute o exemplo abaixo no mesmo <code>sketch.ino</code>. Ele inicia um servidor HTTP e faz o cliente conectar-se ao endereço <code>127.0.0.1</code>, isto é, ao próprio ESP32. Os códigos <code>200</code> e <code>404</code> são respostas HTTP de verdade, mas o pedido <strong>não sai para outro equipamento</strong>. O exemplo não substitui os dois papéis ensinados anteriormente.',
    '<div class="mbb6-table-scroll"><table><thead><tr><th>Envie no Monitor Serial</th><th>Resultado esperado</th></tr></thead><tbody>' +
    '<tr><td><code>C</code></td><td><code>GET /estado</code> → <code>200</code>; LED apagado</td></tr>' +
    '<tr><td><code>X</code></td><td><code>GET /ausente</code> → <code>404</code>; rota inexistente</td></tr>' +
    '<tr><td><code>L</code></td><td><code>POST /ligar</code> → <code>200</code>; LED aceso</td></tr>' +
    '<tr><td><code>C</code> novamente</td><td><code>GET /estado</code> → <code>200</code>; LED ligado</td></tr>' +
    '</tbody></table></div><p><strong>Como testar:</strong> pare a simulação antes de substituir o <code>sketch.ino</code>. Use o circuito-base. Inicie e envie C, X, L e C, aguardando o separador <code>---</code> entre os comandos. Compare método, caminho, status e corpo. Se houver falha de inicialização do servidor, registre a limitação e volte ao exemplo principal.</p>');

  inserir('b6-4', 'mdns-dnssd',
    '<h3>Distinção útil — resolver nome ou descobrir serviço?</h3>' +
    '<p>O mDNS é usado para resolver um nome <code>.local</code> na rede local. O anúncio de serviço via DNS-SD informa também <strong>tipo de serviço e porta</strong>, por exemplo <code>_http._tcp</code> e <code>80</code>. Uma linha impressa no Serial mostrando o nome configurado não comprova, sozinha, que outro computador o resolveu. Nesta etapa, a captura de pacotes e a consulta a partir de outro equipamento, quando disponíveis, são evidências mais fortes.</p>' +
    '<p class="mbb6-checkpoint"><strong>Compare:</strong> “qual é o IP de ambiente-mbb.local?” e “quem oferece HTTP nesta rede e em qual porta?” são perguntas relacionadas, mas não idênticas.</p>');

  anexo('b6-5', 'tunel-modelo',
    'Modelo opcional — ensaiar a lógica antes do túnel real',
    '../materiais/arduino/conectividade/wokwi/tunel-modelo.ino', 'b6-5-modelo-extra',
    'Depois de aprender e executar o servidor Python e o túnel real apresentados nesta etapa, você pode usar este <strong>modelo opcional no Wokwi</strong> para revisar a diferença entre serviço local e acesso externo. Ele apenas troca mensagens pelo Monitor Serial: <strong>não cria túnel, IP público ou resposta HTTP real.</strong> Não use suas mensagens como evidência de publicação externa.',
    '<p><strong>Sequência:</strong> envie <code>L</code> (consulta local), <code>E</code> (externa bloqueada), <code>A</code> (abrir caminho no modelo), <code>E</code> (modelo permite consulta), <code>F</code> (fechar), <code>E</code> (bloqueada) e <code>L</code> (local ainda disponível). A confirmação do túnel real continua sendo o acesso externo ao servidor e a perda desse acesso após encerrá-lo.</p>');
});