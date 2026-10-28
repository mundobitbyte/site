<?php
require_once __DIR__ . "/banco.php";

function prepararCardapio(PDO $pdo): void
{
    $pdo->exec("CREATE TABLE IF NOT EXISTS produtos (
        id TEXT PRIMARY KEY, nome TEXT NOT NULL, categoria TEXT NOT NULL,
        preco_centavos INTEGER NOT NULL CHECK(preco_centavos >= 0),
        imagem TEXT NOT NULL, alt TEXT NOT NULL,
        descricao TEXT NOT NULL, disponivel INTEGER NOT NULL DEFAULT 1 CHECK(disponivel IN (0, 1)),
        rascunho TEXT
    )");
    $arquivo = dirname(__DIR__) . "/public/dados/produtos.json";
    $produtos = json_decode(file_get_contents($arquivo), true, 32, JSON_THROW_ON_ERROR);
    $consulta = $pdo->prepare("INSERT OR IGNORE INTO produtos(id, nome, categoria, preco_centavos, imagem, alt, descricao)
        VALUES(:id, :nome, :categoria, :preco, :imagem, :alt, :descricao)");
    $pdo->beginTransaction();
    try {
        foreach ($produtos as $produto) {
            $consulta->execute([":id" => $produto["id"], ":nome" => $produto["nome"], ":categoria" => $produto["categoria"],
                ":preco" => (int) round($produto["preco"] * 100), ":imagem" => basename($produto["imagem"]),
                ":alt" => $produto["alt"], ":descricao" => $produto["descricao"]]);
        }
        $pdo->commit();
    } catch (Throwable $erro) { $pdo->rollBack(); throw $erro; }
}

function listarProdutos(PDO $pdo, bool $operador = false): array
{
    $produtos = $pdo->query("SELECT * FROM produtos ORDER BY nome")->fetchAll();
    return array_map(function ($p) use ($operador) {
        $dados = ["id" => $p["id"], "nome" => $p["nome"], "categoria" => $p["categoria"],
            "precoCentavos" => (int) $p["preco_centavos"], "imagem" => $p["imagem"], "alt" => $p["alt"],
            "descricao" => $p["descricao"], "disponivel" => (bool) $p["disponivel"]];
        if ($operador) $dados["rascunho"] = $p["rascunho"];
        return $dados;
    }, $produtos);
}

function salvarRascunho(PDO $pdo, string $id, mixed $descricao): void
{
    if (!is_string($descricao) || mb_strlen(trim($descricao)) < 10 || mb_strlen($descricao) > 400) {
        throw new InvalidArgumentException("Escreva uma descrição de 10 a 400 caracteres.");
    }
    $consulta = $pdo->prepare("UPDATE produtos SET rascunho = :texto WHERE id = :id");
    $consulta->execute([":texto" => trim($descricao), ":id" => $id]);
}

function publicarRascunho(PDO $pdo, string $id): bool
{
    $consulta = $pdo->prepare("UPDATE produtos SET descricao = rascunho, rascunho = NULL WHERE id = :id AND rascunho IS NOT NULL");
    $consulta->execute([":id" => $id]);
    return $consulta->rowCount() === 1;
}
