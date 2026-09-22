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
        <p>Se você possui uma pasta própria na rede, entre nela <strong>antes de criar as pastas do projeto</strong>. O endereço real depende da rede que você utiliza. O formato genérico é:</p>
        <pre class="command">pushd \\\\servidor\\pasta\\seuUsuario</pre>
        <p><span class="inline-code">pushd</span> entra no caminho de rede e, no Windows, pode associá-lo temporariamente a uma letra de unidade. A partir desse momento, os próximos comandos serão executados dentro da sua pasta da rede.</p>
        <p>Veja um exemplo concreto:</p>
        <pre class="command">pushd \\\\10.66.53.1\\Publica\\mtec2026\\caio.goncalves\\P.A</pre>
        <p>Nesse exemplo, <span class="inline-code">10.66.53.1</span> identifica o servidor; <span class="inline-code">Publica\\mtec2026</span> faz parte do caminho compartilhado; <span class="inline-code">caio.goncalves\\P.A</span> leva até a pasta de trabalho do usuário.</p>
        <div class="example-box"><strong>Se as pastas do projeto já existirem</strong>, também é possível entrar diretamente nelas:<pre class="command">pushd \\\\10.66.53.1\\Publica\\mtec2026\\caio.goncalves\\P.A\\meus-repositorios\\site-cafe-aurora</pre>Mas, neste primeiro percurso, entraremos primeiro na pasta-base e criaremos <span class="inline-code">meus-repositorios</span> e <span class="inline-code">site-cafe-aurora</span> em seguida.</div>
        <div class="note-box"><strong>Use somente uma pasta de rede que você reconheça e em que tenha permissão.</strong> O exemplo acima serve para mostrar o formato. Em outra rede, servidor, pastas e usuário serão diferentes.</div>

        <h3>2. Crie a área dos seus repositórios</h3>
        <p>A partir daqui, o procedimento é o mesmo nas duas opções:</p>
        <pre class="command">mkdir meus-repositorios\ncd meus-repositorios</pre>

        <h3>3. Crie o projeto do Café Aurora</h3>
        <pre class="command">mkdir site-cafe-aurora\ncd site-cafe-aurora</pre>
        <p>Se você escolheu o usuário local, o caminho ficará parecido com:</p>
        <pre class="command">C:\\Users\\Usuario\\meus-repositorios\\site-cafe-aurora&gt;</pre>
        <p>Se escolheu a rede, o CMD poderá mostrar uma letra temporária, por exemplo:</p>
        <pre class="command">Y:\\mtec2026\\caio.goncalves\\P.A\\meus-repositorios\\site-cafe-aurora&gt;</pre>

        <h3>4. Confira o local antes de continuar</h3>
        <pre class="command">cd\ndir</pre>
        <div class="concept-box"><strong>Primeiro escolhemos onde trabalhar; depois criamos a mesma estrutura de pastas.</strong> Antes de executar <span class="inline-code">git init</span>, o caminho atual deve terminar em <span class="inline-code">site-cafe-aurora</span>.</div>
        <div class="danger-box"><strong>Não execute git init em C:\\Users\\seuUsuario ou em outra pasta apenas porque o CMD abriu ali.</strong> O <span class="inline-code">git init</span> transforma a pasta atual em repositório. Primeiro entre em <span class="inline-code">site-cafe-aurora</span>; só depois iniciaremos o Git.</div>
        <div class="note-box"><strong>Se você escolheu a rede, não use popd agora.</strong> Continue para o próximo tópico dentro da pasta <span class="inline-code">site-cafe-aurora</span>. Use <span class="inline-code">popd</span> somente quando terminar o trabalho e quiser encerrar esse acesso temporário. Se fechar o CMD e voltar outro dia, use novamente <span class="inline-code">pushd</span> para entrar na pasta do projeto.</div>`
      );
  }

  const g4 = gitStep(4);
  if (g4 && !g4.content.includes('entrada antiga ou incorreta')) {
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
        <h3>Se o Git bloquear uma pasta da rede por segurança</h3>
        <p>Na pasta do usuário local, normalmente o <span class="inline-code">git status</span> seguirá direto. Em algumas redes, porém, o Git pode mostrar <span class="inline-code">fatal: detected dubious ownership in repository</span>. Isso significa que o Git não conseguiu confirmar que o repositório pertence ao mesmo usuário que está executando o comando.</p>
        <p>Quando isso acontece em uma pasta de rede mapeada, o CMD pode mostrar algo como <span class="inline-code">Y:\\...</span>, mas o Git identifica a mesma pasta pelo endereço UNC, por exemplo <span class="inline-code">//10.66.53.1/Publica/...</span>. <strong>Use exatamente o caminho que o próprio Git mostrar na mensagem de erro.</strong></p>

        <div class="note-box"><strong>No Git CMD, atenção às aspas.</strong> O Git for Windows pode sugerir o comando com aspas simples. No CMD, elas podem ser gravadas como parte do valor e gerar <span class="inline-code">safe.directory ... not absolute</span>. Troque as aspas simples por <strong>aspas duplas</strong>.</div>

        <p>Por exemplo, se o Git mostrar este repositório:</p>
        <pre class="command">//10.66.53.1/Publica/mtec2026/caio.goncalves/P.A/meus-repositorios/site-cafe-aurora</pre>
        <p>no Git CMD use:</p>
        <pre class="command">git config --global --add safe.directory "%(prefix)///10.66.53.1/Publica/mtec2026/caio.goncalves/P.A/meus-repositorios/site-cafe-aurora"\ngit status</pre>
        <p>O trecho <span class="inline-code">%(prefix)</span> é uma forma de caminho que o próprio Git for Windows pode recomendar para repositórios UNC. A configuração <span class="inline-code">safe.directory</span> autoriza <strong>somente aquele repositório específico</strong>.</p>

        <h3>Se também aparecer safe.directory ... not absolute</h3>
        <p>Esse aviso normalmente indica que já existe uma <strong>entrada antiga ou incorreta</strong> em sua configuração global. É possível, por exemplo, que outro repositório tenha sido cadastrado anteriormente com aspas simples:</p>
        <pre class="command">warning: safe.directory ''%(prefix)///10.66.53.1/Professor/Ronaldo/...'' not absolute</pre>
        <p>Antes de adicionar novas exceções, veja o que está cadastrado:</p>
        <pre class="command">git config --global --get-all safe.directory</pre>
        <p>Se a lista mostrar somente entradas antigas ou incorretas que você não precisa preservar, limpe-a:</p>
        <pre class="command">git config --global --unset-all safe.directory</pre>
        <p>Depois cadastre apenas o repositório atual usando o caminho exato mostrado pelo Git e aspas duplas:</p>
        <pre class="command">git config --global --add safe.directory "CAMINHO-EXATO-MOSTRADO-PELO-GIT"\ngit config --global --get-all safe.directory\ngit status</pre>
        <div class="note-box"><strong>Se houver outras entradas corretas que precisam continuar válidas, não use --unset-all.</strong> Nesse caso, use <span class="inline-code">git config --global --edit</span> e remova somente a linha incorreta.</div>
        <div class="danger-box"><strong>Autorize somente uma pasta que você reconheça e em que confie.</strong> Não use <span class="inline-code">safe.directory *</span> como atalho, pois isso desativa essa verificação de segurança para todos os repositórios.</div>

        <h3>O que havia de errado no exemplo abaixo?</h3>
        <pre class="command">C:\\Users\\lenovo&gt;git init\n...\nY:\\...\\site-cafe-aurora&gt;git status</pre>
        <p>Há <strong>dois problemas diferentes</strong>: primeiro, o <span class="inline-code">git init</span> foi executado antes de entrar no projeto da rede, portanto criou um repositório em <span class="inline-code">C:\\Users\\lenovo</span>. Segundo, o <span class="inline-code">git status</span> na rede encontrou um repositório cuja propriedade o Git não conseguiu validar, além de uma configuração antiga de <span class="inline-code">safe.directory</span>.</p>
        <div class="concept-box"><strong>A ordem correta é:</strong> escolher local ou rede → entrar na pasta-base → criar/entrar em <span class="inline-code">site-cafe-aurora</span> → conferir o caminho → <span class="inline-code">git init</span> → <span class="inline-code">git status</span> → somente se necessário, corrigir <span class="inline-code">safe.directory</span>.</div>
        <p>Depois que o diretório correto estiver autorizado, <span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: o arquivo existe, mas ainda não foi incluído em nenhum commit.</p>`
    );
  }
})();