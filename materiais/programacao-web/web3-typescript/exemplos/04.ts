type Produto = {
  id: number;
  nome: string;
  preco: number;
};

const produtos: Produto[] = [
  { id: 1, nome: "Café coado", preco: 8 },
  { id: 2, nome: "Pão artesanal", preco: 12 },
  { id: 3, nome: "Bolo de laranja", preco: 9 },
];

const linhas = produtos.map((produto) => {
  return `${produto.nome} — R$ ${produto.preco.toFixed(2)}`;
});

document.body.textContent = `Café Aurora\n${linhas.join("\n")}`;
