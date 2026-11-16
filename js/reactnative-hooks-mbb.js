// Reforma completa do React Native MbB — especificação pedagógica consolidada.
// Complementa a base atual sem apagar laboratórios existentes.
// Fluxo: Contextualizar -> Necessidade -> Conceito -> Exemplo -> Aplicação -> Consolidação.

if (typeof modules !== 'undefined') {
  const mkPage = (id, menu, title, objective, kicker, lead, highlight, boxes, html = '') => ({
    id, menu, title, objective, modulePage: true, kicker, lead, highlight, boxes, html
  });

  const phonePreview = (title, body, footer = '') => `
    <div style="height:100%;display:flex;align-items:center;justify-content:center;background:#eef4fb;padding:16px;box-sizing:border-box;">
      <div style="width:88%;max-width:290px;background:#fff;border:1px solid #cbd5e1;border-radius:18px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,.12);font-family:Arial,sans-serif;">
        <div style="font-size:21px;font-weight:800;color:#0f172a;margin-bottom:14px;text-align:center;">${title}</div>
        ${body}
        ${footer ? `<div style="font-size:12px;color:#64748b;margin-top:14px;text-align:center;">${footer}</div>` : ''}
      </div>
    </div>`;

  if (modules.fundamentosMobile) {
    modules.fundamentosMobile.title = '0. Fundamentos';
    modules.fundamentosMobile.subtitle = 'Mobile, React Native atual, Expo/Snack e primeira visão de JSX.';

    if (!modules.fundamentosMobile.steps.some(s => s.id === 'mobile-jsx-visao')) {
      modules.fundamentosMobile.steps.push(
        mkPage(
          'mobile-jsx-visao',
          '6. Primeira visão JSX',
          '6 — Primeira visão de JSX',
          'Reconhecer a estrutura básica do código React Native antes de aprofundar React.',
          'Antes de decorar comandos',
          'Ao abrir um App.js, você encontra JavaScript misturado com uma escrita parecida com HTML. Essa escrita é JSX. Neste momento, basta aprender a reconhecer o que está vendo.',
          'JSX não é HTML. Ele é uma sintaxe usada com JavaScript para descrever a interface. Mais adiante, em React e Hooks, veremos JSX com mais profundidade.',
          [
            ['JavaScript', 'Declara dados, funções, decisões e outras regras do programa.'],
            ['JSX', 'Descreve os componentes que devem aparecer na interface.'],
            ['{ } no JSX', 'Permite inserir uma expressão JavaScript dentro da estrutura visual.'],
            ['Exemplo', '<Text>{nome}</Text>: Text faz parte do JSX; nome é lido como JavaScript.'],
            ['React Native', 'Usa componentes como View, Text, Image e TextInput em vez de tags HTML.'],
            ['Por enquanto', 'Reconheça as duas camadas. A explicação completa virá no módulo React e Hooks.']
          ]
        )
      );
    }
  }

  if (modules.interfaceBasica && modules.flexboxVisual) {
    const interfaceSteps = modules.interfaceBasica.steps;
    const interfaceExercise = interfaceSteps.find(s => s.id === 'exercicios-interface');
    const interfaceCore = interfaceSteps.filter(s => s.id !== 'exercicios-interface');

    const flexSteps = modules.flexboxVisual.steps.map(step => ({ ...step }));

    const flexSeparator = mkPage(
      'interfaces-flexbox-ponte',
      'Flexbox — Introdução',
      'Flexbox dentro de Interfaces',
      'Entender como Flexbox organiza componentes na construção visual.',
      'A interface precisa se organizar',
      'Depois de aprender os componentes, surge um problema real: como colocar caixas em linha, coluna, centro, ocupar espaço e adaptar a tela?',
      'Flexbox é o sistema usado para organizar os componentes dentro da interface.',
      [
        ['View', 'Cria containers e grupos visuais.'],
        ['Flexbox', 'Organiza como esses containers e seus filhos ocupam o espaço.'],
        ['Linha', "flexDirection: 'row' organiza os filhos horizontalmente."],
        ['Coluna', 'A direção padrão organiza os filhos verticalmente.'],
        ['Espaço', 'flex, gap, justifyContent e alignItems ajudam a distribuir e alinhar.'],
        ['Prática', 'Os laboratórios seguintes mostram esses recursos resolvendo problemas visuais reais.']
      ]
    );

    modules.interfaceBasica.steps = [
      ...interfaceCore,
      flexSeparator,
      ...flexSteps,
      ...(interfaceExercise ? [interfaceExercise] : [])
    ];
    modules.interfaceBasica.title = '1. Interfaces';
    modules.interfaceBasica.subtitle = 'Componentes, StyleSheet, Agenda de Contatos e Flexbox.';
    delete modules.flexboxVisual;
  }

  if (modules.state) {
    modules.state.title = '2. React e Hooks';
    modules.state.subtitle = 'JSX, componentes, props, state, eventos, listas, interação, useRef e useEffect.';

    const original = modules.state.steps.filter(
      s => !String(s.id).startsWith('mbb-') &&
           !['state-13-useeffect-intro','state-14-bitcoin-base','state-15-primeiro-effect','state-16-intervalo','state-17-hooks-resumo'].includes(s.id)
    );

    const intro = original.find(s => s.id === 'state-intro');
    if (intro) {
      intro.title = 'React e Hooks — Da Interface ao Comportamento';
      intro.objective = 'Entender como React organiza componentes, dados, eventos e efeitos antes de estudar cada recurso.';
      intro.kicker = 'Módulo 2 — React e Hooks';
      intro.lead = 'Até aqui construímos interfaces e aprendemos JavaScript essencial. Agora vamos juntar essas duas bases: React organiza a interface em componentes e acompanha dados que mudam durante o uso do aplicativo.';
      intro.highlight = 'JSX, componentes, props, state, eventos, listas, referências e efeitos trabalham juntos para dar comportamento à interface.';
      intro.boxes = [
        ['JSX', 'Descreve a interface usando uma sintaxe integrada ao JavaScript.'],
        ['Componentes', 'Dividem a tela em peças menores e reutilizáveis.'],
        ['Props', 'Levam informações de um componente para outro.'],
        ['State', 'Guarda informações que podem mudar enquanto o app está sendo usado.'],
        ['Eventos', 'Respondem a ações como toque, digitação e envio de formulário.'],
        ['Hooks', 'Recursos do React que permitem trabalhar com estado, referências e sincronização.']
      ];
      intro.html = `<div class="react-hooks-lesson">
        <section>
          <h4>Da tela pronta à tela que reage</h4>
          <p>Na Agenda de Contatos você montou campos e botões. Pense agora em uma versão que atualiza o nome mostrado na tela quando a pessoa digita. O campo dispara um evento ao receber texto. O aplicativo guarda o novo valor em state, e o React usa esse valor para atualizar o que a tela mostra.</p>
          <p>Esse ciclo aparece de novo na Média Escolar. Primeiro você monta os campos, depois guarda as notas, liga Calcular a uma função e mostra o resultado. Cada etapa acrescenta uma parte que você consegue testar.</p>
        </section>
        <section>
          <h4>Como acompanhar os exemplos</h4>
          <p>Abra o Snack nos passos com <code>App.js</code>. Antes de executar, anote o que espera ver. Depois altere um valor por vez. Na próxima etapa, troque um nome no JavaScript e localize o texto que muda na tela. Nos passos de explicação, use os casos para prever o comportamento do código.</p>
          <p>Comece pela <a href="#rn-state-mbb-react-jsx">etapa 1 — JSX</a>. Ao final, você vai reunir as decisões no projeto de estudos da <a href="#rn-state-exercicios-state">etapa 99</a>.</p>
        </section>
      </div>`;
    }

    const reactBasics = [
      mkPage(
        'mbb-react-jsx',
        '1. JSX',
        '1 — JSX: onde termina JavaScript e começa a interface?',
        'Entender a sintaxe usada para descrever a interface.',
        'Agora vamos aprofundar',
        'Em Fundamentos vimos apenas a primeira visão. Agora precisamos ler JSX com segurança para entender os próximos exemplos.',
        'JSX descreve a estrutura visual. Fora do return escrevemos JavaScript comum; dentro do JSX usamos componentes e podemos inserir expressões JavaScript entre chaves.',
        [
          ['JSX', '<View><Text>Olá</Text></View> descreve componentes da tela.'],
          ['JavaScript', 'const nome = "Ana"; cria um dado fora da estrutura visual.'],
          ['Chaves', '<Text>{nome}</Text> pede ao JSX para avaliar a expressão JavaScript nome.'],
          ['Não é HTML', 'View e Text são componentes React Native, não div e p.'],
          ['Expressão', 'Dentro de { } usamos valores e expressões; não colocamos qualquer bloco de comandos.'],
          ['Leitura mental', 'JavaScript prepara dados e regras; JSX descreve como esses dados aparecem.']
        ]
      ),
      {
        id: 'mbb-react-componente-titulo',
        menu: '2. Componentes',
        title: '2 — Criando um componente personalizado',
        objective: 'Perceber que uma tela pode ser montada com peças próprias.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Titulo() {
  return <Text style={styles.titulo}>Clima das Cidades</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
});`,
        addedTitle: 'Trecho em foco',
        added: `function Titulo() {
  return <Text>Clima das Cidades</Text>;
}

<Titulo />

Um componente é uma função que retorna JSX.
Depois podemos usar essa função como uma peça da interface.`,
        preview: phonePreview('Clima das Cidades', '<div style="font-size:14px;color:#475569;text-align:center;">Primeiro componente personalizado</div>'),
        note: 'Componentes ajudam a dividir a tela e evitam repetir estruturas grandes.'
      },
      {
        id: 'mbb-react-cartao-fixo',
        menu: '3. Cartão fixo',
        title: '3 — Um componente útil: CartaoClima',
        objective: 'Evoluir de um componente simples para uma peça visual reutilizável.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima() {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>São Paulo</Text>
      <Text style={styles.temperatura}>26 °C</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoClima />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  cartao: { padding: 18, borderWidth: 1, borderRadius: 12 },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  temperatura: { fontSize: 26, marginTop: 8 },
});`,
        addedTitle: 'Necessidade',
        added: `O cartão funciona, mas os valores estão presos dentro dele.

Problema:
se quisermos mostrar Campinas ou Santos,
teremos de copiar o componente?

Não. No próximo passo entram as props.`,
        preview: phonePreview('Clima', '<div style="border:1px solid #cbd5e1;border-radius:12px;padding:16px;"><b>São Paulo</b><div style="font-size:26px;margin-top:8px;">26 °C</div></div>'),
        note: 'Primeiro surge a necessidade; só depois apresentamos o nome técnico props.'
      },
      {
        id: 'mbb-react-props',
        menu: '4. Props',
        title: '4 — Passando dados com props',
        objective: 'Reutilizar um cartão com dados diferentes e passar uma função de pai para filho por props.',
        code: `import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura, aoConsultar }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.temperatura}>{temperatura} °C</Text>
      <Button title="Consultar" onPress={aoConsultar} />
    </View>
  );
}

export default function App() {
  function consultarSaoPaulo() {
    console.log('Consulta solicitada: São Paulo');
  }

  function consultarCampinas() {
    console.log('Consulta solicitada: Campinas');
  }

  return (
    <View style={styles.container}>
      <CartaoClima cidade="São Paulo" temperatura={26} aoConsultar={consultarSaoPaulo} />
      <CartaoClima cidade="Campinas" temperatura={28} aoConsultar={consultarCampinas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  cartao: { padding: 18, borderWidth: 1, borderRadius: 12 },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  temperatura: { fontSize: 26, marginTop: 8 },
});`,
        addedTitle: 'Dados e callback passam pelo mesmo caminho',
        added: `// App passa dados e uma função ao CartaoClima.
<CartaoClima cidade="Campinas" temperatura={28} aoConsultar={consultarCampinas} />

// Dentro do cartão, onPress recebe a função que será chamada no toque.
<Button title="Consultar" onPress={aoConsultar} />`,
        preview: phonePreview('Clima', '<div style="display:grid;gap:8px;"><div style="border:1px solid #cbd5e1;padding:8px;border-radius:10px;"><b>São Paulo</b><div>26 °C</div><div style="color:#174b86;">CONSULTAR</div></div><div style="border:1px solid #cbd5e1;padding:8px;border-radius:10px;"><b>Campinas</b><div>28 °C</div><div style="color:#174b86;">CONSULTAR</div></div></div>'),
        note: 'O botão registra a cidade no console do Snack. Na etapa 5, a função recebida pelo cartão também vai atualizar o state do pai.'
      },
      mkPage(
        'mbb-react-props-state',
        '5. Props × state',
        '5 — Props × state',
        'Distinguir dados recebidos de dados que pertencem ao componente e mudam.',
        'Duas origens diferentes',
        'Props e state aparecem juntos em muitos aplicativos, mas não resolvem o mesmo problema.',
        'Props vêm de fora do componente. State pertence ao componente e pode mudar durante o uso.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>A temperatura chega ao cartão</h4>
            <p>Na <a href="#rn-state-mbb-react-props">etapa 4</a>, cada uso de <code>CartaoClima</code> recebe uma cidade e uma temperatura. Se quem monta o cartão trocar somente a temperatura de Campinas, é esse cartão que passa a exibir o novo valor.</p>
            <pre><code>&lt;CartaoClima cidade="Campinas" temperatura={28} /&gt;
&lt;CartaoClima cidade="Santos" temperatura={24} /&gt;</code></pre>
          </section>
          <section>
            <h4>A nota muda durante o uso</h4>
            <p>Na Média Escolar, a Nota 1 começa vazia e muda a cada digitação. O próprio formulário guarda esse valor com <code>useState</code>. Se ele passar a nota a um cartão de resultado, o mesmo dado será state no formulário e prop no cartão.</p>
            <pre><code>const [nota1, setNota1] = useState('');
&lt;TextInput value={nota1} onChangeText={setNota1} /&gt;</code></pre>
          </section>
          <p>Na prática abaixo, cartão e resumo precisam exibir a mesma temperatura. O pai guarda o dado e passa o valor aos dois, além da função <code>aumentar</code> ao cartão. No toque, o cartão chama a função. O pai pede a atualização com <code>setTemperatura</code> e o React renderiza novamente os componentes com o valor novo. Mover o state compartilhado para o pai comum é chamado de <strong>elevação de estado</strong>.</p>
          <details>
            <summary>Confira quem guarda cada valor</summary>
            <p>Se o formulário passar <code>nota1</code> para um cartão, o formulário atualiza a nota com <code>setNota1</code> e o cartão exibe o valor que recebeu. Na <a href="#rn-state-state-7-state">etapa 12</a>, você poderá ver a nota mudar enquanto digita.</p>
          </details>
        </div>`
      )
    ];

    const mediaCore = original.filter(s => {
      if (!s.id || !String(s.id).startsWith('state-')) return false;
      if (['state-intro','state-11-useref','state-12-final'].includes(s.id)) return false;
      const m = String(s.id).match(/^state-(\d+)/);
      return m && Number(m[1]) <= 10;
    });

    const mediaIntro = mediaCore.find(s => s.id === 'state-1-app');
    if (mediaIntro) {
      mediaIntro.html = `<div class="react-hooks-lesson">
        <section>
          <h4>Planeje o que deve aparecer</h4>
          <p>Na abertura, os dois campos ficam vazios. Preencher as notas prepara os dados. Ao tocar em Calcular, a função usa as duas notas e mostra média e situação. Mais adiante, você vai validar valores de 0 a 10 e tratar uma nota que ficou em branco.</p>
          <p>Calcule à mão com 7 e 5. A soma é 12, a média é 6 e a situação é Aprovado, pois 6 já atende à regra. Com 5 e 6, a média é 5,5 e a situação é Reprovado.</p>
        </section>
        <section>
          <h4>Guarde os casos para testar a versão final</h4>
          <p>Registre o que espera ao abrir o app, calcular com as duas notas preenchidas, deixar uma nota vazia e tocar em Limpar. Você começa montando a tela nas próximas etapas e volta a essas previsões à medida que acrescenta ações.</p>
          <p>Na <a href="#rn-state-state-12-final">etapa 29</a>, compare as previsões com o resultado e teste também 0 e 0. A média zero é um resultado válido.</p>
        </section>
      </div>`;
    }

    const useStateStep = mediaCore.find(s => s.id === 'state-7-state');
    if (useStateStep && !String(useStateStep.added || '').includes('valor atual')) {
      useStateStep.added = `${useStateStep.added || ''}

Como ler:
const [nota1, setNota1] = useState('');

nota1 -> valor atual.
setNota1 -> função usada para alterar esse valor.
'' -> valor inicial.

Quando setNota1 recebe um novo valor, React registra a mudança e renderiza novamente o que depende desse state.

TextInput:
value={nota1} mostra o valor atual.
onChangeText={setNota1} atualiza o state conforme o usuário digita.`;
    }

    const postState = [
      {
        id: 'mbb-react-condicional',
        menu: '16. Interface condicional',
        title: 'Mostrando o resultado somente quando ele existe',
        objective: 'Aplicar && e operador ternário na própria Média Escolar.',
        code: codigoMediaEscolar('condicional'),
        addedTitle: 'Duas decisões na interface',
        added: "media !== '' decide se a área de resultado aparece. O ternário escolhe o estilo a partir de situacao.",
        preview: previaMediaEscolar({ nota: '6', resultado: true, destacarSituacao: true }),
        note: 'Antes do cálculo e depois de Limpar, a área de resultado fica oculta.'
      },
      {
        id: 'mbb-react-map',
        menu: '17. Array → tela',
        title: 'Array e map(): transformando dados em componentes',
        objective: 'Aplicar no React o map() já estudado em JavaScript.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text>{temperatura} °C</Text>
    </View>
  );
}

export default function App() {
  const cidades = [
    { id: 1, cidade: 'São Paulo', temperatura: 26 },
    { id: 2, cidade: 'Campinas', temperatura: 28 },
    { id: 3, cidade: 'Santos', temperatura: 24 },
  ];

  return (
    <View style={styles.container}>
      {cidades.map(item => (
        <CartaoClima
          key={item.id}
          cidade={item.cidade}
          temperatura={item.temperatura}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 10 },
  cartao: { padding: 14, borderWidth: 1, borderRadius: 10 },
  cidade: { fontWeight: 'bold' },
});`,
        addedTitle: 'Do array para a interface',
        added: `No JS Essencial:
array + objeto + map() já foram estudados.

Agora aplicamos isso à interface:
cada objeto do array vira um CartaoClima.

O map() percorre os dados e gera componentes para a tela.`,
        preview: phonePreview('Cidades', '<div style="display:grid;gap:8px;"><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;"><b>São Paulo</b> — 26 °C</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;"><b>Campinas</b> — 28 °C</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;"><b>Santos</b> — 24 °C</div></div>'),
        note: 'O mesmo map() estudado em JavaScript agora transforma dados em elementos visuais.'
      },
      {
        id: 'mbb-react-key',
        menu: '18. Identificar itens (key)',
        title: 'Identificando cada item da lista com key',
        objective: 'Verificar se o estado de um cartão acompanha a cidade quando a lista muda de ordem.',
        code: `import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

const cidadesIniciais = [
  { id: 'sp', cidade: 'São Paulo', temperatura: 26 },
  { id: 'campinas', cidade: 'Campinas', temperatura: 28 },
];

function CartaoClima({ cidade, temperatura }) {
  const [anotacao, setAnotacao] = useState('');

  return (
    <View style={styles.cartao}>
      <Text>{cidade} — {temperatura} °C</Text>
      <TextInput
        accessibilityLabel={'Anotação de ' + cidade}
        placeholder="Anotação"
        style={styles.campo}
        value={anotacao}
        onChangeText={setAnotacao}
      />
    </View>
  );
}

export default function App() {
  const [cidades, setCidades] = useState(cidadesIniciais);

  function inverterOrdem() {
    setCidades(atuais => [...atuais].reverse());
  }

  return (
    <View style={styles.tela}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cidades</Text>
        <Button title="Inverter ordem" onPress={inverterOrdem} />
        {cidades.map((item, indice) => (
          <CartaoClima key={item.id} cidade={item.cidade} temperatura={item.temperatura} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#EEF4FB' },
  painel: { width: '88%', maxWidth: 290, padding: 20, gap: 8, borderRadius: 18, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#CBD5E1' },
  titulo: { fontSize: 21, fontWeight: 'bold', textAlign: 'center' },
  cartao: { padding: 10, borderRadius: 9, borderWidth: 1, borderColor: '#CBD5E1' },
  campo: { marginTop: 6, padding: 6, borderWidth: 1, borderColor: '#94A3B8', borderRadius: 6 },
});`,
        addedTitle: 'A anotação acompanha a cidade?',
        added: `Como na etapa 17, cada cidade vira um CartaoClima. Agora cada cartão guarda sua própria anotação. O botão inverte uma cópia do array para mudar a ordem dos cartões.

Com key={item.id}, o React reconhece cada cidade pela mesma chave antes e depois da troca. Ao usar key={indice}, as chaves continuam ligadas à primeira e à segunda posições. O estado do cartão fica na posição e pode aparecer sob o nome de outra cidade.

Use o índice apenas para reproduzir o erro deste teste. Ao terminar, restaure key={item.id}. A chave deve ser estável e única entre os itens irmãos da lista.`,
        preview: phonePreview('Cidades', '<div style="display:grid;gap:8px;"><div style="padding:8px;background:#1967d2;color:#fff;text-align:center;">INVERTER ORDEM</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;">São Paulo — 26 °C<br>Anotação</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;">Campinas — 28 °C<br>Anotação</div></div>'),
        note: 'A próxima etapa reaproveita a lista para investigar o que acontece quando os itens ocupam mais espaço que a tela.'
      },
      {
        id: 'mbb-react-scrollview',
        menu: '19. ScrollView',
        title: 'ScrollView — quando o conteúdo não cabe na tela',
        objective: 'Permitir rolagem em uma quantidade limitada de conteúdo.',
        code: `import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const cidades = ['São Paulo', 'Campinas', 'Santos', 'Sorocaba', 'Jundiaí', 'Ribeirão Preto'];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cidades</Text>
        <ScrollView style={styles.area} contentContainerStyle={styles.conteudo}>
          {cidades.map((cidade, index) => (
            <View key={cidade}>
              <Text style={styles.item}>{cidade}</Text>
              {index < cidades.length - 1 && <View style={styles.separador} />}
            </View>
          ))}
        </ScrollView>
        <Text style={styles.rodape}>A lista continua para baixo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  area: {
    height: 135,
    flexGrow: 0,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
  },
  conteudo: { paddingHorizontal: 10, paddingVertical: 6 },
  item: { paddingVertical: 9 },
  separador: { height: 1, backgroundColor: '#E2E8F0' },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
});`,
        addedTitle: 'A altura da área e o espaçamento dos itens',
        added: 'style limita a altura da área rolável. contentContainerStyle muda o espaço interno dos itens. A lista continua fora da parte visível.',
        preview: phonePreview('Cidades', '<div style="border:1px solid #cbd5e1;border-radius:10px;padding:10px;line-height:2.2;">São Paulo<br>Campinas<br>Santos</div>', 'Role no Snack para chegar a Ribeirão Preto.'),
        note: 'A prévia ilustra o topo da lista. Faça o teste de rolagem no App.js executado.'
      },
      mkPage(
        'mbb-react-scroll-limite',
        '20. Limite ScrollView',
        'Quando ScrollView deixa de ser a melhor escolha?',
        'Reconhecer que listas grandes ou dinâmicas precisam de outra abordagem.',
        'Funciona, mas pode não escalar bem',
        'ScrollView renderiza seus filhos de uma vez. Em uma tela com poucos itens isso é simples e adequado. Em listas grandes ou que crescem bastante, existe uma solução própria para listas.',
        'A próxima etapa apresenta FlatList. A decisão não é “novo substitui velho”: cada componente resolve uma necessidade diferente.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>Seis cidades em uma área curta</h4>
            <p>Na <a href="#rn-state-mbb-react-scrollview">etapa 19</a>, você chegou a Ribeirão Preto rolando. A <code>ScrollView</code> já tinha renderizado todas as linhas, inclusive as que estavam abaixo da parte visível. Para seis cidades, preparar todas as linhas é simples.</p>
          </section>
          <section>
            <h4>O mesmo problema com centenas de cidades</h4>
            <p>Se a coleção crescer para centenas de cartões, a tela vai montar muitos itens que o usuário talvez nunca veja. Isso aumenta o trabalho inicial e o uso de memória. A <code>FlatList</code> trabalha com uma janela de itens próximos da área visível e prepara novas linhas à medida que você rola.</p>
            <p>Na <a href="#rn-state-mbb-react-flatlist">etapa 21</a>, reaproveite a ideia do cartão. Repare que a lista recebe os dados em <code>data</code> e chama <code>renderItem</code> para gerar cada linha.</p>
          </section>
          <details>
            <summary>Preveja o que muda ao crescer a lista</summary>
            <p>Se as cidades passarem de seis para centenas, a apresentação de cada cidade pode continuar igual. O ponto que merece revisão é como a tela monta e mantém essas linhas durante a rolagem.</p>
          </details>
        </div>`
      ),
      {
        id: 'mbb-react-flatlist',
        menu: '21. FlatList',
        title: 'FlatList — uma lista preparada para crescer',
        objective: 'Usar data, renderItem e keyExtractor.',
        code: `import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text>{temperatura} °C</Text>
    </View>
  );
}

