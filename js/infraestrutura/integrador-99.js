window.infraestruturaIntegratorLessons = Array.isArray(window.infraestruturaIntegratorLessons) ? window.infraestruturaIntegratorLessons : [];

window.infraestruturaIntegratorLessons.push({
  id: 'integrador-final',
  number: '99',
  unit: 'Fechamento da área · Projeto de plantão',
  menuTitle: 'Feira de Projetos',
  technicalTitle: 'ativo • rede • servidor • VM • container • serviço • evidência • recuperação • passagem',
  title: 'Coloque a Feira de Projetos em operação — e entregue o plantão',
  objective: 'Integrar os quatro módulos em uma missão realista: preparar ou recuperar um pequeno serviço, provar segurança e continuidade e transferir a operação para outra equipe.',
  content: `
    <div class="hero-box story-opening"><span class="eyebrow">Sábado · 6h50 · Escola Horizonte</span><h2>A feira abre às 9h. Credenciamento, intranet e arquivos precisam funcionar, e o Portal de Eventos ainda não foi aceito.</h2><p>Ana coordena a recepção em <strong>SEC-02</strong>; Caio prepara <strong>LAB-06</strong> e os projetos; Joana assume o plantão técnico. O ambiente inclui rede documentada, <strong>SRV-01</strong>, APP-LAB-01/VPS-LAB-01 e registros dos módulos anteriores. Há dados fictícios de teste e documentação parcial. O professor aplicará uma ou mais falhas sem revelar a causa.</p><p><strong>A missão não é manter todas as luzes verdes.</strong> É proteger pessoas e dados, sustentar decisões com evidência, recuperar o que for autorizado e entregar um estado compreensível à equipe das 12h.</p></div>

    <div class="danger-box"><strong>Autoridade e limites do plantão</strong><p>Não há produção pública, cartão, domínio real ou dados pessoais nesta prática. Não resete equipamentos, não ligue réplicas com IP duplicado à rede real, não apague volumes, não ignore TLS, não abra portas amplamente e não altere SRV-01 sem vínculo, cópia e autorização. Parar e escalar pode ser a decisão correta.</p></div>

    <h3>Documentação recebida — confira, não confie cegamente</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>M1 · estação e sistema</strong><span>chamado, inventário, baseline, acesso, logs, manutenção e recuperação</span></div><div class="artifact-card"><strong>R-00–R-09 · rede</strong><span>topologia, portas, endereços, DNS, serviços, segmentação e Wi-Fi</span></div><div class="artifact-card"><strong>S-00–S-10 · servidor</strong><span>identidades, storage, SSH, systemd, Nginx, Samba, UFW e backup</span></div><div class="artifact-card"><strong>A-00–A-10 · arquitetura</strong><span>requisitos, VM, Docker, Compose, persistência, exposição e decisão</span></div></div>

    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Diagrama didático · mapa de investigação, não gabarito</span><h3>Uma função cruza várias fronteiras</h3></div><div class="visual-body"><div class="diagnostic-flow"><div><span>1</span><strong>Pessoa + estação</strong><small>Ana em SEC-02<br>Caio em LAB-06</small></div><div><span>2</span><strong>Rede</strong><small>porta/VLAN/IP/DNS</small></div><div><span>3</span><strong>Host + VM</strong><small>LAB-06 → APP-LAB-01</small></div><div><span>4</span><strong>Serviço + dado</strong><small>Compose, volume, log e função</small></div></div><p class="visual-question">Se o navegador mostra “conexão recusada”, em qual fronteira você observaria primeiro com as evidências já disponíveis? O que mudaria se apenas SEC-02 falhasse?</p></div></div>

    <h3>Estado esperado da feira</h3>
    <div class="table-wrap"><table><thead><tr><th>Função</th><th>Origem/identidade</th><th>Destino</th><th>Critério observável</th></tr></thead><tbody><tr><td>Credenciamento</td><td>Ana em SEC-02</td><td>Portal via caminho autorizado</td><td>consulta e registro fictício; horário/log correlacionáveis</td></tr><tr><td>Projetos</td><td>Caio em LAB-06</td><td>intranet</td><td>nome resolve e página correta responde</td></tr><tr><td>Arquivo da secretaria</td><td>Ana/grupo autorizado</td><td>Samba em SRV-01</td><td>leitura/escrita permitida; visitante negado</td></tr><tr><td>Administração</td><td>Joana em ADM-01</td><td>SRV-01 e VM do portal</td><td>SSH autenticado, mínimo privilégio e logs</td></tr><tr><td>Visitantes</td><td>Wi-Fi visitante</td><td>somente fluxo aprovado</td><td>ativos internos continuam negados</td></tr></tbody></table></div>

    <h3>Missão em 20 movimentos</h3>
    <div class="task-box"><strong>Fase 1 · compreender e decidir</strong><ol><li><strong>Identifique o impacto:</strong> pessoa, função, ativo, origem, horário, condição e prioridade.</li><li><strong>Consulte registros:</strong> selecione evidências dos quatro módulos; marque divergências e lacunas.</li><li><strong>Levante requisitos:</strong> dados, público, janela, disponibilidade, exposição, recuperação e responsáveis.</li><li><strong>Escolha a arquitetura:</strong> preserve SRV-01 e compare a opção recebida com pelo menos uma alternativa.</li><li><strong>Justifique:</strong> cite requisitos, medições, risco, capacidade e competência operacional.</li></ol></div>
    <div class="task-box"><strong>Fase 2 · preparar e implantar</strong><ol start="6"><li><strong>Prepare o ambiente:</strong> confirme hardware/VM, snapshot auxiliar, espaço e retorno.</li><li><strong>Configure sistema e rede:</strong> hostname, horário, disco, endereço, rota e DNS no laboratório isolado.</li><li><strong>Implante o serviço:</strong> revise versões, origem, Compose e digests antes de iniciar.</li><li><strong>Configure acesso:</strong> identidades individuais, grupos, secrets locais e menor privilégio.</li><li><strong>Valide portas/exposição:</strong> escuta, interface, firewall/NAT, acesso permitido e negado.</li></ol></div>
    <div class="task-box"><strong>Fase 3 · provar operação e recuperação</strong><ol start="11"><li><strong>Teste com a pessoa do cenário:</strong> execute a função real em SEC-02 ou LAB-06.</li><li><strong>Valide logs:</strong> correlacione origem, identidade, horário, serviço, evento e mensagem.</li><li><strong>Execute backup:</strong> configuração e dados fictícios para destino separado e identificado.</li><li><strong>Restaure uma amostra:</strong> use outro caminho/instância e compare conteúdo/hash quando pertinente.</li><li><strong>Receba a falha:</strong> preserve estado e reformule o sintoma sem aceitar a causa sugerida.</li></ol></div>
    <div class="task-box"><strong>Fase 4 · investigar, validar e passar</strong><ol start="16"><li><strong>Investigue:</strong> formule H1/H2, previsão e teste de baixo risco que as separe.</li><li><strong>Corrija ou interrompa:</strong> mude uma variável autorizada ou escale com justificativa.</li><li><strong>Valide novamente:</strong> repita função, teste relacionado, persistência, log e negação.</li><li><strong>Atualize documentação:</strong> inventário, topologia, baseline, decisão e recuperação.</li><li><strong>Entregue à outra equipe:</strong> faça passagem oral e escrita; a equipe receptora deve repetir um teste sem ajuda.</li></ol></div>

    <div class="mbb-pause-question"><strong>Antes de cada comando, complete a frase:</strong><p>“Estou perguntando ______. Se H1 estiver correta, espero ______; se H2 estiver correta, espero ______. O risco é ______ e paro quando ______.”</p></div>

    <h3>Falhas controladas — área do professor</h3>
    <div class="visual-lab"><div class="visual-lab-header"><span class="visual-kicker">Não revelar a seleção à equipe</span><h3>Uma falha pode aparecer longe da camada que o usuário cita</h3></div><div class="visual-body"><div class="scenario-grid"><article><strong>F-I1 · estação</strong><p>perfil, recurso ou permissão local diverge.</p></article><article><strong>F-I2 · rede/DNS</strong><p>endereço, gateway, resolvedor, VLAN ou porta física diverge.</p></article><article><strong>F-I3 · identidade</strong><p>grupo ou permissão não corresponde à matriz.</p></article><article><strong>F-I4 · armazenamento</strong><p>mount, espaço ou dono impede a função.</p></article><article><strong>F-I5 · systemd/serviço</strong><p>unidade parada ou configuração inválida.</p></article><article><strong>F-I6 · firewall/porta</strong><p>alcance permitido/negado diverge do desenho.</p></article><article><strong>F-I7 · container/Compose</strong><p>estado, rede, porta, imagem ou configuração mudou.</p></article><article><strong>F-I8 · volume</strong><p>persistência esperada não está conectada.</p></article><article><strong>F-I9 · certificado</strong><p>nome, validade ou confiança interna diverge.</p></article><article><strong>F-I10 · capacidade</strong><p>disco/RAM afeta serviço e produz sintomas derivados.</p></article></div><p class="visual-question">O professor fornece apenas relato, impacto e condição inicial. A etiqueta acima entra no gabarito, não no chamado.</p></div></div>

    <div class="danger-box"><strong>Critérios de parada do Integrador</strong><p>Pare e encaminhe se houver risco físico, alvo não identificado, dado real sem proteção, ausência de retorno, perda possível do único acesso, necessidade de mudar produção/rede real, credencial exposta, Compose privilegiado, volume único ameaçado, certificado público para <code>.example</code>, custo/conta não autorizados ou resultado inesperado com impacto crescente.</p></div>

    <h3>Pacote de evidências da área</h3>
    <div class="artifact-grid"><div class="artifact-card"><strong>EI-01 · chamado</strong><span>impacto, pessoa, função, origem e linha do tempo</span></div><div class="artifact-card"><strong>EI-02 · estado</strong><span>inventário/topologia/baseline comparados</span></div><div class="artifact-card"><strong>EI-03 · arquitetura</strong><span>requisito, alternativas, decisão e limite</span></div><div class="artifact-card"><strong>EI-04 · implantação</strong><span>sistema, rede, acesso, Compose e digests</span></div><div class="artifact-card"><strong>EI-05 · segurança</strong><span>riscos, autorização, exposição e negações</span></div><div class="artifact-card"><strong>EI-06 · continuidade</strong><span>backup, restauração e retorno provado</span></div><div class="artifact-card"><strong>EI-07 · investigação</strong><span>H1/H2, previsão, teste e interpretação</span></div><div class="artifact-card"><strong>EI-08 · antes/depois</strong><span>mesma identidade, origem, função e condição</span></div><div class="artifact-card"><strong>EI-09 · passagem</strong><span>estado final, riscos, pendências e responsável</span></div></div>
    <div class="note-box compact"><strong>Evidência útil muda ou sustenta uma decisão.</strong><p>Uma captura sem ativo, horário, pergunta e interpretação vira decoração. Oculte senhas, chaves, tokens, dados pessoais e identificadores desnecessários.</p></div>

    <h3>Modelo de relatório e passagem</h3>
    <textarea id="integrator-final-report" class="report-template" aria-label="Modelo de relatório integrador da área" readonly>LABORATÓRIO INTEGRADOR — INFRAESTRUTURA E SISTEMAS
Equipe / papéis / data / turno:
Ativos e ambiente isolado:
Autorização, janela e critérios de parada:

1. CHAMADO E IMPACTO — EI-01
Pessoa, identidade e função:
Origem → destino → serviço:
Sintoma, mensagem, horário e condição:
Impacto e prioridade:

2. REGISTROS E ESTADO — EI-02
Artefatos M1 / R / S / A consultados:
Inventário/topologia/baseline esperado:
Estado observado e divergências:
Informações ainda ausentes:

3. REQUISITOS E ARQUITETURA — EI-03
Dados, público, disponibilidade e recuperação:
Alternativas comparadas:
Decisão e evidências:
Limites e aprovador:

4. PREPARAÇÃO E IMPLANTAÇÃO — EI-04/EI-05
Hardware/VM/SO/storage/rede:
Identidades e mínimo privilégio:
Serviços/imagens/digests/Compose:
Portas, interfaces, firewall e exposição:
Segredos protegidos (sem valores):

5. OPERAÇÃO E CONTINUIDADE — EI-06
Função testada / origem / identidade:
Logs correlacionados:
Backup / destino / horário:
Restauração de amostra / comparação:
Limites do teste:

6. INCIDENTE CONTROLADO — EI-07
Sintoma reformulado:
H1 / H2 e indícios:
Pergunta e previsão:
Teste / saída relevante / interpretação:
Conclusão limitada:

7. INTERVENÇÃO E VALIDAÇÃO — EI-08
Alvo, autorização e risco:
Estado anterior / variável alterada:
Rollback preparado/aplicado:
Antes/depois comparável:
Função, persistência, log e negação:

8. PASSAGEM — EI-09
Documentos atualizados:
Estado final e risco residual:
Pendências, responsável e prazo:
Teste repetido pela equipe receptora:
Aceite / ressalvas:</textarea>
    <p><button class="action-button" type="button" data-copy-template="#integrator-final-report">Copiar modelo</button><span class="copy-status" data-copy-status aria-live="polite"></span></p>

    <h3>Avaliação — resultado sem método não basta</h3>
    <div class="table-wrap"><table><thead><tr><th>Critério</th><th>Peso</th><th>Indicador</th></tr></thead><tbody><tr><td>Diagnóstico e raciocínio</td><td>25%</td><td>usa baseline, hipóteses, previsão e teste discriminante</td></tr><tr><td>Segurança e controle</td><td>20%</td><td>respeita autoridade, privilégio, dados, exposição e parada</td></tr><tr><td>Integração técnica</td><td>20%</td><td>conecta estação, rede, servidor, VM, contêiner e serviço</td></tr><tr><td>Continuidade e recuperação</td><td>15%</td><td>prova backup/restauração e rollback compatível</td></tr><tr><td>Validação e limites</td><td>10%</td><td>repete função e declara o que não foi provado</td></tr><tr><td>Documentação e passagem</td><td>10%</td><td>outra equipe repete teste e assume pendências</td></tr></tbody></table></div>

    <section class="checkpoint compact-check" data-quiz-group><div class="quiz-item" data-quiz-question data-answer="b" data-explanation="A divergência restrita a uma origem fortalece hipótese local/de caminho, mas ainda requer comparar configuração e teste de outra origem."><p>O portal abre em LAB-06 e falha apenas em SEC-02. Qual próximo passo é mais informativo?</p><label><input type="radio" name="i99a" value="a"> recriar todos os contêineres</label><label><input type="radio" name="i99a" value="b"> comparar configuração/caminho de SEC-02 com uma origem funcional antes de mudar o servidor</label><label><input type="radio" name="i99a" value="c"> abrir a porta em todas as interfaces</label></div><div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Sem recuperação comprovada, uma mudança destrutiva não é autorizável; preservar evidência e escalar demonstra domínio."><p>A correção provável exige migrar o único volume, mas a restauração de amostra falhou. O que fazer?</p><label><input type="radio" name="i99b" value="a"> tentar porque a feira está próxima</label><label><input type="radio" name="i99b" value="b"> usar snapshot como garantia absoluta</label><label><input type="radio" name="i99b" value="c"> parar, preservar o estado e encaminhar com evidência e plano de recuperação</label></div><div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A validação sustenta somente as identidades, origens, funções e duração observadas; outros cenários permanecem em aberto."><p>Os testes funcionais passaram por 20 minutos. Qual conclusão é defensável?</p><label><input type="radio" name="i99c" value="a"> funções descritas operaram nas condições testadas; manter acompanhamento e riscos registrados</label><label><input type="radio" name="i99c" value="b"> a infraestrutura não falhará na feira</label><label><input type="radio" name="i99c" value="c"> todos os usuários estão autorizados</label></div><button class="action-button primary" type="button" data-check-quiz>Conferir julgamento</button><div class="quiz-result" data-quiz-result aria-live="polite"></div></section>

    <div class="essence"><strong>Infraestrutura e Sistemas concluída</strong><p>Competência não é decorar telas ou comandos. É conectar <strong>pessoa, função, ativo, identidade, rede, serviço, dado, evidência, risco, recuperação e passagem</strong> — e saber quando não alterar.</p></div>
    <div class="bridge-box"><strong>Encerramento</strong><p>Este laboratório fecha a área. Ele não inicia outro módulo nem transforma o cenário didático em produção. O produto final é um ambiente explicado e um plantão que outra equipe consegue assumir.</p></div>
  `
});
