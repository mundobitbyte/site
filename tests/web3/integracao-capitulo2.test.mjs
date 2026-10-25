import { test, before, after, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn, spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const base = process.env.MBB_CAP2_BASE;
assert.ok(base, 'Informe MBB_CAP2_BASE com a pasta do ensaio.');
const app = path.join(base, 'cafe-aurora-web3');
const fonte = path.join(app, 'src/atendimento.php');
const original = fs.readFileSync(fonte, 'utf8');
const phpDisponivel = spawnSync('php', ['--version']).status === 0;
if (process.env.MBB_EXIGIR_PHP === '1') assert.ok(phpDisponivel, 'PHP obrigatório neste ambiente.');
const mod = await import(pathToFileURL(path.join(base, 'final-js/atendimento.js')).href);
const realFetch = globalThis.fetch;
const realDocument = globalThis.document;
let php, phpUrl, fixture, fixtureUrl, origem;
let cenario = {}, requisicoes = 0;
const textos = { nomeNegocio: 'Café Aurora', mensagemStatus: 'Pedidos para retirada estão abertos.', mensagemTempo: 'Tempo estimado: 30 minutos.' };

function escutar(s) { return new Promise(resolve => s.listen(0, '127.0.0.1', () => resolve(`http://127.0.0.1:${s.address().port}/`))); }
async function portaLivre() { const s = http.createServer(); const u = await escutar(s); await new Promise(r => s.close(r)); return new URL(u).port; }
function respostaNormal() { cenario = { status: 200, tipo: 'application/json; charset=utf-8', corpo: JSON.stringify(textos), atraso: 0 }; }
function pedir(caminho, init) { return realFetch(new URL(caminho, origem), init); }

before(async () => {
  fixture = http.createServer((req, res) => {
    requisicoes++;
    const atual = { ...cenario };
    const timer = setTimeout(() => {
      if (res.destroyed) return;
      res.writeHead(atual.status, { 'Content-Type': atual.tipo });
      res.end(atual.corpo);
    }, atual.atraso || 0);
    res.on('close', () => clearTimeout(timer));
  });
  fixtureUrl = await escutar(fixture);
  origem = fixtureUrl;
  respostaNormal();
  globalThis.fetch = (url, init) => pedir(url, init);
  if (phpDisponivel) {
    const porta = await portaLivre();
    phpUrl = `http://127.0.0.1:${porta}/`;
    const arquivo = fs.openSync(path.join(base, 'php-http.log'), 'w');
    php = spawn('php', ['-d', 'opcache.enable=0', '-S', `127.0.0.1:${porta}`, '-t', 'public'], { cwd: app, stdio: ['ignore', arquivo, arquivo] });
    fs.closeSync(arquivo);
    for (let n = 0; n < 100; n++) {
      try { const r = await realFetch(phpUrl); if (r.ok) break; }
      catch { /* aguardar somente a inicialização local */ }
      if (n === 99) throw new Error('Servidor PHP não iniciou.');
      await new Promise(r => setTimeout(r, 50));
    }
  }
});

beforeEach(() => { fs.writeFileSync(fonte, original); });

after(async () => {
  fs.writeFileSync(fonte, original);
  if (php) php.kill();
  if (fixture) { fixture.closeAllConnections(); await new Promise(r => fixture.close(r)); }
  globalThis.fetch = realFetch;
  if (realDocument === undefined) delete globalThis.document; else globalThis.document = realDocument;
  delete globalThis.HTMLElement;
  delete globalThis.HTMLButtonElement;
});

test('transporte real controlado lê JSON válido', async () => {
  origem = fixtureUrl; respostaNormal(); assert.deepEqual(await mod.obterAtendimento(), textos);
});
test('HTTP 404 e 500 não são confundidos com sucesso', async () => {
  origem = fixtureUrl;
  for (const status of [404, 500]) { respostaNormal(); cenario.status = status; await assert.rejects(mod.obterAtendimento(), /HTTP/); }
});
test('HTML, JSON malformado, media type enganoso e conteúdo inválido são recusados', async () => {
  origem = fixtureUrl;
  for (const troca of [{ tipo: 'text/html', corpo: '<p>fallback</p>' }, { corpo: '{incompleto' },
    { tipo: 'application/jsonfalso' }, { corpo: JSON.stringify({ mensagemTempo: 30 }) }]) {
    respostaNormal(); Object.assign(cenario, troca); await assert.rejects(mod.obterAtendimento());
  }
});
test('tipo JSON com charset e caixa diferente continua válido', async () => {
  origem = fixtureUrl; respostaNormal(); cenario.tipo = 'Application/JSON; charset=UTF-8';
  assert.deepEqual(await mod.obterAtendimento(), textos);
});
test('limite real de 8000 ms cancela uma resposta que não chegou', { skip: Number(process.env.MBB_CAP2_AULA) < 6 }, async () => {
  origem = fixtureUrl; respostaNormal(); cenario.atraso = 30000;
  const inicio = Date.now(); await assert.rejects(mod.obterAtendimento(), /abort/i);
  const tempo = Date.now() - inicio;
  assert.ok(tempo >= 7500 && tempo < 15000, `Cancelamento observado: ${tempo} ms`);
  respostaNormal(); assert.deepEqual(await mod.obterAtendimento(), textos);
});

class Elemento {
  textContent = ''; listeners = {};
  addEventListener(tipo, callback) { this.listeners[tipo] = callback; }
}
class Botao extends Elemento {
  disabled = true;
  disparar() { return this.listeners.click(); }
}
let nImportacao = 0;
async function domSimulado() {
  const elementos = new Map(['nome-negocio', 'mensagem-status', 'mensagem-tempo', 'aviso-consulta'].map(id => ['#' + id, new Elemento()]));
  elementos.set('#atualizar-atendimento', new Botao());
  elementos.get('#mensagem-tempo').textContent = 'Prazo antigo';
  globalThis.HTMLElement = Elemento;
  globalThis.HTMLButtonElement = Botao;
  globalThis.document = { querySelector: seletor => elementos.get(seletor) };
  await import(pathToFileURL(path.join(base, 'final-js/main.js')).href + '?ensaio=' + (++nImportacao));
  return { elementos, botao: elementos.get('#atualizar-atendimento'), aviso: elementos.get('#aviso-consulta'), tempo: elementos.get('#mensagem-tempo') };
}

test('DOM simulado: carregamento esconde prazo antigo, bloqueia repetição e recupera controles', async () => {
  origem = fixtureUrl; respostaNormal(); cenario.atraso = 100;
  const { botao, aviso, tempo } = await domSimulado();
  const antes = requisicoes;
  const consulta = botao.disparar();
  assert.equal(botao.disabled, true); assert.equal(tempo.textContent, ''); assert.match(aviso.textContent, /Consultando/);
  await botao.disparar(); await consulta;
  assert.equal(requisicoes - antes, 1);
  assert.equal(botao.disabled, false); assert.equal(tempo.textContent, textos.mensagemTempo);
  assert.match(aviso.textContent, /agora/);
});
test('DOM simulado: falha remove informação antiga e nova tentativa recupera', async () => {
  origem = fixtureUrl; respostaNormal();
  const { botao, aviso, tempo } = await domSimulado();
  await botao.disparar();
  cenario.status = 500;
  const consoleError = console.error; console.error = () => {};
  try { await botao.disparar(); } finally { console.error = consoleError; }
  assert.equal(tempo.textContent, ''); assert.equal(botao.disabled, false); assert.match(aviso.textContent, /Não foi possível/);
  respostaNormal(); await botao.disparar(); assert.equal(tempo.textContent, textos.mensagemTempo);
});
test('DOM simulado: texto recebido não é interpretado como HTML', async () => {
  origem = fixtureUrl; respostaNormal(); cenario.corpo = JSON.stringify({ ...textos, nomeNegocio: '<img src=x onerror=alert(1)>' });
  const { botao, elementos } = await domSimulado(); await botao.disparar();
  assert.equal(elementos.get('#nome-negocio').textContent, '<img src=x onerror=alert(1)>');
});

test('PHP real: sintaxe de todos os arquivos da aplicação', { skip: !phpDisponivel }, () => {
  function arquivos(p) { return fs.readdirSync(p, { withFileTypes: true }).flatMap(e => e.isDirectory() ? arquivos(path.join(p, e.name)) : [path.join(p, e.name)]); }
  for (const arquivo of arquivos(app).filter(p => p.endsWith('.php') && !p.includes('node_modules'))) {
    const r = spawnSync('php', ['-l', arquivo], { encoding: 'utf8' }); assert.equal(r.status, 0, r.stdout + r.stderr);
  }
});
test('PHP real: GET, contrato exato, cache, alteração única e estados do atendimento', { skip: !phpDisponivel }, async () => {
  origem = phpUrl;
  let r = await pedir('api/atendimento.php');
  assert.equal(r.status, 200); assert.match(r.headers.get('content-type'), /application\/json/); assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await r.json(), textos);
  assert.deepEqual(await mod.obterAtendimento(), textos);
  fs.writeFileSync(fonte, original.replace('$tempoEstimado = 30;', '$tempoEstimado = 47;'));
  assert.match((await mod.obterAtendimento()).mensagemTempo, /47 minutos/);
  for (const caminho of ['index.php', 'balcao.php']) assert.match(await (await pedir(caminho)).text(), /47 minutos/);
  fs.writeFileSync(fonte, original.replace('$pedidosAbertos = true;', '$pedidosAbertos = false;'));
  let dados = await mod.obterAtendimento(); assert.match(dados.mensagemStatus, /encerrados/); assert.doesNotMatch(dados.mensagemTempo, /minutos/);
  if (Number(process.env.MBB_CAP2_AULA) >= 6) {
  fs.writeFileSync(fonte, original.replace('$tempoEstimado = 30;', '$tempoEstimado = null;'));
  dados = await mod.obterAtendimento(); assert.match(dados.mensagemStatus, /abertos/); assert.match(dados.mensagemTempo, /Consulte a equipe/);
  assert.doesNotMatch(dados.mensagemTempo, /0 minutos/);
  fs.writeFileSync(fonte, original.replace('$tempoEstimado = 30;', '$tempoEstimado = null;').replace('$pedidosAbertos = true;', '$pedidosAbertos = false;'));
  dados = await mod.obterAtendimento(); assert.match(dados.mensagemStatus, /encerrados/); assert.doesNotMatch(dados.mensagemTempo, /minutos/);
  fs.writeFileSync(fonte, original.replace('$tempoEstimado = 30;', '$tempoEstimado = 0;'));
  dados = await mod.obterAtendimento(); assert.match(dados.mensagemTempo, /0 minutos/);
  }
  fs.writeFileSync(fonte, original);
});
test('PHP real: POST recusado, fontes e dados fora da raiz pública', { skip: !phpDisponivel }, async () => {
  origem = phpUrl;
  const antes = fs.readFileSync(fonte, 'utf8');
  const r = await pedir('api/atendimento.php', { method: 'POST', body: 'prazo=1' });
  assert.equal(r.status, 405); assert.equal(r.headers.get('allow'), 'GET'); assert.equal(fs.readFileSync(fonte, 'utf8'), antes);
  for (const caminho of ['src/atendimento.php', 'cliente-balcao/src/atendimento.ts', 'cliente-balcao/package-lock.json']) {
    const corpo = await (await pedir(caminho)).text(); assert.doesNotMatch(corpo, /function obterAtendimento|export interface|lockfileVersion/);
  }
});
test('PHP real: erro interno gera JSON genérico sem caminhos de arquivos', { skip: !phpDisponivel }, async () => {
  origem = phpUrl;
  fs.renameSync(fonte, fonte + '.fora');
  try {
    const r = await pedir('api/atendimento.php'); const corpo = await r.text();
    assert.equal(r.status, 500); assert.doesNotMatch(corpo, /\/home\/|\/workspace\/|Stack trace|Warning|require_once/);
    assert.deepEqual(JSON.parse(corpo), { erro: 'Não foi possível consultar o atendimento.' });
  } finally { fs.renameSync(fonte + '.fora', fonte); }
  assert.deepEqual(await mod.obterAtendimento(), textos);
});
test('PHP real: indisponibilidade de rede e recuperação', { skip: !phpDisponivel }, async () => {
  origem = phpUrl;
  const terminou = new Promise(r => php.once('exit', r)); php.kill(); await terminou;
  await assert.rejects(mod.obterAtendimento());
  const endereco = new URL(phpUrl);
  php = spawn('php', ['-d', 'opcache.enable=0', '-S', '127.0.0.1:' + endereco.port, '-t', 'public'], { cwd: app, stdio: 'ignore' });
  for (let n = 0; n < 100; n++) {
    try { assert.deepEqual(await mod.obterAtendimento(), textos); return; }
    catch { await new Promise(r => setTimeout(r, 50)); }
  }
  throw new Error('Consulta não recuperou depois de reabrir PHP.');
});
