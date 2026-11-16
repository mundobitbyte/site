// Reforma completa do React Native MbB — especificação pedagógica consolidada.
// Complementa a base atual sem apagar laboratórios existentes.
// Fluxo: Contextualizar -> Necessidade -> Conceito -> Exemplo -> Aplicação -> Consolidação.

if (typeof modules !== 'undefined') {
  const mkPage = (id, menu, title, objective, kicker, lead, highlight, boxes) => ({
    id, menu, title, objective, modulePage: true, kicker, lead, highlight, boxes
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
        objective: 'Permitir que o mesmo componente receba valores diferentes.',
        code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.temperatura}>{temperatura} °C</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoClima cidade="São Paulo" temperatura={26} />
      <CartaoClima cidade="Campinas" temperatura={28} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  cartao: { padding: 18, borderWidth: 1, borderRadius: 12 },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  temperatura: { fontSize: 26, marginTop: 8 },
});`,
        addedTitle: 'Trecho em foco',
        added: `function CartaoClima({ cidade, temperatura }) { ... }

<CartaoClima cidade="São Paulo" temperatura={26} />
<CartaoClima cidade="Campinas" temperatura={28} />

props = informações que o componente recebe de fora.`,
        preview: phonePreview('Clima', '<div style="display:grid;gap:10px;"><div style="border:1px solid #cbd5e1;border-radius:10px;padding:12px;"><b>São Paulo</b><div>26 °C</div></div><div style="border:1px solid #cbd5e1;border-radius:10px;padding:12px;"><b>Campinas</b><div>28 °C</div></div></div>'),
        note: 'Agora a mesma peça visual pode ser reutilizada com dados diferentes.'
      },
      mkPage(
        'mbb-react-props-state',
        '5. Props × state',
        '5 — Props × state',
        'Distinguir dados recebidos de dados que pertencem ao componente e mudam.',
        'Duas origens diferentes',
        'Props e state aparecem juntos em muitos aplicativos, mas não resolvem o mesmo problema.',
        'Props vêm de fora do componente. State pertence ao componente e pode mudar durante o uso.',
        [
          ['props', 'Exemplo: cidade e temperatura recebidas por CartaoClima.'],
          ['state', 'Exemplo: nota digitada, resultado calculado ou texto que muda.'],
          ['Quem altera props?', 'O componente que envia os valores decide quais props serão passadas.'],
          ['Quem acompanha state?', 'O próprio componente usa uma função de atualização, como setNota1.'],
          ['Renderização', 'Tanto props quanto state podem participar do JSX.'],
          ['Próximo passo', 'A Média Escolar cria a necessidade natural de state: as notas mudam enquanto você digita.']
        ]
      )
    ];

    const mediaCore = original.filter(s => {
      if (!s.id || !String(s.id).startsWith('state-')) return false;
      if (['state-intro','state-11-useref','state-12-final'].includes(s.id)) return false;
      const m = String(s.id).match(/^state-(\d+)/);
      return m && Number(m[1]) <= 10;
    });

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
        [
          ['ScrollView', 'Boa para conteúdo pequeno ou finito que precisa de rolagem.'],
          ['Todos os filhos', 'O conteúdo declarado dentro dela é renderizado.'],
          ['Lista grande', 'Pode consumir recursos desnecessariamente quando há muitos itens.'],
          ['Lista dinâmica', 'Pode crescer, mudar ou receber muitos registros.'],
          ['FlatList', 'Foi criada para trabalhar com listas e renderização mais eficiente.'],
          ['Como escolher', 'Escolha pela necessidade da tela, não pela novidade do componente.']
        ]
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
        [
          ['ScrollView', 'Conteúdo pequeno/finito. Estrutura direta com filhos dentro do componente.'],
          ['FlatList', 'Lista maior/dinâmica. Recebe data e renderItem.'],
          ['key', 'Com map() usamos key; com FlatList podemos usar keyExtractor.'],
          ['Eficiência', 'FlatList é preparada para não tratar toda lista como um bloco único já renderizado.'],
          ['Caminho', 'Primeiro entendemos uma área rolável simples; depois usamos a ferramenta especializada.'],
          ['Decisão', 'Pergunte: é uma página rolável ou é uma lista de dados que pode crescer?']
        ]
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
        [
          ['Button', 'Bom para uma ação simples com aparência definida pela plataforma.'],
          ['TouchableOpacity', 'Área clicável personalizável que reduz opacidade durante o toque.'],
          ['Pressable', 'Oferece mais controle sobre estados de interação e aparência.'],
          ['Não é moda', 'A escolha depende da experiência que a interface precisa oferecer.'],
          ['Na prática', 'A Agenda de Contatos já usa TouchableOpacity em áreas clicáveis personalizadas.'],
          ['Próximo passo', 'Vamos usar o estado pressed do Pressable para reagir visualmente ao toque.']
        ]
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
        [
          ['Direto', 'onPress={salvar}: use quando não precisa preparar argumentos naquele ponto.'],
          ['Arrow', 'onPress={() => salvar(id)}: útil para chamar algo com argumento depois do toque.'],
          ['Diagnostique', 'Se onPress={salvar(id)} já escreveu no console antes do toque, a chamada aconteceu ao montar a interface. Corrija para onPress={() => salvar(id)} e confira de novo.'],
          ['Experimente', 'No cartão da etapa 23, substitua temporariamente o manipulador por uma função registrar(cidade) que use console.log. Faça o log aparecer apenas após o toque e inclua o nome da cidade.'],
          ['JavaScript', 'Arrow function já foi estudada no JS Essencial; aqui vemos por que ela aparece no React.'],
          ['Evento', 'O clique é o gatilho. A função passada ao evento é executada quando o gatilho ocorre.'],
          ['Ponte', 'Essa diferença será importante quando compararmos Evento × Effect.']
        ]
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
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const campoNota2 = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Notas</Text>
        <TextInput
          style={styles.campo}
          accessibilityLabel="Nota 1"
          placeholder="Nota 1"
          returnKeyType="next"
          onSubmitEditing={() => campoNota2.current?.focus()}
        />
        <TextInput
          ref={campoNota2}
          style={styles.campo}
          accessibilityLabel="Nota 2"
          placeholder="Nota 2"
          keyboardType="numeric"
        />
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
      added: 'Pressione Enter ou Próximo na primeira entrada. onSubmitEditing chama focus() na referência do segundo campo.',
      preview: phonePreview('Notas', '<div style="border:1px solid #cbd5e1;padding:10px;border-radius:8px;margin-bottom:10px;">Nota 1</div><div style="border:1px solid #cbd5e1;padding:10px;border-radius:8px;">Nota 2</div>', 'No Snack, confirme onde o cursor aparece.'),
      note: 'O envio do campo é o gatilho. Use Enter no teclado físico ou Próximo no teclado do dispositivo quando estiver disponível.'
    };

    if (finalMedia) {
      finalMedia.menu = '29. Média final';
      finalMedia.title = 'Média Escolar — consolidação de state, eventos e ref';
      finalMedia.objective = 'Revisar o aplicativo completo usando foco seguro no primeiro campo.';
      finalMedia.note = 'A prévia mostra o resultado no limite de aprovação. O próximo problema será sincronizar o componente com algo externo.';
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
        [
          ['Externo ao React', 'Temporizador, conexão, assinatura, API, recurso do navegador/dispositivo etc.'],
          ['Effect', 'Configura a sincronização necessária depois que a renderização foi confirmada.'],
          ['Evento', 'Responde diretamente a uma ação do usuário, como clicar em Calcular.'],
          ['Não confundir', 'Cálculo simples derivado de state não precisa virar Effect.'],
          ['Primeiro laboratório', 'Usaremos um temporizador porque ele deixa a sincronização externa visível sem misturar API.'],
          ['Depois', 'Somente após entender Effect, cleanup e dependências faremos a ponte conceitual com API.']
        ]
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

StrictMode na raiz da aplicação permite observar a verificação extra já na primeira montagem. O que aparece com uma fronteira interna depende do ambiente e do momento da montagem. Se seu preview mostrar apenas um setup, oculte e mostre o temporizador para conferir separadamente que cada cleanup corresponde ao intervalo anterior. A remontagem pelo botão é uma ação do usuário.

Em produção, o React não executa essa verificação extra. O cleanup normal continua sendo executado ao desmontar ou antes de sincronizar de novo.`,
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
        [
          ['Calcular média', 'O usuário toca em Calcular. Isso pertence ao onPress.'],
          ['Limpar', 'O usuário toca em Limpar. Isso pertence ao onPress.'],
          ['Temporizador', 'Precisa existir enquanto o componente está sincronizado com o relógio. Isso é Effect.'],
          ['API por botão', 'ViaCEP continua correto dentro do evento Pesquisar.'],
          ['API automática', 'Se a aplicação realmente precisa sincronizar automaticamente com dados externos, um Effect pode fazer sentido.'],
          ['Pergunta', 'Isso acontece porque o usuário fez algo agora ou porque o componente precisa permanecer sincronizado?']
        ]
      ),
      mkPage(
        'mbb-effect-nao-usar',
        '37. Quando não usar',
        'Quando NÃO usar useEffect',
        'Evitar Effects desnecessários.',
        'Menos código, melhor modelo mental',
        'useEffect não é um lugar genérico para colocar qualquer lógica que “precisa acontecer”.',
        'Se um valor pode ser calculado diretamente a partir de props/state durante a renderização, calcule-o. Se algo acontece por causa de um clique, trate no evento.',
        [
          ['Cálculo simples', 'total = quantidade * preco não precisa de Effect.'],
          ['Média', '(nota1 + nota2) / 2 pode ser calculada na função acionada pelo botão.'],
          ['Clique', 'Salvar, excluir e pesquisar por botão pertencem ao evento correspondente.'],
          ['Effect', 'Reserve para sincronizações externas necessárias ao componente.'],
          ['Sinal de alerta', 'Effect que apenas copia um state para outro frequentemente pode ser evitado.'],
          ['Objetivo', 'Entender a origem da necessidade antes de escolher useEffect.']
        ]
      ),
      {
        id: 'mbb-effect-api-ponte',
        menu: '38. Ponte API',
        title: 'Uma sincronização externa usando API',
        objective: 'Observar carregamento, sucesso e erro em uma consulta disparada na montagem.',
        code: `import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const URL_COTACAO = 'https://economia.awesomeapi.com.br/json/last/BTC-BRL';

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
          setCotacao({ estado: 'sucesso', preco });
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
  return <Text style={styles.valor}>R$ {cotacao.preco}</Text>;
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
        note: 'A prévia ilustra o carregamento. A resposta real depende do serviço externo.'
      },
      mkPage(
        'mbb-hooks-resumo',
        '39. Consolidação',
        'useState × useRef × useEffect',
        'Consolidar quando usar cada Hook estudado.',
        'Três problemas diferentes',
        'Os Hooks não são três versões de uma mesma solução. Cada um aparece porque surgiu uma necessidade diferente.',
        'Antes de escolher um Hook, descreva o problema em português simples.',
        [
          ['useState', 'Preciso guardar um valor que participa da interface e pode mudar.'],
          ['useRef', 'Preciso manter uma referência sem que a mudança de current provoque renderização.'],
          ['useEffect', 'Preciso sincronizar o componente com algo externo ao React.'],
          ['Evento', 'Não é Hook, mas é essencial na comparação: responde diretamente a ações do usuário.'],
          ['Exemplos', 'nota → state; foco do campo → ref; temporizador → Effect; botão Calcular → evento.'],
          ['Próximo módulo', 'Agora estamos prontos para estudar cliente, servidor, HTTP, JSON, fetch e APIs conscientemente.']
        ]
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
        <li><strong>Do cartão à lista.</strong> Guarde as tarefas em <code>useState</code> e exiba-as com <a href="#rn-state-mbb-react-flatlist">FlatList (etapa 21)</a>. Gere um <a href="#rn-state-mbb-react-key">ID estável (etapa 18)</a> ao adicionar cada tarefa e use-o como chave. Rejeite títulos vazios ou formados só por espaços. Passe ao cartão a ação de concluir para que apenas a tarefa tocada mude, usando <a href="#rn-state-mbb-react-pressable">Pressable (etapa 23)</a>.</li>
        <li><strong>Da lista ao fluxo de uso.</strong> Depois de adicionar uma tarefa válida, limpe o campo e devolva o foco com <a href="#rn-state-state-11-useref">useRef (etapa 27)</a>. Use uma mensagem para orientar a primeira inclusão quando a lista estiver vazia.</li>
      </ol>

      <h4>Preveja, teste e registre</h4>
      <ul>
        <li>Abra o app sem tarefas e confira a mensagem inicial. Tente adicionar com o campo vazio e com três espaços. Em ambos os casos, mostre a mensagem de validação e confira que nenhuma tarefa entrou na lista.</li>
        <li>Adicione duas tarefas chamadas “Revisar Hooks”. Após cada inclusão, digite de novo sem tocar no campo. Conclua só a segunda e verifique que a primeira continua pendente.</li>
        <li>Adicione tarefas até ter de rolar a lista. Chegue à última, volte e confira se as duas primeiras ainda têm as situações esperadas.</li>
      </ul>

      <h4>Adapte o app a uma nova necessidade</h4>
      <p>Depois da primeira versão, escolha uma melhoria, como filtrar as pendentes ou exibir quantas faltam. Explique quem precisa dela, descreva o resultado esperado e escreva um teste que um colega consiga repetir.</p>

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
