(() => {
  const exerciseStep = id => exerciseSteps.find(step => String(step.id) === String(id));

  const githubMbb = [
    {
      id: 1,
      menu: '1 Por que GitHub?',
      title: 'GitHub 1 — Por que este projeto precisa do GitHub?',
      objective: 'Entender por que o histórico local precisa de um remoto e decidir de onde o projeto está partindo.',
      content: `
        <div class="hero-box">
          <span class="part-badge">Parte 2 — GitHub</span>
          <h3>O projeto já tem história. Agora ele precisa existir fora deste computador.</h3>
          <p>Rafael já registrou mudanças, corrigiu erros, recuperou versões e criou a branch <span class="inline-code">teste-reservas</span>. Tudo isso ainda está no computador onde o projeto nasceu. Marina quer que o histórico principal também fique disponível no GitHub e possa ser usado em outro computador.</p>
        </div>
        <div class="mini-grid">
          <div class="mini-card"><strong>Local</strong><br>é a cópia do repositório que está neste computador.</div>
          <div class="mini-card"><strong>Remoto</strong><br>é o repositório acessível pela rede, neste caso no GitHub.</div>
        </div>
        <div class="concept-box"><strong>Git e GitHub não se atualizam sozinhos.</strong> Primeiro precisamos decidir onde o projeto nasceu e depois conectar o outro lado.</div>
        <h3>Onde o projeto nasceu?</h3>
        <div class="mini-grid">
          <div class="mini-card"><strong>Já existe no PC com commits</strong><br>crie o repositório no GitHub <strong>vazio</strong> e envie a história com push.</div>
          <div class="mini-card"><strong>Já existe no GitHub com commits</strong><br>use <span class="inline-code">git clone</span> para criar a cópia local a partir dele.</div>
        </div>
        <p>No Café Aurora, o projeto <strong>já nasceu no computador</strong>. Portanto, vamos criar um repositório remoto vazio.</p>
        <h3>Crie o repositório no GitHub</h3>
        <p>Entre em sua conta, escolha <strong>New repository</strong> e use o nome:</p>
        <pre class="command">site-cafe-aurora</pre>
        <p>Neste percurso, deixe o repositório sem README, sem licença e sem outro <span class="inline-code">.gitignore</span>. O histórico que queremos preservar já existe no computador.</p>
        <div class="danger-box"><strong>Evite criar duas histórias separadas sem necessidade.</strong> Projeto local com commits → GitHub vazio. Projeto que já existe no GitHub → clone.</div>`
    },
    {
      id: 2,
      menu: '2 Primeiro push',
      title: 'GitHub 2 — Fazendo o projeto local existir no GitHub',
      objective: 'Conectar o repositório local ao remoto e realizar o primeiro envio com segurança.',
      content: `
        <div class="hero-box">
          <h3>Os dois lados existem, mas ainda não estão ligados.</h3>
          <p>O Café Aurora tem commits no computador e um repositório vazio no GitHub. Agora Rafael vai dizer ao Git local qual é o endereço remoto e enviar a branch principal.</p>
        </div>
        <h3>1. Confirme o projeto</h3>
        <pre class="command">git status\ngit log --oneline</pre>
        <h3>2. Copie a URL HTTPS do GitHub e registre o remoto</h3>
        <pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>
        <p><span class="inline-code">origin</span> é o nome curto que usaremos para esse repositório remoto.</p>
        <h3>3. Descubra o nome real da branch principal</h3>
        <pre class="command">git branch --show-current</pre>
        <p>Guarde exatamente o nome mostrado. Neste material chamaremos esse valor de <span class="inline-code">NOME-DA-BRANCH</span>.</p>
        <h3>4. Faça o primeiro envio</h3>
        <pre class="command">git push -u origin NOME-DA-BRANCH</pre>
        <p>Substitua <span class="inline-code">NOME-DA-BRANCH</span> pelo nome que apareceu no comando anterior. O <span class="inline-code">-u</span> cria o acompanhamento entre a branch local e a remota.</p>
        <h3>5. Confira no navegador</h3>
        <p>Atualize a página do repositório. Os arquivos e os commits da branch principal devem aparecer.</p>
        <div class="flow">commit → registra no computador\npush → envia commits ao remoto</div>
        <div class="note-box"><strong>Autenticação:</strong> se o Git Credential Manager abrir o navegador, conclua o login solicitado e volte ao CMD.</div>`
    },
    {
      id: 3,
      menu: '3 PC → GitHub',
      title: 'GitHub 3 — Uma mudança nasce no computador',
      objective: 'Perceber que um commit local só chega ao GitHub depois do push.',
      content: `
        <div class="hero-box">
          <h3>Marina pede um telefone de contato.</h3>
          <p>Rafael fará a alteração no computador. Mesmo depois do commit, o GitHub continuará com a versão anterior até o envio.</p>
        </div>
        <pre class="command">git status\necho Contato: 11 99999-0000 &gt;&gt; avisos.txt\ngit diff\ngit add avisos.txt\ngit status\ngit commit -m "Adiciona contato do cafe"\ngit status</pre>
        <p>Neste momento a nova versão já existe no Git local, mas ainda não no GitHub.</p>
        <pre class="command">git push\ngit status</pre>
        <p>Atualize o repositório no navegador e confirme o novo commit.</p>
        <div class="concept-box"><strong>Commit e push não são a mesma coisa.</strong> Commit registra aqui; push envia os commits que o remoto ainda não possui.</div>`
    },
    {
      id: 4,
      menu: '4 GitHub → PC',
      title: 'GitHub 4 — Uma mudança nasce no GitHub',
      objective: 'Entender que o computador não recebe automaticamente um commit criado no remoto.',
      content: `
        <div class="hero-box">
          <h3>Agora vamos criar de propósito a situação inversa.</h3>
          <p>Marina informa que a música ao vivo começará às <strong>19h30</strong>. Rafael está longe do computador principal e faz essa pequena correção diretamente no GitHub. Assim o remoto ficará mais novo que a cópia local.</p>
        </div>
        <h3>1. Edite avisos.txt no GitHub</h3>
        <p>Altere:</p>
        <pre class="command">Musica ao vivo: sexta 19h</pre>
        <p>para:</p>
        <pre class="command">Musica ao vivo: sexta 19h30</pre>
        <p>Confirme a edição criando um commit com uma mensagem como:</p>
        <pre class="command">Corrige horario da musica ao vivo</pre>
        <h3>2. Observe que o computador continua antigo</h3>
        <pre class="command">type avisos.txt\ngit status</pre>
        <p>A linha local ainda mostra <strong>19h</strong>. Um commit criado no GitHub não altera sozinho os arquivos do computador.</p>
        <h3>3. Traga e incorpore a novidade</h3>
        <pre class="command">git pull\ntype avisos.txt\ngit log --oneline\ngit status</pre>
        <p>Agora a cópia local deve mostrar <strong>19h30</strong> e o novo commit passa a fazer parte do histórico local.</p>
        <div class="flow">mudança no GitHub → computador continua antigo → pull → computador atualizado</div>`
    },
    {
      id: 5,
      menu: '5 Clone',
      title: 'GitHub 5 — Criando uma segunda cópia do projeto',
      objective: 'Usar clone quando o repositório já existe no GitHub e precisa ser trazido para outro local.',
      content: `
        <div class="hero-box">
          <h3>Rafael precisa trabalhar em outro computador.</h3>
          <p>Não faz sentido criar outra pasta com <span class="inline-code">git init</span>. O projeto já existe no GitHub. A nova cópia deve nascer a partir dele.</p>
        </div>
        <div class="concept-box"><strong>clone cria uma nova cópia local de um repositório remoto que já existe.</strong></div>
        <h3>1. Copie a URL HTTPS em Code</h3>
        <pre class="command">https://github.com/USUARIO/site-cafe-aurora.git</pre>
        <h3>2. Em outro computador, confira o Git e sua identificação</h3>
        <pre class="command">git --version\ngit config --global user.name\ngit config --global user.email</pre>
        <p>Se nome ou e-mail estiverem vazios, faça a configuração mostrada no início do módulo antes de criar novos commits.</p>
        <h3>3. Se estiver simulando no mesmo computador</h3>
        <pre class="command">cd /d "%USERPROFILE%"\nmkdir outro-computador\ncd outro-computador</pre>
        <h3>4. Clone o projeto</h3>
        <pre class="command">git clone URL-DO-REPOSITORIO\ncd site-cafe-aurora\ngit status\ngit log --oneline\ngit remote -v\ngit branch -a</pre>
        <p>Não execute <span class="inline-code">git init</span> depois do clone: a cópia já é um repositório e já conhece o remoto.</p>
        <div class="note-box"><strong>Observe uma coisa importante:</strong> a branch <span class="inline-code">teste-reservas</span> foi criada no computador original, mas ainda não foi enviada ao GitHub. Por isso ela não aparece nesta nova cópia. Voltaremos a ela mais adiante.</div>`
    },
    {
      id: 6,
      menu: '6 Outra cópia envia',
      title: 'GitHub 6 — Uma cópia mudou. A outra ainda não.',
      objective: 'Perceber concretamente que duas cópias locais não se sincronizam sozinhas.',
      content: `
        <div class="hero-box">
          <h3>A segunda cópia recebe uma nova tarefa.</h3>
          <p>Marina pede para informar que pedidos para retirada podem ser feitos até <strong>20h</strong>. Rafael está trabalhando na cópia recém-clonada.</p>
        </div>
        <h3>1. Antes de começar, confira e atualize esta cópia</h3>
        <pre class="command">git status\ngit pull</pre>
        <h3>2. Faça a mudança e envie</h3>
        <pre class="command">echo Pedidos para retirada: ate 20h &gt;&gt; avisos.txt\ngit status\ngit diff\ngit add avisos.txt\ngit commit -m "Adiciona horario para retirada de pedidos"\ngit push\ngit status</pre>
        <h3>3. Volte à cópia original e apenas observe</h3>
        <p>Se estiver simulando no mesmo computador:</p>
        <pre class="command">cd /d "%USERPROFILE%\\meus-repositorios\\site-cafe-aurora"\ntype avisos.txt\ngit status</pre>
        <p>Se sua cópia original estiver em uma pasta de rede, volte a ela pelo mesmo caminho usado anteriormente.</p>
        <p>A informação de retirada ainda não aparece. O segundo computador enviou para o GitHub, mas a primeira cópia não se atualizou sozinha.</p>
        <div class="concept-box"><strong>O GitHub conecta as cópias; ele não empurra mudanças automaticamente para cada computador.</strong></div>`
    },
    {
      id: 7,
      menu: '7 Fetch e pull',
      title: 'GitHub 7 — Descobrir uma novidade não é o mesmo que recebê-la',
      objective: 'Distinguir fetch de pull usando uma diferença que realmente existe entre as duas cópias.',
      content: `
        <div class="hero-box">
          <h3>A cópia original ficou para trás.</h3>
          <p>No tópico anterior, a segunda cópia enviou o horário de retirada para o GitHub. A cópia original ainda está aberta exatamente como estava antes. Agora podemos enxergar a diferença entre <span class="inline-code">fetch</span> e <span class="inline-code">pull</span>.</p>
        </div>
        <h3>1. Veja o conteúdo antes de receber qualquer coisa</h3>
        <pre class="command">type avisos.txt\ngit status</pre>
        <h3>2. Busque informações do remoto sem incorporar os commits</h3>
        <pre class="command">git fetch\ngit status\ntype avisos.txt</pre>
        <p>O Git agora conhece a novidade remota e pode informar que sua branch está atrás da correspondente remota. Porém o arquivo continua sem a linha de retirada.</p>
        <h3>3. Agora incorpore a novidade</h3>
        <pre class="command">git pull\ntype avisos.txt\ngit status</pre>
        <p>A linha <strong>Pedidos para retirada: ate 20h</strong> passa a existir também nesta cópia.</p>
        <div class="mini-grid">
          <div class="mini-card"><strong>fetch</strong><br>atualiza o que o Git sabe sobre o remoto, sem incorporar automaticamente na branch atual.</div>
          <div class="mini-card"><strong>pull</strong><br>busca e incorpora as novidades na branch atual.</div>
        </div>`
    },
    {
      id: 8,
      menu: '8 Publicar branch',
      title: 'GitHub 8 — Fazendo uma branch local existir no GitHub',
      objective: 'Publicar a branch de teste sem ainda integrá-la à branch principal.',
      content: `
        <div class="hero-box">
          <h3>Agora voltamos a uma ponta deixada no Git local.</h3>
          <p>A branch <span class="inline-code">teste-reservas</span> foi criada no computador original antes de o GitHub entrar na história. O primeiro push enviou apenas a branch principal. Por isso o teste ainda é local.</p>
        </div>
        <h3>1. Confirme que está na cópia original</h3>
        <pre class="command">git status\ngit branch</pre>
        <p>Você deve enxergar <span class="inline-code">teste-reservas</span> na lista de branches locais.</p>
        <h3>2. Entre na branch de teste e publique-a</h3>
        <pre class="command">git switch teste-reservas\ngit status\ngit push -u origin teste-reservas</pre>
        <p>Agora a branch existe também no GitHub. O teste foi publicado, mas ainda não entrou na branch principal.</p>
        <h3>3. Volte para a branch principal</h3>
        <pre class="command">git switch BRANCH_PRINCIPAL\ngit status</pre>
        <p>Substitua <span class="inline-code">BRANCH_PRINCIPAL</span> pelo nome da branch principal que você anotou no módulo Git.</p>
        <div class="concept-box"><strong>Publicar uma branch não é fazer merge.</strong> Push torna aquela linha de trabalho disponível no remoto; a principal continua separada.</div>`
    },
    {
      id: 9,
      menu: '9 Integrar branch',
      title: 'GitHub 9 — O teste foi aprovado: integrando a branch',
      objective: 'Incorporar uma branch aprovada à principal e encerrar a linha de teste.',
      content: `
        <div class="hero-box">
          <h3>Marina aprovou as reservas antecipadas.</h3>
          <p>Agora a situação mudou: aquilo que era um teste deve passar a fazer parte da versão principal do projeto.</p>
        </div>
        <h3>1. Confirme a principal e atualize-a</h3>
        <pre class="command">git status\ngit pull</pre>
        <h3>2. Integre a branch de teste</h3>
        <pre class="command">git merge teste-reservas\ntype reservas.txt\ngit status</pre>
        <p>Depois do merge, os commits da experiência passam a fazer parte da história alcançada pela branch principal.</p>
        <h3>3. Envie a principal atualizada</h3>
        <pre class="command">git push</pre>
        <h3>4. Como o teste terminou, remova as referências da branch</h3>
        <pre class="command">git branch -d teste-reservas\ngit push origin --delete teste-reservas</pre>
        <p>Os commits não desaparecem: o trabalho aprovado já foi integrado à principal.</p>
        <div class="flow">experimentar em branch → publicar branch → aprovar → merge → push → encerrar branch</div>`
    },
    {
      id: 10,
      menu: '10 Diagnosticar',
      title: 'GitHub 10 — Quando a sincronização não acontece como esperado',
      objective: 'Diagnosticar o estado antes de escolher um comando de correção.',
      content: `
        <div class="hero-box">
          <h3>Não comece pelo conserto. Comece pelas evidências.</h3>
          <p>Quando um push, pull ou outro comando não produzir o resultado esperado, Rafael evita copiar soluções aleatórias. Primeiro identifica onde está e como os lados estão relacionados.</p>
        </div>
        <h3>O diagnóstico mínimo</h3>
        <pre class="command">git status\ngit branch --show-current\ngit remote -v\ngit log --oneline</pre>
        <div class="flow">estou na pasta certa?\n      ↓\ncomo está minha cópia?\n      ↓\nqual branch está ativa?\n      ↓\nqual remoto está configurado?\n      ↓\nsó então escolho o próximo comando</div>
        <h3>Não aparece origin</h3>
        <p>Confira com <span class="inline-code">git remote -v</span>. Se realmente não houver remoto e este projeto precisar ser conectado ao GitHub:</p>
        <pre class="command">git remote add origin URL-DO-REPOSITORIO\ngit remote -v</pre>
        <h3>O push diz que o remoto possui novidades</h3>
        <p>Não force o envio. Primeiro entenda a situação:</p>
        <pre class="command">git status\ngit fetch\ngit status\ngit pull</pre>
        <p>Se o pull concluir normalmente, faça o push depois. Se aparecer conflito, pare e leia quais arquivos o Git indicou antes de continuar.</p>
        <h3>O comando usou main, mas sua branch tem outro nome</h3>
        <pre class="command">git branch --show-current</pre>
        <p>Use o nome que realmente existe; não suponha <span class="inline-code">main</span> ou <span class="inline-code">master</span>.</p>
        <h3>Um commit errado já foi enviado</h3>
        <p>O Git local continua sabendo como corrigi-lo sem apagar a história:</p>
        <pre class="command">git log --oneline\ngit revert --no-edit HASH\ngit push</pre>
        <div class="danger-box"><strong>Neste módulo, não usamos force push, reset --hard ou rebase para tentar “destravar” problemas.</strong> Primeiro investigue; depois use a operação que corresponde à situação.</div>
        <div class="ok-box"><strong>Git + GitHub concluídos.</strong> Você acompanhou o mesmo projeto desde o primeiro commit local até duas cópias, sincronização em duas direções, branches e integração.</div>`
    }
  ];

  githubSteps.splice(0, githubSteps.length, ...githubMbb);

  const exerciciosGitHub = [
    {
      id: 'e13', menu: '13 Publicar', title: 'Exercício 13 — Fazendo o projeto local existir no GitHub',
      objective: 'Publicar um histórico que já nasceu no computador sem criar uma segunda história remota.',
      content: `<div class="task-box"><h4><span class="exercise-number">13</span>Desafio</h4><p>O projeto <span class="inline-code">feira-criativa</span> já possui commits locais. Crie no GitHub um repositório <strong>vazio</strong> com esse nome, conecte o remoto e faça o primeiro push da branch principal.</p></div>
        <h3>Antes de executar</h3><div class="concept-box"><strong>Projeto nasceu no PC com histórico → GitHub começa vazio.</strong></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">git status\ngit remote add origin URL-DO-REPOSITORIO\ngit remote -v\ngit branch --show-current\ngit push -u origin NOME-DA-BRANCH</pre><p>Use o nome real mostrado pelo Git.</p></div></details>`
    },
    {
      id: 'e14', menu: '14 PC → GitHub', title: 'Exercício 14 — Uma mudança local chega ao remoto',
      objective: 'Distinguir commit de push em uma alteração simples.',
      content: `<div class="task-box"><h4><span class="exercise-number">14</span>Desafio</h4><p>Acrescente <strong>Entrada gratuita</strong> a <span class="inline-code">evento.txt</span>, registre a versão e confirme que o GitHub só recebe a mudança depois do push.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">echo Entrada gratuita &gt;&gt; evento.txt\ngit status\ngit diff\ngit add evento.txt\ngit commit -m "Informa entrada gratuita"\ngit status\ngit push</pre><p>Depois do commit, confira o GitHub antes e depois do push.</p></div></details>`
    },
    {
      id: 'e15', menu: '15 GitHub → PC', title: 'Exercício 15 — Uma correção nasce no GitHub',
      objective: 'Perceber que uma alteração remota não chega automaticamente à cópia local.',
      content: `<div class="task-box"><h4><span class="exercise-number">15</span>Desafio</h4><p>No GitHub, altere em <span class="inline-code">evento.txt</span> o horário de sábado de <strong>10h</strong> para <strong>11h</strong> e crie o commit pelo navegador. No computador, comprove que o arquivo continua antigo e só então use pull.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">type evento.txt\ngit status\ngit pull\ntype evento.txt\ngit log --oneline</pre><p>Antes do pull a cópia local ainda mostra o conteúdo anterior.</p></div></details>`
    },
    {
      id: 'e16', menu: '16 Clone', title: 'Exercício 16 — Criando uma segunda cópia',
      objective: 'Clonar o repositório e reconhecer o que só existe localmente na cópia original.',
      content: `<div class="task-box"><h4><span class="exercise-number">16</span>Desafio</h4><p>Simule outro computador em uma nova pasta e clone <span class="inline-code">feira-criativa</span>. Confira arquivos, histórico, remoto e branches. Observe que <span class="inline-code">teste-divulgacao</span> ainda não aparece, pois ela não foi publicada.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">cd /d "%USERPROFILE%"\nmkdir outro-computador-exercicio\ncd outro-computador-exercicio\ngit clone URL-DO-REPOSITORIO\ncd feira-criativa\ngit status\ngit log --oneline\ngit remote -v\ngit branch -a</pre></div></details>`
    },
    {
      id: 'e17', menu: '17 Duas cópias', title: 'Exercício 17 — Uma cópia muda e a outra fica para trás',
      objective: 'Produzir de propósito uma diferença entre duas cópias locais.',
      content: `<div class="task-box"><h4><span class="exercise-number">17</span>Desafio</h4><p>Na cópia clonada, acrescente <strong>Contato: feira@exemplo.com</strong>, faça commit e push. Depois volte à cópia original e apenas confira <span class="inline-code">evento.txt</span>, sem usar fetch ou pull ainda.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">REM na copia clonada\ngit status\ngit pull\necho Contato: feira@exemplo.com &gt;&gt; evento.txt\ngit diff\ngit add evento.txt\ngit commit -m "Adiciona contato da feira"\ngit push\n\nREM volte a copia original\ncd /d "%USERPROFILE%\\meus-repositorios\\feira-criativa"\ntype evento.txt\ngit status</pre><p>O contato ainda não deve aparecer na cópia original.</p></div></details>`
    },
    {
      id: 'e18', menu: '18 Fetch e pull', title: 'Exercício 18 — Descobrir primeiro, receber depois',
      objective: 'Observar na prática a diferença entre fetch e pull.',
      content: `<div class="task-box"><h4><span class="exercise-number">18</span>Desafio</h4><p>Continue na cópia original. Use fetch e confirme que <span class="inline-code">evento.txt</span> ainda não mudou. Depois use pull e confirme que o contato chegou.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">type evento.txt\ngit status\ngit fetch\ngit status\ntype evento.txt\ngit pull\ntype evento.txt\ngit status</pre><p>Fetch atualiza as informações conhecidas sobre o remoto; pull incorpora os commits na branch atual.</p></div></details>`
    },
    {
      id: 'e19', menu: '19 Publicar branch', title: 'Exercício 19 — Fazendo a branch de teste existir no GitHub',
      objective: 'Publicar uma branch local sem integrá-la à principal.',
      content: `<div class="task-box"><h4><span class="exercise-number">19</span>Desafio</h4><p>Na cópia original, localize a branch <span class="inline-code">teste-divulgacao</span>, publique-a no GitHub e depois volte para a branch principal. Não faça merge ainda.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">git branch\ngit switch teste-divulgacao\ngit status\ngit push -u origin teste-divulgacao\ngit switch NOME-DA-BRANCH\ngit status</pre><p>Use como <span class="inline-code">NOME-DA-BRANCH</span> a principal que você anotou anteriormente.</p></div></details>`
    },
    {
      id: 'e20', menu: '20 Integrar branch', title: 'Exercício 20 — O teste foi aprovado',
      objective: 'Integrar uma branch aprovada e depois encerrar a linha de teste.',
      content: `<div class="task-box"><h4><span class="exercise-number">20</span>Desafio</h4><p>A divulgação foi aprovada. Atualize a branch principal, faça merge de <span class="inline-code">teste-divulgacao</span>, envie o resultado e remova a branch local e remota.</p></div>
        <details class="answer-box"><summary>Conferir sequência</summary><div class="answer-content"><pre class="command">git status\ngit pull\ngit merge teste-divulgacao\ntype divulgacao.txt\ngit push\ngit branch -d teste-divulgacao\ngit push origin --delete teste-divulgacao</pre></div></details>`
    },
    {
      id: 'e21', menu: '21 Diagnóstico', title: 'Exercício 21 — Escolhendo o próximo passo',
      objective: 'Diagnosticar antes de executar comandos de correção ou sincronização.',
      content: `<div class="task-box"><h4><span class="exercise-number">21</span>Responda</h4><ol><li>Você não sabe se está no repositório certo. O que deve conferir primeiro?</li><li>Quer descobrir qual branch está ativa.</li><li>Quer conferir para qual GitHub este projeto aponta.</li><li>Fez um commit local correto e o GitHub ainda não recebeu.</li><li>Outra cópia enviou um commit e você quer apenas descobrir a novidade, sem incorporá-la ainda.</li><li>Depois decidiu receber essa novidade na branch atual.</li><li>Um commit errado já foi enviado ao GitHub. Qual estratégia preserva a história?</li></ol></div>
        <details class="answer-box"><summary>Conferir respostas</summary><div class="answer-content"><ol><li>Confira o caminho e use <span class="inline-code">git status</span>.</li><li><span class="inline-code">git branch --show-current</span>.</li><li><span class="inline-code">git remote -v</span>.</li><li><span class="inline-code">git push</span>.</li><li><span class="inline-code">git fetch</span>.</li><li><span class="inline-code">git pull</span>.</li><li><span class="inline-code">git revert HASH</span> e depois <span class="inline-code">git push</span>.</li></ol></div></details>`
    },
    {
      id: 'e22', menu: '22 Desafio final', title: 'Exercício 22 — Projeto completo de sobrevivência',
      objective: 'Aplicar o percurso inteiro sem depender de uma sequência pronta de comandos.',
      content: `<div class="task-box"><h4><span class="exercise-number">22</span>Projeto final</h4><p>Escolha um projeto pequeno e realista. Ele deve nascer localmente, possuir histórico útil, ser publicado no GitHub e depois usado em uma segunda cópia. Inclua uma situação de correção e uma experiência em branch.</p></div>
        <h3>Seu projeto deve demonstrar</h3><ul class="check-list"><li>repositório local e pelo menos três commits explicativos;</li><li>uso consciente de status e diff;</li><li>uma correção com restore ou revert, conforme a situação;</li><li>um caso de consulta ou recuperação histórica;</li><li>publicação em repositório remoto vazio;</li><li>push e pull em situações observáveis;</li><li>clone em outra pasta;</li><li>diferença concreta entre fetch e pull;</li><li>uma branch de teste publicada e depois integrada;</li><li>estado final limpo.</li></ul>
        <pre class="command">git status\ngit log --oneline\ngit branch --show-current\ngit remote -v</pre>
        <div class="concept-box"><strong>Critério de conclusão:</strong> você deve conseguir explicar por que escolheu cada comando, e não apenas reproduzir a sequência.</div>`
    }
  ];

  const indiceE13 = exerciseSteps.findIndex(step => String(step.id) === 'e13');
  if (indiceE13 >= 0) {
    exerciseSteps.splice(indiceE13, exerciseSteps.length - indiceE13, ...exerciciosGitHub);
  } else {
    exerciseSteps.push(...exerciciosGitHub);
  }

  const intro = exerciseStep('inicio');
  if (intro) {
    intro.content = intro.content.replace(
      /<div class="flow">[\s\S]*?<\/div>$/,
      '<div class="flow">criar → registrar → investigar → corrigir → recuperar → experimentar → publicar → enviar → receber → clonar → sincronizar cópias → publicar branch → integrar → diagnosticar</div>'
    );
  }

  const hash = location.hash.match(/^#(git|github|exercicios)-(.+)$/);
  if (hash) {
    setModule(hash[1], decodeURIComponent(hash[2]), false);
  } else {
    setModule('git', 1, false);
  }
})();