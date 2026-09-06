(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Persuasão',
      technical:'publicidade • público-alvo • propósito • call to action • escolhas lexicais • imperativos • comparativos e superlativos • prova social • urgência • ética • multimodalidade',
      title:'06 — Publicidade e persuasão',
      objective:'<strong>Objetivo:</strong> analisar como anúncios em inglês combinam palavras, imagens, urgência, promessa e chamada para ação para persuadir diferentes públicos, distinguindo persuasão legítima de estratégias manipuladoras e produzindo publicidade clara e responsável.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">O aplicativo está pronto — mas ninguém conhece</span>
          <div class="hero-box">
            <strong class="card-title">A equipe precisa divulgar o projeto para a feira da escola.</strong>
            <p>Depois de corrigir o aplicativo e investigar a postagem viral dos capítulos anteriores, surge um novo problema: se ninguém entender rapidamente <strong>para que o aplicativo serve</strong>, poucos visitantes irão testá-lo.</p>
            <p>Três colegas criam anúncios em inglês. Um informa com clareza. Outro promete demais. O terceiro tenta pressionar o visitante com contagem regressiva e afirmações que ninguém conseguiu provar.</p>
            <p>Todos querem a mesma coisa: convencer alguém a agir. Mas <strong>nem toda persuasão funciona do mesmo jeito — e nem toda persuasão é ética</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como a publicidade usa a língua e outros recursos para influenciar nossas decisões?</p>
          </div>
        </section>

        <div class="three-col">
          <div class="mini-card">
            <strong>Ad A — claro</strong>
            <p><strong>Find your classroom faster.</strong></p>
            <p>Try the free school map during the fair.</p>
            <p><strong>Open the map</strong></p>
          </div>
          <div class="mini-card">
            <strong>Ad B — exagerado</strong>
            <p><strong>The BEST school app EVER.</strong></p>
            <p>It solves every problem in seconds.</p>
            <p><strong>Download now!</strong></p>
          </div>
          <div class="mini-card">
            <strong>Ad C — pressão</strong>
            <p><strong>Only 10 seconds left!</strong></p>
            <p>Everyone is using it. Don’t be left behind.</p>
            <p><strong>Click NOW!</strong></p>
          </div>
        </div>

        ${choice('1','Primeira leitura','Qual anúncio parece mais adequado para divulgar um projeto escolar sem prometer algo que o produto talvez não entregue?',[['a','Ad A'],['b','Ad B'],['c','Ad C']],'a','Isso. Ele apresenta benefício, contexto e ação esperada sem transformar opinião em promessa absoluta.','Observe se o anúncio informa um benefício verificável ou apenas cria pressão e exagero.')}

        <h3>1. Publicidade começa com três perguntas</h3>
        <p>Antes de analisar uma palavra isolada, descubra <strong>quem fala, para quem e com qual objetivo</strong>. Uma mesma frase pode funcionar muito bem para um público e mal para outro.</p>

        <div class="argument-chain">
          <span>Quem anuncia?</span><b>→</b><span>Quem é o público?</span><b>→</b><span>Qual ação deseja?</span><b>→</b><span>Que benefício destaca?</span><b>→</b><span>Como tenta convencer?</span>
        </div>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Público: alunos novos</strong><p>Talvez valorizem orientação, rapidez e localização das salas.</p></div>
          <div class="mini-card"><strong>Público: professores e visitantes</strong><p>Talvez valorizem clareza, facilidade de uso e informações confiáveis.</p></div>
        </div>

        ${choice('2','Público-alvo','Se o anúncio é dirigido a visitantes que nunca estiveram na escola, qual mensagem atende melhor a uma necessidade real?',[['a','Find your classroom faster.'],['b','You are not cool without this app.'],['c','The universe needs this app.']],'a','Correto. A mensagem se conecta a uma necessidade provável do público: localizar-se dentro da escola.','Boa persuasão costuma relacionar a proposta ao problema ou desejo do público.')}

        <h3>2. A chamada para ação diz o que o anúncio quer de você</h3>
        <p>Em publicidade digital, é comum encontrar uma <strong>call to action (CTA)</strong>: uma expressão curta que orienta a próxima ação.</p>

        <div class="language-tool">
          <strong class="card-title">CTA em ação</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Try it</strong><code>Try the app.</code><p>Convite direto para experimentar.</p></div>
            <div class="toolbox-item"><strong>Learn more</strong><code>Learn more about the project.</code><p>Leva a mais informações.</p></div>
            <div class="toolbox-item"><strong>Join us</strong><code>Join our workshop.</code><p>Convida à participação.</p></div>
            <div class="toolbox-item"><strong>Download</strong><code>Download the guide.</code><p>Orienta uma ação imediata.</p></div>
          </div>
        </div>

        <p>Essas formas usam frequentemente o <strong>imperativo</strong>. Aqui a gramática aparece porque o anúncio precisa provocar uma ação: <em>try, discover, join, learn, download</em>.</p>

        ${choice('3','Gramática em uso','Qual é a função principal de “Try the free school map”?',[['a','Narrar uma ação passada'],['b','Convidar o público a experimentar algo'],['c','Descrever uma obrigação legal']],'b','Isso. O imperativo funciona como chamada para ação dentro do anúncio.','Pergunte o que a forma faz na situação comunicativa, não apenas qual é seu nome gramatical.')}

        <h3>3. Palavras pequenas podem aumentar muito a promessa</h3>
        <p>Compare:</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Useful</strong><p><em>A useful app for school visitors.</em></p><p>Apresenta uma qualidade.</p></div>
          <div class="mini-card"><strong>The most useful</strong><p><em>The most useful school app.</em></p><p>Faz uma comparação máxima — que deveria ter alguma base.</p></div>
        </div>

        <div class="language-tool">
          <strong class="card-title">Comparação e intensidade</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>fast → faster</strong><code>Find rooms faster.</code><p>Compara velocidade em relação a outra situação.</p></div>
            <div class="toolbox-item"><strong>easy → easier</strong><code>Navigation is easier.</code><p>Indica maior facilidade.</p></div>
            <div class="toolbox-item"><strong>the best</strong><code>The best app.</code><p>Superlativo forte; pede cuidado com a evidência.</p></div>
            <div class="toolbox-item"><strong>100% / always / never</strong><code>It always works.</code><p>Palavras absolutas aumentam muito a promessa.</p></div>
          </div>
        </div>

        ${choice('4','Promessa forte','Por que “It always works perfectly” exige mais cuidado do que “It helps visitors find classrooms”?',[['a','Porque palavras absolutas fazem uma promessa muito mais ampla e difícil de sustentar'],['b','Porque always é uma palavra proibida em inglês'],['c','Porque anúncios nunca podem usar adjetivos']],'a','Correto. Quanto mais absoluta a promessa, maior a necessidade de evidência para sustentá-la.','Observe a força da afirmação e pergunte: o anúncio consegue provar isso?')}

        <h3>4. Persuasão não acontece apenas nas palavras</h3>
        <p>Imagine o Ad C com um botão enorme, números vermelhos diminuindo, música acelerada e a frase <strong>“Only 10 seconds left!”</strong>. Mesmo sem mudar o produto, a experiência muda.</p>

        <div class="concept-box">
          <strong class="card-title">Publicidade é multimodal</strong>
          <p>Texto, cor, tamanho, posição, imagem, som, movimento e ritmo podem trabalhar juntos para orientar atenção e emoção.</p>
          <p>Uma frase discreta no rodapé pode ter menos impacto visual que um botão enorme no centro da tela, mesmo sendo igualmente importante para a decisão.</p>
        </div>

        ${choice('5','Multimodalidade','Se “Free trial” aparece enorme, mas “subscription starts automatically after 7 days” aparece quase escondido, qual é o problema principal?',[['a','O anúncio cria uma hierarquia visual que destaca o benefício e reduz a visibilidade de uma condição importante'],['b','Todo texto pequeno é ilegal'],['c','A palavra subscription não pode aparecer em anúncios']],'a','Isso. A organização visual também participa da persuasão e pode favorecer uma leitura incompleta.','Compare o destaque dado aos benefícios com o destaque dado às condições.')}

        <h3>5. Quatro estratégias de persuasão muito comuns</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Benefício</strong><p><em>Save time during your visit.</em></p><p>Mostra o que o público pode ganhar.</p></div>
          <div class="mini-card"><strong>Urgência</strong><p><em>Offer ends today.</em></p><p>Reduz o tempo percebido para decidir.</p></div>
          <div class="mini-card"><strong>Prova social</strong><p><em>Used by 8,000 students.</em></p><p>Sugere confiança pelo comportamento de outras pessoas — se o dado for real.</p></div>
          <div class="mini-card"><strong>Autoridade</strong><p><em>Recommended by teachers.</em></p><p>Usa a credibilidade de alguém ou de uma instituição — que precisa ser identificável.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Estratégia não é sinônimo de mentira</strong>
          <p>Urgência pode ser legítima se o prazo realmente termina hoje. Prova social pode ser útil se o número for verificável. O problema aparece quando a estratégia <strong>esconde, inventa ou distorce</strong> informações para reduzir a capacidade de escolha do público.</p>
        </div>

        ${choice('6','Prova social','Um anúncio diz “8,000 students already use our app”. Qual é a pergunta crítica mais importante?',[['a','De onde vem esse número e como ele foi medido?'],['b','A frase tem exatamente oito palavras?'],['c','O número é grande, então deve ser verdadeiro']],'a','Correto. Números persuasivos também são afirmações que podem e devem ser verificadas.','Retome a lógica do capítulo 05: claim → source → evidence.')}

        <h3>6. Persuadir × manipular</h3>
        <p>Não existe uma linha mecânica que resolva todos os casos, mas há sinais úteis.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Persuasão responsável</strong><p>Destaca benefícios reais, deixa condições relevantes visíveis, permite comparação e não inventa evidências.</p></div>
          <div class="mini-card"><strong>Manipulação</strong><p>Pode esconder condições, usar medo artificial, culpa, falsa urgência, dados sem fonte ou caminhos desenhados para dificultar a recusa.</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Dois botões na mesma tela</strong>
          <p><strong>YES! START MY FREE TRIAL</strong></p>
          <p><small>no thanks, I prefer to miss the opportunity</small></p>
        </div>

        ${choice('7','Escolha arquitetada','O que a segunda opção tenta fazer além de simplesmente permitir a recusa?',[['a','Associar a recusa a uma ideia negativa para pressionar emocionalmente a escolha'],['b','Traduzir a primeira opção'],['c','Explicar objetivamente o preço']],'a','Isso. O texto da interface enquadra uma opção como desejável e a outra como perda ou fracasso.','Analise não apenas quais opções existem, mas como cada uma é apresentada.')}

        <h3>7. Persuasion Lab — leia antes de clicar</h3>
        <div class="mission-box" data-persuasion-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Persuasion lab</span><strong class="card-title">Que estratégia está agindo?</strong></div>
            <span class="mission-progress" data-persuasion-progress>0 de 4 resolvidas</span>
          </div>

          <div data-persuasion-task data-answer="b">
            <p><strong>Situação A:</strong> “Only 3 seats left — register now!” O número de vagas é real e atualizado.</p>
            <button class="mission-option" type="button" data-persuasion-choice="a">Prova social</button>
            <button class="mission-option" type="button" data-persuasion-choice="b">Escassez/urgência</button>
            <button class="mission-option" type="button" data-persuasion-choice="c">Comparação técnica</button>
            <div class="mission-feedback" data-persuasion-feedback></div>
          </div>

          <div data-persuasion-task data-answer="a">
            <p><strong>Situação B:</strong> “Join 5,200 students already learning with us.”</p>
            <button class="mission-option" type="button" data-persuasion-choice="a">Prova social</button>
            <button class="mission-option" type="button" data-persuasion-choice="b">Ameaça</button>
            <button class="mission-option" type="button" data-persuasion-choice="c">Instrução técnica</button>
            <div class="mission-feedback" data-persuasion-feedback></div>
          </div>

          <div data-persuasion-task data-answer="c">
            <p><strong>Situação C:</strong> “Spend less time searching for rooms.”</p>
            <button class="mission-option" type="button" data-persuasion-choice="a">Falsa autoridade</button>
            <button class="mission-option" type="button" data-persuasion-choice="b">Pressão por medo</button>
            <button class="mission-option" type="button" data-persuasion-choice="c">Benefício para o usuário</button>
            <div class="mission-feedback" data-persuasion-feedback></div>
          </div>

          <div data-persuasion-task data-answer="b">
            <p><strong>Situação D:</strong> “Experts recommend it”, mas nenhum especialista é identificado.</p>
            <button class="mission-option" type="button" data-persuasion-choice="a">Evidência suficiente</button>
            <button class="mission-option" type="button" data-persuasion-choice="b">Apelo à autoridade que ainda precisa ser verificado</button>
            <button class="mission-option" type="button" data-persuasion-choice="c">Comparativo gramatical apenas</button>
            <div class="mission-feedback" data-persuasion-feedback></div>
          </div>
        </div>

        <h3>8. Representação também persuade</h3>
        <p>Publicidade não vende apenas objetos. Ela também pode sugerir <strong>quem é inteligente, bem-sucedido, bonito, moderno, competente ou pertencente a determinado grupo</strong>.</p>

        <div class="concept-box">
          <strong class="card-title">Pergunte quem aparece — e quem desaparece</strong>
          <p>Um anúncio pode reforçar estereótipos pela escolha de personagens, profissões, corpos, idades, sotaques, cenários e papéis sociais. Analisar publicidade inclui observar essas representações, não apenas traduzir o slogan.</p>
        </div>

        ${choice('8','Leitura crítica','Uma campanha de tecnologia mostra somente homens como programadores e mulheres apenas como usuárias. O que uma leitura crítica pode observar?',[['a','Que a seleção de papéis pode reforçar um estereótipo sobre quem produz tecnologia'],['b','Que imagens nunca comunicam valores'],['c','Que apenas o texto escrito importa']],'a','Correto. Representações visuais também constroem sentidos e podem naturalizar papéis sociais.','Publicidade é uma combinação de linguagem verbal, visual e cultural.')}

        <h3>9. Ad Builder — convença sem inventar</h3>
        <p>Agora você assume a comunicação da equipe. Escolha público e objetivo. O construtor gera uma base que pode ser melhorada, mas preserva uma regra: <strong>não prometer o que não pode ser sustentado</strong>.</p>

        <div class="builder-box" data-ad-builder>
          <strong class="card-title">Ethical Ad Builder</strong>
          <div class="builder-controls">
            <label>Público
              <select data-ad-audience>
                <option value="visitor">Visitantes da feira</option>
                <option value="student">Alunos novos</option>
                <option value="teacher">Professores</option>
              </select>
            </label>
            <label>Objetivo
              <select data-ad-purpose>
                <option value="try">Levar a experimentar</option>
                <option value="learn">Levar a saber mais</option>
                <option value="join">Convidar para colaborar</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-ad-preview></div>
        </div>

        <h3>10. Faça o teste da transparência</h3>
        <p>Antes de publicar um anúncio, passe por quatro perguntas:</p>
        <div class="argument-chain">
          <span>A promessa é verificável?</span><b>→</b><span>Alguma condição importante ficou escondida?</span><b>→</b><span>A urgência é real?</span><b>→</b><span>Eu manteria o anúncio se o público pudesse conferir todos os dados?</span>
        </div>

        ${choice('9','Decisão final','Qual versão é mais responsável?',[['a','The only perfect school app. Everyone loves it. Click now before it disappears!'],['b','Find classrooms faster during the school fair. Try our free school map and tell us what could be improved.'],['c','If you do not use our app, you will waste your entire day.']],'b','Isso. A mensagem apresenta um benefício plausível, informa o contexto, convida à ação e ainda abre espaço para avaliação do usuário.','Boa publicidade pode ser atraente sem transformar exagero em fato.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>11. Crie uma campanha curta para um projeto real</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Escolha um projeto escolar, tecnológico, cultural ou social. Produza uma pequena peça publicitária em inglês contendo:</p>
            <ol>
              <li><strong>público-alvo</strong> claramente definido;</li>
              <li>um título de até 8 palavras;</li>
              <li>um benefício concreto e verificável;</li>
              <li>uma <strong>call to action</strong>;</li>
              <li>uma ideia para imagem, cor ou hierarquia visual;</li>
              <li>uma frase explicando qual estratégia de persuasão você usou;</li>
              <li>uma revisão ética: o que você deliberadamente decidiu <strong>não exagerar ou esconder</strong>?</li>
            </ol>
          </div>
        </section>

        <div class="chapter-checkpoint">
          <span class="lesson-kicker">Fechamento MbB</span>
          <p><strong>Entender:</strong> publicidade tenta orientar atenção, interpretação e ação.</p>
          <p><strong>Experimentar:</strong> você comparou anúncios, CTAs, promessas, urgência, prova social e escolhas visuais.</p>
          <p><strong>Analisar:</strong> distinguiu benefício, evidência, exagero, manipulação e representação.</p>
          <p><strong>Aplicar:</strong> produziu uma mensagem persuasiva em inglês sem abandonar clareza e responsabilidade.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const lab = root.querySelector('[data-persuasion-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-persuasion-task]')];
      const progress = lab.querySelector('[data-persuasion-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-persuasion-feedback]');
        task.querySelectorAll('[data-persuasion-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.persuasionChoice === task.dataset.answer;
            task.querySelectorAll('[data-persuasion-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Boa leitura.</strong> Você identificou o mecanismo principal de persuasão sem confundir estratégia com prova de verdade.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Reveja a intenção.</strong> Pergunte qual sensação ou decisão a frase tenta provocar no público.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-ad-builder]');
    if (builder) {
      const audience = builder.querySelector('[data-ad-audience]');
      const purpose = builder.querySelector('[data-ad-purpose]');
      const preview = builder.querySelector('[data-ad-preview]');
      const examples = {
        visitor:{
          try:'New here? Find classrooms faster during the school fair. Try the free school map.',
          learn:'See how our student-built map helps visitors navigate the school. Learn more about the project.',
          join:'Help us improve the map. Try it during the fair and share your feedback.'
        },
        student:{
          try:'Starting at a new school? Find key rooms more easily. Try the student map.',
          learn:'Discover how the map was designed to help new students move around the school.',
          join:'Want to improve school navigation? Join the student team and help test the next version.'
        },
        teacher:{
          try:'Support visitors with a simple school map. Try the prototype during the fair.',
          learn:'Learn how students designed and tested a digital map for school visitors.',
          join:'Share your feedback and help students improve the next version of the school map.'
        }
      };
      const render = () => {
        if (!audience || !purpose || !preview) return;
        preview.textContent = examples[audience.value][purpose.value];
      };
      audience?.addEventListener('change', render);
      purpose?.addEventListener('change', render);
      render();
    }
  }

  MBB.enableChapter('06 Publicidade', showChapter);
})();