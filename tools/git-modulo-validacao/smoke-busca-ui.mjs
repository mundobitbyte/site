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

try {
  const page = await browser.newPage();
  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 1});

  await page.goto(`${base}/index.html`, {waitUntil: 'networkidle0'});
  const home = await page.evaluate(() => {
    const brand = document.querySelector('header .brand');
    const pesquisar = document.querySelector('.mbb-home-actions a:first-child');
    const entrar = document.querySelector('.mbb-home-actions a:last-child');
    const visivel = elemento => {
      if (!elemento) return false;
      const css = getComputedStyle(elemento);
      const box = elemento.getBoundingClientRect();
      return css.display !== 'none' && css.visibility !== 'hidden' && box.width > 0 && box.height > 0;
    };
    return {
      brand: brand?.textContent.trim() || '',
      brandVisivel: visivel(brand),
      pesquisarVisivel: visivel(pesquisar),
      entrarVisivel: visivel(entrar),
      pesquisarIcone: pesquisar ? getComputedStyle(pesquisar, '::before').backgroundImage : 'none',
      entrarIcone: entrar ? getComputedStyle(entrar, '::before').backgroundImage : 'none',
      largura: document.documentElement.scrollWidth,
      tela: innerWidth
    };
  });
  if (home.brand !== 'Professor Ronaldo Lavestein' || !home.brandVisivel) throw new Error('Assinatura do professor não está visível no cabeçalho mobile.');
  if (!home.pesquisarVisivel || !home.entrarVisivel) throw new Error('Pesquisar ou Entrar não está visível no cabeçalho mobile.');
  if (home.pesquisarIcone === 'none' || home.entrarIcone === 'none') throw new Error('Ações da home perderam diferenciação visual por ícones.');
  if (home.largura > home.tela + 2) throw new Error('Cabeçalho refinado criou rolagem horizontal na home.');

  await page.goto(`${base}/pages/ia/index.html`, {waitUntil: 'networkidle0'});
  await page.waitForSelector('.mbb-busca-global');
  const atalho = await page.$eval('.mbb-busca-global', elemento => {
    const box = elemento.getBoundingClientRect();
    const css = getComputedStyle(elemento);
    return {width: box.width, height: box.height, fontSize: css.fontSize, aria: elemento.getAttribute('aria-label')};
  });
  if (atalho.width > 52 || atalho.height > 52) throw new Error(`Atalho mobile continua grande demais: ${atalho.width}x${atalho.height}.`);
  if (atalho.aria !== 'Pesquisar conteúdos do Mundo bit Byte') throw new Error('Atalho compacto perdeu o rótulo acessível.');

  await page.goto(`${base}/meu-mbb/pesquisar.html`, {waitUntil: 'networkidle0'});
  const placeholder = await page.$eval('#consulta', elemento => elemento.getAttribute('placeholder') || '');
  if (/git status|pasta de rede/i.test(placeholder)) throw new Error('Campo de pesquisa ainda cita o exemplo do piloto Git.');
  if (!/frações/i.test(placeholder) || !/Python/i.test(placeholder) || !/sensores/i.test(placeholder)) throw new Error('Campo de pesquisa perdeu o exemplo geral aprovado.');

  console.log('VALIDAÇÃO VISUAL DA BUSCA E CABEÇALHO: OK');
} finally {
  await browser.close();
}
