// Ajustes finais do módulo Navegação entre Telas.
// Mantém a estrutura aprovada e atua apenas em textos visíveis e consistência visual dos blocos de código.

if (typeof modules !== 'undefined' && modules.navegacao) {
  const navModule = modules.navegacao;
  const navStep = id => navModule.steps.find(step => step.id === id);

  const intro = navStep('nav-intro');
  if (intro) {
    intro.objective = 'Entender por que separar funcionalidades em telas e preparar o projeto para executar a navegação no Snack.';
    intro.lead = 'Busca CEP, cotação do dólar e clima são funcionalidades úteis. Em vez de manter três projetos separados, a Central de Consultas reúne uma tela inicial e uma tela para cada serviço.';
    intro.highlight = 'Este módulo pode ser iniciado com um Snack novo. Os códigos necessários aparecem completos nas próprias etapas, mesmo quando retomam funcionalidades estudadas anteriormente.';
    intro.boxes = [
      ['Problema', 'Um único App.js com muitas responsabilidades começa a ficar difícil de ler e manter.'],
      ['Primeira navegação', 'Comece com apenas duas telas no App.js para entender Stack.Screen e navigate().'],
      ['Organização', 'Depois, separe as telas na pasta screens para deixar o projeto mais fácil de manter.'],
      ['Código disponível', 'CEP, dólar e clima aparecem novamente em versões completas quando forem necessários.'],
      ['Fluxo', 'Início → escolher serviço → abrir tela → voltar.'],
      ['Resultado esperado', 'Snack vazio + dependências + arquivos indicados = aplicativo funcionando.'],
    ];
  }

  const primeiroApp = navStep('nav-primeiro-app');
  if (primeiroApp) {
    primeiroApp.added = `Nesta etapa, as duas telas ficam no mesmo App.js. Assim, você observa primeiro o funcionamento da navegação sem acrescentar a organização em vários arquivos.

NavigationContainer
-> envolve a navegação do aplicativo.

createNativeStackNavigator()
-> cria o navegador em pilha.

Stack.Screen
-> registra cada tela.

navigation.navigate('BuscaCep')
-> abre a tela registrada com esse nome.`;
    primeiroApp.note = 'Com apenas duas telas no mesmo arquivo, fica mais fácil identificar o papel de NavigationContainer, Stack.Screen e navigate(). A separação em arquivos vem na etapa seguinte.';
  }

  const inicio = navStep('nav-criar-inicio');
  if (inicio) {
    inicio.added = `1. Crie a pasta screens.
2. Dentro dela, crie Inicio.js.
3. Cole o código completo desta etapa.
4. Não altere o App.js ainda.

Mantenha o App.js atual por enquanto. Assim, o aplicativo continua executável enquanto os novos arquivos são criados.`;
    if (typeof inicio.preview === 'string') {
      inicio.preview = inicio.preview.replace('Ainda não mudamos App.js.', 'O App.js permanece sem alterações nesta etapa.');
    }
  }

  const dolar = navStep('nav-dolar');
  if (dolar && typeof dolar.html === 'string') {
    dolar.html = dolar.html
      .replace('Espiral MbB: repetir o mesmo ciclo com uma nova tela', 'Repetindo o mesmo ciclo com uma nova tela')
      .replace(
        'Agora você já conhece o ciclo. Primeiro criamos a tela, depois registramos no Stack e só então colocamos o botão na tela inicial. Assim o projeto permanece executável durante a alteração.',
        'Agora você já conhece o ciclo. Primeiro crie a tela, depois registre-a no Stack e só então adicione o botão na tela inicial. Essa ordem mantém o projeto executável durante a alteração.'
      );
  }

  const projetoFinal = navStep('nav-projeto-final');
  if (projetoFinal && typeof projetoFinal.html === 'string') {
    projetoFinal.title = '10 — Projeto completo: arquivos para copiar e recuperar';
    projetoFinal.html = projetoFinal.html
      .replace('Checkpoint operacional', 'Ponto de recuperação')
      .replace('<strong>Teste MbB:</strong>', '<strong>Teste de recuperação:</strong>');
  }

  function markDarkCodePanels(html = '') {
    const template = document.createElement('template');
    template.innerHTML = String(html).trim();

    template.content.querySelectorAll('pre[id^="nav-code-"]').forEach(pre => {
      const panel = pre.closest('.panel.brief');
      if (panel) panel.classList.add('nav-code-dark');
    });

    return template.innerHTML;
  }

  ['nav-dolar', 'nav-clima', 'nav-projeto-final'].forEach(id => {
    const step = navStep(id);
    if (step && typeof step.html === 'string') {
      step.html = markDarkCodePanels(step.html);
    }
  });

  if (!document.getElementById('nav-code-dark-style')) {
    const style = document.createElement('style');
    style.id = 'nav-code-dark-style';
    style.textContent = `
      .nav-code-dark {
        background: var(--code-bg) !important;
        color: var(--code-text) !important;
        border-color: #333 !important;
        overflow: hidden !important;
      }

      .nav-code-dark .panel-title {
        background: var(--code-head) !important;
        color: #e5e7eb !important;
        border-bottom: 1px solid rgba(255,255,255,.12) !important;
      }

      .nav-code-dark .panel-body {
        background: var(--code-bg) !important;
        padding: 0 !important;
      }

      .nav-code-dark pre {
        background: var(--code-bg) !important;
        color: var(--code-text) !important;
        margin: 0 !important;
        padding: 16px 18px !important;
        white-space: pre !important;
        overflow: auto !important;
      }

      .nav-code-dark .btn-copy {
        background: #444 !important;
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
  }

  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();
  if (
    typeof showStep === 'function' &&
    typeof currentModuleKey !== 'undefined' &&
    currentModuleKey === 'navegacao'
  ) {
    const first = navModule.steps[0];
    if (first) showStep(first.id);
  }
}
