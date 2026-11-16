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

    'mbb-react-scrollview': ['ScrollView resolve o problema de conteúdo que ultrapassa a tela', `Quando aumentamos a quantidade de conteúdo, surge um limite físico: a tela do celular tem altura finita.

ScrollView cria uma região rolável. Tudo o que colocamos como filho dentro dela passa a fazer parte desse conteúdo que continua para baixo.

contentContainerStyle estiliza o container interno que reúne os filhos da rolagem.

Para conteúdo pequeno e controlado, ScrollView é simples e adequado. Quando o problema passa a ser uma lista grande ou dinâmica, FlatList entra por uma necessidade diferente.`],

    'mbb-react-flatlist': ['FlatList: quando o problema é uma lista de dados', `ScrollView mostrou como tornar uma área rolável. FlatList parte de outra necessidade: exibir uma coleção de dados que pode crescer.

data recebe o array; renderItem explica como cada item vira interface; keyExtractor informa como obter uma identidade estável para cada registro.

CartaoClima continua sendo reutilizado. FlatList não substitui o componente: ela organiza a forma de percorrer e renderizar a coleção.

É um bom exemplo de composição: os dados ficam no array, FlatList administra a lista e CartaoClima cuida de como cada item aparece.`],

    'mbb-react-pressable': ['Pressable transforma uma área personalizada em interação', `Button resolve ações simples, mas às vezes queremos que um cartão inteiro, uma linha ou outra área personalizada responda ao toque.

Pressable envolve o conteúdo que deve ser interativo e recebe onPress.

No exemplo, abrirDetalhes ainda apenas registra uma mensagem. O objetivo é separar duas responsabilidades: o cartão define a aparência; Pressable acrescenta comportamento de interação.

Essa escolha faz sentido quando precisamos de mais controle visual e estrutural do que um Button pronto oferece.`],

    'mbb-react-pressed': ['O próprio estado do toque pode influenciar o estilo', `Pressable também informa se está sendo pressionado naquele instante. É daí que vem pressed.

Em style={({ pressed }) => [...]}, pressed é fornecido pelo próprio Pressable. Enquanto o toque está ativo ele é verdadeiro; depois volta a ser falso.

pressed && styles.botaoPressionado reaproveita a lógica condicional: o segundo estilo só entra quando a condição é verdadeira.

A aparência passa a ser consequência do estado atual da interação, em vez de ser alterada manualmente por comandos separados.`],

    'state-11-useref': ['useRef: acessar um elemento sem transformar isso em state', `O formulário já limpa os campos e esconde o resultado. Agora queremos devolver o cursor ao primeiro TextInput depois de tocar em Limpar. Esse problema não é um valor que precisa aparecer na interface; precisamos de uma referência ao próprio campo.

useRef(null) cria a referência. ref={campoNota1} liga a referência ao TextInput. Depois, campoNota1.current?.focus() pede foco ao elemento referenciado.

current guarda o valor atual da referência. O ?. evita tentar executar focus() se a referência ainda não estiver disponível.

Compare com useState: alterar state participa da renderização. Alterar current em uma ref não provoca uma nova renderização. Por isso useRef é adequado para foco e referências a elementos.`],

    'mbb-react-ref-avancar': ['A mesma referência pode melhorar o fluxo entre campos', `Agora aplicamos useRef a uma situação de experiência do usuário: ao terminar a Nota 1, o foco avança para a Nota 2.

A referência é ligada ao segundo TextInput. O evento onSubmitEditing do primeiro chama campoNota2.current?.focus().

Perceba como conceitos diferentes trabalham juntos: o evento diz QUANDO agir; a ref informa QUAL elemento deve receber a ação; focus() executa a operação.

Não precisamos criar state apenas para controlar esse foco.`],

    'state-12-final': ['Consolidação: várias peças formando um comportamento único', `A Média Escolar final reúne conceitos que foram apresentados separadamente.

O evento de Calcular chama calcularMedia. A função valida as notas e usa if/else para decidir a situação. O JSX mostra o resultado apenas quando existe uma média. Limpar apaga campos, resultado e mensagem, e useRef devolve o foco à primeira nota.

Nenhum desses recursos existe isoladamente em um aplicativo real. Cada peça mantém uma responsabilidade e, juntas, formam o comportamento da tela.

Tente explicar o fluxo sem olhar o código: o que acontece quando o usuário digita, calcula e depois limpa? Se esse caminho estiver claro, os Hooks deixam de parecer comandos soltos.`],

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
