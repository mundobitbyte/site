<?php
namespace Tests\Feature;
use App\Models\AtendimentoAtual;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AtendimentoTest extends TestCase
{
    use RefreshDatabase;
    public function test_consulta_publica_tem_tres_textos_e_escapa_a_view(): void
    {
        $this->getJson('/api/atendimento')->assertOk()->assertExactJson([
            'nomeNegocio'=>'Café Aurora','mensagemStatus'=>'Pedidos para retirada estão abertos.','mensagemTempo'=>'Tempo estimado: 30 minutos.'
        ]);
        AtendimentoAtual::findOrFail(1)->update(['nome'=>'<strong>Café</strong>']);
        $this->get('/atendimento')->assertOk()->assertSee('&lt;strong&gt;Café&lt;/strong&gt;',false)->assertDontSee('<strong>Café</strong>',false);
    }
    public function test_visitante_e_leitor_nao_podem_alterar(): void
    {
        $this->post('/operador/atendimento',['nome'=>'Mudou','aberto'=>1,'minutos'=>20])->assertRedirect('/entrar');
        $leitor=User::create(['name'=>'Leitor','email'=>'leitor@example.test','password'=>'senha-ficticia-do-teste','papel'=>'leitor']);
        $this->actingAs($leitor)->post('/operador/atendimento',['nome'=>'Mudou','aberto'=>1,'minutos'=>20])->assertForbidden();
        $this->assertDatabaseHas('atendimento',['id'=>1,'minutos'=>30]);
    }
    public function test_operador_altera_e_entrada_invalida_preserva_dados(): void
    {
        $operador=User::create(['name'=>'Operador','email'=>'operador@example.test','password'=>'senha-ficticia-do-teste','papel'=>'operador']);
        $this->actingAs($operador)->post('/operador/atendimento',['nome'=>'Café Aurora','aberto'=>1,'minutos'=>47])->assertRedirect('/operador/atendimento');
        $this->assertDatabaseHas('atendimento',['id'=>1,'minutos'=>47]);
        $this->post('/operador/atendimento',['nome'=>'Café Aurora','aberto'=>1,'minutos'=>-1])->assertSessionHasErrors('minutos');
        $this->assertDatabaseHas('atendimento',['id'=>1,'minutos'=>47]);
    }
    public function test_null_zero_e_encerramento_continuam_distintos(): void
    {
        $a=AtendimentoAtual::findOrFail(1);
        foreach([[true,null,'Consulte a equipe'],[false,null,'Consulte novamente'],[true,0,'0 minutos']] as [$aberto,$minutos,$esperado]) {
            $a->update(['aberto'=>$aberto,'minutos'=>$minutos]);
            $this->getJson('/api/atendimento')->assertOk()->assertJsonPath('mensagemTempo',fn($texto)=>str_contains($texto,$esperado));
        }
    }
    public function test_idioma_muda_apresentacao_sem_mudar_contrato(): void
    {
        $this->get('/atendimento?idioma=en')->assertOk()->assertSee('Takeaway orders are open.');
        $this->getJson('/api/atendimento')->assertJsonPath('mensagemStatus','Pedidos para retirada estão abertos.');
        $this->get('/atendimento?idioma[]=en')->assertStatus(400);
    }
}
