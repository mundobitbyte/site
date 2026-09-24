(() => {
  'use strict';

  if (typeof visualgSteps === 'undefined') return;

  const laboratorioVisuAlg = visualgSteps.find(step => step && /Cantina executável/i.test(step.menu || '')) || visualgSteps[0];
  if (laboratorioVisuAlg && typeof laboratorioVisuAlg.content === 'string' && !laboratorioVisuAlg.content.includes('href="visualg.html"')) {
    laboratorioVisuAlg.content += `
      <div class="task-box">
        <h4>Aprofunde em VisuAlg</h4>
        <p>Aqui o VisuAlg funciona como laboratório para transformar raciocínio em código, executar rapidamente e observar o resultado. Se quiser praticar a linguagem com mais exercícios, estruturas e desafios progressivos, continue no módulo específico.</p>
        <p><a href="visualg.html"><strong>Ir para o módulo VisuAlg →</strong></a></p>
      </div>`;
  }

  const transferenciaPython = visualgSteps.find(step => step && /A linguagem muda/i.test(step.menu || ''));
  if (transferenciaPython && typeof transferenciaPython.content === 'string' && !transferenciaPython.content.includes('href="python.html"')) {
    transferenciaPython.content += `
      <div class="task-box">
        <h4>Continue em Python</h4>
        <p>Neste tópico, o objetivo foi perceber que o problema, a lógica e as estruturas permanecem reconhecíveis quando a sintaxe muda. No módulo Python, você prepara o ambiente, aprende a linguagem em profundidade e constrói projetos progressivamente.</p>
        <p><a href="python.html"><strong>Ir para o módulo Python →</strong></a></p>
      </div>`;
  }

  if (typeof stepGroups !== 'undefined') {
    stepGroups.visualg = visualgSteps;
  }

  if (typeof currentModule !== 'undefined' && currentModule === 'visualg') {
    if (typeof renderMenu === 'function') renderMenu();
    if (typeof renderStep === 'function') renderStep();
  }
})();