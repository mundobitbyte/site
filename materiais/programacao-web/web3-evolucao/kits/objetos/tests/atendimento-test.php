<?php
require_once dirname(__DIR__) . '/src/AvisoAtendimento.php';
function conferir(bool $condicao, string $nome): void {
    if (!$condicao) { throw new RuntimeException('Falhou: '.$nome); }
    echo 'Passou: '.$nome, PHP_EOL;
}
$dados = (new AvisoAtendimento('Café Aurora', true, 47))->mensagens();
conferir(array_keys($dados) === ['nomeNegocio','mensagemStatus','mensagemTempo'], 'contrato de três campos');
conferir(str_contains($dados['mensagemTempo'], '47 minutos'), 'estimativa informada pela equipe');
conferir(str_contains((new AvisoAtendimento('Café Aurora', true, 0))->mensagens()['mensagemTempo'], '0 minutos'), 'zero não é ausência');
conferir(str_contains((new AvisoAtendimento('Café Aurora', true, null))->mensagens()['mensagemTempo'], 'Consulte a equipe'), 'ausência não inventa prazo');
conferir(str_contains((new AvisoAtendimento('Café Aurora', false, 47))->mensagens()['mensagemStatus'], 'encerrados'), 'fechamento tem prioridade');
foreach ([['',true,30],['Café Aurora',true,-1],['Café Aurora',true,241]] as $entrada) {
    $recusou=false;
    try { new AvisoAtendimento(...$entrada); } catch (InvalidArgumentException) { $recusou=true; }
    conferir($recusou, 'recusa de configuração inválida');
}
