(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const content = $('#lessonContent');
  const moduleBack = $('[data-module-back]');

  const chapters = [
    { group:'Antes de começar', menu:'00 Avaliação Diagnóstica', id:'diagnostico', enabled:true },
    { group:'Movimento e forças', menu:'01 O mundo está em movimento', id:'movimento' },
    { group:'Movimento e forças', menu:'02 Por que as coisas mudam de movimento?', id:'forcas' },
    { group:'Energia e matéria', menu:'03 Energia: de onde vem e para onde vai?', id:'energia' },
    { group:'Energia e matéria', menu:'04 Batidas, impulsos e colisões', id:'colisoes' },
    { group:'Energia e matéria', menu:'05 Temperatura não é calor', id:'temperatura' },
    { group:'Equilíbrio e fluidos', menu:'06 Como as coisas ficam em equilíbrio', id:'estatica' },
    { group:'Equilíbrio e fluidos', menu:'07 Por que navios flutuam?', id:'hidrostatica' },
    { group:'Terra e Cosmos', menu:'08 Da queda de uma maçã ao Universo', id:'cosmos' },
    { group:'Terra e Cosmos', menu:'09 Poderia existir vida em outro mundo?', id:'vida-universo' },
    { group:'Ciência e tecnologia', menu:'10 Física, tecnologia e informação confiável', id:'tecnologia' },
    { group:'Prática', menu:'99 Exercícios e desafios', id:'exercicios' }
  ];

  function setGroupOpen(group, open) {
    if (!group) return;
    const toggle = $('.menu-group-toggle', group);
    const items = $('.menu-group-items', group);
    if (!toggle || !items) return;
    items.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    group.classList.toggle('is-open', open);
  }

  function openOnlyGroup(targetGroup) {
    $$('.menu-group', menu).forEach((group) => setGroupOpen(group, group === targetGroup));
  }

  function setActive(button) {
    if (!button) return;
    $$('.menu-item', menu).forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    openOnlyGroup(button.closest('.menu-group'));
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
    let currentGroup = null;
    let currentItems = null;

    chapters.forEach((chapter, chapterIndex) => {
      if (!currentGroup || currentGroup.dataset.groupName !== chapter.group) {
        currentGroup = document.createElement('section');
        currentGroup.className = 'menu-group';
        currentGroup.dataset.groupName = chapter.group;

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'menu-group-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = `<span>${chapter.group}</span><span class="menu-group-chevron" aria-hidden="true">⌄</span>`;

        currentItems = document.createElement('div');
        currentItems.className = 'menu-group-items';
        currentItems.hidden = true;
        const groupId = `physics-menu-group-${menu.children.length + 1}`;
        currentItems.id = groupId;
        toggle.setAttribute('aria-controls', groupId);

        toggle.addEventListener('click', () => {
          const willOpen = currentItems.hidden;
          if (willOpen) openOnlyGroup(currentGroup);
          else setGroupOpen(currentGroup, false);
        });

        currentGroup.append(toggle, currentItems);
        menu.appendChild(currentGroup);
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = `menu-item${chapter.enabled ? '' : ' pending'}`;
      button.textContent = chapter.menu;
      button.dataset.lessonId = chapter.id;
      button.dataset.chapterIndex = String(chapterIndex);

      if (!chapter.enabled) {
        button.disabled = true;
        button.title = 'Conteúdo em construção';
      } else {
        button.addEventListener('click', () => {
          setActive(button);
          MBB.showDiagnostic?.();
        });
      }
      currentItems.appendChild(button);
    });

    const firstGroup = $('.menu-group', menu);
    setGroupOpen(firstGroup, true);
  }

  MBB.getMenuButton = (startsWith) => $$('.menu-item', menu).find(button => button.textContent.trim().startsWith(startsWith));
  MBB.setActiveMenu = setActive;
  MBB.openMenuGroupFor = (button) => openOnlyGroup(button?.closest('.menu-group'));
  MBB.courseContent = content;

  function openCourse() {
    home.hidden = true;
    course.hidden = false;
    const diagnosticButton = MBB.getMenuButton('00 Avaliação Diagnóstica');
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
    window.scrollTo({ top:0, behavior:'auto' });
  });

  $('#openMenu')?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    $('#openMenu').setAttribute('aria-expanded', String(open));
  });
})();