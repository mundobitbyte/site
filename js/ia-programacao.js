document.addEventListener('DOMContentLoaded', () => {
  const deveIgnorar = (elemento) => {
    if (elemento.classList.contains('prompt') && elemento.closest('.bad')) {
      return true;
    }

    if (elemento.classList.contains('code')) {
      const texto = elemento.innerText.trim();

      if (
        texto.startsWith('FileNotFoundError:') ||
        texto.startsWith('ModuleNotFoundError:') ||
        texto.startsWith('projeto_emprestimos/')
      ) {
        return true;
      }

      if (elemento.closest('.grid-2') && (elemento.closest('.bad') || elemento.closest('.good'))) {
        return true;
      }
    }

    return false;
  };

  const copiarTexto = async (texto) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return;
    }

    const area = document.createElement('textarea');
    area.value = texto;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  };

  document.querySelectorAll('.prompt, pre.code').forEach((elemento) => {
    if (deveIgnorar(elemento) || elemento.closest('.copy-wrap')) {
      return;
    }

    const envoltorio = document.createElement('div');
    envoltorio.className = 'copy-wrap';

    elemento.parentNode.insertBefore(envoltorio, elemento);
    envoltorio.appendChild(elemento);

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'copy-btn';
    botao.textContent = 'Copiar';
    botao.setAttribute('aria-label', 'Copiar conteúdo');
    botao.title = 'Copiar para a área de transferência';

    botao.addEventListener('click', async () => {
      const textoOriginal = botao.textContent;

      try {
        await copiarTexto(elemento.innerText);
        botao.textContent = 'Copiado!';
        botao.classList.add('copied');
      } catch (erro) {
        botao.textContent = 'Não copiou';
      }

      window.setTimeout(() => {
        botao.textContent = textoOriginal;
        botao.classList.remove('copied');
      }, 1600);
    });

    envoltorio.appendChild(botao);
  });
});
