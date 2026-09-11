window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'colaboracao-diagnostico', number: '00', menuTitle: 'A conversa que virou sistema',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Diagnóstico · canal, decisão, tarefa e versão',
    title: 'Quando tudo chega por todo lugar, ninguém sabe o que vale',
    objective: 'Diagnosticar comunicação dispersa sem reenviar arquivos nem inventar decisões ausentes.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 7h55 · semana da Feira</span><h2>O “ok” existe, mas ninguém consegue provar qual arquivo foi aprovado.</h2><p>Marina enviou um cartaz sem versão, Paulo respondeu sem citar arquivo, Lia marcou reunião sem convidados, a impressão não tem responsável e um link dá edição para qualquer pessoa. O problema é localizar decisão, tarefa, versão e acesso.</p></div>
      <section class="decision-box"><h3>Primeira ação segura</h3><div class="choice-list" data-choice data-answer="c" data-explanation="Inventariar os registros existentes evita criar mais mensagens e permite separar fatos de lacunas."><label><input type="radio" name="d500" value="a"> reenviar tudo para todos;</label><label><input type="radio" name="d500" value="b"> escolher o arquivo mais recente pelo horário;</label><label><input type="radio" name="d500" value="c"> ler os registros, identificar o que está comprovado e o que está faltando.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>

      <h3>Faça comigo · abra a caixa de comunicação</h3>
      <div class="task-box"><ol>
        <li>Baixe o <a href="../downloads/informatica-produtividade/modulo-05/caixa-comunicacao-feira.zip" download>pacote de comunicações fictícias</a>, preserve o ZIP e extraia uma cópia em <code>10_Em_trabalho</code>.</li>
        <li>Abra <code>LEIA-ME.txt</code> e depois, nesta ordem: <code>01_mensagem_marina.txt</code>, <code>02_resposta_paulo.txt</code>, <code>03_evento_lia.txt</code>, <code>04_tarefa_impressao.txt</code> e <code>05_link_compartilhado.txt</code>.</li>
        <li>Em cada item, localize canal, decisão, tarefa, versão e lacuna.</li>
        <li>Não envie nada para pessoas reais e não altere os arquivos recebidos.</li>
      </ol></div>
      <div class="evidence-box"><strong>O que os seis itens mostram</strong><p>há aprovação sem versão identificada, reunião sem convidados/material, tarefa sem responsável/evidência e link público com permissão de edição.</p></div>
      <p>No <code>CONTROLE_DA_FEIRA.txt</code>, crie <strong>[P-40] Comunicação</strong> e anote somente essas quatro lacunas.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Para não espalhar ainda mais informação, cada necessidade precisa de um canal principal e de um lugar claro onde a decisão termina.</p></div>`
  },
  {
    id: 'colaboracao-canais', number: '01', menuTitle: 'Escolher o canal',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Arquitetura da comunicação · urgência, registro e público',
    title: 'Canal é escolhido pela necessidade, não pelo hábito',
    objective: 'Escolher canal e registro conforme urgência, sensibilidade, necessidade de resposta e permanência.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 8h40 · mapa de comunicação</span><h2>Um alerta, uma aprovação, uma reunião e uma tarefa não pedem o mesmo canal.</h2><p>Paulo quer reduzir dispersão: conversa rápida alerta; e-mail formaliza uma decisão; agenda reserva tempo; tarefa acompanha execução; pasta colaborativa mantém a fonte.</p></div>
      <div class="table-wrap"><table><thead><tr><th>Necessidade</th><th>Canal principal</th><th>Onde termina</th></tr></thead><tbody>
        <tr><td>alertar mudança imediata</td><td>mensagem institucional</td><td>confirmação + fonte oficial atualizada</td></tr>
        <tr><td>pedir aprovação</td><td>e-mail/comentário</td><td>versão e decisão registradas</td></tr>
        <tr><td>reservar revisão</td><td>agenda</td><td>evento com convidados e material</td></tr>
        <tr><td>acompanhar impressão</td><td>tarefa</td><td>responsável, prazo e evidência</td></tr>
        <tr><td>editar material</td><td>pasta colaborativa</td><td>fonte canônica e histórico</td></tr>
      </tbody></table></div>
      <div class="task-box"><ol>
        <li>Volte aos cinco registros da caixa de comunicação.</li>
        <li>Para cada um, escolha o canal que deveria conduzir a necessidade até uma conclusão.</li>
        <li>Identifique o que não deve circular naquele canal: senha, dado pessoal, versão de trabalho ou lista pública de endereços.</li>
        <li>Teste-se: “onde eu procuraria amanhã para saber qual versão foi aprovada?”. A resposta não pode ser “na conversa do celular”.</li>
      </ol></div>
      <p>Em <strong>[P-40] Comunicação</strong>, acrescente apenas o mapa curto: necessidade → canal principal → registro final.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Para pedir aprovação, Marina precisa escrever uma mensagem que diga qual arquivo, qual decisão e qual prazo.</p></div>`
  },
  {
    id: 'colaboracao-mensagem', number: '02', menuTitle: 'Mensagem profissional',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Redação operacional · contexto, pedido e prazo',
    title: 'Mensagem profissional reduz a próxima dúvida',
    objective: 'Escrever mensagem curta com contexto suficiente, ação clara, prazo e caminho de resposta.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 9h10 · pedido de aprovação</span><h2>“Oi, vê se está bom” não informa o que Paulo precisa decidir.</h2><p>Marina precisa da aprovação do PDF da programação até 14h para liberar a impressão.</p></div>
      <div class="template-box"><label for="modelo-email"><strong>Rascunho de trabalho</strong></label><textarea id="modelo-email" class="record-template" rows="10" readonly>Assunto: Aprovação até 14h — Programação da Feira — PDF v03
Olá, Paulo.

Preciso da sua aprovação da Programação da Feira, PDF v03, até hoje às 14h para liberar a impressão.
Confira: horário de abertura, locais e orientação de entrada.
Fonte editável aprovada: ODT v09. Link interno: [link autorizado]

Responda “Aprovado: PDF v03” ou indique página, trecho e ajuste necessário.
Marina</textarea><div><button class="action-button" type="button" data-copy="#modelo-email">Copiar rascunho</button><span class="copy-status" aria-live="polite"></span></div></div>
      <div class="task-box"><ol>
        <li>Copie o rascunho para um arquivo local ou campo de simulação.</li>
        <li>Confirme a versão citada e o prazo.</li>
        <li>Leia apenas o assunto: ele já deve indicar ação, objeto e prazo.</li>
        <li>Leia o corpo e identifique contexto, pedido, critérios de conferência e forma esperada de resposta.</li>
        <li>Reescreva o rascunho se alguma dessas respostas ainda depender de adivinhação.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>Paulo consegue saber o que conferir e até quando sem perguntar “qual arquivo?” ou “o que você quer que eu veja?”.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A mensagem está clara. Agora precisamos decidir quem deve agir, quem apenas acompanha e quem deve ficar fora.</p></div>`
  },
  {
    id: 'colaboracao-destinatarios', number: '03', menuTitle: 'Destinatários, CC e Cco',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Endereçamento · ação, ciência e privacidade',
    title: 'Destinatário define acesso e responsabilidade',
    objective: 'Distinguir quem deve agir, quem precisa acompanhar e quando endereços devem ser protegidos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 9h40 · antes de enviar</span><h2>Paulo aprova. Lia acompanha a impressão. Famílias não participam desta conversa.</h2><p>Colocar todos em “Para” dilui a responsabilidade; expor endereços de famílias em CC pode criar um problema de privacidade.</p></div>
      <div class="comparison-grid four"><div><strong>Para</strong><p>quem precisa agir</p></div><div><strong>CC</strong><p>quem acompanha</p></div><div><strong>Cco/BCC</strong><p>protege endereços em envio coletivo apropriado</p></div><div><strong>Fora</strong><p>quem não precisa receber</p></div></div>
      <section class="decision-box"><h3>Enderece a aprovação</h3><div class="choice-list" data-choice data-answer="a" data-explanation="Paulo deve agir; Lia acompanha; famílias não precisam do material interno."><label><input type="radio" name="d503" value="a"> Para: Paulo; CC: Lia; famílias: fora;</label><label><input type="radio" name="d503" value="b"> Para: todos os contatos da escola;</label><label><input type="radio" name="d503" value="c"> Cco: Paulo, ocultando o responsável pela aprovação.</label><button class="action-button" type="button" data-check-choice>Conferir escolha</button><div class="choice-result" aria-live="polite"></div></div></section>
      <div class="task-box"><ol>
        <li>Escreva a função de cada pessoa antes de preencher destinatários.</li>
        <li>Confira nome completo e domínio do destinatário.</li>
        <li>Use CC apenas para ciência necessária.</li>
        <li>Use Cco em comunicados coletivos quando endereços não devem ser expostos e a política permitir.</li>
        <li>Faça nova conferência depois de inserir anexo ou link.</li>
      </ol></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Mesmo com destinatário correto, o arquivo ou link pode apontar para a versão errada ou conceder poder demais.</p></div>`
  },
  {
    id: 'colaboracao-anexos', number: '04', menuTitle: 'Anexos, links e permissões',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Distribuição · arquivo, vínculo, versão e acesso mínimo',
    title: 'Anexo congela uma cópia; link aponta para um local',
    objective: 'Escolher entre anexo e link, validar versão e testar a permissão com outro perfil.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 10h20 · pasta colaborativa</span><h2>O registro <code>05_link_compartilhado.txt</code> mostra “qualquer pessoa com o link” e permissão de editar.</h2><p>Isso não combina com a necessidade de revisão. A equipe precisa escolher arquivo, pessoa e menor permissão suficiente.</p></div>
      <div class="visual-lab"><div class="visual-header"><span>Simulador MbB</span><h3>Teste a combinação antes de compartilhar</h3></div><div class="permission-simulator" data-permission-sim><label>Arquivo <select data-file><option value="">Escolha</option><option value="pdf">PDF v03 aprovado</option><option value="odt">ODT v09 editável</option></select></label><label>Pessoa <select data-person><option value="">Escolha</option><option value="paulo">Paulo · aprova</option><option value="lia">Lia · imprime</option><option value="publico">Link público</option></select></label><label>Permissão <select data-permission><option value="">Escolha</option><option value="view">Visualizar</option><option value="comment">Comentar</option><option value="edit">Editar</option></select></label><button type="button" class="action-button" data-check-permission>Testar combinação</button><div class="feedback" data-permission-result aria-live="polite"></div></div><p class="visual-question"><strong>Experimente:</strong> PDF/Lia/Visualizar; ODT/Paulo/Comentar; Link público/Editar.</p></div>
      <div class="task-box"><ol>
        <li>Confirme o nome completo da versão antes de compartilhar.</li>
        <li>Se todos precisam da mesma fonte atualizada, prefira link autorizado; se precisam de uma cópia estável, use PDF conforme a política.</li>
        <li>Conceda a menor permissão que permite a tarefa.</li>
        <li>Teste com outro perfil: visualizar não pode editar; pessoa não autorizada não deve abrir.</li>
        <li>Se o teste falhar, remova/corrija a permissão antes de enviar a mensagem.</li>
      </ol></div>
      <p>Em <strong>[P-40] Comunicação</strong>, registre somente os acessos relevantes que foram testados.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A revisão precisa de horário comum, convidados, material e uma decisão esperada.</p></div>`
  },
  {
    id: 'colaboracao-agenda', number: '05', menuTitle: 'Agenda com preparação',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Calendário · disponibilidade, convite, pauta e lembrete',
    title: 'Evento de agenda reserva tempo e prepara uma decisão',
    objective: 'Criar convite completo, verificar conflitos e atualizar participantes sem duplicar eventos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 11h00 · revisão de 20 minutos</span><h2>O arquivo <code>03_evento_lia.txt</code> registra a reunião só no calendário de Lia.</h2><p>O evento tem horário, mas nenhum convidado e nenhum material. Para a equipe, a reunião praticamente não existe.</p></div>
      <div class="task-box"><ol>
        <li>Crie/simule o evento “Decidir programação e liberar impressão”.</li>
        <li>Adicione Paulo, Marina e Lia e verifique disponibilidade antes de confirmar 13h30–13h50.</li>
        <li>Inclua objetivo, pauta curta, material com permissão testada e decisão esperada.</li>
        <li>Defina lembrete compatível com a preparação e informe local/equipamento.</li>
        <li>Se o horário mudar, edite o mesmo evento; não crie uma cópia duplicada.</li>
      </ol></div>
      <div class="evidence-box"><strong>Teste</strong><p>qualquer convidado deve saber por que participa, o que precisa ler e qual decisão deverá sair da reunião.</p></div>
      <p>Sem agenda institucional autorizada, registre a simulação em <strong>[P-40] Comunicação</strong>; não use conta pessoal para improvisar.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A reunião tem horário. A impressão e o teste do projetor são tarefas diferentes e precisam de responsáveis.</p></div>`
  },
  {
    id: 'colaboracao-tarefas', number: '06', menuTitle: 'Tarefas, responsáveis e prazos',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Acompanhamento · ação, dono, prazo, estado e evidência',
    title: 'Toda tarefa precisa de uma ação, um responsável e uma prova',
    objective: 'Registrar tarefas executáveis com responsável único, prazo, dependência e critério de conclusão.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 13h00 · quadro de preparação</span><h2><code>04_tarefa_impressao.txt</code> diz apenas “ver impressão”, responsável indefinido e prazo “urgente”.</h2><p>Isso não permite começar nem conferir a conclusão.</p></div>
      <div class="comparison-grid"><div class="bad-card"><strong>Vaga</strong><p>Ver impressão — todos — urgente</p></div><div class="good-card"><strong>Executável</strong><p>Imprimir 1 prova do PDF v03 em SEC-03 — Lia — 14h20 — prova conferida</p></div></div>
      <div class="task-box"><ol>
        <li>Divida o resultado em tarefas que começam com verbo.</li>
        <li>Dê um responsável principal para cada tarefa.</li>
        <li>Defina data/hora quando uma atividade depender da outra.</li>
        <li>Defina uma evidência observável de conclusão.</li>
        <li>Use estados consistentes: <strong>A fazer</strong>, <strong>Em andamento</strong>, <strong>Bloqueada</strong>, <strong>Concluída</strong>.</li>
        <li>Se houver bloqueio, registre a causa conhecida e quem decide o próximo passo; não marque concluído por esforço.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>outra pessoa consegue iniciar a tarefa sem perguntar “o que exatamente eu faço?”.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A reunião precisa transformar conversa em decisões e encaminhamentos executáveis.</p></div>`
  },
  {
    id: 'colaboracao-reuniao', number: '07', menuTitle: 'Reunião e ata útil',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Decisão coletiva · pauta, registro e encaminhamento',
    title: 'Ata útil registra decisão e próximo passo',
    objective: 'Conduzir reunião curta e produzir ata que permita executar e conferir encaminhamentos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 13h30 · revisão final</span><h2>Paulo confirma 8h30. Agora a decisão precisa sair da conversa e virar fonte de trabalho.</h2><p>Marina registra a decisão ligada à versão correta; Lia recebe a prova de impressão; Renato confirma limite de custo.</p></div>
      <div class="template-box"><label for="modelo-ata"><strong>Modelo de ata curta</strong></label><textarea id="modelo-ata" class="record-template" rows="12" readonly>ATA — LIBERAÇÃO DA PROGRAMAÇÃO
Data/horário/local:
Participantes:
Objetivo: decidir programação e liberar impressão
Fontes analisadas: PDF v03; documento aprovado; quantidade/custo

Decisões:
- Abertura às 8h30 — aprovado por Paulo

Encaminhamentos:
- Imprimir 1 prova do PDF v03 — Lia — 14h20
- Autorizar lote após prova — Marina — 14h40

Pendências:</textarea><div><button class="action-button" type="button" data-copy="#modelo-ata">Copiar ata</button><span class="copy-status" aria-live="polite"></span></div></div>
      <div class="task-box"><ol>
        <li>Abra a pauta e as fontes antes da reunião.</li>
        <li>Para cada item, registre decisão ou pendência.</li>
        <li>Transforme encaminhamento em ação + responsável + prazo + evidência.</li>
        <li>Nos minutos finais, leia decisões e tarefas para validação.</li>
        <li>Salve a ata na pasta autorizada e atualize as versões/tarefas afetadas.</li>
      </ol></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Marina e Paulo precisam editar o Guia do Expositor sem criar duas fontes concorrentes.</p></div>`
  },
  {
    id: 'colaboracao-coautoria', number: '08', menuTitle: 'Coautoria controlada',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Trabalho simultâneo · fonte canônica, comentário e aprovação',
    title: 'Coautoria funciona quando todos sabem qual é a fonte',
    objective: 'Editar uma fonte compartilhada com papéis, comentários e aprovação definidos.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 14h10 · Guia do Expositor</span><h2>Marina edita uma cópia local enquanto Paulo comenta outra.</h2><p>As duas podem conter mudanças válidas e, ao mesmo tempo, nenhuma ser a fonte completa. A equipe precisa trabalhar sobre uma referência canônica.</p></div>
      <div class="task-box"><ol>
        <li>Identifique um único arquivo canônico na pasta colaborativa.</li>
        <li>Conceda a Marina edição e a Paulo comentário/revisão quando isso for suficiente.</li>
        <li>Antes de editar, cada pessoa confirma nome, estado e versão.</li>
        <li>Use comentários para dúvidas; evite criar “cópia do Paulo” sem necessidade.</li>
        <li>Defina um momento de consolidação em que mudanças autorizadas são aceitas/rejeitadas.</li>
        <li>Depois da aprovação, identifique a fonte aprovada em <strong>[P-03] Versões</strong>, reduza acessos que não são mais necessários e gere a entrega.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>todos conseguem apontar qual é a fonte e explicar como a entrega deriva dela.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Mesmo com uma fonte definida, sincronização atrasada pode gerar uma cópia em conflito. O nome “mais novo” não resolve sozinho.</p></div>`
  },
  {
    id: 'colaboracao-conflitos', number: '09', menuTitle: 'Conflitos e histórico',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Recuperação · comparação, histórico e reconciliação',
    title: 'Conflito de versão é uma diferença a reconciliar',
    objective: 'Comparar versões, usar histórico e consolidar mudanças sem descartar evidência.',
    content: `
      <div class="story-opening"><span class="eyebrow">Segunda-feira · 15h00 · alerta de conflito</span><h2>A pasta cria “Guia (cópia em conflito de COORD-02)”.</h2><p>Isso não prova qual versão está certa. Horário e nome são pistas; conteúdo, autoria e decisões mostram o que deve ser mantido.</p></div>
      <div class="task-box"><ol>
        <li>Pare novas edições e avise os envolvidos.</li>
        <li>Copie as duas versões para uma pasta de análise sem alterar os originais.</li>
        <li>Compare conteúdo, comentários, autor e horário.</li>
        <li>Para cada diferença, procure a fonte que sustenta a decisão: ata, comentário aprovado ou documento validado.</li>
        <li>Crie nova versão consolidada a partir da fonte canônica, aplique somente mudanças sustentadas e atualize <strong>[P-03] Versões</strong>.</li>
        <li>Valide com os responsáveis e arquive as versões conflitantes com explicação; não apague antes de encerrar.</li>
      </ol></div>
      <div class="danger-box"><strong>Última modificação não é juiz</strong><p>sincronização e abertura automática podem alterar metadados. A decisão vem do conteúdo e da aprovação.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O conflito foi resolvido. Falta encerrar acessos, tarefas e cópias temporárias com segurança.</p></div>`
  },
  {
    id: 'colaboracao-privacidade', number: '10', menuTitle: 'Privacidade e encerramento',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Fechamento · acesso, retenção, arquivo e confirmação',
    title: 'Encerrar é retirar excessos e deixar o trabalho continuável',
    objective: 'Revisar destinatários, permissões, dados, tarefas e arquivos ao final de uma entrega.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 16h00 · Feira encerrada</span><h2>Links temporários continuam ativos e tarefas permanecem “em andamento”.</h2><p>O evento terminou, mas o acesso e a confusão podem continuar se ninguém fizer o fechamento.</p></div>
      <div class="task-box"><ol>
        <li>Compare os acessos atuais com a necessidade final e remova/reduza permissões temporárias.</li>
        <li>Teste um link revogado em perfil não autorizado.</li>
        <li>Confirme que decisões importantes estão na ata/controle, não apenas em conversas.</li>
        <li>Conclua tarefas somente quando houver evidência; cancele as que perderam finalidade com motivo.</li>
        <li>Mova fontes aprovadas, entregas e <code>CONTROLE_DA_FEIRA.txt</code> para <code>90_Arquivo</code> conforme a estrutura definida.</li>
        <li>Remova rascunhos locais somente depois de conferir fonte arquivada e possibilidade de recuperação.</li>
        <li>Prepare uma mensagem final com resultado, local do pacote, pendências, acesso e responsável futuro.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>quem precisa continuar encontra o pacote e quem não precisa mais de acesso deixa de consegui-lo.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O desafio final combina canal, mensagem, versão, permissão, tarefa e mudança de última hora.</p></div>`
  },
  {
    id: 'colaboracao-desafio', number: '11', menuTitle: 'Desafio: mudança de última hora',
    unit: 'Módulo 5 · Colaboração e Comunicação Profissional', technicalTitle: 'Integração · comunicar, atribuir, registrar e encerrar',
    title: 'Desafio: coordenar uma mudança de última hora',
    objective: 'Escolher canais, controlar acesso e concluir uma alteração rastreável sem dispersar versões.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 12h10 · três horas antes da abertura</span><h2>O Bloco B ficará indisponível; dois projetos precisam mudar de local.</h2><p>Lia apresenta a evidência do bloqueio. Paulo decide a nova distribuição. Marina atualiza os materiais públicos. Renato só precisa ser envolvido se houver impacto financeiro.</p></div>
      <h3>Missão</h3>
      <div class="task-box"><ol>
        <li>Registre o fato observado e sua fonte sem inventar uma causa.</li>
        <li>Escolha o canal de alerta e defina responsáveis/prazos.</li>
        <li>Identifique quais documento, planilha e apresentação dependem do local.</li>
        <li>Atualize primeiro as fontes canônicas e gere novas entregas; preserve as anteriores no arquivo.</li>
        <li>Teste permissões e destinatários antes de comunicar.</li>
        <li>Use <code>05_link_compartilhado.txt</code> como armadilha de conferência: compare o acesso com a necessidade antes de “enviar”.</li>
        <li>Registre a decisão e a confirmação de recebimento em <strong>[P-40] Comunicação</strong>.</li>
        <li>Encerre acessos temporários e entregue o pacote a outra pessoa para continuidade.</li>
      </ol></div>
      <div class="check-card"><strong>Aceite</strong><ul data-checklist>
        <li><label><input type="checkbox"> canal foi escolhido pela necessidade;</label></li>
        <li><label><input type="checkbox"> mensagem indica ação, prazo e versão;</label></li>
        <li><label><input type="checkbox"> destinatários e permissões foram conferidos;</label></li>
        <li><label><input type="checkbox"> tarefas têm responsável e evidência;</label></li>
        <li><label><input type="checkbox"> decisão aparece em fonte oficial;</label></li>
        <li><label><input type="checkbox"> acessos temporários foram encerrados.</label></li>
      </ul><p class="check-progress" data-check-progress></p></div>
      <div class="bridge-box"><strong>Continuidade</strong><p>Agora todas as competências da área estão disponíveis. O Projeto Integrador reúne organização, documento, planilha, apresentação e comunicação em uma única entrega.</p></div>`
  }
]);
