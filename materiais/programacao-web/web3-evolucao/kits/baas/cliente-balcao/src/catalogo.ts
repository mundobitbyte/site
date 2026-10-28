import { doc, getDocFromServer } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { banco, armazenamento } from "./servico.js";
import { comPrazo } from "./tela.js";

const botao = document.querySelector<HTMLButtonElement>("#consultar-midia-cardapio");
botao?.addEventListener("click", async () => {
  const retorno = document.querySelector<HTMLElement>("#retorno-midia-cardapio")!;
  botao.disabled = true;
  retorno.textContent = "Conferindo a foto enviada pela equipe…";
  try {
    const documento = await comPrazo(getDocFromServer(doc(banco, "produtos", "cafe-coado")));
    if (!documento.exists()) { retorno.textContent = "Ainda não há outra foto. O cardápio conhecido foi preservado."; return; }
    const d: unknown = documento.data();
    if (typeof d !== "object" || d === null || !("imagemCaminho" in d) || typeof d.imagemCaminho !== "string" ||
        !/^imagens\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(d.imagemCaminho) ||
        !("descricao" in d) || typeof d.descricao !== "string" || d.descricao.length < 10 || d.descricao.length > 400) throw new Error("Referência de foto inválida.");
    const imagem = document.querySelector<HTMLImageElement>('[data-produto="cafe-coado"] img');
    if (!imagem) throw new Error("Aguarde o carregamento do cardápio e consulte novamente.");
    const endereco = await comPrazo(getDownloadURL(ref(armazenamento, d.imagemCaminho)));
    const anterior = imagem.src;
    imagem.onerror = () => { imagem.onerror = null; imagem.src = anterior; retorno.textContent = "A foto não carregou. A apresentação anterior foi preservada."; };
    imagem.src = endereco;
    imagem.alt = d.descricao;
    retorno.textContent = "Referência atual recebida do serviço. Confira o carregamento da foto.";
  } catch {
    retorno.textContent = "Não foi possível conferir a foto. O cardápio conhecido continua disponível.";
  } finally { botao.disabled = false; }
});
