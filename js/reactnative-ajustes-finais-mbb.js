// Ajustes finais da lapidação MbB.
// Corrige textos residuais de bastidor/terceira pessoa e mantém os exercícios unificados funcionais.

if (typeof modules !== 'undefined') {
  const interfaceExercise = modules.interfaceBasica?.steps?.find(
    step => step.id === 'exercicios-interface-flexbox'
  );

  if (interfaceExercise && typeof interfaceExercise.html === 'string') {
    // Os exercícios originais de Interface usam showExerciseInterface() e
    // esperam os IDs exercise-clean-N. Flexbox não usa esses IDs, então
    // podemos restaurá-los sem colisão.
    interfaceExercise.html = interfaceExercise.html
      .replaceAll('if-exercise-clean-', 'exercise-clean-');
  }

  // React e Hooks: mantém a Consolidação integrada dentro do mesmo bloco
  // .exercise-clean dos exercícios antigos. Isso evita o grande espaço
  // vertical causado por dois blocos com height:100% e faz as miniaturas
  // voltarem a controlar as seções corretas pelo showExerciseInterface().
  const reactExercise = modules.state?.steps?.find(
    step => step.id === 'exercicios-state'
  );

  if (
    reactExercise &&
    typeof reactExercise.html === 'string' &&
    reactExercise.html.includes('Consolidação integrada')
  ) {
    const template = document.createElement('template');
    template.innerHTML = reactExercise.html.trim();

    const roots = Array.from(template.content.children).filter(element =>
      element.classList?.contains('exercise-clean')
    );

    const integratedRoot = roots.find(root =>
      root.textContent?.includes('Consolidação integrada')
    );

    const originalRoot = roots.find(root =>
      root !== integratedRoot && root.querySelector('.exercise-menu-panel')
    );

    const integratedPanel = integratedRoot?.querySelector('.panel.brief');

    if (integratedPanel && originalRoot) {
      const oldTop = originalRoot.querySelector('.topline.exercise-clean-top');
      const panelCopy = integratedPanel.cloneNode(true);

      if (oldTop) {
        oldTop.insertAdjacentElement('beforebegin', panelCopy);
      } else {
        originalRoot.prepend(panelCopy);
      }

      reactExercise.html = originalRoot.outerHTML;
    }
  }

  const learnerTextReplacements = new Map([
    [
      'Antes de escrever muitos comandos, o aluno precisa entender uma ideia central: a interface de um aplicativo é formada por componentes organizados dentro de outros componentes.',
      'Antes de escrever muitos comandos, você precisa entender uma ideia central: a interface de um aplicativo é formada por componentes organizados dentro de outros componentes.'
    ],
    [
      'Ao final, o aluno entende a tela como blocos organizados.',
      'Ao final, você entende a tela como blocos organizados.'
    ],
    [
      'Quando o aluno entende qual parte do app cada bloco representa, o código deixa de parecer comandos soltos e passa a ser uma estrutura organizada.',
      'Quando você entende qual parte do app cada bloco representa, o código deixa de parecer comandos soltos e passa a ser uma estrutura organizada.'
    ],
    [
      'Barra inferior conecta o aluno com padrões de apps reais.',
      'Esse tipo de barra inferior aparece em muitos aplicativos reais.'
    ],
    [
      'Orientação ao aluno:',
      'Orientação:'
    ],
    [
      'latitude e longitude não precisam aparecer na tela do app, mas devem ser entendidas pelo aluno.',
      'latitude e longitude não precisam aparecer na tela do app, mas é importante entender que elas identificam a posição usada na consulta.'
    ]
  ]);

  function cleanLearnerFacingText(root = document.body) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      let text = node.nodeValue;
      learnerTextReplacements.forEach((replacement, original) => {
        if (text.includes(original)) {
          text = text.replaceAll(original, replacement);
        }
      });
      node.nodeValue = text;
    });
  }

  if (typeof showStep === 'function') {
    const showStepMbbBase = showStep;
    showStep = function (...args) {
      const result = showStepMbbBase.apply(this, args);
      cleanLearnerFacingText();
      return result;
    };
  }

  cleanLearnerFacingText();
}
