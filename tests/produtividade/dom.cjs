// Teste de DOM: não substitui medição visual no navegador.
// Requer jsdom disponível no ambiente de execução.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const {JSDOM}=require(process.env.JSDOM_PATH||'jsdom');
const root=path.resolve(__dirname,'../..');
const dom=new JSDOM(fs.readFileSync(path.join(root,'pages/informatica-produtividade.html'),'utf8'),{url:'https://mbb.invalid/pages/informatica-produtividade.html',runScripts:'outside-only',pretendToBeVisual:true});
const w=dom.window;w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
for(const f of ['preparacao','modulo-01','modulo-02','modulo-03','modulo-04','modulo-05','projeto-integrador'])w.eval(fs.readFileSync(path.join(root,'js/informatica-produtividade',f+'.js'),'utf8'));
w.eval(fs.readFileSync(path.join(root,'js/informatica-produtividade.js'),'utf8'));
const d=w.document;const lessons=w.produtividadeLessons;
function open(id){w.location.hash=id;w.dispatchEvent(new w.HashChangeEvent('hashchange'));}
assert.equal(lessons.length,62);assert.equal(new Set(lessons.map(l=>l.id)).size,62);
for(const l of lessons){open(l.id);assert.equal(d.querySelector('#lessonTitle').textContent,l.number+'. '+l.title);assert(!d.querySelector('#courseView').hidden);assert(d.querySelector('#lessonContent').textContent.length>100);for(const a of d.querySelectorAll('#lessonContent a[href^="../downloads/"]'))assert(fs.existsSync(path.resolve(root,'pages',a.getAttribute('href'))),a.href);for(const c of d.querySelectorAll('[data-choice]'))assert(c.querySelector('input[value="'+c.dataset.answer+'"]'),l.id);}
for(const a of d.querySelectorAll('.module-card')){open(a.hash.slice(1));d.querySelector('[data-show-portal]').click();assert(d.querySelector('#courseView').hidden);open(a.hash.slice(1));assert(!d.querySelector('#courseView').hidden);}
d.querySelector('#openMenu').click();assert.equal(d.querySelector('#lessonMenu').getAttribute('aria-hidden'),'false');d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape'}));assert.equal(d.querySelector('#openMenu').getAttribute('aria-expanded'),'false');
open('organizacao-diagnostico');d.querySelector('[data-check-choice]').click();assert(d.querySelector('.choice-result').textContent.includes('Escolha'));d.querySelector('input[value="c"]').checked=true;d.querySelector('[data-check-choice]').click();assert(d.querySelector('.choice-result').textContent.includes('Decisão consistente'));
open('organizacao-formatos');for(const q of d.querySelectorAll('[data-quiz-question]'))q.querySelector('input[value="'+q.dataset.answer+'"]').checked=true;d.querySelector('[data-check-quiz]').click();assert(d.querySelector('.quiz-result').textContent.includes('2/2'));
open('documentos-desafio');const check=d.querySelector('[data-checklist] input');check.checked=true;check.dispatchEvent(new w.Event('change',{bubbles:true}));assert(d.querySelector('.check-progress').textContent.startsWith('1/'));
open('colaboracao-anexos');for(const [key,value] of [['file','odt'],['person','paulo'],['permission','comment']])d.querySelector('[data-'+key+']').value=value;d.querySelector('[data-check-permission]').click();assert(d.querySelector('[data-permission-result]').textContent.includes('Combinação coerente'));
// All lesson anchors preserved and every script remains a real local file.
for(const a of d.querySelectorAll('#portalView a[href^="#"]'))assert(lessons.some(l=>l.id===a.hash.slice(1)),a.hash);
for(const s of d.querySelectorAll('script[src^="../"]'))assert(fs.existsSync(path.resolve(root,'pages',s.getAttribute('src').split('?')[0])));
console.log('OK DOM: 62 aulas; links locais; 6 reaberturas; menu/Escape; escolhas; quiz; checklist; simulação de permissões. Sem avaliação de layout.');
w.close();
