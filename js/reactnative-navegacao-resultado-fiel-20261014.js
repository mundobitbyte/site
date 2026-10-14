/* Mundo bit Byte — Navegação entre Telas — resultados visuais 2026-10-14
 * Correção restrita ao módulo "navegacao".
 * A prévia de 8/9/10 reflete as propriedades iniciais dos arquivos da aula.
 * Ela permite apenas a transição de telas; as APIs são testadas no Snack.
 * Nenhum código dos aplicativos ou arquivo didático é reescrito.
 */
(() => {
  'use strict';
  if (document.getElementById('mbb-nav-resultados-fieis-css')) return;
  if (typeof modules === 'undefined' || !modules.navegacao) return;

  const VISUAL = new Set(['nav-primeiro-app', 'nav-organizar-app', 'nav-cep-completo']);
  const PREPARATION = new Set(['nav-dependencias', 'nav-criar-inicio', 'nav-criar-cep-base']);
  const SPECIAL = {
    'nav-dolar': ['cep', 'dolar'],
    'nav-clima': ['cep', 'dolar', 'clima'],
    'nav-projeto-final': ['cep', 'dolar', 'clima']
  };
  const SCREENS = {
    cep: {label: 'Buscar CEP', heading: 'Busca CEP'},
    dolar: {label: 'Cotação do Dólar', heading: 'Cotação do Dólar'},
    clima: {label: 'Clima Atual', heading: 'Clima Atual'}
  };

  const css = document.createElement('style');
  css.id = 'mbb-nav-resultados-fieis-css';
  css.textContent = `
    .mbb-nav-fiel {
      margin: 18px 0 20px;
      padding: 15px 14px 19px;
      border: 1px solid #d6e0ee;
      border-radius: 12px;
      background: #f8fbff;
      color: #132033;
      box-sizing: border-box;
    }
    .mbb-nav-fiel * { box-sizing: border-box; }
    .mbb-nav-fiel-title {
      margin: 0 0 5px;
      color: #114b9e;
      font: 800 18px/1.3 "Segoe UI",Arial,sans-serif;
    }
    .mbb-nav-fiel-lead {
      margin: 0 0 15px;
      color: #475569;
      font: 13px/1.48 "Segoe UI",Arial,sans-serif;
    }
    .mbb-nav-fiel-phone {
      width: min(330px,100%);
      height: 560px;
      margin: 0 auto;
      padding: 18px 13px;
      border-radius: 36px;
      background: #111827;
      box-shadow: 0 12px 30px rgba(15,23,42,.22);
      position: relative;
    }
    .mbb-nav-fiel-phone::before {
      content:"";
      position:absolute;
      top:8px;left:50%;transform:translateX(-50%);
      width:78px;height:5px;border-radius:999px;background:#4b5563;
    }
    .mbb-nav-fiel-screen {
      height:100%;width:100%;
      display:flex;flex-direction:column;overflow:hidden;
      border:2px solid #dbeafe;border-radius:24px;
      background:#f8fafc;
      font-family:Arial,sans-serif;
    }
    .mbb-nav-fiel-header {
      flex:0 0 52px;display:flex;align-items:center;
      border-bottom:1px solid #e2e8f0;
      padding:0 12px;background:#fff;
      font-size:16px;font-weight:600;color:#0f172a;
      min-width:0;
    }
    .mbb-nav-fiel-back {
      border:0;background:none;color:#1967d2;
      font:normal 29px/1 Arial,sans-serif;
      min-width:31px;min-height:40px;
      margin-right:5px;cursor:pointer;text-align:left;
    }
    .mbb-nav-fiel-header-text {
      overflow:hidden;white-space:nowrap;text-overflow:ellipsis;
    }
    .mbb-nav-fiel-body {
      flex:1 1 auto;min-height:0;min-width:0;
      padding:24px;background:#f8fafc;
      overflow-y:auto;display:flex;flex-direction:column;
      align-items:stretch;
    }
    .mbb-nav-fiel-body.is-home {justify-content:center}
    .mbb-nav-fiel-h2 {
      margin:0 0 20px;color:#0f172a;
      font:700 24px/1.2 Arial,sans-serif;
    }
    .mbb-nav-fiel-body.is-home .mbb-nav-fiel-h2 {
      font-size:26px;margin-bottom:6px;
    }
    .mbb-nav-fiel-sub {
      color:#475569;font:16px/1.45 Arial,sans-serif;
      margin:0 0 24px;
    }
    .mbb-nav-fiel-city {
      color:#475569;font:18px/1.45 Arial,sans-serif;
      margin: -14px 0 20px;
    }
    .mbb-nav-fiel-link, .mbb-nav-fiel-btn {
      display:block;min-height:45px;width:100%;
      padding:13px 8px;border:0;border-radius:10px;
      color:#fff;background:#1967d2;
      font:700 14px/1.35 Arial,sans-serif;
      text-align:center;
    }
    .mbb-nav-fiel-link {margin:0 0 12px;cursor:pointer}
    .mbb-nav-fiel-btn {cursor:default}
    .mbb-nav-fiel-btn.secondary {background:#475569}
    .mbb-nav-fiel-actions {display:flex;gap:10px;align-items:stretch}
    .mbb-nav-fiel-actions > * {flex:1 1 0;min-width:0}
    .mbb-nav-fiel-input {
      min-height:45px;padding:12px;margin:0 0 14px;
      border:1px solid #94a3b8;border-radius:10px;
      color:#94a3b8;background:#fff;
      font:14px/1.5 Arial,sans-serif;
    }
    .mbb-nav-fiel-foot {
      margin:12px 0 0;
      color:#607089;text-align:center;
      font:12px/1.45 "Segoe UI",Arial,sans-serif;
    }
    @media (max-width:720px) {
      .mbb-nav-fiel {padding:12px 8px 16px;margin:14px 0 18px}
      .mbb-nav-fiel-phone {
        width:min(308px,calc(100% - 4px));
        height:525px;padding:15px 11px;border-radius:31px;
      }
      .mbb-nav-fiel-screen {border-radius:21px}
      .mbb-nav-fiel-body {padding:20px}
      .mbb-nav-fiel-h2 {font-size:22px}
      .mbb-nav-fiel-body.is-home .mbb-nav-fiel-h2 {font-size:24px}
      .mbb-nav-fiel-header {font-size:14px;flex-basis:48px}
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard {
        order:2!important;display:flex!important;flex-direction:column!important;
        min-height:580px!important;height:auto!important;
      }
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .preview-area {
        display:flex!important;min-height:520px!important;
        align-items:center!important;justify-content:center!important;
      }
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .device {
        flex:0 0 auto!important;
        width:min(300px,calc(100% - 16px))!important;
        height:auto!important;
        aspect-ratio:330/560!important;
        max-height:none!important;
      }
      body.nav-mbb-navigation-responsive #workspace.nav-mbb-readable-workspace #resultCard .screen {
        display:block!important;visibility:visible!important;
        width:100%!important;height:100%!important;
      }
    }
    @media (max-width:380px) {
      .mbb-nav-fiel-phone {height:505px}
      .mbb-nav-fiel-body {padding:18px 14px}
    }
  `;
  document.head.appendChild(css);

  function currentStep() {
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') return null;
    const active = document.querySelector('#menu .nav-btn.active');
    const prefix = 'btn-navegacao-';
    if (!active || !active.id.startsWith(prefix)) return null;
    const id = active.id.slice(prefix.length);
    return modules.navegacao.steps.find(step => String(step.id) === id) || null;
  }

  function makeElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  }

  function displayScreen(root, key, allowed) {
    root.replaceChildren();
    const home = key === 'home';
    const header = makeElement('div', 'mbb-nav-fiel-header');
    if (!home) {
      const back = makeElement('button', 'mbb-nav-fiel-back', '‹');
      back.type = 'button';
      back.setAttribute('aria-label', 'Voltar à Central de Consultas');
      back.dataset.go = 'home';
      header.appendChild(back);
    }
    header.appendChild(makeElement('span', 'mbb-nav-fiel-header-text',
      home ? 'Central de Consultas' : SCREENS[key].heading));
    root.appendChild(header);

    const body = makeElement('div', 'mbb-nav-fiel-body' + (home ? ' is-home' : ''));
    body.appendChild(makeElement('h4', 'mbb-nav-fiel-h2',
      home ? 'Central de Consultas' : SCREENS[key].heading));

    if (home) {
      body.appendChild(makeElement('p', 'mbb-nav-fiel-sub', 'Escolha um serviço:'));
      allowed.forEach(route => {
        const btn = makeElement('button', 'mbb-nav-fiel-link', SCREENS[route].label);
        btn.type = 'button';
        btn.dataset.go = route;
        body.appendChild(btn);
      });
    } else {
      if (key === 'clima') body.appendChild(makeElement('p', 'mbb-nav-fiel-city', 'São Paulo'));
      if (key === 'cep') body.appendChild(makeElement('div', 'mbb-nav-fiel-input', 'Digite o CEP'));
      const actions = makeElement('div', 'mbb-nav-fiel-actions');
      const first = makeElement('button', 'mbb-nav-fiel-btn', key === 'cep' ? 'Pesquisar' : 'Consultar');
      const second = makeElement('button', 'mbb-nav-fiel-btn secondary', 'Limpar');
      first.type = 'button'; second.type = 'button';
      first.disabled = true; second.disabled = true;
      first.title = 'Para consultar dados reais, execute o aplicativo no Snack';
      second.title = first.title;
      actions.append(first,second);
      body.appendChild(actions);
    }
    root.appendChild(body);
  }

  function renderSpecial(id) {
    const allowed = SPECIAL[id];
    if (!allowed) return;
    const intro = document.getElementById('introView');
    if (!intro || intro.querySelector('.mbb-nav-fiel')) return;

    const panel = makeElement('section', 'mbb-nav-fiel');
    panel.setAttribute('aria-label', 'Prévia visual do aplicativo desta etapa');
    panel.appendChild(makeElement('h4', 'mbb-nav-fiel-title', 'Resultado visual — Central de Consultas'));
    panel.appendChild(makeElement('p', 'mbb-nav-fiel-lead',
      'Prévia baseada nas telas e nos estilos dos arquivos desta etapa. Toque nos serviços para conferir a navegação.'));
    const device = makeElement('div', 'mbb-nav-fiel-phone');
    const screen = makeElement('div', 'mbb-nav-fiel-screen');
    device.appendChild(screen);
    panel.appendChild(device);
    panel.appendChild(makeElement('p', 'mbb-nav-fiel-foot',
      'As consultas de CEP, dólar e clima são executadas no Snack, não nesta prévia.'));
    panel.addEventListener('click', event => {
      const target = event.target.closest('[data-go]');
      const route = target?.dataset?.go;
      if (route === 'home' || allowed.includes(route)) {
        displayScreen(screen, route, allowed);
      }
    });
    displayScreen(screen, 'home', allowed);

    const highlight = intro.querySelector('.intro-highlight');
    if (highlight) highlight.insertAdjacentElement('afterend', panel);
    else intro.prepend(panel);
  }

  function restoreOperational(id, allowDesktopRestore) {
    const card = document.getElementById('resultCard');
    if (!card) return;
    const mobile = window.matchMedia('(max-width:720px)').matches;
    if (mobile && PREPARATION.has(id)) {
      // Estes passos configuram arquivos; não há resultado novo a conferir.
      card.style.setProperty('display', 'none', 'important');
      return;
    }
    if (!(VISUAL.has(id) || (allowDesktopRestore && PREPARATION.has(id)))) return;
    card.style.setProperty('display', 'flex', 'important');
    const preview = document.getElementById('preview');
    const step = modules.navegacao.steps.find(item => String(item.id) === id);
    if (VISUAL.has(id) && preview && !preview.innerHTML.trim() && step?.preview) {
      preview.innerHTML = step.preview;
    }
    if (preview?.innerHTML.trim()) {
      card.style.setProperty('visibility', 'visible', 'important');
    }
  }

  function sync(id) {
    const step = currentStep();
    if (!step || String(step.id) !== String(id)) return;
    renderSpecial(id);
    restoreOperational(id, false);
    if (VISUAL.has(id)) {
      // O protetor antigo conclui sua alteração de visibilidade em dois frames.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (currentStep()?.id === id) restoreOperational(id, false);
        });
      }));
    }
  }

  if (typeof showStep === 'function') {
    const oldShowStep = showStep;
    showStep = function mbbNavegacaoResultadoFiel(id) {
      const result = oldShowStep.apply(this, arguments);
      sync(id);
      return result;
    };
  }

  let mobileBefore = window.matchMedia('(max-width:720px)').matches;
  window.addEventListener('resize', () => {
    const mobileNow = window.matchMedia('(max-width:720px)').matches;
    if (mobileNow === mobileBefore) return;
    mobileBefore = mobileNow;
    const step = currentStep();
    if (!step) return;
    if (!mobileNow && PREPARATION.has(step.id)) restoreOperational(step.id, true);
    else sync(step.id);
  });

  const initial = currentStep();
  if (initial) sync(initial.id);
})();