export default function App() {
  const cidades = [
    { id: 'sp', cidade: 'São Paulo', temperatura: 26 },
    { id: 'campinas', cidade: 'Campinas', temperatura: 28 },
    { id: 'santos', cidade: 'Santos', temperatura: 24 },
  ];

  return (
    <FlatList
      data={cidades}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CartaoClima
          cidade={item.cidade}
          temperatura={item.temperatura}
        />
      )}
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 24, gap: 10 },
  cartao: { padding: 14, borderWidth: 1, borderRadius: 10 },
  cidade: { fontWeight: 'bold' },
});`,
        addedTitle: 'Três peças principais',
        added: `data
-> informa qual array será usado.

renderItem
-> define como cada item vira interface.

keyExtractor
-> informa como obter uma chave estável para cada item.`,
        preview: phonePreview('FlatList', '<div style="display:grid;gap:8px;"><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;">São Paulo — 26 °C</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;">Campinas — 28 °C</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:9px;">Santos — 24 °C</div></div>'),
        note: 'Depois de entender array, map(), key e ScrollView, data, renderItem e keyExtractor passam a fazer sentido.'
      },
      mkPage(
        'mbb-react-listas-compare',
        '22. Scroll × Flat',
        'ScrollView × FlatList',
        'Escolher conscientemente entre duas formas de exibir conteúdo rolável.',
        'Não existe vencedor universal',
        'As duas permitem rolagem, mas foram pensadas para situações diferentes.',
        'Use ScrollView quando o conteúdo é pequeno e controlado; use FlatList quando o problema é uma lista maior, dinâmica ou que precisa crescer.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>Uma página com seções diferentes</h4>
            <p>Uma ficha de contato com cabeçalho, foto e formulário pode colocar esses componentes diretamente dentro de uma <code>ScrollView</code>. Cada bloco tem uma função própria na tela e o conjunto é curto e conhecido.</p>
          </section>
          <section>
            <h4>Uma coleção com o mesmo tipo de item</h4>
            <p>Para um catálogo de contatos que cresce, use <code>FlatList</code>. Na etapa 21, <code>data</code> recebe a coleção, <code>renderItem</code> cria o cartão e <code>keyExtractor</code> indica o ID estável de cada registro.</p>
            <pre><code>&lt;FlatList
  data={cidades}
  keyExtractor={item =&gt; item.id}
  renderItem={({ item }) =&gt; (
    &lt;CartaoClima
      cidade={item.cidade}
      temperatura={item.temperatura}
    /&gt;
  )}
/&gt;</code></pre>
            <p>Use a <a href="#rn-state-mbb-react-key">etapa 18</a> para relembrar por que a chave acompanha o item após uma reordenação.</p>
          </section>
          <details>
            <summary>Compare com os exemplos no Snack</summary>
            <p>Nas etapas <a href="#rn-state-mbb-react-scrollview">19</a> e <a href="#rn-state-mbb-react-flatlist">21</a>, acrescente cidades se precisar forçar a rolagem. Vá até a última e volte ao topo. Identifique em qual versão o JSX declara os filhos da área rolável e em qual a lista chama uma função para gerar cada item.</p>
          </details>
        </div>`
      ),
      {
        id: 'mbb-react-pressable',
        menu: '23. Pressable',
        title: 'Pressable — quando uma área inteira precisa reagir ao toque',
        objective: 'Criar uma interação personalizada além do Button.',
        code: `import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

  function alternarDetalhes() {
    setDetalhesVisiveis(atual => !atual);
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.tituloPainel}>Cartão clicável</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ expanded: detalhesVisiveis }}
          style={styles.cartao}
          onPress={alternarDetalhes}
        >
          <Text style={styles.cidade}>São Paulo</Text>
          <Text style={styles.dica}>
            {detalhesVisiveis ? 'Toque para ocultar detalhes' : 'Toque para ver detalhes'}
          </Text>
          {detalhesVisiveis && <Text style={styles.dica}>Temperatura: 26 °C</Text>}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  tituloPainel: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  cartao: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderRadius: 12,
  },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  dica: { marginTop: 6, color: '#64748B' },
});`,
        addedTitle: 'O toque muda o que o cartão mostra',
        added: 'Pressable torna toda a área do cartão interativa. O onPress alterna detalhesVisiveis e o JSX mostra ou oculta a temperatura.',
        preview: phonePreview('Cartão clicável', '<div style="padding:14px;border:1px solid #94a3b8;border-radius:12px;"><b>São Paulo</b><br>Toque para ocultar detalhes<br>Temperatura: 26 °C</div>'),
        note: 'A prévia mostra o cartão depois do primeiro toque.'
      },
      mkPage(
        'mbb-react-botoes-compare',
        '24. Botões',
        'Button × TouchableOpacity × Pressable',
        'Entender por que três formas de interação podem coexistir.',
        'Escolha pela necessidade',
        'Todos podem responder ao toque, mas oferecem níveis diferentes de controle visual e estrutural.',
        'TouchableOpacity continua válido e aparece na Agenda de Contatos. Pressable oferece mais controle sobre estados da interação.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>Calcular, abrir um cartão ou personalizar o toque</h4>
            <p>Na Média Escolar, <code>Button</code> resolve a ação Calcular com um título e uma função. Na Agenda de Contatos, <code>TouchableOpacity</code> permite montar sua própria área com texto ou imagem e dá retorno visual diminuindo a opacidade durante o toque.</p>
            <p>No cartão de clima da <a href="#rn-state-mbb-react-pressable">etapa 23</a>, <code>Pressable</code> transforma todo o cartão em área de toque. Ele também permite usar <code>pressed</code> para escolher o estilo enquanto o dedo está pressionando.</p>
          </section>
          <section>
            <h4>O que continua depois de soltar?</h4>
            <p>O estilo de pressão é momentâneo. Se o app precisa manter uma cidade selecionada, guarde a seleção em state e atualize-a em <code>onPress</code>. Assim, depois que a opacidade volta ao normal, o cartão ainda pode mostrar “Cidade selecionada”.</p>
            <p>Na <a href="#rn-state-mbb-react-pressed">etapa 25</a>, pressione e segure o cartão, solte e toque outra vez. Observe separadamente a resposta enquanto pressiona e a confirmação que fica na tela.</p>
          </section>
        </div>`
      ),
      {
        id: 'mbb-react-pressed',
        menu: '25. pressed',
        title: 'O estado pressed do Pressable',
        objective: 'Alterar a aparência enquanto o usuário está pressionando.',
        code: `import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  const [selecionada, setSelecionada] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Pressable</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ selected: selecionada }}
          onPress={() => setSelecionada(atual => !atual)}
          style={({ pressed }) => [
            styles.botao,
            selecionada && styles.botaoSelecionado,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.texto}>Campinas</Text>
        </Pressable>
        <Text style={styles.rodape} accessibilityLiveRegion="polite">
          {selecionada ? 'Cidade selecionada' : 'Cidade não selecionada'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  botao: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },
  botaoSelecionado: { backgroundColor: '#166534' },
  botaoPressionado: { opacity: 0.6 },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
});`,
        addedTitle: 'Toque atual e seleção guardada',
        added: 'pressed altera a opacidade durante o toque. O state selecionada controla a cor e o texto depois que o toque termina.',
        preview: phonePreview('Pressable', '<div style="background:#166534;color:#fff;border-radius:10px;padding:13px;text-align:center;font-weight:700;">Campinas</div>', 'Cidade selecionada'),
        note: 'A prévia ilustra a seleção depois de soltar o botão.'
      },
      mkPage(
        'mbb-react-arrow-eventos',
        '26. Arrow em eventos',
        'Por que aparece () => ... nos eventos?',
        'Relacionar arrow functions à necessidade de passar uma função.',
        'Não é decoração',
        'Em React, onPress espera receber uma função para executar depois. Por isso precisamos distinguir passar uma função de executar uma função imediatamente.',
        'onPress={salvar} passa uma função já existente. onPress={() => salvar(id)} cria uma função para que salvar(id) seja executado somente no toque.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>A função precisa receber o nome da cidade</h4>
            <p>Imagine dois cartões que registram qual cidade foi escolhida. Passe uma função que chama <code>registrar</code> com o nome certo. O React Native chama essa função quando ocorre o toque.</p>
            <pre><code>function registrar(cidade) {
  console.log('Cidade escolhida:', cidade);
}

&lt;Button title="Campinas" onPress={() =&gt; registrar('Campinas')} /&gt;
&lt;Button title="Santos" onPress={() =&gt; registrar('Santos')} /&gt;</code></pre>
          </section>
          <section>
            <h4>Diagnostique uma chamada antecipada</h4>
            <p>Ao escrever <code>onPress={registrar('Campinas')}</code>, os parênteses executam a função assim que o JSX é avaliado. Essa função escreve no console e retorna <code>undefined</code>, que é o valor recebido pelo botão.</p>
            <p>No exemplo da <a href="#rn-state-mbb-react-pressable">etapa 23</a>, acrescente <code>registrar</code> e troque temporariamente o manipulador por uma das duas formas. Limpe o console, recarregue e observe o que aparece antes e depois de tocar. Restaure o manipulador do cartão ao terminar.</p>
          </section>
        </div>`
      )
    ];

    const refStep = original.find(s => s.id === 'state-11-useref');
    const finalMedia = original.find(s => s.id === 'state-12-final');
    if (refStep) {
      refStep.menu = '27. useRef';
      refStep.title = 'useRef — devolvendo o foco à primeira nota';
      refStep.objective = 'Usar uma referência para acessar o TextInput sem transformar isso em state.';
      refStep.added = `1. Importe useRef:
import React, { useState, useRef } from 'react';

2. Crie a referência:
const campoNota1 = useRef(null);

3. Ligue ao campo:
ref={campoNota1}

4. Depois de limpar:
campoNota1.current?.focus();

ref -> liga a referência ao componente.
current -> aponta para o valor/elemento referenciado.
focus() -> coloca o cursor no TextInput.
?. -> só tenta chamar focus() se current estiver disponível.

state × ref
state participa da renderização.
ref mantém uma referência sem provocar renderização quando current muda.`;
      refStep.note = 'Repita o teste no Snack para observar o useRef em ação. No App.js, o ?. só deixa chamar focus() quando a referência está disponível.';
    }

    const refOptional = {
      id: 'mbb-react-ref-avancar',
      menu: '28. Ref opcional',
      title: 'Complemento — avançar o foco para o próximo campo',
      objective: 'Ver uma segunda aplicação prática de referência no formulário.',
      code: `import React, { useRef } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const campoNota2 = useRef(null);

  function avancar() {
    campoNota2.current?.focus();
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Notas</Text>
        <TextInput
          style={styles.campo}
          accessibilityLabel="Nota 1"
          placeholder="Nota 1"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={avancar}
        />
        <TextInput
          ref={campoNota2}
          style={styles.campo}
          accessibilityLabel="Nota 2"
          placeholder="Nota 2"
          keyboardType="numeric"
        />
        <Button title="Ir para Nota 2" onPress={avancar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});`,
      addedTitle: 'Ao enviar a primeira nota',
      added: 'returnKeyType sugere a ação Próximo ao teclado. onSubmitEditing chama avancar quando a primeira entrada é enviada. Em React Native nativo, submitBehavior="submit" envia sem pedir a perda automática do foco. avancar direciona o foco para a Nota 2.',
      preview: phonePreview('Notas', '<div style="border:1px solid #cbd5e1;padding:10px;border-radius:8px;margin-bottom:10px;">Nota 1</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:8px;">Nota 2</div><div style="margin-top:10px;color:#174b86;text-align:center;">IR PARA NOTA 2</div>', 'No Snack, confirme onde o cursor aparece.'),
      note: 'No Web, use Enter. No Android e no iOS, o teclado pode mostrar Próximo, um ícone ou outra tecla de ação conforme o dispositivo. O primeiro campo usa o teclado padrão para favorecer o envio. Se a ação estiver indisponível, use Ir para Nota 2.'
    };

    if (finalMedia) {
      finalMedia.menu = '29. Média final';
      finalMedia.title = 'Média Escolar — consolidação de state, eventos e ref';
      finalMedia.objective = 'Revisar o aplicativo completo usando foco seguro no primeiro campo.';
      finalMedia.note = 'Calcule com 6 e 6 na prévia interativa para observar o limite de aprovação. Em seguida, use Limpar para verificar o retorno à Nota 1.';
    }

    const estiloLaboratorio = `const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    padding: 16, backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '100%', maxWidth: 320, padding: 20, gap: 10,
    backgroundColor: '#FFFFFF', borderRadius: 18,
    borderWidth: 1, borderColor: '#CBD5E1',
  },
  titulo: { fontSize: 21, fontWeight: 'bold', textAlign: 'center' },
  valor: { fontSize: 25, fontWeight: 'bold', textAlign: 'center' },
  texto: { fontSize: 14, color: '#334155', textAlign: 'center' },
});`;

    const codigoTemporizador = ({ dependencias = false, strict = false } = {}) => {
      const temporizador = `<Temporizador registrar={setRegistro}${dependencias ? ' intervaloMs={intervaloMs}' : ''} />`;
      return `import React, { useEffect, useState${strict ? ', StrictMode' : ''} } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Temporizador({ registrar${dependencias ? ', intervaloMs' : ''} }) {
  const [batidas, setBatidas] = useState(0);
${dependencias ? '' : '  const intervaloMs = 1000;\n'}
  useEffect(() => {
    registrar(atual => [...atual.slice(-3), 'Setup de ' + intervaloMs + ' ms']);
    const intervalo = setInterval(() => {
      setBatidas(valorAtual => valorAtual + 1);
    }, intervaloMs);

    return () => {
      clearInterval(intervalo);
      registrar(atual => [...atual.slice(-3), 'Cleanup de ' + intervaloMs + ' ms']);
    };
  }, [${dependencias ? 'intervaloMs, ' : ''}registrar]);

  return <Text style={styles.valor}>Batidas: {batidas}</Text>;
}

export default function App() {
  const [visivel, setVisivel] = useState(${strict ? 'false' : 'true'});
  const [registro, setRegistro] = useState([]);${dependencias ? `
  const [intervaloMs, setIntervaloMs] = useState(1000);
  const [cliques, setCliques] = useState(0);` : ''}

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Temporizador</Text>
        <Button
          title={visivel ? 'Ocultar temporizador' : 'Mostrar temporizador'}
          onPress={() => setVisivel(atual => !atual)}
        />
        ${strict ? `<StrictMode>
          {visivel && ${temporizador}}
        </StrictMode>` : `{visivel && ${temporizador}}`}
        {!visivel && <Text style={styles.texto}>Temporizador desmontado</Text>}${dependencias ? `
        <Text style={styles.texto}>Intervalo: {intervaloMs} ms</Text>
        <Button
          title="Trocar frequência"
          onPress={() => setIntervaloMs(atual => atual === 1000 ? 500 : 1000)}
        />
        <Button
          title={'Contador à parte: ' + cliques}
          onPress={() => setCliques(atual => atual + 1)}
        />` : ''}
        <Text style={styles.texto} accessibilityLiveRegion="polite">
          {registro.length ? registro.join('\\n') : 'Aguardando setup'}
        </Text>
      </View>
    </View>
  );
}

${estiloLaboratorio}`;
    };

    const botaoLaboratorio = texto => `<div style="margin:8px 0;padding:8px;background:#1967d2;color:#fff;border-radius:4px;text-align:center;font-size:12px;font-weight:700;">${texto}</div>`;
    const textoLaboratorio = texto => `<div style="margin-top:8px;text-align:center;color:#334155;font-size:14px;">${texto}</div>`;
    const previaTemporizador = (visivel, registro, controles = '') => phonePreview(
      'Temporizador',
      botaoLaboratorio(visivel ? 'OCULTAR TEMPORIZADOR' : 'MOSTRAR TEMPORIZADOR') +
        (visivel ? '<div style="font-size:25px;font-weight:800;text-align:center;">Batidas: 3</div>' : textoLaboratorio('Temporizador desmontado')) +
        controles + textoLaboratorio(registro)
    );
    const previaCleanup = previaTemporizador(false, 'Setup de 1000 ms<br>Cleanup de 1000 ms');

    const effectSteps = [
      mkPage(
        'mbb-effect-intro',
        '30. useEffect',
        'useEffect — sincronizando o componente com algo externo',
        'Compreender o papel do Effect antes de escrever código.',
        'Uma necessidade diferente',
        'Até agora, as mudanças vieram de dados, cálculos e ações do usuário. Alguns comportamentos precisam permanecer sincronizados com algo que existe fora do fluxo de renderização do React, como um temporizador, uma assinatura ou uma comunicação externa.',
        'useEffect é usado para sincronizar o componente com sistemas externos ao React.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>A tela entra e o relógio começa a contar</h4>
            <p>Imagine um cronômetro em uma tela de estudo. Ao entrar, o React monta o componente e apresenta os segundos iniciais. O Effect configura um intervalo do ambiente JavaScript. Cada disparo pede uma atualização de state e o React apresenta o novo valor.</p>
            <p>A tela inicia o ciclo com <code>useEffect</code>, o ambiente marca o tempo com <code>setInterval</code> e o state permite mostrar o resultado. Na <a href="#rn-state-mbb-effect-timer">etapa 31</a>, você poderá observar esses passos no aplicativo.</p>
          </section>
          <section>
            <h4>A tela sai e a contagem precisa parar</h4>
            <p>O intervalo continua disparando até ser cancelado. A função de limpeza do Effect guarda o identificador do intervalo e o entrega a <code>clearInterval</code> ao desmontar o componente. Esse encerramento aparecerá no registro do <a href="#rn-state-mbb-effect-cleanup">laboratório da etapa 32</a>.</p>
            <p>Antes de executar, preveja a contagem após três disparos e o que deve acontecer ao ocultar o temporizador. Use o número exibido e o registro para conferir suas previsões nas duas etapas seguintes.</p>
          </section>
        </div>`
      ),
      {
        id: 'mbb-effect-timer',
        menu: '31. Temporizador',
        title: 'Primeiro Effect: um temporizador',
        objective: 'Sincronizar state com um relógio externo usando setInterval.',
        code: `import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [batidas, setBatidas] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setBatidas(valorAtual => valorAtual + 1);
    }, 1000);

    // Na próxima etapa, vamos guardar e cancelar este intervalo.
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Temporizador</Text>
        <Text style={styles.valor}>Batidas: {batidas}</Text>
      </View>
    </View>
  );
}

