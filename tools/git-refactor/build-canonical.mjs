import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { JSDOM, VirtualConsole } from 'jsdom';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const originPage = path.join(root, 'pages/git-refatoracao-origem.html');
const canonicalPage = path.join(root, 'pages/git-refatorado.html');

const waitFor = async (predicate, timeoutMs = 20000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (predicate()) return;
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  throw new Error('Tempo esgotado aguardando a página de refatoração.');
};

const makeDom = async file => {
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => {
    const message = String(error?.message || error);
    if (!message.includes('Not implemented: window.scrollTo')) console.error('[jsdom]', message);
  });
  const dom = await JSDOM.fromFile(file, {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.scrollTo = () => {};
      if (window.HTMLElement) window.HTMLElement.prototype.scrollIntoView = () => {};
    }
  });
  return dom;
};

const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const escapeAttr = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\r/g, '&#13;')
  .replace(/\n/g, '&#10;');

const normalizeCopyMetadata = html => String(html || '')
  .replace(/\sdata-copy-key="[^"]*"/g, '')
  .replace(/\sdata-copy-text="[^"]*"/g, '')
  .replace(/\sdata-rede-copy=(?:"[^"]*"|'[^']*')/g, '');

const normalizeStep = step => ({
  id: String(step.id),
  menu: step.menu || '',
  title: step.title || '',
  objective: step.objective || '',
  content: normalizeCopyMetadata(step.content || '')
});

const canonicalizeCommandCopy = (steps, document) => steps.map(step => {
  if (!step?.content || !step.content.includes('data-copy-key=')) return step;
  let content = step.content;
  const holder = document.createElement('div');
  holder.innerHTML = step.content;
  holder.querySelectorAll('[data-copy-key]').forEach(button => {
    const key = button.getAttribute('data-copy-key');
    const card = button.closest('.command-ref-card');
    const code = card?.querySelector('.command-ref-code code, .command-ref-code');
    if (!key || !code) throw new Error(`Não foi possível resolver o botão Copiar ${key}.`);
    const command = code.textContent;
    content = content.replace(`data-copy-key="${key}"`, `data-copy-text="${escapeAttr(command)}"`);
  });
  return {...step, content};
});

const writeDataFile = async (filename, declarations) => {
  const body = declarations.map(([name, value]) => `const ${name} = ${JSON.stringify(value, null, 2)};`).join('\n\n');
  await fs.writeFile(path.join(root, 'js', filename), `${body}\n`, 'utf8');
};

const coreJs = `const menu = document.getElementById('menu');
const lesson = document.getElementById('lesson');
const title = document.getElementById('stepTitle');
const objective = document.getElementById('objective');
const moduleButtons = [...document.querySelectorAll('.module-btn')];

const modules = {
  git: {label: 'Git', steps: gitSteps},
  github: {label: 'GitHub', steps: githubSteps},
  exercicios: {label: '99. Exercícios', steps: exerciseSteps},
  comandos: {label: 'Comandos', steps: commandSteps}
};

let activeModule = 'git';
let activeSteps = gitSteps;

function renderMenu(){
  menu.innerHTML = '<h3>Etapas</h3>';
  activeSteps.forEach(step => {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.id = \`btn-\${activeModule}-\${step.id}\`;
    button.textContent = step.menu;
    button.type = 'button';
    button.addEventListener('click', () => showStep(step.id));
    menu.appendChild(button);
  });
}

function setModule(moduleKey, stepId = null, updateHash = true){
  if(!modules[moduleKey]) moduleKey = 'git';
  activeModule = moduleKey;
  activeSteps = modules[moduleKey].steps;
  moduleButtons.forEach(button => {
    const isActive = button.dataset.module === activeModule;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
  renderMenu();
  const target = activeSteps.find(item => String(item.id) === String(stepId)) || activeSteps[0];
  showStep(target.id, updateHash);
}

function showStep(id, updateHash = true){
  const step = activeSteps.find(item => String(item.id) === String(id)) || activeSteps[0];
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.getElementById(\`btn-\${activeModule}-\${step.id}\`);
  if(active){
    active.classList.add('active');
    active.setAttribute('aria-current', 'page');
    active.scrollIntoView({block:'nearest', inline:'nearest'});
  }
  title.textContent = step.title;
  objective.innerHTML = \`<strong>Objetivo:</strong> \${step.objective}\`;
  lesson.innerHTML = \`\${step.content}\${lessonFooter(step.id)}\`;
  lesson.scrollTop = 0;
  window.scrollTo({top:0, behavior:'auto'});
  if(updateHash) history.replaceState(null, '', \`#\${activeModule}-\${step.id}\`);
}

function lessonFooter(id){
  const index = activeSteps.findIndex(item => String(item.id) === String(id));
  const prev = activeSteps[index - 1];
  const next = activeSteps[index + 1];
  const lastLabel = activeModule === 'git' ? 'Parte Git concluída' : activeModule === 'github' ? 'GitHub concluído' : 'Exercícios concluídos';
  return \`
    <div class="lesson-footer">
      <button type="button" \${prev ? \`onclick="showStep('\\\${prev.id}')"\` : 'disabled'}>← Anterior</button>
      <button type="button" \${next ? \`onclick="showStep('\\\${next.id}')"\` : 'disabled'}>\${next ? 'Próxima →' : lastLabel}</button>
    </div>\`;
}

window.setModule = setModule;
window.showStep = showStep;

moduleButtons.forEach(button => button.addEventListener('click', () => setModule(button.dataset.module)));

const oldHash = location.hash.match(/^#etapa-(\\d+)$/);
const newHash = location.hash.match(/^#(git|github|exercicios|comandos)-(.+)$/);
if(newHash){
  setModule(newHash[1], decodeURIComponent(newHash[2]), false);
}else if(oldHash){
  setModule('git', oldHash[1], false);
}else{
  setModule('git', 1, false);
}
`;

const uiJs = `(() => {
  const lessonEl = document.getElementById('lesson');
  const checkpointUrl = '../assets/git-github-checkpoint-comandos.txt?v=7';

  lessonEl.addEventListener('click', async event => {
    const copyButton = event.target.closest('[data-copy-text],[data-rede-copy]');
    if (copyButton) {
      const text = copyButton.getAttribute('data-copy-text') || copyButton.getAttribute('data-rede-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      const original = copyButton.textContent;
      copyButton.textContent = 'Copiado!';
      copyButton.classList.add('copied');
      window.setTimeout(() => {
        copyButton.textContent = original;
        copyButton.classList.remove('copied');
      }, 1400);
      return;
    }

    if (event.target.closest('[data-checkpoint-open]')) {
      window.open(checkpointUrl, '_blank', 'noopener');
      return;
    }

    if (event.target.closest('[data-checkpoint-download]')) {
      const link = document.createElement('a');
      link.href = checkpointUrl;
      link.download = 'git-github-checkpoint-comandos.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  });

  window.__MBB_GIT_CANONICAL_SNAPSHOT__ = {
    gitSteps: JSON.parse(JSON.stringify(gitSteps)),
    githubSteps: JSON.parse(JSON.stringify(githubSteps)),
    exerciseSteps: JSON.parse(JSON.stringify(exerciseSteps)),
    commandSteps: JSON.parse(JSON.stringify(commandSteps))
  };
  window.__MBB_GIT_CANONICAL_READY__ = true;
})();
`;

const canonicalCss = `.command.command-example,
.command-ref-code.command-example{
  background:#f8fafc;
  color:#172033;
  border:1px dashed #94a3b8;
}
.command.command-example::before,
.command-ref-code.command-example::before{
  content:"EXEMPLO / SAÍDA — não execute literalmente";
  display:block;
  margin:0 0 8px;
  color:#64748b;
  font-family:"Segoe UI",Arial,sans-serif;
  font-size:11px;
  font-weight:900;
  letter-spacing:.04em;
  white-space:normal;
}
`;

const pageHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="noindex,nofollow"/>
  <title>Mundo bit Byte — Git e GitHub — Prévia canônica</title>
  <link href="../css/git.css?v=6" rel="stylesheet"/>
  <link href="../css/git-comandos.css?v=2" rel="stylesheet"/>
  <link href="../css/git-canonico.css?v=1" rel="stylesheet"/>
</head>
<body>
<header><div class="header-left"><a class="portal-link" href="../index.html">← Mundo bit Byte</a><h1>Git e GitHub — Prévia canônica</h1></div><div class="brand">Professor Ronaldo Lavestein</div></header>
<div class="module-menu" id="moduleMenu" aria-label="Seções do módulo">
  <button class="module-btn active" type="button" data-module="git">Git</button>
  <button class="module-btn" type="button" data-module="github">GitHub</button>
  <button class="module-btn" type="button" data-module="exercicios">99. Exercícios</button>
  <button class="module-btn" type="button" data-module="comandos">Comandos</button>
</div>
<div class="layout"><nav id="menu" aria-label="Etapas do módulo"><h3>Etapas</h3></nav><main><div class="top-row"><h2 id="stepTitle"></h2><div class="objective" id="objective"></div></div><section class="lesson" id="lesson" aria-live="polite"></section></main></div>
<script src="../js/git-conteudo-canonico.js?v=1"></script>
<script src="../js/git-exercicios-canonico.js?v=1"></script>
<script src="../js/git-comandos-canonico.js?v=1"></script>
<script src="../js/git-core-canonico.js?v=1"></script>
<script src="../js/git-ui-canonico.js?v=1"></script>
</body>
</html>`;

console.log('1/5 Carregando arquitetura atual...');
const legacyDom = await makeDom(originPage);
await waitFor(() => legacyDom.window.__MBB_GIT_REFACTOR_VALIDATION__);
const legacyValidation = legacyDom.window.__MBB_GIT_REFACTOR_VALIDATION__;
if (!legacyValidation.ok) throw new Error(`Arquitetura atual falhou na validação: ${legacyValidation.failures.join(' | ')}`);
const legacy = legacyDom.window.__MBB_GIT_REFACTOR_SNAPSHOT__;
if (!legacy) throw new Error('Snapshot legado não foi exposto.');

console.log('2/5 Gerando fontes canônicas...');
const canonicalCommandSteps = canonicalizeCommandCopy(legacy.commandSteps, legacyDom.window.document);
await writeDataFile('git-conteudo-canonico.js', [['gitSteps', legacy.gitSteps], ['githubSteps', legacy.githubSteps]]);
await writeDataFile('git-exercicios-canonico.js', [['exerciseSteps', legacy.exerciseSteps]]);
await writeDataFile('git-comandos-canonico.js', [['commandSteps', canonicalCommandSteps]]);
await fs.writeFile(path.join(root, 'js/git-core-canonico.js'), coreJs, 'utf8');
await fs.writeFile(path.join(root, 'js/git-ui-canonico.js'), uiJs, 'utf8');
await fs.writeFile(path.join(root, 'css/git-canonico.css'), canonicalCss, 'utf8');
await fs.writeFile(canonicalPage, pageHtml, 'utf8');

console.log('3/5 Carregando arquitetura canônica...');
const canonicalDom = await makeDom(canonicalPage);
await waitFor(() => canonicalDom.window.__MBB_GIT_CANONICAL_READY__);
const canonical = canonicalDom.window.__MBB_GIT_CANONICAL_SNAPSHOT__;
if (!canonical) throw new Error('Snapshot canônico não foi exposto.');

console.log('4/5 Comparando equivalência...');
const groups = ['gitSteps', 'githubSteps', 'exerciseSteps', 'commandSteps'];
const comparison = {};
let equivalent = true;
for (const group of groups) {
  const before = legacy[group].map(normalizeStep);
  const after = canonical[group].map(normalizeStep);
  const beforeJson = JSON.stringify(before);
  const afterJson = JSON.stringify(after);
  const same = beforeJson === afterJson;
  comparison[group] = {
    same,
    countBefore: before.length,
    countAfter: after.length,
    sha256Before: sha(beforeJson),
    sha256After: sha(afterJson)
  };
  if (!same) equivalent = false;
}

const expected = {gitSteps:12, githubSteps:10, exerciseSteps:23};
for (const [group, count] of Object.entries(expected)) {
  if (canonical[group].length !== count) {
    equivalent = false;
    comparison[group].countError = `Esperado ${count}, encontrado ${canonical[group].length}`;
  }
}
const numberedExercises = canonical.exerciseSteps.filter(step => /^e\d+$/.test(String(step.id))).length;
if (numberedExercises !== 22) {
  equivalent = false;
  comparison.exerciseSteps.numberedError = `Esperados 22 exercícios numerados; encontrados ${numberedExercises}.`;
}

const allText = groups.flatMap(group => canonical[group]).map(step => `${step.menu || ''}\n${step.title || ''}\n${step.objective || ''}\n${step.content || ''}`).join('\n');
const semanticChecks = {
  onlyGitCmd: !allText.includes('Prompt de Comando') && !allText.includes('CMD do Windows'),
  noOldBranchPlaceholder: !allText.includes('NOME-DA-BRANCH'),
  safeDirectory: allText.includes('safe.directory'),
  mergeNoEdit: allText.includes('git merge --no-edit teste-reservas') && allText.includes('git merge --no-edit teste-divulgacao'),
  destructiveCopyRemoved: !canonical.commandSteps.find(step => String(step.id) === 'diagnostico')?.content.includes('data-rede-copy="rmdir /s /q .git"')
};
if (Object.values(semanticChecks).some(value => !value)) equivalent = false;

const report = {
  generatedAt: new Date().toISOString(),
  equivalent,
  comparison,
  semanticChecks,
  architecture: {
    legacyRuntimeScripts: 15,
    canonicalScripts: 5,
    canonicalFiles: [
      'js/git-conteudo-canonico.js',
      'js/git-exercicios-canonico.js',
      'js/git-comandos-canonico.js',
      'js/git-core-canonico.js',
      'js/git-ui-canonico.js',
      'css/git-canonico.css',
      'pages/git-refatorado.html'
    ]
  }
};
await fs.writeFile(path.join(root, 'GIT_ARQUITETURA_MBB_EQUIVALENCIA.json'), JSON.stringify(report, null, 2) + '\n', 'utf8');

console.log('5/5 Resultado:', equivalent ? 'EQUIVALENTE' : 'DIVERGENTE');
console.log(JSON.stringify(report, null, 2));
if (!equivalent) process.exit(1);
