<?php
ini_set("display_errors", "0");
require_once dirname(__DIR__, 2) . "/src/autenticacao.php";
require_once dirname(__DIR__, 2) . "/src/repositorio-atendimento.php";
iniciarSessaoSegura();
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store");

function responder(int $status, array $dados): never
{
    http_response_code($status);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    exit;
}

if (!administradorAutenticado()) {
    responder(401, ["erro" => "Entre na área administrativa para continuar."]);
}
$metodo = $_SERVER["REQUEST_METHOD"] ?? "GET";
if (!in_array($metodo, ["GET", "POST"], true)) {
    header("Allow: GET, POST");
    responder(405, ["erro" => "Método não permitido."]);
}
try {
    $pdo = conectarBanco();
    if ($metodo === "GET") {
        responder(200, ["atendimento" => lerConfiguracaoAtendimento($pdo), "csrfToken" => obterTokenCsrf()]);
    }
    if (!tokenCsrfValido($_SERVER["HTTP_X_CSRF_TOKEN"] ?? null)) {
        responder(403, ["erro" => "Atualize sua sessão antes de salvar."]);
    }
    $tipo = strtolower(trim(explode(";", $_SERVER["CONTENT_TYPE"] ?? "")[0]));
    if ($tipo !== "application/json") {
        responder(415, ["erro" => "Envie o corpo em JSON."]);
    }
    $corpo = file_get_contents("php://input", false, null, 0, 4097);
    if (strlen($corpo) > 4096) responder(413, ["erro" => "Corpo maior que o permitido."]);
    $dados = json_decode($corpo, true, 16, JSON_THROW_ON_ERROR);
    $atendimento = conferirConfiguracaoAtendimento($dados);
    salvarConfiguracaoAtendimento($pdo, $atendimento);
    responder(200, ["atendimento" => lerConfiguracaoAtendimento($pdo)]);
} catch (JsonException | InvalidArgumentException $erro) {
    responder(422, ["erro" => "Confira o nome, a situação e a estimativa informados."]);
} catch (Throwable $erro) {
    error_log((string) $erro);
    responder(500, ["erro" => "Não foi possível consultar ou salvar o atendimento."]);
}
