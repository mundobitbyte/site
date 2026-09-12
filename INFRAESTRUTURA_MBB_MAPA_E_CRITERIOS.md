# Infraestrutura e Sistemas — Mapa e critérios MbB

## Status deste documento
Este arquivo é a **fonte de verdade do planejamento** da área **Infraestrutura e Sistemas** do Mundo bit Byte.

Antes de qualquer implementação:
1. verificar o estado fresco da `main`;
2. ler este arquivo;
3. inspecionar os módulos já aprovados que forem realmente relevantes;
4. preservar identidade visual, navegação, IDs/classes/JS e padrões consolidados;
5. não alterar áreas não relacionadas;
6. trabalhar por fases e parar no limite explicitamente solicitado.

A execução deve sempre aplicar **Modo MbB**, com revisão e autocrítica circular/espiral em três perspectivas:
- especialista técnico/desenvolvedor;
- especialista em infraestrutura/sistemas;
- aluno iniciante.

Regra de avanço: quando uma fase estiver robusta, coerente, segura e testada, considerá-la **bom o suficiente para avançar**, evitando perfeccionismo que consome trabalho sem ganho pedagógico real.

---

# 1. Objetivo da área

Transformar a base conceitual já construída em **Fundamentos da Informática** em competência operacional real.

**Fundamentos da Informática = compreender como funciona.**

**Infraestrutura e Sistemas = instalar, configurar, administrar, testar, diagnosticar, documentar, manter e recuperar.**

A nova área NÃO deve reensinar longamente conceitos que Fundamentos já apresenta bem, como:
- sistema operacional, kernel, processos, arquivos e linha de comando;
- IP, DHCP, gateway, DNS, TCP/UDP, portas e NAT;
- virtualização, VM, nuvem e containers em nível conceitual;
- ativos, risco, autenticação, autorização, firewall, logs e backup;
- método de diagnóstico baseado em sintoma, hipótese, evidência, teste e isolamento.

Quando um conceito precisar reaparecer, fazer apenas a retomada mínima necessária para **resolver um problema prático novo**.

---

# 2. Filosofia pedagógica

Sequência MbB principal:

**Entender → Experimentar → Analisar/Diagnosticar → Aplicar**

Para infraestrutura, isso normalmente assume a forma:

**situação real → necessidade → hipótese → configuração/intervenção → teste → evidência → diagnóstico → correção/revisão → documentação → aplicação.**

## Contextualização obrigatória

A contextualização não pode ser uma historinha de duas frases usada apenas como abertura.

Ela deve:
- representar uma situação plausível do cotidiano escolar, profissional, doméstico ou de pequena organização;
- criar uma necessidade técnica concreta;
- permanecer ativa durante a aula;
- gerar decisões e consequências;
- produzir testes, erros, comparação de alternativas e revisão;
- reaparecer no fechamento/aplicação.

Evitar contextualizações rasas como apenas “você quer mandar um PDF para o computador ao lado”.

Preferir situações desenvolvidas, por exemplo:

> Uma pequena escola passou a compartilhar arquivos entre secretaria, coordenação e laboratório. Alguns computadores acessam a pasta, outros não; arquivos importantes estão sendo sobrescritos e ninguém sabe quem deveria ter permissão para quê.

A situação deve produzir naturalmente os conceitos e ações da aula.

## Texto amigável

O conteúdo publicado fala com o aluno.
- linguagem clara e profissional;
- frases e parágrafos de tamanho controlado;
- explicar siglas antes de usá-las livremente;
- não despejar comandos sem propósito;
- não criar “paredões” de teoria;
- não infantilizar;
- não expor bastidores editoriais;
- explicar o porquê antes ou junto do como.

---

# 3. Aproveitar o melhor do site sem copiar módulos

Antes de construir uma nova parte, observar os módulos aprovados do Mundo bit Byte para reutilizar **princípios de excelência**, não layouts ou textos mecanicamente.

Devem ser preservados/adaptados quando úteis:
- contextualização real e persistente;
- progressão gradual;
- laboratórios e experiências;
- perguntas com feedback claro;
- diagramas e imagens didáticas cirúrgicas;
- comparação entre tentativa inicial e revisão;
- checkpoints;
- desafio de transferência;
- segurança explícita;
- diagnóstico baseado em evidência;
- responsividade e navegação simples;
- identidade visual MbB;
- Aula/Capítulo 99 integrador quando fizer sentido.

