const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const raiz=path.resolve(__dirname,'../..');
const script=fs.readFileSync(path.join(raiz,'js/web3-percursos.js'),'utf8');
function pagina({direta=false,bloqueado=false,escolhido='mvc'}={}){
 const eventos={},gravacoes=[];
 const opcoes=direta?[]:['mvc','spa','baas'].map(p=>({dataset:{escolherPercurso:p},href:`https://exemplo.test/web3-${p}-1.html`,addEventListener(t,f){this[t]=f;}}));
 const retomar={hidden:true},retorno={textContent:''};
 const documento={body:{dataset:{moduleTitle:'Web III · Aula de teste'}},querySelector:()=>({}),querySelectorAll:()=>opcoes,getElementById:id=>id==='retomar-percurso'?retomar:retorno};
 vm.runInNewContext(script,{document:documento,window:{addEventListener(t,f){eventos[t]=f;}},localStorage:{getItem(){if(bloqueado)throw new Error('indisponível');return escolhido;},setItem(k,v){if(bloqueado)throw new Error('indisponível');escolhido=v;gravacoes.push([k,v]);}}});
 return {opcoes,retomar,retorno,gravacoes,documento,eventos,definirEscolha(v){escolhido=v;}};
}
test('voltar pelo navegador reapresenta a escolha sem exigir recarregamento',()=>{
 const p=pagina({escolhido:''});assert.equal(p.retomar.hidden,true);
 p.opcoes[1].click();assert.equal(p.retomar.hidden,false);assert.match(p.retomar.href,/spa/);
 p.definirEscolha('baas');p.eventos.pageshow();assert.match(p.retomar.href,/baas/);
 p.definirEscolha('invalida');p.eventos.pageshow();assert.equal(p.retomar.hidden,true);
 assert.deepEqual(p.gravacoes,[['mbb:web3:percurso:v1','spa']]);
});
test('abrir aula diretamente ou pesquisar outro caminho não reescreve a escolha nem a conclusão',()=>{
 const p=pagina({direta:true});assert.deepEqual(p.gravacoes,[]);assert.equal(p.retomar.hidden,true);
 const q=pagina({escolhido:'spa'});assert.deepEqual(q.gravacoes,[]);assert.match(q.retomar.href,/spa/);
 q.opcoes[2].click();assert.deepEqual(q.gravacoes,[['mbb:web3:percurso:v1','baas']]);
});
test('armazenamento bloqueado e preferência inválida não impedem os links públicos',()=>{
 const p=pagina({bloqueado:true});assert.equal(p.opcoes.length,3);p.opcoes[0].click();assert.match(p.retorno.textContent,/link normalmente/);
 const q=pagina({escolhido:'https://destino-injetado.test'});assert.equal(q.retomar.hidden,true);
});
test('mudança de âncora preserva o título específico da aula',()=>{
 const p=pagina();p.documento.title='Título genérico';p.eventos.hashchange();assert.equal(p.documento.title,'Web III · Aula de teste | Mundo bit Byte');
});
test('catálogo acrescenta uma unidade por aula e menus mostram somente o percurso correspondente',()=>{
 const m=JSON.parse(fs.readFileSync(path.join(raiz,'materiais/programacao-web/web3-evolucao/modulo.json')));
 const c=JSON.parse(fs.readFileSync(path.join(raiz,'meu-mbb/catalogo.json')));
 assert.equal(m.aulas.length,31);
 for(const a of m.aulas){
  assert.equal(c.unidades.filter(u=>u.conteudo_id===a.id).length,1);
  const h=fs.readFileSync(path.join(raiz,'pages/programacao-web',a.pagina),'utf8');
  const menu=h.match(/<nav class="chapter-menu"[\s\S]*?<\/nav>/)[0];
  if(a.percurso)for(const outro of Object.keys(m.percursos).filter(x=>x!==a.percurso))assert.doesNotMatch(menu,new RegExp(`web3-${outro}-\\d`));
 }
 const horas=p=>42+2+8+m.aulas.filter(a=>a.percurso===p).reduce((n,a)=>n+a.horas,0);
 assert.deepEqual(['mvc','spa','baas'].map(horas),[122,118,132]);
});
