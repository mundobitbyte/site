type Produto = {
  id: number;
  nome: string;
  preco: number;
  disponivel: boolean;
};

const produto: Produto = {
  id: 1, nome: "Café coado", preco: 8, disponivel: true,
};

document.body.textContent = `Café Aurora
Produto: ${produto.nome}
Preço: R$ ${produto.preco.toFixed(2)}
Disponível: ${produto.disponivel}`;
