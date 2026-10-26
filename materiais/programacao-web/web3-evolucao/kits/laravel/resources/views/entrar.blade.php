@extends('layout')
@section('titulo','Entrar como operador')
@section('conteudo')
<h1>Entrar como operador</h1>
@if($errors->any())<p role="alert">Confira o e-mail e a senha.</p>@endif
<form method="post" action="/entrar">@csrf
<p><label for="email">E-mail do exercício</label><input id="email" type="email" name="email" value="{{ old('email') }}" autocomplete="username" required></p>
<p><label for="password">Senha local</label><input id="password" type="password" name="password" autocomplete="current-password" required></p>
<button type="submit">Entrar</button></form>
@endsection
