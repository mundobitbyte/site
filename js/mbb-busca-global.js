/* Pesquisa pública independente de login e do Firebase nas páginas do site. */
(function () {
  'use strict';

  /* O antigo atalho de prévia da Academia não pertence ao cabeçalho do React Native. */
  const academiaPreview = typeof document.getElementById === 'function'
    ? document.getElementById('mbb-academia-react-native-preview')
    : null;
  if (academiaPreview) academiaPreview.remove();

  const script = document.currentScript;
  if (!script) return;
  const destino = new URL('../meu-mbb/pesquisar.html', script.src);
  if (location.pathname === destino.pathname ||
      Array.from(document.querySelectorAll('a[href]')).some(link => link.href === destino.href)) return;

  const estilo = document.createElement('style');
  estilo.textContent = `
    .mbb-busca-global.mbb-busca-global {
      position: static !important;
      z-index: auto !important;
      flex: 0 0 auto;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-width: 0;
      min-height: 32px;
      margin: 0;
      padding: 5px 10px;
      border: 1px solid rgba(17,75,158,.22);
      border-radius: 999px;
      background: rgba(255,255,255,.97) !important;
      color: #114b9e !important;
      box-shadow: 0 1px 4px rgba(15,23,42,.14);
      font: 800 12px/1.2 "Segoe UI", Arial, sans-serif !important;
      white-space: nowrap;
      text-decoration: none !important;
    }
    .mbb-busca-global::before {
      content: "";
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
      background: center / contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23114b9e' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='m20 20-3.8-3.8'/%3E%3C/svg%3E");
    }
    .mbb-busca-global:hover { background: #eef5ff !important; }
    .mbb-busca-global:focus-visible { outline: 3px solid #facc15; outline-offset: 2px; }
    @media (max-width: 820px) {
      .mbb-busca-global.mbb-busca-global {
        width: 36px;
        height: 36px;
        min-width: 36px;
        min-height: 36px;
        padding: 0;
        border-radius: 50%;
        font-size: 0 !important;
      }
      .mbb-busca-global::before { width: 18px; height: 18px; flex-basis: 18px; }
    }
    @media print { .mbb-busca-global { display: none !important; } }
  `;

  const link = document.createElement('a');
  link.className = 'mbb-busca-global';
  link.href = destino.href;
  link.textContent = 'Pesquisar';
  link.title = 'Pesquisar';
  link.setAttribute('aria-label', 'Pesquisar conteúdos do Mundo bit Byte');

  function encontrarCabecalho() {
    if (typeof document.querySelector !== 'function') return null;
    return document.querySelector('.course-header, body > header, .topbar, .site-header');
  }

  function encontrarAssinatura(cabecalho) {
    if (!cabecalho || typeof cabecalho.querySelector !== 'function') return null;
    const brand = cabecalho.querySelector('.brand');
    if (brand) return brand;
    return Array.from(cabecalho.querySelectorAll('strong')).find(elemento =>
      /Professor\s+Ronaldo\s+Lavestein/i.test(elemento.textContent || '')
    ) || null;
  }

  const cabecalho = encontrarCabecalho();
  const assinatura = encontrarAssinatura(cabecalho);

  document.head.appendChild(estilo);
  if (assinatura?.parentNode) {
    assinatura.parentNode.insertBefore(link, assinatura);
  } else if (cabecalho) {
    const grupoDireito = cabecalho.querySelector?.('.header-right');
    if (grupoDireito) grupoDireito.prepend(link);
    else cabecalho.appendChild(link);
  } else {
    /* Compatibilidade para páginas antigas sem cabeçalho identificável. */
    document.body.appendChild(link);
  }
}());