Cada módulo pode ter identidade própria. Não forçar todos a parecerem iguais.

---

# 4. Regra visual

**Visual existe para ensinar. Nunca para preencher espaço.**

## Fotografias
Usar quando a aparência física, o ambiente real, a identificação de equipamento/componente ou o contexto profissional forem relevantes.

Exemplos possíveis:
- placa-mãe, RAM, SSD, conectores, fonte, cooler;
- rack, switch, patch panel, cabo e organização física;
- servidor físico ou datacenter;
- telas reais de instalação/configuração quando pedagogicamente necessárias.

## Diagramas/figuras próprias
Preferir quando relações e funcionamento forem mais importantes que aparência:
- fluxo de boot;
- topologia;
- endereçamento e sub-redes;
- cliente → switch → gateway → servidor;
- serviço/porta/firewall;
- VM × container;
- processo de diagnóstico;
- backup/restauração;
- arquitetura local × nuvem.

## Critérios
- toda imagem deve responder a uma pergunta ou facilitar uma ação;
- imagens precisam ser corretas, legíveis, responsivas e com alt text útil;
- fotografia externa deve ter fonte/licença adequadas;
- screenshots devem refletir ferramenta/versão escolhida ou avisar quando a aparência puder variar;
- não usar foto genérica de “pessoa usando notebook”;
- não transformar fotografia em tutorial quando um diagrama seria mais seguro ou preciso.

Regra-resumo: **foto mostra o que existe; diagrama explica como se relaciona ou funciona.**

---

# 5. Eixos transversais obrigatórios

Estes temas NÃO ficam presos a um único módulo.

## Segurança
Aparece sempre que houver:
- energia/abertura de equipamento;
- contas e privilégios;
- permissões;
- acesso remoto;
- exposição de portas/serviços;
- firewall;
- atualização;
- credenciais/chaves;
- dados e backup;
- nuvem e containers.

## Diagnóstico
Método transversal:

**Sintoma → contexto → hipótese → teste seguro → evidência → isolamento → correção → validação → documentação.**

Nunca incentivar “tentar coisas até funcionar”.

## Documentação
O aluno deve aprender a registrar:
- estado inicial;
- alteração realizada;
- motivo;
- evidência antes/depois;
- resultado;
- como desfazer;
- conclusão limitada ao que os testes permitem.

### Registros operacionais — regra de simplicidade
A documentação deve apoiar a operação, não criar uma segunda disciplina de códigos.

Padrão consolidado da área:
- **Registro de Suporte** acompanha chamado, estado, evidência, mudança e continuidade da estação/caso;
- **Registro da Rede** acumula mapa, endereçamento, serviços, segmentação, Wi-Fi, testes e decisões;
- **Registro do Servidor** acumula necessidade, baseline, identidades, armazenamento, rede, acesso remoto, serviços, logs, segurança e continuidade;
- **Registro da Evolução** acumula requisitos, VM, capacidade, containers, persistência, Compose, atualização, hospedagem, exposição e decisão arquitetural.

Códigos locais podem aparecer quando fazem parte de um ativo real, chamado, OS, porta, padrão técnico ou comparação imediata. **Não criar taxonomias cumulativas artificiais que o aluno precise decorar para saber onde registrar uma evidência.** O nome do registro ou da seção deve dizer o que ele significa.

## Acessibilidade/inclusão
- alternativas quando uma tarefa física não puder ser executada por todos;
- instruções que não dependam exclusivamente de cor;
- teclado e mobile quando aplicável;
- não exigir hardware caro para compreender o objetivo principal.

---

# 6. Projeto contínuo da área

Usar uma **pequena organização/escola** como fio condutor, sem transformar o material em romance.

O ambiente cresce conforme surgem necessidades reais.

## Estado inicial
Uma pequena organização possui:
- alguns computadores de trabalho;
- impressora;
- roteador/acesso à Internet;
- arquivos espalhados;
- nenhum padrão claro de administração.

Problema inicial: cada máquina funciona de um jeito e ninguém consegue explicar com segurança quem administra o quê, como recuperar uma falha ou como padronizar o ambiente.

