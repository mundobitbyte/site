// Ajuste responsivo e de leitura para o módulo Navegação entre Telas.
// Remove rolagem aninhada do roteiro e preserva a ordem código -> explicação -> resultado.

(() => {
  if (typeof modules === 'undefined' || !modules.navegacao) return;

  const STYLE_ID = 'nav-mbb-notebook-layout-style';
  const workspace = document.getElementById('workspace');
  const codeCard = document.getElementById('codeCard');
  const resultCard = document.getElementById('resultCard');
  const noteWrap = document.getElementById('noteWrap');
  const note = document.getElementById('note');

  if (!workspace || !codeCard || !resultCard || !noteWrap || !note) return;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /*
       * Passos operacionais 1, 2 e 4 a 7.
       * Em telas largas, código e resultado ficam lado a lado.
       * A explicação cresce naturalmente abaixo do código; só o workspace rola.
       */
      #workspace.nav-mbb-readable-workspace {
        grid-template-columns: minmax(560px, 1fr) minmax(390px, 470px) !important;
        grid-template-rows: minmax(320px, 430px) auto !important;
        gap: 12px !important;
        align-content: start !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        padding-right: 6px !important;
        padding-bottom: 14px !important;
        scrollbar-gutter: stable;
      }

      #workspace.nav-mbb-readable-workspace #codeCard {
        grid-column: 1 !important;
        grid-row: 1 !important;
        min-height: 320px !important;
        height: 100% !important;
      }

      #workspace.nav-mbb-readable-workspace #resultCard {
        grid-column: 2 !important;
        grid-row: 1 !important;
        min-height: 320px !important;
        height: 100% !important;
      }

      #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        min-height: 0 !important;
      }

      #workspace.nav-mbb-readable-workspace #noteWrap {
        grid-column: 1 !important;
        grid-row: 2 !important;
        align-self: start !important;
        display: block !important;
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }

      #workspace.nav-mbb-readable-workspace #note.nav-beginner-note {
        position: relative;
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
        padding: 44px 16px 18px !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner,
      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid,
      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }

      /* Notebook mais estreito: mantém duas colunas, mas dá toda a altura necessária ao texto. */
      @media (max-width: 1180px) and (min-width: 1051px) {
        #workspace.nav-mbb-readable-workspace {
          grid-template-columns: minmax(500px, 1fr) minmax(340px, 410px) !important;
          grid-template-rows: minmax(320px, 400px) auto !important;
        }

        #workspace.nav-mbb-readable-workspace #noteWrap,
        #workspace.nav-mbb-readable-workspace #note.nav-beginner-note {
          min-height: 0 !important;
          height: auto !important;
        }

        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid,
        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
          grid-template-columns: 1fr !important;
        }

        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid section:first-child {
          grid-column: 1 !important;
        }
      }

      /* Notebook pequeno/tablet: a leitura vira uma sequência vertical inequívoca. */
      @media (max-width: 1050px) {
        #workspace.nav-mbb-readable-workspace {
          display: grid !important;
          height: auto !important;
          grid-template-columns: 1fr !important;
          grid-template-rows: auto auto auto !important;
          overflow: visible !important;
          padding-right: 0 !important;
          padding-bottom: 12px !important;
        }

        #workspace.nav-mbb-readable-workspace #codeCard {
          grid-column: 1 !important;
          grid-row: 1 !important;
          min-height: 420px !important;
          height: 420px !important;
        }

        #workspace.nav-mbb-readable-workspace #noteWrap {
          grid-column: 1 !important;
          grid-row: 2 !important;
          width: 100% !important;
          min-height: 0 !important;
          height: auto !important;
        }

        #workspace.nav-mbb-readable-workspace #resultCard {
          grid-column: 1 !important;
          grid-row: 3 !important;
          min-height: 520px !important;
          height: 520px !important;
        }
      }

      /* Smartphone: o CSS-base usa flex; fixa explicitamente a ordem didática. */
      @media (max-width: 720px) {
        #workspace.nav-mbb-readable-workspace {
          display: flex !important;
          flex-direction: column !important;
          height: auto !important;
          overflow: visible !important;
          gap: 10px !important;
        }

        #workspace.nav-mbb-readable-workspace #codeCard {
          order: 1 !important;
          width: 100% !important;
          min-height: 360px !important;
          height: 360px !important;
        }

        #workspace.nav-mbb-readable-workspace #noteWrap {
          order: 2 !important;
          width: 100% !important;
          min-height: 0 !important;
          height: auto !important;
        }

        #workspace.nav-mbb-readable-workspace #resultCard {
          order: 3 !important;
          width: 100% !important;
          min-height: 500px !important;
          height: 500px !important;
        }

        #workspace.nav-mbb-readable-workspace #note.nav-beginner-note {
          padding: 42px 12px 14px !important;
        }

        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner p,
        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner li,
        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
          font-size: 13px !important;
          line-height: 1.5 !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function isOperationalNavigationStep(id) {
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') return false;

    const navModule = modules.navegacao;
    const step = id !== undefined && id !== null
      ? navModule.steps.find(item => String(item.id) === String(id))
      : navModule.steps.find(item => {
          const button = document.getElementById(`btn-navegacao-${item.id}`);
          return button && button.classList.contains('active');
        });

    return Boolean(step && step.mbbGuide && !step.modulePage && !step.customPage);
  }

  function normalizeScroll(id) {
    if (!isOperationalNavigationStep(id)) return;

    // Ao trocar de etapa, começa pelo topo da nova leitura e evita que o aluno
    // caia no meio do roteiro por causa da posição de rolagem da etapa anterior.
    workspace.scrollTop = 0;
    if (note) note.scrollTop = 0;
  }

  installStyles();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function navMbbNotebookShowStep(id) {
      const result = previousShowStep.apply(this, arguments);
      window.requestAnimationFrame(() => normalizeScroll(id));
      return result;
    };
  }

  window.requestAnimationFrame(() => normalizeScroll());
})();
