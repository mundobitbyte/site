// Mundo bit Byte — seletor simples entre os desafios MbB e os exercícios clássicos.
// Mantém os desafios 1 a 9 e restaura o bloco clássico no formato antigo.
(function () {
  if (typeof modules === 'undefined' || !modules.interfaceBasica) return;

  const exercise = modules.interfaceBasica.steps?.find(
    step => step.id === 'exercicios-interface-flexbox'
  );
  if (!exercise || typeof exercise.html !== 'string') return;
  if (exercise.html.includes('id="mbb-exercise-switcher"')) return;

  let html = exercise.html;

  // O item 10 (Miniinterface autoral) foi retirado a pedido do professor.
  html = html.replace(
    /\s*<article class="mbb-challenge-card mbb-challenge-wide mbb-final-challenge">[\s\S]*?<\/article>/,
    ''
  );

  const classicMarker = '<div id="mbb-fullscreens-retained"';
  const classicIndex = html.indexOf(classicMarker);
  if (classicIndex < 0) return;

  let novos = html.slice(0, classicIndex).trim();
  let classicos = html.slice(classicIndex).trim();

  // Nos cinco exercícios clássicos, usa a própria imagem do link tanto
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

  // Retorna o cabeçalho do bloco clássico ao texto que existia no site antigo.
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
    <h2>99. Exercícios Interface</h2>
    <div class="objective"><strong>Objetivo:</strong> praticar construção de interfaces em React Native.</div>
  </div>`
  );

  exercise.title = '99 — Exercícios de Interfaces e Flexbox';
  exercise.objective = 'Escolher entre os desafios progressivos MbB e os exercícios clássicos de interfaces.';
  exercise.exercisePage = true;

  exercise.html = `
<style>
  #mbb-exercise-switcher{margin:0 0 20px}
  #mbb-exercise-switcher .mbb-switch-title{font-size:1.05rem;font-weight:900;color:#0f3f86;margin:0 0 10px}
  #mbb-exercise-switcher .mbb-switch-cards{display:grid;grid-template-columns:repeat(2,minmax(0,240px));gap:12px;align-items:stretch}
  #mbb-exercise-switcher .mbb-switch-card{appearance:none;border:1px solid #cbd5e1;background:#fff;border-radius:14px;padding:14px 16px;text-align:left;cursor:pointer;box-shadow:0 4px 12px rgba(15,23,42,.06);transition:.16s ease}
  #mbb-exercise-switcher .mbb-switch-card:hover{border-color:#93c5fd;transform:translateY(-1px)}
  #mbb-exercise-switcher .mbb-switch-card.active{border:2px solid #1967d2;background:#eff6ff}
  #mbb-exercise-switcher .mbb-switch-card strong{display:block;color:#0f3f86;font-size:.98rem;margin-bottom:4px}
  #mbb-exercise-switcher .mbb-switch-card span{display:block;color:#475569;font-size:.86rem;line-height:1.35}
  .mbb-exercise-group[hidden]{display:none !important}
  .mbb-exercise-group{margin-top:12px}
  @media(max-width:620px){#mbb-exercise-switcher .mbb-switch-cards{grid-template-columns:1fr}}
</style>

<div id="mbb-exercise-switcher">
  <div class="mbb-switch-title">Escolha os exercícios</div>
  <div class="mbb-switch-cards">
    <button type="button" class="mbb-switch-card" data-mbb-group="novos" onclick="mbbTrocarGrupoExercicios('novos', this)">
      <strong>Desafios MbB · 1 a 9</strong>
      <span>Os exercícios progressivos que ficaram bons, até antes do antigo item 10.</span>
    </button>
    <button type="button" class="mbb-switch-card" data-mbb-group="classicos" onclick="mbbTrocarGrupoExercicios('classicos', this)">
      <strong>Exercícios clássicos</strong>
      <span>Tarefas, Produtos, Gastos, Atendimento e Biblioteca no formato antigo.</span>
    </button>
  </div>
</div>

<section id="mbb-exercise-group-novos" class="mbb-exercise-group" hidden>
${novos}
</section>

<section id="mbb-exercise-group-classicos" class="mbb-exercise-group" hidden>
${classicos}
</section>`;

  window.mbbTrocarGrupoExercicios = function (grupo, botao) {
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

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
