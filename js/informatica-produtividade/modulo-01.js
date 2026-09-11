window.produtividadeLessons = [
  {
    id: 'organizacao-diagnostico',
    number: '00',
    menuTitle: 'A pasta que ninguém entrega',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Diagnóstico inicial · fonte, estado e impacto',
    title: 'A pasta que ninguém consegue entregar',
    objective: 'Observar um conjunto de arquivos sem apagar pistas nem concluir pela aparência dos nomes.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 8h15 · Escola Horizonte</span>
        <h2>Faltam dez dias para a Feira de Projetos, mas ninguém consegue dizer com segurança quais arquivos estão prontos.</h2>
        <p>Marina, da secretaria, recebeu inscrições no computador <strong>SEC-03</strong>. Paulo, da coordenação, enviou correções. Lia, monitora do laboratório, reuniu o material em <strong>LAB-04</strong>. Você vai ajudar Lia a organizar esse trabalho.</p>
        <p>Na pasta aparecem arquivos reais do pacote da atividade, como <code>inscricoes nova.csv</code>, <code>cronograma NOVO.txt</code> e <code>orcamento_final_agora.csv</code>. Palavras como <em>nova</em>, <em>NOVO</em> e <em>final_agora</em> parecem indicar algo mais recente ou definitivo, mas o nome sozinho não prova isso.</p>
      </div>

      <h3>O problema de hoje</h3>
      <p>Lia recebe uma orientação curta: <strong>“Organize essa pasta para a Feira.”</strong> Antes de mover, apagar ou renomear qualquer coisa, precisamos descobrir o que realmente chegou.</p>

      <section class="decision-box">
        <h3>Primeiro, pense</h3>
        <p>Qual ação preserva melhor o material recebido?</p>
        <div class="choice-list" data-choice data-answer="c" data-explanation="A cópia de trabalho permite investigar sem alterar o pacote recebido. O nome de um arquivo é uma pista, não uma prova de aprovação.">
          <label><input type="radio" name="d00" value="a"> excluir os arquivos que parecem repetidos;</label>
          <label><input type="radio" name="d00" value="b"> escolher <code>orcamento_final_agora.csv</code> porque o nome parece indicar que está pronto;</label>
          <label><input type="radio" name="d00" value="c"> guardar o pacote recebido e investigar usando uma cópia.</label>
          <button class="action-button" type="button" data-check-choice>Conferir decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Preservar o material original, trabalhar em uma cópia e registrar o que chegou sem tentar resolver todas as dúvidas de uma vez.</p></div>

      <h3>Faça comigo · preserve o original</h3>
      <div class="task-box">
        <ol>
          <li>Baixe o <a href="../downloads/informatica-produtividade/caixa-entrada-feira.zip" download>pacote da Feira de Projetos</a>. Ele contém apenas dados didáticos fictícios.</li>
          <li>Localize o ZIP em <strong>Downloads</strong>. Pense nele como a embalagem em que o material chegou.</li>
          <li>Não renomeie, apague nem altere o ZIP.</li>
          <li>No Windows, clique com o botão direito e escolha <strong>Extrair Tudo</strong>. Em outro sistema, use a opção equivalente.</li>
          <li>A partir daqui, investigue somente a pasta extraída.</li>
        </ol>
      </div>
      <div class="evidence-box"><strong>Antes de continuar</strong><p>Você deve ter duas coisas: o ZIP original intacto e uma pasta extraída para o trabalho. Se apagou o ZIP, baixe-o novamente antes de continuar.</p></div>

      <h3>Faça comigo · descubra o que chegou</h3>
      <p>Abra primeiro <code>LEIA-ME.txt</code>. Depois observe os demais nomes sem mover, renomear ou excluir nada.</p>
      <div class="artifact-card">
        <strong>Você deve encontrar exatamente estes oito itens</strong>
        <ul>
          <li><code>LEIA-ME.txt</code></li>
          <li><code>autorizacao-v2.txt</code></li>
          <li><code>cartaz-sem-titulo.svg</code></li>
          <li><code>cronograma NOVO.txt</code></li>
          <li><code>inscricoes (1).csv</code></li>
          <li><code>inscricoes nova.csv</code></li>
          <li><code>orcamento_final_agora.csv</code></li>
          <li><code>recado coordenação.txt</code></li>
        </ul>
      </div>
      <div class="danger-box"><strong>Se aparecer algo diferente</strong><p>Não tente “consertar” a pasta. Confira se a extração terminou, extraia novamente ou baixe outra cópia. Se o navegador acrescentar “(1)” ao nome do ZIP, isso não significa que os arquivos internos mudaram.</p></div>

      <h3>Agora faz sentido registrar</h3>
      <p>Se você fechar tudo agora, amanhã terá de confiar na memória. Por isso vamos criar uma pequena lista do que chegou e das dúvidas percebidas. Esse registro se chama <strong>P-01 — Inventário de arquivos</strong>.</p>
      <div class="task-box">
        <ol>
          <li>Abra um editor de texto simples.</li>
          <li>Crie <code>P-01_inventario.txt</code>.</li>
          <li>Salve-o fora da pasta extraída, ao lado da pasta de trabalho e do ZIP original.</li>
          <li>Registre origem, data/hora, quantidade de itens, diferenças percebidas e a decisão de preservar o original.</li>
        </ol>
      </div>
      <div class="artifact-card"><strong>P-01 provisório</strong><p>Registre que há oito itens, duas listas de inscrições e nomes que sugerem estado ou versão, mas ainda não provam aprovação. Nesta aula você descreve o estado recebido; não precisa descobrir a causa de cada diferença.</p></div>

      <div class="evidence-box"><strong>Deu certo se...</strong><p>o ZIP continua intacto, a pasta extraída tem oito itens e o P-01 foi criado sem alterar as fontes recebidas.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos o que chegou. Ainda não sabemos exatamente o que a Escola Horizonte espera receber como entrega. É isso que vamos esclarecer na próxima aula.</p></div>
    `
  },
  {
    id: 'organizacao-pedido',
    number: '01',
    menuTitle: 'O pedido antes da ferramenta',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Requisitos · entregáveis, responsáveis e critérios',
    title: 'O pedido vem antes da ferramenta',
    objective: 'Converter uma solicitação vaga em um registro que oriente organização, produção e validação.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 9h00 · reunião de alinhamento</span>
        <h2>“Organizem tudo para a Feira” parece uma ordem, mas ainda não explica o que significa terminar.</h2>
        <p>Depois da inspeção inicial, Lia pergunta a Paulo o que exatamente precisa ser entregue. Paulo esclarece três saídas desta etapa: uma lista pública de projetos, um cronograma para revisão e um pacote interno com os arquivos usados no trabalho.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Transformar um pedido vago em respostas simples: o que entregar, para quem, quem responde por cada informação, o que ainda está pendente e como saber se a tarefa terminou corretamente.</p></div>

      <h3>Vamos entender o pedido juntos</h3>
      <p>Paulo explica que Marina responde pelas inscrições, ele próprio confirma o horário e Lia organiza os arquivos. A lista de projetos será pública, então ela não pode levar observações internas nem dados pessoais.</p>
      <p>Perceba a consequência: <strong>para quem o material será entregue muda o conteúdo que pode aparecer nele</strong>.</p>

      <div class="table-wrap"><table>
        <thead><tr><th>Pedido que parece claro</th><th>Pergunta que ainda falta</th><th>O que esperamos conseguir conferir</th></tr></thead>
        <tbody>
          <tr><td>“Faça a lista da Feira.”</td><td>para qual público e com quais informações?</td><td>somente equipe e projeto confirmados</td></tr>
          <tr><td>“Use o cronograma novo.”</td><td>quem confirmou o horário?</td><td>uma aprovação identificável</td></tr>
          <tr><td>“Compartilhe com todos.”</td><td>quem precisa ver, comentar ou editar?</td><td>cada pessoa com apenas o acesso necessário</td></tr>
        </tbody>
      </table></div>

      <section class="decision-box">
        <h3>Um teste com o arquivo real</h3>
        <p>Abra <code>cronograma NOVO.txt</code>. Ele informa 09:00 como abertura e também traz a observação: “acho que a abertura mudou para 08:30”. Podemos publicar 08:30 como horário oficial?</p>
        <button class="action-button" type="button" data-reveal="#pedido-evidencia" aria-expanded="false">Ver a evidência disponível</button>
        <div id="pedido-evidencia" class="reveal-panel" hidden>
          <p>O próprio arquivo declara que não há aprovação anexada.</p>
          <p><strong>Conclusão:</strong> 08:30 é uma possibilidade, não uma decisão confirmada. O horário permanece pendente até Paulo aprovar.</p>
        </div>
      </section>

      <h3>Outra pendência que está no pacote</h3>
      <p>Em <code>orcamento_final_agora.csv</code>, a linha da <strong>Gráfica Bairro</strong> aparece com aprovação “não informado”. O nome do arquivo parece definitivo, mas o próprio conteúdo mostra que ainda existe uma pendência.</p>

      <h3>Agora faz sentido criar o P-00</h3>
      <p>Precisamos guardar o pedido da Feira de forma que amanhã outra pessoa consiga entendê-lo sem depender da conversa de hoje. Esse registro será o <strong>P-00 — Pedido e critérios</strong>.</p>
      <div class="template-box">
        <label for="modelo-p00"><strong>Modelo copiável</strong></label>
        <textarea id="modelo-p00" class="record-template" rows="15" readonly>P-00 — PEDIDO E CRITÉRIOS
Projeto: Feira de Projetos da Escola Horizonte
Entregas desta etapa:
1. Lista pública — somente inscrições confirmadas; equipe e projeto; sem dados pessoais ou notas internas.
2. Cronograma — para revisão; horário de abertura ainda pendente.
3. Pacote interno — arquivos de origem preservados e inventário.
Responsáveis: Marina (inscrições), Paulo (horário), Lia (organização).
Públicos: famílias/visitantes, coordenação e equipe interna — não são o mesmo grupo.
Pendências: horário de abertura; aprovação relacionada à Gráfica Bairro.
Como saber que terminou: origem identificada, conteúdo conferido, formato adequado, acesso necessário e possibilidade de recuperação.</textarea>
        <div><button class="action-button" type="button" data-copy="#modelo-p00">Copiar modelo</button><span class="copy-status" aria-live="polite"></span></div>
      </div>
      <div class="note-box"><strong>Termo profissional</strong><p>Quando definimos “como saber que terminou corretamente”, estamos criando <strong>critérios de aceite</strong>. Primeiro usamos a ideia; depois aprendemos o nome.</p></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>lendo apenas o P-00 você consegue dizer o que será entregue, para quem, quem responde por cada parte e quais duas informações ainda estão pendentes.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos o que precisa ser entregue. Falta descobrir qual arquivo sustenta cada entrega e o que realmente mudou entre as versões recebidas.</p></div>
    `
  },
  {
    id: 'organizacao-inventario',
    number: '02',
    menuTitle: 'Inventariar antes de organizar',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Inspeção · nome, tipo, origem, conteúdo e lacunas',
    title: 'Inventariar antes de organizar',
    objective: 'Usar propriedades e conteúdo para separar fatos, indícios e pendências.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 10h10 · LAB-04</span>
        <h2>Existem duas listas de inscrições. Qual delas representa melhor o estado atual?</h2>
        <p>O pacote contém <code>inscricoes (1).csv</code> e <code>inscricoes nova.csv</code>. O nome “nova” chama atenção, mas agora vamos olhar o conteúdo, não confiar no rótulo.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Comparar arquivos sem alterá-los e separar três coisas: o que observamos, o que isso sugere e o que ainda precisa ser confirmado por alguém.</p></div>

      <h3>Faça comigo · observe sem salvar</h3>
      <div class="task-box">
        <ol>
          <li>Abra a pasta extraída e, se possível, use a visualização <strong>Detalhes</strong>.</li>
          <li>Observe nome, extensão, tamanho e data exibida. A data do arquivo é uma pista do sistema; não é prova de aprovação.</li>
          <li>Abra os dois CSV de inscrições apenas para leitura. Se o aplicativo oferecer conversão ou salvamento automático, cancele.</li>
          <li>Compare cabeçalho, quantidade de linhas, turno e status.</li>
          <li>Abra <code>recado coordenação.txt</code> e veja quais dúvidas Paulo quer resolver antes da publicação.</li>
        </ol>
      </div>
      <div class="danger-box"><strong>Por que não salvar agora?</strong><p>Converter ou salvar pode mudar delimitadores, acentos, datas ou outros detalhes. Nesta etapa queremos preservar exatamente o que foi recebido.</p></div>

      <h3>O que os arquivos realmente mostram</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Arquivo</th><th>Observação verificável</th><th>O que ainda não prova</th></tr></thead>
        <tbody>
          <tr><td><code>inscricoes (1).csv</code></td><td>3 equipes; F002/Equipe Sol de manhã e pendente</td><td>que seja a versão autorizada</td></tr>
          <tr><td><code>inscricoes nova.csv</code></td><td>4 equipes; F002/Equipe Sol à tarde e confirmada; F004 aparece como pendente</td><td>quem fez ou autorizou as mudanças</td></tr>
          <tr><td><code>orcamento_final_agora.csv</code></td><td>Gráfica Bairro com aprovação “não informado”</td><td>que “final_agora” signifique aprovado</td></tr>
        </tbody>
      </table></div>

      <section class="checkpoint" data-quiz-group>
        <h3>Interprete sem exagerar a conclusão</h3>
        <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="O conteúdo mostra diferenças reais, mas a autoridade sobre as inscrições ainda precisa ser confirmada com Marina.">
          <p>Qual conclusão é sustentada pela comparação?</p>
          <label><input type="radio" name="q02a" value="a"> <code>inscricoes nova.csv</code> está automaticamente aprovada;</label>
          <label><input type="radio" name="q02a" value="b"> existem mudanças de turno, status e quantidade que precisam ser confirmadas com Marina;</label>
          <label><input type="radio" name="q02a" value="c"> os dois arquivos são idênticos.</label>
        </div>
        <button class="action-button" type="button" data-check-quiz>Conferir interpretação</button>
        <div class="quiz-result" aria-live="polite"></div>
      </section>

      <h3>Complete o P-01</h3>
      <div class="artifact-grid">
        <div class="artifact-card"><strong>Identificação</strong><span>nome, extensão, tamanho, data exibida e origem conhecida</span></div>
        <div class="artifact-card"><strong>Observação</strong><span>o que está realmente no arquivo, sem adivinhar intenção</span></div>
        <div class="artifact-card"><strong>Pendência</strong><span>o que ainda precisa voltar a Marina, Paulo ou outro responsável</span></div>
      </div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>seu P-01 permite explicar as diferenças entre os dois CSV sem afirmar que um deles já está aprovado.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos o que cada fonte contém. Precisamos criar uma estrutura de pastas que mostre onde fica o recebido, o que está em trabalho, o que aguarda revisão e o que realmente foi publicado.</p></div>
    `
  },
  {
    id: 'organizacao-pastas',
    number: '03',
    menuTitle: 'Estruturar pelo fluxo',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Pastas · estados de trabalho e fonte preservada',
    title: 'Estruturar pelo fluxo do trabalho',
    objective: 'Criar pastas que expressem estado e responsabilidade sem depender da memória de uma pessoa.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Segunda-feira · 13h20 · decisão da equipe</span>
        <h2>Se organizarmos por pessoa, a estrutura quebra quando a pessoa muda de função. E se organizarmos pelo estado do trabalho?</h2>
        <p>Você e Lia já sabem o que chegou e o que precisa ser entregue. Agora vamos criar uma estrutura que continue fazendo sentido quando Paulo revisar o material em outro computador.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Criar pastas que respondam a uma pergunta simples: em que etapa do trabalho este arquivo está?</p></div>

      <div class="visual-lab" aria-labelledby="fluxo-pastas-title">
        <div class="visual-header"><span>Diagrama didático · estados do trabalho</span><h3 id="fluxo-pastas-title">A fonte fica preservada; as cópias avançam pelo fluxo</h3></div>
        <div class="file-flow">
          <div><strong>00_Entrada</strong><span>o que chegou</span></div>
          <div><strong>10_Em_trabalho</strong><span>cópias que podem ser editadas</span></div>
          <div><strong>20_Para_revisao</strong><span>candidatas aguardando conferência</span></div>
          <div><strong>30_Publicado</strong><span>entrega realmente liberada</span></div>
          <div><strong>90_Arquivo</strong><span>estados encerrados e referências</span></div>
        </div>
        <p class="visual-question"><strong>Pense:</strong> o ZIP original deve avançar por essas pastas ou ficar preservado como ponto de retorno?</p>
      </div>

      <h3>Faça comigo · monte a árvore</h3>
      <div class="task-box">
        <strong>Alvo</strong><p>Crie <code>Feira_Projetos_2026</code> em <code>Documentos/MbB</code> ou no local autorizado pela instituição.</p>
        <ol>
          <li>Crie as cinco pastas do diagrama.</li>
          <li>Copie o ZIP original para <code>00_Entrada</code>. Não o mova de Downloads durante a prática.</li>
          <li>Copie a pasta extraída para <code>10_Em_trabalho</code>.</li>
          <li>Mova <code>P-00_pedido-e-criterios.txt</code> e <code>P-01_inventario.txt</code> para a raiz de <code>10_Em_trabalho</code>. Eles são registros do trabalho, não arquivos recebidos.</li>
          <li>Confira que o ZIP abre em <code>00_Entrada</code> e que a cópia de trabalho ainda contém os oito itens.</li>
        </ol>
      </div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue apontar onde está o original recebido e onde está a cópia que poderá ser trabalhada, sem misturar os dois.</p></div>
      <div class="note-box"><strong>Por que os números?</strong><p>Eles ajudam a manter as etapas na mesma ordem quando o gerenciador classifica pastas alfabeticamente. Não é uma regra universal; é uma convenção útil para este fluxo.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A estrutura mostra onde cada estado fica, mas nomes como <code>orcamento_final_agora.csv</code> ainda não explicam de modo consistente assunto, estado e versão.</p></div>
    `
  },
  {
    id: 'organizacao-nomes',
    number: '04',
    menuTitle: 'Nomes que respondem',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Nomenclatura · portabilidade, estado e versão',
    title: 'Nomes que respondem perguntas',
    objective: 'Definir nomes previsíveis sem inventar aprovação nem quebrar extensões.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Terça-feira · 8h30 · revisão do inventário</span>
        <h2><code>final_agora</code> parece definitivo hoje. Daqui a uma semana, continuará significando alguma coisa?</h2>
        <p>Você e Lia precisam de nomes que ajudem qualquer pessoa a localizar o assunto e entender o estado do arquivo sem transformar uma suposição em aprovação.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Montar um padrão de nomes que informe data, tipo, assunto, estado e versão — e que preserve a extensão verdadeira do arquivo.</p></div>

      <h3>Construa o padrão</h3>
      <div class="naming-formula"><span>AAAA-MM-DD</span><b>_</b><span>tipo</span><b>_</b><span>assunto</span><b>_</b><span>estado</span><b>_</b><span>vNN.ext</span></div>
      <div class="comparison-grid">
        <div class="bad-card"><strong><code>orcamento_final_agora.csv</code></strong><p>“final” não tem aprovação demonstrada e “agora” perde sentido com o tempo.</p></div>
        <div class="good-card"><strong><code>2026-09-08_orcamento_fornecedores_em-revisao_v01.csv</code></strong><p>O nome descreve uma versão em revisão sem fingir que ela já foi aprovada.</p></div>
      </div>

      <section class="decision-box">
        <h3>Qual nome é defensável agora?</h3>
        <div class="choice-list" data-choice data-answer="b" data-explanation="O conteúdo real do orçamento mostra que a aprovação da Gráfica Bairro está 'não informado'. O nome deve refletir revisão, não aprovação.">
          <label><input type="radio" name="d04" value="a"> <code>2026-09-08_orcamento_aprovado_v99.csv</code></label>
          <label><input type="radio" name="d04" value="b"> <code>2026-09-08_orcamento_fornecedores_em-revisao_v01.csv</code></label>
          <label><input type="radio" name="d04" value="c"> <code>orçamento:final?.csv</code></label>
          <button class="action-button" type="button" data-check-choice>Conferir nome</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <h3>Agora nasce o P-02</h3>
      <p>Como a árvore e o padrão de nomes serão reutilizados, registre-os em <code>P-02_estrutura-e-nomes.txt</code>, na raiz de <code>10_Em_trabalho</code>.</p>

      <h3>Faça comigo · aplique apenas nas cópias</h3>
      <div class="task-box"><ol>
        <li>Em <code>10_Em_trabalho</code>, crie <code>fontes_recebidas</code>.</li>
        <li>Mova para essa subpasta os oito itens recebidos <strong>sem renomeá-los</strong>.</li>
        <li>Copie para a raiz de <code>10_Em_trabalho</code> somente os arquivos que serão trabalhados.</li>
        <li>Proponha nomes com data, tipo, assunto, estado e versão. Não use “aprovado” sem uma evidência de aprovação.</li>
        <li>Mantenha a extensão original. Alterar <code>.csv</code> para <code>.xlsx</code> no nome não converte o arquivo.</li>
        <li>Abra cada cópia renomeada para confirmar que continua legível.</li>
      </ol></div>
      <div class="artifact-card"><strong>P-02 · padrão adotado</strong><p><code>AAAA-MM-DD_tipo_assunto_estado_vNN.ext</code>. Registre também qualquer exceção exigida pela organização.</p></div>
      <details class="sources-box"><summary>Fonte oficial consultada</summary><ul><li><a href="https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint" target="_blank" rel="noopener">Microsoft Support — restrições de nomes e sincronização no OneDrive/SharePoint</a></li></ul></details>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O nome melhorou, mas ainda precisamos decidir o que fazer quando uma informação muda: copiar, mover, substituir ou criar uma nova versão?</p></div>
    `
  },
  {
    id: 'organizacao-versoes',
    number: '05',
    menuTitle: 'Copiar, mover ou versionar',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Mudança controlada · estado anterior e aprovação',
    title: 'Copiar, mover, substituir ou criar versão?',
    objective: 'Escolher a operação pelo efeito esperado e verificar o resultado sem sobrescrever a única fonte.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Terça-feira · 10h40 · nova informação da secretaria</span>
        <h2>Marina confirma que a Equipe Sol deve ficar no turno da tarde e com status confirmado.</h2>
        <p><strong>Este é um novo acontecimento da história.</strong> Ele não estava escondido no ZIP. Agora você recebeu uma confirmação da pessoa responsável pelas inscrições e precisa incorporá-la sem apagar o estado anterior.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Escolher conscientemente entre copiar, mover, substituir e criar nova versão — sempre preservando de onde a mudança veio.</p></div>

      <div class="table-wrap"><table>
        <thead><tr><th>Operação</th><th>Quando faz sentido</th><th>Risco principal</th><th>Como conferir</th></tr></thead>
        <tbody>
          <tr><td>Copiar</td><td>manter a origem e criar outra instância</td><td>cópias divergirem</td><td>origem e destino abrem</td></tr>
          <tr><td>Mover</td><td>mudar localização ou estado</td><td>pessoas perderem a referência</td><td>está no destino e não ficou duplicado por engano</td></tr>
          <tr><td>Substituir</td><td>trocar conteúdo no mesmo lugar</td><td>perder a única versão válida</td><td>estado anterior foi preservado</td></tr>
          <tr><td>Nova versão</td><td>registrar evolução controlada</td><td>acumular versões sem contexto</td><td>registro liga versão, mudança e autorização</td></tr>
        </tbody>
      </table></div>

      <h3>Agora nasce o P-03</h3>
      <p>Crie <code>P-03_versoes-e-aprovacoes.txt</code>. Ele servirá para ligar cada nova versão à fonte anterior, à mudança realizada e à evidência que autorizou a mudança.</p>

      <h3>Faça comigo · uma mudança, uma prova</h3>
      <div class="task-box"><ol>
        <li>Confirme que os oito arquivos originais continuam em <code>10_Em_trabalho/fontes_recebidas</code>.</li>
        <li>Use uma cópia de <code>inscricoes nova.csv</code> como candidata, porque ela já contém F002 à tarde e confirmada e também inclui F004.</li>
        <li>Confira F001, F002, F003 e F004. Não valide apenas a linha que motivou a mudança.</li>
        <li>Dê à cópia um nome com estado <code>em-revisao_v01</code>.</li>
        <li>Registre em P-03 que a confirmação de Marina é a nova evidência para F002, mas que a lista ainda não foi publicada.</li>
        <li>Copie a candidata para <code>20_Para_revisao</code> e abra a cópia no destino.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que este teste prova</strong><p>A candidata contém quatro equipes e está coerente com a nova confirmação sobre F002. Isso ainda não prova que a lista pública está pronta: precisamos retirar campos internos antes da publicação.</p></div>

      <div class="template-box">
        <label for="modelo-p03"><strong>P-03 · controle de versão</strong></label>
        <textarea id="modelo-p03" class="record-template" rows="9" readonly>Arquivo/entrega:
Versão e estado:
Fonte anterior preservada em:
Mudança realizada:
Evidência/autorização:
Autor da alteração:
Data e hora:
Validação executada:
Pendência ou limite:</textarea>
        <div><button class="action-button" type="button" data-copy="#modelo-p03">Copiar modelo</button><span class="copy-status" aria-live="polite"></span></div>
      </div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A candidata ainda é um CSV com campos internos. A próxima decisão é escolher formatos adequados para editar, revisar e entregar.</p></div>
    `
  },
  {
    id: 'organizacao-formatos',
    number: '06',
    menuTitle: 'Trabalho e entrega',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Formatos · editabilidade, intercâmbio e preservação visual',
    title: 'Formato de trabalho e formato de entrega',
    objective: 'Escolher formato conforme edição, intercâmbio, leitura e preservação, sem converter por renomeação.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Quarta-feira · 8h05 · preparação da revisão</span>
        <h2>O mesmo arquivo serve igualmente para editar, recalcular, revisar e publicar?</h2>
        <p>Entra agora outro personagem: <strong>Renato, do financeiro</strong>, precisa conferir e recalcular o orçamento. Paulo precisa revisar o cronograma. Famílias e visitantes precisam apenas consultar materiais já liberados. Cada necessidade aponta para um formato diferente.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Distinguir formato de trabalho, formato de intercâmbio e formato de entrega. O importante não é decorar extensões, mas escolher pelo uso.</p></div>

      <div class="format-grid">
        <article><span class="format-tag">Trabalho</span><strong>Editável nativo</strong><p><code>.odt/.docx</code>, <code>.ods/.xlsx</code> ou <code>.odp/.pptx</code> preservam recursos de edição.</p></article>
        <article><span class="format-tag">Intercâmbio</span><strong>Dados simples</strong><p><code>.csv</code> troca uma tabela, mas não preserva fórmulas, várias abas, gráficos ou formatação completa.</p></article>
        <article><span class="format-tag">Entrega</span><strong>Leitura estável</strong><p>PDF tende a preservar a aparência, mas precisa ser aberto e conferido.</p></article>
        <article><span class="format-tag">Imagem</span><strong>Uso visual</strong><p>SVG, PNG e JPEG servem a finalidades diferentes; uma imagem de texto não vira documento acessível só por parecer correta.</p></article>
      </div>

      <section class="checkpoint" data-quiz-group>
        <h3>Escolha pelo uso</h3>
        <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Renato precisa recalcular. Uma planilha editável preserva a possibilidade de cálculo melhor que um PDF."><p>Qual formato atende melhor à conferência e ao recálculo do orçamento?</p><label><input type="radio" name="q06a" value="a"> fotografia da tela</label><label><input type="radio" name="q06a" value="b"> somente PDF</label><label><input type="radio" name="q06a" value="c"> planilha editável, acompanhada da versão de entrega quando aprovada</label></div>
        <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Exportar não substitui a conferência do arquivo gerado."><p>Exportar para PDF prova que a entrega está correta?</p><label><input type="radio" name="q06b" value="a"> sim, sempre</label><label><input type="radio" name="q06b" value="b"> não; o arquivo exportado precisa ser aberto e validado</label><label><input type="radio" name="q06b" value="c"> somente se o nome contiver “final”</label></div>
        <button class="action-button" type="button" data-check-quiz>Conferir escolhas</button><div class="quiz-result" aria-live="polite"></div>
      </section>

      <h3>Faça comigo · use sempre esta sequência</h3>
      <ol class="numbered-process">
        <li><strong>Defina o destino.</strong><span>Quem vai editar, importar, ler ou imprimir?</span></li>
        <li><strong>Preserve a fonte.</strong><span>Mantenha o formato de trabalho antes de exportar.</span></li>
        <li><strong>Exporte pelo aplicativo.</strong><span>Não troque somente a extensão do nome.</span></li>
        <li><strong>Abra o arquivo gerado.</strong><span>Confira conteúdo, páginas, cortes, caracteres, links e dados.</span></li>
        <li><strong>Registre a relação.</strong><span>P-03 deve ligar a fonte editável à entrega produzida.</span></li>
      </ol>
      <div class="note-box"><strong>Limite desta aula</strong><p>A produção detalhada em Writer, Calc e Impress virá nos módulos seguintes. Aqui estamos construindo o critério que evita anexos e exportações inadequados.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Mesmo um arquivo correto pode ser compartilhado com a pessoa errada ou com poder demais. Agora precisamos decidir quem pode fazer o quê.</p></div>
    `
  },
  {
    id: 'organizacao-compartilhamento',
    number: '07',
    menuTitle: 'Permissão necessária',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Compartilhamento · destinatários, papéis e herança',
    title: 'Compartilhar com a permissão necessária',
    objective: 'Planejar e testar acesso mínimo sem usar dados reais nem links públicos por conveniência.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Quarta-feira · 10h30 · preparação do compartilhamento</span>
        <h2>Lia precisa organizar. Paulo precisa revisar. Renato precisa ver o orçamento. O público só precisa consultar o que foi publicado.</h2>
        <p>Dar a mesma permissão para todos parece simples, mas pode permitir que alguém altere material que deveria apenas visualizar. A permissão deve nascer da necessidade.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Planejar acesso mínimo: cada pessoa vê apenas o conteúdo de que precisa e recebe apenas o poder necessário para cumprir sua função.</p></div>

      <h3>Agora nasce o P-04</h3>
      <p>Crie <code>P-04_permissoes.txt</code>. Antes de clicar em qualquer botão de compartilhamento, registre a necessidade de cada pessoa ou grupo.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Pessoa/grupo</th><th>Necessidade</th><th>Conteúdo</th><th>Permissão mínima</th></tr></thead>
        <tbody>
          <tr><td>Lia</td><td>organizar e preparar candidatas</td><td>entrada e trabalho</td><td>editar</td></tr>
          <tr><td>Paulo</td><td>revisar e aprovar</td><td>para revisão</td><td>comentar quando suportado; editar somente se necessário</td></tr>
          <tr><td>Renato</td><td>conferir orçamento</td><td>orçamento, não inscrições</td><td>comentar/editar apenas no escopo necessário</td></tr>
          <tr><td>Público</td><td>consultar entregas liberadas</td><td>publicado</td><td>visualizar</td></tr>
        </tbody>
      </table></div>

      <div class="visual-lab"><div class="visual-header"><span>Representação didática · herança de acesso</span><h3>A pasta-pai pode abrir acesso ao que está dentro</h3></div><div class="permission-map"><div class="folder-node parent"><strong>Feira_Projetos_2026</strong><span>quem recebe acesso aqui?</span></div><div class="folder-children"><span>10_Em_trabalho</span><span>20_Para_revisao</span><span>30_Publicado</span></div></div><p class="visual-question"><strong>Pense:</strong> se o público receber acesso à pasta-pai, ele verá apenas <code>30_Publicado</code> ou também material interno?</p></div>

      <h3>Faça comigo · laboratório controlado</h3>
      <div class="task-box"><ol>
        <li>Use somente conta autorizada pela escola e arquivos fictícios. Se não houver serviço autorizado, faça a simulação no próprio P-04.</li>
        <li>Na simulação local, use os perfis fictícios <code>Teste-Visualizador</code> e <code>Teste-Editor</code>.</li>
        <li>Se houver serviço autorizado, crie apenas uma pasta de teste chamada <code>MBB_Feira_Compartilhamento_Teste</code>.</li>
        <li>Mantenha o acesso geral como <strong>restrito</strong>. Conceda visualização ao perfil de teste e verifique se ele realmente não consegue editar.</li>
        <li>Quando o processo exigir edição, altere conscientemente o papel e repita o teste.</li>
        <li>Remova o acesso de teste e confirme que ele deixou de funcionar. Registre horário, papel, resultado e limite em P-04.</li>
      </ol></div>
      <div class="danger-box"><strong>Não amplie o acesso para “resolver”</strong><p>Se algo falhar, verifique conta usada, pasta-pai, papel atribuído, propriedade do item e política da instituição. Não teste “qualquer pessoa com o link” por conveniência.</p></div>
      <details class="sources-box"><summary>Fontes oficiais consultadas</summary><ul><li><a href="https://support.google.com/drive/answer/7166529?hl=pt-BR" target="_blank" rel="noopener">Ajuda do Google Drive — compartilhamento de pastas e herança</a></li><li><a href="https://support.google.com/drive/answer/2494893?hl=pt-BR" target="_blank" rel="noopener">Ajuda do Google Drive — interromper, limitar ou alterar compartilhamento</a></li><li><a href="https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint" target="_blank" rel="noopener">Microsoft Support — limites e restrições do OneDrive/SharePoint</a></li></ul></details>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora sabemos quem deve acessar o quê. Ainda falta responder outra pergunta: se alguém apagar ou alterar algo por engano, conseguimos recuperar?</p></div>
    `
  },
  {
    id: 'organizacao-recuperacao',
    number: '08',
    menuTitle: 'Provar recuperação',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Continuidade · sincronização, histórico, cópia e restauração',
    title: 'A pasta aparece em dois computadores. Está protegida?',
    objective: 'Executar restauração controlada e registrar o que o teste demonstra e o que permanece fora do alcance.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Quinta-feira · 8h20 · teste de continuidade</span>
        <h2>Na história da Escola Horizonte, a pasta de trabalho passa a aparecer em SEC-03 e COORD-02. Isso significa que existe backup?</h2>
        <p><strong>Este é um novo cenário de teste da história.</strong> Ele não vem do ZIP. A presença da pasta em dois computadores mostra disponibilidade naquele momento, mas não prova que uma exclusão ou alteração errada possa ser desfeita.</p>
      </div>

      <h3>O que você vai aprender</h3>
      <div class="note-box"><strong>Meta desta aula</strong><p>Distinguir sincronização, histórico, lixeira e cópia independente — e só afirmar que existe recuperação depois de realmente testar uma restauração.</p></div>

      <section class="decision-box">
        <h3>Preveja antes do teste</h3>
        <div class="choice-list" data-choice data-answer="c" data-explanation="Ver a pasta em dois computadores não mostra, sozinho, se uma exclusão será propagada nem se existe uma versão recuperável.">
          <label><input type="radio" name="d08" value="a"> a pasta está protegida contra qualquer perda;</label>
          <label><input type="radio" name="d08" value="b"> os dois computadores são automaticamente backups independentes;</label>
          <label><input type="radio" name="d08" value="c"> ainda não há evidência suficiente de recuperação.</label>
          <button class="action-button" type="button" data-check-choice>Conferir previsão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <div class="comparison-grid four">
        <div><strong>Sincronização</strong><p>Mantém estados alinhados e pode propagar uma exclusão ou alteração indesejada.</p></div>
        <div><strong>Histórico</strong><p>Guarda versões anteriores conforme as regras do serviço.</p></div>
        <div><strong>Lixeira</strong><p>Retém itens excluídos por um período e condições definidos.</p></div>
        <div><strong>Cópia independente</strong><p>Reduz dependência do mesmo fluxo, mas também precisa ser protegida e testada.</p></div>
      </div>

      <h3>Agora nasce o P-05</h3>
      <div class="template-box"><label for="modelo-p05"><strong>P-05 · teste de recuperação</strong></label><p>Crie <code>P-05_recuperacao.txt</code> em <code>10_Em_trabalho</code>. Ele deve registrar exatamente o cenário testado e o limite da conclusão.</p><textarea id="modelo-p05" class="record-template" rows="11" readonly>Cenário testado:
Arquivo fictício e estado esperado:
Fonte da recuperação:
Estado anterior preservado?:
Passos executados:
Resultado observado:
Validação do conteúdo/função:
Tempo aproximado:
O que o teste prova:
O que o teste não prova:
Próxima melhoria:</textarea><div><button class="action-button" type="button" data-copy="#modelo-p05">Copiar modelo</button><span class="copy-status" aria-live="polite"></span></div></div>

      <h3>Experimento A · recuperação local</h3>
      <div class="task-box"><ol>
        <li>Selecione um arquivo fictício de <code>10_Em_trabalho</code> e copie-o para <code>90_Arquivo/teste-recuperacao</code>.</li>
        <li>Anote uma linha ou frase que permita reconhecer o conteúdo original.</li>
        <li>Na cópia de trabalho, faça uma alteração visível e salve. Não altere a referência em <code>90_Arquivo</code>.</li>
        <li>Restaure a partir de <code>90_Arquivo</code> com outro nome, dentro de <code>restaurado_teste</code>.</li>
        <li>Abra o restaurado e confira a linha de controle.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que isso prova</strong><p>Se o restaurado abre e contém o estado esperado, você provou recuperação daquele arquivo a partir daquele local. Como as duas pastas podem estar no mesmo disco, ainda não provou recuperação após falha física do equipamento.</p></div>

      <h3>Experimento B · histórico do serviço, quando autorizado</h3>
      <div class="task-box"><ol>
        <li>Use apenas arquivo fictício na pasta de teste da aula 07.</li>
        <li>Registre o conteúdo inicial, altere uma linha e aguarde a sincronização terminar.</li>
        <li>Abra o histórico de versões e identifique a versão anterior antes de restaurar.</li>
        <li>Quando possível, copie ou baixe a versão anterior para comparação.</li>
        <li>Restaure e confira a linha de controle. Registre também a política de retenção conhecida.</li>
      </ol></div>
      <div class="danger-box"><strong>Não experimente em material real</strong><p>Restaurar uma versão pode alterar o arquivo atual para outras pessoas. Se o histórico não aparecer, registre a limitação; não conclua automaticamente que o recurso nunca existiu.</p></div>
      <details class="sources-box"><summary>Fontes oficiais consultadas</summary><ul><li><a href="https://support.microsoft.com/en-us/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive" target="_blank" rel="noopener">Microsoft Support — restaurar versão anterior no OneDrive</a></li><li><a href="https://support.google.com/drive/answer/2409045?hl=pt-BR" target="_blank" rel="noopener">Ajuda do Google Drive — atividades e versões de arquivos</a></li></ul></details>
      <div class="bridge-box"><strong>Próximo problema</strong><p>P-00 a P-05 já registram pedido, fontes, estrutura, nomes, versões, acesso e recuperação. Falta provar que outra pessoa consegue assumir o trabalho sem depender da memória de Lia.</p></div>
    `
  },
  {
    id: 'organizacao-integrador',
    number: '99',
    menuTitle: 'Entrega da Feira',
    unit: 'Módulo 1 · Organização e Trabalho Digital',
    technicalTitle: 'Desafio integrador · organizar, validar, entregar e transferir',
    title: 'Entrega da Feira',
    objective: 'Entregar um conjunto rastreável que preserve fontes, sinalize pendências e possa ser continuado por outra pessoa.',
    content: `
      <div class="story-opening">
        <span class="eyebrow">Sexta-feira · 14h00 · troca de responsável</span>
        <h2>Lia ficará no auditório. Outra pessoa precisa continuar o trabalho sem perguntar “onde está o arquivo certo?”.</h2>
        <p>Você já tem o pacote inicial e os registros P-00 a P-05. Durante a semana, Marina confirmou a situação da Equipe Sol. O horário de abertura continua sem aprovação de Paulo e a aprovação da Gráfica Bairro continua sem evidência. Essas pendências não devem ser inventadas nem escondidas.</p>
      </div>

      <h3>O que este desafio vai provar</h3>
      <div class="note-box"><strong>Meta final do módulo</strong><p>Organizar e transferir o trabalho de modo que outra pessoa consiga localizar fontes, entender decisões, reconhecer pendências e continuar a tarefa sem depender de explicação oral.</p></div>

      <h3>Antes de começar</h3>
      <p>Use os mesmos arquivos e registros construídos nas aulas anteriores. Se algum registro estiver incompleto, corrija-o com base nas evidências disponíveis; não invente informação para “fechar” o projeto.</p>

      <h3>Missão · faça por etapas</h3>
      <div class="task-box"><ol>
        <li><strong>Preserve a origem.</strong> Confirme o ZIP em <code>00_Entrada</code> e os oito arquivos recebidos em <code>fontes_recebidas</code>.</li>
        <li><strong>Confira o pedido.</strong> Leia P-00 e mantenha horário e Gráfica Bairro como pendências.</li>
        <li><strong>Confira o inventário.</strong> P-01 deve distinguir o que foi observado do que ainda depende de confirmação.</li>
        <li><strong>Confira estrutura e nomes.</strong> Use P-02 e não renomeie as fontes recebidas.</li>
        <li><strong>Confira a versão candidata.</strong> P-03 deve ligar a lista com quatro equipes à confirmação de Marina.</li>
        <li><strong>Prepare a lista pública.</strong> Crie um CSV apenas com inscrições confirmadas e apenas as colunas <code>equipe</code> e <code>projeto</code>. Status e turno permanecem internos.</li>
        <li><strong>Separe revisão de publicação.</strong> Coloque candidatas em <code>20_Para_revisao</code>. Não mova o cronograma para <code>30_Publicado</code> enquanto o horário estiver pendente.</li>
        <li><strong>Confira acessos.</strong> P-04 deve indicar necessidades de Lia, Paulo, Renato e público.</li>
        <li><strong>Prove recuperação.</strong> Execute uma restauração controlada e registre o limite do teste em P-05.</li>
        <li><strong>Entregue um índice curto.</strong> Para cada item, informe conteúdo, fonte, estado, responsável, pendência e próxima ação.</li>
      </ol></div>

      <h3>Checklist de aceite</h3>
      <div class="check-card">
        <ul data-checklist>
          <li><label><input type="checkbox"> fonte recebida preservada e legível;</label></li>
          <li><label><input type="checkbox"> P-00 registra entregas, público, responsáveis e pendências;</label></li>
          <li><label><input type="checkbox"> P-01 distingue observação de conclusão;</label></li>
          <li><label><input type="checkbox"> estrutura e nomes seguem P-02;</label></li>
          <li><label><input type="checkbox"> P-03 liga versão, mudança, evidência e estado;</label></li>
          <li><label><input type="checkbox"> lista pública contém somente os campos autorizados;</label></li>
          <li><label><input type="checkbox"> P-04 concede acesso mínimo;</label></li>
          <li><label><input type="checkbox"> P-05 registra restauração e limite do teste;</label></li>
          <li><label><input type="checkbox"> horário e gráfica permanecem pendentes sem invenção;</label></li>
          <li><label><input type="checkbox"> outra pessoa localizou a candidata e explicou o próximo passo.</label></li>
        </ul>
        <p class="check-progress" data-check-progress>0/10 itens conferidos</p>
      </div>

      <h3>Validação cruzada</h3>
      <div class="two-col">
        <div class="artifact-card"><strong>Quem entrega</strong><p>Entrega o índice e os registros. Não explica oralmente onde colocou cada coisa.</p></div>
        <div class="artifact-card"><strong>Quem recebe</strong><p>Usando somente o índice e os registros, localiza a lista candidata, identifica as duas pendências, confere a fonte e aponta a próxima autorização necessária.</p></div>
      </div>
      <div class="evidence-box"><strong>Critério de sucesso</strong><p>Se quem recebe consegue continuar sem depender da memória de Lia, a organização cumpriu sua função. Se precisa adivinhar, o trabalho ainda não está realmente entregue.</p></div>

      <h3>O que você construiu neste módulo</h3>
      <div class="rubric-grid">
        <article><strong>Entender</strong><p>transformou um pedido vago em critérios claros;</p></article>
        <article><strong>Experimentar</strong><p>trabalhou em cópias e preservou o ponto de retorno;</p></article>
        <article><strong>Analisar</strong><p>comparou conteúdo e separou fato, indício e pendência;</p></article>
        <article><strong>Aplicar</strong><p>entregou um conjunto que outra pessoa consegue continuar.</p></article>
      </div>
      <div class="bridge-box"><strong>Ponte para Documentos Profissionais</strong><p>No próximo módulo, o mesmo cenário continuará. A diferença é que agora os arquivos organizados serão transformados em documentos estruturados, revisáveis e adequados para uso profissional.</p></div>
    `
  }
];
