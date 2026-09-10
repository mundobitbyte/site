(() => {
  if(window.__mbbArduinoMenuEstavel) return;
  window.__mbbArduinoMenuEstavel = true;

  const definicoes = [
    { numero: '5', href: 'arduino-programacao-aplicada.html', texto: '5. Programação Aplicada' },
    { numero: '6', href: 'arduino-conectividade.html', texto: '6. Conectividade' },
    { numero: '7', href: 'arduino-iot.html', texto: '7. Internet das Coisas' },
    { numero: '8', href: 'arduino-protocolos.html', texto: '8. RTOS e Protocolos' },
    { numero: '9', href: 'arduino-seguranca.html', texto: '9. Proteção e Segurança' },
    { numero: '10', href: 'arduino-projeto-iot.html', texto: '10. Projeto IoT' }
  ];

  function numeroDoItem(item){
    const match = ((item && item.textContent) || '').trim().match(/^(\d+)\./);
    return match ? match[1] : null;
  }

  function encontrar99(menu){
    return Array.from(menu.querySelectorAll('.module-btn')).find(item => /^99\./.test((item.textContent || '').trim())) || null;
  }

  function estabilizarMenu(){
    const menu = document.getElementById('arduinoModuleMenu');
    if(!menu) return;

    const ativoAntes = menu.querySelector('.module-btn.active');
    const numeroAtivo = numeroDoItem(ativoAntes);
    const exercicios = encontrar99(menu);
    const fragmento = document.createDocumentFragment();

    definicoes.forEach(def => {
      const candidatos = Array.from(menu.querySelectorAll('.module-btn')).filter(item => numeroDoItem(item) === def.numero);
      let item = candidatos.find(candidato => candidato.classList.contains('active')) || candidatos[0] || null;

      candidatos.forEach(candidato => {
        if(candidato !== item) candidato.remove();
      });

      if(!item || item.tagName !== 'A'){
        if(item) item.remove();
        item = document.createElement('a');
        item.className = 'module-btn';
      }

      item.setAttribute('href', def.href);
      item.textContent = def.texto;
      item.style.textDecoration = 'none';
      item.classList.toggle('active', numeroAtivo === def.numero);
      fragmento.appendChild(item);
    });

    if(exercicios) menu.insertBefore(fragmento, exercicios);
    else menu.appendChild(fragmento);

    const vistos = new Set();
    Array.from(menu.querySelectorAll('.module-btn')).forEach(item => {
      const numero = numeroDoItem(item);
      if(!definicoes.some(def => def.numero === numero)) return;
      if(vistos.has(numero)) item.remove();
      else vistos.add(numero);
    });

    menu.dataset.menuVersion = 'estavel-20260910';
  }

  function manterAtivoVisivel(){
    const menu = document.getElementById('arduinoModuleMenu');
    const ativo = menu && menu.querySelector('.module-btn.active');
    if(!menu || !ativo) return;

    requestAnimationFrame(() => {
      const margem = 12;
      const inicio = ativo.offsetLeft - margem;
      const fim = ativo.offsetLeft + ativo.offsetWidth + margem;
      const visivelInicio = menu.scrollLeft;
      const visivelFim = menu.scrollLeft + menu.clientWidth;
      const maximo = Math.max(0, menu.scrollWidth - menu.clientWidth);
      let destino = menu.scrollLeft;

      if(inicio < visivelInicio) destino = inicio;
      else if(fim > visivelFim) destino = fim - menu.clientWidth;
      else return;

      menu.scrollLeft = Math.min(maximo, Math.max(0, destino));
    });
  }

  function iniciar(){
    estabilizarMenu();
    manterAtivoVisivel();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  }else{
    iniciar();
  }

  window.addEventListener('pageshow', manterAtivoVisivel);
  window.addEventListener('resize', manterAtivoVisivel);
})();
