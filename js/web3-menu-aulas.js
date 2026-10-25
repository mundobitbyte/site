/* Menu das páginas de aula: reutiliza o diálogo e o visual já usados no TypeScript. */
(() => {
  "use strict";
  if (!document.querySelector(".web3-cap2")) return;
  const menu = document.getElementById("ts-topic-menu");
  const drawer = document.getElementById("ts-topics-dialog");
  const holder = document.getElementById("ts-dialog-menu");
  const toggle = document.getElementById("ts-menu-toggle");
  const close = document.getElementById("ts-menu-close");
  const toolbar = document.querySelector(".ts-mobile-tools");
  const layout = document.querySelector(".web-layout");
  const content = document.getElementById("conteudo");
  const levels = document.querySelector(".level-menu");
  const small = matchMedia("(max-width: 1050px)");
  if (!menu || !drawer || !toggle || typeof drawer.showModal !== "function") return;
  function fechar() { if (drawer.open) drawer.close(); }
  function ajustar() {
    fechar();
    (small.matches ? holder : layout).insertBefore(menu, small.matches ? null : content);
    toolbar.hidden = !small.matches;
    document.body.style.setProperty("--ts-level-height", levels.getBoundingClientRect().height + "px");
  }
  toggle.addEventListener("click", () => {
    drawer.showModal();
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("ts-drawer-open");
    menu.querySelector('[aria-current="page"]')?.focus();
  });
  close.addEventListener("click", fechar);
  drawer.addEventListener("close", () => {
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("ts-drawer-open");
  });
  drawer.addEventListener("click", event => { if (event.target === drawer) fechar(); });
  drawer.addEventListener("keydown", event => {
    if (event.key !== "Tab") return;
    const itens = [...drawer.querySelectorAll('button, a[href]')];
    const destino = event.shiftKey && event.target === itens[0] ? itens.at(-1)
      : !event.shiftKey && event.target === itens.at(-1) ? itens[0] : null;
    if (destino) { event.preventDefault(); destino.focus(); }
  });
  small.addEventListener("change", ajustar);
  if (typeof ResizeObserver === "function") new ResizeObserver(() =>
    document.body.style.setProperty("--ts-level-height", levels.getBoundingClientRect().height + "px")
  ).observe(levels);
  ajustar();
})();

