(() => {
  if (!modules.comandos) return;

  const cmdStep = modules.comandos.steps.find(step => String(step.id) === 'cmd');
  if (!cmdStep) return;

  cmdStep.content = cmdStep.content.replace(
    String.raw`pushd \\10.66.53.1\Publica\mtec2026\joao\meus-repositorios\site-cafe-aurora`,
    String.raw`pushd \\servidor\usuarios\seuUsuario`
  );

  if (!cmdStep.content.includes('git config --global --add safe.directory')) {
    const safeCard = `
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-ready">✓ Use somente quando necessário</span>
          <button class="command-copy-btn" type="button" data-rede-copy="git config --global --add safe.directory &quot;%CD%&quot;">Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --add safe.directory "%CD%"</code></pre>
        <div class="command-ref-body">
          <p>Adiciona especificamente a pasta atual à lista de diretórios que o Git considera seguros. É útil quando uma pasta de rede confiável gera a mensagem <span class="inline-code">detected dubious ownership in repository</span>.</p>
          <p class="command-ref-note"><strong>%CD%</strong> representa o caminho atual do CMD. Execute este comando somente depois de entrar no repositório de rede que você reconhece e deseja autorizar.</p>
          <div class="command-ref-warning"><strong>Não use como atalho:</strong> evite <span class="inline-code">safe.directory *</span>, pois isso desativa a proteção para todos os diretórios.</div>
        </div>
      </div>`;

    cmdStep.content += `
      <h3>Se uma pasta de rede for bloqueada pelo Git</h3>
      <div class="note-box">Este é um comando Git, não um comando do CMD. Ele aparece aqui porque está diretamente ligado ao uso de projetos em pastas de rede.</div>
      ${safeCard}`;
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