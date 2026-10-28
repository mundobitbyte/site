import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
const mocks=vi.hoisted(()=>({obter:vi.fn()}));
vi.mock("./atendimento.js",()=>({obterAtendimento:mocks.obter}));
vi.mock("./servicos/api.js",()=>({consultarSessao:vi.fn(async()=>({autenticado:false,csrfToken:"ficticio"})),lerProdutos:vi.fn(async()=>[])}));
import { App } from "./App.js";
beforeEach(()=>{history.replaceState(null,"","/#atendimento");mocks.obter.mockReset();});
afterEach(cleanup);

test("uma consulta em andamento não aceita um segundo pedido e pode ser repetida após falha", async()=>{
  let falhar!: (erro:Error)=>void;
  mocks.obter.mockImplementationOnce(()=>new Promise((_r,reject)=>{falhar=reject;}));
  render(<App/>);
  const botao=screen.getByRole("button",{name:"Atualizar atendimento"});
  fireEvent.click(botao);fireEvent.click(botao);
  expect(mocks.obter).toHaveBeenCalledTimes(1);
  expect((botao as HTMLButtonElement).disabled).toBe(true);
  falhar(new Error("Sem conexão"));
  await screen.findByText("Não foi possível consultar. Tente novamente.");
  mocks.obter.mockResolvedValueOnce({nomeNegocio:"Café Aurora",mensagemStatus:"Pedidos abertos.",mensagemTempo:"Tempo estimado: 47 minutos."});
  fireEvent.click(botao);
  await screen.findByText("Tempo estimado: 47 minutos.");
  expect((botao as HTMLButtonElement).disabled).toBe(false);
});

test("trocar de área usa o hash sem reconstruir o documento e atualiza o título focável", async()=>{
  render(<App/>);
  location.hash="cardapio";window.dispatchEvent(new HashChangeEvent("hashchange"));
  await waitFor(()=>expect(screen.getByRole("heading",{level:1}).textContent).toContain("Cardápio"));
  expect(document.activeElement).toBe(screen.getByRole("heading",{level:1}));
  expect(screen.getByRole("link",{name:"Cardápio"}).getAttribute("aria-current")).toBe("page");
});
