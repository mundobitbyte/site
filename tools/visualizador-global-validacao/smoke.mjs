import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

for (const file of [
  'css/mbb-visualizador.css',
  'js/mbb-visualizador.js',
  'js/mbb-visualizador-piloto.js',
  'pages/programacao.html',
  'pages/arduino-protocolos.html',
  'fundamentos-informatica/index.html'
]) {
  try { await fs.access(file); } catch { failures.push(`Arquivo obrigatório ausente: ${file}`); }
}

const candidates = ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) {
  try { await fs.access(candidate); executablePath = candidate; break; } catch {}
}
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] });

async function snapshot(page) {
  return page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    marked: document.querySelectorAll('[data-mbb-ampliavel]').length,
    triggers: document.querySelectorAll('[data-mbb-visualizador-trigger]').length,
    viewerExists: Boolean(document.getElementById('mbbVisualizador')),
    errors: window.__mbbPageErrors || []
  }));
}

async function openAndCheck(page, expectedMode, label) {
  const trigger = await page.$('[data-mbb-visualizador-trigger]');
  assert(Boolean(trigger), `${label}: gatilho de ampliação não encontrado.`);
  if (!trigger) return;

  await trigger.click();
  await page.waitForFunction(() => {
    const v = document.getElementById('mbbVisualizador');
    return v && !v.hidden;
  });

  const opened = await page.evaluate((expectedMode) => {
    const viewer = document.getElementById('mbbVisualizador');
    const table = viewer.querySelector('.mbb-visualizador-table-clone');
    const graphic = viewer.querySelector('.mbb-visualizador-grafico');
    return {
      modal: viewer.getAttribute('aria-modal'),
      bodyLocked: document.body.classList.contains('mbb-visualizador-aberto'),
      hasTable: Boolean(table),
      hasGraphic: Boolean(graphic),
      rotateHidden: viewer.querySelector('[data-mbb-view-action="rotate"]').hidden,
      readableHidden: viewer.querySelector('[data-mbb-view-action="readable"]').hidden,
      sourceStillPresent: document.querySelectorAll('[data-mbb-ampliavel]').length === 1,
      expectedMode
    };
  }, expectedMode);

  assert(opened.modal === 'true', `${label}: visualizador não abriu como dialog modal.`);
  assert(opened.bodyLocked, `${label}: fundo não foi bloqueado ao abrir.`);
  assert(opened.sourceStillPresent, `${label}: conteúdo original foi removido ou duplicado indevidamente.`);
  if (expectedMode === 'tabela') {
    assert(opened.hasTable, `${label}: clone da tabela não foi criado.`);
    assert(!opened.hasGraphic, `${label}: tabela abriu no modo gráfico.`);
    assert(opened.rotateHidden, `${label}: Girar deveria ficar oculto para tabela.`);
    assert(!opened.readableHidden, `${label}: Tamanho legível deveria aparecer para tabela.`);
  } else {
    assert(opened.hasGraphic, `${label}: conteúdo gráfico não foi criado.`);
    assert(!opened.hasTable, `${label}: gráfico abriu no modo tabela.`);
    assert(!opened.rotateHidden, `${label}: Girar deveria aparecer para gráfico.`);
    assert(opened.readableHidden, `${label}: Tamanho legível deveria ficar oculto para gráfico.`);
  }

  const beforeZoom = await page.$eval('#mbbVisualizadorZoom', el => el.textContent.trim());
  await page.click('[data-mbb-view-action="plus"]');
  const afterZoom = await page.$eval('#mbbVisualizadorZoom', el => el.textContent.trim());
  assert(beforeZoom !== afterZoom, `${label}: zoom + não alterou o percentual.`);

  if (expectedMode === 'grafico') {
    const beforeTransform = await page.$eval('.mbb-visualizador-grafico', el => el.style.transform);
    await page.click('[data-mbb-view-action="rotate"]');
    const afterTransform = await page.$eval('.mbb-visualizador-grafico', el => el.style.transform);
    assert(beforeTransform !== afterTransform && afterTransform.includes('90deg'), `${label}: Girar não aplicou rotação de 90°.`);
  }

  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.getElementById('mbbVisualizador')?.hidden === true);
  const closed = await page.evaluate(() => ({
    hidden: document.getElementById('mbbVisualizador').hidden,
    bodyUnlocked: !document.body.classList.contains('mbb-visualizador-aberto'),
    sourceCount: document.querySelectorAll('[data-mbb-ampliavel]').length
  }));
  assert(closed.hidden && closed.bodyUnlocked, `${label}: ESC não fechou/restaurou a página.`);
  assert(closed.sourceCount === 1, `${label}: conteúdo original não permaneceu após fechar.`);
}

