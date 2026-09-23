import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const candidates = ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) {
  try {
    await fs.access(candidate);
    executablePath = candidate;
    break;
  } catch {}
}
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const attachErrorCapture = page => {
  const errors = [];
  page.on('pageerror', error => errors.push(String(error?.message || error)));
  return errors;
};

const expectedCounts = {git: 12, github: 10, exercicios: 23, comandos: 12};
const critical = [
  ['git', '2', 'Git CMD'],
  ['git', '3', 'safe.directory'],
  ['git', '4', 'git init'],
  ['github', '1', 'escolha Public'],
  ['github', '9', 'git merge --no-edit teste-reservas'],
  ['github', '10', 'git pull --no-rebase --no-edit'],
  ['exercicios', 'e2', 'detected dubious ownership'],
  ['exercicios', 'e20', 'git merge --no-edit teste-divulgacao'],
  ['comandos', 'rede', 'safe.directory'],
  ['comandos', 'diagnostico', 'rmdir /s /q .git'],
  ['comandos', 'checkpoint', 'Perdeu uma aula']
];

const testCanonicalPage = async (pathname, label, legacyCounts) => {
  const page = await browser.newPage();
  const pageErrors = attachErrorCapture(page);
  await page.setViewport({width: 1366, height: 900});
  await page.goto(`${base}${pathname}`, {waitUntil: 'networkidle0'});
  await page.waitForFunction(() => window.__MBB_GIT_CANONICAL_READY__ === true, {timeout: 20000});

  for (const [module, expected] of Object.entries(expectedCounts)) {
    await page.evaluate(moduleName => window.setModule(moduleName, null, false), module);
    const count = await page.$$eval('#menu .nav-btn', buttons => buttons.length);
    assert(count === expected, `${label}/${module}: esperados ${expected} itens de menu; encontrados ${count}.`);
    assert(legacyCounts[module] === expected, `${label}/${module}: origem não possui a contagem esperada.`);
  }

  for (const [module, id, needle] of critical) {
    await page.evaluate((moduleName, stepId) => window.setModule(moduleName, stepId, false), module, id);
    const text = await page.$eval('#lesson', el => el.textContent);
    assert(text.includes(needle), `${label}/${module}/${id}: não encontrou "${needle}".`);
  }

  await page.evaluate(() => window.setModule('comandos', 'diagnostico', false));
  const destructiveCopy = await page.$$eval('[data-copy-text],[data-rede-copy]', buttons =>
    buttons.some(button => (button.getAttribute('data-copy-text') || button.getAttribute('data-rede-copy') || '').includes('rmdir /s /q .git'))
  );
  assert(!destructiveCopy, `${label}: diagnóstico voltou a oferecer botão Copiar para rmdir /s /q .git.`);

  await page.evaluate(() => window.setModule('comandos', 'checkpoint', false));
  assert(await page.$('[data-checkpoint-open]') !== null, `${label}: checkpoint perdeu o botão Abrir arquivo.`);
  assert(await page.$('[data-checkpoint-download]') !== null, `${label}: checkpoint perdeu o botão Baixar .TXT.`);

  await page.evaluate(() => window.setModule('git', '1', false));
  const next = await page.$('.lesson-footer [data-step-nav]');
  assert(next !== null, `${label}: rodapé não criou navegação para a próxima etapa.`);
  if (next) {
    await next.click();
    await page.waitForFunction(() => document.getElementById('stepTitle')?.textContent?.startsWith('2 —'), {timeout: 5000});
    const activeTitle = await page.$eval('#stepTitle', el => el.textContent);
    assert(activeTitle.startsWith('2 —'), `${label}: rodapé não avançou para a etapa 2: ${activeTitle}`);
  }

  const currentHashBefore = await page.evaluate(() => location.hash);
  await page.evaluate(() => window.setModule('git', '4', true));
  const currentHashAfter = await page.evaluate(() => location.hash);
  assert(currentHashAfter === '#git-4', `${label}: hash de navegação incorreto: ${currentHashBefore} → ${currentHashAfter}`);

  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});
  await page.reload({waitUntil: 'networkidle0'});
  await page.waitForFunction(() => window.__MBB_GIT_CANONICAL_READY__ === true, {timeout: 20000});
  const mobile = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    title: document.getElementById('stepTitle')?.textContent || '',
    buttons: document.querySelectorAll('.module-btn').length
  }));
  assert(mobile.scrollWidth <= mobile.innerWidth + 2, `${label}: layout móvel criou rolagem horizontal global: ${mobile.scrollWidth}px para ${mobile.innerWidth}px.`);
  assert(mobile.buttons === 4, `${label}: layout móvel perdeu botões de módulo: ${mobile.buttons}.`);
  assert(Boolean(mobile.title), `${label}: layout móvel não renderizou o título da etapa.`);

  assert(pageErrors.length === 0, `${label}: arquitetura canônica gerou erros JS: ${pageErrors.join(' | ')}`);
  await page.close();
  return mobile;
};

try {
  const legacy = await browser.newPage();
  const legacyErrors = attachErrorCapture(legacy);
  await legacy.setViewport({width: 1366, height: 900});
  await legacy.goto(`${base}/pages/git-refatoracao-origem.html`, {waitUntil: 'networkidle0'});
  await legacy.waitForFunction(() => window.__MBB_GIT_REFACTOR_VALIDATION__?.ok === true, {timeout: 20000});
  const legacyCounts = await legacy.evaluate(() => ({
    git: window.__MBB_GIT_REFACTOR_SNAPSHOT__.gitSteps.length,
    github: window.__MBB_GIT_REFACTOR_SNAPSHOT__.githubSteps.length,
    exercicios: window.__MBB_GIT_REFACTOR_SNAPSHOT__.exerciseSteps.length,
    comandos: window.__MBB_GIT_REFACTOR_SNAPSHOT__.commandSteps.length
  }));
  assert(legacyErrors.length === 0, `Origem gerou erros JS: ${legacyErrors.join(' | ')}`);
  await legacy.close();

  const previewMobile = await testCanonicalPage('/pages/git-refatorado.html', 'prévia', legacyCounts);
  const productionMobile = await testCanonicalPage('/pages/git.html', 'página pública da branch', legacyCounts);

  if (failures.length) {
    console.error('FALHAS DO TESTE REAL EM NAVEGADOR:');
    failures.forEach(item => console.error(`- ${item}`));
    process.exit(1);
  }

  console.log('NAVEGADOR REAL: OK');
  console.log(JSON.stringify({
    legacyCounts,
    desktopCriticalChecksPerPage: critical.length,
    previewMobile,
    productionMobile
  }, null, 2));
} finally {
  await browser.close();
}
