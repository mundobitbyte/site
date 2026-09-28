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
  const link = (unidade, texto) => {
    const ancora = document.createElement('a');
    ancora.href = new URL(`../${unidade.localizacao_atual}`, location.href).href;
    ancora.textContent = texto || unidade.titulo;
    return ancora;
  };
  function linha(item) {
    const p = document.createElement('p');
    const origem = catalogo.unidades.find(unidade => unidade.conteudo_id === item.id);
    if (item.destino) p.append(link(item.destino));
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
    preencher('continuar', vistos.slice(0, 1), 'Abra uma etapa de Git para começar.');
    preencher('recentes', vistos.slice(0, 5), 'Nenhum conteúdo visitado ainda.');
    preencher('favoritos', itens.filter(item => item.registro.favorito), 'Nenhum favorito ainda.');
    const notas = elemento('anotacoes'); notas.replaceChildren();
    const comNotas = itens.filter(item => item.registro.anotacao?.trim());
    if (!comNotas.length) notas.textContent = 'Nenhuma anotação ainda.';
    comNotas.forEach(item => { const bloco = document.createElement('div'); bloco.className = 'mbb-nota'; bloco.append(linha(item));
      const texto = document.createElement('p'); texto.textContent = item.registro.anotacao; bloco.append(texto); notas.append(bloco); });
    const p = core.progresso(catalogo, registros);
    elemento('progresso').textContent = `${p.concluidas} de ${p.total} etapas concluídas (${p.percentual}%). As demais áreas ainda não fazem parte deste piloto.`;
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
}());
