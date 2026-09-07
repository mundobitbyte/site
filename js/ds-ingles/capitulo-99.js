(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'to be • simple present • descriptions • present continuous • simple past • future • modals • reading • communication • production',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> verificar se você consegue usar, e não apenas reconhecer, os principais conhecimentos da 1ª série em situações novas de comunicação.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Fechamento da 1ª série</span>
          <div class="hero-box">
            <strong class="card-title">Aqui não existe uma única história repetida.</strong>
            <p>Você passará por situações diferentes: apresentação pessoal, rotina, descrição, relato, planejamento, regras, leitura, tecnologia e comunicação institucional.</p>
            <p class="central-question"><strong>Critério real:</strong> você consegue escolher a língua adequada ao que quer dizer?</p>
          </div>
        </section>

        <h3>Parte A — Fundamentos que precisam estar automáticos</h3>

        ${choice('1','To be','Complete: “My name ___ Gabriel and I ___ a student.”',[['a','is / am'],['b','are / is'],['c','am / are']],'a','Correto. My name = it → is; I → am.','Retome o capítulo 01 se essa combinação ainda não estiver automática.')}

        ${choice('2','Pergunta com to be','Qual pergunta está correta?',[['a','Are they from Brazil?'],['b','Do they are from Brazil?'],['c','They are from Brazil?']],'a','Isso. Com to be, o verbo vem antes do sujeito.','Are + they + complemento.')}

        ${choice('3','Simple present','Complete: “Carla usually ___ to school at 7:10.”',[['a','go'],['b','goes'],['c','is going']],'b','Correto. Carla = she; no hábito usamos simple present e go → goes.','Usually sinaliza rotina; 3ª pessoa pede goes.')}

        ${choice('4','Pergunta no presente','Qual pergunta está correta?',[['a','Does your brother play soccer?'],['b','Does your brother plays soccer?'],['c','Do your brother plays soccer?']],'a','Correto. Does + sujeito + verbo base.','Depois de does, play não recebe -s.')}

        ${choice('5','There is / are','Complete: “___ a library next to the cafeteria and ___ two labs upstairs.”',[['a','There are / there is'],['b','There is / there are'],['c','It is / they are']],'b','Isso. Library é singular; two labs é plural.','There is para singular; there are para plural.')}

        ${choice('6','Preposição','“The backpack is under the desk.” Onde está a mochila?',[['a','embaixo da mesa'],['b','sobre a mesa'],['c','entre duas mesas']],'a','Correto. Under = embaixo de.','Preposições transformam descrição em localização precisa.')}

        ${choice('7','Present continuous','A professora liga e pergunta o que você está fazendo agora. Qual resposta funciona?',[['a','I study every day.'],['b','I’m studying for tomorrow’s test.'],['c','I studied last night.']],'b','Correto. Am + studying descreve a ação em andamento.','Now → present continuous.')}

        ${choice('8','Presente habitual × agora','Complete: “I usually ___ by bus, but today I ___ with my father.”',[['a','go / am going'],['b','am going / go'],['c','went / going']],'a','Isso. Usually pede simple present; today, nesta situação, descreve uma ação temporária atual.','O tempo verbal segue a ideia de tempo.')}

        <h3>Parte B — O tempo muda, a língua muda</h3>

        ${choice('9','Was/were','Complete: “We ___ tired after the event, but the presentation ___ successful.”',[['a','was / were'],['b','were / was'],['c','did / was']],'b','Correto. We → were; presentation = it → was.','Passado de to be: was/were.')}

        ${choice('10','Passado irregular','Complete: “Yesterday I ___ my teacher and ___ him the file.”',[['a','see / send'],['b','saw / sent'],['c','seen / sended']],'b','Isso. See → saw; send → sent.','Verbos irregulares precisam ser aprendidos em uso.')}

        ${choice('11','Did','Qual pergunta está correta?',[['a','What did you do yesterday?'],['b','What did you did yesterday?'],['c','What you did yesterday?']],'a','Correto. Did já marca o passado; o verbo fica em sua forma básica: do.','Palavra interrogativa + did + sujeito + verbo base.')}

        ${choice('12','Going to','Você já decidiu estudar no sábado. Qual frase destaca o plano?',[['a','I’m going to study on Saturday.'],['b','I studied on Saturday tomorrow.'],['c','I am study on Saturday.']],'a','Correto. Be going to + verbo base expressa plano/intenção.','O plano já existe antes da fala.')}

        ${choice('13','Will','O telefone toca e você decide atender. Qual frase é natural?',[['a','I’ll answer it.'],['b','I answered it tomorrow.'],['c','I going answer it.']],'a','Isso. Will funciona bem para uma decisão que surge naquele momento.','I’ll = I will.')}

        <h3>Parte C — Escolha a força certa</h3>

        ${choice('14','Can','Qual frase fala de capacidade?',[['a','I can speak basic English.'],['b','I should speak basic English.'],['c','I must speak basic English yesterday.']],'a','Correto. Can pode expressar capacidade.','Modal + verbo base.')}

        ${choice('15','Could','Você precisa que a pessoa repita um horário. Qual frase é adequada?',[['a','Could you repeat the time, please?'],['b','You repeat the time.'],['c','Do you can repeat time?']],'a','Correto. Could you...? é um pedido cortês e funcional.','Não use do com can/could.')}

        ${choice('16','Should','Um colega dorme quatro horas por noite. Qual opção é um conselho?',[['a','You should get more sleep.'],['b','You must be sleep.'],['c','You can slept more.']],'a','Isso. Should apresenta recomendação.','Should + verbo base.')}

        ${choice('17','Must × don’t have to','Qual frase significa “Você não precisa imprimir; o arquivo digital é aceito”?',[['a','You must not print it.'],['b','You don’t have to print it.'],['c','You can’t print it.']],'b','Correto. Don’t have to indica ausência de obrigação.','Must not seria proibição; aqui imprimir é apenas desnecessário.')}

        <h3>Parte D — Leia para resolver</h3>
        <div class="source-box">
          <strong class="card-title">Community Coding Day</strong>
          <p>Saturday, 9:30 a.m.–2 p.m. — Central Library</p>
          <p>Beginners are welcome. Participants will work in small groups to create a simple website for a local community project. Lunch is provided. You should bring headphones, but you don’t have to bring a computer. Registration closes on September 12.</p>
        </div>

        ${choice('18','Scanning','Você só precisa saber se deve levar computador. Qual informação resolve a dúvida?',[['a','Lunch is provided.'],['b','You don’t have to bring a computer.'],['c','Beginners are welcome.']],'b','Correto. A leitura focada encontra diretamente a regra sobre equipamento.','Não traduza o texto inteiro quando sua pergunta é específica.')}

        ${choice('19','Compreensão','Qual item é recomendado, mas não apresentado como obrigatório?',[['a','Headphones'],['b','A computer'],['c','Lunch']],'a','Isso. You should bring headphones = recomendação.','Should muda a força da informação.')}

        ${choice('20','Prazo','Até quando é possível fazer a inscrição?',[['a','Saturday'],['b','September 12'],['c','2 p.m.']],'b','Correto. Registration closes on September 12.','Transforme a pergunta em palavra-alvo: registration.')}

        <h3>Parte E — Comunicação em contexto</h3>
        <div class="dialogue-box">
          <div class="speech"><small>Coordinator</small>The meeting has been moved to thirteen thirty.</div>
          <div class="speech you"><small>You</small>Sorry, could you confirm the time? Do you mean 1:30 p.m.?</div>
          <div class="speech"><small>Coordinator</small>Yes, exactly. One thirty p.m.</div>
        </div>

        ${choice('21','Estratégia','Por que a resposta do aluno é boa?',[['a','Porque ele finge que entendeu'],['b','Porque confirma um detalhe que poderia causar erro'],['c','Porque muda de assunto']],'b','Correto. Reparar e confirmar fazem parte da comunicação competente.','Entender parcialmente não obriga você a adivinhar.')}

        <div class="source-box">
          <strong class="card-title">Mensagem institucional</strong>
          <p>Hello, I’m writing to ask about the robotics workshop. I’m a first-year high-school student, and I’m interested in participating. Could you confirm whether beginners can join?</p>
          <p>Thank you for your time.<br>Best regards,<br>Daniel</p>
        </div>

        ${choice('22','Registro','O texto é adequado principalmente porque',[['a','usa clareza, objetivo explícito e pedido cortês'],['b','usa muitas gírias'],['c','evita dizer por que escreve']],'a','Isso. Registro adequado depende de público, objetivo e clareza.','Formalidade aqui serve à comunicação institucional.')}

        <h3>Parte F — Gramática em textos reais</h3>

        ${choice('23','Conector','Complete: “The first test failed, ___ we changed the configuration.”',[['a','because'],['b','so'],['c','who']],'b','Correto. O teste falhou; como consequência, a configuração foi alterada.','So liga causa anterior a consequência.')}

        ${choice('24','Pronome relativo','Complete: “The student ___ created the poster is in my class.”',[['a','who'],['b','which'],['c','where']],'a','Isso. Who retoma pessoa.','Who é frequente para pessoas; which/that para coisas.')}

        ${choice('25','Passiva','Qual frase coloca o projeto como foco?',[['a','Our class created the project last month.'],['b','The project was created by our class last month.'],['c','Our class is creating the project tomorrow.']],'b','Correto. Na passiva, the project ocupa a posição de foco.','Was created = passado passivo.')}

        <h3>Parte G — Produção: agora não há alternativas</h3>
        <div class="challenge-box">
          <strong class="card-title">Desafio 1 — Quem é você?</strong>
          <p>Escreva 5 frases: apresentação, origem, uma característica, uma rotina e uma preferência.</p>
          <details><summary>Modelo possível</summary><p><strong>My name is Julia. I’m from São Paulo. I’m curious and organized. I study in the morning. I like music and technology.</strong></p></details>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio 2 — Três tempos</strong>
          <p>Escreva: uma frase sobre algo que você faz sempre; uma sobre algo que fez ontem; uma sobre um plano para amanhã.</p>
          <details><summary>Modelo possível</summary><p><strong>I study English every week. Yesterday I watched a tutorial in English. Tomorrow I’m going to practice speaking for ten minutes.</strong></p></details>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio 3 — Resolver um problema</strong>
          <p>Imagine que você não entendeu o prazo de um trabalho. Escreva uma pergunta educada para confirmar. Depois dê um conselho a um colega que costuma perder prazos.</p>
          <details><summary>Modelo possível</summary><p><strong>Could you confirm the deadline, please? Do you mean Friday at 6 p.m.? You should write important deadlines in your calendar.</strong></p></details>
        </div>

        <div class="challenge-box">
          <strong class="card-title">Desafio 4 — Miniapresentação de projeto</strong>
          <p>Escreva quatro partes: <strong>o problema atual → o que vocês fizeram → resultado → próximo passo</strong>.</p>
          <details><summary>Modelo possível</summary><p><strong>Our school has many classrooms, and new visitors sometimes get lost. Last month, we created a simple digital map. Thirty people tested it and most users completed the route. Next month, we are going to improve the search function.</strong></p></details>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Autocrítica final</span>
          <h3>O que significa terminar bem esta 1ª série?</h3>
          <div class="ok-box">
            <strong>Você não precisa falar inglês avançado.</strong>
            <p>Mas deve estar mais capaz de <strong>construir frases próprias</strong>, compreender mensagens simples, falar de presente/passado/futuro, fazer perguntas, pedir ajuda, ler com objetivo e produzir textos curtos para situações reais.</p>
          </div>
          <div class="challenge-box">
            <strong class="card-title">Se ainda depende de modelos para tudo</strong>
            <p>Volte ao capítulo correspondente à dificuldade. A meta não é memorizar os exemplos do MbB: é conseguir <strong>transferir a estrutura para sua própria vida</strong>.</p>
          </div>
        </section>
      `
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();