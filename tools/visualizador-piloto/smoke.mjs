import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

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
for (const candidate of candidates) { try { await fs.access(candidate); executablePath = candidate; break; } catch {} }
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({executablePath, headless:true, args:['--no-sandbox','--disable-dev-shm-usage']});

async function prepareProgramacao(page) {
  await page.goto(`${base}/pages/programacao.html`, {waitUntil:'networkidle0'});
  await page.evaluate(() => document.querySelector('button[data-module="pensar"]')?.click());
  await wait(100);

  const count = await page.$$eval('#menu button', buttons => buttons.length);
  let found = false;
  for (let index = 0; index < count; index++) {
    const buttons = await page.$$('#menu button');
    if (!buttons[index]) continue;
    await buttons[index].click();
    await wait(80);
    found = await page.evaluate(() => [...document.querySelectorAll('.flowchart-panel-v3')].some(panel => {
      const heading = panel.querySelector('.flowchart-panel-heading strong')?.textContent.trim() || '';
      const aria = panel.querySelector('svg')?.getAttribute('aria-label') || '';
      return heading.startsWith('Fluxograma 4') || aria.includes('Fluxograma completo da cantina');
    }));
    if (found) break;
  }

  assert(found, 'Programação: Fluxograma 4 não foi localizado ao percorrer as etapas de Pensar.');
  if (found) {
    await page.waitForSelector('[data-mbb-ampliavel="grafico"][data-mbb-titulo="Fluxograma 4 — atendimento completo"]', {timeout:5000});
  }
}

async function prepareArduino(page) {
  await page.goto(`${base}/pages/arduino-protocolos.html#b8-2`, {waitUntil:'networkidle0'});
  await page.waitForSelector('[data-mbb-circuito="b8-2"] [data-mbb-ampliavel="grafico"]', {timeout:5000});
}

async function prepareFundamentos(page) {
  await page.goto(`${base}/fundamentos-informatica/index.html#bits-bytes`, {waitUntil:'networkidle0'});
  await page.waitForSelector('#lessonContent [data-mbb-ampliavel="tabela"]', {timeout:5000});
}

async function testGraphic(page, label) {
  const before = await page.evaluate(() => {
    const target = document.querySelector('[data-mbb-ampliavel="grafico"]');
    const source = target?.querySelector('svg,img');
    return {
      targets: document.querySelectorAll('[data-mbb-ampliavel="grafico"]').length,
      triggers: document.querySelectorAll('[data-mbb-visualizador-trigger]').length,
      sourceTag: source?.tagName || '',
      sourcePresent: Boolean(source),
      globalOverflow: document.documentElement.scrollWidth - window.innerWidth
    };
  });
  assert(before.targets === 1, `${label}: deveria haver exatamente um gráfico-piloto; encontrou ${before.targets}.`);
  assert(before.triggers === 1, `${label}: deveria haver exatamente um botão de ampliar; encontrou ${before.triggers}.`);
  assert(before.sourcePresent, `${label}: conteúdo gráfico original não encontrado.`);
  assert(before.globalOverflow <= 2, `${label}: piloto criou rolagem horizontal global (${before.globalOverflow}px).`);

  await page.click('[data-mbb-visualizador-trigger]');
  await wait(80);
  const opened = await page.evaluate(() => ({
    hidden: document.getElementById('mbbVisualizador')?.hidden,
    modal: document.getElementById('mbbVisualizador')?.getAttribute('aria-modal'),
    graphic: Boolean(document.querySelector('#mbbVisualizador .mbb-visualizador-grafico')),
    rotateHidden: document.querySelector('[data-mbb-view-action="rotate"]')?.hidden,
    readableHidden: document.querySelector('[data-mbb-view-action="readable"]')?.hidden,
    zoom: document.getElementById('mbbVisualizadorZoom')?.textContent
  }));
  assert(opened.hidden === false, `${label}: visualizador não abriu.`);
  assert(opened.modal === 'true', `${label}: visualizador não está marcado como modal.`);
  assert(opened.graphic, `${label}: clone gráfico não foi criado.`);
  assert(opened.rotateHidden === false, `${label}: Girar deveria estar disponível.`);
  assert(opened.readableHidden === true, `${label}: Tamanho legível não deveria aparecer para gráfico.`);
  assert(opened.zoom === '100%', `${label}: zoom inicial deveria ser 100%; encontrou ${opened.zoom}.`);

  await page.click('[data-mbb-view-action="plus"]');
  await page.click('[data-mbb-view-action="rotate"]');
  const transformed = await page.evaluate(() => ({
    zoom: document.getElementById('mbbVisualizadorZoom')?.textContent,
    transform: getComputedStyle(document.querySelector('.mbb-visualizador-grafico')).transform
  }));
  assert(transformed.zoom === '100%', `${label}: girar deve voltar o zoom a 100%; encontrou ${transformed.zoom}.`);
  assert(transformed.transform !== 'none', `${label}: Girar não aplicou transformação.`);

  await page.keyboard.press('Escape');
  const closed = await page.evaluate(() => ({
    hidden: document.getElementById('mbbVisualizador')?.hidden,
    sourceStillPresent: Boolean(document.querySelector('[data-mbb-ampliavel="grafico"] svg, [data-mbb-ampliavel="grafico"] img')),
    bodyLocked: document.body.classList.contains('mbb-visualizador-aberto')
  }));
  assert(closed.hidden === true, `${label}: ESC não fechou o visualizador.`);
  assert(closed.sourceStillPresent, `${label}: conteúdo original desapareceu após fechar.`);
  assert(!closed.bodyLocked, `${label}: body permaneceu bloqueado após fechar.`);
}