${estiloLaboratorio}`,
        addedTitle: 'Do relógio externo para a tela',
        added: 'setInterval chama a função a cada 1000 ms. O atualizador recebe o valor anterior do state e devolve esse valor mais 1.',
        preview: phonePreview('Temporizador', '<div style="font-size:25px;font-weight:800;text-align:center;">Batidas: 3</div>'),
        note: 'Exemplo intermediário. Na etapa 32, o intervalo será encerrado ao desmontar o temporizador.'
      },
      {
        id: 'mbb-effect-cleanup',
        menu: '32. Limpeza (cleanup)',
        title: 'Encerrando o que o Effect iniciou (cleanup)',
        objective: 'Verificar que o intervalo é encerrado quando o temporizador sai da tela.',
        code: codigoTemporizador(),
        addedTitle: 'Setup e cleanup em pares',
        added: 'O Effect cria o intervalo. A função retornada chama clearInterval para encerrar o mesmo intervalo.',
        preview: previaCleanup,
        note: 'O painel conserva as últimas mensagens mesmo depois que o temporizador sai da tela.'
      },
      {
        id: 'mbb-effect-ciclo',
        menu: '33. Montar/desmontar',
        title: 'Montagem, sincronização e desmontagem',
        objective: 'Prever o que acontece com o state e o Effect ao tirar e recolocar o temporizador na tela.',
        code: codigoTemporizador(),
        addedTitle: 'O que muda ao desmontar',
        added: `Em {visivel && <Temporizador ... />}, mudar visivel para false tira Temporizador da árvore. O cleanup cancela o intervalo correspondente.

