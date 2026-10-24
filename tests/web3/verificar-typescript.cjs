const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');
const {pathToFileURL} = require('node:url');
const root = path.resolve(__dirname,'../..');
const source = path.join(root,'materiais/programacao-web/web3-typescript');
const tools = process.env.MBB_TS_TOOLS || source;
const tsc = path.join(tools,'node_modules/.bin/tsc');
const roteiro = JSON.parse(fs.readFileSync(path.join(source,'roteiro.json'),'utf8'));

async function executar(numero, transformar = texto => texto, deveCompilar = true) {
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'mbb-ts-'));
  const app=path.join(tmp,'src');fs.mkdirSync(app);
  try {
    fs.writeFileSync(path.join(tmp,'package.json'),'{"type":"module"}');
    const config=JSON.parse(fs.readFileSync(path.join(source,'tsconfig.json')));
    config.compilerOptions.noEmit=false;
    config.compilerOptions.outDir='./saida';config.compilerOptions.rootDir='./src';
    fs.writeFileSync(path.join(tmp,'tsconfig.json'),JSON.stringify(config));
    const file=numero==='09'?'09/main.ts':numero+'.ts';
    fs.writeFileSync(path.join(app,'main.ts'),transformar(fs.readFileSync(path.join(source,'exemplos',file),'utf8')));
    if(numero==='09')fs.copyFileSync(path.join(source,'exemplos/09/atendimento.ts'),path.join(app,'atendimento.ts'));
    const compilation=cp.spawnSync(tsc,['-p',path.join(tmp,'tsconfig.json')],{encoding:'utf8'});
    if(!deveCompilar){assert.notEqual(compilation.status,0);assert.match(compilation.stdout+compilation.stderr,/2322|2345/);return;}
    assert.equal(compilation.status,0,compilation.stdout+compilation.stderr);
    const previous=global.document;
    global.document={body:{textContent:''}};
    try {
      await import(pathToFileURL(path.join(tmp,'saida/main.js')).href);
      await new Promise(setImmediate);
      return global.document.body.textContent;
    } finally { if(previous===undefined)delete global.document;else global.document=previous; }
  } finally {fs.rmSync(tmp,{recursive:true,force:true});}
}

for(let n=1;n<=9;n++){
  const id=String(n).padStart(2,'0');
  test(`exemplo ${id}: compila com strict e entrega o resultado ensinado`,async()=>{
    assert.equal(await executar(id),roteiro[n-1].result);
  });
}
test('verificador recusa prazo recebido como texto no código do aluno',async()=>{
  await executar('01',s=>s.replace('tempoEstimado = 40;', 'tempoEstimado = "40";'),false);
});
test('ausência de prazo não vira estimativa numérica fictícia',async()=>{
  assert.match(await executar('02',s=>s.replace('= 40;', '= null;')),/Consulte a equipe/);
});
test('find sem resultado não acessa propriedades de undefined',async()=>{
  assert.match(await executar('05',s=>s.replace('produto.id === 2','produto.id === 99')),/Produto não encontrado/);
});
for(const [nome,texto] of [['texto numérico','{"tempoEstimado":"35"}'],['campo ausente','{}'],['valor nulo','null'],['JSON malformado','{'],['prazo negativo','{"tempoEstimado":-5}'],['número não finito','{"tempoEstimado":1e309}']]){
  test(`resposta de estudo: ${nome} é recusado durante a execução`,async()=>{
    const result=await executar('08',s=>s.replace("'{\"tempoEstimado\":35}'",JSON.stringify(texto)));
    assert.match(result,/Café Aurora/);assert.doesNotMatch(result,/Tempo estimado:/);
  });
}
test('códigos mostrados e todos os arquivos do ZIP correspondem às fontes',()=>{
  const html=fs.readFileSync(path.join(root,'pages/programacao-web/web3-typescript.html'),'utf8');
  function decode(s){return s.replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');}
  const matches=[...html.matchAll(/<code data-ts-source="([^"]+)">([\s\S]*?)<\/code>/g)];
  assert.equal(matches.length,10);
  for(const [,name,text] of matches)assert.equal(decode(text).trimEnd(),fs.readFileSync(path.join(source,name),'utf8').trimEnd(),name);
  cp.execFileSync('python3',['-c',`from pathlib import Path
import zipfile
root=Path(${JSON.stringify(source)})
with zipfile.ZipFile(${JSON.stringify(path.join(root,'downloads/programacao-web/cafe-aurora-typescript-essencial.zip'))}) as z:
 expected={(('index.html' if p.name=='index.html.txt' else str(p.relative_to(root)))):p.read_bytes() for p in root.rglob('*') if p.is_file() and p.name!='roteiro.json' and 'node_modules' not in p.parts and 'dist' not in p.parts}
 actual={p.split('/',1)[1]:z.read(p) for p in z.namelist()}
 assert actual==expected
 assert not any(p.startswith('node_modules/') or p.startswith('dist/') for p in actual)
`]);
});
