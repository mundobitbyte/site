import { obterAtendimento } from "./atendimento.js";
import type { Atendimento } from "./atendimento.js";

const nome = document.querySelector("#nome-negocio");
const situacao = document.querySelector("#mensagem-status");
const tempo = document.querySelector("#mensagem-tempo");
const botao = document.querySelector("#atualizar-atendimento");
const aviso = document.querySelector("#aviso-consulta");

if (!(nome instanceof HTMLElement) || !(situacao instanceof HTMLElement) ||
    !(tempo instanceof HTMLElement) || !(botao instanceof HTMLButtonElement) ||
    !(aviso instanceof HTMLElement)) {
  throw new Error("Confira os elementos do balcão no HTML.");
}

const apresentar = (atendimento: Atendimento) => {
  nome.textContent = atendimento.nomeNegocio;
  situacao.textContent = atendimento.mensagemStatus;
  tempo.textContent = atendimento.mensagemTempo;
};

botao.disabled = false;
botao.textContent = "Conferir apresentação";
aviso.textContent = "Ensaio local: este botão ainda não consulta o PHP.";

botao.addEventListener("click", () => {
  try {
    apresentar(obterAtendimento());
    aviso.textContent = "Ensaio local conferido; ainda não houve consulta ao servidor.";
  } catch (erro) {
    situacao.textContent = "";
    tempo.textContent = "";
    aviso.textContent = "O ensaio recebeu dados inválidos. Confira sua tentativa.";
    console.error(erro);
  }
});
