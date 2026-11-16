// Verifica o percurso autônomo, inclusive em tela estreita e por teclado.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4179';
const dest = process.env.MBB_EVIDENCIAS || '/tmp/seiot-evidencias';
const rota = base + '/pages/arduino-conectividade.html';
const etapas = ['b6-0', 'b6-prep', 'b6-1', 'b6-2', 'b6-3', 'b6-4', 'b6-5'];

(async () => {
  fs.mkdirSync(dest, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.MBB_CHROMIUM, args: ['--no-sandbox'] });
  const resultados = [];
  try {
    for (const width of [390, 768, 1366]) {
      const context = await browser.newContext({ viewport: { width, height: 844 }, permissions: ['clipboard-read', 'clipboard-write'] });
      const page = await context.newPage();
      const erros = [];
      const envios = [];
      page.on('pageerror', erro => erros.push(erro.message));
      page.on('request', request => {
        if (request.method() !== 'GET') envios.push(request.url());
      });
      await page.goto(rota + '#b6-0');
      const ativos = page.locator('#stageMenu [aria-current="step"]');
      let copias = 0;
      for (const id of etapas) {
        const painel = page.locator('#' + id);
        await painel.waitFor();
        assert.equal(await ativos.count(), 1);
        assert.equal(await ativos.getAttribute('href'), '#' + id);
        assert.equal(await page.locator('.mbb6-panel.active-panel').count(), 1);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
        assert.match(await painel.textContent(), /Como saber se deu certo/);
        for (const botao of await painel.locator('button[onclick^="copyCode("]').all()) {
          const [, alvo] = (await botao.getAttribute('onclick')).match(/copyCode\('([^']+)'/);
          const codigo = await painel.locator('#' + alvo).textContent();
          await botao.press('Enter');
          await page.getByRole('status').filter({ hasText: 'Copiado' }).waitFor({ state: 'attached' });
          assert.equal(await page.evaluate(() => navigator.clipboard.readText()), codigo);
          copias++;
        }
        const proximo = painel.getByRole('link', { name: /^6\.[1-5] —/ });
        if (id === 'b6-0') await painel.getByRole('link', { name: 'preparação' }).click();
        else if (await proximo.count()) await proximo.click();
      }
      assert.equal(copias, 7);
      assert.deepEqual(erros, []);
      assert.deepEqual(envios, []);
      assert.match(await page.locator('#b6-5').textContent(), /modelo/);
      assert.equal(await page.locator('input[type="file"]').count(), 0);
      const menu = page.locator('#stageToggle');
      if (await menu.isVisible()) {
        await menu.press('Enter');
        assert.equal(await menu.getAttribute('aria-expanded'), 'true');
        await page.keyboard.press('Escape');
        assert.equal(await menu.getAttribute('aria-expanded'), 'false');
        assert.equal(await menu.evaluate(e => e === document.activeElement), true);
      }
      await page.goto(rota + '#b6-1-wokwi-header');
      await page.locator('#b6-1.active-panel').waitFor();
      resultados.push({ width, etapas: etapas.length, copias, erros });
      await context.close();
    }
  } finally {
    await browser.close();
  }
  fs.writeFileSync(path.join(dest, 'rede-navegador.json'), JSON.stringify(resultados, null, 2));
  console.log(JSON.stringify(resultados));
})().catch(erro => { console.error(erro); process.exitCode = 1; });
