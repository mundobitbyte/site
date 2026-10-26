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
  <meta name="description" content="Conheça o Café Aurora, seus produtos artesanais, ambiente e horário de atendimento.">
  <title>Café Aurora — Café e produtos artesanais no bairro</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header>
    <p><a href="index.php">Café Aurora</a></p>
    <nav aria-label="Navegação principal">
      <ul>
        <li><a href="index.php" aria-current="page">Início</a></li>
        <li><a href="cardapio.php">Cardápio</a></li>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="contato.php">Contato</a></li>
      </ul>
    </nav>
  </header>
  <main id="conteudo" tabindex="-1">
    <h1><?= htmlspecialchars($nomeNegocio, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8") ?></h1>
    <p>Café, encontros e bons momentos no coração do bairro.</p>
    <section aria-labelledby="status-pedidos">
      <h2 id="status-pedidos">Pedidos para retirada</h2>
      <p><?= htmlspecialchars($mensagemStatus, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8") ?></p>
      <p><?= htmlspecialchars($mensagemTempo, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8") ?></p>
    </section>
    <section aria-labelledby="destaques">
      <h2 id="destaques">Destaques da casa</h2>
      <p>Cafés selecionados, pães artesanais e receitas preparadas diariamente.</p>
      <p><a href="cardapio.php">Conheça o cardápio</a></p>
    </section>
    <section aria-labelledby="ambiente">
      <h2 id="ambiente">Um ambiente acolhedor</h2>
      <figure>
        <img
          src="img/ambiente-cafe-1024.webp"
          srcset="img/ambiente-cafe-640.webp 640w, img/ambiente-cafe-1024.webp 1024w, img/ambiente-cafe.webp 1280w"
          sizes="(max-width: 48rem) calc(100vw - 2rem), 70rem"
          alt="Salão do Café Aurora com mesas de madeira e plantas"
          width="1280"
          height="853"
        >
        <figcaption>Um espaço para conversar, estudar ou trabalhar.</figcaption>
      </figure>
    </section>
  </main>
  <footer><p>&copy; 2026 Café Aurora. Projeto educacional fictício.</p></footer>
  <script src="js/script.js" defer></script>
</body>
</html>
