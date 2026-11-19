(function () {
  const arquivosId = 19;
  const tecnicasId = 20;
  const arquivosExercicios = 'visualg-exercicios-arquivos';
  const tecnicasExercicios = 'visualg-exercicios-tecnicas';

  const arquivos = {
    id: arquivosId,
    menu: '11.1 Arquivos',
    title: '11.1 — Arquivos de texto no VisuAlg',
    objective: 'Gravar entradas em um .txt e reutilizá-las para repetir testes.',
    theoryPage: true,
    content: `<div class="theory-page">
      <h3>Como repetir um teste com os mesmos dados?</h3>
      <p>Uma equipe mediu o tempo de três entregas. Você corrigiu o cálculo do tempo total e quer rodar o algoritmo de novo com os mesmos valores. O comando <code>arquivo</code> permite guardar as entradas uma vez e reaproveitá-las nas próximas execuções.</p>
      <p>Declare <code>arquivo "tempos-entregas.txt"</code> depois do nome do algoritmo, antes de <code>var</code>. O <code>leia</code> recebe os valores, um de cada vez. Na primeira execução, se o arquivo ainda não existe, o VisuAlg grava o que você digita. Quando o arquivo já existe, o <code>leia</code> usa os valores gravados na mesma ordem. As mensagens de <code>escreva</code> e <code>escreval</code> aparecem na tela.</p>
      <pre>algoritmo "Tempos de entrega"
arquivo "tempos-entregas.txt"
var
   entrega, minutos, total: inteiro
inicio
   total &lt;- 0
   para entrega de 1 ate 3 faca
      escreva("Minutos da entrega ", entrega, ": ")
      leia(minutos)
      total &lt;- total + minutos
   fimpara
   escreval("Tempo total: ", total, " minutos")
fimalgoritmo</pre>
      <ol>
        <li>Copie o algoritmo, salve-o como <code>tempos-entregas.alg</code> e execute com F9. Para a primeira execução, use um nome de <code>.txt</code> ainda livre. Digite 12, 8 e 15, confirmando cada valor. O total esperado é 35 minutos.</li>
        <li>No Explorador de Arquivos, procure <code>tempos-entregas.txt</code> na pasta de trabalho do VisuAlg, normalmente onde está o executável. Se tiver dificuldade para localizar o arquivo, escreva entre aspas o caminho completo para uma pasta em que você possa gravar arquivos. Abra o <code>.txt</code> no Bloco de Notas e confira a ordem dos valores. O <code>.alg</code> contém as instruções e o <code>.txt</code> contém as entradas.</li>
        <li>Execute outra vez. O <code>para</code> continua chamando <code>leia</code> três vezes e o total deve continuar sendo 35, agora com as entradas do arquivo.</li>
        <li>Salve uma cópia do <code>.txt</code> com outro nome e deixe apenas os dois primeiros valores. Use o novo nome na declaração. Preveja em qual leitura o teclado será solicitado. Digite 10 quando o arquivo terminar e confira o novo total de 30 minutos.</li>
      </ol>
      <p>Use esse procedimento sempre que quiser comparar a saída de duas versões do mesmo algoritmo ou repetir um caso que revelou um erro.</p>
      <button type="button" class="btn-copy" data-visualg-exercise="${arquivosExercicios}">Pratique com os exercícios de Arquivos</button>
    </div>`
  };

  const tecnicas = {
    id: tecnicasId,
    menu: '17 Técnicas de Programação',
    title: '17 — Técnicas de Programação',
    objective: 'Reconhecer, combinar e testar soluções que se repetem em problemas diferentes.',
    theoryPage: true,
    content: `<div class="theory-page">
      <h3>Do enunciado à solução</h3>
      <p>Antes de programar, escreva três coisas: quais dados chegam, que decisões ou cálculos transformam esses dados e qual resposta precisa sair. Divida a tarefa em etapas e faça um teste de mesa, anotando as variáveis que mudam a cada leitura. As perguntas a seguir ajudam a escolher o que o algoritmo precisa guardar.</p>

      <h3>Quantos atendimentos passaram do prazo? Qual foi a espera média?</h3>
      <p>Um posto quer resumir a espera de quatro atendimentos. A pergunta “quantos?” pede um contador. A média pede um acumulador para somar os tempos e uma divisão pela quantidade. Ambos começam em zero porque, antes da primeira leitura, nenhum atendimento foi contado e nenhum minuto foi somado. Para contar apenas atrasos, atualize o contador dentro da condição.</p>
      <pre>algoritmo "Espera no atendimento"
var
   i, minutos, soma, atrasados: inteiro
inicio
   soma &lt;- 0
   atrasados &lt;- 0
   para i de 1 ate 4 faca
      leia(minutos)
      soma &lt;- soma + minutos
      se minutos &gt; 15 entao
         atrasados &lt;- atrasados + 1
      fimse
   fimpara
   escreval("Acima de 15 minutos: ", atrasados)
   escreval("Media em minutos: ", soma / 4)
fimalgoritmo</pre>
      <p>Com 10, 15, 20 e 35, a soma passa por 10, 25, 45 e 80. O contador passa por 0, 0, 1 e 2. A média é 20 minutos. Se o pedido passar a ser a média só dos atrasados, some apenas os tempos aceitos pelo filtro, divida pela quantidade de atrasados e trate o caso de nenhum atraso antes de dividir. Esse raciocínio também serve para totais de vendas e relatórios de frequência.</p>

      <h3>Quais foram as temperaturas extremas e quando ocorreram?</h3>
      <p>Uma estação registrou três temperaturas. Para achar o maior e o menor valores, guarde a primeira leitura como referência para os dois. Começar o máximo em zero daria uma resposta errada se todas as temperaturas fossem negativas. Guarde junto a posição de cada extremo. Neste exemplo, a regra de empate é conservar a primeira ocorrência, então a posição só muda quando o valor melhora o extremo.</p>
      <pre>algoritmo "Extremos da estacao"
var
   i, posMaior, posMenor: inteiro
   temperatura, maior, menor: real
inicio
   leia(temperatura)
   maior &lt;- temperatura
   menor &lt;- temperatura
   posMaior &lt;- 1
   posMenor &lt;- 1
   para i de 2 ate 3 faca
      leia(temperatura)
      se temperatura &gt; maior entao
         maior &lt;- temperatura
         posMaior &lt;- i
      fimse
      se temperatura &lt; menor entao
         menor &lt;- temperatura
         posMenor &lt;- i
      fimse
   fimpara
   escreval("Maior: ", maior, " na leitura ", posMaior)
   escreval("Menor: ", menor, " na leitura ", posMenor)
fimalgoritmo</pre>
      <table>
        <caption>Teste de mesa das temperaturas</caption>
        <thead><tr><th scope="col">Leitura</th><th scope="col">Valor</th><th scope="col">Maior (posição)</th><th scope="col">Menor (posição)</th></tr></thead>
        <tbody><tr><td>1</td><td>−8</td><td>−8 (1)</td><td>−8 (1)</td></tr><tr><td>2</td><td>−3</td><td>−3 (2)</td><td>−8 (1)</td></tr><tr><td>3</td><td>−3</td><td>−3 (2)</td><td>−8 (1)</td></tr></tbody>
      </table>
      <p>Altere a comparação do máximo para <code>&gt;=</code> e preveja a nova posição. Para informar todos os empatados, pode ser necessário guardar as leituras e percorrê-las novamente. A mesma técnica serve para identificar o menor tempo de uma prova ou a maior venda do dia.</p>

      <h3>O valor informado é válido? Em qual faixa ele entra?</h3>
      <p>Um almoxarifado aceita quantidades de 0 a 100. Dentro dessa faixa, um saldo até 10 exige reposição. Primeiro valide a entrada. Só então classifique o saldo. O <code>ou</code> aceita qualquer uma das duas razões para rejeitar o valor. O <code>e</code> exige as duas condições de validade ao mesmo tempo.</p>
      <pre>algoritmo "Saldo de estoque"
var
   saldo: inteiro
inicio
   repita
      escreva("Saldo de 0 a 100: ")
      leia(saldo)
      se (saldo &lt; 0) ou (saldo &gt; 100) entao
         escreval("Saldo invalido")
      fimse
   ate (saldo &gt;= 0) e (saldo &lt;= 100)
   se saldo &lt;= 10 entao
      escreval("Solicitar reposicao")
   senao
      escreval("Estoque suficiente")
   fimse
fimalgoritmo</pre>
      <p>Digite −1, 101 e 10 na mesma execução. As duas primeiras entradas são recusadas e 10 é aceito com reposição. Em execuções separadas, confira 0, 11 e 100. Validar antes de classificar também serve para formulários, notas e tamanhos de pedidos.</p>

      <h3>O código apareceu? Quantas vezes?</h3>
      <p>Em uma conferência de remessas, cada código é positivo e o zero encerra o lote. Esse valor de controle é a <strong>sentinela</strong>. Leia antes do <code>enquanto</code> para que um lote vazio termine imediatamente. A variável lógica <code>encontrado</code> é um indicador: começa falsa e passa a verdadeira ao localizar o código procurado. Para saber quantas vezes ele apareceu, continue até a sentinela.</p>
      <pre>algoritmo "Conferencia de remessas"
var
   codigo, ocorrencias: inteiro
   encontrado: logico
inicio
   ocorrencias &lt;- 0
   encontrado &lt;- falso
   leia(codigo)
   enquanto codigo &lt;&gt; 0 faca
      se codigo = 42 entao
         encontrado &lt;- verdadeiro
         ocorrencias &lt;- ocorrencias + 1
      fimse
      leia(codigo)
   fimenquanto
   se encontrado entao
      escreval("Codigo localizado. Ocorrencias: ", ocorrencias)
   senao
      escreval("Codigo ausente")
   fimse
fimalgoritmo</pre>
      <p>Com 7, 42, 42 e 0, o resultado é duas ocorrências. Com 0 logo no início, o resultado é código ausente. Neste algoritmo, a contagem também permite descobrir se houve ocorrência. Se o pedido for apenas saber se o código apareceu, a busca pode terminar no primeiro encontro. Se houver um limite de tentativas, conte cada tentativa e pare ao obter sucesso ou alcançar o limite.</p>

      <h3>Quando desistir de uma tentativa?</h3>
      <p>Um operador pode tentar confirmar um código de retirada até três vezes. Comece com zero tentativas e confirme se o código está correto a cada leitura. O indicador <code>confirmado</code> guarda essa resposta. A repetição termina assim que houver confirmação ou que a terceira tentativa for feita.</p>
      <pre>algoritmo "Confirmar retirada"
var
   codigo, tentativas: inteiro
   confirmado: logico
inicio
   tentativas &lt;- 0
   repita
      leia(codigo)
      tentativas &lt;- tentativas + 1
      confirmado &lt;- (codigo = 27)
   ate confirmado ou (tentativas = 3)
   se confirmado entao
      escreval("Retirada confirmada")
   senao
      escreval("Limite de tentativas atingido")
   fimse
fimalgoritmo</pre>
      <p>Teste 27 na primeira tentativa, depois 10, 11 e 27 em uma nova execução. Nos dois casos, há confirmação. Com 10, 11 e 12, o limite é atingido. Essa lógica também serve para limitar novas tentativas de uma operação que pode falhar.</p>

      <h3>Como colocar dois valores na ordem certa?</h3>
      <p>Um monitor recebe dois horários representados em minutos, mas eles podem chegar fora da ordem. Quando o primeiro for maior, passe seu valor para <code>temporario</code> antes de substituí-lo. Essa variável conserva o valor que ainda precisa ser usado.</p>
      <pre>algoritmo "Ordenar dois horarios"
var
   primeiro, segundo, temporario: inteiro
inicio
   leia(primeiro, segundo)
   se primeiro &gt; segundo entao
      temporario &lt;- primeiro
      primeiro &lt;- segundo
      segundo &lt;- temporario
   fimse
   escreval("Ordem: ", primeiro, ", ", segundo)
fimalgoritmo</pre>
      <p>Com 90 e 30, o temporário guarda 90, o primeiro passa a 30 e o segundo recebe 90. Teste também 30 e 90, e 30 e 30. A mesma troca pode ser usada para ordenar dois limites ou para trocar posições de valores em um vetor.</p>

      <h3>Quando guardar dados ou dividir o algoritmo em partes?</h3>
      <p>Quando basta calcular um total ou extremo em uma passagem, use as variáveis do exemplo. Se precisar consultar cada leitura depois, retome Vetores. Se os dados tiverem duas dimensões, como corredores e prateleiras de um depósito, retome Matrizes: o laço externo escolhe o corredor e o interno percorre suas prateleiras. Se o mesmo cálculo reaparecer em vários pontos, retome Funções e Modularização para dar nome a essa tarefa e reaproveitá-la. A atividade do boletim no Tópico 99 combina esses recursos.</p>
      <button type="button" class="btn-copy" data-visualg-exercise="${tecnicasExercicios}">Pratique com os exercícios de Técnicas de Programação</button>
    </div>`
  };

  const exercises = steps.find((step) => step.id === 99);
  const holder = document.createElement('div');
  holder.innerHTML = exercises.content;
  const challenge = Array.from(holder.querySelectorAll('.exercise-level')).find(
    (section) => /^Nível 7\s*[—-]\s*Desafios/i.test(section.querySelector('h3')?.textContent.trim())
  );
  const beforeChallenges = exerciseLevels.findIndex((level) => level.id === 'visualg-nivel-7');

  challenge.insertAdjacentHTML('beforebegin', `
    <section class="exercise-level" id="${arquivosExercicios}">
      <h3>Arquivos</h3>
      <ol>
        <li>Crie um algoritmo que leia quatro quantidades de livros devolvidos e mostre o total. Grave 3, 7, 0 e 4 em <code>devolucoes.txt</code> durante a primeira execução. Confira os dados no arquivo e execute outra vez com as mesmas entradas.</li>
        <li>Crie um algoritmo que leia três quantidades de envelopes recebidos e informe o total. Faça uma execução com um <code>.txt</code> que contenha apenas 5 e 8. Identifique qual entrada foi solicitada pelo teclado e forneça 2 para concluir.</li>
        <li>Crie um algoritmo que leia quatro resultados de uma vistoria, com 1 para aprovado e 0 para reprovado, e informe quantos itens foram aprovados. Execute com um arquivo em que todos os itens foram aprovados e com outro em que nenhum foi aprovado.</li>
      </ol>
    </section>
    <section class="exercise-level" id="${tecnicasExercicios}">
      <h3>Técnicas de Programação</h3>
      <h4>Básico</h4>
      <ol>
        <li>Leia a quantidade de mudas plantadas em cada um de cinco canteiros. Informe o total plantado e quantos canteiros ficaram vazios.</li>
        <li>Leia dois números de página e mostre-os em ordem decrescente. Teste com os números nas duas ordens e com páginas iguais.</li>
        <li>Peça uma distância de 1 a 30 quilômetros até receber um valor válido. Informe se a entrega pertence à faixa de até 10 km ou à faixa acima de 10 km.</li>
      </ol>
      <h4>Intermediário</h4>
      <ol>
        <li>Leia os tempos positivos de seis atletas na ordem de inscrição. Informe o menor tempo e a posição do primeiro atleta a registrá-lo. Repita o teste com um <code>.txt</code> que contenha empate no menor tempo.</li>
        <li>Leia oito códigos de material. Informe se o código 25 aparece e quantas vezes aparece. Teste com o código na primeira posição, na última e com um conjunto em que ele esteja ausente.</li>
        <li>Simule até quatro tentativas de encaixar uma peça. A cada tentativa, leia 1 para encaixou ou 0 para falhou. Encerre ao encaixar ou atingir o limite e informe o resultado e a quantidade de tentativas.</li>
        <li>Leia os valores de pedidos pagos até receber zero. Informe quantos pedidos ultrapassaram cem reais e o valor médio desses pedidos. Se nenhum passar desse limite, mostre uma mensagem informando isso.</li>
      </ol>
      <h4>Desafio</h4>
      <ol>
        <li>Uma cooperativa registra a variação inteira do estoque por turno. Leia os registros até receber o código de encerramento 999. Aceite variações de −100 a 100 e peça novamente os valores fora dessa faixa, exceto o código de encerramento. Informe quantos turnos tiveram perda, a variação total e a posição do primeiro turno com a maior variação. Se nenhum turno for registrado, mostre uma mensagem. Prepare arquivos para testar empate, dados só com perdas e encerramento imediato.</li>
      </ol>
    </section>`);
  exercises.content = holder.innerHTML;
  exerciseLevels.splice(beforeChallenges, 0,
    { id: arquivosExercicios, label: 'Arquivos' },
    { id: tecnicasExercicios, label: 'Técnicas de Programação' }
  );

  const repetitionIndex = steps.findIndex((step) => step.menu === '11 Enquanto');
  steps.splice(repetitionIndex + 1, 0, arquivos);
  steps.splice(steps.indexOf(exercises), 0, tecnicas);

  menu.querySelectorAll('.nav-btn, .nav-group').forEach((item) => item.remove());
  buildMenu();

  document.getElementById('workspace').addEventListener('click', (event) => {
    const button = event.target.closest('[data-visualg-exercise]');
    if (button) {
      goToExerciseLevel(button.dataset.visualgExercise);
      const heading = document.getElementById(button.dataset.visualgExercise)?.querySelector('h3');
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
  });
})();
