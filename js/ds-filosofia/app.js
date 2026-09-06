(() => {
  'use strict';

  const MBB = window.MBBFilosofia = window.MBBFilosofia || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Diagnóstico', id:'diagnostico', enabled:true },
    { group:'Perguntar e argumentar', menu:'01 Filosofia e atitude filosófica', id:'atitude-filosofica' },
    { group:'Conhecimento e verdade', menu:'02 Conhecimento, verdade e ciência', id:'conhecimento-ciencia' },
    { group:'Agir e escolher', menu:'03 Ética, liberdade e responsabilidade', id:'etica-liberdade' },
    { group:'Pessoa e tecnologia', menu:'04 Ser humano, tecnologia e bioética', id:'bioetica-tecnologia' },
    { group:'Arte e experiência', menu:'05 Estética, arte e experiência', id:'estetica-arte' },
    { group:'Vida em comum', menu:'06 Justiça, política e pluralismo', id:'justica-politica' },
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
    moduleBack.textContent = inCourse ? '← Séries' : '← Mundo bit Byte';
    moduleBack.href = inCourse ? 'index.html' : '../index.html';
    moduleBack.setAttribute('aria-label', inCourse ? 'Voltar para as séries' : 'Voltar ao Mundo bit Byte');
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
    window.scrollTo({ top:0, behavior:'auto' });
  }

  buildMenu();
  syncBack();
  if (course) new MutationObserver(syncBack).observe(course, { attributes:true, attributeFilter:['hidden'] });

  $('.series-card.active')?.addEventListener('click', openCourse);
  $('#backToSeries')?.addEventListener('click', () => {
    course.hidden = true;
    home.hidden = false;
    menu.classList.remove('open');
    window.scrollTo({ top:0, behavior:'smooth' });
  });
  $('#openMenu')?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    $('#openMenu').setAttribute('aria-expanded', String(open));
  });
})();
