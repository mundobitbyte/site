// Etapa 3 do padrão MbB — React e Hooks.
// Destaca ações práticas sem alterar códigos, previews ou arquitetura.
// Setas/círculos só são usados quando existe captura com alvo inequívoco;
// este módulo trabalha majoritariamente com previews gerados, então não cria marcações artificiais.
(() => {
  const STYLE_ID = 'mbb-react-hooks-acoes-praticas-style';
  const MAX_TRIES = 240;
  let tries = 0;

  const actionBox = (acao, contexto = '') => `
    <div class="mbb-react-hooks-action">
      <strong>Faça agora</strong>
      <span>${acao}</span>
    </div>
    ${contexto ? `<div class="mbb-react-hooks-note-context"><strong>Observe:</strong> ${contexto}</div>` : ''}
  `;

  const apply = () => {
    tries += 1;

    if (typeof modules === 'undefined' || !modules.state || !Array.isArray(modules.state.steps)) {
      if (tries < MAX_TRIES) setTimeout(apply, 50);
      return;
    }

    const react = modules.state;

    const actions = new Map([
      ['mbb-react-jsx', '<b>Altere</b> os valores de <code>nome</code> e <code>pontos</code> e <b>confira no preview</b> onde essas mudanças aparecem no JSX.'],
      ['mbb-react-componente-titulo', '<b>Troque o texto dentro de <code>Titulo</code></b> e confira onde a mudança aparece. Se quiser praticar imports, siga a extensão de dois arquivos na explicação.'],
      ['mbb-react-cartao-fixo', '<b>Altere</b> a cidade e a temperatura fixas dentro de <code>CartaoClima</code> e <b>observe o preview</b>.'],
      ['mbb-react-props', '<b>No Snack, abra o console e toque em Consultar em cada cartão.</b> Confira o nome registrado. Troque só a temperatura de Campinas e confira que somente esse cartão muda na tela.'],
      ['state-7-state', '<b>Acrescente <code>&lt;Text&gt;Nota digitada: {nota1}&lt;/Text&gt;</code> abaixo da Nota 1.</b> Digite notas diferentes no primeiro campo e confira a mudança no segundo texto.'],
      ['state-8-eventos', '<b>No Snack, toque em Calcular e depois em Limpar.</b> Compare as mensagens que identificam as duas funções chamadas.'],
      ['state-9-calculo', '<b>No Snack, teste</b> 6 e 6, depois 5,5 e 6. Confira a situação em cada caso. Por fim, deixe uma nota vazia e observe a mensagem.'],
      ['state-10-limpar', '<b>No Snack, calcule e toque em Limpar.</b> Confira se as notas e os valores do resultado somem. Repita depois de provocar um erro de entrada. O retorno do foco entra na etapa 27.'],
      ['mbb-react-condicional', '<b>No Snack, abra o app e procure a área do resultado.</b> Calcule com 0 e 0 e depois com 6 e 6. Compare os estilos. Toque em Limpar e confira se a área some.'],
      ['mbb-react-map', '<b>Adicione mais uma cidade</b> ao array e <b>confira no preview</b> se um novo cartão é criado pelo <code>map()</code>.'],
      ['mbb-react-key', '<b>Anote “visitar” no cartão de Campinas e inverta a ordem.</b> Com ID, a anotação acompanha a cidade. Troque para <code>key={indice}</code>, reinicie o exemplo, repita o teste e restaure <code>key={item.id}</code>.'],
      ['mbb-react-scrollview', '<b>Role até Ribeirão Preto.</b> Depois aumente <code>paddingHorizontal</code> em <code>styles.conteudo</code>. Compare o recuo das cidades e a altura que você enxerga.'],
      ['mbb-react-flatlist', '<b>Adicione um novo item</b> ao array <code>cidades</code> e <b>confira</b> se a <code>FlatList</code> passa a exibi-lo.'],
      ['mbb-react-pressable', '<b>Toque no cartão inteiro.</b> Confira se aparece Temperatura: 26 °C. Toque outra vez e verifique se o detalhe some.'],
      ['mbb-react-pressed', '<b>Pressione e segure Campinas.</b> Observe a opacidade enquanto mantém o toque. Solte e confira a cor e o texto Cidade selecionada. Toque outra vez para desmarcar.'],
      ['state-11-useref', '<b>Na prévia interativa, calcule, volte à Nota 2 e toque em Limpar.</b> Confira os dois campos vazios e o resultado oculto. Digite em seguida para verificar o foco na Nota 1. Repita com 6 e 6, com 0 e 0 e com uma nota vazia. Depois faça os mesmos ciclos com o App.js no Snack.'],
      ['mbb-react-ref-avancar', '<b>No Snack, digite na Nota 1 e pressione Enter ou a tecla de ação disponível.</b> Digite um número e confira se entra na Nota 2. Repita usando Ir para Nota 2 para comparar os dois gatilhos.'],
      ['state-12-final', '<b>Na prévia interativa, digite as notas, calcule e toque em Limpar.</b> Digite de novo e confira se o valor entra na Nota 1. Repita com o App.js no Snack.'],
      ['mbb-effect-timer', '<b>Execute o exemplo.</b> Preveja o valor após três disparos do intervalo e acompanhe as batidas. Ao avançar para a etapa 32, recarregue o preview do Snack para encerrar o intervalo deste exemplo.'],
      ['mbb-effect-cleanup', '<b>Espere uma batida e toque em Ocultar temporizador.</b> Confira se a última mensagem é Cleanup de 1000 ms.'],
      ['mbb-effect-ciclo', '<b>Oculte e mostre o temporizador.</b> Confira se aparecem cleanup e novo setup, nessa ordem, e se o contador recomeça em zero.'],
      ['mbb-effect-dependencias', '<b>Toque em Contador à parte e confira o registro.</b> Depois toque em Trocar frequência e confira a ordem Cleanup de 1000 ms → Setup de 500 ms.'],
      ['mbb-effect-strict', '<b>Toque em Mostrar temporizador e observe o registro em desenvolvimento.</b> Se aparecer a sequência extra, confira se as batidas crescem de uma em uma. Oculte e confira o último cleanup.'],
      ['mbb-effect-api-ponte', '<b>Execute a consulta.</b> Depois, troque BTC-BRL por ZZZ-BRL na URL para provocar uma falha e observar a mensagem de erro. Restaure BTC-BRL e repita a consulta.']
    ]);

    const addAction = (step, acao) => {
      if (!step || step.modulePage || step.exercisePage || !acao) return;
      const original = typeof step.note === 'string' ? step.note : '';
      if (original.includes('mbb-react-hooks-action')) return;
      step.note = actionBox(acao, original);
    };

    react.steps.forEach(step => {
      if (!step) return;
      const id = String(step.id ?? '');

      if (actions.has(id)) {
        addAction(step, actions.get(id));
        return;
      }

      // Para laboratórios com código que não exigem instrução específica,
      // usa uma ação neutra e segura, sem inventar comportamento.
      if (typeof step.code === 'string' && step.code.trim() && !step.exercisePage) {
        addAction(
          step,
          '<b>Atualize o App.js</b> com o código desta etapa e <b>observe o preview</b> para identificar exatamente o efeito do recurso estudado.'
        );
      }
    });

    const exercise = react.steps.find(step => step?.id === 'exercicios-state' || step?.exercisePage);
    if (exercise && typeof exercise.html === 'string') {
      // Mantém o conteúdo aprovado e destaca visualmente apenas os pontos de execução.
      exercise.html = exercise.html
        .replace(/<strong>Faça:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Faça:</strong>')
        .replace(/<strong>Construa:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Construa:</strong>')
        .replace(/<strong>Teste:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Teste:</strong>')
        .replace(/<strong>Desafio:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Desafio:</strong>')
        .replace(/<strong>Implemente:<\/strong>/g, '<strong class="mbb-react-hooks-exercise-label">Implemente:</strong>');
    }

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = `
        .note:has(.mbb-react-hooks-action)>strong:first-child{display:none}
        .mbb-react-hooks-action{display:grid;gap:5px;margin:0 0 10px;padding:11px 12px;border:1px solid #cfe7d4;border-radius:10px;background:#f2fbf4;color:#24422c}
        .mbb-react-hooks-action>strong{color:#176b34}
        .mbb-react-hooks-action b{font-weight:800;color:#123b73}
        .mbb-react-hooks-action code{font-weight:700}
        .mbb-react-hooks-note-context{margin-top:6px;color:#475569}
        .mbb-react-hooks-note-context>strong{color:#475569}
        .mbb-react-hooks-exercise-label{font-weight:800!important;color:#123b73!important}
        .exercise-clean p:has(.mbb-react-hooks-exercise-label),
        .exercise-clean li:has(.mbb-react-hooks-exercise-label){padding:8px 10px;border-left:4px solid #1967d2;border-radius:8px;background:#f8fbff}
      `;
      document.head.appendChild(style);
    }

    if (typeof currentModuleKey !== 'undefined' && currentModuleKey === 'state' && typeof showStep === 'function') {
      const active = document.querySelector('#menu .nav-btn.active');
      const activeId = active?.dataset?.step;
      if (activeId != null) showStep(activeId);
    }
  };

  apply();
})();

// Encadeia a Etapa 4 sem alterar a estrutura principal da página.
(() => {
  if (document.querySelector('script[data-mbb-api-actions]')) return;
  const script = document.createElement('script');
  script.src = '../js/reactnative-api-acoes-praticas-20260926.js?v=20260926-1';
  script.dataset.mbbApiActions = 'true';
  script.async = false;
  document.body.appendChild(script);
})();
