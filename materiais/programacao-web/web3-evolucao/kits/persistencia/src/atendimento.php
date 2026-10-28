<?php
require_once __DIR__ . "/repositorio-atendimento.php";

function obterAtendimento(): array
{
    $dados = lerConfiguracaoAtendimento(conectarBanco());
    return conferirConfiguracaoAtendimento($dados)->mensagens();
}
