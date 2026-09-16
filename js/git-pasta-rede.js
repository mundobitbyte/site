(() => {
  const g3 = gitSteps.find(step => String(step.id) === '3');
  if (!g3 || g3.content.includes('Outra opção: sua pasta na rede')) return;

  g3.content = g3.content.replace(
    '<h3>4. Confira o local</h3>',
    `<h3>Outra opção: sua pasta na rede</h3>
        <p>Você não precisa obrigatoriamente trabalhar dentro da pasta local do usuário do Windows. Se você possui <strong>uma pasta na rede</strong> e tem permissão para criar e alterar arquivos nela, também pode usar esse local para o projeto.</p>
        <p>Por exemplo:</p>
        <pre class="command">\\\\10.66.53.1\\Publica\\mtec2026\\joao\\meus-repositorios\\site-cafe-aurora</pre>
        <p>Nesse exemplo, <span class="inline-code">joao</span> é um nome fictício para a pasta do usuário na rede; <span class="inline-code">meus-repositorios</span> organiza os projetos Git; e <span class="inline-code">site-cafe-aurora</span> é a pasta do projeto.</p>
        <p>No Prompt de Comando do Windows, você pode entrar diretamente nesse caminho com:</p>
        <pre class="command">pushd \\\\10.66.53.1\\Publica\\mtec2026\\joao\\meus-repositorios\\site-cafe-aurora</pre>
        <p>Depois disso, os comandos do Git funcionam normalmente nessa pasta. Ao terminar, use <span class="inline-code">popd</span> para retornar.</p>
        <div class="note-box"><strong>Importante:</strong> use uma pasta de rede em que você tenha permissão de leitura e gravação e, de preferência, uma pasta destinada ao seu próprio trabalho.</div>

        <h3>4. Confira o local</h3>`
  );
})();
