<?php
namespace Tests\Feature;
use App\Services\ConsultaCep;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class CepTest extends TestCase
{
    public function test_contrato_controlado_e_retirada_de_campos_nao_utilizados(): void
    {
        Http::preventStrayRequests();
        Http::fake(['viacep.com.br/*'=>Http::response(['cep'=>'01001-000','logradouro'=>'Praça da Sé','bairro'=>'Sé','localidade'=>'São Paulo','uf'=>'SP','campoPrivado'=>'não devolver'])]);
        $d=app(ConsultaCep::class)->consultar('01001000');
        $this->assertCount(5,$d); $this->assertSame('SP',$d['uf']);
    }
    public function test_falhas_nao_inventam_endereco(): void
    {
        foreach ([Http::response(['erro'=>true]),Http::response('<html>fora do ar</html>',503)] as $r) {
            Http::fake(['viacep.com.br/*'=>$r]);
            $this->get('/endereco?cep=01001000')->assertOk()->assertSee('CEP não confirmado.');
        }
        Http::fake(['viacep.com.br/*'=>Http::failedConnection()]);
        $this->get('/endereco?cep=01001000')->assertSee('Consulta indisponível.');
    }
}
