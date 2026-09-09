window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'colaboracao-diagnostico', number: '00', menuTitle: 'A conversa que virou sistema',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Diagnóstico · canal, decisão, tarefa e versão',
    title: 'Quando tudo chega por todo lugar, ninguém sabe o que vale',
    objective: 'Diagnosticar comunicação dispersa sem reenviar arquivos nem inventar decisões ausentes.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 7h55 · semana da Feira</span><h2>O novo horário está em uma mensagem; o cartaz está anexado em outro canal; a tarefa de imprimir não tem responsável.</h2><p>Marina recebeu três versões, Paulo respondeu “ok” sem citar o arquivo, Lia marcou uma reunião no próprio calendário e Renato não sabe qual orçamento foi aprovado. O problema não é falta de mensagens: é falta de canal, registro e encaminhamento.</p></div>
      <section class="decision-box"><h3>Primeira ação segura</h3><div class="choice-list" data-choice data-answer="c" data-explanation="Centralizar evidências e registrar lacunas reduz novas versões e não transforma suposição em decisão."><label><input type="radio" name="d500" value="a"> reenviar tudo para todos;</label><label><input type="radio" name="d500" value="b"> escolher o arquivo mais recente pelo horário;</label><label><input type="radio" name="d500" value="c"> inventariar canais, apontar fonte aprovada e registrar decisões/tarefas ausentes.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>
      <div class="template-box"><label for="modelo-p40-diagnostico"><strong>P-40 · registro inicial da comunicação</strong></label><p>Como a equipe precisa reunir decisões espalhadas sem reenviar tudo, crie <code>P-40_comunicacao.txt</code> em <code>10_Em_trabalho</code> com um editor de texto simples. P-40 será o registro cumulativo de canais, mensagens, agenda, tarefas e encerramento. Por enquanto, copie e repita somente os campos abaixo para cada item; novos campos entrarão quando forem necessários.</p><textarea id="modelo-p40-diagnostico" class="record-template" rows="11" readonly>P-40 — DIAGNÓSTICO INICIAL
