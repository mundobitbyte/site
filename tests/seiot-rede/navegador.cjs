// Exercita o leitor com o PCAP real, privacidade, erros, downloads e tela estreita.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const base=process.env.MBB_BASE_URL||'http://127.0.0.1:4179';
const dest=process.env.MBB_EVIDENCIAS||'/tmp/seiot-evidencias';
const root=path.resolve(__dirname,'../..');
fs.mkdirSync(dest,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.MBB_CHROMIUM,args:['--no-sandbox']});
 const resultados=[];
 try{
  for(const width of [390,768,1366]){
   const context=await browser.newContext({viewport:{width,height:844}});
   const page=await context.newPage();
   const erros=[];const envios=[];
   page.on('pageerror',e=>erros.push(e.message));
   page.on('request',r=>{if(r.method()!=='GET')envios.push({metodo:r.method(),url:r.url()});});
   await page.goto(base+'/pages/arduino-conectividade.html#b6-4');
   await page.locator('#b6-4.active-panel').waitFor();
   const entrada=page.locator('#mdns-pcap-arquivo');
   const saida=page.locator('#mdns-pcap-resultado');
   await entrada.setInputFiles(path.join(root,'docs/validacoes/seiot-rede-20261028/wokwi-mdns.pcap'));
   await page.waitForFunction(()=>document.querySelector('#mdns-pcap-resultado').textContent.includes('6 pacotes'));
   assert.match(await saida.textContent(),/ambiente-mbb\.local/);
   assert.match(await saida.textContent(),/10\.10\.0\.2/);
   assert.match(await saida.textContent(),/porta 80/);
   const filas=await saida.locator('tbody tr').count();assert(filas>=6);
   const scroll=await saida.locator('.mbb6-pcap-scroll').evaluate(e=>({cliente:e.clientWidth,conteudo:e.scrollWidth,tab:e.tabIndex}));
   assert.equal(scroll.tab,0);assert(scroll.conteudo>=scroll.cliente);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   await saida.scrollIntoViewIfNeeded();
   if(width===390||width===1366)await page.screenshot({path:path.join(dest,`mdns-pcap-${width}.jpg`),type:'jpeg',quality:75});
   await entrada.setInputFiles({name:'incorreto.pcap',mimeType:'application/octet-stream',buffer:Buffer.from([0,1,2])});
   await page.waitForFunction(()=>document.querySelector('#mdns-pcap-resultado').textContent.includes('incompleto'));
   assert.equal(await saida.locator('table').count(),0);
   assert.deepEqual(envios,[],'Leitura do arquivo não deve provocar uploads ou outros envios');
   // Links locais das novas etapas precisam existir, inclusive o kit completo.
   const links=await page.locator('#b6-4 a[href],#b6-5 a[href]').evaluateAll(es=>es.map(e=>e.href).filter(s=>s.startsWith(location.origin)));
   for(const url of [...new Set(links)])assert.equal((await context.request.get(url)).status(),200,url);
   await page.goto(base+'/pages/arduino-conectividade.html#b6-5');
   await page.locator('#b6-5.active-panel').waitFor();
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   assert.match(await page.locator('#b6-5').textContent(),/servidor será o computador/);
   assert(!await page.locator('#b6-5').textContent().then(t=>t.includes('ssh -R 80:192.168.1.37')));
   if(width===390||width===1366)await page.screenshot({path:path.join(dest,`tunel-${width}.jpg`),type:'jpeg',quality:75});
   assert.deepEqual(erros,[]);
   resultados.push({width,pcap:{quadros:135,pacotes:6,registros:filas,scroll},arquivoInvalidoRecusado:true,envios:envios.length,linksLocais:[...new Set(links)].length,erros});
   await context.close();
  }
 }finally{await browser.close();}
 fs.writeFileSync(path.join(dest,'rede-navegador.json'),JSON.stringify(resultados,null,2));
 console.log(JSON.stringify(resultados));
 // Evidências públicas da própria página; não contêm contas, credenciais ou dados de alunos.
 if(process.env.MBB_IMPRIMIR_EVIDENCIAS==='1'){
  for(const nome of ['rede-navegador.json','navegador.json','meu-mbb-simulado.json','mdns-pcap-390.jpg','mdns-pcap-1366.jpg','tunel-390.jpg','tunel-1366.jpg']){
   const arquivo=path.join(dest,nome);
   if(fs.existsSync(arquivo))console.log('MBB_EVIDENCIA '+nome+' '+fs.readFileSync(arquivo).toString('base64'));
  }
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
