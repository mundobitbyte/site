import type { Produto } from "../servicos/api.js";
import { filtrarProdutos } from "../regras.js";

interface Props { produtos: Produto[]; busca: string; categoria: string; aoBuscar: (v: string) => void; aoCategorizar: (v: string) => void }

export function Cardapio({ produtos, busca, categoria, aoBuscar, aoCategorizar }: Props) {
  const filtrados = filtrarProdutos(produtos, busca, categoria);
  return <section aria-labelledby="titulo-cardapio"><h2 id="titulo-cardapio">Cardápio do Café</h2>
    <p><label htmlFor="busca">Buscar produto</label><input id="busca" value={busca} onChange={e => aoBuscar(e.target.value)} /></p>
    <p><label htmlFor="categoria">Categoria</label><select id="categoria" value={categoria} onChange={e => aoCategorizar(e.target.value)}>
      <option value="todas">Todas</option><option value="bebida">Bebidas</option><option value="comida">Comidas</option>
    </select></p>
    <p role="status">{filtrados.length} produto(s) encontrado(s).</p>
    <div className="produtos">{filtrados.map(p => <article key={p.id}>
      <img src={`img/${p.imagem}`} alt={p.alt} width="240" height="160" />
      <h3>{p.nome}</h3><p>{p.descricao}</p>
      <p>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(p.precoCentavos / 100)}</p>
      {!p.disponivel && <p>Indisponível neste momento.</p>}
    </article>)}</div>
  </section>;
}
