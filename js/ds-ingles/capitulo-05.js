(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Passado',
      technical:'simple past • was/were • regular verbs • irregular verbs • did/didn’t • time markers • short narratives',
      title:'05 — O que aconteceu?',
      objective:'<strong>Objetivo:</strong> relatar acontecimentos passados usando <em>was/were</em>, verbos regulares e irregulares, perguntas e negativas com <em>did</em> e marcadores de tempo.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Agora o relógio volta</span>
          <div class="hero-box">
            <strong class="card-title">Ontem o computador da sala parou durante uma apresentação.</strong>
            <p>Hoje alguém pergunta: <strong>“What happened?”</strong> Para responder, você precisa sair do presente e organizar acontecimentos já concluídos.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> contar, em ordem simples, o que aconteceu ontem ou em outro momento passado.</p>
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

        ${choice('1','Was ou were','Complete: “My friends ___ at the event yesterday.”',[['a','was'],['b','were'],['c','did']],'b','Correto. My friends = they, então usamos were.','No passado de to be: I/he/she/it → was; you/we/they → were.')}

        <h3>3. Negativas e perguntas com was/were</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Negativa</strong><p>I <strong>wasn’t</strong> late.</p><p>They <strong>weren’t</strong> tired.</p></div>
          <div class="mini-card"><strong>Pergunta</strong><p><strong>Was</strong> she at home?</p><p><strong>Were</strong> they ready?</p></div>
        </div>

        ${choice('2','Pergunta com be','Qual pergunta está correta?',[['a','Did she was at school?'],['b','Was she at school?'],['c','She was at school?']],'b','Isso. Com was/were, o próprio verbo vai para a frente para formar a pergunta.','Não use did com was/were nesta estrutura.')}

        <h3>4. Verbos regulares: geralmente acrescentamos -ed</h3>
        <div class="language-tool">
          <strong class="card-title">Exemplos frequentes</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>work → worked</strong><code>I worked yesterday.</code></div>
            <div class="toolbox-item"><strong>play → played</strong><code>We played soccer.</code></div>
            <div class="toolbox-item"><strong>study → studied</strong><code>She studied English.</code></div>
            <div class="toolbox-item"><strong>stop → stopped</strong><code>The rain stopped.</code></div>
          </div>
        </div>
        <p>Há regras de escrita diferentes, mas a ideia principal é: verbos regulares constroem o passado com uma forma em <strong>-ed</strong>.</p>

        <div class="note-box">
          <strong class="card-title">-ed não tem sempre a mesma pronúncia</strong>
          <p>Em <strong>worked</strong>, <strong>played</strong> e <strong>wanted</strong>, o final soa de maneiras diferentes. Por enquanto, reconheça que a escrita é -ed; a pronúncia será retomada no capítulo 08.</p>
        </div>

        ${choice('3','Regular','Qual é o passado de study?',[['a','studyed'],['b','studied'],['c','studys']],'b','Correto. Quando há consoante + y, normalmente trocamos y por i antes de -ed: studied.','study → studied.')}

        <h3>5. Verbos irregulares: a forma muda</h3>
        <div class="three-col">
          <div class="mini-card"><strong>go → went</strong><p>ir → foi</p></div>
          <div class="mini-card"><strong>have → had</strong><p>ter → teve</p></div>
          <div class="mini-card"><strong>do → did</strong><p>fazer → fez</p></div>
          <div class="mini-card"><strong>see → saw</strong><p>ver → viu</p></div>
          <div class="mini-card"><strong>get → got</strong><p>obter/chegar → obteve/chegou</p></div>
          <div class="mini-card"><strong>make → made</strong><p>fazer/criar → fez/criou</p></div>
          <div class="mini-card"><strong>take → took</strong><p>pegar/levar → pegou/levou</p></div>
          <div class="mini-card"><strong>come → came</strong><p>vir → veio</p></div>
          <div class="mini-card"><strong>find → found</strong><p>encontrar → encontrou</p></div>
        </div>
        <p>Não tente decorar centenas de verbos de uma vez. Aprenda primeiro os mais frequentes e recicle-os em frases.</p>

        ${choice('4','Irregular','Complete: “We ___ to the museum last Saturday.”',[['a','go'],['b','went'],['c','goed']],'b','Isso. Go é irregular: go → went.','Alguns verbos não usam -ed no passado.')}

        <h3>6. A história do computador</h3>
        <div class="source-box">
          <strong class="card-title">What happened yesterday?</strong>
          <p>Yesterday our group <strong>started</strong> a presentation at 10 a.m. The computer <strong>was</strong> fine at first. Then the screen <strong>went</strong> black. We <strong>checked</strong> the cables and <strong>tried</strong> another monitor. Finally, the teacher <strong>found</strong> a loose power cable. We <strong>fixed</strong> it and <strong>finished</strong> the presentation.</p>
        </div>

        ${choice('5','Sequência','O que resolveu o problema?',[['a','A troca de monitor'],['b','Um cabo de energia solto foi encontrado e corrigido'],['c','A apresentação foi cancelada']],'b','Correto. The teacher found a loose power cable; depois o grupo fixed it.','Em narrativas, acompanhe quem fez o quê e em que ordem.')}

        <h3>7. Negativas com didn’t</h3>
        <div class="argument-chain">
          <span>We finished.</span><b>→</b><span>We didn’t finish.</span>
          <span>She went.</span><b>→</b><span>She didn’t go.</span>
        </div>
        <div class="note-box"><strong class="card-title">Depois de didn’t, o verbo volta à forma básica</strong><p>Correto: <strong>She didn’t go.</strong><br>Não: <s>She didn’t went.</s></p></div>

        ${choice('6','Negativa','Qual frase está correta?',[['a','They didn’t arrived early.'],['b','They didn’t arrive early.'],['c','They not arrived early.']],'b','Isso. Didn’t já marca o passado; arrive volta à forma básica.','didn’t + verbo base.')}

        <h3>8. Perguntas com did</h3>
        <div class="language-tool">
          <strong class="card-title">Perguntar sobre o passado</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Did + sujeito + verbo?</strong><code>Did you study?</code></div>
            <div class="toolbox-item"><strong>What did...?</strong><code>What did you do?</code></div>
            <div class="toolbox-item"><strong>Where did...?</strong><code>Where did they go?</code></div>
            <div class="toolbox-item"><strong>When did...?</strong><code>When did she arrive?</code></div>
          </div>
        </div>

        <div class="dialogue-box">
          <div class="speech"><small>A</small>What did you do yesterday?</div>
          <div class="speech you"><small>B</small>I studied in the morning and worked in the afternoon.</div>
          <div class="speech"><small>A</small>Did you go out at night?</div>
          <div class="speech you"><small>B</small>No, I didn’t. I stayed home.</div>
        </div>

        ${choice('7','Pergunta','Qual pergunta está correta?',[['a','Where did you went?'],['b','Where you did go?'],['c','Where did you go?']],'c','Correto. Palavra interrogativa + did + sujeito + verbo base.','Did já indica passado; por isso usamos go, não went.')}

        <h3>9. Organizar uma narrativa curta</h3>
        <div class="argument-chain">
          <span>First</span><b>→</b><span>Then</span><b>→</b><span>After that</span><b>→</b><span>Finally</span>
        </div>
        <p>Esses conectores não mudam o tempo verbal, mas ajudam o leitor/ouvinte a reconstruir a sequência.</p>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>10. Conte um acontecimento real</h3>
          <div class="challenge-box">
            <strong class="card-title">Escolha algo simples: ontem, fim de semana, aula, viagem ou ensaio</strong>
            <ol>
              <li>Escreva quando e onde aconteceu.</li>
              <li>Use pelo menos <strong>quatro verbos no passado</strong>.</li>
              <li>Inclua pelo menos <strong>um verbo irregular</strong>.</li>
              <li>Use <strong>first, then, after that ou finally</strong> para organizar.</li>
              <li>Crie uma pergunta com <strong>Did...?</strong> sobre sua história.</li>
            </ol>
            <details><summary>Modelo</summary><p><strong>Last Saturday I went to a music rehearsal. First, we checked the microphones. Then we played three songs. After that, we changed the volume of the guitar. Finally, we recorded a short video. Did we finish early? No, we didn’t.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>relatar fatos concluídos, usar was/were, formar passado regular e reconhecer irregulares básicos, além de perguntar e negar com did/didn’t.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('05 O que', showChapter);
})();