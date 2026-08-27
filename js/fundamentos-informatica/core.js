(() => {
  const lessons = Array.isArray(window.fundamentosInformaticaLessons)
    ? window.fundamentosInformaticaLessons
    : [];

  const moduleHome = document.getElementById('moduleHome');
  const courseView = document.getElementById('courseView');
  const startModule = document.getElementById('startModule');
  const backToHome = document.getElementById('backToHome');
  const lessonMenu = document.getElementById('lessonMenu');
  const openMenu = document.getElementById('openMenu');
  const unitName = document.getElementById('unitName');
  const technicalTitle = document.getElementById('technicalTitle');
  const lessonTitle = document.getElementById('lessonTitle');
  const lessonObjective = document.getElementById('lessonObjective');
  const lessonContent = document.getElementById('lessonContent');

  let currentLessonId = null;

  function getShortTitle(lesson) {
    return lesson?.menuTitle || lesson?.title || '';
  }

  function enterCourse(id = lessons[0]?.id) {
    if (!id) return;
    moduleHome.hidden = true;
    courseView.hidden = false;
    showLesson(id);
  }

  function leaveCourse() {
    courseView.hidden = true;
    moduleHome.hidden = false;
    lessonMenu.classList.remove('open');
    openMenu?.setAttribute('aria-expanded', 'false');
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderMenu() {
    lessonMenu.innerHTML = '';
    let lastUnit = '';

    lessons.forEach((lesson) => {
      if (lesson.unit !== lastUnit) {
        const group = document.createElement('div');
        group.className = 'menu-group-title';
        group.textContent = lesson.unit;
        lessonMenu.appendChild(group);
        lastUnit = lesson.unit;
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'menu-item';
      button.dataset.lessonId = lesson.id;
      button.textContent = `${lesson.number}. ${getShortTitle(lesson)}`;
      button.addEventListener('click', () => {
        showLesson(lesson.id);
        lessonMenu.classList.remove('open');
        openMenu?.setAttribute('aria-expanded', 'false');
      });
      lessonMenu.appendChild(button);
    });
  }

  function showLesson(id) {
    const lesson = lessons.find((item) => item.id === id) || lessons[0];
    if (!lesson) return;

    currentLessonId = lesson.id;
    unitName.textContent = lesson.unit;
    technicalTitle.textContent = lesson.technicalTitle;
    lessonTitle.textContent = `${lesson.number}. ${lesson.title}`;
    lessonObjective.textContent = lesson.objective;
    lessonContent.innerHTML = lesson.content;
    lessonContent.scrollTop = 0;

    lessonMenu.querySelectorAll('.menu-item').forEach((button) => {
      button.classList.toggle('active', button.dataset.lessonId === lesson.id);
    });

    if (typeof window.initFundamentosInformaticaInteractions === 'function') {
      window.initFundamentosInformaticaInteractions(lessonContent);
    }
    appendLessonNavigation(lesson.id);

    const wantedHash = `#${lesson.id}`;
    if (window.location.hash !== wantedHash) {
      history.replaceState(null, '', wantedHash);
    }
  }

  function appendLessonNavigation(id) {
    const index = lessons.findIndex((lesson) => lesson.id === id);
    if (index < 0) return;

    const nav = document.createElement('div');
    nav.className = 'quiz-actions';
    nav.setAttribute('aria-label', 'Navegação entre aulas');

    if (index > 0) {
      const previous = document.createElement('button');
      previous.type = 'button';
      previous.className = 'action-button';
      previous.textContent = `← ${lessons[index - 1].number}. ${getShortTitle(lessons[index - 1])}`;
      previous.addEventListener('click', () => showLesson(lessons[index - 1].id));
      nav.appendChild(previous);
    }

    if (index < lessons.length - 1) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'action-button primary';
      next.textContent = `${lessons[index + 1].number}. ${getShortTitle(lessons[index + 1])} →`;
      next.addEventListener('click', () => showLesson(lessons[index + 1].id));
      nav.appendChild(next);
    }

    if (nav.childElementCount) lessonContent.appendChild(nav);
  }

  startModule?.addEventListener('click', () => enterCourse('diagnostico'));
  backToHome?.addEventListener('click', leaveCourse);

  openMenu?.addEventListener('click', () => {
    const isOpen = lessonMenu.classList.toggle('open');
    openMenu.setAttribute('aria-expanded', String(isOpen));
  });

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#', '');
    if (!id || id === currentLessonId) return;
    if (lessons.some((lesson) => lesson.id === id)) enterCourse(id);
  });

  renderMenu();

  const initialId = window.location.hash.replace('#', '');
  if (initialId && lessons.some((lesson) => lesson.id === initialId)) {
    enterCourse(initialId);
  }
})();