document.addEventListener('DOMContentLoaded', () => {
  const storageKey = 'mbb-academia-react-native-do-zero';
  const totalChapters = 19;
  const body = document.body;

  const readProgress = () => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || { chapters: [], steps: {} };
    } catch (error) {
      return { chapters: [], steps: {} };
    }
  };

  const writeProgress = progress => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  };

  const updateProgress = () => {
    const progress = readProgress();
    const completed = new Set(progress.chapters || []);
    const percentage = Math.round((completed.size / totalChapters) * 100);

    document.querySelectorAll('[data-course-progress-bar]').forEach(bar => {
      bar.style.width = `${percentage}%`;
    });

    document.querySelectorAll('[data-course-progress-text]').forEach(label => {
      label.textContent = `${completed.size}/${totalChapters} capítulos`;
    });

    document.querySelectorAll('[data-chapter-card]').forEach(card => {
      const chapter = card.dataset.chapterCard;
      const isComplete = completed.has(chapter);
      card.classList.toggle('is-complete', isComplete);
      const status = card.querySelector('[data-chapter-status]');
      if (status && isComplete) status.textContent = 'Concluído neste dispositivo';
    });

    const currentChapter = body.dataset.chapter;
    const completeButton = document.querySelector('[data-complete-chapter]');
    if (completeButton && currentChapter && completed.has(currentChapter)) {
      completeButton.classList.add('is-complete');
      completeButton.textContent = 'Capítulo concluído neste dispositivo';
    }
  };

  document.querySelectorAll('[data-copy-code]').forEach(button => {
    button.addEventListener('click', async () => {
      const wrapper = button.closest('.code-card');
      const code = wrapper?.querySelector('code');
      if (!code) return;

      const originalLabel = button.textContent;
      try {
        await navigator.clipboard.writeText(code.textContent.replace(/^\n|\n$/g, ''));
        button.textContent = 'Copiado';
      } catch (error) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Código selecionado';
      }

      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1800);
    });
  });

  document.querySelectorAll('[data-step-check]').forEach(input => {
    const progress = readProgress();
    input.checked = Boolean(progress.steps?.[input.id]);

    input.addEventListener('change', () => {
      const updated = readProgress();
      updated.steps = updated.steps || {};
      updated.steps[input.id] = input.checked;
      writeProgress(updated);
    });
  });

  document.querySelectorAll('[data-complete-chapter]').forEach(button => {
    button.addEventListener('click', () => {
      const chapter = body.dataset.chapter;
      if (!chapter) return;
      const progress = readProgress();
      progress.chapters = Array.from(new Set([...(progress.chapters || []), chapter]));
      writeProgress(progress);
      updateProgress();
    });
  });

  document.querySelectorAll('[data-video-src]').forEach(slot => {
    const source = slot.dataset.videoSrc;
    if (!source) return;
    const iframe = document.createElement('iframe');
    iframe.src = source;
    iframe.title = slot.dataset.videoTitle || 'Vídeo de apoio';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    slot.appendChild(iframe);
    slot.hidden = false;
  });

  updateProgress();
});
