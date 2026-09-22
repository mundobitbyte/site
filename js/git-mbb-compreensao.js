(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const before = (step, needle, html) => {
    if (!step || !step.content.includes(needle) || step.content.includes(`data-mbb-exp="${html.id}"`)) return;
    step.content = step.content.replace(needle, `${html.content}${needle}`);
  };

  const box = (id, title, body) => ({
    id,
    content: `<div class="note-box" data-mbb-exp="${id}"><strong>${title}</strong><br>${body}</div>`
  });

  before(gitStep(4), '<pre class="command">git init</pre>', box(
    'git-init',
    'Antes de executar: o que este comando faz?',
    '<span class="inline-code">git init</span> inicia o controle de versões <strong>na pasta em que o CMD está</strong>. Ele cria a estrutura interna do Git nessa pasta. Não envia arquivos para o GitHub e não cria nenhum commit.'
  ));

  before(gitStep(5), '<pre class="command">git add horario.txt\ngit add .gitignore\ngit status</pre>', box(
    'git-add',
    'O que significa preparar um arquivo?',
    '<span class="inline-code">git add</span> diz ao Git quais mudanças queremos colocar no próximo commit. O arquivo ainda não virou uma versão e nada foi enviado para o GitHub.'
  ));

  before(gitStep(7), '<pre class="command">git revert --no-edit HEAD</pre>', box(
    'git-revert',
    'Leia o comando antes de executá-lo',
    '<span class="inline-code">revert</span> cria uma correção para um commit já registrado; <span class="inline-code">HEAD</span> significa “o commit atual”; <span class="inline-code">--no-edit</span> aceita a mensagem de commit automática criada pelo Git. O erro permanece visível no histórico, junto com sua correção.'
  ));

  before(gitStep(8), '<pre class="command">git restore --staged avisos.txt\ngit status</pre>', box(
    'git-restore-staged',
    'Por que usamos --staged?',
    '<span class="inline-code">--staged</span> tira o arquivo da preparação do próximo commit, mas <strong>não apaga a alteração do arquivo</strong>. Depois disso, você decide se quer continuar trabalhando nela ou descartá-la com <span class="inline-code">git restore arquivo</span>.'
  ));

  before(gitStep(10), '<pre class="command">git status\ngit restore --source=HASH_APROVADO -- .\ngit status\ngit diff</pre>', box(
    'git-restore-source',
    'Entenda as partes de restore --source',
    '<span class="inline-code">--source=HASH_APROVADO</span> diz de qual commit virá o conteúdo; <span class="inline-code">--</span> separa a referência do caminho; <span class="inline-code">.</span> significa os arquivos rastreados desta pasta. O Git copia aquele conteúdo para o presente: o histórico não volta no tempo.'
  ));

  before(gitStep(11), '<pre class="command">git switch -c teste-reservas</pre>', box(
    'git-switch-c',
    'O que este comando está pedindo ao Git?',
    '<span class="inline-code">switch</span> muda a linha de trabalho ativa; <span class="inline-code">-c</span> significa “crie uma nova branch e já entre nela”; <span class="inline-code">teste-reservas</span> é o nome dessa nova linha de trabalho.'
  ));

  before(gitStep(12), '<pre class="command">git switch --detach HASH_ANTIGO\ntype horario.txt\ntype avisos.txt\ngit status</pre>', box(
    'git-switch-detach',
    'Aqui não estamos criando uma branch',
    '<span class="inline-code">--detach</span> permite visitar diretamente um commit antigo, sem transformar essa visita em uma nova linha de trabalho. A ideia é apenas observar aquele momento e depois voltar para a branch principal.'
  ));

  before(githubStep(2), '<pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>', box(
    'github-remote',
    'O que esses dois comandos fazem?',
    '<span class="inline-code">git remote add origin URL-DO-REPOSITORIO</span> cadastra no Git local o endereço do repositório do GitHub. <span class="inline-code">remote</span> indica que estamos tratando de um remoto; <span class="inline-code">add</span> cadastra um novo; <span class="inline-code">origin</span> é o nome curto que daremos a ele; a URL é o endereço real. <strong>Nada é enviado ainda.</strong><br><br><span class="inline-code">git remote -v</span> apenas mostra os remotos cadastrados para conferirmos se o endereço ficou correto.'
  ));

  before(githubStep(2), '<pre class="command">git push -u origin NOME-DA-BRANCH</pre>', box(
    'github-first-push',
    'Leia o primeiro push por partes',
    '<span class="inline-code">push</span> envia commits; <span class="inline-code">-u</span> grava a ligação de acompanhamento para facilitar os próximos envios; <span class="inline-code">origin</span> é o remoto cadastrado; <span class="inline-code">NOME-DA-BRANCH</span> é a branch local que será enviada.'
  ));

  before(githubStep(3), '<pre class="command">git push\ngit status</pre>', box(
    'github-push-curto',
    'Por que agora basta git push?',
    'No primeiro envio usamos <span class="inline-code">-u</span> para criar a ligação entre a branch local e a remota. Como essa ligação já existe, o Git normalmente já sabe <strong>para onde</strong> enviar os novos commits.'
  ));

  before(githubStep(4), '<pre class="command">git pull\ntype avisos.txt\ngit log --oneline\ngit status</pre>', box(
    'github-pull',
    'O que significa pull?',
    '<span class="inline-code">git pull</span> busca novidades do remoto e as incorpora à branch atual. Antes dele, o GitHub está mais novo; depois dele, a cópia local passa a incluir o commit remoto.'
  ));

  before(githubStep(5), '<pre class="command">git clone URL-DO-REPOSITORIO\ncd site-cafe-aurora\ngit status\ngit log --oneline\ngit remote -v\ngit branch -a</pre>', box(
    'github-clone',
    'O que clone traz junto?',
    '<span class="inline-code">git clone</span> não copia apenas os arquivos visíveis. Ele cria uma nova pasta de repositório com histórico, configuração do remoto <span class="inline-code">origin</span> e referências que já existem no GitHub. Por isso não usamos <span class="inline-code">git init</span> depois.'
  ));

  before(githubStep(6), '<pre class="command">git status\ngit pull</pre>', box(
    'github-pull-before-work',
    'Por que receber antes de começar?',
    'Quando existem várias cópias do mesmo projeto, outra delas pode ter enviado commits desde a última vez. Conferir o estado e executar <span class="inline-code">pull</span> antes de editar reduz a chance de começar a partir de uma versão antiga.'
  ));

  before(githubStep(7), '<pre class="command">git fetch\ngit status\ntype avisos.txt</pre>', box(
    'github-fetch',
    'Fetch atualiza conhecimento, não os arquivos da branch',
    '<span class="inline-code">git fetch</span> conversa com o remoto e atualiza as referências que o Git conhece. Ele pode descobrir que há commits novos, mas <strong>não incorpora esses commits à branch atual</strong>. Por isso usamos <span class="inline-code">type avisos.txt</span> antes e depois para enxergar que o arquivo ainda não mudou.'
  ));

  before(githubStep(8), '<pre class="command">git switch teste-reservas\ngit status\ngit push -u origin teste-reservas</pre>', box(
    'github-publish-branch',
    'Publicar uma branch significa enviá-la, não integrá-la',
    'Primeiro entramos em <span class="inline-code">teste-reservas</span>. Depois, <span class="inline-code">git push -u origin teste-reservas</span> cria a correspondente remota e registra o acompanhamento. A branch principal continua separada.'
  ));

  before(githubStep(9), '<pre class="command">git merge teste-reservas\ntype reservas.txt\ngit status</pre>', box(
    'github-merge',
    'O que merge faz?',
    '<span class="inline-code">git merge teste-reservas</span> incorpora à branch atual os commits alcançados pela branch <span class="inline-code">teste-reservas</span>. Por isso é essencial confirmar antes que você está na branch principal: <strong>merge traz a outra branch para a branch em que você está.</strong>'
  ));

  before(githubStep(9), '<pre class="command">git branch -d teste-reservas\ngit push origin --delete teste-reservas</pre>', box(
    'github-delete-branch',
    'Local e remoto são referências diferentes',
    '<span class="inline-code">git branch -d teste-reservas</span> remove a referência local já integrada. <span class="inline-code">git push origin --delete teste-reservas</span> pede ao GitHub que remova a referência remota. Os commits aprovados continuam na principal depois do merge.'
  ));

  const intro = exerciseStep('inicio');
  if (intro && !intro.content.includes('Antes de abrir uma resposta')) {
    intro.content += `
      <div class="note-box" data-mbb-exp="exercise-understanding"><strong>Antes de abrir uma resposta:</strong> tente dizer em voz alta o que cada comando deveria fazer e o que você espera observar depois. O objetivo dos exercícios não é decorar sequências, mas escolher comandos porque você entendeu a situação.</div>`;
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();
