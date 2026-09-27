(() => {
  'use strict';
  if (window.__MBB_VISUALIZADOR_PILOTO__) return;
  window.__MBB_VISUALIZADOR_PILOTO__ = true;

  const path = location.pathname.toLowerCase();
  const VERSION = '20260927-3';

  const mark = (element, mode, title) => {
    if (!element) return false;
    const changed = element.dataset.mbbAmpliavel !== mode || element.dataset.mbbTitulo !== title;
    element.dataset.mbbAmpliavel = mode;
    element.dataset.mbbTitulo = title;
    return changed;
  };

  const markProgramacao = () => {
    let changed = false;
    document.querySelectorAll('.flowchart-panel-v3').forEach(panel => {
      const heading = panel.querySelector('.flowchart-panel-heading strong')?.textContent.trim() || '';
      const aria = panel.querySelector('svg')?.getAttribute('aria-label') || '';
      const isIntegrated = heading.startsWith('Fluxograma 4') || aria.includes('Fluxograma completo da cantina');
      if (isIntegrated) {
        changed = mark(panel, 'grafico', 'Fluxograma 4 — atendimento completo') || changed;
      }
    });
    return changed;
  };

  const markArduino = () => {
    const figure = document.querySelector('[data-mbb-circuito="b8-2"] .circuitFigure');
    return mark(figure, 'grafico', 'Referência de ligação I2C — ESP32 e LCD 16x2');
  };

  const markFundamentos = () => {
    let changed = false;
    document.querySelectorAll('#lessonContent .table-wrap').forEach(wrap => {
      const headers = [...wrap.querySelectorAll('thead th')].map(th => th.textContent.trim());
      if (headers.length === 9 && headers[0] === 'Casa' && headers[1] === '2⁷' && headers[8] === '2⁰') {
        changed = mark(wrap, 'tabela', 'Pesos das posições em um byte') || changed;
      }
    });
    return changed;
  };

  const scan = () => {
    let changed = false;
    if (path.endsWith('/pages/programacao.html')) changed = markProgramacao() || changed;
    if (path.endsWith('/pages/arduino-protocolos.html')) changed = markArduino() || changed;
    if (path.endsWith('/fundamentos-informatica/index.html')) changed = markFundamentos() || changed;
    if (changed || window.MBBVisualizador) window.MBBVisualizador?.rescan(document);
  };

  const loadAssets = () => {
    if (!document.querySelector('link[data-mbb-visualizador-global]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `../css/mbb-visualizador.css?v=${VERSION}`;
      link.dataset.mbbVisualizadorGlobal = '1';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[data-mbb-visualizador-global]')) {
      const script = document.createElement('script');
      script.src = `../js/mbb-visualizador.js?v=${VERSION}`;
      script.dataset.mbbVisualizadorGlobal = '1';
      script.addEventListener('load', scan, {once: true});
      document.body.appendChild(script);
    }
  };

  const init = () => {
    loadAssets();
    scan();
    const observer = new MutationObserver(() => scan());
    observer.observe(document.body, {childList: true, subtree: true});
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
