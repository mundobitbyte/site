/* Progressive enhancement: the complete catalogue works without JavaScript. */
(() => {
  'use strict';
  // Preserve the entry page even after navigation among catalogue anchors.
  // Direct visits and external referrers retain the home fallback in the HTML.
  const voltar = document.getElementById('rl-voltar');
  try {
    if (document.referrer) {
      const origem = new URL(document.referrer);
      const pagina = path => path.replace(/\/index\.html$/, '/').replace(/\/$/, '');
      if (origem.origin === location.origin && pagina(origem.pathname) !== pagina(location.pathname)) {
        voltar.href = origem.href;
      }
    }
  } catch (_) { /* The static home link remains available. */ }
  const normalizar = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const busca = document.getElementById('rl-busca');
  const filtro = document.getElementById('rl-filtro');
  const cards = [...document.querySelectorAll('.rl-card')];
  function filtrar() {
    let total = 0;
    for (const card of cards) {
      card.hidden = !normalizar(card.dataset.titulo).includes(normalizar(busca.value.trim())) || (filtro.value !== 'todas' && card.dataset.status !== filtro.value);
      if (!card.hidden) total++;
    }
    document.getElementById('rl-contagem').textContent = `${total} de ${cards.length} faixas`;
    document.getElementById('rl-vazio').hidden = total !== 0;
  }
  busca.addEventListener('input', filtrar); filtro.addEventListener('change', filtrar);
  document.getElementById('rl-limpar').addEventListener('click', () => { busca.value = ''; filtro.value = 'todas'; filtrar(); busca.focus(); });
  function abrirDestino() {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const card = document.getElementById(id);
    if (card?.classList.contains('rl-card')) { busca.value = ''; filtro.value = 'todas'; filtrar(); card.scrollIntoView(); }
  }
  window.addEventListener('hashchange', abrirDestino); abrirDestino();
  const audio = document.getElementById('rl-audio');
  const aviso = document.getElementById('rl-audio-status');
  audio.addEventListener('error', () => { aviso.hidden = false; });
  document.getElementById('rl-repetir-audio').addEventListener('click', () => { aviso.hidden = true; audio.load(); audio.play().catch(() => { aviso.hidden = false; }); });
  document.getElementById('rl-controles').hidden = false;
})();
