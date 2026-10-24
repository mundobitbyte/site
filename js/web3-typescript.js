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
  const links = [...document.querySelectorAll('[data-ts-link]')];
  const content = document.getElementById('conteudo');
  const menu = document.getElementById('ts-topic-menu');
  const layout = document.querySelector('.web-layout');
  const drawer = document.getElementById('ts-topics-dialog');
  const drawerMenu = document.getElementById('ts-dialog-menu');
  const toggle = document.getElementById('ts-menu-toggle');
  const close = document.getElementById('ts-menu-close');
  const toolbar = document.querySelector('.ts-mobile-tools');
  const currentLabel = document.getElementById('ts-current-topic');
  const levels = document.querySelector('.level-menu');
  const smallScreen = window.matchMedia('(max-width: 1050px)');
  const supportsDialog = typeof drawer.showModal === 'function';
  let focusRequested = false;

  function closeDrawer() {
    if (drawer.open) drawer.close();
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('ts-drawer-open');
  }

  function syncMenu() {
    closeDrawer();
    if (smallScreen.matches && supportsDialog) {
      drawerMenu.appendChild(menu);
      toolbar.hidden = false;
    } else {
      layout.insertBefore(menu, content);
      toolbar.hidden = true;
    }
    document.body.style.setProperty('--ts-level-height', levels.getBoundingClientRect().height + 'px');
  }

  toggle.addEventListener('click', () => {
    drawer.showModal();
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('ts-drawer-open');
    menu.querySelector('[aria-current="location"]')?.focus();
  });
  close.addEventListener('click', closeDrawer);
  drawer.addEventListener('close', () => {
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('ts-drawer-open');
  });
  drawer.addEventListener('click', event => {
    if (event.target === drawer) closeDrawer();
  });
  drawer.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...drawer.querySelectorAll('button, a[href]')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    // Mantém o ciclo também quando a página é aberta dentro de um frame.
    if (event.shiftKey && event.target === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && event.target === last) {
      event.preventDefault();
      first.focus();
    }
  });
  // Escape usa o fechamento nativo. Escolher um tópico devolve o foco ao texto.
  menu.addEventListener('click', event => {
    if (event.target.closest('a[href]')) closeDrawer();
  });
  smallScreen.addEventListener('change', syncMenu);
  if (typeof ResizeObserver === 'function') {
    new ResizeObserver(() => {
      document.body.style.setProperty('--ts-level-height', levels.getBoundingClientRect().height + 'px');
    }).observe(levels);
  }

  function reveal(target) {
    if (window.innerWidth > 1050) {
      window.scrollTo({top: 0, behavior: 'instant'});
      const top = target ? content.scrollTop + target.getBoundingClientRect().top - content.getBoundingClientRect().top - 20 : 0;
      content.scrollTo({top, behavior: 'instant'});
    } else if (!target || target.tagName === 'H2') {
      window.scrollTo({top: 0, behavior: 'instant'});
    } else {
      target.scrollIntoView({block: 'start', behavior: 'instant'});
      const controlsHeight = levels.getBoundingClientRect().height + (toolbar.hidden ? 0 : toolbar.getBoundingClientRect().height);
      window.scrollBy({top: -controlsHeight - 20, behavior: 'instant'});
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
    currentLabel.textContent = menu.querySelector('[aria-current="location"]')?.textContent || 'Comece aqui';
    const heading = current.querySelector('h2');
    document.title = heading.textContent + ' | Mundo bit Byte';
    if (focusRequested) {
      heading.focus({preventScroll: true});
      reveal();
      focusRequested = false;
    } else if (target) {
      requestAnimationFrame(() => reveal(target));
    }
  }
  links.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    closeDrawer();
    focusRequested = true;
    if (location.hash === '#' + link.dataset.tsLink) {
      showTopic();
    } else {
      const oldURL = location.href;
      // Evita o salto nativo que recolocava o título sob as barras fixas.
      // O hash e seu evento continuam disponíveis para pesquisa e Meu MbB.
      history.pushState(null, '', link.href);
      window.dispatchEvent(new HashChangeEvent('hashchange', {oldURL, newURL: location.href}));
    }
  }));
  window.addEventListener('hashchange', showTopic);
  window.addEventListener('popstate', showTopic);
  window.addEventListener('load', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) requestAnimationFrame(() => reveal(target));
  });
  document.body.classList.add('js-ready');
  setupCopyButtons();
  syncMenu();
  showTopic();
})();
