const gitSteps = [
  {
    id: 1,
    menu: '1 Conceitos',
    title: '1 — Git e GitHub: para que servem',
    objective: 'Entender por que existe controle de versões e diferenciar Git de GitHub.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Parte 1 — Git no computador</span>
        <h3>Antes de começar</h3>
        <p>Imagine um projeto que vai sendo alterado durante vários dias. Para não perder versões anteriores, muita gente acaba criando arquivos com nomes como:</p>
        <div class="flow">projeto\nprojeto-novo\nprojeto-final\nprojeto-final2\nprojeto-final-agora-vai</div>
        <p>O Git existe para organizar esse histórico de forma muito melhor.</p>
      </div>

      <h3>O que é Git?</h3>
      <p>O <strong>Git</strong> é um sistema de <strong>controle de versões</strong>. Ele acompanha alterações feitas nos arquivos de um projeto e permite registrar diferentes momentos desse projeto.</p>
      <div class="concept-box"><strong>Pense no Git como pontos de salvamento do projeto.</strong></div>
      <div class="flow">Projeto inicial\n      ↓\nAlteração\n      ↓\nVersão registrada\n      ↓\nNova alteração\n      ↓\nNova versão registrada</div>
      <p>O Git funciona no próprio computador. É possível utilizá-lo mesmo sem Internet.</p>

      <h3>E o GitHub?</h3>
      <p>O <strong>GitHub</strong> é uma plataforma na Internet usada para armazenar, compartilhar e colaborar em projetos.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>Git</strong><br>Controla versões do projeto.</div>
        <div class="mini-card"><strong>GitHub</strong><br>Hospeda e compartilha repositórios na Internet.</div>
      </div>
      <div class="note-box"><strong>Não são a mesma coisa.</strong> Primeiro aprenderemos Git no computador. Depois conectaremos nossos projetos ao GitHub.</div>

      <h3>Nosso caminho</h3>
      <div class="flow">Git → CMD → Repositório local → Arquivos → Versões → GitHub → Sincronização</div>
      <p>Não precisa entender todos esses termos agora. Eles serão apresentados um de cada vez.</p>

      <h3>Confira se entendeu</h3>
      <div class="example-box">
        <p><strong>1. Para que serve o Git?</strong><br>Para controlar e registrar versões de um projeto.</p>
        <p><strong>2. O Git precisa de Internet para funcionar?</strong><br>Não. O controle local funciona no próprio computador.</p>
        <p><strong>3. Git e GitHub são a mesma coisa?</strong><br>Não. O Git controla versões; o GitHub é uma plataforma online.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Instalação',
    title: '2 — Instalando o Git',
    objective: 'Instalar o Git e confirmar pelo CMD que ele está funcionando.',
    content: `
      <div class="hero-box">
        <h3>Agora vamos instalar</h3>
        <p>O Git precisa estar instalado para que seus comandos funcionem no computador.</p>
      </div>

      <h3>1. Acesse o site oficial</h3>
      <p>Abra o navegador e acesse <strong>git-scm.com</strong>. Procure a área de instalação e escolha o seu sistema operacional.</p>
      <figure class="image-card">
        <img src="../img/git/git-instalacao-windows.webp" alt="Página oficial do Git mostrando as opções de instalação para Windows, macOS e Linux" loading="lazy">
        <figcaption>Exemplo da página oficial de instalação. A aparência e a versão exibida podem mudar com o tempo.</figcaption>
      </figure>
      <p>Neste módulo utilizaremos <strong>Windows + Prompt de Comando (CMD)</strong>. Os conceitos de Git continuam os mesmos em outros sistemas, mas alguns comandos de navegação podem mudar.</p>

      <h3>2. Instale no Windows</h3>
      <ol>
        <li>Escolha a versão indicada para o seu computador.</li>
        <li>Abra o arquivo baixado.</li>
        <li>Avance pela instalação.</li>
        <li>Neste primeiro contato, mantenha as opções padrão quando não houver orientação específica.</li>
        <li>Conclua a instalação.</li>
      </ol>
      <div class="note-box">Não se preocupe em decorar opções avançadas do instalador. Nosso objetivo agora é apenas ter o Git funcionando.</div>

      <h3>3. Teste a instalação</h3>
      <p>Pressione <strong>Windows + R</strong>, digite <span class="inline-code">cmd</span> e pressione <strong>Enter</strong>.</p>
      <p>No CMD, execute:</p>
      <pre class="command">git --version</pre>
      <p>Se aparecer algo semelhante a:</p>
      <pre class="command">git version 2.x.x</pre>
      <div class="ok-box"><strong>Funcionou.</strong> O número da versão pode ser diferente. O importante é o Windows reconhecer o comando <span class="inline-code">git</span>.</div>

      <h3>E se aparecer “git não é reconhecido”?</h3>
      <p>Feche o CMD, abra-o novamente e teste outra vez. Se continuar, verifique se a instalação foi realmente concluída.</p>

      <h3>Guarde por enquanto</h3>
      <pre class="command">git --version</pre>
      <p>Esse comando verifica se o Git está instalado e disponível.</p>`
  },
  {
    id: 3,
    menu: '3 CMD',
    title: '3 — Conhecendo o CMD',
    objective: 'Aprender somente os comandos de CMD necessários para localizar e organizar nossos projetos.',
    content: `
      <div class="hero-box">
        <h3>Por que aprender CMD?</h3>
        <p>O Git trabalha com pastas e arquivos reais do computador. Antes de usar Git, precisamos saber onde estamos e como chegar até a pasta do projeto.</p>
      </div>

      <h3>1. Abra o CMD</h3>
      <p>Pressione <strong>Windows + R</strong>, digite:</p>
      <pre class="command">cmd</pre>
      <p>e pressione <strong>Enter</strong>.</p>
      <p>A linha poderá começar assim:</p>
      <pre class="command">C:\\Users\\Usuario&gt;</pre>
      <p>Esse texto mostra <strong>em qual pasta você está</strong>.</p>

      <h3>2. Veja o conteúdo da pasta</h3>
      <pre class="command">dir</pre>
      <p><span class="inline-code">dir</span> mostra arquivos e pastas existentes no local atual.</p>

      <h3>3. Vá para a pasta do usuário</h3>
      <pre class="command">cd /d "%USERPROFILE%"</pre>
      <p><span class="inline-code">%USERPROFILE%</span> representa automaticamente a pasta do usuário atual do Windows.</p>
      <div class="example-box">Pode resultar em <span class="inline-code">C:\Users\Joao</span>, <span class="inline-code">C:\Users\Maria</span> ou outro nome. Assim o exemplo funciona em computadores diferentes.</div>
      <p><span class="inline-code">cd</span> significa mudar de pasta. O <span class="inline-code">/d</span> também permite mudar de unidade, se necessário.</p>

      <h3>4. Crie e entre em uma pasta</h3>
      <pre class="command">mkdir teste-cmd</pre>
      <p><span class="inline-code">mkdir</span> cria uma pasta.</p>
      <pre class="command">cd teste-cmd</pre>
      <p>Agora você entrou nela. Observe que o caminho mostrado no CMD mudou.</p>

      <h3>5. Volte uma pasta</h3>
      <pre class="command">cd ..</pre>
      <p>Os dois pontos representam a pasta anterior.</p>

      <h3>6. Limpe a tela</h3>
      <pre class="command">cls</pre>
      <p>Esse comando limpa somente a tela do CMD. Ele não apaga seus arquivos.</p>

      <h3>Experimente</h3>
      <pre class="command">cd /d "%USERPROFILE%"\ndir\nmkdir teste-cmd\ncd teste-cmd\ndir\ncd ..\ncls</pre>

      <h3>Não confunda</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>CMD</strong><br><span class="inline-code">dir</span>, <span class="inline-code">mkdir</span>, <span class="inline-code">cd</span>, <span class="inline-code">cls</span></div>
        <div class="mini-card"><strong>Git</strong><br>Seus comandos normalmente começam com <span class="inline-code">git</span>.</div>
      </div>`
  },
  {
    id: 4,
    menu: '4 Configuração',
    title: '4 — Configurando o Git',
    objective: 'Informar ao Git o nome e o e-mail que identificarão o autor dos registros.',
    content: `
      <div class="hero-box">
        <h3>Quem está fazendo as alterações?</h3>
        <p>Cada versão registrada pelo Git guarda informações do autor. Por isso configuramos nome e e-mail antes do primeiro commit.</p>
      </div>

      <h3>1. Configure seu nome</h3>
      <pre class="command">git config --global user.name "Seu Nome"</pre>
      <p>Exemplo:</p>
      <pre class="command">git config --global user.name "Joao Silva"</pre>
      <p>As aspas ajudam quando o nome possui espaços.</p>

      <h3>2. Configure seu e-mail</h3>
      <pre class="command">git config --global user.email "seuemail@exemplo.com"</pre>
      <p>Esse e-mail não é uma senha. Ele identifica o autor dos registros.</p>

      <h3>3. Confira</h3>
      <pre class="command">git config --global user.name\ngit config --global user.email</pre>
      <p>O Git deve mostrar os valores que você configurou.</p>

      <h3>O que significa <span class="inline-code">--global</span>?</h3>
      <p>Essa configuração vale, por padrão, para os repositórios daquele <strong>usuário do Windows</strong>. Assim você não precisa informar nome e e-mail a cada projeto.</p>
      <div class="note-box"><strong>Computadores compartilhados:</strong> se várias pessoas usam o mesmo usuário do Windows, a configuração global é compartilhada. Em laboratório, confira os dados antes de fazer commits.</div>

      <h3>Resumo</h3>
      <div class="flow">user.name  → nome do autor\nuser.email → e-mail do autor</div>`
  },
  {
    id: 5,
    menu: '5 Pastas',
    title: '5 — Criando nossa pasta de projetos',
    objective: 'Criar uma organização simples e independente do nome do usuário do computador.',
    content: `
      <div class="hero-box">
        <h3>Vamos organizar</h3>
        <p>Ter uma pasta própria para os repositórios facilita encontrar os projetos e reduz erros no CMD.</p>
      </div>

      <h3>1. Vá para sua pasta de usuário</h3>
      <pre class="command">cd /d "%USERPROFILE%"</pre>

      <h3>2. Crie a pasta dos repositórios</h3>
      <pre class="command">mkdir meus-repositorios</pre>
      <p>Entre nela:</p>
      <pre class="command">cd meus-repositorios</pre>

      <h3>3. Crie nosso primeiro projeto</h3>
      <pre class="command">mkdir primeiro-projeto\ncd primeiro-projeto</pre>
      <p>O caminho ficará semelhante a:</p>
      <pre class="command">C:\\Users\\Usuario\\meus-repositorios\\primeiro-projeto&gt;</pre>
      <div class="flow">Pasta do usuário\n└── meus-repositorios\n    └── primeiro-projeto</div>

      <h3>Uma diferença importante</h3>
      <p>Neste momento, <span class="inline-code">primeiro-projeto</span> ainda é somente uma <strong>pasta comum do Windows</strong>.</p>
      <div class="flow">primeiro-projeto\n      ↓\n  pasta comum\n      ↓\n   git init\n      ↓\nrepositório Git</div>
      <p>Faremos essa transformação na próxima etapa.</p>

      <h3>Se você se perder</h3>
      <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\primeiro-projeto"</pre>
      <p>Esse comando volta diretamente para nossa pasta de trabalho.</p>`
  },
  {
    id: 6,
    menu: '6 Repositório',
    title: '6 — Primeiro repositório local',
    objective: 'Transformar uma pasta comum em um repositório Git e consultar seu estado.',
    content: `
      <div class="hero-box">
        <h3>Agora começa o Git de verdade</h3>
        <p>Já temos uma pasta de projeto. Vamos dizer ao Git que queremos controlar suas versões.</p>
      </div>

      <h3>1. Entre no projeto</h3>
      <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\primeiro-projeto"</pre>

      <h3>2. Inicie o repositório</h3>
      <pre class="command">git init</pre>
      <p><span class="inline-code">git init</span> inicia um repositório Git na pasta atual.</p>
      <div class="flow">pasta comum\n     ↓\n  git init\n     ↓\nrepositório Git</div>

      <h3>3. Veja o estado</h3>
      <pre class="command">git status</pre>
      <p>Pense nesse comando como uma pergunta:</p>
      <div class="concept-box"><strong>“Git, como está meu repositório agora?”</strong></div>
      <p>Como ainda não criamos arquivos, provavelmente não haverá nada para registrar.</p>

      <h3>O que é a pasta <span class="inline-code">.git</span>?</h3>
      <p>Ao executar <span class="inline-code">git init</span>, o Git cria internamente uma pasta chamada <span class="inline-code">.git</span>. Ela guarda as informações do repositório.</p>
      <div class="note-box">Não precisamos editar a pasta <span class="inline-code">.git</span> manualmente.</div>

      <h3>Se <span class="inline-code">git status</span> der erro</h3>
      <p>Uma mensagem dizendo que a pasta não é um repositório normalmente significa que você executou o comando no local errado. Confira o caminho exibido no CMD.</p>`
  },
  {
    id: 7,
    menu: '7 Arquivos',
    title: '7 — Criando e alterando arquivos',
    objective: 'Criar arquivos simples e observar que o Git percebe mudanças dentro do repositório.',
    content: `
      <div class="hero-box">
        <h3>Um repositório vazio não tem muito o que controlar</h3>
        <p>Vamos criar um arquivo e observar como o Git reage.</p>
      </div>

      <h3>1. Entre no projeto</h3>
      <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\primeiro-projeto"</pre>

      <h3>2. Crie um arquivo pelo CMD</h3>
      <pre class="command">echo Meu primeiro projeto com Git &gt; projeto.txt</pre>
      <p>Esse comando cria <span class="inline-code">projeto.txt</span> contendo o texto informado.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>&gt;</strong><br>Cria ou substitui o conteúdo do arquivo.</div>
        <div class="mini-card"><strong>&gt;&gt;</strong><br>Acrescenta conteúdo ao final.</div>
      </div>

      <h3>3. Veja o arquivo</h3>
      <pre class="command">dir\ntype projeto.txt</pre>
      <p><span class="inline-code">dir</span> mostra o arquivo na pasta. <span class="inline-code">type</span> mostra seu conteúdo.</p>

      <h3>4. Pergunte ao Git</h3>
      <pre class="command">git status</pre>
      <p>Agora o Git percebe que existe um arquivo novo.</p>

      <h3>5. Altere o arquivo</h3>
      <pre class="command">echo Aprendendo controle de versoes &gt;&gt; projeto.txt</pre>
      <p>Confira:</p>
      <pre class="command">type projeto.txt\ngit status</pre>
      <div class="concept-box"><strong>O Git percebe alterações, mas ainda não registrou nenhuma versão.</strong></div>

      <h3>Experimente</h3>
      <pre class="command">echo Arquivo para teste &gt; teste.txt\ndir\ngit status</pre>`
  },
  {
    id: 8,
    menu: '8 Status',
    title: '8 — Entendendo o git status',
    objective: 'Interpretar o estado dos arquivos antes de registrar uma versão.',
    content: `
      <div class="hero-box">
        <h3>O comando de consulta</h3>
        <p>Já usamos <span class="inline-code">git status</span> várias vezes. Agora vamos entender melhor sua resposta.</p>
      </div>

      <h3>1. Consulte o repositório</h3>
      <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\primeiro-projeto"\ngit status</pre>

      <h3>O que significa <span class="inline-code">Untracked files</span>?</h3>
      <p>Significa <strong>arquivos não rastreados</strong>. O Git encontrou o arquivo, mas ele ainda não foi preparado para fazer parte de um registro.</p>
      <div class="flow">Arquivo existe\n      ↓\nGit percebeu\n      ↓\nAinda não está preparado</div>

      <h3>O Git não registra tudo sozinho</h3>
      <p>Isso é proposital. Você pode ter arquivos que não deseja incluir no próximo registro. Por isso, primeiro escolhemos o que será preparado.</p>
      <div class="concept-box"><strong>git status consulta. Ele não altera arquivos nem cria commits.</strong></div>

      <h3>Um bom hábito</h3>
      <div class="flow">Criei ou alterei algo\n        ↓\n   git status\n        ↓\nEntendi o estado\n        ↓\nDecido o próximo passo</div>

      <h3>Experimente</h3>
      <pre class="command">echo Outro arquivo &gt; exemplo.txt\ngit status</pre>
      <p>Observe que o novo arquivo também aparece como não rastreado.</p>

      <h3>Próxima necessidade</h3>
      <p>Já sabemos o que mudou. Agora precisamos dizer ao Git <strong>o que queremos preparar</strong> para o próximo registro. É aí que entra <span class="inline-code">git add</span>.</p>`
  },
  {
    id: 9,
    menu: '9 Add',
    title: '9 — Preparando arquivos com git add',
    objective: 'Escolher quais alterações ficarão preparadas para o próximo commit.',
    content: `
      <div class="hero-box">
        <h3>Escolher antes de registrar</h3>
        <p>O Git percebeu nossos arquivos. Agora vamos preparar aqueles que queremos colocar no próximo registro.</p>
      </div>

      <h3>1. Veja a situação atual</h3>
      <pre class="command">git status</pre>

      <h3>2. Prepare um arquivo específico</h3>
      <pre class="command">git add projeto.txt</pre>
      <p>Isso significa: <strong>prepare o arquivo projeto.txt para o próximo registro</strong>.</p>
      <div class="note-box">O arquivo ainda não foi registrado. <span class="inline-code">git add</span> apenas o prepara.</div>

      <h3>3. Confira novamente</h3>
      <pre class="command">git status</pre>
      <p>Agora o arquivo pode aparecer em <span class="inline-code">Changes to be committed</span>: alterações prontas para serem registradas.</p>

      <h3>4. Prepare todos os arquivos alterados</h3>
      <pre class="command">git add .</pre>
      <p>O ponto representa a pasta atual. Nesse caso, o Git prepara as alterações encontradas nela e em suas subpastas.</p>
      <div class="flow">arquivo novo/alterado\n        ↓\n   git status\n        ↓\n     git add\n        ↓\narquivo preparado</div>

      <h3>Experimente</h3>
      <pre class="command">git status\ngit add .\ngit status</pre>
      <p>Compare o status antes e depois.</p>

      <h3>Não confunda</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>git status</strong><br>Consulta o que está acontecendo.</div>
        <div class="mini-card"><strong>git add</strong><br>Prepara alterações para o próximo registro.</div>
      </div>`
  },
  {
    id: 10,
    menu: '10 Commit',
    title: '10 — Registrando versões com git commit',
    objective: 'Criar pontos de salvamento do projeto com mensagens que expliquem o que foi feito.',
    content: `
      <div class="hero-box">
        <h3>Hora de registrar</h3>
        <p>O <span class="inline-code">git add</span> preparou os arquivos. Agora <span class="inline-code">git commit</span> cria o registro da versão.</p>
      </div>

      <h3>1. Confira se há arquivos preparados</h3>
      <pre class="command">git status</pre>

      <h3>2. Crie seu primeiro commit</h3>
      <pre class="command">git commit -m "Primeira versao do projeto"</pre>
      <p>Um <strong>commit</strong> é um registro de um determinado momento do projeto — nosso ponto de salvamento.</p>

      <h3>Entendendo o comando</h3>
      <div class="flow">git commit → cria o registro\n-m         → permite escrever uma mensagem\n"..."      → descreve o que foi registrado</div>

      <h3>Por que escrever uma boa mensagem?</h3>
      <p>O histórico fica mais útil quando as mensagens explicam o que mudou.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>Boas mensagens</strong><br>Cria arquivo inicial<br>Adiciona cadastro de alunos<br>Corrige cálculo da média</div>
        <div class="mini-card"><strong>Mensagens pouco úteis</strong><br>teste<br>coisa<br>aaa</div>
      </div>

      <h3>3. Confira</h3>
      <pre class="command">git status</pre>
      <p>Se não houver novas mudanças, o Git indicará que não existe nada novo para registrar.</p>

      <h3>4. Crie uma segunda versão</h3>
      <pre class="command">echo Nova informacao do projeto &gt;&gt; projeto.txt\ngit status\ngit add projeto.txt\ngit commit -m "Atualiza arquivo do projeto"</pre>
      <div class="flow">Alterar → status → add → commit</div>
      <div class="concept-box"><strong>git add prepara. git commit registra.</strong></div>`
  },
  {
    id: 11,
    menu: '11 Histórico',
    title: '11 — Consultando o histórico',
    objective: 'Visualizar os commits já registrados e reconhecer a evolução do projeto.',
    content: `
      <div class="hero-box">
        <h3>O projeto agora tem história</h3>
        <p>Já criamos mais de um commit. Vamos visualizar esses registros.</p>
      </div>

      <h3>1. Histórico completo</h3>
      <pre class="command">git log</pre>
      <p>O Git mostra informações como identificador, autor, data e mensagem de cada commit.</p>
      <div class="example-box">
        <strong>Exemplo simplificado:</strong>
        <pre class="command">commit a1b2c3d4...\nAuthor: Joao Silva &lt;joao@email.com&gt;\n\n    Atualiza arquivo do projeto</pre>
      </div>
      <p>Se o histórico abrir em uma tela de navegação, pressione <span class="inline-code">q</span> para sair.</p>

      <h3>2. Histórico resumido</h3>
      <pre class="command">git log --oneline</pre>
      <p>Essa forma é mais simples para consultas rápidas.</p>
      <pre class="command">7f32abc Atualiza arquivo do projeto\n8cb271a Primeira versao do projeto</pre>
      <p>O código curto identifica o commit; ao lado aparece sua mensagem.</p>

      <h3>Qual usar?</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>git log</strong><br>Mostra mais detalhes.</div>
        <div class="mini-card"><strong>git log --oneline</strong><br>Mostra um resumo fácil de ler.</div>
      </div>

      <h3>Experimente</h3>
      <pre class="command">git log\ngit log --oneline</pre>
      <p>Compare as duas visualizações.</p>`
  },
  {
    id: 12,
    menu: '12 Fluxo Git',
    title: '12 — Primeiro fluxo completo com Git',
    objective: 'Repetir sozinho o ciclo básico do Git local e consolidar a Parte 1 do módulo.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Fechamento da Parte 1</span>
        <h3>Agora vamos juntar tudo</h3>
        <p>Nesta etapa não há comandos novos. O objetivo é repetir o processo completo até ele começar a fazer sentido naturalmente.</p>
      </div>

      <h3>1. Entre no projeto</h3>
      <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\primeiro-projeto"</pre>

      <h3>2. Faça uma alteração</h3>
      <pre class="command">echo Alteracao do fluxo completo &gt;&gt; projeto.txt</pre>

      <h3>3. Veja o que mudou</h3>
      <pre class="command">git status</pre>

      <h3>Quer ver exatamente o que mudou?</h3>
      <pre class="command">git diff</pre>
      <p><span class="inline-code">git status</span> mostra <strong>quais arquivos</strong> mudaram. <span class="inline-code">git diff</span> mostra <strong>as linhas alteradas</strong> em arquivos que o Git já acompanha e que ainda não foram preparados com <span class="inline-code">git add</span>.</p>
      <div class="concept-box"><strong>status = quais arquivos mudaram. diff = o que mudou dentro deles.</strong></div>

      <h3>4. Prepare a alteração</h3>
      <pre class="command">git add projeto.txt\ngit status</pre>

      <h3>5. Registre a versão</h3>
      <pre class="command">git commit -m "Atualiza projeto no fluxo completo"</pre>

      <h3>6. Veja o histórico</h3>
      <pre class="command">git log --oneline</pre>

      <h3>O fluxo básico do Git local</h3>
      <div class="flow">Alterar arquivo\n      ↓\ngit status\n      ↓\n  git add\n      ↓\ngit commit\n      ↓\n  git log</div>

      <h3>Uma forma simples de lembrar</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>status</strong><br>ver</div>
        <div class="mini-card"><strong>add</strong><br>preparar</div>
        <div class="mini-card"><strong>commit</strong><br>registrar</div>
        <div class="mini-card"><strong>log</strong><br>consultar</div>
      </div>

      <h3>Agora faça sozinho</h3>
      <div class="note-box">
        <ol>
          <li>Acrescente uma nova linha em <span class="inline-code">projeto.txt</span>.</li>
          <li>Veja o que mudou.</li>
          <li>Prepare o arquivo.</li>
          <li>Crie um commit com uma mensagem sua.</li>
          <li>Consulte o histórico resumido.</li>
        </ol>
      </div>
      <p>Se precisar conferir:</p>
      <pre class="command">git status\ngit add projeto.txt\ngit commit -m "Sua mensagem"\ngit log --oneline</pre>

      <div class="ok-box"><strong>Parte 1 concluída.</strong> Você já consegue criar um repositório local, acompanhar alterações, preparar arquivos, registrar versões e consultar o histórico.</div>

      <h3>O que vem depois?</h3>
      <p>Na Parte 2 entraremos no <strong>GitHub</strong>: conta, repositório online, clone, push, pull e a sincronização completa entre computador e Internet.</p>`
  },
  {
    id: 13,
    menu: '13 Sobrevivência',
    title: '13 — Sobrevivência: ignorar e desfazer',
    objective: 'Evitar arquivos indevidos no repositório e corrigir dois erros locais comuns sem apagar o histórico.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Sobrevivência Git</span>
        <h3>Três coisas que salvam muito tempo</h3>
        <p>Antes de irmos para o GitHub, vamos aprender somente três recursos de proteção: <strong>.gitignore</strong>, <strong>git restore</strong> e <strong>git restore --staged</strong>.</p>
      </div>

      <h3>1. Arquivos que não devem entrar no Git</h3>
      <p>Alguns arquivos são temporários, pessoais ou contêm informações que não devem ser publicadas. Para dizer ao Git que eles devem ser ignorados, criamos um arquivo chamado:</p>
      <pre class="command">.gitignore</pre>

      <h3>Um exemplo simples</h3>
      <p>Dentro do repositório, crie o arquivo:</p>
      <pre class="command">echo segredo.txt &gt; .gitignore
echo *.tmp &gt;&gt; .gitignore
echo .env &gt;&gt; .gitignore</pre>
      <p>Agora o Git ignorará <span class="inline-code">segredo.txt</span>, arquivos terminados em <span class="inline-code">.tmp</span> e o arquivo <span class="inline-code">.env</span>, desde que ainda não estejam sendo rastreados.</p>
      <pre class="command">git status</pre>
      <div class="danger-box"><strong>Nunca publique senhas, tokens, chaves de API ou outras credenciais.</strong> Um <span class="inline-code">.gitignore</span> bem usado ajuda a evitar esse erro, mas você continua responsável por conferir o que está sendo versionado.</div>
      <div class="note-box"><strong>Importante:</strong> o <span class="inline-code">.gitignore</span> não deixa de rastrear automaticamente um arquivo que já havia sido adicionado ao Git. Para o iniciante, a regra mais segura é criar as regras antes de adicionar arquivos sensíveis.</div>

      <h3>2. Fiz uma alteração e quero descartá-la</h3>
      <p>Se o arquivo já é acompanhado pelo Git, ainda não foi preparado com <span class="inline-code">git add</span> e você quer voltar ao conteúdo do último registro:</p>
      <pre class="command">git diff
git restore projeto.txt</pre>
      <div class="danger-box"><strong>Atenção:</strong> <span class="inline-code">git restore projeto.txt</span> descarta as alterações locais não registradas daquele arquivo. Confira com <span class="inline-code">git diff</span> antes.</div>

      <h3>3. Usei git add por engano</h3>
      <p>Se você preparou um arquivo, mas ainda não quer incluí-lo no próximo commit:</p>
      <pre class="command">git restore --staged projeto.txt</pre>
      <p>O arquivo sai da área de preparação, mas <strong>suas alterações continuam no arquivo</strong>.</p>

      <h3>Veja a diferença</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>git restore arquivo</strong><br>Descarta alterações locais ainda não preparadas.</div>
        <div class="mini-card"><strong>git restore --staged arquivo</strong><br>Retira da preparação, mas mantém as alterações.</div>
      </div>

      <h3>Rotina de sobrevivência</h3>
      <div class="flow">Não sei o que aconteceu
        ↓
   git status
        ↓
Quero ver as linhas
        ↓
    git diff
        ↓
Só então decido o que fazer</div>

      <div class="ok-box"><strong>Git local concluído.</strong> Você já sabe criar versões, conferir mudanças, ignorar arquivos indevidos e desfazer dois erros locais muito comuns.</div>`
  }
];


