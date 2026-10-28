<?php
require_once __DIR__ . "/AvisoAtendimento.php";

function obterAtendimento(): array
{
    $atendimento = new AvisoAtendimento("Café Aurora", true, 30);
    return $atendimento->mensagens();
}
