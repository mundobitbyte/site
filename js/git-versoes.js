(() => {
  const gitNovo = [
    {
      id: 1,
      menu: '1 Por que Git?',
      title: '1 — Por que usar Git?',
      objective: 'Entender o problema que o controle de versões resolve e diferenciar Git de GitHub.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Parte 1 — Git no computador</span>
          <h3>Qual versão estava certa?</h3>
          <p>A equipe de informática da escola mantém uma página de avisos usada pelos alunos. Na segunda-feira, João corrigiu o horário de atendimento. Na terça, Maria atualizou outro aviso. Na quarta, a coordenação percebeu que o horário publicado estava errado e alguns alunos já tinham consultado a informação. Era preciso descobrir <strong>quando o erro entrou</strong> e <strong>qual estado anterior estava correto</strong>.</p>
        </div>
        <div class="flow">segunda: horário atualizado\n      ↓\nterça: novo aviso\n      ↓\nquarta: erro percebido\n      ↓\nqual alteração causou?\nqual versão recuperar?</div>
        <p>Sem um histórico confiável, a equipe dependeria da memória ou de cópias soltas. O <strong>Git</strong> resolve justamente esse problema: ele registra momentos do projeto para que possamos acompanhar o que mudou, localizar uma versão e recuperar um estado anterior quando necessário.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>Git</strong><br>Controla versões no computador.</div>
          <div class="mini-card"><strong>GitHub</strong><br>Hospeda e compartilha repositórios na Internet.</div>
        </div>
        <div class="concept-box"><strong>Git guarda a história. GitHub ajuda a publicar e compartilhar essa história.</strong></div>
        <h3>Nosso caminho</h3>
        <div class="flow">preparar → criar repositório → alterar → registrar → consultar → recuperar → publicar</div>
        <p>Não vamos decorar dezenas de comandos. Cada comando aparecerá quando surgir um problema que ele resolve.</p>`
    },
    {
      id: 2,
      menu: '2 Preparar',
      title: '2 — Preparando o Git',
      objective: 'Instalar, testar e identificar o autor dos commits.',
      content: `
        <div class="hero-box">
          <h3>Antes do primeiro registro</h3>
          <p>Para a equipe saber quem registrou cada alteração, o Git precisa estar instalado e conhecer o nome e o e-mail do autor.</p>
        </div>
        <h3>1. Instale</h3>
        <p>Baixe o Git no site oficial <strong>git-scm.com</strong>. No Windows, neste primeiro contato, mantenha as opções padrão quando não houver orientação específica.</p>
        <figure class="image-card">
          <img src="../img/git/git-instalacao-windows.webp" alt="Página oficial do Git com opções de instalação" loading="lazy">
          <figcaption>A aparência e a versão podem mudar. O objetivo é instalar o Git para Windows.</figcaption>
        </figure>
        <h3>2. Confirme</h3>
        <pre class="command">git --version</pre>
        <p>Se aparecer <span class="inline-code">git version 2.x.x</span> ou outra versão válida, o comando foi reconhecido.</p>
        <h3>3. Identifique o autor</h3>
        <pre class="command">git config --global user.name "Seu Nome"\ngit config --global user.email "seuemail@exemplo.com"</pre>
        <p>Confira:</p>
        <pre class="command">git config --global user.name\ngit config --global user.email</pre>
        <div class="note-box"><strong>Computador compartilhado:</strong> confira esses dados antes de fazer commits. A configuração global pertence ao usuário do sistema que está sendo usado.</div>`
    },
    {
      id: 3,
      menu: '3 Localizar',
      title: '3 — Onde estou trabalhando?',
      objective: 'Usar apenas o CMD necessário para localizar e organizar o projeto.',
      content: `
        <div class="hero-box">
          <h3>O Git trabalha na pasta em que você está</h3>
          <p>Um comando correto executado na pasta errada continua sendo um problema. Antes de versionar, precisamos saber chegar ao projeto.</p>
        </div>
        <h3>Comandos de CMD que vamos usar</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>dir</strong><br>mostra arquivos e pastas.</div>
          <div class="mini-card"><strong>cd</strong><br>entra ou muda de pasta.</div>
          <div class="mini-card"><strong>mkdir</strong><br>cria uma pasta.</div>
          <div class="mini-card"><strong>cd ..</strong><br>volta uma pasta.</div>
        </div>
        <h3>Crie a pasta de trabalho</h3>
        <pre class="command">cd /d "%USERPROFILE%"\nmkdir meus-repositorios\ncd meus-repositorios\nmkdir primeiro-projeto\ncd primeiro-projeto</pre>
        <p>O caminho ficará semelhante a:</p>
        <pre class="command">C:\\Users\\Usuario\\meus-repositorios\\primeiro-projeto&gt;</pre>
        <div class="concept-box"><strong>Antes de um comando Git, olhe o caminho do CMD. Ele diz em qual pasta o comando será executado.</strong></div>`
    },
    {
      id: 4,
      menu: '4 Repositório',
      title: '4 — Primeiro repositório e primeiro arquivo',
      objective: 'Transformar uma pasta em repositório, criar um arquivo e interpretar o primeiro status.',
      content: `
        <div class="hero-box">
          <h3>A pasta existe, mas o Git ainda não cuida dela</h3>
          <p>Agora a equipe quer começar a registrar as mudanças de <span class="inline-code">primeiro-projeto</span>.</p>
        </div>
        <h3>1. Inicie o repositório</h3>
        <pre class="command">git init</pre>
        <p>O Git cria internamente a pasta <span class="inline-code">.git</span>, onde guarda as informações do repositório. Não a edite manualmente.</p>
        <h3>2. Crie um arquivo</h3>
        <pre class="command">echo Avisos da escola &gt; projeto.txt</pre>
        <h3>3. Pergunte ao Git o que aconteceu</h3>
        <pre class="command">git status</pre>
        <p>O arquivo aparecerá como <strong>não rastreado</strong>: ele existe, mas ainda não entrou em nenhum commit.</p>
        <div class="concept-box"><strong>git status responde: “como está meu repositório agora?”</strong></div>
        <h3>Arquivos que não devem entrar</h3>
        <p>Antes de começar a adicionar arquivos, crie regras para temporários ou dados que não devem ser publicados:</p>
        <pre class="command">echo .env &gt; .gitignore\necho *.tmp &gt;&gt; .gitignore</pre>
        <div class="danger-box"><strong>Nunca publique senhas, tokens ou chaves de API.</strong> O <span class="inline-code">.gitignore</span> ajuda, mas não substitui a conferência do que será versionado.</div>`
    },
    {
      id: 5,
      menu: '5 Criar versões',
      title: '5 — Criando versões',
      objective: 'Entender o ciclo status → diff → add → commit e registrar mudanças com sentido.',
      content: `
        <div class="hero-box">
          <h3>O primeiro aviso foi aprovado</h3>
          <p>Agora queremos registrar esse estado para poder reconhecê-lo no futuro.</p>
        </div>
        <h3>1. Confira</h3>
        <pre class="command">git status</pre>
        <h3>2. Prepare</h3>
        <pre class="command">git add projeto.txt\ngit add .gitignore</pre>
        <p><span class="inline-code">git add</span> prepara. Ainda não cria uma versão.</p>
        <h3>3. Registre</h3>
        <pre class="command">git commit -m "Cria aviso inicial"</pre>
        <p>Agora existe um <strong>commit</strong>: um ponto registrado no histórico.</p>
        <h3>Surge uma nova alteração</h3>
        <pre class="command">echo Reuniao sexta-feira &gt;&gt; projeto.txt\ngit status\ngit diff</pre>
        <p><span class="inline-code">status</span> mostra <strong>quais arquivos</strong> mudaram; <span class="inline-code">diff</span> mostra <strong>o que mudou nas linhas</strong>.</p>
        <pre class="command">git add projeto.txt\ngit commit -m "Adiciona aviso da reuniao"</pre>
        <div class="flow">alterar → status/diff → add → commit</div>
        <div class="mini-grid">
          <div class="mini-card"><strong>commit</strong><br>registro de um momento.</div>
          <div class="mini-card"><strong>hash</strong><br>identificador do commit.</div>
          <div class="mini-card"><strong>HEAD</strong><br>referência para o commit atual.</div>
        </div>
        <div class="note-box"><strong>Mensagem boa explica a mudança.</strong> Prefira “Corrige cálculo da média” a “teste”, “aaa” ou “alteração”.</div>`
    },
    {
      id: 6,
      menu: '6 Histórico',
      title: '6 — Entendendo o histórico',
      objective: 'Localizar, investigar e comparar versões antes de decidir o que corrigir.',
      content: `
        <div class="hero-box">
          <h3>Uma informação está errada. Em qual versão entrou?</h3>
          <p>A coordenação percebeu um problema no projeto. Em vez de editar por tentativa, a equipe vai usar o histórico como evidência.</p>
        </div>
        <h3>1. Localize os commits</h3>
        <pre class="command">git log --oneline</pre>
        <p>Exemplo:</p>
        <pre class="command">7f32abc Adiciona aviso da reuniao\n8cb271a Cria aviso inicial</pre>
        <p>O código à esquerda é o <strong>hash</strong> resumido.</p>
        <h3>2. Investigue um commit</h3>
        <pre class="command">git show HASH</pre>
        <p>O Git mostra informações do commit e as alterações introduzidas por ele.</p>
        <h3>3. Compare dois momentos</h3>
        <pre class="command">git diff HASH_ANTIGO HASH_NOVO</pre>
        <p>A ordem importa: você verá o que mudou do primeiro commit para o segundo.</p>
        <div class="flow">problema percebido\n      ↓\ngit log --oneline\n      ↓\ngit show HASH\n      ↓\ngit diff HASH1 HASH2\n      ↓\nentendo antes de corrigir</div>
        <div class="concept-box"><strong>O histórico não serve apenas para lembrar o passado; ele ajuda a decidir o próximo passo.</strong></div>`
    },
    {
      id: 7,
      menu: '7 Recuperar',
      title: '7 — Quando algo dá errado',
      objective: 'Escolher uma recuperação segura conforme o momento em que o erro foi percebido.',
      content: `
        <div class="hero-box">
          <h3>Nem todo erro acontece no mesmo momento</h3>
          <p>Às vezes percebemos o problema antes do commit. Outras vezes ele já foi registrado. O comando certo depende disso.</p>
        </div>
        <h3>Ainda não fiz git add</h3>
        <pre class="command">git diff\ngit restore projeto.txt</pre>
        <p>Volta o arquivo ao conteúdo do último commit e descarta aquela alteração local.</p>
        <h3>Já fiz git add, mas ainda não fiz commit</h3>
        <pre class="command">git restore --staged projeto.txt</pre>
        <p>O arquivo sai da preparação, mas a alteração permanece.</p>
        <h3>O erro já virou commit</h3>
        <p>Confira primeiro:</p>
        <pre class="command">git status\ngit log --oneline</pre>
        <p>Para desfazer o último commit preservando o histórico:</p>
        <pre class="command">git revert --no-edit HEAD</pre>
        <p>Para desfazer um commit específico:</p>
        <pre class="command">git revert --no-edit HASH</pre>
        <div class="concept-box"><strong>revert cria um novo commit de correção. Ele não apaga o commit antigo.</strong></div>
        <h3>Quero um arquivo como estava em uma versão específica</h3>
        <pre class="command">git restore --source=HASH -- projeto.txt\ntype projeto.txt\ngit status</pre>
        <p>Se o conteúdo recuperado é o que você precisa:</p>
        <pre class="command">git add projeto.txt\ngit commit -m "Restaura versao anterior de projeto.txt"</pre>
        <h3>Quero retomar os arquivos rastreados de uma versão aprovada</h3>
        <div class="danger-box"><strong>Faça somente com a área de trabalho limpa.</strong> Confira antes com <span class="inline-code">git status</span>.</div>
        <pre class="command">git status\ngit log --oneline\ngit restore --source=HASH -- .\ngit status\ngit add -A\ngit commit -m "Restaura projeto para versao aprovada"</pre>
        <div class="note-box">Arquivos não rastreados não são removidos automaticamente. Neste módulo não usamos <span class="inline-code">reset --hard</span> para “voltar versões”.</div>`
    },
    {
      id: 8,
      menu: '8 Fluxo Git',
      title: '8 — O fluxo Git que precisa ficar na cabeça',
      objective: 'Consolidar o trabalho local e saber qual pergunta cada comando responde.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Fechamento do Git local</span>
          <h3>Agora faça o trabalho como uma sequência</h3>
          <p>A equipe recebe uma nova solicitação, altera o projeto, confere, registra e depois consegue explicar o que aconteceu.</p>
        </div>
        <pre class="command">git status\n\nREM trabalhe no arquivo\n\ngit status\ngit diff\ngit add .\ngit commit -m "Descricao da alteracao"\ngit log --oneline</pre>
        <div class="flow">entender → alterar → conferir → preparar → registrar → consultar</div>
        <h3>Qual pergunta estou fazendo?</h3>
        <div class="flow">git status                    → como está o repositório?\ngit diff                      → o que mudou agora?\ngit add .                     → o que vai para o próximo commit?\ngit commit -m "Mensagem"      → quero registrar esta versão\ngit log --oneline             → quais versões existem?\ngit show HASH                 → o que aconteceu naquele commit?\ngit revert --no-edit HASH     → quero desfazer um commit sem apagar a história\ngit restore --source=HASH -- arquivo → quero recuperar conteúdo de uma versão</div>
        <div class="ok-box"><strong>Git local concluído.</strong> Você já consegue criar, investigar e recuperar versões. Agora vamos levar esse mesmo histórico ao GitHub.</div>`
    }
  ];

  const githubNovo = [
    {
      id: 1,
      menu: '1 GitHub essencial',
      title: 'GitHub 1 — O essencial para começar',
      objective: 'Criar a conta, reconhecer o necessário da interface e entender local x remoto.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Parte 2 — GitHub</span>
          <h3>O projeto agora precisa sair do computador</h3>
          <p>Até aqui o histórico existe localmente. A equipe quer ter uma cópia online, poder trabalhar em outro computador e compartilhar o projeto.</p>
        </div>
        <h3>1. Conta</h3>
        <p>Acesse <strong>github.com</strong>, crie sua conta e confirme o e-mail. O nome de usuário fará parte da sua identidade na plataforma.</p>
        <h3>2. Localize somente o necessário</h3>
        <ul>
          <li><strong>Repositories</strong> — seus repositórios;</li>
          <li><strong>New repository</strong> — criar um repositório;</li>
          <li><strong>Code</strong> — obter o endereço para clonar.</li>
        </ul>
        <div class="mini-grid">
          <div class="mini-card"><strong>Local</strong><br>repositório no computador.</div>
          <div class="mini-card"><strong>Remoto</strong><br>repositório hospedado no GitHub.</div>
        </div>
        <div class="concept-box"><strong>Local e remoto não se atualizam sozinhos. Nós decidimos quando receber e quando enviar.</strong></div>
        <div class="note-box"><strong>Conheça também:</strong> perfil, stars, seguidores e feed existem no GitHub, mas não são necessários para aprender o fluxo de versionamento.</div>`
    },
    {
      id: 2,
      menu: '2 GitHub → PC',
      title: 'GitHub 2 — Um projeto nasce no GitHub e vem para o computador',
      objective: 'Criar um repositório remoto, cloná-lo e reconhecer a ligação origin.',
      content: `
        <div class="hero-box">
          <h3>Primeiro cenário: o projeto nasce online</h3>
          <p>Vamos criar <span class="inline-code">primeiro-repositorio</span> no GitHub e depois trazer uma cópia completa para o computador.</p>
        </div>
        <h3>1. Crie no GitHub</h3>
        <p>Use <strong>New repository</strong>, nomeie como <span class="inline-code">primeiro-repositorio</span>, deixe público para esta prática e adicione um README.</p>
        <p>O GitHub criará um primeiro commit para o README.</p>
        <h3>2. Copie a URL HTTPS</h3>
        <pre class="command">https://github.com/USUARIO/primeiro-repositorio.git</pre>
        <h3>3. Clone</h3>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios"\ngit clone https://github.com/USUARIO/primeiro-repositorio.git\ncd primeiro-repositorio</pre>
        <h3>4. Confira</h3>
        <pre class="command">git status\ngit log --oneline\ngit remote -v</pre>
        <p>O nome <strong>origin</strong> normalmente aponta para o endereço do repositório remoto.</p>
        <div class="concept-box"><strong>Depois de git clone, não execute git init. O repositório e o histórico já vieram prontos.</strong></div>`
    },
    {
      id: 3,
      menu: '3 PC → GitHub',
      title: 'GitHub 3 — Enviando trabalho para o GitHub',
      objective: 'Criar um commit local e enviá-lo com push.',
      content: `
        <div class="hero-box">
          <h3>A equipe trabalhou no computador. O GitHub ainda não sabe disso.</h3>
          <p>Primeiro registramos localmente. Depois enviamos o commit.</p>
        </div>
        <pre class="command">echo Alteracao feita no computador &gt;&gt; README.md\ngit status\ngit diff\ngit add README.md\ngit commit -m "Atualiza README"\ngit push</pre>
        <div class="flow">alterar → conferir → commit → push → GitHub</div>
        <div class="concept-box"><strong>commit registra localmente. push envia commits ao remoto.</strong></div>
        <h3>Na primeira autenticação</h3>
        <p>No Git for Windows atual, é comum o Git Credential Manager abrir o navegador para autenticar sua conta. Conclua o login solicitado.</p>
        <div class="danger-box"><strong>Não trate a senha da conta como uma “senha Git” para digitar no terminal.</strong> Siga o fluxo moderno de autenticação apresentado pelo Git Credential Manager/GitHub.</div>
        <p>Depois do push, atualize a página do repositório e confirme se o commit apareceu.</p>`
    },
    {
      id: 4,
      menu: '4 GitHub → PC',
      title: 'GitHub 4 — Recebendo novidades com pull',
      objective: 'Entender quando o remoto está mais novo e trazer os commits ao computador.',
      content: `
        <div class="hero-box">
          <h3>Agora a alteração aconteceu do outro lado</h3>
          <p>Alguém fez uma pequena correção no README pelo navegador. O GitHub está atualizado, mas seu computador ainda não.</p>
        </div>
        <h3>1. Faça uma pequena edição no GitHub</h3>
        <p>Edite o README pelo navegador e salve criando o commit oferecido pela interface.</p>
        <h3>2. Veja que o PC ainda está antigo</h3>
        <pre class="command">type README.md</pre>
        <h3>3. Receba</h3>
        <pre class="command">git pull\ntype README.md\ngit log --oneline</pre>
        <div class="mini-grid">
          <div class="mini-card"><strong>push</strong><br>envia commits.</div>
          <div class="mini-card"><strong>pull</strong><br>recebe commits.</div>
        </div>
        <div class="note-box"><strong>Edição online:</strong> é útil para ajustes pequenos. Para mudanças maiores, prefira trabalhar nos arquivos locais e depois fazer commit + push.</div>`
    },
    {
      id: 5,
      menu: '5 Projeto já existe',
      title: 'GitHub 5 — Meu projeto já existe no computador',
      objective: 'Conectar um repositório local existente a um repositório remoto vazio.',
      content: `
        <div class="hero-box">
          <h3>Segundo cenário: o projeto nasceu no PC</h3>
          <p>Agora não vamos clonar. O projeto local já possui arquivos e commits e precisa ser publicado.</p>
        </div>
        <h3>1. Confira o local</h3>
        <pre class="command">git status\ngit log --oneline</pre>
        <h3>2. Crie no GitHub um repositório novo e vazio</h3>
        <p>Neste cenário, não adicione README, licença nem <span class="inline-code">.gitignore</span> no remoto.</p>
        <h3>3. Conecte</h3>
        <pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>
        <h3>4. Descubra a branch atual</h3>
        <pre class="command">git branch --show-current</pre>
        <p>Pode aparecer <span class="inline-code">main</span>, <span class="inline-code">master</span> ou outro nome.</p>
        <h3>5. Faça o primeiro envio</h3>
        <p>Se a branch mostrada foi <span class="inline-code">main</span>:</p>
        <pre class="command">git push -u origin main</pre>
        <p>Se foi <span class="inline-code">master</span>:</p>
        <pre class="command">git push -u origin master</pre>
        <div class="concept-box"><strong>Não adivinhe o nome da branch. Confira e use o nome que realmente existe.</strong></div>`
    },
    {
      id: 6,
      menu: '6 Dia a dia',
      title: 'GitHub 6 — O fluxo do dia a dia',
      objective: 'Transformar Git + GitHub em uma rotina curta e previsível.',
      content: `
        <div class="hero-box">
          <h3>Uma rotina que cabe na cabeça</h3>
          <p>Antes de trabalhar, receba novidades. Depois altere, confira, registre e envie.</p>
        </div>
        <pre class="command">git pull\n\nREM trabalhe nos arquivos\n\ngit status\ngit diff\ngit add .\ngit commit -m "Descricao da alteracao"\ngit push</pre>
        <div class="flow">PULL → TRABALHAR → STATUS/DIFF → ADD → COMMIT → PUSH</div>
        <h3>Antes de fechar</h3>
        <pre class="command">git status</pre>
        <p>Se a área de trabalho estiver limpa, você sabe que não deixou alterações locais sem registrar.</p>
        <h3>Quando precisar se localizar</h3>
        <pre class="command">git log --oneline\ngit remote -v\ngit branch --show-current</pre>
        <div class="concept-box"><strong>Primeiro entenda o estado. Depois escolha o comando.</strong></div>`
    },
    {
      id: 7,
      menu: '7 Problemas',
      title: 'GitHub 7 — Problemas comuns sem pânico',
      objective: 'Diagnosticar erros frequentes e recuperar o projeto sem recorrer a comandos destrutivos.',
      content: `
        <div class="hero-box">
          <h3>Quando algo dá errado, pare de adivinhar</h3>
          <p>A equipe deve descobrir <strong>onde está, a qual remoto está ligada e qual branch está usando</strong> antes de tentar corrigir.</p>
        </div>
        <h3>Diagnóstico inicial</h3>
        <pre class="command">git status\ngit remote -v\ngit branch --show-current\ngit log --oneline</pre>
        <h3>“Não é um repositório Git”</h3>
        <p>Provavelmente você está na pasta errada. Volte ao projeto e execute <span class="inline-code">git status</span> novamente.</p>
        <h3>“origin does not appear to be a git repository”</h3>
        <p>Confira:</p>
        <pre class="command">git remote -v</pre>
        <p>Se não existir remoto e este projeto realmente deve ser ligado ao GitHub:</p>
        <pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>
        <h3>“src refspec main does not match any”</h3>
        <p>Não force <span class="inline-code">main</span>. Descubra o nome real:</p>
        <pre class="command">git branch --show-current</pre>
        <p>Se aparecer <span class="inline-code">master</span>, por exemplo:</p>
        <pre class="command">git push -u origin master</pre>
        <h3>O push foi rejeitado porque o remoto tem novidades</h3>
        <pre class="command">git pull</pre>
        <p>Se terminar normalmente:</p>
        <pre class="command">git push</pre>
        <h3>Conflito</h3>
        <p>Abra o arquivo, resolva o conteúdo marcado pelo Git e finalize:</p>
        <pre class="command">git status\ngit add NOME-DO-ARQUIVO\ngit commit -m "Resolve conflito"\ngit push</pre>
        <h3>Enviei um commit errado ao GitHub</h3>
        <pre class="command">git status\ngit log --oneline\ngit revert --no-edit HASH\ngit push</pre>
        <p>Se foi o último commit:</p>
        <pre class="command">git revert --no-edit HEAD\ngit push</pre>
        <div class="danger-box"><strong>Neste nível, não use reset --hard, rebase ou force push como tentativa de socorro.</strong> Primeiro preserve a história e torne a correção explicável.</div>
        <div class="ok-box"><strong>Git + GitHub concluídos.</strong> Você já consegue criar versões, publicar, receber mudanças, diagnosticar problemas e recuperar erros básicos com segurança.</div>`
    }
  ];

  gitSteps.splice(0, gitSteps.length, ...gitNovo);
  githubSteps.splice(0, githubSteps.length, ...githubNovo);

  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const intro = exerciseStep('inicio');
  if (intro) {
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
