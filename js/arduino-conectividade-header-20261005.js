// Ajuste local do cabeçalho de 6 — Conectividade.
// Não altera o componente global de pesquisa nem outros módulos.
(() => {
  if (!location.pathname.endsWith('/arduino-conectividade.html')) return;

  const style = document.createElement('style');
  style.id = 'mbb-conectividade-header-fix';
  style.textContent = `
    body > header .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
      flex: 1 1 auto;
    }

    body > header .header-left h1 {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    body > header .brand {
      flex: 0 0 auto;
    }

    @media (max-width: 1180px) {
      body > header .mbb-busca-global.mbb-busca-global {
        width: 36px;
        height: 36px;
        min-width: 36px;
        min-height: 36px;
        flex: 0 0 36px;
        padding: 0;
        border-radius: 50%;
        font-size: 0 !important;
      }
      body > header .mbb-busca-global::before {
        width: 18px;
        height: 18px;
        flex-basis: 18px;
      }
    }
  `;
  document.head.appendChild(style);
})();