const githubSteps = [
  {
    id: 1,
    menu: '1 Conceitos',
    title: 'GitHub 1 — O que é e por que usar',
    objective: 'Entender o papel do GitHub sem misturá-lo com o Git que já funciona no computador.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Parte 2 — GitHub</span>
        <h3>Agora acrescentamos a Internet</h3>
        <p>Até aqui, todo o controle de versões funcionou no computador. O GitHub entra como uma plataforma online para hospedar e compartilhar repositórios Git.</p>
      </div>

      <div class="mini-grid">
        <div class="mini-card"><strong>Git</strong><br>Controla versões no computador.</div>
        <div class="mini-card"><strong>GitHub</strong><br>Hospeda repositórios na Internet.</div>
      </div>

      <h3>Por que usar GitHub?</h3>
      <ul>
        <li>manter uma cópia online do repositório;</li>
        <li>acessar o projeto em outros computadores;</li>
        <li>compartilhar seu trabalho;</li>
        <li>colaborar com outras pessoas.</li>
      </ul>

      <div class="concept-box"><strong>Git funciona sem GitHub. GitHub não substitui Git.</strong></div>

      <h3>O que vai mudar no nosso fluxo?</h3>
      <div class="flow">COMPUTADOR  ←────→  GITHUB
     Git             repositório online</div>
      <p>Mais adiante aprenderemos os comandos que fazem essa comunicação. Eles aparecerão um de cada vez.</p>

      <h3>Confira se entendeu</h3>
      <div class="example-box">
        <p><strong>Git e GitHub são a mesma coisa?</strong><br>Não.</p>
        <p><strong>Preciso de GitHub para fazer commits locais?</strong><br>Não.</p>
        <p><strong>Para que vamos usar GitHub?</strong><br>Para hospedar e sincronizar nossos repositórios pela Internet.</p>
      </div>`
  },
  {
    id: 2,
    menu: '2 Conta',
    title: 'GitHub 2 — Criando uma conta',
    objective: 'Criar uma conta pessoal e confirmar o e-mail para poder usar os recursos básicos do GitHub.',
    content: `
      <div class="hero-box">
        <h3>Primeiro precisamos de uma identidade no GitHub</h3>
        <p>A conta será usada para criar repositórios, visualizar seu perfil e autenticar operações feitas pelo computador.</p>
      </div>

      <h3>1. Acesse o GitHub</h3>
      <p>Abra o navegador e acesse <strong>github.com</strong>. Procure <strong>Sign up</strong> ou a opção equivalente de cadastro.</p>
      <figure class="image-card">
        <img src="../img/git/github-criar-conta.webp" alt="Página inicial do GitHub com as opções Sign in e Sign up" loading="lazy">
        <figcaption>A aparência pode mudar com o tempo. Procure a opção de cadastro da conta.</figcaption>
      </figure>

      <h3>2. Preencha os dados solicitados</h3>
      <p>O GitHub poderá solicitar e-mail, senha e nome de usuário. Também pode oferecer cadastro com provedores de login compatíveis.</p>
      <div class="concept-box"><strong>O nome de usuário fará parte da sua identidade no GitHub.</strong><br>Exemplo: <span class="inline-code">github.com/joaosilva</span></div>

      <h3>3. Verifique seu e-mail</h3>
      <p>Conclua a verificação enviada pelo GitHub. Um e-mail verificado é necessário para algumas tarefas básicas, como criar repositórios.</p>

      <h3>4. Entre na conta</h3>
      <p>Depois do cadastro, use <strong>Sign in</strong> para entrar. Se você visualizar seu avatar ou perfil, a conta está funcionando.</p>

      <div class="note-box"><strong>Git e GitHub ainda não estão conectados.</strong> Criar a conta não envia automaticamente nenhum arquivo do computador.</div>`
  },
  {
    id: 3,
    menu: '3 Interface',
    title: 'GitHub 3 — Conhecendo a tela inicial',
    objective: 'Localizar somente os elementos da interface que serão necessários nas próximas aulas.',
    content: `
      <div class="hero-box">
        <h3>Não precisamos decorar o GitHub inteiro</h3>
        <p>Vamos localizar somente o essencial para trabalhar com repositórios.</p>
      </div>

      <h3>Procure estas áreas</h3>
      <ul>
        <li>seu perfil ou avatar;</li>
        <li>a área <strong>Repositories</strong>;</li>
        <li>a opção <strong>New repository</strong> ou equivalente;</li>
        <li>a busca do GitHub.</li>
      </ul>

      <h3>Uma palavra nova: remoto</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Repositório local</strong><br>Fica no seu computador.</div>
        <div class="mini-card"><strong>Repositório remoto</strong><br>Fica em outro local; neste módulo, no GitHub.</div>
      </div>
      <p>Na próxima etapa criaremos nosso primeiro repositório remoto.</p>`
  },
  {
    id: 4,
    menu: '4 Repositório',
    title: 'GitHub 4 — Criando o primeiro repositório',
    objective: 'Criar um repositório remoto simples que depois será clonado para o computador.',
    content: `
      <div class="hero-box">
        <h3>Nosso primeiro projeto online</h3>
        <p>Neste primeiro cenário, o projeto <strong>nascerá no GitHub</strong> e depois será trazido ao computador.</p>
      </div>

      <h3>1. Crie um novo repositório</h3>
      <p>Na sua conta, escolha <strong>New repository</strong>.</p>

      <h3>2. Use estes dados</h3>
      <div class="example-box">
        <p><strong>Nome:</strong> <span class="inline-code">primeiro-repositorio</span></p>
        <p><strong>Descrição:</strong> Meu primeiro repositório para aprender Git e GitHub.</p>
        <p><strong>Visibilidade:</strong> Public, para facilitar a prática deste módulo.</p>
        <p><strong>README:</strong> marque a opção para adicionar um README.</p>
      </div>

      <h3>3. Crie o repositório</h3>
      <p>Confirme em <strong>Create repository</strong>.</p>
      <p>Você deverá ver o arquivo:</p>
      <pre class="command">README.md</pre>
      <p>O GitHub também terá criado um primeiro commit para esse arquivo.</p>

      <div class="note-box"><strong>Mais adiante teremos outro cenário.</strong> Quando o projeto já existir no computador, criaremos o repositório do GitHub <strong>vazio</strong>. Não misture os dois casos.</div>`
  },
  {
    id: 5,
    menu: '5 Local x remoto',
    title: 'GitHub 5 — Repositório local e remoto',
    objective: 'Entender que as cópias do computador e do GitHub não se atualizam sozinhas.',
    content: `
      <div class="hero-box">
        <h3>Dois lugares, um mesmo projeto</h3>
        <p>Quando trabalharmos com GitHub, poderemos ter uma cópia local e uma cópia remota.</p>
      </div>

      <div class="flow">LOCAL                         REMOTO
computador                     GitHub
arquivos de trabalho           cópia online</div>

      <h3>Elas são sincronizadas automaticamente?</h3>
      <p><strong>Não.</strong> Alterar o computador não muda o GitHub sozinho. Alterar o GitHub não muda o computador sozinho.</p>

      <div class="concept-box"><strong>Precisaremos enviar e receber alterações de propósito.</strong></div>

      <h3>Guarde duas ideias</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Enviar</strong><br>Mais adiante: <span class="inline-code">git push</span>.</div>
        <div class="mini-card"><strong>Receber</strong><br>Mais adiante: <span class="inline-code">git pull</span>.</div>
      </div>`
  },
  {
    id: 6,
    menu: '6 Clone',
    title: 'GitHub 6 — Clonando um repositório',
    objective: 'Trazer ao computador uma cópia completa de um repositório que já existe no GitHub.',
    content: `
      <div class="hero-box">
        <h3>GitHub → computador</h3>
        <p>Vamos trazer <span class="inline-code">primeiro-repositorio</span> para nossa pasta de projetos.</p>
      </div>

      <h3>1. Copie o endereço HTTPS</h3>
      <p>No GitHub, abra o repositório, clique em <strong>Code</strong>, escolha <strong>HTTPS</strong> e copie o endereço. Ele será parecido com:</p>
      <pre class="command">https://github.com/USUARIO/primeiro-repositorio.git</pre>

      <h3>2. Vá para a pasta que receberá o projeto</h3>
      <pre class="command">cd /d "%USERPROFILE%\meus-repositorios"</pre>

      <h3>3. Clone</h3>
      <pre class="command">git clone https://github.com/USUARIO/primeiro-repositorio.git</pre>
      <p>Substitua a URL pela do seu repositório.</p>

      <h3>4. Entre e confira</h3>
      <pre class="command">cd primeiro-repositorio
dir
git status
git log --oneline</pre>
      <p>O <span class="inline-code">README.md</span> e o histórico vieram do GitHub.</p>

      <div class="concept-box"><strong>Depois de git clone, não execute git init.</strong> O repositório já veio pronto.</div>

      <div class="flow">GITHUB
  ↓
git clone
  ↓
COMPUTADOR
arquivos + histórico + ligação remota</div>`
  },
  {
    id: 7,
    menu: '7 Origin',
    title: 'GitHub 7 — Conhecendo o origin',
    objective: 'Descobrir para qual endereço remoto o repositório local está conectado.',
    content: `
      <div class="hero-box">
        <h3>O clone deixou um endereço salvo</h3>
        <p>Normalmente, o Git dá ao repositório remoto principal o nome <strong>origin</strong>.</p>
      </div>

      <h3>Veja o remoto configurado</h3>
      <pre class="command">git remote -v</pre>
      <p>O resultado será parecido com:</p>
      <pre class="command">origin  https://github.com/USUARIO/primeiro-repositorio.git (fetch)
origin  https://github.com/USUARIO/primeiro-repositorio.git (push)</pre>

      <div class="concept-box"><strong>origin é apenas um nome curto para o endereço remoto.</strong></div>

      <h3>Para sobreviver, guarde isto</h3>
      <div class="flow">git status     → como estão meus arquivos?
git log        → quais commits existem?
git remote -v  → a qual remoto estou ligado?</div>`
  },
  {
    id: 8,
    menu: '8 Push',
    title: 'GitHub 8 — Enviando alterações com git push',
    objective: 'Registrar uma alteração local e enviar seus commits para o GitHub.',
    content: `
      <div class="hero-box">
        <h3>Computador → GitHub</h3>
        <p>O <span class="inline-code">git push</span> envia commits locais que ainda não chegaram ao remoto.</p>
      </div>

      <h3>1. Altere o README</h3>
      <pre class="command">echo Alteracao feita no computador &gt;&gt; README.md</pre>

      <h3>2. Faça o fluxo local que você já conhece</h3>
      <pre class="command">git status
git diff
git add README.md
git commit -m "Atualiza README"</pre>

      <h3>3. Envie</h3>
      <pre class="command">git push</pre>
      <div class="flow">alterar → status → add → commit → push → GitHub</div>

      <h3>Na primeira vez, pode aparecer uma autenticação</h3>
      <p>Usando HTTPS no Git for Windows atual, é comum o <strong>Git Credential Manager</strong> abrir ou orientar um login pelo navegador. Conclua a autenticação da sua conta e, quando solicitado, a verificação em duas etapas.</p>
      <div class="danger-box"><strong>Não digite sua senha do GitHub como se ela fosse uma senha Git comum.</strong> O fluxo moderno de HTTPS usa mecanismos de autenticação próprios, como o Git Credential Manager.</div>

      <h3>4. Confira no navegador</h3>
      <p>Atualize o repositório no GitHub. A alteração e o commit <strong>Atualiza README</strong> deverão aparecer.</p>

      <div class="concept-box"><strong>commit registra no computador. push envia commits ao GitHub.</strong></div>`
  },
  {
    id: 9,
    menu: '9 Pull',
    title: 'GitHub 9 — Recebendo alterações com git pull',
    objective: 'Trazer para o computador os commits que existem no GitHub e ainda não estão localmente.',
    content: `
      <div class="hero-box">
        <h3>GitHub → computador</h3>
        <p>Agora faremos o caminho contrário ao push.</p>
      </div>

      <h3>1. Faça uma pequena alteração no GitHub</h3>
      <p>Abra <span class="inline-code">README.md</span>, use a opção de edição, acrescente:</p>
      <pre class="command">Alteracao feita diretamente no GitHub.</pre>
      <p>Salve criando o commit pedido pela interface.</p>

      <h3>2. Veja que o computador ainda está antigo</h3>
      <pre class="command">type README.md</pre>

      <h3>3. Traga a novidade</h3>
      <pre class="command">git pull</pre>

      <h3>4. Confira</h3>
      <pre class="command">type README.md
git log --oneline</pre>
      <p>A alteração e o novo commit agora fazem parte do repositório local.</p>

      <div class="mini-grid">
        <div class="mini-card"><strong>push</strong><br>envia.</div>
        <div class="mini-card"><strong>pull</strong><br>recebe.</div>
      </div>`
  },
  {
    id: 10,
    menu: '10 Editar online',
    title: 'GitHub 10 — Alterando arquivos pelo GitHub',
    objective: 'Entender quando uma edição pelo navegador é útil e como trazê-la de volta ao computador.',
    content: `
      <div class="hero-box">
        <h3>Pequenos ajustes também podem nascer no GitHub</h3>
        <p>A interface web é útil para correções pequenas, especialmente em arquivos como README.</p>
      </div>

      <h3>Fluxo pelo navegador</h3>
      <div class="flow">abrir arquivo
   ↓
editar
   ↓
salvar/commit
   ↓
GitHub atualizado
   ↓
git pull no computador</div>

      <h3>Quando preferir o computador?</h3>
      <p>Para alterações maiores ou várias mudanças relacionadas, trabalhe normalmente nos arquivos locais e depois use <span class="inline-code">add → commit → push</span>.</p>

      <div class="note-box"><strong>Regra simples:</strong> edição pequena pode ser feita no navegador. Desenvolvimento de verdade normalmente acontece no computador.</div>`
  },
  {
    id: 11,
    menu: '11 Projeto local',
    title: 'GitHub 11 — Publicando um projeto que já existe no PC',
    objective: 'Conectar ao GitHub um repositório local que já possui arquivos e commits.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Situação real de sobrevivência</span>
        <h3>“Meu projeto já existe no computador. Como coloco no GitHub?”</h3>
        <p>Este é diferente do caso do clone. Agora o projeto <strong>nasceu localmente</strong> e queremos criar o remoto.</p>
      </div>

      <h3>Antes de começar</h3>
      <p>Entre no repositório local e confirme que já existe pelo menos um commit:</p>
      <pre class="command">git status
git log --oneline</pre>

      <h3>1. Crie um repositório NOVO e VAZIO no GitHub</h3>
      <p>Ao criar esse remoto, <strong>não adicione README, licença nem .gitignore</strong>. Queremos evitar criar um histórico separado antes de enviar o histórico local.</p>

      <h3>2. Copie a URL HTTPS do novo repositório</h3>
      <p>Ela será parecida com:</p>
      <pre class="command">https://github.com/USUARIO/NOME-DO-REPOSITORIO.git</pre>

      <h3>3. Conecte o projeto local</h3>
      <pre class="command">git remote add origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
git remote -v</pre>

      <h3>4. Descubra o nome da linha principal atual</h3>
      <pre class="command">git branch --show-current</pre>
      <p>Normalmente você verá <span class="inline-code">main</span> ou, em algumas instalações, <span class="inline-code">master</span>.</p>
      <div class="note-box">Não vamos estudar branches agora. Só precisamos saber o nome atual para fazer o primeiro envio.</div>

      <h3>5. Faça o primeiro envio</h3>
      <p>Se o comando anterior mostrou <span class="inline-code">main</span>:</p>
      <pre class="command">git push -u origin main</pre>
      <p>Se mostrou outro nome, substitua <span class="inline-code">main</span> por ele.</p>
      <p>Depois desse primeiro envio, normalmente bastará:</p>
      <pre class="command">git push</pre>

      <h3>Não confunda os dois começos</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Projeto já está no GitHub</strong><br><span class="inline-code">git clone</span>.</div>
        <div class="mini-card"><strong>Projeto já está no PC</strong><br>remoto vazio → <span class="inline-code">remote add</span> → primeiro <span class="inline-code">push</span>.</div>
      </div>`
  },
  {
    id: 12,
    menu: '12 Sincronizar',
    title: 'GitHub 12 — Sincronizando Git + GitHub',
    objective: 'Organizar uma sequência segura para receber novidades, trabalhar e enviar novos commits.',
    content: `
      <div class="hero-box">
        <h3>Agora os dois lados trabalham juntos</h3>
        <p>O hábito mais simples é atualizar antes de começar e enviar somente depois de criar o commit.</p>
      </div>

      <h3>1. Antes de trabalhar</h3>
      <pre class="command">git pull</pre>

      <h3>2. Trabalhe nos arquivos</h3>
      <p>Edite normalmente no programa que você usa.</p>

      <h3>3. Confira e registre</h3>
      <pre class="command">git status
git diff
git add .
git commit -m "Descricao da alteracao"</pre>

      <h3>4. Envie</h3>
      <pre class="command">git push</pre>

      <div class="flow">PULL → TRABALHAR → STATUS/DIFF → ADD → COMMIT → PUSH</div>
      <div class="concept-box"><strong>Primeiro receba. Depois trabalhe. Por último envie.</strong></div>`
  },
  {
    id: 13,
    menu: '13 Dia a dia',
    title: 'GitHub 13 — Fluxo completo do dia a dia',
    objective: 'Transformar os comandos principais em uma rotina simples de trabalho.',
    content: `
      <div class="hero-box">
        <h3>A rotina que queremos automatizar na cabeça</h3>
        <p>Você não precisa decorar dezenas de comandos. Para projetos simples, este pequeno ciclo resolve a maior parte do trabalho.</p>
      </div>

      <pre class="command">cd /d "%USERPROFILE%\meus-repositorios\primeiro-repositorio"
git pull

REM trabalhe nos arquivos

git status
git diff
git add .
git commit -m "Descricao da alteracao"
git push</pre>
      <div class="note-box"><strong>REM</strong> é apenas um comentário do CMD no exemplo. Não é um comando Git.</div>

      <h3>Antes de fechar o trabalho</h3>
      <pre class="command">git status</pre>
      <p>Se não houver alterações pendentes, você sabe que não deixou mudanças locais esquecidas sem commit.</p>

      <h3>Consulte quando precisar</h3>
      <pre class="command">git log --oneline
git remote -v</pre>`
  },
  {
    id: 14,
    menu: '14 Problemas',
    title: 'GitHub 14 — Erros comuns e como se recuperar',
    objective: 'Reconhecer problemas básicos sem recorrer a comandos destrutivos ou soluções aleatórias.',
    content: `
      <div class="hero-box">
        <h3>Quando algo der errado, não adivinhe</h3>
        <p>Leia a mensagem, confirme a pasta e consulte o estado antes de tentar corrigir.</p>
      </div>

      <h3>Primeiro comando de diagnóstico</h3>
      <pre class="command">git status</pre>

      <h3>Problema 1 — “não é um repositório Git”</h3>
      <p>Provavelmente você está na pasta errada.</p>
      <pre class="command">cd /d "%USERPROFILE%\meus-repositorios\primeiro-repositorio"
git status</pre>

      <h3>Problema 2 — Fiz commit, mas não apareceu no GitHub</h3>
      <pre class="command">git push</pre>

      <h3>Problema 3 — O push foi rejeitado porque o remoto tem novidades</h3>
      <pre class="command">git pull</pre>
      <p>Se o pull terminar normalmente:</p>
      <pre class="command">git push</pre>

      <h3>Problema 4 — Conflito</h3>
      <p>Se você e o GitHub modificarem a mesma parte de um arquivo, o Git pode não saber qual conteúdo manter. Ele avisará que existe um conflito.</p>
      <p>Abra o arquivo e procure marcações semelhantes a:</p>
      <pre class="command">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
versao local
=======
versao recebida
&gt;&gt;&gt;&gt;&gt;&gt;&gt;</pre>
      <p>Escolha ou combine o conteúdo correto, remova essas marcações, salve e finalize:</p>
      <pre class="command">git status
git add NOME-DO-ARQUIVO
git commit -m "Resolve conflito"
git push</pre>
      <div class="note-box"><strong>Não tente “forçar” o Git sem entender a mensagem.</strong> Conflito não significa perda do projeto; significa que você precisa decidir qual conteúdo deve permanecer.</div>

      <h3>Problema 5 — Quero desfazer uma alteração local</h3>
      <pre class="command">git diff
git restore NOME-DO-ARQUIVO</pre>

      <h3>Problema 6 — Coloquei um arquivo no git add por engano</h3>
      <pre class="command">git restore --staged NOME-DO-ARQUIVO</pre>

      <div class="danger-box"><strong>Evite comandos aleatórios encontrados na Internet.</strong> Neste nível, não precisamos de <span class="inline-code">reset --hard</span>, rebase ou outras operações destrutivas para resolver os problemas básicos apresentados aqui.</div>`
  },
  {
    id: 15,
    menu: '15 Resumo',
    title: 'GitHub 15 — Comandos essenciais de sobrevivência',
    objective: 'Reunir em uma única tela os comandos realmente necessários para projetos simples.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Fechamento — Git + GitHub</span>
        <h3>Não precisamos decorar tudo</h3>
        <p>O objetivo é saber qual pergunta cada comando responde.</p>
      </div>

      <div class="flow">git status                    → como está o repositório?
git diff                      → o que mudou nas linhas?
git add .                     → o que quero preparar?
git commit -m "Mensagem"      → registrar uma versão
git log --oneline             → quais commits existem?
git clone URL                 → trazer um repositório do GitHub
git remote -v                 → a qual remoto estou ligado?
git pull                      → receber novidades
git push                      → enviar commits
git restore arquivo           → descartar alteração local
git restore --staged arquivo  → retirar da preparação</div>

      <h3>Quando o projeto já existe no PC</h3>
      <pre class="command">git remote add origin URL
git remote -v
git branch --show-current
git push -u origin main</pre>
      <p>Use o nome mostrado por <span class="inline-code">git branch --show-current</span> no lugar de <span class="inline-code">main</span>, se for diferente.</p>

      <h3>O fluxo que mais importa</h3>
      <div class="flow">git pull
   ↓
trabalhar
   ↓
git status + git diff
   ↓
git add .
   ↓
git commit
   ↓
git push</div>

      <div class="ok-box"><strong>Sobrevivência concluída.</strong> Com esse conjunto, o aluno já consegue criar, versionar, publicar, clonar, sincronizar e recuperar os erros básicos de um projeto simples.</div>`
  }
];

const exerciseSteps = [
  {
    id: 'inicio',
    menu: 'Como praticar',
    title: '99 — Exercícios de Git e GitHub',
    objective: 'Praticar do CMD à sincronização com GitHub em dificuldade crescente, consultando respostas somente depois da tentativa.',
    content: `
      <div class="hero-box">
        <span class="part-badge">Prática MbB</span>
        <h3>Aprender fazendo</h3>
        <p>Os exercícios seguem a mesma ordem do módulo: primeiro Git local, depois GitHub, e por fim situações de sobrevivência.</p>
      </div>
      <div class="concept-box"><strong>Regra MbB:</strong> tente sozinho → use a dica se necessário → só depois abra uma possível resposta.</div>
      <ul class="check-list">
        <li>CMD e criação de repositório.</li>
        <li>Status, diff, add, commit e histórico.</li>
        <li>.gitignore e restore.</li>
        <li>Clone, origin, push e pull.</li>
        <li>Publicação de um projeto que já existe no PC.</li>
        <li>Diagnóstico e fluxo completo.</li>
      </ul>`
  },
  {
    id: 'e1',
    menu: '1 CMD',
    title: 'Exercício 1 — Preparando uma pasta de prática',
    objective: 'Relembrar os comandos mínimos do CMD antes de iniciar o Git.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">1</span>Desafio</h4>
      <p>Vá para sua pasta de usuário, entre em <span class="inline-code">meus-repositorios</span>, crie <span class="inline-code">pratica-git</span> e entre nela.</p></div>
      <details class="answer-box"><summary>Conferir uma possível resposta</summary><div class="answer-content"><pre class="command">cd /d "%USERPROFILE%"
cd meus-repositorios
mkdir pratica-git
cd pratica-git</pre></div></details>`
  },
  {
    id: 'e2',
    menu: '2 Init',
    title: 'Exercício 2 — Criando o repositório local',
    objective: 'Inicializar um repositório e consultar seu estado.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">2</span>Desafio</h4><p>Transforme <span class="inline-code">pratica-git</span> em repositório e confira se o Git o reconhece.</p></div>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">git init
git status</pre></div></details>`
  },
  {
    id: 'e3',
    menu: '3 Arquivo',
    title: 'Exercício 3 — Primeiro arquivo e primeiro commit',
    objective: 'Percorrer sozinho arquivo → status → add → commit.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">3</span>Desafio</h4><p>Crie <span class="inline-code">anotacoes.txt</span> com o texto <strong>Praticando Git</strong>, confira o estado, prepare e crie o primeiro commit.</p></div>
      <details class="answer-box"><summary>Conferir uma possível resposta</summary><div class="answer-content"><pre class="command">echo Praticando Git &gt; anotacoes.txt
git status
git add anotacoes.txt
git commit -m "Cria anotacoes"</pre></div></details>`
  },
  {
    id: 'e4',
    menu: '4 Diff',
    title: 'Exercício 4 — Descobrindo exatamente o que mudou',
    objective: 'Diferenciar git status de git diff.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">4</span>Desafio</h4><p>Acrescente <strong>Segunda versao</strong> ao arquivo. Descubra primeiro qual arquivo mudou e depois quais linhas mudaram.</p></div>
      <h3>Dica</h3><p>Use dois comandos de consulta diferentes.</p>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">echo Segunda versao &gt;&gt; anotacoes.txt
git status
git diff</pre><p><span class="inline-code">status</span> mostra o arquivo; <span class="inline-code">diff</span> mostra as linhas alteradas.</p></div></details>`
  },
  {
    id: 'e5',
    menu: '5 Histórico',
    title: 'Exercício 5 — Criando uma segunda versão',
    objective: 'Registrar a nova alteração e consultar o histórico resumido.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">5</span>Desafio</h4><p>Prepare a alteração do exercício anterior, registre uma segunda versão e mostre os commits em uma linha cada.</p></div>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">git add anotacoes.txt
git commit -m "Atualiza anotacoes"
git log --oneline</pre></div></details>`
  },
  {
    id: 'e6',
    menu: '6 Gitignore',
    title: 'Exercício 6 — Mantendo um arquivo fora do Git',
    objective: 'Criar uma regra simples de .gitignore e verificar seu efeito.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">6</span>Desafio</h4><p>Crie um <span class="inline-code">.gitignore</span> que ignore <span class="inline-code">segredo.txt</span>. Depois crie esse arquivo e use <span class="inline-code">git status</span>. Ele não deve aparecer para ser adicionado.</p></div>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">echo segredo.txt &gt; .gitignore
echo Minha senha NAO deve ser publicada &gt; segredo.txt
git status</pre><p>O <span class="inline-code">.gitignore</span> aparecerá para ser versionado; <span class="inline-code">segredo.txt</span> deverá ser ignorado.</p></div></details>`
  },
  {
    id: 'e7',
    menu: '7 Restore',
    title: 'Exercício 7 — Desfazendo sem apagar o histórico',
    objective: 'Praticar os dois usos básicos de git restore.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">7</span>Parte A</h4><p>Altere <span class="inline-code">anotacoes.txt</span>, veja a diferença e descarte a alteração.</p></div>
      <details class="answer-box"><summary>Resposta da Parte A</summary><div class="answer-content"><pre class="command">echo Linha que vou descartar &gt;&gt; anotacoes.txt
git diff
git restore anotacoes.txt</pre></div></details>
      <div class="task-box"><h4>Parte B</h4><p>Altere o arquivo novamente, use <span class="inline-code">git add</span> e depois retire-o da preparação sem perder a alteração.</p></div>
      <details class="answer-box"><summary>Resposta da Parte B</summary><div class="answer-content"><pre class="command">echo Linha que vou manter &gt;&gt; anotacoes.txt
git add anotacoes.txt
git restore --staged anotacoes.txt
git status</pre></div></details>`
  },
  {
    id: 'e8',
    menu: '8 GitHub',
    title: 'Exercício 8 — Criando um repositório no GitHub',
    objective: 'Criar um remoto simples que possa ser clonado.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">8</span>Desafio</h4><ol><li>Crie no GitHub um repositório chamado <span class="inline-code">pratica-github</span>.</li><li>Deixe-o público.</li><li>Adicione um README.</li><li>Confirme que o repositório possui um primeiro commit.</li></ol></div>
      <div class="note-box">Este exercício é feito pela interface do GitHub. Não há comando de CMD para executar aqui.</div>`
  },
  {
    id: 'e9',
    menu: '9 Clone',
    title: 'Exercício 9 — Clonando e identificando o origin',
    objective: 'Trazer o repositório remoto e confirmar sua ligação com o GitHub.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">9</span>Desafio</h4><p>Na pasta <span class="inline-code">meus-repositorios</span>, clone <span class="inline-code">pratica-github</span>, entre nele, veja o histórico e descubra o endereço do <span class="inline-code">origin</span>.</p></div>
      <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">cd /d "%USERPROFILE%\meus-repositorios"
git clone https://github.com/SEU-USUARIO/pratica-github.git
cd pratica-github
git log --oneline
git remote -v</pre></div></details>`
  },
  {
    id: 'e10',
    menu: '10 Push',
    title: 'Exercício 10 — Do computador para o GitHub',
    objective: 'Criar um commit local e enviá-lo ao remoto.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">10</span>Desafio</h4><p>Crie <span class="inline-code">aluno.txt</span>, coloque seu nome, faça o ciclo local e envie ao GitHub.</p></div>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">echo Seu Nome &gt; aluno.txt
git status
git add aluno.txt
git commit -m "Adiciona identificacao do aluno"
git push</pre><p>Depois confirme no navegador se <span class="inline-code">aluno.txt</span> apareceu.</p></div></details>`
  },
  {
    id: 'e11',
    menu: '11 Pull',
    title: 'Exercício 11 — Do GitHub para o computador',
    objective: 'Criar uma alteração remota e recebê-la com git pull.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">11</span>Desafio</h4><p>Edite o README pelo navegador, faça o commit no GitHub e depois traga a alteração ao computador.</p></div>
      <details class="answer-box"><summary>Conferir resposta no CMD</summary><div class="answer-content"><pre class="command">git pull
type README.md
git log --oneline</pre></div></details>`
  },
  {
    id: 'e12',
    menu: '12 Fluxo',
    title: 'Exercício 12 — A rotina completa',
    objective: 'Executar sem roteiro detalhado o fluxo pull → trabalho → commit → push.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">12</span>Desafio</h4><ol><li>Atualize o projeto.</li><li>Altere <span class="inline-code">aluno.txt</span>.</li><li>Confira arquivo e linhas alteradas.</li><li>Prepare.</li><li>Crie um commit.</li><li>Envie.</li></ol></div>
      <details class="answer-box"><summary>Ver somente os comandos Git</summary><div class="answer-content"><pre class="command">git pull
git status
git diff
git add .
git commit -m "Atualiza dados do aluno"
git push</pre></div></details>`
  },
  {
    id: 'e13',
    menu: '13 Projeto local',
    title: 'Exercício 13 — Publicando um projeto que já existe no PC',
    objective: 'Praticar o segundo caminho de início: local → GitHub.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">13</span>Desafio</h4><p>Use o repositório local <span class="inline-code">pratica-git</span> criado no início. No GitHub, crie um repositório novo e <strong>vazio</strong>. Conecte o local a ele e faça o primeiro push.</p></div>
      <h3>Checklist</h3><ul class="check-list"><li>O remoto foi criado sem README, licença ou .gitignore.</li><li>Você copiou a URL HTTPS correta.</li><li>Conferiu o <span class="inline-code">origin</span>.</li><li>Conferiu o nome da branch atual.</li><li>Fez o primeiro push com <span class="inline-code">-u</span>.</li></ul>
      <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">cd /d "%USERPROFILE%\meus-repositorios\pratica-git"
git remote add origin URL-DO-REPOSITORIO
git remote -v
git branch --show-current
git push -u origin main</pre><p>Substitua <span class="inline-code">main</span> pelo nome mostrado no comando anterior, se for diferente.</p></div></details>`
  },
  {
    id: 'e14',
    menu: '14 Diagnóstico',
    title: 'Exercício 14 — Sobrevivendo a problemas comuns',
    objective: 'Escolher o comando adequado antes de tentar soluções mais agressivas.',
    content: `
      <div class="task-box"><h4><span class="exercise-number">14</span>Responda</h4><ol><li>Você não sabe o que mudou. Qual comando vem primeiro?</li><li>Quer ver as linhas alteradas. Qual comando?</li><li>Fez commit, mas não chegou ao GitHub. O que provavelmente falta?</li><li>O GitHub está mais novo que o PC. O que usar?</li><li>Usou add por engano. Como retirar da preparação sem perder a alteração?</li></ol></div>
      <details class="answer-box"><summary>Conferir respostas</summary><div class="answer-content"><div class="flow">1 → git status
2 → git diff
3 → git push
4 → git pull
5 → git restore --staged NOME-DO-ARQUIVO</div></div></details>`
  },
  {
    id: 'e15',
    menu: '15 Desafio final',
    title: 'Exercício 15 — Projeto completo de sobrevivência',
    objective: 'Demonstrar autonomia no ciclo básico de Git e GitHub.',
    content: `
      <div class="hero-box"><span class="part-badge">Desafio final</span><h3>Agora sem roteiro pronto</h3><p>Crie um projeto chamado <span class="inline-code">projeto-final-git</span> e leve-o do computador ao GitHub.</p></div>
      <div class="task-box"><h4>Seu projeto deve:</h4><ol><li>nascer no computador;</li><li>ter Git inicializado;</li><li>ter um <span class="inline-code">.gitignore</span> simples;</li><li>ter pelo menos dois arquivos rastreados;</li><li>ter pelo menos três commits;</li><li>ser publicado em um repositório vazio do GitHub;</li><li>receber uma alteração feita pelo GitHub usando <span class="inline-code">git pull</span>;</li><li>receber depois uma nova alteração local usando <span class="inline-code">git push</span>.</li></ol></div>
      <h3>Conferência final</h3><pre class="command">git status
git log --oneline
git remote -v</pre>
      <div class="ok-box"><strong>Conseguiu e sabe explicar o que aconteceu?</strong> Então você já tem o essencial de sobrevivência para trabalhar com Git e GitHub em projetos simples.</div>`
  }
];

