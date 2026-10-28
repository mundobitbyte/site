<?php
// Execute pelo terminal, com o servidor separado na porta 9001.
$cliente=new SoapClient(dirname(__DIR__,2).'/contratos/atendimento.wsdl',['trace'=>true,'exceptions'=>true,'cache_wsdl'=>WSDL_CACHE_NONE,'connection_timeout'=>3,'stream_context'=>stream_context_create(['http'=>['timeout'=>5]])]);
try {
    $resposta=$cliente->consultar();
    echo json_encode($resposta,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT),PHP_EOL;
    echo "REQUISIÇÃO XML",PHP_EOL,$cliente->__getLastRequest(),PHP_EOL;
    echo "RESPOSTA XML",PHP_EOL,$cliente->__getLastResponse(),PHP_EOL;
} catch (SoapFault $erro) { fwrite(STDERR,"Falha SOAP: ".$erro->getMessage().PHP_EOL); exit(1); }
