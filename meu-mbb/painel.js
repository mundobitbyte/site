(async function () {
  'use strict';
  const conta = window.MBBMeuConta, core = window.MBBCatalogo;
  const mensagem = document.getElementById('mensagem');
  const painel = document.getElementById('painel');
  const sair = document.getElementById('sair');
  const resposta = await fetch('catalogo.json').catch(() => null);
  if (!resposta?.ok) { mensagem.textContent = 'Catálogo indisponível. Volte ao site público para estudar.'; return; }
  let catalogo;
  try { catalogo = core.validar(await resposta.json()); }
  catch (_) { mensagem.textContent = 'Catálogo indisponível. Volte ao site público para estudar.'; return; }
  let registros = {};
  const elemento = id => document.getElementById(id);
  const momento = valor => valor?.toMillis?.() || (valor ? Date.parse(valor) || 0 : 0);
  const todas = () => Object.entries(registros).map(([id, registro]) => ({ id, registro, destino: core.resolver(catalogo, id).unidade }));
  const link = (unidade, texto, registro) => {
    const ancora = document.createElement('a');
    const topico = (unidade.topicos_busca || []).find(item => item.ancora === registro?.ancora);
    const destino = topico
      ? `${unidade.localizacao_atual.split('#')[0]}#${topico.ancora}`
      : unidade.localizacao_atual;
    ancora.href = new URL(`../${destino}`, location.href).href;
    ancora.textContent = texto || topico?.titulo || unidade.titulo;
    return ancora;
  };
  function linha(item) {
    const p = document.createElement('p');
    const origem = catalogo.unidades.find(unidade => unidade.conteudo_id === item.id);
    if (item.destino) p.append(link(item.destino, '', item.registro));
    else p.textContent = `Conteúdo removido (${item.id}), sem destino atual.`;
    if (origem?.status === 'removido' && item.destino) p.append(' · conteúdo anterior removido; próximo conteúdo disponível');
    else if (item.id !== item.destino?.conteudo_id && item.destino) p.append(' · conteúdo atualizado');
    if (item.destino && item.registro.versaoVista < item.destino.versao_conteudo) p.append(' · atualizado desde sua visita');
    return p;
  }
  function preencher(id, itens, vazio) {
    const destino = elemento(id); destino.replaceChildren();
    if (!itens.length) { destino.textContent = vazio; return; }
    itens.forEach(item => destino.append(linha(item)));
  }
  function renderizar() {
    const itens = todas();
    const vistos = itens.filter(item => item.registro.ultimoAcesso).sort((a, b) => momento(b.registro.ultimoAcesso) - momento(a.registro.ultimoAcesso));
    preencher('continuar', vistos.slice(0, 1), 'Abra um conteúdo do site para começar.');
    preencher('recentes', vistos.slice(0, 5), 'Nenhum conteúdo visitado ainda.');
    elemento('limpar-recentes').hidden = vistos.length === 0;
    const favoritos = itens.filter(item => item.registro.favorito);
    preencher('favoritos', favoritos, 'Marque um conteúdo como favorito para encontrá-lo aqui.');
    elemento('limpar-favoritos').hidden = favoritos.length === 0;
    const notas = elemento('anotacoes'); notas.replaceChildren();
    const comNotas = itens.filter(item => item.registro.anotacao?.trim());
    elemento('limpar-anotacoes').hidden = comNotas.length === 0;
    if (!comNotas.length) notas.textContent = 'Suas anotações salvas aparecerão aqui.';
    comNotas.forEach(item => { const bloco = document.createElement('div'); bloco.className = 'mbb-nota'; bloco.append(linha(item));
      const texto = document.createElement('p'); texto.textContent = item.registro.anotacao; bloco.append(texto); notas.append(bloco); });
    const concluidos = [...new Map(itens.filter(item => item.registro.concluido && item.destino)
      .map(item => [item.destino.conteudo_id, item])).values()];
    elemento('limpar-progresso').hidden = !itens.some(item => item.registro.concluido);
    const progresso = elemento('progresso'); progresso.replaceChildren();
    const resumo = document.createElement('p');
    resumo.textContent = concluidos.length
      ? `${concluidos.length} ${concluidos.length === 1 ? 'conteúdo marcado como concluído' : 'conteúdos marcados como concluídos'}. Abrir uma página não conclui o estudo.`
      : 'Nenhum conteúdo concluído ainda. Marque a conclusão quando terminar de estudar.';
    progresso.append(resumo);
    if (concluidos.length) {
      const lista = document.createElement('details');
      const titulo = document.createElement('summary'); titulo.textContent = 'Ver conteúdos concluídos';
      lista.append(titulo);
      concluidos.forEach(item => lista.append(linha(item)));
      progresso.append(lista);
    }
  }
  try {
    await conta.iniciar();
    if (!conta.atual()) { location.replace('entrar.html'); return; }
    sair.hidden = false;
    registros = await conta.listar();
    painel.hidden = false;
    mensagem.textContent = '';
    renderizar();
  } catch (_) { mensagem.textContent = 'Seus dados estão temporariamente indisponíveis. Os conteúdos públicos continuam acessíveis.'; }
  sair.addEventListener('click', async () => { try { await conta.sair(); location.href = '../index.html'; }
    catch (_) { mensagem.textContent = 'Não foi possível sair agora. Tente novamente.'; } });
  const avisos = {
    recentes: 'Limpar a lista de recentes? Favoritos, anotações e conclusões serão mantidos.',
    favoritos: 'Remover todos os favoritos? Visitas, anotações e conclusões serão mantidas.',
    anotacoes: 'Apagar todas as suas anotações? Esta ação não pode ser desfeita. Os demais dados serão mantidos.',
    progresso: 'Zerar todas as conclusões que você marcou? Visitas, favoritos e anotações serão mantidos.'
  };
  for (const [secao, aviso] of Object.entries(avisos)) {
    const botao = elemento(`limpar-${secao}`);
    botao.addEventListener('click', async () => {
      if (!confirm(aviso)) return;
      botao.disabled = true;
      try {
        await conta.limparSecao(secao);
        registros = await conta.listar();
        renderizar();
        mensagem.textContent = 'Área limpa.';
      } catch (_) { mensagem.textContent = 'Não foi possível limpar agora. Tente novamente.'; }
      finally { botao.disabled = false; }
    });
  }
}());
