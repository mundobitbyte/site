// Ajuste final exclusivo para smartphone no módulo Navegação entre Telas.
// Não altera PC/notebook. Reserva altura suficiente para exibir o frame inteiro do resultado visual.

(() => {
  const STYLE_ID = 'nav-mbb-mobile-frame-style';
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @media (max-width: 720px) {
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard {
        min-height: 600px !important;
        height: auto !important;
        overflow: hidden !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        flex: 0 0 auto !important;
        min-height: 555px !important;
        height: 555px !important;
        padding: 22px 12px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .device {
        width: min(300px, calc(100% - 32px)) !important;
        height: auto !important;
        aspect-ratio: 330 / 560 !important;
        max-height: none !important;
        margin: 0 auto !important;
        flex: 0 0 auto !important;
        box-sizing: border-box !important;
        border-radius: 30px !important;
        padding: 15px 11px !important;
        box-shadow: 0 8px 20px rgba(15, 23, 42, .22) !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .screen {
        width: 100% !important;
        height: 100% !important;
        min-height: 0 !important;
        border-radius: 21px !important;
        box-sizing: border-box !important;
      }
    }

    @media (max-width: 420px) {
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard {
        min-height: 555px !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        min-height: 510px !important;
        height: 510px !important;
        padding: 18px 10px !important;
      }

      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .device {
        width: min(276px, calc(100% - 28px)) !important;
        border-radius: 28px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
