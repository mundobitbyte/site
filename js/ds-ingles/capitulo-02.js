(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Leitura estratégica',
      technical:'propósito de leitura • skimming • scanning • palavras-chave • cognatos • inferência • marcadores de tempo • modais em uso • leitura técnica',
      title:'02 — Ler sem traduzir tudo',
      objective:'<strong>Objetivo:</strong> usar propósito, skimming, scanning, palavras-chave, cognatos e inferência para compreender textos em inglês com eficiência, localizar informações específicas e decidir quando realmente vale recorrer ao dicionário.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Você tem quatro minutos para decidir</span>
          <div class="hero-box">
            <strong class="card-title">Chega ao grupo da turma um convite internacional.</strong>
            <p>Durante a aula de Desenvolvimento de Sistemas, o professor compartilha uma página em inglês sobre o <strong>Code for Community Challenge</strong>. A turma pode inscrever um projeto, mas existe um problema: vocês precisam descobrir rapidamente <strong>quem pode participar, o tamanho da equipe e o prazo</strong> antes de decidir se vale abrir o formulário.</p>
            <p>A página tem vários parágrafos. Traduzir tudo palavra por palavra demoraria mais do que o tempo disponível — e talvez nem fosse necessário.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como encontrar o que realmente importa em um texto em inglês sem depender de tradução total?</p>
          </div>
        </section>

        <div class="source-box">
          <strong class="card-title">Code for Community Challenge</strong>
          <p><strong>Build a simple digital solution for a local problem.</strong></p>
          <p>High-school students aged 14–18 can join in teams of <strong>2 to 4 students</strong>. Registration is free.</p>
          <p><strong>Registration closes:</strong> September 18, 6 p.m. BRT.</p>
          <p><strong>Project submission:</strong> October 3.</p>
          <p>Free online workshops are available every Tuesday. Teams must submit a short project description and a working prototype.</p>
        </div>

        ${choice('1','Leia com uma missão','Se você precisa decidir apenas se uma equipe de cinco alunos pode participar, qual atitude é mais eficiente?',[['a','Traduzir o texto inteiro antes de procurar qualquer informação'],['b','Procurar diretamente a parte que fala sobre teams e números'],['c','Pesquisar todas as palavras desconhecidas no dicionário']],'b','Isso. A finalidade da leitura define o caminho. Para responder a essa pergunta, você precisa localizar uma informação específica.','Pergunte primeiro: que informação eu realmente preciso encontrar?')}

        <h3>1. Toda leitura começa com um objetivo</h3>
        <p>Em português, você também não lê uma receita, uma notícia e um boleto do mesmo jeito. Em inglês acontece a mesma coisa.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Quero saber do que se trata</strong><p>Faça uma leitura global. Observe título, subtítulos, primeiras linhas, imagens e palavras recorrentes.</p><p><strong>Estratégia:</strong> <em>skimming</em>.</p></div>
          <div class="mini-card"><strong>Quero achar um dado específico</strong><p>Procure nomes, datas, números, horários, palavras-chave e trechos relacionados à pergunta.</p><p><strong>Estratégia:</strong> <em>scanning</em>.</p></div>
        </div>

        <div class="builder-box" data-reading-goal>
          <strong class="card-title">Reading compass — mude o objetivo e veja a estratégia</strong>
          <div class="builder-controls">
            <label>O que você precisa descobrir?
              <select data-reading-select>
                <option value="topic">Qual é o assunto geral?</option>
                <option value="deadline">Qual é o prazo?</option>
                <option value="team">Quantas pessoas podem formar a equipe?</option>
                <option value="requirements">O que precisa ser entregue?</option>
              </select>
            </label>
            <label>Estratégia indicada
              <select disabled data-reading-strategy>
                <option>—</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-reading-preview></div>
        </div>

        <h3>2. Skimming: primeiro construa o mapa do texto</h3>
        <p><em>Skimming</em> é uma leitura rápida para captar o sentido geral. Você não tenta compreender cada palavra. Procura responder perguntas como:</p>
        <div class="argument-chain">
          <span>Que gênero é esse?</span><b>→</b><span>Qual é o assunto?</span><b>→</b><span>Para quem foi escrito?</span><b>→</b><span>O que parece querer que eu faça?</span>
        </div>

        <p>No convite acima, apenas o título, a frase <strong>“Build a simple digital solution for a local problem”</strong> e as palavras <strong>students, teams, registration, project</strong> já permitem prever que se trata de um desafio de projetos voltado a estudantes.</p>

        ${choice('2','Skimming','Qual resumo representa melhor o texto antes de uma leitura detalhada?',[['a','É um desafio para estudantes criarem uma solução digital e submeterem um projeto dentro de determinados critérios e prazos'],['b','É um manual completo de programação'],['c','É uma propaganda de venda de computadores']],'a','Correto. O skimming ajuda a construir uma visão global antes de buscar detalhes.','Olhe título, palavras recorrentes e estrutura geral antes de mergulhar nos detalhes.')}

        <h3>3. Scanning: transforme a pergunta em palavra-alvo</h3>
        <p>Agora a turma já sabe do que a página trata. Surge uma pergunta: <strong>qual é o prazo de inscrição?</strong></p>
        <p>Você não precisa reler tudo. Converta a pergunta em pistas que provavelmente aparecerão no texto: <strong>registration, closes, deadline, date</strong> ou simplesmente números e nomes de meses.</p>

        <div class="mission-box" data-scan-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Scan lab</span><strong class="card-title">Encontre sem traduzir o texto inteiro</strong></div>
            <span class="mission-progress" data-scan-progress>0 de 4 resolvidas</span>
          </div>

          <div data-scan-task data-answer="b">
            <p><strong>Missão A:</strong> Qual é o limite de participantes por equipe?</p>
            <button class="mission-option" type="button" data-scan-choice="a">18</button>
            <button class="mission-option" type="button" data-scan-choice="b">4</button>
            <button class="mission-option" type="button" data-scan-choice="c">3</button>
            <div class="mission-feedback" data-scan-feedback></div>
          </div>

          <div data-scan-task data-answer="c">
            <p><strong>Missão B:</strong> Quando termina a inscrição?</p>
            <button class="mission-option" type="button" data-scan-choice="a">October 3</button>
            <button class="mission-option" type="button" data-scan-choice="b">Every Tuesday</button>
            <button class="mission-option" type="button" data-scan-choice="c">September 18, 6 p.m. BRT</button>
            <div class="mission-feedback" data-scan-feedback></div>
          </div>

          <div data-scan-task data-answer="a">
            <p><strong>Missão C:</strong> A inscrição é paga?</p>
            <button class="mission-option" type="button" data-scan-choice="a">Não. Registration is free.</button>
            <button class="mission-option" type="button" data-scan-choice="b">Sim, toda terça-feira.</button>
            <button class="mission-option" type="button" data-scan-choice="c">O texto não fala de inscrição.</button>
            <div class="mission-feedback" data-scan-feedback></div>
          </div>

          <div data-scan-task data-answer="b">
            <p><strong>Missão D:</strong> O que a equipe precisa entregar?</p>
            <button class="mission-option" type="button" data-scan-choice="a">Somente o nome dos participantes.</button>
            <button class="mission-option" type="button" data-scan-choice="b">Uma descrição curta do projeto e um protótipo funcional.</button>
            <button class="mission-option" type="button" data-scan-choice="c">Um vídeo obrigatório toda terça-feira.</button>
            <div class="mission-feedback" data-scan-feedback></div>
          </div>
        </div>

        <h3>4. Palavras-chave não precisam vir sozinhas</h3>
        <p>Uma palavra conhecida pode abrir uma região do texto. Depois, observe as palavras ao redor. Em <strong>“Registration closes September 18”</strong>, mesmo que <em>closes</em> fosse desconhecida, a combinação entre <strong>registration + data</strong> já sugere que aquele trecho trata de prazo.</p>

        <div class="concept-box">
          <strong class="card-title">Inferir é levantar uma hipótese — e confirmar</strong>
          <p>Você pode usar contexto, cognatos, estrutura e conhecimento do gênero para prever um sentido. Mas uma boa leitura não para no primeiro palpite: verifica se a hipótese combina com o restante do texto.</p>
        </div>

        ${choice('3','Inferência responsável','Você encontra “workshops are available every Tuesday”. Mesmo sem conhecer “available”, o que ajuda a inferir que há oficinas às terças-feiras?',[['a','A palavra workshops, a frequência every Tuesday e o contexto do evento'],['b','A posição da frase na página apenas'],['c','Nada pode ser inferido sem tradução literal']],'a','Isso. Várias pistas convergem para uma interpretação plausível.','A inferência fica mais forte quando diferentes pistas apontam para o mesmo sentido.')}

        <h3>5. Pequenas palavras podem mudar a decisão</h3>
        <p>Em leitura funcional, algumas palavras curtas têm grande impacto:</p>

        <div class="language-tool">
          <strong class="card-title">Language in action</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>must</strong><code>Teams must submit...</code><p>Indica obrigação.</p></div>
            <div class="toolbox-item"><strong>can</strong><code>Students can join...</code><p>Indica possibilidade/permissão.</p></div>
            <div class="toolbox-item"><strong>before</strong><code>Submit before Friday.</code><p>Indica anterioridade.</p></div>
            <div class="toolbox-item"><strong>by</strong><code>Submit by 6 p.m.</code><p>Em prazos, normalmente significa “até/no máximo até”.</p></div>
          </div>
        </div>

        <p>Observe o papel da gramática aqui: não estamos decorando uma lista. Estamos entendendo <strong>o que uma forma muda na ação exigida pelo texto</strong>.</p>

        ${choice('4','Leitura de obrigação','Em “Teams must submit a working prototype”, qual interpretação é adequada?',[['a','Entregar um protótipo é uma exigência'],['b','O protótipo é apenas uma possibilidade sem importância'],['c','A equipe está proibida de criar protótipos']],'a','Correto. O modal must sinaliza uma exigência no regulamento.','A forma gramatical ajuda a distinguir obrigação de possibilidade.')}

        <h3>6. Quando usar o dicionário?</h3>
        <p>O dicionário é uma ferramenta importante — mas não precisa ser o primeiro movimento diante de cada palavra nova.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Vale continuar sem parar</strong><p>A palavra desconhecida não impede você de compreender o assunto nem localizar a informação necessária.</p></div>
          <div class="mini-card"><strong>Vale consultar</strong><p>A palavra bloqueia a decisão, aparece repetidamente, é técnica ou pode mudar o sentido de uma instrução.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Não escolha automaticamente o primeiro significado</strong>
          <p>Palavras têm sentidos diferentes conforme o contexto. <strong>File</strong>, por exemplo, pode significar “arquivo” em tecnologia e outras coisas em outros contextos. Consulte o significado que combina com a situação real.</p>
        </div>

        ${choice('5','Uso estratégico do dicionário','Em um tutorial técnico, você não conhece a palavra que aparece no comando principal e ela impede a execução da tarefa. O que fazer?',[['a','Ignorar sempre qualquer palavra desconhecida'],['b','Usar contexto e, se ainda bloquear a ação, consultar uma fonte confiável para aquele significado'],['c','Traduzir todo o tutorial antes de continuar']],'b','Isso. O dicionário entra quando agrega precisão à leitura, não como ritual obrigatório para cada palavra.','Use ferramentas de consulta para resolver dúvidas relevantes, não para substituir toda a leitura.')}

        <h3>7. Transferência: agora o texto é técnico</h3>
        <p>Alguns dias depois, você entra em um repositório de projeto e encontra este trecho de README:</p>

        <div class="source-box">
          <strong class="card-title">Project setup</strong>
          <p><strong>Requirements:</strong> Node.js 20 or later.</p>
          <p>1. Clone the repository.</p>
          <p>2. Run <strong>npm install</strong>.</p>
          <p>3. Create a <strong>.env</strong> file with your local configuration.</p>
          <p><strong>Security:</strong> Never commit passwords or API keys.</p>
        </div>

        ${choice('6','Scanning técnico','Se sua dúvida é apenas qual versão do Node.js usar, onde sua atenção deve ir primeiro?',[['a','Requirements e o número 20'],['b','Security'],['c','Todas as palavras do texto igualmente']],'a','Correto. O objetivo permite localizar rapidamente a região relevante do README.','Transforme a dúvida em pistas: versão → requirements → número.')}

        ${choice('7','Leitura que evita erro real','Qual aviso tem impacto direto sobre segurança do projeto?',[['a','Clone the repository'],['b','Never commit passwords or API keys'],['c','Node.js 20 or later']],'b','Isso. Aqui uma leitura precisa evita expor segredos no repositório.','Leitura em inglês pode ter consequência técnica real; não é apenas exercício escolar.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>8. Faça uma leitura real em três passagens</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Escolha uma página curta em inglês que faça sentido para você: documentação de tecnologia, página de evento, notícia, jogo, aplicativo ou projeto.</p>
            <ol>
              <li><strong>Passagem 1 — skimming:</strong> em até 30 segundos, registre assunto, gênero e propósito.</li>
              <li><strong>Passagem 2 — scanning:</strong> crie três perguntas específicas e localize as respostas sem reler tudo.</li>
              <li><strong>Passagem 3 — precisão:</strong> escolha no máximo três palavras realmente importantes que ainda bloqueiam a compreensão e investigue o significado pelo contexto e por fonte de consulta quando necessário.</li>
            </ol>
            <p>Finalize respondendo: <strong>o que você conseguiu compreender antes de traduzir qualquer frase inteira?</strong></p>
            <details><summary>Critério de qualidade</summary><p>Uma boa atividade mostra estratégia. Não ganha qualidade por ter mais palavras traduzidas; ganha por demonstrar propósito, pistas utilizadas, informação localizada e decisões justificadas.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> leitura eficiente começa pelo propósito.</p>
          <p><strong>Experimentar:</strong> você usou skimming e scanning em uma situação de decisão.</p>
          <p><strong>Analisar:</strong> combinou palavras-chave, cognatos, inferência, estrutura e formas linguísticas importantes.</p>
          <p><strong>Aplicar:</strong> transferiu a estratégia para um texto técnico que poderia aparecer em um projeto real.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const compass = root.querySelector('[data-reading-goal]');
    if (compass) {
      const select = compass.querySelector('[data-reading-select]');
      const strategy = compass.querySelector('[data-reading-strategy]');
      const preview = compass.querySelector('[data-reading-preview]');
      const guidance = {
        topic:['Skimming','Olhe rapidamente título, primeiras linhas, palavras repetidas e estrutura para captar o sentido geral.'],
        deadline:['Scanning','Procure registration, closes, deadline, números, horários e nomes de meses.'],
        team:['Scanning','Procure teams, students e números próximos dessas palavras.'],
        requirements:['Scanning + leitura local','Localize must, submit, requirements e leia com mais atenção apenas esse trecho.']
      };
      const render = () => {
        if (!select || !strategy || !preview) return;
        const [name,text] = guidance[select.value];
        strategy.innerHTML = `<option>${name}</option>`;
        preview.innerHTML = `<strong>${name}</strong> — ${text}`;
      };
      select?.addEventListener('change',render);
      render();
    }

    const lab = root.querySelector('[data-scan-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-scan-task]')];
      const progress = lab.querySelector('[data-scan-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-scan-feedback]');
        task.querySelectorAll('[data-scan-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.scanChoice === task.dataset.answer;
            task.querySelectorAll('[data-scan-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Encontrado.</strong> Você localizou a informação necessária sem traduzir o texto inteiro.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Ainda não.</strong> Transforme a pergunta em palavra-chave, número, data ou trecho-alvo e procure novamente.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }
  }

  MBB.enableChapter('02 Ler', showChapter);
})();
