<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class AtendimentoAtual extends Model
{
    protected $table = 'atendimento';
    public $timestamps = false;
    protected $fillable = ['nome', 'aberto', 'minutos'];
    protected function casts(): array { return ['aberto' => 'boolean', 'minutos' => 'integer']; }

    public function mensagens(): array
    {
        require_once base_path('src/Atendimento.php');
        return (new \Atendimento($this->nome, $this->aberto, $this->minutos))->mensagens();
    }
}
