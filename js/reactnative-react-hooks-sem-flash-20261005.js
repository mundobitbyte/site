// React e Hooks — evita o flash do quadro preto vazio na primeira abertura.
// Atua somente no módulo 2 (state). Não altera Interfaces nem etapas que possuem código.

(() => {
  const MODULE_KEY = 'state';

  function getStep(id) {
    if (typeof modules === 'undefined' || typeof currentModuleKey === 'undefined') return null;
    if (currentModuleKey !== MODULE_KEY) return null;

    const activeModule = modules[currentModuleKey];
    if (!activeModule || !Array.isArray(activeModule.steps)) return null;

    if (id !== undefined && id !== null) {
      return activeModule.steps.find(step => String(step.id) === String(id)) || null;
    }

    return activeModule.steps.find(step => {
      const button = document.getElementById(`btn-${currentModuleKey}-${step.id}`);
      return button && button.classList.contains('active');
    }) || activeModule.steps[0] || null;
  }

  function hideEmptyCodeCard(id) {
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== MODULE_KEY) return;

    const step = getStep(id);
    const hasCode = Boolean(step && typeof step.code === 'string' && step.code.trim().length > 0);
    if (hasCode) return;

    const codeCard = document.getElementById('codeCard');
    if (codeCard) codeCard.style.setProperty('display', 'none', 'important');
  }

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbReactHooksNoEmptyCodeFlash(id) {
      const result = previousShowStep.apply(this, arguments);
      hideEmptyCodeCard(id);
      window.requestAnimationFrame(() => hideEmptyCodeCard(id));
      return result;
    };
  }

  hideEmptyCodeCard();
})();
