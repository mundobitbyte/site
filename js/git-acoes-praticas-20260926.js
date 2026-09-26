// Padrão MbB — Git/GitHub — Etapa 1: Git local.
// Destaca apenas ações práticas do aluno. Não altera comandos, conteúdo ou imagens.
// Marcações visuais só entram quando existe alvo inequívoco; nesta etapa não há
// captura em que uma seta/círculo possa ser posicionada com segurança.
(() => {
  const STYLE_ID = 'mbb-git-acoes-praticas-style';
  const lesson = document.getElementById('lesson');
  if (!lesson) return;

  const ACTION_RE = /\b(Não\s+(?:execute|faça|altere|apague|use|force)|Acesse|Escolha|Conclua|Mantenha|Abra|Procure|Confirme|Identifique|Confira|Entre|Substitua|Crie|Execute|Tente|Copie|Troque|Volte|Digite|Salve|Adicione|Registre|Veja|Use|Remova|Restaure|Compare|Altere|Liste|Investigue|Observe|Explique|Faça)\b/i;

  function installStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #lesson .mbb-git-action-key{
        font-weight:800!important;
        color:#123b73;
      }
    `;
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

  function apply() {
    if (typeof activeModule === 'undefined' || activeModule !== 'git') return;

    lesson.querySelectorAll(
      'h3, p, .note-box, .concept-box, .danger-box, .example-box, figcaption'
    ).forEach(emphasizeFirstAction);
  }

  installStyle();

  // O renderer troca os filhos diretos de #lesson a cada etapa. Observamos apenas
  // essa troca; os <strong> inseridos dentro dos descendentes não reativam o observer.
  const observer = new MutationObserver(() => window.requestAnimationFrame(apply));
  observer.observe(lesson, {childList:true, subtree:false});

  window.requestAnimationFrame(apply);
})();
