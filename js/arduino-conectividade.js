document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

  if(!menu.querySelector('a[href="arduino-iot.html"]')){
    const link7 = document.createElement('a');
    link7.className = 'module-btn';
    link7.href = 'arduino-iot.html';
    link7.textContent = '7. Internet das Coisas';
    link7.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link7, exercicios);
    else menu.appendChild(link7);
  }

  if(!menu.querySelector('a[href="arduino-protocolos.html"]')){
    const link8 = document.createElement('a');
    link8.className = 'module-btn';
    link8.href = 'arduino-protocolos.html';
    link8.textContent = '8. RTOS e Protocolos';
    link8.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link8, exercicios);
    else menu.appendChild(link8);
  }

  if(!menu.querySelector('a[href="arduino-seguranca.html"]')){
    const link9 = document.createElement('a');
    link9.className = 'module-btn';
    link9.href = 'arduino-seguranca.html';
    link9.textContent = '9. Proteção e Segurança';
    link9.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link9, exercicios);
    else menu.appendChild(link9);
  }

  if(!menu.querySelector('a[href="arduino-projeto-iot.html"]')){
    const link10 = document.createElement('a');
    link10.className = 'module-btn';
    link10.href = 'arduino-projeto-iot.html';
    link10.textContent = '10. Projeto IoT';
    link10.style.textDecoration = 'none';
    if(exercicios) menu.insertBefore(link10, exercicios);
    else menu.appendChild(link10);
  }
});

async function copyCode(id, button){
  const code = document.getElementById(id);
  if(!code) return;

  let copiado = false;
  if(navigator.clipboard && window.isSecureContext){
    try {
      await navigator.clipboard.writeText(code.textContent);
      copiado = true;
    } catch {
      // Fallback para navegadores que bloqueiam a área de transferência.
    }
  }
  if(!copiado){
    const area = document.createElement('textarea');
    area.value = code.textContent;
    area.readOnly = true;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try {
      copiado = document.execCommand('copy');
    } catch {
      copiado = false;
    } finally {
      area.remove();
      button.focus({preventScroll:true});
    }
  }

  const status = document.getElementById('copyStatus');
  const mensagem = copiado ? 'Copiado' : 'Falha ao copiar. Selecione o código manualmente.';
  status.textContent = mensagem;
  button.textContent = mensagem;
  clearTimeout(button._mbbCopyTimer);
  button._mbbCopyTimer = setTimeout(() => { button.textContent = 'Copiar'; }, 1800);
}

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const links = Array.from(document.querySelectorAll('#stageMenu .stage-link[href^="#"]'));
  const panels = Array.from(document.querySelectorAll('.mbb6-panel'));
  const toggle = document.getElementById('stageToggle');
  const close = document.getElementById('stageClose');
  const backdrop = document.getElementById('stageBackdrop');

  function closeDrawer(){
    if(!layout) return;
    layout.classList.remove('drawer-open');
    if(backdrop) backdrop.hidden = true;
    if(toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer(){
    if(!layout) return;
    layout.classList.add('drawer-open');
    if(backdrop) backdrop.hidden = false;
    if(toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function showPanel(hash, updateUrl){
    const alvo = document.getElementById(hash.slice(1));
    const panel = alvo?.closest('.mbb6-panel') || panels[0];
    if(!panel) return;

    panels.forEach(item => item.classList.toggle('active-panel', item === panel));
    links.forEach(link => {
      const ativo = link.getAttribute('href') === '#' + panel.id;
      link.classList.toggle('active', ativo);
      if(ativo) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });

    if(updateUrl){
      history.replaceState(null, '', hash);
      // O Meu MbB acompanha a etapa pelo evento de mudança da âncora.
      window.dispatchEvent(new Event('hashchange'));
    }

    const irDiretoAoTopico = updateUrl || location.hash === hash;
    closeDrawer();

    if(irDiretoAoTopico){
      requestAnimationFrame(() => (alvo && panel.contains(alvo) ? alvo : panel).scrollIntoView({ block: 'start' }));
    }else{
      window.scrollTo(0, 0);
    }
  }

  links.forEach(link => {
    link.addEventListener('click', function(event){
      event.preventDefault();
      showPanel(this.getAttribute('href'), true);
    });
  });

  if(toggle) toggle.addEventListener('click', openDrawer);
  if(close) close.addEventListener('click', closeDrawer);
  if(backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && layout?.classList.contains('drawer-open')){
      closeDrawer();
      toggle?.focus();
    }
  });

  const initialHash = location.hash && document.getElementById(location.hash.slice(1))
    ? location.hash
    : '#b6-0';

  showPanel(initialHash, false);
  if (location.hash) requestAnimationFrame(() => showPanel(location.hash, false));
  window.addEventListener('hashchange', () => showPanel(location.hash || '#' + panels[0].id, false));
});

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

document.addEventListener('DOMContentLoaded', manterModuloAtivoVisivel);
window.addEventListener('pageshow', manterModuloAtivoVisivel);
window.addEventListener('resize', manterModuloAtivoVisivel);
