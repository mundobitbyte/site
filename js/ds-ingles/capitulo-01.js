(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Fundamentos',
      technical:'greetings • subject pronouns • verb to be • contractions • questions • possessive adjectives • personal information',
      title:'01 — Hello! Quem sou eu?',
      objective:'<strong>Objetivo:</strong> cumprimentar, apresentar-se, dizer informações pessoais simples, perguntar sobre outra pessoa e construir frases afirmativas, negativas e interrogativas com o verbo <em>to be</em>.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Primeira situação real</span>
          <div class="hero-box">
            <strong class="card-title">Você entra em uma sala online com estudantes de outras escolas.</strong>
            <p>Uma pessoa abre o microfone e diz: <strong>“Hi! I’m Alex. I’m from Canada. What’s your name?”</strong></p>
            <p>Para participar, você não precisa começar por uma lista enorme de regras. Precisa aprender a montar <strong>mensagens simples e corretas sobre você</strong>.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> ao final, você deverá conseguir se apresentar sem copiar uma frase pronta.</p>
          </div>
        </section>

        <h3>1. Cumprimentar e iniciar uma conversa</h3>
        <div class="language-tool">
          <strong class="card-title">Primeiras expressões</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Hello / Hi</strong><code>Hello! / Hi!</code><p>Olá / Oi.</p></div>
            <div class="toolbox-item"><strong>Good morning</strong><code>Good morning!</code><p>Bom dia.</p></div>
            <div class="toolbox-item"><strong>How are you?</strong><code>How are you?</code><p>Como você está?</p></div>
            <div class="toolbox-item"><strong>Nice to meet you</strong><code>Nice to meet you.</code><p>Prazer em conhecer você.</p></div>
          </div>
        </div>

        <div class="dialogue-box">
          <div class="speech"><small>Alex</small>Hi! I’m Alex. What’s your name?</div>
          <div class="speech you"><small>You</small>Hi! I’m Bruno. Nice to meet you.</div>
          <div class="speech"><small>Alex</small>Nice to meet you too. Are you a student?</div>
          <div class="speech you"><small>You</small>Yes, I am. I’m a high-school student.</div>
        </div>

        ${choice('1','Compreensão','Na pergunta “Are you a student?”, Alex quer saber',[['a','se Bruno é estudante'],['b','onde Bruno mora'],['c','quantos anos Bruno tem']],'a','Correto. Are you...? é uma estrutura usada para perguntar sobre identidade, estado ou característica.','Observe a estrutura completa da pergunta, não apenas palavras isoladas.')}

        <h3>2. Quem está falando? Os pronomes sujeitos</h3>
        <p>Antes do verbo, precisamos indicar quem é a pessoa, o grupo ou a coisa sobre a qual estamos falando.</p>
        <div class="three-col">
          <div class="mini-card"><strong>I</strong><p>eu</p><p><strong>I am</strong> Ronaldo.</p></div>
          <div class="mini-card"><strong>You</strong><p>você / vocês</p><p><strong>You are</strong> here.</p></div>
          <div class="mini-card"><strong>He / She / It</strong><p>ele / ela / isso</p><p><strong>She is</strong> Ana.</p></div>
          <div class="mini-card"><strong>We</strong><p>nós</p><p><strong>We are</strong> students.</p></div>
          <div class="mini-card"><strong>They</strong><p>eles / elas</p><p><strong>They are</strong> friends.</p></div>
          <div class="mini-card"><strong>It</strong><p>coisa, animal, situação</p><p><strong>It is</strong> a computer.</p></div>
        </div>

        ${choice('2','Pronomes','Qual pronome pode substituir “Pedro and Maria”?',[['a','He'],['b','They'],['c','It']],'b','Isso. Duas ou mais pessoas formam um grupo: they.','Pergunte: estou falando de uma pessoa, de mim, de nós ou de um grupo?')}

        <h3>3. O verbo <em>to be</em>: am, is, are</h3>
        <p>O verbo <strong>to be</strong> corresponde principalmente a <strong>ser/estar</strong>. No presente, ele muda conforme o sujeito.</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>I → am</strong><p>I am Brazilian.</p><p>I am tired.</p></div>
          <div class="mini-card"><strong>He / She / It → is</strong><p>She is a teacher.</p><p>It is new.</p></div>
          <div class="mini-card"><strong>You / We / They → are</strong><p>You are welcome.</p><p>We are ready.</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Não traduza “to be” mecanicamente</strong>
          <p><strong>I am a teacher.</strong> = Eu <em>sou</em> professor.</p>
          <p><strong>I am tired.</strong> = Eu <em>estou</em> cansado.</p>
          <p>A situação indica se a ideia é de identidade, característica ou estado.</p>
        </div>

        ${choice('3','Forma correta','Complete: “My school ___ in São Paulo.”',[['a','am'],['b','is'],['c','are']],'b','Correto. My school pode ser retomado por it; por isso usamos is.','He, she e it combinam com is.')}

        <h3>4. Contrações: o inglês que você realmente ouve</h3>
        <p>Na fala e na escrita informal, formas contraídas são muito frequentes.</p>
        <div class="language-tool">
          <strong class="card-title">Forma completa → forma contraída</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>I am</strong><code>I’m</code></div>
            <div class="toolbox-item"><strong>You are</strong><code>You’re</code></div>
            <div class="toolbox-item"><strong>He is / She is</strong><code>He’s / She’s</code></div>
            <div class="toolbox-item"><strong>We are / They are</strong><code>We’re / They’re</code></div>
          </div>
          <p><strong>I’m Ana</strong> e <strong>I am Ana</strong> têm a mesma estrutura gramatical. A contração muda a forma, não o sentido básico.</p>
        </div>

        <div class="note-box">
          <strong class="card-title">Pronúncia útil</strong>
          <p>Não tente pronunciar cada palavra como se estivesse separada. Em <strong>I’m a student</strong>, <em>I’m</em> funciona como uma unidade curta. Ouvir e repetir blocos inteiros ajuda mais do que decorar letras isoladas.</p>
        </div>

        <h3>5. Negar: acrescente <em>not</em></h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Afirmativa</strong><p>I am tired.</p><p>She is Brazilian.</p><p>They are ready.</p></div>
          <div class="mini-card"><strong>Negativa</strong><p>I am <strong>not</strong> tired.</p><p>She is <strong>not</strong> Brazilian.</p><p>They are <strong>not</strong> ready.</p></div>
        </div>
        <p>Também aparecem <strong>isn’t</strong> (= is not) e <strong>aren’t</strong> (= are not).</p>

        ${choice('4','Negativa','Qual frase significa “Nós não estamos atrasados”?',[['a','We not are late.'],['b','We aren’t late.'],['c','We don’t late.']],'b','Isso. Com to be, a negativa é construída com be + not.','Neste caso, não usamos do/does. O próprio verbo to be forma a negativa.')}

        <h3>6. Perguntar: o verbo vem antes do sujeito</h3>
        <div class="argument-chain">
          <span>You are ready.</span><b>→</b><span>Are you ready?</span>
          <span>She is a student.</span><b>→</b><span>Is she a student?</span>
        </div>
        <p>Respostas curtas:</p>
        <div class="two-col">
          <div class="mini-card"><strong>Are you Brazilian?</strong><p>Yes, I am.</p><p>No, I’m not.</p></div>
          <div class="mini-card"><strong>Is he your teacher?</strong><p>Yes, he is.</p><p>No, he isn’t.</p></div>
        </div>

        ${choice('5','Pergunta','Qual pergunta está correta?',[['a','You are from Brazil?'],['b','Are you from Brazil?'],['c','Do you are from Brazil?']],'b','Correto. Com to be, invertemos verbo e sujeito: Are + you.','O verbo to be não precisa de do/does para formar perguntas.')}

        <h3>7. Perguntas com informação</h3>
        <div class="language-tool">
          <strong class="card-title">Perguntas que você realmente usa ao conhecer alguém</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Nome</strong><code>What’s your name?</code></div>
            <div class="toolbox-item"><strong>Origem</strong><code>Where are you from?</code></div>
            <div class="toolbox-item"><strong>Idade</strong><code>How old are you?</code></div>
            <div class="toolbox-item"><strong>Ocupação</strong><code>Are you a student?</code></div>
          </div>
        </div>
        <p>Observe <strong>your</strong> em <em>your name</em>. É um adjetivo possessivo: indica que o nome pertence à pessoa com quem falamos.</p>
        <div class="mini-card"><strong>Primeiros possessivos</strong><p><strong>my</strong> name = meu nome • <strong>your</strong> name = seu nome • <strong>his</strong> name = nome dele • <strong>her</strong> name = nome dela • <strong>our</strong> school = nossa escola • <strong>their</strong> project = projeto deles.</p></div>

        ${choice('6','Pergunta pessoal','Qual resposta combina com “Where are you from?”',[['a','I’m from Brazil.'],['b','I’m 16 years old.'],['c','My name is Lucas.']],'a','Isso. Where pergunta sobre lugar/origem.','Associe a palavra interrogativa ao tipo de informação pedido.')}

        <h3>8. Monte sua apresentação em camadas</h3>
        <div class="source-box">
          <strong class="card-title">Modelo</strong>
          <p><strong>Hello! My name is Laura. I’m 16 years old. I’m from Campinas, Brazil. I’m a high-school student. My favorite subject is Biology. I’m interested in music and technology.</strong></p>
        </div>
        <p>Não decore o parágrafo. Desmonte-o:</p>
        <div class="argument-chain">
          <span>My name is...</span><b>+</b><span>I’m ... years old.</span><b>+</b><span>I’m from...</span><b>+</b><span>I’m a...</span><b>+</b><span>My favorite ... is...</span>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>9. Sua primeira produção real</h3>
          <div class="challenge-box">
            <strong class="card-title">Faça sem copiar o modelo inteiro</strong>
            <ol>
              <li>Escreva de 4 a 6 frases apresentando você.</li>
              <li>Inclua pelo menos duas formas do verbo <em>to be</em>.</li>
              <li>Escreva uma pergunta que você faria a outra pessoa.</li>
              <li>Leia em voz alta duas vezes: primeiro devagar; depois tentando unir as palavras em blocos.</li>
            </ol>
            <details><summary>Checklist de revisão</summary><p>Usei <strong>I am/I’m</strong> para falar de mim? Usei <strong>is</strong> com he/she/it e <strong>are</strong> com you/we/they? Em perguntas com <em>to be</em>, coloquei o verbo antes do sujeito?</p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>cumprimentar, dizer quem é, negar uma informação, perguntar algo simples e responder usando <em>to be</em>.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('01 Hello!', showChapter);
})();