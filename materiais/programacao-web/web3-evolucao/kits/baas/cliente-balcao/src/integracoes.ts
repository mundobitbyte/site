import { httpsCallable } from "firebase/functions";
import { doc,updateDoc } from "firebase/firestore";
import { funcoes,banco } from "./servico.js";
import { conferirConfiguracao } from "./atendimento.js";
import { elemento } from "./tela.js";

document.querySelector("#alterar-por-funcao")?.addEventListener("click", async () => {
  const retorno=elemento("#retorno-funcao");
  try {
    const minutos=elemento<HTMLInputElement>("#minutos").value;
    const dados=conferirConfiguracao({nomeNegocio:elemento<HTMLInputElement>("#nome").value,pedidosAbertos:elemento<HTMLSelectElement>("#aberto").value==='1',tempoEstimado:minutos.trim()===''?null:Number(minutos)});
    await httpsCallable(funcoes,"alterarAtendimentoSeguro")(dados);
    retorno.textContent="Função confirmou a alteração. Confira a consulta e o histórico do emulador.";
  } catch { retorno.textContent="A função não confirmou a alteração. Confira identidade, dados e logs."; }
});

let rascunho: string | null=null;
const gerar=document.querySelector<HTMLFormElement>("#pedir-rascunho");
gerar?.addEventListener("submit", async evento => {
  evento.preventDefault();rascunho=null;const botao=gerar.querySelector<HTMLButtonElement>("button")!;botao.disabled=true;
  const retorno=elemento("#retorno-rascunho");retorno.textContent="Solicitando rascunho…";
  try {
    const resposta=await httpsCallable(funcoes,"prepararRascunho")({produto:elemento<HTMLInputElement>("#produto-rascunho").value,ingredientes:elemento<HTMLInputElement>("#ingredientes").value});
    const d: unknown=resposta.data;
    if(typeof d!=="object"||d===null||!("texto" in d)||typeof d.texto!=="string"||d.texto.length<10||d.texto.length>400||!("origem" in d)||typeof d.origem!=="string")throw new Error();
    rascunho=d.texto;elemento<HTMLTextAreaElement>("#revisao-rascunho").value=d.texto;
    retorno.textContent=d.origem==='resposta-controlada'?"Resposta controlada do exercício — não houve chamada a IA. Revise o texto antes de decidir.":"Rascunho recebido de IA local. Confira fatos, ingredientes e linguagem antes de decidir.";
  } catch { retorno.textContent="Nenhum rascunho foi confirmado. O produto não foi alterado."; }
  finally { botao.disabled=false; }
});
document.querySelector("#cancelar-rascunho")?.addEventListener("click",()=>{rascunho=null;elemento<HTMLTextAreaElement>("#revisao-rascunho").value="";elemento("#retorno-rascunho").textContent="Rascunho descartado. Nenhum produto foi alterado.";});
document.querySelector("#publicar-rascunho")?.addEventListener("click",async()=>{
  const retorno=elemento("#retorno-rascunho");
  const revisado=elemento<HTMLTextAreaElement>("#revisao-rascunho").value.trim();
  if(rascunho===null||revisado.length<10||revisado.length>400){retorno.textContent="Prepare e revise um texto de 10 a 400 caracteres.";return;}
  try {await updateDoc(doc(banco,"produtos","cafe-coado"),{descricao:revisado});rascunho=null;retorno.textContent="Descrição revisada publicada por sua ação. Confira o produto.";}
  catch {retorno.textContent="Publicação não confirmada. Confira se o produto existe e se sua identidade possui permissão.";}
});
