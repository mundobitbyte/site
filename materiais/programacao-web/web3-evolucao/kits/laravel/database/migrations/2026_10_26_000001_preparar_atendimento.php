<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('atendimento')) {
            Schema::create('atendimento', function (Blueprint $t) { $t->unsignedInteger('id')->primary(); $t->string('nome',100); $t->boolean('aberto'); $t->unsignedSmallInteger('minutos')->nullable(); });
        }
        DB::table('atendimento')->insertOrIgnore(['id'=>1,'nome'=>'Café Aurora','aberto'=>true,'minutos'=>30]);
        if (!Schema::hasTable('users')) {
            Schema::create('users', function (Blueprint $t) { $t->id(); $t->string('name'); $t->string('email')->unique(); $t->string('password'); $t->string('papel')->default('leitor'); $t->rememberToken(); $t->timestamps(); });
        }
    }
    public function down(): void
    {
        // A tabela de atendimento pode ter vindo da etapa anterior; esta migration não a apaga.
        // Restaurar esta experiência usa a cópia preservada, sem excluir mensagens ou usuários.
    }
};
