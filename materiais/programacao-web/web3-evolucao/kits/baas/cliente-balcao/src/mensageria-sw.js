import { initializeApp } from "firebase/app";
import { getMessaging,onBackgroundMessage } from "firebase/messaging/sw";
import { modo,configuracao } from "./ambiente.ts";
if (modo === "nuvem") {
  const mensageria = getMessaging(initializeApp(configuracao));
  onBackgroundMessage(mensageria, async mensagem => {
    const d = mensagem.data;
    if (!d || typeof d.title !== "string" || typeof d.body !== "string") return;
    await self.registration.showNotification(d.title.slice(0,100), { body: d.body.slice(0,300), tag: "atendimento-cafe", data: { url: "/balcao.html" } });
  });
  self.addEventListener("notificationclick", evento => {
    evento.notification.close();
    evento.waitUntil(self.clients.openWindow(new URL("/balcao.html",self.location.origin).href));
  });
}
