<?php
namespace App\Http\Controllers;
use App\Models\Categoria;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CatalogoController
{
    public function listar(Request $r)
    {
        $entrada=$r->validate(['categoria'=>['nullable','string',Rule::exists('categorias','id')]]);
        $lista=Produto::query()->with('grupo')
            ->when($entrada['categoria']??null,fn($q,$categoria)=>$q->where('categoria',$categoria))->orderBy('nome')->get();
        return response()->json(['data'=>$lista->map(fn(Produto $p)=>$p->dadosPublicos())]);
    }
    public function editar(Produto $produto) { return view('editar-produto',['produto'=>$produto,'categorias'=>Categoria::all()]); }
    public function salvar(Request $r, Produto $produto)
    {
        $dados=$r->validate(['nome'=>['required','string','max:100'],'categoria'=>['required','string',Rule::exists('categorias','id')],
            'preco_centavos'=>['required','integer','between:0,1000000'],'descricao'=>['required','string','between:10,400'],
            'disponivel'=>['required','boolean']]);
        $produto->update($dados);
        return redirect()->route('operador.produto',$produto)->with('aviso','Produto atualizado.');
    }
}
