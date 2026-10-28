/* Escolha local de navegação; conclusão e registros continuam no Meu MbB existente. */
(() => {
  "use strict";
  if (!document.querySelector(".web3-evolucao")) return;
  const chave = "mbb:web3:percurso:v1";
  const opcoes = [...document.querySelectorAll("[data-escolher-percurso]")];
  const retorno = document.getElementById("percurso-status");
  const retomar = document.getElementById("retomar-percurso");
  let atual = "";
  try { atual = localStorage.getItem(chave) || ""; } catch (_) {}
  const escolhido = opcoes.find(a => a.dataset.escolherPercurso === atual);
  if (escolhido && retomar) { retomar.href = escolhido.href; retomar.hidden = false; }
  opcoes.forEach(a => a.addEventListener("click", () => {
    try { localStorage.setItem(chave, a.dataset.escolherPercurso); }
    catch (_) { if (retorno) retorno.textContent = "Seu navegador não guardou a escolha. Você pode seguir pelo link normalmente."; }
  }));
  function titulo() { document.title = document.body.dataset.moduleTitle + " | Mundo bit Byte"; }
  // O módulo global organiza capítulos; aqui cada página já tem um título próprio.
  titulo();
  window.addEventListener("load", titulo);
  window.addEventListener("hashchange", titulo);
  window.addEventListener("popstate", titulo);
})();
