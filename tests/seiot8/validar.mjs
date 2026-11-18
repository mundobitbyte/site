import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Script} from 'node:vm';
const read=path=>readFileSync(path,'utf8');
const html=read('pages/arduino-protocolos.html');
const script=read('js/arduino-protocolos.js');
const espiral=read('js/arduino-espiral-mbb-7a10-20261026.js');
for(const id of ['b8-prep','b8-1','b8-2','b8-3','b8-4','b8-5','b8-6','b8-7']) {
  assert(html.includes('id="'+id+'"'), 'Painel de estudo ausente: '+id);
  assert(html.includes('href="#'+id+'"'), 'Link da etapa ausente: '+id);
}
for(const p of ['arduino-protocolos.js','arduino-espiral-mbb-7a10-20261026.js','mbb-busca-global.js'])
  assert(html.includes(p),'Script da aula ausente: '+p);
assert(html.includes('data-mbb8-can-arbitragem="1"'), 'Exercício de arbitragem CAN ausente');
assert(html.includes('0x120') && html.includes('0x080'), 'Cenário de identificadores CAN incompleto');
assert(html.includes('bit dominante') && html.includes('não uma transmissão CAN física'), 'Orientação de evidência da prática CAN ausente');
for(const marker of ['MAX3232','TWAI','ESP32-WROOM-32','vTaskDelay','GPIO 21','GPIO 22'])
  assert(html.includes(marker), 'Fundamento existente perdido: '+marker);
new Script(script,{filename:'js/arduino-protocolos.js'});
new Script(espiral,{filename:'js/arduino-espiral-mbb-7a10-20261026.js'});
const idA=0x080,idB=0x120;
assert(idA<idB && idB<0x800,'Premissas de arbitragem CAN clássica incorretas');
console.log('OK: tópico 8 e exercício CAN preservados, scripts com sintaxe válida.');
