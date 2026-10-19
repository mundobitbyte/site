/* Somente o novo percurso: seções continuam acessíveis por âncora nativa. */
document.addEventListener('DOMContentLoaded', () => {
  const layout = document.getElementById('arduinoLayout');
  const toggle = document.getElementById('stageToggle');
  const backdrop = document.getElementById('stageBackdrop');
  const links = [...document.querySelectorAll('#stageMenu a[href^="#"]')];
  function fechar() { layout.classList.remove('drawer-open'); backdrop.hidden = true; toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => {
    const abrir = !layout.classList.contains('drawer-open');
    layout.classList.toggle('drawer-open', abrir); backdrop.hidden = !abrir; toggle.setAttribute('aria-expanded', String(abrir));
  });
  document.getElementById('stageClose').addEventListener('click', fechar);
  backdrop.addEventListener('click', fechar);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });
  function marcar(id) { links.forEach(a => { const ativo = a.hash === '#' + id; a.classList.toggle('active', ativo); if (ativo) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current'); }); }
  links.forEach(a => a.addEventListener('click', fechar));
  function hash() { const id = location.hash.slice(1); if (/^etapa-[1-8]$/.test(id)) marcar(id); }
  window.addEventListener('hashchange', hash); hash();
  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) marcar(e.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('section[id^="etapa-"]').forEach(s => observador.observe(s));
  }
});