Ao mostrar novamente, uma nova instância é montada. O useState(0) começa de novo, e o Effect cria outro intervalo. O registro fica no componente pai, por isso conserva as mensagens mesmo quando o filho é desmontado.`,
        preview: previaTemporizador(true, 'Cleanup de 1000 ms<br>Setup de 1000 ms'),
        note: 'Observe a diferença entre atualizar o contador de um componente que continua na tela e montar uma nova instância.'
      },
      {
        id: 'mbb-effect-dependencias',
        menu: '34. Dependências',
        title: 'Dependências: quais valores a sincronização acompanha?',
        objective: 'Verificar quando uma mudança pede a limpeza e a configuração de outro intervalo.',
        code: codigoTemporizador({ dependencias: true }),
        addedTitle: 'Uma mudança relevante e outra independente',
        added: `intervaloMs é uma prop lida pelo Effect. Na troca de 1000 para 500 ms, o React executa o cleanup do intervalo de 1000 ms antes do setup do novo. As batidas continuam a partir do valor atual porque o mesmo Temporizador permanece montado.

A função registrar também entra no array. Ela é o setter setRegistro, cuja identidade se mantém. O Contador à parte muda outro state sem mudar o intervalo nem o setter, então o registro de setup e cleanup fica igual.

Leia os três formatos. Sem o segundo argumento, o Effect é executado após cada renderização confirmada. Com [], o Effect não declara valores reativos que mudem e exijam nova sincronização. Com dependências, o React compara seus valores e refaz a sincronização quando algum deles muda. Declare as props, os states e os demais valores reativos que o Effect usa.`,
        preview: previaTemporizador(true, 'Cleanup de 1000 ms<br>Setup de 500 ms',
          textoLaboratorio('Intervalo: 500 ms') + botaoLaboratorio('TROCAR FREQUÊNCIA') + botaoLaboratorio('CONTADOR À PARTE: 0')),
        note: 'Trocar a frequência muda o recurso externo. Registrar um clique independente só atualiza a interface.'
      },
      {
        id: 'mbb-effect-strict',
        menu: '35. Strict Mode',
        title: 'Strict Mode: por que o Effect pode parecer repetir no desenvolvimento?',
        objective: 'Conferir se a sequência de setup e cleanup deixa um único intervalo ativo.',
        code: codigoTemporizador({ strict: true }),
        addedTitle: 'Um teste de desenvolvimento para o cleanup',
        added: `O exemplo começa com o temporizador desmontado. O botão Mostrar monta o filho dentro de StrictMode. Em um ambiente de desenvolvimento que aplica a verificação, o registro pode mostrar setup → cleanup → setup antes da primeira batida. O segundo setup deixa apenas um intervalo ativo.

