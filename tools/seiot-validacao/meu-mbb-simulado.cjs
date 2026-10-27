// Exercita a interface existente com conta em memória; nunca grava no Firebase.
const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');
let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,'playwright')));}
const base=process.env.MBB_BASE_URL||'http://127.0.0.1:4179';
const fake=`window.registrosTeste={visitas:[],estado:{notas:[]}};window.MBBMeuConta={
 iniciar:async()=>{},atual:()=>({uid:'conta-ficticia-em-memoria',emailVerified:true}),
 visitar:async(u,a)=>{window.registrosTeste.visitas.push({id:u.conteudo_id,ancora:a})},
 obter:async()=>structuredClone(window.registrosTeste.estado),
 notasDoRegistro:e=>e.notas||[],
 salvar:async(u,c)=>Object.assign(window.registrosTeste.estado,c),
 alterarNota:async(u,t,i)=>{if(i===null)window.registrosTeste.estado.notas.push(t);else window.registrosTeste.estado.notas[i]=t;}
};`;
(async()=>{const b=await chromium.launch({executablePath:process.env.MBB_CHROMIUM,args:['--no-sandbox']});const resultados=[];try{for(const name of ['conectividade','iot','protocolos','seguranca','projeto-iot']){
const ctx=await b.newContext({viewport:{width:390,height:844}});
await ctx.route('**/*',route=>route.request().url().startsWith(base)?route.continue():route.abort());
await ctx.route('**/meu-mbb/firebase-config.js*',r=>r.fulfill({contentType:'application/javascript',body:''}));
await ctx.route('**/meu-mbb/conta.js*',r=>r.fulfill({contentType:'application/javascript',body:fake}));
const p=await ctx.newPage();await p.goto(base+'/pages/arduino-'+name+'.html');
await p.getByRole('button',{name:'Meu estudo',exact:true}).waitFor();
const target=await p.locator('#stageMenu a[href^="#"]').nth(1).getAttribute('href');
await p.locator('#stageToggle').click();await p.locator('#stageMenu a[href="'+target+'"]').click();
await p.waitForFunction(hash=>window.registrosTeste.visitas.some(v=>v.ancora===hash.slice(1)),target);
await p.getByRole('button',{name:'Meu estudo',exact:true}).click();
await p.getByRole('button',{name:'☆ Adicionar aos favoritos',exact:true}).click();
await p.getByRole('button',{name:'Marcar conteúdo como concluído',exact:true}).click();
for(const note of ['Teste: leitura do sensor','Teste: comportamento sem Wi-Fi']){await p.getByRole('textbox',{name:'Sua anotação privada',exact:true}).fill(note);await p.getByRole('button',{name:'Adicionar anotação',exact:true}).click();}
await p.waitForFunction(()=>window.registrosTeste.estado.notas.length===2);
const data=await p.evaluate(()=>window.registrosTeste);assert(data.estado.favorito&&data.estado.concluido);assert.equal(data.estado.notas.length,2);assert.equal(data.visitas.at(-1).ancora,target.slice(1));resultados.push({name,...data});
await ctx.close();}
}finally{await b.close();}
fs.writeFileSync(process.env.MBB_RESULTADO||'/tmp/seiot-evidencias/meu-mbb-simulado.json',JSON.stringify(resultados,null,2));console.log('OK: 5 módulos, visitas e mudanças de etapa, favoritos, progresso e duas anotações em memória.');})().catch(e=>{console.error(e);process.exitCode=1;});
