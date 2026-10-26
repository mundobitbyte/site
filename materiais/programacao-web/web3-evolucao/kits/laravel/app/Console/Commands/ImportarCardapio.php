<?php
namespace App\Console\Commands;
use App\Models\Categoria;
use App\Models\Produto;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportarCardapio extends Command
{
    protected $signature = 'cafe:importar-cardapio';
    protected $description = 'Importa o JSON conhecido sem sobrescrever produtos já existentes';
    public function handle(): int
    {
        $lista=json_decode(file_get_contents(public_path('dados/produtos.json')),true,32,JSON_THROW_ON_ERROR);
        DB::transaction(function () use ($lista) {
            foreach ($lista as $p) {
                Categoria::firstOrCreate(['id'=>$p['categoria']], ['nome'=>ucfirst($p['categoria'])]);
                Produto::firstOrCreate(['id'=>$p['id']], ['nome'=>$p['nome'],'categoria'=>$p['categoria'],
                    'preco_centavos'=>(int)round($p['preco']*100),'imagem'=>basename($p['imagem']),
                    'alt'=>$p['alt'],'descricao'=>$p['descricao'],'disponivel'=>true]);
            }
        });
        $this->info('Catálogo conferido. Produtos existentes foram preservados.');
        return self::SUCCESS;
    }
}
