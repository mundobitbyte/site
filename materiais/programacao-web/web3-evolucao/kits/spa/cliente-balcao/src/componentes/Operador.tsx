import { useEffect, useState } from "react";
import type { Configuracao, Produto, Sessao } from "../servicos/api.js";
import { gravarConfiguracao, lerConfiguracao, mudarSessao } from "../servicos/api.js";
import { EditorProduto } from "./EditorProduto.js";

interface Props { sessao: Sessao; aoMudarSessao: (s: Sessao) => void; produtos: Produto[]; aoRecarregarProdutos: (preservar?: boolean) => Promise<void> }

export function Operador({ sessao, aoMudarSessao, produtos, aoRecarregarProdutos }: Props) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [config, setConfig] = useState<Configuracao | null>(null);
  const [prazo, setPrazo] = useState("");
  const [aviso, setAviso] = useState("");
  const [ocupado, setOcupado] = useState(false);
  useEffect(() => {
    let ativo = true;
    if (!sessao.autenticado) { setConfig(null); return; }
    void lerConfiguracao().then(d => {
      if (ativo) { setConfig(d); setPrazo(d.tempoEstimado === null ? "" : String(d.tempoEstimado)); }
    }).catch(() => { if (ativo) setAviso("Não foi possível consultar a configuração. Atualize sua sessão."); });
    return () => { ativo = false; };
  }, [sessao.autenticado]);

  async function entrar(evento: React.FormEvent) {
    evento.preventDefault(); setOcupado(true);
    try {
      const atual = await mudarSessao(sessao, { acao: "entrar", usuario, senha });
      setSenha(""); aoMudarSessao(atual); setAviso("Sessão confirmada pelo servidor.");
      await aoRecarregarProdutos();
    } catch (e) { setAviso(e instanceof Error ? e.message : "Falha no acesso."); }
    finally { setOcupado(false); }
  }
  async function salvar(evento: React.FormEvent) {
    evento.preventDefault(); if (!config) return; setOcupado(true);
    try {
      if (prazo !== "" && !/^(0|[1-9][0-9]{0,2})$/.test(prazo)) throw new Error("Informe minutos inteiros ou deixe vazio.");
      const minutos = prazo === "" ? null : Number(prazo);
      if (minutos !== null && minutos > 240) throw new Error("O limite combinado neste formulário é 240 minutos.");
      await gravarConfiguracao(sessao, { ...config, tempoEstimado: minutos });
      setAviso("Aviso salvo no servidor. Consulte o balcão para conferir.");
    } catch (e) { setAviso(e instanceof Error ? e.message : "Não foi possível salvar."); }
    finally { setOcupado(false); }
  }
  async function sair() {
    setOcupado(true);
    try {
      aoMudarSessao(await mudarSessao(sessao, { acao: "sair" }));
      setConfig(null); setAviso("Você saiu da área de edição.");
      await aoRecarregarProdutos();
    } catch { setAviso("Não foi possível sair. Tente novamente."); }
    finally { setOcupado(false); }
  }
  return <section><h2>Área do operador</h2>
    {!sessao.autenticado ? <form onSubmit={e => void entrar(e)}>
      <p><label htmlFor="usuario">Usuário local</label><input id="usuario" value={usuario} autoComplete="username" required onChange={e => setUsuario(e.target.value)} /></p>
      <p><label htmlFor="senha">Senha</label><input id="senha" type="password" value={senha} autoComplete="current-password" required onChange={e => setSenha(e.target.value)} /></p>
      <button disabled={ocupado || !sessao.csrfToken}>Entrar</button>
    </form> : <>
      <button disabled={ocupado} onClick={() => void sair()}>Sair da edição</button>
      {config && <form onSubmit={e => void salvar(e)}>
        <p><label htmlFor="nome-cafe">Nome do Café</label><input id="nome-cafe" value={config.nomeNegocio} maxLength={100} required onChange={e => setConfig({ ...config, nomeNegocio: e.target.value })} /></p>
        <p><label htmlFor="pedidos">Situação dos pedidos</label><select id="pedidos" value={config.pedidosAbertos ? "aberto" : "encerrado"} onChange={e => setConfig({ ...config, pedidosAbertos: e.target.value === "aberto" })}><option value="aberto">Abertos</option><option value="encerrado">Encerrados</option></select></p>
        <p><label htmlFor="prazo">Minutos para retirada</label><input id="prazo" type="number" min="0" max="240" step="1" value={prazo} onChange={e => setPrazo(e.target.value)} aria-describedby="ajuda-prazo" /><span id="ajuda-prazo">Vazio significa que a equipe ainda não informou a estimativa.</span></p>
        <button disabled={ocupado}>Salvar aviso</button>
      </form>}
      {produtos.map(p => <EditorProduto key={p.id} produto={p} sessao={sessao} aoSalvar={() => aoRecarregarProdutos(true)} />)}
    </>}
    <p role="status">{aviso}</p>
  </section>;
}
