// Auditoria do percurso real renderizado. Dependência de desenvolvimento: playwright.
// MBB_BASE_URL permite repetir a conferência no site público.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
let chromium;
try { ({chromium} = require('playwright')); }
catch { ({chromium} = require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, 'playwright'))); }
const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4179';
const dest = process.env.MBB_EVIDENCIAS || '/tmp/seiot-evidencias';
const executablePath = process.env.MBB_CHROMIUM;
const names = ['conectividade','iot','protocolos','seguranca','projeto-iot','revisao-modulos','exercicios'];
const summary = {base, etapas:[], copias:[], recursos:[], ancoras:[], pesquisa:[], erros:[], widths:[390,768,1366]};
fs.mkdirSync(dest,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
 try {
  for(const width of summary.widths){
   const context=await browser.newContext({viewport:{width,height:844},permissions:['clipboard-read','clipboard-write']});
   const page=await context.newPage();
   page.on('pageerror',e=>summary.erros.push(e.message));
   page.on('response',r=>{if(r.status()>=400&&r.url().startsWith(base))summary.recursos.push({url:r.url(),status:r.status()});});
   for(const name of names){
    await page.goto(`${base}/pages/arduino-${name}.html`);
    await page.waitForTimeout(550);
    assert.equal(await page.locator('#arduinoModuleMenu a.module-btn').count(),11,`${name}: menu incompleto`);
    const hashes=await page.locator('#stageMenu a[href^="#"]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
    if(!hashes.length)hashes.push('#topo');
    for(const hash of hashes){
     if(hash!=='#topo'){
      if(await page.locator('#stageToggle').isVisible())await page.locator('#stageToggle').click();
      await page.locator(`#stageMenu a[href="${hash}"]`).click();
     }
     await page.waitForTimeout(330);
     const result=await page.evaluate(({name,width,hash})=>{
      const panel=document.getElementById(hash.slice(1));
      const fixedBottom=Math.max(...[...document.querySelectorAll('body>header,body>.module-menu')].map(e=>e.getBoundingClientRect().bottom));
      const duplicates=[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i);
      const spilled=[...panel.querySelectorAll('*')].filter(e=>e.getBoundingClientRect().width>0&&e.getBoundingClientRect().right>innerWidth+3&&!e.closest('pre,.mbb-table-scroll,.mbb8-table-scroll,.mbb10-table-scroll,.mbb9-audit')).map(e=>e.tagName+'.'+e.className).slice(0,5);
      return {name,width,hash,overflow:document.documentElement.scrollWidth-innerWidth,top:Math.round(panel.getBoundingClientRect().top),fixedBottom:Math.round(fixedBottom),duplicates,spilled,active:hash==='#topo'||panel.classList.contains('active-panel'),drawer:document.querySelector('#arduinoLayout').classList.contains('drawer-open')};
     },{name,width,hash});
     summary.etapas.push(result);
     assert(result.active&&!result.drawer,JSON.stringify(result));
     assert(result.overflow<=2&&!result.duplicates.length&&!result.spilled.length,JSON.stringify(result));
     if(hash!=='#topo'&&name!=='revisao-modulos'&&result.top<result.fixedBottom-2){
      const debug=await page.locator(hash).evaluate(e=>({scrollMargin:getComputedStyle(e).scrollMarginTop,scrollTop:document.scrollingElement.scrollTop,ancestrais:Array.from((function*(n){for(;n;n=n.parentElement)yield n})(e)).map(n=>({tag:n.tagName,id:n.id,top:n.getBoundingClientRect().top,scroll:n.scrollTop,overflow:getComputedStyle(n).overflow}))}));
      console.log('DIAGNOSTICO_ANCORA',JSON.stringify(debug));
      await page.screenshot({path:`${dest}/ancora-falhou.jpg`,type:'jpeg',quality:70});
      console.log('MBB_EVIDENCIA ancora-falhou.jpg '+fs.readFileSync(`${dest}/ancora-falhou.jpg`).toString('base64'));
      assert.fail(`Âncora encoberta: ${JSON.stringify(result)}`);
     }
     const buttons=page.locator(`${hash} button[onclick*="copyCode"]`);
     for(let i=0;i<await buttons.count();i++){
      const button=buttons.nth(i);
      const id=(await button.getAttribute('onclick')).match(/copyCode\('([^']+)'/)[1];
      const text=await page.locator('#'+id).textContent();
      await button.evaluate(e=>{for(let p=e.parentElement;p;p=p.parentElement)if(p.tagName==="DETAILS")p.open=true;});
      await button.click();
      await page.waitForFunction(({id})=>document.querySelector(`button[onclick*="'${id}'"]`).textContent==='Copiado',{id});
      const clip=await page.evaluate(()=>navigator.clipboard.readText());
      assert.equal(clip,text,`${width}/${id}: conteúdo copiado diferente`);
      const color=await page.locator('#'+id).evaluate(e=>({bg:getComputedStyle(e).backgroundColor,color:getComputedStyle(e).color}));
      assert.notEqual(color.bg,'rgb(15, 23, 42)',`${id}: tema escuro`);
      summary.copias.push({name,width,id,caracteres:text.length,...color});
     }
     // Conteúdo sob demanda precisa existir uma única vez e ficar junto do programa.
     if(width===390&&hash==='#b6-1'){
      assert.equal(await page.locator('[data-mbb6-leitura="bluetooth"]').count(),1);
      assert.equal(await page.locator('[data-mbb6-leitura="bluetooth"]').evaluate(e=>e.parentElement.tagName),'ARTICLE');
      assert.match(await page.locator('h3').allTextContents().then(a=>a.join(' ')),/BluetoothSerial\.h/);
     }
     if(width===390&&['#b6-1','#b8-1','#b8-2','#b10-5','#b10-7','#b9-2'].includes(hash)){
      await page.locator(hash).screenshot({path:`${dest}/${name}-${hash.slice(1)}-${width}.png`});
     }
    }
    // Cada recurso visual é carregado ao percorrer as etapas, mesmo quando lazy.
    for(const img of await page.locator('main img').all()){
     if(await img.evaluate(e=>e.complete&&e.naturalWidth>0))continue;
     const panelId=await img.evaluate(e=>e.closest('main > section[id]')?.id);
     if(panelId&&await page.locator(`#stageMenu a[href="#${panelId}"]`).count()){
      if(await page.locator('#stageToggle').isVisible())await page.locator('#stageToggle').click();
      await page.locator(`#stageMenu a[href="#${panelId}"]`).click();
     }
     await img.scrollIntoViewIfNeeded();
     await img.evaluate(e=>e.decode());
    }
    const images=await page.locator('main img').evaluateAll(es=>es.map(e=>({src:e.getAttribute('src'),ok:e.complete&&e.naturalWidth>0})));
    assert(images.every(e=>e.ok),JSON.stringify(images));
    if(width===1366&&name==='projeto-iot')await page.screenshot({path:`${dest}/projeto-iot-desktop.png`});
    if(width===1366&&['conectividade','protocolos','projeto-iot'].includes(name)){
     for(const item of await page.locator('pre[id]').evaluateAll(es=>es.map(e=>({id:e.id,code:e.textContent})))){
      fs.writeFileSync(`${dest}/${item.id}.txt`,item.code);
     }
    }
   }
   await context.close();
  }
  const context=await browser.newContext({viewport:{width:390,height:844}});
  const page=await context.newPage();
  // Entrada por âncora interna e hash inválido não podem travar a página.
  for(const [name,hash,parent] of [['conectividade','b6-1-wokwi-header','b6-1'],['protocolos','b8-i2c-lcd','b8-2'],['projeto-iot','b10-final','b10-5']]){
   await page.goto(`${base}/pages/arduino-${name}.html#${hash}`);await page.waitForTimeout(650);
   assert(await page.locator('#'+parent).isVisible(),`${name}: âncora interna não ativou painel`);
   summary.ancoras.push({name,hash,parent});
  }
  await page.goto(`${base}/pages/arduino-protocolos.html#%`);await page.waitForTimeout(400);
  assert(await page.locator('#b8-prep').isVisible());
  // Pesquisa pública deve levar à etapa correta sem autenticação.
  for(const [query,expected] of [['RTOS','arduino-protocolos.html'],['luminosidade','arduino-projeto-iot.html'],['HTTPS','arduino-seguranca.html']]){
   await page.goto(`${base}/meu-mbb/pesquisar.html`);await page.locator('#consulta').fill(query);await page.waitForTimeout(600);
   const result=page.locator(`#resultados a[href*="${expected}"]`).first();
   assert(await result.count(),`Pesquisa não encontrou ${query}`);
   const href=await result.getAttribute('href');await result.click();await page.waitForTimeout(550);
   const hash=new URL(page.url()).hash;
   if(hash)assert(await page.locator(hash).isVisible(),`Pesquisa chegou a painel oculto: ${href}`);
   summary.pesquisa.push({query,destino:page.url()});
  }
  await context.close();
  assert.equal(summary.erros.length,0,JSON.stringify(summary.erros));
  assert.equal(summary.recursos.length,0,JSON.stringify(summary.recursos));
 } finally {await browser.close();fs.writeFileSync(`${dest}/navegador.json`,JSON.stringify(summary,null,2)+'\n');}
 console.log(JSON.stringify({etapas:summary.etapas.length,copias:summary.copias.length,ancoras:summary.ancoras.length,pesquisas:summary.pesquisa.length,erros:summary.erros,recursos:summary.recursos}));
})().catch(e=>{console.error(e);process.exitCode=1;});
