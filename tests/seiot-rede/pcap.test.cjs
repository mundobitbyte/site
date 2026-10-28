const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
const {analisarPcap}=require('../../js/arduino-mdns-pcap.js');
const captura=fs.readFileSync('docs/validacoes/seiot-rede-20261028/wokwi-mdns.pcap');
test('captura real do Wokwi: seis pacotes e nomes em sondagens e anúncios',()=>{
 const d=analisarPcap(captura);assert.equal(d.quadros,135);assert.equal(d.pacotesMdns,6);
 assert.equal(new Set(d.registros.filter(r=>r.mensagem==='Consulta/sondagem').map(r=>r.pacote)).size,3);
 assert.equal(new Set(d.registros.filter(r=>r.mensagem==='Resposta/anúncio').map(r=>r.pacote)).size,3);
 assert(d.registros.some(r=>r.tipo==='SRV'&&r.valor==='ambiente-mbb.local · porta 80'));
 assert(d.registros.some(r=>r.tipo==='A'&&r.nome==='ambiente-mbb.local'&&r.valor==='10.10.0.2'&&r.mensagem==='Resposta/anúncio'));
 assert(d.registros.every(r=>r.origem==='10.10.0.2'&&r.destino==='224.0.0.251'&&r.destinoPorta===5353));
});
test('timestamp nanosegundo e janela da captura são preservados',()=>{
 const r=analisarPcap(captura).registros;assert.equal(r[0].segundos,3.367755);assert.equal(r.at(-1).segundos,6.468755);
});
test('arquivos incompletos, PCAPNG e tipos não suportados são recusados',()=>{
 assert.throws(()=>analisarPcap(Buffer.alloc(3)),/incompleto/);
 const ng=Buffer.from(captura);ng.writeUInt32LE(0x0a0d0d0a);assert.throws(()=>analisarPcap(ng),/PCAPNG/);
 const link=Buffer.from(captura);link.writeUInt32LE(127,20);assert.throws(()=>analisarPcap(link),/radiotap/);
 assert.throws(()=>analisarPcap(captura.subarray(0,captura.length-1)),/truncado/);
});
test('captura vazia não é inventada como evidência de mDNS',()=>{
 const d=analisarPcap(captura.subarray(0,24));assert.equal(d.pacotesMdns,0);assert.deepEqual(d.registros,[]);
});
