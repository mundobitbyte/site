export interface Configuracao { nomeNegocio: string; pedidosAbertos: boolean; tempoEstimado: number | null }
export interface Atendimento { nomeNegocio: string; mensagemStatus: string; mensagemTempo: string }

export function conferirConfiguracao(dados: unknown): Configuracao {
  if (typeof dados !== "object" || dados === null || Array.isArray(dados)) throw new Error("Resposta inválida.");
  if (!("nomeNegocio" in dados) || typeof dados.nomeNegocio !== "string" || dados.nomeNegocio.trim() === "" || dados.nomeNegocio.length > 100 ||
      !("pedidosAbertos" in dados) || typeof dados.pedidosAbertos !== "boolean" || !("tempoEstimado" in dados) ||
      !(dados.tempoEstimado === null || typeof dados.tempoEstimado === "number" && Number.isInteger(dados.tempoEstimado) && dados.tempoEstimado >= 0 && dados.tempoEstimado <= 240)) throw new Error("Confira o nome, a situação e o prazo.");
  return { nomeNegocio: dados.nomeNegocio, pedidosAbertos: dados.pedidosAbertos, tempoEstimado: dados.tempoEstimado };
}

export function prepararMensagens(dados: Configuracao): Atendimento {
  const mensagemStatus = dados.pedidosAbertos ? "Pedidos para retirada estão abertos." : "Pedidos para retirada estão encerrados.";
  const mensagemTempo = !dados.pedidosAbertos ? "Consulte novamente durante o horário de atendimento."
    : dados.tempoEstimado === null ? "Consulte a equipe para saber o prazo de retirada." : `Tempo estimado: ${dados.tempoEstimado} minutos.`;
  return { nomeNegocio: dados.nomeNegocio, mensagemStatus, mensagemTempo };
}
