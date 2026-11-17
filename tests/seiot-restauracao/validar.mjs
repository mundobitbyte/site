import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const read = p => fs.readFileSync(p, 'utf8');
const html = read('pages/arduino-conectividade.html');
const js = read('js/arduino-conectividade.js');
const extras = read('js/arduino-conectividade-acrescimos-20261117.js');
const wokwi = read('js/arduino-conectividade-mbb-wokwi-20261005.js');
for (const [name, source] of Object.entries({js, extras, wokwi})) new vm.Script(source,{filename:name});
const ids=['b6-0','b6-prep','b6-1','b6-2','b6-3','b6-4','b6-5'];
for (const id of ids) {
 assert(html.includes('id="'+id+'"'), 'Etapa ausente '+id);
 assert(html.includes('href="#'+id+'"'), 'Menu ausente '+id);
}
function stage(id){
 const pos=html.indexOf('id="'+id+'"',html.indexOf('<section'));
 assert(pos>=0);
 const begin=html.lastIndexOf('<section',pos);
 const next=html.indexOf('<section class="project mbb6-panel"',pos+1);
 return html.slice(begin,next<0?html.indexOf('</main>',begin):next);
}
const requisites={
 'b6-prep':['Hello, ESP32!','Arduino IDE','GPIO 23','wokwi-preparacao-05.webp'],
 'b6-1':['Bluetooth Classic','SPP','BluetoothSerial SerialBT;','SerialBT.begin','SerialBT.available()', 'SerialBT.read()', 'SerialBT.println', 'Android', 'iPhone'],
 'b6-2':['WiFi.h','Wokwi','ESP32 físico','NOME_DA_REDE','WiFi.localIP'],
 'b6-3':['HTTPClient.h','WebServer.h','ESP32 físico','servidor HTTP','cliente HTTP'],
 'b6-4':['ESPmDNS.h','zeroconf','mdns-pcap-arquivo','MDNS.begin','MDNS.addService'],
 'b6-5':['cloudflared','servidor.py','túnel','encaminhador_local']
};
for(const [id,tokens] of Object.entries(requisites)){
 const text=stage(id);
 for(const token of tokens) assert(text.includes(token),id+': conteúdo ou código perdido: '+token);
}
for(const token of ['b6-1-wokwi-header','class BluetoothSerial','return Serial.available()','return Serial.read()','remova do projeto a aba auxiliar']) assert(js.includes(token),'Biblioteca simulada perdida: '+token);
for(const asset of ['arduino-conectividade-aprofundamento-mbb-20261026.js','arduino-mdns-pcap.js','arduino-conectividade-mbb-wokwi-20261005.js','arduino-conectividade-acrescimos-20261117.js']) assert(html.includes(asset),'script original ausente: '+asset);
for(const file of ['diagram.json','http-local.ino','tunel-modelo.ino']) assert(extras.includes(file),'melhoria posterior perdida: '+file);
console.log('OK: sete etapas e práticas ESP32 físicas/Wokwi preservadas; adições separadas.');
