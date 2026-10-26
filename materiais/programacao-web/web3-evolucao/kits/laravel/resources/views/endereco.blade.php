@extends('layout')
@section('titulo','Conferir um CEP')
@section('conteudo')
<h1>Conferir um CEP</h1><p>O Café Aurora é fictício. Esta consulta confere um CEP, sem afirmar que o estabelecimento funciona nesse endereço.</p>
<form method="get"><label for="cep">CEP, somente oito algarismos</label><input id="cep" name="cep" inputmode="numeric" pattern="[0-9]{8}" value="{{ request('cep') }}" required><button>Consultar CEP</button></form>
@if($errors->any())<p role="alert">Informe oito algarismos.</p>@endif
@if($falha)<p role="alert">{{ $falha }}</p>@endif
@if($endereco)<p role="status">{{ $endereco['logradouro'] }} — {{ $endereco['bairro'] }}, {{ $endereco['localidade'] }}/{{ $endereco['uf'] }}. CEP {{ $endereco['cep'] }}.</p>@endif
@endsection
