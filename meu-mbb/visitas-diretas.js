(async function () {
  'use strict';
  const script = document.currentScript;
  if (!script) return;
  const origem = new URL(script.src);
  const pagina = decodeURIComponent(location.pathname.replace(/^\//, ''));
  let unidade;
  try {
    const resposta = await fetch(new URL('visitas-diretas.json?v=mbb-visitas-1', origem));
    if (!resposta.ok) return;
    unidade = (await resposta.json())[pagina];
  } catch (_) { return; }
  if (!unidade) return;

  function carregar(nome) {
    return new Promise((resolve, reject) => {
      const elemento = document.createElement('script');
      elemento.src = new URL(nome, origem).href;
      elemento.onload = resolve;
      elemento.onerror = reject;
      document.head.appendChild(elemento);
    });
  }
  try {
    await carregar('firebase-config.js?v=mbb-prod-1');
    await carregar('conta.js');
    const conta = window.MBBMeuConta;
    await conta.iniciar();
    if (!conta.atual()) return;
    let ultima = null;
    let fila = Promise.resolve();
    function registrar() {
      const hash = location.hash.slice(1);
      const ancora = unidade.ancoras.includes(hash) ? hash : '';
      if (ancora === ultima) return;
      fila = fila.then(async () => {
        await conta.visitar(unidade, ancora);
        ultima = ancora;
      }).catch(() => {}); // Dados indisponíveis não interrompem a página pública.
    }
    window.addEventListener('hashchange', registrar);
    window.addEventListener('popstate', registrar);
    registrar();
  } catch (_) { /* A página pública continua acessível sem Firebase. */ }
}());
