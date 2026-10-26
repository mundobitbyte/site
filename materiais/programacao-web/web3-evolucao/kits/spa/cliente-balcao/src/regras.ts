import type { Produto } from "./servicos/api.js";

export function filtrarProdutos(produtos: Produto[], busca: string, categoria: string): Produto[] {
  const termo = busca.trim().toLocaleLowerCase("pt-BR");
  return produtos.filter(p => (categoria === "todas" || p.categoria === categoria) &&
    p.nome.toLocaleLowerCase("pt-BR").includes(termo));
}

export function conferirDescricao(texto: string): string {
  const descricao = texto.trim();
  if (descricao.length < 10 || descricao.length > 400) throw new Error("Escreva de 10 a 400 caracteres.");
  return descricao;
}