No Snack, toque em Mostrar, aguarde uma batida e toque em Ocultar. Confira o último cleanup. Mostre novamente e veja a contagem recomeçar, avançando de um em um. A fronteira interna do exemplo e a configuração do host podem produzir apenas um setup. Ocultar e mostrar testa a limpeza em qualquer configuração.

Para reproduzir a verificação na montagem inicial, use um projeto Expo local com o template blank. Coloque o exemplo em App.js, troque apenas useState(false) de visivel por useState(true) e defina "main": "index.js" em package.json. Crie index.js com:

import React, { StrictMode } from 'react';
import { registerRootComponent } from 'expo';
import App from './App';

function Raiz() {
  return <StrictMode><App /></StrictMode>;
}

registerRootComponent(Raiz);

Inicie em desenvolvimento com npx expo start. Na montagem inicial, procure setup → cleanup → setup. A contagem deve avançar de um em um. Ao ocultar, deve surgir mais um cleanup e as batidas devem parar. A execução adicional pertence ao ambiente de desenvolvimento. Em uma compilação de produção, espere um setup na montagem e o cleanup ao desmontar.`,
        preview: previaTemporizador(false, 'Aguardando setup'),
        note: 'A prévia mostra a tela antes de montar o temporizador. Execute o App.js em desenvolvimento para observar as mensagens.'
      },
      mkPage(
        'mbb-effect-evento',
        '36. Effect × Evento',
        'Effect × Event',
        'Distinguir ação do usuário de sincronização externa.',
        'O gatilho muda tudo',
        'Muitos erros acontecem quando colocamos dentro de useEffect algo que deveria acontecer diretamente em resposta ao usuário.',
        'Clique do usuário → evento. Sincronização com sistema externo → Effect.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>Pesquisar quando o usuário pede</h4>
            <p>Em uma busca de CEP, digitar prepara o texto para a consulta. O enunciado diz que a consulta começa ao tocar em Pesquisar. Ligue a função ao botão com <code>onPress={consultarCep}</code>. Ao corrigir um dígito, o aluno pode continuar digitando e fazer o pedido quando estiver pronto.</p>
            <p>Usar a entrada do CEP como dependência de um Effect mudaria essa regra. Cada alteração passaria a disparar a lógica de consulta, inclusive durante a digitação.</p>
          </section>
          <section>
            <h4>Sincronizar enquanto um componente aparece</h4>
            <p>Na <a href="#rn-state-mbb-effect-api-ponte">cotação da etapa 38</a>, o requisito pede a consulta já na abertura. O Effect inicia o pedido quando <code>Cotacao</code> é montado. O botão Ocultar muda a visibilidade e, ao desmontar, o componente cancela o pedido pendente.</p>
            <p>Depois de ocultar, Mostrar monta outra instância e abre uma nova consulta. O botão controla qual componente aparece. A consulta pertence ao ciclo desse componente.</p>
          </section>
          <details>
            <summary>Conferência sobre o gatilho</summary>
            <p>Se a tela tem um botão Atualizar que deve consultar naquele instante, o evento pode chamar a função. Se a tela precisa carregar na abertura, o Effect pode iniciar a consulta independentemente de um toque.</p>
          </details>
        </div>`
      ),
      mkPage(
        'mbb-effect-nao-usar',
        '37. Quando não usar',
        'Quando useEffect não é necessário',
        'Escolher onde fazer um cálculo, executar uma ação ou sincronizar com um serviço externo.',
        'Decida pelo que dispara a ação',
        'Imagine duas versões da Média Escolar. Uma atualiza a média à medida que você digita. A outra só mostra a média ao tocar em Calcular. A fórmula é a mesma e a atualização acontece em momentos diferentes.',
        'Se a tela depende apenas dos dados atuais, calcule durante a renderização. Se a regra depende de um toque, execute no evento. Se o componente precisa acompanhar algo externo, configure a sincronização com useEffect.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>Cálculo que acompanha a digitação</h4>
            <p>As notas digitadas já estão em state. Em uma versão com cálculo ao vivo, converta e valide as duas entradas antes de calcular. Cada digitação provoca uma renderização, que usa as notas mais recentes.</p>
            <pre><code>const primeira = lerNota(nota1);
const segunda = lerNota(nota2);
const notasValidas = primeira !== null &amp;&amp; segunda !== null;
const media = notasValidas ? (primeira + segunda) / 2 : null;</code></pre>
            <p>A função <code>lerNota</code> vem da <a href="#rn-state-state-12-final">Média Escolar</a> e retorna <code>null</code> para uma entrada inválida. A tela pode exibir o resultado quando <code>media !== null</code>, de modo que a média <code>0</code> também aparece.</p>
            <p>Guardar essa média em outro state e atualizá-la com um Effect cria um segundo lugar para manter o mesmo dado. Quando o valor muda, a tela pode renderizar primeiro com a média anterior e renderizar novamente após o Effect.</p>
          </section>
          <section>
            <h4>Cálculo sob demanda e consulta externa</h4>
            <p>Na Média Escolar da etapa 29, <code>onPress={calcularMedia}</code> valida as entradas e guarda o último resultado confirmado. Se você calcular com 6 e 6 e depois trocar a Nota 2 para 8, a média exibida fica em 6 até tocar em Calcular outra vez.</p>
            <p>O mesmo raciocínio vale para buscar um CEP ao tocar em Pesquisar. Já a <a href="#rn-state-mbb-effect-api-ponte">cotação do Bitcoin da etapa 38</a> começa quando o componente aparece. Nesse caso, o Effect inicia a consulta e o cleanup cancela uma requisição pendente quando o componente sai da tela.</p>
          </section>
          <details>
            <summary>Preveja e confira</summary>
            <p>Com notas 6 e 8, o que aparece ao mudar a segunda nota para 10 em cada versão?</p>
            <p><strong>Conferência.</strong> A versão ao vivo passa de 7 para 8 ao digitar. A versão sob demanda continua mostrando 7 até o próximo toque em Calcular. Experimente a segunda versão na prévia interativa da <a href="#rn-state-state-12-final">etapa 29</a>.</p>
          </details>
        </div>`
      ),
      {
        id: 'mbb-effect-api-ponte',
        menu: '38. Ponte API',
        title: 'Uma sincronização externa usando API',
        objective: 'Observar carregamento, sucesso e erro em uma consulta disparada na montagem.',
        code: `import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const URL_COTACAO = 'https://economia.awesomeapi.com.br/json/last/BTC-BRL';
const formatoReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function Cotacao() {
  const [cotacao, setCotacao] = useState({ estado: 'carregando' });

  useEffect(() => {
    const controle = new AbortController();

    async function consultarBitcoin() {
      try {
        const resposta = await fetch(URL_COTACAO, { signal: controle.signal });
        if (!resposta.ok) {
          throw new Error('HTTP ' + resposta.status);
        }

        const dados = await resposta.json();
        const preco = dados?.BTCBRL?.bid;
        const valor = Number(preco);
        if (typeof preco !== 'string' || !Number.isFinite(valor) || valor <= 0) {
          throw new Error('Cotação inválida');
        }

        if (!controle.signal.aborted) {
          setCotacao({ estado: 'sucesso', valor });
        }
      } catch {
        if (!controle.signal.aborted) {
          setCotacao({ estado: 'erro' });
        }
      }
    }

    consultarBitcoin();
    return () => controle.abort();
  }, []);

  if (cotacao.estado === 'carregando') {
    return <Text style={styles.texto}>Carregando cotação...</Text>;
  }
  if (cotacao.estado === 'erro') {
    return <Text style={styles.texto}>Não foi possível consultar a cotação.</Text>;
  }
  return <Text style={styles.valor}>{formatoReal.format(cotacao.valor)}</Text>;
}

export default function App() {
  const [visivel, setVisivel] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cotação do Bitcoin</Text>
        <Button
          title={visivel ? 'Ocultar cotação' : 'Mostrar cotação'}
          onPress={() => setVisivel(atual => !atual)}
        />
        {visivel && <Cotacao />}
      </View>
    </View>
  );
}

