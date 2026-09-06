(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Estudo e autoria',
      technical:'pergunta de pesquisa • palavras-chave • busca estratégica • seleção de fontes • anotações • paráfrase • síntese • citação • autoria • IA em pesquisa • produção multimodal',
      title:'09 — Estudar, pesquisar e produzir',
      objective:'<strong>Objetivo:</strong> usar o inglês como ferramenta de estudo e pesquisa: formular perguntas, buscar e selecionar informações, registrar evidências, parafrasear e sintetizar com autoria, citar fontes e produzir uma comunicação clara e responsável.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">A feira acabou — mas o projeto pode ir mais longe</span>
          <div class="hero-box">
            <strong class="card-title">A equipe recebe um convite para apresentar o aplicativo a estudantes de outras escolas.</strong>
            <p>O pedido parece simples: criar uma página curta, em inglês, explicando <strong>qual problema o projeto tenta resolver, como foi testado e o que a equipe aprendeu</strong>.</p>
            <p>Um colega sugere pesquisar “school app” e copiar as melhores frases encontradas. Outro quer pedir a uma IA para escrever tudo e publicar sem revisar. Uma terceira pessoa pergunta: <strong>“Mas qual é exatamente a nossa pergunta? De onde vêm as informações? O que podemos afirmar com segurança?”</strong></p>
            <p>A tarefa deixou de ser apenas “escrever em inglês”. Agora é preciso <strong>transformar informação em conhecimento comunicável</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como usar o inglês para pesquisar e produzir conhecimento sem apenas copiar, traduzir ou aceitar a primeira resposta encontrada?</p>
          </div>
        </section>

        ${choice('1','Primeira decisão','A equipe quer saber se soluções digitais podem ajudar visitantes a se orientar em ambientes escolares. Qual início é mais produtivo?',[['a','Pesquisar apenas “app” e abrir qualquer resultado'],['b','Transformar o tema em uma pergunta e definir quais informações seriam necessárias para respondê-la'],['c','Pedir uma resposta pronta e usá-la como conclusão']],'b','Isso. Uma pergunta clara ajuda a escolher palavras-chave, fontes e evidências relevantes.','Pesquisa melhora quando o aluno sabe o que está tentando descobrir e que tipo de evidência poderia responder à pergunta.')}

        <h3>1. Tema não é pergunta de pesquisa</h3>
        <p><strong>School navigation</strong> é um tema. Para pesquisar melhor, precisamos recortar o problema.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Tema amplo</strong><p>school navigation apps</p></div>
          <div class="mini-card"><strong>Pergunta pesquisável</strong><p>How can a simple digital map help first-time visitors navigate a school?</p></div>
        </div>

        <p>A segunda formulação indica <strong>público</strong> (first-time visitors), <strong>recurso</strong> (simple digital map) e <strong>problema</strong> (navigate a school). Isso orienta a investigação.</p>

        <div class="argument-chain">
          <span>O que quero saber?</span><b>→</b><span>Que evidência preciso?</span><b>→</b><span>Que termos podem aparecer?</span><b>→</b><span>Onde procurar?</span><b>→</b><span>Como registrar?</span>
        </div>

        ${choice('2','Recorte','Qual pergunta é mais útil para uma pesquisa escolar pequena?',[['a','Is technology good?'],['b','What is the best app in the world?'],['c','What difficulties did first-time visitors report when using the school map during the fair?']],'c','Correto. A pergunta é delimitada e pode ser investigada com dados do próprio projeto.','Perguntas muito amplas costumam produzir respostas vagas; perguntas delimitadas aproximam problema, método e evidência.')}

        <h3>2. Pesquisar em inglês é escolher palavras-chave, não traduzir uma frase inteira</h3>
        <p>Uma boa busca costuma combinar conceitos importantes. Para o problema da equipe, alguns termos possíveis são:</p>

        <div class="language-tool">
          <strong class="card-title">Search toolbox</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Problema</strong><code>wayfinding</code><p>Orientação e deslocamento em um espaço.</p></div>
            <div class="toolbox-item"><strong>Contexto</strong><code>school navigation</code><p>Navegação em ambiente escolar.</p></div>
            <div class="toolbox-item"><strong>Público</strong><code>first-time visitors</code><p>Pessoas que visitam o local pela primeira vez.</p></div>
            <div class="toolbox-item"><strong>Solução</strong><code>digital map</code><p>Mapa digital como recurso de orientação.</p></div>
          </div>
        </div>

        <p>Em vez de buscar uma pergunta longa exatamente como foi escrita, o aluno pode testar combinações como <strong>school wayfinding digital map</strong> ou <strong>first-time visitors navigation school</strong> e ajustar conforme os resultados.</p>

        ${choice('3','Busca estratégica','Uma busca retornou resultados quase todos sobre GPS para carros. Qual é a melhor reação?',[['a','Aceitar os resultados porque estão em inglês'],['b','Refinar os termos, acrescentando contexto como school, indoor ou visitors'],['c','Copiar o primeiro parágrafo e encerrar a pesquisa']],'b','Isso. Pesquisar é iterativo: os resultados ajudam a perceber se as palavras-chave precisam ser ajustadas.','A busca faz parte do raciocínio. Mudar termos quando os resultados não respondem à pergunta é uma competência, não um erro.')}

        <h3>3. Resultado de busca não é automaticamente uma boa fonte</h3>
        <p>Imagine que a equipe encontra quatro materiais. Todos aparecem na mesma tela, mas cumprem funções diferentes.</p>

        <div class="mission-box" data-research-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Research lab</span><strong class="card-title">Escolha a próxima ação</strong></div>
            <span class="mission-progress" data-research-progress>0 de 4 resolvidas</span>
          </div>

          <div data-research-task data-answer="b">
            <p><strong>Situação A:</strong> um blog afirma que “digital maps solve navigation problems”, mas não informa método, dados nem fontes.</p>
            <button class="mission-option" type="button" data-research-choice="a">Usar a frase como fato comprovado.</button>
            <button class="mission-option" type="button" data-research-choice="b">Tratar como pista inicial e procurar evidência mais forte.</button>
            <button class="mission-option" type="button" data-research-choice="c">Considerar o texto confiável apenas porque está em inglês.</button>
            <div class="mission-feedback" data-research-feedback></div>
          </div>

          <div data-research-task data-answer="c">
            <p><strong>Situação B:</strong> um artigo descreve participantes, procedimento, limitações e resultados de um estudo sobre orientação em edifícios.</p>
            <button class="mission-option" type="button" data-research-choice="a">Ignorar porque é mais longo.</button>
            <button class="mission-option" type="button" data-research-choice="b">Copiar a conclusão inteira.</button>
            <button class="mission-option" type="button" data-research-choice="c">Verificar se o estudo realmente se relaciona à pergunta e registrar os dados relevantes com a referência.</button>
            <div class="mission-feedback" data-research-feedback></div>
          </div>

          <div data-research-task data-answer="a">
            <p><strong>Situação C:</strong> o relatório interno da turma informa quantas pessoas testaram o protótipo e quais dificuldades relataram.</p>
            <button class="mission-option" type="button" data-research-choice="a">Usá-lo como fonte primária sobre o próprio teste, deixando claro o alcance limitado dos dados.</button>
            <button class="mission-option" type="button" data-research-choice="b">Generalizar os resultados para todas as escolas.</button>
            <button class="mission-option" type="button" data-research-choice="c">Descartar porque não foi publicado em um jornal.</button>
            <div class="mission-feedback" data-research-feedback></div>
          </div>

          <div data-research-task data-answer="b">
            <p><strong>Situação D:</strong> uma IA apresenta três referências, mas a equipe não consegue localizar duas delas.</p>
            <button class="mission-option" type="button" data-research-choice="a">Manter as referências porque parecem acadêmicas.</button>
            <button class="mission-option" type="button" data-research-choice="b">Não usar as referências até conseguir verificá-las em fontes reais.</button>
            <button class="mission-option" type="button" data-research-choice="c">Trocar apenas o nome dos autores.</button>
            <div class="mission-feedback" data-research-feedback></div>
          </div>
        </div>

        <h3>4. Fonte forte depende da pergunta</h3>
        <p>Não existe uma escala simples em que uma fonte seja “boa para tudo”. Uma documentação oficial pode ser excelente para descobrir como um recurso deveria funcionar, mas não basta para provar como usuários realmente se comportaram. Um teste com usuários pode mostrar dificuldades de uso, mas não explica sozinho toda a teoria sobre navegação.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Fonte primária</strong><p>Dados, documentos, entrevistas, testes ou registros diretamente ligados ao fenômeno estudado.</p></div>
          <div class="mini-card"><strong>Fonte secundária</strong><p>Analisa, interpreta ou sintetiza informações produzidas em outras fontes.</p></div>
          <div class="mini-card"><strong>Fonte de apoio</strong><p>Pode ajudar a descobrir termos, contexto ou referências, mas exige avaliação antes de sustentar uma conclusão.</p></div>
        </div>

        ${choice('4','Fonte e pergunta','A equipe quer descrever o que aconteceu no teste do próprio protótipo. Qual fonte é especialmente relevante?',[['a','O registro original do teste e dos participantes'],['b','Uma propaganda de outro aplicativo'],['c','Uma postagem sem relação com o projeto']],'a','Correto. Para descrever o próprio teste, o registro direto é uma fonte primária importante.','A escolha da fonte deve responder ao tipo de afirmação que você pretende fazer.')}

        <h3>5. Anotar não é copiar</h3>
        <p>Uma pesquisa fica difícil de controlar quando o aluno acumula trechos copiados sem saber de onde vieram. Uma anotação útil separa <strong>ideia, evidência, fonte e comentário próprio</strong>.</p>

        <div class="source-box">
          <strong class="card-title">Exemplo didático de ficha de leitura</strong>
          <p><strong>Fonte:</strong> relatório de teste da turma.</p>
          <p><strong>Dado:</strong> 36 visitantes responderam ao questionário; 27 disseram que o mapa ajudou a encontrar o destino.</p>
          <p><strong>O que isso permite dizer:</strong> entre os respondentes desse teste, a maioria avaliou o mapa como útil.</p>
          <p><strong>O que isso NÃO permite dizer:</strong> que o aplicativo funciona para todas as pessoas ou em todas as escolas.</p>
          <p><small>Dados simulados para fins didáticos.</small></p>
        </div>

        ${choice('5','Proporção da conclusão','Com os dados simulados acima, qual conclusão é mais responsável?',[['a','Digital maps always solve school navigation.'],['b','In this small school test, most respondents said the map helped them find their destination.'],['c','Every school should replace signs with apps.']],'b','Isso. A frase preserva o contexto, o tamanho limitado do teste e o que os dados realmente sustentam.','Boa pesquisa evita transformar um resultado local em verdade universal.')}

        <h3>6. Parafrasear é reconstruir a ideia</h3>
        <p>Trocar duas palavras por sinônimos não cria autoria. Para parafrasear, primeiro compreenda a informação; depois feche a fonte, explique a ideia com sua própria estrutura e confira se o sentido foi preservado.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Disfarce de cópia</strong><p><em>Most respondents stated that the map was useful for finding destinations.</em></p><p>A frase apenas troca poucas palavras de uma formulação anterior.</p></div>
          <div class="mini-card"><strong>Paráfrase com contexto</strong><p><em>The survey suggests that the prototype helped many participants navigate the school during this test.</em></p><p>A ideia foi reconstruída e o alcance ficou explícito.</p></div>
        </div>

        <div class="language-tool">
          <strong class="card-title">Frases úteis para integrar fontes</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Atribuir</strong><code>According to the project report, ...</code></div>
            <div class="toolbox-item"><strong>Descrever resultado</strong><code>The survey suggests that ...</code></div>
            <div class="toolbox-item"><strong>Comparar</strong><code>Both sources indicate that ...</code></div>
            <div class="toolbox-item"><strong>Limitar</strong><code>However, the test was small and ...</code></div>
          </div>
        </div>

        ${choice('6','Autoria','Por que citar a fonte continua necessário mesmo quando você parafraseia?',[['a','Porque a formulação pode ser sua, mas a informação ou ideia veio de outra fonte'],['b','Porque paráfrase é sempre uma citação literal'],['c','Porque toda frase em inglês precisa de referência']],'a','Correto. Autoria textual não apaga a origem da informação.','Parafrasear muda a forma de apresentar; não transforma uma ideia alheia em descoberta própria.')}

        <h3>7. Síntese conecta fontes — não empilha resumos</h3>
        <p>Imagine três evidências:</p>

        <div class="three-col">
          <div class="mini-card"><strong>Teste da turma</strong><p>Muitos respondentes disseram que o mapa ajudou.</p></div>
          <div class="mini-card"><strong>Observação</strong><p>Alguns participantes ainda pediram ajuda quando o corredor tinha pouca sinalização.</p></div>
          <div class="mini-card"><strong>Leitura externa</strong><p>Materiais sobre wayfinding destacam que orientação depende de múltiplas pistas do ambiente.</p></div>
        </div>

        <p>Uma síntese não precisa escolher uma fonte e ignorar as outras. Ela pode construir uma conclusão mais rica: <strong>o mapa parece ajudar, mas funciona dentro de um sistema de orientação que também envolve placas, organização do espaço e necessidades dos usuários</strong>.</p>

        ${choice('7','Síntese','Qual resposta realmente integra as três evidências?',[['a','The app is perfect.'],['b','The test suggests the map can help visitors, but observations and external reading indicate that digital guidance should complement other wayfinding resources.'],['c','One source says one thing and another source says another thing.']],'b','Isso. A resposta relaciona as evidências e produz uma conclusão mais precisa do que qualquer fonte isolada.','Síntese é construir relação entre informações, não apenas colocá-las lado a lado.')}

        <h3>8. IA pode ajudar no processo — mas não assumir a responsabilidade</h3>
        <p>Ferramentas de IA podem apoiar uma pesquisa quando usadas com função clara: gerar termos de busca, sugerir perguntas, comparar versões de um texto, explicar vocabulário ou ajudar a organizar ideias. O problema aparece quando o aluno passa a tratar a saída como <strong>fonte automática de fatos e referências</strong>.</p>

        <div class="argument-chain">
          <span>Usar para apoiar</span><b>→</b><span>Verificar informação</span><b>→</b><span>Localizar fonte real</span><b>→</b><span>Comparar</span><b>→</b><span>Assumir autoria da decisão final</span>
        </div>

        <div class="note-box">
          <strong class="card-title">Uma regra prática</strong>
          <p>Se uma informação é importante para sua conclusão, você precisa conseguir explicar <strong>de onde ela veio e por que confia nela</strong>. “A IA disse” não encerra a verificação.</p>
        </div>

        ${choice('8','IA e pesquisa','Qual uso preserva melhor a responsabilidade do aluno?',[['a','Pedir referências, não abrir nenhuma e citar todas'],['b','Usar a IA para sugerir palavras-chave e depois localizar, ler e avaliar fontes reais'],['c','Entregar o texto gerado sem conseguir explicar as afirmações']],'b','Correto. A ferramenta apoia uma etapa, mas o estudante continua responsável pela busca, verificação e conclusão.','IA pode ampliar possibilidades de trabalho; não substitui a avaliação das evidências.')}

        <h3>9. Research Builder — da pergunta à produção</h3>
        <div class="builder-box" data-research-builder>
          <strong class="card-title">Planeje uma pequena pesquisa</strong>
          <p>Escolha o foco e o produto final. O roteiro muda para mostrar que pesquisar depende do que você quer descobrir e comunicar.</p>
          <div class="builder-controls">
            <label>Foco
              <select data-research-focus>
                <option value="usefulness">Utilidade do mapa</option>
                <option value="accessibility">Acessibilidade</option>
                <option value="privacy">Privacidade</option>
                <option value="communication">Comunicação com visitantes</option>
              </select>
            </label>
            <label>Produto
              <select data-research-product>
                <option value="page">Página do projeto</option>
                <option value="poster">Pôster</option>
                <option value="presentation">Apresentação oral</option>
                <option value="video">Vídeo curto</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-research-preview></div>
        </div>

        <h3>10. Produzir é escolher o que entra — e o que fica de fora</h3>
        <p>Depois da pesquisa, a equipe ainda precisa decidir <strong>o que o público realmente precisa saber</strong>. Uma página internacional curta não deve receber todas as anotações coletadas.</p>

        <div class="concept-box">
          <strong class="card-title">Estrutura possível para a página</strong>
          <p><strong>Problem:</strong> What difficulty did the team observe?</p>
          <p><strong>Prototype:</strong> What did students create?</p>
          <p><strong>Evidence:</strong> What did the test show?</p>
          <p><strong>Limitations:</strong> What remains uncertain?</p>
          <p><strong>Next step:</strong> What will the team improve or investigate?</p>
        </div>

        <p>Essa organização transforma a pesquisa em comunicação. O inglês deixa de ser o objetivo isolado e passa a ser <strong>meio para estudar, explicar, argumentar e participar de uma comunidade maior</strong>.</p>

        ${choice('9','Produção responsável','Qual frase seria mais adequada para a seção “Evidence”?',[['a','Our app is the best navigation solution ever created.'],['b','In our small test, most survey respondents reported that the map helped them find their destination.'],['c','Everyone loves the app.']],'b','Isso. A frase apresenta o resultado com contexto e sem exagerar a força da evidência.','Produção acadêmica ou de divulgação exige precisão: o texto deve ser tão forte quanto a evidência permite.')}

        <div class="challenge-box">
          <strong class="card-title">Desafio de transferência — uma pesquisa pequena de verdade</strong>
          <p>Escolha uma questão ligada à escola, tecnologia, juventude ou ao seu curso. Produza uma investigação curta:</p>
          <ol>
            <li>formule uma pergunta delimitada;</li>
            <li>crie pelo menos duas combinações de palavras-chave em inglês;</li>
            <li>selecione duas fontes diferentes e explique por que elas ajudam;</li>
            <li>registre uma informação de cada fonte sem copiar parágrafos;</li>
            <li>produza uma síntese de 4 a 6 linhas em inglês;</li>
            <li>inclua as fontes utilizadas e uma limitação da sua conclusão.</li>
          </ol>
          <p><strong>Critério principal:</strong> outra pessoa deve conseguir distinguir claramente <em>o que veio das fontes</em>, <em>o que você concluiu</em> e <em>o que ainda não sabe</em>.</p>
        </div>

        <section class="chapter-checkpoint">
          <h3>Fechamento MbB</h3>
          <div class="argument-chain">
            <span>Entender: formular o problema</span><b>→</b><span>Experimentar: buscar e comparar</span><b>→</b><span>Analisar: avaliar e sintetizar</span><b>→</b><span>Aplicar: produzir com autoria</span>
          </div>
          <p>Pesquisar em inglês não é colecionar palavras difíceis nem traduzir páginas. É usar a língua para <strong>fazer perguntas melhores, encontrar evidências, construir relações e comunicar uma conclusão pela qual você consegue responder</strong>.</p>
        </section>
      `,
      init:initResearch
    });
  }

  function initResearch(root) {
    const lab = root.querySelector('[data-research-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-research-task]')];
      const progress = lab.querySelector('[data-research-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        task.querySelectorAll('[data-research-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.researchChoice === task.dataset.answer;
            const feedback = task.querySelector('[data-research-feedback]');
            task.querySelectorAll('[data-research-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Boa decisão.</strong> A ação mantém a pesquisa ligada à evidência e à pergunta.';
            } else {
              task.dataset.done = 'false';
              if (feedback) feedback.innerHTML = '<strong>Reavalie.</strong> Pergunte se essa escolha permite verificar a informação e sustentar uma conclusão responsável.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-research-builder]');
    if (builder) {
      const focus = builder.querySelector('[data-research-focus]');
      const product = builder.querySelector('[data-research-product]');
      const preview = builder.querySelector('[data-research-preview]');
      const plans = {
        usefulness:{
          page:'Question: How useful was the map for first-time visitors in our school test? Search: visitor navigation, digital map, wayfinding. Evidence: survey + observation. Page: present result, limitation and next step.',
          poster:'Question: What did visitors report about the map? Use one clear number, one short interpretation and one limitation. Avoid turning the poster into a wall of text.',
          presentation:'Question: What did the test suggest about usefulness? Prepare a 60-second explanation with problem, evidence, limitation and next step.',
          video:'Question: Did the prototype help visitors navigate? Use a short visual sequence: problem → test → evidence → what still needs improvement.'
        },
        accessibility:{
          page:'Question: What accessibility barriers could affect the use of a digital school map? Search: accessible navigation, visual impairment, indoor wayfinding, mobile accessibility. Compare guidance with your prototype.',
          poster:'Select 2–3 accessibility needs, explain why they matter and show one concrete improvement for the prototype.',
          presentation:'Explain one barrier, one source-based recommendation and one change the team could test with real users.',
          video:'Show a user scenario, identify an accessibility barrier and present an evidence-based improvement. Do not claim accessibility without testing.'
        },
        privacy:{
          page:'Question: What data does the prototype need to function? Compare actual permissions, documentation and privacy risks. Separate what the app does from what users merely assume it does.',
          poster:'Map data flow simply: data requested → purpose → storage → risk → protection. Cite the source of each technical claim.',
          presentation:'Explain the difference between permission, collection and storage. Use documentation plus a reproducible test when possible.',
          video:'Start with a permission screen, ask what it really means, then show how you verified the behavior. Avoid fear-based conclusions.'
        },
        communication:{
          page:'Question: What information helps first-time visitors understand the school map quickly? Search: plain language, wayfinding instructions, visitor communication. Compare external guidance with user feedback.',
          poster:'Use a before/after example of an instruction and explain why the revised version is clearer for an international audience.',
          presentation:'Present one communication problem, evidence from users and a revised English instruction designed for clarity.',
          video:'Show a confusing instruction, identify the problem and demonstrate a clearer version with visual support.'
        }
      };
      const render = () => {
        if (!focus || !product || !preview) return;
        preview.textContent = plans[focus.value][product.value];
      };
      focus?.addEventListener('change', render);
      product?.addEventListener('change', render);
      render();
    }
  }

  MBB.enableChapter('09 Estudar', showChapter);
})();