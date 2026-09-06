(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Arte e cultura',
      technical:'voz • narrador • tema • evidência textual • linguagem figurada • atmosfera • contexto cultural • tradução e adaptação • autoria • interpretação',
      title:'07 — Histórias, música e cultura',
      objective:'<strong>Objetivo:</strong> interpretar textos artísticos curtos em inglês observando voz, tema, imagens, escolhas de linguagem e contexto cultural, sustentando interpretações com evidências e percebendo que compreender arte vai além de traduzir palavra por palavra.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Você entendeu as palavras — mas entendeu a obra?</span>
          <div class="hero-box">
            <strong class="card-title">A feira da escola ganhou um espaço chamado “Voices in English”.</strong>
            <p>A turma decide apresentar pequenas produções em inglês junto do aplicativo: uma canção original criada por estudantes, uma micro-história e comentários sobre referências culturais encontradas em jogos, séries, livros e músicas.</p>
            <p>Um colega traduz todas as palavras da canção e afirma: “Pronto, já sei o que ela significa.” Outro lê a micro-história e diz que basta descobrir quem fez o quê.</p>
            <p>Mas a turma percebe que textos artísticos funcionam de outro modo: <strong>imagem, repetição, silêncio, voz, ponto de vista, ritmo e contexto também constroem sentido</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como interpretar uma obra em inglês sem transformar arte em simples exercício de tradução?</p>
          </div>
        </section>

        <div class="source-box">
          <strong class="card-title">Trecho original para esta aula — “Between Two Maps”</strong>
          <p><em>I carry home in my pocket.<br>
          New streets move under my shoes.<br>
          Every hello changes the map,<br>
          but I don’t lose where I began.</em></p>
          <p><small>Texto original produzido para fins didáticos no Mundo bit Byte; não é trecho de música comercial.</small></p>
        </div>

        ${choice('1','Primeira interpretação','Qual leitura é melhor sustentada pelo trecho?',[['a','A voz fala apenas sobre carregar um mapa físico no bolso'],['b','A voz parece relacionar mudança, novos encontros e pertencimento sem apagar a própria origem'],['c','O texto explica como usar um aplicativo de mapas']],'b','Isso. “home”, “new streets”, “every hello” e “where I began” constroem uma ideia de mudança e pertencimento.','Procure relações entre várias palavras e imagens, não uma tradução isolada de uma linha.')}

        <h3>1. Interpretar é propor uma leitura e mostrar por quê</h3>
        <p>Em textos artísticos, uma interpretação não precisa ser a única possível. Mas também não pode ser qualquer coisa. Uma leitura fica mais forte quando consegue mostrar <strong>quais elementos do texto sustentam a conclusão</strong>.</p>

        <div class="argument-chain">
          <span>O que percebi?</span><b>→</b><span>Que trecho me fez pensar isso?</span><b>→</b><span>Que efeito essa escolha produz?</span><b>→</b><span>Minha leitura combina com o conjunto?</span>
        </div>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Opinião sem evidência</strong><p>“A música é sobre amizade porque eu achei.”</p></div>
          <div class="mini-card"><strong>Interpretação sustentada</strong><p>“A ideia de novos vínculos aparece em ‘Every hello changes the map’, associando encontros a mudanças na trajetória da voz.”</p></div>
        </div>

        ${choice('2','Evidência textual','Qual resposta interpreta e também apresenta evidência?',[['a','O texto é bonito.'],['b','A voz parece viver uma mudança, porque combina “new streets” com “where I began”, aproximando novidade e origem.'],['c','Pocket significa bolso.']],'b','Correto. A resposta transforma observações do texto em argumento interpretativo.','Uma boa leitura literária responde “o que isso sugere?” e também “onde o texto mostra isso?”.')}

        <h3>2. Quem fala no texto não é automaticamente quem escreveu</h3>
        <p>Em uma canção, poema ou narrativa, existe uma <strong>voz construída dentro da obra</strong>. Em narrativas, costumamos falar em narrador; em poemas e letras, podemos falar em voz poética ou eu lírico. Essa voz pode ter experiências diferentes das do autor real.</p>

        <div class="concept-box">
          <strong class="card-title">Autor ≠ voz da obra</strong>
          <p>Se uma letra diz <strong>“I left my town yesterday”</strong>, isso não prova que o compositor realmente deixou sua cidade ontem. A primeira pessoa faz parte da construção artística e precisa ser analisada dentro do texto.</p>
        </div>

        ${choice('3','Voz da obra','Se uma canção usa “I”, qual conclusão é mais cuidadosa?',[['a','Tudo o que aparece em primeira pessoa aconteceu literalmente com o autor'],['b','Existe uma voz em primeira pessoa no texto; para afirmar algo sobre a vida do autor seriam necessárias outras fontes'],['c','Textos artísticos nunca podem usar experiências reais']],'b','Isso. Primeiro analise a voz dentro da obra; biografia exige evidência externa.','Não transforme uma escolha de linguagem em informação biográfica automática.')}

        <h3>3. Algumas imagens dizem mais do que a frase literal</h3>
        <p>Volte à linha <strong>“I carry home in my pocket.”</strong> Literalmente, uma casa não cabe no bolso. A estranheza é justamente uma pista de que a expressão está construindo uma <strong>imagem figurada</strong>.</p>

        <div class="language-tool">
          <strong class="card-title">Language in art</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Imagem</strong><code>home in my pocket</code><p>Pode sugerir lembranças, identidade ou vínculos carregados consigo.</p></div>
            <div class="toolbox-item"><strong>Metáfora</strong><code>changes the map</code><p>Um encontro não redesenha necessariamente ruas; pode mudar a trajetória da pessoa.</p></div>
            <div class="toolbox-item"><strong>Contraste</strong><code>new streets / where I began</code><p>Aproxima novidade e origem.</p></div>
            <div class="toolbox-item"><strong>Repetição</strong><code>every...</code><p>Pode ampliar a sensação de continuidade ou recorrência.</p></div>
          </div>
        </div>

        ${choice('4','Leitura figurada','Qual interpretação de “Every hello changes the map” respeita melhor o contexto?',[['a','Cada cumprimento altera o desenho oficial das ruas'],['b','Cada novo encontro pode modificar relações, escolhas ou caminhos da pessoa'],['c','A frase não pode ter sentido porque mapas não mudam quando alguém fala']],'b','Correto. A leitura figurada conecta a imagem ao tema de deslocamento, encontro e pertencimento.','Quando a leitura literal gera estranheza, investigue o efeito figurado antes de descartar a frase.')}

        <h3>4. Música também produz sentido pela forma</h3>
        <p>Mesmo sem ouvir uma gravação, podemos observar recursos típicos de letras: versos curtos, repetições, contrastes e palavras que funcionariam como pontos fortes de um refrão. Quando existe performance, entram ainda <strong>melodia, ritmo, timbre, intensidade, pausa e interpretação vocal</strong>.</p>

        <div class="note-box">
          <strong class="card-title">A letra não é a música inteira</strong>
          <p>Uma mesma sequência de palavras cantada de modo calmo ou agressivo pode produzir efeitos diferentes. Da mesma forma, a música pode reforçar, tensionar ou até ironizar aquilo que as palavras parecem dizer.</p>
        </div>

        ${choice('5','Multimodalidade artística','Por que analisar apenas a tradução da letra pode ser insuficiente?',[['a','Porque música não tem palavras'],['b','Porque voz, ritmo, melodia, pausas e performance também podem modificar o efeito do texto'],['c','Porque toda música em inglês significa a mesma coisa']],'b','Isso. Em uma obra multimodal, diferentes modos de expressão trabalham juntos.','Pergunte não apenas “o que foi dito?”, mas também “como isso foi apresentado?”.')}

        <h3>5. Agora muda o gênero: uma micro-história</h3>
        <div class="source-box">
          <strong class="card-title">Texto original — “The Empty Chair”</strong>
          <p>On her first day at the new school, Maya chose the last chair near the window. At lunch, she opened the same blue lunchbox she had carried in her old town. A student stopped beside her table.</p>
          <p>“Is this seat free?”</p>
          <p>Maya looked at the empty chair, then at the crowded room.</p>
          <p>“It is now,” she said, moving her backpack to the floor.</p>
          <p><small>Microficção original produzida para esta aula.</small></p>
        </div>

        ${choice('6','Inferência narrativa','O final sugere principalmente que Maya',[['a','não percebe que existe uma cadeira vazia'],['b','abre espaço para uma possível aproximação, e a mudança da mochila torna essa decisão visível'],['c','quer abandonar a escola imediatamente']],'b','Correto. A ação concreta de tirar a mochila do lugar sustenta a interpretação de abertura para contato.','Observe ações, contrastes e pequenas mudanças; histórias nem sempre dizem diretamente o que o personagem sente.')}

        <h3>6. Narrativas deixam coisas sem dizer</h3>
        <p>A micro-história nunca afirma “Maya estava insegura” ou “Maya decidiu fazer amizade”. Mesmo assim, o leitor pode construir hipóteses a partir de detalhes como <strong>last chair, crowded room, empty chair</strong> e o movimento da mochila.</p>

        <div class="concept-box">
          <strong class="card-title">Inferência literária</strong>
          <p>É a interpretação de algo que o texto sugere sem declarar diretamente. Quanto mais a inferência consegue explicar diferentes detalhes da obra, mais consistente ela tende a ser.</p>
        </div>

        ${choice('7','Detalhe significativo','Qual detalhe funciona melhor como evidência de mudança na atitude de Maya?',[['a','The same blue lunchbox'],['b','moving her backpack to the floor'],['c','the window existe perto da cadeira']],'b','Isso. A mochila ocupava o espaço; ao tirá-la, Maya transforma fisicamente uma cadeira vazia em lugar disponível para outra pessoa.','Procure ações que mudam a situação narrativa, não apenas objetos mencionados.')}

        <h3>7. Contexto cultural ajuda — mas não autoriza estereótipos</h3>
        <p>Obras podem trazer comida, escola, festas, formas de tratamento, esporte, religião, roupas, música, humor e referências históricas de determinados grupos. Conhecer esse contexto pode enriquecer a leitura.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>Contextualizar</strong><p>Pesquisar o significado de uma referência e entender por que ela aparece naquela obra, comunidade ou período.</p></div>
          <div class="mini-card"><strong>Estereotipar</strong><p>Transformar uma obra ou costume particular em regra sobre “todos os americanos”, “todos os britânicos” ou qualquer outro grupo.</p></div>
        </div>

        <p>O inglês circula por muitos países, comunidades e ambientes digitais. Portanto, “cultura em inglês” não é uma cultura única. Uma obra deve ser situada com mais precisão: <strong>quem produziu, onde, quando, para qual público e em qual contexto</strong>.</p>

        ${choice('8','Cultura com cuidado','Você encontra em um filme uma tradição escolar específica. Qual conclusão é mais responsável?',[['a','Todas as escolas de países de língua inglesa funcionam exatamente assim'],['b','A tradição faz parte do contexto daquela obra; vale investigar onde ela ocorre e quais variações existem'],['c','Contexto cultural nunca importa para interpretar uma obra']],'b','Correto. Contextualizar amplia a compreensão sem transformar uma experiência particular em regra universal.','Cultura é diversa internamente; uma obra oferece uma janela, não um retrato completo de todos.')}

        <h3>8. Traduzir é também fazer escolhas</h3>
        <p>Compare a imagem <strong>“I carry home in my pocket”</strong>. Uma tradução palavra por palavra preserva a imagem estranha. Uma adaptação pode tentar tornar o sentido mais explícito, mas talvez perca a força poética.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Mais literal</strong><p>“Carrego meu lar no bolso.”</p><p>Preserva a imagem original e sua estranheza.</p></div>
          <div class="mini-card"><strong>Mais explicativa</strong><p>“Levo comigo as lembranças de casa.”</p><p>Explica uma interpretação possível, mas reduz a abertura da metáfora.</p></div>
          <div class="mini-card"><strong>Questão crítica</strong><p>O que precisa ser preservado: palavra, imagem, ritmo, ambiguidade ou efeito?</p></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Não existe uma régua única para toda tradução artística</strong>
          <p>Legenda, poema, música cantável e resumo têm objetivos diferentes. Traduzir envolve decidir o que priorizar e reconhecer o que pode mudar no processo.</p>
        </div>

        ${choice('9','Tradução e efeito','Por que “Levo comigo as lembranças de casa” não é exatamente equivalente a “Carrego meu lar no bolso”?',[['a','Porque a versão explicativa escolhe uma interpretação para a metáfora e reduz parte de sua ambiguidade'],['b','Porque traduções nunca podem mudar palavras'],['c','Porque a palavra home não possui nenhum sentido possível']],'a','Isso. Uma tradução pode comunicar uma leitura, mas também pode fechar possibilidades que a imagem original deixava abertas.','Compare não só significado de dicionário, mas também imagem, ambiguidade e efeito.')}

        <h3>9. Interpretation Lab — monte uma leitura com evidência</h3>
        <div class="builder-box" data-art-builder>
          <strong class="card-title">Da observação à interpretação</strong>
          <div class="builder-controls">
            <label>Material
              <select data-art-material>
                <option value="song">Trecho “Between Two Maps”</option>
                <option value="story">Micro-história “The Empty Chair”</option>
              </select>
            </label>
            <label>Foco
              <select data-art-focus>
                <option value="theme">Tema</option>
                <option value="image">Imagem/detalhe</option>
                <option value="voice">Voz/personagem</option>
                <option value="culture">Contexto</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-art-preview></div>
        </div>

        <h3>10. Não procure “a resposta escondida do professor”</h3>
        <p>Uma boa aula de arte e literatura não deveria ensinar que existe sempre uma frase secreta que somente o professor conhece. O estudante precisa aprender a <strong>formular uma leitura, confrontá-la com a obra, escutar outras interpretações e revisar a própria hipótese quando necessário</strong>.</p>

        <div class="argument-chain">
          <span>Observar</span><b>→</b><span>Interpretar</span><b>→</b><span>Evidenciar</span><b>→</b><span>Comparar leituras</span><b>→</b><span>Revisar</span>
        </div>

        ${choice('10','Leitura crítica','Dois alunos apresentam interpretações diferentes e ambos citam elementos relevantes da obra. O que fazer?',[['a','Escolher automaticamente a interpretação mais curta'],['b','Comparar quais evidências cada leitura explica, reconhecer convergências e discutir limites'],['c','Concluir que qualquer resposta está certa']],'b','Correto. Interpretações podem divergir, mas precisam dialogar com evidências e com o conjunto da obra.','Pluralidade de leitura não significa ausência de critérios.')}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>11. Curadoria cultural com interpretação</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Escolha uma obra curta em inglês que você realmente consumiria: uma canção, um poema, uma cena, uma narrativa de jogo, um quadrinho, um conto curto ou um vídeo artístico. Não copie a obra inteira. Registre apenas as informações necessárias para sua análise.</p>
            <ol>
              <li>identifique obra, autoria e contexto básico;</li>
              <li>explique quem fala ou de qual ponto de vista acompanhamos a obra;</li>
              <li>selecione <strong>dois elementos concretos</strong> que sustentem sua interpretação;</li>
              <li>explique um efeito de linguagem, imagem, som, ritmo, enquadramento ou narrativa;</li>
              <li>investigue uma referência cultural relevante sem generalizar para todo um país ou povo;</li>
              <li>escreva em português ou inglês uma interpretação curta começando por <strong>“I think the work suggests...”</strong> e depois justifique com evidências.</li>
            </ol>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> você percebeu que textos artísticos constroem sentido por voz, imagens, forma e contexto.</p>
          <p><strong>Experimentar:</strong> interpretou uma letra original e uma micro-história sem depender de tradução total.</p>
          <p><strong>Analisar:</strong> sustentou leituras com evidências e distinguiu contexto cultural de estereótipo.</p>
          <p><strong>Aplicar:</strong> levou o método para uma obra cultural escolhida por você.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const builder = root.querySelector('[data-art-builder]');
    if (!builder) return;

    const material = builder.querySelector('[data-art-material]');
    const focus = builder.querySelector('[data-art-focus]');
    const preview = builder.querySelector('[data-art-preview]');

    const examples = {
      song:{
        theme:'Tema possível: mudança e pertencimento. Evidências: “new streets”, “every hello” e “where I began”. Pergunta de revisão: como novidade e origem convivem no trecho?',
        image:'Observe “home in my pocket” e “changes the map”. Explique primeiro a imagem literal e depois o que ela pode sugerir dentro do conjunto.',
        voice:'A voz fala em primeira pessoa e combina origem, deslocamento e encontros. Não confunda automaticamente essa voz com a biografia de um autor real.',
        culture:'Antes de associar o texto a um país ou grupo, procure dados de produção. O trecho sozinho permite discutir pertencimento, mas não autoriza atribuir uma cultura específica.'
      },
      story:{
        theme:'Tema possível: abertura para pertencimento em um ambiente novo. Evidências: a cadeira isolada no início e a mochila retirada no final.',
        image:'Compare “last chair”, “crowded room” e “empty chair”. Como espaço físico ajuda a mostrar isolamento e possibilidade de aproximação?',
        voice:'A narrativa acompanha Maya em terceira pessoa. Observe o que o narrador mostra por ações sem declarar diretamente seus sentimentos.',
        culture:'A escola e o almoço formam o contexto da cena, mas o texto não fornece base para generalizações sobre todas as escolas ou culturas.'
      }
    };

    const render = () => {
      if (!material || !focus || !preview) return;
      preview.textContent = examples[material.value][focus.value];
    };

    material.addEventListener('change',render);
    focus.addEventListener('change',render);
    render();
  }

  MBB.enableChapter('07 Histórias', showChapter);
})();