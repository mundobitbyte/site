@extends('layout')
@section('titulo',__('atendimento.titulo'))
@section('conteudo')
<h1>{{ __('atendimento.titulo') }} — {{ $atendimento->nome }}</h1>
<p>{{ __($atendimento->aberto ? 'atendimento.aberto' : 'atendimento.fechado') }}</p>
<p>{{ __(!$atendimento->aberto ? 'atendimento.foraHorario' : ($atendimento->minutos === null ? 'atendimento.semPrazo' : 'atendimento.prazo'), ['minutos'=>$atendimento->minutos]) }}</p>
<nav aria-label="Idioma"><a href="?idioma=pt_BR" lang="pt-BR">Português</a> · <a href="?idioma=en" lang="en">English</a></nav>
<p><a href="/balcao.php">Consultar no balcão</a></p>
@endsection
