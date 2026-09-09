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
        <h2>A Feira de Projetos abre em dez dias, mas ninguém consegue dizer quais arquivos estão prontos.</h2>
        <p>Marina recebeu inscrições em <strong>SEC-03</strong>; Paulo enviou correções pelo mensageiro; Lia reuniu cartaz, cronograma e orçamento em <strong>LAB-04</strong>. A pasta contém nomes como “novo” e “final”, mas o horário de abertura e uma aprovação ainda são incertos.</p>
        <p>Apagar duplicatas ou escolher o arquivo com nome mais convincente pode eliminar evidência. Primeiro, a equipe precisa descobrir <strong>o que existe, o que diverge e o que ainda não pode ser concluído</strong>.</p>
      </div>

      <section class="decision-box">
        <h3>Decida antes de abrir o pacote</h3>
        <p>Qual ação preserva melhor o estado recebido?</p>
        <div class="choice-list" data-choice data-answer="c" data-explanation="Uma cópia de trabalho preserva o pacote recebido. Nomes como “final” e “novo” são indícios, não prova de aprovação.">
          <label><input type="radio" name="d00" value="a"> excluir os arquivos com nomes parecidos;</label>
          <label><input type="radio" name="d00" value="b"> publicar sempre o arquivo com “final” no nome;</label>
          <label><input type="radio" name="d00" value="c"> guardar o pacote recebido e investigar em uma cópia.</label>
          <button class="action-button" type="button" data-check-choice>Conferir decisão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <div class="note-box"><strong>Registro que começa agora</strong><p>Como Lia ainda fará várias conferências, o primeiro registro cumulativo será <strong>P-01</strong>, o inventário de arquivos e lacunas. Depois de extrair o pacote no roteiro abaixo, abra um editor de texto simples e crie <code>P-01_inventario.txt</code> ao lado da pasta extraída — nunca dentro do ZIP nem entre as fontes recebidas. Comece apenas com origem, data/hora, quantidade, divergências observadas e decisão segura; no capítulo 03 ele será levado para a árvore de trabalho.</p></div>

      <h3>Laboratório seguro · preparar a cópia de trabalho</h3>
      <div class="task-box">
        <strong>Ponto de partida</strong>
        <ol>
          <li>Use um computador autorizado e uma pasta em que você possa criar e remover arquivos fictícios.</li>
          <li>Baixe o <a href="../downloads/informatica-produtividade/caixa-entrada-feira.zip" download>pacote da Feira de Projetos</a>. Ele contém somente dados didáticos fictícios.</li>
          <li>No Windows, abra <strong>Downloads</strong>, selecione o ZIP, clique com o botão direito e escolha <strong>Extrair Tudo</strong>. Em outro sistema, use a opção equivalente de extrair.</li>
          <li>Mantenha o ZIP original sem alteração. Trabalhe somente na pasta extraída.</li>
          <li>Abra primeiro <code>LEIA-ME.txt</code>. Crie <code>P-01_inventario.txt</code> no local indicado acima; depois conte os itens e registre os nomes exatamente como chegaram.</li>
        </ol>
      </div>
      <div class="evidence-box">
        <strong>Resultado esperado</strong>
        <p>A pasta extraída contém oito itens. Há dois arquivos de inscrições, um cronograma com observação não confirmada, um orçamento com aprovação ausente, um modelo de autorização, um cartaz, um recado e o LEIA-ME.</p>
        <p><strong>Se divergir:</strong> não desative antivírus nem force a abertura. Confira se a extração terminou, baixe novamente ou solicite ao professor o pacote íntegro. O navegador pode acrescentar “(1)” ao nome do ZIP; registre isso, mas não confunda o nome do pacote com o conteúdo.</p>
      </div>

      <h3>O primeiro registro não contém uma causa</h3>
      <div class="artifact-card">
        <strong>P-01 provisório · estado recebido</strong>
        <ul>
          <li>origem: pacote didático da Feira;</li>
          <li>data e hora da observação;</li>
          <li>quantidade de itens: 8;</li>
          <li>divergências visíveis: nomes vagos, duas inscrições, aprovações pendentes;</li>
          <li>decisão: preservar o ZIP e investigar na cópia extraída.</li>
        </ul>
      </div>
      <div class="bridge-box"><strong>Consequência</strong><p>A equipe sabe que a pasta está confusa, mas ainda não sabe o que precisa entregar. Antes de organizar arquivos, Paulo terá de transformar o pedido da feira em critérios verificáveis.</p></div>
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
        <h2>“Organizem tudo para a feira” não informa o que significa terminar.</h2>
        <p>Paulo confirma três entregas para esta etapa: uma lista pública de projetos, um cronograma para revisão e um pacote interno com as fontes. Marina responde pelas inscrições; Paulo aprova o horário; Lia organiza os arquivos. A lista pública não pode conter observações internas nem dados pessoais.</p>
      </div>

      <div class="note-box"><strong>Novo registro do pedido</strong><p>Como “organizar tudo” não define conclusão, crie em um editor de texto simples o arquivo <code>P-00_pedido-e-criterios.txt</code>, ao lado de P-01. P-00 será o registro cumulativo de entregas, responsáveis, prazo, público, critérios e pendências; o modelo desta aula fornece os campos iniciais.</p></div>

      <h3>Entender · o que ainda falta perguntar?</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Relato</th><th>Pergunta necessária</th><th>Evidência de conclusão</th></tr></thead>
        <tbody>
          <tr><td>“Faça a lista da feira.”</td><td>para qual público e com quais campos?</td><td>arquivo contém somente equipe e projeto aprovados</td></tr>
          <tr><td>“Use o cronograma novo.”</td><td>quem aprovou o horário e onde isso foi registrado?</td><td>confirmação rastreável de Paulo</td></tr>
          <tr><td>“Compartilhe com todos.”</td><td>quem precisa ver, comentar ou editar?</td><td>matriz pessoa × necessidade × permissão</td></tr>
        </tbody>
      </table></div>

      <section class="decision-box">
        <h3>Preveja</h3>
        <p>O arquivo <code>cronograma NOVO.txt</code> permite publicar a abertura às 8h30?</p>
        <button class="action-button" type="button" data-reveal="#pedido-evidencia" aria-expanded="false">Ver a evidência disponível</button>
        <div id="pedido-evidencia" class="reveal-panel" hidden>
          <p>O arquivo contém apenas a observação “acho que a abertura mudou para 08:30” e declara que não há aprovação anexada.</p>
          <p><strong>Interpretação:</strong> há uma hipótese de mudança, não uma decisão autorizada. O horário deve permanecer pendente no registro P-00.</p>
        </div>
      </section>

      <h3>Aplicar · produzir P-00</h3>
      <div class="template-box">
        <label for="modelo-p00"><strong>Modelo copiável</strong></label>
        <textarea id="modelo-p00" class="record-template" rows="14" readonly>P-00 — PEDIDO E CRITÉRIOS
