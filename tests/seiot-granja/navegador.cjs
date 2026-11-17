const {chromium} = require('playwright');
const fs=require('fs');
const assert=require('node:assert/strict');
const base=process.env.MBB_BASE_URL || 'http://127.0.0.1:38763';
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try {
  for(const width of [390,1366]){
   const ctx=await browser.newContext({viewport:{width,height:900},permissions:['clipboard-read','clipboard-write']});
   const page=await ctx.newPage();
   const errors=[];
   page.on('pageerror',e=>errors.push(String(e)));
   page.on('response',r=>{if(r.status()>=400&&r.url().startsWith(base))errors.push(r.status()+': '+r.url())});
   await page.goto(base+'/pages/arduino-iot.html#b7-4');
   await page.locator('#b7-4.active-panel').waitFor();
   await page.getByRole('link',{name:'Ir para 7.5 — Granja Inteligente',exact:true}).click();
   await page.locator('#b7-5.active-panel').waitFor();
   await page.getByRole('link',{name:'Abrir a prática 7.5 — Granja Inteligente',exact:true}).click();
   await page.waitForURL('**/arduino-granja-inteligente.html');
   assert.equal(await page.locator('main .step7:visible').count(),11);
   assert((await page.locator('.nav7').boundingBox()).height < 170,'trilha sem altura natural');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'laboratório excede largura');
   for(const [id,file] of [['diagrama','diagram.json'],['programa','sketch.ino'],['bibliotecas','libraries.txt']]){
     const code=page.locator('#'+id+'[data-loaded=true]');
     await code.waitFor({state:'attached'});
     const disclosure=page.locator('details').filter({has:code});
     if(!await disclosure.evaluate(el=>el.open)) await disclosure.locator('summary').click();
     await page.locator('[data-copy='+id+']').click();
     await page.waitForFunction(()=>document.querySelector('#copystatus').textContent.startsWith('Copiado:'));
     assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),fs.readFileSync('wokwi/granja-inteligente/'+file,'utf8'));
   }
   const nav=page.getByRole('navigation',{name:'Trilha'});
   await nav.getByRole('link',{name:'Revisar Tópico 6'}).click();
   await page.locator('#b6-3.active-panel').waitFor();
   await page.goBack();
   await page.getByRole('link',{name:'Retornar à etapa 7.5',exact:true}).click();
   await page.locator('#b7-5.active-panel').waitFor();
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'tópico excede largura');
   await page.getByRole('link',{name:'avance ao Tópico 8'}).click();
   await page.locator('#b8-prep.active-panel').waitFor();
   assert.deepEqual(errors,[]);
   console.log(width+' px: percurso 7.4 → 7.5 → laboratório → 7.5 → 8, 3 cópias idênticas, sem transbordamento ou erros.');
   await ctx.close();
  }
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
