(() => {
  'use strict';
  if (typeof pensarSteps === 'undefined') return;

  const step = pensarSteps.find(item => item.id === 44);
  if (!step || typeof step.content !== 'string') return;

  const svgDecisaoCorrigido = `
    <svg class="flowchart-svg-v3" viewBox="0 0 680 1135" role="img" aria-label="Fluxograma de decisão com exibição do total antes da entrada do valor pago">
      <ellipse class="node terminal" cx="260" cy="35" rx="72" ry="25"></ellipse>
      <text class="node-title" x="260" y="41" text-anchor="middle">INÍCIO</text>

      <path class="arrow" d="M260 60V79"></path><polygon points="260,88 253,76 267,76" fill="#1e3a8a"></polygon>
      <path class="node display" d="M134 91 H382 Q410 91 410 118 Q410 145 382 145 H134 L110 118 Z"></path>
      <text class="node-title" x="265" y="123" text-anchor="middle">&quot;Digite o preço do produto&quot;</text>

      <path class="arrow" d="M260 145V165"></path><polygon points="260,174 253,162 267,162" fill="#1e3a8a"></polygon>
      <polygon class="node manual-input" points="150,191 370,177 370,231 150,231"></polygon>
      <text class="node-title" x="260" y="210" text-anchor="middle">preco</text>

      <path class="arrow" d="M260 231V251"></path><polygon points="260,260 253,248 267,248" fill="#1e3a8a"></polygon>
      <path class="node display" d="M134 263 H382 Q410 263 410 290 Q410 317 382 317 H134 L110 290 Z"></path>
      <text class="node-title" x="265" y="295" text-anchor="middle">&quot;Digite a quantidade&quot;</text>

      <path class="arrow" d="M260 317V337"></path><polygon points="260,346 253,334 267,346" fill="#1e3a8a"></polygon>
      <polygon class="node manual-input" points="150,363 370,349 370,403 150,403"></polygon>
      <text class="node-title" x="260" y="382" text-anchor="middle">quantidade</text>

      <path class="arrow" d="M260 403V423"></path><polygon points="260,432 253,420 267,432" fill="#1e3a8a"></polygon>
      <rect class="node process" x="120" y="435" width="280" height="54" rx="2"></rect>
      <text class="node-title" x="260" y="468" text-anchor="middle">total = preco * quantidade</text>

      <path class="arrow" d="M260 489V509"></path><polygon points="260,518 253,506 267,518" fill="#1e3a8a"></polygon>
      <path class="node display" d="M134 521 H382 Q410 521 410 548 Q410 575 382 575 H134 L110 548 Z"></path>
      <text class="node-title" x="265" y="553" text-anchor="middle">&quot;Total = &quot;, total</text>

      <path class="arrow" d="M260 575V595"></path><polygon points="260,604 253,592 267,604" fill="#1e3a8a"></polygon>
      <path class="node display" d="M134 607 H382 Q410 607 410 634 Q410 661 382 661 H134 L110 634 Z"></path>
      <text class="node-title" x="265" y="639" text-anchor="middle">&quot;Digite o valor pago&quot;</text>

      <path class="arrow" d="M260 661V681"></path><polygon points="260,690 253,678 267,690" fill="#1e3a8a"></polygon>
      <polygon class="node manual-input" points="150,707 370,693 370,747 150,747"></polygon>
      <text class="node-title" x="260" y="726" text-anchor="middle">valorPago</text>

      <path class="arrow" d="M260 747V772"></path><polygon points="260,781 253,769 267,781" fill="#1e3a8a"></polygon>
      <polygon class="node decision" points="260,786 380,845 260,904 140,845"></polygon>
      <text class="node-title" x="260" y="838" text-anchor="middle">valorPago</text>
      <text class="node-title" x="260" y="858" text-anchor="middle">&gt;= total?</text>

      <path class="arrow" d="M260 904V929"></path><polygon points="260,938 253,926 267,938" fill="#1e3a8a"></polygon>
      <text class="branch-label" x="280" y="922" text-anchor="start">SIM</text>
      <rect class="node process" x="125" y="941" width="270" height="54" rx="2"></rect>
      <text class="node-title" x="260" y="974" text-anchor="middle">troco = valorPago - total</text>

      <path class="arrow" d="M260 995V1015"></path><polygon points="260,1024 253,1012 267,1024" fill="#1e3a8a"></polygon>
      <path class="node display" d="M134 1027 H382 Q410 1027 410 1054 Q410 1081 382 1081 H134 L110 1054 Z"></path>
      <text class="node-title" x="265" y="1059" text-anchor="middle">&quot;Troco = &quot;, troco</text>
      <path class="arrow" d="M260 1081V1092"></path><polygon points="260,1101 253,1089 267,1101" fill="#1e3a8a"></polygon>
      <ellipse class="node terminal" cx="260" cy="1110" rx="72" ry="25"></ellipse>
      <text class="node-title" x="260" y="1116" text-anchor="middle">FIM</text>

      <path class="arrow" d="M380 845H470"></path><polygon points="479,845 467,838 467,852" fill="#1e3a8a"></polygon>
      <text class="branch-label" x="425" y="829" text-anchor="middle">NÃO</text>
      <path class="node display" d="M505 813 H632 Q657 813 657 845 Q657 877 632 877 H505 L480 845 Z"></path>
      <text class="node-title" x="568" y="840" text-anchor="middle">&quot;Valor</text>
      <text class="node-text" x="568" y="859" text-anchor="middle">insuficiente&quot;</text>
      <path class="arrow" d="M568 877V901"></path><polygon points="568,910 561,898 575,910" fill="#1e3a8a"></polygon>
      <ellipse class="node terminal" cx="568" cy="934" rx="60" ry="23"></ellipse>
      <text class="node-title" x="568" y="940" text-anchor="middle">FIM</text>
    </svg>`;

  step.content = step.content
    .replace(
      /<svg class="flowchart-svg-v3"[\s\S]*?<\/svg>/,
      svgDecisaoCorrigido
    )
    .replace(
      'Depois de calcular o total, o sistema precisa pedir o valor pago. Só pode calcular o troco quando <code>valorPago &gt;= total</code>.',
      'Depois de calcular o total, o sistema primeiro exibe <code>&quot;Total = &quot;, total</code>. Só então pede o valor pago. O troco só pode ser calculado quando <code>valorPago &gt;= total</code>.'
    );

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;
})();
