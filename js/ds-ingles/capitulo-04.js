(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Cultura digital',
      technical:'interfaces • instruções • permissões • privacidade • colaboração • documentação • imperativos • should/shouldn’t • leitura crítica de tecnologia',
      title:'04 — Vida digital e tecnologia',
      objective:'<strong>Objetivo:</strong> compreender e usar inglês em interfaces, mensagens de sistema, documentação e colaboração digital, avaliando escolhas de privacidade e segurança com postura crítica e responsável.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">O aplicativo funciona — agora começam as decisões</span>
          <div class="hero-box">
            <strong class="card-title">Faltam dois dias para a feira de projetos.</strong>
            <p>A equipe terminou um aplicativo simples para orientar visitantes dentro da escola. Na hora do teste final, surgem quatro telas em inglês: <strong>“Allow location access?”</strong>, <strong>“Update required”</strong>, <strong>“Failed to connect to server”</strong> e uma mensagem no repositório: <strong>“Please review the latest changes before merging.”</strong></p>
            <p>O problema já não é apenas “o que essas palavras significam?”. Cada mensagem exige uma ação diferente — e algumas escolhas afetam <strong>privacidade, funcionamento do aplicativo e trabalho da equipe</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> como compreender o inglês da tecnologia sem clicar automaticamente em tudo que aparece na tela?</p>
          </div>
        </section>

        ${choice('1','Primeira decisão','O aplicativo pede “Allow location access while using the app?”. Qual atitude demonstra melhor leitura crítica?',[['a','Tocar em Allow sem pensar, porque é a opção em inglês'],['b','Entender o que está sendo solicitado e avaliar se localização é realmente necessária para aquela função'],['c','Negar qualquer permissão em qualquer aplicativo']],'b','Isso. Compreender a linguagem da interface serve para tomar uma decisão consciente, não apenas para reconhecer vocabulário.','A pergunta é dupla: o que a tela pede e por que o aplicativo precisa disso?')}

        <h3>1. Inglês digital é linguagem para agir</h3>
        <p>Em sistemas, sites e aplicativos, muitas palavras aparecem como <strong>ações</strong>. Elas indicam o que você pode fazer, o que aconteceu ou o que precisa ser corrigido.</p>

        <div class="three-col">
          <div class="mini-card"><strong>Ações</strong><p><strong>save, upload, download, enable, disable, retry, delete, share</strong></p><p>Normalmente aparecem em botões, menus e instruções.</p></div>
          <div class="mini-card"><strong>Estados</strong><p><strong>connected, offline, available, required, completed, pending</strong></p><p>Informam a situação atual de um sistema ou tarefa.</p></div>
          <div class="mini-card"><strong>Problemas</strong><p><strong>failed, denied, invalid, missing, unavailable, error</strong></p><p>Apontam que alguma condição impediu a ação esperada.</p></div>
        </div>

        <p>Em vez de decorar três listas, observe a função da palavra na interface. <strong>Retry</strong> faz sentido porque algo falhou antes; <strong>enable</strong> aparece quando um recurso está desligado; <strong>required</strong> indica que alguma condição precisa ser atendida.</p>

        ${choice('2','Palavra como ação','Uma tela mostra “Upload failed. Retry?”. O que o sistema está oferecendo?',[['a','Tentar enviar novamente'],['b','Apagar o arquivo definitivamente'],['c','Instalar outro sistema operacional']],'a','Correto. Failed informa o problema; Retry oferece uma nova tentativa.','Leia a relação entre estado e ação, não apenas palavras isoladas.')}

        <h3>2. Interface Lab — clique só depois de compreender</h3>
        <p>A equipe começa uma rodada de testes. Resolva as quatro situações como se o projeto estivesse na sua frente.</p>

        <div class="mission-box" data-interface-lab>
          <div class="mission-head">
            <div><span class="mission-badge">Interface lab</span><strong class="card-title">Quatro telas, quatro decisões</strong></div>
            <span class="mission-progress" data-interface-progress>0 de 4 resolvidas</span>
          </div>

          <div data-interface-task data-answer="b">
            <p><strong>Tela A:</strong> “Camera access is required to scan QR codes.” O usuário quer usar o leitor de QR Code.</p>
            <button class="mission-option" type="button" data-interface-choice="a">A câmera não tem relação com a função; negar sempre.</button>
            <button class="mission-option" type="button" data-interface-choice="b">A permissão tem relação direta com escanear o código; o pedido faz sentido para essa função.</button>
            <button class="mission-option" type="button" data-interface-choice="c">A mensagem informa que a bateria acabou.</button>
            <div class="mission-feedback" data-interface-feedback></div>
          </div>

          <div data-interface-task data-answer="a">
            <p><strong>Tela B:</strong> “Password must contain at least 8 characters.”</p>
            <button class="mission-option" type="button" data-interface-choice="a">A senha precisa ter no mínimo 8 caracteres.</button>
            <button class="mission-option" type="button" data-interface-choice="b">A senha precisa ter exatamente 8 letras.</button>
            <button class="mission-option" type="button" data-interface-choice="c">A senha deve começar com o número 8.</button>
            <div class="mission-feedback" data-interface-feedback></div>
          </div>

          <div data-interface-task data-answer="c">
            <p><strong>Tela C:</strong> “Connection lost. Check your internet and try again.”</p>
            <button class="mission-option" type="button" data-interface-choice="a">Criar uma nova conta.</button>
            <button class="mission-option" type="button" data-interface-choice="b">Apagar o aplicativo.</button>
            <button class="mission-option" type="button" data-interface-choice="c">Verificar a conexão e tentar novamente.</button>
            <div class="mission-feedback" data-interface-feedback></div>
          </div>

          <div data-interface-task data-answer="b">
            <p><strong>Tela D:</strong> “This link is public. Anyone with the link can view the file.” O arquivo contém nomes e telefones de alunos.</p>
            <button class="mission-option" type="button" data-interface-choice="a">Compartilhar assim mesmo porque o link é mais fácil.</button>
            <button class="mission-option" type="button" data-interface-choice="b">Rever a configuração de compartilhamento antes de divulgar o link.</button>
            <button class="mission-option" type="button" data-interface-choice="c">Traduzir a frase e ignorar o que ela implica.</button>
            <div class="mission-feedback" data-interface-feedback></div>
          </div>
        </div>

        <h3>3. Permissão não é sinônimo de autorização automática</h3>
        <p>Palavras como <strong>allow, deny, access, permission, location, contacts, microphone</strong> aparecem com frequência em dispositivos e navegadores. Entender essas palavras é importante porque a escolha pode liberar acesso a dados ou recursos do aparelho.</p>

        <div class="argument-chain">
          <span>O que está sendo pedido?</span><b>→</b><span>Qual recurso será acessado?</span><b>→</b><span>A função precisa disso?</span><b>→</b><span>Qual opção é adequada?</span>
        </div>

        <div class="note-box">
          <strong class="card-title">Nem “Allow” é sempre certo, nem “Deny” é sempre certo</strong>
          <p>Uma câmera pode ser necessária para ler QR Codes, mas não necessariamente para um aplicativo de calculadora. A leitura crítica depende da <strong>relação entre finalidade e permissão</strong>.</p>
        </div>

        ${choice('3','Permissão com propósito','Um app de lanterna pede acesso aos seus contatos sem explicar por quê. Qual pergunta é mais importante?',[['a','Contacts parece uma palavra bonita?'],['b','Esse acesso é necessário para a função que o aplicativo oferece?'],['c','O botão Allow está maior?']],'b','Isso. O contexto permite avaliar se a solicitação é coerente com a finalidade do aplicativo.','Compreender a interface inclui avaliar o efeito da ação.')}

        <h3>4. Instruções digitais: o imperativo aparece porque alguém precisa fazer algo</h3>
        <p>Documentações e interfaces usam muitos verbos no imperativo: <strong>click, select, open, enter, connect, restart, check</strong>. A forma é direta porque o texto está guiando uma ação.</p>

        <div class="language-tool">
          <strong class="card-title">Language in action — instruções</strong>
          <div class="toolbox-grid">
            <div class="toolbox-item"><strong>Check</strong><code>Check your connection.</code><p>Verifique sua conexão.</p></div>
            <div class="toolbox-item"><strong>Select</strong><code>Select a folder.</code><p>Selecione uma pasta.</p></div>
            <div class="toolbox-item"><strong>Do not / Don’t</strong><code>Do not share your password.</code><p>Não compartilhe sua senha.</p></div>
            <div class="toolbox-item"><strong>Never</strong><code>Never commit API keys.</code><p>Nunca envie chaves de API ao repositório.</p></div>
          </div>
        </div>

        <p>A gramática aparece ligada à função: <strong>verbo no início → instrução</strong>; <strong>do not / don’t → instrução negativa</strong>. O aluno percebe o padrão porque precisa executar ou evitar uma ação.</p>

        ${choice('4','Instrução negativa','Em “Do not share your password”, qual é a função de “Do not”?',[['a','Indicar uma ação que deve ser evitada'],['b','Relatar algo que aconteceu ontem'],['c','Fazer uma pergunta']],'a','Correto. A forma negativa constrói uma instrução para não realizar determinada ação.','Observe a função da estrutura dentro da situação.')}

        <h3>5. A documentação entra quando a interface não basta</h3>
        <p>Durante o teste, surge o erro <strong>“Location service unavailable”</strong>. Em vez de clicar aleatoriamente, a equipe abre a seção de ajuda:</p>

        <div class="source-box">
          <strong class="card-title">Troubleshooting — Location</strong>
          <p>If location is unavailable, first check whether location services are enabled on the device.</p>
          <p>Then confirm that the app has permission to use location while it is open.</p>
          <p>If the problem continues, restart the app and try again.</p>
        </div>

        ${choice('5','Leitura técnica aplicada','Segundo a documentação, qual deve ser a primeira verificação?',[['a','Se os serviços de localização estão habilitados no dispositivo'],['b','Se o usuário criou outra conta'],['c','Se o aplicativo foi publicado na loja']],'a','Isso. A documentação organiza uma sequência de diagnóstico; ler bem evita tentativas aleatórias.','Procure marcadores como first, then e if para reconstruir a ordem das ações.')}

        <div class="concept-box">
          <strong class="card-title">First → then → if</strong>
          <p>Pequenos marcadores organizam procedimentos:</p>
          <p><strong>first</strong> = primeira etapa; <strong>then</strong> = próxima etapa; <strong>if</strong> = condição. Em textos técnicos, essas palavras podem ser mais importantes para agir do que traduzir cada substantivo.</p>
        </div>

        <h3>6. Colaboração digital também tem linguagem própria</h3>
        <p>O aplicativo funciona novamente. Um colega abre uma solicitação no repositório:</p>

        <div class="dialogue-box">
          <div class="speech"><small>Teammate</small>I fixed the login screen and updated the README. Could you review the changes before we merge?</div>
          <div class="speech you"><small>You</small>Sure. I’ll check the login flow first. Is there anything specific I should test?</div>
          <div class="speech"><small>Teammate</small>Yes. Please test the error message when the password is too short.</div>
          <div class="speech you"><small>You</small>Got it. I’ll test that and leave a comment.</div>
        </div>

        <p>Aqui o inglês organiza trabalho real: <strong>fixed, updated, review, merge, test, leave a comment</strong>. O sentido nasce tanto do vocabulário quanto do fluxo de colaboração.</p>

        ${choice('6','Colaboração','O que o colega pede em “Could you review the changes before we merge?”',[['a','Que as alterações sejam revisadas antes da integração'],['b','Que o projeto seja apagado'],['c','Que a senha seja compartilhada']],'a','Correto. A linguagem está ligada a uma etapa concreta de colaboração em software.','Use o contexto do fluxo de trabalho para interpretar palavras técnicas.')}

        <h3>7. Should e shouldn’t ajudam a aconselhar</h3>
        <p>Depois dos testes, a equipe cria recomendações para quem vai usar o aplicativo.</p>

        <div class="comparison-grid">
          <div class="mini-card"><strong>You should update the app.</strong><p>Recomendação: seria adequado atualizar.</p></div>
          <div class="mini-card"><strong>You shouldn’t share your password.</strong><p>Recomendação negativa: não é uma boa prática compartilhar a senha.</p></div>
        </div>

        <p><strong>Should</strong> não tem a mesma força de <strong>must</strong>. Em muitos contextos, <em>must</em> indica obrigação ou requisito; <em>should</em> costuma expressar recomendação. A diferença importa porque muda o grau de necessidade da ação.</p>

        ${choice('7','Requisito ou recomendação','Qual frase apresenta uma recomendação, e não uma exigência formal?',[['a','You should back up your files regularly.'],['b','Password must contain at least 8 characters.'],['c','Access denied.']],'a','Isso. Should costuma construir recomendações; must, no exemplo, estabelece um requisito.','A gramática ajuda a perceber o grau de obrigação envolvido.')}

        <h3>8. Digital decision builder — transforme leitura em ação</h3>
        <p>Escolha o tipo de situação e o objetivo. O construtor mostra uma resposta curta que poderia ser usada por uma equipe real.</p>

        <div class="builder-box" data-digital-builder>
          <strong class="card-title">Digital decision builder</strong>
          <div class="builder-controls">
            <label>Situação
              <select data-digital-situation>
                <option value="error">Erro no aplicativo</option>
                <option value="privacy">Compartilhamento de arquivo</option>
                <option value="review">Revisão de código</option>
                <option value="permission">Permissão do dispositivo</option>
              </select>
            </label>
            <label>O que você quer fazer?
              <select data-digital-purpose>
                <option value="act">Agir</option>
                <option value="ask">Pedir esclarecimento</option>
                <option value="advise">Dar uma recomendação</option>
              </select>
            </label>
          </div>
          <div class="builder-preview" data-digital-preview></div>
        </div>

        <div class="note-box">
          <strong class="card-title">Ferramentas de tradução e IA podem ajudar — mas não substituem a decisão</strong>
          <p>Se uma palavra ou mensagem continuar bloqueando a compreensão, ferramentas digitais podem apoiar a consulta. Ainda assim, o usuário precisa verificar se a interpretação combina com <strong>o contexto, a função da tela e a consequência da ação</strong>. Copiar uma tradução não decide por você se deve liberar uma permissão, publicar um arquivo ou executar um comando.</p>
        </div>

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Aplicar</span>
          <h3>9. Faça uma auditoria linguística de uma tecnologia que você usa</h3>
          <div class="challenge-box">
            <strong class="card-title">Desafio de transferência</strong>
            <p>Escolha um aplicativo, site, jogo, IDE ou ferramenta de desenvolvimento que apresente algum conteúdo em inglês. Registre cinco elementos reais da interface e, para cada um:</p>
            <ol>
              <li>copie a palavra, aviso ou instrução;</li>
              <li>explique qual ação ou estado ela representa;</li>
              <li>identifique as pistas que permitiram compreender;</li>
              <li>diga qual seria a consequência de interpretar errado;</li>
              <li>classifique a situação como <strong>funcionamento, privacidade, segurança, colaboração</strong> ou <strong>outro uso</strong>.</li>
            </ol>
            <details><summary>Exemplo curto</summary><p><strong>“Discard changes?”</strong> → pergunta se as alterações devem ser descartadas. A pista principal é <em>changes</em> dentro de uma tela de edição. Interpretar errado pode fazer o usuário perder trabalho.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento MbB</strong>
          <p><strong>Entender:</strong> você reconheceu como o inglês aparece em interfaces, permissões, erros, documentação e colaboração.</p>
          <p><strong>Experimentar:</strong> tomou decisões em telas simuladas e interpretou instruções técnicas.</p>
          <p><strong>Analisar:</strong> relacionou linguagem, finalidade, privacidade, segurança e consequência das escolhas.</p>
          <p><strong>Aplicar:</strong> transferiu a estratégia para uma tecnologia que realmente faz parte da sua rotina.</p>
        </div>
      `,
      init:initChapter
    });
  }

  function initChapter(root) {
    const lab = root.querySelector('[data-interface-lab]');
    if (lab) {
      const tasks = [...lab.querySelectorAll('[data-interface-task]')];
      const progress = lab.querySelector('[data-interface-progress]');
      const updateProgress = () => {
        const done = tasks.filter(task => task.dataset.done === 'true').length;
        if (progress) progress.textContent = `${done} de ${tasks.length} resolvidas`;
      };

      tasks.forEach(task => {
        const feedback = task.querySelector('[data-interface-feedback]');
        task.querySelectorAll('[data-interface-choice]').forEach(button => {
          button.addEventListener('click', () => {
            const ok = button.dataset.interfaceChoice === task.dataset.answer;
            task.querySelectorAll('[data-interface-choice]').forEach(item => item.classList.remove('is-done'));
            if (ok) {
              button.classList.add('is-done');
              task.dataset.done = 'true';
              if (feedback) feedback.innerHTML = '<strong>Boa decisão.</strong> Você relacionou a mensagem ao efeito real da ação.';
            } else {
              if (feedback) feedback.innerHTML = '<strong>Reavalie.</strong> Leia o que a interface pede e pense na consequência prática antes de escolher.';
            }
            updateProgress();
          });
        });
      });
      updateProgress();
    }

    const builder = root.querySelector('[data-digital-builder]');
    if (builder) {
      const situation = builder.querySelector('[data-digital-situation]');
      const purpose = builder.querySelector('[data-digital-purpose]');
      const preview = builder.querySelector('[data-digital-preview]');
      const examples = {
        error:{
          act:'I’ll check the connection and try again.',
          ask:'What does this error message mean?',
          advise:'You should check the connection before restarting the app.'
        },
        privacy:{
          act:'I’ll change the sharing settings before sending the link.',
          ask:'Can anyone with this link see the file?',
          advise:'You shouldn’t share personal data through a public link.'
        },
        review:{
          act:'I’ll review the changes before we merge.',
          ask:'Is there anything specific I should test?',
          advise:'You should test the login flow before merging.'
        },
        permission:{
          act:'I’ll check why the app needs this permission.',
          ask:'Does the app need location access for this feature?',
          advise:'You should review permissions before allowing access.'
        }
      };
      const render = () => {
        if (!situation || !purpose || !preview) return;
        preview.textContent = examples[situation.value][purpose.value];
      };
      situation?.addEventListener('change', render);
      purpose?.addEventListener('change', render);
      render();
    }
  }

  MBB.enableChapter('04 Vida', showChapter);
})();
