const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const dados = JSON.parse(read('data/acervo-musical.json'));
const html = read('ronaldo-lavestein/index.html');
test('acervo aprovado tem 18 faixas, duas versões distintas e apenas a demonstração autorizada', () => {
 assert.equal(dados.faixas.length,18);
 assert.equal(new Set(dados.faixas.map(f=>f.id)).size,18);
 assert.equal(dados.faixas[0].titulo,'Esperando Manuela');
 assert.equal(dados.faixas.at(-1).titulo,'Caipirinha');
 assert.equal(dados.faixas.filter(f=>f.titulo.startsWith('Como o Vento na Janela')).length,2);
 assert.deepEqual(dados.faixas.filter(f=>f.audio).map(f=>f.titulo),['Você na Canção do Rádio']);
 assert.equal((html.match(/<audio\b/g)||[]).length,1);
 assert.match(html,/preload="none"/);
 assert.doesNotMatch(html,/<iframe\b|class="lyrics"|\bautoplay\b|suno\.com\/embed/);
 for (const faixa of dados.faixas) {
  assert.ok(html.includes(`id="${faixa.id}"`));
  if(faixa.audio) assert.ok(fs.existsSync(path.resolve(root,'ronaldo-lavestein',faixa.audio)));
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
test('MP3 público não carrega letras ou instruções privadas nos metadados',()=>{
 const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format_tags:stream=codec_type','-of','json',path.join(root,'assets/audio/voce-na-cancao-do-radio.mp3')],{encoding:'utf8'}));
 assert.equal(probe.streams.length,1);
 assert.equal(probe.streams[0].codec_type,'audio');
 assert.ok(Object.keys(probe.format.tags).every(k=>!k.toLowerCase().includes('lyrics')));
 assert.doesNotMatch(JSON.stringify(probe.format.tags),/Instrumental Intro|Preserve original|63f0fab1/);
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
 assert.match(hero[1],/href="ronaldo-lavestein\/">Conhecer acervo/);
 assert.doesNotMatch(home,/mbb-music-banner/);
 assert.equal((home.match(/id="mbb-music-title"/g)||[]).length,1);
});
