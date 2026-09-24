(function () {
  if (typeof steps === 'undefined' || typeof exerciseLevels === 'undefined') return;

  const integrationId = 'visualg-atividade-boletim';
  const challengeId = 'visualg-nivel-7';

  // 1. Mantém a atividade integradora entre Modularização e Desafios.
  const currentIndex = exerciseLevels.findIndex((item) => item.id === integrationId);
  let integrationItem = currentIndex >= 0
    ? exerciseLevels.splice(currentIndex, 1)[0]
    : { id: integrationId, label: 'Integração' };

  integrationItem.label = 'Integração';

  const challengeIndex = exerciseLevels.findIndex((item) => item.id === challengeId);
  if (challengeIndex >= 0) {
    exerciseLevels.splice(challengeIndex, 0, integrationItem);
  } else {
    exerciseLevels.push(integrationItem);
  }

  // 2. Move também a seção da atividade para a mesma posição no conteúdo.
  const exercises = steps.find((item) => item.id === 99);
  if (exercises && typeof exercises.content === 'string' && exercises.content.includes('mbb-atividade-boletim')) {
    const holder = document.createElement('div');
    holder.innerHTML = exercises.content;

    const integrationSection = holder.querySelector('#mbb-atividade-boletim');
    const levels = Array.from(holder.querySelectorAll('.exercise-level'));
    const challengeSection = levels.find((section) => {
      const title = section.querySelector('h3');
      return title && /^Nível 7\s*[—-]\s*Desafios/i.test(title.textContent.trim());
    });

    if (integrationSection && challengeSection) {
      challengeSection.parentNode.insertBefore(integrationSection, challengeSection);
      exercises.content = holder.innerHTML;
    }
  }

  // 3. Ao navegar pelos exercícios, deixa o título da seção com respiro visual.
  if (typeof goToExerciseLevel === 'function') {
    goToExerciseLevel = function (levelId) {
      showStep(99);
      if (typeof markActiveExerciseLevel === 'function') markActiveExerciseLevel(levelId);

      const target = document.getElementById(levelId);
      const intro = document.getElementById('introView');
      if (!target || !intro) return;

      const isIntegration = levelId === integrationId;

      if (typeof isMobileMenu === 'function' && isMobileMenu()) {
        // Integração já estava visualmente equilibrada. Os demais níveis recebem
        // um espaço extra abaixo do menu fixo para o título não ficar colado no topo.
        const topGap = isIntegration ? 170 : 210;
        const y = target.getBoundingClientRect().top + window.pageYOffset - topGap;
        window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
        if (typeof closeExerciseMenu === 'function') closeExerciseMenu();
      } else {
        // Calcula a posição em relação ao painel rolável, em vez de depender de offsetTop.
        // Isso mantém a distância do título consistente entre todas as seções.
        const introRect = intro.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const targetTop = intro.scrollTop + (targetRect.top - introRect.top);
        const topGap = isIntegration ? 72 : 112;
        intro.scrollTo({ top: Math.max(0, targetTop - topGap), behavior: 'auto' });
      }
    };
  }

  // 4. Reconstrói apenas a navegação para refletir a ordem corrigida.
  const nav = document.getElementById('menu');
  if (nav && typeof buildMenu === 'function') {
    nav.innerHTML = '<h3>Etapas</h3>';
    buildMenu();
    if (typeof showStep === 'function') showStep(0);
  }
})();
