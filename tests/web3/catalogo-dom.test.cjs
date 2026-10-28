const {test}=require('node:test');
const assert=require('node:assert/strict');
const path=require('node:path');
const {JSDOM}=require(path.join(process.env.MBB_TEST_NODE_MODULES,'jsdom'));
const {aplicarProdutoConfirmado}=require(process.env.MBB_CATALOGO_MODULO);
test('descrição publicada chega ao cardápio sem executar HTML nem perder preço e alternativa da foto',()=>{
 const dom=new JSDOM('<article data-produto="cafe-coado"><h3>Café coado</h3><img src="foto-anterior.webp" alt="Xícara de café coado"><p data-descricao-produto>Texto antigo. <strong>R$ 8,00</strong></p></article><p id="retorno-midia-cardapio"></p>',{url:'http://localhost:5000/cardapio.html'});
 const d=dom.window.document;
 aplicarProdutoConfirmado({nome:'Café coado',descricao:'<b>Texto revisado e publicado.</b>',enderecoImagem:'http://localhost:9199/foto'},d);
 assert.match(d.querySelector('[data-descricao-produto]').textContent,/<b>Texto revisado e publicado.<\/b>/);
 assert.equal(d.querySelector('[data-descricao-produto] b'),null);
 assert.equal(d.querySelector('strong').textContent,'R$ 8,00');
 assert.equal(d.querySelector('img').alt,'Xícara de café coado');
 d.querySelector('img').dispatchEvent(new dom.window.Event('error'));
 assert.equal(d.querySelector('img').src,'http://localhost:5000/foto-anterior.webp');
 assert.match(d.querySelector('#retorno-midia-cardapio').textContent,/foto não carregou/);
});
test('catálogo ainda ausente não é anunciado como atualizado',()=>{
 const d=new JSDOM('<p id="retorno-midia-cardapio"></p>').window.document;
 assert.throws(()=>aplicarProdutoConfirmado({nome:'Café',descricao:'Texto revisado.',enderecoImagem:'foto.webp'},d));
 assert.equal(d.querySelector('#retorno-midia-cardapio').textContent,'');
});
