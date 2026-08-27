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
      button.textContent = `${lesson.number}. ${lesson.title}`;
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

    bindLessonInteractions(lesson.id);
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
      previous.textContent = `← ${lessons[index - 1].number}. ${lessons[index - 1].title}`;
      previous.addEventListener('click', () => showLesson(lessons[index - 1].id));
      nav.appendChild(previous);
    }

    if (index < lessons.length - 1) {
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'action-button primary';
      next.textContent = `${lessons[index + 1].number}. ${lessons[index + 1].title} →`;
      next.addEventListener('click', () => showLesson(lessons[index + 1].id));
      nav.appendChild(next);
    }

    if (nav.childElementCount) lessonContent.appendChild(nav);
  }

  function bindLessonInteractions(id) {
    if (id === 'diagnostico') bindDiagnostic();
    if (id === 'computador') bindClassifier();
  }

  function bindDiagnostic() {
    const button = document.getElementById('checkDiagnostic');
    const result = document.getElementById('diagnosticResult');
    if (!button || !result) return;

    button.addEventListener('click', () => {
      const questions = [...lessonContent.querySelectorAll('[data-diagnostic-question]')];
      let answered = 0;
      let correct = 0;

      questions.forEach((question) => {
        const checked = question.querySelector('input[type="radio"]:checked');
        if (!checked) return;
        answered += 1;
        if (checked.value === question.dataset.answer) correct += 1;
      });

      if (answered < questions.length) {
        result.className = 'quiz-result note-box';
        result.innerHTML = `<strong>Faltam respostas.</strong> Você respondeu ${answered} de ${questions.length}. Complete as demais antes de conferir.`;
        return;
      }

      result.className = 'quiz-result ok-box';
      if (correct === questions.length) {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Você já reconhece vários conceitos centrais. O módulo agora vai conectá-los e aprofundar o entendimento.`;
      } else if (correct >= 3) {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Você já possui algumas referências. As aulas vão organizar essas ideias e preencher as lacunas.`;
      } else {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Há bastante coisa nova para construir — exatamente a função deste módulo. O resultado não vale nota.`;
      }
    });
  }

  function bindClassifier() {
    const button = document.getElementById('checkClassifier');
    const feedback = document.getElementById('classifierFeedback');
    if (!button || !feedback) return;

    button.addEventListener('click', () => {
      const rows = [...lessonContent.querySelectorAll('#roleClassifier .classifier-row')];
      let answered = 0;
      let correct = 0;

      rows.forEach((row) => {
        const select = row.querySelector('select');
        if (!select?.value) return;
        answered += 1;
        if (select.value === row.dataset.answer) correct += 1;
      });

      if (answered < rows.length) {
        feedback.className = 'classifier-feedback note-box';
        feedback.innerHTML = `<strong>Complete o laboratório.</strong> Você classificou ${answered} de ${rows.length} itens.`;
        return;
      }

      if (correct === rows.length) {
        feedback.className = 'classifier-feedback ok-box';
        feedback.innerHTML = `<strong>${correct}/${rows.length}.</strong> Perfeito. Repare especialmente que touchscreen e placa de rede participam tanto da entrada quanto da saída de dados.`;
      } else {
        feedback.className = 'classifier-feedback note-box';
        feedback.innerHTML = `<strong>${correct}/${rows.length}.</strong> Reveja a função predominante de cada componente. Dica: touchscreen e placa de rede trabalham nos dois sentidos.`;
      }
    });
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
