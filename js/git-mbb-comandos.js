(() => {
  const copyMap = new Map();

  const escapeHtml = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const highlight = (command, variables = []) => {
    let html = escapeHtml(command);
    variables.forEach(variable => {
      const token = escapeHtml(variable.token);
      html = html.split(token).join(`<mark class="cmd-var">${token}</mark>`);
    });
    return html;
  };

  const card = (stepId, index, item) => {
    const key = `${stepId}-${index}`;
    copyMap.set(key, item.command);
    const variables = item.variables || [];
    const needsEdit = variables.length > 0;
    const warning = needsEdit
      ? `<div class="command-ref-warning"><strong>Antes de executar:</strong> ${variables.map(v => `substitua <span class="inline-code">${escapeHtml(v.token)}</span> por ${v.note}`).join('; ')}.</div>`
      : '';
    const example = item.example
      ? `<div class="command-ref-example"><strong>Exemplo:</strong><code>${escapeHtml(item.example)}</code></div>`
      : '';
    return `
      <div class="command-ref-card">
        <div class="command-ref-head">
          <span class="cmd-status ${needsEdit ? 'cmd-edit' : 'cmd-ready'}">${needsEdit ? '⚠ Precisa adaptar' : '✓ Pronto para usar'}</span>
          <button class="command-copy-btn" type="button" data-copy-key="${key}">${item.command.includes('\n') ? 'Copiar sequência' : 'Copiar'}</button>
        </div>
        <pre class="command-ref-code"><code>${highlight(item.command, variables)}</code></pre>
        <div class="command-ref-body">
          <p>${item.description}</p>
          ${item.note ? `<p class="command-ref-note">${item.note}</p>` : ''}
          ${warning}
          ${example}
        </div>
      </div>`;
  };

  const buildStep = step => ({
    id: step.id,
    menu: step.menu,
    title: step.title,
    objective: step.objective,
    content: `${step.intro || ''}${(step.items || []).map((item, index) => card(step.id, index, item)).join('')}`
  });

  const steps = [
    {
      id: 'inicio',
      menu: 'Mapa rápido',
      title: 'Comandos — Mapa rápido',
      objective: 'Encontrar rapidamente o comando a partir daquilo que você quer fazer.',
      intro: `
        <div class="commands-hero">
          <h3>Uma central para consultar depois de aprender</h3>
          <p>Aqui estão reunidos os comandos usados no módulo Git/GitHub. Esta área não substitui as aulas: ela serve para o momento em que você pensa “eu já aprendi isso; qual era mesmo o comando?”.</p>
          <div class="commands-legend">
            <span class="cmd-legend-item cmd-ready">✓ pronto para usar</span>
            <span class="cmd-legend-item cmd-edit">⚠ precisa substituir o trecho destacado</span>
          </div>
        </div>
        <div class="command-map">
          <div class="mini-card"><strong>Como está o repositório?</strong><br><span class="inline-code">git status</span></div>
          <div class="mini-card"><strong>O que mudou?</strong><br><span class="inline-code">git diff</span></div>
          <div class="mini-card"><strong>Quero preparar uma mudança</strong><br><span class="inline-code">git add</span></div>
          <div class="mini-card"><strong>Quero registrar uma versão</strong><br><span class="inline-code">git commit</span></div>
          <div class="mini-card"><strong>Quero ver o histórico</strong><br><span class="inline-code">git log --oneline</span></div>
          <div class="mini-card"><strong>Quero enviar ao GitHub</strong><br><span class="inline-code">git push</span></div>
          <div class="mini-card"><strong>Quero receber e integrar</strong><br><span class="inline-code">git pull</span></div>
          <div class="mini-card"><strong>Quero só descobrir novidades</strong><br><span class="inline-code">git fetch</span></div>
          <div class="mini-card"><strong>Quero copiar um repositório existente</strong><br><span class="inline-code">git clone</span></div>
          <div class="mini-card"><strong>Quero experimentar separadamente</strong><br><span class="inline-code">git switch -c</span></div>
        </div>
        <div class="command-ref-tip"><strong>Regra de segurança:</strong> se um trecho estiver destacado em amarelo, não copie e execute no automático. Troque esse trecho pelo valor correspondente ao seu projeto.</div>`
    },
    {
      id: 'cmd', menu: 'CMD e pastas', title: 'Comandos — CMD, arquivos e pastas',
      objective: 'Consultar os comandos de apoio usados para navegar e criar os arquivos do projeto.',
      intro: '<div class="note-box"><strong>Estes não são comandos Git.</strong> São comandos do Prompt de Comando do Windows usados para preparar e observar os arquivos.</div>',
      items: [
        {command:'dir',description:'Mostra os arquivos e pastas do local atual.'},
        {command:'cd /d "%USERPROFILE%"',description:'Vai para a pasta do usuário atual do Windows. O /d também permite mudar de unidade.'},
        {command:'mkdir meus-repositorios\ncd meus-repositorios',description:'Cria a pasta onde organizamos os repositórios e entra nela.'},
        {command:'cd ..',description:'Volta uma pasta.'},
        {command:'cls',description:'Limpa a tela do CMD sem apagar arquivos.'},
        {command:'type ARQUIVO',description:'Mostra no CMD o conteúdo de um arquivo de texto.',variables:[{token:'ARQUIVO',note:'o nome do arquivo que deseja conferir'}],example:'type avisos.txt'},
        {command:'echo TEXTO > ARQUIVO',description:'Cria um arquivo ou substitui seu conteúdo.',variables:[{token:'TEXTO',note:'o conteúdo que deseja gravar'},{token:'ARQUIVO',note:'o nome do arquivo'}],example:'echo Sabado: 08:00-18:00 > horario.txt'},
        {command:'echo TEXTO >> ARQUIVO',description:'Acrescenta uma nova linha sem apagar o conteúdo que já existe.',variables:[{token:'TEXTO',note:'o conteúdo que deseja acrescentar'},{token:'ARQUIVO',note:'o nome do arquivo'}],example:'echo Delivery: ate 21h >> avisos.txt'},
        {command:'pushd CAMINHO-DA-REDE',description:'Entra em uma pasta de rede no CMD e cria temporariamente uma unidade para esse caminho.',variables:[{token:'CAMINHO-DA-REDE',note:'o endereço da sua pasta na rede'}],example:'pushd \\\\10.66.53.1\\Publica\\mtec2026\\joao\\meus-repositorios\\site-cafe-aurora'},
        {command:'popd',description:'Encerra o acesso criado por pushd e retorna ao local anterior.'}
      ]
    },
    {
      id:'preparar', menu:'Preparar Git', title:'Comandos — Instalação e identificação',
      objective:'Consultar os comandos usados para verificar e identificar o Git.',
      items:[
        {command:'git --version',description:'Mostra a versão instalada e confirma que o comando Git está disponível.'},
        {command:'git config --global user.name "SEU NOME"',description:'Define o nome do autor que será associado aos commits deste usuário do Windows.',variables:[{token:'SEU NOME',note:'seu nome'}],example:'git config --global user.name "Joao Silva"'},
        {command:'git config --global user.email "SEUEMAIL@EXEMPLO.COM"',description:'Define o e-mail usado para identificar o autor dos commits.',variables:[{token:'SEUEMAIL@EXEMPLO.COM',note:'seu e-mail'}],example:'git config --global user.email "joao@exemplo.com"'},
        {command:'git config --global user.name\ngit config --global user.email',description:'Confere o nome e o e-mail configurados.'}
      ]
    },
    {
      id:'registrar', menu:'Criar e registrar', title:'Comandos — Criar, conferir e registrar versões',
      objective:'Consultar o ciclo básico de trabalho local com Git.',
      items:[
        {command:'git init',description:'Transforma a pasta atual em um repositório Git.'},
        {command:'git status',description:'Mostra como está o repositório naquele momento: arquivos novos, modificados, preparados e situação da branch.'},
        {command:'git diff',description:'Mostra as alterações locais que ainda não foram preparadas com git add.'},
        {command:'git add ARQUIVO',description:'Prepara um arquivo para entrar no próximo commit.',variables:[{token:'ARQUIVO',note:'o arquivo que deseja preparar'}],example:'git add avisos.txt'},
        {command:'git add -A',description:'Prepara todas as alterações rastreadas e remoções do projeto para o próximo commit.',note:'Use quando você realmente pretende registrar o conjunto atual de alterações.'},
        {command:'git commit -m "MENSAGEM-DO-COMMIT"',description:'Cria um novo registro no histórico com aquilo que foi preparado.',variables:[{token:'MENSAGEM-DO-COMMIT',note:'uma frase curta que explique a intenção da mudança'}],example:'git commit -m "Adiciona horario do delivery"'}
      ]
    },
    {
      id:'historico', menu:'Histórico e recuperação', title:'Comandos — Investigar, corrigir e recuperar',
      objective:'Consultar os comandos usados para entender o passado e corrigir situações diferentes.',
      items:[
        {command:'git log --oneline',description:'Mostra o histórico de commits de forma resumida.'},
        {command:'git show HASH',description:'Mostra os detalhes e as alterações de um commit específico.',variables:[{token:'HASH',note:'o identificador do commit'}],example:'git show 4d10ef2'},
        {command:'git diff HASH_1 HASH_2',description:'Compara dois momentos do histórico.',variables:[{token:'HASH_1',note:'o primeiro commit da comparação'},{token:'HASH_2',note:'o segundo commit'}],example:'git diff 4d10ef2 7f32abc'},
        {command:'git revert --no-edit HEAD',description:'Cria um novo commit que desfaz o commit atual, preservando o histórico.'},
        {command:'git revert --no-edit HASH',description:'Cria um novo commit que desfaz um commit escolhido.',variables:[{token:'HASH',note:'o commit que deseja desfazer'}]},
        {command:'git restore ARQUIVO',description:'Descarta uma alteração local e devolve o arquivo ao conteúdo registrado no commit atual.',variables:[{token:'ARQUIVO',note:'o arquivo que deseja restaurar'}],example:'git restore avisos.txt'},
        {command:'git restore --staged ARQUIVO',description:'Retira um arquivo da área de preparação sem apagar a alteração feita nele.',variables:[{token:'ARQUIVO',note:'o arquivo que deseja retirar da preparação'}],example:'git restore --staged avisos.txt'},
        {command:'git restore --source=HASH -- ARQUIVO',description:'Traz para o presente o conteúdo que um arquivo tinha em uma versão antiga.',variables:[{token:'HASH',note:'a versão que servirá de fonte'},{token:'ARQUIVO',note:'o arquivo que deseja recuperar'}],example:'git restore --source=4d10ef2 -- horario.txt'},
        {command:'git restore --source=HASH_APROVADO -- .',description:'Traz para a área de trabalho o conteúdo rastreado de uma versão aprovada, sem apagar o histórico atual.',variables:[{token:'HASH_APROVADO',note:'o commit que representa o estado que deseja recuperar'}]}
      ]
    },
    {
      id:'branches', menu:'Branches', title:'Comandos — Trabalhar em branches',
      objective:'Consultar os comandos usados para criar, visitar, alternar e encerrar linhas de trabalho.',
      items:[
        {command:'git branch --show-current',description:'Mostra o nome da branch em que você está.'},
        {command:'git branch',description:'Lista as branches locais e marca com asterisco a branch ativa.'},
        {command:'git branch -a',description:'Mostra branches locais e referências conhecidas do remoto.'},
        {command:'git switch -c NOME-DA-BRANCH',description:'Cria uma nova branch a partir do ponto atual e já entra nela.',variables:[{token:'NOME-DA-BRANCH',note:'o nome que deseja dar à nova branch'}],example:'git switch -c teste-reservas'},
        {command:'git switch NOME-DA-BRANCH',description:'Troca para uma branch que já existe.',variables:[{token:'NOME-DA-BRANCH',note:'a branch para a qual deseja mudar'}],example:'git switch teste-reservas'},
        {command:'git switch --detach HASH',description:'Visita temporariamente um commit antigo sem mover uma branch.',variables:[{token:'HASH',note:'o commit que deseja apenas observar'}],example:'git switch --detach 4d10ef2'},
        {command:'git branch -d NOME-DA-BRANCH',description:'Remove uma branch local que já não é necessária, normalmente depois de integrada.',variables:[{token:'NOME-DA-BRANCH',note:'a branch local que deseja remover'}],example:'git branch -d teste-reservas'}
      ]
    },
    {
      id:'remoto', menu:'Conectar GitHub', title:'Comandos — Conectar o projeto ao GitHub',
      objective:'Consultar os comandos que ligam o repositório local ao remoto e fazem o primeiro envio.',
      intro:'<div class="command-ref-tip"><strong>Lembrete:</strong> cadastrar um remoto não envia arquivos. O envio acontece com <span class="inline-code">git push</span>.</div>',
      items:[
        {command:'git remote add origin URL-DO-REPOSITORIO',description:'Cadastra no Git local o endereço do repositório remoto com o nome curto origin.',variables:[{token:'URL-DO-REPOSITORIO',note:'a URL HTTPS copiada do GitHub'}],example:'git remote add origin https://github.com/usuario/site-cafe-aurora.git'},
        {command:'git remote -v',description:'Mostra os remotos cadastrados e os endereços usados para buscar e enviar.'},
        {command:'git push -u origin NOME-DA-BRANCH',description:'Faz o primeiro envio da branch e cria a ligação de acompanhamento com a branch remota.',variables:[{token:'NOME-DA-BRANCH',note:'o nome real mostrado por git branch --show-current'}],example:'git push -u origin main'},
        {command:'git push',description:'Envia ao remoto os commits da branch atual que ainda não estão lá.'},
        {command:'git push -u origin teste-reservas',description:'Publica no GitHub a branch de teste usada na história do Café Aurora e cria o acompanhamento.'},
        {command:'git push origin --delete NOME-DA-BRANCH',description:'Remove a referência de uma branch no repositório remoto.',variables:[{token:'NOME-DA-BRANCH',note:'a branch remota que deseja remover'}],example:'git push origin --delete teste-reservas'}
      ]
    },
    {
      id:'sincronizar', menu:'Sincronizar e clonar', title:'Comandos — Receber, descobrir, clonar e integrar',
      objective:'Consultar os comandos usados quando o projeto existe em mais de um lugar.',
      items:[
        {command:'git pull',description:'Busca novidades do remoto e as incorpora na branch atual.'},
        {command:'git fetch',description:'Atualiza o que o Git sabe sobre o remoto sem incorporar automaticamente os commits na branch atual.'},
        {command:'git clone URL-DO-REPOSITORIO',description:'Cria uma nova cópia local de um repositório que já existe no GitHub.',variables:[{token:'URL-DO-REPOSITORIO',note:'a URL HTTPS do repositório'}],example:'git clone https://github.com/usuario/site-cafe-aurora.git'},
        {command:'git merge NOME-DA-BRANCH',description:'Integra na branch atual os commits alcançados pela branch indicada.',variables:[{token:'NOME-DA-BRANCH',note:'a branch que deseja integrar'}],example:'git merge teste-reservas'}
      ]
    },
    {
      id:'cafe', menu:'Café Aurora', title:'Comandos — Arquivos usados na história do Café Aurora',
      objective:'Copiar os comandos exatos usados para construir as situações práticas do módulo.',
      intro:'<div class="note-box"><strong>Estes comandos pertencem ao exemplo didático.</strong> Eles são prontos para reproduzir a história do Café Aurora; em outro projeto, os textos e arquivos podem ser diferentes.</div>',
      items:[
        {command:'echo Sabado: 08:00-18:00 > horario.txt',description:'Cria o horário correto usado como primeiro estado confiável.'},
        {command:'echo teste de horario > rascunho.tmp\necho *.tmp > .gitignore',description:'Cria um arquivo temporário e a regra para ignorar arquivos .tmp.'},
        {command:'echo Musica ao vivo: sexta 19h > avisos.txt',description:'Cria o primeiro aviso do Café Aurora.'},
        {command:'echo Sabado: 08:00-20:00 > horario.txt',description:'Reproduz o erro de horário que depois será investigado.'},
        {command:'echo Delivery: ate 23h >> avisos.txt',description:'Reproduz a alteração local errada usada para praticar restore.'},
        {command:'echo Delivery: ate 21h >> avisos.txt',description:'Acrescenta o horário correto do delivery.'},
        {command:'echo Domingo: 09:00-14:00 >> horario.txt\necho Programacao especial de domingo >> avisos.txt',description:'Cria a experiência de domingo usada para praticar recuperação de versão.'},
        {command:'echo Reservas antecipadas: teste interno > reservas.txt',description:'Cria o conteúdo da branch teste-reservas.'},
        {command:'echo Contato: 11 99999-0000 >> avisos.txt',description:'Acrescenta o telefone usado para observar commit local seguido de push.'},
        {command:'echo Pedidos para retirada: ate 20h >> avisos.txt',description:'Cria a mudança feita na segunda cópia do repositório.'}
      ]
    },
    {
      id:'diagnostico', menu:'Diagnóstico', title:'Comandos — Diagnóstico inicial',
      objective:'Usar poucas perguntas antes de tentar corrigir um problema de sincronização.',
      intro:'<div class="commands-hero"><h3>Diagnostique antes de corrigir</h3><p>Quando algo parece errado, não escolha um comando aleatório. Primeiro descubra onde você está e o que o Git sabe.</p></div>',
      items:[
        {command:'git status\ngit branch --show-current\ngit remote -v\ngit log --oneline',description:'Sequência básica para verificar estado, branch, remoto e histórico antes de decidir o próximo passo.'}
      ]
    }
  ].map(buildStep);

  modules.comandos = {label:'Comandos', steps};

  const lessonEl = document.getElementById('lesson');
  if (lessonEl && !lessonEl.dataset.commandCopyReady) {
    lessonEl.dataset.commandCopyReady = '1';
    lessonEl.addEventListener('click', async event => {
      const button = event.target.closest('.command-copy-btn');
      if (!button) return;
      const text = copyMap.get(button.dataset.copyKey);
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      const original = button.textContent;
      button.textContent = 'Copiado!';
      button.classList.add('copied');
      window.setTimeout(() => {
        button.textContent = original;
        button.classList.remove('copied');
      }, 1400);
    });
  }

  const hash = location.hash.match(/^#comandos-(.+)$/);
  if (hash) setModule('comandos', decodeURIComponent(hash[1]), false);
})();