const steps = [
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
  }
];

const menu = document.getElementById('menu');
const lesson = document.getElementById('lesson');
const title = document.getElementById('stepTitle');
const objective = document.getElementById('objective');

function renderMenu(){
  steps.forEach(step => {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.id = `btn-${step.id}`;
    button.textContent = step.menu;
    button.addEventListener('click', () => showStep(step.id));
    menu.appendChild(button);
  });
}

function showStep(id, updateHash = true){
  const step = steps.find(item => item.id === id) || steps[0];
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.getElementById(`btn-${step.id}`);
  if(active){
    active.classList.add('active');
    active.scrollIntoView({block:'nearest', inline:'nearest'});
  }
  title.textContent = step.title;
  objective.innerHTML = `<strong>Objetivo:</strong> ${step.objective}`;
  lesson.innerHTML = `${step.content}${lessonFooter(step.id)}`;
  lesson.scrollTop = 0;
  window.scrollTo({top:0, behavior:'auto'});
  if(updateHash) history.replaceState(null, '', `#etapa-${step.id}`);
}

function lessonFooter(id){
  const index = steps.findIndex(item => item.id === id);
  const prev = steps[index - 1];
  const next = steps[index + 1];
  return `
    <div class="lesson-footer">
      <button type="button" ${prev ? `onclick="showStep(${prev.id})"` : 'disabled'}>← Anterior</button>
      <button type="button" ${next ? `onclick="showStep(${next.id})"` : 'disabled'}>${next ? 'Próxima →' : 'Parte 1 concluída'}</button>
    </div>`;
}

renderMenu();
const hashMatch = location.hash.match(/etapa-(\d+)/);
showStep(hashMatch ? Number(hashMatch[1]) : 1, false);
