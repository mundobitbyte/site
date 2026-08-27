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
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Você já reconhece vários conceitos centrais. O módulo agora vai conectá-los e mostrar como eles funcionam juntos.`;
      } else if (correct >= 3) {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Você já possui boas referências. As aulas vão organizar essas ideias e preencher o que ainda estiver solto.`;
      } else {
        result.innerHTML = `<strong>${correct}/${questions.length}.</strong> Há bastante coisa para construir — exatamente a função deste módulo. O resultado não vale nota.`;
      }
    });
  }

  function bindDeviceClassifier(root) {
    const button = root.querySelector('#checkDeviceClassifier');
    const feedback = root.querySelector('#deviceClassifierFeedback');
    if (!button || !feedback) return;

    button.addEventListener('click', () => {
      const rows = [...root.querySelectorAll('#deviceClassifier .classifier-row')];
      const unanswered = rows.filter((row) => !row.querySelector('select')?.value);

      if (unanswered.length) {
        feedback.className = 'classifier-feedback note-box';
        feedback.innerHTML = `<strong>Faça uma aposta em todos os casos.</strong> Ainda faltam ${unanswered.length} ${unanswered.length === 1 ? 'item' : 'itens'}.`;
        return;
      }

      let correct = 0;
      rows.forEach((row) => {
        const select = row.querySelector('select');
        const isCorrect = select.value === row.dataset.answer;
        if (isCorrect) correct += 1;
        row.classList.toggle('is-correct', isCorrect);
        row.classList.toggle('is-wrong', !isCorrect);
      });

      const explanations = rows.map((row) => {
        const mark = row.querySelector('select').value === row.dataset.answer ? '✓' : '↺';
        return `<li><strong>${mark} ${row.querySelector('strong').textContent}:</strong> ${row.dataset.explanation}</li>`;
      }).join('');

      feedback.className = `classifier-feedback ${correct === rows.length ? 'ok-box' : 'note-box'}`;
      feedback.innerHTML = `<strong>${correct}/${rows.length}.</strong> Mais importante que a pontuação é perceber o critério.<ul class="feedback-list">${explanations}</ul>`;
    });
  }

  const initializers = [bindDiagnostic, bindDeviceClassifier];

  window.initFundamentosInformaticaInteractions = (root) => {
    initializers.forEach((initialize) => initialize(root));
  };
})();