(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Começar usando', menu:'01 Inglês já está ao seu redor', id:'ingles-ao-redor' },
    { group:'Leitura estratégica', menu:'02 Ler sem traduzir tudo', id:'ler-sem-traduzir' },
    { group:'Interação', menu:'03 Interagir e compreender', id:'interagir-compreender' },
    { group:'Cultura digital', menu:'04 Vida digital e tecnologia', id:'vida-digital' },
    { group:'Informação e mídia', menu:'05 Notícias e checagem', id:'noticias-checagem' },
    { group:'Persuasão', menu:'06 Publicidade e persuasão', id:'publicidade-persuasao' },
    { group:'Arte e cultura', menu:'07 Histórias, música e cultura', id:'historias-cultura' },
    { group:'Língua e identidade', menu:'08 Englishes, identidades e mundo', id:'englishes-identidades' },
    { group:'Estudo e autoria', menu:'09 Estudar, pesquisar e produzir', id:'estudar-produzir' },
    { group:'Prática', menu:'99 Exercícios e desafios', id:'exercicios' }
  ];

  function setActive(button) {
    if (!button) return;
    $$('.menu-item', menu).forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  }

  function syncBack() {
    if (!moduleBack || !course) return;
    const inCourse = !course.hidden;
    moduleBack.textContent = inCourse ? '← Séries' : '← Ensino Médio';
    moduleBack.href = inCourse ? 'index.html' : '../index.html#ensino-medio';
    moduleBack.setAttribute('aria-label', inCourse ? 'Voltar para as séries' : 'Voltar ao Ensino Médio');
  }

  function buildMenu() {
    menu.innerHTML = '';
    let lastGroup = '';
    chapters.forEach(chapter => {
      if (chapter.group !== lastGroup) {
        const heading = document.createElement('div');
        heading.className = 'menu-group-title';
        heading.textContent = chapter.group;
        menu.appendChild(heading);
        lastGroup = chapter.group;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `menu-item${chapter.enabled ? '' : ' pending'}`;
      button.textContent = chapter.menu;
      button.dataset.lessonId = chapter.id;
      if (!chapter.enabled) {
        button.disabled = true;
        button.title = 'Conteúdo em construção';
      } else {
        button.addEventListener('click', () => {
          setActive(button);
          MBB.showDiagnostic?.();
        });
      }
      menu.appendChild(button);
    });
  }

  MBB.getMenuButton = startsWith => $$('.menu-item', menu).find(button => button.textContent.trim().startsWith(startsWith));
  MBB.setActiveMenu = setActive;

  function openCourse() {
    home.hidden = true;
    course.hidden = false;
    const diagnosticButton = MBB.getMenuButton('00 Diagnóstico');
    setActive(diagnosticButton);
    MBB.showDiagnostic?.();
    syncBack();
    window.scrollTo({ top:0, behavior:'auto' });
  }

  function backToSeries() {
    course.hidden = true;
    home.hidden = false;
    menu.classList.remove('open');
    $('#openMenu')?.setAttribute('aria-expanded','false');
    syncBack();
    window.scrollTo({ top:0, behavior:'auto' });
  }

  buildMenu();
  syncBack();

  $('[data-series="1"]')?.addEventListener('click', openCourse);
  $('#backToSeries')?.addEventListener('click', backToSeries);
  moduleBack?.addEventListener('click', event => {
    if (!course.hidden) {
      event.preventDefault();
      backToSeries();
    }
  });

  $('#openMenu')?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    $('#openMenu')?.setAttribute('aria-expanded', String(open));
  });
})();