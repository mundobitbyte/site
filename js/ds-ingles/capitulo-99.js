(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'to be • simple present • description • present continuous • simple past • future • modals • reading • listening • genres • technical vocabulary • production',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> verificar se você consegue usar, e não apenas reconhecer, os principais conhecimentos da 1ª série em situações novas de leitura, escuta, fala e escrita.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Fechamento da 1ª série</span>
          <div class="hero-box">
            <strong class="card-title">Aqui não existe uma única história repetida.</strong>
            <p>Você passará por situações diferentes: apresentação pessoal, rotina, descrição, relato, notícia, planejamento, regras, escuta, tecnologia, texto artístico e comunicação institucional.</p>
            <p class="central-question"><strong>Critério real:</strong> você consegue escolher a língua adequada ao que quer dizer e transferi-la para uma situação nova?</p>
          </div>
        </section>

        <h3>Parte A — Fundamentos que precisam estar firmes</h3>
        ${choice('1','To be','Complete: “My name ___ Gabriel and I ___ a student.”',[['a','is / am'],['b','are / is'],['c','am / are']],'a','Correto. My name = it → is; I → am.','Retome o capítulo 01 se essa combinação ainda não estiver firme.')}
        ${choice('2','Pergunta com to be','Qual pergunta está correta?',[['a','Are they from Brazil?'],['b','Do they are from Brazil?'],['c','They are from Brazil?']],'a','Isso. Com to be, o verbo vem antes do sujeito.','Are + they + complemento.')}
        ${choice('3','Simple present','Complete: “Carla usually ___ to school at 7:10.”',[['a','go'],['b','goes'],['c','is going']],'b','Correto. Carla = she; no hábito usamos simple present e go → goes.','Usually sinaliza rotina; 3ª pessoa pede goes.')}
        ${choice('4','Pergunta no presente','Qual pergunta está correta?',[['a','Does your brother play soccer?'],['b','Does your brother plays soccer?'],['c','Do your brother plays soccer?']],'a','Correto. Does + sujeito + verbo base.','Depois de does, play não recebe -s.')}
        ${choice('5','There is / are','Complete: “___ a library next to the cafeteria and ___ two labs upstairs.”',[['a','There are / there is'],['b','There is / there are'],['c','It is / they are']],'b','Isso. Library é singular; two labs é plural.','There is para singular; there are para plural.')}
        ${choice('6','Some / any','Complete: “There are ___ books on the desk, but there aren’t ___ tablets.”',[['a','some / any'],['b','any / some'],['c','a / an']],'a','Correto. Na base estudada: some em afirmativas; any em negativas e perguntas.','Retome o capítulo 03 se esse contraste ainda confundir.')}
        ${choice('7','Posse','Qual expressão significa “o notebook da professora”?',[['a','the teacher notebook'],['b','the teacher’s notebook'],['c','the teachers notebook is']],'b','Isso. O apóstrofo + s marca posse no singular.','teacher’s notebook = notebook da professora/do professor.')}
        ${choice('8','Preposição','“The backpack is under the desk.” Onde está a mochila?',[['a','embaixo da mesa'],['b','sobre a mesa'],['c','entre duas mesas']],'a','Correto. Under = embaixo de.','Preposições tornam a localização precisa.')}
        ${choice('9','Present continuous','A professora liga e pergunta o que você está fazendo agora. Qual resposta funciona?',[['a','I study every day.'],['b','I’m studying for tomorrow’s test.'],['c','I studied last night.']],'b','Correto. Am + studying descreve a ação em andamento.','Now → present continuous.')}
        ${choice('10','Presente habitual × agora','Complete: “I usually ___ by bus, but today I ___ with my father.”',[['a','go / am going'],['b','am going / go'],['c','went / going']],'a','Isso. Usually pede simple present; hoje, nesta comparação, pede uma ação temporária em andamento.','Escolha o tempo pela ideia de tempo.')}

        <h3>Parte B — Passado e futuro</h3>
        ${choice('11','Was/were','Complete: “We ___ tired after the event, but the presentation ___ successful.”',[['a','was / were'],['b','were / was'],['c','did / was']],'b','Correto. We → were; presentation = it → was.','Passado de to be: was/were.')}
        ${choice('12','Passado irregular','Complete: “Yesterday I ___ my teacher and ___ him the file.”',[['a','see / send'],['b','saw / sent'],['c','seen / sended']],'b','Isso. See → saw; send → sent.','Verbos irregulares precisam ser reciclados em uso.')}
        ${choice('13','Did','Qual pergunta está correta?',[['a','What did you do yesterday?'],['b','What did you did yesterday?'],['c','What you did yesterday?']],'a','Correto. Did já marca o passado; o verbo fica na forma básica.','Palavra interrogativa + did + sujeito + verbo base.')}
        ${choice('14','Going to','Você já decidiu estudar no sábado. Qual frase destaca o plano?',[['a','I’m going to study on Saturday.'],['b','I studied on Saturday tomorrow.'],['c','I am study on Saturday.']],'a','Correto. Be going to + verbo base expressa plano/intenção.','O plano já existe antes da fala.')}
        ${choice('15','Will','O telefone toca e você decide atender. Qual frase é natural?',[['a','I’ll answer it.'],['b','I answered it tomorrow.'],['c','I going answer it.']],'a','Isso. Will funciona bem para decisão que surge naquele momento.','I’ll = I will.')}

        <h3>Parte C — Escolha a força certa</h3>
        ${choice('16','Can','Qual frase fala de capacidade?',[['a','I can speak basic English.'],['b','I should speak basic English.'],['c','I must speak basic English yesterday.']],'a','Correto. Can pode expressar capacidade.','Modal + verbo base.')}
        ${choice('17','Could','Você precisa que a pessoa repita um horário. Qual frase é adequada?',[['a','Could you repeat the time, please?'],['b','You repeat the time.'],['c','Do you can repeat time?']],'a','Correto. Could you...? é um pedido cortês e funcional.','Não use do com can/could.')}
        ${choice('18','Should','Um colega dorme quatro horas por noite. Qual opção é um conselho?',[['a','You should get more sleep.'],['b','You must be sleep.'],['c','You can slept more.']],'a','Isso. Should apresenta recomendação.','Should + verbo base.')}
        ${choice('19','Must × don’t have to','Qual frase significa “Você não precisa imprimir; o arquivo digital é aceito”?',[['a','You must not print it.'],['b','You don’t have to print it.'],['c','You can’t print it.']],'b','Correto. Don’t have to indica ausência de obrigação.','Must not seria proibição.')}

        <h3>Parte D — Leia para resolver</h3>
        <div class="source-box"><strong class="card-title">Community Coding Day</strong><p>Saturday, 9:30 a.m.–2 p.m. — Central Library</p><p>Beginners are welcome. Participants will work in small groups to create a simple website for a local community project. Lunch is provided. You should bring headphones, but you don’t have to bring a computer. Registration closes on September 12.</p></div>
        ${choice('20','Scanning','Você só precisa saber se deve levar computador. Qual informação resolve a dúvida?',[['a','Lunch is provided.'],['b','You don’t have to bring a computer.'],['c','Beginners are welcome.']],'b','Correto. A leitura focada encontra diretamente a regra sobre equipamento.','Não traduza o texto inteiro quando sua pergunta é específica.')}
        ${choice('21','Compreensão','Qual item é recomendado, mas não apresentado como obrigatório?',[['a','Headphones'],['b','A computer'],['c','Lunch']],'a','Isso. You should bring headphones = recomendação.','Should muda a força da informação.')}
        ${choice('22','Prazo','Até quando é possível fazer a inscrição?',[['a','Saturday'],['b','September 12'],['c','2 p.m.']],'b','Correto. Registration closes on September 12.','Transforme a pergunta em palavra-alvo: registration.')}

        <h3>Parte E — Ouça e confirme</h3>
        <div class="source-box">
          <strong class="card-title">Recado curto</strong>
          <p>Ouça uma vez para a ideia geral e outra para os detalhes.</p>
          <div class="quiz-actions"><button class="action-button primary" type="button" data-en-say="Hi everyone. Tomorrow's meeting starts at ten thirty in Room Twelve. Please bring your notes. You don't have to bring a laptop.">Ouvir recado</button></div>
          <div class="mission-feedback" data-en-speech-status aria-live="polite"></div>
          <details><summary>Texto de apoio — abra apenas se o áudio não funcionar ou depois de responder</summary><p>Hi everyone. Tomorrow's meeting starts at ten thirty in Room Twelve. Please bring your notes. You don't have to bring a laptop.</p></details>
        </div>
        ${choice('23','Listening — horário','Que horas começa a reunião?',[['a','10:13'],['b','10:30'],['c','12:30']],'b','Correto. Ten thirty = 10:30.','Treine números e horários como informação específica.')}
        ${choice('24','Listening — obrigação','O que não é necessário levar?',[['a','Notes'],['b','A laptop'],['c','A room']],'b','Isso. You don’t have to bring a laptop.','A escuta também exige reconhecer a força dos modais.')}
        ${choice('25','Reparo','Você não tem certeza se ouviu thirteen ou thirty. O que fazer?',[['a','Adivinhar'],['b','Pedir confirmação'],['c','Ignorar o horário']],'b','Correto. Confirmar um detalhe crítico evita erro.','Use: Could you confirm the number, please?')}

        <h3>Parte F — O gênero muda a forma de organizar a informação</h3>
        <div class="source-box"><strong class="card-title">School News</strong><p>A robotics workshop attracted 40 students on Friday afternoon at the school library. Participants built simple prototypes and presented their results at the end of the event.</p></div>
        ${choice('26','Lead jornalístico','Qual conjunto resume melhor as informações centrais do lead?',[['a','what: workshop; who: 40 students; when: Friday afternoon; where: school library'],['b','what: library; who: Friday; when: robots; where: 40'],['c','O texto não informa tempo nem lugar']],'a','Correto. O lead concentra informações essenciais do acontecimento.','Use what/who/when/where para mapear notícias curtas.')}

        <div class="source-box"><strong class="card-title">Microtexto original</strong><p><em>The last bus leaves.<br>My screen goes dark.<br>For one quiet minute,<br>the city has no notifications.</em></p><p><small>Texto original produzido para o Mundo bit Byte.</small></p></div>
        ${choice('27','Texto artístico','Qual interpretação é sustentada pelo texto?',[['a','A falta temporária de notificações cria um contraste entre movimento urbano e um momento de silêncio'],['b','O texto ensina a consertar um ônibus'],['c','O autor prova que celulares são proibidos na cidade']],'a','Isso. A leitura nasce das imagens e do contraste presentes no texto.','Interpretar não é inventar: use evidências da própria obra.')}

        <h3>Parte G — Inglês técnico e institucional</h3>
        ${choice('28','Vocabulário técnico','Em “Run the app and open the log file”, o que run significa?',[['a','correr fisicamente'],['b','executar o aplicativo'],['c','fechar o programa']],'b','Correto. O contexto técnico define o sentido de run.','Use glossário, documentação e contexto para confirmar sentidos.')}
        ${choice('29','Sigla','Em desenvolvimento de sistemas, API significa',[['a','Application Programming Interface'],['b','Automatic Personal Internet'],['c','Advanced Program Installation']],'a','Correto. É uma sigla técnica frequente.','Siglas devem ser compreendidas no contexto da área.')}
        ${choice('30','Conector','Complete: “The first test failed, ___ we changed the configuration.”',[['a','because'],['b','so'],['c','who']],'b','Correto. O teste falhou; como consequência, a configuração foi alterada.','So introduz consequência.')}
        ${choice('31','Pronome relativo','Complete: “The student ___ created the poster is in my class.”',[['a','who'],['b','which'],['c','where']],'a','Isso. Who retoma pessoa.','Who é frequente para pessoas; which/that para coisas.')}
        ${choice('32','Passiva','Qual frase coloca o projeto como foco?',[['a','Our class created the project last month.'],['b','The project was created by our class last month.'],['c','Our class is creating the project tomorrow.']],'b','Correto. Na passiva, the project ocupa a posição de foco.','Was created = passado passivo.')}

        <div class="source-box"><strong class="card-title">Mensagem institucional</strong><p>Hello, I’m writing to ask about the robotics workshop. I’m a first-year high-school student, and I’m interested in participating. Could you confirm whether beginners can join?</p><p>Thank you for your time.<br>Best regards,<br>Daniel</p></div>
        ${choice('33','Registro','O texto é adequado principalmente porque',[['a','usa clareza, objetivo explícito e pedido cortês'],['b','usa muitas gírias'],['c','evita dizer por que escreve']],'a','Isso. Registro adequado depende de público, objetivo e clareza.','Formalidade aqui serve à comunicação institucional.')}

        <h3>Parte H — Produção: agora não há alternativas</h3>
        <div class="challenge-box"><strong class="card-title">Desafio 1 — Quem é você?</strong><p>Escreva 5 frases: apresentação, origem, uma característica, uma rotina e uma preferência.</p><details><summary>Modelo possível</summary><p><strong>My name is Julia. I’m from São Paulo. I’m curious and organized. I study in the morning. I like music and technology.</strong></p></details></div>

        <div class="challenge-box"><strong class="card-title">Desafio 2 — Três tempos</strong><p>Escreva: uma frase sobre algo que você faz sempre; uma sobre algo que fez ontem; uma sobre um plano para amanhã.</p><details><summary>Modelo possível</summary><p><strong>I study English every week. Yesterday I watched a tutorial in English. Tomorrow I’m going to practice speaking for ten minutes.</strong></p></details></div>

        <div class="challenge-box"><strong class="card-title">Desafio 3 — Um fato em dois gêneros</strong><p>Conte em 4 a 6 frases algo que aconteceu em uma aula, evento, jogo ou ensaio. Depois transforme o mesmo fato em um lead de 1 ou 2 frases com what/who/when/where.</p></div>

        <div class="challenge-box"><strong class="card-title">Desafio 4 — Resolver um problema</strong><p>Imagine que você não entendeu o prazo de um trabalho. Escreva uma pergunta educada para confirmar. Depois dê um conselho a um colega que costuma perder prazos.</p><details><summary>Modelo possível</summary><p><strong>Could you confirm the deadline, please? Do you mean Friday at 6 p.m.? You should write important deadlines in your calendar.</strong></p></details></div>

        <div class="challenge-box"><strong class="card-title">Desafio 5 — Kit de estudo e trabalho</strong><ol><li>Escreva um e-mail curto pedindo uma informação.</li><li>Monte um microglossário com cinco termos técnicos.</li><li>Apresente um projeto em quatro partes: problema, solução, o que aconteceu e próximo passo.</li><li>Grave ou fale a apresentação em 30 a 60 segundos sem ler palavra por palavra.</li></ol></div>

        <div class="challenge-box"><strong class="card-title">Desafio 6 — Interpretar com evidência</strong><p>Escolha um poema, microconto, letra autorizada ou texto artístico curto em inglês. Explique em português ou inglês uma interpretação e indique duas pistas do texto que a sustentam. Não basta traduzir.</p></div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Autocrítica final</span>
          <h3>O que significa terminar bem esta 1ª série?</h3>
          <div class="ok-box"><strong>Você não precisa falar inglês avançado.</strong><p>Mas deve estar mais capaz de <strong>construir frases próprias</strong>, compreender mensagens simples, falar de presente/passado/futuro, fazer perguntas, pedir ajuda, ler e ouvir com objetivo e produzir textos curtos em gêneros diferentes.</p></div>
          <div class="challenge-box"><strong class="card-title">Se ainda depende de modelos para tudo</strong><p>Volte ao capítulo correspondente à dificuldade. A meta não é memorizar os exemplos do MbB: é <strong>transferir a estrutura para sua própria vida</strong>.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();