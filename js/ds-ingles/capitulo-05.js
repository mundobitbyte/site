(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Informação e mídia',
      technical:'notícia • manchete • fonte • autoria • data • evidência • contexto • comparação • imagem • linguagem de certeza • checagem',
      title:'05 — Notícias e checagem',
      objective:'<strong>Objetivo:</strong> compreender notícias e postagens em inglês com postura crítica, distinguir afirmação de evidência, verificar fonte, data, autoria e contexto, comparar versões e usar linguagem adequada ao grau de certeza disponível.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">A mensagem chega antes da aula</span>
          <div class="hero-box">
            <strong class="card-title">“URGENT: Student app tracks everyone 24/7!”</strong>
            <p>No grupo da turma aparece uma captura de tela com essa frase, uma imagem do aplicativo desenvolvido para a feira e dezenas de comentários indignados. Em poucos minutos alguém escreve: <strong>“Share this before they delete it.”</strong></p>
            <p>O problema é que a captura não mostra link, autor, data nem o texto completo. E você reconhece o aplicativo: é justamente o projeto trabalhado nos capítulos anteriores.</p>
            <p><strong>Este caso é simulado para fins didáticos.</strong> A missão não é defender nem atacar o aplicativo. É descobrir <strong>o que a evidência realmente permite concluir</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> quando uma afirmação parece urgente e convincente, como verificar antes de acreditar ou compartilhar?</p>
          </div>
        </section>

        ${choice('1','Primeira decisão','Você recebeu apenas a captura da postagem. Qual é a atitude mais responsável?',[['a','Compartilhar rapidamente porque a mensagem parece grave'],['b','Tratar a postagem como uma afirmação a ser verificada e procurar a publicação original, a fonte e o contexto'],['c','Concluir que toda postagem viral é falsa']],'b','Isso. A captura é um ponto de partida, não uma prova suficiente.','Não troque credulidade por desconfiança automática: o caminho é verificar.')}

        <h3>1. Claim não é evidence</h3>
        <p>Uma frase pode afirmar qualquer coisa. Em leitura crítica, precisamos separar <strong>o que está sendo dito</strong> daquilo que <strong>sustenta o que foi dito</strong>.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Claim — afirmação</strong><p><em>“The app tracks users all the time.”</em></p><p>É algo que alguém afirma.</p></div>
          <div class="mini-card"><strong>Evidence — evidência</strong><p>Documento técnico, dado verificável, registro, fonte identificável, teste reproduzível ou declaração atribuída que permita avaliar a afirmação.</p></div>
        </div>

        <div class="concept-box">
          <strong class="card-title">Uma evidência também precisa ser examinada</strong>
          <p>Um gráfico pode estar sem fonte; uma fala pode estar recortada; uma imagem pode ser antiga; um estudo pode não sustentar a conclusão divulgada. Checar não é apenas “achar um link”: é avaliar <strong>qualidade, relação e contexto</strong>.</p>
        </div>

        ${choice('2','Afirmação ou prova?','A frase “Thousands of students are affected” aparece em uma postagem sem indicar de onde veio o número. O que ela é, por enquanto?',[['a','Uma evidência estatística confirmada'],['b','Uma afirmação que precisa de fonte e método para ser avaliada'],['c','Uma prova de que a notícia é falsa']],'b','Correto. Um número sem origem continua sendo uma afirmação até que sua base possa ser verificada.','Pergunte: quem contou, como contou, quando e onde está a fonte?')}

        <h3>2. Antes de ler tudo, identifique as peças da notícia</h3>
        <p>Uma notícia costuma oferecer pistas que ajudam a avaliar rapidamente quem está falando e sobre o quê:</p>

        <div class="three-col">
          <div class="mini-card"><strong>Headline</strong><p>A manchete chama atenção e resume um recorte. Não substitui o texto completo.</p></div>
          <div class="mini-card"><strong>Byline + date</strong><p>Autoria e data ajudam a localizar responsabilidade e atualidade.</p></div>
          <div class="mini-card"><strong>Sources + evidence</strong><p>Declarações, documentos, dados e links mostram em que o relato se apoia.</p></div>
        </div>

        <div class="source-box">
          <strong class="card-title">Fonte A — postagem viral simulada</strong>
          <p><strong>URGENT: Student app tracks everyone 24/7!</strong></p>
          <p>“They don’t want you to know this. Share now.”</p>
          <p><strong>O que aparece:</strong> uma captura da tela <em>“Allow location while using the app?”</em>.</p>
          <p><strong>O que não aparece:</strong> link para documentação, autor identificável, data do suposto teste ou evidência de rastreamento contínuo.</p>
        </div>

        <div class="source-box">
          <strong class="card-title">Fonte B — página técnica simulada do projeto</strong>
          <p><strong>Location feature</strong></p>
          <p>The map can use the device location to show the visitor’s position inside the event area. Location access is optional. If permission is denied, the map opens without the current-position marker.</p>
          <p><strong>Last updated:</strong> September 5.</p>
        </div>

        ${choice('3','Comparar antes de concluir','A Fonte B prova sozinha que nunca existe qualquer problema de privacidade no aplicativo?',[['a','Sim, porque documentação oficial é sempre suficiente'],['b','Não. Ela explica o funcionamento declarado, mas uma verificação completa ainda pode exigir testes, código, política de dados ou outras evidências'],['c','Sim, porque a postagem viral não possui autor']],'b','Isso. Uma fonte primária é importante, mas ainda pode precisar ser confrontada com outras evidências.','Evite trocar uma certeza precipitada por outra.')}

        <h3>3. A trilha de checagem</h3>
        <div class="argument-chain">
          <span>Qual é a afirmação?</span><b>→</b><span>Onde está o original?</span><b>→</b><span>Quem publicou?</span><b>→</b><span>Quando?</span><b>→</b><span>Qual evidência?</span><b>→</b><span>Qual contexto?</span><b>→</b><span>Outras fontes confirmam?</span>
        </div>

        <p>Essa sequência evita um erro comum: começar procurando apenas algo que confirme o que você já acredita. A pergunta não deve ser <strong>“como provo que isso é verdade ou mentira?”</strong>, mas <strong>“o que consigo sustentar depois de examinar as evidências?”</strong>.</p>

        <div class="note-box">
          <strong class="card-title">Leia lateralmente</strong>
          <p>Em vez de ficar preso à mesma página, abra outras fontes para descobrir quem é o autor, qual é a reputação do veículo, se existe fonte primária e se outros relatos independentes apresentam o mesmo fato. A checagem acontece também <strong>fora</strong> da página original.</p>
        </div>

        <h3>4. Check Lab — quatro decisões antes de compartilhar</h3>
        <div class="mission-box" data-check-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Check lab</span><strong class="card-title">Pare a corrente e investigue</strong></div>
            <span class="mission-progress" data-check-progress>0 de 4 resolvidas</span>
          </div>

          <div data-check-task data-answer="b">
            <p><strong>Missão A — original:</strong> você tem apenas uma captura de tela de uma postagem. Qual deve ser um dos primeiros passos?</p>
            <button class="mission-option" type="button" data-check-choice="a">Analisar apenas o número de curtidas.</button>
            <button class="mission-option" type="button" data-check-choice="b">Localizar a publicação original ou uma fonte rastreável antes de tratar a captura como evidência completa.</button>
            <button class="mission-option" type="button" data-check-choice="c">Recortar ainda mais a imagem.</button>
            <div class="mission-feedback" data-check-feedback></div>
          </div>

          <div data-check-task data-answer="c">
            <p><strong>Missão B — data:</strong> uma matéria de 2022 reaparece hoje com a legenda “This happened yesterday”. O que precisa ser verificado?</p>
            <button class="mission-option" type="button" data-check-choice="a">Somente o tamanho da manchete.</button>
            <button class="mission-option" type="button" data-check-choice="b">Somente se o texto está em inglês.</button>
            <button class="mission-option" type="button" data-check-choice="c">A data original e se o conteúdo está sendo reapresentado como atual.</button>
            <div class="mission-feedback" data-check-feedback></div>
          </div>

          <div data-check-task data-answer="a">
            <p><strong>Missão C — imagem:</strong> uma foto impressionante aparece sem legenda nem origem. Qual procedimento é mais seguro?</p>
            <button class="mission-option" type="button" data-check-choice="a">Procurar a origem da imagem, data, local e contexto antes de concluir que ela mostra o evento citado.</button>
            <button class="mission-option" type="button" data-check-choice="b">Assumir que a foto é verdadeira porque parece profissional.</button>
            <button class="mission-option" type="button" data-check-choice="c">Usar a imagem como prova apenas porque combina com a manchete.</button>
            <div class="mission-feedback" data-check-feedback></div>
          </div>

          <div data-check-task data-answer="b">
            <p><strong>Missão D — comparação:</strong> dois sites repetem exatamente a mesma informação e ambos apontam para uma única postagem anônima. Isso significa duas confirmações independentes?</p>
            <button class="mission-option" type="button" data-check-choice="a">Sim, porque existem dois sites.</button>
            <button class="mission-option" type="button" data-check-choice="b">Não necessariamente. As duas páginas podem estar apenas reproduzindo a mesma fonte original.</button>
            <button class="mission-option" type="button" data-check-choice="c">Sim, se as manchetes forem diferentes.</button>
            <div class="mission-feedback" data-check-feedback></div>
          </div>
        </div>

        <h3>5. A linguagem mostra o grau de certeza</h3>
        <p>Notícias e checagens usam verbos e expressões que indicam <strong>quem afirma</strong> e <strong>quanto já foi confirmado</strong>.</p>

        <div class="language-tool">
          <strong class="card-title">Language of evidence</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>says / reports</strong><code>The article says...</code><p>Relata o que uma fonte apresenta.</p></div>
            <div class="toolbox-item"><strong>claims</strong><code>The post claims that...</code><p>Marca uma afirmação que não deve ser confundida automaticamente com fato comprovado.</p></div>
            <div class="toolbox-item"><strong>according to</strong><code>According to the project page...</code><p>Atribui a informação a uma fonte.</p></div>
            <div class="toolbox-item"><strong>confirms</strong><code>The document confirms...</code><p>Use apenas quando a evidência realmente permite confirmação.</p></div>
          </div>
        </div>

        ${choice('4','Escolha lexical e responsabilidade','Você ainda não verificou a acusação da postagem. Qual frase é mais precisa?',[['a','The app tracks everyone 24/7.'],['b','A viral post claims that the app tracks users 24/7.'],['c','The evidence confirms illegal tracking.']],'b','Correto. A frase atribui a acusação à postagem sem apresentá-la como fato já comprovado.','A escolha do verbo pode separar relato responsável de afirmação indevida.')}

        <h3>6. Manchetes são linguagem comprimida</h3>
        <p>Em inglês, headlines frequentemente eliminam palavras que apareceriam em uma frase comum e usam formas curtas para ganhar impacto.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Headline</strong><p><code>Students Build App for School Fair</code></p><p>Forma enxuta e direta.</p></div>
          <div class="mini-card"><strong>Frase completa possível</strong><p><code>Students are building an app for the school fair.</code></p><p>A frase comum pode trazer auxiliares e artigos ausentes da manchete.</p></div>
        </div>

        <p>Essa compressão não é “inglês errado”; é uma convenção do gênero. O problema começa quando o leitor trata a manchete como se fosse todo o conteúdo.</p>

        ${choice('5','Manchete não é matéria','Por que é arriscado formar uma conclusão apenas pela headline?',[['a','Porque manchetes sempre mentem'],['b','Porque resumem e selecionam um ângulo; detalhes, fontes, limites e contexto podem estar no corpo da notícia'],['c','Porque notícias não usam verbos']],'b','Isso. A manchete orienta a leitura, mas não oferece necessariamente toda a sustentação do relato.','Leia além do título quando a decisão depende da informação.')}

        <h3>7. Recorte também produz sentido</h3>
        <p>Imagine que alguém recorta da tela apenas <strong>“Allow location”</strong> e remove <strong>“while using the app”</strong>. As palavras restantes são reais, mas o recorte altera o contexto disponível ao leitor.</p>

        <div class="concept-box">
          <strong class="card-title">Verdadeiro trecho, interpretação enganosa</strong>
          <p>Desinformação nem sempre depende de fabricar uma frase. Pode acontecer ao retirar data, legenda, continuação, escala, unidade, autoria ou circunstância. Por isso, a pergunta <strong>“isso foi editado, cortado ou descontextualizado?”</strong> faz parte da checagem.</p>
        </div>

        ${choice('6','Imagem e contexto','Uma captura mostra uma frase real, mas omite a parte que limita a permissão a “while using the app”. O que mudou?',[['a','Nada; qualquer recorte preserva o mesmo significado'],['b','O contexto disponível para interpretar a permissão ficou incompleto'],['c','A frase automaticamente virou falsa']],'b','Correto. Um recorte pode manter palavras verdadeiras e, ainda assim, induzir uma leitura diferente do original.','Checar contexto é tão importante quanto checar se as palavras existem.')}

        <h3>8. Monte uma conclusão proporcional à evidência</h3>
        <p>Depois de investigar, você nem sempre chega a “true” ou “false”. Às vezes, a resposta responsável é: <strong>não há evidência suficiente ainda</strong>.</p>

        <div class="builder-box" data-verdict-builder>
          <strong class="card-title">Evidence verdict builder</strong>
          <div class="builder-controls">
            <label>Situação da evidência
              <select data-verdict-evidence>
                <option value="weak">Só existe a postagem viral</option>
                <option value="partial">Há documentação, mas faltam verificações independentes</option>
                <option value="strong">Há documentação + teste verificável + fontes independentes convergentes</option>
              </select>
            </label>
            <label>Como comunicar?
              <select data-verdict-purpose>
                <option value="report">Relatar o que sabemos</option>
                <option value="share">Decidir se compartilhar</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-verdict-preview></div>
        </div>

        <div class="note-box">
          <strong class="card-title">“Não sei ainda” pode ser uma conclusão de qualidade</strong>
          <p>Suspender o julgamento quando faltam evidências é melhor do que preencher lacunas com certeza inventada. Boa checagem aceita revisão quando novas informações aparecem.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>9. Faça uma checagem real em inglês</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Escolha uma postagem, notícia curta ou imagem com legenda em inglês sobre tecnologia, ciência, entretenimento, esporte ou outro tema de interesse. Não precisa ser falsa. Sua tarefa é avaliar <strong>o que pode ser sustentado</strong>.</p>
            <ol>
              <li>escreva a afirmação principal em uma frase;</li>
              <li>localize a publicação original, quando possível;</li>
              <li>registre autor/veículo, data e links ou fontes citadas;</li>
              <li>compare pelo menos uma informação importante com outra fonte;</li>
              <li>verifique se imagem, número ou citação têm contexto suficiente;</li>
              <li>finalize com uma conclusão: <strong>supported, contradicted, misleading, or not enough evidence yet</strong> — e explique por quê.</li>
            </ol>
            <details><summary>Critério MbB</summary><p>Não ganha quem “acerta” mais rápido. Ganha qualidade quem consegue mostrar o caminho entre <strong>afirmação → evidência → contexto → conclusão</strong> sem dizer mais do que as fontes permitem.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> notícia, postagem, manchete e evidência não são a mesma coisa.</p>
          <p><strong>Experimentar:</strong> você rastreou origem, data, autoria, imagem e fontes.</p>
          <p><strong>Analisar:</strong> comparou evidências, reconheceu recortes e ajustou o grau de certeza.</p>
          <p><strong>Aplicar:</strong> produziu uma conclusão verificável e responsável antes de compartilhar.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const lab = root.querySelector('[data-check-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-check-task]')];
      const progress = lab.querySelector('[data-check-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-check-feedback]');
        task.querySelectorAll('[data-check-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.checkChoice === task.dataset.answer;
            task.querySelectorAll('[data-check-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Boa checagem.</strong> Você escolheu um procedimento que aumenta a qualidade da evidência antes da conclusão.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Ainda não.</strong> Pergunte qual informação está faltando para tornar a conclusão verificável.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-verdict-builder]');
    if (builder) {
      const evidence = builder.querySelector('[data-verdict-evidence]');
      const purpose = builder.querySelector('[data-verdict-purpose]');
      const preview = builder.querySelector('[data-verdict-preview]');
      const examples = {
        weak:{
          report:'A viral post claims that the app tracks users continuously, but the claim has not been verified.',
          share:'Do not present the claim as fact yet. Find the original source and supporting evidence first.'
        },
        partial:{
          report:'According to the project documentation, location access is optional, but more evidence is needed to evaluate how the app behaves in practice.',
          share:'Share only with context: the documentation provides relevant information, but the broader claim is not fully verified yet.'
        },
        strong:{
          report:'The available documentation, reproducible tests and independent sources converge on the same conclusion.',
          share:'The conclusion is well supported, but include the evidence and remain open to correction if stronger information appears.'
        }
      };
      const render = () => {
        if (!evidence || !purpose || !preview) return;
        preview.textContent = examples[evidence.value][purpose.value];
      };
      evidence?.addEventListener('change', render);
      purpose?.addEventListener('change', render);
      render();
    }
  }

  MBB.enableChapter('05 Notícias', showChapter);
})();