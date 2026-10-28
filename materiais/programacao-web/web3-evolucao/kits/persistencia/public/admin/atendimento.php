<?php
require_once dirname(__DIR__, 2) . "/src/autenticacao.php";
require_once dirname(__DIR__, 2) . "/src/repositorio-atendimento.php";
iniciarSessaoSegura();
exigirAutenticacao();
header("Cache-Control: no-store");
$pdo = conectarBanco();
$dados = lerConfiguracaoAtendimento($pdo);
$aviso = "";
if (($_SERVER["REQUEST_METHOD"] ?? "GET") === "POST") {
    if (!tokenCsrfValido($_POST["csrf_token"] ?? null)) {
        http_response_code(403);
        $aviso = "Atualize a página antes de salvar.";
    } else {
        $minutos = $_POST["minutos"] ?? "";
        $nome = $_POST["nome"] ?? "";
        $aberto = $_POST["aberto"] ?? "";
        try {
            if (!is_string($minutos) || !is_string($nome) || !in_array($aberto, ["0", "1"], true) ||
                ($minutos !== "" && !preg_match('/^(0|[1-9][0-9]{0,2})$/D', $minutos))) {
                throw new InvalidArgumentException("Confira os campos.");
            }
            $atendimento = new AvisoAtendimento(trim($nome), $aberto === "1", $minutos === "" ? null : (int) $minutos);
            salvarConfiguracaoAtendimento($pdo, $atendimento);
            header("Location: atendimento.php?salvo=1", true, 303);
            exit;
        } catch (InvalidArgumentException $erro) {
            http_response_code(422);
            $aviso = "Informe o nome, a situação e de 0 a 240 minutos; deixe o prazo vazio se ainda não houver estimativa.";
            $dados = ["nomeNegocio" => is_string($nome) ? $nome : "", "pedidosAbertos" => $aberto === "1",
                "tempoEstimado" => is_string($minutos) ? $minutos : ""];
        }
    }
}
function texto(mixed $valor): string { return htmlspecialchars((string) ($valor ?? ""), ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8"); }
?>
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Atualizar atendimento — Café Aurora</title><link rel="stylesheet" href="../css/styles.css"></head>
<body><a class="skip-link" href="#conteudo">Pular para o conteúdo</a><header><a href="painel.php">← Mensagens do Café</a> · <a href="../balcao.php">Conferir balcão</a></header>
<main id="conteudo"><h1>O aviso da cozinha</h1>
<?php if (isset($_GET["salvo"])): ?><p role="status">Alteração salva. Consulte novamente o balcão.</p><?php endif; ?>
<?php if ($aviso !== ""): ?><p role="alert"><?= texto($aviso) ?></p><?php endif; ?>
<form method="post"><input type="hidden" name="csrf_token" value="<?= texto(obterTokenCsrf()) ?>">
<p><label for="nome">Nome do negócio</label><input id="nome" name="nome" maxlength="100" required value="<?= texto($dados["nomeNegocio"]) ?>"></p>
<p><label for="aberto">Situação dos pedidos</label><select id="aberto" name="aberto"><option value="1" <?= $dados["pedidosAbertos"] ? "selected" : "" ?>>Abertos</option><option value="0" <?= !$dados["pedidosAbertos"] ? "selected" : "" ?>>Encerrados</option></select></p>
<p><label for="minutos">Estimativa em minutos</label><input id="minutos" name="minutos" type="number" min="0" max="240" step="1" aria-describedby="ajuda-prazo" value="<?= texto($dados["tempoEstimado"]) ?>"><span id="ajuda-prazo">Deixe vazio se a equipe ainda não informou uma estimativa.</span></p>
<button type="submit">Salvar aviso</button></form></main></body></html>
