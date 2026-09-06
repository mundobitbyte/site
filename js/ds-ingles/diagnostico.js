(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'Leitura por contexto',prompt:'Um aplicativo mostra: “Storage almost full. Free up space to continue.” Mesmo sem conhecer todas as palavras, qual pista ajuda mais a agir?',options:['O contexto da tela, palavras conhecidas e o botão disponível','Traduzir cada palavra antes de fazer qualquer coisa','Ignorar a mensagem','Ainda não sei'],answer:0},
    {area:'Skimming',prompt:'Você abre uma página longa em inglês e quer descobrir rapidamente qual é o assunto principal. Qual estratégia é mais adequada?',options:['Ler palavra por palavra','Observar título, subtítulos, imagens, palavras repetidas e primeiras linhas para captar a ideia geral','Começar pelo dicionário','Ainda não sei'],answer:1},
    {area:'Scanning',prompt:'Em um cartaz de evento em inglês, você precisa apenas descobrir horário e local. O melhor é:',options:['Procurar diretamente números, horários, nomes de lugares e palavras-chave','Traduzir o cartaz inteiro','Ler apenas o rodapé','Ainda não sei'],answer:0},
    {area:'Cognatos e pistas',prompt:'Em “International Robotics Exhibition — Free Entry”, o que pode ser inferido com apoio de cognatos e palavras conhecidas?',options:['É uma exposição internacional de robótica com entrada gratuita','É uma prova obrigatória','Não é possível inferir nada','Ainda não sei'],answer:0},
    {area:'Interação e esclarecimento',prompt:'Você não entendeu o que uma pessoa disse em inglês. Qual frase ajuda a manter a interação?',options:['Could you repeat that, please?','I never speak English.','No English. Bye.','Ainda não sei'],answer:0},
    {area:'Compreensão oral',prompt:'Antes de ouvir um vídeo curto sobre um tema conhecido, o que pode ajudar na compreensão?',options:['Ativar o que você já sabe sobre o tema e decidir que informação quer identificar','Tentar escrever todas as palavras que ouvir','Esperar compreender 100% do áudio','Ainda não sei'],answer:0},
    {area:'Inglês como língua franca',prompt:'Duas pessoas de países diferentes usam inglês para se comunicar, embora nenhuma delas tenha o inglês como primeira língua. Isso é:',options:['Um uso real do inglês como língua franca','Um inglês necessariamente errado','Uma situação sem relação com o aprendizado escolar','Ainda não sei'],answer:0},
    {area:'Variação linguística',prompt:'Uma pessoa fala inglês com sotaque indiano, outra com sotaque brasileiro e outra com sotaque britânico. Qual afirmação é mais adequada?',options:['Apenas um desses sotaques pode ser legítimo','A variação é natural; inteligibilidade e adequação importam mais do que imitar um único sotaque','Todo sotaque precisa ser eliminado','Ainda não sei'],answer:1},
    {area:'Mídia e checagem',prompt:'Uma postagem em inglês afirma algo surpreendente e viraliza. Antes de compartilhar, o que fazer?',options:['Verificar fonte, data, autoria, contexto e comparar com outras fontes confiáveis','Confiar porque está em inglês','Confiar porque tem muitas curtidas','Ainda não sei'],answer:0},
    {area:'Vocabulário em uso',prompt:'Ao encontrar uma palavra técnica desconhecida em um tutorial, qual recurso é mais útil?',options:['Um glossário, dicionário confiável ou o contexto do próprio tutorial','Escolher o primeiro significado sem olhar o contexto','Desistir da leitura','Ainda não sei'],answer:0},
    {area:'Concepção inicial: aprender inglês',prompt:'Aprender inglês significa principalmente traduzir todas as palavras e decorar regras?',options:['Sim','Não; envolve compreender, interagir, ler estrategicamente, ouvir, produzir e usar a língua em contextos reais','Somente para quem vai viajar','Ainda não sei'],answer:1,scored:false},
    {area:'Concepção inicial: erro e comunicação',prompt:'Se você cometer um erro gramatical pequeno, a comunicação automaticamente fracassou?',options:['Sim','Não; é preciso avaliar se a mensagem continua compreensível e aprender a revisar o que for necessário','Só falantes nativos podem cometer erros','Ainda não sei'],answer:1,scored:false}
  ];

  const reviews = {
    'Leitura por contexto':'Use contexto, interface, imagens, palavras conhecidas e objetivo da situação antes de recorrer à tradução.',
    'Skimming':'Treine captar o assunto geral usando título, organização, palavras-chave e pistas visuais.',
    'Scanning':'Procure a informação específica de que precisa: datas, nomes, números, locais e termos relevantes.',
    'Cognatos e pistas':'Cognatos ajudam, mas precisam ser confirmados pelo contexto; nem toda palavra parecida significa a mesma coisa.',
    'Interação e esclarecimento':'Aprenda frases de sobrevivência comunicativa: pedir repetição, confirmar entendimento e pedir ajuda.',
    'Compreensão oral':'Antes de ouvir, formule hipóteses e defina o que deseja identificar; durante a escuta, procure palavras-chave e ideias.',
    'Inglês como língua franca':'O inglês circula entre pessoas de muitas línguas e culturas; comunicação não pertence a um único país.',
    'Variação linguística':'Reconheça sotaques e variedades sem hierarquizá-los automaticamente; foque inteligibilidade, contexto e respeito.',
    'Mídia e checagem':'Ler em inglês também exige verificar autoria, data, evidências, origem e intenção da publicação.',
    'Vocabulário em uso':'Use dicionários, glossários e pistas contextuais para escolher o significado adequado, especialmente em textos técnicos.'
  };

  function markup(q,index) {
    const name = `enDiag${index}`;
    const unscored = q.scored === false;
    return `<div class="quiz-item${unscored?' is-unscored':''}" data-area="${q.area}" data-answer="${q.answer}" data-scored="${unscored?'false':'true'}">
      ${unscored?'<span class="question-tag">Concepção inicial • não vale ponto</span>':''}
      <p>${index+1}. ${q.prompt}</p>
      ${q.options.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function showDiagnostic() {
    MBB.showLesson({
      unit:'Antes de começar',
      technical:'diagnóstico • leitura estratégica • oralidade • inglês como língua franca • mídia • vocabulário em contexto',
      title:'Quanto inglês você já consegue usar sem perceber?',
      objective:'<strong>Objetivo:</strong> identificar estratégias e conhecimentos prévios para compreender e usar inglês em situações reais antes de estudar novos recursos da língua.',
      html:`
        <div class="hero-box">
          <strong class="card-title">Este diagnóstico não é uma prova de “quanto inglês você sabe”.</strong>
          <p>Ele observa algo mais útil: <strong>o que você faz quando encontra inglês no celular, em um vídeo, em um jogo, numa pesquisa, num aviso ou numa conversa</strong>. Responda sem pesquisar. Marcar <em>Ainda não sei</em> é uma resposta válida.</p>
        </div>
        <div class="diagnostic-intro">
          <div class="mini-card"><strong>Não vamos medir tradução palavra por palavra</strong><p>Compreender uma situação envolve objetivo, contexto, imagens, palavras-chave, repertório e decisões.</p></div>
          <div class="mini-card"><strong>Não vamos medir “sotaque perfeito”</strong><p>O foco inicial é conseguir compreender, ser compreendido, pedir ajuda, confirmar sentidos e ampliar sua autonomia.</p></div>
        </div>
        <section id="enDiagnostic">${questions.map(markup).join('')}<div class="quiz-actions"><button class="action-button primary" id="checkEnDiagnostic" type="button">Conferir diagnóstico</button><button class="action-button" id="resetEnDiagnostic" type="button">Refazer</button></div><div id="enDiagnosticResult" class="quiz-result" aria-live="polite"></div></section>`,
      init:init
    });
  }

  function init(root) {
    const check = $('#checkEnDiagnostic',root);
    const reset = $('#resetEnDiagnostic',root);
    const result = $('#enDiagnosticResult',root);

    check?.addEventListener('click',()=>{
      let score=0,total=0;
      const gaps=[];
      $$('[data-scored]',root).forEach(box=>{
        if (box.dataset.scored==='false') return;
        total++;
        const selected = $('input:checked',box);
        if (selected && Number(selected.value)===Number(box.dataset.answer)) score++;
        else gaps.push(box.dataset.area);
      });
      const unique=[...new Set(gaps)];
      const message=score>=9?'Você já usa estratégias muito úteis.':score>=7?'Boa base para começar usando inglês com mais autonomia.':score>=5?'Há estratégias importantes para fortalecer durante o percurso.':'Vamos reconstruir a base sem pressa e sem depender de tradução total.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O resultado mostra onde concentrar atenção. Ele não mede inteligência, talento ou “dom para idiomas”.</p></div>${unique.length?`<div class="review-panel"><h3>O que merece atenção</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome esse fundamento ao longo dos próximos capítulos.'}</p></div>`).join('')}</div></div>`:'<div class="ok-box"><strong>Nenhuma revisão obrigatória identificada.</strong><p>Agora use essa base em situações cada vez mais complexas.</p></div>'}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();