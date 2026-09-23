(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));

  const g4 = gitStep(4);
  if (g4 && !g4.content.includes('Executou git init na pasta errada?')) {
    g4.content = g4.content.replace(
      '<pre class="command">git init</pre>',
      `<pre class="command">git init</pre>
        <div class="note-box"><strong>Executou git init na pasta errada?</strong> Não apague a pasta <span class="inline-code">.git</span> deste projeto. Existe um procedimento específico de recuperação para esse caso. Vá em <strong>Comandos → Diagnóstico</strong> e consulte <strong>“RECUPERAÇÃO — Executei git init na pasta errada”</strong>.</div>`
    );
  }

  if (typeof modules !== 'undefined' && modules.comandos) {
    const diagnostic = modules.comandos.steps.find(step => String(step.id) === 'diagnostico');
    if (diagnostic && !diagnostic.content.includes('RECUPERAÇÃO — Executei git init na pasta errada')) {
      diagnostic.content += `
        <h3>RECUPERAÇÃO — Executei git init na pasta errada</h3>
        <div class="danger-box"><strong>NÃO execute os comandos abaixo se site-cafe-aurora for o seu repositório correto.</strong> Esta recuperação serve exclusivamente para o caso em que <span class="inline-code">git init</span> foi executado por engano em outra pasta.</div>
        <p>Exemplo de erro:</p>
        <pre class="command-ref-code"><code>C:\\Users\\lenovo&gt;git init</code></pre>
        <p>Nesse exemplo, <span class="inline-code">C:\\Users\\lenovo</span> virou um repositório por engano. É essa pasta errada que deve ser corrigida — <strong>não</strong> o projeto <span class="inline-code">site-cafe-aurora</span>.</p>
        <div class="command-ref-card">
          <div class="command-ref-head">
            <span class="cmd-status cmd-ready">1. Confira a raiz</span>
            <button class="command-copy-btn" type="button" data-rede-copy="git rev-parse --show-toplevel">Copiar</button>
          </div>
          <pre class="command-ref-code"><code>git rev-parse --show-toplevel</code></pre>
          <div class="command-ref-body"><p>Mostra qual pasta o Git considera a raiz do repositório. Confira o caminho com atenção antes de continuar.</p></div>
        </div>
        <div class="command-ref-card">
          <div class="command-ref-head">
            <span class="cmd-status cmd-ready">2. Confira .git</span>
            <button class="command-copy-btn" type="button" data-rede-copy="dir /a">Copiar</button>
          </div>
          <pre class="command-ref-code"><code>dir /a</code></pre>
          <div class="command-ref-body"><p>Confirme que a pasta errada contém <span class="inline-code">.git</span>.</p></div>
        </div>
        <div class="danger-box"><strong>PARE E CONFIRA.</strong> O caminho mostrado é realmente a pasta que virou repositório por engano? Se aparecer <span class="inline-code">site-cafe-aurora</span>, <strong>não continue</strong>.</div>
        <div class="command-ref-card">
          <div class="command-ref-head">
            <span class="cmd-status cmd-edit">⚠ Apaga o histórico Git local</span>
            <button class="command-copy-btn" type="button" data-rede-copy="rmdir /s /q .git">Copiar</button>
          </div>
          <pre class="command-ref-code"><code>rmdir /s /q .git</code></pre>
          <div class="command-ref-body">
            <p><strong>Execute somente na pasta criada como repositório por engano.</strong> O comando remove a pasta interna <span class="inline-code">.git</span>. Os arquivos comuns permanecem, mas o histórico Git local, branches locais, área de preparação e configuração de remoto guardados ali são apagados.</p>
            <p class="command-ref-note">Este é um comando do CMD do Windows, não um comando do Git.</p>
          </div>
        </div>
        <div class="command-ref-card">
          <div class="command-ref-head">
            <span class="cmd-status cmd-ready">3. Confira o resultado</span>
            <button class="command-copy-btn" type="button" data-rede-copy="git status">Copiar</button>
          </div>
          <pre class="command-ref-code"><code>git status</code></pre>
          <div class="command-ref-body"><p>Nessa pasta corrigida, uma mensagem como <span class="inline-code">fatal: not a git repository</span> é o resultado esperado.</p></div>
        </div>
        <div class="note-box"><strong>Um repositório existente no GitHub não é apagado por esse procedimento.</strong> A remoção afeta somente a pasta <span class="inline-code">.git</span> daquela cópia local em que o comando foi executado.</div>`;
    }

    const checkpoint = modules.comandos.steps.find(step => String(step.id) === 'checkpoint');
    if (checkpoint && !checkpoint.content.includes('Se você executou git init na pasta errada')) {
      checkpoint.content += `
        <div class="note-box"><strong>Se você executou git init na pasta errada:</strong> pare o checkpoint. Não remova <span class="inline-code">.git</span> enquanto segue a sequência normal. Vá em <strong>Comandos → Diagnóstico</strong> e use a recuperação específica somente para a pasta criada como repositório por engano.</div>`;
    }
  }

  const hash = location.hash.match(/^#(git|github|exercicios|comandos)-(.+)$/);
  if (hash) setModule(hash[1], decodeURIComponent(hash[2]), false);
})();
