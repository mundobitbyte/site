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

        <h3>Opção B — usar sua pasta na rede</h3>
        <p>Se você possui uma pasta própria na rede, entre nela <strong>antes de criar as pastas do projeto</strong>. O endereço real depende da rede que você utiliza. O formato genérico é:</p>
        <pre class="command">pushd \\\\servidor\\pasta\\seuUsuario</pre>
        <p><span class="inline-code">pushd</span> entra no caminho de rede e, no Windows, pode associá-lo temporariamente a uma letra de unidade. A partir desse momento, os próximos comandos serão executados dentro da sua pasta na rede.</p>
        <p>Veja um exemplo concreto de entrada na pasta-base:</p>
        <pre class="command">pushd \\\\10.66.53.1\\Publica\\mtec2025\\nome.sobrenome</pre>
        <p>Nesse exemplo, <span class="inline-code">10.66.53.1</span> identifica o servidor; <span class="inline-code">Publica\\mtec2025</span> faz parte do caminho compartilhado; <span class="inline-code">nome.sobrenome</span> representa a pasta de rede de cada usuário.</p>
        <div class="example-box"><strong>Se as pastas do projeto já existirem</strong>, também é possível entrar diretamente nelas:<pre class="command">pushd \\\\10.66.53.1\\Publica\\mtec2025\\nome.sobrenome\\meus-repositorios\\site-cafe-aurora</pre>Nesse caso, substitua <span class="inline-code">nome.sobrenome</span> pelo nome da sua pasta na rede.</div>
        <div class="note-box"><strong>Use somente uma pasta de rede que você reconheça e em que tenha permissão.</strong> O exemplo acima serve para mostrar o formato. Em outra rede, servidor, pastas e usuário serão diferentes.</div>

        <h3>2. Crie a área dos seus repositórios</h3>
        <p>A partir daqui, o procedimento é o mesmo nas duas opções:</p>
        <pre class="command">mkdir meus-repositorios\ncd meus-repositorios</pre>

        <h3>3. Crie o projeto do Café Aurora</h3>
        <pre class="command">mkdir site-cafe-aurora\ncd site-cafe-aurora</pre>
        <p>Se você escolheu o usuário local, o caminho ficará parecido com:</p>
        <pre class="command">C:\\Users\\Usuario\\meus-repositorios\\site-cafe-aurora&gt;</pre>
        <p>Se escolheu a rede, o CMD poderá mostrar uma letra temporária, por exemplo:</p>
        <pre class="command">Y:\\mtec2025\\nome.sobrenome\\meus-repositorios\\site-cafe-aurora&gt;</pre>

        <h3>4. Confira o local antes de continuar</h3>
        <pre class="command">cd\ndir</pre>
        <div class="concept-box"><strong>Primeiro escolhemos onde trabalhar; depois criamos a mesma estrutura de pastas.</strong> Antes de executar <span class="inline-code">git init</span>, o caminho atual deve terminar em <span class="inline-code">site-cafe-aurora</span>.</div>
        <div class="danger-box"><strong>Não execute git init em C:\\Users\\seuUsuario ou em outra pasta apenas porque o CMD abriu ali.</strong> O <span class="inline-code">git init</span> transforma a pasta atual em repositório. Primeiro entre em <span class="inline-code">site-cafe-aurora</span>; só depois iniciaremos o Git.</div>

        <h3>5. Se o Git bloquear o repositório da rede</h3>
        <p>Quando você começar a usar Git nessa pasta, ele pode apresentar uma mensagem com <span class="inline-code">detected dubious ownership</span> ou mencionar <span class="inline-code">safe.directory</span>. Isso acontece porque o Git faz uma verificação de segurança e, em alguns caminhos de rede, não consegue confirmar automaticamente a propriedade do repositório.</p>
        <p>Se isso ocorrer <strong>depois de você executar git init no tópico seguinte</strong>, use o caminho UNC real da sua pasta na rede e escreva esse caminho com barras <span class="inline-code">/</span>, mesmo no Windows.</p>
        <p>Procedimento validado:</p>
        <pre class="command">git config --global --unset-all safe.directory\n\ngit config --global --add safe.directory "//10.66.53.1/Publica/mtec2025/nome.sobrenome/meus-repositorios/site-cafe-aurora"\n\ngit status</pre>
        <div class="mini-grid">
          <div class="mini-card"><strong>1. Limpar</strong><br><span class="inline-code">--unset-all safe.directory</span> remove os registros anteriores de diretórios autorizados.</div>
          <div class="mini-card"><strong>2. Autorizar</strong><br><span class="inline-code">--add safe.directory</span> autoriza somente o repositório indicado.</div>
          <div class="mini-card"><strong>3. Conferir</strong><br><span class="inline-code">git status</span> confirma se o Git reconheceu corretamente o repositório.</div>
        </div>
        <div class="note-box"><strong>Substitua nome.sobrenome pela sua pasta na rede.</strong> No comando do Git, mantenha o caminho UNC com barras <span class="inline-code">/</span>: <span class="inline-code">//servidor/pasta/...</span>.</div>
        <div class="danger-box"><strong>Não use safe.directory "*".</strong> Isso autorizaria todos os diretórios e reduziria a proteção de segurança. Autorize somente o repositório de que você realmente precisa.</div>
        <div class="note-box"><strong>Se você escolheu a rede, não use popd agora.</strong> Continue para o próximo tópico dentro da pasta <span class="inline-code">site-cafe-aurora</span>. Use <span class="inline-code">popd</span> somente quando terminar o trabalho e quiser encerrar esse acesso temporário. Se fechar o CMD e voltar outro dia, use novamente <span class="inline-code">pushd</span> para entrar na pasta do projeto.</div>`
      );
  }

  const g4 = gitStep(4);
  if (g4 && !g4.content.includes('Se estiver usando uma pasta de rede')) {
    g4.content = g4.content.replace(
      '<h3>1. Inicie o repositório</h3>\n        <pre class="command">git init</pre>',
      `<h3>1. Inicie o repositório</h3>
        <p>Antes de executar, confira mais uma vez onde o CMD está:</p>
        <pre class="command">cd</pre>
        <p>O caminho deve terminar em <span class="inline-code">site-cafe-aurora</span>. Se aparecer apenas algo como <span class="inline-code">C:\\Users\\lenovo</span>, pare e volte ao tópico anterior: <strong>você ainda não entrou na pasta do projeto</strong>.</p>
        <pre class="command">git init</pre>`
    );

    g4.content = g4.content.replace(
      /<pre class="command">git status<\/pre>[\s\S]*?<p><span class="inline-code">horario\.txt<\/span> deverá aparecer como <strong>untracked<\/strong>: o arquivo existe, mas ainda não foi incluído em nenhum commit\.<\/p>/,
      `<pre class="command">git status</pre>
        <div class="note-box"><strong>Se estiver usando uma pasta de rede</strong> e aparecer <span class="inline-code">detected dubious ownership</span> ou uma mensagem sobre <span class="inline-code">safe.directory</span>, volte ao <strong>Git → 3 Localizar</strong> e aplique o procedimento de autorização específica explicado ali.</div>
        <p>Depois que o Git reconhecer corretamente o repositório, <span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: o arquivo existe, mas ainda não foi incluído em nenhum commit.</p>`
    );
  }
})();