// Verifica a exportacao em DOM emulado. Nao mede layout ou executa um navegador.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');
let JSDOM;
try { ({JSDOM} = require(process.env.MBB_JSDOM || 'jsdom')); } catch (_) {}
const root = path.resolve(__dirname, '../..');
test('portátil: aulas, destinos, downloads, menu, checklist, simulador, cópia e ampliação em DOM', {skip: !JSDOM}, async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mbb-portatil-'));
  let dom;
  try {
    const target = path.join(tmp, 'previa.html');
    cp.execFileSync('python3', [path.join(__dirname, 'exportar-portatil.py'), target]);
    const source = fs.readFileSync(target, 'utf8');
    const errors = [];
    dom = new JSDOM(source, {url:'https://previa.test/Previa.html',runScripts:'dangerously',pretendToBeVisual:true,
      beforeParse(w) {
        w.matchMedia = () => ({matches:false,addListener(){},removeListener(){}});
        w.scrollTo = () => {};
        w.HTMLElement.prototype.scrollIntoView = function(){};
        w.localStorage.setItem('mbb:ventilador:checklist:v1',JSON.stringify({'aluno-inicio-0':true}));
        w.addEventListener('error', e => errors.push(e.message));
      }});
    const w=dom.window,d=w.document;
    await new Promise(resolve => w.addEventListener('load',resolve,{once:true}));
    assert.deepEqual(errors,[]);
    assert.match(d.querySelector('meta[http-equiv="Content-Security-Policy"]').content,/connect-src 'none'/);
    assert.equal(d.querySelectorAll('script[src],link[rel="stylesheet"],img:not([src^="data:"])').length,0);
    const ids=[...d.querySelectorAll('[id]')].map(x=>x.id);
    assert.equal(new Set(ids).size,ids.length);
    for(let i=1;i<=8;i++) assert.ok(d.getElementById('etapa-'+i));
    for(const id of ['atuadores-reles','b6-hc05','b9-eletricidade','bluetooth-ventilador']) assert.ok(d.getElementById('apoio-'+id));
    for(const a of d.querySelectorAll('a[href^="#"]')) {
      const anchor=a.getAttribute('href').slice(1);
      if(anchor) assert.ok(d.getElementById(anchor),anchor);
    }
    for(const filename of ['app-designer-mit.jpg','app-blocos-mit.jpg']) {
      const expected=fs.readFileSync(path.join(root,'img/arduino/ventilador',filename));
      const img=[...d.querySelectorAll('img')].find(el=>el.src.startsWith('data:image/jpeg;base64,') && Buffer.from(el.src.split(',')[1],'base64').equals(expected));
      assert.ok(img,'Captura JPEG incorporada com MIME e bytes corretos: '+filename);
    }
    for(const a of d.querySelectorAll('a[download][href^="data:"]')) {
      const bytes=Buffer.from(a.href.split(',')[1],'base64');
      const matches=[];
      function walk(dir) {for(const entry of fs.readdirSync(dir,{withFileTypes:true})) {const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(entry.name===a.download)matches.push(p);}}
      walk(path.join(root,'downloads/ventilador'));
      assert.equal(matches.length,1,a.download);assert.deepEqual(bytes,fs.readFileSync(matches[0]));
    }
    const toggle=d.getElementById('stageToggle');toggle.click();assert.equal(toggle.getAttribute('aria-expanded'),'true');
    d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape'}));assert.equal(toggle.getAttribute('aria-expanded'),'false');
    toggle.click();d.querySelector('#stageMenu a[href="#etapa-6"]').click();assert.equal(toggle.getAttribute('aria-expanded'),'false');
    const check=d.querySelector('[data-vent-check]');assert.equal(check.checked,true);check.click();
    assert.equal(JSON.parse(w.localStorage.getItem('mbb:ventilador:checklist:v1'))[check.dataset.ventCheck],false);
    const copy=d.querySelector('[data-vent-copiar]');let copied;
    Object.defineProperty(w,'isSecureContext',{value:true});Object.defineProperty(w.navigator,'clipboard',{value:{writeText:async text=>{copied=text;}}});
    copy.click();await new Promise(r=>setTimeout(r,0));assert.equal(copied,d.getElementById(copy.dataset.ventCopiar).textContent);
    w.navigator.clipboard.writeText=async()=>{throw Error('recusado')};d.execCommand=()=>false;copy.click();await new Promise(r=>setTimeout(r,0));assert.equal(copy.textContent,'Falha ao copiar');
    d.querySelector('[data-sim-conectar]').click();
    for(const n of ['0','1','2','3']) {d.querySelector('[data-sim-comando="'+n+'"]').click();assert.equal(d.querySelectorAll('[data-sim-led][data-on="true"]').length,n==='0'?0:1);}
    d.querySelector('[data-sim-falha]').click();await new Promise(r=>setTimeout(r,2550));
    assert.equal(d.querySelectorAll('[data-sim-led][data-on="true"]').length,0);assert.match(d.querySelector('[data-sim-log]').textContent,/Prazo de bancada expirou/);
    const rele=d.querySelector('[data-rele-toggle]');rele.checked=true;rele.dispatchEvent(new w.Event('change'));assert.match(d.querySelector('[data-rele-estado]').textContent,/COM–NA fechado/);
    d.querySelector('[data-vent-quiz] button[data-correto="true"]').click();assert.match(d.querySelector('[data-vent-quiz] [role="status"]').textContent,/Correto/);
    const figs=d.querySelectorAll('figure[data-mbb-ampliavel]');assert.ok(figs.length>=5);
    assert.equal(figs.length,d.querySelectorAll('figure[data-mbb-visualizador-pronto]').length);
    d.querySelector('.mbb-visualizador-trigger').click();assert.equal(d.getElementById('mbbVisualizador').hidden,false);
    d.querySelector('[data-mbb-view-action="close"]').click();assert.equal(d.getElementById('mbbVisualizador').hidden,true);
    assert.deepEqual(errors,[]);
  } finally {dom?.window.close();fs.rmSync(tmp,{recursive:true,force:true});}
});
