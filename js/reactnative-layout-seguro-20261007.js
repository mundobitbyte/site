// Ajuste final e isolado de legibilidade do módulo React Native.
// Objetivos:
// 1) reduzir a folga do aviso autoral somente nesta página;
// 2) impedir que explicações e observações sejam comprimidas/truncadas;
// 3) em telas menores, preferir rolagem da página a espremer os blocos.
//
// Não altera códigos, previews, conteúdo pedagógico, navegação nem outros módulos do site.

(() => {
  const STYLE_ID = 'mbb-reactnative-layout-seguro-20261007';
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    /* Rodapé compacto somente no React Native. */
    .mbb-direitos-autorais {
      margin: 6px 0 0 !important;
      padding: 6px 12px !important;
      line-height: 1.35 !important;
    }

    /*
     * Etapas práticas com painel "Explicação da etapa":
     * a altura passa a acompanhar o conteúdo.
     * Se o conjunto superar a viewport, rola a página inteira.
     */
    .layout.mbb-reactnative-natural-height {
      height: auto !important;
      min-height: calc(100vh - 44px) !important;
    }

    #workspace.mbb-visible-explanation-workspace {
      height: auto !important;
      min-height: 0 !important;
      grid-template-rows: minmax(320px, auto) max-content !important;
      align-content: start !important;
      overflow: visible !important;
      padding-bottom: 4px !important;
    }

    #workspace.mbb-visible-explanation-workspace #mbbStepExplanation {
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
      align-self: start !important;
    }

    #workspace.mbb-visible-explanation-workspace #mbbStepExplanation .mbb-explanation-body,
    #workspace.mbb-visible-explanation-workspace #mbbStepExplanation .mbb-explanation-text {
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
    }

    /*
     * A observação inferior deixa de ter altura fixa.
     * O preview cede espaço ao texto quando necessário.
     */
    #workspace.mbb-visible-explanation-workspace #resultCard {
      height: auto !important;
      min-height: 682px !important;
    }

    #workspace.mbb-visible-explanation-workspace #resultCard #noteWrap {
      flex: 0 0 auto !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
      padding: 0 10px 10px !important;
      box-sizing: border-box !important;
    }

    #workspace.mbb-visible-explanation-workspace #resultCard #note {
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow: visible !important;
      box-sizing: border-box !important;
    }

    /*
     * Notebooks com pouca altura útil: o documento cresce verticalmente
     * em vez de forçar todos os painéis a caber na mesma viewport.
     */
    @media (min-width: 1051px) and (max-height: 920px) {
      body {
        overflow-y: auto !important;
      }

      .layout {
        height: auto !important;
        min-height: calc(100vh - 44px) !important;
      }

      main {
        overflow: visible !important;
      }

      #workspace.mbb-visible-explanation-workspace {
        height: auto !important;
        overflow: visible !important;
      }
    }

    /*
     * Tablet e notebook estreito: mantém a responsividade já existente,
     * mas garante que explicação e observação possam crescer livremente.
     */
    @media (max-width: 1050px) {
      #workspace.mbb-visible-explanation-workspace {
        height: auto !important;
        min-height: 0 !important;
        grid-template-rows: auto !important;
        overflow: visible !important;
      }

      #workspace.mbb-visible-explanation-workspace #resultCard,
      #workspace.mbb-visible-explanation-workspace #mbbStepExplanation {
        height: auto !important;
        min-height: 0 !important;
        max-height: none !important;
      }

      #workspace.mbb-visible-explanation-workspace #resultCard #noteWrap,
      #workspace.mbb-visible-explanation-workspace #resultCard #note {
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
      }
    }
  `;

  document.head.appendChild(style);

  const workspace = document.getElementById('workspace');
  const layout = document.querySelector('.layout');

  function syncNaturalHeight() {
    if (!workspace || !layout) return;
    layout.classList.toggle(
      'mbb-reactnative-natural-height',
      workspace.classList.contains('mbb-visible-explanation-workspace')
    );
  }

  if (workspace && typeof MutationObserver !== 'undefined') {
    new MutationObserver(syncNaturalHeight).observe(workspace, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  syncNaturalHeight();
})();
