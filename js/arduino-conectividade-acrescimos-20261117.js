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
    if (codigo === 'diagrama' && etapa === 'b6-prep') {
      const montagem = [...cards.children].find(el =>
        el.querySelector('h3')?.textContent.includes('7. Montando o circuito-base'));
      if (montagem) {
        cards.insertBefore(card, montagem.nextSibling);
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