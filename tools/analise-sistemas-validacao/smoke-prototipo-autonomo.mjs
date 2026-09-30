import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base=process.env.MBB_BASE_URL||'http://127.0.0.1:4173';
const failures=[];
const assert=(condition,message)=>{if(!condition)failures.push(message);};
const candidates=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath=null;
for(const candidate of candidates){try{await fs.access(candidate);executablePath=candidate;break;}catch{}}
if(!executablePath)throw new Error('Nenhum Chromium/Chrome encontrado no runner.');

const browser=await puppeteer.launch({executablePath,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage();
  const pageErrors=[];
  page.on('pageerror',error=>pageErrors.push(String(error?.message||error)));
  await page.setViewport({width:1366,height:900});
  await page.goto(`${base}/pages/analise-sistemas/prototipo-assistencia-tecnica-conecta.html`,{waitUntil:'networkidle0'});

  const structure=await page.evaluate(()=>{
    const ids=['comece-aqui','roteiro-principal','testes-complementares','validacao-guiada'];
    const positions=Object.fromEntries(ids.map(id=>[id,[...document.querySelectorAll('main.wrap > *')].indexOf(document.getElementById(id))]));
    const route=document.getElementById('roteiro-principal')?.innerText||'';
    const context=document.getElementById('comece-aqui')?.innerText||'';
    return {
      positions,
      context,
      route,
      reset:document.getElementById('reset')?.textContent?.trim()||'',
      roles:[...document.querySelectorAll('[data-role]')].map(el=>el.textContent.trim()),
      challenges:document.querySelectorAll('.challenge').length,
      visibleText:document.body.innerText,
      scrollWidth:document.documentElement.scrollWidth,
      innerWidth:window.innerWidth
    };
  });

  assert(structure.positions['comece-aqui']>=0,'Falta contextualização inicial do caso.');
  assert(structure.positions['roteiro-principal']>structure.positions['comece-aqui'],'Roteiro principal deve vir depois da contextualização.');
  assert(structure.positions['testes-complementares']>structure.positions['roteiro-principal'],'Testes complementares devem vir depois do roteiro principal.');
  assert(structure.positions['validacao-guiada']>structure.positions['testes-complementares'],'Validação deve vir depois da execução e dos caminhos complementares.');
  assert(/Ana Souza/.test(structure.context)&&/Notebook Orion 14/.test(structure.context)&&/#1042/.test(structure.context),'Contexto inicial precisa identificar cliente, equipamento e OS.');
  assert(/Aguardando diagnóstico/.test(structure.context),'Contexto inicial precisa declarar o estado inicial conhecido.');
  assert(/mesmo atendimento/.test(structure.context),'Contexto precisa explicar que as visões representam o mesmo atendimento.');
  assert(/Não pule etapas/.test(structure.route),'Roteiro principal precisa orientar execução em ordem.');
  assert(/Aguardando aprovação/.test(structure.route)&&/Pronto para retirada/.test(structure.route),'Roteiro deve explicitar estados intermediário e final.');
  assert(/Visão Técnico/.test(structure.route)&&/Visão do cliente/.test(structure.route)&&/Visão Atendente/.test(structure.route),'Roteiro deve indicar qual ator atua em cada momento.');
  assert(structure.reset==='Reiniciar caso #1042',`Botão de reinício deveria explicitar o caso; encontrou "${structure.reset}".`);
  assert(structure.roles.length===3,'Devem existir exatamente três visões de ator.');
  assert(structure.challenges===3,'Validação guiada deve continuar com três desafios.');
  assert(structure.scrollWidth<=structure.innerWidth+2,'Protótipo criou rolagem horizontal no desktop.');

  const stage10=await browser.newPage();
  await stage10.setViewport({width:1366,height:900});
  await stage10.goto(`${base}/pages/analise-sistemas/10-ux-prototipo.html`,{waitUntil:'networkidle0'});
  const practice=await stage10.evaluate(()=>({
    items:[...document.querySelectorAll('.practice-card ol li')].map(li=>li.textContent.trim()),
    card:[...document.querySelectorAll('.tool-card')].find(card=>card.textContent.includes('caso completo'))?.textContent||'',
    href:[...document.querySelectorAll('.tool-card a')].find(a=>a.href.includes('prototipo-assistencia-tecnica-conecta.html'))?.getAttribute('href')||''
  }));
  assert(practice.items.length===9,`Faça agora deveria ter 9 passos encadeados; encontrou ${practice.items.length}.`);
  assert(/roteiro principal/.test(practice.items[0]),'Faça agora deve começar pela execução guiada da Conecta.');
  assert(/caminhos complementares/.test(practice.items[1]),'Caminhos complementares devem vir após o fluxo principal.');
  assert(/validação guiada/.test(practice.items[2]),'Validação guiada deve vir depois da execução do protótipo.');
  assert(/próprio backlog/.test(practice.items[3]),'Aplicação no caso do aluno deve começar somente depois do exemplo guiado.');
  assert(/tarefa realista/.test(practice.items[6]),'A tarefa de teste precisa ser definida antes da observação do usuário.');
  assert(/evidências/.test(practice.items[7]),'Observação deve produzir evidências antes de decisões de mudança.');
  assert(/roteiro principal/.test(practice.card)&&/validação guiada/.test(practice.card),'Card do protótipo precisa explicar a ordem geral da atividade.');
  assert(practice.href==='prototipo-assistencia-tecnica-conecta.html',`Link deve abrir o topo do protótipo; encontrou ${practice.href}.`);
  await stage10.close();

  // Execução cronológica do mesmo caso, como faria um aluno seguindo o roteiro.
  await page.click('#reset');
  await page.click('[data-role="tecnico"]');
  await page.evaluate(()=>{
    const button=[...document.querySelectorAll('[data-go="ordem"]')].find(el=>!el.classList.contains('hidden')&&el.offsetParent!==null);
    button?.click();
  });
  await page.click('#tentar-reparo');
  const noDiagnosis=await page.$eval('#ordem-msg',el=>el.textContent);
  assert(/Primeiro registre o diagnóstico técnico/.test(noDiagnosis),'Passo 1 deveria bloquear reparo sem diagnóstico.');

  await page.click('[data-go="diagnostico"]');
  await page.click('#salvar-diag');
  const afterDiagnosis=await page.evaluate(()=>({status:document.getElementById('order-status')?.textContent?.trim()||'',timeline:document.getElementById('timeline')?.textContent||''}));
  assert(afterDiagnosis.status==='Aguardando aprovação',`Após diagnóstico deveria estar Aguardando aprovação; encontrou ${afterDiagnosis.status}.`);
  assert(/Diagnóstico registrado/.test(afterDiagnosis.timeline),'Linha do tempo deveria registrar o diagnóstico.');

  await page.click('#tentar-reparo');
  const pendingApproval=await page.$eval('#ordem-msg',el=>el.textContent);
  assert(/RN01 aplicada/.test(pendingApproval)&&/pendente de aprovação/.test(pendingApproval),'Passo 3 deveria demonstrar RN01 antes da aprovação.');

  await page.click('[data-role="cliente"]');
  await page.evaluate(()=>{document.getElementById('cliente-os').value='1042';document.getElementById('cliente-confirmacao').value='Ana Souza';});
  const queryVisible=await page.$eval('#cliente-consulta',el=>!el.classList.contains('hidden'));
  if(queryVisible)await page.click('#consultar');
  const clientPending=await page.evaluate(()=>({status:document.getElementById('cliente-status')?.textContent?.trim()||'',detail:document.getElementById('cliente-detalhe')?.textContent||''}));
  assert(clientPending.status==='Aguardando aprovação',`Cliente deveria ver Aguardando aprovação; encontrou ${clientPending.status}.`);
  assert(/R\$ 280,00/.test(clientPending.detail)&&/informe sua resposta ao atendimento/.test(clientPending.detail),'Cliente deveria compreender orçamento e como a decisão entra no sistema.');

  await page.click('[data-role="atendente"]');
  const decisionButtonVisible=await page.$eval('#registrar-decisao',el=>!el.classList.contains('hidden')&&el.offsetParent!==null);
  if(!decisionButtonVisible){
    await page.evaluate(()=>{
      const button=[...document.querySelectorAll('[data-go="ordem"]')].find(el=>!el.classList.contains('hidden')&&el.offsetParent!==null);
      button?.click();
    });
  }
  await page.click('#registrar-decisao');
  await page.click('#aprovar');
  const approved=await page.evaluate(()=>({status:document.getElementById('order-status')?.textContent?.trim()||'',audit:document.getElementById('decision-audit')?.textContent||''}));
  assert(approved.status==='Orçamento aprovado',`Após aprovação deveria estar Orçamento aprovado; encontrou ${approved.status}.`);
  assert(/Atendente demonstrativo/.test(approved.audit)&&/Data\/hora/.test(approved.audit),'A aprovação deveria deixar rastro de autor e data/hora.');

  await page.click('[data-role="tecnico"]');
  await page.click('#tentar-reparo');
  assert(await page.$eval('#reparo',el=>!el.classList.contains('hidden')),'Após aprovação, Técnico deveria conseguir entrar no reparo.');
  await page.click('#concluir-reparo');
  const finished=await page.$eval('#order-status',el=>el.textContent.trim());
  assert(finished==='Pronto para retirada',`Fluxo principal deveria terminar em Pronto para retirada; encontrou ${finished}.`);

  await page.click('[data-role="cliente"]');
  const resultVisible=await page.$eval('#cliente-resultado',el=>!el.classList.contains('hidden'));
  if(!resultVisible){
    await page.evaluate(()=>{document.getElementById('cliente-os').value='1042';document.getElementById('cliente-confirmacao').value='Ana Souza';});
    await page.click('#consultar');
  }
  const clientFinished=await page.evaluate(()=>({status:document.getElementById('cliente-status')?.textContent?.trim()||'',detail:document.getElementById('cliente-detalhe')?.textContent||''}));
  assert(clientFinished.status==='Pronto para retirada','Cliente deveria encerrar o fluxo vendo Pronto para retirada.');
  assert(/Serviço concluído/.test(clientFinished.detail)&&/liberado para retirada/.test(clientFinished.detail),'Mensagem final do cliente deveria fechar cronologicamente o caso.');

  // Demonstração separada de abertura de nova OS não deve parecer continuação automática da #1042.
  await page.click('#reset');
  await page.evaluate(()=>document.querySelector('[data-go="nova-os"]')?.click());
  await page.click('#criar-os');
  const newOrderMessage=await page.$eval('#nova-msg',el=>el.textContent);
  assert(/OS #1043 criada/.test(newOrderMessage)&&/continuaremos usando a OS #1042/.test(newOrderMessage),'Abertura de nova OS precisa explicar o limite da demonstração e o retorno ao caso estável #1042.');

  await page.setViewport({width:360,height:800});
  await page.reload({waitUntil:'networkidle0'});
  const mobile=await page.evaluate(()=>({innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,route:Boolean(document.getElementById('roteiro-principal')),context:Boolean(document.getElementById('comece-aqui'))}));
  assert(mobile.scrollWidth<=mobile.innerWidth+2,`Protótipo criou rolagem horizontal no celular: ${mobile.scrollWidth}px > ${mobile.innerWidth}px.`);
  assert(mobile.route&&mobile.context,'Contexto e roteiro devem permanecer presentes no celular.');
  assert(pageErrors.length===0,`Erros JavaScript: ${pageErrors.join(' | ')}`);

  if(failures.length){console.error('FALHAS — EXECUÇÃO AUTÔNOMA DO PROTÓTIPO');failures.forEach(item=>console.error(`- ${item}`));process.exit(1);}
  console.log('EXECUÇÃO AUTÔNOMA DO PROTÓTIPO: OK');
  console.log(JSON.stringify({structure,practice,afterDiagnosis,clientPending,approved,finished,clientFinished,mobile},null,2));
}finally{await browser.close();}
