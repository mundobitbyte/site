// Ajuste de leitura do módulo Navegação entre Telas.
// Nos passos operacionais iniciais, mantém código e orientação juntos na coluna esquerda
// e reserva a coluna direita inteira para o resultado visual.

(() => {
  if (typeof modules === 'undefined' || !modules.navegacao) return;

  const STYLE_ID = 'nav-mbb-readable-layout-style';
  const workspace = document.getElementById('workspace');
  const codeCard = document.getElementById('codeCard');
  const resultCard = document.getElementById('resultCard');
  const noteWrap = document.getElementById('noteWrap');
  const note = document.getElementById('note');

  if (!workspace || !codeCard || !resultCard || !noteWrap || !note) return;

  const navModule = modules.navegacao;
  const findStep = id => navModule.steps.find(step => String(step.id) === String(id));

  // Rótulos curtos e progressivos para a navegação lateral.
  const menuLabels = {
    'nav-intro': 'Intro',
    'nav-dependencias': '1. Preparar',
    'nav-primeiro-app': '2. Duas telas',
    'nav-modelo-mental': '3. Entender',
    'nav-criar-inicio': '4. Inicio.js',
    'nav-criar-cep-base': '5. BuscaCep.js',
    'nav-organizar-app': '6. App.js',
    'nav-cep-completo': '7. CEP real',
  };

  Object.entries(menuLabels).forEach(([id, label]) => {
    const step = findStep(id);
    if (step) step.menu = label;
  });

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /*
       * Leitura MbB dos passos 1, 2 e 4 a 7:
       * esquerda = código + orientação;
       * direita = resultado visual ocupando as duas linhas.
       */
      #workspace.nav-mbb-readable-workspace {
        grid-template-columns: minmax(560px, 1fr) minmax(390px, 470px) !important;
        grid-template-rows: minmax(270px, 1.15fr) minmax(285px, .95fr) !important;
        gap: 10px !important;
      }

      #workspace.nav-mbb-readable-workspace #codeCard {
        grid-column: 1 !important;
        grid-row: 1 !important;
        min-height: 0 !important;
      }

      #workspace.nav-mbb-readable-workspace #resultCard {
        grid-column: 2 !important;
        grid-row: 1 / 3 !important;
        min-height: 0 !important;
        height: 100% !important;
      }

      #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        min-height: 0 !important;
      }

      #workspace.nav-mbb-readable-workspace #noteWrap {
        grid-column: 1 !important;
        grid-row: 2 !important;
        display: grid !important;
        min-height: 0 !important;
        height: 100% !important;
      }

      #workspace.nav-mbb-readable-workspace #note.nav-beginner-note {
        position: relative;
        height: 100% !important;
        min-height: 0 !important;
        overflow: auto !important;
        padding: 42px 14px 14px !important;
        background: #f8fbff !important;
        border: 1px solid #bfdbfe !important;
        border-left: 5px solid var(--primary) !important;
      }

      #workspace.nav-mbb-readable-workspace #note.nav-beginner-note::before {
        content: 'Roteiro desta etapa';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 12px;
        background: #eaf2ff;
        border-bottom: 1px solid #bfdbfe;
        color: #0f3f86;
        font-size: 13px;
        font-weight: 900;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: 10px !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid section:first-child {
        grid-column: 1 / -1 !important;
        background: #eff6ff !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid section {
        padding: 10px 12px !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-title {
        font-size: 13.5px !important;
        line-height: 1.3 !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner p,
      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner li {
        font-size: 13px !important;
        line-height: 1.46 !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-inner li + li {
        margin-top: 5px !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
        grid-template-columns: 1fr 1fr !important;
        gap: 10px !important;
        margin-top: 10px !important;
        font-size: 13px !important;
        line-height: 1.45 !important;
      }

      #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer > div {
        padding: 9px 10px !important;
      }

      @media (max-width: 1180px) {
        #workspace.nav-mbb-readable-workspace {
          grid-template-columns: minmax(500px, 1fr) minmax(340px, 410px) !important;
        }

        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid,
        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-footer {
          grid-template-columns: 1fr !important;
        }

        #workspace.nav-mbb-readable-workspace .nav-beginner-guide-grid section:first-child {
          grid-column: 1 !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function activeNavStep(id) {
    if (id !== undefined && id !== null) return findStep(id);

    return navModule.steps.find(step => {
      const button = document.getElementById(`btn-navegacao-${step.id}`);
      return button && button.classList.contains('active');
    }) || null;
  }

  function restoreDefaultNotePosition() {
    workspace.classList.remove('nav-mbb-readable-workspace');

    if (noteWrap.parentElement !== resultCard) {
      resultCard.appendChild(noteWrap);
    }
  }

  function applyReadableLayout(id) {
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') {
      restoreDefaultNotePosition();
      return;
    }

    const step = activeNavStep(id);

    // Intro, explicação conceitual e páginas especiais usam o layout próprio.
    if (!step || !step.mbbGuide || step.modulePage || step.customPage) {
      restoreDefaultNotePosition();
      return;
    }

    // O noteWrap nasce dentro do card de resultado. Para poder ficar realmente
    // abaixo do código, ele precisa ser filho direto do grid workspace.
    if (noteWrap.parentElement !== workspace) {
      workspace.appendChild(noteWrap);
    }

    workspace.classList.add('nav-mbb-readable-workspace');
    noteWrap.style.setProperty('display', 'grid', 'important');
    note.classList.add('nav-beginner-note');

    // Mantém o título do quadro preto identificando o arquivo correto.
    const codeTitle = document.querySelector('#codeCard .panel-title span');
    if (codeTitle && step.fileLabel && typeof step.code === 'string') {
      codeTitle.textContent = step.fileLabel;
    }
  }

  installStyles();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function navMbbReadableShowStep(id) {
      const result = previousShowStep.apply(this, arguments);
      applyReadableLayout(id);
      window.requestAnimationFrame(() => applyReadableLayout(id));
      return result;
    };
  }

  if (typeof renderStepMenu === 'function') renderStepMenu();

  // Caso a página já tenha aberto diretamente no módulo de navegação.
  window.requestAnimationFrame(() => applyReadableLayout());
})();