## Evolução
1. instalar, organizar e manter máquinas e sistemas;
2. conectar e diagnosticar a rede;
3. centralizar serviços em Ubuntu Server;
4. virtualizar/containerizar e avaliar nuvem;
5. aplicar segurança, backup, monitoramento e recuperação ao longo de toda a evolução.

A cada etapa, o estado da organização muda. Novos problemas devem nascer das decisões anteriores.

---

# 7. Arquitetura da área

A área terá poucas portas claras, evitando excesso de cards:

1. **Administração, Instalação e Manutenção de Sistemas**
2. **Redes na Prática**
3. **Servidores Linux e Serviços**
4. **Infraestrutura Moderna**
99. **Laboratório Integrador de Infraestrutura**

Os nomes podem receber pequeno refinamento editorial antes da publicação, mas a divisão de responsabilidades não deve ser fragmentada novamente sem motivo forte.

---

# 8. Módulo 1 — Administração, Instalação e Manutenção de Sistemas

## Propósito
Levar o aluno do reconhecimento da máquina a uma intervenção segura e documentada, incluindo instalação de SO, configuração, administração básica, manutenção preventiva e diagnóstico.

Não virar curso de reparo eletrônico de placas.

## Mapa proposto

### 00 — Diagnóstico
Conhecimentos prévios sobre hardware, boot, armazenamento, SO, usuários, arquivos, permissões, processos, backup e método de diagnóstico.

### 01 — Antes de abrir ou alterar: atendimento e diagnóstico inicial
Situação: computador de uma equipe apresenta falhas e “todo mundo já mexeu um pouco”.
- coletar sintoma/contexto;
- preservar dados;
- identificar risco;
- registrar estado inicial;
- decidir quando não intervir.

### 02 — Componentes, compatibilidade e caminho dos dados
- placa-mãe, CPU, RAM, armazenamento, GPU quando relevante, fonte e refrigeração;
- conectores/interfaces relevantes;
- compatibilidade em nível profissional iniciante;
- identificar gargalo sem “culpar a peça mais velha”.

Prática: leitura/identificação em máquina real, fotografia didática ou simulador/diagrama quando hardware não estiver disponível.

### 03 — Intervenção física segura
- desligamento e desconexão;
- eletricidade estática e boas práticas;
- manuseio de RAM/SSD/cabos/periféricos;
- organização física e ventilação;
- limites de segurança.

**Nunca orientar abertura/reparo interno de fonte de alimentação.**

### 04 — Firmware, UEFI, boot e dispositivo de instalação
- observar UEFI/firmware;
- ordem de boot;
- Secure Boot em contexto, sem simplificação falsa;
- preparar mídia de instalação com ferramenta oficial/adequada;
- reconhecer GPT/UEFI em nível necessário.

### 05 — Instalação limpa e particionamento consciente
- objetivo da instalação;
- dados que precisam ser preservados;
- particionamento e sistema de arquivos no nível prático necessário;
- instalação do SO escolhido para a estação de trabalho;
- usuário inicial;
- atualização pós-instalação.

Nunca sugerir formatar como primeira resposta a um problema.

### 06 — Drivers, atualizações e validação pós-instalação
- driver e dispositivo;
- fontes confiáveis;
- atualização do sistema;
- verificar rede, áudio, vídeo, armazenamento e dispositivos;
- baseline pós-instalação.

### 07 — Usuários, grupos e permissões na prática
- conta padrão × administrativa;
- menor privilégio;
- usuários/grupos;
- arquivos/pastas e permissões;
- compartilhamento apenas quando fizer sentido e sem antecipar o módulo de redes.

### 08 — Processos, serviços, inicialização e logs
- observar recursos;
- processos e serviços;
- inicialização;
- logs/Event Viewer ou equivalente;
- parar/iniciar serviço somente em laboratório seguro;
- interpretar evidência sem concluir além do teste.

### 09 — Manutenção preventiva, armazenamento e backup
- atualização;
- espaço e saúde geral de armazenamento em nível apropriado;
- refrigeração/limpeza segura;
- backup × sincronização;
- restauração de teste;
- checklist de manutenção.

### 10 — Diagnóstico e substituição controlada
- sintoma → hipótese → evidência;
- known-good e troca cruzada quando segura;
- memória/armazenamento/periféricos/rede em casos típicos;
- uma variável por vez;
- validar após a correção;
- documentar.

