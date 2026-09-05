(() => {
  const areasView = document.getElementById('areas');
  const moduleViews = Array.from(document.querySelectorAll('.modules-view[data-area]'));

  const programacaoView = document.getElementById('programacao-desenvolvimento');
  const reactNativeCard = programacaoView?.querySelector('a.module-card[href="pages/reactnative.html"]');
  const backendCardExists = programacaoView?.querySelector('a.module-card[href="pages/backend-fastapi.html"]');

  if (programacaoView && reactNativeCard && !backendCardExists) {
    const backendCard = document.createElement('a');
    backendCard.className = 'module-card';
    backendCard.href = 'pages/backend-fastapi.html';
    backendCard.innerHTML = `
      <div class="module-head"><h3>Backend e APIs com Python e FastAPI</h3></div>
      <div class="module-body">
        <p>HTTP e FastAPI, regras de negócio, banco de dados, segurança, integração e testes de APIs.</p>
        <span class="module-label">Backend</span>
      </div>`;
    reactNativeCard.insertAdjacentElement('afterend', backendCard);
  }

  const ensinoMedioLink = document.querySelector('[data-area-link="ensino-medio"]');
  const areasGrid = ensinoMedioLink?.closest('.areas-grid');
  if (ensinoMedioLink && areasGrid) {
    areasGrid.appendChild(ensinoMedioLink);
  }

  const ensinoMedioView = document.getElementById('ensino-medio');
  const matematicaGroup = ensinoMedioView?.querySelector('[aria-labelledby="matematica-area-title"]');
  const firstSubjectGroup = ensinoMedioView?.querySelector('.subject-group');
  if (ensinoMedioView && matematicaGroup && firstSubjectGroup && matematicaGroup !== firstSubjectGroup) {
    ensinoMedioView.insertBefore(matematicaGroup, firstSubjectGroup);
  }

  const naturezaGroup = ensinoMedioView?.querySelector('[aria-labelledby="natureza-title"]');
  const fisicaPlaceholder = naturezaGroup
    ? Array.from(naturezaGroup.querySelectorAll('article.module-card.is-disabled')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Física')
    : null;

  if (fisicaPlaceholder) {
    const fisicaCard = document.createElement('a');
    fisicaCard.className = 'module-card';
    fisicaCard.href = 'ds-fisica/index.html';
    fisicaCard.innerHTML = `
      <div class="module-head"><h3>Física</h3></div>
      <div class="module-body">
        <p>Física da 1ª série com investigação de situações reais, avaliação diagnóstica, revisão adaptativa e construção gradual dos conceitos.</p>
        <span class="module-label">Diagnóstico disponível</span>
      </div>`;
    fisicaPlaceholder.replaceWith(fisicaCard);
  }

  function pageSize() {
    if (window.matchMedia('(max-width: 640px)').matches) return 2;
    if (window.matchMedia('(max-width: 980px)').matches) return 4;
    return 6;
  }

  function setupPagedGrid(grid) {
    if (!grid || grid.dataset.mbbPagerReady === 'true') return;

    const items = Array.from(grid.children).filter((item) => item.matches('.area-card, .module-card'));
    if (!items.length) return;

    grid.dataset.mbbPagerReady = 'true';
    let firstIndex = 0;
    let lastPageSize = pageSize();

    const pager = document.createElement('nav');
    pager.className = 'grid-pager';
    pager.setAttribute('aria-label', 'Navegação dos cartões');
    pager.innerHTML = `
      <button class="grid-pager-button" type="button" data-grid-prev>← Anteriores</button>
      <div class="grid-pager-status" aria-live="polite">
        <strong data-grid-range></strong>
        <span data-grid-page></span>
      </div>
      <button class="grid-pager-button" type="button" data-grid-next>Próximos →</button>`;
    grid.insertAdjacentElement('afterend', pager);

    const prev = pager.querySelector('[data-grid-prev]');
    const next = pager.querySelector('[data-grid-next]');
    const range = pager.querySelector('[data-grid-range]');
    const page = pager.querySelector('[data-grid-page]');

    function renderPager() {
      const size = pageSize();
      if (size !== lastPageSize) {
        firstIndex = Math.floor(firstIndex / size) * size;
        lastPageSize = size;
      }

      const totalPages = Math.max(1, Math.ceil(items.length / size));
      firstIndex = Math.min(firstIndex, Math.max(0, (totalPages - 1) * size));
      const currentPage = Math.floor(firstIndex / size) + 1;
      const endIndex = Math.min(firstIndex + size, items.length);

      items.forEach((item, index) => {
        item.hidden = index < firstIndex || index >= endIndex;
      });

      pager.hidden = totalPages <= 1;
      prev.disabled = firstIndex === 0;
      next.disabled = endIndex >= items.length;
      range.textContent = `${firstIndex + 1}–${endIndex} de ${items.length}`;
      page.textContent = `Página ${currentPage} de ${totalPages}`;
    }

    prev.addEventListener('click', () => {
      firstIndex = Math.max(0, firstIndex - pageSize());
      renderPager();
    });

    next.addEventListener('click', () => {
      if (firstIndex + pageSize() >= items.length) return;
      firstIndex += pageSize();
      renderPager();
    });

    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(renderPager, 100);
    });

    grid.mbbRenderPager = renderPager;
    renderPager();
  }

  function setupSubjectNavigation() {
    if (!ensinoMedioView || ensinoMedioView.dataset.subjectNavReady === 'true') return;
    const groups = Array.from(ensinoMedioView.querySelectorAll(':scope > .subject-group'));
    if (groups.length <= 1) return;

    ensinoMedioView.dataset.subjectNavReady = 'true';
    const nav = document.createElement('nav');
    nav.className = 'subject-nav';
    nav.setAttribute('aria-label', 'Áreas do conhecimento do Ensino Médio');

    const buttons = groups.map((group, index) => {
      const heading = group.querySelector('.subject-group-heading h3');
      if (!group.id) group.id = `ensino-medio-area-${index + 1}`;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'subject-nav-button';
      button.textContent = heading?.textContent?.trim() || `Área ${index + 1}`;
      button.setAttribute('aria-controls', group.id);
      button.setAttribute('aria-pressed', 'false');
      nav.appendChild(button);
      return button;
    });

    const headingBlock = ensinoMedioView.querySelector('.view-heading');
    headingBlock?.insertAdjacentElement('afterend', nav);

    function activate(index) {
      groups.forEach((group, groupIndex) => {
        const active = groupIndex === index;
        group.hidden = !active;
        buttons[groupIndex].classList.toggle('active', active);
        buttons[groupIndex].setAttribute('aria-pressed', String(active));
        if (active) {
          group.querySelectorAll('.modules-grid').forEach((grid) => grid.mbbRenderPager?.());
        }
      });
    }

    buttons.forEach((button, index) => button.addEventListener('click', () => activate(index)));
    activate(0);
  }

  document.querySelectorAll('.areas-grid, .modules-grid').forEach(setupPagedGrid);
  setupSubjectNavigation();

  if (!areasView || moduleViews.length === 0) {
    return;
  }

  const defaultTitle = 'Mundo bit Byte — Materiais Didáticos';
  const validAreas = new Set(moduleViews.map((view) => view.dataset.area));
  const areaLinks = Array.from(document.querySelectorAll('[data-area-link]'));
  const backLinks = Array.from(document.querySelectorAll('[data-back]'));

  function areaFromLocation() {
    let hash = window.location.hash.replace(/^#/, '');

    try {
      hash = decodeURIComponent(hash);
    } catch (_) {
      return null;
    }

    return validAreas.has(hash) ? hash : null;
  }

  function render(area, options = {}) {
    const { focusHeading = false, scrollTop = false } = options;
    const target = area ? moduleViews.find((view) => view.dataset.area === area) : null;

    areasView.hidden = Boolean(target);
    document.body.classList.toggle('mbb-subview', Boolean(target));

    moduleViews.forEach((view) => {
      view.hidden = view !== target;
    });

    if (target) {
      document.title = `${target.dataset.title} — Mundo bit Byte`;
      target.querySelectorAll('.areas-grid, .modules-grid').forEach((grid) => grid.mbbRenderPager?.());

      if (focusHeading) {
        const heading = target.querySelector('h2[tabindex="-1"]');
        if (heading) {
          heading.focus({ preventScroll: true });
        }
      }
    } else {
      document.title = defaultTitle;
      areasView.querySelectorAll('.areas-grid').forEach((grid) => grid.mbbRenderPager?.());
    }

    if (scrollTop) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }

  function openArea(area) {
    if (!validAreas.has(area)) {
      return;
    }

    history.pushState(
      { mbbView: 'area', area, fromMbbHome: true },
      '',
      `#${encodeURIComponent(area)}`
    );

    render(area, { focusHeading: true, scrollTop: true });
  }

  function returnToAreas() {
    if (history.state && history.state.mbbView === 'area' && history.state.fromMbbHome) {
      history.back();
      return;
    }

    history.replaceState(
      { mbbView: 'home' },
      '',
      `${window.location.pathname}${window.location.search}`
    );

    render(null, { focusHeading: false, scrollTop: true });

    const areasTitle = document.getElementById('areas-title');
    if (areasTitle) {
      areasTitle.setAttribute('tabindex', '-1');
      areasTitle.focus({ preventScroll: true });
      areasTitle.addEventListener('blur', () => areasTitle.removeAttribute('tabindex'), { once: true });
    }
  }

  areaLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const area = link.dataset.areaLink;
      if (!validAreas.has(area)) {
        return;
      }

      event.preventDefault();
      openArea(area);
    });
  });

  backLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      returnToAreas();
    });
  });

  window.addEventListener('popstate', () => {
    render(areaFromLocation(), { focusHeading: true, scrollTop: true });
  });

  window.addEventListener('hashchange', () => {
    render(areaFromLocation(), { focusHeading: true, scrollTop: true });
  });

  const initialArea = areaFromLocation();

  if (initialArea) {
    history.replaceState(
      { mbbView: 'direct-area', area: initialArea },
      '',
      window.location.href
    );
  } else {
    history.replaceState(
      { mbbView: 'home' },
      '',
      `${window.location.pathname}${window.location.search}`
    );
  }

  document.documentElement.classList.add('js-ready');
  render(initialArea, { focusHeading: false, scrollTop: Boolean(initialArea) });
})();