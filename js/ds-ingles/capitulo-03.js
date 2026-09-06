(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Interação',
      technical:'compreensão oral • ideia geral • informação específica • confirmação • reparo de mal-entendidos • pedidos • modais em uso • turnos de fala',
      title:'03 — Interagir e compreender',
      objective:'<strong>Objetivo:</strong> compreender informações essenciais em interações orais simples, pedir repetição ou esclarecimento, confirmar o que foi entendido e usar estratégias para manter a comunicação mesmo quando nem tudo é compreendido de primeira.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">A reunião começou — e ninguém vai esperar uma tradução</span>
          <div class="hero-box">
            <strong class="card-title">A turma entrou no desafio internacional do capítulo anterior.</strong>
            <p>Agora chega a próxima etapa: uma reunião online de 12 minutos com outra equipe para combinar apresentação, arquivos e horários. A câmera abre, alguém cumprimenta o grupo e começa a falar em inglês.</p>
            <p>Você entende algumas palavras, perde outras e percebe um detalhe importante: em uma conversa real, não existe botão para “traduzir tudo antes de responder”. Você precisa <strong>escutar, selecionar o que importa, reagir e confirmar</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> o que fazer quando você entende a ideia geral, mas não compreende cada palavra de uma fala em inglês?</p>
          </div>
        </section>

        ${choice('1','Primeira reação','Durante a reunião você entende “presentation”, “Friday” e “morning”, mas perde uma parte da frase. Qual atitude ajuda mais?',[['a','Fingir que entendeu tudo para não interromper'],['b','Usar as pistas que ouviu e confirmar a informação que realmente importa'],['c','Encerrar a reunião porque faltou uma palavra']],'b','Isso. Em interação real, compreender parcialmente e confirmar é uma estratégia legítima e eficiente.','O objetivo não é provar que você entendeu 100%; é construir entendimento suficiente para continuar.')}

        <h3>1. Escutar não é tentar capturar todas as palavras</h3>
        <p>Quando ouvimos uma língua, o som chega em sequência e desaparece rapidamente. Por isso, uma estratégia eficiente é decidir <strong>o que queremos descobrir</strong> antes de ouvir.</p>

        <div class="argument-chain">
          <span>Qual é a situação?</span><b>→</b><span>O que eu preciso descobrir?</span><b>→</b><span>Quais palavras posso esperar?</span><b>→</b><span>O que consegui captar?</span><b>→</b><span>Preciso confirmar algo?</span>
        </div>

        <div class="concept-box">
          <strong class="card-title">Duas camadas de compreensão</strong>
          <p><strong>Compreensão global:</strong> perceber o assunto e a intenção principal da fala.</p>
          <p><strong>Compreensão específica:</strong> localizar detalhes necessários, como horário, data, tarefa, nome ou instrução.</p>
          <p>Em uma reunião, você pode primeiro entender <em>sobre o que estão falando</em> e depois concentrar atenção nos detalhes que afetam sua equipe.</p>
        </div>

        <h3>2. Listening Lab — ouça para resolver uma tarefa</h3>
        <p>Use os botões para ouvir as falas. A voz é sintetizada pelo navegador e pode variar conforme o aparelho; ela serve como <strong>treino de compreensão</strong>, não como modelo de um único “sotaque correto”.</p>

        <div class="mission-box" data-listening-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Listening lab</span><strong class="card-title">Três recados da reunião</strong></div>
            <span class="mission-progress" data-listening-progress>0 de 3 resolvidas</span>
          </div>

          <div data-listening-task data-answer="b" data-audio-text="Hi everyone. The online meeting starts at ten thirty, but please join ten minutes early.">
            <p><strong>Áudio A — horário:</strong> quando a equipe deve entrar na sala?</p>
            <div class="quiz-actions">
              <button class="action-button primary" type="button" data-say>Ouvir</button>
              <button class="action-button" type="button" data-say-slow>Ouvir mais devagar</button>
            </div>
            <button class="mission-option" type="button" data-listening-choice="a">10h30</button>
            <button class="mission-option" type="button" data-listening-choice="b">10h20</button>
            <button class="mission-option" type="button" data-listening-choice="c">10h10</button>
            <div class="mission-feedback" data-listening-feedback></div>
          </div>

          <div data-listening-task data-answer="a" data-audio-text="Your team will present the prototype first. After that, the partner team will explain the user testing results.">
            <p><strong>Áudio B — ordem:</strong> quem apresenta primeiro?</p>
            <div class="quiz-actions">
              <button class="action-button primary" type="button" data-say>Ouvir</button>
              <button class="action-button" type="button" data-say-slow>Ouvir mais devagar</button>
            </div>
            <button class="mission-option" type="button" data-listening-choice="a">A sua equipe, apresentando o protótipo.</button>
            <button class="mission-option" type="button" data-listening-choice="b">A outra equipe, apresentando os testes.</button>
            <button class="mission-option" type="button" data-listening-choice="c">As duas equipes ao mesmo tempo.</button>
            <div class="mission-feedback" data-listening-feedback></div>
          </div>

          <div data-listening-task data-answer="c" data-audio-text="Please send the final slides by Thursday evening. The live presentation is on Friday morning.">
            <p><strong>Áudio C — prazo:</strong> até quando os slides precisam ser enviados?</p>
            <div class="quiz-actions">
              <button class="action-button primary" type="button" data-say>Ouvir</button>
              <button class="action-button" type="button" data-say-slow>Ouvir mais devagar</button>
            </div>
            <button class="mission-option" type="button" data-listening-choice="a">Friday morning</button>
            <button class="mission-option" type="button" data-listening-choice="b">Thursday morning</button>
            <button class="mission-option" type="button" data-listening-choice="c">Thursday evening</button>
            <div class="mission-feedback" data-listening-feedback></div>
          </div>

          <div class="mission-feedback" data-speech-status aria-live="polite"></div>
        </div>

        ${choice('2','Escuta estratégica','Antes de ouvir uma fala sobre horário de reunião, o que ajuda mais?',[['a','Prever que podem aparecer números, horas, morning, afternoon, start ou join'],['b','Tentar lembrar todas as regras gramaticais antes do áudio'],['c','Esperar compreender todas as palavras na primeira vez']],'a','Correto. Prever o tipo de informação prepara sua atenção para pistas relevantes.','A escuta começa antes do som: contexto e objetivo ajudam a escolher o que procurar.')}

        <h3>3. Perder uma palavra não significa perder a mensagem</h3>
        <p>Na fala natural, palavras podem ser pronunciadas rapidamente, reduzidas ou conectadas. Além disso, diferentes pessoas têm ritmos e sotaques diferentes. Se você reconhece <strong>Friday morning</strong> em uma frase sobre apresentação, já possui uma pista relevante.</p>

        <div class="note-box">
          <strong class="card-title">Evite o “efeito dominó”</strong>
          <p>Um erro comum é não entender uma palavra e continuar pensando nela enquanto a pessoa segue falando. Resultado: perde-se também a frase seguinte. Se uma palavra não for essencial, <strong>deixe-a passar temporariamente</strong> e continue procurando o sentido global.</p>
        </div>

        ${choice('3','Continuar ouvindo','Você não reconheceu uma palavra no meio da frase, mas percebeu que a pessoa está explicando o prazo. O que fazer primeiro?',[['a','Parar mentalmente na palavra e abandonar o restante'],['b','Continuar ouvindo em busca de datas, horários e outras pistas; depois verificar se a palavra era realmente necessária'],['c','Concluir imediatamente que não entendeu nada']],'b','Isso. Boa compreensão oral envolve tolerar lacunas temporárias e continuar construindo sentido.','Nem toda palavra desconhecida merece interromper sua atenção.')}

        <h3>4. Quando o detalhe importa, peça ajuda</h3>
        <p>Imagine que você ouviu algo parecido com <strong>“Send the file by thirteen”</strong>. Foi <em>thirteen</em> (13) ou <em>thirty</em> (30)? Nesse caso, adivinhar pode gerar erro real.</p>

        <div class="language-tool">
          <strong class="card-title">Repair toolbox — frases para consertar a comunicação</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Pedir repetição</strong><code>Could you repeat that, please?</code></div>
            <div class="toolbox-item"><strong>Pedir fala mais lenta</strong><code>Could you speak more slowly, please?</code></div>
            <div class="toolbox-item"><strong>Dizer que perdeu uma parte</strong><code>Sorry, I didn't catch the last part.</code></div>
            <div class="toolbox-item"><strong>Confirmar</strong><code>Do you mean Thursday evening?</code></div>
            <div class="toolbox-item"><strong>Checar entendimento</strong><code>So, we need to send the slides by Thursday, right?</code></div>
            <div class="toolbox-item"><strong>Pedir exemplo</strong><code>Could you give an example?</code></div>
          </div>
        </div>

        <p>Essas frases não são “muletas”. Elas fazem parte da própria competência comunicativa: pessoas proficientes também pedem repetição, confirmam números, reformulam e corrigem mal-entendidos.</p>

        ${choice('4','Reparo necessário','Você não tem certeza se o prazo é quinta ou sexta. Qual resposta é mais segura?',[['a','Do you mean Thursday or Friday?'],['b','Yes, yes.'],['c','No problem, mesmo sem ter entendido']],'a','Correto. Quando um detalhe pode mudar a ação, confirmar é melhor do que fingir compreensão.','Uma pergunta curta pode evitar um erro grande.')}

        <h3>5. Interação é uma construção em conjunto</h3>
        <div class="dialogue-box">
          <div class="speech"><small>Partner</small>Could you upload the prototype before our meeting?</div>
          <div class="speech you"><small>You</small>Do you mean before 10:30?</div>
          <div class="speech"><small>Partner</small>Yes, exactly. If possible, upload it by 10:15.</div>
          <div class="speech you"><small>You</small>Okay. Prototype by 10:15. Got it.</div>
        </div>

        <p>Observe o que aconteceu: você não respondeu apenas <strong>yes</strong>. Você transformou uma informação importante em uma pergunta de confirmação e depois repetiu o dado principal. Isso reduz a chance de erro.</p>

        <div class="concept-box">
          <strong class="card-title">Negociar sentido</strong>
          <p>Em uma conversa, os participantes ajustam o que dizem para chegar a um entendimento compartilhado. Isso pode envolver repetição, paráfrase, exemplos, confirmação, gestos, escrita no chat ou compartilhamento de tela.</p>
        </div>

        ${choice('5','Confirmação ativa','Por que “Prototype by 10:15. Got it.” é útil no diálogo?',[['a','Porque repete a informação central e permite que a outra pessoa perceba imediatamente se houve erro'],['b','Porque demonstra que o aluno memorizou uma regra'],['c','Porque substitui toda a conversa anterior']],'a','Isso. Repetir de forma resumida pode funcionar como confirmação de entendimento.','Confirmação ativa torna a comunicação mais confiável.')}

        <h3>6. Can e could aparecem porque existe uma necessidade</h3>
        <p>No capítulo 01, <strong>Can you...?</strong> e <strong>Could you...?</strong> apareceram em pedidos. Agora vemos essas formas trabalhando dentro de uma interação.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Can you repeat that?</strong><p>Pedido direto e comum.</p></div>
          <div class="mini-card"><strong>Could you repeat that, please?</strong><p>Pedido geralmente mais indireto/cortês.</p></div>
        </div>

        <p>Não existe uma fórmula matemática em que <em>could</em> seja “sempre educado” e <em>can</em> seja “sempre rude”. Relação entre as pessoas, tom, situação e escolha de palavras também interferem. O importante aqui é perceber que os modais ajudam a <strong>construir pedidos</strong>.</p>

        ${choice('6','Gramática em uso','Qual é a função principal de “Could you repeat that, please?” nesta situação?',[['a','Relatar um fato no passado'],['b','Fazer um pedido de repetição de maneira adequada à interação'],['c','Dar uma ordem absoluta']],'b','Correto. A estrutura gramatical aparece porque existe uma ação comunicativa concreta: pedir algo ao interlocutor.','Pergunte primeiro o que a pessoa está tentando fazer com a língua.')}

        <h3>7. Conversation Lab — escolha como continuar</h3>
        <div class="mission-box" data-conversation-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Conversation lab</span><strong class="card-title">Não deixe o mal-entendido crescer</strong></div>
            <span class="mission-progress" data-conversation-progress>0 de 3 resolvidas</span>
          </div>

          <div data-conversation-task data-answer="b">
            <p><strong>Situação A:</strong> alguém diz rapidamente: “We need the mobile version, not the desktop version.” Você só captou “mobile” e “desktop”.</p>
            <button class="mission-option" type="button" data-conversation-choice="a">Responder “Okay” sem saber qual versão é necessária.</button>
            <button class="mission-option" type="button" data-conversation-choice="b">Perguntar: “Do you mean the mobile version?”</button>
            <button class="mission-option" type="button" data-conversation-choice="c">Mudar de assunto.</button>
            <div class="mission-feedback" data-conversation-feedback></div>
          </div>

          <div data-conversation-task data-answer="a">
            <p><strong>Situação B:</strong> você entendeu a ideia, mas a pessoa fala rápido demais.</p>
            <button class="mission-option" type="button" data-conversation-choice="a">Could you speak more slowly, please?</button>
            <button class="mission-option" type="button" data-conversation-choice="b">Your English is wrong.</button>
            <button class="mission-option" type="button" data-conversation-choice="c">Nunca mais participar de reuniões.</button>
            <div class="mission-feedback" data-conversation-feedback></div>
          </div>

          <div data-conversation-task data-answer="c">
            <p><strong>Situação C:</strong> a equipe combinou três tarefas. Antes de encerrar, você quer verificar se anotou certo.</p>
            <button class="mission-option" type="button" data-conversation-choice="a">Bye.</button>
            <button class="mission-option" type="button" data-conversation-choice="b">I understand English.</button>
            <button class="mission-option" type="button" data-conversation-choice="c">So, let me check: prototype today, slides Thursday, presentation Friday. Is that right?</button>
            <div class="mission-feedback" data-conversation-feedback></div>
          </div>
        </div>

        <h3>8. Monte uma frase de reparo</h3>
        <p>Escolha o problema de comunicação. O construtor mostra uma frase possível para resolver a situação.</p>

        <div class="builder-box" data-repair-builder>
          <strong class="card-title">Repair builder</strong>
          <div class="builder-controls">
            <label>O que aconteceu?
              <select data-repair-problem>
                <option value="repeat">Não ouvi uma parte</option>
                <option value="slow">A fala está rápida</option>
                <option value="meaning">Não conheço uma palavra</option>
                <option value="confirm">Preciso confirmar um detalhe</option>
              </select>
            </label>
            <label>Objetivo
              <select data-repair-tone>
                <option value="neutral">Claro e educado</option>
                <option value="short">Mais curto</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-repair-preview></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Não transforme frases úteis em decoração</strong>
          <p>Treine cada expressão ligada a uma necessidade: <strong>não ouvi → pedir repetição; não entendi a palavra → perguntar significado; dúvida sobre dado → confirmar</strong>. Assim, a frase deixa de ser uma linha para memorizar e vira uma ferramenta disponível durante a conversa.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>9. Simule uma reunião de dois minutos</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Em dupla, simulem uma pequena reunião sobre um projeto escolar ou tecnológico. Uma pessoa apresenta três informações em inglês; a outra precisa:</p>
            <ol>
              <li>identificar o assunto geral;</li>
              <li>anotar dois detalhes importantes;</li>
              <li>pedir repetição ou esclarecimento pelo menos uma vez;</li>
              <li>confirmar uma informação com <strong>Do you mean...?</strong> ou uma frase equivalente;</li>
              <li>encerrar resumindo o que ficou combinado.</li>
            </ol>
            <p>Depois troquem os papéis. A meta não é falar sem erros: é <strong>manter a interação, detectar dúvidas e chegar a um entendimento compartilhado</strong>.</p>
            <details><summary>Critério de qualidade</summary><p>A dupla deve conseguir continuar a conversa mesmo quando surgir uma lacuna de compreensão. Vale repetir, reformular, apontar, escrever uma palavra no chat ou confirmar um detalhe.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> escutar não exige reconhecer cada palavra.</p>
          <p><strong>Experimentar:</strong> você ouviu mensagens com objetivo e procurou informações específicas.</p>
          <p><strong>Analisar:</strong> diferenciou ideia geral, detalhe, lacuna tolerável e informação que precisa ser confirmada.</p>
          <p><strong>Aplicar:</strong> usou pedidos, confirmação e reformulação para manter uma interação real.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const listeningLab = root.querySelector('[data-listening-lab]');
    if (listeningLab) {
      const tasks = [...listeningLab.querySelectorAll('[data-listening-task]')];
      const progress = listeningLab.querySelector('[data-listening-progress]');
      const speechStatus = listeningLab.querySelector('[data-speech-status]');

      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      const speak = (task, slow = false) => {
        const text = task.dataset.audioText || '';
        if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
          if (speechStatus) speechStatus.innerHTML = `<strong>Áudio indisponível neste navegador.</strong> Texto de apoio: “${text}”`;
          return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = slow ? 0.72 : 0.9;
        utterance.pitch = 1;
        utterance.onstart = () => {
          if (speechStatus) speechStatus.textContent = slow ? 'Reproduzindo em velocidade reduzida...' : 'Reproduzindo...';
        };
        utterance.onend = () => {
          if (speechStatus) speechStatus.textContent = 'Áudio finalizado. Responda com base no que você conseguiu compreender.';
        };
        utterance.onerror = () => {
          if (speechStatus) speechStatus.innerHTML = `<strong>Não foi possível reproduzir o áudio.</strong> Texto de apoio: “${text}”`;
        };
        window.speechSynthesis.speak(utterance);
      };

      tasks.forEach(task => {
        task.querySelector('[data-say]')?.addEventListener('click', () => speak(task, false));
        task.querySelector('[data-say-slow]')?.addEventListener('click', () => speak(task, true));
        const feedback = task.querySelector('[data-listening-feedback]');
        task.querySelectorAll('[data-listening-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.listeningChoice === task.dataset.answer;
            task.querySelectorAll('[data-listening-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Compreendido.</strong> Você captou a informação necessária para agir.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Ainda não.</strong> Ouça novamente procurando apenas a informação pedida.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const conversationLab = root.querySelector('[data-conversation-lab]');
    if (conversationLab) {
      const tasks = [...conversationLab.querySelectorAll('[data-conversation-task]')];
      const progress = conversationLab.querySelector('[data-conversation-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-conversation-feedback]');
        task.querySelectorAll('[data-conversation-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.conversationChoice === task.dataset.answer;
            task.querySelectorAll('[data-conversation-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Boa escolha.</strong> A resposta reduz a ambiguidade e mantém a interação.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Ainda não.</strong> Escolha a resposta que ajuda os participantes a verificar o que foi realmente entendido.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-repair-builder]');
    if (builder) {
      const problem = builder.querySelector('[data-repair-problem]');
      const tone = builder.querySelector('[data-repair-tone]');
      const preview = builder.querySelector('[data-repair-preview]');
      const examples = {
        repeat:{neutral:'Sorry, I didn’t catch the last part. Could you repeat that, please?',short:'Could you repeat that, please?'},
        slow:{neutral:'I’m following, but could you speak a little more slowly, please?',short:'Could you speak more slowly, please?'},
        meaning:{neutral:'Sorry, what does “deadline” mean in this context?',short:'What does “deadline” mean?'},
        confirm:{neutral:'Let me check if I understood: the slides are due on Thursday, right?',short:'Do you mean Thursday?'}
      };
      const render = () => {
        if (!problem || !tone || !preview) return;
        preview.textContent = examples[problem.value][tone.value];
      };
      problem?.addEventListener('change', render);
      tone?.addEventListener('change', render);
      render();
    }
  }

  MBB.enableChapter('03 Interagir', showChapter);
})();