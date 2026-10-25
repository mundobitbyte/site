<?php
ini_set("display_errors", "0");
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store");

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    header("Allow: GET");
    echo json_encode(["erro" => "Método não permitido."]);
    exit;
}

try {
    require_once dirname(__DIR__, 2) . "/src/atendimento.php";
    echo json_encode(obterAtendimento(), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
} catch (Throwable $erro) {
    http_response_code(500);
    echo json_encode(["erro" => "Não foi possível consultar o atendimento."]);
}

