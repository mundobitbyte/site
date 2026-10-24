const preco: number = 8;
const quantidade: number = 3;
const total = preco * quantidade;

document.body.textContent = `Café Aurora
Café coado: ${quantidade} unidades.
Total: R$ ${total.toFixed(2)}`;