${estiloLaboratorio}`,
        addedTitle: 'O Effect acompanha a presença da cotação na tela',
        added: 'Mostrar Cotacao monta o componente. Seu Effect consulta a API. Ocultar Cotacao desmonta o componente e cancela uma consulta pendente.',
        preview: phonePreview('Cotação do Bitcoin',
          botaoLaboratorio('OCULTAR COTAÇÃO') + textoLaboratorio('Carregando cotação...')),
        note: 'A prévia ilustra o carregamento. No Snack, a cotação recebida da API é exibida em reais no padrão brasileiro. Por exemplo, 234567.89 aparece como R$ 234.567,89.'
      },
      mkPage(
        'mbb-hooks-resumo',
        '39. Consolidação',
        'useState × useRef × useEffect',
        'Justificar o uso de state, ref, evento e Effect em um mesmo aplicativo.',
        'As decisões de um app de estudos',
        'Você já usou estado e foco na Média Escolar e observou o ciclo de um temporizador. Agora reúna essas decisões em um app com tarefas e uma sessão de estudo cronometrada.',
        'A tarefa aparece na tela e pode mudar. O campo recebe foco quando o aluno adiciona uma tarefa. O relógio avança enquanto a sessão está visível. Cada necessidade indica onde colocar a lógica.',
        [],
        `<div class="react-hooks-lesson">
          <section>
            <h4>Ao adicionar uma tarefa</h4>
            <p><code>useState</code> guarda o título digitado e a lista de tarefas. O evento do botão Adicionar valida o título, atualiza a lista e limpa o campo. Na mesma função, a referência do campo coloca o cursor de volta para a próxima digitação.</p>
            <pre><code>const campoTarefa = useRef(null);

