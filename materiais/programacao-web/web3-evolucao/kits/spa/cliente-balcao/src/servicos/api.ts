export interface Produto {
  id: string;
  nome: string;
  categoria: string;
  precoCentavos: number;
  imagem: string;
  alt: string;
  descricao: string;
  disponivel: boolean;
  rascunho?: string | null;
}
export interface Sessao { autenticado: boolean; csrfToken: string }
export interface Configuracao { nomeNegocio: string; pedidosAbertos: boolean; tempoEstimado: number | null }

function objeto(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export async function pedir(caminho: string, opcoes: RequestInit = {}): Promise<unknown> {
  const controlador = new AbortController();
  const limite = setTimeout(() => controlador.abort(), 8000);
  try {
    const resposta = await fetch(caminho, { ...opcoes, credentials: "same-origin", cache: "no-store", signal: controlador.signal });
    const tipo = resposta.headers.get("Content-Type");
    if (tipo === null || tipo.split(";")[0].trim().toLowerCase() !== "application/json") throw new Error("O serviço não devolveu JSON.");
    const dados: unknown = await resposta.json();
    if (!resposta.ok) throw new Error(objeto(dados) && typeof dados.erro === "string" ? dados.erro : `Falha HTTP ${resposta.status}.`);
    return dados;
  } finally { clearTimeout(limite); }
}

export async function consultarSessao(): Promise<Sessao> {
  const d = await pedir("api/sessao.php");
  if (!objeto(d) || typeof d.autenticado !== "boolean" || typeof d.csrfToken !== "string") throw new Error("Resposta de sessão inválida.");
  return { autenticado: d.autenticado, csrfToken: d.csrfToken };
}

export async function mudarSessao(sessao: Sessao, dados: { acao: "entrar" | "sair"; usuario?: string; senha?: string }): Promise<Sessao> {
  await pedir("api/sessao.php", { method: "POST", headers: { "Content-Type": "application/json", "X-CSRF-Token": sessao.csrfToken }, body: JSON.stringify(dados) });
  return consultarSessao();
}

export async function lerProdutos(): Promise<Produto[]> {
  const d = await pedir("api/cardapio.php");
  if (!objeto(d) || !Array.isArray(d.produtos)) throw new Error("Lista de produtos inválida.");
  return d.produtos.map((p: unknown) => {
    if (!objeto(p) || typeof p.id !== "string" || typeof p.nome !== "string" || typeof p.categoria !== "string" || typeof p.imagem !== "string" || typeof p.alt !== "string" || typeof p.descricao !== "string" ||
        typeof p.precoCentavos !== "number" || !Number.isSafeInteger(p.precoCentavos) || p.precoCentavos < 0 || typeof p.disponivel !== "boolean") throw new Error("Produto inválido.");
    if (typeof p.imagem !== "string" || !/^[a-zA-Z0-9_-]+\.webp$/.test(p.imagem)) throw new Error("Imagem de produto inválida.");
    if (!(p.rascunho === undefined || p.rascunho === null || typeof p.rascunho === "string")) throw new Error("Rascunho inválido.");
    return { id: p.id, nome: p.nome, categoria: p.categoria, precoCentavos: p.precoCentavos,
      imagem: p.imagem, alt: p.alt, descricao: p.descricao, disponivel: p.disponivel, rascunho: p.rascunho };
  });
}

export async function gravarProduto(sessao: Sessao, id: string, descricao: string, acao: "rascunho" | "publicar"): Promise<void> {
  await pedir("api/cardapio.php", { method: "POST", headers: { "Content-Type": "application/json", "X-CSRF-Token": sessao.csrfToken }, body: JSON.stringify({ id, descricao, acao }) });
}

export async function lerConfiguracao(): Promise<Configuracao> {
  const d = await pedir("api/configuracao-atendimento.php");
  const a = objeto(d) ? d.atendimento : null;
  if (!objeto(a) || typeof a.nomeNegocio !== "string" || typeof a.pedidosAbertos !== "boolean" ||
      !(a.tempoEstimado === null || typeof a.tempoEstimado === "number" && Number.isInteger(a.tempoEstimado))) throw new Error("Configuração inválida.");
  return { nomeNegocio: a.nomeNegocio, pedidosAbertos: a.pedidosAbertos, tempoEstimado: a.tempoEstimado };
}

export async function gravarConfiguracao(sessao: Sessao, atendimento: Configuracao): Promise<void> {
  await pedir("api/configuracao-atendimento.php", { method: "POST", headers: { "Content-Type": "application/json", "X-CSRF-Token": sessao.csrfToken }, body: JSON.stringify(atendimento) });
}
