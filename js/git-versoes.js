(() => {
  const gitNovo = [
    {
      id: 1,
      menu: '1 Por que Git?',
      title: '1 — Por que usar Git?',
      objective: 'Perceber um problema real de versões e entender por que Git e GitHub existem.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Parte 1 — Git no computador</span>
          <h3>Um horário errado trouxe um problema de verdade</h3>
          <p>O <strong>Café Aurora</strong> é um pequeno negócio de bairro. Marina administra o café e Rafael cuida do pequeno projeto digital usado para manter horários e avisos que depois são publicados para os clientes.</p>
          <p>Na segunda-feira, Marina pediu uma atualização no horário de sábado. Na terça, pediu também um aviso sobre música ao vivo. Na quarta, perceberam que o horário de sábado havia sido digitado como <strong>20:00</strong>, quando o correto era <strong>18:00</strong>. No fim de semana, clientes consultaram a informação errada e chegaram depois de o café já ter fechado.</p>
        </div>
        <div class="flow">segunda: horário alterado\n      ↓\nterça: novo aviso\n      ↓\nquarta: erro percebido\n      ↓\nquando o erro entrou?\nqual era o conteúdo correto?</div>
        <p>Rafael tinha arquivos e mensagens, mas não um histórico confiável que mostrasse cada mudança. O problema não era apenas corrigir o horário: era conseguir responder <strong>o que mudou, quando mudou e como recuperar um estado anterior</strong>.</p>
        <p>É exatamente aí que entra o <strong>Git</strong>: ele registra momentos do projeto e permite consultar sua história. Cada registro importante é chamado de <strong>commit</strong>.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>Git</strong><br>Controla versões no computador.</div>
          <div class="mini-card"><strong>GitHub</strong><br>Hospeda e compartilha repositórios pela Internet.</div>
        </div>
        <div class="concept-box"><strong>Git guarda a história do projeto. GitHub permite levar essa história para um repositório remoto.</strong></div>
        <h3>O projeto que vamos acompanhar</h3>
        <p>Vamos reconstruir essa situação de maneira controlada em uma pasta chamada <span class="inline-code">site-cafe-aurora</span>. Usaremos arquivos de texto para enxergar as mudanças com facilidade. O mesmo raciocínio vale depois para HTML, CSS, JavaScript, Python ou outros arquivos de projeto.</p>
        <div class="flow">preparar → criar projeto → registrar → alterar → investigar → recuperar → publicar</div>`
    },
    {
      id: 2,
      menu: '2 Preparar',
      title: '2 — Preparando o Git',
      objective: 'Instalar o Git, abrir o terminal e identificar quem fará os registros.',
      content: `
        <div class="hero-box">
          <h3>Antes de registrar a próxima mudança</h3>
          <p>Rafael decidiu começar o novo histórico antes de continuar alterando o projeto do Café Aurora. Para isso, o Git precisa estar instalado e saber quem está criando os commits.</p>
        </div>
        <h3>1. Instale o Git</h3>
        <p>Acesse <strong>git-scm.com</strong>, escolha o instalador para Windows e conclua a instalação. Neste primeiro contato, mantenha as opções padrão quando não houver uma orientação específica.</p>
        <figure class="image-card">
          <img src="../img/git/git-instalacao-windows.webp" alt="Página oficial do Git com opções de instalação" loading="lazy">
          <figcaption>A aparência e a versão podem mudar. O objetivo é instalar o Git para Windows.</figcaption>
        </figure>
        <h3>2. Abra o Prompt de Comando</h3>
        <p>Pressione <strong>Windows + R</strong>, digite <span class="inline-code">cmd</span> e pressione <strong>Enter</strong>. É nessa janela que executaremos os comandos deste módulo.</p>
        <h3>3. Confirme a instalação</h3>
        <pre class="command">git --version</pre>
        <p>Se aparecer algo semelhante a <span class="inline-code">git version 2.x.x</span>, o Git foi reconhecido. O número exato pode ser diferente.</p>
        <h3>4. Identifique o autor</h3>
        <pre class="command">git config --global user.name "Seu Nome"\ngit config --global user.email "seuemail@exemplo.com"</pre>
        <p>Esses dados serão associados aos commits criados por esse usuário do Windows.</p>
        <p>Confira:</p>
        <pre class="command">git config --global user.name\ngit config --global user.email</pre>
        <div class="note-box"><strong>Computador compartilhado:</strong> confira nome e e-mail antes de fazer commits. Em laboratório, outra pessoa pode ter usado o mesmo usuário do Windows.</div>`
    },
    {
      id: 3,
      menu: '3 Localizar',
      title: '3 — Criando e encontrando a pasta do projeto',
      objective: 'Usar somente o CMD necessário para chegar ao projeto sem executar Git na pasta errada.',
      content: `
        <div class="hero-box">
          <h3>Um comando certo na pasta errada continua sendo um problema</h3>
          <p>O Git trabalha com a pasta em que o CMD está posicionado. Antes de criar o histórico do Café Aurora, vamos criar e entrar na pasta correta.</p>
        </div>
        <h3>Quatro comandos de CMD que bastam por enquanto</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>dir</strong><br>mostra arquivos e pastas.</div>
          <div class="mini-card"><strong>cd</strong><br>muda de pasta.</div>
          <div class="mini-card"><strong>mkdir</strong><br>cria uma pasta.</div>
          <div class="mini-card"><strong>cd ..</strong><br>volta uma pasta.</div>
        </div>
        <h3>1. Vá para sua pasta de usuário</h3>
        <pre class="command">cd /d "%USERPROFILE%"</pre>
        <p><span class="inline-code">cd</span> muda de pasta; <span class="inline-code">/d</span> também permite mudar de unidade; <span class="inline-code">%USERPROFILE%</span> representa a pasta do usuário atual do Windows.</p>
        <h3>2. Crie uma área para seus repositórios</h3>
        <pre class="command">mkdir meus-repositorios\ncd meus-repositorios</pre>
        <h3>3. Crie o projeto do Café Aurora</h3>
        <pre class="command">mkdir site-cafe-aurora\ncd site-cafe-aurora</pre>
        <p>O CMD deverá mostrar um caminho parecido com:</p>
        <pre class="command">C:\\Users\\Usuario\\meus-repositorios\\site-cafe-aurora&gt;</pre>
        <h3>4. Confira o local</h3>
        <pre class="command">dir</pre>
        <div class="concept-box"><strong>Crie o hábito de olhar o caminho antes de executar Git. Ele mostra onde o comando terá efeito.</strong></div>`
    },
    {
      id: 4,
      menu: '4 Começar',
      title: '4 — Começando a controlar o projeto',
      objective: 'Transformar a pasta em repositório, criar os primeiros arquivos e interpretar o estado mostrado pelo Git.',
      content: `
        <div class="hero-box">
          <h3>A pasta existe. O histórico ainda não.</h3>
          <p>Marina confirmou que o horário correto de sábado é <strong>08:00–18:00</strong>. Esse será o primeiro estado confiável do novo projeto.</p>
        </div>
        <h3>1. Inicie o repositório</h3>
        <pre class="command">git init</pre>
        <p><span class="inline-code">git init</span> transforma a pasta atual em um repositório Git. O Git cria internamente uma pasta chamada <span class="inline-code">.git</span>; não precisamos editá-la manualmente.</p>
        <h3>2. Crie o primeiro arquivo</h3>
        <pre class="command">echo Sabado: 08:00-18:00 &gt; horario.txt</pre>
        <p>O sinal <span class="inline-code">&gt;</span> cria ou substitui o conteúdo do arquivo. Confira:</p>
        <pre class="command">type horario.txt</pre>
        <h3>3. Pergunte ao Git como está o projeto</h3>
        <pre class="command">git status</pre>
        <p><span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: o arquivo existe, mas ainda não foi incluído em nenhum commit.</p>
        <div class="concept-box"><strong>git status responde: “como está meu repositório agora?”</strong></div>
        <h3>4. Evite arquivos que não devem ser versionados</h3>
        <p>Projetos reais podem ter arquivos temporários ou dados que não devem ser publicados. Vamos criar uma regra simples:</p>
        <pre class="command">echo .env &gt; .gitignore\necho *.tmp &gt;&gt; .gitignore</pre>
        <p>O sinal <span class="inline-code">&gt;&gt;</span> acrescenta uma nova linha sem apagar a anterior.</p>
        <div class="danger-box"><strong>Nunca publique senhas, tokens ou chaves de API.</strong> O <span class="inline-code">.gitignore</span> ajuda a prevenir erros, mas você ainda deve conferir o que será versionado.</div>`
    },
    {
      id: 5,
      menu: '5 Registrar',
      title: '5 — Registrando mudanças com sentido',
      objective: 'Entender status → diff → add → commit acompanhando versões reais do mesmo projeto.',
      content: `
        <div class="hero-box">
          <h3>Primeira versão aprovada</h3>
          <p>O horário foi conferido por Marina. Agora Rafael quer registrar esse momento antes de receber novas solicitações.</p>
        </div>
        <h3>1. Veja o que está pendente</h3>
        <pre class="command">git status</pre>
        <h3>2. Prepare os arquivos</h3>
        <pre class="command">git add horario.txt\ngit add .gitignore\ngit status</pre>
        <p>Depois do <span class="inline-code">git add</span>, os arquivos devem aparecer em <strong>Changes to be committed</strong>. Eles estão preparados, mas o registro ainda não foi criado.</p>
        <h3>3. Crie o primeiro commit</h3>
        <pre class="command">git commit -m "Registra horario aprovado"\ngit status</pre>
        <p>Se não houver novas mudanças, o Git indicará uma área de trabalho limpa. Agora existe um ponto confiável no histórico.</p>
        <div class="concept-box"><strong>git add prepara. git commit registra.</strong></div>

        <h3>Segunda solicitação: música ao vivo</h3>
        <p>No dia seguinte, Marina confirma música ao vivo na sexta às 19h. Rafael cria outro arquivo:</p>
        <pre class="command">echo Musica ao vivo: sexta 19h &gt; avisos.txt\ntype avisos.txt\ngit status</pre>
        <p>Como <span class="inline-code">avisos.txt</span> é novo, use <span class="inline-code">type</span> para conferir o conteúdo e depois registre:</p>
        <pre class="command">git add avisos.txt\ngit status\ngit commit -m "Adiciona aviso de musica ao vivo"</pre>

        <h3>Terceira alteração: aqui nasce o erro</h3>
        <p>Mais tarde, ao atualizar novamente o horário, Rafael digita <strong>20:00</strong> no lugar de <strong>18:00</strong> e não percebe.</p>
        <pre class="command">echo Sabado: 08:00-20:00 &gt; horario.txt\ngit status\ngit diff</pre>
        <p><span class="inline-code">status</span> mostra <strong>qual arquivo mudou</strong>. <span class="inline-code">diff</span> mostra <strong>o que mudou dentro do arquivo</strong>.</p>
        <pre class="command">git add horario.txt\ngit commit -m "Atualiza horario de sabado"</pre>
        <div class="note-box"><strong>Mensagem de commit descreve a intenção, não garante que a mudança esteja correta.</strong> Por isso o histórico também serve para investigar erros depois.</div>`
    },
    {
      id: 6,
      menu: '6 Investigar',
      title: '6 — Descobrindo quando o erro entrou',
      objective: 'Usar o histórico como evidência antes de decidir como corrigir.',
      content: `
        <div class="hero-box">
          <h3>Os clientes encontraram o café fechado</h3>
          <p>No sábado, Marina recebe a mensagem de que clientes chegaram depois das 18h porque consultaram o horário 20h. Agora temos exatamente o problema do início do módulo — mas desta vez existe histórico.</p>
        </div>
        <h3>1. Localize os commits</h3>
        <pre class="command">git log --oneline</pre>
        <p>O resultado será parecido com:</p>
        <pre class="command">7f32abc Atualiza horario de sabado\n4d10ef2 Adiciona aviso de musica ao vivo\n8cb271a Registra horario aprovado</pre>
        <p>O código à esquerda é o <strong>hash</strong> resumido: um identificador daquele commit.</p>
        <h3>2. Veja o que um commit fez</h3>
        <pre class="command">git show HASH</pre>
        <p>Substitua <span class="inline-code">HASH</span> pelo identificador do commit que você quer investigar. O Git mostra os dados do commit e as linhas alteradas por ele.</p>
        <div class="note-box">Se <span class="inline-code">git log</span> ou <span class="inline-code">git show</span> abrir uma tela de navegação, pressione <span class="inline-code">q</span> para voltar ao CMD.</div>
        <h3>3. Compare dois momentos</h3>
        <p>Se você identificou um commit em que o horário estava correto e outro em que ficou errado:</p>
        <pre class="command">git diff HASH_CORRETO HASH_ERRO</pre>
        <p>A ordem importa: o Git mostra o que mudou do primeiro commit para o segundo.</p>
        <div class="flow">problema real\n      ↓\ngit log --oneline\n      ↓\ngit show HASH\n      ↓\ngit diff HASH1 HASH2\n      ↓\nidentifico a mudança\n      ↓\nsó então corrijo</div>
        <div class="concept-box"><strong>Controle de versões não é apenas guardar cópias. É produzir evidência para entender o que aconteceu.</strong></div>`
    },
    {
      id: 7,
      menu: '7 Recuperar',
      title: '7 — Corrigindo e recuperando sem apagar a história',
      objective: 'Escolher a recuperação certa conforme o momento do erro e saber retomar uma versão específica.',
      content: `
        <div class="hero-box">
          <h3>O erro do horário já virou commit</h3>
          <p>Rafael confirmou pelo histórico que o último commit introduziu 20:00. Como o erro já foi registrado, não basta simplesmente “desfazer uma digitação”. Precisamos corrigir a história de forma explicável.</p>
        </div>
        <h3>1. Desfaça o último commit preservando o histórico</h3>
        <pre class="command">git status\ngit log --oneline\ngit revert --no-edit HEAD</pre>
        <p><span class="inline-code">HEAD</span> é uma forma de o Git se referir ao commit atual. <span class="inline-code">git revert</span> cria <strong>um novo commit</strong> que desfaz as alterações do commit escolhido.</p>
        <pre class="command">type horario.txt\ngit log --oneline</pre>
        <div class="concept-box"><strong>O commit com o erro continua no histórico; a correção também fica registrada.</strong></div>
        <p>Se o commit errado não for o último, localize-o e use:</p>
        <pre class="command">git revert --no-edit HASH</pre>
        <div class="note-box"><strong>Atenção:</strong> reverter um commit antigo pode gerar conflito se mudanças posteriores dependerem dele. Neste módulo, pratique primeiro com commits simples.</div>

        <h3>2. Se o erro ainda não virou commit</h3>
        <p>Depois, Marina pede uma informação sobre delivery. Rafael digita o horário errado, mas percebe antes de usar <span class="inline-code">git add</span>:</p>
        <pre class="command">echo Delivery: ate 23h &gt;&gt; avisos.txt\ngit diff\ngit restore avisos.txt</pre>
        <p><span class="inline-code">git restore avisos.txt</span> descarta aquela alteração local e volta o arquivo ao último commit.</p>

        <h3>3. Se já usou git add, mas ainda não fez commit</h3>
        <p>Rafael escreve a informação correta, prepara o arquivo, mas Marina pede para adiar a publicação:</p>
        <pre class="command">echo Delivery: ate 21h &gt;&gt; avisos.txt\ngit add avisos.txt\ngit status\ngit restore --staged avisos.txt\ngit status</pre>
        <p>O arquivo sai da preparação, mas a linha continua nele. Como a decisão foi adiar, descarte também a alteração local:</p>
        <pre class="command">git restore avisos.txt</pre>

        <h3>4. Quero recuperar um arquivo de uma versão específica</h3>
        <p>Em outro momento, você pode não querer desfazer um commit inteiro. Pode precisar apenas do conteúdo que um arquivo tinha em determinado ponto do histórico.</p>
        <pre class="command">git log --oneline\ngit show HASH\ngit restore --source=HASH -- horario.txt\ntype horario.txt\ngit status</pre>
        <p>Se o conteúdo recuperado é realmente o desejado, registre essa decisão no presente:</p>
        <pre class="command">git add horario.txt\ngit commit -m "Restaura horario de uma versao anterior"</pre>

        <h3>5. Quero retomar os arquivos rastreados de uma versão aprovada</h3>
        <p>Se várias mudanças posteriores precisarem ser abandonadas e você já identificou um commit aprovado, use esse commit como fonte para os arquivos rastreados.</p>
        <div class="danger-box"><strong>Antes de começar, a área de trabalho deve estar limpa.</strong> Confira com <span class="inline-code">git status</span> para não sobrescrever trabalho ainda não registrado.</div>
        <pre class="command">git status\ngit log --oneline\ngit show HASH\ngit restore --source=HASH -- .\ngit status\ngit diff\ngit add -A\ngit commit -m "Retoma versao aprovada do projeto"</pre>
        <p>Esse caminho preserva a história: o projeto recuperado vira um novo commit.</p>
        <div class="danger-box"><strong>Neste módulo não usamos git reset --hard para “voltar versões”.</strong> Primeiro aprendemos caminhos que permitem investigar e recuperar sem reescrever o histórico.</div>`
    },
    {
      id: 8,
      menu: '8 Consolidar',
      title: '8 — O fluxo Git que precisa ficar na cabeça',
      objective: 'Consolidar o ciclo local usando uma nova solicitação do mesmo projeto.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Fechamento do Git local</span>
          <h3>Uma nova solicitação, agora sem improviso</h3>
          <p>Marina finalmente confirma o delivery até 21h. Desta vez Rafael já possui um fluxo: entende o estado, altera, confere, prepara, registra e verifica o histórico.</p>
        </div>
        <pre class="command">git status\necho Delivery: ate 21h &gt;&gt; avisos.txt\ngit status\ngit diff\ngit add avisos.txt\ngit status\ngit commit -m "Adiciona horario do delivery"\ngit status\ngit log --oneline</pre>
        <div class="flow">entender → alterar → conferir → preparar → registrar → confirmar → consultar</div>
        <h3>Qual pergunta cada comando responde?</h3>
        <div class="flow">git status                    → como está o repositório?\ngit diff                      → o que mudou agora?\ngit add arquivo               → o que quero preparar?\ngit commit -m "Mensagem"      → quero registrar esta versão\ngit log --oneline             → quais commits existem?\ngit show HASH                 → o que aconteceu naquele commit?\ngit revert --no-edit HASH     → quero desfazer um commit preservando a história\ngit restore --source=HASH -- arquivo → quero recuperar conteúdo de uma versão</div>
        <div class="ok-box"><strong>Git local concluído.</strong> O projeto do Café Aurora já possui histórico útil. O próximo problema surge naturalmente: esse histórico ainda existe somente neste computador.</div>`
    }
  ];

  const githubNovo = [
    {
      id: 1,
      menu: '1 Por que GitHub?',
      title: 'GitHub 1 — Por que publicar este projeto?',
      objective: 'Entender a necessidade do repositório remoto e preparar o GitHub para o projeto que já existe no computador.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Parte 2 — GitHub</span>
          <h3>O histórico ficou importante demais para existir em um único computador</h3>
          <p>Depois do problema com o horário, Marina percebeu que o histórico ajudou a explicar e corrigir o erro. Agora ela quer uma cópia online do repositório e a possibilidade de continuar o trabalho mesmo se Rafael precisar usar outro computador.</p>
        </div>
        <p>É aqui que o <strong>GitHub</strong> passa a ser necessário. O Git continuará controlando versões; o GitHub hospedará um <strong>repositório remoto</strong>.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>Local</strong><br><span class="inline-code">site-cafe-aurora</span> no computador.</div>
          <div class="mini-card"><strong>Remoto</strong><br>uma cópia do repositório no GitHub.</div>
        </div>
        <h3>1. Crie sua conta</h3>
        <p>Acesse <strong>github.com</strong>, crie a conta e confirme o e-mail.</p>
        <h3>2. Localize apenas o necessário</h3>
        <ul>
          <li><strong>Repositories</strong> — seus repositórios;</li>
          <li><strong>New repository</strong> — criar um repositório;</li>
          <li><strong>Code</strong> — copiar o endereço HTTPS.</li>
        </ul>
        <h3>3. Crie um repositório remoto vazio</h3>
        <p>Crie um repositório chamado <span class="inline-code">site-cafe-aurora</span>. Como o projeto <strong>já existe no PC e já possui commits</strong>, não adicione README, licença nem <span class="inline-code">.gitignore</span> neste momento.</p>
        <div class="concept-box"><strong>Estamos continuando o mesmo projeto. Não vamos abandoná-lo para começar outro exemplo.</strong></div>
        <div class="note-box"><strong>Conheça também:</strong> perfil, stars, seguidores e feed existem no GitHub, mas não são necessários para aprender este fluxo inicial.</div>`
    },
    {
      id: 2,
      menu: '2 Publicar',
      title: 'GitHub 2 — Publicando o projeto que já construímos',
      objective: 'Conectar o repositório local ao GitHub e fazer o primeiro push sem adivinhar o nome da branch.',
      content: `
        <div class="hero-box">
          <h3>Local existe. Remoto existe. Falta ligá-los.</h3>
          <p>Rafael copia no GitHub a URL HTTPS do repositório vazio. Agora precisamos dizer ao Git local onde está o remoto.</p>
        </div>
        <h3>1. Confirme que está no projeto certo</h3>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\site-cafe-aurora"\ngit status\ngit log --oneline</pre>
        <h3>2. Adicione o remoto</h3>
        <pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>
        <p><strong>origin</strong> é apenas um nome curto normalmente usado para o repositório remoto principal.</p>
        <h3>3. Descubra sua branch atual</h3>
        <pre class="command">git branch --show-current</pre>
        <p>Pode aparecer <span class="inline-code">main</span>, <span class="inline-code">master</span> ou outro nome. Não adivinhe.</p>
        <h3>4. Faça o primeiro envio</h3>
        <p>Se o comando mostrou <span class="inline-code">main</span>:</p>
        <pre class="command">git push -u origin main</pre>
        <p>Se mostrou <span class="inline-code">master</span>:</p>
        <pre class="command">git push -u origin master</pre>
        <p>O <span class="inline-code">-u</span> cria a ligação de acompanhamento entre a branch local e a remota. Depois, normalmente bastará usar <span class="inline-code">git push</span>.</p>
        <h3>5. Confira no GitHub</h3>
        <p>Atualize a página do repositório. Os arquivos e os commits do Café Aurora devem aparecer.</p>
        <div class="concept-box"><strong>commit registra localmente. push envia commits ao remoto.</strong></div>
        <h3>Se aparecer autenticação</h3>
        <p>No Git for Windows atual, é comum o Git Credential Manager abrir o navegador para autenticar sua conta. Conclua o login solicitado.</p>`
    },
    {
      id: 3,
      menu: '3 Enviar mudanças',
      title: 'GitHub 3 — Alterando no PC e enviando ao GitHub',
      objective: 'Aplicar o fluxo local já conhecido e perceber que o GitHub só muda depois do push.',
      content: `
        <div class="hero-box">
          <h3>Marina pediu um telefone de contato</h3>
          <p>Rafael fará a mudança no computador. O GitHub continuará antigo até que o novo commit seja enviado.</p>
        </div>
        <pre class="command">git status\necho Contato: 11 99999-0000 &gt;&gt; avisos.txt\ngit diff\ngit add avisos.txt\ngit status\ngit commit -m "Adiciona contato do cafe"\ngit push</pre>
        <p>Depois do push, atualize o repositório no navegador e confirme se o commit apareceu.</p>
        <div class="flow">alterar no PC → conferir → commit → push → GitHub atualizado</div>`
    },
    {
      id: 4,
      menu: '4 Receber mudanças',
      title: 'GitHub 4 — Quando o GitHub está mais novo que o computador',
      objective: 'Fazer uma pequena alteração remota e recebê-la com pull.',
      content: `
        <div class="hero-box">
          <h3>Agora a mudança nasceu no GitHub</h3>
          <p>Marina percebe uma pequena correção de texto e Rafael está longe do computador principal. Para uma alteração simples, ele edita <span class="inline-code">avisos.txt</span> pelo navegador e cria o commit oferecido pela interface.</p>
        </div>
        <h3>1. Antes do pull, veja o arquivo local</h3>
        <pre class="command">type avisos.txt</pre>
        <p>O computador ainda não recebeu o commit criado no GitHub.</p>
        <h3>2. Traga a novidade</h3>
        <pre class="command">git pull\ntype avisos.txt\ngit log --oneline</pre>
        <div class="mini-grid">
          <div class="mini-card"><strong>push</strong><br>envia commits locais.</div>
          <div class="mini-card"><strong>pull</strong><br>recebe commits do remoto.</div>
        </div>
        <div class="note-box"><strong>Edição no navegador:</strong> é útil para ajustes pequenos. Para mudanças maiores, trabalhe nos arquivos locais, confira e depois use commit + push.</div>`
    },
    {
      id: 5,
      menu: '5 Clonar',
      title: 'GitHub 5 — Trazendo um projeto que já existe no GitHub',
      objective: 'Entender clone somente depois de conhecer como um projeto chega ao GitHub.',
      content: `
        <div class="hero-box">
          <h3>Rafael precisa trabalhar em outro computador</h3>
          <p>Agora faz sentido aprender <span class="inline-code">git clone</span>: o projeto completo já está no GitHub e precisa ser trazido para outra máquina, com arquivos, histórico e ligação remota.</p>
        </div>
        <h3>1. Copie a URL HTTPS em Code</h3>
        <pre class="command">https://github.com/USUARIO/site-cafe-aurora.git</pre>
        <h3>2. No outro computador, prepare uma pasta</h3>
        <pre class="command">cd /d "%USERPROFILE%"\nmkdir meus-repositorios\ncd meus-repositorios</pre>
        <h3>3. Clone</h3>
        <pre class="command">git clone https://github.com/USUARIO/site-cafe-aurora.git\ncd site-cafe-aurora</pre>
        <h3>4. Confira o que veio</h3>
        <pre class="command">dir\ngit status\ngit log --oneline\ngit remote -v</pre>
        <div class="concept-box"><strong>Depois de git clone, não execute git init. O repositório, o histórico e o origin já vieram configurados.</strong></div>
        <div class="note-box">Se estiver praticando no mesmo computador e a pasta <span class="inline-code">site-cafe-aurora</span> já existir, faça este teste em outra pasta para evitar conflito de nomes.</div>`
    },
    {
      id: 6,
      menu: '6 Dia a dia',
      title: 'GitHub 6 — O fluxo do dia a dia',
      objective: 'Transformar Git + GitHub em uma rotina previsível e verificável.',
      content: `
        <div class="hero-box">
          <h3>O projeto já não depende de improviso</h3>
          <p>A cada nova solicitação do Café Aurora, Rafael pode repetir o mesmo ciclo: atualizar o local, trabalhar, conferir, registrar e enviar.</p>
        </div>
        <pre class="command">git pull\n\nREM trabalhe nos arquivos\n\ngit status\ngit diff\ngit add .\ngit status\ngit commit -m "Descricao da alteracao"\ngit push\ngit status</pre>
        <div class="flow">PULL → TRABALHAR → STATUS/DIFF → ADD → COMMIT → PUSH → STATUS</div>
        <h3>Quando precisar se localizar</h3>
        <pre class="command">git log --oneline\ngit remote -v\ngit branch --show-current</pre>
        <div class="concept-box"><strong>Primeiro descubra o estado. Depois escolha o comando.</strong></div>`
    },
    {
      id: 7,
      menu: '7 Diagnóstico',
      title: 'GitHub 7 — Problemas comuns e recuperação',
      objective: 'Diagnosticar mensagens frequentes sem usar soluções destrutivas por tentativa.',
      content: `
        <div class="hero-box">
          <h3>Quando algo der errado, o diagnóstico vem antes do conserto</h3>
          <p>Em vez de copiar um comando aleatório, Rafael verifica quatro coisas: <strong>onde está, como está o repositório, qual remoto existe e qual branch está ativa</strong>.</p>
        </div>
        <h3>Diagnóstico inicial</h3>
        <pre class="command">git status\ngit remote -v\ngit branch --show-current\ngit log --oneline</pre>

        <h3>“not a git repository”</h3>
        <p>É comum estar na pasta errada. Confira o caminho, volte ao projeto e teste:</p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\site-cafe-aurora"\ngit status</pre>

        <h3>Não aparece nenhum origin</h3>
        <pre class="command">git remote -v</pre>
        <p>Se não houver saída e este projeto realmente precisa ser conectado ao GitHub:</p>
        <pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>
        <p>Se aparecer <strong>remote origin already exists</strong>, não adicione outro. Use <span class="inline-code">git remote -v</span> para conferir o endereço já configurado.</p>

        <h3>“src refspec main does not match any”</h3>
        <p>Essa mensagem não possui uma única causa. Duas verificações simples resolvem boa parte dos casos:</p>
        <pre class="command">git branch --show-current\ngit log --oneline</pre>
        <ul>
          <li>Se a branch atual se chama <span class="inline-code">master</span>, não tente enviar <span class="inline-code">main</span>; use o nome real.</li>
          <li>Se não existe nenhum commit, ainda não há histórico local para enviar. Crie pelo menos um commit antes do primeiro push.</li>
        </ul>

        <h3>O push foi rejeitado porque o remoto tem novidades</h3>
        <pre class="command">git pull</pre>
        <p>Se o pull terminar normalmente e o projeto ficar atualizado:</p>
        <pre class="command">git push</pre>

        <h3>O Git informou conflito</h3>
        <p>Isso significa que duas mudanças atingiram a mesma parte de um arquivo e o Git não decidiu sozinho qual deve permanecer. Dentro do arquivo podem aparecer marcações semelhantes a:</p>
        <pre class="command">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nversao do computador\n=======\nversao recebida\n&gt;&gt;&gt;&gt;&gt;&gt;&gt;</pre>
        <p>Leia as duas partes, mantenha ou combine o conteúdo correto, remova as marcações, salve e finalize:</p>
        <pre class="command">git status\ngit add NOME-DO-ARQUIVO\ngit commit -m "Resolve conflito"\ngit push</pre>
        <div class="note-box"><strong>Conflito não significa que o projeto foi perdido.</strong> Significa que uma decisão humana é necessária para definir qual conteúdo deve permanecer.</div>

        <h3>Enviei ao GitHub um commit errado</h3>
        <p>Se a alteração já foi compartilhada, preserve a história e registre a correção:</p>
        <pre class="command">git status\ngit log --oneline\ngit revert --no-edit HASH\ngit push</pre>
        <p>Se foi justamente o último commit:</p>
        <pre class="command">git revert --no-edit HEAD\ngit push</pre>

        <div class="danger-box"><strong>Neste nível, não use reset --hard, rebase ou force push como tentativa de socorro.</strong> Primeiro investigue o estado e prefira uma recuperação que deixe o histórico explicável.</div>
        <div class="ok-box"><strong>Git + GitHub concluídos.</strong> Você acompanhou um projeto do problema inicial até o histórico local, recuperação, publicação, sincronização e diagnóstico.</div>`
    }
  ];

  gitSteps.splice(0, gitSteps.length, ...gitNovo);
  githubSteps.splice(0, githubSteps.length, ...githubNovo);

  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const intro = exerciseStep('inicio');
  if (intro && !intro.content.includes('comparação de versões')) {
    intro.content = intro.content.replace(
      '<li>.gitignore e restore.</li>',
      '<li>.gitignore, restore, histórico, comparação de versões e revert.</li>'
    );
  }

  const e7 = exerciseStep('e7');
  if (e7 && !e7.content.includes('Parte C — O erro já foi commitado')) {
    e7.title = 'Exercício 7 — Desfazendo e recuperando versões';
    e7.objective = 'Praticar recuperação antes e depois do commit e reutilizar uma versão específica.';
    e7.content += `
      <div class="task-box"><h4>Parte C — O erro já foi commitado</h4><p>Primeiro registre a linha que você decidiu manter na Parte B. Depois acrescente <strong>Informacao temporaria</strong>, faça o commit e só então descubra que ela estava errada. Desfaça o último commit sem apagá-lo do histórico.</p></div>
      <details class="answer-box"><summary>Resposta da Parte C</summary><div class="answer-content"><pre class="command">git add anotacoes.txt\ngit commit -m "Mantem nova anotacao"\necho Informacao temporaria &gt;&gt; anotacoes.txt\ngit add anotacoes.txt\ngit commit -m "Inclui informacao temporaria"\ngit log --oneline\ngit revert --no-edit HEAD\ngit log --oneline\ntype anotacoes.txt</pre><p>O histórico mostrará o commit com o erro e o novo commit que o desfez.</p></div></details>
      <div class="task-box"><h4>Parte D — Recuperando uma versão específica</h4><p>Localize um commit anterior, investigue-o, recupere <span class="inline-code">anotacoes.txt</span> como estava naquele momento e registre a recuperação como uma nova versão.</p></div>
      <details class="answer-box"><summary>Uma possível sequência</summary><div class="answer-content"><pre class="command">git log --oneline\ngit show HASH\ngit restore --source=HASH -- anotacoes.txt\ntype anotacoes.txt\ngit status\ngit add anotacoes.txt\ngit commit -m "Restaura anotacoes de uma versao anterior"\ngit log --oneline</pre><p>Substitua <span class="inline-code">HASH</span> pelo identificador da versão escolhida.</p></div></details>`;
  }

  const e14 = exerciseStep('e14');
  if (e14 && !e14.content.includes('Já fez um commit errado')) {
    e14.content = e14.content
      .replace(
        '<li>Usou add por engano. Como retirar da preparação sem perder a alteração?</li>',
        '<li>Usou add por engano. Como retirar da preparação sem perder a alteração?</li><li>Já fez um commit errado e quer desfazê-lo preservando o histórico. Qual comando?</li><li>Quer recuperar um arquivo como estava em um commit específico. Qual comando?</li>'
      )
      .replace(
        '5 → git restore --staged NOME-DO-ARQUIVO</div>',
        '5 → git restore --staged NOME-DO-ARQUIVO\n6 → git revert --no-edit HASH\n7 → git restore --source=HASH -- NOME-DO-ARQUIVO</div>'
      );
  }

  const e15 = exerciseStep('e15');
  if (e15 && !e15.content.includes('desfazer esse commit com')) {
    e15.content = e15.content.replace(
      '<li>receber depois uma nova alteração local usando <span class="inline-code">git push</span>.</li>',
      '<li>receber depois uma nova alteração local usando <span class="inline-code">git push</span>;</li><li>criar de propósito um commit de teste, desfazer esse commit com <span class="inline-code">git revert</span> e confirmar no histórico que a correção também ficou registrada.</li>'
    );
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();
