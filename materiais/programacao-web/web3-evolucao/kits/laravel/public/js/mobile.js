const consultar = document.querySelector("#consultar");
const retorno = document.querySelector("#retorno");
consultar.addEventListener("click", async () => {
  consultar.disabled = true;
  retorno.textContent = "Consultando…";
  try {
    const resposta = await fetch("/api/atendimento", { signal: AbortSignal.timeout(8000) });
    const dados = await resposta.json();
    if (!resposta.ok || !dados || ["nomeNegocio", "mensagemStatus", "mensagemTempo"].some(c => typeof dados[c] !== "string")) throw new Error();
    retorno.textContent = `${dados.nomeNegocio}. ${dados.mensagemStatus} ${dados.mensagemTempo}`;
  } catch { retorno.textContent = "Não foi possível confirmar o atendimento. Tente novamente."; }
  finally { consultar.disabled = false; consultar.focus(); }
});
document.querySelector("#compartilhar").addEventListener("click", async () => {
  const texto = document.querySelector("#compartilhamento");
  const url = new URL("cardapio.php", location.href).href;
  if (!navigator.share) { texto.textContent = "Este navegador não oferece compartilhamento nativo. Use o link abaixo."; return; }
  try { await navigator.share({ title: "Café Aurora", url }); texto.textContent = "Solicitação de compartilhamento concluída. Isso não comprova leitura pelo destinatário."; }
  catch (e) { texto.textContent = e.name === "AbortError" ? "Compartilhamento cancelado." : "Compartilhamento indisponível. Use o link abaixo."; }
});