Projeto: Feira de Projetos da Escola Horizonte
Entregas desta etapa:
1. Lista pública — somente inscrições confirmadas; equipe e projeto; sem dados pessoais ou notas internas.
2. Cronograma — para revisão; horário de abertura ainda pendente.
3. Pacote interno — fontes preservadas e inventário.
Responsáveis: Marina (inscrições), Paulo (aprovação), Lia (organização).
Prazo: 18/09/2026 às 8h para a prática individual, ou o prazo institucional informado.
Destinatários: público, coordenação e equipe interna — não são o mesmo grupo.
Critérios de aceite: fonte identificada, conteúdo conferido, formato adequado, permissão mínima e possibilidade de recuperação.
Pendências: horário de abertura; aprovação da Gráfica Bairro.
Próxima verificação: responsável + evidência + data.</textarea>
        <div><button class="action-button" type="button" data-copy="#modelo-p00">Copiar modelo</button><span class="copy-status" aria-live="polite"></span></div>
      </div>
      <div class="note-box"><strong>O registro muda a decisão</strong><p>Se a lista fosse interna, ela poderia conter campos de acompanhamento. Como é pública, o conjunto de dados precisa ser reduzido. O contexto não está decorando a atividade: ele define o conteúdo permitido.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora as entregas estão claras. Ainda falta descobrir qual arquivo sustenta cada uma e quais divergências precisam voltar ao responsável. É hora de completar o inventário sem confiar no nome.</p></div>
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
        <h2>Há duas listas de inscrições. A de nome “nova” parece mais recente — mas aparência não basta.</h2>
        <p>Lia precisa informar a Marina exatamente o que mudou. Se escolher uma lista sem comparar linhas, a Equipe Sol pode aparecer no turno errado e a Equipe Horizonte pode desaparecer.</p>
      </div>

      <h3>Experimentar · observar sem alterar</h3>
      <div class="task-box">
        <strong>Roteiro no gerenciador de arquivos</strong>
        <ol>
          <li>Abra a cópia extraída e mude a visualização para <strong>Detalhes</strong>, se essa opção existir.</li>
          <li>Registre nome completo, tipo/extensão, tamanho e data exibida. Data do arquivo indica um evento do sistema; sozinha, não prova aprovação.</li>
          <li>Abra os dois CSV de inscrições em modo de leitura. Não salve nem aceite conversões automáticas nesta inspeção.</li>
          <li>Compare cabeçalho, quantidade de linhas e valores diferentes. Feche sem salvar.</li>
          <li>Abra o recado da coordenação e associe cada dúvida ao arquivo correspondente.</li>
        </ol>
      </div>
      <div class="danger-box"><strong>Se o aplicativo oferecer conversão</strong><p>Cancele e volte. Nesta etapa, converter ou salvar pode mudar delimitadores, acentos, datas ou metadados. A inspeção deve preservar o recebido.</p></div>

      <h3>Evidência parcial</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Arquivo</th><th>O que foi observado</th><th>O que ainda não prova</th></tr></thead>
        <tbody>
          <tr><td><code>inscricoes (1).csv</code></td><td>3 equipes; Sol no turno da manhã e pendente</td><td>que seja a versão autorizada</td></tr>
          <tr><td><code>inscricoes nova.csv</code></td><td>4 equipes; Sol à tarde e confirmada</td><td>quem fez ou aprovou a mudança</td></tr>
          <tr><td><code>orcamento_final_agora.csv</code></td><td>Gráfica Bairro sem aprovação informada</td><td>que “final” signifique aprovado</td></tr>
        </tbody>
      </table></div>

      <section class="checkpoint" data-quiz-group>
        <h3>Interpretar antes de concluir</h3>
        <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Conteúdo mais completo é evidência útil, mas a fonte de autoridade ainda precisa ser confirmada com Marina.">
          <p>Qual conclusão o comparativo sustenta?</p>
          <label><input type="radio" name="q02a" value="a"> “inscricoes nova.csv” está automaticamente aprovado;</label>
          <label><input type="radio" name="q02a" value="b"> há mudanças de turno, status e quantidade que precisam ser confirmadas com Marina;</label>
          <label><input type="radio" name="q02a" value="c"> os dois arquivos são idênticos.</label>
        </div>
        <button class="action-button" type="button" data-check-quiz>Conferir interpretação</button>
        <div class="quiz-result" aria-live="polite"></div>
      </section>

      <h3>Completar P-01</h3>
      <div class="artifact-grid">
        <div class="artifact-card"><strong>Identificação</strong><span>nome, extensão, tamanho, data exibida e origem conhecida</span></div>
        <div class="artifact-card"><strong>Função</strong><span>qual entrega pode usar este arquivo</span></div>
        <div class="artifact-card"><strong>Estado</strong><span>recebido, em análise, pendente, aprovado ou publicado</span></div>
        <div class="artifact-card"><strong>Evidência</strong><span>o que o conteúdo mostra diretamente</span></div>
        <div class="artifact-card"><strong>Lacuna</strong><span>o que precisa de pessoa, fonte ou teste adicional</span></div>
        <div class="artifact-card"><strong>Decisão</strong><span>preservar, comparar, pedir confirmação ou encaminhar</span></div>
      </div>
      <div class="bridge-box"><strong>Consequência</strong><p>O inventário separou fonte, pendência e possível entrega. Agora a equipe pode criar uma estrutura que represente o fluxo real — sem esconder o material recebido.</p></div>
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
        <h2>Separar “arquivos da Marina” e “arquivos da Lia” parece simples — até alguém mudar de função.</h2>
        <p>P-00 define entregas e P-01 registra o estado. A estrutura deve continuar compreensível quando Paulo revisar em COORD-02 ou outra pessoa assumir o trabalho.</p>
      </div>

      <div class="visual-lab" aria-labelledby="fluxo-pastas-title">
        <div class="visual-header"><span>Diagrama didático · estados, não captura de tela</span><h3 id="fluxo-pastas-title">O arquivo avança; a fonte recebida permanece preservada</h3></div>
        <div class="file-flow">
          <div><strong>00_Entrada</strong><span>estado recebido</span></div>
          <div><strong>10_Em_trabalho</strong><span>cópias editáveis</span></div>
          <div><strong>20_Para_revisao</strong><span>candidatos à aprovação</span></div>
          <div><strong>30_Publicado</strong><span>entrega liberada</span></div>
          <div><strong>90_Arquivo</strong><span>encerrados e evidências</span></div>
        </div>
        <p class="visual-question"><strong>Preveja:</strong> em qual pasta deve ficar o pacote original? Em qual deve nascer a primeira cópia que pode ser editada?</p>
      </div>

      <h3>Aplicar · criar a árvore com retorno previsto</h3>
      <div class="task-box">
        <strong>Alvo</strong><p>Uma nova pasta chamada <code>Feira_Projetos_2026</code>, criada em <code>Documentos/MbB</code> para a prática individual ou no local autorizado pela instituição.</p>
        <ol>
          <li>Antes de criar, confirme que você não está dentro de uma pasta real da secretaria nem em uma conta pessoal sincronizada.</li>
          <li>Crie <code>Feira_Projetos_2026</code> e, dentro dela, as cinco pastas do diagrama.</li>
          <li>Copie o ZIP original para <code>00_Entrada</code>. Não o mova: Downloads continua sendo o ponto de retorno desta prática.</li>
          <li>Copie a pasta extraída para <code>10_Em_trabalho</code>. Não reorganize o conteúdo ainda.</li>
          <li>Mova <code>P-00_pedido-e-criterios.txt</code> e <code>P-01_inventario.txt</code> para a raiz de <code>10_Em_trabalho</code>; esses registros pertencem ao trabalho, não às fontes recebidas.</li>
          <li>Confira que o ZIP abre em <code>00_Entrada</code> e que a cópia contém oito itens.</li>
        </ol>
      </div>
      <div class="evidence-box"><strong>Validação</strong><p>A árvore existe, a fonte recebida continua íntegra e a área de trabalho contém uma cópia. Um print pode mostrar a estrutura, mas a evidência principal é conseguir localizar e abrir os itens esperados.</p><p><strong>Se divergir:</strong> pare antes de recortar ou excluir. Compare o caminho exibido, volte uma pasta e renomeie somente a árvore criada para a atividade. Para desfazer, remova apenas a cópia didática depois de confirmar que o ZIP original continua em Downloads.</p></div>

      <div class="note-box"><strong>Por que números?</strong><p>Eles mantêm a ordem do fluxo em gerenciadores que classificam alfabeticamente. Não existe uma árvore universal: se os requisitos mudarem — por exemplo, materiais jurídicos precisarem de acesso restrito — a estrutura também deve mudar.</p></div>
      <div class="bridge-box"><strong>Nova necessidade</strong><p>A árvore mostra onde cada estado vive, mas arquivos como “final_agora” continuam sem responder assunto, estado e versão de maneira consistente. O próximo registro cumulativo, P-02, reunirá a estrutura criada e o padrão de nomes que ainda precisa ser definido.</p></div>
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
        <h2>“final_agora” descreve a ansiedade de quem salvou, não o estado comprovado do arquivo.</h2>
        <p>Lia precisa localizar por assunto e Paulo precisa distinguir revisão de publicação. O padrão deve funcionar no computador da escola e em uma futura pasta sincronizada.</p>
      </div>

      <h3>Construir o critério</h3>
      <div class="naming-formula"><span>AAAA-MM-DD</span><b>_</b><span>tipo</span><b>_</b><span>assunto</span><b>_</b><span>estado</span><b>_</b><span>vNN.ext</span></div>
      <div class="comparison-grid">
        <div class="bad-card"><strong><code>orcamento_final_agora.csv</code></strong><p>Não informa data, “final” não tem aprovação demonstrada e “agora” perde sentido depois.</p></div>
        <div class="good-card"><strong><code>2026-09-08_orcamento_fornecedores_em-revisao_v01.csv</code></strong><p>Registra uma revisão identificável sem declarar aprovação inexistente.</p></div>
      </div>

      <section class="decision-box">
        <h3>Qual renomeação é defensável agora?</h3>
        <div class="choice-list" data-choice data-answer="b" data-explanation="O conteúdo mostra que a aprovação da gráfica está ausente. O nome deve refletir “em revisão”, não “aprovado”.">
          <label><input type="radio" name="d04" value="a"> <code>2026-09-08_orcamento_aprovado_v99.csv</code></label>
          <label><input type="radio" name="d04" value="b"> <code>2026-09-08_orcamento_fornecedores_em-revisao_v01.csv</code></label>
          <label><input type="radio" name="d04" value="c"> <code>orçamento:final?.csv</code></label>
          <button class="action-button" type="button" data-check-choice>Conferir nome</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <div class="note-box"><strong>P-02 começa nesta decisão</strong><p>P-02 será o registro cumulativo da estrutura de pastas e do padrão de nomes. Em um editor de texto, crie <code>P-02_estrutura-e-nomes.txt</code> na raiz de <code>10_Em_trabalho</code>; registre primeiro as cinco pastas já criadas e, nesta aula, acrescente o padrão de nome adotado e suas exceções.</p></div>

      <h3>Aplicar em cópias, não nas fontes</h3>
      <div class="task-box"><ol>
        <li>Em <code>10_Em_trabalho</code>, crie uma subpasta <code>fontes_recebidas</code> e mova para ela os oito itens sem renomear.</li>
        <li>Copie somente os arquivos que serão trabalhados para a raiz de <code>10_Em_trabalho</code>.</li>
        <li>Continue P-01 para propor nomes com data, tipo, assunto, estado e versão. Registre o padrão escolhido em P-02. Não use “aprovado” sem a evidência prevista em P-00.</li>
        <li>Mantenha a extensão original. Em Windows, pressione <strong>F2</strong> ou use <strong>Renomear</strong>; altere apenas o nome antes do último ponto.</li>
        <li>Abra cada cópia renomeada. Um nome válido não prova que o conteúdo permaneceu legível; o teste de abertura é necessário.</li>
      </ol></div>
      <div class="danger-box"><strong>Renomear a extensão não converte o formato</strong><p>Trocar <code>.csv</code> por <code>.xlsx</code> muda apenas o rótulo e pode impedir a abertura correta. Conversão e exportação exigem o aplicativo adequado e serão tratadas no capítulo 06.</p></div>

      <div class="artifact-card"><strong>P-02 · padrão adotado</strong><p><code>AAAA-MM-DD_tipo_assunto_estado_vNN.ext</code>. Usar letras, números, hífen e sublinhado; evitar caracteres reservados e espaços nas extremidades. Registrar exceções exigidas pela organização.</p></div>
      <details class="sources-box"><summary>Fontes oficiais consultadas</summary><ul><li><a href="https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint" target="_blank" rel="noopener">Microsoft Support — restrições de nomes e sincronização no OneDrive/SharePoint</a></li></ul></details>
      <div class="bridge-box"><strong>Consequência</strong><p>Os nomes agora ajudam a localizar e interpretar estado. A próxima decisão é mais delicada: quando copiar, mover, substituir ou abrir uma nova versão sem perder a possibilidade de voltar?</p></div>
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
        <span class="eyebrow">Terça-feira · 10h40 · correção de Marina</span>
        <h2>Marina confirma a Equipe Sol no turno da tarde, mas ainda não autoriza apagar a lista anterior.</h2>
        <p>A mudança resolve uma divergência de P-01. Lia precisa incorporar a confirmação e manter o estado que permitiu explicar de onde a nova lista veio.</p>
      </div>

      <div class="note-box"><strong>P-03 acompanhará cada mudança</strong><p>Como nome e data não provam aprovação, crie <code>P-03_versoes-e-aprovacoes.txt</code> na raiz de <code>10_Em_trabalho</code>. P-03 é o controle cumulativo que liga cada versão à fonte anterior, mudança, autoria, evidência de autorização, validação, estado e pendência. O modelo abaixo será completado após o teste.</p></div>

      <div class="table-wrap"><table>
        <thead><tr><th>Operação</th><th>Efeito desejado</th><th>Risco principal</th><th>Validação</th></tr></thead>
        <tbody>
          <tr><td>Copiar</td><td>manter origem e criar outra instância</td><td>duas cópias passarem a divergir</td><td>origem e destino abrem; responsável está definido</td></tr>
          <tr><td>Mover</td><td>mudar localização ou estado</td><td>atalhos e pessoas perderem a referência</td><td>existe no destino e não ficou duplicado por engano</td></tr>
          <tr><td>Substituir</td><td>trocar o conteúdo no mesmo lugar</td><td>perder a única versão válida</td><td>estado anterior preservado e novo conteúdo conferido</td></tr>
          <tr><td>Nova versão</td><td>registrar evolução controlada</td><td>criar versões sem fonte de verdade</td><td>P-03 liga versão, mudança, autor, aprovação e estado</td></tr>
        </tbody>
      </table></div>

      <h3>Aplicar · uma mudança, uma prova</h3>
      <div class="task-box"><ol>
        <li>Confirme que as fontes recebidas continuam em <code>10_Em_trabalho/fontes_recebidas</code>.</li>
        <li>Use a cópia da lista mais completa como candidata. Nomeie-a com estado <code>em-revisao_v01</code>.</li>
        <li>Confira F002: turno da tarde e status confirmado. Confira também F001, F003 e F004; validar apenas a linha alterada pode esconder regressão.</li>
        <li>Registre em P-03: origem, diferenças observadas, confirmação de Marina, data e limite — a lista ainda não está publicada.</li>
        <li>Copie a candidata para <code>20_Para_revisao</code>. Abra a cópia no destino e conte cabeçalho + quatro registros.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que o teste prova</strong><p>A candidata contém as quatro equipes e incorpora a confirmação sobre a Equipe Sol. Não prova que a lista pública já atende ao princípio de dados mínimos nem que Paulo aprovou a publicação.</p></div>

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
      <div class="bridge-box"><strong>Próximo problema</strong><p>A candidata ainda é CSV, adequado para dados tabulares, mas o público precisa de uma entrega fácil de consultar e que não exponha campos internos. Formato de trabalho e formato de entrega não são necessariamente o mesmo.</p></div>
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
        <h2>Renato precisa recalcular valores; Paulo só precisa conferir o cronograma; o público deve receber uma versão estável.</h2>
        <p>Um único formato não atende igualmente edição, troca de dados e distribuição. P-00 exige destinos diferentes, portanto a decisão também muda.</p>
      </div>

      <div class="format-grid">
        <article><span class="format-tag">Trabalho</span><strong>Editável nativo</strong><p><code>.odt/.docx</code>, <code>.ods/.xlsx</code> ou <code>.odp/.pptx</code>. Preserva recursos de edição, mas pode variar entre aplicativos.</p></article>
        <article><span class="format-tag">Intercâmbio</span><strong>Dados simples</strong><p><code>.csv</code> troca uma tabela, mas não preserva fórmulas, várias abas, gráficos ou formatação completa.</p></article>
        <article><span class="format-tag">Entrega</span><strong>Leitura estável</strong><p>PDF tende a preservar a apresentação visual, mas ainda precisa ser conferido e não substitui automaticamente a fonte editável.</p></article>
        <article><span class="format-tag">Imagem</span><strong>Uso visual</strong><p>SVG, PNG e JPEG têm finalidades diferentes. Uma imagem do texto não se torna documento acessível apenas por parecer correta.</p></article>
      </div>

      <section class="checkpoint" data-quiz-group>
        <h3>Escolha pelo uso</h3>
        <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Renato precisa recalcular; uma planilha editável preserva fórmulas e estrutura melhor que PDF."><p>Qual formato atende melhor à conferência e ao recálculo do orçamento?</p><label><input type="radio" name="q06a" value="a"> fotografia da tela</label><label><input type="radio" name="q06a" value="b"> somente PDF</label><label><input type="radio" name="q06a" value="c"> planilha editável, acompanhada da versão de entrega quando aprovada</label></div>
        <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="PDF reduz variações visuais, mas a equipe ainda precisa abrir, revisar páginas, fontes, imagens, links e acessibilidade."><p>Exportar para PDF prova que a entrega está correta?</p><label><input type="radio" name="q06b" value="a"> sim, sempre</label><label><input type="radio" name="q06b" value="b"> não; o arquivo exportado precisa ser aberto e validado</label><label><input type="radio" name="q06b" value="c"> somente se o nome contiver “final”</label></div>
        <button class="action-button" type="button" data-check-quiz>Conferir escolhas</button><div class="quiz-result" aria-live="polite"></div>
      </section>

      <h3>Procedimento que será reutilizado</h3>
      <ol class="numbered-process">
        <li><strong>Defina o destino.</strong><span>Quem vai editar, importar, ler ou imprimir?</span></li>
        <li><strong>Preserve a fonte.</strong><span>Salve no formato de trabalho antes de exportar.</span></li>
        <li><strong>Exporte pelo aplicativo.</strong><span>Não troque apenas a extensão.</span></li>
        <li><strong>Abra a entrega.</strong><span>Confira conteúdo, páginas, cortes, caracteres, links e dados.</span></li>
        <li><strong>Registre a relação.</strong><span>P-03 deve ligar fonte editável e entrega publicada.</span></li>
      </ol>
      <div class="note-box"><strong>Limite deste capítulo</strong><p>A produção detalhada de documentos, planilhas e apresentações pertence aos módulos seguintes. Aqui o aluno constrói o critério que impedirá exportações e anexos inadequados.</p></div>
      <div class="bridge-box"><strong>Nova necessidade</strong><p>Mesmo um arquivo correto pode chegar à pessoa errada com poder excessivo. Antes de colocar a Feira em uma pasta colaborativa, a equipe precisa transformar funções em permissões.</p></div>
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
        <span class="eyebrow">Quarta-feira · 10h30 · pasta colaborativa</span>
        <h2>Lia precisa organizar; Paulo precisa aprovar; visitantes só precisam consultar o que foi publicado.</h2>
        <p>Se a pasta inteira for aberta como editável, um visitante poderá alterar ou remover material. Se todos receberem apenas visualização, o fluxo de revisão para. A permissão nasce da função e do conteúdo.</p>
      </div>

      <div class="note-box"><strong>P-04 transforma necessidade em acesso</strong><p>Crie <code>P-04_permissoes.txt</code> na raiz de <code>10_Em_trabalho</code>. Esse registro cumulativo é uma matriz: para cada pessoa ou grupo, anote necessidade, conteúdo, menor permissão suficiente, data do teste, resultado e limite. A tabela a seguir fornece as primeiras linhas.</p></div>

      <h3>P-04 · matriz antes do clique</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Pessoa/grupo</th><th>Necessidade</th><th>Conteúdo</th><th>Permissão mínima</th></tr></thead>
        <tbody>
          <tr><td>Lia</td><td>organizar e preparar candidatas</td><td>entrada e trabalho</td><td>editar</td></tr>
          <tr><td>Paulo</td><td>revisar e aprovar</td><td>para revisão</td><td>comentar no arquivo, quando suportado; editar somente se necessário</td></tr>
          <tr><td>Renato</td><td>conferir orçamento</td><td>orçamento, não inscrições</td><td>comentar/editar somente no escopo necessário</td></tr>
          <tr><td>Público</td><td>consultar entregas liberadas</td><td>publicado</td><td>visualizar</td></tr>
        </tbody>
      </table></div>

      <div class="visual-lab"><div class="visual-header"><span>Representação didática · herança de acesso</span><h3>A pasta-pai pode conceder acesso ao que está dentro</h3></div><div class="permission-map"><div class="folder-node parent"><strong>Feira_Projetos_2026</strong><span>quem recebe acesso aqui?</span></div><div class="folder-children"><span>10_Em_trabalho</span><span>20_Para_revisao</span><span>30_Publicado</span></div></div><p class="visual-question"><strong>Decida:</strong> compartilhar a pasta-pai com o público atende P-00 ou expõe também material interno?</p></div>

      <h3>Laboratório controlado</h3>
      <div class="task-box"><ol>
        <li>Use somente uma conta autorizada pela escola e os arquivos fictícios da atividade. Se não houver serviço autorizado, execute a simulação no próprio P-04 com os perfis fictícios <code>Teste-Visualizador</code> e <code>Teste-Editor</code>; não improvise com conta pessoal.</li>
        <li>Crie ou envie apenas uma pasta de teste chamada <code>MBB_Feira_Compartilhamento_Teste</code>.</li>
        <li>Mantenha o acesso geral como <strong>restrito</strong>. Adicione somente a conta de teste indicada pelo professor; na simulação local, registre qual perfil receberia o acesso.</li>
        <li>Conceda <strong>visualização</strong> e peça ao destinatário para abrir e tentar identificar se consegue editar. Não use arquivo real como teste.</li>
        <li>Se o processo exigir edição da pasta, altere conscientemente o papel e repita o teste. Para comentário, use um arquivo compatível: alguns serviços não oferecem papel de comentarista para pastas.</li>
        <li>Remova o acesso de teste e confirme com o destinatário que o arquivo não abre mais. Registre horário, conta, papel, resultado e limite.</li>
      </ol></div>
      <div class="danger-box"><strong>Não teste “qualquer pessoa com o link” sem necessidade</strong><p>Um link pode ser encaminhado. Restrições de download, impressão ou cópia também não impedem que alguém reproduza o conteúdo de outras maneiras. Compartilhe dados mínimos e confirme destinatários antes de enviar.</p></div>
      <div class="evidence-box"><strong>Se o resultado divergir</strong><p>Não amplie o acesso para “resolver”. Verifique conta usada, permissão da pasta-pai, papel atribuído, propriedade do item e políticas da organização. Registre o ponto em que o teste falhou e solicite apoio do responsável.</p></div>

      <details class="sources-box"><summary>Fontes oficiais consultadas</summary><ul><li><a href="https://support.google.com/drive/answer/7166529?hl=pt-BR" target="_blank" rel="noopener">Ajuda do Google Drive — compartilhamento de pastas e herança</a></li><li><a href="https://support.google.com/drive/answer/2494893?hl=pt-BR" target="_blank" rel="noopener">Ajuda do Google Drive — interromper, limitar ou alterar compartilhamento</a></li><li><a href="https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint" target="_blank" rel="noopener">Microsoft Support — limites e restrições do OneDrive/SharePoint</a></li></ul></details>
      <div class="bridge-box"><strong>Consequência</strong><p>A equipe agora sabe quem deve acessar o quê. Ainda não pode afirmar que sobreviverá a uma exclusão ou alteração errada. Histórico, lixeira, sincronização e cópia separada precisam ser testados, não apenas citados.</p></div>
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
        <h2>A mesma pasta aparece em SEC-03 e COORD-02. Paulo pergunta: “Então está protegida?”</h2>
        <p>A equipe encontra quatro mecanismos relacionados — sincronização, histórico, lixeira e cópia em outro destino —, mas ainda não executou restauração. Antes de responder, precisa prever o que a tela em dois computadores realmente demonstra.</p>
      </div>

      <section class="decision-box">
        <h3>Preveja antes do teste</h3>
        <div class="choice-list" data-choice data-answer="c" data-explanation="A presença em dois computadores demonstra disponibilidade naquele momento. Não revela, sozinha, se uma exclusão será propagada nem se há versão recuperável.">
          <label><input type="radio" name="d08" value="a"> a pasta está protegida contra qualquer perda;</label>
          <label><input type="radio" name="d08" value="b"> os dois computadores são automaticamente backups independentes;</label>
          <label><input type="radio" name="d08" value="c"> ainda não há evidência suficiente de recuperação.</label>
          <button class="action-button" type="button" data-check-choice>Conferir previsão</button>
          <div class="choice-result" aria-live="polite"></div>
        </div>
      </section>

      <div class="comparison-grid four">
        <div><strong>Sincronização</strong><p>Mantém estados alinhados entre locais; pode propagar mudanças indesejadas.</p></div>
        <div><strong>Histórico</strong><p>Guarda versões anteriores segundo regras e retenção do serviço.</p></div>
        <div><strong>Lixeira</strong><p>Retém itens excluídos por tempo e condições definidos.</p></div>
        <div><strong>Cópia independente</strong><p>Em outro destino autorizado, reduz dependência do mesmo fluxo, mas precisa de escopo, proteção e teste.</p></div>
      </div>

      <div class="template-box"><label for="modelo-p05"><strong>P-05 · teste de recuperação</strong></label><p>P-05 é o registro cumulativo que limita qualquer promessa de recuperação ao que foi realmente testado. Crie <code>P-05_recuperacao.txt</code> em <code>10_Em_trabalho</code>, copie o modelo e preencha cada campo durante os experimentos.</p><textarea id="modelo-p05" class="record-template" rows="11" readonly>Cenário testado:
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

      <h3>Experimento A · retorno local sem sobrescrever</h3>
      <div class="task-box"><ol>
        <li>Selecione um arquivo fictício de <code>10_Em_trabalho</code> e copie-o para <code>90_Arquivo/teste-recuperacao</code>.</li>
        <li>Anote nome, tamanho e uma frase ou linha de controle do conteúdo original.</li>
        <li>Na cópia de trabalho, faça uma alteração visível e salve. Não altere a cópia de referência.</li>
        <li>Restaure a partir de <code>90_Arquivo</code> com outro nome, dentro de uma pasta <code>restaurado_teste</code>. Não sobrescreva a versão atual.</li>
        <li>Abra o restaurado e compare a linha de controle, o tamanho esperado e a capacidade de uso.</li>
      </ol></div>
      <div class="evidence-box"><strong>Interpretação</strong><p>Se a cópia restaurada abre e contém o estado esperado, o teste demonstra recuperação desse arquivo, nesse momento e a partir desse destino. Como ambas as pastas podem estar no mesmo disco, ele não demonstra recuperação após falha física do equipamento.</p></div>

      <h3>Experimento B · histórico do serviço, quando autorizado</h3>
      <div class="task-box"><ol>
        <li>Use apenas um arquivo fictício na pasta de teste do capítulo 07.</li>
        <li>Registre o conteúdo inicial, altere uma linha e aguarde o serviço indicar sincronização concluída.</li>
        <li>Abra o <strong>histórico de versões</strong> do arquivo. Identifique data, hora e versão anterior antes de restaurar.</li>
        <li>Quando possível, baixe ou copie a versão anterior para comparação antes de restaurá-la como atual.</li>
        <li>Restaure, abra o arquivo e confira a linha de controle. Registre também a política de retenção exibida ou informada pelo serviço.</li>
      </ol></div>
      <div class="danger-box"><strong>Interrompa se o item não for fictício</strong><p>Restaurar uma versão pode alterar o arquivo atual para colaboradores. Não experimente em material de produção. Se o histórico não aparecer, não conclua que ele nunca existiu: conta, tipo de arquivo, política ou interface podem explicar a ausência.</p></div>

      <details class="sources-box"><summary>Fontes oficiais consultadas</summary><ul><li><a href="https://support.microsoft.com/en-us/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive" target="_blank" rel="noopener">Microsoft Support — restaurar versão anterior no OneDrive</a></li><li><a href="https://support.google.com/drive/answer/2409045?hl=pt-BR" target="_blank" rel="noopener">Ajuda do Google Drive — atividades e versões de arquivos</a></li></ul></details>
      <div class="bridge-box"><strong>Fechamento do percurso</strong><p>P-00 a P-05 agora ligam pedido, fontes, estrutura, nomes, versões, acesso e recuperação. Falta provar que outra pessoa consegue receber o conjunto e tomar decisões sem depender da memória de Lia.</p></div>
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
        <h2>Lia ficará no auditório. Outra pessoa precisa concluir a revisão sem perguntar “onde está o arquivo certo?”.</h2>
        <p>Você recebe o pacote inicial e P-00 a P-05. Marina confirmou a mudança da Equipe Sol, mas <strong>o horário de abertura e a aprovação da gráfica continuam sem evidência</strong>. Uma boa entrega não inventa essas respostas: preserva as pendências e mostra o próximo responsável.</p>
      </div>

      <div class="note-box"><strong>Ponto de partida do desafio</strong><p>Continue os arquivos <code>P-00</code> a <code>P-05</code> criados nas aulas anteriores e guardados em <code>10_Em_trabalho</code>; use a última versão validada de cada um. Se estiver estudando sem outra pessoa, feche o material ao terminar e faça a validação cruzada em uma segunda rodada, assumindo o papel de quem recebe e usando somente o índice e os registros.</p></div>

      <h3>Missão</h3>
      <div class="task-box"><ol>
        <li>Reconstrua a árvore de trabalho e preserve o ZIP original em <code>00_Entrada</code>.</li>
        <li>Complete P-01 com os oito itens e compare as duas inscrições.</li>
        <li>Crie cópias de trabalho com o padrão P-02; não renomeie as fontes recebidas.</li>
        <li>Registre em P-03 a candidata de inscrições com quatro equipes e a confirmação de Marina.</li>
        <li>Produza uma lista pública em CSV apenas com inscrições confirmadas e as colunas <code>equipe</code> e <code>projeto</code>. Mantenha status e turno somente no material interno.</li>
        <li>Coloque candidatas em <code>20_Para_revisao</code>; não mova o cronograma para <code>30_Publicado</code> enquanto o horário permanecer pendente.</li>
        <li>Preencha P-04 para Lia, Paulo, Renato e público. Se houver serviço autorizado, teste somente a pasta fictícia.</li>
        <li>Execute e registre uma recuperação controlada em P-05.</li>
        <li>Entregue um índice curto: conteúdo, fonte, estado, responsável, pendência e próxima ação.</li>
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
        <div class="artifact-card"><strong>Quem entrega</strong><p>Não explica oralmente onde colocou cada coisa. Entrega somente o índice e os registros.</p></div>
        <div class="artifact-card"><strong>Quem recebe</strong><p>Localiza a lista candidata, identifica duas pendências, confere a fonte e aponta a próxima autorização necessária.</p></div>
      </div>
      <div class="evidence-box"><strong>Critério de sucesso</strong><p>Se quem recebe conclui a tarefa sem depender da memória de Lia, os registros e a estrutura sustentam continuidade. Se precisa adivinhar, o trabalho ainda não está entregue — mesmo que todas as pastas estejam bonitas.</p></div>

      <h3>Avaliação</h3>
      <div class="rubric-grid">
        <article><strong>Entender</strong><p>transformou o pedido em critérios e separou público, conteúdo e responsabilidade;</p></article>
        <article><strong>Experimentar</strong><p>executou em cópia, confirmou alvos e preservou retorno;</p></article>
        <article><strong>Analisar</strong><p>comparou conteúdo, limitou conclusões e manteve pendências;</p></article>
        <article><strong>Aplicar</strong><p>entregou pacote verificável, acesso mínimo e recuperação testada.</p></article>
      </div>
      <div class="bridge-box"><strong>Ponte para Documentos Profissionais</strong><p>A equipe organizou fontes e decisões. O próximo módulo transformará o cronograma e os comunicados em documentos estruturados, revisáveis, acessíveis e adequados à publicação — reutilizando P-00 a P-05.</p></div>
    `
  }
];
