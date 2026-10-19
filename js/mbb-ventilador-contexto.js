/* Contexto explícito na URL: cada aba conserva sua própria etapa de origem. */
(function (root) {
  'use strict';
  const projeto = 'arduino-ventilador-bluetooth.html';
  const destinos = new Set(['arduino.html', 'arduino-conectividade.html', 'arduino-seguranca.html', 'appinventor.html']);
  function contexto(href) {
    try {
      const url = new URL(href);
      const etapa = url.searchParams.get('mbb-etapa');
      if (url.searchParams.get('mbb-origem') !== 'ventilador' || !/^[1-8]$/.test(etapa || '')) return null;
      if (!destinos.has(url.pathname.split('/').pop())) return null;
      return { etapa: Number(etapa), retorno: new URL(projeto + '#etapa-' + etapa, url).href };
    } catch (_) { return null; }
  }
  function destino(href, origem) {
    try {
      const base = new URL(origem);
      const url = new URL(href, base);
      if (url.origin !== base.origin || !destinos.has(url.pathname.split('/').pop())) return null;
      if (!/^#(?:atuadores-reles|b6-hc05|b9-eletricidade|bluetooth-ventilador)$/.test(url.hash)) return null;
      const etapa = /^#etapa-([1-8])$/.exec(base.hash)?.[1];
      if (base.pathname.split('/').pop() !== projeto || !etapa) return null;
      url.searchParams.set('mbb-origem', 'ventilador');
      url.searchParams.set('mbb-etapa', etapa);
      return url.href;
    } catch (_) { return null; }
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { contexto, destino };
  if (!root.document) return;
  function iniciar() {
    const document = root.document;
    const ctx = contexto(root.location.href);
    if (ctx) {
      const faixa = document.createElement('nav');
      faixa.className = 'mbb-retorno-projeto';
      faixa.setAttribute('aria-label', 'Continuidade do projeto');
      const link = document.createElement('a');
      link.href = ctx.retorno;
      link.textContent = '← Retomar etapa ' + ctx.etapa + ' do ventilador';
      const sair = document.createElement('button');
      sair.type = 'button'; sair.textContent = 'Seguir pelo curso';
      sair.addEventListener('click', () => {
        const url = new URL(root.location.href);
        url.searchParams.delete('mbb-origem'); url.searchParams.delete('mbb-etapa');
        root.history.replaceState(null, '', url.href); faixa.remove();
      });
      faixa.append(link, sair);
      const alvo = document.getElementById('stageToggle')?.parentElement || document.querySelector('main');
      alvo?.prepend(faixa);
    }
    document.querySelectorAll('a[data-mbb-conceito]').forEach(link => {
      const etapa = link.closest('section[id^="etapa-"]')?.id;
      const origem = new URL(root.location.href); origem.hash = etapa || '';
      const href = destino(link.getAttribute('href'), origem.href);
      if (href) link.href = href;
    });
  }
  if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  else iniciar();
})(typeof window !== 'undefined' ? window : globalThis);
