(() => {
  'use strict';

  const lesson = document.getElementById('lesson');
  const stepTitle = document.getElementById('stepTitle');
  if (!lesson || !stepTitle) return;

  function injectBackendCard() {
    if (stepTitle.textContent.trim() !== 'O que realmente deve ficar') return;
    if (lesson.querySelector('[data-backend-fastapi-card]')) return;

    const footer = lesson.querySelector('.lesson-footer');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-backend-fastapi-card', 'true');
    wrapper.innerHTML = `
      <h3>Continue evoluindo</h3>
      <a class="link-card" href="backend-fastapi.html">
        <strong>Backend e APIs com Python e FastAPI</strong><br>
        Construa uma API passo a passo a partir de um sistema de Água, Gás e Utilidades: cliente-servidor, HTTP, REST, FastAPI, validação, erros e CRUD.
      </a>`;

    if (footer) lesson.insertBefore(wrapper, footer);
    else lesson.appendChild(wrapper);
  }

  const observer = new MutationObserver(injectBackendCard);
  observer.observe(lesson, { childList: true });
  injectBackendCard();
})();
