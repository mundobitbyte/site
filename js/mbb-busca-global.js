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
      gap: 8px; min-height: 44px; padding: 9px 16px; border: 2px solid #fff;
      border-radius: 999px; background: #1967d2; color: #fff !important;
      box-shadow: 0 5px 18px rgba(15, 23, 42, .28);
      font: 800 14px/1.2 "Segoe UI", Arial, sans-serif;
      text-decoration: none !important;
    }
    .mbb-busca-global::before {
      content: ""; width: 17px; height: 17px; flex: 0 0 17px;
      background: center / contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='m20 20-3.8-3.8'/%3E%3C/svg%3E");
    }
    .mbb-busca-global:hover { background: #114b9e; }
    .mbb-busca-global:focus-visible { outline: 3px solid #114b9e; outline-offset: 3px; }
    @media (max-width: 720px) {
      .mbb-busca-global {
        width: 48px; height: 48px; min-height: 48px; padding: 0;
        border-radius: 50%; font-size: 0;
      }
      .mbb-busca-global::before { width: 20px; height: 20px; flex-basis: 20px; }
    }
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
