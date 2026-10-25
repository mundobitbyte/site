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
  <main id="conteudo" tabindex="-1">
    <h1><?= htmlspecialchars($nomeNegocio, ENT_QUOTES, "UTF-8") ?></h1>
    <section aria-labelledby="atendimento">
      <h2 id="atendimento">Atendimento no balcão</h2>
      <p><?= htmlspecialchars($mensagemStatus, ENT_QUOTES, "UTF-8") ?></p>
      <p><?= htmlspecialchars($mensagemTempo, ENT_QUOTES, "UTF-8") ?></p>
      <p id="aviso-consulta" role="status">Informação recebida ao abrir a página.</p>
    </section>
  </main>
  <footer><p>Projeto educacional fictício — Café Aurora.</p></footer>
  <script type="module" src="js/balcao/main.js"></script>
</body>
</html>
