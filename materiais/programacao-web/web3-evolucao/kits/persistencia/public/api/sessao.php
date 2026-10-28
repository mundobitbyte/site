<?php
ini_set("display_errors", "0");
require_once dirname(__DIR__, 2) . "/src/autenticacao.php";
iniciarSessaoSegura();
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store");
function respostaSessao(int $status, array $dados): never {
    http_response_code($status);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    exit;
}
$metodo = $_SERVER["REQUEST_METHOD"] ?? "GET";
if ($metodo === "GET") respostaSessao(200, ["autenticado" => administradorAutenticado(), "csrfToken" => obterTokenCsrf()]);
if ($metodo !== "POST") { header("Allow: GET, POST"); respostaSessao(405, ["erro" => "Método não permitido."]); }
if (!tokenCsrfValido($_SERVER["HTTP_X_CSRF_TOKEN"] ?? null)) respostaSessao(403, ["erro" => "Atualize a sessão antes de continuar."]);
if (strtolower(trim(explode(";", $_SERVER["CONTENT_TYPE"] ?? "")[0])) !== "application/json") respostaSessao(415, ["erro" => "Envie JSON."]);
try {
    $corpo = file_get_contents("php://input", false, null, 0, 4097);
    if (strlen($corpo) > 4096) respostaSessao(413, ["erro" => "Corpo maior que o permitido."]);
    $dados = json_decode($corpo, true, 16, JSON_THROW_ON_ERROR);
    if (!is_array($dados) || !is_string($dados["acao"] ?? null)) respostaSessao(422, ["erro" => "Informe a ação."]);
    if ($dados["acao"] === "sair") {
        $_SESSION = [];
        session_regenerate_id(true);
        respostaSessao(200, ["autenticado" => false, "csrfToken" => obterTokenCsrf()]);
    }
    if ($dados["acao"] !== "entrar") respostaSessao(422, ["erro" => "Ação inválida."]);
    $administrador = carregarAdministrador();
    if (!is_string($dados["usuario"] ?? null) || !is_string($dados["senha"] ?? null) ||
        $administrador === null || !hash_equals($administrador["usuario"], trim($dados["usuario"])) ||
        !password_verify($dados["senha"], $administrador["senha_hash"])) {
        respostaSessao(401, ["erro" => "Usuário ou senha inválidos."]);
    }
    session_regenerate_id(true);
    $_SESSION["administrador_autenticado"] = true;
    $_SESSION["csrf_admin"] = bin2hex(random_bytes(32));
    respostaSessao(200, ["autenticado" => true, "csrfToken" => obterTokenCsrf()]);
} catch (JsonException $erro) { respostaSessao(422, ["erro" => "JSON inválido."]); }
