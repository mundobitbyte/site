/* Navegação entre Telas MbB: previews responsivos e páginas especiais.
   Escopo restrito ao módulo navegacao; não modifica códigos dos aplicativos. */
(() => {
  'use strict';
  const STYLE_ID = 'mbb-nav-preview-fix-20261013';
  const CLASS = 'mbb-nav-visual-vitrine';
  const routes = {
    'nav-dolar': ['cep', 'dolar'],
    'nav-clima': ['cep', 'dolar', 'clima'],
    'nav-projeto-final': ['cep', 'dolar', 'clima']
  };
  const names = {cep:'Buscar CEP', dolar:'Cotação do Dólar', clima:'Clima Atual'};
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = [
    '.'+CLASS+'{box-sizing:border-box;margin:18px 0 22px;padding:16px;background:#f4f8ff;border:1px solid #c7d8ed;border-radius:13px;color:#132033}',
    '.'+CLASS+' *{box-sizing:border-box}',
    '.'+CLASS+' .nav-visual-title{font-size:19px;font-weight:800;color:#114b9e;margin:0 0 6px}',
    '.'+CLASS+' .nav-visual-note{font-size:13px;line-height:1.5;color:#475569;margin:0 0 16px}',
    '.'+CLASS+' .nav-visual-phone{width:min(330px,100%);height:525px;padding:15px 11px;margin:0 auto;background:#111827;border-radius:30px;box-shadow:0 10px 25px rgba(15,23,42,.18)}',
    '.'+CLASS+' .nav-visual-screen{height:100%;display:flex;flex-direction:column;overflow:hidden;background:#f8fafc;border:2px solid #dbeafe;border-radius:20px;font:15px Arial,sans-serif}',
    '.'+CLASS+' .nav-visual-head{display:flex;align-items:center;gap:8px;flex:none;min-height:48px;padding:0 12px;border-bottom:1px solid #e2e8f0;background:#fff;color:#0f172a;font-size:14px;font-weight:700}',
    '.'+CLASS+' .nav-visual-back{border:0;background:transparent;color:#1967d2;padding:8px 6px 8px 0;font:22px Arial,sans-serif;cursor:pointer}',
    '.'+CLASS+' .nav-visual-body{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;padding:24px;overflow-y:auto}',
    '.'+CLASS+' .nav-visual-body.is-home{justify-content:center}',
    '.'+CLASS+' .nav-visual-heading{margin:0 0 20px;color:#0f172a;font-weight:700;font-size:24px;line-height:1.18}',
    '.'+CLASS+' .is-home .nav-visual-heading{font-size:26px;margin-bottom:6px}',
    '.'+CLASS+' .nav-visual-subtitle{margin:0 0 24px;color:#475569;font-size:16px}',
    '.'+CLASS+' .nav-visual-action,.'+CLASS+' .nav-visual-secondary{display:block;width:100%;padding:13px 8px;margin:0 0 12px;border:0;border-radius:10px;background:#1967d2;color:#fff;text-align:center;font:700 14px Arial,sans-serif;cursor:pointer}',
    '.'+CLASS+' .nav-visual-secondary{background:#475569}',
    '.'+CLASS+' .nav-visual-action:disabled,.'+CLASS+' .nav-visual-secondary:disabled{cursor:default;opacity:1}',
    '.'+CLASS+' .nav-visual-actions{display:flex;gap:10px}',
    '.'+CLASS+' .nav-visual-actions>*{flex:1 1 0;min-width:0}',
    '.'+CLASS+' .nav-visual-field{padding:12px;margin-bottom:14px;border:1px solid #94a3b8;border-radius:10px;background:#fff;color:#94a3b8}',
    '@media(max-width:720px){',
    '.'+CLASS+'{padding:12px 8px 16px;margin:14px 0 18px}',
    '.'+CLASS+' .nav-visual-phone{width:min(300px,calc(100% - 10px));height:510px}',
    '.'+CLASS+' .nav-visual-body{padding:20px 16px}',
    'body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard{display:flex!important;flex-direction:column!important;min-height:0!important;height:auto!important;overflow:visible!important}',
    'body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .preview-area{display:flex!important;align-items:center!important;justify-content:center!important;min-height:0!important;height:auto!important;overflow:visible!important}',
    'body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .device{width:min(300px,calc(100% - 24px))!important;height:auto!important;min-height:0!important;max-height:none!important;aspect-ratio:330/560!important;flex:0 0 auto!important}',
    'body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .screen{height:100%!important;width:100%!important;min-height:0!important}',
    '}',
    '@media(max-width:380px){.'+CLASS+' .nav-visual-phone{height:490px}.'+CLASS+' .nav-visual-heading{font-size:22px}.'+CLASS+' .is-home .nav-visual-heading{font-size:23px}}'
  ].join('\n');
  document.head.appendChild(style);

  function button(label, key) {
    const el=document.createElement('button');
    el.type='button';
    el.className='nav-visual-action';
    el.textContent=label;
    if(key) el.setAttribute('data-nav-route',key);
    else el.disabled=true;
    return el;
  }
  function makeScreen(screen, route, allowed) {
    screen.replaceChildren();
    const head=document.createElement('div');
    head.className='nav-visual-head';
    if (route !== 'home') {
      const back=document.createElement('button');
      back.type='button';
      back.className='nav-visual-back';
      back.textContent='‹';
      back.setAttribute('aria-label','Voltar para a Central de Consultas');
      back.setAttribute('data-nav-back','');
      head.appendChild(back);
    }
    const isHome=route==='home';
    const name=isHome?'Central de Consultas':route==='cep'?'Busca CEP':names[route];
    const heading=document.createElement('span');
    heading.textContent=name;
    head.appendChild(heading);
    screen.appendChild(head);
    const body=document.createElement('div');
    body.className='nav-visual-body'+(isHome?' is-home':'');
    const title=document.createElement('h4');
    title.className='nav-visual-heading';
    title.textContent=name;
    body.appendChild(title);
    if(isHome) {
      const sub=document.createElement('p');
      sub.className='nav-visual-subtitle';
      sub.textContent='Escolha um serviço:';
      body.appendChild(sub);
      allowed.forEach(key=>body.appendChild(button(names[key],key)));
    } else {
      if(route==='clima'){
        const city=document.createElement('p');
        city.className='nav-visual-subtitle';
        city.textContent='São Paulo';
        body.appendChild(city);
      }
      if(route==='cep'){
        const input=document.createElement('div');
        input.className='nav-visual-field';
        input.textContent='Digite o CEP';
        body.appendChild(input);
      }
      const actions=document.createElement('div');
      actions.className='nav-visual-actions';
      actions.appendChild(button(route==='cep'?'Pesquisar':'Consultar'));
      const clear=button('Limpar');
      clear.className='nav-visual-secondary';
      actions.appendChild(clear);
      body.appendChild(actions);
    }
    screen.appendChild(body);
  }

  function addCustomPreview(id) {
    const allowed=routes[id];
    if(!allowed) return;
    const intro=document.getElementById('introView');
    if(!intro || intro.querySelector('.'+CLASS)) return;
    const section=document.createElement('section');
    section.className=CLASS;
    section.setAttribute('aria-label','Prévia ilustrativa das telas');
    section.innerHTML='<h4 class="nav-visual-title">Resultado visual do aplicativo</h4>'+
      '<p class="nav-visual-note">Prévia ilustrativa do resultado esperado. Toque nos botões da Central para ver cada tela e na seta para voltar. As consultas reais são testadas no Snack.</p>'+
      '<div class="nav-visual-phone"><div class="nav-visual-screen" aria-live="polite"></div></div>';
    const anchor=intro.querySelector('.intro-highlight');
    if(anchor) anchor.insertAdjacentElement('afterend',section);
    else intro.prepend(section);
    const screen=section.querySelector('.nav-visual-screen');
    section.addEventListener('click',event=>{
      const back=event.target.closest('[data-nav-back]');
      if(back){makeScreen(screen,'home',allowed);return;}
      const route=event.target.closest('[data-nav-route]')?.getAttribute('data-nav-route');
      if(route && allowed.includes(route)) makeScreen(screen,route,allowed);
    });
    makeScreen(screen,'home',allowed);
  }

  function repairMobilePreview(id) {
    if (!window.matchMedia('(max-width:720px)').matches) return;
    if (typeof currentModuleKey==='undefined' || currentModuleKey!=='navegacao') return;
    const step=(typeof modules!=='undefined') && modules.navegacao?.steps.find(s=>String(s.id)===String(id));
    if(!step || step.modulePage || step.customPage || step.exercisePage || typeof step.preview!=='string') return;
    if(!document.getElementById('btn-navegacao-'+id)?.classList.contains('active')) return;
    const preview=document.getElementById('preview');
    const card=document.getElementById('resultCard');
    if(!preview || !card || getComputedStyle(card).display==='none') return;
    if(!preview.innerHTML.trim()) preview.innerHTML=step.preview;
    if(preview.innerHTML.trim()) card.style.setProperty('visibility','visible','important');
  }

  function refresh(id) {
    if(typeof currentModuleKey==='undefined' || currentModuleKey!=='navegacao') return;
    addCustomPreview(id);
    requestAnimationFrame(()=>requestAnimationFrame(()=>repairMobilePreview(id)));
  }
  if(typeof showStep==='function'){
    const previous=showStep;
    showStep=function mbbNavResultadoVisual(id){
      const result=previous.apply(this,arguments);
      refresh(id);
      return result;
    };
  }
  const active=document.querySelector('#menu .nav-btn.active');
  if(active && active.id.startsWith('btn-navegacao-'))
    refresh(active.id.slice('btn-navegacao-'.length));
})();


