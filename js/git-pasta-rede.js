(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));

  const g2 = gitStep(2);
  if (g2 && !g2.content.includes('independentemente de o projeto ficar')) {
    g2.content = g2.content.replace(
      '<div class="note-box"><strong>Computador compartilhado:</strong> confira nome e e-mail antes de fazer commits. Em laboratório, outra pessoa pode ter usado o mesmo usuário do Windows.</div>',
      `<div class="note-box"><strong>Computador compartilhado:</strong> confira nome e e-mail antes de fazer commits. Em laboratório, outra pessoa pode ter usado o mesmo usuário do Windows.</div>
      <div class="concept-box"><strong>Essa identificação não escolhe onde o projeto ficará.</strong> Nome e e-mail identificam o autor dos commits, independentemente de o projeto ser criado na pasta do usuário local do computador ou em uma pasta da rede.</div>`
    );
  }

  const g3 = gitStep(3);
  if (g3) {
    g3.content = g3.content
      .replace('Quatro comandos de CMD que bastam por enquanto', 'Comandos básicos de CMD que precisamos agora')
      .replace(
        /<h3>1\. Vá para sua pasta de usuário<\/h3>[\s\S]*?<div class="concept-box"><strong>Crie o hábito de olhar o caminho antes de executar Git\. Ele mostra onde o comando terá efeito\.<\/strong><\/div>/,
        `<h3>1. Primeiro escolha onde você vai trabalhar</h3>
        <p>Antes de criar qualquer pasta, escolha o local-base do projeto. Você pode trabalhar <strong>na pasta do seu usuário local do Windows</strong> ou, se tiver acesso, <strong>na sua pasta da rede</strong>. O Git funciona nos dois casos.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>Opção A — usuário local</strong><br>O projeto fica armazenado neste computador.</div>
          <div class="mini-card"><strong>Opção B — pasta da rede</strong><br>O projeto fica em uma pasta de rede em que você possui permissão de leitura e gravação.</div>
        </div>

        <h3>Opção A — usar o usuário local do computador</h3>
        <p>Se você vai trabalhar no próprio computador, entre na pasta do usuário atual:</p>
        <pre class="command">cd /d "%USERPROFILE%"</pre>
        <p><span class="inline-code">cd</span> muda de pasta; <span class="inline-code">/d</span> também permite mudar de unidade; <span class="inline-code">%USERPROFILE%</span> representa automaticamente a pasta do usuário atual do Windows.</p>

        <h3>Opção B — usar sua pasta da rede</h3>
        <p>Se você possui uma pasta própria na rede, entre nela <strong>antes de criar as pastas do projeto</strong>. O endereço real depende da rede que você utiliza. Um exemplo genérico seria:</p>
        <pre class="command">pushd \\\\servidor\\usuarios\\seuUsuario</pre>
        <p><span class="inline-code">pushd</span> entra no caminho de rede e, no Windows, pode associá-lo temporariamente a uma letra de unidade. A partir desse momento, os próximos comandos serão executados dentro da sua pasta da rede.</p>
        <div class="note-box"><strong>Use somente uma pasta de rede que você reconheça e em que tenha permissão.</strong> O exemplo acima é genérico: substitua servidor, pastas e usuário pelos dados fornecidos para a sua rede.</div>

        <h3>2. Crie a área dos seus repositórios</h3>
        <p>A partir daqui, o procedimento é o mesmo nas duas opções:</p>
        <pre class="command">mkdir meus-repositorios\ncd meus-repositorios</pre>

        <h3>3. Crie o projeto do Café Aurora</h3>
        <pre class="command">mkdir site-cafe-aurora\ncd site-cafe-aurora</pre>
        <p>Se você escolheu o usuário local, o caminho ficará parecido com:</p>
        <pre class="command">C:\\Users\\Usuario\\meus-repositorios\\site-cafe-aurora&gt;</pre>
        <p>Se escolheu a rede, o CMD mostrará a unidade temporária criada pelo <span class="inline-code">pushd</span> ou outro caminho correspondente à sua rede.</p>

        <h3>4. Confira o local antes de continuar</h3>
        <pre class="command">dir</pre>
        <div class="concept-box"><strong>Primeiro escolhemos onde trabalhar; depois criamos a mesma estrutura de pastas.</strong> O Git não exige que o projeto esteja no usuário local do computador.</div>
        <div class="note-box"><strong>Se você escolheu a rede, não use popd agora.</strong> Continue para o próximo tópico dentro da pasta <span class="inline-code">site-cafe-aurora</span>. Use <span class="inline-code">popd</span> somente quando terminar o trabalho e quiser encerrar esse acesso temporário. Se fechar o CMD e voltar outro dia, use novamente <span class="inline-code">pushd</span> para entrar na pasta do projeto.</div>`
      );
  }

  const g4 = gitStep(4);
  if (g4 && !g4.content.includes('detected dubious ownership')) {
    g4.content = g4.content.replace(
      '<pre class="command">git status</pre>\n        <p><span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: o arquivo existe, mas ainda não foi incluído em nenhum commit.</p>',
      `<pre class="command">git status</pre>
        <h3>Se o Git bloquear uma pasta da rede por segurança</h3>
        <p>Na pasta do usuário local, normalmente o <span class="inline-code">git status</span> seguirá direto. Em algumas redes, porém, o Git pode mostrar uma mensagem parecida com <span class="inline-code">detected dubious ownership in repository</span>. Isso significa que o Git não conseguiu confirmar que a pasta pertence ao mesmo usuário que está executando o comando.</p>
        <p><strong>Somente se esta for a sua pasta de projeto e você confiar nela</strong>, registre especificamente a pasta atual como segura:</p>
        <pre class="command">git config --global --add safe.directory "%CD%"\ngit status</pre>
        <p><span class="inline-code">safe.directory</span> informa ao Git que aquele diretório é confiável; <span class="inline-code">--add</span> acrescenta essa pasta à lista; <span class="inline-code">%CD%</span> representa o caminho em que o CMD está neste momento.</p>
        <div class="danger-box"><strong>Não libere todas as pastas indiscriminadamente.</strong> Evite usar <span class="inline-code">safe.directory *</span>. Adicione somente o repositório que você reconhece e pretende usar.</div>
        <p>Depois disso, <span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: o arquivo existe, mas ainda não foi incluído em nenhum commit.</p>`
    );
  }
})();