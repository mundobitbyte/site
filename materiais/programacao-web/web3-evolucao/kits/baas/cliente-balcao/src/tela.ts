import type { Atendimento } from "./atendimento.js";
export function elemento<T extends HTMLElement>(seletor: string): T {
  const encontrado = document.querySelector<T>(seletor);
  if (!encontrado) throw new Error(`Confira o elemento ${seletor} no HTML.`);
  return encontrado;
}
export function apresentar(d: Atendimento): void {
  elemento("#nome-negocio").textContent = d.nomeNegocio;
  elemento("#mensagem-status").textContent = d.mensagemStatus;
  elemento("#mensagem-tempo").textContent = d.mensagemTempo;
}
export function retirarAviso(): void {
  elemento("#mensagem-status").textContent = "Atendimento ainda não confirmado.";
  elemento("#mensagem-tempo").textContent = "";
}
export async function comPrazo<T>(operacao: Promise<T>): Promise<T> {
  let limite: ReturnType<typeof setTimeout> | undefined;
  try { return await Promise.race([operacao,new Promise<never>((_,recusar)=>{limite=setTimeout(()=>recusar(new Error("Consulta indisponível.")),8000);})]); }
  finally { clearTimeout(limite); }
}
