const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

global.window = global;
require('../js/curso-embarcados-dados.js');
require('../js/curso-embarcados-conteudo.js');
const core = require('../js/academia-core.js');
const curso = global.MBB_CURSO_EMBARCADOS;
const acervo = global.MBB_CONTEUDO_EMBARCADOS;

test('IDs de módulos e aulas são únicos e permanentes', () => {
  const modulos = curso.modulos.map(item => item.id);
  const aulas = curso.aulas.map(item => item.id);
  assert.equal(new Set(modulos).size, modulos.length);
  assert.equal(new Set(aulas).size, aulas.length);
  aulas.forEach(id => assert.match(id, /^emb-(?:\d{2})-(?:\d{2}|cp|final|dominio)$/));
  curso.aulas.forEach(aula => assert.ok(modulos.includes(aula.modulo), `${aula.id} aponta para módulo inexistente`));
});

test('pontuação deriva somente de atividades únicas concluídas', () => {
  const atividades = {
    'emb-01-03': { state: 'concluida', points: 9999 },
    'emb-02-01': { state: 'concluida', points: 9999 }
  };
  assert.equal(core.totalPontos(curso, atividades), 40);
  atividades['emb-01-03'] = { state: 'concluida', points: 0 };
  assert.equal(core.totalPontos(curso, atividades), 40);
});

test('progresso ignora atividades opcionais do laboratório 99', () => {
  const obrigatorias = curso.aulas.filter(aula => aula.obrigatoria !== false);
  const activities = Object.fromEntries(obrigatorias.map(aula => [aula.id, { state: 'concluida' }]));
  assert.equal(core.percentual(curso, activities), 100);
});

test('conquistas exigem os marcos reais configurados', () => {
  assert.equal(core.conquistasDesbloqueadas(curso, {}).length, 0);
  const atividades = { 'emb-01-03': { state: 'concluida' }, 'emb-02-01': { state: 'concluida' } };
  assert.deepEqual(core.conquistasDesbloqueadas(curso, atividades).map(item => item.id), ['primeiro-circuito', 'primeira-entrada']);
});

test('todo material-base usado pelas aulas está integrado à Academia', () => {
  for (const aula of curso.aulas) {
    for (const fonte of aula.fontes) {
      assert.ok(acervo[fonte.chave], `${aula.id}: conteúdo integrado ausente ${fonte.chave}`);
      assert.ok(acervo[fonte.chave].html.length > 80, `${aula.id}: conteúdo insuficiente ${fonte.chave}`);
      assert.doesNotMatch(acervo[fonte.chave].html, /href\s*=/i, `${aula.id}: saída indevida para o site público`);
    }
  }
});

test('imagens integradas reutilizam arquivos existentes do site', () => {
  for (const [chave, material] of Object.entries(acervo)) {
    for (const correspondencia of material.html.matchAll(/src="([^"]+)"/g)) {
      const origem = correspondencia[1];
      assert.match(origem, /^\/img\//, `${chave}: origem de imagem inesperada ${origem}`);
      const arquivo = path.resolve(__dirname, '../..', origem.replace(/^\//, ''));
      assert.ok(fs.existsSync(arquivo), `${chave}: imagem ausente ${origem}`);
    }
  }
});

test('cada aula contém ação, observação, sucesso, diagnóstico e aplicação', () => {
  for (const aula of curso.aulas) {
    for (const campo of ['contexto', 'antes', 'fazer', 'observar', 'sucesso', 'diagnostico', 'aplicar']) {
      assert.ok(aula[campo] && aula[campo].trim().length >= 12, `${aula.id}: campo ${campo} insuficiente`);
    }
    assert.equal(aula.pontos, curso.pontos[aula.tipo], `${aula.id}: pontos fora da configuração central`);
  }
});
test('inicialização Web aguarda o estado da instância do Firebase Auth', () => {
  const storage = fs.readFileSync(path.resolve(__dirname, '../js/academia-storage.js'), 'utf8');
  assert.match(storage, /await auth\.authStateReady\(\);/);
  assert.doesNotMatch(storage, /authSdk\.authStateReady/);
});
