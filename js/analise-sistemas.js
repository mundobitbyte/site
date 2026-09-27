(() => {
  'use strict';

  const stages = [
    ['00-antes-do-sistema.html','Antes do sistema','Descobrir'],
    ['01-stakeholders-escopo.html','Stakeholders e escopo','Descobrir'],
    ['02-levantamento.html','Levantamento','Descobrir'],
    ['03-processo-as-is.html','Processo AS-IS','Compreender e modelar'],
    ['04-analise-estruturada.html','Análise Estruturada','Compreender e modelar'],
    ['05-processo-to-be-bpmn.html','TO-BE e BPMN','Compreender e modelar'],
    ['06-requisitos.html','Engenharia de Requisitos','Especificar e planejar'],
    ['07-casos-de-uso.html','Casos de Uso','Especificar e planejar'],
    ['08-uml-essencial.html','UML essencial','Especificar e planejar'],
    ['09-agile-backlog-mvp.html','Backlog e MVP','Especificar e planejar'],
    ['10-ux-prototipo.html','Jornada e protótipo','Validar e consolidar'],
    ['11-qualidade-integracoes.html','Qualidade e integrações','Validar e consolidar'],
    ['12-viabilidade-riscos-rastreabilidade.html','Viabilidade, riscos e rastreabilidade','Validar e consolidar'],
    ['13-documentacao-ia.html','Documentação viva e IA','Validar e consolidar'],
    ['14-integracao-final.html','Integração final','Validar e consolidar']
  ];

  const current = Number(document.body.dataset.stage ?? -1);
  const nav = document.getElementById('courseNav');
  const footer = document.getElementById('stageFooter');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const toggle = document.getElementById('menuToggle');

  function buildNav(){
    if(!nav) return;
    let html = '<div class="nav-project"><strong>Assistência Técnica Conecta</strong><span>Um único projeto evolui durante todo o módulo.</span></div>';
    let group = '';
    stages.forEach((stage,index) => {
      if(stage[2] !== group){
        group = stage[2];
        html += `<div class="nav-group-title">${group}</div>`;
      }
      html += `<a class="stage-link ${index===current?'active':''}" href="${stage[0]}" ${index===current?'aria-current="page"':''}><span class="stage-number">${index}</span><span>${stage[1]}</span></a>`;
    });
    nav.innerHTML = html;
  }

  function buildProgress(){
    if(current < 0) return;
    const pct = ((current + 1) / stages.length) * 100;
    if(progressBar) progressBar.style.width = `${pct}%`;
    if(progressText) progressText.textContent = `Etapa ${current} de ${stages.length - 1}`;
  }

  function buildFooter(){
    if(!footer || current < 0) return;
    const prev = current > 0 ? `<a href="${stages[current-1][0]}">← ${stages[current-1][1]}</a>` : '<span class="disabled"></span>';
    const next = current < stages.length-1 ? `<a class="next" href="${stages[current+1][0]}">${stages[current+1][1]} →</a>` : '<span class="disabled"></span>';
    footer.innerHTML = `${prev}<a class="all" href="index.html">Ver todas as etapas</a>${next}`;
  }

  function closeNav(){ document.body.classList.remove('nav-open'); }
  if(toggle){
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.addEventListener('click', e => {
    if(!document.body.classList.contains('nav-open')) return;
    if(e.target.closest('#courseNav') || e.target.closest('#menuToggle')) return;
    closeNav();
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeNav(); });

  buildNav();
  buildProgress();
  buildFooter();
})();
