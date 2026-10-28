<?php
require_once dirname(__DIR__) . "/src/atendimento.php";
$atendimento = obterAtendimento();

$nomeNegocio = $atendimento["nomeNegocio"];
$mensagemStatus = $atendimento["mensagemStatus"];
$mensagemTempo = $atendimento["mensagemTempo"];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Balcão — Café Aurora</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header>
    <p><a href="index.php">Café Aurora</a></p>
    <nav aria-label="Navegação do balcão">
      <ul><li><a href="index.php">Voltar ao site</a></li></ul>
    </nav>
  </header>
  <main id="conteudo" tabindex="-1"><div id="cafe-app"><p>Preparando a interface do balcão…</p></div><noscript>Ative JavaScript para usar esta interface. O site e o contato continuam nos links do Café.</noscript></main>
  <footer><p>Projeto educacional fictício — Café Aurora.</p></footer>
  <script type="module" src="js/balcao/main.js"></script>
</body>
</html>
