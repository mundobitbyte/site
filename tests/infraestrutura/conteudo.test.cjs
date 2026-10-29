const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../..');
const html = fs.readFileSync(path.join(root,'pages/infraestrutura.html'),'utf8');
const ctx = {window:{}};
vm.createContext(ctx);
for (const [,src] of html.matchAll(/<script src="([^"?]+)(?:\?[^\"]*)?"/g)) {
  if (!src.includes('/infraestrutura/') || src.includes('destaques-mbb')) continue;
  vm.runInContext(fs.readFileSync(path.resolve(root,'pages',src),'utf8'),ctx,{filename:src});
}
const groups = ['infraestruturaLessons','infraestruturaNetworkLessons','infraestruturaLinuxLessons','infraestruturaModernLessons','infraestruturaIntegratorLessons'].map(k=>ctx.window[k]);
const lessons = groups.flat();
test('49 aulas preservam IDs únicos, quatro sequências 00–10/99 e integrador',()=>{
 assert.equal(lessons.length,49); assert.equal(new Set(lessons.map(x=>x.id)).size,49);
 groups.slice(0,4).forEach(ls=>assert.deepEqual(Array.from(ls,x=>x.number),['00','01','02','03','04','05','06','07','08','09','10','99']));
 assert.equal(groups[4][0].id,'integrador-final');
});
test('cada aula tem preparação antes da primeira questão e mantém conteúdo original',()=>{
 for(const l of lessons){
  assert.equal((l.content.match(/class="learning-entry"/g)||[]).length,1,l.id);
  assert.match(l.content,/story-opening/,l.id);
  assert.match(l.content,/bridge-box|Essência/,l.id);
  const quiz=l.content.indexOf('data-quiz-group');
  if(quiz>=0) assert(l.content.indexOf('class="learning-entry"')<quiz,l.id);
 }
});
test('links locais, imagens e downloads existem; IDs não duplicam dentro da aula',()=>{
 for(const l of lessons){
  for(const [,url] of l.content.matchAll(/(?:href|src)="([^"#]+)"/g)){
   if(/^(https?:|data:|mailto:)/.test(url))continue;
   assert(fs.existsSync(path.resolve(root,'pages',url.split(/[?#]/)[0])),l.id+' '+url);
  }
  const ids=[...l.content.matchAll(/\bid="([^\"]+)"/g)].map(x=>x[1]);
  assert.equal(ids.length,new Set(ids).size,l.id);
 }
});
test('cinco oficinas incluem referência e cada questão aponta alternativa existente',()=>{
 assert.equal(lessons.filter(l=>l.content.includes('final-reference')).length,5);
 for(const l of lessons){
  for(const [,question,answer,body] of l.content.matchAll(/(<div[^>]*data-quiz-question[^>]*data-answer="([^"]+)"[^>]*>)([\s\S]*?)<\/div>/g)){
   assert(body.includes(`value="${answer}"`),l.id+' '+answer);
  }
 }
});
test('navegação mantém a correção de reabrir aula ao retornar ao portal',()=>{
 const code=fs.readFileSync(path.join(root,'js/infraestrutura.js'),'utf8');
 assert.match(code,/function showPortal[\s\S]*?currentLessonId = null/);
});
test('fontes de rede e persistência não prometem equivalências falsas',()=>{
 const linux=lessons.find(x=>x.id==='linux-netplan').content;
 assert.match(linux,/sem gateway|não recebe rota padrão/);
 assert.match(lessons.find(x=>x.id==='redes-oficina').content,/não contém \.pkt/);
 assert.match(lessons.find(x=>x.id==='moderna-compose').content,/não possui formulário|não um formulário/);
 assert.match(lessons.find(x=>x.id==='moderna-containers').content,/contornar regras UFW/);
});
test('caminho PowerShell da chave pública mantém barras no HTML renderizado',()=>{
 assert(lessons.find(x=>x.id==='linux-ssh').content.includes('$env:USERPROFILE\\.ssh\\id_ed25519.pub'));
});
test('busca aponta a aula Netplan e retomada mantém o ID estável do curso',()=>{
 const core=require('../../meu-mbb/catalogo-core.js');
 const catalog=require('../../meu-mbb/catalogo.json');
 const found=core.pesquisar(catalog,'Netplan').find(x=>x.conteudo_id==='mod-pages-infraestrutura');
 assert.equal(found.localizacao_pesquisa,'pages/infraestrutura.html#linux-netplan');
 const visits=require('../../meu-mbb/visitas-diretas.json')['pages/infraestrutura.html'];
 assert.equal(visits.conteudo_id,'mod-pages-infraestrutura');
 assert.equal(visits.ancoras.length,49);
});
