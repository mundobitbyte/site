import { useState } from "react";
import type { Produto, Sessao } from "../servicos/api.js";
import { gravarProduto } from "../servicos/api.js";
import { conferirDescricao } from "../regras.js";

export function EditorProduto({ produto, sessao, aoSalvar }: { produto: Produto; sessao: Sessao; aoSalvar: () => Promise<void> }) {
  const [texto, setTexto] = useState(produto.rascunho ?? produto.descricao);
  const [aviso, setAviso] = useState("");
  const [ocupado, setOcupado] = useState(false);
  async function salvar(acao: "rascunho" | "publicar") {
    setOcupado(true);
    try {
      const descricao = conferirDescricao(texto);
      await gravarProduto(sessao, produto.id, descricao, acao);
      setTexto(descricao);
      await aoSalvar();
      setAviso(acao === "publicar" ? "Descrição publicada após confirmação." : "Rascunho salvo. O visitante ainda vê a descrição anterior.");
    } catch (e) { setAviso(e instanceof Error ? e.message : "Não foi possível salvar."); }
    finally { setOcupado(false); }
  }
  return <section><h3>Editar {produto.nome}</h3>
    <p><label htmlFor={`descricao-${produto.id}`}>Descrição</label><textarea id={`descricao-${produto.id}`} value={texto} maxLength={400} onChange={e => setTexto(e.target.value)} /></p>
    <button disabled={ocupado} onClick={() => void salvar("rascunho")}>Salvar rascunho</button>{" "}
    <button disabled={ocupado || produto.rascunho == null || texto !== produto.rascunho} onClick={() => void salvar("publicar")}>Publicar rascunho salvo</button>{" "}
    <button disabled={ocupado} onClick={() => { setTexto(produto.rascunho ?? produto.descricao); setAviso("Edição local cancelada."); }}>Cancelar edição local</button>
    <p role="status">{aviso}</p>
  </section>;
}
