(() => {
  const style = document.createElement('style');
  style.textContent = `
    #arduinoModuleMenu a.module-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      text-decoration:none;
      font-family:inherit !important;
    }
  `;
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu) return;

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');

  if(!menu.querySelector('a[href="arduino-conectividade.html"]')){
    const link6 = document.createElement('a');
    link6.className = 'module-btn';
    link6.href = 'arduino-conectividade.html';
    link6.textContent = '6. Conectividade';
    if(exercicios) menu.insertBefore(link6, exercicios);
    else menu.appendChild(link6);
  }

  if(!menu.querySelector('a[href="arduino-iot.html"]')){
    const link7 = document.createElement('a');
    link7.className = 'module-btn';
    link7.href = 'arduino-iot.html';
    link7.textContent = '7. Internet das Coisas';
    if(exercicios) menu.insertBefore(link7, exercicios);
    else menu.appendChild(link7);
  }
});

function copyCode(id, button){
  const code = document.getElementById(id);
  if(!code) return;

  const text = code.textContent;

  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(() => showCopied(button));
    return;
  }

  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try{
    document.execCommand('copy');
    showCopied(button);
  }finally{
    area.remove();
  }
}

function showCopied(button){
  if(!button) return;
  const original = button.textContent;
  button.textContent = 'Copiado';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1200);
}

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const links = Array.from(document.querySelectorAll('#stageMenu .stage-link[href^="#"]'));
  const panels = Array.from(document.querySelectorAll('.mbb5-panel'));
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
    const panel = document.querySelector(hash);
    if(!panel || !panel.classList.contains('mbb5-panel')) return;

    panels.forEach(item => item.classList.toggle('active-panel', item === panel));
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === hash));

    if(updateUrl){
      history.replaceState(null, '', hash);
    }

    closeDrawer();
    window.scrollTo(0, 0);
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
    if(event.key === 'Escape') closeDrawer();
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : '#b5-1';

  showPanel(initialHash, false);
});