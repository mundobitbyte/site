<?php
use App\Http\Controllers\AtendimentoController;
use App\Http\Controllers\SessaoController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => view('inicio-legado'));
Route::get('/atendimento', [AtendimentoController::class,'mostrar'])->name('atendimento');
Route::get('/api/atendimento', [AtendimentoController::class,'publico']);
Route::get('/api/atendimento.php', [AtendimentoController::class,'publico']);
Route::view('/entrar','entrar')->name('login');
Route::post('/entrar',[SessaoController::class,'entrar'])->middleware('throttle:10,1');
Route::post('/sair',[SessaoController::class,'sair'])->middleware('auth');
Route::middleware(['auth','can:alterar-atendimento'])->group(function () {
    Route::get('/operador/atendimento',[AtendimentoController::class,'editar'])->name('operador.atendimento');
    Route::post('/operador/atendimento',[AtendimentoController::class,'salvar']);
});

Route::get('/api/produtos',[\App\Http\Controllers\CatalogoController::class,'listar']);
Route::get('/cardapio',[\App\Http\Controllers\CatalogoController::class,'pagina']);
Route::get('/endereco',[\App\Http\Controllers\EnderecoController::class,'mostrar']);
Route::middleware(['auth','can:alterar-atendimento'])->group(function () {
    Route::get('/operador/produtos/{produto}',[\App\Http\Controllers\CatalogoController::class,'editar'])->name('operador.produto');
    Route::post('/operador/produtos/{produto}',[\App\Http\Controllers\CatalogoController::class,'salvar']);
});
