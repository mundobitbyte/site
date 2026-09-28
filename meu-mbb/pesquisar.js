(async function () {
  'use strict';
  const campo = document.getElementById('consulta');
  const resumo = document.getElementById('resumo');
  const resultados = document.getElementById('resultados');
  try {
    const resposta = await fetch('catalogo.json?v=mbb-busca-1');
    if (!resposta.ok) throw new Error('Catálogo indisponível');
    const catalogo = window.MBBCatalogo.validar(await resposta.json());
    function renderizar() {
      const termo = campo.value.trim();
      resultados.replaceChildren();
      if (!termo) { resumo.textContent = 'Digite um termo para pesquisar.'; return; }
      const achados = window.MBBCatalogo.pesquisar(catalogo, termo);
      resumo.textContent = achados.length ? `${achados.length} resultado(s) no site.` : 'Nenhum resultado encontrado. Tente outra palavra.';
      achados.slice(0, 50).forEach(unidade => {
        const artigo = document.createElement('article');
        artigo.className = 'mbb-resultado';
        const link = document.createElement('a');
        link.href = new URL(`../${unidade.localizacao_atual}`, location.href).href;
        link.textContent = unidade.titulo;
        const contexto = document.createElement('p');
        contexto.textContent = [unidade.area, unidade.modulo, unidade.trilha].filter(Boolean).join(' › ');
        artigo.append(link, contexto);
        resultados.appendChild(artigo);
      });
      if (achados.length > 50) resumo.textContent += ' Exibindo os 50 mais relevantes.';
    }
    campo.addEventListener('input', renderizar);
    campo.value = new URLSearchParams(location.search).get('q') || '';
    renderizar();
  } catch (_) { resumo.textContent = 'A pesquisa está indisponível no momento. Você pode continuar navegando pelo site.'; }
}());
