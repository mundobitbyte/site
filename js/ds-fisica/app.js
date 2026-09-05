(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const home = $('#seriesHome');
  const course = $('#courseView');
  const menu = $('#lessonMenu');
  const content = $('#lessonContent');

  const chapters = [
    { group:'Antes de começar', menu:'00 Avaliação Diagnóstica', active:true },
    { group:'Movimento e forças', menu:'01 O mundo está em movimento' },
    { group:'Movimento e forças', menu:'02 Por que as coisas mudam de movimento?' },
    { group:'Energia e matéria', menu:'03 Energia: de onde vem e para onde vai?' },
    { group:'Energia e matéria', menu:'04 Batidas, impulsos e colisões' },
    { group:'Energia e matéria', menu:'05 Temperatura não é calor' },
    { group:'Equilíbrio e fluidos', menu:'06 Como as coisas ficam em equilíbrio' },
    { group:'Equilíbrio e fluidos', menu:'07 Por que navios flutuam?' },
    { group:'Terra e Cosmos', menu:'08 Da queda de uma maçã ao Universo' },
    { group:'Terra e Cosmos', menu:'09 Poderia existir vida em outro mundo?' },
    { group:'Ciência e tecnologia', menu:'10 Física, tecnologia e informação confiável' },
    { group:'Prática', menu:'99 Exercícios e desafios' }
  ];

  const graphA = `
    <div class="concept-box">
      <strong class="card-title">Observe o gráfico</strong>
      <svg class="physics-graph" viewBox="0 0 620 310" role="img" aria-label="Gráfico distância por tempo. Pontos em zero segundo e zero metro, dez segundos e cem metros, vinte segundos e duzentos metros.">
        <line class="graph-grid" x1="70" y1="240" x2="570" y2="240"/>
        <line class="graph-grid" x1="70" y1="140" x2="570" y2="140"/>
        <line class="graph-grid" x1="70" y1="40" x2="570" y2="40"/>
        <line class="graph-grid" x1="70" y1="40" x2="70" y2="240"/>
        <line class="graph-grid" x1="320" y1="40" x2="320" y2="240"/>
        <line class="graph-grid" x1="570" y1="40" x2="570" y2="240"/>
        <line class="graph-axis" x1="70" y1="240" x2="585" y2="240"/>
        <line class="graph-axis" x1="70" y1="250" x2="70" y2="30"/>
        <polyline class="graph-line" points="70,240 320,140 570,40"/>
        <circle class="graph-point" cx="70" cy="240" r="6"/>
        <circle class="graph-point" cx="320" cy="140" r="6"/>
        <circle class="graph-point" cx="570" cy="40" r="6"/>
        <text class="graph-text" x="65" y="262">0</text>
        <text class="graph-text" x="310" y="262">10</text>
        <text class="graph-text" x="560" y="262">20</text>
        <text class="graph-text" x="43" y="245">0</text>
        <text class="graph-text" x="32" y="145">100</text>
        <text class="graph-text" x="32" y="45">200</text>
        <text class="graph-label" x="280" y="295">Tempo (s)</text>
        <text class="graph-label" x="8" y="28">Distância (m)</text>
      </svg>
    </div>`;

  const graphB = `
    <div class="concept-box">
      <strong class="card-title">Observe o gráfico</strong>
      <svg class="physics-graph" viewBox="0 0 620 310" role="img" aria-label="Gráfico distância por tempo. Pontos em zero segundo e zero metro, cinco segundos e cinquenta metros, dez segundos e cem metros.">
        <line class="graph-grid" x1="70" y1="240" x2="570" y2="240"/>
        <line class="graph-grid" x1="70" y1="140" x2="570" y2="140"/>
        <line class="graph-grid" x1="70" y1="40" x2="570" y2="40"/>
        <line class="graph-grid" x1="70" y1="40" x2="70" y2="240"/>
        <line class="graph-grid" x1="320" y1="40" x2="320" y2="240"/>
        <line class="graph-grid" x1="570" y1="40" x2="570" y2="240"/>
        <line class="graph-axis" x1="70" y1="240" x2="585" y2="240"/>
        <line class="graph-axis" x1="70" y1="250" x2="70" y2="30"/>
        <polyline class="graph-line" points="70,240 320,140 570,40"/>
        <circle class="graph-point" cx="70" cy="240" r="6"/>
        <circle class="graph-point" cx="320" cy="140" r="6"/>
        <circle class="graph-point" cx="570" cy="40" r="6"/>
        <text class="graph-text" x="65" y="262">0</text>
        <text class="graph-text" x="315" y="262">5</text>
        <text class="graph-text" x="560" y="262">10</text>
        <text class="graph-text" x="43" y="245">0</text>
        <text class="graph-text" x="40" y="145">50</text>
        <text class="graph-text" x="32" y="45">100</text>
        <text class="graph-label" x="280" y="295">Tempo (s)</text>
        <text class="graph-label" x="8" y="28">Distância (m)</text>
      </svg>
    </div>`;

  const bankA = [
    {
      area:'Razão e proporcionalidade',
      prompt:'Uma bicicleta percorre 12 km em 40 minutos, mantendo aproximadamente o mesmo ritmo. Quantos quilômetros ela percorreria em 20 minutos?',
      options:['3 km','6 km','12 km','Ainda não sei'],
      answer:1
    },
    {
      area:'Frações e decimais',
      prompt:'Um percurso de 2 km foi dividido em 4 partes iguais. Qual é o comprimento de cada parte?',
      options:['0,25 km','0,5 km','2 km','Ainda não sei'],
      answer:1
    },
    {
      area:'Linguagem algébrica',
      prompt:'Considere y = 3x + 2. Se x = 4, qual é o valor de y?',
      options:['9','12','14','Ainda não sei'],
      answer:2
    },
    {
      area:'Equações',
      prompt:'Qual valor de x torna verdadeira a igualdade 5x = 45?',
      options:['5','9','40','Ainda não sei'],
      answer:1
    },
    {
      area:'Unidades de medida',
      prompt:'Uma estrada possui 2,4 km de comprimento. Quantos metros isso representa?',
      options:['240 m','2.400 m','24.000 m','Ainda não sei'],
      answer:1
    },
    {
      area:'Leitura de gráficos',
      prompt:'Entre 10 s e 20 s, o que aconteceu com a distância registrada no gráfico?',
      visual:graphA,
      options:['Diminuiu 100 m','Não mudou','Aumentou 100 m','Ainda não sei'],
      answer:2
    },
    {
      area:'Tabelas e padrões',
      prompt:'Observe os dados: em 0 s → 0 m; 2 s → 4 m; 4 s → 8 m; 6 s → 12 m. A cada 2 segundos, a posição aumenta quanto?',
      options:['2 m','4 m','8 m','Ainda não sei'],
      answer:1
    },
    {
      area:'Evidências e fontes científicas',
      prompt:'Um vídeo afirma: “Esta pulseira especial reduz a força da gravidade sobre uma pessoa em 50%”. Qual é a atitude mais adequada antes de aceitar a afirmação?',
      options:['Acreditar porque o vídeo tem muitas visualizações','Procurar como isso foi medido, quais evidências foram apresentadas e outras fontes confiáveis','Rejeitar automaticamente porque foi publicado na internet','Ainda não sei'],
      answer:1
    },
    {
      area:'Concepção inicial: movimento e força',
      prompt:'Você está em pé em um ônibus que se movimenta para frente. De repente, o motorista freia. Seu corpo tende a ir para frente. Qual explicação parece fazer mais sentido para você?',
      options:['O corpo tende a continuar o movimento que possuía','A frenagem cria uma força que empurra o passageiro para frente','A gravidade aumenta durante a frenagem','Ainda não sei'],
      answer:0,
      scored:false
    },
    {
      area:'Concepção inicial: queda e gravidade',
      prompt:'Duas bolas de mesmo tamanho e formato, mas com massas diferentes, são soltas juntas da mesma altura. Imagine que a resistência do ar possa ser desprezada. Qual você acredita que chegará primeiro ao chão?',
      options:['A mais pesada','A mais leve','As duas aproximadamente juntas','Ainda não sei'],
      answer:2,
      scored:false
    }
  ];

  const bankB = [
    {
      area:'Razão e proporcionalidade',
      prompt:'Um carro percorre 15 km em 30 minutos, mantendo aproximadamente a mesma média. Quantos quilômetros percorreria em 10 minutos?',
      options:['3 km','5 km','10 km','Ainda não sei'],
      answer:1
    },
    {
      area:'Frações e decimais',
      prompt:'Três litros de água foram divididos igualmente em 6 recipientes. Quanto ficou em cada recipiente?',
      options:['0,25 L','0,5 L','2 L','Ainda não sei'],
      answer:1
    },
    {
      area:'Linguagem algébrica',
      prompt:'Considere y = 2x + 5. Se x = 6, qual é o valor de y?',
      options:['12','17','22','Ainda não sei'],
      answer:1
    },
    {
      area:'Equações',
      prompt:'Qual valor de x torna verdadeira a igualdade 4x = 28?',
      options:['6','7','24','Ainda não sei'],
      answer:1
    },
    {
      area:'Unidades de medida',
      prompt:'Uma pista possui 1,75 km. Quantos metros isso representa?',
      options:['175 m','1.750 m','17.500 m','Ainda não sei'],
      answer:1
    },
    {
      area:'Leitura de gráficos',
      prompt:'Entre 5 s e 10 s, quanto a distância aumentou no gráfico?',
      visual:graphB,
      options:['25 m','50 m','100 m','Ainda não sei'],
      answer:1
    },
    {
      area:'Tabelas e padrões',
      prompt:'Uma tabela mostra: 0 s → 0 m; 3 s → 6 m; 6 s → 12 m; 9 s → 18 m. A cada 3 segundos, a posição aumenta quanto?',
      options:['3 m','6 m','9 m','Ainda não sei'],
      answer:1
    },
    {
      area:'Evidências e fontes científicas',
      prompt:'Um anúncio diz que um adesivo colocado no celular “elimina 100% da radiação” sem apresentar testes. Qual é a melhor atitude?',
      options:['Aceitar porque o anúncio usa termos científicos','Procurar testes verificáveis, método, fonte e outras referências confiáveis','Compartilhar primeiro e verificar depois','Ainda não sei'],
      answer:1
    }
  ];

  const reviews = {
    'Razão e proporcionalidade': `
      <strong>Razão e proporcionalidade</strong>
      <p>Antes de montar uma conta, descubra como as duas grandezas estão relacionadas. Se o ritmo permanece constante, reduzir o tempo pela metade também reduz a distância pela metade.</p>
      <div class="practice"><span>Experimente:</span> uma pessoa percorre 18 km em 60 min. Mantendo o ritmo, quantos quilômetros percorre em 30 min? Resolva antes de conferir mentalmente se o resultado deveria ser menor ou maior que 18 km.</div>`,
    'Frações e decimais': `
      <strong>Frações e decimais</strong>
      <p>Dividir uma quantidade em partes iguais é uma das ideias básicas de fração. O traço de fração representa uma divisão.</p>
      <div class="practice"><span>Experimente:</span> 4 litros divididos igualmente entre 8 recipientes. Faça 4 ÷ 8 e escreva o resultado em decimal.</div>`,
    'Linguagem algébrica': `
      <strong>Linguagem algébrica</strong>
      <p>Uma letra pode representar um valor. Quando esse valor é conhecido, substitua a letra sem alterar as operações da expressão.</p>
      <div class="practice"><span>Experimente:</span> em y = 2x + 1, use x = 5. Primeiro substitua x; depois faça a multiplicação; por último, a soma.</div>`,
    'Equações': `
      <strong>Equações</strong>
      <p>Resolver uma equação é descobrir o valor que torna a igualdade verdadeira. Pense também na operação inversa: se 4 vezes um número vale 28, qual número produz 28?</p>
      <div class="practice"><span>Experimente:</span> resolva 6x = 42 e confira substituindo o valor encontrado na igualdade original.</div>`,
    'Unidades de medida': `
      <strong>Unidades de medida</strong>
      <p>Converter unidade não muda a quantidade física; muda apenas a forma de escrevê-la. Como 1 km = 1.000 m, ao passar de quilômetros para metros o número fica maior.</p>
      <div class="practice"><span>Experimente:</span> converta 1,2 km para metros e pergunte se o novo número representa exatamente a mesma distância.</div>`,
    'Leitura de gráficos': `
      <strong>Leitura de gráficos</strong>
      <p>Leia primeiro os eixos e as unidades. Depois escolha os dois pontos que a pergunta compara. A diferença entre os valores mostra quanto houve de aumento ou diminuição.</p>
      <div class="practice"><span>Experimente:</span> se um gráfico indica 40 m em 4 s e 70 m em 7 s, qual foi o aumento da distância entre esses instantes?</div>`,
    'Tabelas e padrões': `
      <strong>Tabelas e padrões</strong>
      <p>Procure o que muda de uma linha para a seguinte. Compare intervalos iguais antes de concluir que existe um padrão.</p>
      <div class="practice"><span>Experimente:</span> 0 → 0, 2 → 6, 4 → 12, 6 → 18. Qual acréscimo aparece a cada intervalo de 2 unidades?</div>`,
    'Evidências e fontes científicas': `
      <strong>Evidências e fontes científicas</strong>
      <p>Uma afirmação parecer científica não basta. Pergunte: como foi testada? Há dados? O método pode ser verificado? Outras fontes confiáveis chegam a conclusões compatíveis?</p>
      <div class="practice"><span>Experimente:</span> diante de uma promessa tecnológica extraordinária, escreva três informações que você buscaria antes de aceitá-la.</div>`
  };

  function buildMenu() {
    menu.innerHTML = '';
    let lastGroup = '';
    chapters.forEach((chapter) => {
      if (chapter.group !== lastGroup) {
        const heading = document.createElement('div');
        heading.className = 'menu-group-title';
        heading.textContent = chapter.group;
        menu.appendChild(heading);
        lastGroup = chapter.group;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `menu-item${chapter.active ? ' active' : ' pending'}`;
      button.textContent = chapter.menu;
      if (chapter.active) button.addEventListener('click', () => showDiagnostic());
      else {
        button.disabled = true;
        button.title = 'Conteúdo em construção';
      }
      menu.appendChild(button);
    });
  }

  function questionMarkup(question, index, bank) {
    const name = `${bank.toLowerCase()}q${index + 1}`;
    const unscored = question.scored === false;
    return `
      <div class="quiz-item${unscored ? ' is-unscored' : ''}" data-area="${question.area}" data-index="${index}" data-scored="${unscored ? 'false' : 'true'}">
        ${unscored ? '<span class="question-tag">Concepção inicial • não vale ponto</span>' : ''}
        <p>${index + 1}. ${question.prompt}</p>
        ${question.visual || ''}
        ${question.options.map((option, optionIndex) => `
          <label><input type="radio" name="${name}" value="${optionIndex}"> <span>${String.fromCharCode(65 + optionIndex)}) ${option}</span></label>`).join('')}
      </div>`;
  }

  function diagnosticIntro(bank) {
    if (bank === 'B') {
      return `
        <div class="hero-box">
          <strong class="card-title">Segunda tentativa: mesma ideia, novas situações</strong>
          <p>As questões mudaram para verificar se você reconstruiu o raciocínio, e não apenas memorizou respostas. Faça novamente sem consultar a revisão.</p>
        </div>`;
    }
    return `
      <div class="hero-box">
        <strong class="card-title">Descubra seu ponto de partida</strong>
        <p>Esta avaliação não vale nota. Ela serve para identificar o que já está firme e o que merece uma pequena revisão antes de começarmos Física.</p>
      </div>
      <div class="diagnostic-intro">
        <div class="mini-card"><strong>Faça primeiro sem consultar</strong><p>Queremos descobrir o que você realmente lembra. Se não souber, marque <em>Ainda não sei</em> em vez de chutar.</p></div>
        <div class="mini-card"><strong>Duas questões são diferentes</strong><p>As questões finais registram apenas como você pensa hoje sobre alguns fenômenos. Elas não entram na pontuação.</p></div>
      </div>`;
  }

  function renderDiagnostic(bank = 'A', previousScore = null) {
    const data = bank === 'A' ? bankA : bankB;
    content.innerHTML = `
      ${diagnosticIntro(bank)}
      <div id="diagnosticQuiz" data-bank="${bank}">
        ${data.map((q, i) => questionMarkup(q, i, bank)).join('')}
      </div>
      <div class="quiz-actions">
        <button id="checkDiagnostic" class="action-button primary" type="button">Ver resultado</button>
        <button id="clearDiagnostic" class="action-button" type="button">Limpar respostas</button>
      </div>
      <div id="diagnosticResult" class="quiz-result" aria-live="polite"></div>
      <section id="diagnosticReview" class="review-panel" hidden aria-live="polite"></section>`;

    $('#checkDiagnostic').addEventListener('click', () => checkDiagnostic(data, bank, previousScore));
    $('#clearDiagnostic').addEventListener('click', () => {
      $$('input[type="radio"]', $('#diagnosticQuiz')).forEach(input => { input.checked = false; });
      $('#diagnosticResult').innerHTML = '';
      $('#diagnosticReview').hidden = true;
      $('#diagnosticReview').innerHTML = '';
    });
  }

  function getSelection(item) {
    const selected = $('input[type="radio"]:checked', item);
    return selected ? Number(selected.value) : null;
  }

  function resultMessage(score) {
    if (score >= 7) return 'Base muito consistente.';
    if (score >= 5) return 'Boa base, com poucos pontos para revisar.';
    if (score >= 3) return 'Alguns fundamentos importantes precisam ser reconstruídos.';
    return 'Vale reforçar a base antes de avançar.';
  }

  function buildReview(gaps) {
    const review = $('#diagnosticReview');
    const unique = [...new Set(gaps)];
    if (!unique.length) {
      review.innerHTML = `
        <h3>Revisão opcional</h3>
        <div class="ok-box"><strong>Sua base está firme.</strong> Você pode seguir sem revisão obrigatória. Se quiser, retome algum fundamento por iniciativa própria.</div>`;
      return;
    }
    review.innerHTML = `
      <h3>Revisar o que preciso</h3>
      <div class="note-box review-method"><strong>Como revisar sem copiar resposta</strong><p>Leia a ideia, cubra mentalmente o exemplo proposto, resolva sozinho e explique por que cada passo faz sentido.</p></div>
      <div class="review-grid">
        ${unique.map(area => `<div class="review-card" data-review-area="${area}">${reviews[area] || `<strong>${area}</strong><p>Retome este fundamento antes de seguir.</p>`}</div>`).join('')}
      </div>`;
  }

  function checkDiagnostic(data, bank, previousScore) {
    const quiz = $('#diagnosticQuiz');
    const items = $$('.quiz-item', quiz);
    const selections = items.map(getSelection);
    const missing = selections.filter(value => value === null).length;
    const result = $('#diagnosticResult');

    if (missing) {
      result.innerHTML = `<div class="note-box"><strong>Faltam ${missing} ${missing === 1 ? 'resposta' : 'respostas'}.</strong><p>Use “Ainda não sei” quando não souber. Isso também é uma informação importante para o diagnóstico.</p></div>`;
      return;
    }

    let score = 0;
    const gaps = [];
    const conceptions = {};

    items.forEach((item, index) => {
      const question = data[index];
      const selected = selections[index];
      if (question.scored === false) {
        conceptions[question.area] = selected;
        return;
      }
      if (selected === question.answer) score += 1;
      else gaps.push(question.area);
    });

    const total = data.filter(q => q.scored !== false).length;
    const uniqueGaps = [...new Set(gaps)];
    const compare = bank === 'B' && Number.isInteger(previousScore)
      ? `<div class="result-card"><strong>Sua evolução</strong><p>Primeira tentativa: ${previousScore}/${total}. Agora: ${score}/${total}.</p></div>`
      : '';

    result.innerHTML = `
      <div class="${score >= 5 ? 'ok-box' : 'note-box'}">
        <strong>${score}/${total} fundamentos firmes — ${resultMessage(score)}</strong>
        <p>${uniqueGaps.length ? `Vale revisar: ${uniqueGaps.join(', ')}.` : 'Nenhuma lacuna de pré-requisito foi identificada nesta tentativa.'}</p>
      </div>
      <div class="result-grid">
        <div class="result-card"><strong>O que esta pontuação significa</strong><p>Ela é um diagnóstico de entrada, não uma nota. O objetivo é orientar a revisão antes dos novos conteúdos.</p></div>
        ${compare}
        ${bank === 'A' ? '<div class="result-card"><strong>Concepções iniciais registradas</strong><p>As duas questões finais não entraram na pontuação. Voltaremos a essas ideias durante o curso para comparar como seu raciocínio evoluiu.</p></div>' : ''}
      </div>
      <div class="quiz-actions">
        <button id="openReview" class="action-button" type="button">${uniqueGaps.length ? `Revisar o que preciso (${uniqueGaps.length} ${uniqueGaps.length === 1 ? 'assunto' : 'assuntos'})` : 'Consultar revisão, se quiser'}</button>
        ${bank === 'A' ? '<button id="retryDiagnostic" class="action-button success" type="button">Tentar novamente com novas questões</button>' : ''}
      </div>`;

    buildReview(uniqueGaps);

    $('#openReview').addEventListener('click', () => {
      const review = $('#diagnosticReview');
      review.hidden = !review.hidden;
      $('#openReview').textContent = review.hidden
        ? (uniqueGaps.length ? `Revisar o que preciso (${uniqueGaps.length} ${uniqueGaps.length === 1 ? 'assunto' : 'assuntos'})` : 'Consultar revisão, se quiser')
        : 'Fechar revisão';
      if (!review.hidden) review.scrollIntoView({ behavior:'smooth', block:'start' });
    });

    if (bank === 'A') {
      $('#retryDiagnostic').addEventListener('click', () => {
        renderDiagnostic('B', score);
        content.scrollTo ? content.scrollTo({ top:0, behavior:'smooth' }) : window.scrollTo({ top:0, behavior:'smooth' });
      });
    }

    const storage = {
      firstAttempt: bank === 'A' ? { score, total, gaps:uniqueGaps, conceptions, date:new Date().toISOString() } : undefined,
      secondAttempt: bank === 'B' ? { score, total, gaps:uniqueGaps, date:new Date().toISOString() } : undefined
    };

    try {
      const previous = JSON.parse(localStorage.getItem('mbbPhysicsDiagnostic') || '{}');
      const merged = { ...previous };
      if (storage.firstAttempt) merged.firstAttempt = storage.firstAttempt;
      if (storage.secondAttempt) merged.secondAttempt = storage.secondAttempt;
      localStorage.setItem('mbbPhysicsDiagnostic', JSON.stringify(merged));
    } catch (_) {
      /* O diagnóstico continua funcionando mesmo sem armazenamento local. */
    }
  }

  function showDiagnostic() {
    $('#unitName').textContent = 'Antes de começar';
    $('#technicalTitle').textContent = 'Avaliação Diagnóstica';
    $('#lessonTitle').textContent = 'O que você já sabe?';
    $('#lessonObjective').innerHTML = '<strong>Propósito:</strong> identificar os conhecimentos prévios que serão usados em Física e revisar apenas o que estiver fazendo falta.';
    renderDiagnostic('A');
    menu.classList.remove('open');
    $('#openMenu').setAttribute('aria-expanded', 'false');
  }

  function openCourse() {
    home.hidden = true;
    course.hidden = false;
    showDiagnostic();
    window.scrollTo({ top:0, behavior:'auto' });
  }

  buildMenu();
  $('.series-card.active').addEventListener('click', openCourse);
  $('#backToSeries').addEventListener('click', () => {
    course.hidden = true;
    home.hidden = false;
    menu.classList.remove('open');
    window.scrollTo({ top:0, behavior:'smooth' });
  });
  $('#openMenu').addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    $('#openMenu').setAttribute('aria-expanded', String(open));
  });
})();
