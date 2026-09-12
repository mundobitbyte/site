(() => {
  'use strict';

  const configs = {
    comunicacao: {
      menuTitle: 'Jornada de comunicação',
      labels: {
        1: 'Primeira resposta',
        2: 'Critério de sucesso',
        3: 'Material de referência',
        4: 'Perguntar antes',
        5: 'Formato e limites',
        6: 'Fato, hipótese e sugestão',
        7: 'Refinar sem refazer',
        8: 'Corrigir o rumo',
        9: 'Exemplos concretos',
        10: 'Dividir tarefas',
        11: 'Pedir crítica',
        12: 'Limpar contexto',
        13: 'Saber quando parar',
        14: 'Laboratório integrador',
        15: 'Síntese do módulo'
      }
    },
    produtividade: {
      menuTitle: 'Jornada de produtividade',
      labels: {
        1: 'Resultado útil',
        2: 'Material real',
        3: 'Fato, ação, dúvida e decisão',
        4: 'Quadro de ação',
        5: 'Públicos diferentes',
        6: 'Resumo com finalidade',
        7: 'Trabalho por etapas',
        8: 'Comparar versões',
        9: 'Dependências',
        10: 'Modelo reutilizável',
        11: 'Privacidade',
        12: 'Conferência final',
        13: 'Laboratório',
        14: 'Desafio'
      }
    },
    programacao: {
      menuTitle: 'Jornada de desenvolvimento',
      labels: {
        1: 'O projeto chega',
        2: 'Ler antes de mudar',
        3: 'Novo requisito',
        4: 'Comportamento esperado',
        5: 'Primeira alteração',
        6: 'Investigar o bug',
        7: 'Persistência necessária',
        8: 'Falha de persistência',
        9: 'Verificar a API',
        10: 'Separar para testar',
        11: 'Testes automatizados',
        12: 'Ambiente reproduzível',
        13: 'Proteger dados',
        14: 'Revisar o projeto',
        15: 'Agente no repositório',
        16: 'Laboratório final',
        17: 'Desafio de transferência'
      }
    },
    'etica-sociedade': {
      menuTitle: 'Jornada de decisão',
      labels: {
        1: 'Qual decisão está sendo tomada?',
        2: 'Dados necessários',
        3: 'Critérios e vieses',
        4: 'Correlação não é causa',
        5: 'Revisão e contestação',
        6: 'Autoria e responsabilidade',
        7: 'Conferir referências',
        8: 'Áudio, imagem e prova',
        9: 'Transparência útil',
        10: 'Benefício, risco e impacto',
        11: 'Automação com limites',
        12: 'Quem responde?',
        13: 'Laboratório',
        14: 'Desafio',
        15: 'Fechamento da trilha'
      }
    }
  };

  const css = `
    .ia-trilha-ready{overflow-x:hidden}
    .ia-trilha-ready .topbar{position:sticky;top:0;z-index:90}
    .ia-course-layout{display:grid;grid-template-columns:240px minmax(0,1fr);align-items:start;min-height:calc(100vh - 58px)}
    .ia-course-menu{position:sticky;top:58px;height:calc(100vh - 58px);overflow-y:auto;background:rgba(255,255,255,.94);border-right:1px solid #c8d8ee;padding:14px 10px 22px;backdrop-filter:blur(10px);z-index:40}
    .ia-course-menu::-webkit-scrollbar{width:8px}.ia-course-menu::-webkit-scrollbar-thumb{background:#9aa8b8;border-radius:999px}
    .ia-course-menu-box{background:#f7fbff;border:1px solid #d8e6f7;border-radius:14px;padding:10px}
    .ia-course-menu-title{color:#315575;font-size:.76rem;letter-spacing:.06em;font-weight:900;text-transform:uppercase;margin:0 2px 10px}
    .ia-course-nav{display:grid;gap:5px}
    .ia-course-link{display:grid;grid-template-columns:30px minmax(0,1fr);align-items:center;gap:8px;padding:8px 9px;border:1px solid transparent;border-radius:9px;color:#081a32!important;text-decoration:none!important;font-size:.86rem;font-weight:800;line-height:1.22;transition:.15s ease}
    .ia-course-link:hover{background:#eef5ff;border-color:#c7dcf8;color:#0f4c9b!important}
    .ia-course-link.active{background:#286dcc;color:#fff!important;border-color:#164b91;box-shadow:0 2px 6px rgba(15,76,155,.22)}
    .ia-course-num{display:grid;place-items:center;min-height:27px;border-radius:7px;background:#e7eef8;color:#315575;font-size:.72rem;font-weight:900}
    .ia-course-link.active .ia-course-num{background:rgba(255,255,255,.18);color:#fff}
    .ia-course-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
    .ia-course-hint{margin:10px 4px 0;color:#64748b;font-size:.76rem;line-height:1.35}
    .ia-course-layout>.container{width:100%;max-width:none;margin:0;padding:20px clamp(14px,2.4vw,28px) 44px}
    .ia-panel[hidden]{display:none!important}
    .ia-panel>.hero:first-child{padding:24px 26px;margin-bottom:16px}
    .ia-panel>.hero:first-child h1{font-size:clamp(2rem,3.2vw,2.85rem);line-height:1.08;margin-bottom:10px}
    .ia-panel>.hero:first-child .badge{margin-bottom:10px}
    .ia-panel-nav{display:flex;justify-content:space-between;gap:10px;margin-top:18px;padding-top:16px;border-top:1px solid #c8d8ee}
    .ia-panel-nav a{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px 13px;border:1px solid #bdd4f2;border-radius:9px;background:#fff;color:#0f4c9b!important;text-decoration:none!important;font-weight:900;font-size:.84rem}
    .ia-panel-nav a:hover{background:#eef6ff;border-color:#286dcc}
    .ia-panel-nav a.ia-next{margin-left:auto;background:#286dcc;color:#fff!important;border-color:#286dcc}
    .ia-panel-nav a.ia-next:hover{background:#0f4c9b}
    @media(max-width:980px){
      .ia-course-layout{display:block;min-height:auto}
      .ia-course-menu{position:sticky;top:58px;height:auto;overflow-x:auto;overflow-y:hidden;padding:8px 10px;border-right:0;border-bottom:1px solid #c8d8ee;z-index:70}
      .ia-course-menu-box{display:flex;align-items:center;gap:8px;width:max-content;min-width:100%;padding:0;border:0;background:transparent}
      .ia-course-menu-title,.ia-course-hint{display:none}
      .ia-course-nav{display:flex;gap:7px}
      .ia-course-link{display:flex;grid-template-columns:none;white-space:nowrap;background:#f7fbff;border-color:#d8e6f7;padding:7px 10px}
      .ia-course-num{min-width:26px;min-height:24px;padding:0 5px}
      .ia-course-label{display:block;overflow:visible}
      .ia-course-layout>.container{padding:14px}
      .ia-panel>.hero:first-child{padding:20px}
    }
    @media(max-width:720px){.ia-course-menu{top:46px}}
    @media(max-width:560px){
      .ia-panel>.hero:first-child{padding:17px}
      .ia-panel>.hero:first-child h1{font-size:2rem}
      .ia-panel-nav{display:grid}.ia-panel-nav a,.ia-panel-nav a.ia-next{width:100%;margin:0}
    }
  `;

  function injectStyles() {
    if (document.getElementById('ia-trilha-modulos-style')) return;
    const style = document.createElement('style');
    style.id = 'ia-trilha-modulos-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function sectionInfo(node) {
    if (!(node instanceof HTMLElement) || node.tagName !== 'SECTION') return null;
    const h2 = node.querySelector(':scope > h2');
    const text = h2?.textContent.trim() || '';
    const match = text.match(/^(\d+)\.\s*/);
    return {
      hero: node.classList.contains('hero'),
      next: node.classList.contains('next'),
      title: text,
      number: match ? Number(match[1]) : null
    };
  }

  function groupContent(container) {
    const nodes = Array.from(container.children);
    const groups = [];
    let current = null;
    let numberedStarted = false;
    let summaryCount = 0;

    const start = (kind, number = null, title = '') => {
      current = { kind, number, title, nodes: [] };
      groups.push(current);
    };

    nodes.forEach((node) => {
      const info = sectionInfo(node);

      if (info?.hero) {
        start('intro', null, 'Início');
      } else if (info?.number !== null) {
        numberedStarted = true;
        start('topic', info.number, info.title);
      } else if (info?.next) {
        if (!current) start('intro', null, 'Início');
      } else if (info && numberedStarted && info.title) {
        summaryCount += 1;
        start('summary', null, info.title || `Resumo ${summaryCount}`);
      } else if (!current) {
        start('intro', null, 'Início');
      }

      current.nodes.push(node);
    });

    return groups;
  }

  function labelFor(group, config) {
    if (group.kind === 'intro') return 'Início';
    if (group.kind === 'topic') return config.labels[group.number] || group.title.replace(/^\d+\.\s*/, '');
    return group.title || 'Resumo';
  }

  function init() {
    if (document.body.dataset.iaTrilhaReady === '1') return;

    const slug = window.location.pathname.split('/').pop().replace(/\.html?$/i, '');
    const config = configs[slug];
    const container = document.querySelector('body > .container');
    if (!config || !container) return;

    const groups = groupContent(container);
    if (groups.length < 2) return;

    injectStyles();

    const fragment = document.createDocumentFragment();
    let summaryIndex = 0;

    groups.forEach((group) => {
      const panel = document.createElement('div');
      panel.className = 'ia-panel';
      if (group.kind === 'intro') panel.id = 'inicio';
      else if (group.kind === 'topic') panel.id = `topico-${group.number}`;
      else {
        summaryIndex += 1;
        panel.id = summaryIndex === 1 ? 'resumo' : `resumo-${summaryIndex}`;
      }
      panel.dataset.menuLabel = labelFor(group, config);
      panel.dataset.menuNumber = group.kind === 'topic' ? String(group.number) : (group.kind === 'intro' ? '•' : '✓');
      group.nodes.forEach((node) => panel.appendChild(node));
      fragment.appendChild(panel);
    });

    container.replaceChildren(fragment);

    const panels = Array.from(container.querySelectorAll(':scope > .ia-panel'));
    panels.forEach((panel, index) => {
      const nav = document.createElement('nav');
      nav.className = 'ia-panel-nav';
      nav.setAttribute('aria-label', 'Navegação entre tópicos');

      if (index > 0) {
        const previous = document.createElement('a');
        previous.href = `#${panels[index - 1].id}`;
        previous.textContent = '← Anterior';
        nav.appendChild(previous);
      }

      if (index < panels.length - 1) {
        const next = document.createElement('a');
        next.href = `#${panels[index + 1].id}`;
        next.className = 'ia-next';
        next.textContent = 'Próximo →';
        nav.appendChild(next);
      }

      if (nav.childElementCount) panel.appendChild(nav);
    });

    const layout = document.createElement('div');
    layout.className = 'ia-course-layout';
    container.parentNode.insertBefore(layout, container);

    const aside = document.createElement('aside');
    aside.className = 'ia-course-menu';
    aside.setAttribute('aria-label', config.menuTitle);

    const box = document.createElement('div');
    box.className = 'ia-course-menu-box';

    const title = document.createElement('div');
    title.className = 'ia-course-menu-title';
    title.textContent = config.menuTitle;

    const nav = document.createElement('nav');
    nav.className = 'ia-course-nav';
    nav.setAttribute('aria-label', 'Tópicos do módulo');

    panels.forEach((panel) => {
      const link = document.createElement('a');
      link.className = 'ia-course-link';
      link.href = `#${panel.id}`;
      link.title = panel.dataset.menuLabel;
      link.innerHTML = `<span class="ia-course-num">${panel.dataset.menuNumber}</span><span class="ia-course-label">${panel.dataset.menuLabel}</span>`;
      nav.appendChild(link);
    });

    const hint = document.createElement('p');
    hint.className = 'ia-course-hint';
    hint.textContent = 'Avance por etapas. O menu mantém apenas o tópico atual em foco.';

    box.append(title, nav, hint);
    aside.appendChild(box);
    layout.append(aside, container);

    const links = Array.from(nav.querySelectorAll('.ia-course-link'));

    function panelFromHash() {
      const raw = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      if (!raw) return panels[0];
      const direct = document.getElementById(raw);
      return direct?.classList.contains('ia-panel') ? direct : direct?.closest('.ia-panel') || panels[0];
    }

    function activate(panel, focus = false) {
      panels.forEach((item) => { item.hidden = item !== panel; });
      links.forEach((link) => {
        const active = link.getAttribute('href') === `#${panel.id}`;
        link.classList.toggle('active', active);
        if (active) {
          link.setAttribute('aria-current', 'page');
          link.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        } else {
          link.removeAttribute('aria-current');
        }
      });

      if (focus) {
        const heading = panel.querySelector('h1, h2');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }

    layout.addEventListener('click', (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute('href'));
      const targetPanel = target?.classList.contains('ia-panel') ? target : target?.closest('.ia-panel');
      if (!targetPanel) return;
      event.preventDefault();
      history.pushState(null, '', `#${targetPanel.id}`);
      activate(targetPanel, true);
    });

    window.addEventListener('popstate', () => activate(panelFromHash(), false));
    window.addEventListener('hashchange', () => activate(panelFromHash(), false));

    document.body.dataset.iaTrilhaReady = '1';
    document.body.classList.add('ia-trilha-ready');

    const initial = panelFromHash();
    if (!window.location.hash) history.replaceState(null, '', `#${initial.id}`);
    activate(initial, false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
