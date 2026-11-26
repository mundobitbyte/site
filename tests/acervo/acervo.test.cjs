const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const dados = JSON.parse(read('data/acervo-musical.json'));
const html = read('ronaldo-lavestein/index.html');
test('acervo aprovado tem 18 faixas, duas versões e dois lançamentos agendados', () => {
 assert.equal(dados.faixas.length,18);
 assert.equal(new Set(dados.faixas.map(f=>f.id)).size,18);
 assert.equal(dados.faixas[0].titulo,'Esperando Manuela');
 assert.equal(dados.faixas.at(-1).titulo,'Caipirinha');
 assert.equal(dados.faixas.filter(f=>f.titulo.startsWith('Como o Vento na Janela')).length,2);
 assert.deepEqual(dados.faixas.filter(f=>f.audio),[]);
 assert.deepEqual(dados.faixas.filter(f=>f.status==='em-breve').map(f=>f.titulo),['Olhos no Espelho','Você na Canção do Rádio']);
 assert.ok(dados.faixas.filter(f=>f.status==='em-breve').every(f=>f.lancamento==='2026-11-29'));
 assert.equal((html.match(/<audio\b/g)||[]).length,0);
 assert.equal((html.match(/<time datetime="2026-11-29">/g)||[]).length,2);
 assert.equal((html.match(/data-status="em-breve"/g)||[]).length,2);
 assert.doesNotMatch(html,/<iframe\b|class="lyrics"|\bautoplay\b|suno\.com\/embed/);
 for (const faixa of dados.faixas) {
  assert.ok(html.includes(`id="${faixa.id}"`));
  if(faixa.audio) assert.ok(fs.existsSync(path.resolve(root,'ronaldo-lavestein',faixa.audio)));
  if (faixa.capa) assert.ok(fs.existsSync(path.resolve(root,'ronaldo-lavestein',faixa.capa)));
  assert.deepEqual(faixa.plataformas,{});
 }
});
test('geração estática é reproduzível a partir dos dados e preserva o catálogo sem JavaScript',()=>{
 execFileSync('python3',['scripts/gerar-acervo.py'],{cwd:root});
 assert.equal(read('ronaldo-lavestein/index.html'),html);
 assert.equal((html.match(/class="rl-card"/g)||[]).length,18);
});
test('home, portal de IA e pesquisa global alcançam as novas páginas',()=>{
 assert.match(read('index.html'),/href="ronaldo-lavestein\/"/);
 assert.match(read('pages/ia/index.html'),/href="musica\/index.html"/);
 const core=require('../../meu-mbb/catalogo-core');
 const catalogo=JSON.parse(read('meu-mbb/catalogo.json'));
 assert.ok(core.pesquisar(catalogo,'Caipirinha').some(u=>u.localizacao_atual==='ronaldo-lavestein/index.html'));
 assert.ok(core.pesquisar(catalogo,'vinheta').some(u=>u.localizacao_atual==='pages/ia/musica/index.html'));
 assert.equal(core.progresso(catalogo,{}).total,12);
});
test('MP3 de pré-lançamento não integra a versão publicada',()=>{
 for (const id of ['olhos-no-espelho','voce-na-cancao-do-radio']) {
  assert.ok(!fs.existsSync(path.join(root,'assets/audio',id+'.mp3')));
  assert.ok(!html.includes(id+'.mp3'));
 }
});

test('acervo separa a pesquisa musical dos recursos educacionais',()=>{
 const header=/<header\b[\s\S]*?<\/header>/.exec(html)[0];
 assert.equal((header.match(/<a\b/g)||[]).length,2);
 assert.match(header,/class="rl-header-home" href="..\/index.html">Mundo bit Byte/);
 assert.match(header,/id="rl-voltar"/);
 assert.match(header,/← Voltar ao portal/);
 assert.doesNotMatch(header,/Pesquisar|Meu MbB|Inteligência Artificial/);
 assert.doesNotMatch(html,/mbb-busca-global\.js|visitas-diretas\.js|meu-mbb\//);
 assert.match(html,/id="rl-busca"/);
});

test('convite ao acervo fica no bloco branco inicial, sem faixa grande no fim da home',()=>{
 const home=read('index.html');
 const hero=/<section class="hero hero-with-music">([\s\S]*?)<\/section>/.exec(home);
 assert.ok(hero);
 assert.match(hero[1],/id="mbb-music-callout"/);
 assert.ok(hero[1].includes('href="ronaldo-lavestein/" aria-label="Conhecer o acervo musical de Ronaldo Lavestein">Conhecer'));
 assert.doesNotMatch(home,/mbb-music-banner/);
 assert.equal((home.match(/id="mbb-music-title"/g)||[]).length,1);
});

test('pré-lançamentos preservam capas e pré-save', () => {
 for (const id of ['olhos-no-espelho','voce-na-cancao-do-radio']) {
   const faixa=dados.faixas.find(f=>f.id===id);
   assert.ok(faixa.capa);
   assert.ok(fs.existsSync(path.resolve(root,'ronaldo-lavestein',faixa.capa)));

 }
 assert.equal((html.match(/href="https:\/\/ffm\.to\/olhos-no-espelho"/g)||[]).length,2);
 assert.ok(!html.includes("https://ffm.to/voce-na-cancao-do-radio"));
 const home=read('index.html');
 assert.ok(!home.includes('https://ffm.to/voce-na-cancao-do-radio'));
 assert.ok(home.includes('https://ffm.to/olhos-no-espelho'));
 assert.match(html,/id="ouvir-olhos-no-espelho"/);
 assert.match(html,/id="ouvir"/);
 assert.doesNotMatch(html,/Ouça no site|Áudio demonstrativo no site/);
});

test('convite musical é compacto e horizontal no notebook', () => {
 const css=read('css/acervo-destaque.css');
 assert.ok(css.includes('grid-template-areas:"eyebrow eyebrow" "heading button" "artist button"'));
 assert.ok(css.includes('grid-template-columns:minmax(0,1fr) max-content'));
 assert.ok(css.includes('@media(max-width:800px)'));
});
