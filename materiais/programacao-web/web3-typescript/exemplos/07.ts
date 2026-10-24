type Produto = { id: number; nome: string; preco: number; disponivel: boolean };

const produtos: Produto[] = [
  { id: 1, nome: "Café coado", preco: 8, disponivel: true },
  { id: 2, nome: "Pão artesanal", preco: 12, disponivel: true },
  { id: 3, nome: "Bolo de laranja", preco: 9, disponivel: true },
];

document.body.textContent = `Café Aurora
Produtos cadastrados: ${produtos.length}`;
