// React Native — evita o flash do quadro preto vazio na primeira abertura.
// Atua em todos os módulos, mas somente quando a etapa não possui código real.
// Etapas com código continuam usando exatamente o comportamento existente.

(() => {
  function getStep(id) {
    if (typeof modules === 'undefined' || typeof currentModuleKey === 'undefined') return null;

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
    const step = getStep(id);
    const hasCode = Boolean(step && typeof step.code === 'string' && step.code.trim().length > 0);
    if (hasCode) return;

    const codeCard = document.getElementById('codeCard');
    if (codeCard) codeCard.style.setProperty('display', 'none', 'important');

    const newCodeCard = document.getElementById('newCodeCard');
    if (newCodeCard) newCodeCard.style.setProperty('display', 'none', 'important');
  }

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function mbbReactNativeNoEmptyCodeFlash(id) {
      const result = previousShowStep.apply(this, arguments);
      hideEmptyCodeCard(id);
      window.requestAnimationFrame(() => hideEmptyCodeCard(id));
      return result;
    };
  }

  // Também protege a primeira pintura da página, antes de qualquer clique do usuário.
  hideEmptyCodeCard();
})();
