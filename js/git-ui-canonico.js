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

  // Padrão MbB — Etapa 1: Git local.
  // Destaca somente ações práticas do aluno. Comandos, conteúdo e imagens permanecem intactos.
  // Setas/círculos só entram quando houver alvo visual inequívoco; nesta etapa não há.
  const ACTION_STYLE_ID = 'mbb-git-acoes-praticas-style';
  const ACTION_RE = /\b(Não\s+(?:execute|faça|altere|apague|use|force)|Acesse|Escolha|Conclua|Mantenha|Abra|Procure|Confirme|Identifique|Confira|Entre|Substitua|Crie|Execute|Tente|Copie|Troque|Volte|Digite|Salve|Adicione|Registre|Veja|Use|Remova|Restaure|Compare|Altere|Liste|Investigue|Observe|Explique|Faça)\b/i;

  if (!document.getElementById(ACTION_STYLE_ID)) {
    const style = document.createElement('style');
    style.id = ACTION_STYLE_ID;
    style.textContent = '#lesson .mbb-git-action-key{font-weight:800!important;color:#123b73}';
    document.head.appendChild(style);
  }

  function emphasizeFirstAction(root) {
    if (!root || root.querySelector?.('.mbb-git-action-key')) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('strong, b, code, pre, script, style, button, kbd, samp')) {
        node = walker.nextNode();
        continue;
      }

      const text = node.nodeValue || '';
      const match = text.match(ACTION_RE);
      if (match && typeof match.index === 'number') {
        const before = text.slice(0, match.index);
        const action = match[0];
        const after = text.slice(match.index + action.length);
        const fragment = document.createDocumentFragment();

        if (before) fragment.appendChild(document.createTextNode(before));
        const strong = document.createElement('strong');
        strong.className = 'mbb-git-action-key';
        strong.textContent = action;
        fragment.appendChild(strong);
        if (after) fragment.appendChild(document.createTextNode(after));

        node.replaceWith(fragment);
        return;
      }

      node = walker.nextNode();
    }
  }

  function applyGitActionEmphasis() {
    if (typeof activeModule === 'undefined' || activeModule !== 'git') return;

    lessonEl.querySelectorAll(
      'h3, p, .note-box, .concept-box, .danger-box, .example-box, figcaption'
    ).forEach(emphasizeFirstAction);
  }

  // O renderer troca apenas o conteúdo de #lesson a cada etapa. Assim o destaque
  // reaparece ao navegar, sem alterar os dados canônicos do módulo.
  const lessonObserver = new MutationObserver(() => window.requestAnimationFrame(applyGitActionEmphasis));
  lessonObserver.observe(lessonEl, {childList:true, subtree:false});
  window.requestAnimationFrame(applyGitActionEmphasis);

  window.__MBB_GIT_CANONICAL_SNAPSHOT__ = {
    gitSteps: JSON.parse(JSON.stringify(gitSteps)),
    githubSteps: JSON.parse(JSON.stringify(githubSteps)),
    exerciseSteps: JSON.parse(JSON.stringify(exerciseSteps)),
    commandSteps: JSON.parse(JSON.stringify(commandSteps))
  };
  window.__MBB_GIT_CANONICAL_READY__ = true;
})();
