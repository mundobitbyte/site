(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Começar usando',
      technical:'contexto • pistas • cognatos • palavras-chave • inglês como língua franca • interação • estratégias de compensação',
      title:'01 — Inglês já está ao seu redor',
      objective:'<strong>Objetivo:</strong> perceber usos reais do inglês, compreender mensagens simples sem traduzir tudo e usar expressões básicas para agir, pedir ajuda e manter uma interação.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Uma manhã comum — com inglês no caminho</span>
          <div class="hero-box">
            <strong class="card-title">Você ainda nem chegou à aula de Inglês.</strong>
            <p>Às 7h10, o celular avisa: <strong>“Storage almost full. Free up space to continue.”</strong> No caminho para a escola, um aplicativo pede <strong>“Update required”</strong>. No intervalo, chega uma mensagem de um estudante visitante: <strong>“Hi! Is this the robotics lab?”</strong></p>
            <p>Em menos de duas horas, o inglês apareceu como <strong>aviso, instrução e interação</strong>. Em nenhuma dessas situações você precisa recitar uma regra gramatical. Precisa compreender o suficiente para <strong>tomar uma decisão</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> é possível entender e usar inglês mesmo sem conhecer todas as palavras?</p>
          </div>
        </section>

        ${choice('1','Primeira decisão','O celular mostra “Storage almost full. Free up space to continue.” Você reconhece “full”, “space” e “continue”, além do ícone de armazenamento. Qual atitude demonstra melhor uma estratégia de leitura?',[['a','Parar até traduzir cada palavra'],['b','Usar palavras conhecidas, contexto da tela e objetivo do aviso para inferir que falta espaço'],['c','Ignorar qualquer mensagem em inglês']],'b','Isso. Você não precisa compreender 100% das palavras para construir uma hipótese suficientemente boa e agir.','Comece pelo objetivo da situação: o que a tela quer que você perceba ou faça?')}

        <h3>1. Antes de traduzir, observe a situação</h3>
        <p>Quando encontramos inglês no cotidiano, nosso cérebro não recebe apenas palavras. Recebe também <strong>lugar, formato, ícones, imagens, números, botões, conhecimento prévio e expectativa</strong>.</p>

        <div class="argument-chain">
          <span>Onde estou?</span><b>→</b><span>Que tipo de texto é?</span><b>→</b><span>O que reconheço?</span><b>→</b><span>O que preciso descobrir?</span><b>→</b><span>Qual ação faz sentido?</span>
        </div>

        <div class="concept-box">
          <strong class="card-title">Compreender não é o mesmo que traduzir</strong>
          <p>Traduzir pode ser útil em alguns momentos. Mas ler é construir sentido. Se você entende que <strong>“Update required”</strong> indica que uma atualização é necessária, já realizou a tarefa principal da leitura — mesmo sem transformar cada palavra em português.</p>
        </div>

        ${choice('2','Pistas do texto','Você vê um botão com a palavra “Download”, uma barra de progresso e “85%”. Qual elemento também participa da compreensão?',[['a','Apenas a palavra “Download”'],['b','Palavra, número, formato da interface e barra de progresso trabalham juntos'],['c','Somente o dicionário']],'b','Correto. Textos digitais são frequentemente multimodais: palavras, números e elementos visuais constroem sentido em conjunto.','Não reduza a leitura ao vocabulário isolado.')}

        <h3>2. Missão rápida: sobreviva a três situações</h3>
        <p>Agora não leia como se estivesse fazendo uma prova. Leia como alguém que <strong>precisa resolver algo</strong>.</p>

        <div class="mission-box" data-mission-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Mission lab</span><strong class="card-title">Escolha a ação mais coerente</strong></div>
            <span class="mission-progress" data-mission-progress>0 de 3 resolvidas</span>
          </div>

          <div data-mission-task data-answer="b">
            <p><strong>Situação A — aplicativo:</strong> “Password must contain at least 8 characters.”</p>
            <button class="mission-option" type="button" data-mission-choice="a">Digitar exatamente 8 letras, obrigatoriamente.</button>
            <button class="mission-option" type="button" data-mission-choice="b">Criar uma senha com no mínimo 8 caracteres.</button>
            <button class="mission-option" type="button" data-mission-choice="c">Apagar a conta.</button>
            <div class="mission-feedback" data-mission-feedback></div>
          </div>

          <div data-mission-task data-answer="a">
            <p><strong>Situação B — escola:</strong> “Project presentations start at 2 p.m. in Room 12.”</p>
            <button class="mission-option" type="button" data-mission-choice="a">As apresentações começam às 14h, na sala 12.</button>
            <button class="mission-option" type="button" data-mission-choice="b">O projeto deve ter 12 páginas.</button>
            <button class="mission-option" type="button" data-mission-choice="c">A atividade termina às 2h.</button>
            <div class="mission-feedback" data-mission-feedback></div>
          </div>

          <div data-mission-task data-answer="c">
            <p><strong>Situação C — mensagem:</strong> “Sorry, I’m late. The bus broke down.”</p>
            <button class="mission-option" type="button" data-mission-choice="a">A pessoa está pedindo um ônibus novo.</button>
            <button class="mission-option" type="button" data-mission-choice="b">A pessoa chegou cedo.</button>
            <button class="mission-option" type="button" data-mission-choice="c">A pessoa se desculpa pelo atraso e explica que o ônibus quebrou.</button>
            <div class="mission-feedback" data-mission-feedback></div>
          </div>
        </div>

        <h3>3. Palavras transparentes ajudam — mas não comandam sozinhas</h3>
        <p>Algumas palavras se parecem com o português e têm sentido próximo: <strong>international, digital, information, project, music, culture</strong>. Elas são chamadas de cognatos e podem abrir caminho para a leitura.</p>

        <div class="note-box">
          <strong class="card-title">Cuidado com o piloto automático</strong>
          <p>Semelhança não garante significado. <strong>Actually</strong>, por exemplo, geralmente significa “na verdade”, e não “atualmente”. Por isso, a regra MbB é: <strong>use a semelhança como hipótese e confirme pelo contexto</strong>.</p>
        </div>

        ${choice('3','Cognato com contexto','Em “International Student Project Exhibition”, quais palavras já ajudam a prever o tema antes de usar um dicionário?',[['a','International, Student, Project e Exhibition'],['b','Nenhuma; só é possível ler depois da tradução completa'],['c','Apenas “student”']],'a','Isso. Várias pistas transparentes permitem prever que se trata de uma exposição de projetos de estudantes.','Procure primeiro o que já é acessível; depois investigue apenas o que realmente impede a compreensão.')}

        <h3>4. Inglês não pertence a um único país</h3>
        <p>Uma brasileira pode usar inglês para conversar com um japonês; uma pesquisadora queniana pode apresentar um trabalho para colegas mexicanos; uma equipe de software pode ter pessoas de vários países trabalhando na mesma documentação. Nesses casos, o inglês funciona como <strong>língua franca</strong>: uma língua de contato entre pessoas com repertórios linguísticos diferentes.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Objetivo irreal</strong><p>“Só posso falar quando meu inglês parecer o de um falante nativo específico.”</p></div>
          <div class="mini-card"><strong>Objetivo comunicativo</strong><p>“Vou tornar minha mensagem compreensível, ouvir com atenção, pedir esclarecimento e melhorar com a prática.”</p></div>
        </div>

        <p>Isso não significa que gramática, pronúncia e vocabulário deixem de importar. Significa que eles são <strong>ferramentas para comunicar melhor</strong>, e não barreiras que proíbem o aluno de tentar.</p>

        ${choice('4','Língua franca','Dois estudantes, um brasileiro e uma coreana, usam inglês para organizar um projeto. Qual foco é mais produtivo?',[['a','Descobrir quem imita melhor um único sotaque nativo'],['b','Construir entendimento, ajustar a fala quando necessário e usar recursos linguísticos adequados à situação'],['c','Evitar conversar até ambos dominarem toda a gramática']],'b','Correto. Comunicação envolve cooperação, inteligibilidade e capacidade de reparar mal-entendidos.','A língua é usada para fazer coisas com outras pessoas, não apenas para demonstrar domínio de regras.')}

        <h3>5. Quando faltar uma palavra, não abandone a conversa</h3>
        <div class="dialogue-box">
          <div class="speech"><small>Visitor</small>Hi! Is this the robotics lab?</div>
          <div class="speech you"><small>You</small>Yes. It’s on the second floor, next to the library.</div>
          <div class="speech"><small>Visitor</small>Sorry, could you say that again?</div>
          <div class="speech you"><small>You</small>Sure. Second floor. Next to the library.</div>
        </div>

        <p>O diálogo é simples, mas mostra uma habilidade importante: <strong>reformular</strong>. Quando a outra pessoa não entende, você pode repetir mais devagar, escolher palavras mais simples, apontar, escrever, mostrar uma imagem ou confirmar o que foi entendido.</p>

        <div class="language-tool">
          <strong class="card-title">Toolbox — frases que mantêm a comunicação viva</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Não entendi</strong><code>I don’t understand.</code></div>
            <div class="toolbox-item"><strong>Repita, por favor</strong><code>Could you repeat that, please?</code></div>
            <div class="toolbox-item"><strong>Mais devagar</strong><code>Could you speak more slowly?</code></div>
            <div class="toolbox-item"><strong>O que significa...?</strong><code>What does ___ mean?</code></div>
            <div class="toolbox-item"><strong>Preciso de ajuda</strong><code>I need help.</code></div>
            <div class="toolbox-item"><strong>Você pode me mostrar?</strong><code>Can you show me?</code></div>
          </div>
          <p><strong>Observe a gramática em uso:</strong> <code>Can you...?</code> e <code>Could you...?</code> ajudam a fazer pedidos. Neste momento, o mais importante é perceber <strong>para que servem</strong>. A forma será refinada à medida que aparecer em novas situações.</p>
        </div>

        ${choice('5','Reparo na conversa','Você não ouviu uma informação importante. Qual resposta mantém a interação de forma clara e educada?',[['a','Could you repeat that, please?'],['b','Whatever.'],['c','I speak perfect English.']],'a','Isso. Pedir repetição é uma estratégia real de comunicação, não um sinal de fracasso.','Um bom usuário da língua sabe também pedir ajuda e negociar sentido.')}

        <h3>6. Monte uma mensagem que você realmente poderia usar</h3>
        <p>Escolha a situação e o objetivo. O exemplo muda na hora para mostrar como poucas estruturas podem gerar mensagens úteis.</p>

        <div class="builder-box" data-message-builder>
          <strong class="card-title">Message builder</strong>
          <div class="builder-controls">
            <label>Situação
              <select data-builder-context>
                <option value="school">Escola</option>
                <option value="online">Jogo / comunidade online</option>
                <option value="project">Projeto de tecnologia</option>
              </select>
            </label>
            <label>O que você precisa fazer?
              <select data-builder-purpose>
                <option value="introduce">Apresentar-se</option>
                <option value="help">Pedir ajuda</option>
                <option value="clarify">Pedir esclarecimento</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-builder-preview></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Não decore o exemplo inteiro</strong>
          <p>Observe as peças reutilizáveis: <strong>I’m...</strong>, <strong>I need...</strong>, <strong>Can you...?</strong>, <strong>What does... mean?</strong>. Aprender uma língua fica mais eficiente quando você percebe padrões e os adapta a novas necessidades.</p>
        </div>

        <h3>7. O que a gramática fará neste módulo?</h3>
        <p>Ela aparecerá quando ajudar a resolver uma necessidade concreta. Para se apresentar, precisaremos de formas como <strong>I am / I’m</strong>. Para falar de rotina, surgirão formas do presente. Para relatar acontecimentos, precisaremos do passado. Para pedir, sugerir ou indicar possibilidade, aparecerão verbos modais.</p>

        <div class="concept-box">
          <strong class="card-title">Regra de ouro MbB para Inglês</strong>
          <p><strong>Situação → intenção → linguagem → padrão → nova situação.</strong></p>
          <p>Primeiro entendemos o que alguém precisa fazer com a língua. Depois observamos as palavras e estruturas que tornam isso possível. Por fim, transferimos o padrão para outro contexto.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>8. Crie seu cartão de sobrevivência em inglês</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Monte um pequeno cartão — no caderno ou celular — com <strong>seis frases que você realmente poderia precisar</strong> na escola, em um aplicativo, numa pesquisa, em um jogo ou num projeto.</p>
            <ol>
              <li>uma frase para se apresentar;</li>
              <li>uma para pedir ajuda;</li>
              <li>uma para pedir repetição;</li>
              <li>uma para perguntar o significado de algo;</li>
              <li>uma para confirmar uma informação;</li>
              <li>uma escolhida por você.</li>
            </ol>
            <details><summary>Como saber se ficou bom?</summary><p>O cartão não precisa ter frases sofisticadas. Ele precisa ser <strong>útil, compreensível e reutilizável</strong>. Se você consegue imaginar uma situação real em que usaria cada frase, cumpriu o objetivo.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Checkpoint MbB</strong>
          <p><strong>Entender:</strong> inglês já aparece em situações cotidianas e pode ser compreendido por múltiplas pistas.</p>
          <p><strong>Experimentar:</strong> você tomou decisões sem depender de tradução total.</p>
          <p><strong>Analisar:</strong> percebeu contexto, cognatos, palavras-chave, multimodalidade e função comunicativa.</p>
          <p><strong>Aplicar:</strong> usou e adaptou expressões para manter uma interação real.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const lab = root.querySelector('[data-mission-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-mission-task]')];
      const progress = lab.querySelector('[data-mission-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-mission-feedback]');
        task.querySelectorAll('[data-mission-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.missionChoice === task.dataset.answer;
            task.querySelectorAll('[data-mission-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Resolvido.</strong> Você extraiu a informação necessária para agir.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Ainda não.</strong> Volte à mensagem e procure as palavras e pistas que respondem à necessidade da situação.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-message-builder]');
    if (builder) {
      const context = builder.querySelector('[data-builder-context]');
      const purpose = builder.querySelector('[data-builder-purpose]');
      const preview = builder.querySelector('[data-builder-preview]');
      const examples = {
        school:{
          introduce:"Hi! I’m a student here. My name is Alex.",
          help:"Hi! I need help finding Room 12. Can you show me?",
          clarify:"Sorry, I don’t understand. Could you repeat that, please?"
        },
        online:{
          introduce:"Hi! I’m Alex. I’m from Brazil. Nice to meet you!",
          help:"I need help with this level. Can you show me?",
          clarify:"What does this message mean? Could you explain it?"
        },
        project:{
          introduce:"Hi! I’m Alex. I’m part of the development team.",
          help:"I need help with this error. Can you take a look?",
          clarify:"Could you repeat the requirement, please? I want to make sure I understood."
        }
      };
      const render = () => {
        if (!preview || !context || !purpose) return;
        preview.textContent = examples[context.value][purpose.value];
      };
      context?.addEventListener('change',render);
      purpose?.addEventListener('change',render);
      render();
    }
  }

  MBB.enableChapter('01 Inglês', showChapter);
})();