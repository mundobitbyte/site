<?php
require_once __DIR__ . "/banco.php";
require_once __DIR__ . "/AvisoAtendimento.php";

function prepararAtendimento(PDO $pdo): void
{
    $pdo->exec("CREATE TABLE IF NOT EXISTS atendimento (
        id INTEGER PRIMARY KEY CHECK(id = 1),
        nome TEXT NOT NULL CHECK(length(nome) BETWEEN 1 AND 100),
        aberto INTEGER NOT NULL CHECK(aberto IN (0, 1)),
        minutos INTEGER CHECK(minutos IS NULL OR minutos BETWEEN 0 AND 240)
    )");
    $pdo->exec("INSERT OR IGNORE INTO atendimento(id, nome, aberto, minutos) VALUES(1, 'Café Aurora', 1, 30)");
}

function lerConfiguracaoAtendimento(PDO $pdo): array
{
    $linha = $pdo->query("SELECT nome, aberto, minutos FROM atendimento WHERE id = 1")->fetch();
    if (!$linha) {
        throw new RuntimeException("Prepare a tabela de atendimento pelo terminal.");
    }
    return ["nomeNegocio" => $linha["nome"], "pedidosAbertos" => (bool) $linha["aberto"],
        "tempoEstimado" => $linha["minutos"] === null ? null : (int) $linha["minutos"]];
}

function conferirConfiguracaoAtendimento(mixed $dados): AvisoAtendimento
{
    if (!is_array($dados) || array_is_list($dados) ||
        array_diff(array_keys($dados), ["nomeNegocio", "pedidosAbertos", "tempoEstimado"]) ||
        !isset($dados["nomeNegocio"], $dados["pedidosAbertos"]) ||
        !array_key_exists("tempoEstimado", $dados) ||
        !is_string($dados["nomeNegocio"]) || !is_bool($dados["pedidosAbertos"]) ||
        ($dados["tempoEstimado"] !== null && !is_int($dados["tempoEstimado"]))) {
        throw new InvalidArgumentException("Confira os três campos e seus tipos.");
    }
    return new AvisoAtendimento(trim($dados["nomeNegocio"]), $dados["pedidosAbertos"], $dados["tempoEstimado"]);
}

function salvarConfiguracaoAtendimento(PDO $pdo, AvisoAtendimento $atendimento): void
{
    $consulta = $pdo->prepare("UPDATE atendimento SET nome = :nome, aberto = :aberto, minutos = :minutos WHERE id = 1");
    $consulta->bindValue(":nome", $atendimento->nomeNegocio);
    $consulta->bindValue(":aberto", (int) $atendimento->pedidosAbertos, PDO::PARAM_INT);
    $consulta->bindValue(":minutos", $atendimento->tempoEstimado,
        $atendimento->tempoEstimado === null ? PDO::PARAM_NULL : PDO::PARAM_INT);
    $consulta->execute();
}
