window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'apresentacoes-diagnostico', number: '00', menuTitle: 'O slide que ninguém acompanha',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Diagnóstico · mensagem, evidência e carga visual',
    title: 'Uma apresentação não é um documento repartido em telas',
    objective: 'Diagnosticar uma apresentação pela comunicação que ela permite, não por efeitos ou decoração.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 8h00 · ensaio em LAB-04</span><h2>Paulo tenta apresentar oito slides cheios de parágrafos em cinco minutos.</h2><p>Ele lê a tela, as famílias não enxergam os dados e um gráfico não informa a origem dos números. O arquivo abre, mas a apresentação ainda não comunica bem.</p></div>
      <section class="decision-box"><h3>O que investigar primeiro?</h3><div class="choice-list" data-choice data-answer="b" data-explanation="Sem objetivo, público, tempo e mensagem, qualquer mudança visual vira tentativa."><label><input type="radio" name="d400" value="a"> trocar transições e cores;</label><label><input type="radio" name="d400" value="b"> identificar objetivo, público, tempo e mensagem de cada slide;</label><label><input type="radio" name="d400" value="c"> reduzir todo o texto até caber.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>

      <h3>Faça comigo · assista antes de corrigir</h3>
      <div class="task-box"><strong>Ferramenta principal: LibreOffice Impress</strong><ol>
        <li>Baixe a <a href="../downloads/informatica-produtividade/modulo-04/apresentacao-feira-diagnostico.odp" download>apresentação problemática</a> para <code>00_Entrada</code>.</li>
        <li>Copie para <code>10_Em_trabalho</code> como <code>2026-09-08_apresentacao-feira_em-analise_v01.odp</code>.</li>
        <li>Abra no Impress e confirme que a cópia possui <strong>oito slides</strong>.</li>
        <li>Execute com <kbd>F5</kbd>, sem corrigir. Cronometre.</li>
        <li>Em cada slide, responda: “o público deveria entender o quê aqui?”. Marque os slides em que a resposta não é clara.</li>
        <li>Observe também texto impossível de ler, evidência visual pequena e dado sem origem identificada.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue apontar quais slides repetem mensagem, quais obrigam Paulo a ler e quais evidências não podem ser compreendidas à distância.</p></div>
      <p>No <code>CONTROLE_DA_FEIRA.txt</code>, crie <strong>[P-30] Apresentação</strong> e anote apenas: público, tempo observado, mensagens confusas e evidências que precisam ser verificadas.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Para saber o que cortar, precisamos definir o resultado esperado dos cinco minutos de apresentação.</p></div>`
  },
  {
    id: 'apresentacoes-objetivo', number: '01', menuTitle: 'Objetivo e público',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Planejamento · resultado, audiência e tempo',
    title: 'Objetivo define o que entra e o que fica fora',
    objective: 'Definir resultado esperado, público, tempo e restrições antes de editar slides.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 8h40 · decisão da coordenação</span><h2>Paulo terá cinco minutos com famílias e visitantes.</h2><p>Ao final, o público deve compreender a proposta da Feira, conhecer data e espaços e saber como acompanhar os projetos. Detalhes de montagem ficam no Guia do Expositor.</p></div>
      <h3>Faça o recorte</h3>
      <div class="task-box"><ol>
        <li>Escreva em uma frase o resultado esperado: “famílias entendem propósito, data/local e como acompanhar”.</li>
        <li>Confirme o limite de <strong>5 minutos</strong>.</li>
        <li>Separe o que pode ir ao público do que é interno: custos detalhados, dados pessoais e histórico de revisão ficam fora.</li>
        <li>Considere a condição real: projetor 16:9, sala clara e internet não garantida.</li>
        <li>Liste apenas as fontes aprovadas que poderão sustentar os slides.</li>
      </ol></div>
      <p>Em <strong>[P-30] Apresentação</strong>, registre só: público, tempo, resultado esperado, mensagem central, fontes autorizadas e condição do local.</p>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue dizer por que um detalhe pode ser verdadeiro e mesmo assim não pertencer a esta apresentação.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora precisamos escolher, entre tudo o que existe, somente o que ajuda o público a compreender ou agir.</p></div>`
  },
  {
    id: 'apresentacoes-selecao', number: '02', menuTitle: 'Selecionar conteúdo',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Curadoria · relevância, evidência e corte',
    title: 'Selecionar é proteger a mensagem',
    objective: 'Escolher somente informações necessárias, autorizadas e sustentadas por fonte da informação.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 9h15 · fontes reunidas</span><h2>Marina oferece a programação; Renato tem muitos indicadores; Lia possui imagens do laboratório.</h2><p>Mais material não significa apresentação melhor. Cada item precisa ajudar o público dentro dos cinco minutos.</p></div>
      <div class="task-box"><ol>
        <li>Consulte o documento aprovado e a planilha auditada produzidos nos módulos anteriores.</li>
        <li>Separe candidatos em três grupos: <strong>essencial</strong>, <strong>apoio para a fala</strong> e <strong>fora desta apresentação</strong>.</li>
        <li>Para cada item, pergunte: sustenta qual mensagem? está autorizado? cabe no tempo? consigo localizar a fonte?</li>
        <li>Escolha no máximo cinco mensagens: propósito, dimensão/participação, data/local, percurso e convite final.</li>
        <li>Não use número sem definição/data nem foto com pessoa identificável sem autorização.</li>
      </ol></div>
      <div class="evidence-box"><strong>Teste</strong><p>leia somente as cinco mensagens. Elas devem formar uma explicação completa sem depender de detalhes extras.</p></div>
      <p>Em <strong>[P-30] Apresentação</strong>, associe cada mensagem à sua fonte aprovada.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Temos cinco mensagens. Falta colocá-las em uma ordem que conduza o público até a ação final.</p></div>`
  },
  {
    id: 'apresentacoes-roteiro', number: '03', menuTitle: 'Roteiro antes dos slides',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Narrativa · sequência, transição e tempo',
    title: 'O roteiro cabe em frases antes de virar slide',
    objective: 'Construir uma sequência de mensagens e reservar tempo de fala antes da composição visual.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 10h00 · quadro de roteiro</span><h2>Paulo começava pelos detalhes antes de explicar por que a Feira importa.</h2><p>O público precisa primeiro entender a proposta; depois, ver evidências e orientações.</p></div>
      <div class="visual-lab"><div class="visual-header"><span>Fluxo de mensagem</span><h3>Uma pergunta por etapa</h3></div><ol class="numbered-process"><li><strong>Por quê?</strong><span>propósito</span></li><li><strong>O quê?</strong><span>projetos/evidência</span></li><li><strong>Quando e onde?</strong><span>data/percurso</span></li><li><strong>Como?</strong><span>participar</span></li><li><strong>Agora?</strong><span>convite final</span></li></ol></div>
      <div class="task-box"><ol>
        <li>Escreva uma frase completa para cada etapa, não apenas um tema.</li>
        <li>Ao lado, indique evidência, visual possível e tempo.</li>
        <li>Reserve aproximadamente 30 segundos para abertura e 30 para encerramento.</li>
        <li>Escreva uma transição curta entre as mensagens.</li>
        <li>Leia tudo em voz alta com cronômetro. Corte repetições até caber com pausa.</li>
        <li>Só então salve a apresentação como <code>..._roteiro_v02.odp</code>.</li>
      </ol></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O roteiro define a ordem. O layout agora precisa mostrar essa prioridade visualmente.</p></div>`
  },
  {
    id: 'apresentacoes-hierarquia', number: '04', menuTitle: 'Hierarquia visual',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Composição · prioridade, alinhamento e consistência',
    title: 'O olhar precisa encontrar primeiro o que a fala apresenta primeiro',
    objective: 'Construir layouts consistentes em que posição, tamanho e contraste expressem prioridade.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 11h00 · primeiro slide reconstruído</span><h2>Título, data e logotipos competem pelo mesmo destaque.</h2><p>A Feira e sua proposta são a mensagem principal; data/local são apoio. Elementos institucionais permanecem secundários.</p></div>
      <div class="task-box"><ol>
        <li>Salve como <code>v03.odp</code>.</li>
        <li>Use <strong>Slide → Layout</strong> e escolha estrutura de título + conteúdo.</li>
        <li>Use <strong>Exibir → Slide mestre</strong> para definir fundo simples, tipografia e elementos institucionais repetidos.</li>
        <li>No slide 1, mantenha um título dominante e uma linha de apoio; retire o que não tem função.</li>
        <li>Use comandos de alinhamento e preserve espaços consistentes entre grupos.</li>
        <li>Projete em tela cheia e identifique o primeiro e o segundo elementos percebidos.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>a ordem visual percebida combina com a ordem da mensagem e continua clara em miniatura e na sala iluminada.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A estrutura visual melhorou, mas os parágrafos ainda competem com a fala.</p></div>`
  },
  {
    id: 'apresentacoes-texto', number: '05', menuTitle: 'Texto que apoia a fala',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Redação de tela · síntese, legibilidade e contraste',
    title: 'O slide mostra a ideia; a fala desenvolve',
    objective: 'Reduzir texto mantendo precisão e legibilidade, sem transformar slide em teleprompter.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 13h20 · corte de texto</span><h2>Um slide contém 118 palavras copiadas de outro documento.</h2><p>Paulo precisa olhar para o público. O material completo continua disponível; o slide deve preservar apenas a ideia e a evidência necessárias.</p></div>
      <div class="comparison-grid"><div class="bad-card"><strong>Tema + parágrafo</strong><p>“Nossos projetos” seguido de texto longo</p></div><div class="good-card"><strong>Mensagem</strong><p>“32 projetos transformam problemas locais em soluções testáveis”</p></div></div>
      <div class="task-box"><ol>
        <li>Transforme o título em uma frase-mensagem.</li>
        <li>Mantenha na tela apenas o número/rótulo necessário para entender a evidência.</li>
        <li>Leve a explicação complementar para as notas do apresentador.</li>
        <li>Como ponto de partida, teste títulos em 30 pt ou mais e corpo em 22 pt ou mais; valide na distância real.</li>
        <li>Evite linhas extensas, contraste baixo e cor como único marcador.</li>
        <li>Se precisar reduzir demais para caber, corte ou divida a mensagem.</li>
      </ol></div>
      <div class="evidence-box"><strong>Teste à distância</strong><p>em tela cheia, afaste-se e tente ler sem ampliar. Se a mensagem desaparecer, o slide ainda está carregado demais.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora o texto apoia a fala. Precisamos escolher imagens que realmente expliquem algo.</p></div>`
  },
  {
    id: 'apresentacoes-imagens', number: '06', menuTitle: 'Imagens com função',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Mídia · relevância, enquadramento, origem e autorização',
    title: 'Imagem boa para o slide é a que ajuda a compreender',
    objective: 'Selecionar, inserir e testar imagens relevantes, autorizadas e rastreáveis.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 14h10 · seleção de visuais</span><h2>O mapa ajuda a orientar; algumas fotos exibem nomes de estudantes.</h2><p>A escolha do visual depende da pergunta que ele precisa responder e da autorização de uso.</p></div>
      <div class="task-box"><ol>
        <li>Para cada mensagem, escreva a pergunta que o visual deve responder.</li>
        <li>Use o mapa da entrada para “onde visitar?” e o gráfico da planilha para uma comparação que os dados sustentem.</li>
        <li>Antes de inserir foto, confira autoria, autorização, pessoas/dados visíveis e resolução.</li>
        <li>Use <strong>Inserir → Imagem</strong>, redimensione mantendo proporção e recorte sem alterar o sentido.</li>
        <li>Adicione legenda quando necessário e descrição alternativa significativa.</li>
        <li>Projete: se a informação não puder ser identificada à distância, simplifique ou retire.</li>
      </ol></div>
      <div class="danger-box"><strong>Não use imagem como preenchimento</strong><p>foto genérica ou ícone decorativo não melhora a mensagem e ainda compete por atenção.</p></div>
      <p>Em <strong>[P-30] Apresentação</strong>, anote somente a origem dos visuais efetivamente usados.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O próximo slide usa dados. Precisamos garantir que o gráfico continue verdadeiro fora da planilha.</p></div>`
  },
  {
    id: 'apresentacoes-dados', number: '07', menuTitle: 'Dados, gráficos e fontes',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Evidência quantitativa · seleção, simplificação e rastreabilidade',
    title: 'O gráfico do slide precisa continuar verdadeiro fora da planilha',
    objective: 'Levar dados auditados para a apresentação preservando mensagem, contexto e origem da informação.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 8h10 · atualização de números</span><h2>Um gráfico antigo mostra 28 projetos; o controle aprovado registra 32.</h2><p>Copiar um gráfico como imagem estabiliza o visual, mas também congela a versão dos dados. A origem e a data precisam acompanhar a evidência.</p></div>
      <div class="task-box"><ol>
        <li>Abra a planilha aprovada e confirme pergunta, filtros, intervalo, total e data.</li>
        <li>Escolha somente o gráfico que sustenta a mensagem do slide.</li>
        <li>Remova elementos desnecessários sem alterar escala ou dados.</li>
        <li>Cole/incorpore o gráfico no Impress e escreva um título-mensagem apenas se os dados sustentarem a conclusão.</li>
        <li>No rodapé, registre a fonte de informação e a versão/data.</li>
        <li>Compare pelo menos duas categorias com a planilha original.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>uma pessoa consegue dizer o que está sendo comparado, a unidade e de quando são os dados.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Mensagens e evidências estão corretas. Falta verificar se a apresentação continua compreensível para diferentes formas de acesso.</p></div>`
  },
  {
    id: 'apresentacoes-acessibilidade', number: '08', menuTitle: 'Acessibilidade da apresentação',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Acesso · ordem, contraste, descrição e mídia',
    title: 'Apresentar para todos exige mais do que letra grande',
    objective: 'Verificar ordem de leitura, contraste, alternativas e compreensão oral/visual.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 9h00 · revisão inclusiva</span><h2>Mapa e gráfico dependem de cores semelhantes.</h2><p>Parte do público pode não distinguir essas diferenças, e a sala clara reduz o contraste. A informação precisa de rótulos, ordem e descrição.</p></div>
      <div class="task-box"><ol>
        <li>Na visualização Normal, pressione <kbd>Tab</kbd> e confira a ordem em que título e objetos são selecionados.</li>
        <li>Adicione texto alternativo significativo a imagens e gráficos essenciais.</li>
        <li>Substitua diferenças apenas por cor por rótulos, formas ou texto.</li>
        <li>Teste contraste e legibilidade; evite texto sobre fundo irregular.</li>
        <li>Nas notas, prepare descrição oral dos gráficos e imagens essenciais.</li>
        <li>Use a verificação de acessibilidade quando disponível e corrija alertas compreendidos.</li>
        <li>Exporte uma cópia PDF e confira seleção/leitura.</li>
      </ol></div>
      <div class="evidence-box"><strong>Teste de dupla entrada</strong><p>a mensagem central deve ser compreensível tanto por quem acompanha principalmente a fala quanto por quem depende mais do visual.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Os slides funcionam. Agora Paulo precisa transformar o arquivo em uma apresentação de cinco minutos.</p></div>`
  },
  {
    id: 'apresentacoes-notas', number: '09', menuTitle: 'Notas e ensaio',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Apresentação oral · notas, transições e tempo',
    title: 'Ensaio transforma o arquivo em comunicação',
    objective: 'Preparar notas, ensaiar com tempo e registrar ajustes baseados em observação.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 10h20 · segundo ensaio</span><h2>Paulo termina em 7min40 e acelera justamente na orientação de entrada.</h2><p>O tempo real mostra onde a apresentação ainda está pesada.</p></div>
      <div class="task-box"><ol>
        <li>Use <strong>Exibir → Notas</strong>. Para cada slide, escreva mensagem, evidência a explicar, transição e alerta de tempo.</li>
        <li>Use frases-gatilho, não um discurso inteiro.</li>
        <li>Execute com <kbd>F5</kbd> e cronometre cada slide sem interromper o primeiro ensaio.</li>
        <li>Classifique os problemas observados: conteúdo, ordem, visual, fala ou operação.</li>
        <li>Corte repetições e dados secundários antes de remover mensagens essenciais.</li>
        <li>Faça novo ensaio em condições próximas às reais.</li>
      </ol></div>
      <p>Em <strong>[P-30] Apresentação</strong>, registre somente duração total, slides que estouraram o tempo e ajustes feitos.</p>
      <div class="evidence-box"><strong>Critério</strong><p>a apresentação cabe em cinco minutos com pausas e Paulo não depende de ler parágrafos na tela.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O ensaio funciona. Agora precisamos garantir que a apresentação sobreviva a falha de internet, fonte ou formato.</p></div>`
  },
  {
    id: 'apresentacoes-contingencia', number: '10', menuTitle: 'Exportação e contingência',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Entrega · formatos, mídia, equipamento e plano B',
    title: 'Uma apresentação pronta também precisa abrir no lugar certo',
    objective: 'Exportar formatos adequados, testar no equipamento e preparar contingência sem perder o arquivo-fonte.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · 13h30 · teste no auditório</span><h2>O ODP abre, mas o projetor muda a proporção e a internet não está disponível.</h2><p>A entrega precisa funcionar offline e ter uma alternativa visual estável.</p></div>
      <div class="task-box"><ol>
        <li>Confirme qual ODP é a versão aprovada e feche versões antigas.</li>
        <li>Exporte uma cópia PDF sem notas internas nem slides que não pertençam ao público.</li>
        <li>Abra o PDF e compare todos os slides, imagens, gráfico e textos.</li>
        <li>Monte uma pasta offline com ODP, PDF e recursos necessários autorizados.</li>
        <li>No equipamento do auditório, teste proporção 16:9, tela cheia, avanço e saída por <kbd>Esc</kbd>.</li>
        <li>Prepare uma página-resumo com as cinco mensagens para o caso de falha de projeção.</li>
      </ol></div>
      <div class="danger-box"><strong>Antes de entregar</strong><p>remova notas internas, dados indevidos e dependências desnecessárias de links externos.</p></div>
      <p>Em <strong>[P-30] Apresentação</strong>, registre teste do equipamento, problema encontrado e plano B. Em <strong>[P-03] Versões</strong>, identifique o ODP aprovado e o PDF offline que passou pela conferência.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora o pacote precisa funcionar nas mãos de outra pessoa, sem explicação oral de Paulo.</p></div>`
  },
  {
    id: 'apresentacoes-final', number: '11', menuTitle: 'Apresentação final',
    unit: 'Módulo 4 · Apresentações e Comunicação Visual', technicalTitle: 'Integração · execução, observação e passagem',
    title: 'Entrega: apresentar a Feira e permitir continuidade',
    objective: 'Realizar a apresentação, registrar evidências e permitir que outro apresentador continue.',
    content: `
      <div class="story-opening"><span class="eyebrow">Sexta-feira · simulação com substituição</span><h2>Paulo precisa se ausentar e Marina assume a apresentação.</h2><p>Ela recebe apenas o pacote aprovado e o <code>CONTROLE_DA_FEIRA.txt</code>. Se a preparação estiver clara, não precisa decorar a fala de Paulo.</p></div>
      <h3>Prova final</h3>
      <div class="task-box"><ol>
        <li>Entregue ODP, PDF, resumo offline e a seção <strong>[P-30] Apresentação</strong>.</li>
        <li>A pessoa substituta deve localizar objetivo, tempo, origem dos dados e plano B em poucos minutos.</li>
        <li>Ela executa a apresentação em até cinco minutos.</li>
        <li>Prepare uma falha controlada: usar o PDF em vez do ODP ou retirar apenas a dependência de rede autorizada.</li>
        <li>A apresentação deve continuar usando o plano de contingência.</li>
        <li>Corrija somente falhas observadas e repita o trecho afetado.</li>
      </ol></div>
      <div class="check-card"><strong>Aceite</strong><ul data-checklist>
        <li><label><input type="checkbox"> objetivo, público e tempo estão claros;</label></li>
        <li><label><input type="checkbox"> cada slide possui mensagem e evidência;</label></li>
        <li><label><input type="checkbox"> fontes dos dados são localizáveis;</label></li>
        <li><label><input type="checkbox"> acessibilidade e leitura à distância foram testadas;</label></li>
        <li><label><input type="checkbox"> ensaio e tempo foram validados;</label></li>
        <li><label><input type="checkbox"> ODP, PDF e contingência funcionaram.</label></li>
      </ul><p class="check-progress" data-check-progress></p></div>
      <div class="bridge-box"><strong>Continuidade</strong><p>Documento, planilha e apresentação estão confiáveis. O próximo módulo trata do risco que ainda sobra: comunicação dispersa, acesso errado e tarefa sem responsável.</p></div>`
  }
]);
