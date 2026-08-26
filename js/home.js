(() => {
  const areasView = document.getElementById('areas');
  const moduleViews = Array.from(document.querySelectorAll('.modules-view[data-area]'));

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

    moduleViews.forEach((view) => {
      view.hidden = view !== target;
    });

    if (target) {
      document.title = `${target.dataset.title} — Mundo bit Byte`;

      if (focusHeading) {
        const heading = target.querySelector('h2[tabindex="-1"]');
        if (heading) {
          heading.focus({ preventScroll: true });
        }
      }
    } else {
      document.title = defaultTitle;
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
