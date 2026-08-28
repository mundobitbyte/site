(() => {
  'use strict';

  const blocks = Array.isArray(window.backendFastapiBlocks) ? window.backendFastapiBlocks : [];
  const blockMenu = document.getElementById('blockMenu');
  const lessonMenu = document.getElementById('lessonMenu');
  const blockName = document.getElementById('blockName');
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonObjective = document.getElementById('lessonObjective');
  const lessonContent = document.getElementById('lessonContent');

  let currentBlockId = blocks[0]?.id || null;
  let currentLessonId = blocks[0]?.lessons?.[0]?.id || null;

  function getBlock(id) {
    return blocks.find((block) => block.id === id) || blocks[0];
  }

  function getLesson(block, id) {
    return block?.lessons?.find((lesson) => lesson.id === id) || block?.lessons?.[0];
  }

  function renderBlockMenu() {
    if (!blockMenu) return;
    blockMenu.innerHTML = '';

    blocks.forEach((block) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'block-btn' + (block.id === currentBlockId ? ' active' : '');
      button.textContent = block.menuTitle;
      button.addEventListener('click', () => {
        currentBlockId = block.id;
        currentLessonId = block.lessons?.[0]?.id || null;
        renderAll();
      });
      blockMenu.appendChild(button);
    });
  }

  function renderLessonMenu() {
    if (!lessonMenu) return;
    const block = getBlock(currentBlockId);
    lessonMenu.innerHTML = '<h3>Capítulos</h3>';

    (block?.lessons || []).forEach((lesson) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'nav-btn' + (lesson.id === currentLessonId ? ' active' : '');
      button.textContent = `${lesson.number} ${lesson.menuTitle}`;
      button.addEventListener('click', () => {
        currentLessonId = lesson.id;
        renderLessonMenu();
        renderLesson();
      });
      lessonMenu.appendChild(button);
    });
  }

  function appendNavigation(block, lesson) {
    const lessons = block?.lessons || [];
    const index = lessons.findIndex((item) => item.id === lesson.id);
    if (index < 0) return;

    const nav = document.createElement('nav');
    nav.className = 'lesson-navigation';
    nav.setAttribute('aria-label', 'Navegação entre capítulos');

    if (index > 0) {
      const previous = document.createElement('button');
      previous.type = 'button';
      previous.className = 'action-button';
      previous.textContent = `← ${lessons[index - 1].number}. ${lessons[index - 1].menuTitle}`;
      previous.addEventListener('click', () => {
        currentLessonId = lessons[index - 1].id;
        renderAll();
      });
      nav.appendChild(previous);
    } else {
      const blockIndex = blocks.findIndex((item) => item.id === block.id);
      if (blockIndex > 0) {
        const previousBlock = blocks[blockIndex - 1];
        const previousLesson = previousBlock.lessons[previousBlock.lessons.length - 1];
        const previous = document.createElement('button');
        previous.type = 'button';
        previous.className = 'action-button';
        previous.textContent = `← ${previousLesson.number}. ${previousLesson.menuTitle}`;
        previous.addEventListener('click', () => {
          currentBlockId = previousBlock.id;
          currentLessonId = previousLesson.id;
          renderAll();
        });
        nav.appendChild(previous);
      }
    }

    if (index < lessons.length - 1) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'action-button primary';
      next.textContent = `${lessons[index + 1].number}. ${lessons[index + 1].menuTitle} →`;
      next.addEventListener('click', () => {
        currentLessonId = lessons[index + 1].id;
        renderAll();
      });
      nav.appendChild(next);
    } else {
      const blockIndex = blocks.findIndex((item) => item.id === block.id);
      if (blockIndex < blocks.length - 1) {
        const nextBlock = blocks[blockIndex + 1];
        const nextLesson = nextBlock.lessons[0];
        const next = document.createElement('button');
        next.type = 'button';
        next.className = 'action-button primary';
        next.textContent = `${nextLesson.number}. ${nextLesson.menuTitle} →`;
        next.addEventListener('click', () => {
          currentBlockId = nextBlock.id;
          currentLessonId = nextLesson.id;
          renderAll();
        });
        nav.appendChild(next);
      }
    }

    if (nav.childElementCount) lessonContent.appendChild(nav);
  }

  function normalizeCodeSamples() {
    lessonContent?.querySelectorAll('.code-block').forEach((block) => {
      if (block.textContent.includes('.venvScriptsactivate')) {
        block.textContent = block.textContent.replace(
          '.venvScriptsactivate',
          '.venv\\Scripts\\activate'
        );
      }
    });
  }

  function renderLesson() {
    const block = getBlock(currentBlockId);
    const lesson = getLesson(block, currentLessonId);
    if (!block || !lesson || !lessonContent) return;

    currentBlockId = block.id;
    currentLessonId = lesson.id;
    blockName.textContent = block.title;
    lessonTitle.textContent = `${lesson.number}. ${lesson.title}`;
    lessonObjective.textContent = lesson.objective;
    lessonContent.innerHTML = lesson.content;
    normalizeCodeSamples();
    appendNavigation(block, lesson);

    const wantedHash = `#${lesson.id}`;
    if (window.location.hash !== wantedHash) history.replaceState(null, '', wantedHash);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function renderAll() {
    renderBlockMenu();
    renderLessonMenu();
    renderLesson();
  }

  function restoreFromHash() {
    const id = window.location.hash.replace('#', '');
    if (!id) return false;
    for (const block of blocks) {
      const lesson = block.lessons?.find((item) => item.id === id);
      if (lesson) {
        currentBlockId = block.id;
        currentLessonId = lesson.id;
        return true;
      }
    }
    return false;
  }

  window.addEventListener('hashchange', () => {
    if (restoreFromHash()) renderAll();
  });

  restoreFromHash();
  renderAll();
})();
