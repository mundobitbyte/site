import type { Atendimento as Dados } from "../atendimento.js";

interface Props { dados: Dados | null; consultando: boolean; aviso: string; aoConsultar: () => void }

export function Atendimento({ dados, consultando, aviso, aoConsultar }: Props) {
  return <section aria-labelledby="titulo-atendimento">
    <h2 id="titulo-atendimento">Atendimento no balcão</h2>
    {dados && <><h3>{dados.nomeNegocio}</h3><p>{dados.mensagemStatus}</p><p>{dados.mensagemTempo}</p></>}
    <button type="button" disabled={consultando} onClick={aoConsultar}>Atualizar atendimento</button>
    <p role="status">{aviso}</p>
  </section>;
}