async function testTable(page, label) {
  const before = await page.evaluate(() => {
    const target = document.querySelector('[data-mbb-ampliavel="tabela"]');
    const table = target?.querySelector('table');
    return {
      targets: document.querySelectorAll('[data-mbb-ampliavel="tabela"]').length,
      triggers: document.querySelectorAll('[data-mbb-visualizador-trigger]').length,
      headers: table ? table.querySelectorAll('th').length : 0,
      cells: table ? table.querySelectorAll('th,td').length : 0,
      first: table?.querySelector('th')?.textContent.trim() || '',
      globalOverflow: document.documentElement.scrollWidth - window.innerWidth
    };
  });
  assert(before.targets === 1, `${label}: deveria haver exatamente uma tabela-piloto; encontrou ${before.targets}.`);
  assert(before.triggers === 1, `${label}: deveria haver exatamente um botão "Ver tabela completa"; encontrou ${before.triggers}.`);
  assert(before.headers === 9 && before.cells === 18 && before.first === 'Casa', `${label}: tabela original foi alterada inesperadamente.`);
  assert(before.globalOverflow <= 2, `${label}: piloto criou rolagem horizontal global (${before.globalOverflow}px).`);

  await page.click('[data-mbb-visualizador-trigger]');
  await wait(80);
  const opened = await page.evaluate(() => ({
    hidden: document.getElementById('mbbVisualizador')?.hidden,
    cloneTag: document.querySelector('#mbbVisualizador .mbb-visualizador-table-clone')?.tagName,
    cloneHeaders: document.querySelectorAll('#mbbVisualizador .mbb-visualizador-table-clone th').length,
    rotateHidden: document.querySelector('[data-mbb-view-action="rotate"]')?.hidden,
    readableHidden: document.querySelector('[data-mbb-view-action="readable"]')?.hidden,
    zoom: document.getElementById('mbbVisualizadorZoom')?.textContent,
    transform: document.querySelector('.mbb-visualizador-table-clone')?.style.transform || ''
  }));
  assert(opened.hidden === false, `${label}: visualizador não abriu.`);
  assert(opened.cloneTag === 'TABLE', `${label}: tabela ampliada deixou de ser HTML TABLE.`);
  assert(opened.cloneHeaders === 9, `${label}: clone da tabela perdeu colunas.`);
  assert(opened.rotateHidden === false, `${label}: tabela deveria oferecer Girar.`);
  assert(opened.readableHidden === false, `${label}: tabela deveria oferecer Tamanho legível.`);
  assert(opened.zoom === '100%', `${label}: tamanho legível inicial deveria ser 100%.`);
  assert(!opened.transform.includes('rotate(90deg)'), `${label}: tabela deveria abrir na orientação normal.`);

  await page.click('[data-mbb-view-action="minus"]');
  const smaller = await page.$eval('#mbbVisualizadorZoom', el => el.textContent);
  assert(smaller === '85%', `${label}: reduzir tabela deveria resultar em 85%; encontrou ${smaller}.`);

  await page.click('[data-mbb-view-action="rotate"]');
  const rotated = await page.evaluate(() => ({
    zoom: document.getElementById('mbbVisualizadorZoom')?.textContent,
    transform: document.querySelector('.mbb-visualizador-table-clone')?.style.transform || '',
    cloneTag: document.querySelector('#mbbVisualizador .mbb-visualizador-table-clone')?.tagName,
    cloneHeaders: document.querySelectorAll('#mbbVisualizador .mbb-visualizador-table-clone th').length,
    stageWidth: document.querySelector('.mbb-visualizador-stage')?.getBoundingClientRect().width || 0,
    stageHeight: document.querySelector('.mbb-visualizador-stage')?.getBoundingClientRect().height || 0
  }));
  assert(rotated.zoom === '85%', `${label}: Girar deveria preservar o zoom de 85%; encontrou ${rotated.zoom}.`);
  assert(rotated.transform.includes('rotate(90deg)'), `${label}: Girar não colocou a tabela a 90 graus.`);
  assert(rotated.cloneTag === 'TABLE' && rotated.cloneHeaders === 9, `${label}: rotação alterou a estrutura HTML da tabela.`);
  assert(rotated.stageWidth > 0 && rotated.stageHeight > 0, `${label}: área girada ficou inválida.`);

  await page.click('[data-mbb-view-action="plus"]');
  const enlargedRotated = await page.$eval('#mbbVisualizadorZoom', el => el.textContent);
  assert(enlargedRotated === '100%', `${label}: ampliar tabela girada deveria voltar a 100%; encontrou ${enlargedRotated}.`);

  await page.click('[data-mbb-view-action="readable"]');
  const readable = await page.evaluate(() => ({
    zoom: document.getElementById('mbbVisualizadorZoom')?.textContent,
    transform: document.querySelector('.mbb-visualizador-table-clone')?.style.transform || ''
  }));
  assert(readable.zoom === '100%', `${label}: Tamanho legível não voltou a 100%.`);
  assert(readable.transform.includes('rotate(90deg)'), `${label}: Tamanho legível não deveria desfazer a rotação.`);

  await page.click('[data-mbb-view-action="fit"]');
  const fit = await page.evaluate(() => ({
    zoom: Number(document.getElementById('mbbVisualizadorZoom')?.textContent.replace('%','')),
    transform: document.querySelector('.mbb-visualizador-table-clone')?.style.transform || ''
  }));
  assert(fit.zoom >= 50 && fit.zoom <= 100, `${label}: Ajustar girado retornou zoom inesperado (${fit.zoom}%).`);
  assert(fit.transform.includes('rotate(90deg)'), `${label}: Ajustar não deveria desfazer a rotação.`);

  await page.click('[data-mbb-view-action="rotate"]');
  const normalAgain = await page.evaluate(() => ({
    transform: document.querySelector('.mbb-visualizador-table-clone')?.style.transform || '',
    cloneTag: document.querySelector('#mbbVisualizador .mbb-visualizador-table-clone')?.tagName,
    cloneHeaders: document.querySelectorAll('#mbbVisualizador .mbb-visualizador-table-clone th').length
  }));
  assert(!normalAgain.transform.includes('rotate(90deg)'), `${label}: segundo toque em Girar deveria voltar à orientação normal.`);
  assert(normalAgain.cloneTag === 'TABLE' && normalAgain.cloneHeaders === 9, `${label}: retorno à orientação normal alterou a tabela.`);

  await page.keyboard.press('Escape');
  const after = await page.evaluate(() => ({
    hidden: document.getElementById('mbbVisualizador')?.hidden,
    originalHeaders: document.querySelectorAll('[data-mbb-ampliavel="tabela"] table th').length,
    bodyLocked: document.body.classList.contains('mbb-visualizador-aberto')
  }));
  assert(after.hidden === true, `${label}: ESC não fechou tabela.`);
  assert(after.originalHeaders === 9, `${label}: tabela original foi afetada pelo clone.`);
  assert(!after.bodyLocked, `${label}: body permaneceu bloqueado após tabela.`);

  await page.click('[data-mbb-visualizador-trigger]');
  await wait(80);
  const reopened = await page.evaluate(() => ({
    zoom: document.getElementById('mbbVisualizadorZoom')?.textContent,
    transform: document.querySelector('.mbb-visualizador-table-clone')?.style.transform || '',
    cloneHeaders: document.querySelectorAll('#mbbVisualizador .mbb-visualizador-table-clone th').length
  }));
  assert(reopened.zoom === '100%', `${label}: reabrir deveria iniciar em 100%; encontrou ${reopened.zoom}.`);
  assert(!reopened.transform.includes('rotate(90deg)'), `${label}: reabrir deveria iniciar na orientação normal.`);
  assert(reopened.cloneHeaders === 9, `${label}: reabrir perdeu colunas da tabela.`);
  await page.keyboard.press('Escape');
}

try {
  for (const viewport of [
    {name:'mobile-360', width:360, height:800},
    {name:'mobile-390', width:390, height:844},
    {name:'desktop-1366', width:1366, height:900}
  ]) {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(String(error?.message || error)));
    await page.setViewport({width:viewport.width, height:viewport.height, deviceScaleFactor:1});

    await prepareProgramacao(page);
    await testGraphic(page, `Programação ${viewport.name}`);

    await prepareArduino(page);
    await testGraphic(page, `Arduino ${viewport.name}`);

    await prepareFundamentos(page);
    await testTable(page, `Fundamentos ${viewport.name}`);

    assert(pageErrors.length === 0, `${viewport.name}: erros JavaScript: ${pageErrors.join(' | ')}`);
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nFalhas do piloto visual MbB:');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}
console.log('Visualizador MbB validado com rotação de tabela HTML em 360, 390 e 1366 px.');
