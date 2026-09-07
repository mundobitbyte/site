(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Passado',
      technical:'simple past • was/were • regular and irregular verbs • did/didn’t • time markers • sequence • news lead • short narratives',
      title:'05 — O que aconteceu?',
      objective:'<strong>Objetivo:</strong> relatar acontecimentos passados usando <em>was/were</em>, verbos regulares e irregulares, perguntas e negativas com <em>did</em>, marcadores de tempo e organização de relatos e notícias curtas.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Agora o relógio volta</span>
          <div class="hero-box">
            <strong class="card-title">Ontem o computador da sala parou durante uma apresentação.</strong>
            <p>Hoje alguém pergunta: <strong>“What happened?”</strong> Para responder, você precisa sair do presente e organizar acontecimentos já concluídos.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> contar o que aconteceu e adaptar o mesmo fato para uma conversa, um relato ou uma notícia curta.</p>
          </div>
        </section>

        <h3>1. Marcadores que apontam para o passado</h3>
        <div class="three-col">
          <div class="mini-card"><strong>yesterday</strong><p>ontem</p></div>
          <div class="mini-card"><strong>last night / week / year</strong><p>ontem à noite / semana passada / ano passado</p></div>
          <div class="mini-card"><strong>... ago</strong><p>two days ago = dois dias atrás</p></div>
          <div class="mini-card"><strong>in 2025</strong><p>em 2025</p></div>
          <div class="mini-card"><strong>this morning</strong><p>esta manhã, se já terminou</p></div>
          <div class="mini-card"><strong>when I was...</strong><p>quando eu era/estava...</p></div>
        </div>

        <h3>2. O passado de <em>to be</em>: was e were</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I / He / She / It → was</strong><p>I <strong>was</strong> at school.</p><p>The computer <strong>was</strong> offline.</p></div>
          <div class="mini-card"><strong>You / We / They → were</strong><p>We <strong>were</strong> in the lab.</p><p>They <strong>were</strong> ready.</p></div>
        </div>
        ${choice('1','Was ou were','Complete: “My friends ___ at the event yesterday.”',[['a','was'],['b','were'],['c','did']],'b','Correto. My friends = they, então usamos were.','I/he/she/it → was; you/we/they → were.')}

        <h3>3. Negativas e perguntas com was/were</h3>
        <div class="two-col"><div class="mini-card"><strong>Negativa</strong><p>I <strong>wasn’t</strong> late.</p><p>They <strong>weren’t</strong> tired.</p></div><div class="mini-card"><strong>Pergunta</strong><p><strong>Was</strong> she at home?</p><p><strong>Were</strong> they ready?</p></div></div>
        ${choice('2','Pergunta com be','Qual pergunta está correta?',[['a','Did she was at school?'],['b','Was she at school?'],['c','She was at school?']],'b','Isso. Com was/were, o próprio verbo vai para a frente.','Não use did com was/were nessa estrutura.')}

        <h3>4. Verbos regulares: geralmente acrescentamos -ed</h3>
        <div class="language-tool"><strong class="card-title">Exemplos frequentes</strong><div class="toolbox-grid">
          <div class="toolbox-item"><strong>work → worked</strong><code>I worked yesterday.</code></div>
          <div class="toolbox-item"><strong>play → played</strong><code>We played soccer.</code></div>
          <div class="toolbox-item"><strong>study → studied</strong><code>She studied English.</code></div>
          <div class="toolbox-item"><strong>stop → stopped</strong><code>The rain stopped.</code></div>
        </div></div>
        <div class="note-box"><strong class="card-title">-ed não tem sempre a mesma pronúncia</strong><p><strong>worked</strong>, <strong>played</strong> e <strong>wanted</strong> terminam com sons diferentes. A pronúncia será retomada no capítulo 08.</p></div>
        ${choice('3','Regular','Qual é o passado de study?',[['a','studyed'],['b','studied'],['c','studys']],'b','Correto. Consoante + y geralmente muda para -ied: studied.','study → studied.')}

        <h3>5. Verbos irregulares: a forma muda</h3>
        <div class="three-col">
          <div class="mini-card"><strong>go → went</strong><p>ir → foi</p></div><div class="mini-card"><strong>have → had</strong><p>ter → teve</p></div><div class="mini-card"><strong>do → did</strong><p>fazer → fez</p></div>
          <div class="mini-card"><strong>see → saw</strong><p>ver → viu</p></div><div class="mini-card"><strong>get → got</strong><p>obter/chegar → obteve/chegou</p></div><div class="mini-card"><strong>make → made</strong><p>fazer/criar → fez/criou</p></div>
          <div class="mini-card"><strong>take → took</strong><p>pegar/levar → pegou/levou</p></div><div class="mini-card"><strong>come → came</strong><p>vir → veio</p></div><div class="mini-card"><strong>find → found</strong><p>encontrar → encontrou</p></div>
        </div>
        <p>Não tente decorar centenas. Aprenda primeiro os mais frequentes e recicle-os em frases.</p>
        ${choice('4','Irregular','Complete: “We ___ to the museum last Saturday.”',[['a','go'],['b','went'],['c','goed']],'b','Isso. Go é irregular: go → went.','Alguns verbos não usam -ed no passado.')}

        <h3>6. Um acontecimento completo</h3>
        <div class="source-box">
          <strong class="card-title">What happened yesterday?</strong>
          <p>Yesterday our group <strong>started</strong> a presentation at 10 a.m. The computer <strong>was</strong> fine at first. Then the screen <strong>went</strong> black. We <strong>checked</strong> the cables and <strong>tried</strong> another monitor. Finally, the teacher <strong>found</strong> a loose power cable. We <strong>fixed</strong> it and <strong>finished</strong> the presentation.</p>
          <div class="quiz-actions"><button class="action-button" type="button" data-en-say="Yesterday our group started a presentation at ten a.m. The computer was fine at first. Then the screen went black. We checked the cables and tried another monitor. Finally, the teacher found a loose power cable. We fixed it and finished the presentation.">Ouvir relato</button></div>
          <div class="mission-feedback" data-en-speech-status aria-live="polite"></div>
        </div>
        ${choice('5','Sequência','O que resolveu o problema?',[['a','A troca de monitor'],['b','Um cabo de energia solto foi encontrado e corrigido'],['c','A apresentação foi cancelada']],'b','Correto. The teacher found a loose power cable; depois o grupo fixed it.','Acompanhe quem fez o quê e em que ordem.')}

        <h3>7. Negativas com didn’t</h3>
        <div class="argument-chain"><span>We finished.</span><b>→</b><span>We didn’t finish.</span><span>She went.</span><b>→</b><span>She didn’t go.</span></div>
        <div class="note-box"><strong class="card-title">Depois de didn’t, o verbo volta à forma básica</strong><p>Correto: <strong>She didn’t go.</strong><br>Não: <s>She didn’t went.</s></p></div>
        ${choice('6','Negativa','Qual frase está correta?',[['a','They didn’t arrived early.'],['b','They didn’t arrive early.'],['c','They not arrived early.']],'b','Isso. Didn’t já marca o passado.','didn’t + verbo base.')}

        <h3>8. Perguntas com did</h3>
        <div class="language-tool"><strong class="card-title">Perguntar sobre o passado</strong><div class="toolbox-grid">
          <div class="toolbox-item"><strong>Did...?</strong><code>Did you study?</code></div><div class="toolbox-item"><strong>What did...?</strong><code>What did you do?</code></div>
          <div class="toolbox-item"><strong>Where did...?</strong><code>Where did they go?</code></div><div class="toolbox-item"><strong>When did...?</strong><code>When did she arrive?</code></div>
        </div></div>
        <div class="dialogue-box"><div class="speech"><small>A</small>What did you do yesterday?</div><div class="speech you"><small>B</small>I studied in the morning and worked in the afternoon.</div><div class="speech"><small>A</small>Did you go out at night?</div><div class="speech you"><small>B</small>No, I didn’t. I stayed home.</div></div>
        ${choice('7','Pergunta','Qual pergunta está correta?',[['a','Where did you went?'],['b','Where you did go?'],['c','Where did you go?']],'c','Correto. Palavra interrogativa + did + sujeito + verbo base.','Did já indica passado; use go, não went.')}

        <h3>9. O mesmo fato em uma notícia curta</h3>
        <p>No campo jornalístico, um <strong>lead</strong> apresenta rapidamente as informações mais importantes: <strong>what, who, when, where</strong> — e, quando disponível, <strong>why/how</strong>.</p>
        <div class="source-box">
          <strong class="card-title">School News — lead</strong>
          <p><strong>A student presentation stopped for five minutes yesterday morning in Lab 2 after a loose power cable caused the classroom computer to turn off. The group fixed the problem and completed the presentation.</strong></p>
        </div>
        <div class="three-col"><div class="mini-card"><strong>What?</strong><p>A presentation stopped.</p></div><div class="mini-card"><strong>When?</strong><p>Yesterday morning.</p></div><div class="mini-card"><strong>Where?</strong><p>In Lab 2.</p></div></div>
        ${choice('8','Lead','Qual informação responde a “por quê?”',[['a','in Lab 2'],['b','after a loose power cable caused the computer to turn off'],['c','yesterday morning']],'b','Correto. Esse trecho apresenta a causa do problema.','Perguntas interrogativas ajudam a localizar informações centrais em notícias.')}

        <h3>10. Organizar uma narrativa curta</h3>
        <div class="argument-chain"><span>First</span><b>→</b><span>Then</span><b>→</b><span>After that</span><b>→</b><span>Finally</span></div>
        <p>Esses conectores ajudam o leitor ou ouvinte a reconstruir a sequência.</p>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>11. Conte um fato de duas maneiras</h3>
          <div class="challenge-box">
            <strong class="card-title">Escolha algo simples: aula, viagem, ensaio, jogo, evento ou problema resolvido</strong>
            <ol><li>Escreva um relato de 4 a 6 frases com pelo menos quatro verbos no passado.</li><li>Use um verbo irregular e um marcador de sequência.</li><li>Transforme o mesmo fato em um lead de 1 ou 2 frases respondendo what/who/when/where.</li><li>Crie uma pergunta com <strong>Did...?</strong>.</li><li>Conte oralmente a versão curta sem ler palavra por palavra.</li></ol>
            <details><summary>Modelo de relato</summary><p><strong>Last Saturday I went to a music rehearsal. First, we checked the microphones. Then we played three songs. After that, we changed the guitar volume. Finally, we recorded a short video.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>relatar fatos concluídos, perguntar e negar no passado e adaptar a mesma informação para uma narrativa ou notícia curta.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('05 O que', showChapter);
})();