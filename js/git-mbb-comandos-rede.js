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
          <span class="cmd-status cmd-edit">⚠ Remove autorizações anteriores</span>
          <button class="command-copy-btn" type="button" data-rede-copy="git config --global --unset-all safe.directory">Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --unset-all safe.directory</code></pre>
        <div class="command-ref-body">
          <p>Remove os registros anteriores de <span class="inline-code">safe.directory</span> do usuário.</p>
        </div>
      </div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-edit">⚠ Troque nome.sobrenome</span>
          <button class="command-copy-btn" type="button" data-rede-copy='git config --global --add safe.directory "//10.66.53.1/Publica/mtec2025/nome.sobrenome/meus-repositorios/site-cafe-aurora"'>Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --add safe.directory "//10.66.53.1/Publica/mtec2025/<mark class="cmd-var">nome.sobrenome</mark>/meus-repositorios/site-cafe-aurora"</code></pre>
        <div class="command-ref-body">
          <p>Autoriza especificamente o repositório indicado na pasta de rede.</p>
          <div class="command-ref-warning"><strong>Antes de executar:</strong> substitua <span class="inline-code">nome.sobrenome</span> pelo nome da sua pasta na rede.</div>
          <p class="command-ref-note">No Git, escreva o caminho UNC com barras <span class="inline-code">/</span>, mesmo no Windows.</p>
        </div>
      </div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-ready">✓ Conferir</span>
          <button class="command-copy-btn" type="button" data-rede-copy="git status">Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git status</code></pre>
        <div class="command-ref-body">
          <p>Confirma se o Git reconheceu corretamente o repositório depois da autorização.</p>
        </div>
      </div>
      <div class="danger-box"><strong>Não use safe.directory "*".</strong> Autorizar todos os diretórios reduz a proteção de segurança. Limite a exceção ao repositório necessário.</div>`;
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