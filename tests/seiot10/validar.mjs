import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Script} from 'node:vm';
const read=p=>readFileSync(p,'utf8');
const html=read('pages/arduino-projeto-iot.html');
const json=read('wokwi/ambiente-inteligente/diagram.json');
const diagram=JSON.parse(json);
const decoded=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"');
for(const id of ['b10-1','b10-2','b10-3','b10-4','b10-5','b10-6','b10-7']){
  assert(html.includes('id="'+id+'"'), 'Etapa original ausente: '+id);
  assert(html.includes('href="#'+id+'"'), 'Navegação original ausente: '+id);
}
for(const key of ['id="b10-local"','id="b10-final"','LEITURA_MAIOR_NO_ESCURO','Wokwi-GUEST','NOME_DA_REDE','arduino-revisao-modulos.html']){
  assert(html.includes(key), 'Conteúdo prévio não preservado: '+key);
}
assert(html.includes('data-mbb10-wokwi-json="1"'),'Orientação JSON nova ausente');
const match=html.match(/<pre id="b10-wokwi-diagram">([\s\S]*?)<\/pre>/);
assert(match,'Bloco Copiar com JSON ausente');
assert.equal(decoded(match[1]),json,'JSON copiável difere do arquivo publicado');
assert.equal(diagram.parts.length,4);
assert.equal(diagram.connections.length,8);
const parts=new Map(diagram.parts.map(p=>[p.id,p]));
assert.equal(parts.get('esp').type,'board-esp32-devkit-c-v4');
assert.equal(parts.get('ldr1').type,'wokwi-photoresistor-sensor');
assert.equal(parts.get('res1').attrs.value,'220');
assert.equal(parts.get('led1').type,'wokwi-led');
const wiring=diagram.connections.map(x=>x.slice(0,2).sort().join('~'));
function has(a,b){assert(wiring.includes([a,b].sort().join('~')),'Falta ligação '+a+' -> '+b)}
has('esp:3V3','ldr1:VCC');has('esp:GND.1','ldr1:GND');has('esp:34','ldr1:AO');
has('esp:23','led1:A');has('led1:C','res1:1');has('res1:2','esp:GND.2');
assert.deepEqual(new Set(diagram.parts.map(x=>x.id)).size,diagram.parts.length);
for(const conn of diagram.connections)for(const side of conn.slice(0,2)){
  if(side.startsWith('$'))continue;
  assert(parts.has(side.split(':')[0]),'Referência inexistente '+side);
}
new Script(read('js/arduino-projeto-iot.js'),{filename:'js/arduino-projeto-iot.js'});
new Script(read('js/arduino-espiral-mbb-7a10-20261026.js'),{filename:'js/arduino-espiral-mbb-7a10-20261026.js'});
assert(html.includes("copyCode('b10-wokwi-diagram'"),'Botão de cópia ausente');
console.log('OK: etapas 10.1–10.7, sketch existente, diagrama Wokwi, ligações e cópia protegidos.');
