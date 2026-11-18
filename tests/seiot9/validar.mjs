import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Script} from 'node:vm';
const read=path=>readFileSync(path,'utf8');
const page=read('pages/arduino-seguranca.html');
for(const panel of ['b9-prep','b9-1','b9-2']){
  assert(page.includes('id="'+panel+'"'),'Painel perdido: '+panel);
  assert(page.includes('href="#'+panel+'"'),'Navegação perdida: '+panel);
}
for(const token of ['LGPD','Confidencialidade','Integridade','Disponibilidade','Autenticar','Autorizar','HTTPS','TLS','arduino-projeto-iot.html'])
  assert(page.includes(token),'Fundamento ou conexão original ausente: '+token);
assert(page.includes('data-mbb9-caso-granja="1"'),'Estudo de caso não encontrado');
for(const v of ['arduino-granja-inteligente.html','UID','[DEMO]','token','Exercício autônomo'])
  assert(page.includes(v),'Falta elo conceitual: '+v);
for(const path of ['js/arduino-seguranca.js','js/arduino-espiral-mbb-7a10-20261026.js']){
  const body=read(path);
  new Script(body,{filename:path});
  assert(page.includes(path.slice(3)),'Script já utilizado perdeu referência: '+path);
}
assert(!/\d{8,10}:[\w-]{35,}/.test(page),'Credencial Telegram não deve constar no HTML');
console.log('OK: segurança IoT, percurso 9.1/9.2 e estudo de caso preservados.');
