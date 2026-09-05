(() => {
  const style = document.createElement('style');
  style.textContent = `
    body > header{
      height:46px !important;
      min-height:46px !important;
      max-height:46px !important;
      padding:0 16px !important;
      display:flex !important;
      flex-direction:row !important;
      align-items:center !important;
      justify-content:space-between !important;
      gap:12px !important;
      text-align:left !important;
    }
    body > header .header-left{
      display:flex !important;
      flex-direction:row !important;
      align-items:center !important;
      justify-content:flex-start !important;
      gap:12px !important;
      min-width:0 !important;
      flex:1 1 auto !important;
      text-align:left !important;
    }
    body > header h1{
      margin:0 !important;
      text-align:left !important;
    }
    body > header .brand{
      margin-left:auto !important;
      text-align:right !important;
    }
    @media(max-width:760px){
      body > header{
        padding:0 10px !important;
        gap:8px !important;
      }
      body > header .header-left{
        gap:8px !important;
      }
      body > header .brand{
        display:none !important;
      }
    }
  `;
  document.head.appendChild(style);
})();

function copyCode(id){
  const code = document.getElementById(id);
  if(code && navigator.clipboard){
    navigator.clipboard.writeText(code.textContent);
  }
}

document.addEventListener('click', function(event){
  const btn = event.target.closest('.mc-option');
  if(!btn) return;

  const question = btn.closest('.mc-question');
  if(!question || question.classList.contains('answered')) return;

  const feedback = question.querySelector('.mc-feedback');
  const options = question.querySelectorAll('.mc-option');
  const correct = btn.dataset.correct === 'true';

  question.classList.add('answered');

  options.forEach(option => {
    option.disabled = true;
    if(option.dataset.correct === 'true'){
      option.classList.add('correct');
    }
  });

  if(correct){
    btn.classList.add('correct');
    feedback.textContent = 'Certa.';
    feedback.className = 'mc-feedback ok';
  }else{
    btn.classList.add('wrong');
    feedback.textContent = 'Errada.';
    feedback.className = 'mc-feedback no';
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const layout = document.getElementById('arduinoLayout');
  const moduleButtons = Array.from(document.querySelectorAll('#arduinoModuleMenu .module-btn'));
  const stageLinks = Array.from(document.querySelectorAll('#stageMenu .stage-link'));
  const stageToggle = document.getElementById('stageToggle');
  const stageClose = document.getElementById('stageClose');
  const stageBackdrop = document.getElementById('stageBackdrop');

  if(!layout || !moduleButtons.length) return;

  const modules = {
    fundamentos: { first: '#intro', sidebar: false },
    io: { first: '#p1', sidebar: true },
    sensores: { first: '#p6', sidebar: true },
    atuadores: { first: '#p8', sidebar: true }
  };

  const sectionModule = {
    '#intro': 'fundamentos',
    '#p1': 'io', '#p2': 'io', '#p3': 'io', '#p4': 'io', '#p5': 'io', '#lab1': 'io',
    '#p6': 'sensores', '#p7': 'sensores', '#lab2': 'sensores',
    '#p8': 'atuadores', '#lab3': 'atuadores', '#p9': 'atuadores', '#lab4': 'atuadores'
  };

  let currentModule = 'fundamentos';

  function closeDrawer(){
    layout.classList.remove('drawer-open');
    if(stageBackdrop) stageBackdrop.hidden = true;
    if(stageToggle) stageToggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer(){
    if(layout.classList.contains('no-sidebar')) return;
    layout.classList.add('drawer-open');
    if(stageBackdrop) stageBackdrop.hidden = false;
    if(stageToggle) stageToggle.setAttribute('aria-expanded', 'true');
  }

  function setModule(moduleName){
    if(!modules[moduleName]) return;
    currentModule = moduleName;
    const hasSidebar = modules[moduleName].sidebar;

    moduleButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.module === moduleName);
    });

    layout.classList.toggle('no-sidebar', !hasSidebar);

    stageLinks.forEach(link => {
      const allowed = (link.dataset.module || '').split(/\s+/).includes(moduleName);
      link.classList.toggle('module-visible', allowed && hasSidebar);
    });

    closeDrawer();
  }

  function setActiveStage(hash){
    stageLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
  }

  function showPanel(hash, updateUrl){
    const target = document.querySelector(hash);
    if(!target) return;

    const topPanel = target.matches('main > section[id]')
      ? target
      : target.closest('main > section[id]');

    if(!topPanel) return;

    document.querySelectorAll('main > section[id]').forEach(section => {
      section.classList.remove('active-panel');
    });
    topPanel.classList.add('active-panel');

    const topHash = '#' + topPanel.id;
    setActiveStage(topHash);

    if(updateUrl){
      history.replaceState(null, '', hash);
    }

    window.scrollTo(0, 0);
    if(hash !== topHash){
      requestAnimationFrame(() => {
        const nested = document.querySelector(hash);
        if(nested) nested.scrollIntoView({block:'start'});
      });
    }
  }

  function activateModule(moduleName, targetHash, updateUrl){
    setModule(moduleName);
    const hash = targetHash || modules[moduleName].first;
    showPanel(hash, updateUrl);
  }

  moduleButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      const moduleName = this.dataset.module;
      const target = this.dataset.target || modules[moduleName].first;
      activateModule(moduleName, target, true);
    });
  });

  stageLinks.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const hash = this.getAttribute('href');
      showPanel(hash, true);
      closeDrawer();
    });
  });

  if(stageToggle) stageToggle.addEventListener('click', openDrawer);
  if(stageClose) stageClose.addEventListener('click', closeDrawer);
  if(stageBackdrop) stageBackdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeDrawer();
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : '#intro';

  let initialModule = sectionModule[initialHash];
  if(!initialModule){
    const initialTarget = document.querySelector(initialHash);
    const topPanel = initialTarget && (initialTarget.matches('main > section[id]')
      ? initialTarget
      : initialTarget.closest('main > section[id]'));
    if(topPanel && topPanel.id === 'exercicios'){
      initialModule = 'io';
    }
  }

  activateModule(initialModule || 'fundamentos', initialHash, false);
});