/* MbB — restauração efetiva das prévias de navegação 1–7 em celulares.
   O painel legado é substituído no telefone por uma área independente:
   isso evita as regras sobrepostas de display/visibility do resultCard.
   As prévias aproveitam step.preview, sem modificar o código das aulas.
*/
(() => {
  'use strict';

  const STYLE_ID = 'mbb-nav-operational-mobile-preview-20261013';
  const PREVIEW_CLASS = 'mbb-nav-operational-mobile-preview';
  const previewSteps = new Set([
    'nav-dependencias',
    'nav-primeiro-app',
    'nav-criar-inicio',
    'nav-criar-cep-base',
    'nav-organizar-app',
    'nav-cep-completo'
  ]);

  const labels = {
    'nav-dependencias': 'Esquema da preparação no Snack',
    'nav-primeiro-app': 'Tela do aplicativo no Snack',
    'nav-criar-inicio': 'Esquema da etapa — Inicio.js preparado',
    'nav-criar-cep-base': 'Esquema da etapa — BuscaCep.js preparado',
    'nav-organizar-app': 'Tela após organizar os arquivos',
    'nav-cep-completo': 'Tela após abrir Busca CEP',
    'nav-modelo-mental': 'Exemplo visual — primeira navegação'
  };

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = [
    '@media (max-width: 720px) {',
    '.' + PREVIEW_CLASS + ' {order:2!important;flex:0 0 auto!important;display:block!important;position:relative!important;visibility:visible!important;opacity:1!important;box-sizing:border-box!important;width:100%!important;min-width:0!important;height:auto!important;margin:0 0 12px!important;padding:12px 8px 16px!important;overflow:visible!important;background:#f4f8ff!important;border:1px solid #c7d8ed!important;border-radius:12px!important;color:#132033!important}',
    '.' + PREVIEW_CLASS + ' * {box-sizing:border-box}',
    '.' + PREVIEW_CLASS + ' .mbb-nav-operational-title{font:800 17px/1.3 "Segoe UI",Arial,sans-serif!important;color:#114b9e!important;margin:0 4px 5px!important}',
    '.' + PREVIEW_CLASS + ' .mbb-nav-operational-help{font:13px/1.45 "Segoe UI",Arial,sans-serif!important;color:#475569!important;margin:0 4px 12px!important}',
    '.' + PREVIEW_CLASS + ' .mbb-nav-operational-frame{width:min(306px,100%)!important;height:520px!important;min-width:0!important;padding:14px 10px!important;margin:0 auto!important;overflow:hidden!important;background:#111827!important;border-radius:30px!important;box-shadow:0 8px 20px rgba(15,23,42,.18)!important}',
    '.' + PREVIEW_CLASS + ' .mbb-nav-operational-screen{width:100%!important;height:100%!important;min-height:0!important;overflow:hidden!important;background:#fff!important;border:2px solid #dbeafe!important;border-radius:20px!important}',
    '#workspace.nav-mbb-readable-workspace > .' + PREVIEW_CLASS + '{grid-column:1!important;grid-row:auto!important}',
    '}',
    '@media (max-width:380px){.' + PREVIEW_CLASS + ' .mbb-nav-operational-frame{height:485px!important;width:min(286px,100%)!important}}'
  ].join('\n');
  if(!document.getElementById(STYLE_ID)) document.head.appendChild(style);

  function currentStepId() {
    if(typeof currentModuleKey==='undefined' || currentModuleKey!=='navegacao') return null;
    const active=document.querySelector('#menu .nav-btn.active');
    const prefix='btn-navegacao-';
    return active?.id?.startsWith(prefix) ? active.id.slice(prefix.length) : null;
  }

  function removeFallback() {
    document.querySelectorAll('.'+PREVIEW_CLASS).forEach(node=>node.remove());
  }

  function makeFallback(stepId, html) {
    const section=document.createElement('section');
    section.className=PREVIEW_CLASS;
    section.setAttribute('aria-label','Resultado visual desta etapa');
    const title=document.createElement('h3');
    title.className='mbb-nav-operational-title';
    title.textContent=labels[stepId]||'Resultado visual';
    const help=document.createElement('p');
    help.className='mbb-nav-operational-help';
    help.textContent=
      stepId==='nav-dependencias' || stepId==='nav-criar-inicio' || stepId==='nav-criar-cep-base'
        ? 'Esquema ilustrativo desta etapa. A tela executável é conferida no Snack.'
        : 'Prévia visual do resultado esperado. Execute o código no Snack para testar as ações.';
    const frame=document.createElement('div');
    frame.className='mbb-nav-operational-frame';
    const screen=document.createElement('div');
    screen.className='mbb-nav-operational-screen';
    screen.innerHTML=html;
    frame.appendChild(screen);
    section.append(title,help,frame);
    return section;
  }

  function syncFallback() {
    removeFallback();

    const resultCard=document.getElementById('resultCard');
    const previouslyHidden=resultCard?.dataset?.mbbNavOperationalFallback==='1';
    const isMobile=window.matchMedia('(max-width:720px)').matches;
    const id=currentStepId();
    const step=id && typeof modules!=='undefined'
      ? modules.navegacao?.steps?.find(item=>String(item.id)===id)
      : null;

    if(previouslyHidden){
      delete resultCard.dataset.mbbNavOperationalFallback;
      // Só restaura o painel se a etapa atual realmente o utiliza.
      // Em páginas especiais, a rotina normal já definiu display:none.
      if(!isMobile && step && previewSteps.has(id)){
        resultCard.style.setProperty('display','flex','important');
        if(document.getElementById('preview')?.innerHTML.trim()){
          resultCard.style.setProperty('visibility','visible','important');
        }
      }
    }

    if(!isMobile || !step) return;

    if(id==='nav-modelo-mental'){
      // A etapa conceitual originalmente não possuía painel de resultado.
      const source=modules.navegacao.steps.find(item=>item.id==='nav-primeiro-app');
      const intro=document.getElementById('introView');
      if(!source?.preview || !intro) return;
      const fallback=makeFallback(id,source.preview);
      const highlight=intro.querySelector('.intro-highlight');
      if(highlight) highlight.insertAdjacentElement('afterend',fallback);
      else intro.appendChild(fallback);
      return;
    }

    if(!previewSteps.has(id) || !step.preview) return;
    const workspace=document.getElementById('workspace');
    if(!workspace) return;

    const fallback=makeFallback(id,step.preview);
    const noteWrap=document.getElementById('noteWrap');
    // O quadro fica depois do código e antes do roteiro no celular.
    if(noteWrap?.parentElement===workspace) workspace.insertBefore(fallback,noteWrap);
    else workspace.appendChild(fallback);

    if(resultCard){
      resultCard.dataset.mbbNavOperationalFallback='1';
      resultCard.style.setProperty('display','none','important');
    }
  }

  if(typeof showStep==='function'){
    const previous=showStep;
    showStep=function mbbNavOperationalMobileResult(id){
      const output=previous.apply(this,arguments);
      syncFallback();
      return output;
    };
  }

  let wasMobile=window.matchMedia('(max-width:720px)').matches;
  window.addEventListener('resize',()=>{
    const nowMobile=window.matchMedia('(max-width:720px)').matches;
    if(nowMobile!==wasMobile){
      wasMobile=nowMobile;
      syncFallback();
    }
  });
  syncFallback();
})();
