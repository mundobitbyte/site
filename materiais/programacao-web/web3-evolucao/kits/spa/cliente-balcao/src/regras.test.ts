import { expect, test } from "vitest";
import { conferirDescricao, filtrarProdutos } from "./regras.js";
import type { Produto } from "./servicos/api.js";

test("buscar combina nome e categoria sem alterar o cardápio recebido", () => {
  const produtos = [{id:"cafe",nome:"Café coado",categoria:"bebida"},{id:"pao",nome:"Pão",categoria:"comida"}] as Produto[];
  expect(filtrarProdutos(produtos," CAFÉ ","bebida").map(p=>p.id)).toEqual(["cafe"]);
  expect(filtrarProdutos(produtos,"CAFÉ","comida")).toEqual([]);
  expect(produtos).toHaveLength(2);
});
test("uma descrição curta ou longa demais não vira publicação", () => {
  expect(()=>conferirDescricao("curta")).toThrow();
  expect(()=>conferirDescricao("x".repeat(401))).toThrow();
  expect(conferirDescricao("  Café preparado com cuidado.  ")).toBe("Café preparado com cuidado.");
});
