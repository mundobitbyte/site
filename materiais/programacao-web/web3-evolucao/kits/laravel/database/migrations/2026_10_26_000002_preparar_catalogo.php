<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('categorias', function (Blueprint $t) { $t->string('id')->primary(); $t->string('nome'); });
        Schema::create('produtos', function (Blueprint $t) {
            $t->string('id')->primary(); $t->string('nome',100);
            $t->foreignIdFor(\App\Models\Categoria::class, 'categoria')->constrained('categorias');
            $t->unsignedInteger('preco_centavos'); $t->string('imagem'); $t->string('alt');
            $t->text('descricao'); $t->boolean('disponivel')->default(true); $t->text('rascunho')->nullable();
        });
    }
    public function down(): void { Schema::dropIfExists('produtos'); Schema::dropIfExists('categorias'); }
};
