export interface Configuracao { nomeNegocio: string; pedidosAbertos: boolean; tempoEstimado: number | null }
export function conferir(d: unknown): Configuracao {
  if (typeof d !== "object" || d === null || Array.isArray(d)) throw new Error("Configuração inválida.");
  const p = d as Record<string, unknown>;
  if (Object.keys(p).length !== 3 || typeof p.nomeNegocio !== "string" || p.nomeNegocio.trim() === "" || p.nomeNegocio.length > 100 ||
      typeof p.pedidosAbertos !== "boolean" || !(p.tempoEstimado === null || typeof p.tempoEstimado === "number" && Number.isInteger(p.tempoEstimado) && p.tempoEstimado >= 0 && p.tempoEstimado <= 240)) throw new Error("Confira nome, situação e prazo.");
  return { nomeNegocio: p.nomeNegocio.trim(), pedidosAbertos: p.pedidosAbertos, tempoEstimado: p.tempoEstimado };
}
export function mudou(a: Configuracao, b: Configuracao): boolean {
  return a.nomeNegocio !== b.nomeNegocio || a.pedidosAbertos !== b.pedidosAbertos || a.tempoEstimado !== b.tempoEstimado;
}
export function conferirPedido(d: unknown): { produto: string; ingredientes: string } {
  if (typeof d !== "object" || d === null || !("produto" in d) || !("ingredientes" in d) || typeof d.produto !== "string" || typeof d.ingredientes !== "string" ||
      d.produto.trim().length < 2 || d.produto.length > 100 || d.ingredientes.length < 3 || d.ingredientes.length > 300) throw new Error("Informe produto e ingredientes conhecidos, sem dados pessoais.");
  return { produto: d.produto.trim(), ingredientes: d.ingredientes.trim() };
}
export function conferirRascunho(texto: unknown): string {
  if (typeof texto !== "string" || texto.trim().length < 10 || texto.length > 400) throw new Error("Rascunho fora dos limites. Revise a resposta do serviço.");
  return texto.trim();
}
