import { doc, getDocFromServer, onSnapshot, updateDoc } from "firebase/firestore";
import { banco } from "./servico.js";
import { conferirConfiguracao, prepararMensagens } from "./atendimento.js";
import type { Atendimento, Configuracao } from "./atendimento.js";

const referencia = doc(banco, "atendimento", "atual");
export async function obterAtendimento(): Promise<Atendimento> {
  const foto = await getDocFromServer(referencia);
  if (foto.metadata.hasPendingWrites) throw new Error("Aguardando confirmação do serviço.");
  if (!foto.exists()) throw new Error("Prepare o atendimento do exercício.");
  return prepararMensagens(conferirConfiguracao(foto.data()));
}

export async function alterarAtendimento(dados: Configuracao): Promise<void> {
  await updateDoc(referencia, { ...conferirConfiguracao(dados) });
}

export function acompanharAtendimento(apresentar: (dados: Atendimento) => void, falhar: () => void): () => void {
  return onSnapshot(referencia, { includeMetadataChanges: true }, foto => {
    if (foto.metadata.fromCache || foto.metadata.hasPendingWrites) { falhar(); return; }
    try { apresentar(prepararMensagens(conferirConfiguracao(foto.data()))); }
    catch { falhar(); }
  }, falhar);
}
