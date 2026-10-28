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
        require_once base_path('src/AvisoAtendimento.php');
        return (new \AvisoAtendimento($this->nome, $this->aberto, $this->minutos))->mensagens();
    }
}
