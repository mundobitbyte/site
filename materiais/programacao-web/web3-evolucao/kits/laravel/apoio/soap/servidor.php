<?php
// Servidor didático local. A extensão soap precisa estar habilitada.
require_once dirname(__DIR__,2).'/src/atendimento.php';
class ServicoAtendimento { public function consultar(): array { return obterAtendimento(); } }
$servidor=new SoapServer(dirname(__DIR__,2).'/contratos/atendimento.wsdl',['cache_wsdl'=>WSDL_CACHE_NONE]);
$servidor->setClass(ServicoAtendimento::class);
$servidor->handle();
