import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const modo = await fs.readFile('MODO_MBB.md', 'utf8');
const busca = await fs.readFile('js/mbb-busca-global.js', 'utf8');
const visitas = await fs.readFile('meu-mbb/visitas-diretas.js', 'utf8');
const seletor = await fs.readFile('js/mbb-visualizador-site.js', 'utf8');

assert(modo.includes('Regra obrigatória de legibilidade e ampliação visual'), 'MODO_MBB.md: regra de ampliação visual não está formalizada.');
assert(modo.includes('Se ampliar ajuda a compreender'), 'MODO_MBB.md: critério pedagógico de ampliação ausente.');
assert(modo.includes('Revisão transversal obrigatória ao tocar em conteúdo antigo'), 'MODO_MBB.md: revisão transversal de conteúdo alterado ausente.');
assert(busca.includes('mbb-visualizador-site.js'), 'mbb-busca-global.js: visualizador seletivo não é carregado globalmente.');
assert(busca.includes('data-mbb-visualizador-site') || busca.includes('mbbVisualizadorSite'), 'mbb-busca-global.js: proteção contra carregamento duplicado ausente.');
assert(!visitas.includes("pagina.startsWith('pages/qts/') || pagina.startsWith('pages/seguranca-dados/')"), 'visitas-diretas.js: ainda existe exceção específica de QTS/Segurança para o visualizador.');
assert(seletor.includes('if (!changed && !window.MBBVisualizador) return;'), 'mbb-visualizador-site.js: núcleo não está em carregamento seletivo/lazy.');

const candidates = ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath = null;
for (const candidate of candidates) {
  try { await fs.access(candidate); executablePath = candidate; break; } catch {}
}
if (!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser = await puppeteer.launch({ executablePath, headless:true, args:['--no-sandbox','--disable-dev-shm-usage'] });

async function testarPagina(path, label) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error?.message || error)));
  await page.setViewport({ width: 360, height: 800, deviceScaleFactor:1 });
  await page.goto(`${base}/${path}`, { waitUntil:'networkidle0' });
  await wait(300);

  const state = await page.evaluate(() => {
    const tables = [...document.querySelectorAll('table')].filter(table => (table.rows?.[0]?.cells?.length || 0) >= 3);
    const marked = tables.map(table => table.closest('.table-wrap,.table-responsive,.responsive-table,.table-container,[class*="table-wrap"],[class*="table-responsive"]') || table)
      .find(host => host?.dataset?.mbbAmpliavel === 'tabela');
    return {
      siteLoaded: window.__MBB_VISUALIZADOR_SITE__ === true,
      tableCount: tables.length,
      marked: Boolean(marked),
      trigger: Boolean(marked?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]')),
      overflow: document.documentElement.scrollWidth - window.innerWidth
    };
  });

  assert(state.siteLoaded, `${label}: camada global de visualização não carregou.`);
  assert(state.tableCount > 0, `${label}: nenhuma tabela elegível encontrada para o teste.`);
  assert(state.marked && state.trigger, `${label}: tabela larga não recebeu recurso de ampliar.`);
  assert(state.overflow <= 2, `${label}: criou overflow horizontal global (${state.overflow}px).`);
  assert(errors.length === 0, `${label}: erros JavaScript: ${errors.join(' | ')}`);
  await page.close();
}

try {
  await testarPagina('pages/seguranca-dados/02-o-que-pode-dar-errado.html', 'Segurança');
  await testarPagina('pages/qts/06-regras-mais-complicadas.html', 'QTS');
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nFalhas da regra transversal MbB de legibilidade visual:');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log('Regra transversal MbB validada: documentação, bootstrap global, seletividade e ampliação em Segurança e QTS.');
