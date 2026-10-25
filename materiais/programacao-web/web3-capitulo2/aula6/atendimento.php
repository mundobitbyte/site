<?php
function obterAtendimento(): array
{
    $nomeNegocio = "Café Aurora";
    $pedidosAbertos = true;
    $tempoEstimado = 30;

    if (!$pedidosAbertos) {
        $mensagemStatus = "Pedidos para retirada estão encerrados.";
        $mensagemTempo = "Consulte novamente durante o horário de atendimento.";
    } elseif ($tempoEstimado === null) {
        $mensagemStatus = "Pedidos para retirada estão abertos.";
        $mensagemTempo = "Consulte a equipe para saber o prazo de retirada.";
    } else {
        $mensagemStatus = "Pedidos para retirada estão abertos.";
        $mensagemTempo = "Tempo estimado: $tempoEstimado minutos.";
    }

    return [
        "nomeNegocio" => $nomeNegocio,
        "mensagemStatus" => $mensagemStatus,
        "mensagemTempo" => $mensagemTempo
    ];
}
