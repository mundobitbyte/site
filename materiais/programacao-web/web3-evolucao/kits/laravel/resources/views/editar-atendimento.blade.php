@extends('layout')
@section('titulo','O aviso da cozinha')
@section('conteudo')
<h1>O aviso da cozinha</h1>
@if(session('aviso'))<p role="status">{{ session('aviso') }}</p>@endif
@if($errors->any())<div role="alert"><p>Confira os campos:</p><ul>@foreach($errors->all() as $erro)<li>{{ $erro }}</li>@endforeach</ul></div>@endif
<form method="post" action="{{ route('operador.atendimento') }}">@csrf
<p><label for="nome">Nome do Café</label><input id="nome" name="nome" value="{{ old('nome',$atendimento->nome) }}" maxlength="100" required></p>
<p><label for="aberto">Pedidos</label><select id="aberto" name="aberto"><option value="1" @selected(old('aberto',$atendimento->aberto)==1)>Abertos</option><option value="0" @selected(old('aberto',$atendimento->aberto)==0)>Encerrados</option></select></p>
<p><label for="minutos">Minutos para retirada</label><input id="minutos" name="minutos" type="number" step="1" min="0" max="240" value="{{ old('minutos',$atendimento->minutos) }}" aria-describedby="ajuda"><span id="ajuda">Deixe vazio quando a equipe ainda não informou o prazo.</span></p>
<button type="submit">Salvar aviso</button></form>
<form method="post" action="/sair">@csrf<button type="submit">Sair da edição</button></form>
@endsection
