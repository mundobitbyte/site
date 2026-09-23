(() => {
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));
  const redeBase = String.raw`\\10.66.53.1\Publica\mtec2025\nome.sobrenome\meus-repositorios`;

  const e1 = exerciseStep('e1');
  if (e1) {
    e1.content = `
      <div class="task-box"><h4><span class="exercise-number">1</span>Desafio</h4>
      <p>Use o <strong>mesmo local-base que você escolheu no Café Aurora</strong>: usuário local ou sua pasta na rede. Dentro de <span class="inline-code">meus-repositorios</span>, crie <span class="inline-code">feira-criativa</span>, entre nela e confirme o local.</p></div>
      <details class="answer-box"><summary>Conferir uma possível resposta</summary><div class="answer-content">
        <p><strong>Se você trabalha no usuário local:</strong></p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios"
mkdir feira-criativa
cd feira-criativa
cd
dir</pre>
        <p><strong>Se você trabalha na rede:</strong></p>
        <pre class="command">pushd ${redeBase}
mkdir feira-criativa
cd feira-criativa
cd
dir</pre>
        <p>Na rede, substitua <span class="inline-code">nome.sobrenome</span> pelo nome da sua pasta.</p>
      </div></details>`;
  }

  const e17 = exerciseStep('e17');
  if (e17) {
    e17.content = `
      <div class="task-box"><h4><span class="exercise-number">17</span>Desafio</h4><p>Na cópia clonada, acrescente <strong>Contato: feira@exemplo.com</strong>, faça commit e push. Depois volte à cópia original e apenas confira <span class="inline-code">evento.txt</span>, sem usar fetch ou pull ainda.</p></div>
      <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content">
        <p><strong>Na cópia clonada:</strong></p>
        <pre class="command">git status
git pull
echo Contato: feira@exemplo.com &gt;&gt; evento.txt
git diff
git add evento.txt
git commit -m "Adiciona contato da feira"
git push</pre>
        <p><strong>Volte à cópia original.</strong> Se ela estiver no usuário local:</p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\feira-criativa"</pre>
        <p>Se ela estiver na rede:</p>
        <pre class="command">pushd ${redeBase}\\feira-criativa</pre>
        <p>Então apenas confira:</p>
        <pre class="command">type evento.txt
git status</pre>
        <p>O contato ainda não deve aparecer na cópia original.</p>
      </div></details>`;
  }

  const hash = location.hash.match(/^#(git|github|exercicios|comandos)-(.+)$/);
  if (hash) setModule(hash[1], decodeURIComponent(hash[2]), false);
})();