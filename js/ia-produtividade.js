function copyPrompt(button) {
  const promptBox = button.closest('.prompt');
  if (!promptBox) return;

  const textEl = promptBox.querySelector('.prompt-text');
  const text = textEl ? textEl.innerText.trim() : promptBox.innerText.replace('Copiar', '').trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = 'Copiado!';
    button.classList.add('copied');

    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1400);
  });
}
