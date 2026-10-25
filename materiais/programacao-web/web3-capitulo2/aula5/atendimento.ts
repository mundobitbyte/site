export interface Atendimento {
  nomeNegocio: string;
  mensagemStatus: string;
  mensagemTempo: string;
}

export function conferirAtendimento(dados: unknown): Atendimento {
  if (typeof dados !== "object" || dados === null || Array.isArray(dados)) {
    throw new Error("A resposta precisa ser um objeto.");
  }
  if (!("nomeNegocio" in dados) || typeof dados.nomeNegocio !== "string" || dados.nomeNegocio.trim() === "") {
    throw new Error("Nome do negócio ausente ou inválido.");
  }
  if (!("mensagemStatus" in dados) || typeof dados.mensagemStatus !== "string" || dados.mensagemStatus.trim() === "") {
    throw new Error("Mensagem de situação ausente ou inválida.");
  }
  if (!("mensagemTempo" in dados) || typeof dados.mensagemTempo !== "string" || dados.mensagemTempo.trim() === "") {
    throw new Error("Mensagem de prazo ausente ou inválida.");
  }
  return {
    nomeNegocio: dados.nomeNegocio,
    mensagemStatus: dados.mensagemStatus,
    mensagemTempo: dados.mensagemTempo,
  };
}

export async function obterAtendimento(): Promise<Atendimento> {
  const resposta = await fetch("api/atendimento.php", { cache: "no-store" });
  if (!resposta.ok) {
    throw new Error(`A consulta respondeu HTTP ${resposta.status}.`);
  }
  const tipo = resposta.headers.get("Content-Type");
  if (tipo === null || tipo.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new Error("A resposta não foi identificada como JSON.");
  }
  const dados: unknown = await resposta.json();
  return conferirAtendimento(dados);
}
