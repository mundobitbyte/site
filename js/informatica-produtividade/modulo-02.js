window.produtividadeLessons = (window.produtividadeLessons || []).concat([
  {
    id: 'documentos-diagnostico', number: '00', menuTitle: 'O documento que não orienta',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Diagnóstico · legibilidade, estrutura e destino',
    title: 'O documento existe, mas ninguém consegue usá-lo',
    objective: 'Diagnosticar problemas de um documento sem começar pela aparência nem apagar a fonte recebida.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 8h10 · SEC-03</span><h2>A programação da Feira chegou, mas o leitor precisa caçar as informações.</h2><p>Marina precisa enviar o material às famílias e Paulo precisa revisar horários em <strong>COORD-02</strong>. Há títulos em maiúsculas, espaços usados para alinhar, uma tabela digitada com tabulações e uma imagem sem origem identificada. Antes de melhorar a aparência, você precisa descobrir o que impede o documento de cumprir sua função.</p></div>

      <section class="decision-box"><h3>Primeira decisão</h3><p>Qual verificação deve vir antes?</p><div class="choice-list" data-choice data-answer="b" data-explanation="Finalidade, público e fonte da informação determinam o que precisa ser corrigido. Aparência vem depois."><label><input type="radio" name="d200" value="a"> escolher cores e fontes;</label><label><input type="radio" name="d200" value="b"> identificar público, conteúdo, fonte e pendências;</label><label><input type="radio" name="d200" value="c"> exportar imediatamente para PDF.</label><button class="action-button" type="button" data-check-choice>Conferir decisão</button><div class="choice-result" aria-live="polite"></div></div></section>

      <h3>Faça comigo · preserve e abra a cópia</h3>
      <div class="task-box"><strong>Ferramenta principal: LibreOffice Writer</strong><ol>
        <li>Baixe a <a href="../downloads/informatica-produtividade/modulo-02/minuta-programacao-feira.odt" download>minuta problemática da programação</a> e salve-a em <code>00_Entrada</code>.</li>
        <li>Copie para <code>10_Em_trabalho</code> e renomeie a cópia como <code>2026-09-08_programacao-feira_em-edicao_v01.odt</code>.</li>
        <li>Abra a cópia no Writer. Percorra o documento inteiro sem editar.</li>
        <li>Use <strong>Arquivo → Propriedades</strong> e observe título, autor e estatísticas disponíveis.</li>
        <li>Localize no documento: hierarquia visual inconsistente, alinhamento por espaços, tabela não estrutural, imagem sem legenda/origem e a pendência de horário.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue apontar os problemas sem afirmar que o conteúdo está errado apenas porque a formatação está ruim.</p></div>

      <h3>Registre o ponto de partida</h3>
      <p>No <code>CONTROLE_DA_FEIRA.txt</code>, crie a seção <strong>[P-10] Documento</strong> e anote somente: arquivo analisado, público presumido, problemas observados e informação ainda pendente.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Antes de editar o documento, precisamos definir o que uma família deve conseguir encontrar e fazer depois de lê-lo.</p></div>`
  },
  {
    id: 'documentos-finalidade', number: '01', menuTitle: 'Finalidade, público e critérios',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Planejamento editorial · leitor, ação e aceite',
    title: 'Um documento serve a alguém e termina em uma ação',
    objective: 'Converter o pedido da Feira em critérios verificáveis de conteúdo, leitura e entrega.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 8h40 · alinhamento com Paulo</span><h2>A família não precisa receber as mesmas informações da equipe interna.</h2><p>Paulo define que o documento público deve permitir planejar a chegada e localizar as atividades. Telefones, notas e aprovações internas permanecem fora da versão pública.</p></div>

      <h3>Classifique o conteúdo antes de editar</h3>
      <div class="table-wrap"><table><thead><tr><th>Informação</th><th>Vai para o público?</th><th>Por quê?</th></tr></thead><tbody>
        <tr><td>data, horário e local</td><td>sim</td><td>permitem planejar a visita</td></tr>
        <tr><td>programação</td><td>sim</td><td>orienta o percurso</td></tr>
        <tr><td>telefone pessoal / nota interna</td><td>não</td><td>não é necessário ao público</td></tr>
        <tr><td>pendência ainda não aprovada</td><td>não como informação oficial</td><td>precisa de confirmação</td></tr>
      </tbody></table></div>

      <div class="task-box"><ol>
        <li>Abra a minuta e marque, sem apagar, os blocos que pertencem à versão pública.</li>
        <li>Identifique data, horário, local, programação, orientação de entrada e contato institucional.</li>
        <li>Separe aquilo que é interno ou ainda está pendente.</li>
        <li>Confirme que a entrega final será <strong>PDF + impressão A4</strong> e que o ODT permanecerá como fonte editável.</li>
      </ol></div>

      <h3>Atualize o controle</h3>
      <p>Em <strong>[P-10] Documento</strong>, acrescente apenas: público, ação esperada, conteúdo obrigatório, conteúdo que não deve sair, formato de trabalho, formato de entrega e quem aprova.</p>
      <div class="note-box"><strong>Termo profissional</strong><p>As condições que precisam ser verdadeiras para a entrega ser considerada pronta são os <strong>critérios de aceite</strong>.</p></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>você consegue explicar o que entra e o que fica fora sem depender de “ficou bonito” como critério.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O conteúdo certo ainda está em uma ordem ruim. Vamos reorganizar antes de formatar.</p></div>`
  },
  {
    id: 'documentos-estrutura', number: '02', menuTitle: 'Estrutura e hierarquia',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Organização do conteúdo · seções e leitura',
    title: 'A ordem do conteúdo reduz perguntas e erros',
    objective: 'Organizar informações em uma hierarquia que expresse relações, não apenas diferenças de tamanho.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 9h20 · primeira reorganização</span><h2>As informações existem, mas o credenciamento aparece depois dos agradecimentos.</h2><p>Uma família deve descobrir primeiro o que é a Feira, quando e onde acontece; depois, o que ocorrerá e como participar.</p></div>
      <section class="decision-box"><h3>Escolha a sequência</h3><div class="choice-list" data-choice data-answer="c" data-explanation="A sequência acompanha as perguntas reais do leitor."><label><input type="radio" name="d202" value="a"> agradecimentos → programação → título → entrada;</label><label><input type="radio" name="d202" value="b"> atividades em ordem alfabética, sem contexto;</label><label><input type="radio" name="d202" value="c"> título/resumo → informações essenciais → programação → orientações → contato/fontes.</label><button class="action-button" type="button" data-check-choice>Conferir sequência</button><div class="choice-result" aria-live="polite"></div></div></section>

      <h3>Faça no Writer</h3>
      <div class="task-box"><ol>
        <li>Salve a cópia como <code>..._v02.odt</code>.</li>
        <li>Ative <strong>Exibir → Navegador</strong> (<kbd>F5</kbd>) e observe se existem títulos reconhecidos.</li>
        <li>Mova um bloco completo por vez para a sequência escolhida. Use <strong>Ctrl+Z</strong> se perder conteúdo.</li>
        <li>Crie os rótulos “Programação”, “Orientações de entrada” e “Contato”. Ainda não mude cor, fonte ou tamanho.</li>
        <li>Leia somente os rótulos em ordem. Eles devem contar a estrutura do documento.</li>
      </ol></div>
      <div class="evidence-box"><strong>Teste rápido</strong><p>localize “quando?”, “onde?” e “o que ocorrerá?” sem usar busca. Se a resposta depender de cor ou memória, a estrutura ainda precisa melhorar.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Os rótulos estão no lugar certo, mas continuam sendo texto comum. Vamos transformá-los em estrutura de verdade com estilos.</p></div>`
  },
  {
    id: 'documentos-estilos', number: '03', menuTitle: 'Estilos que mantêm consistência',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Writer · estilos de parágrafo e manutenção',
    title: 'Formatação consistente nasce de estilos',
    objective: 'Aplicar e ajustar estilos para que estrutura, navegação e manutenção permaneçam coerentes.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 10h00 · revisão em COORD-02</span><h2>Paulo pede que todos os subtítulos ganhem mais espaço e legibilidade.</h2><p>Se cada subtítulo for alterado separadamente, diferenças aparecem. Como as seções têm a mesma função, elas podem compartilhar um estilo.</p></div>
      <div class="visual-lab"><div class="visual-header"><span>Representação didática de interface</span><h3>Aparência e estrutura não são a mesma coisa</h3></div><div class="interface-strip"><span><b>Corpo de texto</b></span><span><b>Título 1</b></span><span><b>Título 2</b></span><span><b>F11 · Estilos</b></span></div><p class="visual-question"><strong>Pense:</strong> qual ação também informa ao Writer que aquele texto é um título?</p></div>
      <div class="task-box"><ol>
        <li>Salve como <code>v03.odt</code>.</li>
        <li>Aplique <strong>Título 1</strong> ao título principal e <strong>Título 2</strong> às seções. Use <strong>Corpo de texto</strong> nos parágrafos.</li>
        <li>Pressione <kbd>F11</kbd>, edite o estilo <strong>Título 2</strong> e altere uma propriedade visível, como espaçamento abaixo.</li>
        <li>Confirme que todos os subtítulos mudaram juntos.</li>
        <li>Abra o Navegador e verifique a hierarquia.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>o Navegador reconhece as seções e uma única alteração no estilo se propaga para todas elas.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A estrutura está controlada. Agora precisamos fazer o documento caber em A4 sem usar linhas vazias como ferramenta de diagramação.</p></div>`
  },
  {
    id: 'documentos-pagina', number: '04', menuTitle: 'Página, margens e cabeçalho',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Layout · página, quebras, cabeçalho e rodapé',
    title: 'A página é uma regra de saída, não um conjunto de espaços',
    objective: 'Configurar página e elementos repetidos sem alinhar conteúdo com Enter ou espaços.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 11h10 · teste de impressão</span><h2>Na prévia, o rodapé some e uma atividade fica sozinha na página seguinte.</h2><p>A minuta usava linhas vazias para empurrar conteúdo. A impressão mostra que esse “ajuste” não é estável.</p></div>
      <div class="task-box"><ol>
        <li>Salve como <code>v04.odt</code> e abra <strong>Formatar → Estilo de página</strong>.</li>
        <li>Defina <strong>A4</strong>, orientação <strong>Retrato</strong> e margens de <strong>2 cm</strong> para este projeto.</li>
        <li>Ative cabeçalho e escreva “Escola Horizonte · Feira de Projetos”. No rodapé, insira número automático da página.</li>
        <li>Remova sequências de linhas vazias usadas para mudar de página. Quando necessário, use <strong>Inserir → Quebra de página</strong>.</li>
        <li>Abra <strong>Arquivo → Visualizar impressão</strong> e confira cortes e páginas.</li>
      </ol></div>
      <div class="danger-box"><strong>Se algo não couber</strong><p>não reduza tudo automaticamente. Primeiro verifique papel, margens, quebras e conteúdo.</p></div>
      <p>Em <strong>[P-10] Documento</strong>, registre somente a configuração final de página que será reutilizada.</p>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Horários e locais ainda estão alinhados por tabulações. Uma atividade longa quebra as colunas. É hora de usar uma tabela real.</p></div>`
  },
  {
    id: 'documentos-tabelas', number: '05', menuTitle: 'Tabelas que organizam relações',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Conteúdo tabular · cabeçalho, células e leitura',
    title: 'Tabela é para relacionar dados, não para desenhar a página',
    objective: 'Converter informações relacionadas em tabela simples, legível e verificável.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 13h30 · programação revisada</span><h2>Uma atividade longa desloca todos os horários porque as “colunas” eram espaços.</h2><p>Cada linha precisa manter horário, atividade e local juntos, mesmo quando o texto cresce.</p></div>
      <div class="task-box"><ol>
        <li>Salve como <code>v05.odt</code>. Preserve temporariamente uma cópia do bloco original abaixo da área de trabalho.</li>
        <li>Use <strong>Tabela → Inserir tabela</strong> e crie 3 colunas: <strong>Horário</strong>, <strong>Atividade</strong> e <strong>Local</strong>.</li>
        <li>Transfira um registro por linha. Não use células mescladas para esconder relações.</li>
        <li>Ajuste larguras e permita que textos longos quebrem dentro da célula.</li>
        <li>Compare linha por linha com a fonte e só depois remova o bloco temporário.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>cada atividade continua associada ao horário e local corretos quando a janela muda de largura e na visualização de impressão.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>A programação está estável. O mapa da entrada só deve entrar se realmente ajudar o visitante.</p></div>`
  },
  {
    id: 'documentos-imagens', number: '06', menuTitle: 'Imagens, legenda e função',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Mídia · inserção, ancoragem, legenda e alternativa',
    title: 'A imagem precisa responder a uma pergunta',
    objective: 'Inserir imagem com função comunicacional, origem identificada, legenda e alternativa textual.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 14h20 · rota de entrada</span><h2>Algumas famílias chegaram pelo portão errado no último evento.</h2><p>Lia propõe um mapa simples com entrada, recepção e blocos. Agora a imagem resolve uma pergunta real: “por onde eu entro e para onde vou?”.</p></div>
      <section class="decision-box"><h3>Qual visual ajuda de verdade?</h3><div class="choice-list" data-choice data-answer="a" data-explanation="O mapa apoia uma ação do visitante. Uma imagem decorativa não resolve a necessidade."><label><input type="radio" name="d206" value="a"> mapa autorizado com portão, recepção e blocos;</label><label><input type="radio" name="d206" value="b"> foto genérica de estudantes;</label><label><input type="radio" name="d206" value="c"> textura colorida atrás da programação.</label><button class="action-button" type="button" data-check-choice>Conferir escolha</button><div class="choice-result" aria-live="polite"></div></div></section>

      <div class="task-box"><ol>
        <li>Baixe o <a href="../downloads/informatica-produtividade/modulo-02/mapa-entrada-feira.svg" download>mapa didático autorizado</a>.</li>
        <li>Salve como <code>v06.odt</code> e insira a imagem após “Orientações de entrada”.</li>
        <li>Defina a ancoragem <strong>Como caractere</strong>.</li>
        <li>Adicione a legenda “Figura 1 — Entrada e espaços principais da Feira”.</li>
        <li>Preencha o texto alternativo: “Mapa com entrada pela Rua das Flores, recepção no pátio e acesso aos blocos A e B”.</li>
        <li>Redimensione pelas alças de canto e confira a impressão.</li>
      </ol></div>
      <p>Em <strong>[P-10] Documento</strong>, anote apenas a origem do mapa e sua função.</p>
      <div class="evidence-box"><strong>Teste</strong><p>localize o portão e o bloco B pelo mapa; depois leia o texto alternativo sem olhar a imagem. Os dois devem orientar sem inventar detalhes.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O mapa tem função e origem. Agora precisamos garantir que horário, endereço e outras afirmações possam ser conferidos na fonte certa.</p></div>`
  },
  {
    id: 'documentos-fontes', number: '07', menuTitle: 'Referências e fontes',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Rastreabilidade · origem, data e uso',
    title: 'Toda afirmação importante precisa voltar à sua origem',
    objective: 'Registrar fontes da informação suficientes para conferência e atualização do documento.',
    content: `
      <div class="story-opening"><span class="eyebrow">Terça-feira · 15h05 · confirmação de conteúdo</span><h2>Horário, mapa e informação financeira vieram de pessoas e arquivos diferentes.</h2><p>Quando surgir uma divergência, “alguém mandou” não é suficiente. A equipe precisa conseguir voltar à origem correta.</p></div>
      <div class="table-wrap"><table><thead><tr><th>Informação</th><th>Fonte adequada</th><th>O que guardar</th></tr></thead><tbody>
        <tr><td>horário de abertura</td><td>decisão registrada de Paulo</td><td>responsável, data e registro</td></tr>
        <tr><td>valor/patrocínio</td><td>planilha conferida por Renato</td><td>arquivo, versão e linha/célula</td></tr>
        <tr><td>mapa</td><td>arquivo autorizado por Lia</td><td>origem e data</td></tr>
      </tbody></table></div>
      <div class="task-box"><ol>
        <li>Salve como <code>v07.odt</code>.</li>
        <li>Crie ao fim do documento a seção “Fontes e validação” com estilo <strong>Título 2</strong>.</li>
        <li>Registre somente as referências apropriadas ao público.</li>
        <li>Em <strong>[P-10] Documento</strong>, guarde os detalhes internos necessários para voltar à origem.</li>
        <li>Escolha uma afirmação do documento e percorra o caminho até a fonte exata.</li>
      </ol></div>
      <div class="danger-box"><strong>Rastreabilidade não é exposição</strong><p>não publique telefone privado, conversa inteira ou link interno apenas para “provar” uma fonte.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O conteúdo já pode ser conferido. Agora Paulo precisa sugerir mudanças sem sobrescrever silenciosamente o trabalho de Marina.</p></div>`
  },
  {
    id: 'documentos-revisao', number: '08', menuTitle: 'Revisão, comentários e alterações',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Coautoria · comentários, alterações e decisão',
    title: 'Revisar não é sobrescrever silenciosamente',
    objective: 'Usar comentários e controle de alterações para discutir e decidir mudanças com rastreabilidade.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 8h15 · revisão em COORD-02</span><h2>Paulo quer trocar uma palavra, mas ainda não aprova um horário incerto.</h2><p>A equipe precisa distinguir sugestão, pergunta e alteração aceita.</p></div>
      <div class="task-box"><ol>
        <li>Salve <code>v07</code> como <code>..._para-revisao_v08.odt</code> em <code>20_Para_revisao</code>.</li>
        <li>Ative <strong>Editar → Registrar alterações → Registrar</strong>.</li>
        <li>Substitua uma palavra como teste e adicione uma anotação a um horário que ainda depende de evidência.</li>
        <li>Abra <strong>Gerenciar alterações</strong>: aceite apenas a mudança autorizada e mantenha a pendência sem inventar resposta.</li>
        <li>Salve nova versão e, em <strong>[P-10] Documento</strong>, registre apenas a decisão relevante e sua evidência.</li>
      </ol></div>
      <div class="evidence-box"><strong>Deu certo se...</strong><p>é possível explicar o que mudou, quem propôs e o que continuou pendente.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O conteúdo pode estar correto e ainda apresentar barreiras para quem usa ampliação, teclado ou leitor de tela.</p></div>`
  },
  {
    id: 'documentos-acessibilidade', number: '09', menuTitle: 'Acessibilidade verificável',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Acesso · estrutura, idioma, contraste e alternativas',
    title: 'Acessibilidade precisa ser conferida, não presumida',
    objective: 'Verificar estrutura e barreiras antes da exportação, corrigindo sem depender apenas do verificador automático.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 10h00 · requisito de publicação</span><h2>Uma família solicita o arquivo digital para leitura ampliada.</h2><p>Letra maior não resolve sozinha ordem de leitura, títulos, texto alternativo, idioma ou contraste.</p></div>
      <div class="task-box"><ol>
        <li>Salve uma cópia <code>..._acessibilidade_v09.odt</code>.</li>
        <li>Confirme o idioma do texto em <strong>Português (Brasil)</strong>.</li>
        <li>No Navegador, verifique um único Título 1 e títulos de seção em ordem.</li>
        <li>Confira o texto alternativo da imagem e links com nomes significativos.</li>
        <li>Garanta que nenhuma informação dependa somente de cor.</li>
        <li>Use <strong>Ferramentas → Verificação de acessibilidade</strong>. Corrija alertas compreendidos.</li>
        <li>Navegue apenas com teclado e teste em zoom de 200%.</li>
      </ol></div>
      <div class="note-box"><strong>O verificador ajuda, mas não decide tudo</strong><p>ele não sabe se um título é claro nem se o texto alternativo realmente ajuda. A leitura humana continua necessária.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>O ODT está pronto para sair. Agora precisamos provar que o PDF gerado também está correto.</p></div>`
  },
  {
    id: 'documentos-pdf', number: '10', menuTitle: 'PDF, impressão e entrega',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Saída · exportação, prova e pacote controlado',
    title: 'Exportar cria outro arquivo; não prova que ele está correto',
    objective: 'Gerar, abrir, conferir e entregar PDF e impressão preservando o arquivo-fonte editável.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quarta-feira · 13h20 · prazo de publicação</span><h2>O ODT foi aprovado, mas as famílias receberão o PDF.</h2><p>Quebras, imagem, tabela e links podem se comportar de forma diferente depois da exportação. O arquivo público só está pronto depois de ser aberto e conferido.</p></div>
      <div class="task-box"><ol>
        <li>Confirme qual ODT é a versão aprovada e feche versões antigas.</li>
        <li>Use <strong>Arquivo → Exportar como → Exportar como PDF</strong>.</li>
        <li>Quando aplicável, mantenha marcadores/tópicos e use <strong>PDF/UA</strong> após resolver problemas críticos de acessibilidade.</li>
        <li>Salve em <code>30_Publicado</code> como <code>2026-09-08_programacao-feira_publicado_v01.pdf</code>.</li>
        <li>Feche o Writer e abra o PDF em um leitor separado.</li>
        <li>Confira página por página: título, tabela, mapa, legenda, links, rodapé, seleção de texto e visualização de impressão A4.</li>
        <li>Se houver erro, volte ao ODT, gere nova versão e repita o teste.</li>
      </ol></div>
      <div class="evidence-box"><strong>Registre somente a prova de saída</strong><p>em <strong>[P-10] Documento</strong>, anote ODT aprovado, PDF gerado, páginas, data, resultado da conferência e pendências. Em <strong>[P-03] Versões</strong>, identifique o ODT aprovado e o PDF derivado que passou pela conferência.</p></div>
      <div class="bridge-box"><strong>Próximo problema</strong><p>Agora você vai repetir o método em outro documento sem copiar decisões que pertenciam apenas à programação pública.</p></div>`
  },
  {
    id: 'documentos-desafio', number: '11', menuTitle: 'Desafio: guia do expositor',
    unit: 'Módulo 2 · Documentos Profissionais', technicalTitle: 'Integração · planejamento, produção, revisão e prova',
    title: 'Desafio: entregar o Guia do Expositor',
    objective: 'Produzir um novo documento profissional usando as decisões acumuladas no projeto.',
    content: `
      <div class="story-opening"><span class="eyebrow">Quinta-feira · nova solicitação da Feira</span><h2>As equipes expositoras precisam saber montagem, materiais permitidos e horário de retirada.</h2><p>O público mudou. Lia fornece orientações do laboratório, Renato acrescenta regras de compras e Paulo aprova o texto. Trocar apenas o título da programação não resolveria.</p></div>
      <h3>Missão</h3>
      <div class="task-box"><ol>
        <li>Baixe as <a href="../downloads/informatica-produtividade/modulo-02/fontes-guia-expositor.zip" download>fontes do Guia do Expositor</a>, preserve o ZIP em <code>00_Entrada</code> e extraia uma cópia em <code>10_Em_trabalho</code>.</li>
        <li>Confira os quatro itens recebidos antes de editar.</li>
        <li>No <code>CONTROLE_DA_FEIRA.txt</code>, atualize [P-00] com o novo entregável e abra um novo bloco em <strong>[P-10] Documento — Guia do Expositor</strong>.</li>
        <li>Crie o ODT de trabalho, defina estrutura antes de aparência e aplique estilos, página A4, tabela somente quando houver relação tabular e imagem apenas quando resolver uma necessidade.</li>
        <li>Registre fontes importantes, revise com alterações/comentários e faça a verificação de acessibilidade.</li>
        <li>Exporte PDF, abra separadamente e confira impressão.</li>
        <li>Coloque em <code>30_Publicado</code> somente a versão aprovada e identifique essa aprovação em <strong>[P-03] Versões</strong>.</li>
      </ol></div>
      <div class="check-card"><strong>Checklist de aceite</strong><ul data-checklist>
        <li><label><input type="checkbox"> público e finalidade estão claros;</label></li>
        <li><label><input type="checkbox"> estrutura e estilos funcionam no Navegador;</label></li>
        <li><label><input type="checkbox"> tabela/imagem têm função e fonte;</label></li>
        <li><label><input type="checkbox"> revisão e acessibilidade foram testadas;</label></li>
        <li><label><input type="checkbox"> ODT e PDF foram abertos e comparados.</label></li>
      </ul><p class="check-progress" data-check-progress></p></div>
      <div class="bridge-box"><strong>Continuidade</strong><p>O documento orienta pessoas. Agora Renato precisa responder perguntas que dependem de dados, cálculos e comparações. Isso leva à planilha.</p></div>`
  }
]);
