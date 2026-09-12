const flowSteps = document.querySelectorAll('.flow-step');
const flowDetail = document.getElementById('flowDetail');

flowSteps.forEach(step => {
  step.addEventListener('click', () => {
    flowSteps.forEach(s => s.classList.remove('active'));
    step.classList.add('active');

    if (flowDetail) {
      flowDetail.textContent = step.dataset.info;
    }
  });
});

function copyPrompt(button) {
  const promptBox = button.closest('.prompt');
  const text = promptBox.querySelector('.prompt-text')
    ? promptBox.querySelector('.prompt-text').innerText
    : promptBox.innerText.replace('Copiar', '').trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = 'Copiado!';
    button.classList.add('copied');

    setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1400);
  });
}

function toggleBox(id) {
  const box = document.getElementById(id);
  if (box) box.classList.toggle('show');
}

// Atualização 2026: endereço principal do ChatGPT.
document.querySelectorAll('a[href="https://chat.openai.com/"]').forEach(link => {
  link.href = 'https://chatgpt.com/';
});

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');
  const links = Array.from(document.querySelectorAll('.side-link[href^="#"]'));
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!main || !links.length || !sections.length) return;

  const hashesValidos = new Set(links.map(link => link.getAttribute('href')));
  const isMobile = () => window.matchMedia('(max-width: 980px)').matches;

  function normalizarHash(hash) {
    return hashesValidos.has(hash) ? hash : '#inicio';
  }

  function setActive(hash) {
    const destino = normalizarHash(hash);
    links.forEach(link => {
      const active = link.getAttribute('href') === destino;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function showPanel(hash, updateHistory) {
    const destino = normalizarHash(hash);
    const target = document.querySelector(destino);
    if (!target) return;

    sections.forEach(section => section.classList.remove('active-panel'));
    target.classList.add('active-panel');
    setActive(destino);

    if (updateHistory && window.location.hash !== destino) {
      history.pushState(null, '', destino);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function configurarModo() {
    if (isMobile()) {
      main.classList.remove('panel-nav-ready');
      sections.forEach(section => section.classList.remove('active-panel'));
      setActive(window.location.hash || '#inicio');
      return;
    }

    main.classList.add('panel-nav-ready');
    showPanel(window.location.hash || '#inicio', false);
  }

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const hash = this.getAttribute('href');

      if (isMobile()) {
        setActive(hash);
        return; // deixa a âncora nativa rolar até o tópico
      }

      event.preventDefault();
      showPanel(hash, true);
    });
  });

  document.addEventListener('click', function (event) {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || anchor.classList.contains('side-link')) return;

    const hash = anchor.getAttribute('href');
    if (!hashesValidos.has(hash)) return;

    if (isMobile()) {
      setActive(hash);
      return;
    }

    event.preventDefault();
    showPanel(hash, true);
  });

  window.addEventListener('hashchange', function () {
    if (isMobile()) setActive(window.location.hash || '#inicio');
    else showPanel(window.location.hash || '#inicio', false);
  });

  window.addEventListener('popstate', function () {
    if (isMobile()) setActive(window.location.hash || '#inicio');
    else showPanel(window.location.hash || '#inicio', false);
  });

  let ultimoModoMobile = isMobile();
  window.addEventListener('resize', function () {
    const atual = isMobile();
    if (atual !== ultimoModoMobile) {
      ultimoModoMobile = atual;
      configurarModo();
    }
  });

  configurarModo();
});
