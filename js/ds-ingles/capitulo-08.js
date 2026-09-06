(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Língua e identidade',
      technical:'Englishes • língua franca • variedade linguística • sotaque • inteligibilidade • registro • identidade • acomodação • inclusão • contexto de uso',
      title:'08 — Englishes, identidades e mundo',
      objective:'<strong>Objetivo:</strong> compreender que o inglês circula em muitas variedades e contextos, reconhecer sotaques e escolhas linguísticas como parte da diversidade, ajustar a comunicação ao interlocutor e à situação e usar o inglês como língua de interação sem tratar uma única variedade como modelo absoluto.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">A reunião internacional começa — e o inglês não soa igual</span>
          <div class="hero-box">
            <strong class="card-title">O projeto da escola foi convidado para uma mostra online com equipes de vários países.</strong>
            <p>Na primeira sala, uma participante diz <strong>“Take the lift to the second floor”</strong> ao explicar o prédio onde estuda. Outra usa <strong>“elevator”</strong>. Mais tarde aparecem <strong>“holiday”</strong> e <strong>“vacation”</strong>, <strong>“mobile phone”</strong> e <strong>“cell phone”</strong>.</p>
            <p>As palavras mudam, os ritmos de fala também. Ninguém fala exatamente do mesmo jeito — nem mesmo pessoas do mesmo país.</p>
            <p>Um aluno comenta no chat: <strong>“Which one is the correct English?”</strong></p>
            <p class="central-question"><strong>Pergunta central:</strong> existe apenas um inglês correto — ou existem diferentes formas legítimas de usar a língua conforme comunidade, identidade e situação?</p>
          </div>
        </section>

        ${choice('1','Primeira decisão','Se uma pessoa diz “lift” e outra diz “elevator” para o mesmo objeto, qual conclusão é mais adequada?',[['a','Uma das duas está necessariamente errada'],['b','As duas formas podem ser legítimas em variedades diferentes do inglês'],['c','A palavra deve ser substituída por português']],'b','Isso. Variação lexical faz parte das línguas. O contexto e a comunidade influenciam as escolhas.','Diferença não significa automaticamente erro. Primeiro descubra se a forma funciona naquela variedade e situação.')}

        <h3>1. Por que falar em Englishes?</h3>
        <p>O inglês é usado em muitos países e por milhões de pessoas que aprenderam a língua como idioma adicional. Ele circula em escolas, ciência, tecnologia, turismo, jogos, música, negócios, redes sociais e projetos internacionais.</p>

        <div class="concept-box">
          <strong class="card-title">Englishes</strong>
          <p>Usar o plural ajuda a lembrar que o inglês apresenta <strong>variedades de pronúncia, vocabulário, gramática, ritmo, registro e usos sociais</strong>. Não existe apenas uma única maneira de soar ou de escolher palavras.</p>
        </div>

        <div class="comparison-grid">
          <div class="mini-card"><strong>lift / elevator</strong><p>Duas escolhas lexicais conhecidas para elevador em diferentes contextos.</p></div>
          <div class="mini-card"><strong>flat / apartment</strong><p>Outro exemplo de variação lexical.</p></div>
          <div class="mini-card"><strong>holiday / vacation</strong><p>As preferências mudam conforme variedade e situação.</p></div>
          <div class="mini-card"><strong>mobile phone / cell phone</strong><p>O objeto é o mesmo; o repertório linguístico pode variar.</p></div>
        </div>

        <p>Esses exemplos são apenas a parte mais visível. Há variação também dentro de uma mesma cidade, geração, grupo profissional ou comunidade digital.</p>

        ${choice('2','Variação real','Por que seria inadequado afirmar que todas as pessoas de um país falam inglês do mesmo modo?',[['a','Porque língua varia entre regiões, grupos, gerações, situações e indivíduos'],['b','Porque países não possuem línguas'],['c','Porque apenas a escrita varia']],'a','Correto. Nenhuma comunidade linguística é totalmente uniforme.','Evite transformar país em um único sotaque ou um único jeito de falar.')}

        <h3>2. Sotaque não é defeito</h3>
        <p>Toda pessoa fala com algum sotaque. O sotaque traz marcas da trajetória linguística, da região, da comunidade e das experiências do falante. Ter sotaque brasileiro ao falar inglês, por exemplo, <strong>não significa automaticamente falar mal</strong>.</p>

        <div class="note-box">
          <strong class="card-title">Troque a pergunta</strong>
          <p>Em vez de perguntar <strong>“Meu sotaque desapareceu?”</strong>, pergunte: <strong>“Minha fala está compreensível para quem precisa me entender?”</strong></p>
        </div>

        <div class="argument-chain">
          <span>Pronunciar</span><b>→</b><span>Ser compreendido</span><b>→</b><span>Perceber dificuldade</span><b>→</b><span>Ajustar quando necessário</span>
        </div>

        ${choice('3','Objetivo da pronúncia','Em uma reunião internacional, qual objetivo é pedagogicamente mais útil para um iniciante?',[['a','Imitar perfeitamente um único sotaque considerado superior'],['b','Falar de forma suficientemente clara, ouvir variedades diferentes e ajustar a comunicação quando necessário'],['c','Evitar falar até perder totalmente o sotaque']],'b','Isso. Inteligibilidade, escuta e capacidade de ajuste são objetivos comunicativos reais.','Pronúncia importa, mas não precisa ser confundida com apagar a identidade do falante.')}

        <h3>3. Língua franca: o inglês como ponto de encontro</h3>
        <p>Imagine uma estudante brasileira conversando em inglês com um estudante japonês e uma estudante italiana. Nenhum deles precisa ser falante nativo para usar a língua de forma eficiente.</p>

        <div class="concept-box">
          <strong class="card-title">English as a lingua franca</strong>
          <p>Nessa situação, o inglês funciona como uma <strong>língua comum para pessoas com repertórios linguísticos diferentes</strong>. O objetivo principal é construir entendimento compartilhado.</p>
        </div>

        <p>Isso muda a ideia de sucesso: comunicar bem não é apenas reproduzir um modelo britânico ou norte-americano. É também saber <strong>explicar, reformular, confirmar, dar exemplo, desacelerar e negociar sentido</strong>.</p>

        <div class="dialogue-box">
          <div class="speech"><small>Partner A</small>We need the final mock-up before the call.</div>
          <div class="speech you"><small>You</small>Sorry, do you mean the final screen design?</div>
          <div class="speech"><small>Partner A</small>Yes, exactly. The screen design.</div>
          <div class="speech you"><small>You</small>Great. We’ll send it before the call.</div>
        </div>

        ${choice('4','Língua franca em ação','O que tornou o diálogo eficiente?',[['a','Os participantes fingiram que não havia dúvida'],['b','Uma expressão foi esclarecida e reformulada até todos compartilharem o mesmo sentido'],['c','A conversa mudou para uma competição de sotaques']],'b','Correto. Negociar sentido faz parte da competência comunicativa.','Quando pessoas têm repertórios diferentes, ajustar a mensagem pode ser mais importante que insistir em uma única formulação.')}

        <h3>4. Adaptar a fala não é “falar errado”</h3>
        <p>Em uma conversa internacional, você pode perceber que uma expressão idiomática, uma abreviação ou uma piada local não funciona para todos. Um comunicador competente adapta a linguagem ao público.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Expressão muito local</strong><p><code>This bug is giving me a headache.</code> Pode funcionar, mas uma metáfora ou gíria mais local talvez exija explicação.</p></div>
          <div class="mini-card"><strong>Reformulação clara</strong><p><code>This bug is difficult to fix. Let me show you what happens.</code></p></div>
        </div>

        <p>Isso é <strong>acomodação comunicativa</strong>: perceber o interlocutor e ajustar velocidade, vocabulário, exemplos ou estrutura para favorecer entendimento.</p>

        ${choice('5','Acomodação','Um colega não entende uma expressão que você usou. Qual reação ajuda mais?',[['a','Repetir a mesma frase mais alto'],['b','Dizer que ele deveria conhecer a expressão'],['c','Reformular com palavras mais diretas e, se necessário, dar um exemplo']],'c','Isso. Reformular é uma habilidade comunicativa, não um sinal de fracasso.','Comunicação é responsabilidade compartilhada entre os participantes.')}

        <h3>5. World English Lab — resolva sem julgar</h3>
        <p>As situações abaixo são simuladas. O objetivo não é decorar “qual país usa qual palavra”, mas aprender a reagir diante de diferenças reais.</p>

        <div class="mission-box" data-world-lab>
          <div class="mission-head">
            <div><span class="mission-badge">World English Lab</span><strong class="card-title">Quatro encontros, quatro decisões</strong></div>
            <span class="mission-progress" data-world-progress>0 de 4 resolvidas</span>
          </div>

          <div data-world-task data-answer="b">
            <p><strong>Situação A:</strong> alguém diz “Take the lift”. Você conhecia apenas “elevator”.</p>
            <button class="mission-option" type="button" data-world-choice="a">Corrigir a pessoa imediatamente.</button>
            <button class="mission-option" type="button" data-world-choice="b">Usar o contexto para perceber o sentido e ampliar seu repertório.</button>
            <button class="mission-option" type="button" data-world-choice="c">Concluir que a frase não é inglês.</button>
            <div class="mission-feedback" data-world-feedback></div>
          </div>

          <div data-world-task data-answer="c">
            <p><strong>Situação B:</strong> o sotaque do interlocutor é diferente do que você costuma ouvir e uma palavra importante não ficou clara.</p>
            <button class="mission-option" type="button" data-world-choice="a">Imitar o sotaque para fazer graça.</button>
            <button class="mission-option" type="button" data-world-choice="b">Fingir que entendeu.</button>
            <button class="mission-option" type="button" data-world-choice="c">Pedir repetição ou confirmação com respeito.</button>
            <div class="mission-feedback" data-world-feedback></div>
          </div>

          <div data-world-task data-answer="a">
            <p><strong>Situação C:</strong> em um grupo internacional, os brasileiros começam a discutir um detalhe longo em português e os demais participantes ficam sem acompanhar.</p>
            <button class="mission-option" type="button" data-world-choice="a">Usar português se ajudar rapidamente, mas resumir em inglês para manter todos incluídos.</button>
            <button class="mission-option" type="button" data-world-choice="b">Continuar em português e deixar os demais esperando.</button>
            <button class="mission-option" type="button" data-world-choice="c">Proibir qualquer uso de outras línguas em toda situação.</button>
            <div class="mission-feedback" data-world-feedback></div>
          </div>

          <div data-world-task data-answer="b">
            <p><strong>Situação D:</strong> você está escrevendo um e-mail formal para uma instituição internacional.</p>
            <button class="mission-option" type="button" data-world-choice="a">Usar abreviações de chat como “u”, “pls” e “thx” em todas as frases.</button>
            <button class="mission-option" type="button" data-world-choice="b">Escolher formas mais convencionais e claras para o registro formal.</button>
            <button class="mission-option" type="button" data-world-choice="c">Escrever do mesmo modo que fala em um jogo online.</button>
            <div class="mission-feedback" data-world-feedback></div>
          </div>
        </div>

        <h3>6. Diversidade não elimina adequação</h3>
        <p>Reconhecer variedades legítimas não significa que qualquer forma serve igualmente bem em qualquer contexto. Uma mensagem para amigos, um relatório técnico e uma inscrição acadêmica possuem expectativas diferentes.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Chat entre colegas</strong><p><code>Can u send the file?</code> pode aparecer em comunicação muito informal.</p></div>
          <div class="mini-card"><strong>E-mail institucional</strong><p><code>Could you send the file, please?</code> é mais adequado quando se busca registro formal e clareza.</p></div>
        </div>

        <p>A questão não é classificar automaticamente uma pessoa como “certa” ou “errada”, mas perceber <strong>variedade + público + propósito + situação</strong>.</p>

        ${choice('6','Variação e adequação','Qual afirmação é mais precisa?',[['a','Se existe variação, não existem diferenças de registro ou contexto'],['b','Uma forma pode ser legítima em uma comunidade e ainda assim ser pouco adequada a uma situação formal específica'],['c','Somente a linguagem formal é legítima']],'b','Correto. Legitimidade linguística e adequação comunicativa são questões relacionadas, mas não idênticas.','Contexto importa sem transformar variedade social em defeito.')}

        <h3>7. Língua também comunica identidade</h3>
        <p>Palavras, sotaque, ritmo, gírias, referências e alternância entre línguas podem sinalizar pertencimento a grupos, regiões, gerações ou comunidades.</p>

        <div class="note-box">
          <strong class="card-title">Cuidado com estereótipos</strong>
          <p>Ouvir uma pessoa não autoriza concluir como “todo mundo daquele país” fala ou pensa. Países e comunidades são internamente diversos. Identidade não cabe em uma caricatura linguística.</p>
        </div>

        <p>Também é importante perceber relações de poder. Algumas variedades recebem mais prestígio em escolas, mídia e mercado, enquanto outras podem sofrer preconceito. Esse prestígio social <strong>não prova que uma variedade seja linguisticamente superior</strong>.</p>

        ${choice('7','Preconceito linguístico','Uma pessoa ri do sotaque de outra e diz que ele prova falta de inteligência. Qual análise é mais adequada?',[['a','O sotaque permite medir inteligência'],['b','A avaliação mistura diferença linguística com julgamento social sem fundamento'],['c','Somente pessoas sem sotaque podem usar inglês internacionalmente']],'b','Isso. Sotaque é característica linguística; transformá-lo em medida de capacidade alimenta preconceito.','Avalie a comunicação e as ideias, não uma hierarquia imaginária de sotaques.')}

        <h3>8. Uma língua global carrega história</h3>
        <p>O inglês se expandiu por processos históricos diversos, incluindo colonização, migrações, comércio, poder econômico, ciência, cultura de massa e tecnologias digitais. Por isso, sua circulação mundial não é neutra nem resultado de um único caminho.</p>

        <div class="concept-box">
          <strong class="card-title">A língua muda quando circula</strong>
          <p>Comunidades não apenas “recebem” o inglês: elas também o transformam, misturam repertórios, criam usos locais e produzem literatura, música, ciência, tecnologia e cultura em suas próprias condições.</p>
        </div>

        <p>Aprender inglês, portanto, pode ampliar acesso e comunicação sem exigir apagar a própria língua, sotaque ou identidade.</p>

        ${choice('8','Inglês e identidade','Qual visão combina melhor com o capítulo?',[['a','Aprender inglês exige abandonar marcas da própria identidade'],['b','É possível ampliar repertório em inglês e ao mesmo tempo manter outras línguas e identidades'],['c','Somente pessoas nascidas em países anglófonos podem produzir cultura em inglês']],'b','Correto. Repertórios linguísticos podem coexistir e se ampliar.','Aprender uma língua adicional não precisa significar substituir quem você é.')}

        <h3>9. Englishes Compass — ajuste sem apagar</h3>
        <p>Escolha uma situação e uma prioridade. O construtor propõe uma estratégia possível.</p>

        <div class="builder-box" data-englishes-builder>
          <strong class="card-title">Englishes Compass</strong>
          <div class="builder-controls">
            <label>Situação
              <select data-englishes-context>
                <option value="meeting">Reunião internacional</option>
                <option value="email">E-mail institucional</option>
                <option value="game">Jogo/chat internacional</option>
                <option value="local">Equipe bilíngue local</option>
              </select>
            </label>
            <label>Prioridade
              <select data-englishes-goal>
                <option value="clarity">Clareza</option>
                <option value="inclusion">Inclusão</option>
                <option value="identity">Identidade</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-englishes-preview></div>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>10. Desafio — prepare-se para uma conversa global</h3>
          <div class="challenge-box">
            <strong class="card-title">Plano de comunicação em 5 passos</strong>
            <p>Imagine que você apresentará o projeto da turma para estudantes de três países diferentes. Prepare:</p>
            <ol>
              <li>uma apresentação de 20–30 segundos em inglês sobre o projeto;</li>
              <li>duas palavras ou expressões que podem precisar de explicação;</li>
              <li>uma frase para pedir repetição;</li>
              <li>uma frase para reformular uma ideia caso alguém não entenda;</li>
              <li>uma regra de convivência linguística para que sotaques e repertórios diferentes sejam tratados com respeito.</li>
            </ol>
            <details>
              <summary>Critério de qualidade</summary>
              <p>Seu plano é bom se prioriza entendimento, respeito e adequação ao público sem exigir que todos falem da mesma maneira.</p>
            </details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> você percebeu que o inglês é plural e circula em muitas comunidades.</p>
          <p><strong>Experimentar:</strong> comparou escolhas linguísticas e resolveu situações de comunicação internacional.</p>
          <p><strong>Analisar:</strong> relacionou sotaque, variedade, registro, identidade, poder e contexto.</p>
          <p><strong>Aplicar:</strong> planejou como ajustar sua comunicação sem apagar a própria identidade nem desrespeitar a do outro.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const lab = root.querySelector('[data-world-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-world-task]')];
      const progress = lab.querySelector('[data-world-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-world-feedback]');
        task.querySelectorAll('[data-world-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.worldChoice === task.dataset.answer;
            task.querySelectorAll('[data-world-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Boa decisão.</strong> Você priorizou compreensão, adequação e respeito à diversidade linguística.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Reveja.</strong> Diferença linguística não é defeito; pense em contexto, inteligibilidade, inclusão e possibilidade de reformulação.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-englishes-builder]');
    if (builder) {
      const context = builder.querySelector('[data-englishes-context]');
      const goal = builder.querySelector('[data-englishes-goal]');
      const preview = builder.querySelector('[data-englishes-preview]');
      const examples = {
        meeting:{
          clarity:'Use frases diretas, evite gírias locais desnecessárias e confirme informações importantes: “So, the deadline is Friday, right?”',
          inclusion:'Dê espaço para pedidos de repetição e reformulação: “Please stop me if anything is unclear.”',
          identity:'Você não precisa esconder seu sotaque. Fale com clareza e mantenha referências locais quando puder explicá-las ao grupo.'
        },
        email:{
          clarity:'Prefira vocabulário convencional e informações explícitas: “The file is attached. Please confirm receipt by Friday.”',
          inclusion:'Evite abreviações obscuras e explique termos locais ou institucionais que o destinatário talvez não conheça.',
          identity:'Você pode apresentar sua instituição e contexto local sem imitar um estilo cultural que não é o seu; priorize respeito e clareza.'
        },
        game:{
          clarity:'Mensagens curtas funcionam, mas reformule se uma abreviação ou gíria não for compreendida.',
          inclusion:'Não transforme erro, sotaque ou vocabulário diferente em motivo de ridicularização. Ajude o grupo a manter o jogo compreensível.',
          identity:'Gírias e referências podem expressar pertencimento, desde que você esteja preparado para explicá-las quando o grupo não compartilhar o repertório.'
        },
        local:{
          clarity:'Use a língua que resolve melhor cada etapa, mas registre decisões importantes em uma forma que todos os participantes consigam consultar.',
          inclusion:'Alternar entre português e inglês pode ser útil; quando alguém não compartilha uma das línguas, faça um resumo para não excluir a pessoa.',
          identity:'Misturar repertórios pode fazer parte da vida bilíngue. O importante é usar essa flexibilidade conscientemente e respeitar quem participa.'
        }
      };
      const render = () => {
        if (!context || !goal || !preview) return;
        preview.textContent = examples[context.value][goal.value];
      };
      context?.addEventListener('change', render);
      goal?.addEventListener('change', render);
      render();
    }
  }

  MBB.enableChapter('08 Englishes', showChapter);
})();