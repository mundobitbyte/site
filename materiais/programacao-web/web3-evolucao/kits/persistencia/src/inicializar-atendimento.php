<?php
require_once __DIR__ . "/repositorio-atendimento.php";
prepararAtendimento(conectarBanco());
echo "Atendimento preparado; mensagens anteriores preservadas." . PHP_EOL;
