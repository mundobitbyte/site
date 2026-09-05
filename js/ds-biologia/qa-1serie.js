(() => {
  'use strict';

  const MBB = window.MBBBiologia = window.MBBBiologia || {};
  if (MBB.qaFirstSeriesReady || typeof MBB.showLesson !== 'function') return;
  MBB.qaFirstSeriesReady = true;

  const previousShowLesson = MBB.showLesson;

  function finalizeChapter99(root) {
    if (!root || root.dataset.bio99QaReady === 'true') return;
    root.dataset.bio99QaReady = 'true';

    const challengeTitles = [...root.querySelectorAll('.challenge-box > strong')];
    challengeTitles.forEach(title => {
      const text = title.textContent.trim();
      const match = text.match(/^(4[1-6])\.\s*(.+)$/);
      if (match) {
        const number = Number(match[1]) - 40;
        title.textContent = `Desafio ${number} — ${match[2]}`;
      }
      if (text.startsWith('Desafio final da auditoria')) {
        title.textContent = 'Desafio 7 — da bacia à evolução';
      }
    });

    [...root.querySelectorAll('table tbody tr')].forEach(row => {
      const firstCell = row.cells?.[0];
      if (firstCell?.textContent.trim() === 'seleção e filogenia') {
        firstCell.textContent = 'seleção, filogenia, espécie e especiação';
      }
    });
  }

  MBB.showLesson = (config = {}) => {
    const adjusted = { ...config };

    if (adjusted.title === 'Por que mexer em uma espécie pode alterar todo o ecossistema?') {
      adjusted.technical = 'Ecossistemas • relações, níveis tróficos, sucessão, biomas, conservação e bacias';
      adjusted.objective = '<strong>Objetivo:</strong> compreender níveis de organização, fatores bióticos e abióticos, cadeias e teias alimentares, fluxo de energia, dinâmica populacional, sucessão, biomas, impactos ambientais, conservação e bacias hidrográficas.';
    }

    if (adjusted.title === 'Como sabemos que populações mudam ao longo das gerações?') {
      adjusted.technical = 'Evolução • seleção, espécie, especiação, filogenia e ancestralidade';
      adjusted.objective = '<strong>Objetivo:</strong> compreender mecanismos evolutivos e evidências de ancestralidade, interpretando seleção natural, conceito de espécie, especiação, homologia, filogenias, convergência, radiação adaptativa, endossimbiose e evolução humana.';
    }

    previousShowLesson(adjusted);

    if (adjusted.title === 'Você consegue usar a Biologia para explicar sistemas vivos?') {
      finalizeChapter99(document.getElementById('lessonContent'));
    }
  };
})();
