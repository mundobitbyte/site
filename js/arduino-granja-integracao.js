
/* Prática 7.5 inserida antes do inicializador de navegação do tópico 7.
   Preserva o conteúdo, os identificadores de progresso e o índice existente. */
document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("stageMenu");
  const main = document.querySelector("#arduinoLayout main#topo");
  if (!menu || !main || document.getElementById("b7-5")) return;
  const link = document.createElement("a");
  link.className = "stage-link module-visible";
  link.href = "#b7-5";
  link.textContent = "7.5 Granja Inteligente (prática)";
  menu.appendChild(link);
  const bloco = document.createElement("section");
  bloco.className = "project mbb7-panel";
  bloco.id = "b7-5";
  bloco.innerHTML = "\n<div class=\"projectHead\"><span class=\"badge\">7.5</span><div><h2>Prática integradora — Granja Inteligente com ESP32</h2><p>Três funções: controle de temperatura, água e identificação RFID, com avisos IoT.</p></div></div>\n<div class=\"mbb7-context\"><strong>Da aplicação à prática:</strong> um sistema IoT identifica um evento, toma uma decisão local e avisa alguém distante.</div>\n<div class=\"cards\">\n<article class=\"card wide\"><h3>1. O desafio</h3><p>O DHT22 mede temperatura; o ESP32 liga o ventilador. O HC-SR04 mede a distância até a água e comanda a bomba. O MFRC522 identifica funcionários. Os eventos são registrados em JSON e podem ser enviados pelo Telegram. <strong>Sem Internet, o controle local continua.</strong></p></article>\n<article class=\"card\"><h3>2. O que acontece no Wokwi?</h3><p>Altere temperatura e distância, acompanhe dois LEDs representando os equipamentos e teste cartões RFID conhecidos e desconhecidos.</p></article>\n<article class=\"card\"><h3>3. Onde está a IoT?</h3><p>O ESP32 usa Wi-Fi e HTTPS para enviar avisos. O modo inicial demonstra eventos sem mensagens reais; o Telegram exige um bot configurado em projeto privado.</p></article>\n<article class=\"card worked wide\"><h3>4. Abra o laboratório guiado</h3><p>A prática explica a montagem em <code>diagram.json</code>, o código, os sensores, o bot Telegram e os testes. <a href=\"arduino-granja-inteligente.html\"><strong>Abrir a prática 7.5 — Granja Inteligente</strong></a>.</p><div class=\"mbb7-checkpoint\"><strong>Evidência:</strong> demonstrar dois controles e explicar a diferença entre aviso local e mensagem entregue remotamente.</div></article>\n<article class=\"card wide mbb7-bridge\"><h3>5. Próximo bloco</h3><p>Com as três funções integradas, <a href=\"arduino-protocolos.html\">avance ao Tópico 8</a> para estudar tarefas e protocolos.</p></article>\n</div>";
  main.appendChild(bloco);
});
