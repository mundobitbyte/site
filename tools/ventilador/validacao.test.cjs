const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const raiz = path.resolve(__dirname, '../..');
const { contexto, destino } = require('../../js/mbb-ventilador-contexto.js');
const { ControleBancada } = require('../../js/ventilador-bluetooth.js');
let JSDOM, requestInterceptor;
try { ({ JSDOM, requestInterceptor } = require(process.env.MBB_JSDOM || 'jsdom')); } catch (_) {}
const ler = p => fs.readFileSync(path.join(raiz, p), 'utf8');

test('retorno explícito conserva etapa e rejeita origem, etapa e destinos inválidos', () => {
  const origem = 'https://mbb.test/pages/arduino-ventilador-bluetooth.html#etapa-3';
  const link = destino('arduino.html#atuadores-reles', origem);
  assert.equal(contexto(link).retorno, 'https://mbb.test/pages/arduino-ventilador-bluetooth.html#etapa-3');
  assert.equal(contexto(new URL(link).href).etapa, 3); // Atualização/nova aba, sem memória de sessão.
  assert.equal(contexto('https://mbb.test/pages/arduino.html#atuadores-reles'), null);
  for (const etapa of ['0','9','3x','javascript:1','']) assert.equal(contexto(`https://mbb.test/pages/arduino.html?mbb-origem=ventilador&mbb-etapa=${etapa}`), null);
  assert.equal(destino('https://externo.test/pages/arduino.html#atuadores-reles', origem), null);
  assert.equal(destino('arduino.html#outro-topico', origem), null);
  assert.equal(destino('arduino.html#atuadores-reles', origem.replace('#etapa-3', '#topo')), null);
});

test('modelo: 16 combinações, inválidos, perda de mensagens, reconexão e supervisão atrasada', () => {
  const c = new ControleBancada(); assert.equal(c.receber('1', 0), null);
  for (let de=0;de<=3;de++) for (let para=0;para<=3;para++) {
    c.conectar(0); c.receber(String(de), 1); c.receber(String(para), 2); assert.equal(c.estado, para);
  }
  c.receber('x', 3); assert.equal(c.estado, 0);
  c.receber('3', 10); assert.equal(c.verificar(2009), null); assert.equal(c.verificar(2010), '0');
  c.receber('?', 2100); assert.equal(c.estado, 0);
  c.receber('1', 2200); c.receber('?', 4500); assert.equal(c.estado, 0);
  c.receber('3', 4501); c.desconectar(); assert.equal(c.estado, 0); c.conectar(5000); assert.equal(c.estado, 0);
});

test('catálogo conserva IDs antigos, inclui conceitos e os oito destinos do projeto', () => {
  const atual = JSON.parse(ler('meu-mbb/catalogo.json'));
  const base = JSON.parse(cp.execFileSync('git', ['show', 'f4334477517699db0ecbdbda370af1a833cfbf0e:meu-mbb/catalogo.json'], {cwd:raiz,maxBuffer:10*1024*1024}));
  for (const u of base.unidades) assert.ok(atual.unidades.some(x => x.conteudo_id === u.conteudo_id));
  const projeto = atual.unidades.find(x => x.conteudo_id === 'mod-pages-arduino-ventilador-bluetooth');
  for (let i=1;i<=8;i++) assert.ok(projeto.topicos_busca.some(x=>x.ancora==='etapa-'+i));
  for (const [pagina,ancora] of [['arduino','atuadores-reles'],['arduino-conectividade','b6-hc05'],['arduino-seguranca','b9-eletricidade'],['appinventor','bluetooth-ventilador']]) {
    assert.ok(atual.unidades.find(x=>x.localizacao_atual===`pages/${pagina}.html`).topicos_busca.some(x=>x.ancora===ancora), ancora);
  }
});

test('potência, produção, projeto IoT e React Native preservados', () => {
  for (const p of ['js/reactnative.js','js/arduino-projeto-iot.js','CNAME','.firebaserc','firebase.json','firebase.meu-mbb.json','meu-mbb/conta.js','meu-mbb/firestore.rules','meu-mbb/firebase-config.js']) {
    const anterior = cp.execFileSync('git',['show','f4334477517699db0ecbdbda370af1a833cfbf0e:'+p],{cwd:raiz,maxBuffer:20*1024*1024});
    assert.equal(Buffer.compare(Buffer.from(ler(p)),anterior),0,p);
  }
  const p='pages/arduino-projeto-iot.html';const antes=cp.execFileSync('git',['show','f4334477517699db0ecbdbda370af1a833cfbf0e:'+p],{cwd:raiz,encoding:'utf8'});
  assert.equal(/<main[^>]*>([\s\S]*?)<\/main>/.exec(ler(p))[1],/<main[^>]*>([\s\S]*?)<\/main>/.exec(antes)[1]);
  assert.match(cp.execFileSync('git',['remote','get-url','--push','origin'],{cwd:raiz,encoding:'utf8'}),/^no-push:/);
});

