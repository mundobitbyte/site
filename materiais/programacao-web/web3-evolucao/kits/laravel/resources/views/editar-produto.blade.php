@extends('layout')
@section('titulo','Atualizar produto')
@section('conteudo')
<h1>Atualizar {{ $produto->nome }}</h1>
@if(session('aviso'))<p role="status">{{ session('aviso') }}</p>@endif
@if($errors->any())<div role="alert"><p>Confira os campos:</p><ul>@foreach($errors->all() as $erro)<li>{{ $erro }}</li>@endforeach</ul></div>@endif
<form method="post" action="{{ route('operador.produto',$produto) }}">@csrf
<label for="nome">Nome</label><input id="nome" name="nome" maxlength="100" required value="{{ old('nome',$produto->nome) }}">
<label for="categoria">Categoria</label><select id="categoria" name="categoria">@foreach($categorias as $c)<option value="{{ $c->id }}" @selected(old('categoria',$produto->categoria)===$c->id)>{{ $c->nome }}</option>@endforeach</select>
<label for="preco">Preço em centavos (800 representa R$ 8,00)</label><input id="preco" type="number" name="preco_centavos" min="0" max="1000000" required value="{{ old('preco_centavos',$produto->preco_centavos) }}">
<label for="descricao">Descrição</label><textarea id="descricao" name="descricao" minlength="10" maxlength="400" required>{{ old('descricao',$produto->descricao) }}</textarea>
<label for="disponivel">Disponibilidade</label><select id="disponivel" name="disponivel"><option value="1" @selected((string)old('disponivel',(int)$produto->disponivel)==='1')>Disponível</option><option value="0" @selected((string)old('disponivel',(int)$produto->disponivel)==='0')>Indisponível</option></select>
<button type="submit">Salvar produto</button></form>
@endsection
