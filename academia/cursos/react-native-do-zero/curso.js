document.addEventListener('DOMContentLoaded', () => {
  const CHAVES = ['rn-cap-0', 'rn-cap-1', 'rn-cap-2'];

  document.querySelectorAll('.rn-copy').forEach(botao => {
    botao.addEventListener('click', async () => {
      const alvo = document.getElementById(botao.dataset.copyTarget);
      if (!alvo) return;
      const texto = alvo.innerText;
      try {
        await navigator.clipboard.writeText(texto);
        const anterior = botao.textContent;
        botao.textContent = 'Copiado';
        setTimeout(() => botao.textContent = anterior, 1300);
      } catch {
        botao.textContent = 'Selecione e copie';
      }
    });
  });

  document.querySelectorAll('[data-complete-key]').forEach(botao => {
    const chave = botao.dataset.completeKey;
    const atualizar = () => {
      const concluido = localStorage.getItem(chave) === '1';
      botao.classList.toggle('is-done', concluido);
      botao.textContent = concluido ? 'Capítulo concluído' : 'Marcar capítulo como concluído';
      botao.setAttribute('aria-pressed', concluido ? 'true' : 'false');
    };
    atualizar();
    botao.addEventListener('click', () => {
      const concluido = localStorage.getItem(chave) === '1';
      localStorage.setItem(chave, concluido ? '0' : '1');
      atualizar();
      atualizarProgresso();
    });
  });

  function atualizarProgresso(){
    const concluidos = CHAVES.filter(chave => localStorage.getItem(chave) === '1').length;
    const percentual = Math.round((concluidos / CHAVES.length) * 100);
    document.querySelectorAll('[data-rn-progress-bar]').forEach(el => {
      el.style.width = `${percentual}%`;
    });
    document.querySelectorAll('[data-rn-progress-text]').forEach(el => {
      el.textContent = `${percentual}%`;
    });
    document.querySelectorAll('[data-rn-progress-count]').forEach(el => {
      el.textContent = `${concluidos} de ${CHAVES.length}`;
    });
    document.querySelectorAll('[data-chapter-key]').forEach(el => {
      const concluido = localStorage.getItem(el.dataset.chapterKey) === '1';
      el.textContent = concluido ? 'Concluído' : 'Disponível';
      el.dataset.done = concluido ? '1' : '0';
    });
  }

  atualizarProgresso();
});
