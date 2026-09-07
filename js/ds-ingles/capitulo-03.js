(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Descrever',
      technical:'adjectives • have/has • articles • plurals • there is/there are • some/any • possessive s • prepositions • demonstratives',
      title:'03 — Pessoas, lugares e coisas',
      objective:'<strong>Objetivo:</strong> descrever pessoas, objetos e ambientes usando adjetivos, <em>have/has</em>, artigos, plurais, <em>there is/there are</em>, <em>some/any</em>, posse e preposições de lugar.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Uma tarefa diferente</span>
          <div class="hero-box">
            <strong class="card-title">Um visitante pergunta como é o laboratório da sua escola.</strong>
            <p>Você já sabe dizer quem é e contar sua rotina. Agora precisa explicar <strong>como uma pessoa ou lugar é</strong>, <strong>o que existe nele</strong> e <strong>onde cada coisa está</strong>.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> criar uma descrição que permita a outra pessoa imaginar um ambiente sem vê-lo.</p>
          </div>
        </section>

        <h3>1. Adjetivos: dizer como alguém ou algo é</h3>
        <div class="three-col">
          <div class="mini-card"><strong>big / small</strong><p>grande / pequeno</p></div>
          <div class="mini-card"><strong>new / old</strong><p>novo / velho</p></div>
          <div class="mini-card"><strong>quiet / noisy</strong><p>silencioso / barulhento</p></div>
          <div class="mini-card"><strong>friendly</strong><p>amigável</p></div>
          <div class="mini-card"><strong>organized</strong><p>organizado</p></div>
          <div class="mini-card"><strong>interesting</strong><p>interessante</p></div>
        </div>
        <div class="concept-box">
          <strong class="card-title">Dois padrões importantes</strong>
          <p>O adjetivo normalmente não muda entre masculino e feminino: <strong>He is friendly. / She is friendly.</strong></p>
          <p>Antes de um substantivo, costuma vir primeiro: <strong>a quiet room</strong>, <strong>a new computer</strong>.</p>
        </div>
        ${choice('1','Ordem','Qual expressão significa “um computador novo”?',[['a','a computer new'],['b','a new computer'],['c','an new computer']],'b','Correto. O padrão é artigo + adjetivo + substantivo.','Em inglês, o adjetivo normalmente aparece antes do substantivo nessa estrutura.')}

        <h3>2. Have e has: dizer o que alguém possui ou apresenta</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I / You / We / They → have</strong><p>I have a notebook.</p><p>They have two dogs.</p></div>
          <div class="mini-card"><strong>He / She / It → has</strong><p>She has long hair.</p><p>The lab has twenty computers.</p></div>
        </div>
        ${choice('2','Have ou has','Complete: “My teacher ___ a new laptop.”',[['a','have'],['b','has'],['c','is have']],'b','Isso. My teacher = he/she, então usamos has.','Retome a 3ª pessoa: he/she/it → has.')}

        <h3>3. A/an: um elemento não específico</h3>
        <p>Use <strong>a</strong> antes de som consonantal e <strong>an</strong> antes de som vocálico.</p>
        <div class="two-col">
          <div class="mini-card"><strong>a</strong><p>a computer<br>a student<br>a university</p></div>
          <div class="mini-card"><strong>an</strong><p>an app<br>an English class<br>an hour</p></div>
        </div>
        <div class="note-box"><strong class="card-title">É o som que importa</strong><p><strong>university</strong> começa com som de /y/: <em>a university</em>. <strong>hour</strong> tem h não pronunciado: <em>an hour</em>.</p></div>
        ${choice('3','Artigo','Qual opção está correta?',[['a','an computer'],['b','a app'],['c','an English teacher']],'c','Correto. English começa com som vocálico.','Observe o som inicial da palavra seguinte.')}

        <h3>4. Plural: mais de um</h3>
        <div class="language-tool">
          <strong class="card-title">Primeiros padrões</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>-s</strong><code>computer → computers</code></div>
            <div class="toolbox-item"><strong>-es</strong><code>box → boxes</code></div>
            <div class="toolbox-item"><strong>-y → -ies</strong><code>city → cities</code></div>
            <div class="toolbox-item"><strong>irregular</strong><code>person → people</code></div>
          </div>
        </div>

        <h3>5. There is / There are: dizer o que existe</h3>
        <div class="source-box">
          <strong class="card-title">Imagine este laboratório</strong>
          <p><strong>There is a projector on the wall. There are twelve computers on the desks. There is a printer near the door. There are two windows.</strong></p>
          <div class="quiz-actions"><button class="action-button" type="button" data-en-say="There is a projector on the wall. There are twelve computers on the desks. There is a printer near the door. There are two windows.">Ouvir descrição</button></div>
          <div class="mission-feedback" data-en-speech-status aria-live="polite"></div>
        </div>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Singular</strong><p><strong>There is</strong> a printer.</p><p><strong>There isn’t</strong> a TV.</p></div>
          <div class="mini-card"><strong>Plural</strong><p><strong>There are</strong> two windows.</p><p><strong>There aren’t</strong> any tablets.</p></div>
        </div>
        ${choice('4','Existência','Complete: “___ three chairs near the table.”',[['a','There is'],['b','There are'],['c','They are']],'b','Isso. Three chairs é plural, então usamos there are.','There is = existe um; there are = existem vários.')}

        <h3>6. Some e any: quantidade sem número exato</h3>
        <p>Essas palavras aparecem o tempo todo com <em>there is/there are</em>. Para começar, use este padrão frequente:</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>some — afirmativas</strong><p>There are <strong>some</strong> books on the table.</p><p>There is <strong>some</strong> water here.</p></div>
          <div class="mini-card"><strong>any — perguntas e negativas</strong><p>Are there <strong>any</strong> tablets?</p><p>There aren’t <strong>any</strong> tablets.</p></div>
        </div>
        <p>Existem outros usos de <em>some/any</em>, mas esse padrão resolve grande parte das situações iniciais.</p>
        ${choice('5','Some ou any','Complete: “Are there ___ computers available?”',[['a','some'],['b','any'],['c','a']],'b','Correto. Em uma pergunta neutra desse tipo, any é a forma esperada.','Perguntas e negativas costumam usar any nessa base inicial.')}

        <h3>7. Perguntar se algo existe</h3>
        <div class="argument-chain"><span>There is a printer.</span><b>→</b><span>Is there a printer?</span><span>There are computers.</span><b>→</b><span>Are there computers?</span></div>
        <p>Respostas curtas: <strong>Yes, there is. / No, there isn’t. / Yes, there are. / No, there aren’t.</strong></p>
        ${choice('6','Pergunta','Você quer saber se há Wi-Fi no laboratório. Qual pergunta funciona?',[['a','Is there Wi-Fi in the lab?'],['b','Does there Wi-Fi in the lab?'],['c','Are Wi-Fi there?']],'a','Correto. Is there...? pergunta pela existência de algo singular ou incontável.','A estrutura começa com Is there...?')}

        <h3>8. Posse e localização</h3>
        <div class="concept-box"><strong class="card-title">’s mostra posse</strong><p><strong>the teacher’s desk</strong> = a mesa do professor; <strong>Maria’s notebook</strong> = o caderno da Maria.</p><p>Para plural regular terminado em -s, é comum aparecer apenas o apóstrofo: <strong>the students’ projects</strong>.</p></div>
        <div class="three-col">
          <div class="mini-card"><strong>in</strong><p>in the box<br>dentro de</p></div>
          <div class="mini-card"><strong>on</strong><p>on the table<br>sobre</p></div>
          <div class="mini-card"><strong>under</strong><p>under the desk<br>embaixo</p></div>
          <div class="mini-card"><strong>next to</strong><p>next to the door<br>ao lado</p></div>
          <div class="mini-card"><strong>between</strong><p>between two desks<br>entre</p></div>
          <div class="mini-card"><strong>in front of / behind</strong><p>na frente de / atrás de</p></div>
        </div>
        ${choice('7','Localização','Se a mochila está “under the chair”, ela está',[['a','sobre a cadeira'],['b','embaixo da cadeira'],['c','ao lado da cadeira']],'b','Correto. Under indica posição inferior.','Associe a preposição à relação espacial.')}

        <h3>9. This, that, these, those</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Perto</strong><p><strong>this</strong> computer = este computador</p><p><strong>these</strong> computers = estes computadores</p></div>
          <div class="mini-card"><strong>Mais distante</strong><p><strong>that</strong> computer = aquele computador</p><p><strong>those</strong> computers = aqueles computadores</p></div>
        </div>
        ${choice('8','Demonstrativos','Você aponta para dois livros que estão perto. Qual expressão combina?',[['a','this books'],['b','these books'],['c','that books']],'b','Isso. These é plural e indica proximidade.','This/these = perto; that/those = mais distante.')}

        <h3>10. Descrever pessoas com cuidado</h3>
        <div class="dialogue-box"><div class="speech"><small>Student A</small>What is your new teacher like?</div><div class="speech you"><small>Student B</small>She is friendly and organized. She has short dark hair. Her classes are interesting.</div></div>
        <p><strong>What is ... like?</strong> pergunta como alguém ou algo é. Não confunda com <strong>What does ... like?</strong>, que pergunta do que alguém gosta.</p>
        ${choice('9','Sentido','“What is your school like?” pede principalmente',[['a','uma descrição da escola'],['b','o endereço exato'],['c','o horário de entrada']],'a','Correto. What is ... like? solicita uma descrição geral.','A palavra like aqui faz parte de uma expressão de descrição.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>11. Descreva um lugar real</h3>
          <div class="challenge-box">
            <strong class="card-title">Escolha: sua sala, laboratório, quarto ou estúdio</strong>
            <ol><li>Escreva duas frases com <em>there is/there are</em>.</li><li>Use <em>some</em> ou <em>any</em> quando fizer sentido.</li><li>Use três preposições de lugar.</li><li>Inclua dois adjetivos e uma frase com <em>have/has</em>.</li><li>Leia para alguém — ou grave sua própria voz — e veja se a descrição permite imaginar o ambiente.</li></ol>
            <details><summary>Modelo</summary><p><strong>My classroom is large and bright. There are some desks near the windows. There is a projector on the wall. The teacher’s desk is in front of the class. The room has two big windows.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>descrever características, posse, existência, quantidade indefinida e localização sem depender de tradução palavra por palavra.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('03 Pessoas', showChapter);
})();