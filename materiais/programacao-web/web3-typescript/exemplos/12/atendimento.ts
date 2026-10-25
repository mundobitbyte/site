export interface Atendimento {
  nome: string;
  tempoEstimado: number;
}

export function obterAtendimento(): Atendimento {
  return { nome: "Café Aurora", tempoEstimado: 55 };
}