### 99 — Oficina de suporte
Receber um conjunto de casos e realizar atendimento técnico completo: coleta, hipótese, plano seguro, intervenção simulada/real, validação e relatório curto.

---

# 9. Módulo 2 — Redes na Prática

## Propósito
Transformar os conceitos de rede de Fundamentos em capacidade de planejar, configurar, testar e diagnosticar uma pequena rede.

## Mapa proposto
00. Diagnóstico de rede.
01. Ler o ambiente antes de conectar — topologia física/lógica e requisitos.
02. Ethernet, Wi-Fi, cabos, switch e organização física.
03. IPv4 e prefixos na prática — endereço, rede, host e subnetting progressivo.
04. Configuração estática e automática — DHCP, gateway e DNS.
05. Roteamento básico, NAT e caminho até outra rede.
06. TCP/UDP, portas e serviços observados no sistema.
07. Ferramentas de diagnóstico — `ipconfig`/`ip`, `ping`, `tracert`/`traceroute`, `nslookup`/`dig`, ARP/neighbor, sockets/conexões.
08. Segmentação e VLAN em nível introdutório, preferencialmente com laboratório/simulação quando não houver equipamento gerenciável.
09. Wi-Fi e redes reais — cobertura, interferência, segurança e escolhas de implantação sem promessas mágicas.
10. Troubleshooting por camadas — casos de IP, gateway, DNS, serviço e rota.
99. Projeto de pequena rede documentada e diagnosticável.

Ferramentas podem incluir simulador de rede quando isso reduzir dependência de equipamento físico. A escolha deve ser atual, acessível aos alunos e justificada antes de incorporar o tutorial.

---

# 10. Módulo 3 — Servidores Linux e Serviços

## Plataforma principal
**Ubuntu Server 24.04 LTS**, evitando amarrar o conteúdo a um número de revisão menor quando isso não for necessário.

## Propósito
Administrar um servidor Linux real/virtual e publicar serviços controlados, observáveis e recuperáveis.

## Mapa proposto
00. Diagnóstico Linux/servidor.
01. Criar a VM e instalar Ubuntu Server com propósito definido.
02. Shell, `sudo`, APT e atualização segura.
03. Usuários, grupos, permissões e menor privilégio.
04. Arquivos, armazenamento, montagem e uso de espaço.
05. Rede com Netplan e validação de conectividade.
06. SSH e administração remota segura.
07. `systemd`, serviços e logs (`journalctl`).
08. Publicar um serviço Web simples (servidor escolhido conscientemente, sem guerra Apache × Nginx).
09. Compartilhamento/serviço adicional útil e firewall UFW, sempre mostrando portas e exposição.
10. Backup, restauração, atualização, monitoramento básico e troubleshooting integrado.
99. Servidor funcional entregue com documentação, teste, falha controlada e recuperação.

O aluno não deve apenas copiar comandos. Cada comando precisa responder a uma pergunta ou alterar um estado que depois será verificado.

---

# 11. Módulo 4 — Infraestrutura Moderna

## Propósito
Entender e operar, em escala iniciante/profissional, as escolhas entre máquina física, VM, container e nuvem sem transformar ferramentas da moda em objetivo da aprendizagem.

## Mapa proposto
00. Diagnóstico de arquitetura.
01. Virtualização na prática — VM, recursos, snapshot e redes virtuais.
02. Quando uma VM resolve — e quando cria custo/complexidade.
03. Containers com Docker — imagem, container e ciclo de vida.
04. Portas, volumes, persistência e logs em containers.
05. Docker Compose e aplicação com mais de um serviço.
06. Segurança de containers e atualização de imagens/configurações.
07. Nuvem aplicada — IaaS/PaaS/SaaS retomados por decisão arquitetural, não por definição.
08. Deploy/VM/VPS ou laboratório equivalente, mantendo opção que não exija gasto financeiro obrigatório do aluno.
09. DNS, TLS, exposição, disponibilidade, logs e monitoramento em contexto real.
10. Escolha arquitetural — local × VM × container × nuvem, considerando custo, operação, risco e recuperação.
99. Migração/evolução da infraestrutura da organização com justificativa e rollback/recuperação.

Não amarrar o curso inteiro a um fornecedor de nuvem. Ferramentas atuais podem ser usadas como laboratório, mantendo os conceitos transferíveis.

