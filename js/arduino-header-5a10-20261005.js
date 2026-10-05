// Cabeçalho dos módulos 5 a 10 seguindo o mesmo padrão estável usado nos módulos 1 a 4.
// A única adaptação extra é reconhecer celular em modo PC pelo ponteiro de toque.
(() => {
  const paginasPermitidas = [
    '/arduino-programacao-aplicada.html',
    '/arduino-conectividade.html',
    '/arduino-iot.html',
    '/arduino-protocolos.html',
    '/arduino-seguranca.html',
    '/arduino-projeto-iot.html'
  ];

  if (!paginasPermitidas.some(final => (location.pathname || '').endsWith(final))) return;

  const style = document.createElement('style');
  style.id = 'mbb-arduino-header-5a10-style';
  style.textContent = `
    body > header{
      height:46px!important;
      min-height:46px!important;
      max-height:46px!important;
      padding:0 16px!important;
      display:flex!important;
      flex-direction:row!important;
      align-items:center!important;
      justify-content:space-between!important;
      gap:12px!important;
      text-align:left!important;
    }

    body > header .header-left{
      display:flex!important;
      flex-direction:row!important;
      align-items:center!important;
      justify-content:flex-start!important;
      gap:12px!important;
      min-width:0!important;
      flex:1 1 auto!important;
      text-align:left!important;
    }

    body > header h1{
      margin:0!important;
      text-align:left!important;
      min-width:0!important;
      overflow:hidden!important;
      text-overflow:ellipsis!important;
      white-space:nowrap!important;
    }

    body > header .brand{
      margin-left:auto!important;
      text-align:right!important;
      flex:0 0 auto!important;
    }

    #arduinoModuleMenu .module-btn{
      font-family:inherit!important;
    }

    #arduinoModuleMenu.module-menu{
      top:46px!important;
      background:#fff!important;
      opacity:1!important;
      backdrop-filter:none!important;
      -webkit-backdrop-filter:none!important;
    }

    @media(max-width:760px), (pointer:coarse){
      body > header{
        padding:0 10px!important;
        gap:8px!important;
      }

      body > header .header-left{
        gap:8px!important;
      }

      body > header .brand{
        display:none!important;
      }
    }
  `;
  document.head.appendChild(style);
})();
