window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'planilhas-diagnostico', number: '00', menuTitle: 'A planilha que esconde erros',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Diagnóstico · dado, fórmula e decisão',
    title: 'Uma planilha pode parecer organizada e ainda responder errado',
    objective: 'Diagnosticar uma planilha problemática preservando dados, fórmulas e sinais de erro.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 8h05 · reunião financeira</span><h2>Renato encontra dois totais diferentes para a Feira.</h2><p>Alguns valores incluem “R$” digitado, um total foi escrito manualmente e materiais aparecem de formas inconsistentes. Paulo precisa decidir compras, mas antes a equipe precisa descobrir o que a planilha realmente está calculando.</p></div>
      <section class="decision-box"><h3>Primeira ação segura</h3><div class="choice-list" data-choice data-answer="c" data-explanation="A cópia preservada permite investigar estrutura, tipos e fórmulas sem apagar pistas."><label><input type="radio" name="d300" value="a"> apagar linhas que parecem duplicadas;</label><label><input type="radio" name="d300" value="b"> substituir o total pelo valor esperado;</label><label><input type="radio" name="d300" value="c"> preservar a fonte, abrir uma cópia e localizar entradas, cálculos e resultados.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>

      <h3>Faça comigo · abra sem corrigir</h3>
      <div class="task-box"><strong>Ferramenta principal: LibreOffice Calc</strong><ol>
        <li>Baixe a <a href="../downloads/informatica-produtividade/modulo-03/dados-feira.ods" download>planilha de dados fictícios da Feira</a> para <code>00_Entrada</code>.</li>
        <li>Copie para <code>10_Em_trabalho</code> como <code>2026-09-08_dados-feira_em-analise_v01.ods</code>.</li>
        <li>Abra a cópia e identifique as abas <strong>Inscricoes</strong>, <strong>Orcamento</strong>, <strong>Materiais</strong>, <strong>Cronograma</strong> e <strong>Participantes</strong>.</li>
        <li>Clique em células com aparências diferentes e observe a barra de entrada: número, texto ou fórmula iniciada por <code>=</code>.</li>
        <li>Use <strong>Exibir → Mostrar fórmulas</strong> e depois volte à exibição normal.</li>
        <li>Não exclua, classifique nem “conserte” nada ainda.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que você deve perceber</strong><p>há cabeçalhos incompletos, tipos misturados, uma fórmula ausente, uma referência deslocada e uma entrada inválida preparada.</p></div>
      <p>No <code>CONTROLE_DA_FEIRA.txt</code>, crie <strong>[P-20] Planilha</strong> e anote somente: arquivo analisado, abas, sintomas encontrados e decisões ainda pendentes.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Antes de calcular, precisamos garantir que cada linha e cada coluna representam uma coisa só.</p></div>`
  },
  {
    id: 'planilhas-estrutura', number: '01', menuTitle: 'Uma linha, um registro',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Estrutura tabular · campos, registros e identificadores',
    title: 'Uma linha representa um registro; uma coluna, um campo',
    objective: 'Reestruturar dados para permitir cálculo, filtro e conferência sem ambiguidade.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 8h40 · aba Materiais</span><h2>“Cabos, extensões e adaptadores” aparece em uma única célula.</h2><p>Lia precisa saber quantidade e responsável de cada item. Com três materiais misturados na mesma célula, não é possível filtrar ou atribuir corretamente.</p></div>
      <div class="visual-lab"><div class="visual-header"><span>Estrutura tabular</span><h3>Dados que respondem perguntas</h3></div><div class="table-anatomy"><span><b>Linha 1</b> cabeçalhos</span><span><b>Cada linha</b> um material</span><span><b>Cada coluna</b> um atributo</span><span><b>ID</b> identificação estável</span></div></div>
      <div class="task-box"><ol>
        <li>Salve <code>v01</code> como <code>v02.ods</code>.</li>
        <li>Na aba <strong>Materiais</strong>, copie a tabela original para uma área temporária à direita.</li>
        <li>Use os cabeçalhos <code>ID_Material</code>, <code>Material</code>, <code>Categoria</code>, <code>Quantidade</code>, <code>Unidade</code>, <code>Responsavel</code> e <code>Status</code>.</li>
        <li>Separe cada material em uma linha. Não deixe linhas vazias no meio e não mescle células.</li>
        <li>Crie IDs como <code>MAT-001</code>, <code>MAT-002</code>.</li>
        <li>Compare item por item com a área temporária antes de considerar a reorganização concluída.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>qualquer linha descreve exatamente um material e quantidade/unidade estão em colunas diferentes.</p></div>
      <p>Em <strong>[P-20] Planilha</strong>, registre somente os campos definidos e a regra “uma linha = um material”.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A estrutura está melhor, mas aparência de número ou data não garante que o Calc armazenou o tipo correto.</p></div>`
  },
  {
    id: 'planilhas-tipos', number: '02', menuTitle: 'Tipos de dados sem disfarce',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Entrada · texto, número, data, moeda e percentual',
    title: 'Formato muda a aparência; não conserta o tipo',
    objective: 'Distinguir valor armazenado de apresentação e corrigir entradas sem perder o original.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 9h25 · aba Orçamento</span><h2>Uma célula mostra “R$ 180,00”, mas a soma a ignora.</h2><p>O símbolo foi digitado junto com o número. Aplicar aparência de moeda não transforma texto em valor calculável.</p></div>
      <h3>Experimente e prove</h3>
      <div class="task-box"><ol>
        <li>Salve como <code>v03.ods</code>. Na aba <strong>Orcamento</strong>, clique em <code>E6</code> e observe o conteúdo na barra de entrada.</li>
        <li>Em <code>L6</code>, digite <code>=ÉNÚMERO(E6)</code> (ou <code>=ISNUMBER(E6)</code> na interface inglesa).</li>
        <li>O resultado esperado é <strong>FALSO</strong>. Antes de corrigir, escreva <code>Valor_original</code> em K1 e copie o conteúdo de E6 para K6.</li>
        <li>Em E6, digite apenas <code>79,90</code> conforme a configuração regional e aplique formato <strong>Moeda</strong>.</li>
        <li>Confira L6: agora deve retornar <strong>VERDADEIRO</strong>.</li>
        <li>Para datas, use valor de data e formato de data; não misture “a confirmar” na mesma coluna.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que o teste demonstra</strong><p>o valor armazenado e a aparência são coisas diferentes. Formatar não converte automaticamente um texto em número.</p></div>
      <p>Em <strong>[P-20] Planilha</strong>, acrescente os tipos esperados para os campos que serão usados em cálculo.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Com números reais, agora podemos construir fórmulas que respondam às perguntas de Renato.</p></div>`
  },
  {
    id: 'planilhas-formulas', number: '03', menuTitle: 'Fórmulas respondem perguntas',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Cálculo · operadores, células e cópia',
    title: 'Toda fórmula começa com uma pergunta verificável',
    objective: 'Construir e copiar fórmulas simples, comparando o resultado com cálculo independente.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 10h10 · decisão de compra</span><h2>Quanto custa cada linha do orçamento?</h2><p>A pergunta é concreta: quantidade × valor unitário. O resultado precisa mudar quando uma entrada muda.</p></div>
      <div class="task-box"><ol>
        <li>Confirme que <code>D</code> contém Quantidade, <code>E</code> Valor_unitario e <code>F</code> Total_item.</li>
        <li>Em <code>F2</code>, confira <code>=D2*E2</code> e faça uma conferência independente com calculadora.</li>
        <li>Observe que F5 não contém a fórmula esperada. Selecione F2 e arraste a alça de preenchimento até F9.</li>
        <li>Confira F3 e F5 na barra de fórmulas: devem usar as linhas correspondentes.</li>
        <li>Formate a coluna F como moeda.</li>
        <li>Altere temporariamente uma quantidade, observe o recálculo e use <strong>Ctrl+Z</strong>.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>o total reage às entradas e pelo menos duas linhas batem com um cálculo independente.</p></div>
      <p>Em <strong>[P-20] Planilha</strong>, registre uma única fórmula-modelo e as linhas usadas na conferência.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Uma taxa única de contingência precisa permanecer fixa quando a fórmula for copiada.</p></div>`
  },
  {
    id: 'planilhas-referencias', number: '04', menuTitle: 'Referências relativas e absolutas',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Referenciamento · comportamento ao copiar',
    title: 'O cifrão fixa uma referência porque a regra exige',
    objective: 'Escolher referências relativas ou absolutas conforme o que deve variar ao copiar uma fórmula.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 10h45 · contingência aprovada</span><h2>Todos os itens recebem a mesma taxa de 5%.</h2><p>O total muda linha a linha; a taxa permanece em <code>J2</code>. Ao copiar a fórmula, só uma dessas referências deve andar.</p></div>
      <section class="decision-box"><h3>Qual fórmula pode ser copiada?</h3><div class="choice-list" data-choice data-answer="b" data-explanation="F2 deve variar por linha, mas $J$2 precisa continuar apontando para a taxa única."><label><input type="radio" name="d304" value="a"> <code>=F2*(1+J2)</code></label><label><input type="radio" name="d304" value="b"> <code>=F2*(1+$J$2)</code></label><label><input type="radio" name="d304" value="c"> digitar 1,05 em todas as fórmulas</label><button class="action-button" type="button" data-check-choice>Conferir previsão</button><div class="choice-result" aria-live="polite"></div></div></section>
      <div class="task-box"><ol>
        <li>Confirme <code>Taxa_contingencia</code> em J1 e <code>5%</code> em J2.</li>
        <li>Em G2, confira <code>=F2*(1+$J$2)</code>.</li>
        <li>Use <kbd>F4</kbd> enquanto edita J2, se disponível, e observe os modos de fixação.</li>
        <li>Copie G2 até G9. Em G3 e G9, F deve mudar de linha e J2 deve permanecer fixo.</li>
        <li>Altere J2 temporariamente para 10%, observe todas as linhas e desfaça.</li>
      </ol></div>
      <p>Em <strong>[P-20] Planilha</strong>, escreva apenas a regra: “taxa única em J2 → referência absoluta”.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Os cálculos por linha funcionam. Agora precisamos resumir total, média, quantidade e soma por condição.</p></div>`
  },
  {
    id: 'planilhas-funcoes', number: '05', menuTitle: 'Funções essenciais',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Análise · SOMA, MÉDIA, CONT.SE, SOMASE e SE',
    title: 'Funções são escolhidas pela pergunta',
    objective: 'Usar poucas funções essenciais para responder perguntas reais e validar seus intervalos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 13h15 · perguntas de Renato</span><h2>Qual é o total previsto? Quantos itens aguardam aprovação? Quanto já foi aprovado?</h2><p>Cada pergunta pede uma função e um intervalo. O nome da função vem depois da pergunta.</p></div>
      <div class="table-wrap"><table><thead><tr><th>Pergunta</th><th>Fórmula-modelo</th><th>O que conferir</th></tr></thead><tbody>
        <tr><td>Total previsto?</td><td><code>=SOMA(G2:G9)</code></td><td>todas as linhas, sem incluir o próprio total</td></tr>
        <tr><td>Média por item?</td><td><code>=MÉDIA(G2:G9)</code></td><td>tratamento dos ausentes</td></tr>
        <tr><td>Quantos pendentes?</td><td><code>=CONT.SE(H2:H9;"Pendente")</code></td><td>status escritos de forma consistente</td></tr>
        <tr><td>Total aprovado?</td><td><code>=SOMASE(H2:H9;"Aprovado";G2:G9)</code></td><td>intervalos do mesmo tamanho</td></tr>
      </tbody></table></div>
      <div class="task-box"><ol>
        <li>Na aba <strong>Orcamento</strong>, comece em M1 uma área chamada <strong>Resumo provisório</strong>.</li>
        <li>Escreva cada pergunta em uma célula e a fórmula correspondente ao lado.</li>
        <li>Selecione os intervalos com o mouse e confira os endereços antes de Enter.</li>
        <li>Conte ou some algumas linhas manualmente para obter uma estimativa independente.</li>
        <li>Se aparecer erro ou zero inesperado, investigue tipos, critérios e intervalos; não substitua por um número digitado.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue explicar qual pergunta cada fórmula responde e por que aquele intervalo foi usado.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>As funções por condição dependem de status padronizados. A planilha precisa impedir novas entradas como “OK”, “Aprov.” e “aprovado”.</p></div>`
  },
  {
    id: 'planilhas-validacao', number: '06', menuTitle: 'Validação de dados',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Qualidade de entrada · regras, lista e alerta',
    title: 'Validar na entrada custa menos do que corrigir depois',
    objective: 'Criar regras de validação e testar entradas válidas, inválidas e preexistentes.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 14h00 · cadastro compartilhado</span><h2>Marina digita “Confirmada”; Lia usa “OK”; Renato filtra “Aprovado”.</h2><p>Se o campo aceita qualquer texto, a análise quebra mesmo quando cada pessoa acredita ter escrito algo compreensível.</p></div>
      <div class="task-box"><ol>
        <li>Selecione somente as células de entrada da coluna Status.</li>
        <li>Use <strong>Dados → Validação</strong> e permita uma lista com <code>Pendente</code>, <code>Aprovado</code> e <code>Rejeitado</code>.</li>
        <li>Configure ajuda de entrada e alerta que impeça nova entrada inválida.</li>
        <li>Escolha “Aprovado” em uma linha de teste; depois tente digitar “OK” e observe o bloqueio.</li>
        <li>Use <strong>Ferramentas → Detetive → Marcar dados inválidos</strong> para localizar valores antigos que a nova regra não corrigiu.</li>
        <li>Corrija cada caso consultando a fonte; não faça substituição automática sem evidência.</li>
      </ol></div>
      <div class="note-box"><strong>Limite</strong><p>validação ajuda em novas entradas, mas dados antigos ou algumas colagens ainda precisam ser auditados.</p></div>
      <p>Em <strong>[P-20] Planilha</strong>, registre os valores permitidos para Status.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora Paulo quer ver apenas itens pendentes do maior para o menor valor sem separar as colunas.</p></div>`
  },
  {
    id: 'planilhas-filtro', number: '07', menuTitle: 'Classificar e filtrar sem quebrar',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Exploração · intervalo completo, ordem e subconjunto',
    title: 'Filtro esconde temporariamente; classificação muda a ordem',
    objective: 'Filtrar e classificar o intervalo completo preservando a integridade de cada registro.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · 15h00 · priorização</span><h2>Paulo pede os itens pendentes do maior para o menor valor.</h2><p>Ordenar somente a coluna de valores separaria custo, fornecedor e status. A linha inteira precisa continuar junta.</p></div>
      <div class="task-box"><ol>
        <li>Salve uma nova versão antes de classificar.</li>
        <li>Ative <strong>Dados → Autofiltro</strong> e filtre Status por <strong>Pendente</strong>.</li>
        <li>Conte as linhas visíveis e compare com o resultado de <code>CONT.SE</code>.</li>
        <li>Com o intervalo completo, use <strong>Dados → Classificar</strong> por <code>Total_com_contingencia</code> em ordem decrescente.</li>
        <li>Escolha dois IDs e confirme que material, fornecedor, status e valor permanecem na mesma linha.</li>
        <li>Remova o filtro e confirme que todos os registros reaparecem.</li>
      </ol></div>
      <div class="danger-box"><strong>Se as colunas se separarem</strong><p>use <strong>Ctrl+Z</strong> imediatamente. Não tente “encaixar” os dados visualmente.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Filtro responde casos específicos. A reunião precisa de um resumo que se atualize a partir dos dados.</p></div>`
  },
  {
    id: 'planilhas-resumo', number: '08', menuTitle: 'Resumo e análise',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Síntese · perguntas, indicadores e limites',
    title: 'Um resumo mostra respostas e mantém o caminho até os dados',
    objective: 'Construir um painel simples de indicadores verificáveis sem duplicar manualmente resultados.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 8h20 · reunião de acompanhamento</span><h2>Renato tem dois minutos para explicar o orçamento.</h2><p>Ele precisa mostrar total previsto, total aprovado, pendências e maior despesa. Copiar números à mão faria o resumo envelhecer assim que a origem mudasse.</p></div>
      <div class="task-box"><ol>
        <li>Crie uma nova aba <strong>Resumo</strong>.</li>
        <li>Em A1:B5, escreva rótulos e fórmulas que referenciem a aba Orcamento, como <code>=SOMA(Orcamento.G2:G9)</code>.</li>
        <li>Use <code>=MÁXIMO(Orcamento.G2:G9)</code> para maior valor e <code>CONT.SE</code> para pendências.</li>
        <li>Em C, escreva a pergunta respondida por cada indicador e a data da atualização.</li>
        <li>Altere temporariamente um valor na origem e confirme que o resumo se atualiza; depois desfaça.</li>
      </ol></div>
      <div class="evidence-box"><strong>Interprete</strong><p>escreva uma conclusão sustentada pelos indicadores e uma decisão que ainda não pode ser tomada por falta de informação.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Um gráfico só vale a pena se tornar uma comparação mais clara do que a tabela.</p></div>`
  },
  {
    id: 'planilhas-graficos', number: '09', menuTitle: 'Gráficos com pergunta',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Visualização · comparação, escala e fonte',
    title: 'O gráfico existe para tornar uma relação visível',
    objective: 'Escolher e construir um gráfico cuja forma corresponda à pergunta e aos dados.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 9h10 · reunião com Paulo</span><h2>Qual categoria concentra mais custo aprovado?</h2><p>Essa é uma comparação entre categorias. O gráfico deve facilitar essa leitura, não apenas decorar a aba.</p></div>
      <section class="decision-box"><h3>Qual forma ajuda a comparar?</h3><div class="choice-list" data-choice data-answer="a" data-explanation="Barras permitem comparar magnitudes entre categorias em uma escala comum."><label><input type="radio" name="d309" value="a"> barras por categoria;</label><label><input type="radio" name="d309" value="b"> pizza 3D com todas as linhas;</label><label><input type="radio" name="d309" value="c"> linha temporal sem datas.</label><button class="action-button" type="button" data-check-choice>Conferir escolha</button><div class="choice-result" aria-live="polite"></div></div></section>
      <div class="task-box"><ol>
        <li>Na aba Resumo, crie uma tabela Categoria × Total aprovado.</li>
        <li>Em E2, use <code>=SOMASES(Orcamento.G$2:G$9;Orcamento.C$2:C$9;D2;Orcamento.H$2:H$9;"Aprovado")</code> e copie para baixo.</li>
        <li>Selecione apenas a pequena tabela e use <strong>Inserir → Gráfico</strong>.</li>
        <li>Escolha <strong>Barras</strong> ou <strong>Colunas</strong> e dê o título “Custo aprovado por categoria (R$)”.</li>
        <li>Confira se o eixo começa em zero e compare pelo menos duas barras com os valores da tabela.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>em poucos segundos uma pessoa identifica qual categoria tem maior custo e consegue voltar à tabela para ver o valor exato.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O resumo funciona na tela. Agora precisamos imprimir/exportar apenas o que realmente será entregue.</p></div>`
  },
  {
    id: 'planilhas-impressao', number: '10', menuTitle: 'Impressão e exportação',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Saída · área de impressão, repetição e PDF',
    title: 'Imprimir planilha exige decidir o que é a entrega',
    objective: 'Definir área, páginas e escala de saída sem esconder dados ou reduzir tudo até ficar ilegível.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 10h20 · pasta da reunião</span><h2>A primeira prévia gerou oito páginas, algumas quase vazias.</h2><p>Células de teste e outras abas entraram na impressão. A entrega correta é o resumo e o gráfico, legíveis e identificados.</p></div>
      <div class="task-box"><ol>
        <li>Na aba Resumo, selecione somente indicadores, interpretação e gráfico.</li>
        <li>Use <strong>Formatar → Intervalos de impressão → Definir</strong>.</li>
        <li>Configure A4 e orientação adequada. Inclua projeto e versão em cabeçalho/rodapé.</li>
        <li>Abra <strong>Arquivo → Visualizar impressão</strong> e confira página por página.</li>
        <li>Se houver corte, ajuste larguras, orientação ou quebras antes de usar escala.</li>
        <li>Exporte PDF, feche o Calc e abra o PDF separadamente.</li>
        <li>Confira total, gráfico, data, fonte e número de páginas.</li>
      </ol></div>
      <div class="danger-box"><strong>Antes de publicar</strong><p>verifique se dados internos, colunas ocultas ou comentários não foram incluídos na saída.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A saída parece correta. Falta provar que erros preparados e dependências de fórmulas podem ser encontrados.</p></div>`
  },
  {
    id: 'planilhas-auditoria', number: '11', menuTitle: 'Auditoria de erros',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Confiabilidade · precedentes, inválidos e reconciliação',
    title: 'Erro visível é melhor do que resultado falso e silencioso',
    objective: 'Auditar entradas, fórmulas e totais com rastreamento e conferência independente.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 13h30 · revisão final do orçamento</span><h2>O total mudou depois da reorganização. Isso foi correção ou criou outro erro?</h2><p>A diferença precisa ser explicada por evidência, não pelo valor que “parece certo”.</p></div>
      <div class="task-box"><ol>
        <li>Salve uma cópia <code>..._auditoria_vNN.ods</code> e anote o total antes do teste.</li>
        <li>Use <strong>Detetive → Marcar dados inválidos</strong> e localize células problemáticas.</li>
        <li>Selecione um total e use <strong>Rastrear precedentes</strong>. Confira se as setas alcançam somente as entradas esperadas.</li>
        <li>Mostre fórmulas e compare primeira, intermediária e última linha.</li>
        <li>Procure IDs duplicados sem excluir nada; volte à fonte antes de decidir.</li>
        <li>Faça uma conferência independente de uma amostra.</li>
        <li>Corrija uma causa por vez e observe o efeito antes/depois.</li>
      </ol></div>
      <div class="evidence-box"><strong>Atualize [P-20] somente com o que foi provado</strong><p>erro localizado → correção → efeito antes/depois → teste de validação. Se algo continuar sem evidência, permaneça como pendência.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora você vai transferir o método para um controle completo de inscrições e materiais.</p></div>`
  },
  {
    id: 'planilhas-desafio', number: '12', menuTitle: 'Desafio: controle da Feira',
    unit: 'Módulo 3 · Planilhas e Análise', technicalTitle: 'Integração · organização, cálculo, análise e prova',
    title: 'Desafio: produzir o Controle da Feira',
    objective: 'Entregar uma planilha auditável de inscrições e materiais, com resumo e saída adequada.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · novo corte dos dados</span><h2>Marina precisa cruzar inscrições confirmadas com materiais solicitados para o dia da Feira.</h2><p>Uma linha está propositalmente inconsistente. O desafio é localizar o problema pelo método aprendido, não por tentativa e erro.</p></div>
      <h3>Missão</h3>
      <div class="task-box"><ol>
        <li>Duplique a versão auditada.</li>
        <li>Em <strong>[P-20] Planilha — Controle da Feira</strong>, defina campos, tipos, identificadores, valores permitidos e regra para ausentes.</li>
        <li>Escreva as perguntas antes das fórmulas: participantes confirmados, materiais por categoria e itens pendentes.</li>
        <li>Use referência absoluta quando houver parâmetro único; valide status e filtre sem separar linhas.</li>
        <li>Crie Resumo com até cinco indicadores e um gráfico que responda uma comparação real.</li>
        <li>Detecte a inconsistência usando validação, Detetive ou reconciliação e registre o antes/depois.</li>
        <li>Defina área de impressão, exporte PDF e abra o resultado separadamente.</li>
        <li>Em <strong>[P-03] Versões</strong>, identifique o ODS validado e o PDF que passou pela conferência.</li>
      </ol></div>
      <div class="check-card"><strong>Aceite</strong><ul data-checklist>
        <li><label><input type="checkbox"> estrutura e tipos definidos;</label></li>
        <li><label><input type="checkbox"> fórmulas ligadas a perguntas e conferidas;</label></li>
        <li><label><input type="checkbox"> validações testadas;</label></li>
        <li><label><input type="checkbox"> resumo e gráfico sustentam uma interpretação;</label></li>
        <li><label><input type="checkbox"> erro foi localizado e retestado;</label></li>
        <li><label><input type="checkbox"> ODS e PDF foram abertos e comparados.</label></li>
      </ul><p class="check-progress" data-check-progress></p></div>
      <div class="bridge-box"><strong>Continuidade</strong><p>Os dados agora sustentam decisões. O próximo módulo transforma essas evidências em uma apresentação curta e compreensível.</p></div>`
  }
]);
