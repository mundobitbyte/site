(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));

  const g7 = gitStep(7);
  if (g7) {
    g7.content = g7.content
      .replace('abrir no domingo e divulgar um brunch', 'abrir no domingo e divulgar uma programação especial')
      .replace('echo Brunch de domingo &gt;&gt; avisos.txt', 'echo Programacao especial de domingo &gt;&gt; avisos.txt');
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

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();