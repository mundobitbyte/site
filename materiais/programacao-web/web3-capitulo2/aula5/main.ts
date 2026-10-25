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
botao.textContent = "Atualizar atendimento";
aviso.textContent = "Informação recebida ao abrir a página. Você pode consultar novamente.";

botao.addEventListener("click", async () => {
  if (botao.disabled) return;
  const devolverFoco = document.activeElement === botao;
  botao.disabled = true;
  situacao.textContent = "";
  tempo.textContent = "";
  aviso.textContent = "Consultando o atendimento…";
  try {
    const atendimento = await obterAtendimento();
    apresentar(atendimento);
    aviso.textContent = "Atendimento consultado agora.";
  } catch (erro) {
    situacao.textContent = "";
    tempo.textContent = "";
    aviso.textContent = "Não foi possível consultar. Tente novamente.";
    console.error(erro);
  } finally {
    botao.disabled = false;
    if (devolverFoco && document.activeElement === document.body) {
      botao.focus({ preventScroll: true });
    }
  }
});
