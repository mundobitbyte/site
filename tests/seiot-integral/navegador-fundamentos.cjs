const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const base=process.env.MBB_BASE_URL||'http://127.0.0.1:38765';
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try {
  for(const width of [390,1366]) {
   const context=await browser.newContext({viewport:{width,height:900}});
   const page=await context.newPage();
   const errors=[];
   page.on('pageerror',e=>errors.push(String(e)));
   page.on('response',r=>{if(r.status()>=400&&r.url().startsWith(base))errors.push(r.status()+': '+r.url())});
   await page.goto(base+'/pages/arduino.html#p8');
   await page.locator('#p8:visible').waitFor();
   await page.waitForFunction(()=>document.querySelector('#p8 .projectHead h2')?.textContent.includes('Projeto 8'));
   assert.match(await page.locator('#p8 .projectHead h2').textContent(),/Projeto 8 — LED RGB/);
   assert.equal((await page.locator('#p8 .projectHead .badge').textContent()).trim(),'P8');
   await page.goto(base+'/pages/arduino.html#p9');
   await page.locator('#p9:visible').waitFor();
   assert.match(await page.locator('#p9 .projectHead h2').textContent(),/Projeto 9 — Servo Motor/);
   for(const [id,badge] of [['lab1','Lab 1'],['lab2','Lab 2'],['lab3','Lab 3'],['lab4','Lab 4']]) {
     const url=base+'/pages/arduino.html#'+id;
     await page.goto(url);
     await page.locator('#'+id+':visible').waitFor();
     await page.waitForFunction((value)=>document.querySelector('#'+value+' .projectHead .badge')?.textContent.trim()===('Lab '+value.slice(3)),id,{timeout:8000});
     assert.equal((await page.locator('#'+id+' .projectHead .badge').textContent()).trim(),badge);
   }
   const code=await page.locator('#lab4code').textContent();
   assert(code.includes('30000UL'),'Sensor de lixeira: faltou limite para pulso sem eco');
   assert(code.includes('Sem eco valido'),'Lixeira: faltou decisão segura sem eco');
   for(const id of ['b5-1','b5-2','b5-3','b5-4']) {
     await page.goto(base+'/pages/arduino-programacao-aplicada.html#'+id);
     await page.locator('#'+id+':visible').waitFor();
   }
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'Transbordamento horizontal');
   assert.deepEqual(errors,[],'Falhas do navegador nas etapas 1–5');
   console.log(width+'px: projetos P8/P9, laboratórios, HC-SR04 e quatro práticas de programação verificados.');
   await context.close();
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
