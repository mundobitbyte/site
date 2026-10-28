import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { armazenamento, banco, auth } from "./servico.js";

export async function enviarImagem(arquivo: File, descricao: string): Promise<string> {
  const usuario = auth.currentUser;
  if (!usuario) throw new Error("Entre como operador para enviar imagem.");
  if (!["image/png", "image/jpeg", "image/webp"].includes(arquivo.type) || arquivo.size === 0 || arquivo.size > 2 * 1024 * 1024) throw new Error("Escolha PNG, JPEG ou WebP de até 2 MiB.");
  const caminho = `imagens/${usuario.uid}/${crypto.randomUUID()}`;
  const objeto = ref(armazenamento, caminho);
  await uploadBytes(objeto, arquivo, { contentType: arquivo.type });
  try {
    await setDoc(doc(banco, "produtos", "cafe-coado"), { nome: "Café coado", descricao, imagemCaminho: caminho });
  } catch (erro) {
    await deleteObject(objeto).catch(() => {});
    throw erro;
  }
  return getDownloadURL(objeto);
}
