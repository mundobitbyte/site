@extends('layout')
@section('titulo','Cardápio')
@section('conteudo')
<h1>Cardápio do Café Aurora</h1>
<p>Os mesmos produtos do nosso projeto, agora consultados no banco.</p>
<div class="grade-produtos">
@forelse($produtos as $produto)
<article>
  <h2>{{ $produto->nome }}</h2>
  <img src="{{ asset('img/'.$produto->imagem) }}" alt="{{ $produto->alt }}" width="960" height="640" loading="lazy">
  <p>{{ $produto->descricao }}</p>
  <p>R$ {{ number_format($produto->preco_centavos / 100, 2, ',', '.') }}</p>
  @unless($produto->disponivel)<p>Indisponível neste momento.</p>@endunless
</article>
@empty
<p>O cardápio ainda não foi importado. A equipe precisa conferir os produtos.</p>
@endforelse
</div>
@endsection
