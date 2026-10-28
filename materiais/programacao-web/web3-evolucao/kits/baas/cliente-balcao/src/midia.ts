import { doc,getDocFromServer } from "firebase/firestore";
import { ref,getDownloadURL } from "firebase/storage";
import { banco,armazenamento } from "./servico.js";
import { enviarImagem } from "./imagens.js";
import { elemento,comPrazo } from "./tela.js";

const formulario = document.querySelector<HTMLFormElement>("#imagem-produto");
async function conferirImagem(): Promise<void> {
  const foto = await comPrazo(getDocFromServer(doc(banco,"produtos","cafe-coado")));
  if (!foto.exists()) return;
  const d: unknown = foto.data();
  if (typeof d !== "object" || d === null || !("imagemCaminho" in d) || typeof d.imagemCaminho !== "string" || !/^imagens\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(d.imagemCaminho)) throw new Error();
  elemento<HTMLImageElement>("#foto-produto").src = await getDownloadURL(ref(armazenamento,d.imagemCaminho));
}
document.querySelector("#consultar-imagem")?.addEventListener("click", () => { conferirImagem().catch(()=>{elemento("#retorno-imagem").textContent="Imagem não confirmada. A apresentação anterior foi preservada.";}); });
formulario?.addEventListener("submit", async evento => {
  evento.preventDefault(); const botao = formulario.querySelector<HTMLButtonElement>("button")!; botao.disabled=true;
  try {
    const arquivo=elemento<HTMLInputElement>("#arquivo-imagem").files?.[0]; if (!arquivo) throw new Error("Escolha um arquivo.");
    const descricao=elemento<HTMLInputElement>("#descricao-imagem").value.trim();
    if (descricao.length<10 || descricao.length>400) throw new Error("Escreva uma descrição de 10 a 400 caracteres.");
    await enviarImagem(arquivo,descricao); await conferirImagem(); elemento("#retorno-imagem").textContent="Arquivo e referência confirmados. Confira a imagem.";
  } catch { elemento("#retorno-imagem").textContent="Envio não confirmado. Confira a permissão, o formato, o tamanho e a conexão."; }
  finally { botao.disabled=false; }
});
