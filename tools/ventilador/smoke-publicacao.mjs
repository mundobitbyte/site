// QA do percurso no Chromium do CI; bloqueia conexoes externas, inclusive Firebase.
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import puppeteer from 'puppeteer-core';
const base='http://127.0.0.1:4173';
const project='/pages/arduino-ventilador-bluetooth.html';
const expectedApk='8c7a2fcb243f30e547fc2cf8fe67f79b87f469237e14dce45f4ea06768323494';
let executablePath;
for(const candidate of ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser']){
  try{await fs.access(candidate);executablePath=candidate;break;}catch{}
}
assert.ok(executablePath,'Chrome/Chromium ausente no runner');
await fs.mkdir('artifacts/ventilador',{recursive:true});
const browser=await puppeteer.launch({executablePath,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.setRequestInterception(true);
page.on('request',req=>{const u=new URL(req.url());if(u.origin===base||u.protocol==='data:')req.continue();else req.abort();});
async function open(path){await page.goto(base+path,{waitUntil:'networkidle0'});}
async function noOverflow(label){assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),label+': overflow global');}
try{
 for(const width of [1280,390,360]){
  await page.setViewport({width,height:900,deviceScaleFactor:1});await open(project);
  await page.waitForSelector('figure[data-mbb-visualizador-pronto]');
  assert.equal(await page.$$eval('section[id^="etapa-"]',els=>els.length),8);
  await noOverflow('percurso '+width);
  for(let i=1;i<=8;i++){
   if(width<761){await page.click('#stageToggle');await page.waitForFunction(()=>{const r=document.getElementById('stageSidebar').getBoundingClientRect();return document.querySelector('#stageToggle').getAttribute('aria-expanded')==='true'&&r.left>=-1&&r.right<=innerWidth+1;});}
   await page.click('#stageMenu a[href="#etapa-'+i+'"]');
   assert.equal(new URL(page.url()).hash,'#etapa-'+i);
   if(width<761){assert.equal(await page.$eval('#stageToggle',e=>e.getAttribute('aria-expanded')),'false');await page.waitForFunction(()=>document.getElementById('stageSidebar').getBoundingClientRect().right<=1);}
   await noOverflow('etapa '+i+' '+width);
  }
  await page.screenshot({path:'artifacts/ventilador/percurso-'+width+'.png',fullPage:true});
  console.log('PASS percurso, etapas e menu',width);
 }
 // Figura tecnica: abrir e fechar pelo visualizador real.
 await open(project+'#etapa-5');
 await page.waitForSelector('#etapa-5 .mbb-visualizador-trigger');
 await page.click('#etapa-5 .mbb-visualizador-trigger');
 await page.waitForFunction(()=>document.getElementById('mbbVisualizador')?.hidden===false);
 await page.click('[data-mbb-view-action="close"]');
 await page.waitForFunction(()=>document.getElementById('mbbVisualizador')?.hidden===true);
 // Checklist local persiste no navegador sem autenticacao.
 await page.click('[data-vent-check]');await page.reload({waitUntil:'networkidle0'});
 assert.equal(await page.$eval('[data-vent-check]',e=>e.checked),true);
 // Simulador: selecao exclusiva e parada sem heartbeat.
 await page.click('[data-sim-conectar]');
 for(const c of ['1','2','3','0']){
  await page.click('[data-sim-comando="'+c+'"]');
  assert.equal(await page.$$eval('[data-sim-led][data-on="true"]',els=>els.length),c==='0'?0:1);
 }
 await page.click('[data-sim-comando="3"]');await page.click('[data-sim-falha]');
 await page.waitForFunction(()=>document.querySelectorAll('[data-sim-led][data-on="true"]').length===0,{timeout:6000});
 console.log('PASS ampliacao, checklist e simulador');
 // As quatro aulas preservam o contexto e o retorno da etapa.
 const targets=[['etapa-3','atuadores-reles'],['etapa-4','b6-hc05'],['etapa-2','b9-eletricidade'],['etapa-6','bluetooth-ventilador']];
 for(const [stage,anchor] of targets){
  await open(project+'#'+stage);
  const selector='#'+stage+' a[data-mbb-conceito]';
  await Promise.all([page.waitForNavigation({waitUntil:'networkidle0'}),page.click(selector)]);
  assert.equal(new URL(page.url()).hash,'#'+anchor);
  if(anchor==='bluetooth-ventilador')assert.equal(await page.$eval('#appInventorModuleMenu .active',e=>e.dataset.module),'bluetooth');
  else assert.equal(await page.$eval('#'+anchor,e=>e.classList.contains('active-panel')),true);
  await noOverflow('apoio '+anchor);
  const back=await page.$eval('.mbb-retorno-projeto a',e=>e.href);assert.equal(new URL(back).hash,'#'+stage);
  await Promise.all([page.waitForNavigation({waitUntil:'networkidle0'}),page.click('.mbb-retorno-projeto a')]);
  assert.equal(new URL(page.url()).hash,'#'+stage);
  console.log('PASS conceito e retorno',anchor);
 }
 // Downloads pelo servidor: verificar bytes, sem instalar APK.
 await open(project);
 const downloads=await page.$$eval('a[download]',els=>[...new Set(els.map(e=>e.href))]);
 for(const url of downloads){
  assert.equal(new URL(url).origin,base);
  const response=await fetch(url);assert.equal(response.status,200,url);
  const bytes=Buffer.from(await response.arrayBuffer());
  const local=await fs.readFile('.'+new URL(url).pathname);assert.deepEqual(bytes,local,url);
  if(url.endsWith('.apk'))assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),expectedApk);
 }
 assert.equal(errors.length,0,errors.join('\n'));
 console.log('PASS downloads/bytes/APK e ausencia de erros JavaScript');
}catch(error){await page.screenshot({path:'artifacts/ventilador/falha.png',fullPage:true});console.error('DIAGNOSTICO',await page.evaluate(()=>({url:location.href,width:innerWidth,sidebar:document.getElementById('stageSidebar')?.getBoundingClientRect().toJSON(),toggle:document.getElementById('stageToggle')?.getAttribute('aria-expanded')})));throw error;}finally{await browser.close();}
