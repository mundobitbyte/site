<?php
require_once __DIR__ . "/Atendimento.php";

function obterAtendimento(): array
{
    $atendimento = new Atendimento("Café Aurora", true, 30);
    return $atendimento->mensagens();
}
