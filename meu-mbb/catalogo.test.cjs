const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('./catalogo-core.js');
const catalogo = require('./catalogo.json');

test('catálogo do piloto tem 12 etapas, IDs únicos e destinos existentes', () => {
  core.validar(catalogo);
  assert.equal(core.atuais(catalogo).length, 12);
  for (const unidade of catalogo.unidades) {
    const [pagina, ancora] = unidade.localizacao_atual.split('#');
    assert.ok(fs.existsSync(path.resolve(__dirname, '..', pagina)));
    assert.match(ancora, /^git-(?:[1-9]|1[0-2])$/);
  }
});

test('pesquisa pública encontra comando e pasta de rede pelo catálogo', () => {
  assert.equal(core.pesquisar(catalogo, 'git status')[0].conteudo_id, 'git-local-05');
  assert.ok(core.pesquisar(catalogo, 'git status').some(item => item.conteudo_id === 'git-local-05'));
  assert.ok(core.pesquisar(catalogo, 'pasta de rede').some(item => item.conteudo_id === 'git-local-03'));
  assert.equal(core.pesquisar(catalogo, 'xyzconteudoinexistente').length, 0);
});

test('mover mantém ID, progresso e encaminha para URL nova', () => {
  const copia = structuredClone(catalogo);
  const unidade = copia.unidades[2];
  unidade.status = 'movido'; unidade.localizacao_atual = 'pages/git.html#git-4'; unidade.versao_conteudo = 2;
  core.validar(copia);
  assert.equal(core.resolver(copia, unidade.conteudo_id).unidade.localizacao_atual, 'pages/git.html#git-4');
  assert.equal(core.progresso(copia, { [unidade.conteudo_id]: { concluido: true, versaoVista: 1 } }).concluidas, 1);
});

test('substituir, dividir e remover preservam histórico e não criam links quebrados', () => {
  const copia = structuredClone(catalogo);
  const [substituido, dividido, removido] = copia.unidades;
  substituido.status = 'substituido'; substituido.destino_id = copia.unidades[3].conteudo_id; substituido.preservar_conclusao = true;
  dividido.status = 'dividido'; dividido.destino_id = copia.unidades[4].conteudo_id;
  removido.status = 'removido'; removido.proximo_id = copia.unidades[3].conteudo_id;
  core.validar(copia);
  assert.equal(core.resolver(copia, substituido.conteudo_id).unidade.conteudo_id, copia.unidades[3].conteudo_id);
  assert.equal(core.resolver(copia, dividido.conteudo_id).unidade.conteudo_id, copia.unidades[4].conteudo_id);
  assert.equal(core.resolver(copia, removido.conteudo_id).unidade.conteudo_id, copia.unidades[3].conteudo_id);
  assert.equal(core.progresso(copia, { [removido.conteudo_id]: { concluido: true } }).total, 9);
  assert.equal(core.progresso(copia, { [substituido.conteudo_id]: { concluido: true } }).concluidas, 1);
  assert.ok(!core.pesquisar(copia, removido.titulo).some(item => item.conteudo_id === removido.conteudo_id));
});

test('catálogo rejeita ciclos e conteúdo removido sem orientação', () => {
  const copia = structuredClone(catalogo);
  copia.unidades[0].status = 'removido';
  assert.throws(() => core.validar(copia));
  copia.unidades[0].proximo_id = copia.unidades[1].conteudo_id;
  copia.unidades[1].status = 'removido'; copia.unidades[1].proximo_id = copia.unidades[0].conteudo_id;
  assert.throws(() => core.validar(copia), /Ciclo/);
});
