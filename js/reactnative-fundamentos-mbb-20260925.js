// Mundo bit Byte — reconstrução do módulo 0. Fundamentos — React Native
// Modo MbB em cada ideia: necessidade -> conceito -> aplicação -> consolidação.
(function () {
  if (typeof modules === 'undefined' || !modules.fundamentosMobile) return;

  const fundamentos = modules.fundamentosMobile;

  const ciclo = (necessidade, conceito, aplicacao, consolidacao) => `
    <div class="mbb-fund-cycle" aria-label="Ciclo MbB deste tópico">
      <div><strong>Necessidade</strong><span>${necessidade}</span></div>
      <div><strong>Conceito</strong><span>${conceito}</span></div>
      <div><strong>Aplicação</strong><span>${aplicacao}</span></div>
      <div><strong>Consolidação</strong><span>${consolidacao}</span></div>
    </div>`;

  const cards = itens => `
    <div class="mbb-fund-grid">
      ${itens.map(([titulo, texto]) => `
        <article class="mbb-fund-card">
          <strong>${titulo}</strong>
          <span>${texto}</span>
        </article>`).join('')}
    </div>`;

  const figura = (src, alt, legenda) => `
    <figure class="mbb-fund-figure">
      <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
      <figcaption>${legenda}</figcaption>
    </figure>`;

  const pagina = ({ kicker, titulo, lead, destaque = '', corpo = '', cicloMbb }) => `
    <section class="mbb-fund-page">
      <div class="mbb-fund-kicker">${kicker}</div>
      <h3>${titulo}</h3>
      <p class="mbb-fund-lead">${lead}</p>
      ${destaque ? `<div class="mbb-fund-highlight">${destaque}</div>` : ''}
      ${corpo}
      ${ciclo(...cicloMbb)}
    </section>`;

  if (!document.getElementById('mbb-fundamentos-reactnative-style')) {
    const style = document.createElement('style');
    style.id = 'mbb-fundamentos-reactnative-style';
    style.textContent = `
      .mbb-fund-page{max-width:1100px;margin:0 auto;padding:2px 2px 20px;color:#172033;line-height:1.58}
      .mbb-fund-kicker{font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#1967d2;margin-bottom:6px}
      .mbb-fund-page h3{font-size:clamp(1.45rem,2.4vw,2rem);line-height:1.2;margin:0 0 10px;color:#10213c}
      .mbb-fund-lead{font-size:1.02rem;margin:0 0 14px;color:#334155}
      .mbb-fund-highlight{background:#eef6ff;border-left:4px solid #1967d2;border-radius:10px;padding:13px 15px;margin:14px 0;font-weight:650;color:#17375e}
      .mbb-fund-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(205px,1fr));gap:12px;margin:14px 0}
      .mbb-fund-card{display:flex;flex-direction:column;gap:5px;background:#fff;border:1px solid #dbe3ef;border-radius:12px;padding:14px;box-shadow:0 3px 10px rgba(15,23,42,.05)}
      .mbb-fund-card strong{color:#123b73}.mbb-fund-card span{color:#475569;font-size:.94rem}
      .mbb-fund-flow{display:flex;align-items:stretch;justify-content:center;gap:8px;flex-wrap:wrap;margin:18px 0}
      .mbb-fund-flow .box{min-width:150px;flex:1 1 180px;max-width:240px;border:1px solid #bfdbfe;border-radius:12px;padding:13px;background:#f8fbff;text-align:center}
      .mbb-fund-flow .box strong{display:block;color:#0f3f86;margin-bottom:4px}.mbb-fund-flow .arrow{display:flex;align-items:center;font-weight:900;color:#64748b;font-size:1.2rem}
      .mbb-fund-figure{margin:16px auto;background:#fff;border:1px solid #dbe3ef;border-radius:12px;padding:10px;max-width:980px}
      .mbb-fund-figure img{display:block;width:100%;height:auto;border-radius:8px}.mbb-fund-figure figcaption{font-size:.82rem;color:#64748b;margin-top:8px;text-align:center}
      .mbb-fund-twofig{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;align-items:start}
      .mbb-fund-twofig .mbb-fund-figure{margin:0;max-width:none}
      .mbb-fund-action{border:1px solid #cfe7d4;background:#f2fbf4;border-radius:12px;padding:14px 16px;margin:14px 0}
      .mbb-fund-action strong{display:block;color:#176b34;margin-bottom:6px}.mbb-fund-action ol,.mbb-fund-action ul{margin:7px 0 0 20px;padding:0}
      .mbb-fund-code{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:16px;overflow:auto;font:14px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;margin:14px 0;white-space:pre}
      .mbb-fund-cycle{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:20px;border-top:1px solid #dbe3ef;padding-top:14px}
      .mbb-fund-cycle>div{background:#f8fafc;border-radius:10px;padding:10px}.mbb-fund-cycle strong{display:block;font-size:.76rem;text-transform:uppercase;letter-spacing:.04em;color:#1967d2;margin-bottom:4px}.mbb-fund-cycle span{font-size:.86rem;color:#475569}
      .mbb-fund-check{list-style:none;padding:0;margin:14px 0;display:grid;gap:8px}.mbb-fund-check li{background:#fff;border:1px solid #dbe3ef;border-radius:10px;padding:10px 12px}.mbb-fund-check li::before{content:'□';font-weight:800;margin-right:8px;color:#1967d2}
      .mbb-fund-small{font-size:.9rem;color:#64748b}
      @media(max-width:760px){.mbb-fund-cycle{grid-template-columns:1fr 1fr}.mbb-fund-flow .arrow{display:none}}
      @media(max-width:480px){.mbb-fund-cycle{grid-template-columns:1fr}.mbb-fund-page{padding-bottom:12px}}
    `;
    document.head.appendChild(style);
  }

  fundamentos.title = '0. Fundamentos';
  fundamentos.subtitle = 'React Native, Expo/Snack e o primeiro contato com código mobile.';

  fundamentos.steps = [
    {
      id: 'fund-intro-mbb',
      menu: 'Intro',
      title: 'Antes do primeiro código',
      objective: 'Entender o caminho que será percorrido antes de começar a programar em React Native.',
      html: pagina({
        kicker: 'Antes de programar',
        titulo: 'Vamos construir aplicativos — mas primeiro precisamos entender o caminho',
        lead: 'O objetivo deste módulo não é transformar você em especialista antes do primeiro código. É deixar claro o que estamos estudando, qual ferramenta vamos usar e onde mexer sem ficar perdido.',
        destaque: 'Ao terminar Fundamentos, você deverá conseguir abrir o Snack, reconhecer suas áreas, localizar o App.js, salvar um projeto e fazer uma primeira alteração observando o resultado.',
        corpo: cards([
          ['Aplicativo', 'Tem interface, comportamento, dados e uma finalidade. Aqui nosso foco será o desenvolvimento mobile.'],
          ['React Native', 'É a tecnologia que estudaremos para construir a interface e o comportamento de aplicativos móveis usando React.'],
          ['Snack', 'Será nosso primeiro laboratório: um ambiente online para escrever, testar e visualizar React Native no navegador.'],
          ['Próximo passo', 'Depois de conhecer o ambiente, estudaremos somente o JavaScript necessário para compreender e evoluir os aplicativos.']
        ]),
        cicloMbb: [
          'Não começar por comandos sem saber onde estamos.',
          'Construir um mapa simples do percurso.',
          'Conhecer o laboratório antes de usá-lo.',
          'Chegar ao primeiro código com segurança.'
        ]
      })
    },
    {
      id: 'fund-reactnative-mbb',
      menu: '1. React Native',
      title: '1 — Onde o React Native entra?',
      objective: 'Distinguir JavaScript, React e React Native e entender por que uma solução cross-platform é útil.',
      html: pagina({
        kicker: 'Um mapa antes dos nomes',
        titulo: 'JavaScript, React e React Native trabalham juntos — mas não são a mesma coisa',
        lead: 'Um aplicativo pode ser desenvolvido diretamente com tecnologias específicas de Android ou iOS. Também podemos usar uma abordagem cross-platform, compartilhando grande parte do código entre plataformas. É nesse segundo caminho que entra o React Native.',
        destaque: 'React Native não é uma linguagem. Nos exemplos deste curso, JavaScript expressa dados e lógica; React organiza componentes e atualizações; React Native fornece componentes e APIs para a aplicação mobile.',
        corpo: `
          <div class="mbb-fund-flow">
            <div class="box"><strong>JavaScript</strong>dados, expressões, funções e regras</div>
            <div class="arrow">→</div>
            <div class="box"><strong>React</strong>componentes, props, estado e atualização</div>
            <div class="arrow">→</div>
            <div class="box"><strong>React Native</strong>interface e recursos para aplicativos mobile</div>
          </div>
          ${cards([
            ['Aplicação web', 'É executada no navegador e usa tecnologias próprias da Web.'],
            ['Aplicativo mobile', 'É desenvolvido para o ambiente móvel e pode integrar recursos do dispositivo.'],
            ['Nativo', 'Usa diretamente as tecnologias específicas de uma plataforma.'],
            ['Cross-platform', 'Permite compartilhar grande parte da base de desenvolvimento entre plataformas, como Android e iOS.']
          ])}
          <p class="mbb-fund-small">Não precisamos aprofundar Android, iOS ou estratégias nativas agora. Basta saber onde o React Native se encaixa. Os detalhes aparecerão quando forem necessários.</p>`,
        cicloMbb: [
          'Evitar tratar nomes diferentes como se fossem a mesma tecnologia.',
          'Relacionar JavaScript → React → React Native.',
          'Reconhecer o papel de cada camada ao ler um exemplo.',
          'Saber explicar, em uma frase, o que o React Native faz.'
        ]
      })
    },
    {
      id: 'fund-expo-snack-mbb',
      menu: '2. Expo e Snack',
      title: '2 — Expo e Snack: nosso primeiro laboratório',
      objective: 'Entender o papel do Expo e por que o Snack é adequado para o primeiro contato.',
      html: pagina({
        kicker: 'Começar sem carregar ferramentas demais',
        titulo: 'Primeiro precisamos programar; a infraestrutura mais pesada pode esperar',
        lead: 'Expo é um ecossistema de ferramentas e serviços para desenvolvimento com React Native. O Snack é uma dessas ferramentas: ele permite experimentar React Native diretamente pelo navegador.',
        destaque: 'Começaremos no Snack porque ele reduz a configuração inicial. Assim, a atenção fica no código, no resultado e nos conceitos. Quando o projeto exigir um ambiente local mais completo, haverá uma razão concreta para mudar.',
        corpo: cards([
          ['Expo', 'Ecossistema que oferece ferramentas e serviços para apoiar o desenvolvimento React Native.'],
          ['Snack', 'Ferramenta online do Expo usada aqui como laboratório no navegador.'],
          ['Agora', 'Não precisamos instalar VS Code, Android Studio ou configurar um projeto local para os primeiros experimentos.'],
          ['Depois', 'Ferramentas locais entram quando algum recurso do percurso realmente precisar delas.']
        ]),
        cicloMbb: [
          'Evitar que a configuração esconda o primeiro aprendizado.',
          'Entender Expo e Snack sem confundi-los.',
          'Usar o navegador como laboratório inicial.',
          'Adicionar ferramentas somente quando houver necessidade.'
        ]
      })
    },
    {
      id: 'fund-ambiente-snack-mbb',
      menu: '3. Ambiente',
      title: '3 — Conhecendo o ambiente do Snack',
      objective: 'Reconhecer as três regiões principais do ambiente antes de alterar qualquer código.',
      html: pagina({
        kicker: 'Observe antes de modificar',
        titulo: 'Arquivos à esquerda, código no centro, resultado à direita',
        lead: 'Acesse snack.expo.dev e observe a interface antes de programar. A aparência pode receber pequenos ajustes com o tempo, mas a ideia central continua sendo trabalhar com a estrutura do projeto, o editor e a execução.',
        destaque: 'Não tente compreender todos os arquivos agora. O objetivo desta etapa é saber onde procurar cada coisa.',
        corpo: `
          ${figura('../img/reactnative/tela_do_snack_expo_8803449d.webp', 'Tela do Snack com estrutura do projeto, editor de código e área de visualização', 'Ambiente do Snack usado como referência: estrutura do projeto, editor e preview.')}
          ${cards([
            ['1. Estrutura do projeto', 'À esquerda ficam arquivos e pastas do projeto, como App.js, assets e outros arquivos que aparecerem no exemplo.'],
            ['2. Editor', 'Na região central abrimos um arquivo e modificamos seu código.'],
            ['3. Preview', 'À direita observamos a execução. Alterações válidas no código podem aparecer nessa área automaticamente.']
          ])}
          <div class="mbb-fund-action"><strong>Experimente sem alterar nada</strong>Abra o Snack e apenas localize as três regiões. Aponte mentalmente: “arquivos”, “código”, “resultado”. Só depois continue.</div>`,
        cicloMbb: [
          'Evitar mexer em um ambiente que ainda parece desconhecido.',
          'Identificar as três regiões essenciais.',
          'Localizar cada região na tela real.',
          'Saber onde procurar arquivo, código e resultado.'
        ]
      })
    },
    {
      id: 'fund-conta-projetos-mbb',
      menu: '4. Conta e projetos',
      title: '4 — Conta, login e projetos salvos',
      objective: 'Distinguir experimentar sem login, entrar na conta e salvar um projeto.',
      html: pagina({
        kicker: 'Três coisas diferentes',
        titulo: 'Abrir o Snack, entrar na conta e salvar não são a mesma ação',
        lead: 'É possível experimentar o ambiente sem estar logado. Para manter um projeto associado à sua conta e retomá-lo depois, entre na sua conta Expo. Mesmo depois do login, o projeto ainda precisa ser salvo.',
        destaque: '<strong>Guarde isto:</strong> login identifica você; salvar registra o projeto na sua conta.',
        corpo: `
          <div class="mbb-fund-twofig">
            ${figura('../img/reactnative/fundamentos/snack-menu-avatar.webp', 'Menu do avatar do Snack com acesso a My Snacks', 'Depois do login, o menu do avatar dá acesso a My Snacks.')}
            ${figura('../img/reactnative/fundamentos/snack-my-snacks-vazio.webp', 'Área My Snacks sem projetos salvos', 'Em uma conta ainda vazia, a área de projetos pode oferecer a criação do primeiro Snack.')}
          </div>
          ${cards([
            ['Sem login', 'Serve para experimentar o ambiente e observar a execução.'],
            ['Com login', 'A conta fica identificada e você passa a poder trabalhar com projetos associados a ela.'],
            ['My Snacks', 'É a área onde você encontra os projetos salvos na conta.'],
            ['Ainda não é Save', 'Estar logado não significa que o projeto atual já foi salvo.']
          ])}`,
        cicloMbb: [
          'Evitar perder trabalho por confundir login com salvamento.',
          'Separar conta, projeto e ação de salvar.',
          'Entrar na conta e localizar My Snacks.',
          'Conseguir explicar por que “logado” não significa “salvo”.'
        ]
      })
    },
    {
      id: 'fund-salvar-mbb',
      menu: '5. Salvar',
      title: '5 — Salve seu primeiro projeto',
      objective: 'Salvar um projeto com um nome simples e confirmar que ele aparece na conta.',
      html: pagina({
        kicker: 'Agora o trabalho precisa permanecer',
        titulo: 'Dê identidade ao projeto e confirme que ele foi salvo',
        lead: 'Um Snack novo pode aparecer com nome temporário ou como ainda não salvo. Antes de começar uma sequência maior de alterações, salve o projeto para poder retomá-lo depois.',
        destaque: 'Use um nome simples e reconhecível. O ponto importante aqui não é o nome escolhido; é compreender o ciclo: projeto aberto → Save → nome definido → projeto disponível em My Snacks.',
        corpo: `
          ${figura('../img/reactnative/fundamentos/snack-save-modal.webp', 'Janela de salvamento de um projeto no Snack', 'Janela de salvamento: o Snack solicita informações do projeto antes de registrá-lo na conta.')}
          <div class="mbb-fund-action"><strong>Faça agora</strong>
            <ol>
              <li>confirme que sua conta está identificada;</li>
              <li>clique em <b>Save</b>;</li>
              <li>defina um nome simples para o projeto;</li>
              <li>salve;</li>
              <li>abra <b>My Snacks</b> e confirme que o projeto aparece.</li>
            </ol>
          </div>`,
        cicloMbb: [
          'Precisamos conseguir retomar o que será construído.',
          'Salvar associa um projeto identificável à conta.',
          'Executar Save e conferir em My Snacks.',
          'Saber localizar novamente o projeto salvo.'
        ]
      })
    },
    {
      id: 'fund-appjs-mbb',
      menu: '6. App.js',
      title: '6 — Primeiro contato com App.js',
      objective: 'Localizar o arquivo principal do exemplo, alterar um texto e observar a relação entre código e resultado.',
      html: pagina({
        kicker: 'Primeira alteração com propósito',
        titulo: 'Mude uma coisa pequena e veja o aplicativo responder',
        lead: 'Na estrutura do projeto, localize <b>App.js</b> e abra o arquivo. Não tente compreender todas as linhas. Primeiro vamos provar uma relação simples: um trecho do código produz algo que aparece no preview.',
        destaque: 'Procure no App.js algum texto que esteja visível no preview. Altere somente esse texto para <b>Meu primeiro aplicativo</b> e observe a execução. Não apague componentes nem reorganize o restante do código nesta etapa.',
        corpo: `
          <div class="mbb-fund-action"><strong>Experimento MbB</strong>
            <ol>
              <li>abra <b>App.js</b>;</li>
              <li>encontre um texto que também aparece no preview;</li>
              <li>troque apenas o conteúdo textual;</li>
              <li>observe a mudança à direita;</li>
              <li>se quiser, escreva outro texto e observe novamente.</li>
            </ol>
          </div>
          ${cards([
            ['O arquivo', 'App.js é o ponto em que começaremos a ler e alterar o exemplo inicial.'],
            ['O código', 'Ainda não precisamos entender cada import, função ou estilo.'],
            ['O resultado', 'O preview serve como evidência de que sua alteração foi executada.'],
            ['O aprendizado', 'Você já estabeleceu a relação código → execução → interface.']
          ])}`,
        cicloMbb: [
          'Antes de estudar sintaxe, precisamos ver que o código produz uma consequência.',
          'App.js contém a estrutura executada no exemplo.',
          'Alterar somente um texto e observar o preview.',
          'Comprovar a relação entre fonte e interface.'
        ]
      })
    },
    {
      id: 'fund-jsx-mbb',
      menu: '7. O que apareceu?',
      title: '7 — O que você acabou de mexer?',
      objective: 'Reconhecer JavaScript, JSX, View, Text e expressões entre chaves sem aprofundar conteúdo prematuramente.',
      html: pagina({
        kicker: 'Dar nome ao que já apareceu',
        titulo: 'Agora os nomes técnicos têm uma razão para existir',
        lead: 'Você já abriu App.js e alterou algo que apareceu no preview. Só agora vale dar nome às peças básicas que encontrará nos próximos exemplos.',
        destaque: 'JSX não é HTML. Ele é uma sintaxe usada com JavaScript para descrever a interface. Em React Native usamos componentes como <b>View</b> e <b>Text</b>, e podemos inserir expressões JavaScript entre <b>{ }</b>.',
        corpo: `
          <pre class="mbb-fund-code">import { View, Text } from 'react-native';

export default function App() {
  const mensagem = 'Olá, React Native!';

  return (
    &lt;View&gt;
      &lt;Text&gt;{mensagem}&lt;/Text&gt;
    &lt;/View&gt;
  );
}</pre>
          ${cards([
            ['JavaScript', '<code>const mensagem = ...</code> cria um dado que o programa pode usar.'],
            ['JSX', 'A estrutura entre <code>&lt;View&gt;</code> e <code>&lt;Text&gt;</code> descreve o que será mostrado.'],
            ['View', 'É um componente usado como container para organizar partes da interface.'],
            ['Text', 'É o componente usado para exibir texto.'],
            ['{ }', 'Dentro do JSX, as chaves permitem inserir uma expressão JavaScript, como <code>{mensagem}</code>.'],
            ['Por enquanto', 'Reconhecer é suficiente. JavaScript será praticado a seguir; React e JSX serão aprofundados quando houver necessidade.']
          ])}`,
        cicloMbb: [
          'Os nomes aparecem depois que já vimos código e resultado.',
          'Reconhecer JavaScript, JSX e componentes.',
          'Ler o exemplo separando dado e interface.',
          'Chegar ao JS Essencial sabendo o que precisa aprender.'
        ]
      })
    },
    {
      id: 'fund-fechamento-mbb',
      menu: '8. Confira',
      title: '8 — Confira antes de seguir',
      objective: 'Consolidar somente o que é necessário para avançar ao JavaScript Essencial.',
      html: pagina({
        kicker: 'Fechamento',
        titulo: 'Se isto está claro, Fundamentos cumpriu sua função',
        lead: 'Não é necessário dominar React Native ainda. O objetivo era construir orientação suficiente para que os próximos conceitos tenham onde se encaixar.',
        destaque: 'O próximo módulo é <b>JS Essencial</b>. Ele não será um curso separado de JavaScript: cada recurso entrará porque resolve uma necessidade que reaparecerá em React Native.',
        corpo: `
          <ul class="mbb-fund-check">
            <li>Consigo explicar que JavaScript, React e React Native são relacionados, mas não são a mesma coisa.</li>
            <li>Sei diferenciar Expo de Snack.</li>
            <li>Reconheço estrutura do projeto, editor e preview no Snack.</li>
            <li>Entendi que login e salvamento são ações diferentes.</li>
            <li>Consigo localizar um projeto salvo em My Snacks.</li>
            <li>Consigo abrir App.js e fazer uma alteração simples observando o resultado.</li>
            <li>Reconheço, sem precisar dominar ainda, JavaScript, JSX, View, Text e { }.</li>
          </ul>`,
        cicloMbb: [
          'Verificar se existe base real para avançar.',
          'Consolidar apenas o essencial desta etapa.',
          'Usar o checklist como teste de autonomia.',
          'Prosseguir sem carregar teoria prematura.'
        ]
      })
    }
  ];

  // Se Fundamentos já estiver selecionado quando este arquivo carregar,
  // força apenas a re-renderização desse módulo com a nova estrutura.
  setTimeout(() => {
    const botao = document.getElementById('module-fundamentosMobile');
    if (botao && botao.classList.contains('active')) botao.click();
  }, 0);
})();
