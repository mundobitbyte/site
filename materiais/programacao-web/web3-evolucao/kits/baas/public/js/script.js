const filtros = document.querySelector("[data-filtros]");
const botoesFiltro = document.querySelectorAll("[data-filtro]");
const statusFiltro = document.querySelector("[data-status-filtro]");
const categoriaInicial = document.body.dataset.categoriaInicial || "todos";

function filtrarProdutos(categoria) {
  const cardsProdutos = document.querySelectorAll("[data-categoria]");
  let quantidadeVisivel = 0;

  cardsProdutos.forEach(function (card) {
    const deveMostrar = categoria === "todos" ||
      card.dataset.categoria === categoria;

    card.hidden = !deveMostrar;
    if (deveMostrar) quantidadeVisivel += 1;
  });

  if (statusFiltro) {
    const complemento = quantidadeVisivel === 1 ? "produto encontrado" : "produtos encontrados";
    statusFiltro.textContent = `${quantidadeVisivel} ${complemento}.`;
  }
}

if (filtros && botoesFiltro.length && statusFiltro) {
  botoesFiltro.forEach(function (item) {
    item.setAttribute(
      "aria-pressed",
      String(item.dataset.filtro === categoriaInicial)
    );
  });

  botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoesFiltro.forEach(function (item) {
        item.setAttribute("aria-pressed", "false");
      });

      botao.setAttribute("aria-pressed", "true");
      filtrarProdutos(botao.dataset.filtro);
    });
  });

  filtros.hidden = false;
  filtrarProdutos(categoriaInicial);
}

const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador-mensagem");

if (mensagem && contador) {
  function atualizarContadorMensagem() {
    contador.textContent = `${mensagem.value.length} de 500 caracteres`;
  }

  mensagem.addEventListener("input", atualizarContadorMensagem);
  atualizarContadorMensagem();
}

let produtos = [];
const listaProdutos = document.querySelector("#lista-produtos");
const statusCarregamento = document.querySelector("[data-status-carregamento]");
const pedido = document.querySelector("[data-pedido]");
const itensPedido = document.querySelectorAll("[data-item-pedido]");
const resumoPedido = document.querySelector("[data-resumo-pedido]");
const limparPedido = document.querySelector("[data-limpar-pedido]");
const statusPersistencia = document.querySelector("[data-status-persistencia]");
const CHAVE_PEDIDO = "cafeAurora:pedido";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function criarCard(produto) {
  const card = document.createElement("article");
  const titulo = document.createElement("h3");
  const imagem = document.createElement("img");
  const descricao = document.createElement("p");
  const preco = document.createElement("strong");

  card.dataset.categoria = produto.categoria;
  card.dataset.produto = produto.id;
  titulo.textContent = produto.nome;
  imagem.src = `img/${produto.imagem}`;
  imagem.alt = produto.alt;
  imagem.width = 960;
  imagem.height = 640;
  imagem.loading = "lazy";
  descricao.textContent = `${produto.descricao} `;
  preco.textContent = formatarPreco(produto.preco);

  descricao.append(preco);
  card.append(titulo, imagem, descricao);
  return card;
}

function apresentarProdutos(dados) {
  const fragmento = document.createDocumentFragment();
  dados.forEach(function (produto) {
    fragmento.append(criarCard(produto));
  });
  listaProdutos.replaceChildren(fragmento);
}

function calcularPedido() {
  let quantidade = 0;
  let total = 0;

  for (const item of itensPedido) {
    if (!item.checked) continue;

    const produto = produtos.find(function (produtoEncontrado) {
      return produtoEncontrado.id === item.value;
    });

    if (!produto) continue;
    quantidade += 1;
    total += produto.preco;
  }

  const rotulo = quantidade === 1 ? "item" : "itens";
  resumoPedido.textContent = quantidade === 0
    ? "Nenhum produto selecionado."
    : `${quantidade} ${rotulo} — ${formatarPreco(total)}`;
}

function obterIdsSelecionados() {
  return Array.from(itensPedido)
    .filter(function (item) {
      return item.checked;
    })
    .map(function (item) {
      return item.value;
    });
}

function salvarPedido() {
  if (!statusPersistencia) return;
  const ids = obterIdsSelecionados();

  try {
    if (ids.length === 0) {
      localStorage.removeItem(CHAVE_PEDIDO);
      statusPersistencia.textContent = "Nenhum pedido salvo neste navegador.";
      return;
    }

    localStorage.setItem(CHAVE_PEDIDO, JSON.stringify(ids));
    statusPersistencia.textContent = "Pedido salvo neste navegador.";
  } catch (erro) {
    console.error("Não foi possível salvar o pedido:", erro);
    statusPersistencia.textContent = "A seleção funciona, mas não pôde ser salva.";
  }
}

function restaurarPedido() {
  if (!statusPersistencia) return;

  try {
    const registro = localStorage.getItem(CHAVE_PEDIDO);
    if (!registro) return;

    const ids = JSON.parse(registro);
    const listaValida = Array.isArray(ids) && ids.every(function (id) {
      return typeof id === "string";
    });

    if (!listaValida) {
      throw new TypeError("O pedido salvo não possui o formato esperado.");
    }

    let quantidadeRestaurada = 0;
    itensPedido.forEach(function (item) {
      item.checked = ids.includes(item.value);
      if (item.checked) quantidadeRestaurada += 1;
    });
    statusPersistencia.textContent = quantidadeRestaurada > 0
      ? "Pedido anterior restaurado."
      : "O pedido salvo não contém produtos atuais.";
  } catch (erro) {
    console.error("Não foi possível restaurar o pedido:", erro);
    statusPersistencia.textContent =
      "O pedido salvo não pôde ser lido. Faça uma nova seleção.";
  }
}

if (pedido && itensPedido.length && resumoPedido && limparPedido && statusPersistencia) {
  itensPedido.forEach(function (item) {
    item.addEventListener("change", function () {
      calcularPedido();
      salvarPedido();
    });
  });

  limparPedido.addEventListener("click", function () {
    itensPedido.forEach(function (item) {
      item.checked = false;
    });
    calcularPedido();
    salvarPedido();
  });
}

async function carregarProdutos() {
  if (!listaProdutos || !statusCarregamento) return;
  statusCarregamento.textContent = "Atualizando o cardápio...";

  try {
    const resposta = await fetch("dados/produtos.json");
    if (!resposta.ok) {
      throw new Error(`Falha HTTP: ${resposta.status}`);
    }

    const dados = await resposta.json();
    if (!Array.isArray(dados) || dados.length === 0) {
      throw new TypeError("A resposta não contém uma lista válida de produtos.");
    }

    apresentarProdutos(dados);
    produtos = dados;
    const filtroAtivo = document.querySelector('[data-filtro][aria-pressed="true"]');
    filtrarProdutos(filtroAtivo ? filtroAtivo.dataset.filtro : "todos");

    if (pedido && itensPedido.length && resumoPedido && limparPedido && statusPersistencia) {
      pedido.hidden = false;
      limparPedido.hidden = false;
      restaurarPedido();
      calcularPedido();
    }

    statusCarregamento.textContent = `Cardápio atualizado: ${dados.length} produtos.`;
  } catch (erro) {
    console.error("Não foi possível carregar os produtos:", erro);
    statusCarregamento.textContent =
      "Não foi possível atualizar. Exibindo a versão disponível.";
  }
}

carregarProdutos();
