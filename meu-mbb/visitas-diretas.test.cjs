const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const codigo = fs.readFileSync(path.join(__dirname, 'visitas-diretas.js'), 'utf8');
const indice = require('./visitas-diretas.json');
const pagina = 'pages/bancodedados.html';
const ancora = indice[pagina].ancoras.find(item => item.includes('cte-'));

async function abrir(usuario, url) {
  const visitas = [], scripts = [], ouvintes = {};
  const location = new URL(url);
  const conta = {
    iniciar: async () => {}, atual: () => usuario,
    visitar: async (unidade, hash) => { visitas.push([unidade, hash]); }
  };
  const janela = { addEventListener: (tipo, handler) => { ouvintes[tipo] = handler; } };
  const document = {
    currentScript: { src: 'https://www.mundobitbyte.com.br/meu-mbb/visitas-diretas.js?v=mbb-visitas-1' },
    createElement: () => ({}),
    head: { appendChild(script) {
      scripts.push(script.src);
      if (script.src.includes('/conta.js')) janela.MBBMeuConta = conta;
      queueMicrotask(() => script.onload());
    } }
  };
  vm.runInNewContext(codigo, { document, window: janela, location,
    fetch: async () => ({ ok: true, json: async () => indice }), URL });
  await new Promise(setImmediate);
  return { visitas, scripts, ouvintes, location };
}

test('visita direta com login registra página e tópico para retomar', async () => {
  const paginaAberta = await abrir({ uid: 'teste' }, `https://www.mundobitbyte.com.br/${pagina}#${ancora}`);
  assert.equal(paginaAberta.visitas.length, 1);
  assert.equal(paginaAberta.visitas[0][0].conteudo_id, indice[pagina].conteudo_id);
  assert.equal(paginaAberta.visitas[0][1], ancora);
  paginaAberta.location.hash = '';
  paginaAberta.ouvintes.hashchange();
  await new Promise(setImmediate);
  assert.equal(paginaAberta.visitas.at(-1)[1], '');
});

test('sem login e fora do catálogo não escreve dados pessoais', async () => {
  const semConta = await abrir(null, `https://www.mundobitbyte.com.br/${pagina}`);
  assert.equal(semConta.visitas.length, 0);
  const fora = await abrir({ uid: 'teste' }, 'https://www.mundobitbyte.com.br/meu-mbb/pesquisar.html');
  assert.equal(fora.scripts.length, 0);
  assert.equal(fora.visitas.length, 0);
  assert.equal(indice['pages/git.html'], undefined);
});
