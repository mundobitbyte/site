/* Mundo bit Byte — React Native: liberação segura das prévias (2026-10-16).
 * Corrige a moldura transitória na inicialização e nas trocas de módulo/etapa,
 * independente de PC, celular ou "Site para computador".
 * Não modifica o conteúdo, as telas, a navegação, o código ou as prévias.
 */
(() => {
  'use strict';

  const card = document.getElementById('resultCard');
  const preview = document.getElementById('preview');
  if (!card || !preview) return;

  const FLAG = 'data-mbb-preview-ready';
  let generation = 0;
  const hide = () => card.removeAttribute(FLAG);

  function getActiveStep() {
    if (typeof currentModuleKey === 'undefined' || typeof modules === 'undefined') return null;
    const activeModule = modules[currentModuleKey];
    const btn = document.querySelector('#menu .nav-btn.active');
    const prefix = 'btn-' + currentModuleKey + '-';
    if (!activeModule?.steps || !btn?.id?.startsWith(prefix)) return null;
    const id = btn.id.slice(prefix.length);
    return activeModule.steps.find(step => String(step.id) === id) || null;
  }

  function shouldDisplay() {
    const step = getActiveStep();
    if (!step || step.modulePage || step.customPage || step.exercisePage ||
        step.glossaryPage ||
        (currentModuleKey === 'interfaceBasica' && String(step.id) === '11')) return false;
    if (!preview.innerHTML.trim()) return false;
    return getComputedStyle(card).display !== 'none';
  }

  function finish(token) {
    if (token !== generation) return;
    if (!shouldDisplay()) {
      hide();
      return;
    }
    // A proteção anterior de renderização já concluiu seus dois frames.
    card.style.setProperty('visibility', 'visible', 'important');
    card.setAttribute(FLAG, '1');
  }

  function schedule(token) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      requestAnimationFrame(() => finish(token));
    }));
  }

  // O conteúdo anterior não deve ser mostrado enquanto o destino é preparado.
  document.addEventListener('click', event => {
    if (event.target.closest('#moduleMenu .module-btn, #menu .nav-btn')) hide();
  }, true);

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbShowStepPreviewReady(id) {
      hide();
      const token = ++generation;
      try {
        return previousShowStep.apply(this, arguments);
      } finally {
        schedule(token);
      }
    };
  }

  // Também protege acesso direto por URL/hash e restauração do histórico.
  window.addEventListener('hashchange', hide, true);
  window.addEventListener('pageshow', () => schedule(++generation));

  hide();
  schedule(++generation);
})();
