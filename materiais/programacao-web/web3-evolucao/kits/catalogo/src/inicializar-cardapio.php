<?php
require_once __DIR__ . "/repositorio-cardapio.php";
prepararCardapio(conectarBanco());
echo "Cardápio importado sem duplicar itens ou sobrescrever edições." . PHP_EOL;
