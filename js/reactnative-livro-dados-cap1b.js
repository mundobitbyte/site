// Entrada de compatibilidade já referenciada por pages/reactnative.html.
// Carrega a reconstrução do módulo 0. Fundamentos no padrão MbB e a integra ao renderer existente.
(function () {
  const script = document.createElement('script');
  script.src = '../js/reactnative-fundamentos-mbb-20260925.js?v=20260926-5';
  script.async = false;
  script.onload = () => {
    if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

    // Preserva a captura inicial em sua resolução útil, sem ampliação artificial.
    if (!document.getElementById('mbb-fundamentos-imagens-fonte')) {
      const style = document.createElement('style');
      style.id = 'mbb-fundamentos-imagens-fonte';
      style.textContent = '.mbb-fund-figure--inicio img{width:auto;max-width:100%;margin-left:auto;margin-right:auto}';
      document.head.appendChild(style);
    }

    // As novas etapas usam HTML didático próprio e, por isso, entram no fluxo customPage
    // já suportado pelo módulo React Native.
    modules.fundamentosMobile.steps.forEach(step => {
      step.customPage = true;
    });

    const botao = document.getElementById('module-fundamentosMobile');
    if (botao && botao.classList.contains('active')) botao.click();
  };
  document.head.appendChild(script);
})();