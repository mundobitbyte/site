// React e Hooks — explicações MbB, parte 1.
// Somente conteúdo pedagógico do painel inferior. Não altera código, preview, layout ou navegação.
(() => {
  const guides = {
    'mbb-react-jsx': ['Como ler JSX sem misturar as duas camadas', `Até aqui você já viu JavaScript e já montou interfaces. O JSX é o ponto em que essas duas coisas se encontram.

Antes do return, const nome e const pontos são JavaScript comum: dados preparados pelo programa. Dentro do return começa a descrição da interface com componentes como View e Text.

Quando aparecem {nome} e {pontos}, as chaves dizem ao JSX para usar naquele ponto o valor de uma expressão JavaScript.

Uma boa leitura mental é: JavaScript prepara dados e regras; JSX descreve como essas informações aparecem na tela. JSX lembra HTML, mas aqui estamos usando componentes React Native dentro do código JavaScript.`],

    'mbb-react-componente-titulo': ['Por que criar um componente próprio', `A função Titulo retorna o JSX de uma parte da interface. Como seu nome começa com maiúscula, React reconhece <Titulo /> como um componente personalizado. Troque o texto na função e observe que muda somente o título.

Extensão com dois arquivos. No Snack, crie components/Titulo.js. No novo arquivo, importe React e importe Text e StyleSheet de 'react-native'. Mova a função Titulo e a definição styles.titulo para lá, dentro de um StyleSheet.create({ titulo: ... }). Escreva export default function Titulo() no início da declaração movida.

Em App.js, remova a função local e a entrada titulo de styles. Acrescente import Titulo from './components/Titulo'; e mantenha <Titulo /> no JSX. Ao executar, o título e seu estilo devem aparecer como antes. O JS Essencial tem a prática de importação e exportação que sustenta esse passo.`],

    'mbb-react-cartao-fixo': ['Do componente simples para uma peça realmente útil', `CartaoClima reúne estrutura, conteúdo e estilo de uma parte da tela. Neste momento os valores São Paulo e 26 °C estão escritos dentro dele de propósito.

Primeiro comprovamos que a peça funciona. Depois percebemos seu limite: se quisermos Campinas ou Santos, copiar o componente inteiro seria repetição.

O desenho do cartão é o mesmo; apenas os dados mudam. É dessa necessidade que surgem as props na próxima etapa.`],

    'mbb-react-props': ['Props: a mesma peça recebendo dados diferentes', `Na etapa anterior, CartaoClima sabia mostrar apenas os valores escritos dentro dele. Agora separamos responsabilidades: o componente decide COMO os dados aparecem; quem usa o componente informa QUAIS dados serão mostrados.

Em function CartaoClima({ cidade, temperatura }), cidade e temperatura são valores recebidos pelo componente. Depois eles aparecem no JSX como {cidade} e {temperatura}.

Nas chamadas <CartaoClima cidade="São Paulo" temperatura={26} /> e <CartaoClima cidade="Campinas" temperatura={28} />, o componente é o mesmo, mas os dados são diferentes.

Uma boa forma de pensar é: props são informações de entrada do componente. Elas vêm de fora. A comparação com state, que pertence ao componente e pode mudar, vem logo depois.`],

    'state-1-app': ['Começando a Média Escolar pelo alicerce', `Agora iniciamos um aplicativo que crescerá em várias etapas. A intenção não é jogar toda a lógica de uma vez, mas acompanhar como uma interface estática ganha comportamento.

Observe a estrutura básica do App: imports, função principal, return e StyleSheet. Ela será a base para campos, botões, state e eventos.

Construir por camadas ajuda a perceber de onde veio cada recurso e qual problema ele resolveu.`],

    'state-2-vazia': ['Primeiro garantimos a área principal da tela', `Antes de pedir notas ou fazer cálculos, precisamos de um lugar estável para montar a interface.

A View principal funciona como o container do aplicativo. O estilo define como esse espaço ocupa a tela e como os próximos componentes serão organizados.

A tela ainda parece vazia porque estamos resolvendo primeiro a estrutura. O comportamento virá depois.`],

    'state-3-titulo': ['A tela começa a comunicar sua finalidade', `Com a estrutura principal pronta, acrescentamos um Text para identificar o aplicativo como Média Escolar.

View organiza; Text apresenta informação. O style modifica a aparência, mas não muda a responsabilidade do componente.

Separar mentalmente estrutura, conteúdo e estilo ajuda bastante quando o código começa a crescer.`],

    'state-4-campos': ['Criando os pontos de entrada de dados', `O aplicativo precisa receber duas notas. Por isso entram os TextInput.

Neste momento eles ainda são principalmente campos visuais. O usuário consegue digitar, mas React ainda não acompanha esses valores como state.

keyboardType="numeric" ajuda o dispositivo a oferecer um teclado adequado, mas não faz a conversão numérica por nós.

Guarde a diferença: criar um campo não é o mesmo que criar a memória do valor digitado. Essa necessidade aparece daqui a pouco.`],

    'state-5-botoes': ['A interface ganha ações, mas ainda não comportamento', `Agora aparecem os botões que representarão ações do usuário.

Um botão é o controle visual; a função ligada ao evento é o comportamento. O botão não executa uma regra sozinho.

Nas próximas etapas ligaremos essas ações a onPress e veremos como o aplicativo reage ao toque do usuário.`],

    'state-6-resultados': ['Preparando onde o resultado será apresentado', `A interface já possui entrada de dados e ações. Agora reservamos a região em que média e situação serão mostradas.

Até aqui estamos completando a camada visual. Falta guardar o que o usuário digita, responder aos botões e calcular o resultado.

É exatamente nesse ponto que state deixa de ser abstrato e passa a resolver uma necessidade concreta.`],

    'state-7-state': ['useState: quando a interface precisa lembrar de um valor', `Leia const [nota1, setNota1] = useState('') em três partes. nota1 é o valor atual, setNota1 é a função que pede uma atualização e '' é o valor inicial.

No TextInput, value={nota1} mostra o valor atual e onChangeText={setNota1} atualiza o state. O Text temporário da prática depende do mesmo valor. Se você digitar 7, confira que ele mostra Nota digitada: 7.

Regras dos Hooks deste módulo. Chame useState, useRef e useEffect no nível superior de componentes de função ou de Hooks personalizados. Deixe as chamadas antes de qualquer retorno antecipado. Colocá-las dentro de um if, laço ou função de evento quebra a regra, pois o React precisa reconhecer as chamadas durante a renderização.

Ao ler function calcularMedia(), preveja onde deve ficar a chamada de useState. Declare o estado no início de App e use o setter dentro do evento. A etapa 13 mostra essa ligação na prática.`],

    'state-8-eventos': ['Eventos: ligando uma ação do usuário a uma função', `As notas já ficam guardadas no state. Agora precisamos escolher quando uma ação deve acontecer.

Em onPress={calcularMedia}, entregamos a função ao botão. Ela será chamada no toque. O botão Limpar chama a função limpar.

Nesta etapa, cada função atualiza apenas o state mensagem. Se a mensagem mudar ao tocar, você sabe qual função foi chamada. Na próxima etapa, Calcular passará a usar as notas guardadas nos campos.`],

    'state-9-calculo': ['Validando as notas antes de calcular', `TextInput entrega texto. Um campo vazio precisa ser detectado antes da conversão, pois Number('') devolve 0.

A função lerNota remove espaços nas pontas com trim() e troca a vírgula por ponto. A expressão regular aceita inteiros e decimais. Depois, Number converte o texto. A função aceita apenas notas de 0 a 10 e devolve null para indicar entrada inválida. Zero continua sendo uma nota válida.

Se uma nota é inválida, mostramos uma mensagem, apagamos o resultado anterior e retornamos sem calcular. Com duas notas válidas, calculamos a média. O if/else decide a situação: média 6 ou mais aprova.

O botão Limpar fica desabilitado até a próxima etapa.`],

    'state-10-limpar': ['Limpar também significa atualizar o estado da aplicação', `Limpar devolve notas, média, situação e mensagem aos seus valores iniciais. Como os campos e os textos dependem desses states, a interface acompanha a mudança.

Os rótulos Média e Situação ainda ficam visíveis, mesmo quando os valores estão vazios. Na próxima etapa, vamos mostrar essa área só quando existir um resultado.`]

  };

  function apply() {
    if (typeof modules === 'undefined' || !modules.state || !Array.isArray(modules.state.steps)) {
      setTimeout(apply, 50);
      return;
    }

    Object.entries(guides).forEach(([id, [title, text]]) => {
      const step = modules.state.steps.find(item => String(item?.id) === id);
      if (!step || step.modulePage || step.exercisePage) return;
      step.addedTitle = title;
      step.added = text;
    });

    if (typeof currentModuleKey === 'undefined' || currentModuleKey !== 'state') return;
    const active = modules.state.steps.find(step => {
      const button = document.getElementById(`btn-state-${step.id}`);
      return button && button.classList.contains('active');
    });
    if (!active || !guides[String(active.id)]) return;

    const panel = document.getElementById('mbbStepExplanation');
    const title = panel?.querySelector('.mbb-explanation-title');
    const text = panel?.querySelector('.mbb-explanation-text');
    if (title) title.textContent = active.addedTitle;
    if (text) text.textContent = active.added;
  }

  apply();
})();
