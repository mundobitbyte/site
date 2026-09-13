(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const g7 = gitStep(7);
  if (g7) {
    g7.content = g7.content
      .replace('abrir no domingo e divulgar um brunch', 'abrir no domingo e divulgar uma programação especial')
      .replace('echo Brunch de domingo &gt;&gt; avisos.txt', 'echo Programacao especial de domingo &gt;&gt; avisos.txt');
  }

  const g9 = gitStep(9);
  if (g9) {
    g9.content = g9.content.replace(
      '<p>Escolha no histórico um commit anterior e use:</p>',
      '<p>Escolha no histórico um commit em que <span class="inline-code">avisos.txt</span> já exista, como <strong>Adiciona aviso de musica ao vivo</strong>. Assim os dois arquivos usados na conferência estarão presentes naquele momento:</p>'
    );
  }

  const gh1 = githubStep(1);
  if (gh1) {
    const decisionRegex = /<h3>Onde o projeto nasceu\?<\/h3>[\s\S]*?<div class="danger-box"><strong>Evite criar dois históricos independentes sem necessidade\.<\/strong> Se o projeto local já tem commits, não inicialize o remoto com README, licença ou \.gitignore antes do primeiro push\.<\/div>/;
    const decision = gh1.content.match(decisionRegex);
    if (decision) {
      gh1.content = gh1.content.replace(decisionRegex, '');
      gh1.content = gh1.content.replace(
        '<h3>3. Crie um repositório remoto vazio</h3>',
        `${decision[0]}\n        <h3>3. Crie um repositório remoto vazio</h3>`
      );
    }
  }

  const gh8 = githubStep(8);
  if (gh8 && !gh8.content.includes('computador/cópia original')) {
    gh8.content = gh8.content
      .replace(
        `<h3>1. Confira e publique a branch de teste</h3>
        <pre class="command">git branch\ngit switch teste-reservas\ngit status\ngit push -u origin teste-reservas</pre>
        <p>Agora a branch existe também no GitHub. O <span class="inline-code">-u</span> cria o acompanhamento entre a branch local e a branch remota de mesmo nome.</p>`,
        `<h3>1. Volte à cópia em que a branch foi criada</h3>
        <p>Se você simulou ou usou um segundo computador nas etapas anteriores, volte agora ao <strong>computador/cópia original</strong>. Foi ali que <span class="inline-code">teste-reservas</span> nasceu antes de o GitHub entrar na história.</p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\site-cafe-aurora"\ngit status\ngit branch</pre>
        <p>Se estiver realmente em outra máquina, execute os próximos passos no computador original. A branch de teste ainda é local e, por isso, não aparece automaticamente em uma cópia criada por <span class="inline-code">git clone</span>.</p>
        <h3>2. Publique a branch de teste</h3>
        <pre class="command">git switch teste-reservas\ngit status\ngit push -u origin teste-reservas</pre>
        <p>Agora a branch existe também no GitHub. O <span class="inline-code">-u</span> cria o acompanhamento entre a branch local e a branch remota de mesmo nome.</p>`
      )
      .replace('<h3>2. Volte para a principal</h3>', '<h3>3. Volte para a principal</h3>')
      .replace('<h3>3. Conheça o fetch: atualizar informações sem incorporar</h3>', '<h3>4. Conheça o fetch: atualizar informações sem incorporar</h3>')
      .replace('<h3>4. Marina aprovou o teste</h3>', '<h3>5. Marina aprovou o teste</h3>')
      .replace('<h3>5. Encerre a branch de teste</h3>', '<h3>6. Encerre a branch de teste</h3>');
  }

  if (gh8) {
    gh8.content = gh8.content.replace(
      `<h3>4. Conheça o fetch: atualizar informações sem incorporar</h3>
        <pre class="command">git fetch\ngit branch -a</pre>
        <p><span class="inline-code">git fetch</span> atualiza no seu computador as informações conhecidas sobre o remoto. Ele <strong>não troca os arquivos da branch atual</strong> nem incorpora automaticamente os novos commits nela.</p>`,
      `<h3>4. Conheça o fetch: descobrir novidades sem incorporá-las</h3>
        <p>A cópia original ficou parada enquanto a segunda cópia enviou o horário para retirada de pedidos. Antes de receber essa mudança, observe o arquivo e o estado atual:</p>
        <pre class="command">type avisos.txt\ngit status\ngit fetch\ngit status\ntype avisos.txt\ngit branch -a</pre>
        <p>Depois do <span class="inline-code">fetch</span>, o Git já conhece as novidades do remoto e pode informar que a branch local está atrás da remota. Porém <strong>avisos.txt continua igual</strong>: fetch não incorpora automaticamente os commits na branch atual.</p>`
    );
  }

  const fixExerciseBadge = (id, number) => {
    const step = exerciseStep(id);
    if (!step) return;
    step.content = step.content.replace(
      /<span class="exercise-number">\d+<\/span>/,
      `<span class="exercise-number">${number}</span>`
    );
  };

  fixExerciseBadge('e10', 10);
  fixExerciseBadge('e11', 11);
  fixExerciseBadge('e12', 12);
  fixExerciseBadge('e13', 13);
  fixExerciseBadge('e14', 14);
  fixExerciseBadge('e15-branch-remota', 15);
  fixExerciseBadge('e16', 16);

  const e10 = exerciseStep('e10');
  if (e10) {
    e10.content = e10.content.replace(
      '<h3>Antes de conferir a resposta</h3>',
      '<h3>Entenda por que o remoto começa vazio</h3>'
    );
    const conceptRegex = /<h3>Entenda por que o remoto começa vazio<\/h3>\s*<div class="example-box">[\s\S]*?<\/div>/;
    const concept = e10.content.match(conceptRegex);
    if (concept && e10.content.includes('<h3>Checklist</h3>')) {
      e10.content = e10.content.replace(conceptRegex, '');
      e10.content = e10.content.replace('<h3>Checklist</h3>', `${concept[0]}\n        <h3>Checklist</h3>`);
    }
  }

  const e15 = exerciseStep('e15-branch-remota');
  if (e15 && !e15.content.includes('Continue na cópia original')) {
    e15.content = e15.content.replace(
      'A branch <span class="inline-code">teste-divulgacao</span> ainda existe localmente.',
      'Continue na <strong>cópia original</strong>, onde a branch foi criada. A branch <span class="inline-code">teste-divulgacao</span> ainda existe localmente.'
    );
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();