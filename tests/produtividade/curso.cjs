/* Executar: node tests/produtividade/curso.cjs [URL_BASE] */
const {chromium}=require('playwright');
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'../..'),context={window:{}};vm.createContext(context);
const files=['preparacao','modulo-01','modulo-02','modulo-03','modulo-04','modulo-05','projeto-integrador'];
for(const f of files)vm.runInContext(fs.readFileSync(path.join(root,'js/informatica-produtividade',f+'.js'),'utf8'),context);
const lessons=context.window.produtividadeLessons;
assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length);
assert.equal(lessons.length,62);
const base=process.argv[2]||'http://127.0.0.1:8765';
(async()=>{
 let localServer;if(!process.argv[2]){localServer=require('http').createServer((req,res)=>{const target=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!target.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}fs.readFile(target,(err,data)=>{if(err){res.writeHead(404);res.end();return;}const ext=path.extname(target);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'})[ext]||'application/octet-stream');res.end(data);});});await new Promise(resolve=>localServer.listen(8765,'127.0.0.1',resolve));}
 const launch={headless:true}; if(process.env.CHROMIUM_EXECUTABLE){launch.executablePath=process.env.CHROMIUM_EXECUTABLE;launch.args=["--no-sandbox","--disable-gpu"];} if(process.env.CHROMIUM_HELPER){const helper=require(process.env.CHROMIUM_HELPER).default;launch.executablePath=await helper.executablePath();launch.args=helper.args;} const browser=await chromium.launch(launch);const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));
 await page.goto(base+'/pages/informatica-produtividade.html');
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:900});
  for(const l of lessons){
   await page.evaluate(id=>location.hash=id,l.id);
   await page.waitForFunction(id=>document.querySelector('#lessonContent')?.innerHTML && location.hash==='#'+id && document.title.includes(document.querySelector('#lessonTitle').textContent),l.id);
   await page.waitForTimeout(20);
   assert.equal(await page.locator('#courseView').isVisible(),true,l.id);
   assert.equal(await page.locator('#lessonTitle').textContent(),l.number+'. '+l.title);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);assert(!overflow,'overflow '+width+' '+l.id);
   await page.locator('#lessonContent details').evaluateAll(ds=>ds.forEach(d=>d.open=true));
   assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)),'expanded overflow '+width+' '+l.id);
   if(width===1440){
    const links=await page.locator('#lessonContent a[href^="../downloads/"]').evaluateAll(as=>as.map(a=>a.href));
    for(const url of new Set(links)){const r=await page.request.get(url);assert(r.ok(),'download '+url);}
   }
  }
 }
 // Reopen same first lesson after portal: regression covered for every module card.
 for(const id of ['organizacao-diagnostico','documentos-diagnostico','planilhas-diagnostico','apresentacoes-diagnostico','colaboracao-diagnostico','projeto-integrador-feira']){
  await page.evaluate(id=>location.hash=id,id);await page.waitForTimeout(40);
  await page.locator('[data-show-portal]').click();await page.locator('.module-card[href="#'+id+'"]').click();await page.waitForTimeout(40);
  assert(await page.locator('#courseView').isVisible(),'reopen '+id);
 }
 await page.locator('#openMenu').click();assert(await page.locator('#lessonMenu').evaluate(e=>e.getAttribute('aria-hidden'))==='false');
 await page.keyboard.press('Escape');assert(await page.locator('#openMenu').getAttribute('aria-expanded')==='false');
 await page.evaluate(()=>location.hash='organizacao-diagnostico');await page.waitForTimeout(50);
 await page.locator('[data-check-choice]').first().click();assert((await page.locator('.choice-result').first().textContent()).includes('Escolha'));
 await page.locator('input[name="d00"][value="c"]').check();await page.locator('[data-check-choice]').first().click();assert((await page.locator('.choice-result').first().textContent()).includes('Decisão consistente'));
 await page.evaluate(()=>location.hash='documentos-desafio');await page.waitForTimeout(50);
 await page.locator('[data-checklist] input').first().check();assert((await page.locator('.check-progress').first().textContent()).startsWith('1/'));
 await page.evaluate(()=>location.hash='colaboracao-anexos');await page.waitForTimeout(50);
 await page.selectOption('[data-file]','odt');await page.selectOption('[data-person]','paulo');await page.selectOption('[data-permission]','comment');await page.locator('[data-check-permission]').click();assert((await page.locator('[data-permission-result]').textContent()).includes('Combinação coerente'));
 for(let n=1;n<=5;n++){
  await page.goto(base+'/downloads/informatica-produtividade/referencias/modulo-0'+n+'.html');
  assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)),'reference overflow '+n);
 }
 await page.goto(base+'/pages/informatica-produtividade.html#curso-preparacao');
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({lessons:lessons.length,widths:[1440,768,390],errors,downloads:'all local links HTTP 200',reopening:'6 cards',interactions:'choice, menu, Escape, checklist, permission simulation'},null,2));
 if(process.env.PRODUTIVIDADE_SCREENSHOTS){await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>location.hash='curso-preparacao');await page.waitForTimeout(100);await page.screenshot({path:'/tmp/produtividade-desktop.png',fullPage:true});await page.setViewportSize({width:390,height:844});await page.screenshot({path:'/tmp/produtividade-mobile.png',fullPage:true});}
 await browser.close();if(localServer)await new Promise(resolve=>localServer.close(resolve));
})().catch(e=>{console.error(e);process.exit(1)});
