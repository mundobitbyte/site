(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Aplicação',
      technical:'emails • instructions • technical vocabulary • glossaries • acronyms • connectors • relative pronouns • passive voice • source checking • presentations',
      title:'09 — Inglês para estudar e trabalhar',
      objective:'<strong>Objetivo:</strong> usar o inglês já aprendido em e-mails, documentação, pesquisa e apresentação de projetos, ampliando vocabulário técnico, recursos de consulta, conectores, pronomes relativos e formas passivas frequentes.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">A base agora precisa funcionar fora da aula</span>
          <div class="hero-box">
            <strong class="card-title">Você recebe uma oportunidade de participar de um projeto.</strong>
            <p>Para responder, será preciso ler um aviso, escrever um e-mail, compreender instruções técnicas, apresentar o que já fez e pesquisar informações sem copiar.</p>
            <p>Agora não vamos começar do zero. Vamos <strong>combinar o que você já aprendeu</strong>: presente, passado, futuro, modais, leitura, escuta e comunicação.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> produzir uma comunicação curta, clara e apropriada para estudo ou trabalho.</p>
          </div>
        </section>

        <h3>1. Leia a oportunidade</h3>
        <div class="source-box">
          <strong class="card-title">Student Tech Support Project</strong>
          <p>We are looking for high-school students who are interested in technology and communication. Participants will help organize simple tutorials for new students. Meetings are held online on Wednesdays at 4 p.m. Applicants must send a short introduction and describe one technology skill they already have. Previous work experience is not required.</p>
        </div>
        ${choice('1','Leitura funcional','O que o candidato precisa enviar?',[['a','Um currículo de dez páginas'],['b','Uma apresentação curta e a descrição de uma habilidade em tecnologia'],['c','Um vídeo obrigatório de 30 minutos']],'b','Correto. O texto diz: send a short introduction and describe one technology skill.','Use scanning para localizar must send e os itens que vêm depois.')}
        ${choice('2','Regra','“Previous work experience is not required” significa',[['a','experiência profissional anterior é obrigatória'],['b','experiência anterior não é exigida'],['c','o projeto não aceita estudantes']],'b','Isso. Is not required indica ausência de exigência.','Required é uma palavra frequente em formulários e documentação.')}

        <h3>2. E-mail: objetivo claro, registro adequado</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Chat entre amigos</strong><p><code>hey, wanna know about the project lol</code></p><p>Pode funcionar em conversa muito informal.</p></div>
          <div class="mini-card"><strong>E-mail institucional</strong><p><code>Hello, I’m writing to ask about the Student Tech Support Project.</code></p><p>Mais claro e adequado ao contexto.</p></div>
        </div>
        <div class="language-tool"><strong class="card-title">Blocos úteis para e-mail</strong><div class="toolbox-grid">
          <div class="toolbox-item"><strong>Abertura</strong><code>Hello / Dear...</code></div><div class="toolbox-item"><strong>Objetivo</strong><code>I’m writing to ask about...</code></div>
          <div class="toolbox-item"><strong>Pedido</strong><code>Could you confirm...?</code></div><div class="toolbox-item"><strong>Informação</strong><code>I’m a high-school student and...</code></div>
          <div class="toolbox-item"><strong>Encerramento</strong><code>Thank you for your time.</code></div><div class="toolbox-item"><strong>Despedida</strong><code>Best regards,</code></div>
        </div></div>
        <div class="source-box">
          <strong class="card-title">Exemplo curto</strong>
          <p>Hello,</p><p>I’m writing about the Student Tech Support Project. I’m a high-school student and I’m interested in web development. I can create simple HTML pages, and last semester I developed a small school project.</p><p>Could you confirm whether the Wednesday meetings are recorded?</p><p>Thank you for your time.<br>Best regards,<br>Marina</p>
          <div class="quiz-actions"><button class="action-button" type="button" data-en-say="Hello. I'm writing about the Student Tech Support Project. I'm a high-school student and I'm interested in web development. I can create simple HTML pages, and last semester I developed a small school project. Could you confirm whether the Wednesday meetings are recorded? Thank you for your time. Best regards, Marina.">Ouvir e-mail</button></div>
          <div class="mission-feedback" data-en-speech-status aria-live="polite"></div>
        </div>
        ${choice('3','Registro','Qual frase é mais adequada para pedir uma informação em e-mail institucional?',[['a','hey tell me the time'],['b','Could you confirm the meeting time, please?'],['c','YOU MUST SEND TIME']],'b','Correto. A frase é clara, cortês e adequada ao contexto.','Registro é adequação ao público e à finalidade.')}

        <h3>3. Vocabulário técnico: não memorize sem contexto</h3>
        <p>Em tecnologia, uma mesma palavra comum pode assumir sentido específico. <strong>File</strong> pode ser “arquivo”; <strong>run</strong> pode significar executar um programa; <strong>bug</strong> pode indicar uma falha de software.</p>
        <div class="language-tool"><strong class="card-title">Ferramentas de consulta</strong><div class="toolbox-grid">
          <div class="toolbox-item"><strong>Glossário</strong><p>Lista termos de uma área com definições contextualizadas.</p></div>
          <div class="toolbox-item"><strong>Dicionário bilíngue</strong><p>Ajuda a localizar equivalentes, mas o contexto decide qual sentido serve.</p></div>
          <div class="toolbox-item"><strong>Dicionário monolíngue</strong><p>Explica o termo em inglês e mostra usos e exemplos.</p></div>
          <div class="toolbox-item"><strong>Documentação oficial</strong><p>Mostra como a própria tecnologia usa aquele termo.</p></div>
        </div></div>
        <div class="note-box"><strong class="card-title">O primeiro significado pode estar errado para a situação</strong><p>Antes de escolher uma tradução, pergunte: <strong>qual é o assunto, qual função a palavra exerce e qual significado combina com as palavras ao redor?</strong></p></div>
        ${choice('4','Contexto técnico','Em “Run the application and check the log file”, qual leitura é mais coerente?',[['a','Corra com o aplicativo e verifique uma lima'],['b','Execute o aplicativo e verifique o arquivo de log'],['c','Apague o aplicativo e feche o computador']],'b','Correto. O contexto de software define sentidos técnicos de run e file.','Vocabulário técnico precisa ser interpretado dentro da área.')}

        <h3>4. Siglas e abreviações: pequenas formas, muita informação</h3>
        <div class="three-col">
          <div class="mini-card"><strong>UI</strong><p><em>User Interface</em> — interface do usuário.</p></div>
          <div class="mini-card"><strong>API</strong><p><em>Application Programming Interface</em>.</p></div>
          <div class="mini-card"><strong>FAQ</strong><p><em>Frequently Asked Questions</em> — perguntas frequentes.</p></div>
          <div class="mini-card"><strong>URL</strong><p>endereço de um recurso na web.</p></div>
          <div class="mini-card"><strong>e.g.</strong><p><em>for example</em> — por exemplo.</p></div>
          <div class="mini-card"><strong>i.e.</strong><p><em>that is</em> — isto é.</p></div>
        </div>
        <p>Não presuma que toda sigla é universal. Em um texto importante, confirme a expansão na própria documentação ou em um glossário confiável.</p>
        ${choice('5','Sigla','Em documentação de software, API significa',[['a','Application Programming Interface'],['b','Automatic Personal Internet'],['c','Advanced Password Input']],'a','Isso. A sigla é comum em desenvolvimento de sistemas.','Associe siglas ao contexto técnico e confirme quando houver ambiguidade.')}

        <h3>5. Sinônimos e antônimos ajudam a ler sem traduzir tudo</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Sentidos próximos</strong><p><strong>start / begin</strong><br><strong>error / problem</strong> em certos contextos<br><strong>choose / select</strong> em interfaces.</p></div>
          <div class="mini-card"><strong>Contrastes</strong><p><strong>enable / disable</strong><br><strong>online / offline</strong><br><strong>public / private</strong>.</p></div>
        </div>
        <p>Palavras próximas não são sempre intercambiáveis. A intenção é ampliar repertório e perceber relações de sentido.</p>

        <h3>6. Conectores: faça as frases trabalharem juntas</h3>
        <div class="language-tool"><strong class="card-title">Conectores essenciais</strong><div class="toolbox-grid">
          <div class="toolbox-item"><strong>and</strong><code>I study and I work.</code><p>adição</p></div><div class="toolbox-item"><strong>but</strong><code>It is simple, but useful.</code><p>contraste</p></div>
          <div class="toolbox-item"><strong>because</strong><code>I chose it because it is practical.</code><p>causa</p></div><div class="toolbox-item"><strong>so</strong><code>The file was large, so I compressed it.</code><p>consequência</p></div>
          <div class="toolbox-item"><strong>however</strong><code>It worked. However, we found one bug.</code><p>contraste mais formal</p></div><div class="toolbox-item"><strong>therefore</strong><code>The test failed; therefore, we repeated it.</code><p>conclusão/consequência formal</p></div>
        </div></div>
        ${choice('6','Conector','Complete: “The internet was unstable, ___ we used the recorded presentation.”',[['a','because'],['b','so'],['c','who']],'b','Isso. A instabilidade é causa; usar a gravação é consequência.','So introduz consequência.')}

        <h3>7. Who, which e that: ampliação funcional</h3>
        <p>Você não precisa dominar todas as orações relativas agora. O objetivo é <strong>reconhecer e produzir formas simples</strong> que conectam informações.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>who — pessoas</strong><p>The student <strong>who</strong> created the page is here.</p></div><div class="mini-card"><strong>which / that — coisas</strong><p>The app <strong>that</strong> we tested is free.</p><p>The file <strong>which</strong> contains the data is protected.</p></div></div>
        ${choice('7','Relativo','Complete: “The teacher ___ helped us teaches English.”',[['a','which'],['b','who'],['c','where']],'b','Correto. Who retoma uma pessoa: the teacher.','Who é frequente para pessoas.')}

        <h3>8. Voz passiva: reconhecer o foco do texto</h3>
        <p>A passiva aparece muito em textos técnicos e informativos. Nesta série, o essencial é reconhecer a estrutura e produzir exemplos simples.</p>
        <div class="comparison-grid"><div class="mini-card"><strong>Ativa</strong><p>The team <strong>created</strong> the app.</p><p>Foco em quem realizou a ação.</p></div><div class="mini-card"><strong>Passiva</strong><p>The app <strong>was created</strong> by the team.</p><p>Foco no app/resultado.</p></div></div>
        <div class="concept-box"><strong class="card-title">Estrutura básica</strong><p><strong>to be + particípio passado</strong></p><p>Present: <strong>The file is stored</strong> online.<br>Past: <strong>The file was created</strong> yesterday.</p></div>
        ${choice('8','Passiva','Qual frase destaca o produto, e não quem o criou?',[['a','Students developed the website.'],['b','The website was developed by students.'],['c','Students are going to develop the website.']],'b','Isso. A voz passiva coloca the website como foco.','Em textos técnicos, produto ou processo muitas vezes é o foco.')}

        <h3>9. Documentação: leia para executar</h3>
        <div class="source-box"><strong class="card-title">Project setup</strong><p><strong>Requirements:</strong> Node.js 20 or later.</p><p>1. Clone the repository.<br>2. Run <strong>npm install</strong>.<br>3. Create a <strong>.env</strong> file.<br>4. Start the development server.</p><p><strong>Important:</strong> API keys must not be committed to the repository.</p></div>
        ${choice('9','Execução','Qual é a primeira ação do procedimento?',[['a','Start the server'],['b','Clone the repository'],['c','Commit API keys']],'b','Correto. A lista numerada organiza a sequência.','Em documentação, ordem, requisitos e avisos têm consequência prática.')}
        ${choice('10','Segurança','O que o aviso sobre API keys determina?',[['a','As chaves devem ser publicadas'],['b','As chaves não devem ser enviadas ao repositório'],['c','O projeto não usa arquivos']],'b','Isso. Must not indica proibição.','O modal estudado no capítulo 07 evita um erro técnico real.')}

        <h3>10. Pesquisar: pergunta → busca → fonte → síntese</h3>
        <div class="argument-chain"><span>O que quero saber?</span><b>→</b><span>Que palavras-chave usar?</span><b>→</b><span>Que fonte responde?</span><b>→</b><span>O que a evidência permite afirmar?</span></div>
        <p>Pesquisar em inglês amplia o acesso a documentação, artigos e materiais internacionais. Mas resultado de busca não é automaticamente evidência confiável.</p>
        <div class="three-col"><div class="mini-card"><strong>Documentação oficial</strong><p>Boa para descobrir como uma tecnologia deve funcionar.</p></div><div class="mini-card"><strong>Artigo/estudo</strong><p>Pode apresentar método, dados, resultados e limitações.</p></div><div class="mini-card"><strong>Postagem sem fonte</strong><p>Pode trazer uma pista, mas não deve sustentar sozinha uma conclusão importante.</p></div></div>
        ${choice('11','Fonte','Uma IA fornece uma referência que você não consegue localizar. O que fazer?',[['a','Usá-la porque parece acadêmica'],['b','Verificá-la antes de citar ou usar como evidência'],['c','Inventar o endereço da fonte']],'b','Correto. Referências precisam existir e sustentar o que você atribui a elas.','Ferramentas de IA podem ajudar, mas não substituem verificação.')}

        <h3>11. Parafrasear e apresentar com autoria</h3>
        <div class="comparison-grid"><div class="mini-card"><strong>Original</strong><p>“The test showed that most participants completed the task.”</p></div><div class="mini-card"><strong>Paráfrase possível</strong><p>“According to the test, a majority of participants were able to finish the activity.”</p></div></div>
        <p>A ideia foi reconstruída, mas a fonte continua necessária quando a informação veio de outra pessoa ou documento.</p>
        <div class="source-box">
          <strong class="card-title">Apresentação em quatro partes</strong>
          <p><strong>Problem:</strong> Our school has many rooms, and new visitors sometimes get lost.</p><p><strong>Solution:</strong> We created a simple digital map.</p><p><strong>Test:</strong> Last month, 30 visitors tested the prototype.</p><p><strong>Next step:</strong> We are going to improve the search function.</p>
          <div class="quiz-actions"><button class="action-button" type="button" data-en-say="Problem. Our school has many rooms, and new visitors sometimes get lost. Solution. We created a simple digital map. Test. Last month, thirty visitors tested the prototype. Next step. We are going to improve the search function.">Ouvir apresentação</button></div>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>12. Produza seu kit acadêmico-profissional</h3>
          <div class="challenge-box"><ol><li>Escreva um <strong>e-mail curto</strong> pedindo uma informação sobre curso, projeto ou evento.</li><li>Monte um <strong>microglossário</strong> com cinco termos técnicos reais de uma área que você estuda.</li><li>Escreva quatro instruções para uma tarefa que você conhece.</li><li>Descreva um projeto em quatro partes: <strong>problem, solution, what happened, next step</strong>.</li><li>Use pelo menos dois conectores.</li><li>Inclua uma frase simples com <strong>who/which/that</strong> ou uma passiva.</li><li>Apresente oralmente seu projeto em 30 a 60 segundos.</li></ol><details><summary>Checklist</summary><p>Meu registro combina com o público? Consultei termos técnicos pelo contexto? Entendo as siglas que usei? Os tempos verbais combinam com o momento? Se usei uma fonte, consigo verificá-la?</p></details></div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>usar inglês para responder a uma oportunidade, consultar vocabulário técnico, escrever mensagem institucional, ler documentação, conectar ideias, pesquisar e apresentar um projeto.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('09 Inglês', showChapter);
})();