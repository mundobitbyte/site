// React Native — proteções visuais pós-renderização.
// 1) evita o flash do quadro preto vazio na primeira abertura;
// 2) impede que o painel "Explicação da etapa" corte as últimas linhas.
// Não altera conteúdo, código, preview, ordem ou navegação dos módulos.

(() => {
  function getStep(id) {
    if (typeof modules === 'undefined' || typeof currentModuleKey === 'undefined') return null;

    const activeModule = modules[currentModuleKey];
    if (!activeModule || !Array.isArray(activeModule.steps)) return null;

    if (id !== undefined && id !== null) {
      return activeModule.steps.find(step => String(step.id) === String(id)) || null;
    }

    return activeModule.steps.find(step => {
      const button = document.getElementById(`btn-${currentModuleKey}-${step.id}`);
      return button && button.classList.contains('active');
    }) || activeModule.steps[0] || null;
  }

  function hideEmptyCodeCard(id) {
    const step = getStep(id);
    const hasCode = Boolean(step && typeof step.code === 'string' && step.code.trim().length > 0);
    if (hasCode) return;

    const codeCard = document.getElementById('codeCard');
    if (codeCard) codeCard.style.setProperty('display', 'none', 'important');

    const newCodeCard = document.getElementById('newCodeCard');
    if (newCodeCard) newCodeCard.style.setProperty('display', 'none', 'important');
  }

  function protectExplanationPanel() {
    const STYLE_ID = 'mbb-explicacao-sem-corte-20261005';
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* A segunda linha assume a altura real da explicação.
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
  }

  protectExplanationPanel();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbReactNativeVisualGuards(id) {
      const result = previousShowStep.apply(this, arguments);
      hideEmptyCodeCard(id);
      window.requestAnimationFrame(() => hideEmptyCodeCard(id));
      return result;
    };
  }

  // Também protege a primeira pintura da página, antes de qualquer clique do usuário.
  hideEmptyCodeCard();
})();
