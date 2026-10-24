type Produto = { id: number; nome: string; preco: number; disponivel: boolean };
const produto: Produto = { id: 1, nome: "Café coado", preco: 8, disponivel: true };
const { nome, preco } = produto;

document.body.textContent = `Café Aurora
${nome} — R$ ${preco.toFixed(2)}`;
