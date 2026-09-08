window.infraestruturaLinuxLessons = Array.isArray(window.infraestruturaLinuxLessons) ? window.infraestruturaLinuxLessons : [];

window.infraestruturaLinuxLessons.push({
  id: 'linux-plantao',
  number: '99',
  unit: 'Oficina final · Plantão do servidor',
  menuTitle: 'Plantão integrado',
  technicalTitle: 'impacto • baseline • hipótese • teste • serviço • log • rollback • restauração • passagem',
  title: 'Assuma o SRV-01 sem adivinhar a falha',
  objective: 'Investigar falhas controladas em um servidor documentado, executar somente mudanças sustentadas e autorizadas, validar funções reais e entregar o ambiente para outro técnico.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Sexta-feira · 15h50 · troca de plantão</span><h2>Ana não consegue salvar um documento e Caio relata que a homologação não abre.</h2><p>Joana entrega a VM <strong>SRV-01</strong>, S-00 a S-10 e dois relatos. O professor aplicou uma ou mais falhas no ambiente isolado, mas não informa quais. A coordenação autoriza observação, testes de cliente e mudanças previstas nos registros; não autoriza apagar dados, resetar a VM, abrir tudo no firewall ou substituir o serviço existente.</p><p><strong>Uma entrega válida pode corrigir, reverter ou interromper com evidência preservada.</strong></p></div>

    <h3>Envelope recebido</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>S-00 · necessidade</strong><span>funções, pessoas, impacto e limites</span></div><div class="artifact-card"><strong>S-01 · baseline</strong><span>Ubuntu, recursos, discos, rede e falhas iniciais</span></div><div class="artifact-card"><strong>S-02 · mudanças</strong><span>APT, horários, validações e retorno</span></div><div class="artifact-card"><strong>S-03 · identidades</strong><span>Joana, Ana, Caio, grupos e testes</span></div><div class="artifact-card"><strong>S-04 · armazenamento</strong><span>UUID, /srv/escola, espaço e permissões</span></div><div class="artifact-card"><strong>S-05 · rede</strong><span>.20/26, rota, DNS e nome didático</span></div><div class="artifact-card"><strong>S-06 · SSH</strong><span>origem, fingerprint, chave, log e console</span></div><div class="artifact-card"><strong>S-07 · serviço/log</strong><span>formato de investigação e incidente 051</span></div><div class="artifact-card"><strong>S-08 · Web</strong><span>Nginx local, arquivos, logs e TLS pendente</span></div><div class="artifact-card"><strong>S-09 · Samba/UFW</strong><span>fluxos, testes permitidos/negados e rollback</span></div><div class="artifact-card"><strong>S-10 · continuidade</strong><span>backup, restauração, espaço e monitoramento</span></div></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Falha controlada · não revelada à equipe</span><h3>O professor escolhe uma ou duas condições</h3><p>Os rótulos abaixo ficam com o professor. O aluno recebe apenas sintoma, impacto e os registros.</p></div><div class="visual-body"><div class="scenario-grid"><article><strong>F-1 · montagem</strong><p>O volume de dados não está no ponto esperado após boot.</p></article><article><strong>F-2 · permissão</strong><p>Grupo, proprietário ou modo diverge de S-03/S-04.</p></article><article><strong>F-3 · serviço</strong><p>Nginx, Samba ou SSH está inativo/falhou.</p></article><article><strong>F-4 · configuração</strong><p>Netplan, Nginx, Samba ou SSH contém uma divergência validável.</p></article><article><strong>F-5 · firewall</strong><p>Uma origem necessária ou indevida produz resultado diferente de S-09.</p></article><article><strong>F-6 · capacidade</strong><p>Filesystem cheio ou crescimento não explicado afeta uma função.</p></article><article><strong>F-7 · recuperação</strong><p>O arquivo de backup existe, mas a amostra esperada não restaura.</p></article></div><p class="visual-question"><strong>Não sorteie comandos:</strong> peça a evidência que melhor separa suas hipóteses e registre por que ela vem agora.</p></div></div>

    <h3>Relatos ativos — causa ainda desconhecida</h3>
    <div class="two-col"><div class="note-box"><strong>Chamado 061 · Ana · 15h43</strong><p>SEC-02 abre documentos antigos no compartilhamento, mas um arquivo novo não é salvo. Impacto: fechamento diário. Conta e mensagem exata precisam ser confirmadas.</p></div><div class="note-box"><strong>Chamado 062 · Caio · 15h47</strong><p>LAB-06 resolve <code>intranet.escolahorizonte.example</code>, mas a página de homologação não abre. Outra origem ainda não foi testada.</p></div></div>

    <h3>Sequência obrigatória da investigação</h3>
    <div class="table-wrap"><table><thead><tr><th>Etapa</th><th>Pergunta</th><th>Evidência mínima</th></tr></thead><tbody><tr><td>1. Impacto</td><td>quem, qual função, quando e em que condição?</td><td>relato reescrito sem causa antecipada</td></tr><tr><td>2. Responsabilidade</td><td>quem autoriza e quem responde pelo dado/serviço?</td><td>S-00/S-03 e limite da janela</td></tr><tr><td>3. Baseline</td><td>qual estado deveria existir?</td><td>S-01 a S-10 citados, não “memória” da equipe</td></tr><tr><td>4. Hipóteses</td><td>quais estados explicam o sintoma?</td><td>principal e alternativa com indícios</td></tr><tr><td>5. Teste</td><td>que resultado separa as hipóteses?</td><td>previsão escrita antes do comando</td></tr><tr><td>6. Mudança</td><td>há sustentação e autorização?</td><td>alvo, risco, retorno e critério de parada</td></tr><tr><td>7. Validação</td><td>a função real voltou na condição comparável?</td><td>antes/depois + teste relacionado</td></tr><tr><td>8. Passagem</td><td>outra pessoa consegue continuar?</td><td>registros atualizados, limites e responsável</td></tr></tbody></table></div>

    <div class="checkpoint compact-check"><p class="check-progress" data-check-progress></p><ul class="checklist" data-checklist>
      <li><label><input type="checkbox"> Identificamos pessoa, função, origem, horário, mensagem e impacto.</label></li>
      <li><label><input type="checkbox"> Consultamos os S-registros relevantes e marcamos divergências.</label></li>
      <li><label><input type="checkbox"> Observamos antes de alterar e preservamos logs/saídas úteis.</label></li>
      <li><label><input type="checkbox"> Cada comando respondeu a uma pergunta explícita.</label></li>
      <li><label><input type="checkbox"> Previmos resultados para hipótese principal e alternativa.</label></li>
      <li><label><input type="checkbox"> Confirmamos ativo, autorização, risco, rollback e parada.</label></li>
      <li><label><input type="checkbox"> Validamos configuração antes de recarregar/reiniciar serviço.</label></li>
      <li><label><input type="checkbox"> Testamos a função com a identidade e origem corretas.</label></li>
      <li><label><input type="checkbox"> Restauração ocorreu em destino separado, quando aplicável.</label></li>
      <li><label><input type="checkbox"> A conclusão informa condição, duração, limite e próximo responsável.</label></li>
    </ul></div>
    <div class="danger-box"><strong>Critérios de parada</strong><p>Pare e encaminhe se o alvo não coincide com o inventário, o retorno não está disponível, a mudança afeta serviço existente/produção, há dado real sem cópia, a única administração pode ser perdida, a restauração exige sobrescrever o único estado válido ou o resultado sai do previsto com risco crescente.</p></div>

    <h3>Pacote de evidências</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>E-S1 · impacto e estado</strong><span>origem, identidade, função, horário e mensagem</span></div><div class="artifact-card"><strong>E-S2 · baseline comparado</strong><span>S-registro, esperado, observado e divergência</span></div><div class="artifact-card"><strong>E-S3 · hipótese e previsão</strong><span>o resultado que separaria as causas</span></div><div class="artifact-card"><strong>E-S4 · teste observacional</strong><span>comando/pergunta, saída relevante e limite</span></div><div class="artifact-card"><strong>E-S5 · mudança/rollback</strong><span>autorização, alvo, uma variável e retorno</span></div><div class="artifact-card"><strong>E-S6 · validação e passagem</strong><span>função real, antes/depois, pendência e responsável</span></div></div>
    <div class="note-box compact"><strong>Uma captura só entra se muda a decisão.</strong><p>Identifique a evidência no texto: “H2 ganhou força porque E-S4 mostrou...”. Saídas preparadas pelo professor devem permanecer rotuladas como representativas.</p></div>

    <h3>Modelo de relatório do plantão</h3>
    <textarea id="linux-final-report" class="report-template" aria-label="Modelo de relatório do plantão do servidor" readonly>PLANTÃO DO SERVIDOR — MÓDULO 3
Equipe e papéis:
Data / janela / autorização:
Ativo: SRV-01 — Ubuntu Server 24.04 LTS

1. CHAMADO E IMPACTO
Pessoa/função/origem:
Serviço ou dado afetado:
Sintoma, mensagem, horário e condição:
Impacto e responsável:

2. BASELINE E RISCO
S-registros consultados:
Estado esperado:
Estado observado:
Dados/credenciais a preservar:
Critério de parada e recuperação:

3. HIPÓTESES
H1 — evidência a favor/contra:
H2 — evidência a favor/contra:
Informação ainda ausente:

4. TESTE
Pergunta:
Comando/ação observacional:
Previsão para H1/H2:
Resultado e evidência (ID):
Interpretação e limite:

5. INTERVENÇÃO AUTORIZADA
Alvo e autorização:
Configuração validada por:
Uma variável alterada:
Rollback preparado/aplicado:

6. VALIDAÇÃO
Função real, identidade e origem:
Comparação antes/depois:
Teste relacionado e duração:
O que ficou provado / não provado:

7. CONTINUIDADE E PASSAGEM
S-registros atualizados:
Backup/restauração quando aplicável:
Pendências e risco residual:
Próximo responsável / ação:</textarea>
    <p><button class="action-button" type="button" data-copy-template="#linux-final-report">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <h3>Avaliação</h3>
    <div class="table-wrap"><table><thead><tr><th>Critério</th><th>Peso</th><th>Domínio demonstrado</th></tr></thead><tbody><tr><td>Raciocínio e evidência</td><td>30%</td><td>hipóteses, previsão e teste que muda a decisão</td></tr><tr><td>Segurança e rollback</td><td>20%</td><td>preserva dados/acesso, valida configuração e sabe parar</td></tr><tr><td>Operação Linux</td><td>20%</td><td>interpreta identidade, storage, rede, serviço, porta e log</td></tr><tr><td>Validação e recuperação</td><td>20%</td><td>testa função real e restaura sem sobrescrever único estado</td></tr><tr><td>Documentação/passagem</td><td>10%</td><td>atualiza artefatos e permite continuidade</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Sem retorno seguro e com risco de perda de acesso, preservar a evidência e encaminhar demonstra controle operacional."><p>A hipótese exige editar a única interface remotamente, sem console. Qual conclusão é válida?</p><label><input type="radio" name="l99a" value="a"> aplicar rápido para aproveitar a sessão</label><label><input type="radio" name="l99a" value="b"> não alterar; registrar evidências e solicitar janela com recuperação</label><label><input type="radio" name="l99a" value="c"> resetar toda a rede</label></div><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="O resultado sustenta o funcionamento no período/condição testados; recorrência e outros usuários ainda limitam a conclusão."><p>Ana salvou três arquivos após a correção. Como registrar?</p><label><input type="radio" name="l99b" value="a"> Samba nunca mais falhará</label><label><input type="radio" name="l99b" value="b"> servidor totalmente saudável</label><label><input type="radio" name="l99b" value="c"> escrita funcionou para Ana em três testes; acompanhar espaço e outras identidades</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>

    <div class="essence"><strong>Essência do Módulo 3</strong><p>Administrar servidor é conectar <strong>necessidade, identidade, estado, serviço, rede, evidência, mudança, validação, recuperação e passagem</strong>. Comando sem pergunta é ruído; “funcionou” sem limite não é relatório.</p></div>
    <div class="bridge-box"><strong>Limite desta etapa</strong><p>O Módulo 3 termina aqui. A VM foi usada apenas como laboratório seguro. Não foram iniciados Módulo 4, containers, nuvem, orquestração ou o Laboratório Integrador geral da área.</p></div>
  `
});
