(() => {
  const gitStep = id => gitSteps.find(step => String(step.id) === String(id));
  const githubStep = id => githubSteps.find(step => String(step.id) === String(id));

  const g1 = gitStep(1);
  if (g1) {
    g1.content = `
      <div class="hero-box">
        <span class="part-badge">Parte 1 — Git no computador</span>
        <h3>Um horário errado trouxe um problema de verdade</h3>
        <p>O <strong>Café Aurora</strong> é um pequeno negócio de bairro. Marina administra o café e Rafael cuida do pequeno projeto digital usado para manter horários e avisos que depois são publicados para os clientes.</p>
        <p>Na <strong>segunda-feira</strong>, Marina confirmou que o café fecharia no sábado às 18h e Rafael atualizou o arquivo de horários. Na <strong>terça</strong>, ele acrescentou o aviso de música ao vivo. Na <strong>sexta</strong>, ao revisar o arquivo antes do fim de semana, Rafael digitou por engano <strong>20:00</strong> no lugar de <strong>18:00</strong>. No <strong>sábado</strong>, clientes consultaram a informação errada e chegaram depois de o café já ter fechado.</p>
      </div>
      <div class="flow">segunda: horário correto\n      ↓\nterça: novo aviso\n      ↓\nsexta: horário alterado por engano\n      ↓\nsábado: clientes encontram o café fechado\n      ↓\nquando o erro entrou?\nqual era o conteúdo correto?</div>
      <p>Rafael tinha arquivos e mensagens, mas não um histórico confiável que mostrasse cada mudança. O problema não era apenas corrigir o horário: era conseguir responder <strong>o que mudou, quando mudou e como recuperar um estado anterior</strong>.</p>
      <p>É exatamente aí que entra o <strong>Git</strong>: ele registra momentos do projeto e permite consultar sua história. Cada registro importante é chamado de <strong>commit</strong>.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>Git</strong><br>Controla versões no computador.</div>
        <div class="mini-card"><strong>GitHub</strong><br>Hospeda e compartilha repositórios pela Internet.</div>
      </div>
      <div class="concept-box"><strong>Git guarda a história do projeto. GitHub permite levar essa história para um repositório remoto.</strong></div>
      <h3>O projeto que vamos acompanhar</h3>
      <p>Agora vamos <strong>voltar à segunda-feira, antes do erro</strong>, e reconstruir essa sequência usando Git. Assim veremos como cada mudança poderia ter sido registrada, investigada e recuperada.</p>
      <p>Vamos trabalhar em uma pasta chamada <span class="inline-code">site-cafe-aurora</span>. Usaremos arquivos de texto para deixar as mudanças fáceis de enxergar. <strong>Neste módulo, esses arquivos representam o conteúdo do projeto; publicar um site real não é o objetivo desta aula.</strong> O mesmo raciocínio de versionamento vale depois para HTML, CSS, JavaScript, Python ou outros arquivos.</p>
      <div class="flow">preparar → criar projeto → registrar → alterar → investigar → recuperar → publicar</div>`;
  }

  const g5 = gitStep(5);
  if (g5) {
    g5.content = `
      <div class="hero-box">
        <h3>Segunda-feira: primeira versão aprovada</h3>
        <p>Voltamos ao início da história. Marina confirmou que o horário correto de sábado é <strong>08:00–18:00</strong>. Rafael quer registrar esse estado antes de qualquer nova alteração.</p>
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

      <h3>Terça-feira: música ao vivo</h3>
      <p>No dia seguinte, Marina confirma música ao vivo na sexta às 19h. Rafael cria outro arquivo:</p>
      <pre class="command">echo Musica ao vivo: sexta 19h &gt; avisos.txt\ntype avisos.txt\ngit status</pre>
      <p>Como <span class="inline-code">avisos.txt</span> é novo, use <span class="inline-code">type</span> para conferir o conteúdo e depois registre:</p>
      <pre class="command">git add avisos.txt\ngit status\ngit commit -m "Adiciona aviso de musica ao vivo"</pre>

      <h3>Sexta-feira: aqui nasce o erro</h3>
      <p>Antes do fim de semana, Rafael revisa o arquivo de horários. Ao digitar novamente a linha do sábado, coloca <strong>20:00</strong> no lugar de <strong>18:00</strong> e não percebe.</p>
      <pre class="command">echo Sabado: 08:00-20:00 &gt; horario.txt\ngit status\ngit diff</pre>
      <p><span class="inline-code">status</span> mostra <strong>qual arquivo mudou</strong>. <span class="inline-code">diff</span> mostra <strong>o que mudou dentro do arquivo</strong>.</p>
      <p>Rafael interpreta a mudança como parte da revisão e a registra:</p>
      <pre class="command">git add horario.txt\ngit status\ngit commit -m "Atualiza horario de sabado"\ngit status</pre>
      <div class="note-box"><strong>Mensagem de commit descreve a intenção, não garante que a mudança esteja correta.</strong> Por isso o histórico também serve para investigar erros depois.</div>`;
  }

  const g6 = gitStep(6);
  if (g6) {
    g6.content = `
      <div class="hero-box">
        <h3>Sábado: os clientes encontram o café fechado</h3>
        <p>Marina recebe a mensagem de que clientes chegaram depois das 18h porque consultaram o horário 20h. Agora chegamos ao problema apresentado no início do módulo — mas desta vez as mudanças foram registradas.</p>
      </div>
      <h3>1. Localize os commits</h3>
      <pre class="command">git log --oneline</pre>
      <p>O resultado será parecido com:</p>
      <pre class="command">7f32abc Atualiza horario de sabado\n4d10ef2 Adiciona aviso de musica ao vivo\n8cb271a Registra horario aprovado</pre>
      <p>Os códigos serão diferentes no seu computador. O código à esquerda é o <strong>hash</strong> resumido: um identificador daquele commit.</p>
      <h3>2. Veja o que o commit suspeito fez</h3>
      <pre class="command">git show HASH</pre>
      <p>Substitua <span class="inline-code">HASH</span> pelo identificador de <strong>Atualiza horario de sabado</strong>. O Git mostrará os dados do commit e as linhas alteradas por ele.</p>
      <div class="note-box">Se <span class="inline-code">git log</span> ou <span class="inline-code">git show</span> abrir uma tela de navegação, pressione <span class="inline-code">q</span> para voltar ao CMD.</div>
      <h3>3. Compare o momento imediatamente anterior com o erro</h3>
      <p>Para isolar melhor a alteração problemática, compare o commit <strong>imediatamente anterior</strong> ao erro com o commit que introduziu 20h.</p>
      <pre class="command">git diff HASH_ANTES_DO_ERRO HASH_ERRO</pre>
      <p>No exemplo mostrado acima, seria algo como:</p>
      <pre class="command">git diff 4d10ef2 7f32abc</pre>
      <p><strong>Use os hashes reais exibidos no seu computador.</strong> Escolher commits consecutivos ajuda a enxergar apenas o que mudou naquela atualização, sem misturar alterações mais antigas.</p>
      <div class="flow">problema real\n      ↓\ngit log --oneline\n      ↓\ngit show HASH\n      ↓\ngit diff commit-anterior commit-do-erro\n      ↓\nidentifico a mudança\n      ↓\nsó então corrijo</div>
      <div class="concept-box"><strong>Controle de versões não é apenas guardar cópias. É produzir evidência para entender o que aconteceu.</strong></div>`;
  }

  const g7 = gitStep(7);
  if (g7) {
    g7.content = `
      <div class="hero-box">
        <h3>O erro do horário já virou commit</h3>
        <p>Rafael confirmou pelo histórico que o último commit introduziu 20:00. Como o erro já foi registrado, precisamos corrigi-lo sem apagar o que aconteceu.</p>
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
      <pre class="command">git restore avisos.txt\ngit status</pre>

      <h3>4. Retomando uma versão específica</h3>
      <div class="hero-box">
        <h3>Um teste de domingo foi aprovado para experimentar — e depois cancelado</h3>
        <p>Mais tarde, Marina autoriza um teste: abrir no domingo e divulgar um brunch. Rafael registra as duas mudanças. Depois de avaliar custos e equipe, Marina cancela o teste e pede que o projeto volte ao estado que estava <strong>antes dessa experiência</strong>.</p>
      </div>
      <p>Crie e registre o teste:</p>
      <pre class="command">echo Domingo: 09:00-14:00 &gt;&gt; horario.txt\necho Brunch de domingo &gt;&gt; avisos.txt\ngit add horario.txt avisos.txt\ngit commit -m "Testa programacao de domingo"\ngit log --oneline</pre>
      <p>No histórico, o commit logo abaixo de <strong>Testa programacao de domingo</strong> representa o estado aprovado antes do teste. Copie o hash dele e use como <span class="inline-code">HASH_APROVADO</span>.</p>
      <div class="danger-box"><strong>Antes de recuperar uma versão, confirme que a área de trabalho está limpa.</strong> Execute <span class="inline-code">git status</span> e não prossiga se houver alterações locais que você ainda precisa guardar.</div>
      <pre class="command">git status\ngit show HASH_APROVADO\ngit restore --source=HASH_APROVADO -- .\ngit status\ngit diff</pre>
      <p>Agora os arquivos rastreados voltaram ao conteúdo daquela versão, mas isso ainda é apenas uma alteração local. Confira o resultado e registre a decisão atual:</p>
      <pre class="command">git add -A\ngit commit -m "Cancela teste de domingo e retoma versao aprovada"\ngit log --oneline</pre>
      <div class="concept-box"><strong>O projeto volta ao conteúdo de uma versão anterior, mas a história não volta no tempo: a recuperação vira um novo commit.</strong></div>

      <h3>5. E se eu precisar recuperar somente um arquivo?</h3>
      <p>A mesma ideia pode ser aplicada a um único arquivo:</p>
      <pre class="command">git restore --source=HASH -- horario.txt\ngit status</pre>
      <p>Se o conteúdo recuperado for diferente do atual e estiver correto, faça <span class="inline-code">git add</span> e <span class="inline-code">git commit</span>. Se o arquivo já estiver igual à versão escolhida, o <span class="inline-code">git status</span> continuará limpo — e não haverá nada para registrar.</p>
      <div class="danger-box"><strong>Neste módulo não usamos git reset --hard para “voltar versões”.</strong> Primeiro aprendemos caminhos que permitem investigar e recuperar sem reescrever o histórico.</div>`;
  }

  const gh4 = githubStep(4);
  if (gh4) {
    gh4.content = `
      <div class="hero-box">
        <h3>Agora a mudança nasceu no GitHub</h3>
        <p>Marina avisa que a música ao vivo começará às <strong>19h30</strong>, e Rafael está longe do computador principal. Como é uma correção pequena, ele decide fazer a mudança diretamente no GitHub.</p>
      </div>
      <h3>1. Faça a alteração no navegador</h3>
      <p>No GitHub, abra <span class="inline-code">avisos.txt</span> e altere:</p>
      <pre class="command">Musica ao vivo: sexta 19h</pre>
      <p>para:</p>
      <pre class="command">Musica ao vivo: sexta 19h30</pre>
      <p>Salve criando um commit com uma mensagem como:</p>
      <pre class="command">Corrige horario da musica ao vivo</pre>
      <h3>2. Antes do pull, veja o arquivo local</h3>
      <pre class="command">type avisos.txt</pre>
      <p>No computador, a linha ainda mostrará <strong>19h</strong>, porque o commit criado no GitHub ainda não chegou à cópia local.</p>
      <h3>3. Traga a novidade</h3>
      <pre class="command">git pull\ntype avisos.txt\ngit log --oneline</pre>
      <p>Agora o arquivo local deve mostrar <strong>19h30</strong>, e o novo commit aparecerá no histórico.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>push</strong><br>envia commits locais.</div>
        <div class="mini-card"><strong>pull</strong><br>recebe commits do remoto.</div>
      </div>
      <div class="note-box"><strong>Edição no navegador:</strong> é útil para ajustes pequenos. Para mudanças maiores, trabalhe nos arquivos locais, confira e depois use commit + push.</div>`;
  }

  const gh5 = githubStep(5);
  if (gh5) {
    gh5.content = `
      <div class="hero-box">
        <h3>Rafael precisa trabalhar em outro computador</h3>
        <p>Agora faz sentido aprender <span class="inline-code">git clone</span>: o projeto completo já está no GitHub e precisa ser trazido para outra máquina, com arquivos, histórico e ligação remota.</p>
      </div>
      <h3>1. Copie a URL HTTPS em Code</h3>
      <pre class="command">https://github.com/USUARIO/site-cafe-aurora.git</pre>
      <h3>2. Se você tiver outro computador</h3>
      <p>Abra o CMD nele, escolha uma pasta para os repositórios e siga para o clone.</p>
      <h3>Se estiver praticando no mesmo computador</h3>
      <p>Simule a outra máquina criando uma pasta separada. Isso evita conflito com a cópia que já existe:</p>
      <pre class="command">cd /d "%USERPROFILE%"\nmkdir outro-computador\ncd outro-computador</pre>
      <h3>3. Clone</h3>
      <pre class="command">git clone https://github.com/USUARIO/site-cafe-aurora.git\ncd site-cafe-aurora</pre>
      <h3>4. Confira o que veio</h3>
      <pre class="command">dir\ngit status\ngit log --oneline\ngit remote -v</pre>
      <p>Você deve encontrar os arquivos, os commits anteriores e o remoto <span class="inline-code">origin</span> já configurado.</p>
      <div class="concept-box"><strong>Depois de git clone, não execute git init. O repositório, o histórico e o origin já vieram configurados.</strong></div>`;
  }

  const gh6 = githubStep(6);
  if (gh6) {
    gh6.content = `
      <div class="hero-box">
        <h3>O projeto já não depende de improviso</h3>
        <p>A partir daqui, o ciclo é o mesmo em qualquer computador que tenha uma cópia atualizada do repositório. Se você acabou de simular o clone, continue trabalhando dentro da cópia em <span class="inline-code">outro-computador\\site-cafe-aurora</span>.</p>
      </div>
      <p>Marina envia uma nova solicitação: acrescentar que <strong>pedidos para retirada podem ser feitos até 20h</strong>.</p>
      <h3>1. Antes de trabalhar, receba o que houver de novo</h3>
      <pre class="command">git pull</pre>
      <h3>2. Faça e confira a alteração</h3>
      <pre class="command">echo Pedidos para retirada: ate 20h &gt;&gt; avisos.txt\ngit status\ngit diff</pre>
      <h3>3. Registre e envie</h3>
      <pre class="command">git add avisos.txt\ngit status\ngit commit -m "Adiciona horario para retirada de pedidos"\ngit push\ngit status</pre>
      <div class="flow">PULL → TRABALHAR → STATUS/DIFF → ADD → COMMIT → PUSH → STATUS</div>
      <h3>Quando precisar se localizar</h3>
      <pre class="command">git log --oneline\ngit remote -v\ngit branch --show-current</pre>
      <div class="concept-box"><strong>Primeiro descubra o estado. Depois escolha o comando.</strong></div>`;
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();