/* MbB — respostas ilustrativas dentro das prévias existentes (CEP, Dólar e Clima).
   Extensão estritamente visual. Não modifica step.code, step.preview, API ou CSS global.
   Mantém a moldura, as cores e os controles que o aluno já conhece.
*/
(() => {
  'use strict';
  const STYLE_ID = 'mbb-nav-demo-respostas-css';
  const DEMO_STEP = 'nav-cep-completo';
  const SPECIAL_STEPS = new Set(['nav-dolar', 'nav-clima', 'nav-projeto-final']);
  const DATA = {
    cep: { rows: ['Cidade: São Paulo', 'Estado: SP'], caption: 'Exemplo ilustrativo: CEP 01001-000.' },
    dolar: { rows: ['Atual: R$ 5,20', 'Máxima: R$ 5,25', 'Mínima: R$ 5,16'], caption: 'Exemplo ilustrativo: valores fictícios, não cotação atual.' },
    clima: { rows: ['Temperatura: 24 °C', 'Vento: 11 km/h'], caption: 'Exemplo ilustrativo: valores fictícios para São Paulo.' }
  };
  if (document.getElementById(STYLE_ID)) return;

  const css=document.createElement('style');
  css.id=STYLE_ID;
  css.textContent = [
    '.mbb-nav-fiel-result{margin-top:20px;padding:16px;border-radius:12px;color:#0f172a}',
    '.mbb-nav-fiel-result.is-cep{background:#E0F2FE}',
    '.mbb-nav-fiel-result.is-dolar{background:#DCFCE7}',
    '.mbb-nav-fiel-result.is-clima{background:#FEF3C7}',
    '.mbb-nav-fiel-result-line{margin:0 0 6px;font:normal 18px/1.42 Arial,sans-serif;color:#0f172a}',
    '.mbb-nav-fiel-demo-caption{margin:9px 0 0;font:12px/1.45 Arial,sans-serif;color:#475569}',
    '#preview .mbb-nav-cep-result{margin-top:20px;padding:16px;border-radius:12px;background:#E0F2FE;color:#0f172a}',
    '#preview .mbb-nav-cep-result-line{margin:0 0 6px;font:normal 18px/1.42 Arial,sans-serif;color:#0f172a}',
    '#preview .mbb-nav-cep-caption{margin:9px 0 0;font:12px/1.45 Arial,sans-serif;color:#475569}',
    '#preview [data-mbb-cep-demo]{cursor:pointer;touch-action:manipulation}',
    '.mbb-nav-fiel [data-mbb-demo-action]{cursor:pointer;touch-action:manipulation}'
  ].join('\n');
  document.head.appendChild(css);

  function activeStepId(){
    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') return null;
    const active=document.querySelector('#menu .nav-btn.active');
    const prefix='btn-navegacao-';
    return active?.id?.startsWith(prefix) ? active.id.slice(prefix.length) : null;
  }

  function part(tag,cls,text){
    const el=document.createElement(tag);
    if(cls) el.className=cls;
    if(text!==undefined) el.textContent=text;
    return el;
  }

  function resultBlock(kind,compact){
    const data=DATA[kind];
    const box=part('div',compact ? 'mbb-nav-cep-result' : 'mbb-nav-fiel-result is-'+kind);
    box.setAttribute('aria-label','Exemplo ilustrativo do resultado');
    box.setAttribute('role','status');
    data.rows.forEach(row=>{
      box.appendChild(part('p',compact ? 'mbb-nav-cep-result-line' : 'mbb-nav-fiel-result-line',row));
    });
    const caption=part('p',compact ? 'mbb-nav-cep-caption' : 'mbb-nav-fiel-demo-caption',data.caption);
    box.appendChild(caption);
    return box;
  }

  // Etapa 7 — mantém a visualização do Snack já existente, em vez de desenhar outra.
  function setupCep(){
    if(activeStepId()!==DEMO_STEP) return;
    const preview=document.getElementById('preview');
    if(!preview) return;
    const all=Array.from(preview.querySelectorAll('div'));
    const exact=t=>all.find(el=>el.textContent.trim()===t && el.children.length===0);
    const search=exact('Pesquisar');
    const clear=exact('Limpar');
    const placeholder=exact('Digite o CEP');
    if(!search || !clear || !placeholder || search.parentElement!==clear.parentElement) return;
    search.dataset.mbbCepDemo='pesquisar';
    clear.dataset.mbbCepDemo='limpar';
    placeholder.dataset.mbbCepField='1';
    [search,clear].forEach(el=>{
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.setAttribute('aria-label',el.textContent.trim()+' (demonstração ilustrativa)');
    });
    if(preview.dataset.mbbCepDemoBound==='1') return;
    preview.dataset.mbbCepDemoBound='1';

    function respond(action){
      if(activeStepId()!==DEMO_STEP) return;
      const actions=preview.querySelector('[data-mbb-cep-demo="pesquisar"]')?.parentElement;
      const field=preview.querySelector('[data-mbb-cep-field]');
      if(!actions || !field) return;
      const old=preview.querySelector('.mbb-nav-cep-result');
      if(old) old.remove();
      if(action==='limpar'){
        field.textContent='Digite o CEP';
        field.style.color='#94a3b8';
        return;
      }
      field.textContent='01001-000';
      field.style.color='#0f172a';
      actions.insertAdjacentElement('afterend',resultBlock('cep',true));
    }

    preview.addEventListener('click',event=>{
      const t=event.target.closest('[data-mbb-cep-demo]');
      if(t && preview.contains(t)) respond(t.dataset.mbbCepDemo);
    });
    preview.addEventListener('keydown',event=>{
      if(event.key!=='Enter' && event.key!==' ') return;
      const t=event.target.closest('[data-mbb-cep-demo]');
      if(t && preview.contains(t)){
        event.preventDefault();
        respond(t.dataset.mbbCepDemo);
      }
    });
  }

  // Etapas 8–10 — utiliza a moldura e os componentes já existentes no site.
  function setupSpecial(){
    if(!SPECIAL_STEPS.has(activeStepId())) return;
    const panel=document.querySelector('#introView .mbb-nav-fiel');
    if(!panel) return;

    function enableActions(){
      const actions=panel.querySelector('.mbb-nav-fiel-actions');
      if(!actions) return;
      const buttons=Array.from(actions.querySelectorAll('button'));
      if(buttons.length!==2) return;
      const [consult,clear]=buttons;
      consult.disabled=false;
      clear.disabled=false;
      consult.dataset.mbbDemoAction='consultar';
      clear.dataset.mbbDemoAction='limpar';
      consult.title='Mostrar exemplo ilustrativo; consultas reais são feitas no Snack';
      clear.title='Limpar a demonstração';
    }

    // Ao trocar de serviço, a função original já recria sua tela.
    // Nossa rotina só habilita os dois botões recém-criados.
    enableActions();
    const foot=panel.querySelector('.mbb-nav-fiel-foot');
    if(foot){
      foot.textContent='Resultados de exemplo nesta prévia. Para dados reais, execute as consultas no Snack.';
    }
    if(panel.dataset.mbbDemoBound==='1') return;
    panel.dataset.mbbDemoBound='1';

    panel.addEventListener('click',event=>{
      const routeButton=event.target.closest('[data-go]');
      if(routeButton){
        // O listener da navegação, registrado antes deste, já tratou a troca.
        enableActions();
        return;
      }
      const target=event.target.closest('[data-mbb-demo-action]');
      if(!target || !panel.contains(target)) return;
      const body=panel.querySelector('.mbb-nav-fiel-body');
      if(!body) return;
      const heading=body.querySelector('.mbb-nav-fiel-h2')?.textContent?.trim();
      const kind=heading==='Busca CEP'?'cep'
        :heading==='Cotação do Dólar'?'dolar'
        :heading==='Clima Atual'?'clima':null;
      if(!kind) return;
      body.querySelector('.mbb-nav-fiel-result')?.remove();
      if(kind==='cep'){
        const field=body.querySelector('.mbb-nav-fiel-input');
        if(field){
          field.textContent=target.dataset.mbbDemoAction==='limpar'?'Digite o CEP':'01001-000';
          field.style.color=target.dataset.mbbDemoAction==='limpar'?'#94a3b8':'#0f172a';
        }
      }
      if(target.dataset.mbbDemoAction==='consultar'){
        body.appendChild(resultBlock(kind,false));
      }
    });
  }

  function sync(){
    const id=activeStepId();
    if(id===DEMO_STEP) setupCep();
    else if(SPECIAL_STEPS.has(id)) setupSpecial();
  }

  if(typeof showStep==='function'){
    const previous=showStep;
    showStep=function mbbNavDemoDeResultados(id){
      const result=previous.apply(this,arguments);
      sync();
      return result;
    };
  }
  sync();
})();
