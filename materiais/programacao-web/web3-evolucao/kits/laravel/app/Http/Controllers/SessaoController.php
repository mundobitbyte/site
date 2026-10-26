<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessaoController
{
    public function entrar(Request $pedido)
    {
        $dados = $pedido->validate(['email'=>['required','email'],'password'=>['required','string']]);
        if (!Auth::attempt($dados)) throw ValidationException::withMessages(['email'=>'E-mail ou senha inválidos.']);
        $pedido->session()->regenerate();
        return redirect()->intended(route('operador.atendimento'));
    }
    public function sair(Request $pedido)
    {
        Auth::logout(); $pedido->session()->invalidate(); $pedido->session()->regenerateToken();
        return redirect()->route('login');
    }
}
