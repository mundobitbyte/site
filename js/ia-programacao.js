// IA e Programação — botão Copiar alinhado ao padrão usado no módulo Arduino.
function copyCode(id){
  const code = document.getElementById(id);
  if(code && navigator.clipboard){
    navigator.clipboard.writeText(code.textContent);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let contador = 0;

  const deveIgnorar = (elemento) => {
    if (elemento.classList.contains('prompt') && elemento.closest('.bad')) {
      return true;
    }

    if (elemento.classList.contains('code')) {
      const texto = elemento.innerText.trim();
      const secao = elemento.closest('section.card');
      const titulo = secao?.querySelector('h2')?.textContent || '';

      if (
        texto.startsWith('FileNotFoundError:') ||
        texto.startsWith('ModuleNotFoundError:') ||
        texto.startsWith('projeto_emprestimos/') ||
        texto.includes('# Windows PowerShell') ||
        titulo.startsWith('13.')
      ) {
        return true;
      }
    }

    return false;
  };

  document.querySelectorAll('.prompt, pre.code').forEach((elemento) => {
    if (deveIgnorar(elemento) || elemento.closest('.copy-wrap')) {
      return;
    }

    contador += 1;
    const id = elemento.id || `ia-copy-${contador}`;
    elemento.id = id;

    const envoltorio = document.createElement('div');
    envoltorio.className = 'copy-wrap';

    elemento.parentNode.insertBefore(envoltorio, elemento);
    envoltorio.appendChild(elemento);

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'copy-btn';
    botao.textContent = 'Copiar';
    botao.setAttribute('aria-label', 'Copiar conteúdo');
    botao.title = 'Copiar';

    botao.addEventListener('click', () => {
      copyCode(id);
      botao.textContent = 'Copiado!';
      botao.classList.add('copied');

      window.setTimeout(() => {
        botao.textContent = 'Copiar';
        botao.classList.remove('copied');
      }, 1400);
    });

    envoltorio.appendChild(botao);
  });
});
