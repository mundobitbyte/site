(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const g1 = gitStep(1);
  if (g1) {
    g1.content = g1.content.replace(
      'preparar → criar projeto → registrar → alterar → investigar → recuperar → publicar',
      'preparar → criar projeto → registrar → investigar → corrigir → recuperar → experimentar → publicar'
    );
  }

  const novosGit = [
    {
      id: 7,
      menu: '7 Corrigir commit',
      title: '7 — Corrigindo um erro que já virou commit',
      objective: 'Desfazer um commit errado sem apagar o histórico.',
      content: `
        <div class="hero-box">
          <h3>Já sabemos onde o erro entrou. Agora precisamos corrigi-lo.</h3>
          <p>No tópico anterior, Rafael confirmou que o último commit trocou o horário correto de sábado, <strong>18h</strong>, por <strong>20h</strong>. O erro já faz parte do histórico. Por isso, a correção também deve ficar registrada.</p>
        </div>
        <div class="concept-box"><strong>Pergunta antes do comando:</strong> o erro já virou commit? <strong>Sim.</strong> Então vamos usar <span class="inline-code">git revert</span>.</div>
        <h3>1. Confirme que não há outro trabalho pendente</h3>
        <pre class="command">git status\ngit log --oneline</pre>
        <h3>2. Desfaça o último commit sem apagá-lo</h3>
        <pre class="command">git revert --no-edit HEAD</pre>
        <p><span class="inline-code">HEAD</span> representa o commit atual. O <span class="inline-code">revert</span> não apaga esse commit: ele cria <strong>um novo commit</strong> com a correção.</p>
        <h3>3. Veja o resultado</h3>
        <pre class="command">type horario.txt\ngit log --oneline\ngit status</pre>
        <p>O horário deve voltar para <strong>08:00–18:00</strong>. No histórico continuam aparecendo tanto o commit que introduziu o erro quanto o commit que o corrigiu.</p>
        <div class="flow">erro já foi registrado\n      ↓\nidentifico o commit\n      ↓\ngit revert\n      ↓\num novo commit corrige o anterior</div>
        <div class="note-box"><strong>E se o commit errado não for o último?</strong> Localize o hash com <span class="inline-code">git log --oneline</span> e use <span class="inline-code">git revert --no-edit HASH</span>. Neste primeiro contato, pratique com alterações simples.</div>`
    },
    {
      id: 8,
      menu: '8 Antes do commit',
      title: '8 — Corrigindo antes de registrar',
      objective: 'Distinguir uma alteração local de uma alteração já preparada para commit.',
      content: `
        <div class="hero-box">
          <h3>Nem todo erro chega ao histórico</h3>
          <p>Depois de corrigir o horário de sábado, Marina começa a discutir o horário do delivery. Dessa vez Rafael percebe os problemas <strong>antes de criar um commit</strong>.</p>
        </div>
        <div class="concept-box"><strong>Pergunta antes do comando:</strong> a mudança já virou commit? <strong>Não.</strong> Então não precisamos de revert.</div>
        <h3>1. O erro foi percebido antes do git add</h3>
        <p>Rafael digita 23h, mas percebe imediatamente que a informação está errada:</p>
        <pre class="command">echo Delivery: ate 23h &gt;&gt; avisos.txt\ngit status\ngit diff</pre>
        <p>Como a mudança ainda está apenas no arquivo, descarte-a:</p>
        <pre class="command">git restore avisos.txt\ngit status</pre>
        <div class="concept-box"><strong>git restore arquivo</strong> volta o arquivo ao conteúdo do último commit quando a mudança ainda não foi registrada.</div>
        <h3>2. E se eu já tiver usado git add?</h3>
        <p>Depois Rafael recebe a informação de 21h e prepara o arquivo. Antes do commit, Marina pede para aguardar a decisão final:</p>
        <pre class="command">echo Delivery: ate 21h &gt;&gt; avisos.txt\ngit add avisos.txt\ngit status</pre>
        <p>Primeiro retire o arquivo da preparação, sem perder a alteração:</p>
        <pre class="command">git restore --staged avisos.txt\ngit status</pre>
        <p>A linha continua no arquivo. Como a decisão foi adiada, descarte também a alteração local:</p>
        <pre class="command">git restore avisos.txt\ngit status</pre>
        <div class="flow">mudança local → restore arquivo\njá usei add → restore --staged → decido se mantenho ou descarto</div>`
    },
    {
      id: 9,
      menu: '9 Fluxo normal',
      title: '9 — Trabalhando sem erro: o fluxo normal',
      objective: 'Consolidar status → diff → add → commit em uma solicitação real.',
      content: `
        <div class="hero-box">
          <h3>Marina finalmente confirma o delivery</h3>
          <p>A decisão que ficou pendente no tópico anterior foi tomada: pedidos por delivery podem ser feitos até <strong>21h</strong>. Agora não há erro para corrigir. Rafael só precisa seguir o fluxo normal.</p>
        </div>
        <pre class="command">git status\necho Delivery: ate 21h &gt;&gt; avisos.txt\ngit status\ngit diff\ngit add avisos.txt\ngit status\ngit commit -m "Adiciona horario do delivery"\ngit status\ngit log --oneline</pre>
        <div class="flow">entender → alterar → conferir → preparar → registrar → confirmar</div>
        <h3>O que cada etapa responde?</h3>
        <div class="flow">status → como está o projeto?\ndiff → o que mudou?\nadd → o que será registrado?\ncommit → quero guardar esta versão\nlog → quais versões já existem?</div>
        <div class="concept-box"><strong>O caminho normal é simples.</strong> Os comandos de recuperação existem para situações específicas; eles não substituem o ciclo cotidiano de trabalho.</div>`
    },
    {
      id: 10,
      menu: '10 Recuperar versão',
      title: '10 — Recuperando o conteúdo de uma versão aprovada',
      objective: 'Usar um commit antigo como fonte sem apagar o histórico atual.',
      content: `
        <div class="hero-box">
          <h3>Um teste foi registrado, mas a decisão mudou</h3>
          <p>Marina autoriza uma programação especial de domingo para avaliar a procura. Rafael registra o teste. Depois da análise, ela decide cancelar a experiência e pede que os arquivos voltem ao conteúdo que tinham <strong>antes do teste</strong>.</p>
        </div>
        <h3>1. Registre o teste</h3>
        <pre class="command">echo Domingo: 09:00-14:00 &gt;&gt; horario.txt\necho Programacao especial de domingo &gt;&gt; avisos.txt\ngit add horario.txt avisos.txt\ngit commit -m "Testa programacao de domingo"\ngit status\ngit log --oneline</pre>
        <h3>2. Escolha o estado aprovado</h3>
        <p>No histórico, o commit logo abaixo de <strong>Testa programacao de domingo</strong> representa o estado anterior ao teste. Copie o hash e use-o como <span class="inline-code">HASH_APROVADO</span>.</p>
        <pre class="command">git show HASH_APROVADO</pre>
        <h3>3. Traga aquele conteúdo para o presente</h3>
        <div class="danger-box"><strong>Antes de recuperar conteúdo, confirme que a área de trabalho está limpa.</strong> Não prossiga se houver mudanças locais que ainda precisam ser guardadas.</div>
        <pre class="command">git status\ngit restore --source=HASH_APROVADO -- .\ngit status\ngit diff</pre>
        <p>Os arquivos agora têm o conteúdo daquela versão antiga, mas o histórico não voltou no tempo. A recuperação ainda é uma mudança local.</p>
        <h3>4. Registre a decisão atual</h3>
        <pre class="command">git add -A\ngit commit -m "Cancela teste de domingo e retoma versao aprovada"\ngit status\ngit log --oneline</pre>
        <div class="concept-box"><strong>restore --source copia conteúdo antigo para o presente.</strong> O novo commit registra que hoje decidimos retomar aquele estado.</div>
        <div class="note-box"><strong>Se precisar de apenas um arquivo:</strong> use <span class="inline-code">git restore --source=HASH -- horario.txt</span> no lugar do ponto.</div>`
    },
    {
      id: 11,
      menu: '11 Branch',
      title: '11 — Experimentando sem mexer na versão principal',
      objective: 'Criar uma branch porque surgiu uma mudança que ainda não foi aprovada.',
      content: `
        <div class="hero-box">
          <h3>Uma ideia nova ainda não deve entrar no projeto oficial</h3>
          <p>Marina quer testar <strong>reservas antecipadas</strong>, mas ainda não sabe se o recurso será adotado. Rafael precisa experimentar sem misturar o teste com a versão principal do Café Aurora.</p>
        </div>
        <h3>1. Descubra o nome da linha principal</h3>
        <pre class="command">git status\ngit branch --show-current</pre>
        <p>Anote o nome mostrado. Neste material vamos chamá-lo de <span class="inline-code">BRANCH_PRINCIPAL</span>. No seu computador pode ser <span class="inline-code">main</span>, <span class="inline-code">master</span> ou outro nome.</p>
        <h3>2. Crie uma linha separada para o teste</h3>
        <pre class="command">git switch -c teste-reservas</pre>
        <p>Agora Rafael está em uma <strong>branch</strong> chamada <span class="inline-code">teste-reservas</span>: uma linha paralela de trabalho que começou a partir do estado atual.</p>
        <pre class="command">echo Reservas antecipadas: teste interno &gt; reservas.txt\ngit add reservas.txt\ngit commit -m "Testa recurso de reservas"\ngit status</pre>
        <h3>3. Volte para a principal e observe</h3>
        <pre class="command">git switch BRANCH_PRINCIPAL\ndir</pre>
        <p><span class="inline-code">reservas.txt</span> não faz parte da branch principal. O teste não foi apagado: ele continua em <span class="inline-code">teste-reservas</span>.</p>
        <pre class="command">git switch teste-reservas\ntype reservas.txt\ngit switch BRANCH_PRINCIPAL\ngit branch</pre>
        <div class="concept-box"><strong>Branch não é uma versão antiga.</strong> É uma linha de trabalho paralela que pode receber novos commits sem alterar a linha principal.</div>
        <div class="note-box">Deixe <span class="inline-code">teste-reservas</span> guardada. Mais adiante, no GitHub, ela será publicada e integrada.</div>`
    },
    {
      id: 12,
      menu: '12 Visitar passado',
      title: '12 — Visitando uma versão antiga sem alterar o presente',
      objective: 'Inspecionar um commit antigo e voltar para a branch atual sem recuperar nem reverter nada.',
      content: `
        <div class="hero-box">
          <h3>Agora Marina quer apenas consultar o passado</h3>
          <p>Ela não quer desfazer nenhum commit nem recuperar arquivos. Quer somente ver como o projeto estava em um momento anterior e depois voltar para a versão atual.</p>
        </div>
        <div class="concept-box"><strong>Esta necessidade é diferente:</strong> olhar o passado não é o mesmo que trazer o passado de volta.</div>
        <h3>1. Confirme sua branch e escolha um commit</h3>
        <pre class="command">git status\ngit branch --show-current\ngit log --oneline</pre>
        <p>Escolha um commit em que <span class="inline-code">avisos.txt</span> já existia, como <strong>Adiciona aviso de musica ao vivo</strong>.</p>
        <h3>2. Visite aquele momento</h3>
        <pre class="command">git switch --detach HASH_ANTIGO\ntype horario.txt\ntype avisos.txt\ngit status</pre>
        <p>Os arquivos mostram aquele momento histórico. Você está temporariamente fora de uma branch, em modo de inspeção.</p>
        <div class="note-box"><strong>Neste nível, não crie commits enquanto estiver em detached HEAD.</strong> Apenas observe e volte.</div>
        <h3>3. Volte para a branch principal</h3>
        <pre class="command">git switch BRANCH_PRINCIPAL\ngit status</pre>
        <p>A versão atual reaparece, inclusive o delivery confirmado. Nada foi apagado e nenhum novo commit foi criado.</p>
        <h3>Três perguntas que não podem mais se confundir</h3>
        <div class="flow">só quero olhar uma versão antiga → switch --detach\nquero usar conteúdo antigo no presente → restore --source\nquero desfazer um commit errado → revert</div>
        <div class="ok-box"><strong>Git local concluído.</strong> O próximo passo é levar esse histórico para um repositório remoto no GitHub.</div>`
    }
  ];

  const indice7 = gitSteps.findIndex(step => String(step.id) === '7');
  if (indice7 >= 0) gitSteps.splice(indice7, gitSteps.length - indice7, ...novosGit);

  const ex7 = {
    id: 'e7', menu: '7 Depois do commit', title: 'Exercício 7 — Corrigindo um erro que já virou commit',
    objective: 'Praticar revert como correção registrada, sem apagar o histórico.',
    content: `<div class="task-box"><h4><span class="exercise-number">7</span>Desafio</h4><p>A organização publica por engano <strong>Evento cancelado</strong> em <span class="inline-code">evento.txt</span> e registra a informação. Depois descobre que a feira continua confirmada. Faça o commit errado e corrija-o preservando os dois registros no histórico.</p></div>
      <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">echo Evento cancelado &gt;&gt; evento.txt\ngit add evento.txt\ngit commit -m "Informa cancelamento"\ngit status\ngit revert --no-edit HEAD\ngit log --oneline\ntype evento.txt</pre></div></details>`
  };
  const ex8 = {
    id: 'e8', menu: '8 Antes do commit', title: 'Exercício 8 — Corrigindo antes de registrar',
    objective: 'Distinguir alteração local de alteração preparada.',
    content: `<div class="task-box"><h4><span class="exercise-number">8</span>Parte A</h4><p>Acrescente por engano <strong>Entrada: R$ 50</strong>, confira e descarte antes do add.</p></div>
      <details class="answer-box"><summary>Resposta da Parte A</summary><div class="answer-content"><pre class="command">echo Entrada: R$ 50 &gt;&gt; evento.txt\ngit status\ngit diff\ngit restore evento.txt\ngit status</pre></div></details>
      <div class="task-box"><h4>Parte B</h4><p>Acrescente <strong>Contato provisório</strong>, use git add, retire o arquivo da preparação sem perder a linha e depois descarte a mudança.</p></div>
      <details class="answer-box"><summary>Resposta da Parte B</summary><div class="answer-content"><pre class="command">echo Contato provisório &gt;&gt; evento.txt\ngit add evento.txt\ngit status\ngit restore --staged evento.txt\ngit status\ngit restore evento.txt\ngit status</pre></div></details>`
  };
  const ex9 = {
    id: 'e9', menu: '9 Fluxo normal', title: 'Exercício 9 — Fazendo uma alteração sem erro',
    objective: 'Consolidar o ciclo normal depois de praticar correções.',
    content: `<div class="task-box"><h4><span class="exercise-number">9</span>Desafio</h4><p>A organização confirma <strong>Credenciamento: a partir de 9h</strong>. Faça a alteração, confira, prepare, registre e termine com o repositório limpo.</p></div>
      <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">git status\necho Credenciamento: a partir de 9h &gt;&gt; evento.txt\ngit diff\ngit add evento.txt\ngit status\ngit commit -m "Adiciona horario de credenciamento"\ngit status\ngit log --oneline</pre></div></details>`
  };
  const ex10 = {
    id: 'e10', menu: '10 Recuperar', title: 'Exercício 10 — Retomando uma versão aprovada',
    objective: 'Usar um commit anterior como fonte e registrar a recuperação no presente.',
    content: `<div class="task-box"><h4><span class="exercise-number">10</span>Desafio</h4><p>Registre um teste acrescentando <strong>Domingo: 9h</strong>. Depois localize o commit imediatamente anterior, recupere os arquivos rastreados daquele estado e registre a decisão de cancelar o teste.</p></div>
      <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">echo Domingo: 9h &gt;&gt; evento.txt\ngit add evento.txt\ngit commit -m "Testa edicao de domingo"\ngit log --oneline\ngit show HASH_APROVADO\ngit status\ngit restore --source=HASH_APROVADO -- .\ngit diff\ngit add -A\ngit commit -m "Cancela teste e retoma versao aprovada"\ngit status</pre><p>Use o hash do commit logo abaixo de <strong>Testa edicao de domingo</strong>.</p></div></details>`
  };
  const ex11 = {
    id: 'e11', menu: '11 Branch', title: 'Exercício 11 — Experimentando em uma branch',
    objective: 'Criar uma linha paralela para um teste ainda não aprovado.',
    content: `<div class="task-box"><h4><span class="exercise-number">11</span>Desafio</h4><p>Crie a branch <span class="inline-code">teste-divulgacao</span>, crie <span class="inline-code">divulgacao.txt</span>, registre o teste e volte para a branch principal. Confirme que o arquivo não faz parte dela.</p></div>
      <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">git status\ngit branch --show-current\ngit switch -c teste-divulgacao\necho Instagram: @feiracriativa &gt; divulgacao.txt\ngit add divulgacao.txt\ngit commit -m "Testa divulgacao da feira"\ngit switch NOME-DA-BRANCH\ndir\ngit branch</pre><p>Substitua <span class="inline-code">NOME-DA-BRANCH</span> pela branch principal que você anotou. Deixe <span class="inline-code">teste-divulgacao</span> guardada.</p></div></details>`
  };
  const ex12 = {
    id: 'e12', menu: '12 Visitar passado', title: 'Exercício 12 — Visitando uma versão sem alterá-la',
    objective: 'Inspecionar um commit antigo e voltar à branch principal.',
    content: `<div class="task-box"><h4><span class="exercise-number">12</span>Desafio</h4><p>Escolha um commit antigo em que <span class="inline-code">evento.txt</span> já exista, visite-o com <span class="inline-code">git switch --detach</span>, confira o arquivo e depois volte para sua branch principal.</p></div>
      <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">git status\ngit branch --show-current\ngit log --oneline\ngit switch --detach HASH_ANTIGO\ntype evento.txt\ngit switch NOME-DA-BRANCH\ngit status</pre><p>A visita não cria uma versão nova nem recupera conteúdo para o presente.</p></div></details>`
  };

  const antigos = {
    publicar: exerciseStep('e10'),
    push: exerciseStep('e11'),
    pull: exerciseStep('e12'),
    clone: exerciseStep('e13'),
    duas: exerciseStep('e14'),
    branchRemota: exerciseStep('e15-branch-remota'),
    diagnostico: exerciseStep('e16'),
    final: exerciseStep('e17')
  };

  const ajustar = (step, id, numero, menu, title) => {
    if (!step) return null;
    step.id = id;
    step.menu = menu;
    step.title = title;
    step.content = step.content.replace(/<span class="exercise-number">\d+<\/span>/, `<span class="exercise-number">${numero}</span>`);
    return step;
  };

  const posteriores = [
    ajustar(antigos.publicar, 'e13', 13, '13 Publicar', 'Exercício 13 — Levando o projeto local ao GitHub'),
    ajustar(antigos.push, 'e14', 14, '14 Push', 'Exercício 14 — Uma nova mudança local chega ao GitHub'),
    ajustar(antigos.pull, 'e15', 15, '15 Pull', 'Exercício 15 — Uma correção nasce no GitHub'),
    ajustar(antigos.clone, 'e16', 16, '16 Clone', 'Exercício 16 — Simulando um segundo computador'),
    ajustar(antigos.duas, 'e17', 17, '17 Duas cópias', 'Exercício 17 — Duas cópias, um único remoto'),
    ajustar(antigos.branchRemota, 'e18', 18, '18 Branch no GitHub', 'Exercício 18 — Da branch local ao GitHub e de volta à principal'),
    ajustar(antigos.diagnostico, 'e19', 19, '19 Diagnóstico', 'Exercício 19 — Escolhendo o próximo passo'),
    ajustar(antigos.final, 'e20', 20, '20 Desafio final', 'Exercício 20 — Projeto completo de sobrevivência')
  ].filter(Boolean);

  const indiceEx7 = exerciseSteps.findIndex(step => String(step.id) === 'e7');
  if (indiceEx7 >= 0) {
    exerciseSteps.splice(indiceEx7, exerciseSteps.length - indiceEx7, ex7, ex8, ex9, ex10, ex11, ex12, ...posteriores);
  }

  const intro = exerciseStep('inicio');
  if (intro) {
    intro.content = intro.content.replace(
      /<div class="flow">[\s\S]*?<\/div>$/,
      '<div class="flow">criar → registrar → investigar → corrigir → trabalhar → recuperar → experimentar → visitar → publicar → sincronizar → integrar → diagnosticar</div>'
    );
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) setModule(hash[1], decodeURIComponent(hash[2]), false);
  else setModule('git', 1, false);
})();
