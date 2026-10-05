// Correção única e estável do cabeçalho/menu dos módulos 5 a 10 de Sistemas Embarcados e IoT.
// Não atua nos módulos 1 a 4, no exercício 99 nem em outros cursos.
(() => {
  const paginasPermitidas = [
    '/arduino-programacao-aplicada.html',
    '/arduino-conectividade.html',
    '/arduino-iot.html',
    '/arduino-protocolos.html',
    '/arduino-seguranca.html',
    '/arduino-projeto-iot.html'
  ];

  if (!paginasPermitidas.some(final => (location.pathname || '').endsWith(final))) return;
  if (document.getElementById('mbb-arduino-header-5a10-style')) return;

  const style = document.createElement('style');
  style.id = 'mbb-arduino-header-5a10-style';
  style.textContent = `
    body > header {
      background: var(--primary, #1967d2) !important;
      opacity: 1 !important;
      z-index: 1000 !important;
    }

    body > header .header-left {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      min-width: 0 !important;
      flex: 1 1 auto !important;
    }

    body > header .header-left h1 {
      min-width: 0 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }

    body > header .brand {
      flex: 0 0 auto !important;
      white-space: nowrap !important;
    }

    #arduinoModuleMenu.module-menu {
      top: 46px !important;
      z-index: 950 !important;
      background: #ffffff !important;
      opacity: 1 !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      isolation: isolate;
    }

    @media (max-width: 1180px), (pointer: coarse) {
      body > header .mbb-busca-global.mbb-busca-global {
        width: 36px !important;
        height: 36px !important;
        min-width: 36px !important;
        min-height: 36px !important;
        flex: 0 0 36px !important;
        padding: 0 !important;
        border-radius: 50% !important;
        font-size: 0 !important;
      }

      body > header .mbb-busca-global::before {
        width: 18px !important;
        height: 18px !important;
        flex-basis: 18px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
