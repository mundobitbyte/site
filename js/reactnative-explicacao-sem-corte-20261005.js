// React Native MbB — impede corte do painel "Explicação da etapa".
// Atua somente no layout da explicação; não altera conteúdo, código, preview ou navegação.

(() => {
  const STYLE_ID = 'mbb-explicacao-sem-corte-20261005';
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    /* A segunda linha deve ter a altura real da explicação.
       Se o conjunto ultrapassar a viewport, quem rola é o workspace. */
    #workspace.mbb-visible-explanation-workspace {
      grid-template-rows: minmax(320px, 1fr) max-content !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      padding-bottom: 12px !important;
    }

    #mbbStepExplanation {
      height: auto !important;
      max-height: none !important;
      min-height: 280px !important;
      overflow: visible !important;
    }

    #mbbStepExplanation .mbb-explanation-body,
    #mbbStepExplanation .mbb-explanation-text {
      height: auto !important;
      max-height: none !important;
      overflow: visible !important;
    }

    @media (max-width: 1180px) and (min-width: 1051px) {
      #workspace.mbb-visible-explanation-workspace {
        grid-template-rows: minmax(300px, 1fr) max-content !important;
      }

      #mbbStepExplanation {
        min-height: 300px !important;
      }
    }

    @media (max-width: 1050px) {
      #workspace.mbb-visible-explanation-workspace {
        grid-template-rows: auto auto auto !important;
        padding-bottom: 0 !important;
      }

      #mbbStepExplanation {
        min-height: 0 !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
