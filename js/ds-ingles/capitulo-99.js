(() => {
  'use strict';

  const MBB = window.MBBIngles = window.MBBIngles || {};
  const choice = MBB.choice;

  function showChapter() {
    MBB.showLesson({
      unit:'Prática',
      technical:'leitura estratégica • interação • cultura digital • checagem • publicidade • arte • Englishes • pesquisa • autoria',
      title:'99 — Exercícios e desafios',
      objective:'<strong>Objetivo:</strong> integrar os conhecimentos dos capítulos 01–09 para compreender, interagir, verificar informações, interpretar, pesquisar e produzir em inglês com estratégia, clareza, criticidade e respeito à diversidade linguística.',
      html:`
        <section class="en-opening">
          <span class="lesson-kicker">Missão final da 1ª série</span>
          <div class="hero-box">
            <strong class="card-title">O projeto da turma recebeu um convite internacional.</strong>
            <p>Depois da feira, uma rede de escolas envia uma mensagem: <strong>“We would like to feature your student project in our International Student Tech Showcase.”</strong></p>
            <p>Para participar, a equipe precisa entender o convite, conversar com organizadores, preparar material digital, verificar informações, divulgar o projeto sem exageros, lidar com diferentes formas de inglês e apresentar uma pequena pesquisa que explique o problema que o aplicativo tenta resolver.</p>
            <p>Não existe uma única questão de “gramática” capaz de resolver tudo isso. Será necessário combinar <strong>estratégias de leitura, linguagem, evidências, contexto, comunicação e autoria</strong>.</p>
            <p class="central-question"><strong>Pergunta central:</strong> você consegue usar o inglês como ferramenta para agir em uma situação nova e complexa?</p>
          </div>
        </section>

        <div class="note-box">
          <strong class="card-title">Como usar este fechamento</strong>
          <p>Tente responder sem voltar aos capítulos. Quando errar, leia o feedback, identifique <strong>qual raciocínio faltou</strong> e só então revise o conteúdo relacionado. O objetivo não é decorar respostas: é aprender a decidir melhor.</p>
        </div>

        <h3>1. Antes de traduzir, descubra o que você precisa saber</h3>
        <div class="source-box">
          <strong class="card-title">Trecho do convite</strong>
          <p><strong>Submission deadline:</strong> October 18<br>
          <strong>Presentation:</strong> 4 minutes, live or prerecorded<br>
          <strong>Required:</strong> project summary, team information and one visual<br>
          <strong>Optional:</strong> source code link</p>
        </div>

        ${choice("1","Leitura estratégica","A equipe quer saber primeiro se ainda há tempo para participar. Qual estratégia é mais eficiente?",[
          ["a","Traduzir todas as palavras do convite antes de procurar a informação"],
          ["b","Fazer scanning procurando deadline, date e October 18"],
          ["c","Ignorar datas e ler apenas o título"]
        ],"b","Isso. Quando você procura uma informação específica, scanning permite localizar rapidamente palavras e dados relevantes.","Defina primeiro a informação desejada; depois procure marcas visuais, números e palavras-chave relacionadas.")}

        <h3>2. Skimming responde primeiro: “sobre o que é isso?”</h3>
        <p>A equipe abre uma página longa com regras da mostra e quer saber, em poucos segundos, se o documento trata de participação de estudantes, critérios de apresentação e envio de materiais.</p>

        ${choice("2","Skimming","Qual procedimento combina melhor com esse objetivo?",[
          ["a","Ler títulos, subtítulos, palavras recorrentes e primeiras informações para captar a ideia geral"],
          ["b","Procurar apenas uma data específica"],
          ["c","Traduzir cada preposição antes de continuar"]
        ],"a","Correto. Skimming constrói uma visão global antes de uma leitura mais detalhada.","Skimming não busca um único dado: busca o assunto, a organização e a ideia geral do texto.")}

        <h3>3. Você não precisa entender todas as palavras para agir</h3>
        <p>No regulamento aparece: <strong>“Teams may submit a prerecorded presentation if a live connection is not reliable.”</strong> Um aluno não conhece a palavra <em>reliable</em>, mas entende <em>prerecorded presentation</em>, <em>live connection</em> e a estrutura da frase.</p>

        ${choice("3","Inferência","Qual conclusão é mais adequada?",[
          ["a","Sem traduzir reliable é impossível compreender qualquer coisa"],
          ["b","O contexto sugere que uma apresentação gravada pode ser usada quando a conexão ao vivo não for suficientemente estável ou confiável"],
          ["c","A frase obriga todas as equipes a apresentar ao vivo"]
        ],"b","Isso. Pistas conhecidas permitem inferir o sentido necessário para a tarefa sem interromper a leitura a cada palavra.","Use o conjunto da frase e a situação para formular uma hipótese de sentido antes de recorrer ao dicionário.")}

        <h3>4. Comunicação também inclui reparar um mal-entendido</h3>
        <p>Durante uma reunião, o organizador diz rapidamente: <strong>“Your slot has been moved to thirteen thirty.”</strong> Um integrante da equipe não tem certeza se ouviu 13:30 ou 3:30.</p>

        ${choice("4","Interação","Qual resposta ajuda mais a evitar um erro?",[
          ["a","Pretender que entendeu para não interromper"],
          ["b","Sorry, could you confirm the time? Do you mean 1:30 p.m.?"],
          ["c","Yes, yes, perfect — sem confirmar"]
        ],"b","Correto. Pedir confirmação é uma estratégia comunicativa competente, não sinal de fracasso.","Quando uma informação é importante, reformular e confirmar é melhor do que fingir compreensão.")}

        <h3>5. Interface em inglês também exige decisão crítica</h3>
        <p>Ao preparar a versão de demonstração do aplicativo, surge a mensagem: <strong>“Allow access to precise location while using the app?”</strong></p>

        ${choice("5","Vida digital","Qual atitude é mais responsável?",[
          ["a","Permitir automaticamente porque a mensagem está em inglês"],
          ["b","Verificar se a função realmente precisa de localização precisa, entender o uso do dado e escolher a permissão adequada"],
          ["c","Concluir que toda permissão de localização é maliciosa"]
        ],"b","Isso. Compreender a interface é apenas o primeiro passo; a decisão precisa considerar necessidade, privacidade e finalidade.","Linguagem digital envolve compreensão + avaliação da ação que a interface solicita.")}

        <h3>6. Viral não significa verificado</h3>
        <p>Horas antes da apresentação, circula uma postagem: <strong>“Student map secretly stores every visitor's exact location.”</strong> A postagem tem milhares de compartilhamentos, mas não apresenta teste, documentação nem fonte técnica.</p>

        ${choice("6","Checagem","Qual deve ser o primeiro movimento da equipe?",[
          ["a","Responder que é mentira apenas porque prejudica o projeto"],
          ["b","Localizar a origem da alegação, consultar documentação e testes e buscar evidências independentes antes de concluir"],
          ["c","Aceitar como verdade porque a publicação é popular"]
        ],"b","Correto. A força de uma alegação depende das evidências, não do número de compartilhamentos nem do interesse da equipe em rejeitá-la.","Investigue origem, evidência, contexto e possibilidade de reprodução da alegação.")}

        <h3>7. Palavras jornalísticas podem mostrar o grau de certeza</h3>
        <p>Considere duas frases:</p>
        <div class="comparison-grid">
          <div class="mini-card"><strong>A</strong><p>The post <strong>claims</strong> that the app stores precise location data.</p></div>
          <div class="mini-card"><strong>B</strong><p>Independent tests <strong>confirm</strong> that the app stores precise location data.</p></div>
        </div>

        ${choice("7","Precisão","Qual diferença é mais importante?",[
          ["a","Claims apresenta uma alegação; confirms pressupõe evidência que sustenta a conclusão"],
          ["b","As duas expressões significam exatamente o mesmo"],
          ["c","Confirms sempre deve ser usado em manchetes, mesmo sem evidência"]
        ],"a","Isso. Escolher o verbo certo evita transformar uma alegação ainda não verificada em fato confirmado.","Observe como a linguagem pode aumentar ou reduzir o grau de certeza comunicado ao leitor.")}

        <h3>8. Persuadir não autoriza prometer o impossível</h3>
        <p>A equipe precisa criar um anúncio para a mostra. Três opções aparecem:</p>
        <div class="three-col">
          <div class="mini-card"><strong>A</strong><p>Find key rooms faster. Try our student-built school map.</p></div>
          <div class="mini-card"><strong>B</strong><p>The BEST app in the WORLD. It NEVER fails.</p></div>
          <div class="mini-card"><strong>C</strong><p>Click NOW or you will miss your only chance to survive school.</p></div>
        </div>

        ${choice("8","Publicidade","Qual versão persuade com mais responsabilidade?",[
          ["a","A"],
          ["b","B"],
          ["c","C"]
        ],"a","Correto. Ela apresenta um benefício plausível e uma chamada para ação sem promessa absoluta nem pressão desproporcional.","Compare benefício verificável, exagero e pressão emocional.")}

        <h3>9. Gramática ganha sentido quando muda a força da mensagem</h3>
        <p>Compare: <strong>“This version is easier to use”</strong> e <strong>“This is the easiest app ever created.”</strong></p>

        ${choice("9","Comparação e persuasão","Qual análise é mais cuidadosa?",[
          ["a","A primeira faz uma comparação; a segunda usa superlativo e uma afirmação muito mais forte, que exigiria evidência proporcional"],
          ["b","As duas frases fazem exatamente a mesma afirmação"],
          ["c","Superlativos transformam automaticamente propaganda em verdade"]
        ],"a","Isso. Comparativos e superlativos não são apenas formas gramaticais: eles alteram a intensidade e o compromisso da afirmação.","Pergunte o que a forma linguística faz na situação e quanta evidência seria necessária para sustentá-la.")}

        <h3>10. Arte pede interpretação com evidência</h3>
        <div class="source-box">
          <strong class="card-title">Texto original para a atividade</strong>
          <p><em>We built a map for crowded halls,<br>
          but every path began with someone lost.</em></p>
          <p><small>Trecho original produzido para esta atividade.</small></p>
        </div>

        ${choice("10","Interpretação","Qual leitura é melhor sustentada pelo trecho?",[
          ["a","O texto fala apenas sobre desenhar linhas geométricas"],
          ["b","O projeto nasce de uma necessidade humana concreta: pessoas que se perdem e precisam encontrar caminhos"],
          ["c","O texto prova que o autor se perdeu pessoalmente em uma escola"]
        ],"b","Correto. A relação entre map, paths e someone lost permite interpretar o projeto como resposta a uma experiência de desorientação.","Interprete o conjunto e use as palavras do texto como evidência; não invente biografia do autor.")}

        <h3>11. “I” em uma obra não é prova biográfica</h3>
        <p>Uma canção apresentada por outra escola começa com: <strong>“I crossed three cities before I found a place to stay.”</strong></p>

        ${choice("11","Voz e autoria","O que é seguro afirmar apenas com esse verso?",[
          ["a","A voz da canção fala em primeira pessoa sobre deslocamento"],
          ["b","O compositor necessariamente viveu exatamente essa experiência"],
          ["c","A frase é falsa se o compositor nunca mudou de cidade"]
        ],"a","Isso. A voz da obra é uma construção textual; biografia exige outras fontes.","Separe quem fala dentro da obra de quem a produziu no mundo real.")}

        <h3>12. Inglês internacional não pertence a um único sotaque</h3>
        <p>Na mostra, estudantes do Brasil, Índia, África do Sul e Canadá conversam em inglês. Há diferenças de pronúncia, ritmo e escolhas de palavras, mas a comunicação funciona.</p>

        ${choice("12","Englishes","Qual princípio orienta melhor essa situação?",[
          ["a","Apenas quem imita um sotaque específico pode participar"],
          ["b","Inteligibilidade, negociação de sentido e respeito à diversidade são mais importantes do que apagar toda marca de origem"],
          ["c","Diferenças de pronúncia provam que alguém não sabe inglês"]
        ],"b","Correto. Em contextos internacionais, o inglês funciona muitas vezes como língua franca entre pessoas com repertórios diversos.","Diferencie sotaque de falta de conhecimento e valorize estratégias que mantêm a comunicação compreensível.")}

        <h3>13. Diversidade não elimina adequação ao contexto</h3>
        <p>Um aluno escreve ao coordenador internacional: <strong>“hey bro, gonna send the stuff later lol”</strong>.</p>

        ${choice("13","Registro","Qual revisão é mais adequada ao contexto?",[
          ["a","Hello, I will send the requested materials later today. Thank you."],
          ["b","Manter exatamente a mensagem porque toda variedade serve igualmente em qualquer situação"],
          ["c","Eliminar qualquer marca de cordialidade e enviar apenas SEND LATER"]
        ],"a","Isso. Reconhecer diversidade linguística não significa ignorar público, propósito e grau de formalidade.","A pergunta não é qual inglês é superior, mas qual registro funciona melhor nesta situação comunicativa.")}

        <h3>14. Pesquisa começa com uma pergunta que possa ser investigada</h3>
        <p>Para justificar o projeto, a equipe escreve: <strong>“Technology is good for schools?”</strong></p>

        ${choice("14","Pergunta de pesquisa","Qual versão produz um foco mais pesquisável?",[
          ["a","Is technology good?"],
          ["b","How can digital wayfinding tools help first-time visitors navigate large school campuses?"],
          ["c","Why is our app the best?" ]
        ],"b","Correto. A pergunta define tecnologia, público, situação e problema, permitindo buscas e evidências mais relevantes.","Perguntas pesquisáveis evitam temas vagos e conclusões já embutidas na própria pergunta.")}

        <h3>15. Parafrasear não é trocar algumas palavras</h3>
        <p>Uma fonte afirma: <strong>“Clear navigation signs can reduce uncertainty for first-time visitors.”</strong> Um aluno escreve: <strong>“Clear navigation signs can decrease uncertainty for first-time visitors.”</strong></p>

        ${choice("15","Paráfrase e autoria","Qual avaliação é mais adequada?",[
          ["a","A troca de reduce por decrease basta para tornar a ideia completamente autoral"],
          ["b","A reformulação continua muito próxima da estrutura original; é melhor reconstruir a ideia com organização própria e indicar a fonte"],
          ["c","Nenhuma ideia lida em outra fonte pode ser usada em pesquisa"]
        ],"b","Isso. Paráfrase exige compreensão e reconstrução, e a autoria da ideia continua precisando ser rastreável.","Trocar sinônimos não resolve sozinho o problema de dependência textual nem elimina a necessidade de atribuição.")}

        <h3>16. IA pode apoiar o processo, mas não assumir a responsabilidade</h3>
        <p>Um integrante pede a uma IA: <strong>“Write our research conclusion and invent sources that support it.”</strong></p>

        ${choice("16","IA e pesquisa","Qual uso seria mais responsável?",[
          ["a","Aceitar fontes inventadas se o texto estiver convincente"],
          ["b","Usar IA para ajudar a organizar perguntas, revisar clareza ou sugerir termos de busca, verificando dados e fontes reais antes de publicar"],
          ["c","Copiar a resposta da IA e remover qualquer indicação de que houve apoio"]
        ],"b","Correto. Ferramentas podem apoiar etapas do trabalho, mas verificação, autoria e responsabilidade pelas afirmações continuam humanas.","Nunca trate uma saída gerada como fonte automática de evidência. Verifique informações, documentos e referências.")}

        <h3>17. A melhor apresentação integra linguagem, evidência e público</h3>
        <p>A equipe dispõe de quatro minutos para apresentar o projeto a estudantes internacionais. Qual plano reúne melhor o que foi aprendido?</p>

        ${choice("17","Integração final","Qual estratégia é mais completa?",[
          ["a","Ler um texto longo em inglês o mais rápido possível e evitar perguntas"],
          ["b","Apresentar o problema, explicar a solução com linguagem clara, mostrar uma evidência ou demonstração, adaptar vocabulário ao público, confirmar compreensão quando necessário e indicar limites do projeto"],
          ["c","Usar o máximo possível de palavras difíceis para parecer fluente"]
        ],"b","Isso. Comunicação competente combina propósito, clareza, evidência, interação, adequação e honestidade sobre limites.","Fluência não é exibir complexidade; é conseguir realizar a tarefa comunicativa com clareza e responsabilidade.")}

        <section class="chapter-checkpoint">
          <span class="lesson-kicker">Desafios de transferência</span>
          <h3>18. Agora produza sem alternativas</h3>
          <p>Os desafios abaixo usam situações novas. Eles verificam se você consegue transferir estratégias, e não apenas reconhecer respostas.</p>

          <div class="challenge-box">
            <strong class="card-title">Desafio A — Convite sob pressão</strong>
            <p>Encontre um regulamento, chamada, evento, competição, curso ou oportunidade real que tenha alguma informação em inglês. Sem traduzir tudo:</p>
            <ol>
              <li>faça um skimming e explique o assunto geral;</li>
              <li>use scanning para localizar três informações específicas;</li>
              <li>selecione duas palavras desconhecidas e tente inferi-las pelo contexto antes de consultar uma ferramenta;</li>
              <li>registre o que ainda ficaria inseguro sem uma leitura mais detalhada.</li>
            </ol>
            <details><summary>Critério de qualidade</summary><p>Mostre a estratégia usada e diferencie informação localizada, inferência e dúvida ainda não resolvida.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio B — Conversa que precisa funcionar</strong>
            <p>Em dupla, simule uma chamada de dois minutos entre uma equipe brasileira e um parceiro internacional. A conversa deve incluir:</p>
            <ul>
              <li>uma apresentação curta do projeto;</li>
              <li>uma pergunta real;</li>
              <li>um pedido de repetição ou esclarecimento;</li>
              <li>uma confirmação de informação importante;</li>
              <li>uma despedida adequada ao contexto.</li>
            </ul>
            <details><summary>Critério de qualidade</summary><p>O objetivo não é falar sem erros. É manter a interação, reparar falhas e garantir compreensão suficiente para realizar a tarefa.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio C — Da publicação viral à comunicação responsável</strong>
            <p>Escolha uma alegação pública em inglês relacionada a tecnologia, educação, ciência ou cultura. Produza uma ficha com:</p>
            <ol>
              <li>a alegação original;</li>
              <li>a fonte e a data;</li>
              <li>uma fonte primária ou evidência mais próxima do fato;</li>
              <li>uma fonte independente de comparação;</li>
              <li>um veredito proporcional às evidências: <em>supported, unsupported, misleading, unclear</em> ou outro rótulo explicado por você;</li>
              <li>uma frase curta em inglês que comunique o resultado sem exagerar a certeza.</li>
            </ol>
            <details><summary>Critério de qualidade</summary><p>Popularidade não vale como prova. O texto final precisa separar claramente alegação, evidência e conclusão.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio D — Uma voz, vários públicos</strong>
            <p>Crie uma pequena apresentação cultural ou pessoal em inglês — pode ser sobre uma música autoral, um jogo, uma história local, um hobby ou uma experiência escolar. Depois adapte a mesma ideia para:</p>
            <ul>
              <li>um colega da sua turma;</li>
              <li>um estudante de outro país que usa inglês como língua adicional;</li>
              <li>um professor ou organizador de evento.</li>
            </ul>
            <p>Explique o que você mudou em vocabulário, registro, referências culturais e nível de explicação.</p>
            <details><summary>Critério de qualidade</summary><p>Preserve sua identidade, mas ajuste a comunicação para aumentar inteligibilidade e adequação sem ridicularizar sotaques ou variedades.</p></details>
          </div>

          <div class="challenge-box">
            <strong class="card-title">Desafio E — Mini projeto final: Research → Create → Share</strong>
            <p>Escolha um pequeno problema real da escola ou da comunidade que possa ser investigado com apoio de fontes em inglês. Produza um pacote final contendo:</p>
            <ol>
              <li><strong>Research question:</strong> uma pergunta específica;</li>
              <li><strong>Search plan:</strong> palavras-chave e pelo menos duas buscas refinadas;</li>
              <li><strong>Sources:</strong> duas ou três fontes identificadas e avaliadas;</li>
              <li><strong>Notes:</strong> anotações em suas próprias palavras, mantendo rastreabilidade;</li>
              <li><strong>Conclusion:</strong> 4 a 6 frases proporcionais às evidências;</li>
              <li><strong>Product:</strong> escolha um formato — pôster, página, vídeo curto, apresentação ou infográfico;</li>
              <li><strong>Communication check:</strong> revise público, clareza, acessibilidade, autoria, privacidade e possíveis exageros.</li>
            </ol>
            <details><summary>Critério de qualidade</summary><p>O produto final deve mostrar o caminho da investigação. Uma conclusão simples e verificável vale mais do que uma afirmação espetacular sem evidência.</p></details>
          </div>
        </section>

        <div class="ok-box">
          <strong class="card-title">Fechamento da 1ª série</strong>
          <p><strong>Entender:</strong> inglês é linguagem em uso — aparece em situações, textos, interfaces, mídias, culturas e relações entre pessoas.</p>
          <p><strong>Experimentar:</strong> leia com estratégia, escute, interaja, compare formas de dizer e teste maneiras de se fazer compreender.</p>
          <p><strong>Analisar:</strong> investigue contexto, fonte, evidência, intenção, registro, escolhas linguísticas e limites de uma interpretação.</p>
          <p><strong>Aplicar:</strong> use o inglês para aprender, colaborar, pesquisar, criar e participar do mundo com clareza, criticidade, autoria e respeito.</p>
        </div>
      `
    });
  }

  MBB.enableChapter('99 Exercícios', showChapter);
})();