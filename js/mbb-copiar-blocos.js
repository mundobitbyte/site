/* Mundo bit Byte: copia o código original sem alterar as quebras ou a indentação. */
(() => {
  'use strict';

  const blocks = document.querySelectorAll('.chapter .code-block > pre');
  if (!blocks.length) return;

  function copiarFallback(texto) {
    const caixa = document.createElement('textarea');
    caixa.value = texto;
    caixa.readOnly = true;
    caixa.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(caixa);
    caixa.select();
    try {
      return document.execCommand('copy');
    } catch (_) {
      return false;
    } finally {
      caixa.remove();
    }
  }

  blocks.forEach(pre => {
    const bloco = pre.parentElement;
    if (bloco.querySelector('.mbb-copiar-comando')) return;
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'mbb-copiar-comando';
    botao.textContent = 'Copiar';
    botao.setAttribute('aria-label', 'Copiar código original');
    botao.setAttribute('aria-live', 'polite');
    bloco.insertBefore(botao, pre);
    botao.addEventListener('click', async () => {
      const codigo = (pre.querySelector('code') || pre).textContent;
      let sucesso = false;
      try {
        if (navigator.clipboard?.writeText && window.isSecureContext) {
          await navigator.clipboard.writeText(codigo);
          sucesso = true;
        } else {
          sucesso = copiarFallback(codigo);
        }
      } catch (_) {
        sucesso = copiarFallback(codigo);
      }
      botao.textContent = sucesso ? 'Copiado!' : 'Não foi possível copiar';
      botao.classList.toggle('mbb-copia-erro', !sucesso);
      clearTimeout(botao.mbbTimer);
      botao.mbbTimer = setTimeout(() => {
        botao.textContent = 'Copiar';
        botao.classList.remove('mbb-copia-erro');
      }, 2000);
    });
  });
})();
