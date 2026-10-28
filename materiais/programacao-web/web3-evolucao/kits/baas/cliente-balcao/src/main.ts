import { obterAtendimento, acompanharAtendimento } from "./dados.js";
import { elemento, apresentar, retirarAviso, comPrazo } from "./tela.js";
import "./operador.js";
import "./midia.js";
import "./catalogo.js";
import "./integracoes.js";
import "./notificacoes.js";

const botao = elemento<HTMLButtonElement>("#consultar-atendimento");
const retorno = elemento("#retorno-consulta");
let revisao = 0;
botao.addEventListener("click", async () => {
  const atual = ++revisao;
  botao.disabled = true; retirarAviso(); retorno.textContent = "Consultando o serviço…";
  try { const dados = await comPrazo(obterAtendimento()); if (atual === revisao) { apresentar(dados); retorno.textContent = "Consulta confirmada pelo serviço."; } }
  catch { if (atual === revisao) { retirarAviso(); retorno.textContent = "Não foi possível confirmar. Confira os emuladores e tente novamente."; } }
  finally { if (atual === revisao) { botao.disabled = false; botao.focus(); } }
});

let encerrar: (() => void) | undefined;
const acompanhar = document.querySelector<HTMLButtonElement>("#acompanhar");
acompanhar?.addEventListener("click", () => {
  ++revisao; botao.disabled = false;
  if (encerrar) { encerrar(); encerrar = undefined; retirarAviso(); retorno.textContent = "Acompanhamento encerrado. Consulte para confirmar novamente."; acompanhar.textContent = "Acompanhar atualizações"; return; }
  retirarAviso(); retorno.textContent = "Conectando ao acompanhamento…";
  encerrar = acompanharAtendimento(d => { apresentar(d); retorno.textContent = "Atualização confirmada pelo serviço."; }, () => { retirarAviso(); retorno.textContent = "Sem confirmação atual. A conexão pode estar indisponível."; });
  acompanhar.textContent = "Parar de acompanhar";
});
window.addEventListener("pagehide", () => encerrar?.());
