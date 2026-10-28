import { doc, getDocFromServer } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { banco, armazenamento } from "./servico.js";
import { comPrazo } from "./tela.js";
import { aplicarProdutoConfirmado } from "./catalogo-interface.js";

const botao = document.querySelector<HTMLButtonElement>("#consultar-midia-cardapio");
botao?.addEventListener("click", async () => {
  const retorno = document.querySelector<HTMLElement>("#retorno-midia-cardapio")!;
  botao.disabled = true;
  retorno.textContent = "Conferindo a atualização enviada pela equipe…";
  try {
    const documento = await comPrazo(getDocFromServer(doc(banco, "produtos", "cafe-coado")));
    if (!documento.exists()) { retorno.textContent = "Ainda não há outra foto. O cardápio conhecido foi preservado."; return; }
    const d: unknown = documento.data();
    if (typeof d !== "object" || d === null || !("imagemCaminho" in d) || typeof d.imagemCaminho !== "string" ||
        !/^imagens\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(d.imagemCaminho) ||
        !("descricao" in d) || typeof d.descricao !== "string" || d.descricao.length < 10 || d.descricao.length > 400 ||
        !("nome" in d) || typeof d.nome !== "string" || d.nome.trim().length === 0 || d.nome.length > 100) throw new Error("Referência de produto inválida.");
    const endereco = await comPrazo(getDownloadURL(ref(armazenamento, d.imagemCaminho)));
    aplicarProdutoConfirmado({nome:d.nome,descricao:d.descricao,enderecoImagem:endereco});
  } catch {
    retorno.textContent = "Não foi possível conferir a foto. O cardápio conhecido continua disponível.";
  } finally { botao.disabled = false; }
});
