(() => {
  if (!modules.comandos) return;

  const cmdStep = modules.comandos.steps.find(step => String(step.id) === 'cmd');
  if (!cmdStep) return;

  cmdStep.content = cmdStep.content.replace(
    String.raw`pushd \\10.66.53.1\Publica\mtec2026\joao\meus-repositorios\site-cafe-aurora`,
    String.raw`pushd \\servidor\usuarios\seuUsuario`
  );

  if (!cmdStep.content.includes('safe.directory no Git CMD')) {
    cmdStep.content += `
      <h3>safe.directory no Git CMD</h3>
      <div class="note-box"><strong>Quando usar:</strong> somente se uma pasta de rede confiável gerar <span class="inline-code">detected dubious ownership in repository</span>.</div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-edit">⚠ Precisa adaptar</span>
          <button class="command-copy-btn" type="button" data-rede-copy='git config --global --add safe.directory "CAMINHO-EXATO-MOSTRADO-PELO-GIT"'>Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --add safe.directory "<mark class="cmd-var">CAMINHO-EXATO-MOSTRADO-PELO-GIT</mark>"</code></pre>
        <div class="command-ref-body">
          <p>Adiciona uma exceção de confiança para um repositório específico.</p>
          <div class="command-ref-warning"><strong>No Git CMD/CMD:</strong> se a recomendação do Git vier entre aspas simples, troque-as por <strong>aspas duplas</strong>. As aspas simples podem ser gravadas como parte do valor e gerar <span class="inline-code">not absolute</span>.</div>
          <div class="command-ref-example"><strong>Exemplo para rede:</strong><code>git config --global --add safe.directory "%(prefix)///servidor/compartilhamento/seuUsuario/meus-repositorios/site-cafe-aurora"</code></div>
          <p class="command-ref-note">Em unidade de rede mapeada, o CMD pode mostrar Z:\\..., mas o Git pode identificar o repositório pelo caminho UNC. Prefira o caminho que o próprio Git apresenta na mensagem de erro.</p>
        </div>
      </div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-ready">✓ Diagnóstico</span>
          <button class="command-copy-btn" type="button" data-rede-copy="git config --global --get-all safe.directory">Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --get-all safe.directory</code></pre>
        <div class="command-ref-body"><p>Mostra todas as exceções de diretórios seguros já cadastradas.</p></div>
      </div>
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status cmd-edit">⚠ Use com cuidado</span>
          <button class="command-copy-btn" type="button" data-rede-copy="git config --global --unset-all safe.directory">Copiar</button>
        </div>
        <pre class="command-ref-code"><code>git config --global --unset-all safe.directory</code></pre>
        <div class="command-ref-body">
          <p>Remove todas as exceções <span class="inline-code">safe.directory</span> do usuário.</p>
          <div class="command-ref-warning"><strong>Use somente se você tiver certeza de que não precisa preservar outras entradas.</strong> Se houver outras pastas seguras, prefira <span class="inline-code">git config --global --edit</span> e remova apenas a linha incorreta.</div>
        </div>
      </div>`;
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