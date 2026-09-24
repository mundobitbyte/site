(async function () {
  'use strict';
  const core = window.MBBCatalogo, conta = window.MBBMeuConta;
  let catalogo;
  try {
    const resposta = await fetch('../meu-mbb/catalogo.json');
    if (!resposta.ok) return;
    catalogo = core.validar(await resposta.json());
  } catch (_) { return; } // A navegação pública do módulo segue independente.

  let atual = null, ultimaVisita = '', painel = null;
  const unidadeAtual = () => {
    const secao = document.querySelector('#moduleMenu .module-btn.active')?.dataset.module;
    const etapa = document.querySelector('#menu .nav-btn.active')?.id.match(/-(\d+)$/)?.[1];
    return catalogo.unidades.find(unidade => unidade.localizacao_atual === `pages/git.html#${secao}-${etapa}`) || null;
  };
  function montar() {
    const li = document.createElement('div'); li.className = 'mbb-piloto';
    const favorito = document.createElement('button'); favorito.type = 'button'; favorito.textContent = '☆ Favorito';
    const concluir = document.createElement('button'); concluir.type = 'button'; concluir.textContent = 'Marcar como concluído';
    const area = document.createElement('textarea'); area.placeholder = 'Minha anotação privada (até 2.000 caracteres)'; area.maxLength = 2000; area.rows = 2;
    const salvar = document.createElement('button'); salvar.type = 'button'; salvar.textContent = 'Salvar anotação';
    const aviso = document.createElement('span'); aviso.setAttribute('role', 'status');
    let favoritoAtivo = false, concluidoAtivo = false;
    li.append(favorito, concluir, area, salvar, aviso);
    const acao = async campos => {
      if (!atual) return;
      aviso.textContent = 'Salvando…';
      try { await conta.salvar(atual, campos); aviso.textContent = 'Salvo no Meu MbB.';
        if ('favorito' in campos) { favoritoAtivo = campos.favorito; favorito.textContent = favoritoAtivo ? '★ Favorito' : '☆ Favorito'; }
        if ('concluido' in campos) { concluidoAtivo = campos.concluido; concluir.textContent = concluidoAtivo ? 'Concluído ✓' : 'Marcar como concluído'; }
      }
      catch (_) { aviso.textContent = 'Não foi possível salvar agora. Continue estudando normalmente.'; }
    };
    favorito.addEventListener('click', () => acao({ favorito: !favoritoAtivo }));
    concluir.addEventListener('click', () => acao({ concluido: !concluidoAtivo }));
    salvar.addEventListener('click', () => acao({ anotacao: area.value }));
    li.atualizar = async unidade => {
      aviso.textContent = '';
      try {
        const registros = await conta.listar();
        if (atual !== unidade) return;
        const estado = registros[unidade.conteudo_id] || {};
        favoritoAtivo = Boolean(estado.favorito); concluidoAtivo = Boolean(estado.concluido);
        favorito.textContent = favoritoAtivo ? '★ Favorito' : '☆ Favorito';
        concluir.textContent = concluidoAtivo ? 'Concluído ✓' : 'Marcar como concluído';
        area.value = estado.anotacao || '';
      } catch (_) { aviso.textContent = 'Dados pessoais indisponíveis. O conteúdo público segue acessível.'; }
    };
    painel = li;
  }
  async function atualizar() {
    const unidade = unidadeAtual();
    if (!unidade || !conta.atual()) return;
    atual = unidade;
    if (!painel) montar();
    const aula = document.getElementById('lesson');
    if (aula && painel.parentElement !== aula) aula.prepend(painel);
    painel.atualizar(unidade);
    if (ultimaVisita !== unidade.conteudo_id) {
      ultimaVisita = unidade.conteudo_id;
      try { await conta.visitar(unidade); }
      catch (_) { /* O estudo público não depende deste registro. */ }
    }
  }
  // O módulo informa qual etapa exibiu; este ouvinte não controla sua navegação.
  window.addEventListener('mbb:git-etapa', atualizar);
  try { await conta.iniciar(); atualizar(); }
  catch (_) { /* Falha de Firebase não interfere no módulo Git. */ }
}());
