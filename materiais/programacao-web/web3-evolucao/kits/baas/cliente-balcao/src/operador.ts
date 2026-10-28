import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc,getDocFromServer } from "firebase/firestore";
import { auth,banco } from "./servico.js";
import { alterarAtendimento } from "./dados.js";
import { conferirConfiguracao } from "./atendimento.js";
import { elemento,comPrazo } from "./tela.js";

const login = document.querySelector<HTMLFormElement>("#entrar");
const formulario = document.querySelector<HTMLFormElement>("#alterar");
const retorno = document.querySelector<HTMLElement>("#retorno-operador");
login?.addEventListener("submit", async evento => {
  evento.preventDefault(); const botao = login.querySelector<HTMLButtonElement>("button")!; botao.disabled = true;
  try {
    await signInWithEmailAndPassword(auth,elemento<HTMLInputElement>("#email").value,elemento<HTMLInputElement>("#senha").value);
    elemento<HTMLInputElement>("#senha").value = "";
    if (retorno) retorno.textContent = "Identidade reconhecida. A permissão será conferida pelo serviço.";
  } catch { if (retorno) retorno.textContent = "Entrada não confirmada. Confira os dados e o emulador de identidade."; }
  finally { botao.disabled = false; }
});
document.querySelector("#sair")?.addEventListener("click", async () => {
  try { await signOut(auth); if (retorno) retorno.textContent = "Você saiu do Café."; }
  catch { if (retorno) retorno.textContent = "Não foi possível confirmar a saída."; }
});
onAuthStateChanged(auth, async usuario => {
  const identidade = document.querySelector("#identidade");
  if (identidade) identidade.textContent = usuario ? `Identidade: ${usuario.email}.` : "Visitante: consulta pública disponível.";
  const campos = formulario?.querySelector<HTMLFieldSetElement>("fieldset");
  if (campos) campos.disabled = true;
  const sessao = usuario?.uid;
  if (!usuario || !formulario) return;
  try {
    const token = await usuario.getIdTokenResult();
    if (token.claims.operador !== true) { if (retorno) retorno.textContent = "Sua identidade permite consultar, mas não alterar."; return; }
    const foto = await comPrazo(getDocFromServer(doc(banco,"atendimento","atual")));
    if (auth.currentUser?.uid !== sessao) return;
    const d = conferirConfiguracao(foto.data());
    elemento<HTMLInputElement>("#nome").value = d.nomeNegocio;
    elemento<HTMLSelectElement>("#aberto").value = d.pedidosAbertos ? "1" : "0";
    elemento<HTMLInputElement>("#minutos").value = d.tempoEstimado === null ? "" : String(d.tempoEstimado);
    if (campos) campos.disabled = false;
  } catch { if (retorno) retorno.textContent = "Configuração não confirmada. Entre novamente ou confira o serviço."; }
});
formulario?.addEventListener("submit", async evento => {
  evento.preventDefault(); const botao = formulario.querySelector<HTMLButtonElement>("button")!; botao.disabled = true;
  const minutos = elemento<HTMLInputElement>("#minutos").value.trim();
  try {
    const dados = conferirConfiguracao({ nomeNegocio: elemento<HTMLInputElement>("#nome").value.trim(),pedidosAbertos:elemento<HTMLSelectElement>("#aberto").value === "1",tempoEstimado:minutos === "" ? null : Number(minutos) });
    if (retorno) retorno.textContent = "Aguardando confirmação da gravação…";
    await alterarAtendimento(dados);
    if (retorno) retorno.textContent = "Alteração confirmada. Consulte a outra tela para conferir.";
  } catch { if (retorno) retorno.textContent = "Alteração não confirmada. Confira os campos, a permissão e a conexão antes de tentar novamente."; }
  finally { botao.disabled = false; }
});
