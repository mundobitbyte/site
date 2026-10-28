/* Mundo bit Byte — Revisão circular e em espiral dos módulos 7–10.
   Reforça o raciocínio sem substituir qualquer sketch ou navegação. */
(() => {
const desafios = [["b7-2", "Uma possibilidade e um risco", "Compare um termostato local com outro que envia histórico a uma aplicação. O que a rede permite fazer? Que risco novo exige uma decisão de projeto?"], ["b8-prep", "Organize seu diagnóstico", "Um sensor não responde. O que conferir primeiro: alimentação e níveis elétricos, fios e endereço, ou formato da mensagem? Explique uma ordem que evite danificar componentes."], ["b8-3", "Escolha a interface", "Um equipamento oferece uma porta RS-232. Explique por que não basta cruzar TX e RX com o ESP32 e onde deve entrar um transceptor compatível com 3,3 V."], ["b8-4", "Desenhe os nós", "Represente dois controladores de uma máquina trocando mensagens CAN: onde ficam os controladores, os transceptores e as terminações? Não faça uma ligação física nesta atividade."], ["b8-5", "Wi-Fi conectado, página inacessível", "Confira IP atual, porta/servidor e rota. Se o IP abre e o nome .local falha, qual serviço investigar? Use a experiência do módulo 6 para justificar."], ["b8-7", "Escolha pelo uso", "Para comandos de um terminal SPP no Android, qual tecnologia foi usada? Para um sensor alimentado por bateria com serviços e características, que alternativa investigaria?"], ["b9-2", "Quem pode observar e quem pode comandar?", "A escola quer permitir a todos consultar a luminosidade, mas somente ao responsável ligar a iluminação. Explique as verificações de identidade e permissão. O que HTTPS protege? O que ele não decide?"]];
const leituras = [{"id":"b8-rtos-code","section":"b8-1","title":"Lendo o programa — duas tarefas no ESP32","rows":[["tarefaLed(void *parametro)","Declara a função executada pela tarefa que alterna o LED. O parâmetro faz parte da assinatura usada pelo sistema de tarefas."],["bool estado = false / estado = !estado","Guarda um valor lógico e o inverte a cada passagem, alternando o estado da saída."],["while (true)","Mantém cada tarefa ativa enquanto o programa estiver em execução."],["vTaskDelay(pdMS_TO_TICKS(1000))","pdMS_TO_TICKS converte 1.000 ms em ticks, as unidades de tempo do RTOS. vTaskDelay bloqueia somente esta tarefa durante essa espera; o escalonador pode executar outras tarefas prontas. O período observado também inclui o trabalho da tarefa."],["xTaskCreate(...)","Cria uma tarefa com os seis argumentos explicados antes do programa. Não chama a função apenas uma vez: o escalonador passa a organizar sua execução."],["Serial.begin(115200) / pinMode(LED, OUTPUT)","O setup inicia o Monitor Serial e prepara o pino antes de iniciar as tarefas."]],"task":"Preveja o comportamento do LED e da mensagem no Monitor Serial antes de executar. Compare os períodos definidos e explique a diferença entre tarefas e funções comuns."},{"id":"b8-i2c-scanner","section":"b8-2","title":"Lendo o scanner — como descobrir um endereço I2C","rows":[["#include <Wire.h> / Wire.begin(21, 22)","Carrega a biblioteca I2C e inicia o barramento usando GPIO 21 como SDA e GPIO 22 como SCL, conforme este ESP32."],["for (byte endereco = 1; endereco < 127; endereco++)","Percorre endereços de teste, aumentando o valor a cada tentativa. O laço não mede distâncias; apenas percorre endereços I2C."],["Wire.beginTransmission(endereco)","Prepara uma comunicação direcionada ao endereço examinado naquele passo."],["byte erro = Wire.endTransmission()","Conclui a tentativa e devolve um código de status da transmissão; zero indica conclusão bem-sucedida."],["if (erro == 0) / encontrados++","Mostra somente os endereços que responderam e aumenta a contagem encontrada."],["Serial.println(endereco, HEX)","Exibe o endereço em hexadecimal, uma representação comum nos componentes I2C."]],"task":"Execute o scanner antes do LCD. Anote o endereço e explique por que trocar o endereço no código não substitui conferir alimentação, SDA, SCL e GND."},{"id":"b8-i2c-lcd","section":"b8-2","title":"Lendo o LCD — endereço, posição e texto","rows":[["#include <LiquidCrystal_I2C.h>","Disponibiliza os comandos para o LCD com interface I2C; a API pode variar conforme a versão da biblioteca."],["const byte ENDERECO_LCD = 0x27","Define o endereço usado pelo exemplo. O prefixo 0x indica notação hexadecimal; substitua pelo endereço retornado pelo scanner."],["LiquidCrystal_I2C lcd(ENDERECO_LCD, 16, 2)","Cria um objeto para o LCD de 16 colunas por 2 linhas."],["lcd.init() / lcd.backlight()","Inicializa o LCD e liga a iluminação de fundo quando o hardware e a biblioteca oferecem esse recurso."],["lcd.setCursor(0, 0) / lcd.setCursor(0, 1)","Posiciona a escrita na coluna zero da primeira ou da segunda linha; a contagem começa em zero."],["lcd.print(...)","Envia os caracteres que devem aparecer no visor."]],"task":"Antes de executar, indique onde aparecerão “Ambiente MbB” e “Sistema ativo”. Se o visor ficar vazio, verifique o endereço e a biblioteca além dos fios."},{"id":"b10-local","section":"b10-3","title":"Lendo a automação — por que a iluminação muda?","rows":[["const int LDR = 34 / LED = 23","Dá nomes aos pinos de leitura analógica e de controle do LED."],["const int LIMIAR = 2000","Define um valor inicial para comparação. É um ponto de partida que precisa ser calibrado com a leitura real da montagem."],["LEITURA_MAIOR_NO_ESCURO","Informa como interpretar o sensor conforme o divisor ou simulador; o valor precisa refletir os testes observados."],["bool ambienteEscuro(int leitura)","Recebe uma leitura, compara com o limiar e devolve verdadeiro ou falso."],["analogRead(LDR)","Obtém a leitura analógica atual do pino configurado."],["escuro ? HIGH : LOW","Operador condicional: escolhe HIGH quando escuro é verdadeiro, caso contrário escolhe LOW."],["delay(500)","Aguarda meio segundo antes de repetir a leitura e a impressão."]],"task":"Cubra o sensor, anote os números e confirme a direção da comparação. Não mude o limiar ou a orientação antes de observar os valores no Monitor Serial."},{"id":"b10-final","section":"b10-5","title":"Lendo a integração — funções, modos e rede","rows":[["enum Modo { MANUAL, AUTOMATICO }","Define os dois estados possíveis de controle do LED. O nome modo guarda qual deles está ativo."],["definirLed(bool estado)","Centraliza a alteração do GPIO e da variável ledLigado, mantendo coerência entre saída física e página."],["atualizarAutomacao() / if (modo != AUTOMATICO) return","Lê o LDR e decide a saída apenas no modo automático; return impede essa atualização no modo manual."],["montarPagina() / pagina +=","Concatena partes do HTML para mostrar luminosidade, estado e links de controle ao navegador."],["servidor.on(..., [](){ ... })","Associa uma rota a uma função anônima (lambda), como ligar, desligar ou retornar ao modo automático."],["servidor.send(303, ... ) / Location: /","Indica ao navegador que deve voltar à rota inicial após o comando. Não é a mesma coisa que alterar o LED."],["millis() - inicio < TEMPO_MAX_WIFI","Compara o tempo decorrido com o limite configurado de 10 segundos na tentativa inicial de Wi-Fi."],["servidorDisponivel / servidor.handleClient()","Atende pedidos apenas quando o servidor foi iniciado e o Wi-Fi está conectado; o controle local continua sem esses pedidos."],["delay(20)","Espera 20 ms entre passagens do loop. O relatório do Monitor Serial usa millis() para imprimir a cada 500 ms sem acrescentar outra espera longa."]],"task":"Desconecte a rede antes de iniciar e verifique a mensagem de falha. O LED segue operando pelo LDR? O programa não implementa uma rotina de recuperação da rede. Se a conexão inicial falhar, reinicie para tentar abrir o servidor novamente; não conte com reconexão garantida pela biblioteca."}];
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const montar = () => {
  document.querySelectorAll(':is(.mbb7-panel,.mbb8-panel,.mbb9-panel,.mbb10-panel) table').forEach(tabela => {
    if (tabela.closest('.mbb-table-scroll,.mbb8-table-scroll,.mbb10-table-scroll')) return;
    const faixa = document.createElement('div');
    faixa.className = 'mbb-table-scroll';
    faixa.tabIndex = 0;
    faixa.setAttribute('role', 'region');
    faixa.setAttribute('aria-label', 'Tabela: ' + (tabela.closest('article')?.querySelector('h3')?.textContent || 'consulta'));
    tabela.before(faixa);
    faixa.appendChild(tabela);
  });
  // O botão continua visualmente "Copiar", mas passa a identificar qual código copia.
  document.querySelectorAll('.mbb8-panel .card.code > h3 button, .mbb10-panel .card.code > h3 button').forEach(botao => {
    if (!botao.hasAttribute('aria-label')) {
      const titulo = (botao.closest('h3')?.textContent || 'código').replace(/\bCopiar\b/g, '').trim();
      botao.setAttribute('aria-label', 'Copiar código: ' + titulo);
      botao.setAttribute('title', 'Copiar código: ' + titulo);
    }
  });
  desafios.forEach(([id,titulo,pergunta]) => {
    const cards = document.getElementById(id)?.querySelector(':scope > .cards');
    if (!cards || cards.querySelector('[data-mbb-espiral]')) return;
    const desafio = document.createElement('details');
    desafio.className = 'mbb-espiral-desafio';
    desafio.dataset.mbbEspiral = id;
    desafio.innerHTML = '<summary>'+esc(titulo)+'</summary><p>'+esc(pergunta)+'</p>';
    const ponte = cards.querySelector(':scope > [class*="-bridge"]');
    if (ponte) cards.insertBefore(desafio, ponte);
    else cards.appendChild(desafio);
  });
  leituras.forEach(d => {
    const painel=document.getElementById(d.section);
    const code=document.getElementById(d.id)?.closest('article.card');
    if (!painel || !code || painel.querySelector('[data-mbb-leitura="'+d.id+'"]')) return;
    const artigo=document.createElement('article');
    artigo.className='mbb-leitura-integrada';
    artigo.dataset.mbbLeitura=d.id;
    const passos=d.rows.map(([comando,significado]) =>
      '<div class="mbb-espiral-code-row"><code>'+esc(comando)+'</code><p>'+esc(significado)+'</p></div>'
    ).join('');
    artigo.innerHTML='<h4>'+esc(d.title)+'</h4>'+
      '<div class="mbb-espiral-body">'+
        '<p class="mbb-espiral-lead">Observe o programa acima e acompanhe o papel de cada novidade. Não é preciso decorar todos os comandos antes de executar.</p>'+
        '<div class="mbb-espiral-code-rows">'+passos+'</div>'+
        '<p class="mbb-espiral-action"><strong>Experimente:</strong> '+esc(d.task)+'</p>'+
      '</div>';
    code.appendChild(artigo);
  });
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',montar);
else montar();
})();
