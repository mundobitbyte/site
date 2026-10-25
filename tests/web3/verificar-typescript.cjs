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

async function executar(numero, transformar = texto => texto, deveCompilar = true, arquivosExtras = {}) {
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'mbb-ts-'));
  const app=path.join(tmp,'src');fs.mkdirSync(app);
  try {
    fs.writeFileSync(path.join(tmp,'package.json'),'{"type":"module"}');
    const config=JSON.parse(fs.readFileSync(path.join(source,'tsconfig.json')));
    config.compilerOptions.noEmit=false;
    config.compilerOptions.outDir='./saida';config.compilerOptions.rootDir='./src';
    fs.writeFileSync(path.join(tmp,'tsconfig.json'),JSON.stringify(config));
    const file=numero==='12'?'12/main.ts':numero+'.ts';
    fs.writeFileSync(path.join(app,'main.ts'),transformar(fs.readFileSync(path.join(source,'exemplos',file),'utf8')));
    if(numero==='12')fs.copyFileSync(path.join(source,'exemplos/12/atendimento.ts'),path.join(app,'atendimento.ts'));
    for(const [relativo,texto] of Object.entries(arquivosExtras)) {
      const destino=path.join(tmp,relativo);
      fs.mkdirSync(path.dirname(destino),{recursive:true});
      fs.writeFileSync(destino,texto);
    }
    const compilation=cp.spawnSync(tsc,['-p',path.join(tmp,'tsconfig.json')],{encoding:'utf8'});
    if(!deveCompilar){assert.notEqual(compilation.status,0);assert.match(compilation.stdout+compilation.stderr,/2322|2345|2741/);return;}
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

for(let n=1;n<=roteiro.length;n++){
  const id=String(n).padStart(2,'0');
  test(`exemplo ${id}: compila com strict e entrega o resultado ensinado`,async()=>{
    assert.equal(await executar(id),roteiro[n-1].result);
  });
}
test('verificador recusa prazo recebido como texto no código do aluno',async()=>{
  await executar('01',s=>s.replace('number = 35;', 'number = "45";'),false);
});
test('novo aviso da cozinha muda 35 para 45 e preserva os demais dados',async()=>{
  assert.equal(await executar('01',s=>s.replace('number = 35;', 'number = 45;')),
    roteiro[0].result.replace('35 minutos.', '45 minutos.'));
});
test('tentativa guardada fora de src não bloqueia a próxima atividade',async()=>{
  const tentativa='const prazo: number = "texto";';
  assert.equal(await executar('01',s=>s,true,{'entregas/desafio-1.ts':tentativa}),roteiro[0].result);
  await executar('01',s=>s,false,{'src/main-copia.ts':tentativa});
});
test('ausência de prazo não vira estimativa numérica fictícia',async()=>{
  assert.match(await executar('03',s=>s.replace('= 45;', '= null;')),/Consulte a equipe/);
});
test('atendimento encerrado não anuncia prazo nem pede para fazer um pedido',async()=>{
  for(const prazo of ['45','null']) {
    assert.equal(await executar('03',s=>s.replace('= true;','= false;').replace('= 45;',`= ${prazo};`)),
      'Café Aurora\nAtendimento encerrado.');
  }
});
test('cálculo e apresentação funcionam nas duas formas de função ensinadas',async()=>{
  for(const numero of ['04','05']) {
    assert.equal(await executar(numero,s=>s.replace(/calcularPrazo\(\d+, \d+\)/,'calcularPrazo(30, 10)')),
      'Café Aurora\nTempo estimado: 40 minutos.');
    await executar(numero,s=>s.replace(/calcularPrazo\(\d+, \d+\)/,'calcularPrazo("30", 10)'),false);
  }
});
test('find sem resultado não acessa propriedades de undefined',async()=>{
  assert.match(await executar('09',s=>s.replace('codigoProcurado: number = 2','codigoProcurado: number = 99')),/Produto não encontrado/);
});
test('limite exibido acompanha a consulta, inclusive quando não há itens',async()=>{
  for(const [limite,contagem] of [[8,1],[5,0]]) {
    assert.match(await executar('09',s=>s.replace('limitePreco: number = 9',`limitePreco: number = ${limite}`)),
      new RegExp(`Produtos até R\\$ ${limite}\\.00: ${contagem}\\.`));
  }
});
test('descrição do produto recusa um campo obrigatório ausente',async()=>{
  await executar('06',s=>s.replace('preco: 8, ',''),false);
});

function trecho(t) {
  const arquivo=fs.readFileSync(path.join(source,'exemplos',t.file),'utf8');
  const inicio=arquivo.indexOf(t.edit.from);
  assert.ok(inicio>=0);
  const fim=t.edit.until?arquivo.indexOf(t.edit.until,inicio):arquivo.length;
  assert.ok(fim>inicio);
  return arquivo.slice(inicio,fim).trimEnd();
}

test('troca somente das funções preserva o pedido que o aluno já calculou',async()=>{
  const anterior=fs.readFileSync(path.join(source,'exemplos/04.ts'),'utf8')
    .replace('calcularPrazo(40, 5)','calcularPrazo(30, 10)');
  const codigo=trecho(roteiro[4])+anterior.slice(anterior.indexOf('\n\nconst prazo'));
  assert.equal(await executar('05',()=>codigo),'Café Aurora\nTempo estimado: 40 minutos.');
  assert.equal(await executar('05',()=>codigo.replace('calcularPrazo(30, 10)','calcularPrazo(20, 5)')),
    'Café Aurora\nTempo estimado: 25 minutos.');
});

test('produto personalizado atravessa as aulas 6 a 10 sem reconstruir a lista',async()=>{
  let codigo=fs.readFileSync(path.join(source,'exemplos/06.ts'),'utf8')
    .replace('"Café coado", preco: 8','"Chá da casa", preco: 6');
  codigo=codigo.slice(0,codigo.indexOf('document.body.textContent'))+trecho(roteiro[6]);
  assert.equal(await executar('07',()=>codigo),'Café Aurora\nProdutos cadastrados: 3');
  codigo=codigo.replace('\n];','\n  { id: 4, nome: "Biscoito", preco: 4, disponivel: true },\n];');
  codigo=codigo.slice(0,codigo.indexOf('document.body.textContent'))+trecho(roteiro[7]);
  assert.match(await executar('08',()=>codigo),/Chá da casa — R\$ 6\.00/);
  codigo=codigo.slice(0,codigo.indexOf('const linhas'))+trecho(roteiro[8]);
  codigo=codigo.replace('codigoProcurado: number = 2','codigoProcurado: number = 1');
  assert.equal(await executar('09',()=>codigo),'Café Aurora\nProdutos até R$ 9.00: 3.\nChá da casa: R$ 6.00');
  const inicio=codigo.indexOf(roteiro[9].edit.from),fim=codigo.indexOf(roteiro[9].edit.until,inicio);
  codigo=codigo.slice(0,inicio)+trecho(roteiro[9])+codigo.slice(fim);
  assert.equal(await executar('10',()=>codigo),'Café Aurora\nProdutos até R$ 9.00: 3.\nChá da casa: R$ 6.00');
});

test('edições das aulas 8 a 10 conservam a lista personalizada e a busca protegida',async()=>{
  const t8=roteiro[7],t9=roteiro[8],t10=roteiro[9];
  let codigo=fs.readFileSync(path.join(source,'exemplos/07.ts'),'utf8')
    .replace('\n];','\n  { id: 4, nome: "Chá de hortelã", preco: 6, disponivel: true },\n];');
  codigo=codigo.slice(0,codigo.indexOf('document.body.textContent'))+trecho(t8);
  const lista=await executar('08',()=>codigo);
  assert.match(lista,/Chá de hortelã — R\$ 6\.00/);
  assert.equal(lista.split('\n').length,5);
  codigo=codigo.slice(0,codigo.indexOf('const linhas'))+trecho(t9);
  assert.equal(await executar('09',()=>codigo),
    'Café Aurora\nProdutos até R$ 9.00: 3.\nPão artesanal: R$ 12.00');
  const inicio=codigo.indexOf(t10.edit.from),fim=codigo.indexOf(t10.edit.until,inicio);
  codigo=codigo.slice(0,inicio)+trecho(t10)+codigo.slice(fim);
  assert.equal(await executar('10',()=>codigo),
    'Café Aurora\nProdutos até R$ 9.00: 3.\nPão artesanal: R$ 12.00');
  assert.match(await executar('10',()=>codigo.replace('codigoProcurado: number = 2','codigoProcurado: number = 99')),
    /Produto não encontrado/);
});
test('códigos mostrados e todos os arquivos do ZIP correspondem às fontes',()=>{
  assert.equal(fs.readFileSync(path.join(source,'src/main.ts'),'utf8'),
    fs.readFileSync(path.join(source,'exemplos/01.ts'),'utf8'),'O kit precisa iniciar no exemplo mostrado ao aluno');
  const html=fs.readFileSync(path.join(root,'pages/programacao-web/web3-typescript.html'),'utf8');
  function decode(s){return s.replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');}
  const matches=[...html.matchAll(/<code data-ts-source="([^"]+)">([\s\S]*?)<\/code>/g)];
  assert.equal(matches.length,13);
  for(const [,name,text] of matches)assert.equal(decode(text).trimEnd(),fs.readFileSync(path.join(source,name),'utf8').trimEnd(),name);
  const fragments=[...html.matchAll(/<code data-ts-fragment="([^"]+)">([\s\S]*?)<\/code>/g)];
  assert.equal(fragments.length,5);
  for(const [,name,text] of fragments) {
    const t=roteiro.find(t=>'exemplos/'+t.file===name);
    assert.equal(decode(text).trimEnd(),trecho(t));
  }
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
