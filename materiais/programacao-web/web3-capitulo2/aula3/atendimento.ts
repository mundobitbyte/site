export interface Atendimento {
  nomeNegocio: string;
  mensagemStatus: string;
  mensagemTempo: string;
}

export function obterAtendimento(): Atendimento {
  return {
    nomeNegocio: "Café Aurora",
    mensagemStatus: "Pedidos para retirada estão abertos.",
    mensagemTempo: "Tempo estimado: 30 minutos.",
  };
}

