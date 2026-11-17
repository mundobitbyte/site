import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';
import assert from 'node:assert/strict';

const ler = p => readFileSync(p, 'utf8');
const topic = ler('pages/arduino-iot.html');
const page = ler('pages/arduino-granja-inteligente.html');
const firmware = ler('wokwi/granja-inteligente/sketch.ino');
const diagram = JSON.parse(ler('wokwi/granja-inteligente/diagram.json'));

assert.match(topic, /<section[^>]*id="b7-5"/);
assert(topic.includes('href="#b7-5"'));
assert(topic.includes('arduino-granja-inteligente.html'));
assert(topic.includes('arduino-protocolos.html#b8-prep'));
assert(!/maleta|lixeira/i.test(topic));
const catalogo = JSON.parse(ler('meu-mbb/catalogo.json'));
const unidadeIoT = catalogo.unidades.find(u => u.localizacao_atual.startsWith('pages/arduino-iot.html'));
assert(unidadeIoT.topicos_busca.some(t => t.ancora === 'b7-5'));
const match = [...page.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
for (const m of match) if (m[1].trim()) new Script(m[1]);
assert(page.includes('arduino-iot.html#b7-5'));
assert(page.includes('mbb-busca-global.js'));
assert.equal(diagram.parts.length, 9);
assert.equal(diagram.connections.length, 24);
const ids = new Set(diagram.parts.map(p => p.id));
assert(diagram.connections.some(c => c[0] === "resDht:2" && c[1] === "dht1:SDA"));
assert.equal(ids.size, diagram.parts.length);
for (const c of diagram.connections)
  for (const endpoint of c.slice(0, 2))
    assert(endpoint.startsWith('$') || ids.has(endpoint.split(':')[0]), 'Pino fora do circuito: '+endpoint);
assert(firmware.includes('WiFi.begin("Wokwi-GUEST"'));
assert(firmware.includes('setCACert(TELEGRAM_CERTIFICATE_ROOT)'));
assert(!/clienteSeguro\s*\.\s*setInsecure\s*\(/.test(firmware));
assert(firmware.includes('[DEMO]'));
assert(!/\d{8,10}:[\w-]{35,}/.test(firmware), 'Token de bot vazou no código');
assert.equal([...page.matchAll(/data-src="[^"]+"/g)].length, 3);
console.log('Inspecao estatica da pratica 7.5 aprovada.');
