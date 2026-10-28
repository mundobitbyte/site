<?php
ini_set("display_errors", "0");
require_once dirname(__DIR__, 2) . "/src/repositorio-cardapio.php";
require_once dirname(__DIR__, 2) . "/src/autenticacao.php";
iniciarSessaoSegura();
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store");
function responderCardapio(int $status, array $dados): never {
    http_response_code($status); echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR); exit;
}
try {
    $pdo = conectarBanco();
    $metodo = $_SERVER["REQUEST_METHOD"] ?? "GET";
    if ($metodo === "GET") {
        responderCardapio(200, ["produtos" => listarProdutos($pdo, administradorAutenticado())]);
    }
    if ($metodo !== "POST") { header("Allow: GET, POST"); responderCardapio(405, ["erro" => "Método não permitido."]); }
    if (!administradorAutenticado()) responderCardapio(401, ["erro" => "Entre para editar."]);
    if (!tokenCsrfValido($_SERVER["HTTP_X_CSRF_TOKEN"] ?? null)) responderCardapio(403, ["erro" => "Atualize a sessão."]);
    if (strtolower(trim(explode(";", $_SERVER["CONTENT_TYPE"] ?? "")[0])) !== "application/json") responderCardapio(415, ["erro" => "Envie JSON."]);
    $corpo = file_get_contents("php://input", false, null, 0, 4097);
    if (strlen($corpo) > 4096) responderCardapio(413, ["erro" => "Corpo maior que o permitido."]);
    $dados = json_decode($corpo, true, 16, JSON_THROW_ON_ERROR);
    if (!is_array($dados) || !is_string($dados["id"] ?? null) || !is_string($dados["acao"] ?? null)) responderCardapio(422, ["erro" => "Confira o produto e a ação."]);
    $ids = array_column(listarProdutos($pdo), "id");
    if (!in_array($dados["id"], $ids, true)) responderCardapio(404, ["erro" => "Produto não encontrado."]);
    if ($dados["acao"] === "rascunho") salvarRascunho($pdo, $dados["id"], $dados["descricao"] ?? null);
    elseif ($dados["acao"] === "publicar") {
        if (!publicarRascunho($pdo, $dados["id"])) responderCardapio(409, ["erro" => "Salve um rascunho antes de publicar."]);
    } else responderCardapio(422, ["erro" => "Ação não permitida."]);
    responderCardapio(200, ["produtos" => listarProdutos($pdo, true)]);
} catch (InvalidArgumentException | JsonException $erro) {
    responderCardapio(422, ["erro" => "Confira a descrição: de 10 a 400 caracteres."]);
} catch (Throwable $erro) {
    error_log((string) $erro); responderCardapio(500, ["erro" => "Não foi possível consultar ou alterar o cardápio."]);
}
