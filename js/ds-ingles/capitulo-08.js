(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function showChapter() {
    MBB.showLesson({
      unit:'Comunicação',
      technical:'skimming • scanning • listening for gist • listening for details • pronunciation • contractions • -ed endings • repair strategies • Englishes',
      title:'08 — Ler, ouvir e conversar melhor',
      objective:'<strong>Objetivo:</strong> integrar a língua aprendida até aqui para ler com estratégia, ouvir ideias gerais e detalhes, melhorar a inteligibilidade da fala e reparar mal-entendidos sem depender de tradução palavra por palavra.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Agora a língua começa a funcionar junta</span>
          <div class="hero-box">
            <strong class="card-title">Você já constrói frases no presente, passado e futuro.</strong>
            <p>O próximo passo é usar essa base em textos e falas reais. Ler e ouvir bem não significa reconhecer 100% das palavras; significa combinar <strong>gramática, vocabulário, contexto e objetivo</strong>.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> compreender o essencial de uma mensagem e responder de forma clara, mesmo quando alguma palavra escapar.</p>
          </div>
        </section>

        <h3>1. Leitura global: descubra o assunto primeiro</h3>
        <div class="source-box">
          <strong class="card-title">School Tech Club — Saturday Workshop</strong>
          <p>Join our beginner-friendly workshop this Saturday from 9 a.m. to noon. Students will build a simple mobile interface, test it in pairs and share the results. You don’t have to bring a laptop; the school will provide computers. Registration closes on Thursday.</p>
        </div>
        <p>Antes de traduzir, observe palavras de alta informação: <strong>workshop, Saturday, 9 a.m., students, mobile interface, computers, registration</strong>.</p>

        ${choice('1','Skimming','Qual é a ideia geral do texto?',[['a','Uma oficina de tecnologia para estudantes'],['b','Uma notícia sobre um computador quebrado'],['c','Uma propaganda de viagem']],'a','Correto. O conjunto de palavras e a organização apontam para uma oficina escolar de tecnologia.','Skimming busca assunto e finalidade antes dos detalhes.')}

        <h3>2. Scanning: procure apenas o dado necessário</h3>
        <p>Se sua pergunta é <strong>“Quando termina a inscrição?”</strong>, não há motivo para reler cada frase. Procure a palavra <strong>registration</strong> e o marcador de tempo associado.</p>

        ${choice('2','Scanning','Quando termina a inscrição?',[['a','Saturday'],['b','Thursday'],['c','Noon']],'b','Isso. Registration closes on Thursday.','Scanning transforma uma pergunta em palavras-alvo e dados específicos.')}

        <div class="concept-box">
          <strong class="card-title">Estratégia não substitui conhecimento linguístico</strong>
          <p>Você consegue localizar <strong>Thursday</strong> porque reconhece palavras, estrutura e contexto. Quanto mais língua você aprende, melhor as estratégias funcionam. O objetivo não é “adivinhar inglês”: é usar o que já sabe com eficiência.</p>
        </div>

        <h3>3. Escutar primeiro para a ideia geral</h3>
        <p>Nos áudios abaixo, não tente escrever tudo. Na primeira escuta, responda apenas à pergunta indicada.</p>

        <div class="mission-box" data-listening-lab>
          <div class="mission-head"><div><span class="mission-badge">Listening lab</span><strong class="card-title">Ouça com uma missão</strong></div></div>

          <div data-audio-task data-text="Hi everyone. Tomorrow's robotics practice starts at three thirty in Lab Two. Please bring your project notes, but you don't have to bring a laptop.">
            <p><strong>Áudio A — ideia geral:</strong> o recado fala principalmente sobre o quê?</p>
            <div class="quiz-actions"><button class="action-button primary" type="button" data-say>Ouvir</button><button class="action-button" type="button" data-say-slow>Mais devagar</button></div>
          </div>

          ${choice('3','Ideia geral','Qual é o assunto principal do Áudio A?',[['a','Informações para uma prática de robótica'],['b','Uma viagem de férias'],['c','Uma receita']],'a','Correto. Mesmo antes de captar todos os detalhes, robotics practice, starts e Lab Two definem o assunto.','Na primeira escuta, procure tema e finalidade.')}

          <div data-audio-task data-text="The meeting is on Friday at ten fifteen. We are going to review the prototype first, and then Maya will present the user test results.">
            <p><strong>Áudio B — detalhes:</strong> ouça procurando dia, horário e ordem das atividades.</p>
            <div class="quiz-actions"><button class="action-button primary" type="button" data-say>Ouvir</button><button class="action-button" type="button" data-say-slow>Mais devagar</button></div>
          </div>

          ${choice('4','Detalhe','Que horas é a reunião?',[['a','10:50'],['b','10:15'],['c','3:15']],'b','Isso. A informação específica é ten fifteen.','Números e horários exigem atenção focada.')}
          ${choice('5','Ordem','O que acontece primeiro?',[['a','Maya apresenta os testes'],['b','O grupo revisa o protótipo'],['c','A reunião é cancelada']],'b','Correto. First marca a primeira ação; then introduz a seguinte.','Marcadores de sequência ajudam a reconstruir a fala.')}

          <div class="mission-feedback" data-speech-status aria-live="polite"></div>
        </div>

        <h3>4. Quando uma palavra some, continue ouvindo</h3>
        <div class="note-box">
          <strong class="card-title">Evite o efeito dominó</strong>
          <p>Se você perde uma palavra e continua pensando nela, pode perder também as frases seguintes. Pergunte: <strong>essa palavra é essencial para a tarefa?</strong> Se não for, continue.</p>
        </div>
        <p>Se o detalhe for importante — horário, número, nome, instrução — peça confirmação.</p>

        <div class="language-tool">
          <strong class="card-title">Repair toolbox</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Repetição</strong><code>Could you repeat that, please?</code></div>
            <div class="toolbox-item"><strong>Mais devagar</strong><code>Could you speak more slowly?</code></div>
            <div class="toolbox-item"><strong>Confirmar</strong><code>Do you mean Friday at 10:15?</code></div>
            <div class="toolbox-item"><strong>Parte perdida</strong><code>Sorry, I didn’t catch the last part.</code></div>
          </div>
        </div>

        ${choice('6','Reparo','Você ouviu “thirteen” ou “thirty” e o número muda a tarefa. O que fazer?',[['a','Adivinhar e continuar'],['b','Pedir confirmação do número'],['c','Encerrar a conversa']],'b','Correto. Quando o detalhe muda a ação, confirmar é parte da competência comunicativa.','Compreensão não é fingir que entendeu.')}

        <h3>5. Contrações: reconhecer o inglês falado</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Forma completa</strong><p>I am ready.<br>She is working.<br>We are going to study.<br>I will call you.</p></div>
          <div class="mini-card"><strong>Forma frequente na fala</strong><p>I’m ready.<br>She’s working.<br>We’re going to study.<br>I’ll call you.</p></div>
        </div>
        <p>Se você espera ouvir apenas as formas completas, pode não reconhecer frases que já conhece na escrita.</p>

        <h3>6. Pronúncia do -ed: três finais frequentes</h3>
        <div class="language-tool">
          <strong class="card-title">Não pronuncie todo -ed como uma sílaba separada</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>/t/</strong><code>worked, watched</code><p>Final surdo, sem nova sílaba.</p></div>
            <div class="toolbox-item"><strong>/d/</strong><code>played, cleaned</code><p>Final sonoro, sem nova sílaba.</p></div>
            <div class="toolbox-item"><strong>/ɪd/</strong><code>wanted, needed</code><p>Cria uma sílaba extra.</p></div>
            <div class="toolbox-item"><strong>Meta</strong><p>ser compreensível, não imitar perfeitamente um sotaque.</p></div>
          </div>
        </div>
        <p>Exemplo: <strong>worked</strong> não deve soar como “work-ed” em duas sílabas. Já <strong>wanted</strong> tem uma sílaba adicional no final.</p>

        ${choice('7','Pronúncia','Qual palavra normalmente tem uma sílaba extra no final -ed?',[['a','worked'],['b','played'],['c','wanted']],'c','Isso. Wanted termina com som /ɪd/.','Depois de sons /t/ e /d/, o -ed costuma formar uma sílaba extra.')}

        <h3>7. Números e horários merecem treino específico</h3>
        <div class="two-col">
          <div class="mini-card"><strong>13 × 30</strong><p>thir<strong>TEEN</strong> × <strong>THIR</strong>ty</p></div>
          <div class="mini-card"><strong>14 × 40</strong><p>four<strong>TEEN</strong> × <strong>FOR</strong>ty</p></div>
        </div>
        <p>A sílaba tônica ajuda a distinguir pares que podem causar confusão. Em situações importantes, confirme: <strong>“Do you mean thirteen — one three?”</strong></p>

        <h3>8. Inglês não tem um único som legítimo</h3>
        <p>Você pode ouvir pessoas do Brasil, Índia, Estados Unidos, Nigéria, Reino Unido, África do Sul, Canadá e muitos outros lugares. Ritmo, vocabulário e pronúncia variam.</p>
        <div class="concept-box">
          <strong class="card-title">Objetivo: inteligibilidade + adaptação</strong>
          <p>Ter sotaque não significa falar mal. O objetivo é conseguir ser compreendido, compreender variedades diferentes e ajustar a fala quando necessário.</p>
        </div>
        <div class="comparison-grid">
          <div class="mini-card"><strong>lift / elevator</strong><p>Duas formas legítimas em variedades diferentes.</p></div>
          <div class="mini-card"><strong>mobile phone / cell phone</strong><p>Vocabulário também varia.</p></div>
        </div>

        ${choice('8','Englishes','Ao ouvir uma variedade diferente da que você conhece, qual atitude é mais produtiva?',[['a','Concluir que está errada'],['b','Usar contexto, pedir repetição quando necessário e ampliar seu repertório'],['c','Evitar qualquer conversa']],'b','Correto. Diversidade linguística exige adaptação e abertura, não julgamento automático.','A comunicação real envolve diferentes repertórios e sotaques.')}

        <h3>9. Falar em blocos, não palavra por palavra</h3>
        <div class="source-box">
          <strong class="card-title">Treino de blocos</strong>
          <p><strong>I’m going to / study tonight.</strong></p>
          <p><strong>Could you / repeat that, please?</strong></p>
          <p><strong>Yesterday / we tested the app / and fixed two bugs.</strong></p>
        </div>
        <p>Leia primeiro respeitando os blocos de sentido. Depois repita sem olhar. O objetivo é reduzir pausas artificiais entre todas as palavras.</p>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>10. Circuito de comunicação</h3>
          <div class="challenge-box">
            <ol>
              <li>Leia o texto da oficina usando <strong>skimming</strong> e resuma o assunto em uma frase.</li>
              <li>Use <strong>scanning</strong> para encontrar horário, prazo e equipamento.</li>
              <li>Ouça novamente os dois áudios sem olhar as perguntas.</li>
              <li>Repita em voz alta três frases do capítulo usando contrações naturais.</li>
              <li>Crie uma frase para pedir repetição e outra para confirmar um horário.</li>
            </ol>
            <details><summary>Autoavaliação</summary><p>Eu consegui entender a ideia geral sem traduzir tudo? Consegui localizar detalhes específicos? Consegui continuar mesmo perdendo uma palavra? Minha fala ficou compreensível em blocos?</p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>combinar conhecimento linguístico com estratégia de leitura e escuta, reconhecer formas comuns da fala e reparar problemas de compreensão.</p></div>
        </section>
      `,
      init
    });
  }

  function init(root) {
    const status = $('[data-speech-status]', root);
    $$('[data-audio-task]', root).forEach(task => {
      const text = task.dataset.text || '';
      const speak = rate => {
        if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
          if (status) status.innerHTML = `<strong>Áudio indisponível neste navegador.</strong> Texto de apoio: “${text}”`;
          return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
      };
      $('[data-say]', task)?.addEventListener('click', () => speak(0.95));
      $('[data-say-slow]', task)?.addEventListener('click', () => speak(0.72));
    });
  }

  MBB.enableChapter('08 Ler', showChapter);
})();