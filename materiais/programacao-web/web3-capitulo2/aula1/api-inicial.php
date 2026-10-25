<?php
require_once dirname(__DIR__, 2) . "/src/atendimento.php";
header("Content-Type: application/json; charset=utf-8");
echo json_encode(obterAtendimento(), JSON_UNESCAPED_UNICODE);