Item:
Canal:
Remetente:
Assunto:
Decisão encontrada:
Tarefa encontrada:
Responsável/prazo informados:
Arquivo ou link citado:
Pendência observada:</textarea><div><button class="action-button" type="button" data-copy="#modelo-p40-diagnostico">Copiar estrutura inicial</button><span class="copy-status" aria-live="polite"></span></div></div>
      <h3>Ferramenta principal</h3><div class="task-box"><strong>Simulador local MbB + pasta colaborativa institucional autorizada</strong><ol><li>Baixe o <a href="../downloads/informatica-produtividade/modulo-05/caixa-comunicacao-feira.zip" download>pacote de comunicações fictícias</a> para <code>00_Entrada</code>; preserve o ZIP e extraia uma cópia em <code>10_Em_trabalho</code>.</li><li>Na cópia, abra <code>LEIA-ME.txt</code> e depois os itens na ordem de data indicada. Não envie nada para pessoas reais.</li><li>Continue P-40 e preencha um bloco para cada item do pacote.</li><li>Compare arquivos e versões citados com o controle P-03. “Mais recente” não substitui “aprovado”.</li><li>Se usar uma plataforma institucional real na aula, trabalhe apenas no espaço autorizado e com dados fictícios; sem esse espaço, permaneça no simulador e nos arquivos locais.</li></ol></div>
      <div class="evidence-box"><strong>Resultado esperado</strong><p>A cópia extraída contém seis itens: LEIA-ME e cinco registros de comunicação. Você encontra decisão sem versão identificada, reunião sem convidados, tarefa sem responsável e link com permissão excessiva. Se faltar item, extraia novamente a partir do ZIP preservado ou baixe outra cópia. Registre os sintomas em P-40; as causas serão testadas ao longo do módulo.</p></div>
      <div class="artifact-card"><strong>P-40 iniciado</strong><span>Arquivo de texto cumulativo com os campos necessários ao diagnóstico; destinatários, permissões, agenda, tarefas e encerramento serão acrescentados nas aulas correspondentes.</span></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Para reduzir dispersão, cada necessidade precisa de um canal principal e de um lugar de registro.</p></div>`
  },
  {
    id: 'colaboracao-canais', number: '01', menuTitle: 'Escolher o canal',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Arquitetura da comunicação · urgência, registro e público',
    title: 'Canal é escolhido pela necessidade, não pelo hábito',
    objective: 'Escolher canal e registro conforme urgência, sensibilidade, necessidade de resposta e permanência.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 8h40 · mapa de comunicação</span><h2>Um aviso urgente, uma aprovação e um arquivo de trabalho não pedem o mesmo canal.</h2><p>Paulo decide: conversa rápida alerta; e-mail formaliza; agenda reserva tempo; tarefa acompanha execução; pasta colaborativa mantém a fonte. Uma decisão surgida em conversa precisa ser registrada no lugar oficial.</p></div>
      <div class="table-wrap"><table><thead><tr><th>Necessidade</th><th>Canal principal</th><th>Registro que encerra</th></tr></thead><tbody><tr><td>alertar mudança imediata</td><td>mensagem institucional autorizada</td><td>confirmação + atualização da fonte oficial</td></tr><tr><td>pedir aprovação de versão</td><td>e-mail ou fluxo de comentário</td><td>versão, decisão, responsável e data em P-03</td></tr><tr><td>reservar revisão</td><td>agenda compartilhada</td><td>evento com convidados, horário e material</td></tr><tr><td>acompanhar impressão</td><td>tarefa</td><td>responsável, prazo, estado e evidência</td></tr><tr><td>editar material</td><td>pasta colaborativa</td><td>arquivo canônico e histórico</td></tr></tbody></table></div>
      <h3>Continuar P-40</h3><div class="task-box"><ol><li>Abra <code>P-40_comunicacao.txt</code> e liste as quatro necessidades encontradas no diagnóstico.</li><li>Para cada uma, marque urgência, público, sensibilidade, necessidade de resposta e duração do registro.</li><li>Escolha um canal principal e escreva onde a decisão final será registrada.</li><li>Defina o que não deve ir naquele canal: senha, dado pessoal, versão de trabalho ou lista pública de endereços.</li><li>Peça a um colega que tente localizar “qual versão foi aprovada?” usando somente o mapa. Se estiver estudando sozinho, feche P-40, reabra-o como leitor e procure a resposta sem consultar os arquivos de origem. Ajuste se não conseguir.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O canal de aprovação será e-mail institucional. A mensagem precisa permitir decisão sem exigir que Paulo adivinhe pedido, prazo ou arquivo.</p></div>`
  },
  {
    id: 'colaboracao-mensagem', number: '02', menuTitle: 'Mensagem profissional',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Redação operacional · contexto, pedido e prazo',
    title: 'Mensagem profissional reduz a próxima dúvida',
    objective: 'Escrever mensagem curta com contexto suficiente, ação clara, prazo e caminho de resposta.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 9h10 · pedido de aprovação</span><h2>“Oi, veja se está bom” não identifica nem o arquivo nem a decisão.</h2><p>Marina precisa que Paulo aprove o PDF da programação até 14h para impressão. A mensagem deve citar a versão e dizer exatamente o que conferir.</p></div>
      <div class="template-box"><label for="modelo-email"><strong>Modelo para o simulador</strong></label><textarea id="modelo-email" class="record-template" rows="11" readonly>Assunto: Aprovação até 14h — Programação da Feira — PDF v03
Olá, Paulo.

Preciso da sua aprovação da Programação da Feira, PDF v03, até hoje às 14h para liberar a impressão.
Confira: horário de abertura, locais e orientação de entrada.
Fonte editável aprovada: ODT v09. Link interno: [colar link autorizado]

Responda “Aprovado: PDF v03” ou indique página, trecho e ajuste necessário.
Obrigada,
Marina</textarea><div><button class="action-button" type="button" data-copy="#modelo-email">Copiar modelo</button><span class="copy-status" aria-live="polite"></span></div></div>
      <h3>Executar sem envio real</h3><div class="task-box"><ol><li>Copie o modelo para um arquivo de rascunho local ou para o campo de rascunho fornecido pelo professor.</li><li>Substitua colchetes somente por dados fictícios e link interno simulado.</li><li>Leia assunto, pedido e prazo sem abrir o corpo completo: devem indicar a ação.</li><li>Confirme versão e critérios com P-03/P-10.</li><li>Peça a um colega que responda qual ação deve tomar e até quando. No estudo individual, oculte o corpo e responda usando apenas o assunto; ajuste se houver interpretação dupla.</li><li>Guarde a versão aprovada da mensagem em P-40; não envie em ambiente real nesta prática.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>A mensagem está clara, mas um destinatário errado pode expor o link ou atrasar a aprovação. É preciso decidir Para, CC e Cco antes de enviar.</p></div>`
  },
  {
    id: 'colaboracao-destinatarios', number: '03', menuTitle: 'Destinatários, CC e Cco',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Endereçamento · ação, ciência e privacidade',
    title: 'Destinatário define acesso e responsabilidade',
    objective: 'Distinguir quem deve agir, quem precisa acompanhar e quando endereços devem ser protegidos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 9h40 · antes de enviar</span><h2>Paulo aprova; Lia acompanha a impressão; famílias não participam desta conversa.</h2><p>Colocar todos em “Para” dilui a responsabilidade. Expor uma lista de famílias em CC seria ainda mais grave.</p></div>
      <div class="comparison-grid four"><div><strong>Para</strong><p>quem precisa agir ou responder</p></div><div><strong>CC</strong><p>quem acompanha com endereços visíveis</p></div><div><strong>Cco/BCC</strong><p>protege endereços em envio coletivo apropriado</p></div><div><strong>Fora</strong><p>quem não precisa receber</p></div></div>
      <section class="decision-box"><h3>Decida para a aprovação</h3><div class="choice-list" data-choice data-answer="a" data-explanation="Paulo deve agir; Lia apenas acompanha. Famílias não precisam nem devem receber o material interno."><label><input type="radio" name="d503" value="a"> Para: Paulo; CC: Lia; famílias: fora;</label><label><input type="radio" name="d503" value="b"> Para: todos os contatos da escola;</label><label><input type="radio" name="d503" value="c"> Cco: Paulo, ocultando quem deve aprovar.</label><button class="action-button" type="button" data-check-choice>Conferir escolha</button><div class="choice-result" aria-live="polite"></div></div></section>
      <h3>Verificação de quatro pontos</h3><div class="task-box"><ol><li>Escreva a função ao lado de cada nome antes de preencher endereços.</li><li>Digite o destinatário no simulador e confira nome completo/domínio caractere por caractere.</li><li>Confirme se cada pessoa precisa do conteúdo e se possui autorização.</li><li>Use CC somente para ciência necessária. Use Cco em comunicados coletivos quando endereços não devem ser expostos e a política institucional permitir.</li><li>Faça a conferência final depois de inserir anexo/link, porque preenchimento automático pode escolher homônimo.</li><li>Registre em P-40 quem recebeu e por quê; nunca registre endereço pessoal em material público.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Os destinatários estão corretos. O próximo risco é enviar a versão errada ou um link que pede acesso — ou concede edição demais.</p></div>`
  },
  {
    id: 'colaboracao-anexos', number: '04', menuTitle: 'Anexos, links e permissões',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Distribuição · arquivo, vínculo, versão e acesso mínimo',
    title: 'Anexo congela uma cópia; link aponta para um local',
    objective: 'Escolher entre anexo e link, validar versão e testar a permissão com outro perfil.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 10h20 · pasta colaborativa</span><h2>O link de revisão abre para “qualquer pessoa” e permite editar.</h2><p>Paulo precisa comentar; Lia só visualizará o PDF para impressão. P-04 já define acesso mínimo. Compartilhar por conveniência não pode ampliar o público.</p></div>
      <div class="visual-lab"><div class="visual-header"><span>Representação didática do simulador</span><h3>Compartilhar com controle</h3></div><div class="permission-simulator" data-permission-sim><label>Arquivo <select data-file><option value="">Escolha</option><option value="pdf">PDF v03 aprovado</option><option value="odt">ODT v09 editável</option></select></label><label>Pessoa <select data-person><option value="">Escolha</option><option value="paulo">Paulo · aprova</option><option value="lia">Lia · imprime</option><option value="publico">Link público</option></select></label><label>Permissão <select data-permission><option value="">Escolha</option><option value="view">Visualizar</option><option value="comment">Comentar</option><option value="edit">Editar</option></select></label><button type="button" class="action-button" data-check-permission>Testar combinação</button><div class="feedback" data-permission-result aria-live="polite"></div></div><p class="visual-question"><strong>Ação:</strong> teste PDF/Lia/Visualizar e ODT/Paulo/Comentar. Compare com link público/Edit.</p></div>
      <h3>Roteiro real ou simulado</h3><div class="task-box"><ol><li>Confirme o arquivo em P-03 pelo nome completo e abra-o antes de compartilhar.</li><li>Se todos precisam da mesma fonte atualizada, prefira link da pasta autorizada; se precisam de uma cópia imutável, use PDF anexo conforme política/tamanho.</li><li>No controle de compartilhamento, adicione pessoas específicas e escolha a menor permissão que permite a tarefa.</li><li>Copie o link somente depois de salvar a permissão.</li><li>Teste em perfil sem sessão ou com colega autorizado: visualizar não deve permitir editar; pessoa não autorizada não deve abrir.</li><li>Se divergir, remova o link/permissão, corrija e teste novamente antes da mensagem.</li><li>Atualize P-04 e P-40 com arquivo, versão, pessoa, permissão, data e teste.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O material está compartilhado. Agora a revisão precisa ocupar um horário comum e chegar aos participantes com pauta e fonte corretas.</p></div>`
  },
  {
    id: 'colaboracao-agenda', number: '05', menuTitle: 'Agenda com preparação',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Calendário · disponibilidade, convite, pauta e lembrete',
    title: 'Evento de agenda reserva tempo e prepara uma decisão',
    objective: 'Criar convite completo, verificar conflitos e atualizar participantes sem duplicar eventos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 11h00 · revisão de 20 minutos</span><h2>Lia marcou a reunião só no próprio calendário; Paulo nunca recebeu convite.</h2><p>O horário existe para uma pessoa, mas não para a equipe. A reunião precisa de convidados, objetivo, pauta, material e resultado esperado.</p></div>
      <div class="note-box"><strong>Caminho sem conta externa</strong><p>Se não houver agenda institucional autorizada, simule o evento no próprio P-40 com os campos título, início, fim, convidados, local, objetivo, pauta, material, lembrete e decisão esperada. Se houver agenda autorizada, use nela o comando <strong>Novo evento</strong> e confirme os mesmos campos.</p></div>
      <h3>Simular a criação</h3><div class="task-box"><ol><li>Em P-40 ou na agenda institucional autorizada, inicie um novo evento.</li><li>Título: “Decidir programação e liberar impressão”. Evite “Reunião Feira”.</li><li>Adicione Paulo, Marina e Lia como convidados fictícios; confira disponibilidade antes de confirmar 13h30–13h50.</li><li>Na descrição, inclua objetivo, três itens de pauta, link com permissão testada e decisão esperada.</li><li>Defina lembrete compatível com a preparação e indique local/equipamento.</li><li>Salve e confirme que cada convidado aparece no evento. Se mudar o horário, edite o mesmo evento e registre a atualização; não crie duplicata.</li><li>Registre ID ou título, horário, convidados e material em P-40.</li></ol></div>
      <div class="evidence-box"><strong>Validação</strong><p>Um convidado deve saber por que participará, o que precisa ler e qual decisão será tomada. Se o link pedir acesso ou o horário conflitar, o evento ainda não está pronto.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>A decisão tem horário. A impressão e o teste do projetor são trabalhos diferentes e precisam de responsáveis e prazos acompanháveis.</p></div>`
  },
  {
    id: 'colaboracao-tarefas', number: '06', menuTitle: 'Tarefas, responsáveis e prazos',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Acompanhamento · ação, dono, prazo, estado e evidência',
    title: 'Toda tarefa precisa de uma ação, um responsável e uma prova',
    objective: 'Registrar tarefas executáveis com responsável único, prazo, dependência e critério de conclusão.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 13h00 · quadro de preparação</span><h2>“Ver impressão” está pendente, mas ninguém sabe quem deve fazer nem o que significa terminar.</h2><p>Lia testa o PDF; Marina autoriza o lote; Renato confirma quantidade/custo. Uma tarefa genérica esconde três responsabilidades.</p></div>
      <div class="comparison-grid"><div class="bad-card"><strong>Vaga</strong><p>Ver impressão — todos — urgente</p></div><div class="good-card"><strong>Executável</strong><p>Imprimir 1 prova do PDF v03 em SEC-03; Lia; 14h20; anexar foto/registro de conferência</p></div></div>
      <h3>Registrar em P-40</h3><div class="task-box"><ol><li>Divida o resultado em tarefas independentes que começam com verbo.</li><li>Atribua um responsável principal por tarefa. Colaboradores podem apoiar, mas o acompanhamento precisa de um dono.</li><li>Defina data e hora quando o prazo afeta outra tarefa; registre dependências em P-40.</li><li>Defina critério observável: arquivo aprovado, prova conferida, projetor testado.</li><li>Use estados consistentes: <strong>A fazer</strong>, <strong>Em andamento</strong>, <strong>Bloqueada</strong>, <strong>Concluída</strong>.</li><li>Se bloquear, registre em P-40 a causa conhecida, a evidência e quem decide o próximo passo. Não marque concluída por esforço.</li><li>Atualize P-40 e teste se outra pessoa consegue assumir a tarefa. No estudo individual, feche os arquivos de origem e tente iniciar cada tarefa usando somente P-40.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>As tarefas estão claras. A reunião agora precisa produzir decisões, responsáveis e prazos — não apenas conversa.</p></div>`
  },
  {
    id: 'colaboracao-reuniao', number: '07', menuTitle: 'Reunião e ata útil',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Decisão coletiva · pauta, registro e encaminhamento',
    title: 'Ata útil registra decisão e próximo passo',
    objective: 'Conduzir reunião curta e produzir ata que permita executar e conferir encaminhamentos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 13h30 · revisão final</span><h2>Paulo confirma 8h30, mas a frase pode se perder entre comentários.</h2><p>Marina registra a decisão ligada ao PDF v03, Lia recebe a tarefa de prova e Renato confirma limite de impressão. A ata será a fonte da atualização.</p></div>
      <div class="template-box"><label for="modelo-ata"><strong>Modelo de ata</strong></label><textarea id="modelo-ata" class="record-template" rows="14" readonly>ATA — LIBERAÇÃO DA PROGRAMAÇÃO DA FEIRA
Data/horário/local:
Participantes:
Objetivo: decidir programação e liberar impressão
Fontes analisadas: P-10; PDF v03; P-20 (quantidade/custo)

Decisões:
1. Abertura às 8h30 — aprovado por Paulo — evidência: [registro]

Encaminhamentos:
- Imprimir 1 prova do PDF v03 — Lia — até 14h20 — evidência: prova conferida
- Autorizar lote após prova — Marina — até 14h40

Pendências e responsável pela decisão:
Próxima verificação:</textarea><div><button class="action-button" type="button" data-copy="#modelo-ata">Copiar ata</button><span class="copy-status" aria-live="polite"></span></div></div>
      <h3>Executar</h3><div class="task-box"><ol><li>Abra a pauta e os arquivos usados como fonte da informação antes da reunião; nomeie uma pessoa para registrar.</li><li>Para cada item, escreva decisão ou pendência. Não atribua fala a alguém sem confirmar.</li><li>Transforme encaminhamento em ação + responsável + prazo + evidência.</li><li>Nos dois minutos finais, leia decisões e tarefas em voz alta para validação.</li><li>Salve a ata na pasta autorizada, compartilhe com participantes na permissão necessária e atualize tarefas/P-03.</li><li>Se alguém contestar, preserve histórico e corrija por nova versão; não substitua silenciosamente.</li></ol></div>
      <div class="bridge-box"><strong>Consequência</strong><p>A ata formalizou o horário. Marina e Paulo ainda precisam editar o Guia do Expositor sem gerar duas cópias conflitantes.</p></div>`
  },
  {
    id: 'colaboracao-coautoria', number: '08', menuTitle: 'Coautoria controlada',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Trabalho simultâneo · fonte canônica, comentário e aprovação',
    title: 'Coautoria funciona quando todos sabem qual é a fonte',
    objective: 'Editar uma fonte compartilhada com papéis, comentários e aprovação definidos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 14h10 · Guia do Expositor</span><h2>Marina edita uma cópia local enquanto Paulo comenta outra no navegador.</h2><p>As duas versões são válidas isoladamente, mas nenhuma contém todas as mudanças. P-03 precisa apontar uma fonte canônica e um momento de consolidação.</p></div>
      <h3>Fluxo de coautoria</h3><div class="task-box"><ol><li>Escolha em P-03 um único arquivo canônico na pasta colaborativa e registre o caminho/link.</li><li>Conceda a Marina edição e a Paulo comentário/revisão conforme a tarefa; teste permissões.</li><li>Antes de editar, cada pessoa confirma nome, estado e versão exibidos.</li><li>Use comentários para dúvidas e alterações registradas para propostas relevantes. Não crie “cópia do Paulo” sem necessidade.</li><li>Defina um horário de consolidação. Nesse momento, Marina aceita/rejeita mudanças autorizadas e registra decisões.</li><li>Após aprovação, retire edição desnecessária, exporte a entrega e mova cópias locais para arquivo conforme P-02.</li><li>Teste com outra pessoa se o link ainda abre a fonte correta.</li></ol></div>
      <div class="evidence-box"><strong>Resultado</strong><p>Há uma fonte identificável, histórico compreensível e entrega derivada. “Todos editaram” não é evidência de consistência.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>Mesmo com fonte canônica, uma edição simultânea ou sincronização atrasada pode gerar conflito. O conflito deve ser investigado, não vencido pelo nome “mais novo”.</p></div>`
  },
  {
    id: 'colaboracao-conflitos', number: '09', menuTitle: 'Conflitos e histórico',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Recuperação · comparação, histórico e reconciliação',
    title: 'Conflito de versão é uma diferença a reconciliar',
    objective: 'Comparar versões, usar histórico e consolidar mudanças sem descartar evidência.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 15h00 · alerta de conflito</span><h2>A pasta cria “Guia (cópia em conflito de COORD-02)”.</h2><p>Não está provado que a cópia de Paulo seja errada nem que a versão no servidor seja completa. Nome e horário são pistas; o conteúdo e o histórico mostram diferenças.</p></div>
      <h3>Resolver em cópia controlada</h3><div class="task-box"><ol><li>Pare novas edições e avise os envolvidos no canal definido.</li><li>Copie as duas versões e o histórico para uma pasta de análise; não renomeie os originais antes de registrar.</li><li>Compare título, conteúdo alterado, comentários, autor e horário. Liste diferenças em P-03/P-40.</li><li>Para cada diferença, localize decisão ou fonte: ata, comentário aprovado, P-10.</li><li>Crie uma nova versão consolidada a partir da fonte canônica e aplique somente mudanças sustentadas.</li><li>Peça validação aos responsáveis, salve como nova versão e arquive as conflitantes com explicação. Não as apague até encerrar.</li><li>Teste histórico/restauração em cópia, conforme P-05, e registre o limite observado.</li></ol></div>
      <div class="danger-box"><strong>Nunca use “última modificação” como juiz único</strong><p>Relógio, sincronização e abertura automática podem mudar metadados. A decisão vem da fonte, autoria, conteúdo e aprovação.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>O conflito foi reconciliado. Antes de encerrar, a equipe precisa remover acessos temporários, preservar registros e confirmar que não deixou dados expostos.</p></div>`
  },
  {
    id: 'colaboracao-privacidade', number: '10', menuTitle: 'Privacidade e encerramento',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Fechamento · acesso, retenção, arquivo e confirmação',
    title: 'Encerrar é retirar excessos e deixar o trabalho continuável',
    objective: 'Revisar destinatários, permissões, dados, tarefas e arquivos ao final de uma entrega.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 16h00 · Feira encerrada</span><h2>Links de edição temporários continuam ativos e tarefas permanecem “em andamento”.</h2><p>O projeto acabou, mas a exposição e a confusão continuam. Paulo define quem mantém acesso, quais registros são arquivados e quais cópias temporárias devem ser removidas conforme regra institucional.</p></div>
      <h3>Roteiro de encerramento</h3><div class="task-box"><ol><li>Compare compartilhamentos atuais com P-04. Remova acesso temporário ou reduza para visualização quando autorizado.</li><li>Teste um link revogado em perfil sem sessão; ele não deve abrir.</li><li>Confirme que decisões estão na ata/P-03, não apenas em conversas pessoais.</li><li>Marque tarefas concluídas somente com evidência; cancele as que perderam finalidade, registrando motivo.</li><li>Mova fontes aprovadas, entregas, P-00, P-01, P-02, P-03, P-04, P-05, P-10, P-20, P-30, P-40 e comprovantes para <code>90_Arquivo</code> conforme P-02.</li><li>Remova rascunhos locais apenas após verificar a fonte arquivada e a recuperação. Não esvazie lixeira institucional sem autorização.</li><li>Envie mensagem de encerramento aos envolvidos: resultado, local do pacote, pendências, acesso e responsável futuro.</li></ol></div>
      <div class="evidence-box"><strong>Validação</strong><p>Uma pessoa autorizada encontra o pacote; uma pessoa sem necessidade não acessa; decisões e pendências estão explícitas; a recuperação testada continua disponível dentro do prazo.</p></div>
      <div class="bridge-box"><strong>Consequência</strong><p>P-40 agora liga canal, agenda, tarefa, ata, coautoria e encerramento. O desafio testa o fluxo completo sob um erro controlado.</p></div>`
  },
  {
    id: 'colaboracao-desafio', number: '11', menuTitle: 'Desafio: mudança de última hora',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Integração · comunicar, atribuir, registrar e encerrar',
    title: 'Desafio: coordenar uma mudança de última hora',
    objective: 'Escolher canais, controlar acesso e concluir uma alteração rastreável sem dispersar versões.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 12h10 · três horas antes da abertura</span><h2>O Bloco B ficará indisponível; dois projetos precisam mudar de local.</h2><p>Lia fornece a evidência do bloqueio. Paulo decide a nova distribuição. Marina atualiza documento e mensagem pública. Renato não participa da decisão de espaço, mas precisa saber se haverá custo.</p></div>
      <h3>Missão da equipe</h3><div class="task-box"><ol><li>Registre o sintoma e a fonte da informação; não escreva a causa se ela não estiver na evidência fornecida.</li><li>Use P-40 para escolher alerta imediato, reunião curta somente se necessária, responsáveis e prazos.</li><li>Identifique em P-03 e P-30 quais documento, planilha e apresentação dependem do local.</li><li>Atualize primeiro o arquivo canônico; gere novas entregas e mantenha as anteriores arquivadas.</li><li>Teste permissões de cada link e confirme destinatários antes da comunicação.</li><li>Registre decisão, tarefas, versões substituídas e confirmação de recebimento.</li><li>O professor pode introduzir destinatário homônimo, link sem acesso ou anexo antigo. Se estiver estudando sozinho, use <code>05_link_compartilhado.txt</code> como item sob teste e compare-o com P-04 sem presumir a causa. Detecte a falha na conferência, interrompa o envio e corrija sem apagar evidência.</li><li>Encerre acessos temporários e transfira o pacote a outra equipe; no estudo individual, faça uma segunda rodada como equipe receptora usando somente P-40 e o pacote.</li></ol></div>
      <div class="check-card"><strong>P-40 completo</strong><ul data-checklist><li><label><input type="checkbox"> canal justificado pela necessidade;</label></li><li><label><input type="checkbox"> mensagem contém contexto, ação, prazo e versão;</label></li><li><label><input type="checkbox"> destinatários e permissões foram testados;</label></li><li><label><input type="checkbox"> agenda/tarefas possuem responsáveis e evidências;</label></li><li><label><input type="checkbox"> decisão está em ata/fonte oficial;</label></li><li><label><input type="checkbox"> conflito, privacidade e encerramento foram tratados.</label></li></ul><p class="check-progress" data-check-progress></p></div>
      <div class="bridge-box"><strong>Continuidade</strong><p>Os quatro novos registros estão prontos. O Projeto Integrador reúne P-00, P-01, P-02, P-03, P-04, P-05, P-10, P-20, P-30 e P-40 para entregar toda a Feira e passar o trabalho adiante.</p></div>`
  }
]);