try {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => {
    window.__mbbPageErrors = [];
    window.addEventListener('error', e => window.__mbbPageErrors.push(String(e.message || e.error || 'erro')));
    window.addEventListener('unhandledrejection', e => window.__mbbPageErrors.push(String(e.reason || 'rejeição')));
  });

  for (const viewport of [
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'desktop-1366', width: 1366, height: 900 }
  ]) {
    await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });

    // 1) Programação — fluxograma complexo.
    await page.goto(`${base}/pages/programacao.html`, { waitUntil: 'networkidle0' });
    await page.click('[data-module="pensar"]');
    const navCount = await page.$$eval('#menu .nav-btn', els => els.length);
    let foundProgramacao = false;
    for (let i = 0; i < navCount; i++) {
      const buttons = await page.$$('#menu .nav-btn');
      await buttons[i].click();
      await new Promise(r => setTimeout(r, 40));
      if (await page.$('[data-mbb-ampliavel="grafico"]')) { foundProgramacao = true; break; }
    }
    assert(foundProgramacao, `${viewport.name}/Programação: Fluxograma 4 não foi marcado.`);
    let snap = await snapshot(page);
    assert(snap.marked === 1, `${viewport.name}/Programação: esperado 1 item ampliável; encontrou ${snap.marked}.`);
    assert(snap.triggers === 1, `${viewport.name}/Programação: esperado 1 gatilho; encontrou ${snap.triggers}.`);
    assert(snap.scrollWidth <= snap.innerWidth + 2, `${viewport.name}/Programação: overflow horizontal global.`);
    assert(snap.errors.length === 0, `${viewport.name}/Programação: erros JS: ${snap.errors.join(' | ')}`);
    await openAndCheck(page, 'grafico', `${viewport.name}/Programação`);

    // 2) Arduino — circuito técnico I2C.
    await page.goto(`${base}/pages/arduino-protocolos.html#b8-2`, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => document.querySelector('[data-mbb-circuito="b8-2"] .circuitFigure'));
    await page.waitForFunction(() => document.querySelector('[data-mbb-ampliavel="grafico"]'));
    snap = await snapshot(page);
    assert(snap.marked === 1, `${viewport.name}/Arduino: esperado 1 item ampliável; encontrou ${snap.marked}.`);
    assert(snap.triggers === 1, `${viewport.name}/Arduino: esperado 1 gatilho; encontrou ${snap.triggers}.`);
    assert(snap.scrollWidth <= snap.innerWidth + 2, `${viewport.name}/Arduino: overflow horizontal global.`);
    assert(snap.errors.length === 0, `${viewport.name}/Arduino: erros JS: ${snap.errors.join(' | ')}`);
    await openAndCheck(page, 'grafico', `${viewport.name}/Arduino`);

    // 3) Fundamentos — tabela larga de pesos binários.
    await page.goto(`${base}/fundamentos-informatica/index.html#bits-bytes`, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => document.querySelector('[data-mbb-ampliavel="tabela"]'));
    snap = await snapshot(page);
    assert(snap.marked === 1, `${viewport.name}/Fundamentos: esperado 1 item ampliável; encontrou ${snap.marked}.`);
    assert(snap.triggers === 1, `${viewport.name}/Fundamentos: esperado 1 gatilho; encontrou ${snap.triggers}.`);
    assert(snap.scrollWidth <= snap.innerWidth + 2, `${viewport.name}/Fundamentos: overflow horizontal global.`);
    assert(snap.errors.length === 0, `${viewport.name}/Fundamentos: erros JS: ${snap.errors.join(' | ')}`);
    await openAndCheck(page, 'tabela', `${viewport.name}/Fundamentos`);
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nFalhas do piloto do Visualizador Global MbB:');
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log('Piloto do Visualizador Global MbB aprovado em mobile e desktop.');
