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

export function obterAtendimento(): Atendimento {
  const dados: unknown = {
    nomeNegocio: "Café Aurora",
    mensagemStatus: "Pedidos para retirada estão abertos.",
    mensagemTempo: "Tempo estimado: 30 minutos.",
  };
  return conferirAtendimento(dados);
}
