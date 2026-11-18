// React e Hooks — explicações MbB, parte 2.
// Somente conteúdo pedagógico do painel inferior. Não altera código, preview, layout ou navegação.
(() => {
  const guides = {
    'mbb-react-condicional': ['Quando a própria interface depende de uma condição', `O cálculo, a regra de aprovação e o botão Limpar continuam como na etapa anterior. Agora a condição também decide o que aparece na tela.

Em media !== '' && (...), a parte depois de && entra no JSX só quando existe uma média. A comparação distingue o valor inicial vazio da nota 0, que deve aparecer quando foi calculada.

O if/else decide a situação usando média 6 como corte. No JSX, situacao === 'Aprovado' ? styles.aprovado : styles.reprovado reaproveita essa decisão e escolhe apenas o estilo. Ao limpar, media volta ao valor vazio e a área some.`],

    'mbb-react-map': ['Do array de dados para vários componentes', `No JavaScript Essencial, map() já servia para percorrer um array e produzir novos valores. No React, a mesma ideia ganha um uso visual: cada item pode produzir um componente.

O array cidades concentra os dados. O map() percorre esse array e, para cada objeto, cria um CartaoClima recebendo cidade e temperatura por props.

Isso evita escrever manualmente um cartão para cada cidade. Se os dados mudarem, a estrutura visual continua definida em um único componente.

O React também precisa identificar cada elemento dessa sequência. Por isso aparece key={item.id}. A próxima etapa aprofunda essa necessidade.`],

    'mbb-react-scrollview': ['A janela de rolagem e os itens dentro dela', `A lista de cidades é maior que a área disponível. O style={styles.area} limita a altura da janela de rolagem. contentContainerStyle={styles.conteudo} ajusta a parte interna que leva os itens consigo durante a rolagem.

Role até Ribeirão Preto para conferir que os itens continuam abaixo da parte visível. Alterar paddingHorizontal aproxima ou afasta os nomes da borda, enquanto a altura da área permanece 135.

ScrollView é simples para conteúdo pequeno e controlado. O limite muda quando a lista cresce, o que prepara a escolha de FlatList.`],

    'mbb-react-flatlist': ['FlatList: quando o problema é uma lista de dados', `ScrollView mostrou como tornar uma área rolável. FlatList parte de outra necessidade: exibir uma coleção de dados que pode crescer.

data recebe o array; renderItem explica como cada item vira interface; keyExtractor informa como obter uma identidade estável para cada registro.

CartaoClima continua sendo reutilizado. FlatList não substitui o componente: ela organiza a forma de percorrer e renderizar a coleção.

É um bom exemplo de composição: os dados ficam no array, FlatList administra a lista e CartaoClima cuida de como cada item aparece.`],

    'mbb-react-pressable': ['Pressable torna o cartão inteiro interativo', `A área do cartão, incluindo o texto São Paulo, recebe o toque. Pressable chama alternarDetalhes no onPress. A função muda detalhesVisiveis, e a condição no JSX decide se Temperatura: 26 °C aparece.

Toque de novo e confira que a temperatura desaparece. O mesmo cartão pode conter texto, imagens ou outros componentes. Na próxima prática, você também vai observar a aparência enquanto o toque está ativo.`],

    'mbb-react-pressed': ['O toque passa, a seleção fica', `Pressable fornece pressed ao callback de style. A expressão pressed && styles.botaoPressionado reduz a opacidade durante o toque. Ao soltar, a opacidade volta.

A variável selecionada pertence ao app e foi criada com useState. O onPress alterna a seleção depois que o toque é concluído. A cor selecionada e o texto Cidade selecionada ficam visíveis até um novo toque.

onPress espera receber uma função. A arrow () => adia a chamada do setter até o evento. A próxima etapa compara esse formato com chamar a função ao renderizar.`],

    'state-11-useref': ['useRef: acessar um elemento sem transformar isso em state', `O formulário já limpa os campos e esconde o resultado. Agora queremos devolver o cursor ao primeiro TextInput depois de tocar em Limpar. Esse problema não é um valor que precisa aparecer na interface; precisamos de uma referência ao próprio campo.

Como na etapa 12, o Hook é chamado no nível superior do componente. useRef(null) cria a referência. ref={campoNota1} liga a referência ao TextInput. Depois, campoNota1.current?.focus() pede foco ao elemento referenciado.

current guarda o valor atual da referência. O ?. evita tentar executar focus() se a referência ainda não estiver disponível.

Compare com useState: alterar state participa da renderização. Alterar current em uma ref não provoca uma nova renderização. Por isso useRef é adequado para foco e referências a elementos.\n\nConsolidação da Média Escolar: o evento de Calcular chama calcularMedia, que valida as notas e usa if/else para decidir a situação. O JSX apresenta o resultado quando existe uma média. Limpar apaga campos, resultado e mensagem; useRef devolve o foco à primeira nota. Explique o fluxo completo: digitar, calcular, exibir e limpar.`],

    'mbb-react-ref-avancar': ['Do envio da primeira nota ao foco na segunda', `Na Nota 1, pressione Enter ou a tecla Próximo. onSubmitEditing recebe o evento de envio da entrada. O callback usa campoNota2.current?.focus() para mover o cursor ao segundo TextInput.

Digite em seguida para verificar onde o valor aparece. O ref indica qual campo recebe o foco. As bordas dos dois campos têm o mesmo estilo inicial.`],

    'mbb-effect-timer': ['Do relógio externo para a tela', `Depois da renderização, o Effect configura o intervalo. setInterval chama a função a cada 1000 ms. Cada chamada conta como uma batida.

Em setBatidas(valorAtual => valorAtual + 1), entregamos ao React uma função. O React fornece o valor anterior, e a função devolve o próximo. Assim o contador pode crescer sem o Effect ter de ler batidas e recriar o intervalo a cada atualização.

O intervalo continua ativo por conta própria. Na próxima etapa, vamos guardar seu identificador e cancelar o intervalo quando o componente for desmontado.`],

    'mbb-effect-cleanup': ['Setup e cleanup em pares', `Ao montar Temporizador, o Effect cria um intervalo e registra o setup. Seu return entrega ao React uma função de limpeza. Ela guarda o identificador criado pelo setup e chama clearInterval para cancelar aquele intervalo.

O botão Ocultar muda o state visivel do componente pai. A condição retira Temporizador da tela, o React executa o cleanup e o pai continua mostrando o registro. A prop registrar recebe setRegistro, a função que atualiza esse registro.

Confira a ordem das mensagens. O registro guarda as quatro mais recentes para facilitar a comparação.`],

    'mbb-effect-api-ponte': ['A tela acompanha o resultado da consulta', `Quando Cotacao entra na tela, o Effect chama fetch. resposta.ok indica se a resposta HTTP foi bem-sucedida. Mesmo assim, conferimos se o JSON traz uma cotação válida antes de atualizar o state. Cada estado produz um texto diferente, com carregamento, preço ou erro.

Use Ocultar e Mostrar para desmontar e montar Cotacao. Ao ocultar, o cleanup chama abort() pelo AbortController usado no fetch. Se uma resposta ou erro chegar depois do cancelamento, o teste de signal.aborted impede que altere a interface. Mostrar monta outra instância e inicia uma nova consulta.

A API é a fonte externa deste exemplo. O módulo 3 aprofunda HTTP, JSON e requisições, inclusive consultas que partem de um evento do usuário.`]

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
