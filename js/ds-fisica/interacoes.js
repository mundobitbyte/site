(() => {
  'use strict';

  const MBB = window.MBBPhysics = window.MBBPhysics || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  MBB.initChoiceQuestions = (root) => {
    $$('[data-choice-question]', root).forEach((box) => {
      if (box.dataset.choiceReady === 'true') return;
      box.dataset.choiceReady = 'true';
      const correct = box.dataset.correct;
      const feedback = $('[data-choice-feedback]', box);
      $$('[data-choice]', box).forEach((button) => {
        button.addEventListener('click', () => {
          const ok = button.dataset.choice === correct;
          $$('[data-choice]', box).forEach((item) => item.classList.remove('is-selected', 'is-correct', 'is-wrong'));
          button.classList.add('is-selected', ok ? 'is-correct' : 'is-wrong');
          if (!feedback) return;
          feedback.className = `choice-feedback ${ok ? 'is-correct' : 'is-wrong'}`;
          feedback.innerHTML = `<strong>${ok ? 'Correto.' : 'Ainda não.'}</strong> ${ok ? feedback.dataset.correctText : feedback.dataset.wrongText}`;
        });
      });
    });
  };

  MBB.setActiveMenu = (button) => {
    const menu = document.getElementById('lessonMenu');
    if (!menu || !button) return;
    $$('.menu-item', menu).forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  };

  MBB.closeMobileMenu = () => {
    const menu = document.getElementById('lessonMenu');
    const toggle = document.getElementById('openMenu');
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  MBB.scrollLessonTop = () => {
    const content = document.getElementById('lessonContent');
    if (!content) return;
    if (content.scrollTo) content.scrollTo({ top: 0, behavior: 'auto' });
  };

  function splitCheckpoint(root) {
    const checkpoints = [...root.children].filter((element) => element.matches('section.chapter-checkpoint'));

    checkpoints.forEach((checkpoint) => {
      const children = [...checkpoint.children];
      const questions = children.filter((element) => element.classList.contains('quick-question'));
      const challenge = children.find((element) => element.classList.contains('challenge-box'));
      if (questions.length <= 2) return;

      const heading = children.find((element) => element.tagName === 'H3');
      const title = heading?.textContent?.trim() || 'Checkpoint';
      const generated = [];
      const chunks = [];

      for (let index = 0; index < questions.length; index += 2) {
        chunks.push(questions.slice(index, index + 2));
      }

      chunks.forEach((chunk, index) => {
        const section = document.createElement('section');
        section.className = 'chapter-checkpoint checkpoint-page';
        section.dataset.stepLabel = `Checkpoint ${index + 1}`;
        section.innerHTML = `<span class="lesson-kicker">Checkpoint</span><h3>${title} — parte ${index + 1}</h3>`;
        chunk.forEach((question) => section.appendChild(question));
        generated.push(section);
      });

      if (challenge) {
        const section = document.createElement('section');
        section.className = 'chapter-checkpoint checkpoint-page';
        section.dataset.stepLabel = 'Desafio MbB';
        section.innerHTML = '<span class="lesson-kicker">Fechamento</span><h3>Desafio MbB</h3>';
        section.appendChild(challenge);
        generated.push(section);
      }

      generated.forEach((section) => checkpoint.parentNode.insertBefore(section, checkpoint));
      checkpoint.remove();
    });
  }

  function pageLabel(page, index) {
    if (page.dataset.stepLabel) return page.dataset.stepLabel;
    if (page.matches('details.curriculum-box')) return 'Conexão com o plano de curso';
    const heading = page.querySelector('h3');
    if (heading?.textContent?.trim()) return heading.textContent.trim();
    if (index === 0) return 'Situação inicial';
    return `Etapa ${index + 1}`;
  }

  MBB.initLessonPager = (root) => {
    if (!root) return;
    splitCheckpoint(root);

    const pages = [...root.children].filter((element) => element.matches('section, details.curriculum-box'));
    if (pages.length <= 1) return;

    let current = 0;
    pages.forEach((page, index) => {
      page.classList.add('lesson-step');
      page.hidden = index !== 0;
    });

    const createPager = (position) => {
      const nav = document.createElement('nav');
      nav.className = `lesson-pager ${position}`;
      nav.setAttribute('aria-label', 'Navegação dentro do capítulo');
      nav.innerHTML = `
        <button type="button" data-step-prev aria-label="Etapa anterior">← Anterior</button>
        <div class="lesson-pager-status"><strong data-step-count></strong><span data-step-title></span></div>
        <button type="button" data-step-next aria-label="Próxima etapa">Próxima →</button>`;
      return nav;
    };

    const topPager = createPager('top');
    const bottomPager = createPager('bottom');
    root.insertBefore(topPager, pages[0]);
    root.appendChild(bottomPager);

    const pagers = [topPager, bottomPager];

    const render = () => {
      pages.forEach((page, index) => { page.hidden = index !== current; });
      pagers.forEach((pager) => {
        $('[data-step-count]', pager).textContent = `Etapa ${current + 1} de ${pages.length}`;
        $('[data-step-title]', pager).textContent = pageLabel(pages[current], current);
        $('[data-step-prev]', pager).disabled = current === 0;
        $('[data-step-next]', pager).disabled = current === pages.length - 1;
      });
      MBB.scrollLessonTop();
    };

    pagers.forEach((pager) => {
      $('[data-step-prev]', pager).addEventListener('click', () => {
        if (current <= 0) return;
        current -= 1;
        render();
      });
      $('[data-step-next]', pager).addEventListener('click', () => {
        if (current >= pages.length - 1) return;
        current += 1;
        render();
      });
    });

    render();
  };

  MBB.showLesson = ({ unit, technical, title, objective, html, init }) => {
    const content = document.getElementById('lessonContent');
    if (!content) return;
    $('#unitName').textContent = unit || '';
    $('#technicalTitle').textContent = technical || '';
    $('#lessonTitle').textContent = title || '';
    $('#lessonObjective').innerHTML = objective || '';
    content.innerHTML = html || '';
    MBB.initLessonPager(content);
    MBB.initChoiceQuestions(content);
    if (typeof init === 'function') init(content);
    MBB.closeMobileMenu();
    MBB.scrollLessonTop();
  };

  MBB.enableChapter = (startsWith, onOpen) => {
    const menu = document.getElementById('lessonMenu');
    if (!menu) return null;
    const button = $$('.menu-item', menu).find((item) => item.textContent.trim().startsWith(startsWith));
    if (!button) return null;
    button.disabled = false;
    button.title = '';
    button.classList.remove('pending');
    button.addEventListener('click', () => {
      MBB.setActiveMenu(button);
      if (typeof onOpen === 'function') onOpen(button);
    });
    return button;
  };
})();