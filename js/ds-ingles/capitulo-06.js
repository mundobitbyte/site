(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Futuro',
      technical:'be going to • will • future time expressions • intentions • decisions • predictions • invitations',
      title:'06 — Planos e futuro',
      objective:'<strong>Objetivo:</strong> falar sobre planos, intenções, decisões e previsões usando <em>be going to</em> e <em>will</em>, além de combinar atividades futuras com clareza.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Da memória para o que vem depois</span>
          <div class="hero-box">
            <strong class="card-title">Sua turma precisa organizar a próxima semana.</strong>
            <p>Há prova, trabalho em grupo, apresentação e um encontro com outra equipe. Agora não basta falar sobre o que acontece sempre ou sobre o que aconteceu ontem: é preciso falar do que <strong>ainda vai acontecer</strong>.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> conseguir explicar um plano futuro e reagir a decisões que surgem na hora.</p>
          </div>
        </section>

        <h3>1. Palavras que colocam a frase no futuro</h3>
        <div class="three-col">
          <div class="mini-card"><strong>tomorrow</strong><p>amanhã</p></div>
          <div class="mini-card"><strong>tonight</strong><p>hoje à noite</p></div>
          <div class="mini-card"><strong>next week</strong><p>na próxima semana</p></div>
          <div class="mini-card"><strong>next month</strong><p>no próximo mês</p></div>
          <div class="mini-card"><strong>on Friday</strong><p>na sexta-feira</p></div>
          <div class="mini-card"><strong>in two days</strong><p>daqui a dois dias</p></div>
        </div>

        <h3>2. Be going to: plano ou intenção</h3>
        <div class="argument-chain">
          <span>sujeito</span><b>+</b><span>am / is / are</span><b>+</b><span>going to</span><b>+</b><span>verbo base</span>
        </div>
        <div class="source-box">
          <strong class="card-title">Agenda da equipe</strong>
          <p>We <strong>are going to meet</strong> on Tuesday.<br>Julia <strong>is going to prepare</strong> the slides.<br>I <strong>am going to test</strong> the app tonight.</p>
        </div>

        ${choice('1','Plano','Complete: “I ___ study for the test tonight.”',[['a','am going to'],['b','will to'],['c','going']],'a','Correto. Com I usamos am going to + verbo base.','Estrutura: I am going to study.')}

        <h3>3. Negativas e perguntas com going to</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Negativa</strong><p>I’m <strong>not going to travel</strong>.</p><p>They <strong>aren’t going to meet</strong> today.</p></div>
          <div class="mini-card"><strong>Pergunta</strong><p><strong>Are you going to study</strong> tonight?</p><p><strong>Is she going to present</strong> the project?</p></div>
        </div>

        ${choice('2','Pergunta','Qual pergunta está correta?',[['a','Do you going to study?'],['b','Are you going to study?'],['c','You are going to study?']],'b','Isso. O verbo to be vem antes do sujeito: Are you going to...?','Não usamos do/does nesta estrutura.')}

        <h3>4. Will: uma decisão que nasce agora</h3>
        <div class="dialogue-box">
          <div class="speech"><small>Ana</small>The printer isn’t working.</div>
          <div class="speech you"><small>Leo</small>Okay. <strong>I’ll check</strong> it.</div>
          <div class="speech"><small>Ana</small>We also need the final file.</div>
          <div class="speech you"><small>Leo</small><strong>I’ll send</strong> it after lunch.</div>
        </div>
        <p>Aqui <strong>I’ll</strong> = <strong>I will</strong>. Leo decide ou se oferece no momento da conversa.</p>

        ${choice('3','Decisão imediata','Você vê que alguém está carregando muitas caixas e decide ajudar. Qual frase combina?',[['a','I’m going to help you yesterday.'],['b','I’ll help you.'],['c','I helped you tomorrow.']],'b','Correto. I’ll help you funciona bem como oferta/decisão naquele momento.','Will aparece com frequência em decisões imediatas e ofertas.')}

        <h3>5. Will também aparece em previsões</h3>
        <div class="language-tool">
          <strong class="card-title">Previsões e opiniões sobre o futuro</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>I think...</strong><code>I think the test will be difficult.</code></div>
            <div class="toolbox-item"><strong>probably</strong><code>It will probably rain.</code></div>
            <div class="toolbox-item"><strong>maybe</strong><code>Maybe they will arrive late.</code></div>
            <div class="toolbox-item"><strong>I don’t think...</strong><code>I don’t think it will take long.</code></div>
          </div>
        </div>

        ${choice('4','Previsão','Qual frase expressa uma previsão?',[['a','I think robots will become more common.'],['b','I studied robots yesterday.'],['c','I study robots every Friday.']],'a','Isso. Will aparece dentro de uma previsão sobre o futuro.','Observe I think + will.')}

        <h3>6. Going to × will: não são simplesmente iguais</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Plano já pensado</strong><p>I’m <strong>going to visit</strong> my grandmother on Sunday.</p><p>A intenção existia antes da fala.</p></div>
          <div class="mini-card"><strong>Decisão no momento</strong><p>The phone is ringing. <strong>I’ll answer</strong> it.</p><p>A decisão surge agora.</p></div>
        </div>
        <p>Na vida real há contextos em que mais de uma forma é possível. O objetivo aqui é aprender a diferença mais útil para começar.</p>

        ${choice('5','Escolha','Você já comprou ingresso para um show no sábado. Qual frase destaca melhor o plano já definido?',[['a','I’m going to go to a concert on Saturday.'],['b','I went to a concert on Saturday.'],['c','I go to a concert yesterday.']],'a','Correto. Going to combina com um plano/intenção já estabelecido.','O contexto mostra que o plano existe antes da fala.')}

        <h3>7. Will not / won’t</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Afirmativa</strong><p>We <strong>will finish</strong> today.</p><p>I’ll call you.</p></div>
          <div class="mini-card"><strong>Negativa</strong><p>We <strong>won’t finish</strong> today.</p><p>I won’t forget.</p></div>
        </div>
        <p>Em perguntas: <strong>Will you come?</strong> / <strong>When will they arrive?</strong></p>

        ${choice('6','Negativa','Qual frase significa “Ela não vai participar”?',[['a','She doesn’t will participate.'],['b','She won’t participate.'],['c','She isn’t participate.']],'b','Isso. Won’t = will not.','Will forma sua própria negativa com not.')}

        <h3>8. Combinar um encontro</h3>
        <div class="dialogue-box">
          <div class="speech"><small>A</small>Are you going to work on the project tomorrow?</div>
          <div class="speech you"><small>B</small>Yes. I’m going to start at 2 p.m.</div>
          <div class="speech"><small>A</small>Can I join you?</div>
          <div class="speech you"><small>B</small>Sure. I’ll send you the link.</div>
        </div>
        <p>Veja a combinação: <strong>going to</strong> apresenta o plano; <strong>will</strong> aparece quando B decide enviar o link.</p>

        <h3>9. Convites simples</h3>
        <div class="language-tool">
          <strong class="card-title">Frases úteis</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Convite</strong><code>Would you like to join us?</code></div>
            <div class="toolbox-item"><strong>Aceitar</strong><code>Yes, I’d love to.</code></div>
            <div class="toolbox-item"><strong>Recusar com educação</strong><code>Sorry, I can’t. I already have plans.</code></div>
            <div class="toolbox-item"><strong>Combinar horário</strong><code>What time are we going to meet?</code></div>
          </div>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>10. Planeje seus próximos sete dias</h3>
          <div class="challenge-box">
            <strong class="card-title">Produção real</strong>
            <ol>
              <li>Escreva <strong>três planos</strong> com <em>going to</em>.</li>
              <li>Escreva <strong>duas previsões</strong> com <em>will</em>.</li>
              <li>Crie uma situação em que você toma uma decisão na hora e use <em>I’ll...</em>.</li>
              <li>Escreva uma pergunta sobre os planos de outra pessoa.</li>
            </ol>
            <details><summary>Modelo</summary><p><strong>I’m going to study on Tuesday. I’m going to practice guitar on Thursday. I’m going to visit my family on Sunday. I think the week will be busy. The weather will probably be hot. My friend needs help with a file, so I’ll send it now. Are you going to study this weekend?</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>falar de planos, decisões imediatas e previsões; perguntar sobre o futuro e distinguir os usos básicos de going to e will.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('06 Planos', showChapter);
})();