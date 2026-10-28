<?php
namespace App\Services;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class ConsultaCep
{
    public function consultar(string $cep): array
    {
        if (!preg_match('/^[0-9]{8}$/D',$cep)) throw new \InvalidArgumentException('Informe oito algarismos.');
        try { $r=Http::acceptJson()->connectTimeout(2)->timeout(4)->get("https://viacep.com.br/ws/{$cep}/json/"); }
        catch (\Illuminate\Http\Client\ConnectionException $e) { throw new RuntimeException('Consulta indisponível. Tente novamente.',0,$e); }
        $d=$r->json();
        if (!$r->successful() || !is_array($d) || isset($d['erro'])) throw new RuntimeException('CEP não confirmado.');
        foreach (['cep','logradouro','bairro','localidade','uf'] as $campo) {
            if (!isset($d[$campo]) || !is_string($d[$campo])) throw new RuntimeException('Resposta de CEP inválida.');
        }
        return array_intersect_key($d,array_flip(['cep','logradouro','bairro','localidade','uf']));
    }
}