// Dentro da função que adiciona uma tarefa válida:
setTitulo('');
campoTarefa.current?.focus();</code></pre>
            <p>Ligue essa referência ao <code>TextInput</code> com <code>ref={campoTarefa}</code>. A atualização de state faz a lista e o texto do campo mudarem na tela. A ação de foco usa o campo já montado, como na <a href="#rn-state-state-11-useref">etapa 27</a>.</p>
          </section>
          <section>
            <h4>Enquanto a sessão de estudo está visível</h4>
            <p>O botão Iniciar mostra o componente Temporizador. Ao montar, ele usa um Effect para criar o intervalo. Cada disparo atualiza <code>segundos</code> em state e a tela passa a mostrar o novo valor.</p>
            <pre><code>useEffect(() => {
  const intervalo = setInterval(() => {
    setSegundos(anterior => anterior + 1);
  }, 1000);
  return () => clearInterval(intervalo);
}, []);</code></pre>
            <p>O botão Encerrar remove o Temporizador da tela e o cleanup para a contagem. Para observar o encerramento e a remontagem, reveja o <a href="#rn-state-mbb-effect-cleanup">laboratório da etapa 32</a>.</p>
          </section>
          <details>
            <summary>Classifique antes de conferir</summary>
            <ol>
              <li>O aluno conclui uma tarefa e ela muda de situação na tela.</li>
              <li>Ao adicionar uma tarefa, o cursor volta para o campo.</li>
              <li>O número de pendências muda quando uma tarefa é concluída.</li>
              <li>O intervalo precisa parar quando o temporizador sai da tela.</li>
            </ol>
            <p><strong>Conferência.</strong> 1. Evento e state. 2. Evento e ref. 3. Cálculo a partir da lista no state. 4. Cleanup do Effect.</p>
          </details>
          <section>
            <h4>O cartão solicita, e o pai atualiza a lista</h4>
            <p>Na prática abaixo, o pai guarda o array de tarefas em <a href="#rn-state-state-7-state">state (etapa 12)</a>. O cartão recebe a tarefa e funções de concluir e remover. Ao tocar, ele chama a função com o <a href="#rn-state-mbb-react-key">ID estável (etapa 18)</a>. O pai usa esse ID para decidir o que muda e passa a nova lista à <a href="#rn-state-mbb-react-flatlist">FlatList (etapa 21)</a>.</p>
            <p>Os dados descem por props. O filho comunica a ação chamando a função que recebeu. A atualização fica com o dono do state. Esse percurso mantém o fluxo unidirecional e permite calcular o total de pendências usando a mesma lista.</p>
          </section>
          <section>
            <h4>Como criar a próxima versão do state</h4>
            <p>Para incluir, <code>[...atuais, tarefa]</code> cria um array com os itens anteriores e o novo. Para concluir, <a href="#rn-state-mbb-react-map"><code>map()</code> (etapa 17)</a> cria outro array e <code>{ ...tarefa, concluida: true }</code> cria um objeto novo só para o ID escolhido. Para remover, <code>filter()</code> devolve um novo array sem o item escolhido.</p>
            <p>Em Testar mutação direta, o código altera um objeto e reapresenta o mesmo array a <code>setTarefas</code>. A referência permanece igual e o React pode deixar de renderizar. Uma atualização posterior pode expor a alteração inesperadamente. Reinicie e compare com o botão Concluir 2, que entrega uma nova referência e atualiza a tela no toque.</p>
          </section>
          <p>Leve essas decisões para o <a href="#rn-state-exercicios-state">projeto da etapa 99</a>. Se o app passar a buscar dados de um serviço ao abrir uma tela, o próximo módulo explica como o aplicativo faz o pedido e interpreta a resposta.</p>
        </div>`
      )
    ];

    const exercise = original.find(s => s.id === 'exercicios-state');
    if (exercise && !String(exercise.html || '').includes('Consolidação integrada')) {
      const integrated = `
<div class="exercise-native exercise-clean">
  <div class="topline exercise-clean-top">
    <h2>99. Exercícios — Consolidação integrada de React e Hooks</h2>
    <div class="objective"><strong>Objetivo:</strong> combinar componentes, props, state, eventos, listas, interação e Hooks em problemas reais.</div>
  </div>
  <div class="panel brief"><div class="panel-body">
    <h3>Consolidação integrada</h3>
    <p>Antes de executar um teste, anote o que você espera ver. Use as atividades do seletor abaixo e entregue os resultados que observou.</p>
    <ol>
      <li><strong>Modificar e testar.</strong> Faça a Média de 3 Notas. Confira <code>6, 6, 6</code> (Aprovado), <code>0, 0, 0</code> (Reprovado), uma nota vazia com mensagem de erro e Limpar voltando à tela inicial.</li>
      <li><strong>Investigar e corrigir.</strong> Escolha um erro: usar o índice como chave na lista reordenável, chamar a função no JSX em vez de esperar o toque ou esquecer de cancelar o intervalo. Registre o sintoma, explique a causa e repita o mesmo teste após corrigir. Consulte as etapas 18, 26 ou 32.</li>
      <li><strong>Combinar os recursos.</strong> Escolha dois dos desafios abaixo. Para cada um, mostre o resultado e explique qual comportamento você verificou.</li>
    </ol>
    <ul>
      <li><strong>Painel de cidades.</strong> Crie CartaoClima com props e gere os cartões com <code>map()</code> e <code>key</code>. Inverta a ordem e comprove que cada cartão continua associado à mesma cidade.</li>
      <li><strong>Lista de contatos.</strong> Monte primeiro com <code>ScrollView</code> e reescreva com <code>FlatList</code>, <code>data</code>, <code>renderItem</code> e <code>keyExtractor</code>. Chegue ao último contato em ambas e explique qual escolheria se a lista crescesse.</li>
      <li><strong>Cartão interativo.</strong> Use <code>Pressable</code> e <code>pressed</code>. Registre a diferença entre a aparência durante o toque e a seleção que permanece depois de soltar.</li>
      <li><strong>Formulário escolar.</strong> Adicione Salvar a um formulário com campos controlados e use <code>useRef</code> para voltar ao primeiro campo após Limpar. Verifique o cursor e os dados apagados.</li>
      <li><strong>Temporizador.</strong> Use <code>useEffect</code>, <code>setInterval</code> e cleanup. Mostre a última mensagem de cleanup ao desmontar o temporizador.</li>
      <li><strong>Escolha do gatilho.</strong> Classifique e justifique cada caso: consultar CEP por botão, atualizar um relógio, calcular desconto na tela e buscar dados quando a cidade muda.</li>
    </ul>
    <details class="exercise-study-project">
      <summary>Projeto final opcional — Meu Tempo de Estudos</summary>
      <p>Você quer organizar o que precisa estudar e acompanhar o que já concluiu. Construa no Snack uma tela com um campo para o nome da tarefa, o botão Adicionar e uma lista que mostre o que está pendente e o que foi concluído.</p>

      <h4>Construa em três passagens</h4>
      <ol>
        <li><strong>Da tarefa ao cartão.</strong> Crie um <code>CartaoTarefa</code> reutilizável. Comece exibindo duas tarefas fixas e passe o título e o estado de conclusão por <a href="#rn-state-mbb-react-props">props (etapa 4)</a>. Use texto para distinguir “Pendente” de “Concluída”.</li>
        <li><strong>Do cartão à lista.</strong> Guarde as tarefas em <code>useState</code> no componente pai e exiba-as com <a href="#rn-state-mbb-react-flatlist">FlatList (etapa 21)</a>. Gere um <a href="#rn-state-mbb-react-key">ID estável (etapa 18)</a> ao adicionar cada tarefa e use-o como chave. Rejeite títulos vazios ou formados só por espaços. Ao pressionar o cartão, chame a função <code>aoConcluir</code> que ele recebeu por props e passe o ID. O pai usa <code>map()</code> e spread para criar um novo array e um novo objeto apenas para esse ID. Use spread ao incluir e consulte a <a href="#rn-state-mbb-hooks-resumo">prática da etapa 39</a> para conferir a atualização imutável.</li>
        <li><strong>Da lista ao fluxo de uso.</strong> Depois de adicionar uma tarefa válida, limpe o campo e devolva o foco com <a href="#rn-state-state-11-useref">useRef (etapa 27)</a>. Use uma mensagem para orientar a primeira inclusão quando a lista estiver vazia.</li>
      </ol>

      <h4>Preveja, teste e registre</h4>
      <ul>
        <li>Abra o app sem tarefas e confira a mensagem inicial. Tente adicionar com o campo vazio e com três espaços. Em ambos os casos, mostre a mensagem de validação e confira que nenhuma tarefa entrou na lista.</li>
        <li>Adicione duas tarefas chamadas “Revisar Hooks”. Após cada inclusão, digite de novo sem tocar no campo. Conclua só a segunda e verifique que a primeira continua pendente.</li>
        <li>Adicione tarefas até ter de rolar a lista. Chegue à última, volte e confira se as duas primeiras ainda têm as situações esperadas.</li>
      </ul>
      <h4>Critérios para aceitar a entrega</h4>
      <ul>
        <li>O título inválido gera mensagem; a lista vazia orienta o aluno; cada inclusão válida limpa o campo e devolve seu foco.</li>
        <li>As duas tarefas de mesmo título permanecem identificáveis pelo comportamento. Ao tocar na segunda, apenas ela muda. O componente pai controla a lista e o cartão chama uma função recebida do pai com o ID correto.</li>
        <li>As inclusões e conclusões criam novas versões do state. Confirme no código que a inclusão usa um array novo e a conclusão preserva os demais itens.</li>
      </ul>
      <p><strong>Se o teste falhar.</strong> Confira o ID enviado pelo cartão e o usado em <code>keyExtractor</code>. Se a tela deixar de acompanhar a alteração, verifique se o setter recebeu um array novo e um objeto novo para a tarefa concluída. Se a ação ocorrer ao abrir a lista, revise a forma de passar a função a <code>onPress</code>.</p>

      <h4>Adapte o app a uma nova necessidade</h4>
      <p>Depois da primeira versão, escolha uma melhoria, como filtrar as pendentes, exibir quantas faltam ou remover uma tarefa usando <code>filter()</code>. Explique quem precisa dela, descreva o resultado esperado e escreva um teste que um colega consiga repetir.</p>

      <p><strong>Desafio avançado — temporizador de estudo.</strong> Adicione um componente que conte os segundos enquanto estiver visível. Use <a href="#rn-state-mbb-effect-cleanup"><code>useEffect</code> com limpeza do intervalo (etapa 32)</a>. Registre no console cada avanço e o encerramento. Oculte o componente, espere dois segundos e confirme que os avanços param. Mostre-o de novo e confira a contagem voltando a avançar uma vez por segundo.</p>
      <p><strong>Entrega.</strong> Envie o link do Snack e, para cada teste, registre o que fez, o que esperava e o que observou. Explique por que a lista usa state e por que o foco usa ref. Se fizer o temporizador, inclua a evidência da limpeza.</p>
    </details>
  </div></div>
