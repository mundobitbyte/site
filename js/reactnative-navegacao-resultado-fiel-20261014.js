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
