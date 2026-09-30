import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const failures=[];
const assert=(condition,message)=>{if(!condition) failures.push(message);};
const candidates=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath=null;
for(const candidate of candidates){try{await fs.access(candidate);executablePath=candidate;break;}catch{}}
if(!executablePath) throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser=await puppeteer.launch({executablePath,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage();
  const pageErrors=[];
  page.on('pageerror',error=>pageErrors.push(String(error?.message||error)));
  await page.setViewport({width:1366,height:900});
  await page.goto(`${base}/pages/analise-sistemas/prototipo-assistencia-tecnica-conecta.html#validacao-guiada`,{waitUntil:'networkidle0'});

  const initial=await page.evaluate(()=>({
    h1:document.querySelector('h1')?.textContent?.trim()||'',
    challenges:document.querySelectorAll('.challenge').length,
    checks:document.querySelectorAll('[data-validation-check]').length,
    progress:document.getElementById('validation-progress')?.textContent?.trim()||'',
    summaryHidden:document.getElementById('validation-summary')?.classList.contains('hidden'),
    searchScript:[...document.scripts].some(s=>s.src.includes('mbb-busca-global.js')),
    scrollWidth:document.documentElement.scrollWidth,
    innerWidth:window.innerWidth
  }));
  assert(initial.h1==='Da análise para uma solução que pode ser testada',`H1 inesperado: ${initial.h1}`);
  assert(initial.challenges===3,`Validação guiada deveria ter 3 desafios; encontrou ${initial.challenges}.`);
  assert(initial.checks===3,`Validação guiada deveria ter 3 fechamentos; encontrou ${initial.checks}.`);
  assert(initial.progress==='0 de 3 desafios analisados',`Progresso inicial inesperado: ${initial.progress}.`);
  assert(initial.summaryHidden,'Resumo final deveria começar oculto.');
  assert(initial.searchScript,'Protótipo perdeu integração com a pesquisa global.');
  assert(initial.scrollWidth<=initial.innerWidth+2,'Protótipo criou rolagem horizontal no desktop.');

  await page.click('[data-prepare="clarity"]');
  const clarity=await page.evaluate(()=>({
    clienteAtivo:document.getElementById('cliente').classList.contains('active'),
    consultaVisivel:!document.getElementById('cliente-consulta').classList.contains('hidden'),
    resultadoOculto:document.getElementById('cliente-resultado').classList.contains('hidden'),
    os:document.getElementById('cliente-os').value,
    confirmacao:document.getElementById('cliente-confirmacao').value
  }));
  assert(clarity.clienteAtivo,'Cenário 1 deveria abrir a visão do cliente.');
  assert(clarity.consultaVisivel&&clarity.resultadoOculto,'Cenário 1 deveria abrir a consulta limpa.');
  assert(clarity.os==='1042','Cenário 1 deveria preparar a OS 1042.');
  assert(clarity.confirmacao==='','Cenário 1 deveria limpar o dado de confirmação para testar clareza.');

  await page.type('#cliente-confirmacao','Ana Souza');
  await page.click('#consultar');
  assert(await page.evaluate(()=>!document.getElementById('cliente-resultado').classList.contains('hidden')),'Consulta válida não exibiu o resultado.');

  await page.click('[data-prepare="decision"]');
  const decisionReady=await page.evaluate(()=>({
    clienteAtivo:document.getElementById('cliente').classList.contains('active'),
    aprovar:Boolean(document.getElementById('aprovar')),
    recusar:Boolean(document.getElementById('recusar')),
    status:document.getElementById('cliente-status')?.textContent?.trim()||''
  }));
  assert(decisionReady.clienteAtivo&&decisionReady.aprovar&&decisionReady.recusar,'Cenário 2 não preparou a decisão do orçamento.');
  assert(decisionReady.status==='Aguardando aprovação',`Status esperado Aguardando aprovação; encontrou ${decisionReady.status}.`);
  await page.click('#recusar');
  await page.click('[data-role="interno"]');
  await page.click('[data-go="ordem"]');
  const refused=await page.evaluate(()=>document.getElementById('order-status')?.textContent?.trim()||'');
  assert(refused==='Orçamento recusado',`Visão interna deveria refletir recusa; encontrou ${refused}.`);
  await page.click('#tentar-reparo');
  const blocked=await page.evaluate(()=>document.getElementById('ordem-msg')?.textContent||'');
  assert(/RN01 aplicada/.test(blocked)&&/recusado/.test(blocked),'RN01 deveria bloquear reparo após recusa.');

  await page.click('[data-prepare="decision"]');
  await page.click('#aprovar');
  await page.click('[data-role="interno"]');
  const orderHidden=await page.evaluate(()=>document.getElementById('ordem').classList.contains('hidden'));
  if(orderHidden) await page.click('[data-go="ordem"]');
  await page.click('#tentar-reparo');
  assert(await page.evaluate(()=>!document.getElementById('reparo').classList.contains('hidden')),'Reparo aprovado não abriu a etapa de reparo.');

  await page.click('[data-prepare="roles"]');
  const roles=await page.evaluate(()=>({
    internoAtivo:document.getElementById('interno').classList.contains('active'),
    homeVisivel:!document.getElementById('interno-home').classList.contains('hidden'),
    abrir:Boolean(document.querySelector('[data-go="nova-os"]')),
    ordem:Boolean(document.querySelector('[data-go="ordem"]'))
  }));
  assert(roles.internoAtivo&&roles.homeVisivel&&roles.abrir&&roles.ordem,'Cenário 3 não abriu a visão interna esperada.');

  for(const check of await page.$$('[data-validation-check]')) await check.click();
  const completed=await page.evaluate(()=>({
    progress:document.getElementById('validation-progress')?.textContent?.trim()||'',
    done:document.querySelectorAll('.challenge.done').length,
    summaryHidden:document.getElementById('validation-summary')?.classList.contains('hidden')
  }));
  assert(completed.progress==='3 de 3 desafios analisados',`Progresso final inesperado: ${completed.progress}.`);
  assert(completed.done===3,`Três desafios deveriam estar concluídos; encontrou ${completed.done}.`);
  assert(!completed.summaryHidden,'Resumo final deveria aparecer após os três desafios.');

  await page.setViewport({width:360,height:800});
  await page.reload({waitUntil:'networkidle0'});
  const mobile=await page.evaluate(()=>({innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,challenges:document.querySelectorAll('.challenge').length,h1Visible:Boolean(document.querySelector('h1')?.getBoundingClientRect().height)}));
  assert(mobile.scrollWidth<=mobile.innerWidth+2,`Protótipo criou rolagem horizontal no celular: ${mobile.scrollWidth}px > ${mobile.innerWidth}px.`);
  assert(mobile.challenges===3&&mobile.h1Visible,'Atividade guiada não permaneceu íntegra no celular.');
  assert(pageErrors.length===0,`Erros JavaScript: ${pageErrors.join(' | ')}`);

  if(failures.length){
    console.error('FALHAS — PROTÓTIPO CONECTA');
    failures.forEach(item=>console.error(`- ${item}`));
    process.exit(1);
  }
  console.log('VALIDAÇÃO PROTÓTIPO CONECTA: OK');
  console.log(JSON.stringify({initial,clarity,decisionReady,refused,completed,mobile},null,2));
}finally{
  await browser.close();
}
