(() => {
  if(window.__mbbArduinoMenuCarregado) return;
  window.__mbbArduinoMenuCarregado = true;

  const modulos = [
    ['arduino-programacao-aplicada.html', '5. Programação Aplicada'],
    ['arduino-conectividade.html', '6. Conectividade'],
    ['arduino-iot.html', '7. Internet das Coisas'],
    ['arduino-protocolos.html', '8. RTOS e Protocolos'],
    ['arduino-seguranca.html', '9. Proteção e Segurança'],
    ['arduino-projeto-iot.html', '10. Projeto IoT']
  ];

  function encontrarExercicios(menu){
    return Array.from(menu.querySelectorAll('.module-btn')).find(item => {
      const href = item.getAttribute('href') || '';
      return href === 'arduino-exercicios.html' || href === '#topo' || /^99\./.test(item.textContent.trim());
    }) || null;
  }

  function sincronizarModulos(){
    const menu = document.getElementById('arduinoModuleMenu');
    if(!menu) return;

    const exercicios = encontrarExercicios(menu);

    modulos.forEach(([href, texto]) => {
      if(menu.querySelector(`a[href="${href}"]`)) return;

      const link = document.createElement('a');
      link.className = 'module-btn';
      link.href = href;
      link.textContent = texto;
      link.style.textDecoration = 'none';

      if(exercicios) menu.insertBefore(link, exercicios);
      else menu.appendChild(link);
    });
  }

  function manterModuloAtivoVisivel(){
    const menu = document.getElementById('arduinoModuleMenu');
    const ativo = menu && menu.querySelector('.module-btn.active');
    if(!menu || !ativo) return;

    requestAnimationFrame(() => {
      const menuRect = menu.getBoundingClientRect();
      const itemRect = ativo.getBoundingClientRect();
      const alvo = menu.scrollLeft + (itemRect.left - menuRect.left) - ((menu.clientWidth - itemRect.width) / 2);
      const maximo = Math.max(0, menu.scrollWidth - menu.clientWidth);
      menu.scrollLeft = Math.min(maximo, Math.max(0, alvo));
    });
  }

  function iniciar(){
    sincronizarModulos();
    manterModuloAtivoVisivel();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', iniciar);
  }else{
    iniciar();
  }

  window.addEventListener('pageshow', manterModuloAtivoVisivel);
  window.addEventListener('resize', manterModuloAtivoVisivel);
})();
