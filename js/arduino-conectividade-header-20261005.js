// Ajuste de cabeçalho dos módulos 5 a 10 de Sistemas Embarcados e IoT.
// Atua somente nessa família de páginas; módulos 1 a 4, exercícios e demais cursos ficam fora.
(() => {
  const paginasPermitidas = new Set([
    '/arduino-programacao-aplicada.html',
    '/arduino-conectividade.html',
    '/arduino-iot.html',
    '/arduino-protocolos.html',
    '/arduino-seguranca.html',
    '/arduino-projeto-iot.html'
  ]);

  const caminho = location.pathname || '';
  const paginaAtual = Array.from(paginasPermitidas).find(final => caminho.endsWith(final));
  if (!paginaAtual) return;
  if (document.getElementById('mbb-arduino-5a10-header-fix')) return;

  const style = document.createElement('style');
  style.id = 'mbb-arduino-5a10-header-fix';
  style.textContent = `
    body > header .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
      flex: 1 1 auto;
    }

    body > header .header-left h1 {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    body > header .mbb-busca-global.mbb-busca-global,
    body > header .brand {
      flex: 0 0 auto;
    }

    body > header .brand {
      white-space: nowrap;
    }

    @media (max-width: 1180px) {
      body > header .mbb-busca-global.mbb-busca-global {
        width: 36px;
        height: 36px;
        min-width: 36px;
        min-height: 36px;
        flex: 0 0 36px;
        padding: 0;
        border-radius: 50%;
        font-size: 0 !important;
      }
      body > header .mbb-busca-global::before {
        width: 18px;
        height: 18px;
        flex-basis: 18px;
      }
    }
  `;
  document.head.appendChild(style);
})();
