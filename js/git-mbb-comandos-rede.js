(() => {
  if (!modules.comandos) return;

  const cmdStep = modules.comandos.steps.find(step => String(step.id) === 'cmd');
  if (!cmdStep) return;

  cmdStep.content = cmdStep.content
    .replace(
      String.raw`pushd \\10.66.53.1\Publica\mtec2026\joao\meus-repositorios\site-cafe-aurora`,
      String.raw`pushd \\10.66.53.1\Publica\mtec2025\nome.sobrenome\meus-repositorios\site-cafe-aurora`
    )
    .replace(
      String.raw`pushd \\servidor\usuarios\seuUsuario`,
      String.raw`pushd \\10.66.53.1\Publica\mtec2025\nome.sobrenome\meus-repositorios\site-cafe-aurora`
    );

  if (!cmdStep.content.includes('safe.directory no Git CMD')) {
    cmdStep.content += `
      <h3>safe.directory no Git CMD</h3>
      <div class="note-box"><strong>Quando usar:</strong> somente se um repositório confiável em sua pasta na rede gerar <span class="inline-code">detected dubious ownership</span> ou uma mensagem sobre <span class="inline-code">safe.directory</span>.</div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-edit">⚠ Copie a sugestão do Git</span>
        </div>
        <pre class="command-ref-code"><code>git config --global --add safe.directory '%(prefix)///10.66.53.1/Publica/mtec2025/<mark class="cmd-var">nome.sobrenome</mark>/meus-repositorios/site-cafe-aurora'</code></pre>
        <div class="command-ref-body">
          <p>Esse é o tipo de comando que o próprio Git pode mostrar quando bloquear um repositório da rede.</p>
          <div class="command-ref-warning"><strong>No Git CMD/CMD do Windows:</strong> copie a sugestão exibida pelo Git e troque somente as aspas simples <span class="inline-code">'...'</span> por aspas duplas <span class="inline-code">"..."</span>. Preserve todo o restante, inclusive <span class="inline-code">%(prefix)///</span> quando ele aparecer.</div>
          <p class="command-ref-note">No computador real, não digite <span class="inline-code">nome.sobrenome</span> de memória: use o caminho que o próprio Git mostrou para aquele repositório.</p>
        </div>
      </div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-ready">✓ Exemplo para Git CMD</span>
          <button class="command-copy-btn" type="button" data-rede-copy='git config --global --add safe.directory "%(prefix)///10.66.53.1/Publica/mtec2025/nome.sobrenome/meus-repositorios/site-cafe-aurora"'>Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --add safe.directory "%(prefix)///10.66.53.1/Publica/mtec2025/<mark class="cmd-var">nome.sobrenome</mark>/meus-repositorios/site-cafe-aurora"</code></pre>
        <div class="command-ref-body">
          <p>É a mesma sugestão do Git, apenas com aspas duplas para o Git CMD/CMD.</p>
        </div>
      </div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-ready">✓ Conferir</span>
          <button class="command-copy-btn" type="button" data-rede-copy="git status">Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git status</code></pre>
        <div class="command-ref-body">
          <p>Executado novamente depois da autorização, confirma se o Git passou a reconhecer normalmente o repositório.</p>
        </div>
      </div>
      <div class="danger-box"><strong>Não use safe.directory "*".</strong> Autorizar todos os diretórios reduz a proteção de segurança. Autorize somente o repositório indicado pelo próprio Git.</div>`;
  }

  const lesson = document.getElementById('lesson');
  if (lesson && !lesson.dataset.redeCopyReady) {
    lesson.dataset.redeCopyReady = '1';
    lesson.addEventListener('click', async event => {
      const button = event.target.closest('[data-rede-copy]');
      if (!button) return;
      const text = button.dataset.redeCopy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      const original = button.textContent;
      button.textContent = 'Copiado!';
      button.classList.add('copied');
      window.setTimeout(() => {
        button.textContent = original;
        button.classList.remove('copied');
      }, 1400);
    });
  }

  const hash = location.hash.match(/^#comandos-(.+)$/);
  if (hash) setModule('comandos', decodeURIComponent(hash[1]), false);
})();