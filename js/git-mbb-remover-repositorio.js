(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));

  const secaoRemocao = `
        <h3>Como remover o controle Git de uma pasta</h3>
        <p>Se você executou <span class="inline-code">git init</span> na pasta errada, não existe um comando <span class="inline-code">git deinit</span>. Em um repositório comum criado com <span class="inline-code">git init</span>, o controle Git fica armazenado na pasta interna <span class="inline-code">.git</span>.</p>
        <p>Antes de apagar qualquer coisa, descubra qual pasta o Git considera a raiz do repositório:</p>
        <pre class="command">git rev-parse --show-toplevel</pre>
        <p>Confira cuidadosamente o caminho mostrado. Entre exatamente nessa pasta e confirme que existe uma pasta <span class="inline-code">.git</span>:</p>
        <pre class="command">dir /a</pre>
        <p><strong>Somente se tiver certeza de que aquele repositório foi criado por engano</strong>, no Git CMD/CMD do Windows execute:</p>
        <pre class="command">rmdir /s /q .git</pre>
        <p><span class="inline-code">rmdir</span> remove uma pasta; <span class="inline-code">/s</span> remove também todo o conteúdo interno; <span class="inline-code">/q</span> executa sem pedir confirmação; <span class="inline-code">.git</span> é onde ficam os metadados do repositório.</p>
        <div class="danger-box"><strong>Atenção:</strong> esse comando mantém os arquivos comuns da pasta, mas apaga o histórico Git local, branches locais, configuração de remoto, área de preparação e demais informações guardadas em <span class="inline-code">.git</span>. Se esse histórico existir apenas nesse computador, ele será perdido.</div>
        <p>Depois, confira:</p>
        <pre class="command">git status</pre>
        <p>Se aparecer uma mensagem parecida com <span class="inline-code">fatal: not a git repository</span>, isso é o resultado esperado: aquela pasta voltou a ser uma pasta comum.</p>
        <div class="note-box"><strong>Se houver um repositório no GitHub, ele não é apagado.</strong> O comando remove apenas o controle Git daquela cópia local. Não use <span class="inline-code">rmdir /s /q .git</span> dentro de um projeto que você realmente quer continuar versionando.</div>`;

  const g4 = gitStep(4);
  if (g4 && !g4.content.includes('Como remover o controle Git de uma pasta')) {
    const marcador = '<div class="concept-box"><strong>A ordem correta é:</strong> escolher local ou rede → entrar na pasta-base → criar/entrar em <span class="inline-code">site-cafe-aurora</span> → conferir o caminho → <span class="inline-code">git init</span> → <span class="inline-code">git status</span> → somente se necessário, corrigir <span class="inline-code">safe.directory</span>.</div>';

    if (g4.content.includes(marcador)) {
      g4.content = g4.content.replace(marcador, `${marcador}${secaoRemocao}`);
    } else {
      // Fallback intencional: não depender de um texto exato de outro overlay.
      g4.content += secaoRemocao;
    }
  }

  if (typeof modules !== 'undefined' && modules.comandos) {
    const cmdStep = modules.comandos.steps.find(step => String(step.id) === 'cmd');
    if (cmdStep && !cmdStep.content.includes('Remover o controle Git de uma pasta')) {
      cmdStep.content += `
        <h3>Remover o controle Git de uma pasta</h3>
        <div class="note-box"><strong>Use apenas para desfazer um git init feito na pasta errada.</strong> Este é um comando do CMD do Windows, não um comando do Git.</div>
        <div class="command-ref-card">
          <div class="command-ref-head">
            <span class="cmd-status cmd-ready">✓ Confira primeiro</span>
            <button class="command-copy-btn" type="button" data-rede-copy="git rev-parse --show-toplevel">Copiar</button>
          </div>
          <pre class="command-ref-code"><code>git rev-parse --show-toplevel</code></pre>
          <div class="command-ref-body"><p>Mostra a raiz do repositório que o Git reconhece. Use esse resultado para ter certeza de qual pasta você está prestes a alterar.</p></div>
        </div>
        <div class="command-ref-card">
          <div class="command-ref-head">
            <span class="cmd-status cmd-edit">⚠ Remove o histórico Git local</span>
            <button class="command-copy-btn" type="button" data-rede-copy="rmdir /s /q .git">Copiar</button>
          </div>
          <pre class="command-ref-code"><code>rmdir /s /q .git</code></pre>
          <div class="command-ref-body">
            <p>Remove a pasta interna <span class="inline-code">.git</span>. Os arquivos comuns permanecem, mas a pasta deixa de ser um repositório Git.</p>
            <div class="command-ref-warning"><strong>Antes:</strong> esteja na raiz correta, confira com <span class="inline-code">dir /a</span> e tenha certeza de que o repositório foi criado por engano. O histórico local, branches locais e configuração de remoto guardados em <span class="inline-code">.git</span> serão apagados.</div>
            <p class="command-ref-note">Depois, <span class="inline-code">git status</span> deve informar que o local não é mais um repositório Git.</p>
          </div>
        </div>`;
    }

    const diagnostic = modules.comandos.steps.find(step => String(step.id) === 'diagnostico');
    if (diagnostic && !diagnostic.content.includes('git init na pasta errada')) {
      diagnostic.content += `
        <div class="note-box"><strong>Executou git init na pasta errada?</strong> Vá ao item <strong>CMD e pastas</strong> desta central e consulte “Remover o controle Git de uma pasta”. Primeiro confirme a raiz; só então remova a pasta <span class="inline-code">.git</span>.</div>`;
    }

    const checkpoint = modules.comandos.steps.find(step => String(step.id) === 'checkpoint');
    if (checkpoint && !checkpoint.content.includes('Recuperação: git init na pasta errada')) {
      checkpoint.content += `
        <h3>Recuperação: git init na pasta errada</h3>
        <div class="command-ref-tip">Se você iniciou o Git antes de entrar em <span class="inline-code">site-cafe-aurora</span>, confirme a raiz com <span class="inline-code">git rev-parse --show-toplevel</span>. Somente se aquela pasta tiver virado repositório por engano, entre nela, confira <span class="inline-code">.git</span> com <span class="inline-code">dir /a</span> e use <span class="inline-code">rmdir /s /q .git</span>.</div>
        <div class="danger-box"><strong>Não execute isso no repositório correto do projeto.</strong> O comando preserva os arquivos comuns, mas apaga todo o histórico Git local armazenado em <span class="inline-code">.git</span>.</div>`;
    }
  }

  const hash = location.hash.match(/^#(git|github|exercicios|comandos)-(.+)$/);
  if (hash) setModule(hash[1], decodeURIComponent(hash[2]), false);
})();
