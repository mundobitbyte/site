(() => {
  if (!modules.comandos) return;

  const checkpointUrl = '../assets/git-github-checkpoint-comandos.txt?v=7';
  const steps = modules.comandos.steps;

  if (!steps.some(step => String(step.id) === 'checkpoint')) {
    const checkpointStep = {
      id: 'checkpoint',
      menu: 'Checkpoint .TXT',
      title: 'Comandos — Checkpoint completo',
      objective: 'Recuperar a prática inteira seguindo os comandos na ordem em que foram aprendidos.',
      content: `
        <div class="commands-hero">
          <h3>Perdeu uma aula ou quer reconstruir toda a prática?</h3>
          <p>Este checkpoint funciona como um roteiro de recuperação. Ele reúne os comandos do Café Aurora em ordem, com paradas nos pontos em que você precisa descobrir ou informar um valor do seu próprio projeto.</p>
        </div>
        <div class="command-ref-tip"><strong>Não é um arquivo .bat.</strong> Alguns comandos dependem de valores que mudam de computador para computador, como URL do repositório, hashes, nome da branch e caminho da rede. Por isso o material é um arquivo <span class="inline-code">.txt</span> para abrir, ler, copiar e colar por etapas.</div>
        <div class="command-ref-card" data-mbb-checkpoint-card>
          <div class="command-ref-head">
            <span class="cmd-status cmd-edit">⚠ Confira os trechos &lt;&lt;&lt; &gt;&gt;&gt;</span>
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">
              <button class="command-copy-btn" type="button" data-checkpoint-open>Abrir arquivo</button>
              <button class="command-copy-btn" type="button" data-checkpoint-download>Baixar .TXT</button>
            </div>
          </div>
          <pre class="command-ref-code"><code>git log --oneline

git show &lt;&lt;&lt;HASH-DO-COMMIT&gt;&gt;&gt;

git remote add origin &lt;&lt;&lt;URL-DO-REPOSITORIO&gt;&gt;&gt;

git push -u origin &lt;&lt;&lt;BRANCH-PRINCIPAL&gt;&gt;&gt;</code></pre>
          <div class="command-ref-body">
            <p><strong>Como usar:</strong> siga os checkpoints na ordem e copie somente o bloco da etapa em que você está.</p>
            <div class="command-ref-warning"><strong>Parou em &lt;&lt;&lt;ALGUMA-COISA&gt;&gt;&gt;?</strong> Não execute literalmente. O próprio checkpoint diz de onde obter esse valor antes de continuar.</div>
            <p class="command-ref-note">O arquivo também inclui o caminho local ou de rede, o caso de <span class="inline-code">safe.directory</span>, Git local, branches, GitHub, clone, fetch, pull e merge.</p>
          </div>
        </div>
        <div class="concept-box"><strong>Ideia do checkpoint:</strong> quem acompanhou a aula usa o módulo para aprender. Quem precisa recuperar a prática usa este roteiro para reconstruí-la sem adivinhar a ordem dos comandos.</div>`
    };

    steps.splice(1, 0, checkpointStep);
  }

  const inicio = steps.find(step => String(step.id) === 'inicio');
  if (inicio && !inicio.content.includes('data-mbb-checkpoint-link')) {
    inicio.content += `
      <div class="note-box" data-mbb-checkpoint-link>
        <strong>Quer todos os comandos em sequência?</strong><br>
        Use o item <strong>Checkpoint .TXT</strong> no menu desta área. Ele foi preparado para recuperar toda a prática do Café Aurora, do primeiro <span class="inline-code">git init</span> até GitHub, clone, fetch, pull e merge.
      </div>`;
  }

  const lesson = document.getElementById('lesson');
  if (lesson && !lesson.dataset.checkpointReady) {
    lesson.dataset.checkpointReady = '1';
    lesson.addEventListener('click', event => {
      const openButton = event.target.closest('[data-checkpoint-open]');
      if (openButton) {
        window.open(checkpointUrl, '_blank', 'noopener');
        return;
      }

      const downloadButton = event.target.closest('[data-checkpoint-download]');
      if (downloadButton) {
        const link = document.createElement('a');
        link.href = checkpointUrl;
        link.download = 'git-github-checkpoint-comandos.txt';
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    });
  }

  const hash = location.hash.match(/^#comandos-(.+)$/);
  if (hash) setModule('comandos', decodeURIComponent(hash[1]), false);
})();
