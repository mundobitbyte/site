(() => {
  'use strict';

  const moduleMeta = {
    esquema: 1,
    area: 'Programação e Desenvolvimento',
    modulo: 'Análise de Sistemas',
    trilha: 'Assistência Técnica Conecta'
  };

  const stages = [
    { path:'00-antes-do-sistema.html', title:'Antes do sistema', group:'Descobrir', conteudo_id:'analise-sistemas-00', versao_conteudo:1 },
    { path:'01-stakeholders-escopo.html', title:'Stakeholders e escopo', group:'Descobrir', conteudo_id:'analise-sistemas-01', versao_conteudo:1 },
    { path:'02-levantamento.html', title:'Levantamento', group:'Descobrir', conteudo_id:'analise-sistemas-02', versao_conteudo:1 },
    { path:'03-processo-as-is.html', title:'Processo AS-IS', group:'Compreender e modelar', conteudo_id:'analise-sistemas-03', versao_conteudo:1 },
    { path:'04-analise-estruturada.html', title:'Análise Estruturada', group:'Compreender e modelar', conteudo_id:'analise-sistemas-04', versao_conteudo:1 },
    { path:'05-processo-to-be-bpmn.html', title:'TO-BE e BPMN', group:'Compreender e modelar', conteudo_id:'analise-sistemas-05', versao_conteudo:1 },
    { path:'06-requisitos.html', title:'Engenharia de Requisitos', group:'Especificar e planejar', conteudo_id:'analise-sistemas-06', versao_conteudo:1 },
    { path:'07-casos-de-uso.html', title:'Casos de Uso', group:'Especificar e planejar', conteudo_id:'analise-sistemas-07', versao_conteudo:1 },
    { path:'08-uml-essencial.html', title:'UML essencial', group:'Especificar e planejar', conteudo_id:'analise-sistemas-08', versao_conteudo:1 },
    { path:'09-agile-backlog-mvp.html', title:'Backlog e MVP', group:'Especificar e planejar', conteudo_id:'analise-sistemas-09', versao_conteudo:1 },
    { path:'10-ux-prototipo.html', title:'Jornada e protótipo', group:'Validar e consolidar', conteudo_id:'analise-sistemas-10', versao_conteudo:1 },
    { path:'11-qualidade-integracoes.html', title:'Qualidade e integrações', group:'Validar e consolidar', conteudo_id:'analise-sistemas-11', versao_conteudo:1 },
    { path:'12-viabilidade-riscos-rastreabilidade.html', title:'Viabilidade, riscos e rastreabilidade', group:'Validar e consolidar', conteudo_id:'analise-sistemas-12', versao_conteudo:1 },
    { path:'13-documentacao-ia.html', title:'Documentação viva e IA', group:'Validar e consolidar', conteudo_id:'analise-sistemas-13', versao_conteudo:1 },
    { path:'14-integracao-final.html', title:'Integração final', group:'Validar e consolidar', conteudo_id:'analise-sistemas-14', versao_conteudo:1 }
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
      if(stage.group !== group){
        group = stage.group;
        html += `<div class="nav-group-title">${group}</div>`;
      }
      html += `<a class="stage-link ${index===current?'active':''}" href="${stage.path}" data-conteudo-id="${stage.conteudo_id}" ${index===current?'aria-current="page"':''}><span class="stage-number">${index}</span><span>${stage.title}</span></a>`;
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
    const prev = current > 0 ? `<a href="${stages[current-1].path}">← ${stages[current-1].title}</a>` : '<span class="disabled"></span>';
    const next = current < stages.length-1 ? `<a class="next" href="${stages[current+1].path}">${stages[current+1].title} →</a>` : '<span class="disabled"></span>';
    footer.innerHTML = `${prev}<a class="all" href="index.html">Ver todas as etapas</a>${next}`;
  }

  function prepareMeuMbb(){
    const unidades = stages.map((stage,index) => ({
      conteudo_id: stage.conteudo_id,
      versao_conteudo: stage.versao_conteudo,
      titulo: `${index} — ${stage.title}`,
      area: moduleMeta.area,
      modulo: moduleMeta.modulo,
      trilha: moduleMeta.trilha,
      ordem: index,
      status: 'ativo',
      localizacao_atual: `pages/analise-sistemas/${stage.path}`,
      obrigatorio: true
    }));

    const atual = current >= 0 ? unidades[current] : null;
    document.body.dataset.mbbArea = moduleMeta.area;
    document.body.dataset.mbbModulo = moduleMeta.modulo;
    document.body.dataset.mbbTrilha = moduleMeta.trilha;
    if(atual){
      document.body.dataset.conteudoId = atual.conteudo_id;
      document.body.dataset.versaoConteudo = String(atual.versao_conteudo);
    }

    let hook = document.getElementById('meuMbbHook');
    if(!hook){
      const headerRight = document.querySelector('.header-right');
      if(headerRight){
        hook = document.createElement('div');
        hook.id = 'meuMbbHook';
        hook.className = 'meu-mbb-hook';
        hook.dataset.meuMbbSlot = '';
        hook.setAttribute('aria-live','polite');
        headerRight.insertBefore(hook, toggle || null);
      }
    }

    window.MBB_ANALISE_SISTEMAS = { modulo: moduleMeta, unidades, atual };
    window.dispatchEvent(new CustomEvent('mbb:conteudo-pronto', { detail: { modulo: moduleMeta, unidade: atual } }));
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
  prepareMeuMbb();
})();
