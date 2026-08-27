(() => {
  'use strict';

  function bindDiagnostic(root) {
    const button = root.querySelector('#checkDiagnostic');
    const result = root.querySelector('#diagnosticResult');
    if (!button || !result) return;

    const topicNames = {
      hardware: 'Hardware e memória',
      software: 'Software e arquivos',
      redes: 'Redes e Internet',
      sistemas: 'Sistemas computacionais'
    };

    button.addEventListener('click', () => {
      const questions = [...root.querySelectorAll('[data-diagnostic-question]')];
      const unanswered = questions.filter((question) => !question.querySelector('input[type="radio"]:checked'));

      if (unanswered.length) {
        result.className = 'quiz-result note-box';
        result.innerHTML = `<strong>Complete o mapa.</strong><p>Ainda faltam ${unanswered.length} ${unanswered.length === 1 ? 'situação' : 'situações'}. Se estiver em dúvida, marque a alternativa que parece mais lógica agora.</p>`;
        unanswered[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const stats = {};
      const review = [];

      questions.forEach((question, index) => {
        const checked = question.querySelector('input[type="radio"]:checked');
        const topic = question.dataset.topic || 'outros';
        const isCorrect = checked.value === question.dataset.answer;

        stats[topic] ||= { correct: 0, total: 0 };
        stats[topic].total += 1;
        if (isCorrect) stats[topic].correct += 1;
        else review.push({ number: index + 1, explanation: question.dataset.explanation || '' });

        question.classList.toggle('is-correct', isCorrect);
        question.classList.toggle('is-wrong', !isCorrect);
      });

      const cards = Object.entries(topicNames).map(([topic, name]) => {
        const stat = stats[topic] || { correct: 0, total: 0 };
        let reading = 'vamos construir este eixo desde o início';
        if (stat.correct === stat.total) reading = 'a ideia inicial já está bem firme';
        else if (stat.correct > 0) reading = 'há uma base, mas ainda existe algo para organizar';
        return `<article class="diagnostic-map-card"><strong>${name}</strong><span>${stat.correct}/${stat.total}</span><p>${reading}.</p></article>`;
      }).join('');

      const reviewHtml = review.length
        ? `<details class="diagnostic-review"><summary>Ver os pontos que merecem revisão</summary><ol>${review.map((item) => `<li><strong>Situação ${item.number}:</strong> ${item.explanation}</li>`).join('')}</ol></details>`
        : `<div class="ok-box compact-box"><strong>Seu ponto de partida está muito consistente.</strong><p>Mesmo assim, o módulo não será uma revisão de definições: vamos conectar essas ideias e entender por que funcionam.</p></div>`;

      result.className = 'quiz-result diagnostic-result';
      result.innerHTML = `
        <div class="diagnostic-result-head">
          <span class="card-title">Seu mapa inicial</span>
          <p>Não há nota final. O que interessa é enxergar em quais áreas seu modelo mental já está firme e onde o módulo pode acrescentar mais.</p>
        </div>
        <div class="diagnostic-map-grid">${cards}</div>
        ${reviewHtml}
        <div class="bridge-box compact-box"><strong>Próximo passo:</strong><p>na Aula 01, vamos começar por uma pergunta aparentemente simples e surpreendentemente difícil: <em>o que é, afinal, um computador?</em></p></div>
      `;
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
