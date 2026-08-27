(() => {
  function bindDiagnostic(root) {
    const button = root.querySelector('#checkDiagnostic');
    const result = root.querySelector('#diagnosticResult');
    if (!button || !result) return;

    button.addEventListener('click', () => {
      const questions = [...root.querySelectorAll('[data-diagnostic-question]')];
      let answered = 0;
      let correct = 0;

      questions.forEach((question) => {
        const checked = question.querySelector('input[type="radio"]:checked');
        if (!checked) return;
        answered += 1;
        if (checked.value === question.dataset.answer) correct += 1;
      });

      if (answered < questions.length) {
        result.className = 'quiz-result note-box';
        result.innerHTML = `<strong>Faltam respostas.</strong> Você respondeu ${answered} de ${questions.length}. Complete as demais antes de conferir.`;
        return;
      }

      result.className = 'quiz-result ok-box';
      if (correct === questions.length) {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Você já reconhece vários conceitos centrais. O módulo agora vai conectá-los e aprofundar o entendimento.`;
      } else if (correct >= 3) {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Você já possui algumas referências. As aulas vão organizar essas ideias e preencher as lacunas.`;
      } else {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Há bastante coisa nova para construir — exatamente a função deste módulo. O resultado não vale nota.`;
      }
    });
  }

  function bindClassifier(root) {
    const button = root.querySelector('#checkClassifier');
    const feedback = root.querySelector('#classifierFeedback');
    if (!button || !feedback) return;

    button.addEventListener('click', () => {
      const rows = [...root.querySelectorAll('#roleClassifier .classifier-row')];
      let answered = 0;
      let correct = 0;

      rows.forEach((row) => {
        const select = row.querySelector('select');
        if (!select?.value) return;
        answered += 1;
        if (select.value === row.dataset.answer) correct += 1;
      });

      if (answered < rows.length) {
        feedback.className = 'classifier-feedback note-box';
        feedback.innerHTML = `<strong>Complete o laboratório.</strong> Você classificou ${answered} de ${rows.length} itens.`;
        return;
      }

      if (correct === rows.length) {
        feedback.className = 'classifier-feedback ok-box';
        feedback.innerHTML = `<strong>${correct}/${rows.length}.</strong> Perfeito. Repare especialmente que touchscreen e placa de rede participam tanto da entrada quanto da saída de dados.`;
      } else {
        feedback.className = 'classifier-feedback note-box';
        feedback.innerHTML = `<strong>${correct}/${rows.length}.</strong> Reveja a função predominante de cada componente. Dica: touchscreen e placa de rede trabalham nos dois sentidos.`;
      }
    });
  }

  window.initFundamentosInformaticaInteractions = (root) => {
    bindDiagnostic(root);
    bindClassifier(root);
  };
})();