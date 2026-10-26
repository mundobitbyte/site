import { useEffect, useRef, useState } from "react";
import { obterAtendimento } from "./atendimento.js";
import type { Atendimento as Dados } from "./atendimento.js";
import { Atendimento } from "./componentes/Atendimento.js";
import { Cardapio } from "./componentes/Cardapio.js";
import { Operador } from "./componentes/Operador.js";
import { consultarSessao, lerProdutos } from "./servicos/api.js";
import type { Produto, Sessao } from "./servicos/api.js";

const rotas = ["atendimento", "cardapio", "operador"];
function rotaAtual(): string {
  const hash = location.hash.slice(1);
  return rotas.includes(hash) ? hash : "atendimento";
}

export function App() {
  const [rota, setRota] = useState(rotaAtual);
  const [dados, setDados] = useState<Dados | null>(null);
  const [consultando, setConsultando] = useState(false);
  const [aviso, setAviso] = useState("Consulte o atendimento para receber o aviso atual.");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [avisoProdutos, setAvisoProdutos] = useState("");
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [sessao, setSessao] = useState<Sessao>({ autenticado: false, csrfToken: "" });
  const consultaAtiva = useRef(false);
  const ordemProdutos = useRef(0);

  async function consultar() {
    if (consultaAtiva.current) return;
    const foco = document.activeElement;
    consultaAtiva.current = true; setConsultando(true); setDados(null); setAviso("Consultando o atendimento…");
    try { setDados(await obterAtendimento()); setAviso("Atendimento consultado agora."); }
    catch { setAviso("Não foi possível consultar. Tente novamente."); }
    finally {
      consultaAtiva.current = false; setConsultando(false);
      requestAnimationFrame(() => { if (foco instanceof HTMLButtonElement && document.activeElement === document.body) foco.focus({ preventScroll: true }); });
    }
  }

  async function carregarProdutos() {
    const ordem = ++ordemProdutos.current;
    setProdutos([]); setAvisoProdutos("Consultando o cardápio…");
    try {
      const recebidos = await lerProdutos();
      if (ordem === ordemProdutos.current) { setProdutos(recebidos); setAvisoProdutos(""); }
    } catch { if (ordem === ordemProdutos.current) setAvisoProdutos("Não foi possível consultar o cardápio. Tente novamente."); }
  }

  useEffect(() => {
    function mudar() { setRota(rotaAtual()); }
    window.addEventListener("hashchange", mudar);
    void consultarSessao().then(setSessao).catch(() => setAvisoProdutos("Sessão indisponível. A consulta pública continua acessível."));
    return () => window.removeEventListener("hashchange", mudar);
  }, []);
  useEffect(() => {
    document.getElementById("titulo-rota")?.focus({ preventScroll: true });
    if (rota !== "atendimento") void carregarProdutos();
  }, [rota]);

  return <>
    <h1 id="titulo-rota" tabIndex={-1}>Café Aurora · {rota === "cardapio" ? "Cardápio" : rota === "operador" ? "Operador" : "Balcão"}</h1>
    <nav aria-label="Áreas do Café"><a href="#atendimento" aria-current={rota === "atendimento" ? "page" : undefined}>Atendimento</a>{" · "}<a href="#cardapio" aria-current={rota === "cardapio" ? "page" : undefined}>Cardápio</a>{" · "}<a href="#operador" aria-current={rota === "operador" ? "page" : undefined}>Operador</a></nav>
    {rota === "atendimento" && <Atendimento dados={dados} consultando={consultando} aviso={aviso} aoConsultar={() => void consultar()} />}
    {rota === "cardapio" && <><button onClick={() => void carregarProdutos()}>Consultar cardápio</button><p role="status">{avisoProdutos}</p><Cardapio produtos={produtos} busca={busca} categoria={categoria} aoBuscar={setBusca} aoCategorizar={setCategoria} /></>}
    {rota === "operador" && <><p role="status">{avisoProdutos}</p><Operador sessao={sessao} aoMudarSessao={setSessao} produtos={produtos} aoRecarregarProdutos={carregarProdutos} /></>}
  </>;
}
