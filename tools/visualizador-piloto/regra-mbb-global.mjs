import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

// Auditoria integral permanente de legibilidade visual dos módulos SDI e QTS.
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
const report = [];

async function paginasDoModulo(dir) {
  const nomes = await fs.readdir(dir);
  return nomes.filter(nome => nome.endsWith('.html')).sort().map(nome => path.posix.join(dir, nome));
}

async function testarPagina(pagePath, label) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error?.message || error)));
  await page.setViewport({ width: 360, height: 800, deviceScaleFactor:1 });
  await page.goto(`${base}/${pagePath}`, { waitUntil:'networkidle0' });
  await wait(260);

  const state = await page.evaluate(async () => {
    await window.MBBVisualizadorSite?.scan(document);
    await new Promise(resolve => setTimeout(resolve, 80));
    const hostFor = table => table.closest('.table-wrap,.table-responsive,.responsive-table,.table-container,[class*="table-wrap"],[class*="table-responsive"]') || table;
    const tables = [...document.querySelectorAll('table')];
    const needed = tables.filter(table => window.MBBVisualizadorSite?.tableNeedsViewer(table));
    const missed = needed.filter(table => {
      const host = hostFor(table);
      return host?.dataset?.mbbAmpliavel !== 'tabela' || !host?.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]');
    });
    const marked = [...document.querySelectorAll('[data-mbb-ampliavel]')];
    const orphanTriggers = marked.filter(host => !host.nextElementSibling?.matches?.('[data-mbb-visualizador-trigger]'));
    return {
      siteLoaded: window.__MBB_VISUALIZADOR_SITE__ === true,
      tables: tables.length,
      needed: needed.length,
      missed: missed.length,
      marked: marked.length,
      orphanTriggers: orphanTriggers.length,
      overflow: document.documentElement.scrollWidth - window.innerWidth
    };
  });

  assert(state.siteLoaded, `${label}: camada global de visualização não carregou.`);
  assert(state.missed === 0, `${label}: ${state.missed} tabela(s) que precisam ampliar ficaram sem botão.`);
  assert(state.orphanTriggers === 0, `${label}: ${state.orphanTriggers} visual(is) marcado(s) ficaram sem botão de ampliar.`);
  assert(state.overflow <= 2, `${label}: criou overflow horizontal global (${state.overflow}px).`);
  assert(errors.length === 0, `${label}: erros JavaScript: ${errors.join(' | ')}`);
  report.push({ pagina: pagePath, ...state });
  await page.close();
}

try {
  const modulos = [
    ['pages/seguranca-dados', 'SDI'],
    ['pages/qts', 'QTS']
  ];
  for (const [dir, nome] of modulos) {
    for (const pagina of await paginasDoModulo(dir)) {
      await testarPagina(pagina, `${nome} · ${path.basename(pagina)}`);
    }
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('\nFalhas da varredura visual MbB em SDI/QTS:');
  failures.forEach(item => console.error(`- ${item}`));
  console.error('\nRelatório parcial:');
  report.forEach(item => console.error(JSON.stringify(item)));
  process.exit(1);
}

const totais = report.reduce((acc, item) => {
  acc.paginas += 1;
  acc.tabelas += item.tables;
  acc.precisamAmpliar += item.needed;
  acc.visuaisMarcados += item.marked;
  return acc;
}, { paginas:0, tabelas:0, precisamAmpliar:0, visuaisMarcados:0 });

console.log('Varredura visual MbB integral de SDI e QTS: OK');
console.log(JSON.stringify(totais, null, 2));