---

# 12. Laboratório Integrador de Infraestrutura — 99 da área

O fechamento da área deve integrar os quatro módulos.

Missão sugerida:

A organização precisa colocar um pequeno serviço interno/externo em funcionamento e provar que consegue operá-lo.

A equipe recebe os quatro registros operacionais — **Suporte, Rede, Servidor e Evolução** — e assume um plantão com documentação parcial e uma ou mais condições controladas cuja causa não é informada.

A missão integradora deve seguir quatro fases, sem criar uma nova taxonomia documental:
1. **receber e compreender** — impacto, registros, divergências, autorização e limites;
2. **proteger e preparar** — baseline, arquitetura recebida, backup e restauração de amostra;
3. **investigar e intervir** — reproduzir a função, formular H1/H2, testar com baixo risco e alterar uma variável autorizada ou escalar;
4. **validar e passar** — repetir função e teste relacionado, atualizar somente o que mudou e entregar o plantão para outra equipe repetir uma validação sem ajuda.

O produto final é o **estado explicado e transferível**, com evidências suficientes para outra pessoa continuar o trabalho.

A avaliação deve privilegiar **raciocínio e operação segura**, não velocidade ou memorização de comandos.

---

# 13. Ferramentas — regra de escolha

Não escolher ferramentas apenas porque são populares.

Critérios:
- atuais e mantidas;
- legais/gratuitas ou claramente acessíveis ao contexto escolar;
- fáceis de instalar/usar em laboratório;
- profissionais o suficiente para transferir conhecimento;
- funcionam em hardware razoável;
- não exigem cartão/crédito financeiro do aluno quando houver alternativa;
- permitem demonstração e diagnóstico.

Candidatos que devem ser avaliados no momento da implementação:
- Windows atual para estação de trabalho quando adequado;
- Ubuntu Server 24.04 LTS;
- VirtualBox, Hyper-V ou alternativa mais apropriada ao laboratório;
- simulador de redes, caso necessário;
- Docker/Docker Compose;
- ferramentas nativas de diagnóstico Windows/Linux;
- servidor Web adequado ao laboratório.

O Work deve verificar versões/documentação oficial antes de escrever tutoriais dependentes de interface ou comandos suscetíveis a mudança.

---

# 14. Segurança operacional

Nunca publicar instruções que incentivem procedimento perigoso como prática casual.

Regras mínimas:
- preservar dados antes de intervenção destrutiva;
- desligar/desconectar equipamentos quando exigido;
- não abrir fonte de alimentação;
- evitar intervenções elétricas fora da competência do aluno;
- não expor deliberadamente serviços vulneráveis à Internet pública;
- senhas/chaves reais nunca aparecem em screenshots ou exemplos reutilizados;
- práticas de ataque ofensivo não são objetivo desta área;
- falhas controladas devem ocorrer em ambiente próprio/laboratorial;
- configuração de firewall/SSH/serviços deve conter forma de validar e, quando possível, reverter;
- não pedir que aluno execute comando destrutivo sem compreender alvo, efeito e recuperação.

---

# 15. Padrão de cada aula/capítulo

Não é obrigatório usar exatamente os mesmos blocos em toda aula, mas o percurso deve conter a maior parte dos elementos abaixo quando fizer sentido:

1. contexto real persistente;
2. problema/necessidade;
3. modelo mental mínimo;
4. preparação e segurança;
5. prática guiada;
6. previsão do que deve acontecer;
7. execução/configuração;
8. verificação do estado;
9. erro ou caso alternativo;
10. diagnóstico;
11. pergunta com feedback;
12. registro/documentação;
13. aplicação/transferência;
14. essência.

Evitar tutoriais em que a sequência seja apenas:

**copie comando → cole comando → “pronto”.**

---

# 16. Imagens, screenshots e interação

Antes de inserir qualquer visual perguntar:

**“O aluno aprende algo que ficaria mais difícil apenas com texto?”**

Se não, não inserir.

Interações podem incluir:
- montar topologia;
- escolher hipótese/teste;
- prever resultado de configuração;
- comparar logs;
- identificar componente/conector;
- simular permissões;
- ordenar sequência de boot/diagnóstico;
- escolher rota de troubleshooting;
- comparar arquitetura física/VM/container/nuvem.

