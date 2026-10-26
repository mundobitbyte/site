// Camada final de contextualização para iniciantes — Navegação entre Telas.
// Mantém os códigos funcionais e torna visíveis: contexto, ação, conceito, teste e próximo passo.

(() => {
  if (typeof modules === 'undefined' || !modules.navegacao) return;

  const navModule = modules.navegacao;
  const navStep = id => navModule.steps.find(step => String(step.id) === String(id));

  function actions(items = []) {
    return `<ol>${items.map(item => `<li>${item}</li>`).join('')}</ol>`;
  }

  function bullets(items = []) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  function guide({ context, doNow = [], understand = [], check, next }) {
    return `
      <div class="nav-beginner-guide-inner">
        <div class="nav-beginner-guide-grid">
          <section>
            <strong class="nav-beginner-guide-title">Por que estamos fazendo isso?</strong>
            <p>${context}</p>
          </section>
          <section>
            <strong class="nav-beginner-guide-title">Faça agora no Snack</strong>
            ${actions(doNow)}
          </section>
          <section>
            <strong class="nav-beginner-guide-title">Entenda o que aparece</strong>
            ${bullets(understand)}
          </section>
        </div>
        <div class="nav-beginner-guide-footer">
          <div><strong>Confira:</strong> ${check}</div>
          <div><strong>Depois:</strong> ${next}</div>
        </div>
      </div>`;
  }

  function inlineGuide(title, text, items = []) {
    return `
      <div class="nav-beginner-inline-guide">
        <strong>${title}</strong>
        <p>${text}</p>
        ${items.length ? bullets(items) : ''}
      </div>`;
  }

  const intro = navStep('nav-intro');
  if (intro) {
    intro.title = 'Navegação entre Telas — a Central de Consultas começa a crescer';
    intro.objective = 'Entender por que um aplicativo com várias funções precisa de telas separadas e visualizar o projeto antes de começar a alterar arquivos.';
    intro.kicker = 'Uma situação que pede organização';
    intro.lead = 'Imagine um pequeno aplicativo de apoio usado no dia a dia. Em um momento é preciso consultar um CEP para completar um cadastro; em outro, verificar a cotação do dólar; em outro, consultar o clima. As três funções são úteis, mas não faz sentido manter três aplicativos separados. A partir daqui, elas serão reunidas em uma única Central de Consultas.';
    intro.highlight = 'Nesta introdução, ainda não altere arquivos. Primeiro entenda o problema e o mapa do projeto. Na etapa seguinte você abrirá um Snack novo e começará a montar a Central de Consultas passo a passo.';
    intro.boxes = [
      ['O problema', 'Se todas as funcionalidades forem colocadas dentro de um único App.js, o arquivo cresce, mistura responsabilidades e fica mais difícil de entender.'],
      ['A decisão', 'Cada serviço terá sua própria tela. A tela Inicio funcionará como um menu que leva o usuário a CEP, Dólar e Clima.'],
      ['O arquivo principal', 'App.js ficará responsável principalmente por configurar a navegação e registrar quais telas existem.'],
      ['A pasta que será criada', 'screens guardará os arquivos das telas: Inicio.js, BuscaCep.js, CotacaoDolar.js e ClimaAtual.js.'],
      ['Como você vai trabalhar', 'Quando uma etapa mandar criar ou alterar um arquivo, o nome e o local serão indicados. O código mostrado será o estado completo daquele arquivo naquele momento.'],
      ['Resultado final', 'Ao terminar, a tela Inicio mostrará três serviços. Cada botão abrirá sua própria tela e o cabeçalho permitirá voltar.'],
    ];
  }

  const dependencias = navStep('nav-dependencias');
  if (dependencias) {
    dependencias.title = '1 — Criando o projeto e preparando o Snack para navegar';
    dependencias.objective = 'Criar um Snack novo e adicionar ao package.json as bibliotecas usadas pela navegação.';
    dependencias.mbbGuide = guide({
      context: 'Um Snack novo já consegue executar React Native, mas ainda não conhece o React Navigation. Antes de escrever as telas, o projeto precisa registrar as bibliotecas que fornecerão a navegação.',
      doNow: [
        'Abra <strong>snack.expo.dev</strong> e entre em sua conta.',
        'Crie um <strong>Snack novo</strong>. Se quiser nomeá-lo, use <strong>Central de Consultas</strong>.',
        'No painel de arquivos do projeto, abra <strong>package.json</strong>. Não crie outro arquivo com esse nome: ele já existe.',
        'Dentro de <strong>dependencies</strong>, acrescente as quatro linhas mostradas no quadro de código desta etapa.',
        'Mantenha as dependências que já existirem. Entre uma dependência e outra deve haver vírgula.',
        'Aguarde o Snack concluir a atualização antes de continuar.'
      ],
      understand: [
        '<code>@react-navigation/native</code> é o núcleo da navegação.',
        '<code>@react-navigation/native-stack</code> fornece a navegação em pilha usada neste módulo.',
        '<code>react-native-screens</code> e <code>react-native-safe-area-context</code> dão suporte ao funcionamento das telas no ambiente nativo.',
        '<strong>package.json</strong> é o arquivo que registra dependências e outras informações do projeto.'
      ],
      check: 'o Snack deve voltar a exibir o projeto sem erro de dependência.',
      next: 'você abrirá o App.js e fará a primeira navegação funcionar usando somente duas telas.'
    });
  }

  const primeiroApp = navStep('nav-primeiro-app');
  if (primeiroApp) {
    primeiroApp.title = '2 — Fazendo a primeira navegação funcionar no App.js';
    primeiroApp.objective = 'Substituir o App.js por uma versão com duas telas e testar a primeira navegação.';
    primeiroApp.mbbGuide = guide({
      context: 'Antes de criar vários arquivos, é melhor enxergar a navegação funcionando no menor cenário possível. Por isso, Inicio e BuscaCep ficam temporariamente dentro do mesmo App.js.',
      doNow: [
        'No painel de arquivos, clique em <strong>App.js</strong>, que fica na raiz do projeto.',
        'Selecione todo o conteúdo atual do App.js e apague.',
        'Clique em <strong>Copiar</strong> no quadro de código desta etapa.',
        'Cole o código completo dentro de <strong>App.js</strong>. Não crie nenhum outro arquivo ainda.',
        'Espere o preview atualizar e toque no botão <strong>Buscar CEP</strong>.',
        'Na tela Busca CEP, use a seta do cabeçalho para voltar.'
      ],
      understand: [
        '<code>NavigationContainer</code> envolve a parte do aplicativo que participa da navegação.',
        '<code>createNativeStackNavigator()</code> cria o navegador em pilha.',
        '<code>Stack.Navigator</code> reúne as telas desse navegador.',
        '<code>Stack.Screen</code> registra uma tela: <code>name</code> cria o nome da rota e <code>component</code> indica o componente exibido.',
        '<code>{ navigation }</code> dá à tela Inicio acesso aos recursos de navegação.',
        '<code>navigation.navigate(\'BuscaCep\')</code> abre a rota registrada com esse mesmo nome.'
      ],
      check: 'Buscar CEP deve abrir a segunda tela e a seta de voltar deve retornar ao Início.',
      next: 'você vai separar mentalmente três ações diferentes: criar uma tela, registrar a rota e navegar até ela.'
    });
  }

  const modeloMental = navStep('nav-modelo-mental');
  if (modeloMental) {
    modeloMental.title = '3 — Antes de criar arquivos: entenda criar, registrar e abrir uma tela';
    modeloMental.objective = 'Distinguir as três ações que serão repetidas nas próximas etapas.';
    modeloMental.kicker = 'Pare o código por um instante';
    modeloMental.lead = 'Nesta etapa não altere nenhum arquivo. O objetivo é entender uma diferença que evita muitos erros de iniciante: um arquivo de tela pode existir e, mesmo assim, o navegador ainda não saber que ele existe.';
    modeloMental.highlight = '1. Criar o componente → 2. importar e registrar com Stack.Screen → 3. abrir a rota com navigation.navigate().';
    modeloMental.boxes = [
      ['Criar', 'O arquivo define o conteúdo da tela. Exemplo: screens/BuscaCep.js.'],
      ['Importar', 'App.js precisa trazer o componente do arquivo para poder usá-lo.'],
      ['Registrar', 'Stack.Screen associa um name ao componente importado.'],
      ['Abrir', 'navigate() pede a abertura de uma rota pelo name usado no registro.'],
      ['O arquivo não é a rota', 'navigation.navigate() não abre um arquivo físico. Ele procura um name registrado no Stack.'],
      ['Regra para conferir', 'O texto usado em navigate() deve corresponder exatamente ao name da Stack.Screen.'],
    ];
  }

  const inicio = navStep('nav-criar-inicio');
  if (inicio) {
    inicio.title = '4 — Criando a pasta screens e a tela Inicio.js';
    inicio.objective = 'Criar a primeira tela em arquivo próprio e entender a responsabilidade da pasta screens.';
    inicio.mbbGuide = guide({
      context: 'A navegação já funciona, mas as duas telas ainda estão misturadas no App.js. Agora começa a organização do projeto. A primeira tela a sair de App.js será Inicio, porque ela funcionará como o menu da Central de Consultas.',
      doNow: [
        'No painel de arquivos do Snack, crie uma pasta chamada <strong>screens</strong>.',
        'Dentro de <strong>screens</strong>, crie um arquivo chamado <strong>Inicio.js</strong>.',
        'Abra <strong>screens/Inicio.js</strong>.',
        'Clique em <strong>Copiar</strong> no quadro de código desta etapa e cole o código completo em Inicio.js.',
        '<strong>Não altere App.js ainda.</strong> O novo arquivo será ligado à navegação somente depois que BuscaCep.js também existir.'
      ],
      understand: [
        '<code>export default function Inicio(...)</code> torna Inicio o componente principal exportado por este arquivo.',
        '<code>{ navigation }</code> será recebido quando Inicio for registrado como uma tela do Stack.',
        '<code>navigate(\'BuscaCep\')</code> continua apontando para o nome da rota, não para o caminho físico do arquivo.',
        '<code>View</code>, <code>Text</code>, <code>TouchableOpacity</code> e <code>StyleSheet</code> continuam com o mesmo papel já estudado.'
      ],
      check: 'a árvore de arquivos deve mostrar screens/Inicio.js. O preview pode continuar igual porque App.js ainda não usa esse arquivo.',
      next: 'você criará screens/BuscaCep.js para que as duas telas existam antes de App.js importá-las.'
    });
  }

  const cepBase = navStep('nav-criar-cep-base');
  if (cepBase) {
    cepBase.title = '5 — Criando a tela BuscaCep.js';
    cepBase.objective = 'Criar a segunda tela em arquivo próprio antes de registrá-la no navegador.';
    cepBase.mbbGuide = guide({
      context: 'Inicio.js já existe. Agora o destino do botão Buscar CEP também precisa existir como arquivo próprio. Primeiro criamos o componente; só na etapa seguinte App.js será alterado para importá-lo e registrá-lo.',
      doNow: [
        'Dentro da pasta <strong>screens</strong>, crie um arquivo chamado <strong>BuscaCep.js</strong>.',
        'Abra <strong>screens/BuscaCep.js</strong>.',
        'Copie o código completo mostrado nesta etapa e cole dentro de BuscaCep.js.',
        '<strong>Não altere App.js ainda.</strong>'
      ],
      understand: [
        '<code>export default function BuscaCep()</code> exporta o componente para que outro arquivo possa importá-lo.',
        'A tela ainda é simples porque, neste momento, estamos organizando a arquitetura antes de recolocar a consulta ao ViaCEP.',
        'Criar <strong>BuscaCep.js</strong> não registra automaticamente a tela. O registro ainda será feito em App.js.'
      ],
      check: 'a pasta screens deve conter Inicio.js e BuscaCep.js. O preview ainda pode continuar igual.',
      next: 'agora que os dois arquivos existem, App.js poderá importá-los sem gerar erro de arquivo inexistente.'
    });
  }

  const organizar = navStep('nav-organizar-app');
  if (organizar) {
    organizar.title = '6 — Ligando App.js às telas da pasta screens';
    organizar.objective = 'Substituir as telas internas de App.js pelos componentes importados de screens.';
    organizar.mbbGuide = guide({
      context: 'Os arquivos Inicio.js e BuscaCep.js já existem, mas App.js ainda usa as versões antigas declaradas dentro dele. Agora vamos fazer App.js apontar para os arquivos reais da pasta screens.',
      doNow: [
        'Na raiz do projeto, abra <strong>App.js</strong>.',
        'Selecione todo o conteúdo atual e apague.',
        'Copie o código completo desta etapa e cole dentro de App.js.',
        'Aguarde o preview atualizar.',
        'Toque em <strong>Buscar CEP</strong> e depois volte pelo cabeçalho.'
      ],
      understand: [
        '<code>import Inicio from \'./screens/Inicio\'</code> traz o componente Inicio para App.js.',
        '<code>./screens/...</code> é um caminho relativo: parte de App.js, entra em screens e localiza o arquivo.',
        '<code>component={Inicio}</code> liga a rota ao componente importado.',
        '<strong>App.js</strong> passa a configurar a navegação; <strong>screens</strong> passa a guardar as telas.',
        '<strong>screens</strong> e <strong>components</strong> não são sinônimos: screens contém páginas navegáveis; components pode conter peças reutilizáveis dentro delas.'
      ],
      check: 'o comportamento deve ser o mesmo da etapa 2. Se Buscar CEP abre e volta normalmente, a separação dos arquivos funcionou.',
      next: 'a tela BuscaCep já está registrada. Agora vamos substituir seu conteúdo provisório pela consulta real.'
    });
  }

  const cepCompleto = navStep('nav-cep-completo');
  if (cepCompleto) {
    cepCompleto.title = '7 — Transformando BuscaCep.js em uma consulta real';
    cepCompleto.objective = 'Substituir a tela provisória pelo código completo da consulta ao ViaCEP.';
    cepCompleto.mbbGuide = guide({
      context: 'A rota BuscaCep já funciona. Isso significa que não precisamos mexer na navegação para colocar a consulta real. Basta trocar o conteúdo do componente que já está ligado a essa rota.',
      doNow: [
        'Abra <strong>screens/BuscaCep.js</strong>.',
        'Selecione todo o conteúdo provisório do arquivo e apague.',
        'Copie o código completo desta etapa e cole em BuscaCep.js.',
        'Não altere <strong>App.js</strong> nem <strong>Inicio.js</strong>.',
        'Digite um CEP válido, toque em <strong>Pesquisar</strong> e depois teste <strong>Limpar</strong>.'
      ],
      understand: [
        '<code>useState</code> guarda valores que mudam na tela: CEP, cidade, estado e mensagem.',
        '<code>useRef</code> guarda uma referência para o campo de CEP.',
        '<code>fetch()</code> envia a consulta para o ViaCEP.',
        '<code>try/catch</code> trata uma eventual falha da consulta.',
        '<code>cep.replace(/\\D/g, \'\')</code> remove caracteres que não são números.',
        '<code>cidade !== \'\' && (...)</code> mostra o resultado somente quando existe cidade para exibir.',
        '<code>campoCep.current?.focus()</code> devolve o foco ao campo quando a referência está disponível.'
      ],
      check: 'um CEP válido deve mostrar cidade e estado. Limpar deve apagar os dados e devolver o foco ao campo.',
      next: 'com uma tela completa funcionando, você repetirá o ciclo para acrescentar a Cotação do Dólar.'
    });
  }

  function cleanCustomGuides(step) {
    if (!step || typeof step.html !== 'string') return null;
    const template = document.createElement('template');
    template.innerHTML = step.html.trim();
    template.content.querySelectorAll('.nav-pedagogical-guide, .nav-beginner-inline-guide').forEach(el => el.remove());
    return template;
  }

  function insertBeforePanel(template, fileName, html) {
    const panels = [...template.content.querySelectorAll('.panel.brief')];
    const panel = panels.find(item => item.querySelector('.panel-title span')?.textContent?.trim() === fileName);
    if (panel) panel.insertAdjacentHTML('beforebegin', html);
  }

  const dolar = navStep('nav-dolar');
  if (dolar && typeof dolar.html === 'string') {
    dolar.title = '8 — Acrescentando Cotação do Dólar sem quebrar o que já funciona';
    dolar.objective = 'Criar a nova tela, registrá-la em App.js e criar o acesso em Inicio.js.';
    const template = cleanCustomGuides(dolar);
    if (template) {
      const kicker = template.content.querySelector('.intro-kicker');
      const lead = template.content.querySelector('.intro-lead');
      const highlight = template.content.querySelector('.intro-highlight');
      if (kicker) kicker.textContent = 'A Central de Consultas ganha um segundo serviço';
      if (lead) lead.textContent = 'Busca CEP já funciona. Agora surge uma nova necessidade: consultar a cotação do dólar sem misturar esse código dentro da tela de CEP. A nova função terá sua própria tela.';
      if (highlight) highlight.textContent = 'A ordem importa: 1. criar CotacaoDolar.js → 2. registrar a rota em App.js → 3. criar o botão de acesso em Inicio.js.';

      const firstPanel = template.content.querySelector('.panel.brief');
      if (firstPanel) firstPanel.insertAdjacentHTML('beforebegin', inlineGuide(
        'Antes de alterar arquivos',
        'Nesta etapa você mexerá em três arquivos. Faça exatamente na ordem apresentada para nunca importar uma tela que ainda não existe.',
        [
          'Primeiro crie <strong>screens/CotacaoDolar.js</strong>.',
          'Depois substitua <strong>App.js</strong> pela versão mostrada para importar e registrar a nova rota.',
          'Por último substitua <strong>screens/Inicio.js</strong> pela versão que inclui o novo botão.',
          'Ao final, teste tanto Busca CEP quanto Cotação do Dólar.'
        ]
      ));

      insertBeforePanel(template, 'screens/CotacaoDolar.js', inlineGuide(
        '1. Crie screens/CotacaoDolar.js',
        'No painel Project, abra a pasta screens, crie o arquivo CotacaoDolar.js e cole nele o primeiro código completo abaixo.',
        [
          '<code>useState</code> guarda a cotação e a mensagem da consulta.',
          '<code>fetch()</code> consulta a AwesomeAPI.',
          '<code>dados.USDBRL</code> acessa o objeto interno com os valores do dólar.',
          '<code>Number(...).toFixed(2)</code> transforma o valor em número e o mostra com duas casas decimais.',
          'Neste ponto a tela existe, mas ainda não pode ser aberta pelo aplicativo.'
        ]
      ));

      insertBeforePanel(template, 'App.js', inlineGuide(
        '2. Registre a nova tela em App.js',
        'Abra App.js na raiz do projeto, apague o conteúdo atual e cole a versão completa mostrada abaixo.',
        [
          '<code>import CotacaoDolar from \'./screens/CotacaoDolar\'</code> traz a nova tela para App.js.',
          '<code>Stack.Screen name="CotacaoDolar"</code> cria a rota.',
          '<code>component={CotacaoDolar}</code> liga a rota ao componente que será exibido.'
        ]
      ));

      insertBeforePanel(template, 'screens/Inicio.js', inlineGuide(
        '3. Acrescente o botão em Inicio.js',
        'Abra screens/Inicio.js, substitua seu conteúdo pela versão abaixo e observe o novo botão Cotação do Dólar.',
        [
          '<code>navigation.navigate(\'CotacaoDolar\')</code> usa exatamente o mesmo nome registrado em Stack.Screen.',
          'Depois de salvar, a tela inicial deve mostrar Buscar CEP e Cotação do Dólar.',
          'Teste os dois botões e o retorno pelo cabeçalho.'
        ]
      ));

      dolar.html = template.innerHTML;
    }
  }

  const clima = navStep('nav-clima');
  if (clima && typeof clima.html === 'string') {
    clima.title = '9 — Acrescentando Clima Atual e repetindo o mesmo padrão';
    clima.objective = 'Criar, registrar e abrir uma terceira tela usando o mesmo ciclo já compreendido.';
    const template = cleanCustomGuides(clima);
    if (template) {
      const kicker = template.content.querySelector('.intro-kicker');
      const lead = template.content.querySelector('.intro-lead');
      const highlight = template.content.querySelector('.intro-highlight');
      if (kicker) kicker.textContent = 'O processo começa a ficar previsível';
      if (lead) lead.textContent = 'Agora a Central de Consultas já possui CEP e Dólar. O terceiro serviço, Clima Atual, entra sem mudar a arquitetura: criaremos outra tela, registraremos outra rota e acrescentaremos outro botão.';
      if (highlight) highlight.textContent = 'Repita conscientemente: criar ClimaAtual.js → registrar em App.js → abrir a rota a partir de Inicio.js.';

      const firstPanel = template.content.querySelector('.panel.brief');
      if (firstPanel) firstPanel.insertAdjacentHTML('beforebegin', inlineGuide(
        'Faça na mesma ordem da etapa anterior',
        'O objetivo agora não é decorar comandos. É perceber que uma nova funcionalidade pode entrar no projeto seguindo um procedimento estável.',
        [
          'Crie <strong>screens/ClimaAtual.js</strong> e cole o primeiro código.',
          'Substitua <strong>App.js</strong> pela versão que registra ClimaAtual.',
          'Substitua <strong>screens/Inicio.js</strong> pela versão que mostra o terceiro botão.',
          'Teste CEP, Dólar e Clima antes de avançar.'
        ]
      ));

      insertBeforePanel(template, 'screens/ClimaAtual.js', inlineGuide(
        '1. Crie screens/ClimaAtual.js',
        'Na pasta screens, crie ClimaAtual.js e cole o código completo abaixo.',
        [
          'A consulta usa latitude e longitude fixas de São Paulo para não introduzir permissões de GPS agora.',
          '<code>dados.current</code> contém as condições atuais retornadas pela Open-Meteo.',
          '<code>temperature_2m</code> traz a temperatura atual.',
          '<code>wind_speed_10m</code> traz a velocidade atual do vento.',
          '<code>useState</code> e <code>fetch()</code> reaparecem com o mesmo papel das consultas anteriores.'
        ]
      ));

      insertBeforePanel(template, 'App.js', inlineGuide(
        '2. Registre ClimaAtual em App.js',
        'Abra App.js, substitua o conteúdo atual pela versão abaixo e localize o novo import e a nova Stack.Screen.',
        [
          '<code>import ClimaAtual from \'./screens/ClimaAtual\'</code> disponibiliza o componente.',
          '<code>name="ClimaAtual"</code> cria o nome da nova rota.',
          'App.js não contém a lógica do clima; ele apenas registra qual componente pertence à rota.'
        ]
      ));

      insertBeforePanel(template, 'screens/Inicio.js', inlineGuide(
        '3. Acrescente o terceiro botão em Inicio.js',
        'Abra Inicio.js e substitua o conteúdo pela versão final mostrada abaixo.',
        [
          'O novo botão usa <code>navigation.navigate(\'ClimaAtual\')</code>.',
          'Não remova os botões de CEP e Dólar.',
          'Depois de salvar, teste os três serviços e o retorno de cada tela.'
        ]
      ));

      clima.html = template.innerHTML;
    }
  }

  const projetoFinal = navStep('nav-projeto-final');
  if (projetoFinal && typeof projetoFinal.html === 'string') {
    projetoFinal.title = '10 — Projeto completo: conferência e recuperação';
    projetoFinal.objective = 'Conferir a estrutura final ou reconstruir o projeto sem introduzir conteúdo novo.';
    const template = cleanCustomGuides(projetoFinal);
    if (template) {
      const kicker = template.content.querySelector('.intro-kicker');
      const lead = template.content.querySelector('.intro-lead');
      const highlight = template.content.querySelector('.intro-highlight');
      if (kicker) kicker.textContent = 'Ponto de conferência';
      if (lead) lead.textContent = 'Aqui não existe conceito novo. Esta etapa reúne todos os arquivos finais para você comparar com o seu projeto, recuperar um arquivo perdido ou reconstruir a Central de Consultas em um Snack novo.';
      if (highlight) highlight.textContent = 'Se o seu projeto já funciona, não recopie tudo sem necessidade. Compare a estrutura e use apenas o arquivo que precisar corrigir.';
      const firstPanel = template.content.querySelector('.panel.brief');
      if (firstPanel) firstPanel.insertAdjacentHTML('beforebegin', inlineGuide(
        'Como usar esta etapa',
        'Escolha o procedimento conforme sua situação.',
        [
          '<strong>Projeto funcionando:</strong> apenas confira nomes, pastas e arquivos.',
          '<strong>Um arquivo ficou errado:</strong> abra somente esse arquivo, apague seu conteúdo e copie a versão final correspondente.',
          '<strong>Recomeçando em um Snack novo:</strong> primeiro configure as dependências da etapa 1; depois crie a pasta screens e os quatro arquivos; por fim copie App.js.',
          '<strong>Teste final:</strong> abra CEP, Dólar e Clima e volte de cada tela.'
        ]
      ));
      projetoFinal.html = template.innerHTML;
    }
  }

  const consolidacao = navStep('nav-consolidacao');
  if (consolidacao) {
    consolidacao.title = '11 — Consolidando: o que cada arquivo faz';
    consolidacao.objective = 'Revisar a arquitetura final antes de praticar sozinho.';
    consolidacao.kicker = 'Não altere arquivos nesta etapa';
    consolidacao.lead = 'Pare e leia o projeto como um sistema. Você repetiu o mesmo ciclo com CEP, Dólar e Clima. Agora é importante conseguir explicar onde cada responsabilidade ficou antes de partir para os exercícios.';
    consolidacao.highlight = 'Tela define o conteúdo → import disponibiliza o componente → Stack.Screen registra a rota → navigate() abre essa rota.';
    consolidacao.boxes = [
      ['App.js', 'Configura o NavigationContainer, cria o Stack, importa as telas e registra as rotas.'],
      ['screens/Inicio.js', 'É a tela inicial. Mostra os serviços e chama navigate() quando o usuário toca em um botão.'],
      ['screens/BuscaCep.js', 'Cuida da interface e da consulta de CEP.'],
      ['screens/CotacaoDolar.js', 'Cuida da interface e da consulta da cotação do dólar.'],
      ['screens/ClimaAtual.js', 'Cuida da interface e da consulta de clima.'],
      ['Regra que se repete', 'Para acrescentar outra tela: criar arquivo → importar → registrar Stack.Screen → criar um caminho com navigate().'],
    ];
  }

  const exercicios = navStep('nav-exercicios');
  if (exercicios) {
    exercicios.title = '99 — Exercícios: amplie a Central de Consultas';
    exercicios.objective = 'Criar novas telas a partir do aplicativo da etapa 10, preservando as consultas existentes.';
    exercicios.kicker = 'Do projeto pronto à sua próxima conquista';
    exercicios.lead = 'Na etapa 10 — Projeto Completo, você já tem uma Central de Consultas funcionando. Vamos partir dela e ampliar o aplicativo, uma tela de cada vez.';
    exercicios.highlight = 'Em cada nova tela: crie o componente → importe no App.js → registre a rota → adicione o botão no Início → execute e teste no Expo Snack.';
    const ex99Image = (file, caption, alt) => '<figure class="nav-ex99-figure"><img src="../img/reactnative/exercicios99/' + file + (file === 'central-base-4-telas' || file === 'central-ampliada-7-telas' ? '.png' : '.webp') + '" alt="' + alt + '" loading="lazy" decoding="async"><figcaption>' + caption + '</figcaption></figure>';
    const ex99BaseImage = ex99Image('central-base-4-telas', 'Esta é a tela inicial do aplicativo da etapa 10.', 'Central de Consultas original com três opções');
    const ex99SobreImage = ex99Image('tela-sobre', 'Exemplo de apresentação da tela Sobre.', 'Tela Sobre da Central de Consultas');
    const ex99ConversorImage = ex99Image('tela-conversor', 'Exemplo da conversão de quilômetros para milhas.', 'Tela Conversor');
    const ex99ContadorImage = ex99Image('tela-contador', 'Exemplo da tela Contador.', 'Tela Contador');
    const ex99CentralAmpliadaImage = ex99Image('central-ampliada-7-telas', 'Resultado da ampliação: seis botões na tela inicial.', 'Central ampliada com seis botões');
    exercicios.boxes = [
      ["Comece aqui — recupere a Central de Consultas", "Antes de criar novas telas, abra a etapa <strong>10. Projeto Completo</strong>. No <strong>Expo Snack</strong>, monte e execute o aplicativo usando os arquivos daquela etapa.<br><br>A tela inicial precisa apresentar os três serviços já conhecidos: <strong>Buscar CEP</strong>, <strong>Cotação do Dólar</strong> e <strong>Clima Atual</strong>. Esta é a base para todos os próximos exercícios.<br><br>" + ex99BaseImage + "<br><br><strong>✓ Checkpoint:</strong> os três botões abrem suas respectivas telas? Só avance depois de verificar."],
      ["1. Sobre — apresente o aplicativo", "A Central de Consultas já oferece serviços úteis. Agora falta explicar a quem abrir o aplicativo o que ele faz.<br><br><strong>Na tela:</strong> mostre <strong>Central de Consultas</strong>, uma breve apresentação das consultas de CEP, dólar e clima, seu nome como desenvolvedor e a tecnologia <strong>React Native com Expo</strong>. Você pode organizar os serviços em pequenos blocos, como na referência.<br><br><strong>Construa:</strong> crie <code>screens/Sobre.js</code> com <code>View</code> e <code>Text</code>. Em <code>App.js</code>, importe o componente e registre a rota <code>Sobre</code> com título visível <code>Sobre</code>. Em <code>screens/Inicio.js</code>, acrescente um botão que use <code>navigation.navigate('Sobre')</code>.<br><br><em>Veja abaixo uma possibilidade de apresentação. O desafio é construir sua própria tela.</em><br><br>" + ex99SobreImage + "<br><br><strong>✓ Checkpoint:</strong> o botão Sobre abre a nova tela e a seta do cabeçalho permite voltar? As consultas antigas continuam funcionando?"],
      ["2. Conversor — quilômetros para milhas", "Uma distância em quilômetros precisa ser exibida em milhas. Vamos acrescentar uma ferramenta para isso.<br><br><strong>Na tela:</strong> crie um <strong>campo de quilômetros</strong>, os botões <strong>Converter</strong> e <strong>Limpar</strong> e uma área para mostrar o resultado com <strong>duas casas decimais</strong>.<br><br><strong>Fórmula:</strong> <strong>milhas = quilômetros × 0,621371</strong>.<br><br><strong>Construa:</strong> crie <code>screens/Conversor.js</code> com <code>TextInput</code>, <code>Text</code>, <code>Button</code> e <code>useState</code>. Trate entradas vazias ou inválidas. Depois importe, registre a rota <code>Conversor</code> em <code>App.js</code> e adicione seu acesso em <code>Inicio.js</code>.<br><br><em>Compare sua interface com este exemplo de resultado:</em><br><br>" + ex99ConversorImage + "<br><br><strong>✓ Checkpoint:</strong> <strong>10 km → aproximadamente 6,21 milhas</strong>? Limpar funciona? As telas anteriores continuam acessíveis?"],
      ["3. Contador — um número que muda", "Agora a Central de Consultas ganhará uma ferramenta cujo valor muda quando o usuário toca nos botões.<br><br><strong>Na tela:</strong> mostre o título <strong>Contador</strong>, o valor inicial <strong>0</strong> e três botões: <strong>Aumentar</strong>, <strong>Diminuir</strong> e <strong>Zerar</strong>.<br><br><strong>Construa:</strong> crie <code>screens/Contador.js</code> e use <code>useState</code> para guardar o valor. Faça os botões somarem 1, subtraírem 1 ou voltarem a 0. Importe e registre <code>Contador</code> em <code>App.js</code>; crie o botão correspondente em <code>Inicio.js</code>.<br><br><em>Este é um exemplo de como o contador pode aparecer:</em><br><br>" + ex99ContadorImage + "<br><br><strong>✓ Checkpoint:</strong> aumente três vezes e diminua uma: aparece <strong>2</strong>? Zerar retorna a <strong>0</strong>?"],
      ["4. Diagnóstico — encontre uma rota errada", "Com as novas telas funcionando, vamos investigar um erro de navegação.<br><br><strong>Faça:</strong> altere temporariamente <code>navigation.navigate('Conversor')</code> para <code>navigation.navigate('ConversorTeste')</code> em <code>Inicio.js</code>. Observe o aviso, compare esse nome com a rota registrada em <code>App.js</code> e corrija.<br><br><strong>✓ Checkpoint:</strong> você consegue explicar por que a rota não foi encontrada? Depois da correção, o botão funciona novamente?"],
      ["5. Organização — explique suas escolhas", "Observe os arquivos criados na pasta <code>screens/</code> e os registros em <code>App.js</code>.<br><br><strong>Explique por escrito:</strong> qual é o papel de <code>NavigationContainer</code>, <code>Stack.Navigator</code> e <code>Stack.Screen</code>? Qual é a diferença entre o nome da rota <code>ClimaAtual</code> e o título exibido <strong>Clima Atual</strong>? Quando vale criar um componente reutilizável em <code>components/</code>?<br><br><strong>✓ Checkpoint:</strong> descreva o caminho de um toque no botão da tela inicial até a abertura de outra tela."],
      ["6. Projeto pessoal — sua ideia na Central", "Escolha uma ferramenta que você gostaria de acrescentar: calculadora de desconto, conversor de temperatura ou outra ideia simples.<br><br><strong>Planeje:</strong> título da tela, dados que serão digitados, botões, resultado esperado e um teste para verificar.<br><br><strong>Construa:</strong> crie o novo arquivo em <code>screens/</code>, desenvolva a funcionalidade, importe e registre a rota em <code>App.js</code> e acrescente um botão em <code>Inicio.js</code>.<br><br><strong>✓ Checkpoint:</strong> a nova ferramenta funciona? Você manteve todas as telas anteriores? Registre os arquivos criados ou modificados."],
      ["Confira a conquista — Central de Consultas ampliada", "Terminou as telas Sobre, Conversor e Contador? Compare sua tela inicial com esta referência: agora são <strong>seis botões de serviços e ferramentas</strong>. Junto com a tela inicial, seu aplicativo tem <strong>sete telas</strong>.<br><br>" + ex99CentralAmpliadaImage + "<br><br><strong>✓ Checkpoint final:</strong> abra as seis opções, retorne ao Início e confirme que nenhuma consulta deixou de funcionar. Se realizou o exercício pessoal, seu aplicativo terá ainda mais uma opção criada por você."],
    ];
  }

  function installStyles() {
    if (document.getElementById('nav-beginner-visible-style')) return;
    const style = document.createElement('style');
    style.id = 'nav-beginner-visible-style';
    style.textContent = `
      #workspace.nav-beginner-workspace .side-bottom {
        grid-column: 1 / -1 !important;
        grid-row: 2 !important;
        display: grid !important;
        min-height: 0;
      }
      #workspace.nav-beginner-workspace .note.nav-beginner-note {
        height: 100%;
        overflow: auto;
        background: #f8fbff;
        border: 1px solid #bfdbfe;
        border-left: 5px solid var(--primary);
        padding: 12px 14px;
      }
      .nav-beginner-guide-grid {
        display: grid;
        grid-template-columns: 1.05fr 1.3fr 1.25fr;
        gap: 12px;
      }
      .nav-beginner-guide-grid section {
        background: #ffffff;
        border: 1px solid #dbe3ef;
        border-radius: 10px;
        padding: 10px 12px;
      }
      .nav-beginner-guide-title {
        display: block;
        color: #0f3f86;
        font-size: 13px;
        margin-bottom: 6px;
      }
      .nav-beginner-guide-inner p,
      .nav-beginner-guide-inner li {
        font-size: 12.5px;
        line-height: 1.4;
        color: #334155;
      }
      .nav-beginner-guide-inner ol,
      .nav-beginner-guide-inner ul {
        margin-left: 18px;
      }
      .nav-beginner-guide-inner li + li {
        margin-top: 3px;
      }
      .nav-beginner-guide-footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
        font-size: 12.5px;
        line-height: 1.4;
      }
      .nav-beginner-guide-footer > div {
        background: #eff6ff;
        border-radius: 9px;
        padding: 8px 10px;
      }
      .nav-beginner-inline-guide {
        margin: 14px 0 16px;
        padding: 14px 16px;
        border: 1px solid #bfdbfe;
        border-left: 5px solid var(--primary);
        border-radius: 12px;
        background: #f8fbff;
        line-height: 1.5;
      }
      .nav-beginner-inline-guide > strong {
        display: block;
        color: #0f3f86;
        font-size: 16px;
        margin-bottom: 5px;
      }
      .nav-beginner-inline-guide p,
      .nav-beginner-inline-guide li {
        color: #334155;
        font-size: 13px;
      }
      .nav-beginner-inline-guide ul {
        margin: 8px 0 0 18px;
      }
      .nav-beginner-inline-guide li + li {
        margin-top: 4px;
      }
      .module-page-grid:has(.nav-ex99-figure) { grid-template-columns: minmax(0,1fr) !important; }
      .module-page-grid:has(.nav-ex99-figure) > .module-page-box { max-width: 100%; }
      .nav-ex99-figure { margin: 14px auto 8px; max-width: 270px; text-align: center; }
      .nav-ex99-figure img { display: block; width: 100%; height: auto; max-height: 320px; object-fit: contain; margin: 0 auto; border: 1px solid #dbe3ef; border-radius: 12px; background: #fff; }
      .nav-ex99-images { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: center; gap: 14px; margin-top: 8px; }
      .nav-ex99-images .nav-ex99-figure { flex: 0 1 205px; margin: 8px 0; }
      .nav-ex99-figure figcaption { margin-top: 6px; font-size: 12px; line-height: 1.45; color: #526174; }
      @media (max-width: 600px) { .nav-ex99-figure { max-width: 100%; } .nav-ex99-figure img { max-height: 280px; } }
      @media (max-width: 1050px) {
        .nav-beginner-guide-grid { grid-template-columns: 1fr; }
        .nav-beginner-guide-footer { grid-template-columns: 1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function showVisibleGuide(id) {
    const workspace = document.getElementById('workspace');
    if (!workspace) return;
    workspace.classList.remove('nav-beginner-workspace');

    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'navegacao') return;
    const step = navStep(id) || navModule.steps.find(item => {
      const btn = document.getElementById(`btn-navegacao-${item.id}`);
      return btn && btn.classList.contains('active');
    });
    if (!step) return;

    const title = document.querySelector('#codeCard .panel-title span');
    if (step.fileLabel && title && typeof step.code === 'string') {
      title.textContent = step.fileLabel;
    }

    if (!step.mbbGuide || step.customPage || step.modulePage) return;

    const noteWrap = document.getElementById('noteWrap');
    const note = document.getElementById('note');
    if (!noteWrap || !note) return;

    workspace.classList.add('nav-beginner-workspace');
    noteWrap.style.setProperty('display', 'grid', 'important');
    note.classList.add('nav-beginner-note');
    note.innerHTML = step.mbbGuide;
  }

  installStyles();

  if (typeof showStep === 'function') {
    const previousShowStep = showStep;
    showStep = function navBeginnerShowStep(id) {
      const result = previousShowStep.apply(this, arguments);
      showVisibleGuide(id);
      window.requestAnimationFrame(() => showVisibleGuide(id));
      return result;
    };
  }

  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
