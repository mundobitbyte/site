(async function () {
  'use strict';
  const script = document.currentScript;
  if (!script) return;
  const origem = new URL(script.src);
  const pagina = decodeURIComponent(location.pathname.replace(/^\//, ''));
  let unidade;
  try {
    const resposta = await fetch(new URL('visitas-diretas.json?v=mbb-recursos-1', origem));
    if (!resposta.ok) return;
    unidade = (await resposta.json())[pagina];
  } catch (_) { return; }
  if (!unidade) return;

  function carregar(nome) {
    return new Promise((resolve, reject) => {
      const elemento = document.createElement('script');
      elemento.src = new URL(nome, origem).href;
      elemento.onload = resolve;
      elemento.onerror = reject;
      document.head.appendChild(elemento);
    });
  }
  try {
    await carregar('firebase-config.js?v=mbb-prod-1');
    await carregar('conta.js?v=mbb-recursos-1');
    const conta = window.MBBMeuConta;
    await conta.iniciar();
    if (!conta.atual()) return;
    let ultima = null;
    let fila = Promise.resolve();
    function registrar() {
      const hash = location.hash.slice(1);
      const ancora = unidade.ancoras.includes(hash) ? hash : '';
      if (ancora === ultima) return;
      fila = fila.then(async () => {
        await conta.visitar(unidade, ancora);
        ultima = ancora;
      }).catch(() => {}); // Dados indisponíveis não interrompem a página pública.
    }
    window.addEventListener('hashchange', registrar);
    window.addEventListener('popstate', registrar);
    registrar();
    montarAcoes(conta, unidade, origem);
  } catch (_) { /* A página pública continua acessível sem Firebase. */ }

  function montarAcoes(conta, unidade, origem) {
    const estilo = document.createElement('link');
    estilo.rel = 'stylesheet';
    estilo.href = new URL('acoes-estudo.css?v=mbb-recursos-1', origem).href;
    document.head.appendChild(estilo);

    const abrir = document.createElement('button');
    abrir.type = 'button';
    abrir.className = 'mbb-estudo-abrir';
    abrir.textContent = 'Meu estudo';
    abrir.setAttribute('aria-expanded', 'false');
    abrir.setAttribute('aria-controls', 'mbb-estudo-acoes');
    const painel = document.createElement('section');
    painel.id = 'mbb-estudo-acoes';
    painel.className = 'mbb-estudo-acoes';
    painel.setAttribute('aria-label', 'Ações do Meu MbB para este conteúdo');
    painel.hidden = true;
    const titulo = document.createElement('h2');
    titulo.textContent = 'Meu estudo';
    const contexto = document.createElement('p');
    contexto.textContent = `Ações para o conteúdo inteiro: ${unidade.titulo}.`;
    const favorito = document.createElement('button');
    favorito.type = 'button';
    const concluir = document.createElement('button');
    concluir.type = 'button';
    const explicacao = document.createElement('p');
    explicacao.className = 'mbb-estudo-ajuda';
    explicacao.textContent = 'Marque como concluído quando terminar todo este conteúdo. A visita não conclui o estudo.';
    const anotacao = document.createElement('textarea');
    anotacao.placeholder = 'Sua anotação privada (até 2.000 caracteres)';
    anotacao.setAttribute('aria-label', 'Sua anotação privada');
    anotacao.maxLength = 2000;
    anotacao.rows = 3;
    const salvar = document.createElement('button');
    salvar.type = 'button';
    salvar.textContent = 'Salvar anotação';
    const aviso = document.createElement('span');
    aviso.setAttribute('role', 'status');
    const contaLink = document.createElement('a');
    contaLink.href = new URL('index.html', origem).href;
    contaLink.textContent = 'Ver Meu MbB';
    painel.append(titulo, contexto, favorito, concluir, explicacao, anotacao, salvar, aviso, contaLink);
    document.body.append(abrir, painel);

    abrir.addEventListener('click', () => {
      painel.hidden = !painel.hidden;
      abrir.setAttribute('aria-expanded', String(!painel.hidden));
    });
    let estado = {};
    function atualizar() {
      favorito.textContent = estado.favorito ? '★ Remover dos favoritos' : '☆ Adicionar aos favoritos';
      concluir.textContent = estado.concluido ? 'Concluído ✓ · Desmarcar' : 'Marcar conteúdo como concluído';
    }
    const botoes = [favorito, concluir, salvar];
    botoes.forEach(botao => { botao.disabled = true; });
    atualizar();
    conta.obter(unidade).then(registro => {
      estado = registro;
      anotacao.value = estado.anotacao || '';
      atualizar();
      botoes.forEach(botao => { botao.disabled = false; });
    }).catch(() => { aviso.textContent = 'Seus dados não estão disponíveis agora.'; });
    async function gravar(campos) {
      botoes.forEach(botao => { botao.disabled = true; });
      aviso.textContent = 'Salvando…';
      try {
        await conta.salvar(unidade, campos);
        Object.assign(estado, campos);
        atualizar();
        aviso.textContent = 'Salvo no Meu MbB.';
      } catch (_) { aviso.textContent = 'Não foi possível salvar agora.'; }
      finally { botoes.forEach(botao => { botao.disabled = false; }); }
    }
    favorito.addEventListener('click', () => gravar({ favorito: !estado.favorito }));
    concluir.addEventListener('click', () => gravar({ concluido: !estado.concluido }));
    salvar.addEventListener('click', () => gravar({ anotacao: anotacao.value }));
  }
}());
