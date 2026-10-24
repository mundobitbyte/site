(function () {
  "use strict";
  if (!document.querySelector(".web3-typescript")) return;
  function legacyCopyFallback(text) {
    if (typeof document.execCommand !== "function") return false;

    const previousFocus = document.activeElement;
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      return document.execCommand("copy");
    } catch (error) {
      return false;
    } finally {
      textArea.remove();
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus({ preventScroll: true });
      }
    }
  }

  function setupCopyButtons() {
    document.querySelectorAll("pre.code-block").forEach((codeBlock) => {
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrap";
      codeBlock.before(wrapper);
      wrapper.appendChild(codeBlock);

      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.type = "button";
      button.textContent = "Copiar";
      button.setAttribute("aria-label", "Copiar código");
      button.setAttribute("aria-live", "polite");
      wrapper.appendChild(button);

      button.addEventListener("click", async () => {
        let copied = false;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(codeBlock.textContent);
            copied = true;
          } else {
            copied = legacyCopyFallback(codeBlock.textContent);
          }
        } catch (error) {
          // Último recurso para navegadores sem a API moderna de Clipboard.
          copied = legacyCopyFallback(codeBlock.textContent);
        }

        button.textContent = copied ? "Copiado!" : "Não foi possível";
        button.classList.toggle("copy-error", !copied);
        window.clearTimeout(button.resetTimer);
        button.resetTimer = window.setTimeout(() => {
          button.textContent = "Copiar";
          button.classList.remove("copy-error");
        }, 1800);
      });
    });
  }

  const topics = [...document.querySelectorAll('[data-ts-topic]')];
  const select = document.getElementById('ts-topico');
  const links = [...document.querySelectorAll('[data-ts-link]')];
  const content = document.getElementById('conteudo');
  let focusRequested = false;
  function reveal(target) {
    if (window.innerWidth > 1050) {
      const top = target ? content.scrollTop + target.getBoundingClientRect().top - content.getBoundingClientRect().top - 20 : 0;
      content.scrollTo({top, behavior: 'instant'});
    } else if (!target || target.tagName === 'H2') {
      window.scrollTo({top: 0, behavior: 'instant'});
    } else {
      target.scrollIntoView({block: 'start', behavior: 'instant'});
      const menuHeight = document.querySelector('.chapter-menu').getBoundingClientRect().height;
      window.scrollBy({top: -menuHeight - 20, behavior: 'instant'});
    }
  }
  function showTopic() {
    let id = '';
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { /* abre a introdução */ }
    const target = document.getElementById(id);
    const previous = topics.find(topic => !topic.hidden) || topics[0];
    const current = target?.closest('[data-ts-topic]') || (id === 'conteudo' ? previous : topics[0]);
    topics.forEach(topic => { topic.hidden = topic !== current; });
    links.forEach(link => {
      const active = link.dataset.tsLink === current.id;
      link.classList.toggle('active', active);
      if (active && link.classList.contains('chapter-link')) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    select.value = current.id;
    const heading = current.querySelector('h2');
    document.title = heading.textContent + ' | Mundo bit Byte';
    if (focusRequested) {
      heading.focus({preventScroll: true});
      reveal();
      focusRequested = false;
    } else if (target && target !== current) {
      requestAnimationFrame(() => reveal(target));
    }
  }
  links.forEach(link => link.addEventListener('click', () => {
    focusRequested = true;
    if (location.hash === '#' + link.dataset.tsLink) showTopic();
  }));
  select.addEventListener('change', () => {
    focusRequested = true;
    location.hash = select.value;
  });
  window.addEventListener('hashchange', showTopic);
  window.addEventListener('popstate', showTopic);
  document.body.classList.add('js-ready');
  setupCopyButtons();
  showTopic();
})();
