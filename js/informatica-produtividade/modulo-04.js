window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'apresentacoes-diagnostico', number: '00', menuTitle: 'O slide que ninguém acompanha',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Diagnóstico · mensagem, evidência e carga visual',
    title: 'Uma apresentação não é um documento repartido em telas',
    objective: 'Diagnosticar uma apresentação pela comunicação que ela permite, não por efeitos ou decoração.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 8h00 · ensaio em LAB-04</span><h2>Paulo tenta apresentar oito slides cheios de parágrafos em cinco minutos.</h2><p>Ele lê a tela, as famílias não veem os dados e um gráfico não informa a fonte. O arquivo abre, mas não cumpre a tarefa: explicar o que será a Feira, quando ocorrerá e como participar.</p></div>
      <section class="decision-box"><h3>Investigue primeiro</h3><div class="choice-list" data-choice data-answer="b" data-explanation="Sem objetivo, público, tempo e mensagem, qualquer mudança visual é chute."><label><input type="radio" name="d400" value="a"> trocar transições e cores;</label><label><input type="radio" name="d400" value="b"> registrar objetivo, público, tempo e mensagem de cada slide;</label><label><input type="radio" name="d400" value="c"> reduzir toda a fonte até caber.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>
      <h3>Laboratório seguro</h3><div class="task-box"><strong>Ferramenta principal: LibreOffice Impress</strong><ol><li>Baixe a <a href="../downloads/informatica-produtividade/modulo-04/apresentacao-feira-diagnostico.odp" download>apresentação problemática</a> para <code>00_Entrada</code>.</li><li>Copie-a para <code>10_Em_trabalho</code> como <code>2026-09-08_apresentacao-feira_em-analise_v01.odp</code>.</li><li>Abra a cópia no Impress e use o painel de miniaturas para contar slides e observar repetição.</li><li>Em cada slide, escreva em P-30 uma frase: “este slide precisa fazer o público compreender que...”. Se não conseguir, marque “sem mensagem definida”.</li><li>Execute a apresentação com <kbd>F5</kbd>, sem corrigir. Cronometre e registre onde a fala vira leitura, onde a evidência não é legível e onde falta fonte.</li><li>Pressione <kbd>Esc</kbd> para sair. Se o arquivo divergir, feche sem salvar e baixe novamente.</li></ol></div>
      <div class="artifact-card"><strong>P-30 iniciado</strong><span>Objetivo, público, tempo, mensagem por slide, evidência, visual, fonte, fala, acessibilidade, ensaio e contingência.</span></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O diagnóstico mostra excesso de conteúdo, mas o corte depende do que Paulo quer que as famílias saibam e façam ao final.</p></div>`
  },
  {
    id: 'apresentacoes-objetivo', number: '01', menuTitle: 'Objetivo e público',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Planejamento · resultado, audiência e tempo',
    title: 'Objetivo define o que entra e o que fica fora',
    objective: 'Definir resultado esperado, público, tempo e restrições antes de editar slides.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 8h40 · decisão da coordenação</span><h2>A apresentação não precisa ensinar todo o projeto.</h2><p>Paulo terá cinco minutos com famílias e visitantes. Ao final, o público deve entender a proposta, conhecer data e espaços e saber como acompanhar os projetos. Detalhes de montagem pertencem ao Guia do Expositor, não aos slides.</p></div>
      <div class="template-box"><label for="modelo-p30a"><strong>P-30 · enquadramento</strong></label><textarea id="modelo-p30a" class="record-template" rows="12" readonly>P-30 — ROTEIRO, FONTES E ENSAIO
Apresentação: Convite e orientação da Feira de Projetos
Público: famílias e visitantes
Tempo: 5 minutos
Resultado esperado: compreender propósito, data/local e como acompanhar
Mensagem central: os projetos mostram aprendizagens aplicadas e podem ser visitados por percurso
Evidências autorizadas: P-10 aprovado; indicadores públicos de P-20
Excluir: custos detalhados, dados pessoais, notas internas e histórico de revisão
Condição do local: projetor 16:9; sala clara; internet não garantida
Responsável pela fala: Paulo
Responsável técnico: Lia
Critério: uma mensagem por slide, fonte rastreável, leitura à distância e cópia offline</textarea><div><button class="action-button" type="button" data-copy="#modelo-p30a">Copiar enquadramento</button><span class="copy-status" aria-live="polite"></span></div></div>
      <div class="task-box"><strong>Roteiro de validação</strong><ol><li>Copie o modelo para P-30 e confirme objetivo, público e tempo com P-00.</li><li>Registre a condição do local e o equipamento que realmente será usado; não suponha internet.</li><li>Liste as fontes aprovadas e separe conteúdo interno do público.</li><li>Leia o resultado esperado para um colega e peça que diga o que o público deve compreender ou fazer.</li><li>Se ele listar detalhes fora do objetivo, refine o recorte antes de editar qualquer slide.</li></ol></div>
      <div class="note-box"><strong>Equivalentes essenciais</strong><p>No PowerPoint ou Google Apresentações, procure layout, tema/mestre, notas do apresentador e exportação/baixar em PDF. Registre a ferramenta e a versão; não tente reproduzir posições exatas de outra interface.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Com o resultado definido, a equipe pode selecionar conteúdo. Tudo o que é correto ainda não é necessariamente necessário para esta fala.</p></div>`
  },
  {
    id: 'apresentacoes-selecao', number: '02', menuTitle: 'Selecionar conteúdo',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Curadoria · relevância, evidência e corte',
    title: 'Selecionar é proteger a mensagem',
    objective: 'Escolher somente informações necessárias, autorizadas e sustentadas por fonte.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 9h15 · fontes reunidas</span><h2>Marina entrega a programação; Renato oferece quinze indicadores; Lia possui fotos do laboratório.</h2><p>Mais material não significa apresentação melhor. P-30 exige que cada item ajude o público a compreender ou agir dentro dos cinco minutos.</p></div>
      <h3>Triagem de fontes</h3><div class="task-box"><ol><li>Abra P-10 e P-20 aprovados; não copie de versões em trabalho.</li><li>Crie três listas em P-30: <strong>essencial</strong>, <strong>apoio para fala</strong> e <strong>fora desta apresentação</strong>.</li><li>Para cada candidato, pergunte: sustenta qual mensagem? está autorizado para público? cabe no tempo? a fonte pode ser localizada?</li><li>Escolha no máximo cinco mensagens: propósito, dimensão/participação, data/local, percurso e convite final.</li><li>Se um número não tiver definição ou data, não use. Se uma foto contiver pessoas identificáveis sem autorização, substitua por mapa/diagrama ou retire.</li><li>Registre o caminho/versão da fonte ao lado de cada item escolhido.</li></ol></div>
      <div class="evidence-box"><strong>Validação</strong><p>Leia somente a lista “essencial”. Ela deve formar uma explicação completa. Um dado interessante que não muda compreensão ou ação fica fora, mesmo sendo verdadeiro.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Há cinco mensagens, mas ainda não existe narrativa. É preciso decidir a ordem que conduz o público da proposta à ação.</p></div>`
  },
  {
    id: 'apresentacoes-roteiro', number: '03', menuTitle: 'Roteiro antes dos slides',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Narrativa · sequência, transição e tempo',
    title: 'O roteiro cabe em frases antes de virar slide',
    objective: 'Construir uma sequência de mensagens e reservar tempo de fala antes da composição visual.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 10h00 · quadro de roteiro</span><h2>Paulo percebe que começava pelos detalhes do cronograma antes de explicar a Feira.</h2><p>O público precisava saber primeiro por que valia a pena visitar; depois, ver evidências e orientações.</p></div>
      <div class="visual-lab"><div class="visual-header"><span>Fluxo de mensagem</span><h3>Uma pergunta por etapa</h3></div><ol class="numbered-process"><li><strong>Por quê?</strong><span>propósito</span></li><li><strong>O quê?</strong><span>projetos e evidência</span></li><li><strong>Quando/onde?</strong><span>data e percurso</span></li><li><strong>Como?</strong><span>participar</span></li><li><strong>Agora?</strong><span>convite final</span></li></ol><p class="visual-question"><strong>Ação:</strong> explique por que o orçamento detalhado não pertence a nenhuma etapa pública.</p></div>
      <h3>Montar P-30</h3><div class="task-box"><ol><li>Para cada etapa, escreva uma <strong>mensagem completa</strong>, não um tema: “A Feira reúne projetos que aplicam o que foi aprendido”.</li><li>Ao lado, registre evidência, visual possível e tempo de fala.</li><li>Reserve cerca de 30 segundos para abertura e 30 para encerramento; distribua o restante sem exigir velocidade artificial.</li><li>Escreva uma transição entre mensagens: “Para ver essa aprendizagem, organizamos o percurso em...”.</li><li>Leia o roteiro em voz alta com cronômetro, sem slides. Corte repetições até caber com pausa.</li><li>Somente então salve a apresentação como <code>..._roteiro_v02.odp</code>.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O roteiro determina mensagens. Agora o layout deve mostrar prioridade e relação, não acrescentar decoração.</p></div>`
  },
  {
    id: 'apresentacoes-hierarquia', number: '04', menuTitle: 'Hierarquia visual',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Composição · prioridade, alinhamento e consistência',
    title: 'O olhar precisa encontrar primeiro o que a fala apresenta primeiro',
    objective: 'Construir layouts consistentes em que posição, tamanho e contraste expressem prioridade.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 11h00 · primeiro slide reconstruído</span><h2>O título, a data e três logotipos competem pelo mesmo destaque.</h2><p>A mensagem principal é a Feira e sua proposta; data e local são apoio. Logotipos só permanecem quando exigidos e em posição secundária consistente.</p></div>
      <h3>Aplicar no Impress</h3><div class="task-box"><ol><li>Salve como <code>v03.odp</code>. Use <strong>Slide → Layout</strong> e escolha um layout com título e conteúdo; evite caixas desenhadas sem alinhamento.</li><li>Use <strong>Exibir → Slide mestre</strong> para definir fundo simples, fonte, posição de rodapé e elemento institucional necessário.</li><li>Volte à visualização Normal. No slide 1, mantenha um título dominante e uma linha de apoio; remova elementos sem função.</li><li>Use <strong>Formatar → Alinhamento</strong> para alinhar objetos por uma borda comum. Preserve espaços entre grupos relacionados.</li><li>Duplique um slide estruturado para manter consistência, depois troque conteúdo; não copie erros da versão problemática.</li><li>Projete em tela cheia e afaste-se. Identifique o primeiro e o segundo elementos percebidos; compare com P-30.</li></ol></div>
      <div class="evidence-box"><strong>Validação</strong><p>A hierarquia deve continuar clara em sala iluminada e em miniatura. Se tudo chama atenção, nada orienta.</p></div>
      <details class="sources-box"><summary>Fonte oficial consultada</summary><p><a href="https://help.libreoffice.org/latest/pt-BR/text/simpress/01/03150100.html" target="_blank" rel="noopener">Ajuda do LibreOffice — Slide mestre</a>.</p></details>
      <div class="bridge-box"><strong>Consequência</strong><p>O sistema visual está consistente. Os parágrafos longos ainda competem com a fala e precisam ser transformados em texto de tela.</p></div>`
  },
  {
    id: 'apresentacoes-texto', number: '05', menuTitle: 'Texto que apoia a fala',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Redação de tela · síntese, legibilidade e contraste',
    title: 'O slide mostra a ideia; a fala desenvolve',
    objective: 'Reduzir texto mantendo precisão e legibilidade, sem transformar slide em teleprompter.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 13h20 · corte de texto</span><h2>O segundo slide contém 118 palavras copiadas do Guia do Expositor.</h2><p>Paulo precisa explicar a proposta olhando para o público. O documento completo continua disponível; o slide preserva a mensagem e a evidência essencial.</p></div>
      <div class="comparison-grid"><div class="bad-card"><strong>Tema vago</strong><p>“Nossos projetos” + parágrafo inteiro</p></div><div class="good-card"><strong>Mensagem</strong><p>“32 projetos transformam problemas locais em soluções testáveis”</p></div></div>
      <h3>Reescrever e testar</h3><div class="task-box"><ol><li>Copie a mensagem de P-30 para o título do slide; use frase afirmativa, não apenas “Resultados”.</li><li>Mantenha na tela somente número, rótulo e condição necessária para entendê-lo. Leve explicação para as notas.</li><li>Use fonte sem condensação e tamanho que possa ser lido do fundo da sala; como ponto de partida do projeto, títulos em 30 pt ou mais e corpo em 22 pt ou mais, ajustando pelo teste real.</li><li>Evite caixa alta em frases longas, linhas extensas e contraste baixo. Não use cor como único marcador de estado.</li><li>Execute em tela cheia no projetor de LAB-04 ou simule em distância; peça a Lia que leia sem conhecer o conteúdo.</li><li>Se precisar reduzir abaixo do legível para caber, corte ou divida a mensagem — não esconda o problema.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O texto ficou enxuto. Para explicar o percurso e os resultados, faltam visuais que tragam informação real.</p></div>`
  },
  {
    id: 'apresentacoes-imagens', number: '06', menuTitle: 'Imagens com função',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Mídia · relevância, enquadramento, origem e autorização',
    title: 'Imagem boa para o slide é a que ajuda a compreender',
    objective: 'Selecionar, inserir e testar imagens relevantes, autorizadas e rastreáveis.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 14h10 · seleção de visuais</span><h2>Lia possui um mapa e fotos reais, mas duas fotos mostram nomes de estudantes.</h2><p>O mapa orienta o percurso e pode ser usado. As fotos exigem autorização e análise de conteúdo. Enquanto isso, uma captura aproximada de um protótipo sem pessoas pode evidenciar o trabalho.</p></div>
      <h3>Roteiro de decisão</h3><div class="task-box"><ol><li>Para cada mensagem de P-30, escreva a pergunta que o visual deve responder.</li><li>Use o mapa do P-10 para “onde visitar?” e o gráfico do P-20 para “como os projetos se distribuem?”.</li><li>Antes de inserir foto, confira autoria, autorização, pessoas/dados visíveis e resolução. Registre a fonte.</li><li>No Impress, use <strong>Inserir → Imagem</strong>. Redimensione pelas alças de canto e recorte para destacar a evidência, sem alterar o sentido.</li><li>Adicione uma legenda curta quando a imagem não for autoexplicativa. Nas propriedades, preencha descrição alternativa.</li><li>Projete em tela cheia: a informação deve permanecer identificável; se não, simplifique ou retire.</li></ol></div>
      <div class="danger-box"><strong>Não use como preenchimento</strong><p>Imagem genérica de “tecnologia”, ícone repetido ou foto sem relação não melhora a mensagem. Também não use imagem encontrada na internet sem verificar origem e direito de uso.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Os visuais explicam percurso e contexto. O dado numérico ainda precisa chegar com escala, rótulo e fonte corretos.</p></div>`
  },
  {
    id: 'apresentacoes-dados', number: '07', menuTitle: 'Dados, gráficos e fontes',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Evidência quantitativa · seleção, simplificação e rastreabilidade',
    title: 'O gráfico do slide precisa continuar verdadeiro fora da planilha',
    objective: 'Levar dados auditados para a apresentação preservando mensagem, contexto e fonte.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 8h10 · atualização de números</span><h2>O gráfico do primeiro ensaio ainda mostrava 28 projetos; P-20 aprovado registra 32.</h2><p>Copiar como imagem estabilizou o visual, mas também congelou uma versão antiga. P-30 precisa registrar a fonte e a data do recorte.</p></div>
      <h3>Atualizar com rastreabilidade</h3><div class="task-box"><ol><li>Abra a versão aprovada de P-20 e confirme pergunta, filtros ativos, intervalo, total e data.</li><li>Escolha somente o gráfico que sustenta a mensagem do slide. Remova grade, legenda ou casas decimais que não ajudam, sem alterar escala ou dados.</li><li>Copie o gráfico e cole no Impress. Se usar vínculo, teste o que acontece quando a planilha é movida; para entrega offline, prefira incorporação e registre a versão.</li><li>Escreva título-mensagem, como “A maioria dos projetos está nos blocos A e B”, somente se os dados sustentarem.</li><li>No rodapé do slide, registre “Fonte: Controle da Feira, P-20, versão/data”.</li><li>Compare duas categorias com a planilha e atualize P-30. Se o total mudar, gere nova versão da apresentação e repita o teste.</li></ol></div>
      <div class="evidence-box"><strong>Validação</strong><p>Uma pessoa deve conseguir dizer o que está sendo comparado, em qual unidade e de quando são os dados. Se o gráfico sustentar mais de uma leitura plausível, ajuste título/rótulos ou evite a conclusão.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Mensagens e evidências estão ligadas. Falta garantir leitura por pessoas com diferentes necessidades e tecnologias assistivas.</p></div>`
  },
  {
    id: 'apresentacoes-acessibilidade', number: '08', menuTitle: 'Acessibilidade da apresentação',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Acesso · ordem, contraste, descrição e mídia',
    title: 'Apresentar para todos exige mais do que fonte grande',
    objective: 'Verificar ordem de leitura, contraste, alternativas e compreensão oral/visual.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 9h00 · revisão inclusiva</span><h2>O mapa usa apenas vermelho e verde; o gráfico depende de cores semelhantes.</h2><p>A sala clara reduz contraste e parte do público pode não distinguir cores. Lia propõe rótulos, padrões simples e descrição oral dos dados.</p></div>
      <h3>Checklist executável</h3><div class="task-box"><ol><li>Em cada slide, confira se título e objetos seguem uma ordem lógica no painel de seleção/ordem disponível.</li><li>Adicione texto alternativo significativo a imagens e gráficos; objetos decorativos, se inevitáveis, não devem interromper a leitura.</li><li>Substitua diferenças somente por cor por rótulos, formas ou texto. Teste em escala de cinza na impressão/PDF.</li><li>Garanta contraste forte e tamanhos legíveis. Evite texto sobre fotografia com fundo irregular.</li><li>Nas notas, escreva a descrição oral do gráfico e da imagem essencial.</li><li>Use <strong>Ferramentas → Verificação de acessibilidade</strong>, quando disponível. Corrija alertas compreendidos e registre limitações.</li><li>Exporte uma cópia PDF e teste navegação/seleção de texto. O verificador não substitui pessoa revisora.</li></ol></div>
      <div class="evidence-box"><strong>Teste humano</strong><p>Uma pessoa ouve a fala sem ver a tela e outra vê os slides sem áudio. Ambas devem captar a mensagem central e a ação final; nenhum modo precisa repetir todos os detalhes.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Os slides já comunicam. Paulo precisa agora ensaiar a fala, usar notas como apoio e medir o tempo real.</p></div>`
  },
  {
    id: 'apresentacoes-notas', number: '09', menuTitle: 'Notas e ensaio',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Apresentação oral · notas, transições e tempo',
    title: 'Ensaio transforma o arquivo em comunicação',
    objective: 'Preparar notas, ensaiar com tempo e registrar ajustes baseados em observação.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 10h20 · segundo ensaio</span><h2>Paulo termina em 7min40 e acelera justamente na orientação de entrada.</h2><p>O problema não se resolve ocultando o cronômetro. A equipe precisa cortar repetição e proteger a informação que orienta o público.</p></div>
      <h3>Ensaiar com evidência</h3><div class="task-box"><ol><li>Abra a exibição de <strong>Notas</strong>. Para cada slide, escreva: mensagem, evidência a explicar, transição e alerta de pronúncia/tempo.</li><li>Não transcreva um discurso inteiro. Use frases-gatilho que permitam olhar para o público.</li><li>Execute com <kbd>F5</kbd>. Lia cronometra cada slide e registra em P-30; Paulo não para para corrigir durante a primeira rodada.</li><li>Após o ensaio, classifique problemas: conteúdo, ordem, visual, fala ou operação.</li><li>Corte primeiro repetições da fala e dados secundários. Só remova um slide se a mensagem continuar completa.</li><li>Faça novo ensaio em condições próximas às reais: projetor, controle, posição e tempo. Registre duração e mudanças.</li></ol></div>
      <div class="evidence-box"><strong>Critério de aceite</strong><p>A apresentação cabe em cinco minutos com pausas, a mensagem principal de cada slide é dita e o apresentador não depende de ler parágrafos.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O ensaio funciona em LAB-04. No dia da Feira, porém, internet, fonte, cabo ou arquivo podem falhar. A equipe precisa preparar saídas e contingência.</p></div>`
  },
  {
    id: 'apresentacoes-contingencia', number: '10', menuTitle: 'Exportação e contingência',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Entrega · formatos, mídia, equipamento e plano B',
    title: 'Uma apresentação pronta também precisa abrir no lugar certo',
    objective: 'Exportar formatos adequados, testar no equipamento e preparar contingência sem perder a fonte.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 13h30 · teste no auditório</span><h2>O notebook COORD-02 abre o ODP, mas o projetor troca a proporção e não há internet.</h2><p>O arquivo editável continua necessário; PDF garante uma versão visual estável; a fala precisa sobreviver até sem projeção.</p></div>
      <h3>Preparar o pacote</h3><div class="task-box"><ol><li>Confirme em P-03 qual ODP foi aprovado. Feche versões antigas.</li><li>Use <strong>Arquivo → Exportar como → Exportar como PDF</strong>. Não inclua notas nem slides ocultos na cópia pública, salvo decisão explícita.</li><li>Abra o PDF e compare todos os slides, fontes, imagens, gráfico e links.</li><li>Crie uma cópia offline da pasta com ODP, PDF, imagens incorporadas/fontes autorizadas e P-30. Não dependa de link externo.</li><li>Em COORD-02 conectado ao projetor, teste resolução 16:9, avanço, tela cheia e saída por <kbd>Esc</kbd>.</li><li>Imprima ou salve uma página-resumo com as cinco mensagens. Defina quem continua a fala se o projetor falhar.</li><li>Registre teste, equipamento, data, problema, correção e plano de contingência.</li></ol></div>
      <div class="danger-box"><strong>Segurança e privacidade</strong><p>Remova notas internas, slides ocultos e dados de autoria não destinados ao público. Não conecte pendrive desconhecido nem desative proteção para “fazer abrir”.</p></div>
      <details class="sources-box"><summary>Fontes oficiais consultadas</summary><p><a href="https://help.libreoffice.org/latest/pt-BR/text/shared/01/ref_pdf_export_general.html" target="_blank" rel="noopener">Opções gerais de PDF</a> e <a href="https://help.libreoffice.org/latest/pt-BR/text/simpress/01/06080000.html" target="_blank" rel="noopener">configurações da apresentação</a>.</p></details>
      <div class="bridge-box"><strong>Consequência</strong><p>Há mensagem, evidência, visual, fala e contingência. A apresentação final deve provar o conjunto em condição real.</p></div>`
  },
  {
    id: 'apresentacoes-final', number: '11', menuTitle: 'Apresentação final',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Integração · execução, observação e passagem',
    title: 'Entrega: apresentar a Feira e permitir continuidade',
    objective: 'Realizar a apresentação, registrar evidências e entregar P-30 para outro apresentador continuar.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · simulação com equipe substituta</span><h2>Paulo será chamado por alguns minutos; Marina precisa assumir sem improvisar dados.</h2><p>Se P-30 estiver completo, a transferência não depende de decorar a fala de Paulo. A substituta recebe mensagens, fontes, notas, tempo e contingência.</p></div>
      <h3>Prova final do módulo</h3><div class="task-box"><ol><li>Entregue à pessoa substituta somente o pacote aprovado: ODP, PDF, resumo offline e P-30.</li><li>Dê dois minutos para ela localizar objetivo, tempo, fonte de cada dado e plano B, sem explicação oral.</li><li>A substituta executa a apresentação em até cinco minutos. Um observador registra: mensagem compreendida, evidência legível, transições, tempo e dificuldade operacional.</li><li>Prepare uma falha controlada: abra o PDF em vez do ODP ou desligue apenas a conexão de rede autorizada. Não desligue equipamento nem remova arquivo real.</li><li>A equipe aciona a contingência, conclui a fala e registra o que funcionou.</li><li>Corrija somente falhas comprovadas, gere nova versão e repita o trecho afetado.</li></ol></div>
      <div class="check-card"><strong>P-30 completo</strong><ul data-checklist><li><label><input type="checkbox"> objetivo, público e tempo definidos;</label></li><li><label><input type="checkbox"> cada slide tem mensagem, evidência, visual e fala;</label></li><li><label><input type="checkbox"> fontes apontam para P-10/P-20 aprovados;</label></li><li><label><input type="checkbox"> acessibilidade e leitura à distância testadas;</label></li><li><label><input type="checkbox"> ensaio cronometrado e ajustes registrados;</label></li><li><label><input type="checkbox"> ODP, PDF e contingência foram abertos e usados.</label></li></ul><p class="check-progress" data-check-progress></p></div>
      <div class="bridge-box"><strong>Continuidade</strong><p>A equipe já produz artefatos confiáveis. O próximo risco é a dispersão: enviar arquivo errado, escolher canal inadequado ou deixar uma decisão sem responsável.</p></div>`
  }
]);
