<?php
namespace Tests\Feature;
use App\Models\Categoria;
use App\Models\Produto;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CatalogoTest extends TestCase
{
    use RefreshDatabase;
    public function test_importacao_repetida_preserva_edicao_e_relacao(): void
    {
        $this->artisan('cafe:importar-cardapio')->assertSuccessful();
        $p=Produto::findOrFail('cafe-coado'); $p->update(['preco_centavos'=>850]);
        $this->artisan('cafe:importar-cardapio')->assertSuccessful();
        $this->assertSame(3,Produto::count()); $this->assertSame(850,$p->fresh()->preco_centavos);
        $this->assertInstanceOf(Categoria::class,$p->grupo);
        $this->getJson('/api/produtos?categoria=bebida')->assertOk()->assertJsonCount(1,'data')->assertJsonMissingPath('data.0.rascunho');
        $this->getJson('/api/produtos?categoria[]=bebida')->assertUnprocessable();
    }
    public function test_escrita_e_valores_nao_autorizados_preservam_produto(): void
    {
        $this->artisan('cafe:importar-cardapio');
        $this->post('/operador/produtos/cafe-coado',[])->assertRedirect('/entrar');
        $u=User::create(['name'=>'Operador','email'=>'op@example.test','password'=>'senha-ficticia-do-teste','papel'=>'operador']);
        $dados=['nome'=>'Café coado','categoria'=>'bebida','preco_centavos'=>-10,'descricao'=>'Café preparado na hora.','disponivel'=>1];
        $this->actingAs($u)->post('/operador/produtos/cafe-coado',$dados)->assertSessionHasErrors('preco_centavos');
        $this->assertDatabaseHas('produtos',['id'=>'cafe-coado','preco_centavos'=>800]);
        $dados['preco_centavos']=900;
        $this->post('/operador/produtos/cafe-coado',$dados)->assertRedirect('/operador/produtos/cafe-coado');
        $this->assertDatabaseHas('produtos',['id'=>'cafe-coado','preco_centavos'=>900]);
    }
}
