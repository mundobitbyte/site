// Ajuste cirúrgico: usa no tópico Salvar a captura nítida original do Capítulo 1 do livro.
(function () {
  if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

  const salvar = (modules.fundamentosMobile.steps || []).find(
    step => step.id === 'fund-salvar-retomar-mbb'
  );

  if (!salvar || typeof salvar.html !== 'string') return;

  salvar.html = salvar.html.replace(
    '../img/reactnative/fundamentos/snack-menu-avatar-nitido.webp',
    '../img/reactnative/fundamentos/snack-menu-avatar-livro-cap1.webp?v=20260926-2'
  );
})();
