window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'projeto-integrador-feira', number: '99', menuTitle: 'Entrega completa da Feira',
    unit: 'Projeto Integrador · Informática e Produtividade', technicalTitle: 'Síntese · produzir, validar, entregar e transferir',
    title: 'Missão final: entregar a Feira de Projetos',
    objective: 'Executar um fluxo completo e rastreável usando os artefatos acumulados, corrigir uma falha e transferir o trabalho.',
    content: `
      <div class="story-opening"><span class="eyebrow">Escola Horizonte · semana final</span><h2>Outra equipe precisa conseguir abrir a Feira mesmo que a equipe atual não esteja disponível.</h2><p>Paulo envia o pedido oficial; Marina mantém inscrições e comunicação; Lia prepara espaços e apresentação; Renato valida custos. O pacote inicial contém fontes, versões e uma falha preparada pelo professor. A missão não é produzir arquivos isolados: é deixar uma entrega comprovada e continuável.</p></div>

      <h3>Pré-voo · localizar o que já existe</h3>
      <div class="note-box"><p>Este projeto continua a árvore <code>Feira_Projetos_2026</code> criada no Módulo 1. Antes de baixar outro pacote, localize em <code>90_Arquivo</code> — ou em <code>10_Em_trabalho</code>, se o módulo ainda não foi encerrado — a última versão validada de cada registro. Use P-03 para confirmar versão e estado; uma sigla isolada não prova que o arquivo é o correto.</p></div>
      <div class="table-wrap"><table><thead><tr><th>Arquivos de registro esperados</th><th>O que permitem conferir</th></tr></thead><tbody><tr><td><code>P-00_pedido-e-criterios.txt</code><br><code>P-01_inventario.txt</code><br><code>P-02_estrutura-e-nomes.txt</code><br><code>P-03_versoes-e-aprovacoes.txt</code><br><code>P-04_permissoes.txt</code><br><code>P-05_recuperacao.txt</code></td><td>pedido, inventário, estrutura/nomes, versões/aprovações, permissões e recuperação</td></tr><tr><td><code>P-10_documento.txt</code></td><td>critérios, fontes da informação, revisão, acessibilidade e saída do documento</td></tr><tr><td><code>P-20_planilha.txt</code></td><td>campos, tipos, fórmulas, validações, análise, erros e limites</td></tr><tr><td><code>P-30_apresentacao.txt</code></td><td>mensagens, evidências, visuais, notas, ensaio e contingência</td></tr><tr><td><code>P-40_comunicacao.txt</code></td><td>canais, destinatários, agenda, tarefas, ata, permissões e encerramento</td></tr></tbody></table></div>

      <h3>Condições da missão</h3>
      <div class="task-box"><ol><li>Baixe o <a href="../downloads/informatica-produtividade/projeto-integrador/pacote-final-feira.zip" download>pacote do Projeto Integrador</a> em <code>00_Entrada</code>. Na raiz do pacote, confirme <strong>três itens</strong>: <code>PEDIDO_OFICIAL.txt</code>, <code>LEIA-ME.txt</code> e a pasta <code>fontes</code>; dentro de <code>fontes</code>, confirme sete arquivos. São nove arquivos ao todo.</li><li>Preserve o ZIP. Extraia uma cópia para <code>10_Em_trabalho/projeto-integrador</code>, abra <code>LEIA-ME.txt</code> e trabalhe somente nessa cópia.</li><li>Use LibreOffice Writer, Calc e Impress como caminho principal. Para colaboração, use o simulador do Módulo 5 ou o espaço institucional autorizado; sem serviço autorizado, registre a simulação em P-04/P-40.</li><li>Não compartilhe senhas, dados reais nem links públicos. Qualquer ação de exclusão, substituição, permissão ou restauração deve ter alvo, autorização, retorno e registro.</li><li>O professor pode definir prazo, equipe receptora e uma falha. No estudo individual, use como prazo <strong>18/09/2026 às 8h</strong>, assuma “Equipe receptora B” como o segundo papel e investigue uma inconsistência de <code>fontes/permissoes.txt</code> sem presumir sua causa. Não procure gabarito no nome nem na data dos arquivos.</li></ol></div>

      <div class="visual-lab"><div class="visual-header"><span>Cadeia de evidências</span><h3>Uma entrega depende da anterior, mas pode ser auditada</h3></div><div class="delivery-chain"><span><b>P-00–P-05</b> pedido, fontes, versões, acesso e recuperação</span><span><b>P-10</b> documento e checklist</span><span><b>P-20</b> dados, regras e análise</span><span><b>P-30</b> mensagem, visual e ensaio</span><span><b>P-40</b> comunicação, agenda e acompanhamento</span></div><p class="visual-question"><strong>Ação:</strong> escolha uma informação do slide e percorra o caminho inverso até a fonte recebida.</p></div>

      <h3>Fase 1 · receber e controlar a fonte</h3>
      <div class="project-phase"><ol start="1"><li><strong>Receber o pedido.</strong> Leia <code>PEDIDO_OFICIAL.txt</code> na cópia extraída; continue P-00 com entregáveis, público, responsáveis, prazo, critérios e pendências. Resultado: a equipe sabe o que significa terminar.</li><li><strong>Organizar fontes.</strong> Inventarie em P-01 os sete itens da pasta <code>fontes</code> sem editar os recebidos; aplique a estrutura e os nomes definidos em P-02 às cópias de trabalho. Resultado: cada fonte da informação tem origem e estado.</li><li><strong>Validar versões.</strong> Compare conteúdo, metadados e decisões registradas em <code>fontes/decisoes.txt</code>; atualize P-03. Se faltar evidência, marque pendente. Resultado: um arquivo canônico identificado para cada artefato.</li></ol></div>

      <h3>Fase 2 · produzir os três artefatos</h3>
      <div class="project-phase"><ol start="4"><li><strong>Produzir o documento.</strong> Abra uma cópia de <code>fontes/programacao_editavel.odt</code> no Writer e use P-10 para criar o Guia Público da Feira: finalidade, estilos, página, tabela, mapa/legenda, fontes da informação, revisão e acessibilidade.</li><li><strong>Produzir a planilha.</strong> Abra uma cópia de <code>fontes/controle_feira.ods</code> no Calc e use P-20 para organizar inscrições, materiais e custos: estrutura tabular, tipos, fórmulas, validação, filtros, resumo e gráfico. Não esconda ausentes nem erros.</li><li><strong>Produzir a apresentação.</strong> Abra uma cópia de <code>fontes/apresentacao_feira.odp</code> no Impress e use P-30 para preparar até cinco minutos: mensagem → evidência → visual → fala, fontes da informação, acessibilidade, notas do apresentador e contingência.</li><li><strong>Registrar fontes.</strong> Em cada artefato e no respectivo registro cumulativo, identifique origem da informação, versão, data e transformação. Teste pelo menos um caminho inverso, da mensagem publicada até o arquivo recebido.</li></ol></div>

      <h3>Fase 3 · colaborar e acompanhar</h3>
      <div class="project-phase"><ol start="8"><li><strong>Compartilhar corretamente.</strong> Aplique P-04: pessoa específica, necessidade, menor permissão e teste com outro perfil. Sem serviço institucional, execute o simulador do Módulo 5, capítulo 04, e registre que a evidência é simulada.</li><li><strong>Comunicar responsáveis.</strong> Com P-40, produza mensagem com assunto, ação, prazo, versão e link/anexo verificado; confira destinatários depois de inserir o material.</li><li><strong>Agendar e acompanhar.</strong> Registre em P-40 — ou na agenda autorizada — evento com pauta e arquivos-fonte, além de tarefas com responsável, prazo, dependência, estado e evidência.</li></ol></div>

      <h3>Fase 4 · revisar, exportar e testar</h3>
      <div class="project-phase"><ol start="11"><li><strong>Revisar.</strong> Outra pessoa aplica os checklists de P-10/P-20/P-30; no estudo individual, feche os três arquivos e faça uma segunda rodada somente com esses checklists. Comentários e mudanças ficam registrados; a equipe decide e atualiza P-03.</li><li><strong>Exportar formatos corretos.</strong> Gere PDF do documento, ODS + PDF do resumo e ODP + PDF da apresentação. Feche os aplicativos de autoria, abra cada saída separadamente e confira páginas/slides, famílias tipográficas, dados, origens da informação e itens ocultos.</li><li><strong>Testar permissões.</strong> Confirme que a equipe receptora acessa o necessário e que um perfil sem autorização não acessa. Na simulação, compare as combinações com P-04 e identifique o limite do teste. Corrija antes do envio.</li><li><strong>Testar recuperação.</strong> Em uma cópia controlada, altere ou remova um arquivo didático e execute P-05. Registre o que foi recuperado, mecanismo, tempo e limite; não prometa recuperação além do teste.</li></ol></div>

      <h3>Fase 5 · falha, pacote e transferência</h3>
      <div class="project-phase"><ol start="15"><li><strong>Corrigir a falha preparada.</strong> O professor seleciona uma das falhas previstas; no estudo individual, use a condição definida no pré-voo. Crie <code>RELATORIO_FALHA.txt</code> em <code>90_Arquivo</code> e registre sintoma, hipótese, teste seguro, evidência, causa comprovada, correção, reteste e limite.</li><li><strong>Produzir o pacote final.</strong> Em <code>30_Publicado</code>, inclua somente entregas marcadas como aprovadas em P-03; em <code>90_Arquivo</code>, fontes, registros e histórico autorizados. Crie <code>LEIA-ME_FINAL.txt</code> com conteúdo, versões, aplicativo para abrir, pendências e responsável.</li><li><strong>Transferir.</strong> A equipe receptora usa somente o pacote e a ficha abaixo. Sem ajuda oral, ela deve localizar fontes, abrir entregas, identificar aprovações, executar a apresentação, encontrar pendências e restaurar o item de teste. No estudo individual, feche tudo e faça essa verificação no papel de “Equipe receptora B”.</li></ol></div>

      <div class="template-box"><label for="modelo-transferencia"><strong>Ficha de transferência</strong></label><p>Crie <code>FICHA_TRANSFERENCIA.txt</code> em <code>90_Arquivo</code> e entregue uma cópia com o pacote.</p><textarea id="modelo-transferencia" class="record-template" rows="11" readonly>Equipe que entrega:
Equipe que recebe:
Data/hora:
Pacote recebido e versão:
Entregas localizadas:
Aprovações conferidas em P-03:
Pendências encontradas:
Apresentação executada?:
Recuperação testada?:
Dúvida ou bloqueio:
Resultado da transferência:</textarea><div><button class="action-button" type="button" data-copy="#modelo-transferencia">Copiar ficha</button><span class="copy-status" aria-live="polite"></span></div></div>

      <section class="decision-box"><h3>Falha preparada: até onde concluir?</h3><div class="choice-list" data-choice data-answer="b" data-explanation="O método MbB conclui somente o que a evidência sustenta e mantém pendências explícitas."><label><input type="radio" name="d999" value="a"> se o arquivo abrir, declarar tudo correto;</label><label><input type="radio" name="d999" value="b"> testar a hipótese, corrigir a causa comprovada, retestar e registrar limites;</label><label><input type="radio" name="d999" value="c"> apagar versões conflitantes para reduzir confusão.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>

      <h3>Critérios de aceite do pacote</h3>
      <div class="check-card"><ul data-checklist>
        <li><label><input type="checkbox"> P-00 define pedido, entregáveis, responsáveis, prazo e critérios;</label></li>
        <li><label><input type="checkbox"> P-01/P-02 ligam fontes e estrutura sem apagar o recebido;</label></li>
        <li><label><input type="checkbox"> P-03 identifica versões e aprovações dos três artefatos;</label></li>
        <li><label><input type="checkbox"> P-04 prova acesso mínimo e bloqueio do perfil não autorizado;</label></li>
        <li><label><input type="checkbox"> P-05 registra teste real de recuperação e limite;</label></li>
        <li><label><input type="checkbox"> P-10 prova estrutura, revisão, acessibilidade e PDF do documento;</label></li>
        <li><label><input type="checkbox"> P-20 prova tipos, fórmulas, validações, análise e auditoria;</label></li>
        <li><label><input type="checkbox"> P-30 liga mensagem, evidência, visual, fala, ensaio e contingência;</label></li>
        <li><label><input type="checkbox"> P-40 liga canal, destinatários, agenda, tarefas, ata e encerramento;</label></li>
        <li><label><input type="checkbox"> falha foi diagnosticada por evidência, corrigida e retestada;</label></li>
        <li><label><input type="checkbox"> formatos finais foram abertos e conferidos fora da fonte;</label></li>
        <li><label><input type="checkbox"> equipe receptora continuou o trabalho sem explicação oral.</label></li>
      </ul><p class="check-progress" data-check-progress></p></div>

      <div class="evidence-box"><strong>Evidência final</strong><p>Entregue o pacote, P-00, P-01, P-02, P-03, P-04, P-05, P-10, P-20, P-30, P-40, <code>RELATORIO_FALHA.txt</code> e <code>FICHA_TRANSFERENCIA.txt</code> validada pela equipe receptora ou pela segunda rodada individual. O professor avalia método, rastreabilidade, segurança e continuidade — não apenas aparência.</p></div>
      <div class="bridge-box"><strong>Encerramento da área</strong><p>O trabalho digital está concluído quando pode ser encontrado, compreendido, conferido, entregue, recuperado e continuado por outra pessoa.</p></div>`
  }
]);
