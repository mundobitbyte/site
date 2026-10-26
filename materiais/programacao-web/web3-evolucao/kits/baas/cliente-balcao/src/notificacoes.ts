import { isSupported,getMessaging,getToken,deleteToken } from "firebase/messaging";
import { doc,setDoc,deleteDoc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { app,auth,banco,funcoes } from "./servico.js";
import { modo,chaveVapid } from "./ambiente.js";
import { elemento } from "./tela.js";

document.querySelector("#permitir-avisos")?.addEventListener("click",async()=>{
  const retorno=elemento("#retorno-avisos");
  if(modo!=="nuvem"||!chaveVapid){retorno.textContent="O envio real não é emulado. Use um ambiente HTTPS de mensageria aprovado para esta etapa.";return;}
  if(!auth.currentUser){retorno.textContent="Entre antes de inscrever este navegador.";return;}
  try{
    if(!(await isSupported())){retorno.textContent="Navegador sem suporte à mensageria. A consulta do Café continua disponível.";return;}
    const permissao=await Notification.requestPermission();
    if(permissao!=="granted"){retorno.textContent="Avisos não autorizados. Você pode continuar consultando o Café.";return;}
    const registro=await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    await navigator.serviceWorker.ready;
    const token=await getToken(getMessaging(app),{vapidKey:chaveVapid,serviceWorkerRegistration:registro});
    if(!token)throw new Error();
    await setDoc(doc(banco,"inscricoes",auth.currentUser.uid),{token});
    retorno.textContent="Navegador inscrito. Isso ainda não comprova envio ou recebimento.";
  }catch{retorno.textContent="Inscrição não confirmada. A consulta do Café continua disponível.";}
});
document.querySelector("#enviar-aviso")?.addEventListener("click",async()=>{
  try{await httpsCallable(funcoes,"enviarAviso",{timeout:20000})({});elemento("#retorno-avisos").textContent="Serviço aceitou o envio para este operador. Confira separadamente a chegada ao navegador.";}
  catch{elemento("#retorno-avisos").textContent="Envio real não confirmado. Confira o ambiente, a inscrição e a permissão.";}
});
document.querySelector("#revogar-avisos")?.addEventListener("click",async()=>{
  try{
    if(auth.currentUser)await deleteDoc(doc(banco,"inscricoes",auth.currentUser.uid));
    if(modo==="nuvem"&&await isSupported())await deleteToken(getMessaging(app));
    elemento("#retorno-avisos").textContent="Inscrição removida para esta identidade. A permissão do navegador pode ser revista nas configurações do site.";
  }catch{elemento("#retorno-avisos").textContent="Remoção não confirmada. Tente novamente.";}
});