Não criar interação apenas para “deixar moderno”.

---

# 17. Estratégia de uso econômico do ChatGPT Work

Objetivo: usar Work para tarefas que justificam agente/computador, reduzindo contexto repetido e retrabalho.

## Work NÃO deve gastar tempo para
- redesenhar a arquitetura desta área;
- decidir novamente a filosofia pedagógica;
- reler indiscriminadamente todo o repositório;
- alterar disciplinas/áreas não relacionadas;
- recriar Fundamentos da Informática;
- fazer pesquisa ampla sem relação direta com a fase em execução.

## Work deve
- ler este arquivo primeiro;
- fazer verificação fresca da `main`;
- inspecionar apenas arquivos/padrões necessários;
- pesquisar documentação oficial atual quando versões/ferramentas exigirem;
- implementar uma fase definida;
- navegar/testar o resultado em desktop e mobile quando possível;
- revisar erros reais encontrados;
- relatar arquivos e impacto;
- parar ao terminar a fase.

## Fases planejadas

### Work 1 — Fundação + Módulo 1
- auditar padrões necessários;
- criar a área/shell de Infraestrutura e Sistemas;
- criar navegação/cards previstos sem abrir conteúdo incompleto como se estivesse pronto;
- implementar **somente o Módulo 1 — Administração, Instalação e Manutenção de Sistemas**, incluindo 00–10 e 99 se a execução comportar com qualidade;
- testar navegação, responsividade e interações;
- não iniciar Redes na Prática.

Se a qualidade começar a cair por escopo, priorizar fundação + capítulos iniciais coerentes e registrar exatamente onde parou, em vez de gerar conteúdo raso para “terminar”.

### Revisão entre Works
A revisão crítica do resultado será feita na conversa principal, aplicando Modo MbB. Não gastar Work apenas para ele revisar longamente o próprio texto quando a revisão puder ser feita aqui.

### Work 2 — Redes + Servidores
Depois de aprovação do Módulo 1:
- Redes na Prática;
- Servidores Linux e Serviços;
- testes correspondentes.

### Work 3 — Infraestrutura Moderna + Integrador
Somente depois dos anteriores aprovados:
- Infraestrutura Moderna;
- Laboratório Integrador;
- auditoria navegacional final da área.

As fases podem ser divididas se a execução mostrar perda de qualidade. **Economizar crédito nunca justifica publicar conteúdo raso.**

---

# 18. Instrução inicial recomendada para o Work

> Trabalhe no repositório GitHub `mundobitbyte/site` em Modo MbB. Antes de qualquer alteração, faça uma verificação fresca da `main`. Leia primeiro `INFRAESTRUTURA_MBB_MAPA_E_CRITERIOS.md` e trate-o como fonte de verdade do planejamento. Não redesenhe a arquitetura e não altere áreas não relacionadas. Execute somente a fase **Work 1 — Fundação + Módulo 1** definida no documento. Preserve identidade visual, navegação, padrões aprovados e tudo que já funciona. Use contextualização real, desenvolvida e persistente; prática guiada; diagnóstico baseado em evidência; segurança e documentação. Aproveite princípios de excelência dos melhores módulos do site sem copiar mecanicamente nenhum deles. Use fotos, screenshots, diagramas e interações apenas quando tiverem função pedagógica real, com qualidade e precisão. Pesquise documentação oficial atual apenas quando ferramentas, versões ou procedimentos dependerem disso. Teste o que implementar em desktop e mobile quando possível. Se o escopo ameaçar a qualidade, pare em um checkpoint coerente em vez de preencher o restante superficialmente. Ao final, informe exatamente o que fez, arquivos alterados, testes realizados, limitações e o SHA final; não avance para Redes na Prática.

---

# 19. Critério final de excelência

A área estará correta quando um iniciante conseguir responder não apenas:

**“qual comando devo digitar?”**

mas também:

- qual problema estou tentando resolver?
- qual estado espero antes e depois?
- o que este comando/configuração muda?
- como verifico se funcionou?
- o que um resultado negativo realmente demonstra?
- qual é a próxima hipótese?
- como volto ao estado anterior?
- que risco existe?
- como documento para outra pessoa continuar?

A meta é formar **capacidade técnica transferível**, não seguidores de receitas.
