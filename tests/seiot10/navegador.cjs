const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const base=process.env.MBB_BASE_URL || 'http://127.0.0.1:38764';
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try{
  for(const width of [390,1366]){
   const context=await browser.newContext({viewport:{width,height:900},permissions:['clipboard-read','clipboard-write']});
   const page=await context.newPage();
   const errors=[];
   page.on('pageerror',e=>errors.push(String(e)));
   page.on('response',r=>{if(r.status()>=400 && r.url().startsWith(base))errors.push(r.status()+': '+r.url())});
   await page.goto(base+'/pages/arduino-projeto-iot.html#b10-2');
   await page.locator('#b10-2.active-panel').waitFor();
   const card=page.locator('#b10-2 [data-mbb10-wokwi-json]');
   assert.equal(await card.count(),1);
   await card.locator('summary').click();
   const pre=card.locator('#b10-wokwi-diagram');
   assert(await pre.isVisible());
   assert.equal(await pre.textContent(),fs.readFileSync('wokwi/ambiente-inteligente/diagram.json','utf8'));
   await card.getByRole('button',{name:'Copiar diagrama JSON do projeto integrador'}).click();
   await page.waitForFunction(()=>document.querySelector('#b10-wokwi-diagram').previousElementSibling?.textContent?.includes('Copiado'),null,{timeout:2500}).catch(()=>{});
   assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),fs.readFileSync('wokwi/ambiente-inteligente/diagram.json','utf8'));
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'Transbordamento horizontal');
   assert.deepEqual(errors,[]);
   console.log(width+'px: JSON idêntico ao arquivo, cópia integral e sem erros de navegador.');
   await context.close();
  }
 } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
