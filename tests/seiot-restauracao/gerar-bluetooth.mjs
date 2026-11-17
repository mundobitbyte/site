import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const dest=process.argv[2];if(!dest)throw Error('Diretório necessário');
const html=fs.readFileSync('pages/arduino-conectividade.html','utf8');
const js=fs.readFileSync('js/arduino-conectividade.js','utf8');
const decode=x=>x.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
function pick(text,rx,name){const m=text.match(rx);assert(m,'Não encontrou '+name);return decode(m[1]).trim()+'\n';}
const sketch=pick(html,/<pre id="b6-1-code">([\s\S]*?)<\/pre>/,'programa Bluetooth');
const stub=pick(js,/<pre id="b6-1-wokwi-header">([\s\S]*?)<\/pre>/,'biblioteca simulada');
assert(sketch.includes('#include "BluetoothSerial.h"'));
assert(stub.includes('class BluetoothSerial'));
for(const nome of ['BTFisico','BTWokwi','HTTPLocal']) fs.mkdirSync(path.join(dest,nome),{recursive:true});
fs.writeFileSync(path.join(dest,'BTFisico/BTFisico.ino'),sketch);
fs.writeFileSync(path.join(dest,'BTWokwi/BTWokwi.ino'),sketch);
fs.writeFileSync(path.join(dest,'BTWokwi/BluetoothSerial.h'),stub);
fs.writeFileSync(path.join(dest,'HTTPLocal/HTTPLocal.ino'),fs.readFileSync('materiais/arduino/conectividade/wokwi/http-local.ino','utf8'));
console.log('Esboços separados para compilação Bluetooth real, Bluetooth simulado e HTTP local');
