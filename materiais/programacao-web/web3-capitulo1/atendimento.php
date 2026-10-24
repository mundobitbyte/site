<?php
function obterAtendimento(): array
{
    $nomeNegocio = "Café Aurora";
    $pedidosAbertos = true;
    $tempoEstimado = 55;

    if ($pedidosAbertos) {
        $mensagemStatus = "Pedidos para retirada estão abertos.";
        $mensagemTempo = "Tempo estimado: $tempoEstimado minutos.";
    } else {
        $mensagemStatus = "Pedidos para retirada estão encerrados.";
        $mensagemTempo = "Consulte novamente durante o horário de atendimento.";
    }

    return [
        "nomeNegocio" => $nomeNegocio,
        "mensagemStatus" => $mensagemStatus,
        "mensagemTempo" => $mensagemTempo
    ];
}
