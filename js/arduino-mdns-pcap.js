/* Leitor restrito de PCAP clássico: IEEE 802.11/Ethernet, IPv4, UDP e DNS.
   Lê bytes de um arquivo local; não envia arquivos nem realiza consultas DNS. */
(function () {
  'use strict';
  function analisarPcap(bytes) {
    if (!(bytes instanceof Uint8Array) || bytes.length < 24) throw Error('Arquivo PCAP incompleto.');
    if (bytes.length > 5 * 1024 * 1024) throw Error('Use uma captura curta, de até 5 MB.');
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const magic = Array.from(bytes.slice(0, 4), n => n.toString(16).padStart(2, '0')).join('');
    if (!['d4c3b2a1','a1b2c3d4','4d3cb2a1','a1b23c4d'].includes(magic)) throw Error('Use o PCAP clássico exportado pelo Wokwi; PCAPNG não é aceito.');
    const little = magic === 'd4c3b2a1' || magic === '4d3cb2a1';
    const escala = magic === '4d3cb2a1' || magic === 'a1b23c4d' ? 1e9 : 1e6;
    const enlace = v.getUint32(20, little) & 65535;
    if (![1,105].includes(enlace)) throw Error('Esta atividade aceita Ethernet ou IEEE 802.11 sem radiotap. Exporte diretamente pelo Wokwi.');
    const resultado = { quadros:0, pacotesMdns:0, registros:[], enlace };
    let inicio = null;
    for (let pos = 24; pos < bytes.length;) {
      if (pos + 16 > bytes.length) throw Error('Cabeçalho de pacote incompleto.');
      const tamanho = v.getUint32(pos + 8, little);
      const tempo = v.getUint32(pos, little) + v.getUint32(pos + 4, little) / escala;
      const base = pos + 16, fim = base + tamanho;
      if (fim > bytes.length) throw Error('Pacote truncado. Exporte a captura novamente.');
      pos = fim;
      if (++resultado.quadros > 10000) throw Error('Use uma captura mais curta.');
      if (inicio === null) inicio = tempo;
      let ip;
      if (enlace === 1) {
        if (tamanho < 14 || v.getUint16(base + 12) !== 0x0800) continue;
        ip = base + 14;
      } else {
        if (tamanho < 24 || ((bytes[base] >> 2) & 3) !== 2 || (bytes[base + 1] & 0x40)) continue;
        const qos = !!(bytes[base] & 0x80);
        const llc = base + 24 + ((bytes[base + 1] & 3) === 3 ? 6 : 0) + (qos ? 2 : 0) + (qos && (bytes[base + 1] & 0x80) ? 4 : 0);
        if (llc + 8 > fim || bytes[llc] !== 0xaa || bytes[llc + 1] !== 0xaa || bytes[llc + 2] !== 3 || v.getUint16(llc + 6) !== 0x0800) continue;
        ip = llc + 8;
      }
      if (ip + 20 > fim || bytes[ip] >> 4 !== 4 || bytes[ip + 9] !== 17) continue;
      const ihl = (bytes[ip] & 15) * 4;
      if (ihl < 20 || ip + ihl + 8 > fim || (v.getUint16(ip + 6) & 0x3fff)) continue;
      const udp = ip + ihl;
      const origemPorta = v.getUint16(udp), destinoPorta = v.getUint16(udp + 2);
      if (origemPorta !== 5353 && destinoPorta !== 5353) continue;
      const dns = udp + 8;
      const limite = Math.min(fim, udp + v.getUint16(udp + 4), ip + v.getUint16(ip + 2));
      if (dns + 12 > limite) throw Error('Mensagem mDNS incompleta.');
      const origem = Array.from(bytes.slice(ip + 12, ip + 16)).join('.');
      const destino = Array.from(bytes.slice(ip + 16, ip + 20)).join('.');
      const resposta = !!(v.getUint16(dns + 2) & 0x8000);
      const pacote = ++resultado.pacotesMdns;
      const prefixo = { pacote, segundos: +(tempo - inicio).toFixed(6), origem, destino, origemPorta, destinoPorta, mensagem: resposta ? 'Resposta/anúncio' : 'Consulta/sondagem' };
      function nome(offset) {
        let p = offset, proximo = null, partes = [], vistos = new Set();
        for (let n = 0; n < 128; n++) {
          if (p >= limite || vistos.has(p)) throw Error('Nome DNS inválido.');
          vistos.add(p);
          const tamanho = bytes[p++];
          if (!tamanho) return { texto:partes.join('.'), proximo:proximo === null ? p : proximo };
          if ((tamanho & 0xc0) === 0xc0) {
            if (p >= limite) throw Error('Ponteiro DNS incompleto.');
            if (proximo === null) proximo = p + 1;
            p = dns + ((tamanho & 63) << 8) + bytes[p];
          } else {
            if (tamanho > 63 || p + tamanho > limite) throw Error('Rótulo DNS inválido.');
            partes.push(new TextDecoder().decode(bytes.slice(p, p + tamanho)));
            p += tamanho;
          }
        }
        throw Error('Nome DNS longo demais.');
      }
      let p = dns + 12;
      const perguntas = v.getUint16(dns + 4);
      const total = v.getUint16(dns + 6) + v.getUint16(dns + 8) + v.getUint16(dns + 10);
      if (perguntas + total > 256) throw Error('Mensagem DNS grande demais para esta atividade.');
      const tipos = {1:'A',12:'PTR',16:'TXT',28:'AAAA',33:'SRV',255:'ANY'};
      for (let n = 0; n < perguntas + total; n++) {
        const lido = nome(p); p = lido.proximo;
        if (p + 4 > limite) throw Error('Registro DNS incompleto.');
        const tipo = v.getUint16(p); p += 4;
        let valor = 'Pergunta pelo registro';
        if (n >= perguntas) {
          if (p + 6 > limite) throw Error('Registro DNS truncado.');
          const tamanho = v.getUint16(p + 4); p += 6;
          if (p + tamanho > limite) throw Error('Valor DNS truncado.');
          if (tipo === 1 && tamanho === 4) valor = Array.from(bytes.slice(p, p + 4)).join('.');
          else if (tipo === 12) valor = nome(p).texto;
          else if (tipo === 33 && tamanho >= 7) valor = nome(p + 6).texto + ' · porta ' + v.getUint16(p + 4);
          else if (tipo === 28 && tamanho === 16) valor = Array.from({length:8}, (_, i) => v.getUint16(p + 2 * i).toString(16)).join(':');
          else valor = tamanho + ' bytes complementares';
          p += tamanho;
        }
        resultado.registros.push({ ...prefixo, tipo:tipos[tipo] || String(tipo), nome:lido.texto, valor });
      }
    }
    return resultado;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { analisarPcap };
  if (typeof document === 'undefined') return;
  document.addEventListener('DOMContentLoaded', () => {
    const arquivo = document.getElementById('mdns-pcap-arquivo');
    const saida = document.getElementById('mdns-pcap-resultado');
    if (!arquivo || !saida) return;
    arquivo.addEventListener('change', async () => {
      saida.replaceChildren();
      if (!arquivo.files[0]) return;
      try {
        if (arquivo.files[0].size > 5 * 1024 * 1024) throw Error('Use uma captura de até 5 MB.');
        const dados = analisarPcap(new Uint8Array(await arquivo.files[0].arrayBuffer()));
        const resumo = document.createElement('p');
        resumo.textContent = dados.quadros + ' quadros lidos; ' + dados.pacotesMdns + ' pacotes IPv4/UDP na porta 5353.';
        saida.appendChild(resumo);
        if (!dados.pacotesMdns) {
          const aviso = document.createElement('p');
          aviso.textContent = 'Nenhum pacote mDNS IPv4 encontrado nesta captura. Isso não comprova defeito da biblioteca. Confira início, tempo simulado e exportação; este leitor não analisa tráfego IPv6.';
          saida.appendChild(aviso); return;
        }
        const faixa = document.createElement('div'); faixa.className = 'mbb6-pcap-scroll table-responsive'; faixa.tabIndex = 0;
        faixa.setAttribute('role', 'region'); faixa.setAttribute('aria-label', 'Registros mDNS: role para os lados e para baixo');
        const tabela = document.createElement('table');
        const cab = tabela.createTHead().insertRow();
        for (const texto of ['Tempo simulado (s)','Mensagem','Origem → destino','Tipo','Nome observado','Valor observado']) {
          const th = document.createElement('th'); th.scope = 'col'; th.textContent = texto; cab.appendChild(th);
        }
        const corpo = tabela.createTBody();
        for (const r of dados.registros.slice(0, 200)) {
          const linha = corpo.insertRow();
          for (const texto of [r.segundos, r.mensagem, r.origem + ':' + r.origemPorta + ' → ' + r.destino + ':' + r.destinoPorta, r.tipo, r.nome, r.valor]) linha.insertCell().textContent = texto;
        }
        faixa.appendChild(tabela); saida.appendChild(faixa);
        const limite = document.createElement('p');
        limite.textContent = 'Role a tabela para os lados e para baixo; use Ver tabela completa quando disponível. A tabela descreve bytes capturados. Anúncios não comprovam que o navegador do computador resolveu o nome .local. Nenhum arquivo foi enviado ao site.';
        saida.appendChild(limite);
      } catch (erro) {
        saida.textContent = 'Não foi possível ler: ' + erro.message;
      }
    });
  });
})();
