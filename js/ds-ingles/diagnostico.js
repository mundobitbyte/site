(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const questions = [
    {area:'To be',prompt:'Complete: “I ___ a student.”',options:['am','is','are','Ainda não sei'],answer:0},
    {area:'Pronomes',prompt:'Qual pronome substitui “Maria and I”?',options:['He','She','We','Ainda não sei'],answer:2},
    {area:'Simple present',prompt:'Complete: “My brother ___ games after school.”',options:['play','plays','playing','Ainda não sei'],answer:1},
    {area:'Perguntas no presente',prompt:'Qual pergunta está correta?',options:['Do you like music?','You do like music?','Are you like music?','Ainda não sei'],answer:0},
    {area:'There is / there are',prompt:'Complete: “___ two computers in the lab.”',options:['There is','There are','It is','Ainda não sei'],answer:1},
    {area:'Present continuous',prompt:'“They are studying now.” indica principalmente',options:['uma rotina','uma ação acontecendo agora','um fato passado','Ainda não sei'],answer:1},
    {area:'Simple past',prompt:'Complete: “Yesterday we ___ a new app.”',options:['test','tested','testing','Ainda não sei'],answer:1},
    {area:'Passado irregular',prompt:'Qual frase está correta?',options:['She go to school yesterday.','She went to school yesterday.','She goes to school yesterday.','Ainda não sei'],answer:1},
    {area:'Futuro',prompt:'“I am going to study tonight.” expressa principalmente',options:['um plano futuro','uma ação passada','uma obrigação','Ainda não sei'],answer:0},
    {area:'Modais',prompt:'Qual frase dá um conselho?',options:['You should rest.','You can swim.','You must enter now.','Ainda não sei'],answer:0},
    {area:'Leitura',prompt:'Em “Meeting: Friday, 2 p.m., Room 8”, se você precisa apenas do horário, o mais eficiente é',options:['procurar diretamente o dado de tempo','traduzir cada palavra primeiro','ignorar os números','Ainda não sei'],answer:0},
    {area:'Interação',prompt:'Você não entendeu uma fala. Qual resposta ajuda a continuar?',options:['Could you repeat that, please?','I understand everything.','No.','Ainda não sei'],answer:0},
    {area:'Produção',prompt:'Você consegue escrever três frases simples sobre quem você é, do que gosta e o que faz no dia a dia?',options:['Sim, sem ajuda','Com alguma ajuda','Ainda não','Não sei avaliar'],answer:0,scored:false},
    {area:'Compreensão oral',prompt:'Ao ouvir inglês simples, você consegue identificar pelo menos assunto, números, nomes ou palavras-chave?',options:['Frequentemente','Às vezes','Raramente','Não sei avaliar'],answer:0,scored:false}
  ];

  const reviews = {
    'To be':'Revise am, is e are para falar de identidade, estado e características.',
    'Pronomes':'Revise I, you, he, she, it, we e they. Eles organizam quem pratica a ação.',
    'Simple present':'Treine o presente simples para rotina, hábitos e fatos, inclusive o -s da 3ª pessoa.',
    'Perguntas no presente':'Revise do/does nas perguntas e don’t/doesn’t nas negativas.',
    'There is / there are':'Use there is para singular e there are para plural ao dizer o que existe em um lugar.',
    'Present continuous':'Revise am/is/are + verbo-ing para ações em andamento.',
    'Simple past':'Treine passado regular com -ed e marcadores como yesterday e last week.',
    'Passado irregular':'Alguns verbos mudam no passado: go → went, have → had, see → saw.',
    'Futuro':'Use be going to para planos e will em decisões, previsões e ofertas simples.',
    'Modais':'Can, could, should e must mudam a função da mensagem: capacidade, pedido, conselho e obrigação.',
    'Leitura':'Leia com objetivo. Nem toda tarefa exige tradução completa.',
    'Interação':'Aprenda a pedir repetição, confirmação e ajuda para manter a conversa.'
  };

  function markup(q,index) {
    const name = `enDiag${index}`;
    const unscored = q.scored === false;
    return `<div class="quiz-item${unscored?' is-unscored':''}" data-area="${q.area}" data-answer="${q.answer}" data-scored="${unscored?'false':'true'}">
      ${unscored?'<span class="question-tag">Autoavaliação • não vale ponto</span>':''}
      <p>${index+1}. ${q.prompt}</p>
      ${q.options.map((option,i)=>`<label><input type="radio" name="${name}" value="${i}"> <span>${String.fromCharCode(65+i)}) ${option}</span></label>`).join('')}
    </div>`;
  }

  function showDiagnostic() {
    MBB.showLesson({
      unit:'Antes de começar',
      technical:'diagnóstico linguístico • gramática básica • leitura • interação • produção',
      title:'00 — O que você já consegue fazer em inglês?',
      objective:'<strong>Objetivo:</strong> descobrir sua base real antes de começar: construir frases, reconhecer tempos verbais, compreender informações e manter uma interação simples.',
      html:`
        <div class="hero-box">
          <strong class="card-title">Aqui o diagnóstico mede língua de verdade.</strong>
          <p>Você não precisa acertar tudo. O objetivo é descobrir de onde partir. Responda sem pesquisar e use <strong>Ainda não sei</strong> quando necessário.</p>
        </div>

        <div class="diagnostic-intro">
          <div class="mini-card"><strong>Forma</strong><p>Você reconhece estruturas básicas como <em>to be</em>, presente, passado e futuro?</p></div>
          <div class="mini-card"><strong>Uso</strong><p>Você consegue usar essas estruturas para compreender e comunicar algo concreto?</p></div>
        </div>

        <section id="enDiagnostic">
          ${questions.map(markup).join('')}
          <div class="quiz-actions">
            <button class="action-button primary" id="checkEnDiagnostic" type="button">Conferir diagnóstico</button>
            <button class="action-button" id="resetEnDiagnostic" type="button">Refazer</button>
          </div>
          <div id="enDiagnosticResult" class="quiz-result" aria-live="polite"></div>
        </section>

        <div class="chapter-checkpoint">
          <span class="lesson-kicker">Produção rápida</span>
          <h3>Teste sem nota</h3>
          <div class="challenge-box">
            <p>Antes de abrir o capítulo 01, tente dizer ou escrever:</p>
            <ol>
              <li>seu nome e sua profissão/ocupação;</li>
              <li>uma coisa de que você gosta;</li>
              <li>algo que fez ontem;</li>
              <li>algo que pretende fazer amanhã.</li>
            </ol>
            <details><summary>Ver um modelo possível</summary><p><strong>My name is Ana. I am a student. I like music. Yesterday I studied English. Tomorrow I am going to visit my grandmother.</strong></p></details>
          </div>
        </div>`,
      init
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
      const message=score>=11?'Base muito boa para avançar.':score>=8?'Você já tem uma base útil, com pontos claros para consolidar.':score>=5?'Há conhecimentos importantes, mas precisamos reconstruir alguns fundamentos.':'Vamos começar pelos fundamentos e avançar passo a passo.';
      result.innerHTML=`<div class="ok-box"><strong>${score}/${total} — ${message}</strong><p>O resultado serve para orientar a revisão. Ele não substitui a prática de falar, ouvir, ler e escrever.</p></div>${unique.length?`<div class="review-panel"><h3>Prioridades de revisão</h3><div class="review-grid">${unique.map(area=>`<div class="review-card"><strong>${area}</strong><p>${reviews[area]||'Retome este ponto nos próximos capítulos.'}</p></div>`).join('')}</div></div>`:''}`;
    });

    reset?.addEventListener('click',()=>{
      $$('input[type="radio"]',root).forEach(input=>input.checked=false);
      result.innerHTML='';
      root.scrollTo?.({top:0,behavior:'smooth'});
    });
  }

  MBB.showDiagnostic=showDiagnostic;
})();