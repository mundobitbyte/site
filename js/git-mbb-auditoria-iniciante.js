(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));
  const commandStep = id => (typeof modules !== 'undefined' && modules.comandos)
    ? modules.comandos.steps.find(step => String(step.id) === String(id))
    : null;

  const normalizeGitCmd = value => {
    if (!value) return value;
    let text = String(value)
      .replace(/Git CMD\/CMD do Windows/g, 'Git CMD')
      .replace(/Git CMD\/CMD/g, 'Git CMD')
      .replace(/Prompt de Comando do Windows/g, 'Git CMD')
      .replace(/Prompt de Comando/g, 'Git CMD')
      .replace(/CMD do Windows/g, 'Git CMD');

    text = text.replace(/Git CMD/g, '__MBB_GIT_CMD__');
    text = text.replace(/\bCMD\b/g, 'Git CMD');
    return text.replace(/__MBB_GIT_CMD__/g, 'Git CMD');
  };

  const markExample = (step, exactCode) => {
    if (!step || !exactCode) return;
    const normal = `<pre class="command">${exactCode}</pre>`;
    const marked = `<pre class="command command-example">${exactCode}</pre>`;
    if (step.content.includes(normal)) step.content = step.content.replace(normal, marked);
  };

  const g2 = gitStep(2);
  if (g2) {
    g2.content = g2.content.replace(
      `<h3>2. Abra o Prompt de Comando</h3>
        <p>Pressione <strong>Windows + R</strong>, digite <span class="inline-code">cmd</span> e pressione <strong>Enter</strong>. É nessa janela que executaremos os comandos deste módulo.</p>`,
      `<h3>2. Abra o Git CMD</h3>
        <p>Abra o menu <strong>Iniciar</strong> do Windows, procure por <strong>Git CMD</strong> e abra o aplicativo. É nessa janela que executaremos os comandos deste módulo.</p>
        <div class="concept-box"><strong>Padrão deste módulo:</strong> todos os comandos serão executados no <strong>Git CMD</strong>.</div>`
    );
  }

  const g3 = gitStep(3);
  if (g3) {
    g3.content = g3.content
      .replace(
        `<pre class="command">cd
dir</pre>`,
        `<pre class="command">cd
dir</pre>
        <p>No Git CMD, <span class="inline-code">cd</span> sem informar outro caminho mostra a pasta atual. <span class="inline-code">dir</span> mostra o conteúdo dessa pasta.</p>`
      )
      .replace(
        `<pre class="command">Y:\\mtec2025\\nome.sobrenome\\meus-repositorios\\site-cafe-aurora&gt;</pre>`,
        `<pre class="command command-example">Y:\\...\\meus-repositorios\\site-cafe-aurora&gt;</pre>
        <p>A letra da unidade e o início do caminho podem variar. O importante é que o caminho termine em <span class="inline-code">meus-repositorios\\site-cafe-aurora</span>.</p>`
      )
      .replace(
        `<h3>5. Se o Git bloquear o repositório da rede</h3>
        <p>Depois que o repositório for criado, um comando como <span class="inline-code">git status</span> pode apresentar <span class="inline-code">detected dubious ownership</span> e, logo abaixo, o próprio Git mostra o comando para autorizar exatamente aquela pasta.</p>`,
        `<h3>5. Leia agora: se o Git bloquear o repositório da rede mais adiante</h3>
        <div class="note-box"><strong>Não execute nenhum comando desta seção agora.</strong> Primeiro iremos ao tópico seguinte, executaremos <span class="inline-code">git init</span> e depois <span class="inline-code">git status</span>. Só volte a esta orientação se o erro realmente aparecer.</div>
        <p>Depois que o repositório for criado, <span class="inline-code">git status</span> pode apresentar <span class="inline-code">detected dubious ownership</span> e, logo abaixo, o próprio Git mostra o comando para autorizar exatamente aquela pasta.</p>`
      )
      .replace(
        `<div class="danger-box"><strong>Não use safe.directory "*".</strong> Isso autorizaria todos os diretórios e reduziria a proteção de segurança. Autorize somente o repositório indicado pelo próprio Git.</div>`,
        `<div class="note-box"><strong>Normalmente essa autorização fica gravada para aquele repositório.</strong> Se você criar outro repositório em outra pasta da rede, o Git poderá pedir uma nova autorização para o novo caminho.</div>
        <div class="danger-box"><strong>Não use safe.directory "*".</strong> Isso autorizaria todos os diretórios e reduziria a proteção de segurança. Autorize somente o repositório indicado pelo próprio Git.</div>`
      );
    markExample(g3, `C:\\Users\\Usuario\\meus-repositorios\\site-cafe-aurora&gt;`);
    markExample(g3, `git config --global --add safe.directory '%(prefix)///10.66.53.1/Publica/mtec2025/nome.sobrenome/meus-repositorios/site-cafe-aurora'`);
  }

  const g4 = gitStep(4);
  if (g4) {
    g4.content = `
      <div class="hero-box">
        <h3>A pasta existe. O histórico ainda não.</h3>
        <p>Estamos de volta à segunda-feira. Marina confirmou que o horário correto de sábado é <strong>08:00–18:00</strong>. Rafael vai criar o primeiro estado confiável do projeto antes de continuar trabalhando.</p>
      </div>

      <h3>1. Confira onde o Git CMD está</h3>
      <pre class="command">cd</pre>
      <p>O caminho deve terminar em <span class="inline-code">site-cafe-aurora</span>. Se não terminar, volte ao tópico <strong>3 — Localizar</strong> antes de continuar.</p>

      <h3>2. Inicie o repositório</h3>
      <div class="note-box" data-mbb-exp="git-init"><strong>Antes de executar: o que este comando faz?</strong><br><span class="inline-code">git init</span> inicia o controle de versões <strong>na pasta em que o Git CMD está</strong>. Ele cria a estrutura interna do Git nessa pasta. Não envia arquivos para o GitHub e não cria nenhum commit.</div>
      <pre class="command">git init</pre>
      <p>O Git cria internamente uma pasta chamada <span class="inline-code">.git</span>; não precisamos editá-la manualmente.</p>
      <div class="note-box"><strong>Executou git init na pasta errada?</strong> Não apague <span class="inline-code">.git</span> enquanto segue a sequência normal. Vá em <strong>Comandos → Diagnóstico</strong> e consulte <strong>“RECUPERAÇÃO — Executei git init na pasta errada”</strong>.</div>

      <h3>3. Confirme que o Git reconheceu o repositório</h3>
      <pre class="command">git status</pre>
      <div class="note-box"><strong>Se estiver usando sua pasta na rede</strong> e aparecer <span class="inline-code">detected dubious ownership</span> ou <span class="inline-code">safe.directory</span>, pare aqui. Volte ao <strong>Git → 3 Localizar</strong>, copie a sugestão mostrada pelo próprio Git e, no Git CMD, troque somente as aspas simples por aspas duplas. Depois execute <span class="inline-code">git status</span> novamente.</div>
      <p>Só continue quando <span class="inline-code">git status</span> reconhecer normalmente o repositório.</p>

      <h3>4. Crie o primeiro arquivo</h3>
      <pre class="command">echo Sabado: 08:00-18:00 &gt; horario.txt
type horario.txt
git status</pre>
      <p>O sinal <span class="inline-code">&gt;</span> cria ou substitui o conteúdo do arquivo. <span class="inline-code">type</span> permite conferir o que foi gravado.</p>
      <p><span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: ele existe, mas ainda não foi incluído em nenhum commit.</p>
      <div class="concept-box"><strong>git status responde: “como está meu repositório agora?”</strong></div>

      <h3>5. Surge um arquivo que não deve fazer parte do projeto</h3>
      <p>Enquanto testa o conteúdo, Rafael cria um rascunho temporário. Esse arquivo ajuda durante o trabalho, mas não deve virar uma versão do projeto:</p>
      <pre class="command">echo teste de horario &gt; rascunho.tmp
git status</pre>
      <p>Agora o Git também enxerga <span class="inline-code">rascunho.tmp</span>. Para dizer que arquivos temporários <span class="inline-code">.tmp</span> não devem ser versionados, crie:</p>
      <pre class="command">echo *.tmp &gt; .gitignore
git status</pre>
      <p>O rascunho continuará no computador, mas deixará de aparecer como arquivo a ser versionado. O próprio <span class="inline-code">.gitignore</span> deve ser registrado, pois ele faz parte das regras do projeto.</p>
      <div class="danger-box"><strong>Arquivos sensíveis também não devem ser publicados.</strong> Projetos reais podem ignorar arquivos como <span class="inline-code">.env</span>, mas nunca coloque uma senha real em um exercício para “testar” o Git.</div>`;
  }

  const g10 = gitStep(10);
  if (g10) {
    g10.content = g10.content.replace(
      `git add -A
git commit -m "Cancela teste de domingo e retoma versao aprovada"`,
      `git add horario.txt avisos.txt
git commit -m "Cancela teste de domingo e retoma versao aprovada"`
    );
  }

  const gh1 = githubStep(1);
  if (gh1 && !gh1.content.includes('Para esta prática, escolha Public')) {
    gh1.content = gh1.content.replace(
      `<pre class="command">site-cafe-aurora</pre>`,
      `<pre class="command command-example">site-cafe-aurora</pre>
        <p><strong>Para esta prática, escolha Public.</strong> O projeto do exercício não deve conter dados sensíveis e isso simplifica o teste de clone em outra cópia. Em projetos reais, escolha Public ou Private conforme o que pode ser exposto; repositórios privados podem exigir autenticação na outra máquina.</p>`
    );
  }

  const gh4 = githubStep(4);
  if (gh4 && !gh4.content.includes('faça o commit diretamente na branch principal')) {
    gh4.content = gh4.content.replace(
      `<pre class="command">Corrige horario da musica ao vivo</pre>`,
      `<pre class="command command-example">Corrige horario da musica ao vivo</pre>
        <div class="note-box"><strong>Nesta atividade, faça o commit diretamente na branch principal.</strong> Não crie uma nova branch pelo navegador, porque o próximo passo usa <span class="inline-code">git pull</span> para trazer esse commit diretamente para a branch principal local.</div>`
    );
  }

  const gh5 = githubStep(5);
  if (gh5) {
    markExample(gh5, 'https://github.com/USUARIO/site-cafe-aurora.git');
  }

  const gh6 = githubStep(6);
  if (gh6 && !gh6.content.includes('Imagine que algum tempo passou')) {
    gh6.content = gh6.content.replace(
      `<h3>1. Antes de começar, confira e atualize esta cópia</h3>`,
      `<h3>1. Antes de começar, confira e atualize esta cópia</h3>
        <p><strong>Imagine que algum tempo passou desde o clone.</strong> Antes de iniciar uma nova tarefa, Rafael confirma se outra cópia enviou novidades ao GitHub.</p>`
    );
  }

  const gh9 = githubStep(9);
  if (gh9) {
    gh9.content = gh9.content
      .replace(
        `<h3>1. Confirme a principal e atualize-a</h3>
        <pre class="command">git status
git pull</pre>`,
        `<h3>1. Confirme a principal e atualize-a</h3>
        <pre class="command">git status
git branch --show-current</pre>
        <p>O nome mostrado deve ser o da branch principal que você anotou anteriormente. Se não for, volte para ela:</p>
        <pre class="command">git switch BRANCH_PRINCIPAL</pre>
        <p>Substitua <span class="inline-code">BRANCH_PRINCIPAL</span> pelo nome real da sua branch principal. Depois atualize:</p>
        <pre class="command">git pull</pre>`
      )
      .replace(
        `<pre class="command">git merge teste-reservas
type reservas.txt
git status</pre>`,
        `<pre class="command">git merge --no-edit teste-reservas
type reservas.txt
git status</pre>
        <p><span class="inline-code">--no-edit</span> aceita a mensagem automática do merge e evita que um editor de texto inesperado interrompa esta prática inicial.</p>`
      );
  }

  const gh10 = githubStep(10);
  if (gh10) {
    gh10.content = gh10.content.replace(
      `<pre class="command">git status
git fetch
git status
git pull</pre>
        <p>Se o pull concluir normalmente, faça o push depois. Se aparecer conflito, pare e leia quais arquivos o Git indicou antes de continuar.</p>`,
      `<pre class="command">git status
git fetch
git status
git pull --no-rebase --no-edit</pre>
        <p>Neste caso de diagnóstico, <span class="inline-code">--no-rebase</span> deixa explícito que queremos integrar as histórias com merge; <span class="inline-code">--no-edit</span> evita abrir o editor da mensagem do merge. Se aparecer conflito, pare e leia quais arquivos o Git indicou antes de continuar. Se o pull concluir normalmente, faça o push depois.</p>`
    );
  }

  const e1 = exerciseStep('e1');
  if (e1) {
    e1.content = `
      <div class="task-box"><h4><span class="exercise-number">1</span>Desafio</h4>
      <p>Use o <strong>mesmo local-base que você escolheu no Café Aurora</strong>: usuário local ou sua pasta na rede. Dentro de <span class="inline-code">meus-repositorios</span>, crie <span class="inline-code">feira-criativa</span>, entre nela e confirme o local.</p></div>
      <details class="answer-box"><summary>Conferir uma possível resposta</summary><div class="answer-content">
        <p><strong>Se você trabalha no usuário local:</strong></p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios"
mkdir feira-criativa
cd feira-criativa
cd
dir</pre>
        <p><strong>Se você trabalha na rede:</strong></p>
        <pre class="command">pushd \\10.66.53.1\Publica\mtec2025\nome.sobrenome\meus-repositorios
mkdir feira-criativa
cd feira-criativa
cd
dir</pre>
        <p>Na rede, substitua <span class="inline-code">nome.sobrenome</span> pelo nome da sua pasta.</p>
      </div></details>`;
  }

  const e2 = exerciseStep('e2');
  if (e2) {
    e2.content = `
      <div class="task-box"><h4><span class="exercise-number">2</span>Desafio</h4>
      <p>Transforme <span class="inline-code">feira-criativa</span> em repositório e confirme se o Git o reconhece.</p></div>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content">
        <pre class="command">git init
git status</pre>
        <div class="note-box"><strong>Se a Feira Criativa estiver na rede</strong> e aparecer <span class="inline-code">detected dubious ownership</span>, copie o comando sugerido pelo próprio Git. No Git CMD, troque somente as aspas simples por aspas duplas e preserve <span class="inline-code">%(prefix)///</span> se aparecer. Depois execute <span class="inline-code">git status</span> novamente. A autorização do Café Aurora não autoriza automaticamente este novo repositório.</div>
      </div></details>`;
  }

  const e10 = exerciseStep('e10');
  if (e10) {
    e10.content = e10.content.replace(
      `git add -A
git commit -m "Cancela teste e retoma versao aprovada"`,
      `git add evento.txt
git commit -m "Cancela teste e retoma versao aprovada"`
    );
  }

  const e17 = exerciseStep('e17');
  if (e17) {
    e17.content = `
      <div class="task-box"><h4><span class="exercise-number">17</span>Desafio</h4><p>Na cópia clonada, acrescente <strong>Contato: feira@exemplo.com</strong>, faça commit e push. Depois volte à cópia original e apenas confira <span class="inline-code">evento.txt</span>, sem usar fetch ou pull ainda.</p></div>
      <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content">
        <p><strong>Na cópia clonada:</strong></p>
        <pre class="command">git status
git pull
echo Contato: feira@exemplo.com &gt;&gt; evento.txt
git diff
git add evento.txt
git commit -m "Adiciona contato da feira"
git push</pre>
        <p><strong>Volte à cópia original.</strong> Se ela estiver no usuário local:</p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\feira-criativa"</pre>
        <p>Se ela estiver na rede:</p>
        <pre class="command">pushd \\10.66.53.1\Publica\mtec2025\nome.sobrenome\meus-repositorios\feira-criativa</pre>
        <p>Então apenas confira:</p>
        <pre class="command">type evento.txt
git status</pre>
        <p>O contato ainda não deve aparecer na cópia original.</p>
      </div></details>`;
  }

  const e20 = exerciseStep('e20');
  if (e20) {
    e20.content = e20.content.replace(
      `<pre class="command">git status
git pull
git merge teste-divulgacao
type divulgacao.txt
git push
git branch -d teste-divulgacao
git push origin --delete teste-divulgacao</pre>`,
      `<pre class="command">git status
git branch --show-current
git switch BRANCH_PRINCIPAL
git pull
git merge --no-edit teste-divulgacao
type divulgacao.txt
git status
git push
git branch -d teste-divulgacao
git push origin --delete teste-divulgacao</pre>
        <p>Substitua <span class="inline-code">BRANCH_PRINCIPAL</span> pelo nome real da branch principal.</p>`
    );
  }

  exerciseSteps.forEach(step => {
    if (!step || !step.content) return;
    step.content = step.content.replace(/^\s*REM[^\n]*\n?/gm, '');
  });

  [...gitSteps, ...githubSteps, ...exerciseSteps].forEach(step => {
    if (!step) return;
    ['title', 'objective', 'content'].forEach(field => {
      if (step[field]) step[field] = step[field].replace(/NOME-DA-BRANCH/g, 'BRANCH_PRINCIPAL');
    });
  });

  const registrar = commandStep('registrar');
  if (registrar) {
    registrar.content = registrar.content.replace(
      'Prepara todas as alterações rastreadas e remoções do projeto para o próximo commit.',
      'Prepara de uma vez arquivos novos não ignorados, arquivos modificados e remoções do projeto para o próximo commit.'
    ).replace(
      'Use quando você realmente pretende registrar o conjunto atual de alterações.',
      'Use somente quando você conferiu o estado e realmente pretende registrar todo o conjunto atual de alterações.'
    );
  }

  const cmd = commandStep('cmd');
  if (cmd) {
    const marker = '<h3>safe.directory no Git CMD</h3>';
    if (cmd.content.includes(marker)) {
      cmd.content = cmd.content.slice(0, cmd.content.indexOf(marker));
    }
  }

  if (typeof modules !== 'undefined' && modules.comandos && !commandStep('rede')) {
    const redeStep = {
      id: 'rede',
      menu: 'Rede e segurança',
      title: 'Comandos — Rede e safe.directory',
      objective: 'Resolver o bloqueio de segurança de um repositório confiável em pasta de rede sem autorizar caminhos desnecessários.',
      content: `
        <div class="commands-hero">
          <h3>Use somente quando o erro realmente aparecer</h3>
          <p>Em alguns repositórios armazenados na rede, <span class="inline-code">git status</span> pode mostrar <span class="inline-code">detected dubious ownership</span> e sugerir uma exceção de <span class="inline-code">safe.directory</span>.</p>
        </div>
        <div class="concept-box"><strong>Regra MbB:</strong> não monte o caminho manualmente. Copie o comando que o próprio Git mostrar para aquele repositório.</div>
        <h3>1. Exemplo de sugestão mostrada pelo Git</h3>
        <pre class="command-ref-code command-example"><code>git config --global --add safe.directory '%(prefix)///10.66.53.1/Publica/mtec2025/nome.sobrenome/meus-repositorios/site-cafe-aurora'</code></pre>
        <p>Esse bloco é <strong>exemplo</strong>. No seu computador, use o caminho que o Git realmente mostrou.</p>
        <h3>2. No Git CMD, troque somente as aspas</h3>
        <pre class="command-ref-code command-example"><code>git config --global --add safe.directory "%(prefix)///10.66.53.1/Publica/mtec2025/nome.sobrenome/meus-repositorios/site-cafe-aurora"</code></pre>
        <p>Preserve todo o restante, inclusive <span class="inline-code">%(prefix)///</span> quando aparecer na sugestão.</p>
        <h3>3. Confira</h3>
        <pre class="command-ref-code"><code>git status</code></pre>
        <div class="note-box"><strong>Normalmente a autorização fica gravada para aquele repositório.</strong> Outro repositório em outro caminho da rede pode pedir uma nova autorização.</div>
        <div class="danger-box"><strong>Não use safe.directory "*".</strong> Autorizar todos os diretórios reduz a proteção de segurança. Autorize somente o repositório confiável indicado pelo próprio Git.</div>`
    };
    const prepararIndex = modules.comandos.steps.findIndex(step => String(step.id) === 'preparar');
    modules.comandos.steps.splice(prepararIndex >= 0 ? prepararIndex + 1 : 2, 0, redeStep);
  }

  const diagnostic = commandStep('diagnostico');
  if (diagnostic) {
    diagnostic.content = diagnostic.content
      .replace(
        /<button class="command-copy-btn" type="button" data-rede-copy="rmdir \/s \/q \.git">Copiar<\/button>/g,
        ''
      )
      .replace(
        `O caminho mostrado é realmente a pasta que virou repositório por engano? Se aparecer <span class="inline-code">site-cafe-aurora</span>, <strong>não continue</strong>.`,
        `O caminho mostrado é realmente a pasta que virou repositório por engano? Se essa for uma pasta de projeto que você pretende continuar versionando — por exemplo <span class="inline-code">site-cafe-aurora</span> ou <span class="inline-code">feira-criativa</span> — <strong>não continue</strong>.`
      )
      .replace(
        `<span class="cmd-status cmd-edit">⚠ Apaga o histórico Git local</span>`,
        `<span class="cmd-status cmd-edit">⚠ Comando destrutivo — leia antes de digitar</span>`
      );
  }

  const g6 = gitStep(6);
  if (g6) {
    markExample(g6, `7f32abc Atualiza horario de sabado
4d10ef2 Adiciona aviso de musica ao vivo
8cb271a Registra horario aprovado`);
  }
  if (gh10) {
    markExample(gh10, `&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
versao do computador
=======
versao recebida
&gt;&gt;&gt;&gt;&gt;&gt;&gt;`);
  }

  if (!document.getElementById('mbb-git-auditoria-style')) {
    const style = document.createElement('style');
    style.id = 'mbb-git-auditoria-style';
    style.textContent = `
      .command.command-example,
      .command-ref-code.command-example{
        background:#f8fafc;
        color:#172033;
        border:1px dashed #94a3b8;
      }
      .command.command-example::before,
      .command-ref-code.command-example::before{
        content:"EXEMPLO / SAÍDA — não execute literalmente";
        display:block;
        margin:0 0 8px;
        color:#64748b;
        font-family:"Segoe UI",Arial,sans-serif;
        font-size:11px;
        font-weight:900;
        letter-spacing:.04em;
        white-space:normal;
      }
    `;
    document.head.appendChild(style);
  }

  const allSteps = [
    ...gitSteps,
    ...githubSteps,
    ...exerciseSteps,
    ...((typeof modules !== 'undefined' && modules.comandos) ? modules.comandos.steps : [])
  ];
  allSteps.forEach(step => {
    if (!step) return;
    ['menu', 'title', 'objective', 'content'].forEach(field => {
      if (step[field]) step[field] = normalizeGitCmd(step[field]);
    });
  });

  const cmdFinal = commandStep('cmd');
  if (cmdFinal) {
    cmdFinal.menu = 'Git CMD e pastas';
    cmdFinal.title = 'Comandos — Git CMD, arquivos e pastas';
  }

  const hash = location.hash.match(/^#(git|github|exercicios|comandos)-(.+)$/);
  if (hash) setModule(hash[1], decodeURIComponent(hash[2]), false);
  else setModule('git', 1, false);
})();