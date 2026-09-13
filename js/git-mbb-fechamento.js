(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const g8 = gitStep(8);
  if (g8 && !g8.content.includes('Ainda falta uma habilidade importante antes do GitHub')) {
    g8.content = g8.content.replace(
      '<div class="ok-box"><strong>Git local concluído.</strong> O projeto do Café Aurora já possui histórico útil. O próximo problema surge naturalmente: esse histórico ainda existe somente neste computador.</div>',
      '<div class="note-box"><strong>Ainda falta uma habilidade importante antes do GitHub:</strong> aprender a visitar versões antigas sem alterar o presente e experimentar uma mudança em uma branch separada.</div>'
    );
  }

  if (!gitStep(9)) {
    gitSteps.push({
      id: 9,
      menu: '9 Histórico e branches',
      title: '9 — Visitar versões e trabalhar em paralelo',
      objective: 'Distinguir inspeção histórica, recuperação e trabalho em branch sem alterar a linha principal por engano.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Fechamento do Git local</span>
          <h3>Voltar pode significar coisas diferentes</h3>
          <p>Depois de vários commits, Marina pergunta duas coisas diferentes: primeiro quer <strong>ver como o projeto estava antes</strong>; depois quer que Rafael <strong>teste uma ideia sem mexer na versão principal</strong>. São necessidades diferentes e usam recursos diferentes do Git.</p>
        </div>
        <h3>1. Anote em qual branch você está</h3>
        <pre class="command">git status\ngit branch --show-current\ngit log --oneline</pre>
        <p>Guarde o nome mostrado por <span class="inline-code">git branch --show-current</span>. Neste material vamos chamá-lo de <span class="inline-code">BRANCH_PRINCIPAL</span>. No seu computador pode ser <span class="inline-code">main</span>, <span class="inline-code">master</span> ou outro nome.</p>
        <h3>2. Quero apenas visitar uma versão antiga</h3>
        <p>Escolha no histórico um commit anterior e use:</p>
        <pre class="command">git switch --detach HASH_ANTIGO\ntype horario.txt\ntype avisos.txt\ngit status</pre>
        <p>Os arquivos passam a mostrar aquele momento histórico. Você está apenas inspecionando um commit antigo; o histórico não foi apagado nem reescrito.</p>
        <div class="note-box"><strong>Modo de inspeção:</strong> neste nível, não crie novos commits enquanto estiver em <span class="inline-code">detached HEAD</span>. Observe o projeto e depois volte para sua branch.</div>
        <pre class="command">git switch BRANCH_PRINCIPAL\ngit status</pre>
        <p>Substitua <span class="inline-code">BRANCH_PRINCIPAL</span> pelo nome que você anotou. A versão atual reaparece.</p>
        <h3>3. E se eu quiser visitar uma versão bem mais antiga?</h3>
        <p>O procedimento é o mesmo: escolha outro hash no <span class="inline-code">git log --oneline</span>, visite-o e depois retorne para a branch principal.</p>
        <pre class="command">git switch --detach OUTRO_HASH\nREM observe os arquivos\ngit switch BRANCH_PRINCIPAL</pre>
        <h3>Não confunda três necessidades</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Só quero olhar o passado</strong><br><span class="inline-code">git switch --detach HASH</span> e depois <span class="inline-code">git switch BRANCH</span>.</div>
          <div class="mini-card"><strong>Quero usar o conteúdo antigo agora</strong><br><span class="inline-code">git restore --source=HASH -- ...</span> e novo commit.</div>
          <div class="mini-card"><strong>Quero desfazer um commit errado</strong><br><span class="inline-code">git revert HASH</span>.</div>
        </div>
        <h3>4. Quero experimentar sem mexer na principal</h3>
        <p>Marina quer testar um pequeno recurso de <strong>reservas antecipadas</strong>, mas ainda não decidiu se ele fará parte do projeto oficial. Rafael cria uma <strong>branch</strong>: uma linha paralela de trabalho que parte do estado atual.</p>
        <pre class="command">git status\ngit switch -c teste-reservas</pre>
        <p>Agora Rafael está na branch <span class="inline-code">teste-reservas</span>. Ele pode experimentar e registrar sem alterar a branch principal:</p>
        <pre class="command">echo Reservas antecipadas: teste interno &gt; reservas.txt\ngit add reservas.txt\ngit commit -m "Testa recurso de reservas"\ngit status</pre>
        <h3>5. Volte para a branch principal e compare</h3>
        <pre class="command">git switch BRANCH_PRINCIPAL\ndir</pre>
        <p><span class="inline-code">reservas.txt</span> não faz parte da branch principal. O teste não foi perdido: ele continua na outra branch.</p>
        <pre class="command">git switch teste-reservas\ntype reservas.txt\ngit switch BRANCH_PRINCIPAL\ngit branch</pre>
        <p>O asterisco mostrado por <span class="inline-code">git branch</span> indica a branch ativa. Vamos deixar <span class="inline-code">teste-reservas</span> guardada para continuar este assunto quando o GitHub entrar na história.</p>
        <div class="concept-box"><strong>Branch não é uma versão antiga.</strong> É uma linha de trabalho paralela que pode receber novos commits sem alterar a branch em que o projeto principal continua.</div>
        <div class="ok-box"><strong>Git local concluído.</strong> Você já sabe registrar, investigar, recuperar, visitar o passado e separar uma experiência da linha principal.</div>`
    });
  }

  const gh1 = githubStep(1);
  if (gh1 && !gh1.content.includes('Onde o projeto nasceu?')) {
    gh1.content += `
      <h3>Onde o projeto nasceu?</h3>
      <p>Antes de conectar Git e GitHub, responda esta pergunta. Ela define o começo correto.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>Já existe no PC com commits</strong><br>Crie o repositório no GitHub <strong>vazio</strong> → conecte com <span class="inline-code">remote add</span> → faça o primeiro <span class="inline-code">push</span>.</div>
        <div class="mini-card"><strong>Já existe no GitHub com histórico</strong><br>Não crie outra história local. Use <span class="inline-code">git clone</span> para trazer arquivos, commits e origin.</div>
      </div>
      <div class="concept-box"><strong>Regra MbB:</strong> escolha onde o projeto nasce; depois faça o outro lado nascer a partir dele.</div>
      <div class="danger-box"><strong>Evite criar dois históricos independentes sem necessidade.</strong> Se o projeto local já tem commits, não inicialize o remoto com README, licença ou .gitignore antes do primeiro push.</div>`;
  }

  const gh2 = githubStep(2);
  if (gh2 && !gh2.content.includes('primeira sincronização')) {
    gh2.content += `
      <h3>Este é o primeiro encontro entre os dois lados</h3>
      <div class="flow">PC com commits\n      ↓\nremote add origin\n      ↓\npush -u da branch principal\n      ↓\nGitHub passa a possuir essa história</div>
      <p>O <span class="inline-code">commit</span> continua sendo local. É o primeiro <span class="inline-code">push</span> que faz os commits existentes no PC passarem a existir também no GitHub.</p>
      <div class="concept-box"><strong>Primeira sincronização:</strong> no caminho PC → GitHub, o remoto começa vazio e recebe a história pelo primeiro push.</div>`;
  }

  const gh7 = githubStep(7);
  if (gh7 && !gh7.content.includes('falta entender como uma branch local')) {
    gh7.content = gh7.content.replace(
      '<div class="ok-box"><strong>Git + GitHub concluídos.</strong> Você acompanhou um único projeto do problema inicial ao histórico local, recuperação, publicação, segunda cópia, sincronização e diagnóstico.</div>',
      '<div class="note-box"><strong>O fluxo básico está dominado.</strong> Falta entender como uma branch local passa a existir também no GitHub e como <span class="inline-code">fetch</span> difere de <span class="inline-code">pull</span>.</div>'
    );
  }

  if (!githubStep(8)) {
    githubSteps.push({
      id: 8,
      menu: '8 Branches no GitHub',
      title: 'GitHub 8 — Publicando e integrando uma branch',
      objective: 'Fazer uma branch local existir no remoto, usar fetch sem alterar os arquivos e integrar um teste aprovado.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Fechamento — Git + GitHub</span>
          <h3>A experiência de reservas ainda existe só no computador</h3>
          <p>Lembra da branch <span class="inline-code">teste-reservas</span>? O primeiro push enviou apenas a branch principal. A branch de teste continua local até que Rafael decida publicá-la.</p>
        </div>
        <h3>1. Confira e publique a branch de teste</h3>
        <pre class="command">git branch\ngit switch teste-reservas\ngit status\ngit push -u origin teste-reservas</pre>
        <p>Agora a branch existe também no GitHub. O <span class="inline-code">-u</span> cria o acompanhamento entre a branch local e a branch remota de mesmo nome.</p>
        <h3>2. Volte para a principal</h3>
        <pre class="command">git switch BRANCH_PRINCIPAL\ngit status</pre>
        <p>Substitua <span class="inline-code">BRANCH_PRINCIPAL</span> pelo nome real da sua branch principal.</p>
        <h3>3. Conheça o fetch: atualizar informações sem incorporar</h3>
        <pre class="command">git fetch\ngit branch -a</pre>
        <p><span class="inline-code">git fetch</span> atualiza no seu computador as informações conhecidas sobre o remoto. Ele <strong>não troca os arquivos da branch atual</strong> nem incorpora automaticamente os novos commits nela.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>fetch</strong><br>busca informações e referências do remoto sem integrar na branch atual.</div>
          <div class="mini-card"><strong>pull</strong><br>busca e integra novidades na branch atual.</div>
        </div>
        <h3>4. Marina aprovou o teste</h3>
        <p>Como o recurso de reservas foi aprovado, Rafael integra os commits da branch de teste na branch principal.</p>
        <pre class="command">git status\ngit pull\ngit merge teste-reservas\ngit status\ngit push</pre>
        <p>Depois do merge e do push, a branch principal passa a conter também o recurso testado.</p>
        <h3>5. Encerre a branch de teste</h3>
        <pre class="command">git branch -d teste-reservas\ngit push origin --delete teste-reservas</pre>
        <p>O primeiro comando remove a branch local já integrada. O segundo remove a branch remota. A história dos commits permanece na branch principal depois do merge.</p>
        <h3>Mapa mental de sincronização</h3>
        <div class="flow">commit → registra aqui\npush   → envia commits para o remoto\npull   → recebe e integra na branch atual\nfetch  → atualiza informações do remoto sem integrar\nclone  → cria uma nova cópia local de um repositório remoto</div>
        <div class="concept-box"><strong>Antes de sincronizar, descubra onde está e como está.</strong> <span class="inline-code">git status</span>, branch atual e histórico evitam comandos executados no lugar errado.</div>
        <div class="ok-box"><strong>Git + GitHub concluídos.</strong> Você acompanhou um projeto desde o primeiro commit até histórico, recuperação, inspeção de versões, branches, publicação, sincronização, merge e diagnóstico.</div>`
    });
  }

  const exIntro = exerciseStep('inicio');
  if (exIntro && !exIntro.content.includes('visitar versões')) {
    exIntro.content = exIntro.content.replace(
      '<div class="flow">criar → registrar → investigar → recuperar → publicar → sincronizar → diagnosticar</div>',
      '<div class="flow">criar → registrar → investigar → recuperar → visitar versões → ramificar → publicar → sincronizar → integrar → diagnosticar</div>'
    );
  }

  const renumber = (oldId, newId, menu, title) => {
    const step = exerciseStep(oldId);
    if (!step) return;
    step.id = newId;
    step.menu = menu;
    step.title = title;
  };

  if (!exerciseStep('e9-historico-branch')) {
    renumber('e15', 'e17', '17 Desafio final', 'Exercício 17 — Projeto completo de sobrevivência');
    renumber('e14', 'e16', '16 Diagnóstico', 'Exercício 16 — Escolhendo o próximo passo');
    renumber('e13', 'e14', '14 Duas cópias', 'Exercício 14 — Duas cópias, um único remoto');
    renumber('e12', 'e13', '13 Clone', 'Exercício 13 — Simulando um segundo computador');
    renumber('e11', 'e12', '12 Pull', 'Exercício 12 — Uma correção nasce no GitHub');
    renumber('e10', 'e11', '11 Push', 'Exercício 11 — Uma nova mudança local chega ao GitHub');
    renumber('e9', 'e10', '10 Publicar', 'Exercício 10 — Levando o projeto local ao GitHub');

    const publishIndex = exerciseSteps.findIndex(step => String(step.id) === 'e10');
    exerciseSteps.splice(publishIndex, 0, {
      id: 'e9-historico-branch',
      menu: '9 Versões e branch',
      title: 'Exercício 9 — Visitando o passado e criando uma branch',
      objective: 'Distinguir inspeção histórica de trabalho paralelo sem modificar a branch principal.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">9</span>Parte A — Visitar sem alterar</h4><p>Confira a branch atual e o histórico. Escolha o primeiro commit do projeto, visite essa versão com <span class="inline-code">git switch --detach</span>, observe <span class="inline-code">evento.txt</span> e depois volte para a branch em que estava.</p></div>
        <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">git status\ngit branch --show-current\ngit log --oneline\ngit switch --detach HASH_ANTIGO\ntype evento.txt\ngit switch NOME-DA-BRANCH\ngit status</pre><p>Use os valores reais do seu histórico. A visita ao commit antigo não cria uma nova versão e não altera a história.</p></div></details>
        <div class="task-box"><h4>Parte B — Teste em paralelo</h4><p>A organização quer testar um novo arquivo de divulgação sem colocá-lo ainda na versão principal. Crie a branch <span class="inline-code">teste-divulgacao</span>, crie <span class="inline-code">divulgacao.txt</span>, faça um commit e depois volte para a branch principal. Confirme que o arquivo de teste não faz parte dela.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">git switch -c teste-divulgacao\necho Instagram: @feiracriativa &gt; divulgacao.txt\ngit add divulgacao.txt\ngit commit -m "Testa divulgacao da feira"\ngit switch NOME-DA-BRANCH\ndir\ngit branch</pre><p>Deixe <span class="inline-code">teste-divulgacao</span> guardada. Ela será publicada e integrada mais adiante.</p></div></details>`
    });

    const diagIndex = exerciseSteps.findIndex(step => String(step.id) === 'e16');
    exerciseSteps.splice(diagIndex, 0, {
      id: 'e15-branch-remota',
      menu: '15 Branch no GitHub',
      title: 'Exercício 15 — Da branch local ao GitHub e de volta à principal',
      objective: 'Publicar uma branch, observar fetch e integrar o trabalho aprovado.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">15</span>Desafio</h4><p>A branch <span class="inline-code">teste-divulgacao</span> ainda existe localmente. Faça-a existir também no GitHub. Depois volte à branch principal, use <span class="inline-code">fetch</span> para atualizar as informações do remoto sem alterar seus arquivos e, por fim, integre a branch de teste porque a divulgação foi aprovada.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">git branch\ngit switch teste-divulgacao\ngit push -u origin teste-divulgacao\n\ngit switch NOME-DA-BRANCH\ngit fetch\ngit branch -a\n\ngit status\ngit pull\ngit merge teste-divulgacao\ngit push\n\ngit branch -d teste-divulgacao\ngit push origin --delete teste-divulgacao</pre><p><span class="inline-code">fetch</span> atualiza o que o Git sabe sobre o remoto, mas não incorpora a branch de teste na principal. Quem faz isso aqui é o <span class="inline-code">merge</span>.</p></div></details>`
    });
  }

  const e10 = exerciseStep('e10');
  if (e10 && !e10.content.includes('Por que o repositório remoto começa vazio?')) {
    e10.content += `
      <h3>Antes de conferir a resposta</h3>
      <div class="example-box">
        <p><strong>Por que o repositório remoto começa vazio?</strong><br>Porque este projeto já nasceu no PC e já possui histórico local.</p>
        <p><strong>E se o projeto já existisse no GitHub com commits?</strong><br>O começo natural seria <span class="inline-code">git clone</span>, não criar outro histórico com <span class="inline-code">git init</span>.</p>
      </div>`;
  }

  const e14 = exerciseStep('e14');
  if (e14 && !e14.content.includes('git fetch')) {
    e14.content = `
      <div class="task-box"><h4><span class="exercise-number">14</span>Desafio</h4><p>Na cópia clonada, acrescente <strong>Contato: feira@exemplo.com</strong>, faça commit e push. Depois volte à cópia original. Primeiro use <span class="inline-code">fetch</span> e confirme que o arquivo local ainda está antigo; só então use <span class="inline-code">pull</span> e confirme que o conteúdo chegou.</p></div>
      <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">REM na copia clonada\ngit status\ngit pull\necho Contato: feira@exemplo.com &gt;&gt; evento.txt\ngit diff\ngit add evento.txt\ngit commit -m "Adiciona contato da feira"\ngit push\n\nREM na copia original\ncd /d "%USERPROFILE%\\meus-repositorios\\feira-criativa"\ntype evento.txt\ngit status\ngit fetch\ngit branch -a\ntype evento.txt\nREM o arquivo ainda nao mudou\ngit pull\ntype evento.txt</pre><p>Esse contraste mostra a diferença: <span class="inline-code">fetch</span> atualiza referências do remoto; <span class="inline-code">pull</span> incorpora a novidade na branch atual.</p></div></details>`;
  }

  const e16 = exerciseStep('e16');
  if (e16) {
    e16.objective = 'Diagnosticar e escolher a operação correta antes de executar comandos de correção ou sincronização.';
    e16.content = `
      <div class="task-box"><h4><span class="exercise-number">16</span>Responda</h4><ol>
        <li>Você não sabe como está o repositório. Qual comando vem primeiro?</li>
        <li>Quer saber exatamente quais linhas locais mudaram.</li>
        <li>Usou <span class="inline-code">git add</span> por engano, mas quer manter a alteração no arquivo.</li>
        <li>Um commit local correto ainda não apareceu no GitHub.</li>
        <li>O remoto possui um commit que sua cópia ainda não recebeu e você quer incorporá-lo agora.</li>
        <li>Quer atualizar apenas as informações sobre o remoto sem incorporar nada à branch atual.</li>
        <li>Você enviou um commit errado e quer corrigi-lo preservando o histórico.</li>
        <li>Quer recuperar um arquivo como estava em uma versão específica e transformar isso em uma nova mudança atual.</li>
        <li>Quer apenas olhar como o projeto inteiro estava em um commit antigo e depois voltar à branch atual.</li>
        <li>Quer testar uma ideia sem alterar a branch principal.</li>
      </ol></div>
      <details class="answer-box"><summary>Conferir respostas</summary><div class="answer-content"><div class="flow">1 → git status\n2 → git diff\n3 → git restore --staged ARQUIVO\n4 → git push\n5 → git pull\n6 → git fetch\n7 → git revert --no-edit HASH\n8 → git restore --source=HASH -- ARQUIVO\n9 → git switch --detach HASH e depois git switch BRANCH\n10 → git switch -c NOVA-BRANCH</div></div></details>`;
  }

  const e17 = exerciseStep('e17');
  if (e17) {
    e17.objective = 'Demonstrar autonomia no ciclo essencial de Git e GitHub, incluindo histórico, branches e sincronização.';
    e17.content = `
      <div class="hero-box"><span class="part-badge">Desafio final</span><h3>Agora o projeto é seu</h3><p>Crie um projeto pequeno com um contexto real que você entenda: pode ser agenda, catálogo, cardápio, evento, lista de tarefas ou outro tema simples.</p></div>
      <div class="task-box"><h4>Seu projeto deve:</h4><ol>
        <li>nascer no computador e ter Git inicializado;</li>
        <li>ter um <span class="inline-code">.gitignore</span> motivado por algum arquivo que não deve ser versionado;</li>
        <li>ter pelo menos dois arquivos rastreados e três commits com mensagens explicativas;</li>
        <li>usar <span class="inline-code">git log --oneline</span> e <span class="inline-code">git show</span> para investigar uma versão;</li>
        <li>visitar um commit antigo com <span class="inline-code">git switch --detach</span> e retornar à branch atual sem alterar a história;</li>
        <li>criar de propósito um commit errado e corrigi-lo com <span class="inline-code">git revert</span>;</li>
        <li>criar uma branch de teste, fazer pelo menos um commit nela e voltar à principal;</li>
        <li>ser publicado em um repositório vazio do GitHub;</li>
        <li>publicar também a branch de teste, usar <span class="inline-code">fetch</span>, integrar a branch aprovada com <span class="inline-code">merge</span> e enviar o resultado;</li>
        <li>receber uma alteração remota com <span class="inline-code">git pull</span> e enviar outra com <span class="inline-code">git push</span>;</li>
        <li>ser clonado em outra pasta e terminar com <span class="inline-code">git status</span> limpo.</li>
      </ol></div>
      <h3>Conferência final</h3><pre class="command">git status\ngit log --oneline\ngit remote -v\ngit branch -a</pre>
      <div class="ok-box"><strong>Conseguiu e sabe explicar por que usou cada comando?</strong> Então você não apenas repetiu o tutorial: já consegue criar, investigar, recuperar, ramificar, publicar e sincronizar um projeto simples com autonomia.</div>`;
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();