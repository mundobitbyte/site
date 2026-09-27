import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = process.env.MBB_BASE_URL || 'http://127.0.0.1:4173';
const stages = [
  '00-antes-do-sistema.html','01-stakeholders-escopo.html','02-levantamento.html','03-processo-as-is.html',
  '04-analise-estruturada.html','05-processo-to-be-bpmn.html','06-requisitos.html','07-casos-de-uso.html',
  '08-uml-essencial.html','09-agile-backlog-mvp.html','10-ux-prototipo.html','11-qualidade-integracoes.html',
  '12-viabilidade-riscos-rastreabilidade.html','13-documentacao-ia.html','14-integracao-final.html'
];
const viewports = [
  {name:'mobile-360',width:360,height:800},
  {name:'mobile-390',width:390,height:844},
  {name:'tablet-768',width:768,height:1024},
  {name:'tablet-1024',width:1024,height:900},
  {name:'desktop-1366',width:1366,height:900}
];
const failures=[];
const assert=(condition,message)=>{if(!condition) failures.push(message);};

for(const file of stages){
  try{ await fs.access(`pages/analise-sistemas/${file}`); }catch{ failures.push(`Etapa ausente: ${file}`); }
}
for(const file of ['pages/analise-sistemas/index.html','css/analise-sistemas.css','js/analise-sistemas.js','ANALISE_SISTEMAS_MBB_MAPA_E_CRITERIOS.md','ANALISE_SISTEMAS_MEU_MBB_CONTRATO.md']){
  try{ await fs.access(file); }catch{ failures.push(`Arquivo obrigatório ausente: ${file}`); }
}

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
  await page.goto(`${base}/pages/analise-sistemas/index.html`,{waitUntil:'networkidle0'});
  const indexSnapshot=await page.evaluate(()=>({
    cards:document.querySelectorAll('.stage-card').length,
    navLinks:document.querySelectorAll('.stage-link').length,
    hasProject:document.body.textContent.includes('Assistência Técnica Conecta'),
    hasQuestion:document.body.textContent.includes('O que precisamos descobrir agora'),
    hookHidden:getComputedStyle(document.getElementById('meuMbbHook')).display==='none'
  }));
  assert(indexSnapshot.cards===15,`Índice deveria ter 15 cards; encontrou ${indexSnapshot.cards}.`);
  assert(indexSnapshot.navLinks===15,`Navegação deveria ter 15 etapas; encontrou ${indexSnapshot.navLinks}.`);
  assert(indexSnapshot.hasProject,'Índice perdeu o projeto condutor.');
  assert(indexSnapshot.hasQuestion,'Índice perdeu a pergunta-guia MbB.');
  assert(indexSnapshot.hookHidden,'Slot vazio do Meu MbB deveria permanecer invisível.');

  for(let i=0;i<stages.length;i++){
    await page.goto(`${base}/pages/analise-sistemas/${stages[i]}`,{waitUntil:'networkidle0'});
    const snap=await page.evaluate(()=>({
      h1:document.querySelector('h1')?.textContent?.trim()||'',
      current:document.body.dataset.stage,
      id:document.body.dataset.conteudoId,
      version:document.body.dataset.versaoConteudo,
      nav:document.querySelectorAll('.stage-link').length,
      active:document.querySelectorAll('.stage-link.active').length,
      footer:document.querySelectorAll('.stage-footer a').length,
      notebook:Boolean(document.querySelector('.notebook'))
    }));
    assert(Boolean(snap.h1),`${stages[i]} sem H1.`);
    assert(Number(snap.current)===i,`${stages[i]} com data-stage incorreto: ${snap.current}.`);
    assert(snap.id===`analise-sistemas-${String(i).padStart(2,'0')}`,`${stages[i]} com conteudo_id incorreto: ${snap.id}.`);
    assert(snap.version==='1',`${stages[i]} com versão pedagógica diferente de 1.`);
    assert(snap.nav===15,`${stages[i]} perdeu etapas no menu.`);
    assert(snap.active===1,`${stages[i]} deveria ter exatamente uma etapa ativa.`);
    assert(snap.footer>=2,`${stages[i]} perdeu navegação de rodapé.`);
    assert(snap.notebook,`${stages[i]} não possui evidência no Caderno da Análise.`);
  }

  for(const viewport of viewports){
    await page.setViewport({width:viewport.width,height:viewport.height,deviceScaleFactor:1});
    for(const target of ['index.html','04-analise-estruturada.html','06-requisitos.html','10-ux-prototipo.html','14-integracao-final.html']){
      await page.goto(`${base}/pages/analise-sistemas/${target}`,{waitUntil:'networkidle0'});
      const layout=await page.evaluate(()=>({
        innerWidth:window.innerWidth,
        scrollWidth:document.documentElement.scrollWidth,
        h1Visible:Boolean(document.querySelector('h1')?.getBoundingClientRect().height),
        toggleDisplay:getComputedStyle(document.getElementById('menuToggle')).display,
        headerHeight:document.querySelector('.course-header')?.getBoundingClientRect().height||0
      }));
      assert(layout.scrollWidth<=layout.innerWidth+2,`${viewport.name}/${target}: rolagem horizontal global ${layout.scrollWidth}px > ${layout.innerWidth}px.`);
      assert(layout.h1Visible,`${viewport.name}/${target}: H1 não visível.`);
      assert(layout.headerHeight<110,`${viewport.name}/${target}: cabeçalho alto demais (${layout.headerHeight}px).`);
      if(viewport.width<=820) assert(layout.toggleDisplay!=='none',`${viewport.name}/${target}: botão Etapas deveria aparecer.`);
      if(viewport.width>820) assert(layout.toggleDisplay==='none',`${viewport.name}/${target}: botão Etapas não deveria aparecer no desktop.`);
    }
  }

  await page.setViewport({width:390,height:844});
  await page.goto(`${base}/pages/analise-sistemas/06-requisitos.html`,{waitUntil:'networkidle0'});
  await page.click('#menuToggle');
  await new Promise(resolve=>setTimeout(resolve,300));
  const mobileMenu=await page.evaluate(()=>({
    open:document.body.classList.contains('nav-open'),
    navLeft:document.getElementById('courseNav').getBoundingClientRect().left,
    navWidth:document.getElementById('courseNav').getBoundingClientRect().width,
    expanded:document.getElementById('menuToggle').getAttribute('aria-expanded')
  }));
  assert(mobileMenu.open,'Menu móvel não abriu.');
  assert(mobileMenu.navLeft>=-1,'Menu móvel permaneceu fora da tela após a transição.');
  assert(mobileMenu.navWidth<=390,'Menu móvel ultrapassou a largura da tela.');
  assert(mobileMenu.expanded==='true','aria-expanded não acompanha menu móvel.');

  assert(pageErrors.length===0,`Erros JavaScript: ${pageErrors.join(' | ')}`);

  if(failures.length){
    console.error('FALHAS — ANÁLISE DE SISTEMAS');
    failures.forEach(item=>console.error(`- ${item}`));
    process.exit(1);
  }
  console.log('VALIDAÇÃO ANÁLISE DE SISTEMAS: OK');
  console.log(JSON.stringify({etapas:stages.length,viewports,indexSnapshot,mobileMenu},null,2));
}finally{
  await browser.close();
}
