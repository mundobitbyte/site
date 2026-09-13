(() => {
  'use strict';
  if (typeof pensarSteps === 'undefined') return;

  const step = pensarSteps.find(item => item.id === 44);
  if (!step || typeof step.content !== 'string') return;

  step.content = step.content
    .replace('viewBox="0 0 700 1010"', 'viewBox="0 0 760 1060"')
    .replace(
      '<path class="arrow" d="M420 566H451"></path><polygon points="460,566 448,559 448,573" fill="#1e3a8a"></polygon>',
      '<path class="arrow" d="M420 566H481"></path><polygon points="490,566 478,559 478,573" fill="#1e3a8a"></polygon>'
    )
    .replace(
      '<text class="branch-label" x="440" y="549" text-anchor="middle">NÃO</text>',
      '<text class="branch-label" x="455" y="535" text-anchor="middle">NÃO</text>'
    )
    .replace(
      '<rect class="node process" x="460" y="539" width="220" height="54" rx="2"></rect><text class="node-title" x="570" y="572" text-anchor="middle">totalFinal = total</text>',
      '<rect class="node process" x="490" y="539" width="220" height="54" rx="2"></rect><text class="node-title" x="600" y="572" text-anchor="middle">totalFinal = total</text>'
    )
    .replace(
      '<path class="arrow" d="M570 593V840H327"></path>',
      '<path class="arrow" d="M600 593V840H327"></path>'
    );

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;
  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