const menu = document.getElementById('menu');
const lesson = document.getElementById('lesson');
const title = document.getElementById('stepTitle');
const objective = document.getElementById('objective');
const moduleButtons = [...document.querySelectorAll('.module-btn')];

const modules = {
  git: {label: 'Git', steps: gitSteps},
  github: {label: 'GitHub', steps: githubSteps},
  exercicios: {label: '99. Exercícios', steps: exerciseSteps}
};

let activeModule = 'git';
let activeSteps = gitSteps;

function renderMenu(){
  menu.innerHTML = '<h3>Etapas</h3>';
  activeSteps.forEach(step => {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.id = `btn-${activeModule}-${step.id}`;
    button.textContent = step.menu;
    button.type = 'button';
    button.addEventListener('click', () => showStep(step.id));
    menu.appendChild(button);
  });
}

function setModule(moduleKey, stepId = null, updateHash = true){
  if(!modules[moduleKey]) moduleKey = 'git';
  activeModule = moduleKey;
  activeSteps = modules[moduleKey].steps;

  moduleButtons.forEach(button => {
    const isActive = button.dataset.module === activeModule;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  renderMenu();
  const target = activeSteps.find(item => String(item.id) === String(stepId)) || activeSteps[0];
  showStep(target.id, updateHash);
}

function showStep(id, updateHash = true){
  const step = activeSteps.find(item => String(item.id) === String(id)) || activeSteps[0];
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.getElementById(`btn-${activeModule}-${step.id}`);
  if(active){
    active.classList.add('active');
    active.setAttribute('aria-current', 'page');
    active.scrollIntoView({block:'nearest', inline:'nearest'});
  }
  title.textContent = step.title;
  objective.innerHTML = `<strong>Objetivo:</strong> ${step.objective}`;
  lesson.innerHTML = `${step.content}${lessonFooter(step.id)}`;
  lesson.scrollTop = 0;
  window.scrollTo({top:0, behavior:'auto'});
  if(updateHash) history.replaceState(null, '', `#${activeModule}-${step.id}`);
}

function lessonFooter(id){
  const index = activeSteps.findIndex(item => String(item.id) === String(id));
  const prev = activeSteps[index - 1];
  const next = activeSteps[index + 1];
  const lastLabel = activeModule === 'git' ? 'Parte Git concluída' : activeModule === 'github' ? 'GitHub concluído' : 'Exercícios concluídos';
  return `
    <div class="lesson-footer">
      <button type="button" ${prev ? `onclick="showStep('${prev.id}')"` : 'disabled'}>← Anterior</button>
      <button type="button" ${next ? `onclick="showStep('${next.id}')"` : 'disabled'}>${next ? 'Próxima →' : lastLabel}</button>
    </div>`;
}

moduleButtons.forEach(button => {
  button.addEventListener('click', () => setModule(button.dataset.module));
});

const oldHash = location.hash.match(/^#etapa-(\d+)$/);
const newHash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
if(newHash){
  setModule(newHash[1], decodeURIComponent(newHash[2]), false);
}else if(oldHash){
  setModule('git', oldHash[1], false);
}else{
  setModule('git', 1, false);
}
