(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const step10 = gitStep(10);
  if (step10 && !step10.content.includes('Versão, hash e HEAD')) {
    step10.content += `
      <h3>Versão, hash e HEAD</h3>
      <p>Imagine que <span class="inline-code">primeiro-projeto</span> seja um pequeno projeto mantido pela equipe de informática da escola. A cada mudança importante — por exemplo, corrigir um aviso, alterar um horário ou acrescentar uma informação — fazemos um commit. Assim, cada decisão importante fica registrada e pode ser localizada depois.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>commit</strong><br>Registro de um momento do projeto.</div>
        <div class="mini-card"><strong>hash</strong><br>Código que identifica aquele commit.</div>
        <div class="mini-card"><strong>HEAD</strong><br>Referência para o commit em que estamos agora.</div>
      </div>
      <div class="concept-box"><strong>Registrar versões só é realmente útil se depois conseguirmos identificar, investigar e recuperar esses registros.</strong></div>`;
  }

  const step11 = gitStep(11);
  if (step11 && !step11.content.includes('Quando o histórico deixa de ser apenas uma lista')) {
    step11.objective = 'Localizar, investigar e comparar commits para entender como o projeto evoluiu.';
    step11.content += `
      <h3>Quando o histórico deixa de ser apenas uma lista</h3>
      <div class="hero-box">
        <h3>Uma informação errada apareceu no projeto</h3>
        <p>Na pequena equipe da escola, alguém percebe que uma informação publicada no projeto está errada. Antes de sair alterando arquivos, precisamos responder: <strong>em qual versão isso entrou e o que exatamente mudou?</strong></p>
      </div>

      <h3>3. Investigue um commit específico</h3>
      <p>Primeiro localize o identificador com:</p>
      <pre class="command">git log --oneline</pre>
      <p>Depois examine o commit escolhido:</p>
      <pre class="command">git show HASH</pre>
      <p>Substitua <span class="inline-code">HASH</span> pelo código mostrado no histórico. O Git exibirá informações daquele commit e as alterações introduzidas por ele.</p>
      <div class="note-box">Se a visualização abrir em uma tela de navegação, pressione <span class="inline-code">q</span> para sair.</div>

      <h3>4. Compare duas versões</h3>
      <p>Se a equipe sabe que uma versão estava correta e outra já contém o problema, compare as duas:</p>
      <pre class="command">git diff HASH_ANTIGO HASH_NOVO</pre>
      <p>Assim você vê as diferenças entre aqueles dois momentos do projeto. A ordem importa: o Git mostra o que mudou do primeiro commit para o segundo.</p>

      <h3>Fluxo de investigação</h3>
      <div class="flow">Problema percebido
        ↓
 git log --oneline
        ↓
   git show HASH
        ↓
git diff HASH1 HASH2
        ↓
Entendo o que aconteceu
        ↓
Decido como corrigir</div>
      <div class="concept-box"><strong>Antes de recuperar uma versão, descubra qual versão você realmente precisa.</strong></div>`;
  }

  const step13 = gitStep(13);
  if (step13 && !step13.content.includes('O erro já virou commit')) {
    step13.title = '13 — Sobrevivência: desfazer e recuperar versões';
    step13.objective = 'Corrigir erros antes e depois do commit, recuperar conteúdo anterior e preservar o histórico.';
    step13.content = step13.content
      .replace(
        '<h3>Três coisas que salvam muito tempo</h3>\n        <p>Antes de irmos para o GitHub, vamos aprender somente três recursos de proteção: <strong>.gitignore</strong>, <strong>git restore</strong> e <strong>git restore --staged</strong>.</p>',
        '<h3>O erro pode acontecer em momentos diferentes</h3>\n        <p>Às vezes percebemos o problema antes do commit; outras vezes somente depois que a versão já foi registrada. Vamos escolher a recuperação de acordo com o momento do erro, sempre conferindo o estado antes de agir.</p>'
      )
      .replace(
        '<div class="ok-box"><strong>Git local concluído.</strong> Você já sabe criar versões, conferir mudanças, ignorar arquivos indevidos e desfazer dois erros locais muito comuns.</div>',
        ''
      );

    step13.content += `
      <h3>4. O erro já virou commit</h3>
      <div class="hero-box">
        <h3>O aviso errado foi registrado</h3>
        <p>A equipe alterou uma informação, executou <span class="inline-code">git add</span> e fez o commit. Só depois a coordenação percebeu que aquela mudança não deveria ter sido feita. Agora <strong>git restore</strong> sozinho não resolve o mesmo problema, porque a alteração já faz parte do histórico.</p>
      </div>
      <p>Primeiro confirme que não há trabalho local pendente e localize o commit:</p>
      <pre class="command">git status
git log --oneline</pre>
      <p>Se o erro está justamente no último commit:</p>
      <pre class="command">git revert --no-edit HEAD</pre>
      <p>Se você identificou um commit específico:</p>
      <pre class="command">git revert --no-edit HASH</pre>
      <p>O <span class="inline-code">git revert</span> cria <strong>um novo commit</strong> que desfaz as alterações introduzidas pelo commit escolhido.</p>
      <div class="note-box">Neste primeiro contato, pratique com um commit simples e recente. Ao reverter um commit antigo, mudanças posteriores podem depender dele e o Git pode pedir que você resolva um conflito.</div>
      <div class="flow">versão correta
      ↓
commit com erro
      ↓
git revert
      ↓
novo commit de correção</div>
      <div class="concept-box"><strong>Revert não apaga o erro do histórico. Ele registra também a correção.</strong></div>
      <div class="note-box"><strong>Por que usar <span class="inline-code">--no-edit</span>?</strong> Neste módulo ele mantém automaticamente a mensagem de reversão e evita abrir um editor de texto só para confirmar o commit.</div>

      <h3>5. Quero recuperar um arquivo como ele estava em uma versão específica</h3>
      <p>Em outro momento, o problema pode ser diferente: a equipe não quer desfazer um commit inteiro. Precisa apenas recuperar <strong>um arquivo</strong> exatamente como estava em determinado ponto do histórico.</p>
      <pre class="command">git log --oneline
git show HASH
git restore --source=HASH -- projeto.txt
type projeto.txt
git status</pre>
      <p>Nesse momento, o arquivo foi recuperado para a área de trabalho, mas essa recuperação ainda não é um novo commit. Se o conteúdo estiver correto:</p>
      <pre class="command">git add projeto.txt
git commit -m "Restaura versao anterior de projeto.txt"</pre>
      <div class="concept-box"><strong>O passado serve como fonte; a recuperação vira uma nova decisão registrada no presente.</strong></div>

      <h3>6. Quero os arquivos rastreados do projeto como estavam em uma versão específica</h3>
      <div class="hero-box">
        <h3>Uma versão antiga foi aprovada e precisamos retomá-la</h3>
        <p>Imagine que várias alterações foram feitas depois de uma versão aprovada pela escola. Em vez de apagar commits, podemos usar aquela versão antiga como fonte, conferir o resultado e registrar uma nova versão de recuperação.</p>
      </div>
      <div class="danger-box"><strong>Antes de começar:</strong> execute <span class="inline-code">git status</span>. Faça esta recuperação somente com a área de trabalho limpa, para não sobrescrever alterações locais que ainda não foram registradas.</div>
      <pre class="command">git status
git log --oneline
git show HASH
git restore --source=HASH -- .
git status</pre>
      <p>Confira os arquivos. Se aquele estado é realmente o desejado:</p>
      <pre class="command">git add -A
git commit -m "Restaura projeto para versao aprovada"</pre>
      <p>Esse procedimento recupera os <strong>arquivos rastreados</strong> a partir do commit escolhido e registra o resultado como uma nova versão. Arquivos não rastreados não são automaticamente removidos.</p>

      <h3>Não confunda as recuperações</h3>
      <div class="mini-grid">
        <div class="mini-card"><strong>Antes do add</strong><br><span class="inline-code">git restore arquivo</span></div>
        <div class="mini-card"><strong>Depois do add</strong><br><span class="inline-code">git restore --staged arquivo</span></div>
        <div class="mini-card"><strong>Commit errado</strong><br><span class="inline-code">git revert --no-edit HASH</span></div>
        <div class="mini-card"><strong>Conteúdo de uma versão</strong><br><span class="inline-code">git restore --source=HASH -- arquivo</span></div>
      </div>
      <div class="danger-box"><strong>Não use <span class="inline-code">git reset --hard</span> apenas para “voltar versões”.</strong> Neste nível, conseguimos investigar e recuperar o projeto preservando o histórico e reduzindo o risco de perder trabalho.</div>
      <div class="ok-box"><strong>Git local concluído.</strong> Você já sabe registrar versões, investigar o histórico, recuperar conteúdo anterior e corrigir erros sem precisar apagar a história do projeto.</div>`;
  }

  const gh14 = githubStep(14);
  if (gh14 && !gh14.content.includes('Problema 7 — Enviei ao GitHub um commit errado')) {
    gh14.content = gh14.content.replace(
      '<div class="danger-box"><strong>Evite comandos aleatórios encontrados na Internet.</strong> Neste nível, não precisamos de <span class="inline-code">reset --hard</span>, rebase ou outras operações destrutivas para resolver os problemas básicos apresentados aqui.</div>',
      `<h3>Problema 7 — Enviei ao GitHub um commit errado</h3>
      <p>O erro já está no histórico local e também foi publicado. Neste nível, não vamos reescrever a história compartilhada. Vamos registrar a correção.</p>
      <pre class="command">git status
git log --oneline
git revert --no-edit HASH
git push</pre>
      <p>Se o problema está no último commit, você pode usar:</p>
      <pre class="command">git revert --no-edit HEAD
git push</pre>
      <div class="concept-box"><strong>Depois que um commit foi compartilhado, corrigir com um novo commit deixa o que aconteceu explicável para toda a equipe.</strong></div>

      <div class="danger-box"><strong>Evite comandos aleatórios encontrados na Internet.</strong> Neste nível, não precisamos de <span class="inline-code">reset --hard</span>, rebase, force push ou outras operações que reescrevem ou descartam histórico para resolver os problemas básicos apresentados aqui.</div>`
    );
  }

  const gh15 = githubStep(15);
  if (gh15 && !gh15.content.includes('git show HASH')) {
    gh15.content = gh15.content.replace(
      'git log --oneline             → quais commits existem?\ngit clone URL',
      'git log --oneline             → quais commits existem?\ngit show HASH                   → o que aconteceu naquele commit?\ngit diff HASH1 HASH2            → o que mudou entre duas versões?\ngit revert --no-edit HASH       → desfazer um commit preservando o histórico\ngit restore --source=HASH -- arquivo → recuperar um arquivo de uma versão\ngit clone URL'
    );
  }

  const exerciseIntro = exerciseStep('inicio');
  if (exerciseIntro && !exerciseIntro.content.includes('show, comparação')) {
    exerciseIntro.content = exerciseIntro.content.replace(
      '<li>.gitignore e restore.</li>',
      '<li>.gitignore, restore, show, comparação de versões e revert.</li>'
    );
  }

  const e7 = exerciseStep('e7');
  if (e7 && !e7.content.includes('Parte C — O erro já foi commitado')) {
    e7.title = 'Exercício 7 — Desfazendo e recuperando versões';
    e7.objective = 'Praticar recuperação antes e depois do commit e reutilizar uma versão específica.';
    e7.content += `
      <div class="task-box"><h4>Parte C — O erro já foi commitado</h4><p>Primeiro registre a linha que você decidiu manter na Parte B, deixando a área de trabalho limpa. Depois simule uma situação real: acrescente <strong>Informacao temporaria</strong> a <span class="inline-code">anotacoes.txt</span>, faça o commit e só então descubra que essa informação estava errada. Desfaça o último commit sem apagá-lo do histórico.</p></div>
      <details class="answer-box"><summary>Resposta da Parte C</summary><div class="answer-content"><pre class="command">git add anotacoes.txt
git commit -m "Mantem nova anotacao"
echo Informacao temporaria &gt;&gt; anotacoes.txt
git add anotacoes.txt
git commit -m "Inclui informacao temporaria"
git log --oneline
git revert --no-edit HEAD
git log --oneline
type anotacoes.txt</pre><p>O histórico mostrará tanto o commit com a alteração quanto o novo commit que o desfez.</p></div></details>

      <div class="task-box"><h4>Parte D — Recuperando uma versão específica</h4><p>A coordenação pediu o conteúdo de <span class="inline-code">anotacoes.txt</span> como ele estava em um commit anterior. Localize um hash, investigue esse commit, recupere o arquivo e registre a recuperação como uma nova versão.</p></div>
      <details class="answer-box"><summary>Uma possível sequência</summary><div class="answer-content"><pre class="command">git log --oneline
git show HASH
git restore --source=HASH -- anotacoes.txt
type anotacoes.txt
git status
git add anotacoes.txt
git commit -m "Restaura anotacoes de uma versao anterior"
git log --oneline</pre><p>Substitua <span class="inline-code">HASH</span> pelo identificador da versão que você realmente escolheu.</p></div></details>`;
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

  const activeButton = document.querySelector('.nav-btn.active');
  const currentId = activeButton ? activeButton.id.replace(`btn-${activeModule}-`, '') : null;
  setModule(activeModule, currentId, false);
})();
