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

  const g4 = gitStep(4);
  if (g4) {
    g4.content = `
      <div class="hero-box">
        <h3>A pasta existe. O histórico ainda não.</h3>
        <p>Estamos de volta à segunda-feira. Marina confirmou que o horário correto de sábado é <strong>08:00–18:00</strong>. Rafael vai criar o primeiro estado confiável do projeto antes de continuar trabalhando.</p>
      </div>
      <h3>1. Inicie o repositório</h3>
      <pre class="command">git init</pre>
      <p><span class="inline-code">git init</span> transforma a pasta atual em um repositório Git. O Git cria internamente uma pasta chamada <span class="inline-code">.git</span>; não precisamos editá-la manualmente.</p>
      <h3>2. Crie o primeiro arquivo</h3>
      <pre class="command">echo Sabado: 08:00-18:00 &gt; horario.txt\ntype horario.txt</pre>
      <p>O sinal <span class="inline-code">&gt;</span> cria ou substitui o conteúdo do arquivo. <span class="inline-code">type</span> permite conferir o que foi gravado.</p>
      <h3>3. Pergunte ao Git como está o projeto</h3>
      <pre class="command">git status</pre>
      <p><span class="inline-code">horario.txt</span> deverá aparecer como <strong>untracked</strong>: ele existe, mas ainda não foi incluído em nenhum commit.</p>
      <div class="concept-box"><strong>git status responde: “como está meu repositório agora?”</strong></div>
      <h3>4. Surge um arquivo que não deve fazer parte do projeto</h3>
      <p>Enquanto testa o conteúdo, Rafael cria um rascunho temporário. Esse arquivo ajuda durante o trabalho, mas não deve virar uma versão do projeto:</p>
      <pre class="command">echo teste de horario &gt; rascunho.tmp\ngit status</pre>
      <p>Agora o Git também enxerga <span class="inline-code">rascunho.tmp</span>. Para dizer que arquivos temporários <span class="inline-code">.tmp</span> não devem ser versionados, crie:</p>
      <pre class="command">echo *.tmp &gt; .gitignore\ngit status</pre>
      <p>O rascunho continuará no computador, mas deixará de aparecer como arquivo a ser versionado. O próprio <span class="inline-code">.gitignore</span> deve ser registrado, pois ele faz parte das regras do projeto.</p>
      <div class="danger-box"><strong>Arquivos sensíveis também não devem ser publicados.</strong> Projetos reais podem ignorar arquivos como <span class="inline-code">.env</span>, mas nunca coloque uma senha real em um exercício para “testar” o Git.</div>`;
  }

  const g5 = gitStep(5);
  if (g5) {
    g5.content = `
      <div class="hero-box">
        <h3>Segunda-feira: primeira versão aprovada</h3>
        <p>O horário foi conferido por Marina. Rafael quer registrar esse estado antes de qualquer nova alteração.</p>
      </div>
      <h3>1. Veja o que está pendente</h3>
      <pre class="command">git status</pre>
      <h3>2. Prepare os arquivos que pertencem ao projeto</h3>
      <pre class="command">git add horario.txt\ngit add .gitignore\ngit status</pre>
      <p>Depois do <span class="inline-code">git add</span>, os arquivos devem aparecer em <strong>Changes to be committed</strong>. Eles estão preparados, mas o registro ainda não foi criado. O <span class="inline-code">rascunho.tmp</span> não entra porque foi ignorado.</p>
      <h3>3. Crie o primeiro commit</h3>
      <pre class="command">git commit -m "Registra horario aprovado"\ngit status</pre>
      <p>Se não houver novas mudanças, o Git indicará uma área de trabalho limpa. Agora existe um ponto confiável no histórico.</p>
      <div class="concept-box"><strong>git add prepara. git commit registra.</strong></div>

      <h3>Terça-feira: música ao vivo</h3>
      <p>No dia seguinte, Marina confirma música ao vivo na sexta às 19h. Rafael cria outro arquivo:</p>
      <pre class="command">echo Musica ao vivo: sexta 19h &gt; avisos.txt\ntype avisos.txt\ngit status</pre>
      <p>Como <span class="inline-code">avisos.txt</span> é novo, confira o conteúdo e depois registre:</p>
      <pre class="command">git add avisos.txt\ngit status\ngit commit -m "Adiciona aviso de musica ao vivo"\ngit status</pre>

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
      <p>Antes de reverter, confirme que não existe outra alteração local pendente:</p>
      <pre class="command">git status\ngit log --oneline\ngit revert --no-edit HEAD</pre>
      <p><span class="inline-code">HEAD</span> é uma forma de o Git se referir ao commit atual. <span class="inline-code">git revert</span> cria <strong>um novo commit</strong> que desfaz as alterações do commit escolhido.</p>
      <pre class="command">type horario.txt\ngit log --oneline</pre>
      <div class="concept-box"><strong>O commit com o erro continua no histórico; a correção também fica registrada.</strong></div>
      <p>Se o commit errado não for o último, localize-o e use:</p>
      <pre class="command">git revert --no-edit HASH</pre>
      <div class="note-box"><strong>Atenção:</strong> reverter um commit antigo pode gerar conflito se mudanças posteriores dependerem dele. Neste módulo, pratique primeiro com commits simples.</div>

      <h3>2. Se o erro ainda não virou commit</h3>
      <p>Depois, Marina pede uma informação sobre delivery. Rafael digita o horário errado, mas percebe antes de usar <span class="inline-code">git add</span>:</p>
      <pre class="command">echo Delivery: ate 23h &gt;&gt; avisos.txt\ngit diff\ngit restore avisos.txt\ngit status</pre>
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
      <pre class="command">echo Domingo: 09:00-14:00 &gt;&gt; horario.txt\necho Brunch de domingo &gt;&gt; avisos.txt\ngit add horario.txt avisos.txt\ngit commit -m "Testa programacao de domingo"\ngit status\ngit log --oneline</pre>
      <p>No histórico, o commit logo abaixo de <strong>Testa programacao de domingo</strong> representa o estado aprovado antes do teste. Copie o hash dele e use como <span class="inline-code">HASH_APROVADO</span>.</p>
      <div class="danger-box"><strong>Antes de recuperar uma versão, confirme que a área de trabalho está limpa.</strong> Não prossiga se houver alterações locais que você ainda precisa guardar.</div>
      <pre class="command">git show HASH_APROVADO\ngit restore --source=HASH_APROVADO -- .\ngit status\ngit diff</pre>
      <p>Agora os arquivos rastreados voltaram ao conteúdo daquela versão, mas isso ainda é apenas uma alteração local. Confira o resultado e registre a decisão atual:</p>
      <pre class="command">git add -A\ngit commit -m "Cancela teste de domingo e retoma versao aprovada"\ngit status\ngit log --oneline</pre>
      <div class="concept-box"><strong>O projeto volta ao conteúdo de uma versão anterior, mas a história não volta no tempo: a recuperação vira um novo commit.</strong></div>

      <h3>5. E se eu precisar recuperar somente um arquivo?</h3>
      <p>A mesma ideia pode ser aplicada a um único arquivo:</p>
      <pre class="command">git restore --source=HASH -- horario.txt\ngit status</pre>
      <p>Se o conteúdo recuperado for diferente do atual e estiver correto, faça <span class="inline-code">git add</span> e <span class="inline-code">git commit</span>. Se o arquivo já estiver igual à versão escolhida, o <span class="inline-code">git status</span> continuará limpo — e não haverá nada para registrar.</p>
      <div class="danger-box"><strong>Neste módulo não usamos git reset --hard para “voltar versões”.</strong> Primeiro aprendemos caminhos que permitem investigar e recuperar sem reescrever o histórico.</div>`;
  }

  const gh1 = githubStep(1);
  if (gh1) {
    gh1.content = `
      <div class="hero-box">
        <span class="part-badge">Parte 2 — GitHub</span>
        <h3>O histórico ficou importante demais para existir em um único computador</h3>
        <p>Depois do problema com o horário, Marina percebeu que o histórico ajudou a explicar e corrigir o erro. O projeto também já recebeu o horário de delivery. Agora ela quer uma cópia remota do repositório e a possibilidade de continuar o trabalho em outro computador.</p>
      </div>
      <p>É aqui que o <strong>GitHub</strong> passa a ser necessário. O Git continuará controlando versões; o GitHub hospedará um <strong>repositório remoto</strong>.</p>
      <div class="mini-grid">
        <div class="mini-card"><strong>Local</strong><br><span class="inline-code">site-cafe-aurora</span> no computador.</div>
        <div class="mini-card"><strong>Remoto</strong><br>o repositório hospedado no GitHub.</div>
      </div>
      <div class="concept-box"><strong>Local e remoto não se atualizam sozinhos. Nós decidimos quando enviar e quando receber commits.</strong></div>
      <h3>1. Crie sua conta</h3>
      <p>Acesse <strong>github.com</strong>, crie a conta e confirme o e-mail.</p>
      <h3>2. Localize apenas o necessário</h3>
      <ul>
        <li><strong>Repositories</strong> — seus repositórios;</li>
        <li><strong>New repository</strong> — criar um repositório;</li>
        <li><strong>Code</strong> — copiar o endereço HTTPS.</li>
      </ul>
      <h3>3. Crie um repositório remoto vazio</h3>
      <p>Crie um repositório chamado <span class="inline-code">site-cafe-aurora</span>. Para esta prática, deixá-lo <strong>público</strong> simplifica o teste de clone. Em projetos reais, a escolha entre público e privado depende do que pode ou não ser exposto.</p>
      <p>Como o projeto <strong>já existe no PC e já possui commits</strong>, não adicione README, licença nem <span class="inline-code">.gitignore</span> neste momento.</p>
      <div class="concept-box"><strong>Estamos continuando o mesmo projeto. Não vamos abandonar o histórico local para começar outro exemplo.</strong></div>
      <div class="note-box"><strong>Conheça também:</strong> perfil, stars, seguidores e feed existem no GitHub, mas não são necessários para aprender este fluxo inicial.</div>`;
  }

  const gh4 = githubStep(4);
  if (gh4) {
    gh4.content = `
      <div class="hero-box">
        <h3>Agora a mudança nasceu no GitHub</h3>
        <p>Marina avisa que a música ao vivo começará às <strong>19h30</strong>, e Rafael está longe do computador principal. Como é uma correção pequena, ele decide fazer a mudança diretamente no GitHub.</p>
      </div>
      <h3>1. Faça a alteração no navegador</h3>
      <p>No GitHub, abra <span class="inline-code">avisos.txt</span>, use a opção de edição do arquivo e altere:</p>
      <pre class="command">Musica ao vivo: sexta 19h</pre>
      <p>para:</p>
      <pre class="command">Musica ao vivo: sexta 19h30</pre>
      <p>Confirme a alteração criando um commit com uma mensagem como:</p>
      <pre class="command">Corrige horario da musica ao vivo</pre>
      <h3>2. Antes do pull, veja o arquivo local</h3>
      <pre class="command">type avisos.txt</pre>
      <p>No computador, a linha ainda mostrará <strong>19h</strong>, porque o commit criado no GitHub ainda não chegou à cópia local.</p>
      <h3>3. Traga a novidade</h3>
      <pre class="command">git status\ngit pull\ntype avisos.txt\ngit log --oneline</pre>
      <p>Antes do <span class="inline-code">pull</span>, o ideal é que <span class="inline-code">git status</span> não mostre alterações locais pendentes. Depois do pull, o arquivo local deve mostrar <strong>19h30</strong> e o novo commit aparecerá no histórico.</p>
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
      <h3>2. Se você estiver realmente em outro computador</h3>
      <p>Confirme primeiro se o Git está instalado e se sua identidade está configurada:</p>
      <pre class="command">git --version\ngit config --global user.name\ngit config --global user.email</pre>
      <p>Se nome ou e-mail estiverem vazios, repita a configuração ensinada no início do módulo antes de criar novos commits.</p>
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
        <p>A partir daqui, o ciclo é o mesmo em qualquer computador que tenha uma cópia atualizada do repositório. Se você acabou de simular o clone, continue trabalhando dentro de <span class="inline-code">outro-computador\\site-cafe-aurora</span>.</p>
      </div>
      <p>Marina envia uma nova solicitação: acrescentar que <strong>pedidos para retirada podem ser feitos até 20h</strong>.</p>
      <h3>1. Confira o estado e receba novidades</h3>
      <pre class="command">git status\ngit pull</pre>
      <p>Se <span class="inline-code">git status</span> mostrar alterações locais que você ainda precisa guardar, não faça o pull por impulso. Primeiro termine, registre ou resolva esse trabalho.</p>
      <h3>2. Faça e confira a alteração</h3>
      <pre class="command">echo Pedidos para retirada: ate 20h &gt;&gt; avisos.txt\ngit status\ngit diff</pre>
      <h3>3. Registre e envie</h3>
      <pre class="command">git add avisos.txt\ngit status\ngit commit -m "Adiciona horario para retirada de pedidos"\ngit push\ngit status</pre>
      <div class="flow">STATUS → PULL → TRABALHAR → STATUS/DIFF → ADD → COMMIT → PUSH → STATUS</div>
      <h3>Quando precisar se localizar</h3>
      <pre class="command">git log --oneline\ngit remote -v\ngit branch --show-current</pre>
      <div class="concept-box"><strong>Primeiro descubra o estado. Depois escolha o comando.</strong></div>`;
  }

  const gh7 = githubStep(7);
  if (gh7) {
    gh7.content = `
      <div class="hero-box">
        <h3>Quando algo der errado, o diagnóstico vem antes do conserto</h3>
        <p>Em vez de copiar um comando aleatório, Rafael verifica quatro coisas: <strong>onde está, como está o repositório, qual remoto existe e qual branch está ativa</strong>.</p>
      </div>
      <h3>Diagnóstico inicial</h3>
      <pre class="command">git status\ngit remote -v\ngit branch --show-current\ngit log --oneline</pre>

      <h3>“not a git repository”</h3>
      <p>É comum estar na pasta errada. Confira o caminho mostrado no CMD e volte para a cópia em que você pretende trabalhar. No nosso percurso podem existir duas:</p>
      <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\site-cafe-aurora"</pre>
      <p>ou, se você simulou o segundo computador:</p>
      <pre class="command">cd /d "%USERPROFILE%\\outro-computador\\site-cafe-aurora"</pre>
      <p>Depois teste novamente:</p>
      <pre class="command">git status</pre>

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
      <pre class="command">git status\ngit pull</pre>
      <p>Se o pull terminar normalmente e o projeto ficar atualizado:</p>
      <pre class="command">git push</pre>
      <p>Se o pull informar conflito, não tente o push ainda. Resolva o conflito primeiro.</p>

      <h3>O Git informou conflito</h3>
      <p>Isso significa que duas mudanças atingiram a mesma parte de um arquivo e o Git não decidiu sozinho qual deve permanecer. Dentro do arquivo podem aparecer marcações semelhantes a:</p>
      <pre class="command">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nversao do computador\n=======\nversao recebida\n&gt;&gt;&gt;&gt;&gt;&gt;&gt;</pre>
      <p>Leia as duas partes, mantenha ou combine o conteúdo correto, remova as marcações, salve e finalize:</p>
      <pre class="command">git status\ngit add NOME-DO-ARQUIVO\ngit commit -m "Resolve conflito"\ngit push</pre>
      <div class="note-box"><strong>Conflito não significa que o projeto foi perdido.</strong> Significa que uma decisão humana é necessária para definir qual conteúdo deve permanecer.</div>

      <h3>Enviei ao GitHub um commit errado</h3>
      <p>Primeiro confirme que não há outra alteração local pendente e identifique o commit:</p>
      <pre class="command">git status\ngit log --oneline</pre>
      <p>Depois preserve a história e registre a correção:</p>
      <pre class="command">git revert --no-edit HASH\ngit push</pre>
      <p>Se foi justamente o último commit:</p>
      <pre class="command">git revert --no-edit HEAD\ngit push</pre>

      <div class="danger-box"><strong>Neste nível, não use reset --hard, rebase ou force push como tentativa de socorro.</strong> Primeiro investigue o estado e prefira uma recuperação que deixe o histórico explicável.</div>
      <div class="ok-box"><strong>Git + GitHub concluídos.</strong> Você acompanhou um único projeto do problema inicial ao histórico local, recuperação, publicação, segunda cópia, sincronização e diagnóstico.</div>`;
  }

  const exerciciosNovo = [
    {
      id: 'inicio',
      menu: 'Como praticar',
      title: '99 — Exercícios de Git e GitHub',
      objective: 'Transferir o que foi aprendido para outro projeto, em ordem crescente e sem depender do exemplo do Café Aurora.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Prática MbB</span>
          <h3>Agora o projeto é outro</h3>
          <p>Você vai cuidar dos arquivos da <strong>Feira Criativa do Bairro</strong>, um pequeno evento local. A organização precisa manter horário, local e avisos sem perder o histórico das mudanças.</p>
        </div>
        <p>O contexto mudou de propósito. Se você consegue aplicar o mesmo raciocínio em outro projeto, não está apenas repetindo comandos: está transferindo o aprendizado.</p>
        <div class="concept-box"><strong>Regra MbB:</strong> tente sozinho → use a dica se necessário → só depois abra uma possível resposta.</div>
        <div class="flow">criar → registrar → investigar → recuperar → publicar → sincronizar → diagnosticar</div>`
    },
    {
      id: 'e1',
      menu: '1 Pasta',
      title: 'Exercício 1 — Preparando o projeto da feira',
      objective: 'Criar e localizar a pasta de trabalho sem depender de um caminho fixo de usuário.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">1</span>Desafio</h4><p>Na pasta <span class="inline-code">meus-repositorios</span>, crie <span class="inline-code">feira-criativa</span>, entre nela e confirme o local.</p></div>
        <details class="answer-box"><summary>Conferir uma possível resposta</summary><div class="answer-content"><pre class="command">cd /d "%USERPROFILE%"\ncd meus-repositorios\nmkdir feira-criativa\ncd feira-criativa\ndir</pre></div></details>`
    },
    {
      id: 'e2',
      menu: '2 Iniciar',
      title: 'Exercício 2 — Começando o histórico',
      objective: 'Transformar a pasta em repositório e conferir seu estado.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">2</span>Desafio</h4><p>Faça o Git começar a controlar <span class="inline-code">feira-criativa</span> e pergunte como o repositório está.</p></div>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">git init\ngit status</pre></div></details>`
    },
    {
      id: 'e3',
      menu: '3 Primeiro commit',
      title: 'Exercício 3 — Registrando o primeiro estado aprovado',
      objective: 'Percorrer arquivo → status → add → status → commit → status.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">3</span>Desafio</h4><p>Crie <span class="inline-code">evento.txt</span> com <strong>Feira Criativa - sabado 10h</strong>. Confira, prepare e registre esse primeiro estado.</p></div>
        <details class="answer-box"><summary>Conferir uma possível resposta</summary><div class="answer-content"><pre class="command">echo Feira Criativa - sabado 10h &gt; evento.txt\ntype evento.txt\ngit status\ngit add evento.txt\ngit status\ngit commit -m "Registra informacoes iniciais da feira"\ngit status</pre></div></details>`
    },
    {
      id: 'e4',
      menu: '4 Mudança',
      title: 'Exercício 4 — Descobrindo exatamente o que mudou',
      objective: 'Diferenciar o estado do repositório do conteúdo alterado.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">4</span>Desafio</h4><p>A organização confirmou o local. Acrescente <strong>Local: Praca Central</strong> a <span class="inline-code">evento.txt</span>. Descubra primeiro qual arquivo mudou e depois quais linhas mudaram.</p></div>
        <h3>Dica</h3><p>Use um comando para o estado e outro para a diferença.</p>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">echo Local: Praca Central &gt;&gt; evento.txt\ngit status\ngit diff</pre></div></details>`
    },
    {
      id: 'e5',
      menu: '5 Histórico',
      title: 'Exercício 5 — Registrando e investigando a segunda versão',
      objective: 'Criar outro commit, localizar seu hash e investigar o que ele alterou.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">5</span>Desafio</h4><p>Registre a mudança do local, consulte o histórico resumido e use o hash do commit mais recente para ver exatamente o que ele introduziu.</p></div>
        <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">git add evento.txt\ngit commit -m "Adiciona local da feira"\ngit log --oneline\ngit show HASH</pre><p>Substitua <span class="inline-code">HASH</span> pelo identificador real mostrado para <strong>Adiciona local da feira</strong>. Pressione <span class="inline-code">q</span> se a visualização ocupar a tela.</p></div></details>`
    },
    {
      id: 'e6',
      menu: '6 Ignorar',
      title: 'Exercício 6 — Um rascunho que não deve virar versão',
      objective: 'Usar .gitignore porque surgiu um arquivo temporário real no fluxo de trabalho.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">6</span>Desafio</h4><p>Crie <span class="inline-code">ideias.tmp</span>, veja que ele aparece no status e depois faça o Git ignorar todos os arquivos <span class="inline-code">.tmp</span>. Registre a regra do projeto.</p></div>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">echo ideias para divulgar a feira &gt; ideias.tmp\ngit status\necho *.tmp &gt; .gitignore\ngit status\ngit add .gitignore\ngit commit -m "Ignora arquivos temporarios"\ngit status</pre><p><span class="inline-code">ideias.tmp</span> continua no computador, mas não deve aparecer para ser adicionado.</p></div></details>`
    },
    {
      id: 'e7',
      menu: '7 Antes do commit',
      title: 'Exercício 7 — Corrigindo antes do commit',
      objective: 'Distinguir um erro ainda local de um arquivo já preparado.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">7</span>Parte A</h4><p>Acrescente por engano <strong>Entrada: R$ 50</strong> a <span class="inline-code">evento.txt</span>, confira a diferença e descarte a mudança antes do add.</p></div>
        <details class="answer-box"><summary>Resposta da Parte A</summary><div class="answer-content"><pre class="command">echo Entrada: R$ 50 &gt;&gt; evento.txt\ngit diff\ngit restore evento.txt\ngit status</pre></div></details>
        <div class="task-box"><h4>Parte B</h4><p>Acrescente <strong>Contato: organizacao da feira</strong>, use <span class="inline-code">git add</span> e depois retire o arquivo da preparação sem perder a linha. Confira o estado e, por fim, descarte a mudança para deixar o exercício limpo.</p></div>
        <details class="answer-box"><summary>Resposta da Parte B</summary><div class="answer-content"><pre class="command">echo Contato: organizacao da feira &gt;&gt; evento.txt\ngit add evento.txt\ngit status\ngit restore --staged evento.txt\ngit status\ngit restore evento.txt\ngit status</pre></div></details>`
    },
    {
      id: 'e8',
      menu: '8 Depois do commit',
      title: 'Exercício 8 — Revertendo e retomando uma versão',
      objective: 'Praticar recuperação depois do commit sem apagar o histórico.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">8</span>Parte A — Commit errado</h4><p>Acrescente <strong>Evento cancelado</strong>, registre a mudança e só depois descubra que a informação era falsa. Desfaça o último commit preservando os dois registros no histórico.</p></div>
        <details class="answer-box"><summary>Resposta da Parte A</summary><div class="answer-content"><pre class="command">echo Evento cancelado &gt;&gt; evento.txt\ngit add evento.txt\ngit commit -m "Informa cancelamento"\ngit status\ngit revert --no-edit HEAD\ngit log --oneline\ntype evento.txt</pre></div></details>
        <div class="task-box"><h4>Parte B — Versão específica</h4><p>Crie e registre um teste acrescentando <strong>Domingo: 9h</strong>. Depois localize o commit imediatamente anterior ao teste e use essa versão como fonte para retomar os arquivos rastreados. Registre a recuperação como um novo commit.</p></div>
        <details class="answer-box"><summary>Uma possível sequência</summary><div class="answer-content"><pre class="command">echo Domingo: 9h &gt;&gt; evento.txt\ngit add evento.txt\ngit commit -m "Testa edicao de domingo"\ngit log --oneline\ngit show HASH_APROVADO\ngit restore --source=HASH_APROVADO -- .\ngit status\ngit diff\ngit add -A\ngit commit -m "Retoma versao anterior ao teste"\ngit log --oneline</pre><p><span class="inline-code">HASH_APROVADO</span> é o commit logo abaixo de <strong>Testa edicao de domingo</strong> no seu histórico.</p></div></details>`
    },
    {
      id: 'e9',
      menu: '9 Publicar',
      title: 'Exercício 9 — Levando o projeto local ao GitHub',
      objective: 'Publicar o mesmo repositório que foi construído nos exercícios anteriores.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">9</span>Desafio</h4><p>No GitHub, crie um repositório <strong>vazio</strong> chamado <span class="inline-code">feira-criativa</span>. Conecte o projeto local a ele e faça o primeiro push.</p></div>
        <h3>Checklist</h3><ul class="check-list"><li>Não crie README, licença ou .gitignore no remoto.</li><li>Copie a URL HTTPS correta.</li><li>Confira o origin.</li><li>Descubra a branch atual.</li><li>Use essa branch no primeiro push com <span class="inline-code">-u</span>.</li></ul>
        <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">git status\ngit remote add origin URL-DO-REPOSITORIO\ngit remote -v\ngit branch --show-current\ngit push -u origin NOME-DA-BRANCH</pre><p>Substitua <span class="inline-code">NOME-DA-BRANCH</span> pelo nome realmente mostrado, como <span class="inline-code">main</span> ou <span class="inline-code">master</span>.</p></div></details>`
    },
    {
      id: 'e10',
      menu: '10 Push',
      title: 'Exercício 10 — Uma nova mudança local chega ao GitHub',
      objective: 'Repetir o ciclo local e perceber que o remoto só muda depois do push.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">10</span>Desafio</h4><p>Acrescente <strong>Entrada gratuita</strong> a <span class="inline-code">evento.txt</span>, confira, registre e envie. Depois confirme no navegador.</p></div>
        <details class="answer-box"><summary>Conferir resposta</summary><div class="answer-content"><pre class="command">echo Entrada gratuita &gt;&gt; evento.txt\ngit status\ngit diff\ngit add evento.txt\ngit status\ngit commit -m "Informa entrada gratuita"\ngit push\ngit status</pre></div></details>`
    },
    {
      id: 'e11',
      menu: '11 Pull',
      title: 'Exercício 11 — Uma correção nasce no GitHub',
      objective: 'Produzir uma diferença visível entre remoto e local e recebê-la com pull.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">11</span>Desafio</h4><p>No GitHub, edite <span class="inline-code">evento.txt</span> e troque <strong>sabado 10h</strong> por <strong>sabado 11h</strong>. Crie o commit no navegador. Antes do pull, confira que o arquivo local ainda mostra 10h; depois receba a mudança e confirme 11h.</p></div>
        <details class="answer-box"><summary>Conferir resposta no CMD</summary><div class="answer-content"><pre class="command">type evento.txt\ngit status\ngit pull\ntype evento.txt\ngit log --oneline</pre></div></details>`
    },
    {
      id: 'e12',
      menu: '12 Clone',
      title: 'Exercício 12 — Simulando um segundo computador',
      objective: 'Clonar somente depois que o projeto já existe no GitHub e conferir o que veio.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">12</span>Desafio</h4><p>Crie uma pasta <span class="inline-code">outro-computador-exercicio</span>, entre nela e clone <span class="inline-code">feira-criativa</span>. Depois confira arquivos, histórico e origin.</p></div>
        <details class="answer-box"><summary>Conferir roteiro</summary><div class="answer-content"><pre class="command">cd /d "%USERPROFILE%"\nmkdir outro-computador-exercicio\ncd outro-computador-exercicio\ngit clone URL-DO-REPOSITORIO\ncd feira-criativa\ndir\ngit status\ngit log --oneline\ngit remote -v</pre></div></details>`
    },
    {
      id: 'e13',
      menu: '13 Duas cópias',
      title: 'Exercício 13 — Duas cópias, um único remoto',
      objective: 'Comprovar que uma mudança enviada de uma cópia precisa ser recebida na outra.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">13</span>Desafio</h4><p>Na cópia clonada, acrescente <strong>Contato: feira@exemplo.com</strong>, faça commit e push. Depois volte à cópia original em <span class="inline-code">meus-repositorios\\feira-criativa</span>, confirme que ela ainda está antiga e use pull.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">REM na copia clonada\ngit status\ngit pull\necho Contato: feira@exemplo.com &gt;&gt; evento.txt\ngit diff\ngit add evento.txt\ngit commit -m "Adiciona contato da feira"\ngit push\n\nREM na copia original\ncd /d "%USERPROFILE%\\meus-repositorios\\feira-criativa"\ntype evento.txt\ngit status\ngit pull\ntype evento.txt</pre></div></details>`
    },
    {
      id: 'e14',
      menu: '14 Diagnóstico',
      title: 'Exercício 14 — Escolhendo o próximo passo',
      objective: 'Diagnosticar antes de executar comandos de correção.',
      content: `
        <div class="task-box"><h4><span class="exercise-number">14</span>Responda</h4><ol>
          <li>Você não sabe como está o repositório. Qual comando vem primeiro?</li>
          <li>Quer saber exatamente quais linhas locais mudaram.</li>
          <li>Usou <span class="inline-code">git add</span> por engano, mas quer manter a alteração no arquivo.</li>
          <li>Um commit local correto ainda não apareceu no GitHub.</li>
          <li>O remoto possui um commit que sua cópia ainda não recebeu.</li>
          <li>Você enviou um commit errado e quer corrigi-lo preservando o histórico.</li>
          <li>Quer recuperar um arquivo como estava em uma versão específica.</li>
        </ol></div>
        <details class="answer-box"><summary>Conferir respostas</summary><div class="answer-content"><div class="flow">1 → git status\n2 → git diff\n3 → git restore --staged ARQUIVO\n4 → git push\n5 → git pull\n6 → git revert --no-edit HASH\n7 → git restore --source=HASH -- ARQUIVO</div></div></details>`
    },
    {
      id: 'e15',
      menu: '15 Desafio final',
      title: 'Exercício 15 — Projeto completo de sobrevivência',
      objective: 'Demonstrar autonomia usando Git e GitHub sem copiar o roteiro do Café Aurora ou da Feira Criativa.',
      content: `
        <div class="hero-box"><span class="part-badge">Desafio final</span><h3>Agora o projeto é seu</h3><p>Crie um projeto pequeno com um contexto real que você entenda: pode ser agenda, catálogo, cardápio, evento, lista de tarefas ou outro tema simples.</p></div>
        <div class="task-box"><h4>Seu projeto deve:</h4><ol>
          <li>nascer no computador e ter Git inicializado;</li>
          <li>ter um <span class="inline-code">.gitignore</span> motivado por algum arquivo que não deve ser versionado;</li>
          <li>ter pelo menos dois arquivos rastreados e três commits com mensagens explicativas;</li>
          <li>usar <span class="inline-code">git log --oneline</span> e <span class="inline-code">git show</span> para investigar uma versão;</li>
          <li>criar de propósito um commit errado e corrigi-lo com <span class="inline-code">git revert</span>;</li>
          <li>ser publicado em um repositório vazio do GitHub;</li>
          <li>receber uma alteração remota com <span class="inline-code">git pull</span> e enviar outra com <span class="inline-code">git push</span>;</li>
          <li>ser clonado em outra pasta e terminar com <span class="inline-code">git status</span> limpo.</li>
        </ol></div>
        <h3>Conferência final</h3><pre class="command">git status\ngit log --oneline\ngit remote -v\ngit branch --show-current</pre>
        <div class="ok-box"><strong>Conseguiu e sabe explicar por que usou cada comando?</strong> Então você não apenas repetiu o tutorial: já consegue aplicar o ciclo básico de Git e GitHub em outro projeto.</div>`
    }
  ];

  exerciseSteps.splice(0, exerciseSteps.length, ...exerciciosNovo);

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();