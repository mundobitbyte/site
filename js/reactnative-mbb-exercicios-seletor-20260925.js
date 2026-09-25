// Mundo bit Byte — seletor simples entre os desafios progressivos e os aplicativos completos.
// Mantém os desafios 1 a 9 e os cinco exercícios completos já aprovados.
(function () {
  if (typeof modules === 'undefined' || !modules.interfaceBasica) return;

  const exercise = modules.interfaceBasica.steps?.find(
    step => step.id === 'exercicios-interface-flexbox'
  );
  if (!exercise || typeof exercise.html !== 'string') return;
  if (exercise.html.includes('id="mbb-exercise-switcher"')) return;

  let html = exercise.html;

  // Remove a antiga atividade autoral que não faz mais parte desta sequência.
  html = html.replace(
    /\s*<article class="mbb-challenge-card mbb-challenge-wide mbb-final-challenge">[\s\S]*?<\/article>/,
    ''
  );

  const classicMarker = '<div id="mbb-fullscreens-retained"';
  const classicIndex = html.indexOf(classicMarker);
  if (classicIndex < 0) return;

  let novos = html.slice(0, classicIndex).trim();
  let classicos = html.slice(classicIndex).trim();

  // Nos cinco exercícios completos, usa a própria imagem do link tanto
  // ao lado do botão "Copiar link" quanto dentro da tela-modelo.
  const classicTemplate = document.createElement('template');
  classicTemplate.innerHTML = classicos;
  const classicRoot = classicTemplate.content.querySelector('#mbb-fullscreens-retained');

  if (classicRoot) {
    classicRoot.querySelectorAll('.exercise-clean-section').forEach(section => {
      const copyButton = section.querySelector('button[onclick*="copyImageLink("]');
      if (!copyButton) return;

      const onclickText = copyButton.getAttribute('onclick') || '';
      const urlMatch = onclickText.match(/copyImageLink\('([^']+)'/);
      const imageUrl = urlMatch?.[1];
      if (!imageUrl) return;

      const infoBox = copyButton.parentElement;
      if (infoBox && !infoBox.querySelector('.mbb-classic-real-image')) {
        infoBox.style.display = 'flex';
        infoBox.style.alignItems = 'center';
        infoBox.style.gap = '10px';
        infoBox.style.flexWrap = 'wrap';

        const image = document.createElement('img');
        image.className = 'mbb-classic-real-image';
        image.src = imageUrl;
        image.alt = 'Imagem que será usada neste aplicativo';
        image.loading = 'lazy';
        image.decoding = 'async';
        image.style.width = '58px';
        image.style.height = '58px';
        image.style.objectFit = 'contain';
        image.style.background = '#ffffff';
        image.style.border = '1px solid #dbe3ef';
        image.style.borderRadius = '10px';
        image.style.padding = '5px';
        image.style.boxSizing = 'border-box';
        image.style.flex = '0 0 auto';
        infoBox.insertBefore(image, infoBox.firstChild);

        const label = infoBox.querySelector('strong');
        if (label) label.textContent = 'Imagem (Image):';
      }

      const mockImageBox = section.querySelector('.photo-box');
      if (mockImageBox) {
        mockImageBox.textContent = '';
        mockImageBox.style.overflow = 'hidden';

        const mockImage = document.createElement('img');
        mockImage.className = 'mbb-classic-mock-image';
        mockImage.src = imageUrl;
        mockImage.alt = 'Imagem usada na tela deste aplicativo';
        mockImage.loading = 'lazy';
        mockImage.decoding = 'async';
        mockImage.style.width = '88%';
        mockImage.style.height = '88%';
        mockImage.style.objectFit = 'contain';
        mockImage.style.display = 'block';
        mockImage.style.margin = 'auto';
        mockImageBox.appendChild(mockImage);
      }
    });

    classicos = classicRoot.outerHTML;
  }

  // Mantém o cabeçalho enxuto e voltado ao aluno.
  classicos = classicos.replace(
`<div id="mbb-fullscreens-retained" class="exercise-clean" style="margin-top:30px;">
  <div class="topline exercise-clean-top">
    <div>
      <span class="tag">Consolidação MbB</span>
      <h2>Telas completas</h2>
    </div>
    <div class="objective"><strong>Objetivo:</strong> praticar a construção de interfaces completas como na Agenda de Contatos.</div>
  </div>`,
`<div id="mbb-fullscreens-retained" class="exercise-native exercise-clean">
  <div class="topline exercise-clean-top">
    <h2>Aplicativos completos</h2>
    <div class="objective"><strong>Objetivo:</strong> reconstruir interfaces completas usando os recursos estudados.</div>
  </div>`
  );

  exercise.title = '99 — Exercícios de Interfaces e Flexbox';
  exercise.objective = 'Praticar layouts de forma progressiva e depois aplicar os conhecimentos em interfaces completas.';
  exercise.exercisePage = true;

  exercise.html = `
<style>
  #mbb-exercise-switcher{margin:0 0 18px}
  #mbb-exercise-switcher .mbb-switch-title{font-size:1.05rem;font-weight:900;color:#0f3f86;margin:0 0 10px}
  #mbb-exercise-switcher .mbb-switch-cards{display:grid;grid-template-columns:repeat(2,minmax(0,300px));gap:14px;align-items:stretch;max-width:640px}
  #mbb-exercise-switcher .mbb-switch-card{appearance:none;border:1px solid #d7e2f0;background:#fff;border-radius:14px;padding:15px 16px;text-align:left;cursor:pointer;box-shadow:0 3px 10px rgba(15,23,42,.05);transition:.16s ease;min-height:138px;display:flex;flex-direction:column}
  #mbb-exercise-switcher .mbb-switch-card:hover{border-color:#93c5fd;transform:translateY(-1px);box-shadow:0 5px 14px rgba(15,23,42,.08)}
  #mbb-exercise-switcher .mbb-switch-card.active{border-color:#1967d2;background:#f4f8ff;box-shadow:0 0 0 1px #1967d2 inset}
  #mbb-exercise-switcher .mbb-switch-card strong{display:block;color:#0f3f86;font-size:1rem;margin-bottom:6px}
  #mbb-exercise-switcher .mbb-switch-card .mbb-switch-description{display:block;color:#475569;font-size:.88rem;line-height:1.42}
  #mbb-exercise-switcher .mbb-switch-card .mbb-switch-action{display:block;margin-top:auto;padding-top:10px;color:#1967d2;font-size:.86rem;font-weight:900}
  .mbb-exercise-group[hidden]{display:none !important}
  .mbb-exercise-group{margin-top:14px}
  .mbb-exercise-back{appearance:none;border:0;background:transparent;color:#1967d2;font-weight:800;font-size:.9rem;cursor:pointer;padding:6px 0;margin:0 0 10px;display:inline-flex;align-items:center;gap:5px}
  .mbb-exercise-back:hover{text-decoration:underline}
  .mbb-exercise-group > .mbb-challenge-page,
  .mbb-exercise-group > .exercise-clean{margin-top:0 !important}
  @media(max-width:620px){
    #mbb-exercise-switcher .mbb-switch-cards{grid-template-columns:1fr;max-width:none}
    #mbb-exercise-switcher .mbb-switch-card{min-height:0}
  }
</style>

<div id="mbb-exercise-switcher">
  <div class="mbb-switch-title">Escolha como praticar</div>
  <div class="mbb-switch-cards">
    <button type="button" class="mbb-switch-card" data-mbb-group="novos" onclick="mbbTrocarGrupoExercicios('novos', this)">
      <strong>Desafios progressivos · 1 a 9</strong>
      <span class="mbb-switch-description">Comece com atividades mais guiadas e avance até situações em que você precisa decidir como organizar a interface.</span>
      <span class="mbb-switch-action">Abrir exercícios →</span>
    </button>
    <button type="button" class="mbb-switch-card" data-mbb-group="classicos" onclick="mbbTrocarGrupoExercicios('classicos', this)">
      <strong>Aplicativos completos</strong>
      <span class="mbb-switch-description">Pratique reconstruindo cinco interfaces completas: Tarefas, Produtos, Gastos, Atendimento e Biblioteca.</span>
      <span class="mbb-switch-action">Abrir aplicativos →</span>
    </button>
  </div>
</div>

<section id="mbb-exercise-group-novos" class="mbb-exercise-group" hidden>
  <button type="button" class="mbb-exercise-back" onclick="mbbVoltarEscolhaExercicios()">← Escolher outro conjunto</button>
${novos}
</section>

<section id="mbb-exercise-group-classicos" class="mbb-exercise-group" hidden>
  <button type="button" class="mbb-exercise-back" onclick="mbbVoltarEscolhaExercicios()">← Escolher outro conjunto</button>
${classicos}
</section>`;

  window.mbbTrocarGrupoExercicios = function (grupo) {
    const seletor = document.getElementById('mbb-exercise-switcher');
    if (!seletor) return;

    const novosEl = document.getElementById('mbb-exercise-group-novos');
    const classicosEl = document.getElementById('mbb-exercise-group-classicos');
    if (!novosEl || !classicosEl) return;

    const mostrarClassicos = grupo === 'classicos';
    novosEl.hidden = mostrarClassicos;
    classicosEl.hidden = !mostrarClassicos;

    seletor.querySelectorAll('.mbb-switch-card').forEach(card => {
      card.classList.toggle('active', card.dataset.mbbGroup === grupo);
    });

    if (mostrarClassicos && typeof window.showExerciseInterface === 'function') {
      window.showExerciseInterface(1);
    }

    const destino = mostrarClassicos ? classicosEl : novosEl;
    window.setTimeout(() => destino.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  window.mbbVoltarEscolhaExercicios = function () {
    const seletor = document.getElementById('mbb-exercise-switcher');
    const novosEl = document.getElementById('mbb-exercise-group-novos');
    const classicosEl = document.getElementById('mbb-exercise-group-classicos');
    if (!seletor || !novosEl || !classicosEl) return;

    novosEl.hidden = true;
    classicosEl.hidden = true;
    seletor.querySelectorAll('.mbb-switch-card').forEach(card => card.classList.remove('active'));
    window.setTimeout(() => seletor.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
