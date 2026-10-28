<?php
namespace App\Http\Controllers;
use App\Http\Requests\AtualizarAtendimentoRequest;
use App\Models\AtendimentoAtual;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View;

class AtendimentoController
{
    public function mostrar(\Illuminate\Http\Request $pedido): View
    {
        $idioma=$pedido->query('idioma','pt_BR');
        abort_unless(in_array($idioma,['pt_BR','en'],true),400);
        app()->setLocale($idioma);
        return view('atendimento', ['atendimento' => AtendimentoAtual::findOrFail(1)]);
    }
    public function publico(): JsonResponse
    {
        return response()->json(AtendimentoAtual::findOrFail(1)->mensagens())->header('Cache-Control','no-store');
    }
    public function editar(): View
    {
        return view('editar-atendimento', ['atendimento' => AtendimentoAtual::findOrFail(1)]);
    }
    public function salvar(AtualizarAtendimentoRequest $pedido): RedirectResponse
    {
        AtendimentoAtual::findOrFail(1)->update($pedido->validated());
        return redirect()->route('operador.atendimento')->with('aviso', 'Aviso salvo; consulte o balcão para conferir.');
    }
}
