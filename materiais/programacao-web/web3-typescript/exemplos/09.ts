type Produto = { id: number; nome: string; preco: number; disponivel: boolean };

const produtos: Produto[] = [
  { id: 1, nome: "Café coado", preco: 8, disponivel: true },
  { id: 2, nome: "Pão artesanal", preco: 12, disponivel: true },
  { id: 3, nome: "Bolo de laranja", preco: 9, disponivel: true },
];

const limitePreco: number = 9;
const codigoProcurado: number = 2;
const acessiveis = produtos.filter((produto) => produto.preco <= limitePreco);
const escolhido = produtos.find((produto) => produto.id === codigoProcurado);
let mensagem = "Produto não encontrado.";

if (escolhido !== undefined) {
  mensagem = `${escolhido.nome}: R$ ${escolhido.preco.toFixed(2)}`;
}

document.body.textContent = `Café Aurora
Produtos até R$ ${limitePreco.toFixed(2)}: ${acessiveis.length}.
${mensagem}`;
