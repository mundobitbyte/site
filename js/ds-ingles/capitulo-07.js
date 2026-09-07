(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Ações e escolhas',
      technical:'can • could • should • must • have to • requests • ability • advice • rules • permission',
      title:'07 — Poder, pedir, aconselhar e precisar',
      objective:'<strong>Objetivo:</strong> usar <em>can, could, should, must</em> e <em>have to</em> para expressar capacidade, pedido, possibilidade, conselho, obrigação e regras em situações reais.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">A língua muda a força da ação</span>
          <div class="hero-box">
            <strong class="card-title">Imagine quatro mensagens diferentes.</strong>
            <p><strong>“Can you help me?”</strong> pede ajuda. <strong>“You should rest.”</strong> aconselha. <strong>“You must wear safety glasses.”</strong> estabelece uma obrigação. <strong>“I can code in Python.”</strong> fala de capacidade.</p>
            <p>As frases são curtas, mas cada verbo modal muda o que o falante está tentando fazer.</p>
            <p class="central-question"><strong>Missão do capítulo:</strong> escolher a forma adequada conforme a intenção e o grau de obrigação.</p>
          </div>
        </section>

        <h3>1. Can: capacidade e possibilidade básica</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Capacidade</strong><p>I <strong>can swim</strong>.</p><p>She <strong>can program</strong>.</p></div>
          <div class="mini-card"><strong>Possibilidade/permissão simples</strong><p>You <strong>can use</strong> this computer.</p><p>We <strong>can meet</strong> after class.</p></div>
        </div>
        <p>Depois de <strong>can</strong>, usamos o verbo na forma básica: <em>can play, can go, can study</em>.</p>

        ${choice('1','Capacidade','Qual frase significa “Ele sabe/consegue tocar violão”?',[['a','He can plays guitar.'],['b','He can play guitar.'],['c','He cans play guitar.']],'b','Correto. Modal + verbo base: can play.','Can não recebe -s na 3ª pessoa e o verbo seguinte fica na forma básica.')}

        <h3>2. Can’t: incapacidade ou impossibilidade</h3>
        <div class="two-col">
          <div class="mini-card"><strong>Can</strong><p>I can come today.</p></div>
          <div class="mini-card"><strong>Can’t</strong><p>I can’t come today.</p></div>
        </div>
        <p><strong>Can’t</strong> = <strong>cannot</strong>. A forma <em>cannot</em> é escrita como uma palavra.</p>

        <h3>3. Pedidos: can e could</h3>
        <div class="dialogue-box">
          <div class="speech"><small>Student</small>Can you help me with this exercise?</div>
          <div class="speech you"><small>Teacher</small>Sure. Which part is difficult?</div>
          <div class="speech"><small>Student</small>Could you explain the last example again, please?</div>
          <div class="speech you"><small>Teacher</small>Of course.</div>
        </div>
        <p><strong>Can you...?</strong> é um pedido comum e direto. <strong>Could you...?</strong> costuma soar mais indireto/cortês em muitos contextos.</p>

        ${choice('2','Pedido','Qual frase é um pedido educado para repetir uma informação?',[['a','Could you repeat that, please?'],['b','You repeat now.'],['c','You must repeat me.']],'a','Isso. Could you...? + please é uma forma natural de fazer um pedido cortês.','A intenção aqui é pedir, não ordenar.')}

        <h3>4. Perguntas com can</h3>
        <div class="argument-chain">
          <span>You can help.</span><b>→</b><span>Can you help?</span>
          <span>She can drive.</span><b>→</b><span>Can she drive?</span>
        </div>
        <p>Não usamos do/does: <strong>Can you...?</strong>, não <s>Do you can...?</s></p>

        <h3>5. Should: conselho ou recomendação</h3>
        <div class="source-box">
          <strong class="card-title">Um colega está cansado antes da prova</strong>
          <p>You <strong>should sleep</strong> earlier tonight.<br>You <strong>should review</strong> the main topics.<br>You <strong>shouldn’t study</strong> all night.</p>
        </div>
        <p><strong>Should</strong> não significa que algo é obrigatório. Ele costuma indicar que a ação é recomendável.</p>

        ${choice('3','Conselho','Seu amigo esquece senhas com frequência. Qual frase é um conselho?',[['a','You should use a password manager.'],['b','You must be a password manager.'],['c','You can to use a password manager.']],'a','Correto. Should + verbo base apresenta uma recomendação.','A forma adequada é should use.')}

        <h3>6. Must: obrigação forte ou regra</h3>
        <div class="language-tool">
          <strong class="card-title">Must em regras e exigências</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Segurança</strong><code>You must wear safety glasses.</code></div>
            <div class="toolbox-item"><strong>Prazo</strong><code>Students must submit the form by Friday.</code></div>
            <div class="toolbox-item"><strong>Requisito</strong><code>Passwords must contain 8 characters.</code></div>
            <div class="toolbox-item"><strong>Proibição</strong><code>You must not share your password.</code></div>
          </div>
        </div>

        <div class="note-box">
          <strong class="card-title">Must not ≠ don’t have to</strong>
          <p><strong>You must not enter.</strong> = você <strong>não pode/deve entrar</strong>; é proibido.</p>
          <p><strong>You don’t have to enter.</strong> = você <strong>não precisa entrar</strong>; não é obrigatório.</p>
        </div>

        ${choice('4','Proibição ou ausência de obrigação?','“You must not use your phone during the exam.” significa',[['a','usar o telefone é proibido durante a prova'],['b','usar o telefone é opcional'],['c','o telefone não funciona']],'a','Correto. Must not estabelece proibição forte.','Não confunda must not com don’t have to.')}

        <h3>7. Have to: precisar cumprir uma exigência</h3>
        <div class="comparison-grid">
          <div class="mini-card"><strong>Presente</strong><p>I <strong>have to</strong> wear an ID badge.</p><p>She <strong>has to</strong> arrive at 8.</p></div>
          <div class="mini-card"><strong>Negativa</strong><p>You <strong>don’t have to</strong> print the file.</p><p>It can be digital.</p></div>
        </div>
        <p><strong>Must</strong> e <strong>have to</strong> podem se aproximar em muitos contextos de obrigação. Para começar, perceba que <em>have to</em> é muito comum para exigências práticas do dia a dia.</p>

        ${choice('5','Obrigação prática','Complete: “She ___ wear a uniform at school.”',[['a','have to'],['b','has to'],['c','has wear to']],'b','Isso. Com she usamos has to + verbo base.','She has to wear.')}

        <h3>8. Compare a força da mensagem</h3>
        <div class="three-col">
          <div class="mini-card"><strong>You can back up the file.</strong><p>É possível / permitido.</p></div>
          <div class="mini-card"><strong>You should back up the file.</strong><p>É recomendável.</p></div>
          <div class="mini-card"><strong>You must back up the file.</strong><p>É obrigatório no contexto.</p></div>
        </div>
        <p>A escolha do modal muda o grau de força. Isso importa especialmente em instruções, regulamentos, tecnologia e segurança.</p>

        ${choice('6','Força','Uma norma da escola exige crachá. Qual frase representa melhor uma obrigação?',[['a','Students can wear ID badges.'],['b','Students should wear ID badges.'],['c','Students must wear ID badges.']],'c','Correto. Must comunica a exigência de forma mais forte.','Can = possibilidade; should = recomendação; must = obrigação.')}

        <h3>9. Help desk: escolha a função da língua</h3>
        <div class="source-box">
          <strong class="card-title">Situação A</strong><p>Você não consegue abrir um arquivo.</p>
          <p><strong>Could you help me open this file?</strong></p>
          <strong class="card-title">Situação B</strong><p>Um colega usa a mesma senha em todos os sites.</p>
          <p><strong>You should use different passwords.</strong></p>
          <strong class="card-title">Situação C</strong><p>O laboratório proíbe alimentos perto dos computadores.</p>
          <p><strong>You must not eat near the computers.</strong></p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>10. Crie um guia de sobrevivência</h3>
          <div class="challenge-box">
            <strong class="card-title">Escolha um contexto real: laboratório, sala, show, academia ou internet</strong>
            <ol>
              <li>Escreva uma frase com <strong>can</strong> sobre capacidade ou possibilidade.</li>
              <li>Escreva um pedido com <strong>could</strong>.</li>
              <li>Dê um conselho com <strong>should</strong>.</li>
              <li>Escreva uma obrigação com <strong>must</strong> ou <strong>have to</strong>.</li>
              <li>Escreva algo que <strong>não é necessário</strong> com <strong>don’t have to</strong>.</li>
            </ol>
            <details><summary>Modelo — laboratório</summary><p><strong>You can use the computers after class. Could you save your file in the shared folder, please? You should back up important work. You must not share your password. You don’t have to print the activity.</strong></p></details>
          </div>
          <div class="ok-box"><strong>Você avançou se agora consegue:</strong><p>expressar capacidade, fazer pedidos, aconselhar, indicar obrigação, proibição e ausência de necessidade.</p></div>
        </section>
      `
    });
  }

  MBB.enableChapter('07 Poder', showChapter);
})();