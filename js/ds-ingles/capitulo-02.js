(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Presente',
      technical:'simple present • routines • do/does • adverbs of frequency • time expressions • likes and preferences',
      title:'02 — Minha rotina e preferências',
      objective:'<strong>Objetivo:</strong> falar sobre rotina, hábitos e preferências usando o presente simples; formar perguntas e negativas com <em>do/does</em>; usar frequência e horários.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Agora você já sabe dizer quem é</span>
          <div class="hero-box">
            <strong class="card-title">Mas uma conversa não termina na apresentação.</strong>
            <p>Uma colega pergunta: <strong>“What do you do after school?”</strong> Você quer responder que estuda, toca violão, usa o computador e às vezes vai à academia.</p>
            <p>Para isso, precisamos de um novo recurso: o <strong>simple present</strong>, usado principalmente para rotinas, hábitos, preferências e fatos gerais.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> conseguir descrever um dia comum e perguntar sobre a rotina de outra pessoa.</p>
          </div>
        </section>

        <h3>1. Verbos de rotina</h3>
        <div class="three-col">
          <div class="mini-card"><strong>wake up</strong><p>acordar</p></div>
          <div class="mini-card"><strong>study</strong><p>estudar</p></div>
          <div class="mini-card"><strong>work</strong><p>trabalhar</p></div>
          <div class="mini-card"><strong>have lunch</strong><p>almoçar</p></div>
          <div class="mini-card"><strong>go home</strong><p>ir para casa</p></div>
          <div class="mini-card"><strong>practice</strong><p>praticar</p></div>
          <div class="mini-card"><strong>watch</strong><p>assistir</p></div>
          <div class="mini-card"><strong>play</strong><p>jogar / tocar</p></div>
          <div class="mini-card"><strong>sleep</strong><p>dormir</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Uma rotina simples</strong>
          <p><strong>I wake up at 6:30. I study in the morning. I have lunch at school. In the afternoon, I practice guitar and do my homework. I usually sleep at 11 p.m.</strong></p>
        </div>

        ${choice('1','Sentido','O texto descreve principalmente',[['a','um plano para amanhã'],['b','uma rotina habitual'],['c','um acontecimento de ontem']],'b','Correto. Verbos no simple present com expressões de rotina mostram hábitos recorrentes.','Observe também usually, in the morning e at 11 p.m.')}

        <h3>2. A forma básica é simples</h3>
        <p>Com <strong>I, you, we, they</strong>, usamos normalmente o verbo na forma básica:</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I / You</strong><p>I study every day.</p><p>You work in the afternoon.</p></div>
          <div class="mini-card"><strong>We / They</strong><p>We play volleyball.</p><p>They live in Campinas.</p></div>
        </div>

        <h3>3. He, she, it: aparece o -s</h3>
        <p>Com <strong>he, she, it</strong>, o verbo geralmente recebe <strong>-s</strong> no presente simples.</p>
        <div class="language-tool">
          <strong class="card-title">3ª pessoa do singular</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>play → plays</strong><code>She plays guitar.</code></div>
            <div class="toolbox-item"><strong>work → works</strong><code>He works at night.</code></div>
            <div class="toolbox-item"><strong>watch → watches</strong><code>She watches videos.</code></div>
            <div class="toolbox-item"><strong>study → studies</strong><code>He studies English.</code></div>
            <div class="toolbox-item"><strong>go → goes</strong><code>She goes home at 5.</code></div>
            <div class="toolbox-item"><strong>have → has</strong><code>He has lunch at noon.</code></div>
          </div>
        </div>

        ${choice('2','3ª pessoa','Complete: “My sister ___ English every day.”',[['a','study'],['b','studies'],['c','studying']],'b','Isso. My sister = she, então study muda para studies.','No simple present afirmativo, he/she/it exige atenção à forma do verbo.')}

        <h3>4. Negativas: don’t e doesn’t</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I / You / We / They</strong><p>I <strong>don’t study</strong> at night.</p><p>They <strong>don’t work</strong> on Sundays.</p></div>
          <div class="mini-card"><strong>He / She / It</strong><p>She <strong>doesn’t study</strong> at night.</p><p>He <strong>doesn’t work</strong> on Sundays.</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Depois de does/doesn’t, o verbo volta à forma básica</strong>
          <p>Correto: <strong>She doesn’t play.</strong><br>Não: <s>She doesn’t plays.</s></p>
          <p>O <strong>does</strong> já carrega a marca da 3ª pessoa.</p>
        </div>

        ${choice('3','Negativa','Qual frase está correta?',[['a','He doesn’t likes coffee.'],['b','He doesn’t like coffee.'],['c','He don’t like coffee.']],'b','Correto. Com he usamos doesn’t e o verbo principal fica em sua forma básica: like.','A marca de pessoa está em doesn’t.')}

        <h3>5. Perguntas: do e does entram antes do sujeito</h3>
        <div class="argument-chain">
          <span>You study English.</span><b>→</b><span>Do you study English?</span>
          <span>She plays guitar.</span><b>→</b><span>Does she play guitar?</span>
        </div>

        <div class="dialogue-box">
          <div class="speech"><small>Ana</small>Do you play any instruments?</div>
          <div class="speech you"><small>Leo</small>Yes, I do. I play the guitar.</div>
          <div class="speech"><small>Ana</small>Does your brother play too?</div>
          <div class="speech you"><small>Leo</small>No, he doesn’t. He likes soccer.</div>
        </div>

        ${choice('4','Pergunta','Qual pergunta está correta?',[['a','Does she studies at night?'],['b','Does she study at night?'],['c','She does study at night?']],'b','Isso. Does + she + study.','Depois de does, use a forma básica do verbo.')}

        <h3>6. What, where, when e what time</h3>
        <div class="language-tool">
          <strong class="card-title">Perguntas de rotina</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>O quê?</strong><code>What do you do after school?</code></div>
            <div class="toolbox-item"><strong>Onde?</strong><code>Where do you study?</code></div>
            <div class="toolbox-item"><strong>Quando?</strong><code>When do you exercise?</code></div>
            <div class="toolbox-item"><strong>Que horas?</strong><code>What time do you wake up?</code></div>
          </div>
        </div>

        <h3>7. Frequência: com que regularidade?</h3>
        <div class="argument-chain">
          <span>always</span><b>→</b><span>usually</span><b>→</b><span>often</span><b>→</b><span>sometimes</span><b>→</b><span>rarely</span><b>→</b><span>never</span>
        </div>
        <p>Com verbos comuns, o advérbio costuma aparecer <strong>antes do verbo principal</strong>:</p>
        <div class="mini-card"><p>I <strong>usually study</strong> at night.</p><p>She <strong>sometimes walks</strong> to school.</p><p>They <strong>never drink</strong> coffee.</p></div>

        <p>Com <strong>to be</strong>, a posição muda:</p>
        <div class="mini-card"><p>I am <strong>usually</strong> tired after work.</p><p>He is <strong>always</strong> early.</p></div>

        ${choice('5','Frequência','Qual frase está mais adequada?',[['a','I usually study after dinner.'],['b','I study usually after dinner.'],['c','I am usually study after dinner.']],'a','Correto. Com o verbo study, usually aparece normalmente antes do verbo principal.','Com verbos comuns: sujeito + advérbio de frequência + verbo.')}

        <h3>8. Horários: at, in e on</h3>
        <div class="three-col">
          <div class="mini-card"><strong>at</strong><p><strong>at 7:30</strong><br><strong>at noon</strong><br><strong>at night</strong></p></div>
          <div class="mini-card"><strong>in</strong><p><strong>in the morning</strong><br><strong>in the afternoon</strong><br><strong>in the evening</strong></p></div>
          <div class="mini-card"><strong>on</strong><p><strong>on Monday</strong><br><strong>on weekends</strong><br><strong>on Friday morning</strong></p></div>
        </div>

        ${choice('6','Tempo','Complete: “I have English class ___ Monday morning.”',[['a','at'],['b','in'],['c','on']],'c','Isso. Para dias e combinações com dias usamos on.','Use at para horas, in para partes do dia e on para dias/datas.')}

        <h3>9. Preferências: like, love, prefer, don’t like</h3>
        <div class="source-box">
          <strong class="card-title">Falando de gostos</strong>
          <p>I <strong>like music</strong>.<br>I <strong>love playing guitar</strong>.<br>I <strong>prefer coffee to tea</strong>.<br>I <strong>don’t like waking up early</strong>.</p>
        </div>
        <p>Depois de <strong>like/love</strong>, você pode usar um substantivo (<em>I like music</em>) ou, em muitos casos, verbo com <strong>-ing</strong> (<em>I like reading</em>).</p>

        <h3>10. Produção guiada: seu dia em cinco blocos</h3>
        <div class="challenge-box">
          <strong class="card-title">Monte antes de escrever o texto final</strong>
          <ol>
            <li><strong>Morning:</strong> What time do you wake up? What do you do first?</li>
            <li><strong>School/work:</strong> Where do you study or work?</li>
            <li><strong>Afternoon:</strong> What do you usually do?</li>
            <li><strong>Evening:</strong> What do you do at night?</li>
            <li><strong>Preferences:</strong> What do you like doing?</li>
          </ol>
          <details><summary>Modelo curto</summary><p><strong>I wake up at 6:30. I usually study in the morning. In the afternoon, I work on school projects. I sometimes exercise after class. At night, I practice guitar. I like listening to Brazilian music.</strong></p></details>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>11. Entrevista de rotina</h3>
          <div class="challenge-box">
            <ol>
              <li>Escreva <strong>quatro perguntas</strong> com do/does.</li>
              <li>Faça as perguntas a um colega — ou responda você mesmo se estiver estudando sozinho.</li>
              <li>Depois escreva <strong>quatro frases</strong> sobre a pessoa usando he/she/they.</li>
            </ol>
            <details><summary>Exemplo de transformação</summary><p>Pergunta: <strong>What time do you wake up?</strong><br>Resposta: <strong>I wake up at 7.</strong><br>Relato: <strong>Lucas wakes up at 7.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>descrever hábitos, usar a 3ª pessoa, fazer perguntas com do/does, negar com don’t/doesn’t e falar de frequência.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('02 Minha', showChapter);
})();