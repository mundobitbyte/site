import fs from 'fs';
import path from 'path';
import vm from 'vm';

const root=process.cwd();
const contentFiles=[
'js/infraestrutura/conteudo-00-03.js','js/infraestrutura/conteudo-04-06.js','js/infraestrutura/conteudo-07-10.js','js/infraestrutura/conteudo-99.js',
'js/infraestrutura/redes-00-03.js','js/infraestrutura/redes-04-07.js','js/infraestrutura/redes-08-10.js','js/infraestrutura/redes-99.js',
'js/infraestrutura/linux-00-03.js','js/infraestrutura/linux-04-07.js','js/infraestrutura/linux-08-10.js','js/infraestrutura/linux-99.js',
'js/infraestrutura/moderna-00-03.js','js/infraestrutura/moderna-04-07.js','js/infraestrutura/moderna-08-10.js','js/infraestrutura/moderna-99.js',
'js/infraestrutura/integrador-99.js'];

global.window={};
for(const f of contentFiles){
  const code=fs.readFileSync(f,'utf8');
  vm.runInThisContext(code,{filename:f});
}
const groups=[
 ['Sistemas',window.infraestruturaLessons||[]],
 ['Redes',window.infraestruturaNetworkLessons||[]],
 ['Linux',window.infraestruturaLinuxLessons||[]],
 ['Moderna',window.infraestruturaModernLessons||[]],
 ['Integrador',window.infraestruturaIntegratorLessons||[]]
];
let fail=0;
const ok=(name,cond,extra='')=>{console.log(`${cond?'OK':'FALHOU'} | ${name}${extra?' | '+extra:''}`); if(!cond) fail++;};
const expected=['00','01','02','03','04','05','06','07','08','09','10','99'];
for(const [name,arr] of groups){
  ok(`${name}: quantidade`, arr.length === (name==='Integrador'?1:12), String(arr.length));
  if(name!=='Integrador') ok(`${name}: sequência`, JSON.stringify(arr.map(x=>x.number))===JSON.stringify(expected), arr.map(x=>x.number).join(','));
  for(const l of arr){
    ok(`${name}/${l.number}: campos`, Boolean(l.id&&l.unit&&l.menuTitle&&l.technicalTitle&&l.title&&l.objective&&l.content));
  }
}
const all=groups.flatMap(g=>g[1]);
const ids=all.map(x=>x.id);
ok('IDs únicos',new Set(ids).size===ids.length,`${ids.length} aulas`);

const page=fs.readFileSync('pages/infraestrutura.html','utf8');
const loader=fs.readFileSync('js/infraestrutura.js','utf8');
for(const id of ['diagnostico','redes-diagnostico','linux-diagnostico','moderna-diagnostico','integrador-final']) ok(`card #${id}`,page.includes(`href="#${id}"`));
for(const f of contentFiles) ok(`script incluído ${f}`,page.includes(`../${f}`));
ok('loader incluído',page.includes('../js/infraestrutura.js'));

const combined=all.map(x=>x.content).join('\n');
ok('sem taxonomias antigas',!/(?<![A-Z0-9])(?:R-\d\d|S-\d\d|A-\d\d|EI-\d+|E-M\d+|E-S\d+|F-I\d+|F-M\d+)(?![A-Z0-9])/i.test(combined));
ok('sem record-box',!combined.includes('record-box'));
ok('quatro registros coerentes', ['Registro de Suporte','Registro da Rede','Registro do Servidor','Registro da Evolução'].every(x=>combined.includes(x)));

const suspicious=[];
for(const [name,arr] of groups){for(const l of arr){
 const text=(l.content+' '+l.objective).replace(/<[^>]+>/g,' ');
 for(const term of ['professor','aluno','módulo','módulos','capítulo','capítulos','próxima aula','nesta aula','aula anterior']){
  if(new RegExp(`\\b${term}\\b`,'i').test(text)) suspicious.push(`${name}/${l.number} ${term}`);
 }
}}
console.log('SUSPEITOS_EDITORIAIS',suspicious.length,suspicious.join(' | '));

const refs=[];
const attr=/(?:src|href)="([^"]+)"/g;
for(const [name,arr] of groups){for(const l of arr){let m;while((m=attr.exec(l.content))){refs.push([`${name}/${l.number}`,m[1]]);}}}
let missing=[];
for(const [where,u] of refs){
 if(/^https?:|^#|^mailto:|^tel:/.test(u)) continue;
 const clean=u.split(/[?#]/)[0];
 const resolved=path.normalize(path.join(root,'pages',clean));
 if(!fs.existsSync(resolved)) missing.push(`${where}: ${u} -> ${path.relative(root,resolved)}`);
}
ok('assets/links locais existentes',missing.length===0,missing.join(' ; '));

// HTML IDs inside lesson content must be unique enough for rendered one-at-a-time interactions; detect duplicates within same lesson.
for(const [name,arr] of groups){for(const l of arr){
 const found=[...l.content.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 ok(`${name}/${l.number}: IDs HTML internos únicos`,new Set(found).size===found.length,found.join(','));
}}

// Cache busting: every changed content file must share a final version >= 4 for clean publication.
const versions=[];
for(const f of contentFiles){const re=new RegExp(`src="\\.\\./${f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\?v=(\\d+)"`); const m=page.match(re); versions.push([f,m?Number(m[1]):null]);}
console.log('CACHE_VERSIONS',versions.map(([f,v])=>`${path.basename(f)}=${v}`).join(' | '));
ok('cache de todos conteúdos >=4',versions.every(([,v])=>v!==null&&v>=4));

for(const [name,arr] of groups){const last=arr[arr.length-1]; const bridges=[...last.content.matchAll(/<div class="bridge-box">([\s\S]*?)<\/div>/g)].map(m=>m[1].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim()); console.log(`FECHAMENTO ${name}:`,bridges.at(-1)||'(sem bridge)');}

if(fail){console.error(`TOTAL FALHAS: ${fail}`);process.exit(1)}
console.log('AUDITORIA ESTRUTURAL FINAL OK');