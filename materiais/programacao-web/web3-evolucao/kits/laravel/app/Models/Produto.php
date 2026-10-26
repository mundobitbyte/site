<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Produto extends Model
{
    public $timestamps = false;
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['id','nome','categoria','preco_centavos','imagem','alt','descricao','disponivel'];
    protected function casts(): array { return ['preco_centavos'=>'integer','disponivel'=>'boolean']; }
    public function grupo(): BelongsTo { return $this->belongsTo(Categoria::class, 'categoria'); }
    public function dadosPublicos(): array
    {
        return ['id'=>$this->id,'nome'=>$this->nome,'categoria'=>$this->categoria,
            'precoCentavos'=>$this->preco_centavos,'imagem'=>$this->imagem,'alt'=>$this->alt,
            'descricao'=>$this->descricao,'disponivel'=>$this->disponivel];
    }
}
