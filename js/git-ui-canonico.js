(() => {
  const lessonEl = document.getElementById('lesson');
  const checkpointUrl = '../assets/git-github-checkpoint-comandos.txt?v=7';

  lessonEl.addEventListener('click', async event => {
    const copyButton = event.target.closest('[data-copy-text],[data-rede-copy]');
    if (copyButton) {
      const text = copyButton.getAttribute('data-copy-text') || copyButton.getAttribute('data-rede-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      const original = copyButton.textContent;
      copyButton.textContent = 'Copiado!';
      copyButton.classList.add('copied');
      window.setTimeout(() => {
        copyButton.textContent = original;
        copyButton.classList.remove('copied');
      }, 1400);
      return;
    }

    if (event.target.closest('[data-checkpoint-open]')) {
      window.open(checkpointUrl, '_blank', 'noopener');
      return;
    }

    if (event.target.closest('[data-checkpoint-download]')) {
      const link = document.createElement('a');
      link.href = checkpointUrl;
      link.download = 'git-github-checkpoint-comandos.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  });

  window.__MBB_GIT_CANONICAL_SNAPSHOT__ = {
    gitSteps: JSON.parse(JSON.stringify(gitSteps)),
    githubSteps: JSON.parse(JSON.stringify(githubSteps)),
    exerciseSteps: JSON.parse(JSON.stringify(exerciseSteps)),
    commandSteps: JSON.parse(JSON.stringify(commandSteps))
  };
  window.__MBB_GIT_CANONICAL_READY__ = true;
})();
