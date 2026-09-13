(() => {
  'use strict';
  if (typeof pensarSteps === 'undefined') return;
  const step = pensarSteps.find(item => item.id === 44);
  if (!step || typeof step.content !== 'string') return;

  step.content = step.content
    .replace('viewBox="0 0 680 1030"', 'viewBox="0 0 680 1080"')
    .replace(
      '<ellipse class="node terminal" cx="565" cy="845" rx="60" ry="23"></ellipse>',
      '<path class="arrow" d="M565 784V812"></path><polygon points="565,821 558,809 572,809" fill="#1e3a8a"></polygon><ellipse class="node terminal" cx="565" cy="845" rx="60" ry="23"></ellipse>'
    )
    .replace(
      '</svg>',
      '<ellipse class="node terminal" cx="260" cy="1046" rx="72" ry="25"></ellipse><text class="node-title" x="260" y="1052" text-anchor="middle">FIM</text></svg>'
    );

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;
})();
