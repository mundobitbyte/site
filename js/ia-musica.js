(() => {
  'use strict';
  document.getElementById('im-copiar').addEventListener('click', async () => {
    const status = document.getElementById('im-copia-status');
    try { await navigator.clipboard.writeText(document.getElementById('im-comando').textContent); status.textContent = ' Exemplo copiado.'; }
    catch (_) { status.textContent = ' Selecione o exemplo e copie manualmente.'; }
  });
})();
