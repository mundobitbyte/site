const assert=require('node:assert/strict');
const fs=require('node:fs');
const {chromium}=require('playwright');
const base=process.env.MBB_BASE_URL||'http://127.0.0.1:4179';
const dest=process.env.MBB_EVIDENCIAS||'/tmp/seiot-evidencias';
(async()=>{
 fs.mkdirSync(dest,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.MBB_CHROMIUM,args:['--no-sandbox']});
 const results=[];
 try {
  for(const width of [390,768,1366]){
   const context=await browser.newContext({viewport:{width,height:844},permissions:['clipboard-read','clipboard-write']});
   const page=await context.newPage();
   const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto(base+'/pages/arduino-conectividade.html#b6-1');
   await page.locator('#b6-1.active-panel').waitFor();
   assert.match(await page.locator('#b6-1-code').textContent(),/SerialBT\.begin/);
   assert.match(await page.locator('#b6-1-wokwi-header').textContent(),/class BluetoothSerial/);
   assert.match(await page.locator('#b6-1').textContent(),/Testando Bluetooth real/);
   assert.match(await page.locator('#b6-1').textContent(),/pareamento/);
   for(const id of ['b6-1-code','b6-1-wokwi-header']){
    const button=page.locator('button[onclick*="'+id+'"]').first();
    await button.click();
    await page.waitForFunction(id=>document.querySelector('button[onclick*="'+id+'"]').textContent==='Copiado',id);
    assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),await page.locator('#'+id).textContent());
   }
   // Verificar o DOM final após a execução dos complementos didáticos.
   await page.goto(base+'/pages/arduino-conectividade.html#b6-2');
   await page.locator('#b6-2.active-panel').waitFor();
   const wifiTexto=await page.locator('#b6-2').textContent();
   assert.match(wifiTexto,/Entenda os parâmetros/);
   assert.match(wifiTexto,/o primeiro texto é o nome da rede/);
   assert.match(wifiTexto,/Como interpretar a evidência/);
   assert.match(wifiTexto,/Experimento de verificação/);
   assert.match(wifiTexto,/Antes de avançar — entenda o endereço que apareceu/);
   assert.equal(await page.locator('#b6-2 [data-mbb6-wifi-observacao]').count(),1);
   assert.equal(await page.locator('#b6-2 [data-mbb6-wifi-evidencia]').count(),1);
   assert.equal(await page.locator('#b6-2-code').count(),1);
   assert.equal(await page.locator('#b6-2-wokwi-code').count(),1);
   await page.goto(base+'/pages/arduino-conectividade.html#b6-3');
   await page.locator('#b6-3.active-panel').waitFor();
   const httpTexto=await page.locator('#b6-3').textContent();
   assert.match(httpTexto,/HTTP — parte A: o ESP32 faz uma solicitação/);
   assert.match(httpTexto,/HTTP — parte B: o ESP32 atende ao navegador/);
   await page.goto(base+'/pages/arduino-conectividade.html#b6-prep');
   await page.locator('#b6-prep.active-panel').waitFor();
   await page.waitForFunction(()=>document.querySelector('#b6-prep-diagrama-extra')?.textContent.includes('"version": 1'));
   assert.equal(JSON.parse(await page.locator('#b6-prep-diagrama-extra').textContent()).parts.length,3);
   const diagramaCard=page.locator('#b6-prep [data-mbb6-acrescimo="diagrama"]');
   const tituloAnterior=await diagramaCard.evaluate(e=>e.previousElementSibling?.querySelector('h3')?.textContent);
   const tituloSeguinte=await diagramaCard.evaluate(e=>e.nextElementSibling?.querySelector('h3')?.textContent);
   assert.match(tituloAnterior,/7\. Montando o circuito-base/);
   assert.match(tituloSeguinte,/Entenda o diagram\.json/);
   assert.match(await diagramaCard.textContent(),/diagram\.json/);
   assert.match(await diagramaCard.textContent(),/sketch\.ino/);
   assert.match(await diagramaCard.textContent(),/Ctrl\+A/);
   assert.match(await diagramaCard.textContent(),/mesmo circuito-base/);
   // O JSON do circuito deve estar visível e copiável, sem abrir qualquer acordeão.
   assert.equal(await diagramaCard.locator('details').count(),0);
   assert.equal(await diagramaCard.locator('.mbb6-json-direto').count(),1);
   assert(await diagramaCard.locator('#b6-prep-diagrama-extra').isVisible());
   assert.equal((await diagramaCard.locator('pre').textContent()).trim().startsWith('{'),true);
   const copiar=diagramaCard.locator('button[onclick*="b6-prep-diagrama-extra"]');
   assert(await copiar.isVisible());
   assert(await copiar.isEnabled());
   assert.match(await copiar.textContent(),/Copiar JSON completo/);
   await copiar.click();
   await page.waitForFunction(()=>document.querySelector('[data-mbb6-acrescimo="diagrama"] button')?.textContent==='Copiado');
   assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),await page.locator('#b6-prep-diagrama-extra').textContent());
   const guiaCard=page.locator('#b6-prep [data-mbb6-acrescimo="guia-json"]');
   assert.equal(await guiaCard.count(),1);
   assert.match(await guiaCard.evaluate(e=>e.nextElementSibling?.querySelector('h3')?.textContent),/8\. Código do LED/);
   assert.match(await guiaCard.evaluate(e=>e.previousElementSibling?.querySelector('h3')?.textContent),/Opção 2/);
   assert.match(await guiaCard.evaluate(e=>e.nextElementSibling?.querySelector('h3')?.textContent),/8\. Código do LED/);
   for(const token of ['version','author','editor','parts','connections','serialMonitor','left','top','rotate','hide','attrs','color','value','newline','Ctrl']) {
     assert((await guiaCard.textContent()).includes(token),'Falta explicação JSON: '+token);
   }
   assert.equal(await guiaCard.locator('details').count(),5);

   // A faixa inteira precisa indicar que abre/fecha, inclusive para uso por teclado.
   for(const accordion of await guiaCard.locator('details').all()){
     const summary=accordion.locator('summary');
     assert.match(await summary.evaluate(e=>getComputedStyle(e,'::after').content),/Clique para abrir/);
     assert.equal(await summary.evaluate(e=>getComputedStyle(e).cursor),'pointer');
     assert.equal(await accordion.evaluate(e=>e.open),false);
     await summary.click();
     assert.equal(await accordion.evaluate(e=>e.open),true);
     assert.match(await summary.evaluate(e=>getComputedStyle(e,'::after').content),/Clique para fechar/);
     await summary.focus();
     await page.keyboard.press('Enter');
     assert.equal(await accordion.evaluate(e=>e.open),false);
   }

   assert.equal(await guiaCard.locator('table').count(),4);
   assert.match(await guiaCard.textContent(),/não aceita comentários/);
   assert.match(await guiaCard.textContent(),/não simula a transmissão por rádio/);
   await page.goto(base+'/pages/arduino-conectividade.html#b6-3');
   await page.locator('#b6-3.active-panel').waitFor();
   await page.waitForFunction(()=>document.querySelector('#b6-3-loopback-extra')?.textContent.includes('WebServer servidor'));
   assert.match(await page.locator('#b6-3').textContent(),/HTTPClient\.h/);
   await page.goto(base+'/pages/arduino-conectividade.html#b6-5');
   await page.locator('#b6-5.active-panel').waitFor();
   await page.waitForFunction(()=>document.querySelector('#b6-5-modelo-extra')?.textContent.includes('caminhoAberto'));
   assert.match(await page.locator('#b6-5').textContent(),/cloudflared/);
   assert.match(await page.locator('#b6-5').textContent(),/servidor\.py/);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   assert(overflow<=2,'Overflow horizontal: '+overflow);
   assert.deepEqual(errors,[]);
   if(width===390||width===1366)await page.screenshot({path:dest+'/conectividade-recuperada-'+width+'.png',fullPage:false});
   results.push({width,bluetooth:'duas práticas',diagram:'carregado',http:'real + loopback',tunel:'real + modelo',errors});
   await context.close();
  }
 } finally {await browser.close();}
 fs.writeFileSync(dest+'/restauracao-navegador.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results));
})().catch(e=>{console.error(e);process.exitCode=1;});