async function abrir(pagina, hash='', query='') {
  const resources = { interceptors: [requestInterceptor(request => {
    const u = new URL(request.url);
    if (u.origin !== 'https://mbb.test') return new Response('');
    const p=path.join(raiz,decodeURIComponent(u.pathname));
    const data=p.startsWith(raiz+path.sep) && fs.existsSync(p)?fs.readFileSync(p):Buffer.from('');
    return new Response(data,{headers:{'Content-Type':p.endsWith('.css')?'text/css':'application/javascript'}});
  })] };
  let html=ler('pages/'+pagina);
  html=html.replace(/<script[^>]*src="[^"<>]*mbb-busca-global[^"<>]*"[^>]*><\/script>/g,'');
  const erros=[];
  const dom = new JSDOM(html,{url:'https://mbb.test/pages/'+pagina+query+hash,runScripts:'dangerously',resources,pretendToBeVisual:true,
    beforeParse(w){w.matchMedia=()=>({matches:false,addListener(){},removeListener(){}});w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=function(){};w.HTMLElement.prototype.scrollTo=function(){};w.fetch=async()=>({ok:false});w.addEventListener('error',e=>erros.push(e.message));}});
  await new Promise(resolve=>dom.window.addEventListener('load',()=>setTimeout(resolve,90),{once:true}));
  assert.deepEqual(erros,[],pagina);return dom;
}

test('DOM: conceitos abrem painéis corretos; retorno persiste e pode ser encerrado', {skip:!JSDOM}, async () => {
  for (const [pagina,ancora] of [['arduino.html','atuadores-reles'],['arduino-conectividade.html','b6-hc05'],['arduino-seguranca.html','b9-eletricidade'],['appinventor.html','bluetooth-ventilador']]) {
    const dom=await abrir(pagina,'#'+ancora,'?mbb-origem=ventilador&mbb-etapa=4');const w=dom.window,d=w.document;
    assert.ok(d.querySelector('.mbb-retorno-projeto a').href.endsWith('#etapa-4'));
    if(pagina!=='appinventor.html') assert.ok(d.getElementById(ancora).classList.contains('active-panel'));
    else assert.equal(d.querySelector('#appInventorModuleMenu .active').dataset.module,'bluetooth');
    d.querySelector('.mbb-retorno-projeto button').click();assert.equal(w.location.search,'');assert.equal(d.querySelector('.mbb-retorno-projeto'),null);
    dom.window.close();
    const sem=await abrir(pagina,'#'+ancora);assert.equal(sem.window.document.querySelector('.mbb-retorno-projeto'),null);sem.window.close();
  }
});

test('DOM: navegação antiga, novos menus e links nativos continuam coerentes', {skip:!JSDOM}, async () => {
  const dom=await abrir('arduino.html','#p8');const w=dom.window,d=w.document;
  assert.ok(d.getElementById('p8').classList.contains('active-panel'));
  d.querySelector('#stageMenu a[href="#atuadores-reles"]').click();assert.ok(d.getElementById('atuadores-reles').classList.contains('active-panel'));
  w.location.hash='#p9';await new Promise(r=>setTimeout(r,30));assert.ok(d.getElementById('p9').classList.contains('active-panel'));assert.equal(d.querySelector('#arduinoModuleMenu .active').dataset.module,'atuadores');
  const numeros=[...d.querySelectorAll('#arduinoModuleMenu .module-btn')].map(x=>Number(x.textContent.trim().split('.')[0]));
  assert.deepEqual(numeros,[1,2,3,4,5,6,7,8,9,10,11,99]);dom.window.close();
});

test('DOM: código exibido é o .ino; copiar sucesso/falha e checklist persistente', {skip:!JSDOM}, async () => {
  const dom=await abrir('arduino-ventilador-bluetooth.html','#etapa-5');const w=dom.window,d=w.document;
  for(const code of d.querySelectorAll('.vent-code code')) {
    const href=code.closest('.vent-code').querySelector('a[download]').getAttribute('href');assert.equal(code.textContent,ler(href.replace('../','')));
  }
  const b=d.querySelector('[data-vent-copiar]');let copia;
  Object.defineProperty(w,'isSecureContext',{value:true});Object.defineProperty(w.navigator,'clipboard',{value:{writeText:async s=>{copia=s;}}});
  b.click();await new Promise(r=>setTimeout(r,0));assert.equal(copia,d.getElementById(b.dataset.ventCopiar).textContent);assert.equal(b.textContent,'Copiado!');
  w.navigator.clipboard.writeText=async()=>{throw new Error('negado')};d.execCommand=()=>false;b.click();await new Promise(r=>setTimeout(r,0));assert.equal(b.textContent,'Falha ao copiar');
  const input=d.querySelector('[data-vent-check]');input.click();assert.equal(JSON.parse(w.localStorage.getItem('mbb:ventilador:checklist:v1'))[input.dataset.ventCheck],true);
  const a=d.querySelector('#etapa-3 a[data-mbb-conceito]');assert.equal(new URL(a.href).searchParams.get('mbb-etapa'),'3');
  assert.equal(d.querySelectorAll('.mbb-visualizador').length,1);
  assert.equal(d.querySelectorAll('figure[data-mbb-ampliavel]').length,d.querySelectorAll('figure[data-mbb-ampliavel][data-mbb-visualizador-pronto]').length);
  d.querySelector('.mbb-visualizador-trigger').click(); await new Promise(r=>setTimeout(r,30));
  assert.equal(d.querySelector('#mbbVisualizador').hidden,false);
  d.querySelector('[data-mbb-view-action="close"]').click(); assert.equal(d.querySelector('#mbbVisualizador').hidden,true);
  assert.equal(d.querySelectorAll('[data-sim-comando]:disabled').length,4);
  d.querySelector('[data-sim-conectar]').click();d.querySelector('[data-sim-comando="2"]').click();assert.equal(d.querySelector('[data-sim-led="2"]').dataset.on,'true');
  assert.equal(d.querySelectorAll('[data-sim-led][data-on="true"]').length,1);dom.window.close();
});
