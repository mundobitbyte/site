/* Atalho público independente de login e do Firebase para as páginas do site. */
(function () {
  'use strict';
  const script = document.currentScript;
  if (!script) return;
  const destino = new URL('../meu-mbb/pesquisar.html', script.src);
  if (location.pathname === destino.pathname ||
      Array.from(document.querySelectorAll('a[href]')).some(link => link.href === destino.href)) return;

  const estilo = document.createElement('style');
  estilo.textContent = `
    .mbb-busca-global {
      position: fixed; left: 16px; bottom: max(16px, env(safe-area-inset-bottom));
      z-index: 90; display: inline-flex; align-items: center; justify-content: center;
      min-height: 44px; padding: 9px 16px; border: 2px solid #fff;
      border-radius: 999px; background: #1967d2; color: #fff !important;
      box-shadow: 0 5px 18px rgba(15, 23, 42, .28);
      font: 800 14px/1.2 "Segoe UI", Arial, sans-serif;
      text-decoration: none !important;
    }
    .mbb-busca-global:hover { background: #114b9e; }
    .mbb-busca-global:focus-visible { outline: 3px solid #114b9e; outline-offset: 3px; }
    @media print { .mbb-busca-global { display: none !important; } }
  `;
  const link = document.createElement('a');
  link.className = 'mbb-busca-global';
  link.href = destino.href;
  link.textContent = 'Pesquisar';
  link.setAttribute('aria-label', 'Pesquisar conteúdos do Mundo bit Byte');
  document.head.appendChild(estilo);
  document.body.appendChild(link);
}());
