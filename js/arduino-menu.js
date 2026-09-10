(() => {
  if(window.__mbbArduinoMenuCarregado) return;
  window.__mbbArduinoMenuCarregado = true;

  const modulos = [
    { numero: '5', href: 'arduino-programacao-aplicada.html', texto: '5. Programação Aplicada' },
    { numero: '6', href: 'arduino-conectividade.html', texto: '6. Conectividade' },
    { numero: '7', href: 'arduino-iot.html', texto: '7. Internet das Coisas' },
    { numero: '8', href: 'arduino-protocolos.html', texto: '8. RTOS e Protocolos' },
    { numero: '9', href: 'arduino-seguranca.html', texto: '9. Proteção e Segurança' },
    { numero: '10', href: 'arduino-projeto-iot.html', texto: '10. Projeto IoT' }
  ];

  function numeroDoItem(item){
    const texto = (item.textContent || '').trim();
    const match = texto.match(/^(\d+)\./);
    return match ? match[1] : null;
  }

  function encontrarExercicios(menu){
    return Array.from(menu.querySelectorAll('.module-btn')).find(item => {
      const href = item.getAttribute('href') || '';
      const texto = (item.textContent || '').trim();
      return href === 'arduino-exercicios.html' || /^99\./.test(texto);
    }) || null;
  }

  function removerDuplicados(menu){
    const vistos = new Map();

    Array.from(menu.querySelectorAll('.module-btn')).forEach(item => {
      const numero = numeroDoItem(item);
      if(!numero || !modulos.some(modulo => modulo.numero === numero)) return;

      const anterior = vistos.get(numero);
      if(!anterior){
        vistos.set(numero, item);
        return;
      }

      if(item.classList.contains('active') && !anterior.classList.contains('active')){
        anterior.remove();
        vistos.set(numero, item);
      }else{
        item.remove();
      }
    });
  }

  function garantirModulos(menu){
    const exercicios = encontrarExercicios(menu);

    modulos.forEach(modulo => {
      const existente = Array.from(menu.querySelectorAll('.module-btn')).find(item => numeroDoItem(item) === modulo.numero);
      if(existente) return;

      const link = document.createElement('a');
      link.className = 'module-btn';
      link.href = modulo.href;
      link.textContent = modulo.texto;
      link.style.textDecoration = 'none';

      if(exercicios) menu.insertBefore(link, exercicios);
      else menu.appendChild(link);
    });
  }

  function normalizarOrdem(menu){
    const exercicios = encontrarExercicios(menu);

    modulos.forEach(modulo => {
      const item = Array.from(menu.querySelectorAll('.module-btn')).find(elemento => numeroDoItem(elemento) === modulo.numero);
      if(!item) return;

      if(exercicios) menu.insertBefore(item, exercicios);
      else menu.appendChild(item);
    });
  }

  function sincronizarModulos(){
    const menu = document.getElementById('arduinoModuleMenu');
    if(!menu) return;

    removerDuplicados(menu);
    garantirModulos(menu);
    removerDuplicados(menu);
    normalizarOrdem(menu);
  }

  function manterModuloAtivoVisivel(){
    const menu = document.getElementById('arduinoModuleMenu');
    const ativo = menu && menu.querySelector('.module-btn.active');
    if(!menu || !ativo) return;

    requestAnimationFrame(() => {
      const margem = 12;
      const menuRect = menu.getBoundingClientRect();
      const itemRect = ativo.getBoundingClientRect();
      const maximo = Math.max(0, menu.scrollWidth - menu.clientWidth);
      let destino = menu.scrollLeft;

      if(itemRect.left < menuRect.left + margem){
        destino -= (menuRect.left + margem) - itemRect.left;
      }else if(itemRect.right > menuRect.right - margem){
        destino += itemRect.right - (menuRect.right - margem);
      }else{
        return;
      }

      menu.scrollLeft = Math.min(maximo, Math.max(0, destino));
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

  window.addEventListener('pageshow', iniciar);
  window.addEventListener('resize', manterModuloAtivoVisivel);
})();
