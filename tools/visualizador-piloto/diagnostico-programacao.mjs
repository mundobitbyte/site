import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const candidates = ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) { try { await fs.access(candidate); executablePath = candidate; break; } catch {} }
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({executablePath, headless:true, args:['--no-sandbox','--disable-dev-shm-usage']});
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error?.message || error)));
  await page.setViewport({width:390,height:844,deviceScaleFactor:1});
  await page.goto(`${base}/pages/programacao.html`, {waitUntil:'networkidle0'});
  await page.evaluate(() => document.querySelector('button[data-module="pensar"]')?.click());
  await new Promise(resolve => setTimeout(resolve, 150));
  const menuBefore = await page.evaluate(() => [...document.querySelectorAll('#menu button')].map(el => el.textContent.trim()));
  const clicked = await page.evaluate(() => {
    const button = [...document.querySelectorAll('#menu button')].find(el => el.textContent.includes('10 Tudo junto'));
    if (!button) return false;
    button.click();
    return true;
  });
  await new Promise(resolve => setTimeout(resolve, 350));
  const snapshot = await page.evaluate(() => ({
    pathname: location.pathname,
    pilotFlag: Boolean(window.__MBB_VISUALIZADOR_PILOTO__),
    globalReady: Boolean(window.MBBVisualizador),
    clicked,
    stepTitle: document.querySelector('#stepTitle')?.textContent?.trim() || '',
    menu: [...document.querySelectorAll('#menu button')].map(el => el.textContent.trim()),
    panelCount: document.querySelectorAll('.flowchart-panel-v3').length,
    headings: [...document.querySelectorAll('.flowchart-panel-heading strong')].map(el => el.textContent.trim()),
    svgLabels: [...document.querySelectorAll('.flowchart-panel-v3 svg')].map(el => ({viewBox:el.getAttribute('viewBox'), aria:el.getAttribute('aria-label')})),
    markers: [...document.querySelectorAll('[data-mbb-ampliavel]')].map(el => ({mode:el.dataset.mbbAmpliavel,title:el.dataset.mbbTitulo,tag:el.tagName,className:el.className})),
    triggers: [...document.querySelectorAll('[data-mbb-visualizador-trigger]')].map(el => el.textContent.trim()),
    visualizerScripts: [...document.scripts].map(s => s.src).filter(src => src.includes('mbb-visualizador')),
    pageErrors: []
  }));
  snapshot.pageErrors = errors;
  console.log('DIAGNOSTICO_PROGRAMACAO=' + JSON.stringify({menuBefore, ...snapshot}, null, 2));
} finally {
  await browser.close();
}
