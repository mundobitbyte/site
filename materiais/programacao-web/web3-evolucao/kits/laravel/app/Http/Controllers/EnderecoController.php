<?php
namespace App\Http\Controllers;
use App\Services\ConsultaCep;
use Illuminate\Http\Request;

class EnderecoController
{
    public function mostrar(Request $r, ConsultaCep $consulta)
    {
        $entrada=$r->validate(['cep'=>['nullable','regex:/^[0-9]{8}$/D']]);
        $endereco=null; $falha=null;
        if (isset($entrada['cep'])) {
            try { $endereco=$consulta->consultar($entrada['cep']); }
            catch (\RuntimeException $e) { $falha=$e->getMessage(); }
        }
        return view('endereco',compact('endereco','falha'));
    }
}
