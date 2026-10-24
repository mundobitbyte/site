const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const core = require('../../meu-mbb/catalogo-core.js');
const catalogo = require('../../meu-mbb/catalogo.json');
const visitas = require('../../meu-mbb/visitas-diretas.json');

test('duas aulas comuns têm registros distintos e usam integração existente', () => {
  core.validar(catalogo);
  for (const [name,id] of [['web3.html','web3-comum-balcao'],['web3-aula2.html','web3-comum-fonte']]) {
    assert.equal(visitas['pages/programacao-web/'+name].conteudo_id,id);
    const html=fs.readFileSync(path.join(root,'pages/programacao-web',name),'utf8');
    assert.match(html,/Em desenvolvimento/);
    assert.match(html,/mbb-busca-global\.js/);
    assert.doesNotMatch(html,/<iframe|firebaseConfig|firebase-app\.js/);
  }
});
test('pesquisa chega ao ponto real sem duplicar aulas comuns por percurso', () => {
  const found=core.pesquisar(catalogo,'fonte compartilhada').filter(u=>u.conteudo_id.startsWith('web3-'));
  assert.ok(found.length>=1);
  assert.equal(catalogo.unidades.filter(u=>u.conteudo_id.startsWith('web3-')).length,2);
  for(const unit of catalogo.unidades.filter(u=>u.conteudo_id.startsWith('web3-'))){
    const html=fs.readFileSync(path.join(root,unit.localizacao_atual),'utf8');
    for(const topic of unit.topicos_busca)assert.ok(html.includes(`id="${topic.ancora}"`),topic.ancora);
  }
});
test('páginas não prometem PHP remoto nem oferecem capítulos inexistentes', () => {
  for(const name of ['web3.html','web3-aula2.html']){
    const html=fs.readFileSync(path.join(root,'pages/programacao-web',name),'utf8');
    assert.match(html,/localmente|no seu computador/);
    assert.doesNotMatch(html,/href="[^"#]*web3[^"#]*capitulo-2/);
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(new Set(ids).size,ids.length,'ID repetido');
  }
});
test('mudança em Web I/II se limita a habilitar o link de navegação', () => {
  for(const name of ['web1.html','web2.html']){
    const p='pages/programacao-web/'+name;
    const before=cp.execFileSync('git',['show','470485389c31407946c36b5c5578664aee26890d:'+p],{cwd:root,encoding:'utf8'});
    const after=fs.readFileSync(path.join(root,p),'utf8');
    const nav=/<nav class="level-menu"[\s\S]*?<\/nav>/;
    assert.equal(after.replace(nav,''),before.replace(nav,''));
  }
});
test('configuração, autenticação, regras e painel globais permanecem intactos', () => {
  for(const p of ['conta.js','firestore.rules','firebase-config.js','painel.js','visitas-diretas.js','catalogo-core.js']){
    const name='meu-mbb/'+p;
    const before=cp.execFileSync('git',['show','470485389c31407946c36b5c5578664aee26890d:'+name],{cwd:root});
    assert.deepEqual(fs.readFileSync(path.join(root,name)),before);
  }
});
test('construção publicada reproduz os arquivos dos dois checkpoints', () => {
  cp.execFileSync('python3', ['tests/web3/reproduzir-aula.py'], {cwd: root});
});