</div>`;
      exercise.html = integrated + (exercise.html || '');
      exercise.objective = 'Consolidar state, props, componentes, listas, eventos, interação, useRef e useEffect.';
    }

    modules.state.steps = [
      ...(intro ? [intro] : []),
      ...reactBasics,
      ...mediaCore,
      ...postState,
      ...(refStep ? [refStep] : []),
      refOptional,
      ...(finalMedia ? [finalMedia] : []),
      ...effectSteps,
      ...(exercise ? [exercise] : [])
    ];

    const praticas = {
      'mbb-react-props-state': {
        title: 'Prática no Snack — uma temperatura para duas partes da tela',
        instruction: 'Preveja o que acontece ao tocar em Aumentar temperatura dentro do cartão. Execute e confira o cartão e o resumo. Depois toque em Restaurar no componente pai e compare as duas leituras.',
        code: `import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

function CartaoClima({ temperatura, aoAumentar }) {
  return (
    <View>
      <Text>Campinas: {temperatura} °C</Text>
      <Button title="Aumentar temperatura" onPress={aoAumentar} />
    </View>
  );
}

function ResumoClima({ temperatura }) {
  return <Text>Resumo: {temperatura} °C</Text>;
}

export default function App() {
  const [temperatura, setTemperatura] = useState(28);

  function aumentar() {
    setTemperatura(temperatura + 1);
  }

  function restaurar() {
    setTemperatura(28);
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Clima</Text>
        <CartaoClima temperatura={temperatura} aoAumentar={aumentar} />
        <ResumoClima temperatura={temperatura} />
        <Button title="Restaurar" onPress={restaurar} />
      </View>
    </View>
  );
}

${estiloLaboratorio}`
      },
      'mbb-react-botoes-compare': {
        title: 'Prática no Snack — três controles, uma contagem',
        instruction: 'Toque uma vez em cada controle e confira o total 3. Segure TouchableOpacity e Pressable para comparar a resposta visual. Solte o Pressable e confira que o último controle e o total continuam registrados.',
        code: `import React, { useState } from 'react';
import { Button, TouchableOpacity, Pressable, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [total, setTotal] = useState(0);
  const [ultimo, setUltimo] = useState('Nenhum');

  function contar(origem) {
    setTotal(atual => atual + 1);
    setUltimo(origem);
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Total: {total}</Text>
        <Text>Último controle: {ultimo}</Text>
        <Button title="Button" onPress={() => contar('Button')} />
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.controle}
          activeOpacity={0.55}
          onPress={() => contar('TouchableOpacity')}
        >
          <Text style={styles.rotulo}>TouchableOpacity</Text>
        </TouchableOpacity>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Pressable"
          style={({ pressed }) => [styles.controle, pressed && styles.pressionado]}
          onPress={() => contar('Pressable')}
        >
          {({ pressed }) => <Text style={styles.rotulo}>{pressed ? 'Pressionando' : 'Pressable'}</Text>}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  painel: { width: '100%', maxWidth: 320, gap: 12, padding: 20, backgroundColor: '#EEF4FB' },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  controle: { padding: 12, backgroundColor: '#174B86', borderRadius: 8 },
  pressionado: { backgroundColor: '#166534' },
  rotulo: { color: '#FFFFFF', textAlign: 'center' },
});`
      },
      'mbb-hooks-resumo': {
        title: 'Prática no Snack — atualizar tarefas pelo ID',
        instruction: 'Primeiro toque em Testar mutação direta e veja se a tela muda. Reinicie o exemplo. Depois conclua apenas a segunda tarefa de nome igual, acrescente uma nova e remova a primeira. Compare a lista e o total de pendências a cada toque.',
        code: `import React, { useRef, useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';

function criarTarefas() {
  return [
    { id: '1', titulo: 'Revisar Hooks', concluida: false },
    { id: '2', titulo: 'Revisar Hooks', concluida: false },
  ];
}

function CartaoTarefa({ tarefa, aoConcluir, aoRemover }) {
  return (
    <View style={styles.item}>
      <Text>{tarefa.titulo} · {tarefa.id} · {tarefa.concluida ? 'Concluída' : 'Pendente'}</Text>
      <Button title={'Concluir ' + tarefa.id} onPress={() => aoConcluir(tarefa.id)} />
      <Button title={'Remover ' + tarefa.id} onPress={() => aoRemover(tarefa.id)} />
    </View>
  );
}

export default function App() {
  const [tarefas, setTarefas] = useState(criarTarefas);
  const proximoId = useRef(3);
  const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length;

  function adicionar() {
    const tarefa = { id: String(proximoId.current), titulo: 'Nova revisão', concluida: false };
    proximoId.current += 1;
    setTarefas(atuais => [...atuais, tarefa]);
  }

  function concluir(id) {
    setTarefas(atuais => atuais.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    ));
  }

  function remover(id) {
    setTarefas(atuais => atuais.filter(tarefa => tarefa.id !== id));
  }

  function testarMutacaoDireta() {
    if (tarefas.length === 0) return;
    // Contraexemplo intencional. Reinicie para seguir com a prática.
    tarefas[0].concluida = true;
    setTarefas(tarefas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pendentes: {pendentes}</Text>
      <Button title="Adicionar nova revisão" onPress={adicionar} />
      <Button title="Testar mutação direta" onPress={testarMutacaoDireta} />
      <Button title="Reiniciar exemplo" onPress={() => setTarefas(criarTarefas())} />
      <FlatList
        data={tarefas}
        keyExtractor={tarefa => tarefa.id}
        renderItem={({ item }) => (
          <CartaoTarefa tarefa={item} aoConcluir={concluir} aoRemover={remover} />
        )}
        ListEmptyComponent={<Text>Nenhuma tarefa na lista.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 8, backgroundColor: '#EEF4FB' },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  item: { padding: 12, marginBottom: 8, gap: 6, backgroundColor: '#FFFFFF' },
});`
      }
    };

    for (const etapa of modules.state.steps) {
      if (praticas[etapa.id]) etapa.snackPractice = praticas[etapa.id];
    }
  }

  if (modules.apiCep) {
    modules.apiCep.title = '3. Web Services/APIs';
    modules.apiCep.subtitle = 'Cliente, servidor, HTTP, request/response, JSON, fetch e aplicações conectadas.';

    if (!modules.apiCep.steps.some(s => s.id === 'mbb-api-ponte-react')) {
      const apiIntro = modules.apiCep.steps.find(s => s.id === 'api-intro');
      const demais = modules.apiCep.steps.filter(s => s.id !== 'api-intro');

      const bridge = mkPage(
        'mbb-api-ponte-react',
        '1. Ponte React → API',
        'Do React para os dados externos',
        'Relacionar o que já foi aprendido com o consumo de APIs.',
        'As peças agora trabalham juntas',
        'Você já conhece state, eventos, componentes, props, listas e Effect. Agora vamos entender o caminho da informação entre aplicativo e serviço externo.',
        'JavaScript continua cuidando dos dados e da lógica; React organiza a interface; a API fornece dados externos; state guarda o que a tela precisa mostrar.',
        [
          ['Evento', 'No ViaCEP, o usuário digita o CEP e toca em Pesquisar. A consulta nasce desse evento.'],
          ['Effect', 'Use quando existir uma necessidade real de sincronização automática com algo externo.'],
          ['State', 'Guarda CEP digitado, cidade, estado, cotação, temperatura etc.'],
          ['Props', 'Permitem repassar dados recebidos para componentes como CartaoClima.'],
          ['Lista', 'Dados recebidos em coleção podem virar componentes com map() ou FlatList.'],
          ['Escolha', 'Pergunte o que dispara a ação antes de decidir entre evento e Effect.']
        ]
      );

      const spiral = mkPage(
        'mbb-api-clima-espiral',
        '2. Clima',
        'Clima: do valor fixo aos dados reais',
        'Entender como o mesmo aplicativo pode evoluir à medida que novos recursos são acrescentados.',
        'Do valor fixo ao aplicativo conectado',
        'Você começou exibindo cidade e temperatura diretamente no código. Depois, o mesmo exemplo ganhou componentes reutilizáveis, props e listas. Agora os dados também podem chegar de um serviço externo.',
        'Valor fixo → componente → props → array/map → lista → API → localização do aparelho',
        [
          ['1. Valor fixo', 'Cidade e temperatura aparecem diretamente no código.'],
          ['2. Componente', 'CartaoClima separa essa parte da interface em uma peça reutilizável.'],
          ['3. Props', 'O mesmo cartão passa a receber cidades e temperaturas diferentes.'],
          ['4. Lista', 'Um array com várias cidades gera vários cartões usando map() ou FlatList.'],
          ['5. API', 'A temperatura deixa de ser fixa e pode vir de um serviço na internet.'],
          ['6. Localização', 'Mais adiante, o GPS do aparelho poderá fornecer a posição usada para consultar o clima daquele local.']
        ]
      );

      modules.apiCep.steps = [
        ...(apiIntro ? [apiIntro] : []),
        bridge,
        spiral,
        ...demais
      ];
    }
  }

  if (typeof renderModuleMenu === 'function') renderModuleMenu();
  if (typeof renderStepMenu === 'function') renderStepMenu();
  if (typeof showStep === 'function' && typeof currentModuleKey !== 'undefined') {
    const atual = modules[currentModuleKey] || modules.fundamentosMobile;
    if (atual && atual.steps && atual.steps.length) showStep(atual.steps[0].id);
  }
}
