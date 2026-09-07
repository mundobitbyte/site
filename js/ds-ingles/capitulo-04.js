(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Agora',
      technical:'present continuous • am/is/are + verb-ing • actions now • spelling • simple present x present continuous',
      title:'04 — O que está acontecendo?',
      objective:'<strong>Objetivo:</strong> descrever ações em andamento usando o presente contínuo e distinguir ações habituais de ações que estão acontecendo agora.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Uma cena em movimento</span>
          <div class="hero-box">
            <strong class="card-title">Você entra no laboratório durante uma aula prática.</strong>
            <p>Alguns alunos estão programando, uma dupla está testando um robô, o professor está ajudando um grupo e alguém está gravando um vídeo.</p>
            <p>Em inglês, para mostrar que uma ação está <strong>acontecendo agora</strong>, usamos normalmente <strong>am/is/are + verbo-ing</strong>.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> conseguir olhar para uma cena e dizer o que cada pessoa está fazendo naquele momento.</p>
          </div>
        </section>

        <h3>1. A estrutura</h3>
        <div class="argument-chain">
          <span>sujeito</span><b>+</b><span>am / is / are</span><b>+</b><span>verbo-ing</span>
        </div>
        <div class="three-col">
          <div class="mini-card"><strong>I</strong><p>I <strong>am studying</strong>.</p></div>
          <div class="mini-card"><strong>He / She / It</strong><p>She <strong>is coding</strong>.</p></div>
          <div class="mini-card"><strong>You / We / They</strong><p>They <strong>are testing</strong>.</p></div>
        </div>

        ${choice('1','Estrutura','Complete: “The students ___ working on a project.”',[['a','is'],['b','are'],['c','do']],'b','Correto. The students = they, então usamos are + working.','No present continuous, o verbo to be concorda com o sujeito.')}

        <h3>2. Como formar o -ing</h3>
        <div class="language-tool">
          <strong class="card-title">Padrões frequentes</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>regra geral</strong><code>work → working</code></div>
            <div class="toolbox-item"><strong>verbo terminado em -e</strong><code>write → writing</code></div>
            <div class="toolbox-item"><strong>alguns verbos curtos</strong><code>run → running</code></div>
            <div class="toolbox-item"><strong>-ie</strong><code>lie → lying</code></div>
          </div>
        </div>
        <p>Não é necessário decorar todas as exceções de uma vez. Aprenda os padrões e confirme formas novas quando surgirem.</p>

        ${choice('2','Forma -ing','Qual forma está correta?',[['a','writeing'],['b','writing'],['c','writting']],'b','Isso. Em write, retiramos o -e final antes de acrescentar -ing.','write → writing.')}

        <h3>3. Observe a cena</h3>
        <div class="source-box">
          <strong class="card-title">Live from the lab</strong>
          <p>Lucas is <strong>connecting</strong> the Arduino. Maya and Pedro are <strong>checking</strong> the code. The teacher is <strong>talking</strong> to another group. Two students are <strong>taking</strong> notes. I am <strong>recording</strong> the test.</p>
        </div>

        ${choice('3','Compreensão','Quem está verificando o código?',[['a','Lucas'],['b','Maya and Pedro'],['c','The teacher']],'b','Correto. Maya and Pedro are checking the code.','Procure o sujeito ligado à ação checking.')}

        <h3>4. Negativas</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Afirmativa</strong><p>He is working.</p><p>They are listening.</p></div>
          <div class="mini-card"><strong>Negativa</strong><p>He <strong>isn’t working</strong>.</p><p>They <strong>aren’t listening</strong>.</p></div>
        </div>
        <p>Com <strong>I</strong>: <em>I’m not working.</em></p>

        ${choice('4','Negativa','Qual frase está correta?',[['a','She doesn’t studying.'],['b','She isn’t studying.'],['c','She not is studying.']],'b','Correto. No present continuous, a negativa é formada no próprio verbo to be: isn’t/aren’t.','Retome a estrutura: be + verb-ing.')}

        <h3>5. Perguntas</h3>
        <div class="argument-chain">
          <span>She is studying.</span><b>→</b><span>Is she studying?</span>
          <span>They are waiting.</span><b>→</b><span>Are they waiting?</span>
        </div>
        <div class="dialogue-box">
          <div class="speech"><small>A</small>What are you doing?</div>
          <div class="speech you"><small>B</small>I’m fixing a bug.</div>
          <div class="speech"><small>A</small>Is the app working now?</div>
          <div class="speech you"><small>B</small>No, it isn’t. I’m checking the login screen.</div>
        </div>

        ${choice('5','Pergunta','Você vê sua colega com um livro aberto. Qual pergunta pode descobrir a ação atual?',[['a','What do you do every day?'],['b','What are you reading?'],['c','Where did you read?']],'b','Isso. What are you reading? pergunta o que está acontecendo neste momento.','A presença de are + reading marca ação em andamento.')}

        <h3>6. Simple present × present continuous</h3>
        <p>Agora precisamos distinguir dois presentes que fazem trabalhos diferentes.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Simple present — hábito</strong><p>I <strong>study</strong> English every day.</p><p>She <strong>works</strong> in the afternoon.</p><p>Marcadores: every day, usually, often, on Mondays.</p></div>
          <div class="mini-card"><strong>Present continuous — agora</strong><p>I <strong>am studying</strong> English now.</p><p>She <strong>is working</strong> right now.</p><p>Marcadores: now, right now, at the moment.</p></div>
        </div>

        ${choice('6','Escolha do tempo','Complete: “My father usually ___ at home, but today he ___ at the office.”',[['a','works / is working'],['b','is working / works'],['c','work / working']],'a','Correto. Usually indica rotina; today, nesta comparação, descreve a situação atual.','Escolha o tempo pela ideia que precisa expressar, não pelo verbo isolado.')}

        <h3>7. Alguns verbos não costumam aparecer no contínuo em certos sentidos</h3>
        <p>Verbos como <strong>know, understand, believe, need, want</strong> frequentemente descrevem estado, pensamento ou necessidade, e em seus sentidos mais comuns costumam aparecer no presente simples:</p>
        <div class="mini-card"><p>I <strong>know</strong> the answer.</p><p>I <strong>understand</strong> the problem.</p><p>We <strong>need</strong> more time.</p></div>
        <div class="note-box"><strong class="card-title">Não transforme isso em regra absoluta</strong><p>Alguns desses verbos podem aparecer no contínuo em usos específicos. Para a base da 1ª série, aprenda primeiro os usos mais frequentes.</p></div>

        <h3>8. Descreva uma imagem mental</h3>
        <div class="challenge-box">
          <strong class="card-title">Cena: intervalo na escola</strong>
          <p>Imagine: dois alunos conversam perto da cantina; uma menina lê; três pessoas jogam vôlei; um professor caminha pelo pátio; você espera um amigo.</p>
          <ol>
            <li>Escreva cinco frases no present continuous.</li>
            <li>Use pelo menos três sujeitos diferentes.</li>
            <li>Depois escreva duas frases de rotina para comparar.</li>
          </ol>
          <details><summary>Modelo parcial</summary><p><strong>Two students are talking near the cafeteria. A girl is reading. Three students are playing volleyball. I am waiting for a friend. I usually have lunch at school, but today I am waiting outside.</strong></p></details>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>9. Relato ao vivo</h3>
          <div class="challenge-box">
            <ol>
              <li>Olhe ao seu redor por 30 segundos.</li>
              <li>Diga em voz alta <strong>três coisas que estão acontecendo agora</strong>.</li>
              <li>Depois diga <strong>duas coisas que você faz habitualmente</strong>.</li>
              <li>Compare: qual tempo verbal você usou em cada grupo e por quê?</li>
            </ol>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>descrever ações em andamento, negar e perguntar no present continuous e diferenciá-lo do simple present.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('04 O que', showChapter);
})();