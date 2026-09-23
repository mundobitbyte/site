# Relatório de auditoria final pré-merge — Academia MbB

## Decisão

**Aprovada para revisão final do proprietário.** A auditoria encontrou cinco falhas concretas, corrigiu-as de forma cirúrgica e repetiu somente os testes afetados. A `main` não foi alterada e nenhum merge foi executado.

## Estado auditado

- Branch: `academia-sistemas-embarcados-iot-mbb`.
- SHA remoto real no início da auditoria: `b0a92c34cbbc7bdaf38fd691a979547b13ba6668`.
- O SHA `e589b7d...` era um commit anterior da mesma branch, não o estado final remoto.
- SHA final do código auditado, sem este relatório: `d82021b047ac97e577d3c364b542a93bbac6a4cb`.
- Fonte pública preservada usada na implementação: `64c9b0ffc6ca043f4d25f9491696b83fc328e467`.
- O arquivo `RELATORIO_FINAL_ACADEMIA_SISTEMAS_EMBARCADOS_MBB.md` foi lido integralmente e usado como evidência; testes externos aprovados não foram repetidos sem necessidade.

## Problemas comprovados e correções

| Problema encontrado | Evidência | Correção aplicada | Revalidação |
|---|---|---|---|
| Inicialização Web do Firebase chamava `authStateReady` no módulo do SDK, não na instância de Auth | Erro real no console: `authSdk.authStateReady is not a function` | Alterado para `await auth.authStateReady()` | Curso, login e painel abriram sem erro da aplicação; teste de regressão acrescentado |
| Aula recém-aberta era gravada como `em-andamento`, mas a interface continuava mostrando `Não iniciada` até nova carga | Comparação entre persistência e estado visual | Badge e marcador da aula passam a `Em andamento` após a gravação bem-sucedida | Estado e marcador confirmados no preview; conclusão persistiu após atualização da página |
| A introdução de MQTT pedia os cinco papéis antes de defini-los de forma suficiente para um iniciante sozinho | Leitura pedagógica da aula `emb-07-05` | A atividade agora define publisher, broker, topic, subscriber e mensagem no próprio fluxo e explicita HTTP × MQTT | Nova leitura nas quatro perspectivas e teste estrutural das 56 atividades |
| Títulos longos de aula ocupavam até três linhas muito grandes no desktop | Medição e captura em 1363 px; título chegava a 196 px de altura | Limite tipográfico reduzido, mantendo hierarquia e legibilidade | Títulos longos passaram a ocupar menos área; título do projeto final ficou em uma linha no tablet |
| Título longo e CTA “Continuar” geravam rolagem horizontal no celular | Preview real em 390 px: `scrollWidth` maior que a largura útil | Título ganhou quebra segura e escala móvel menor; CTA passou a quebrar texto | `scrollWidth == clientWidth` em curso e aula; sem overflow em 390 px |

Nenhuma correção alterou regras do Firestore, modelo de progresso, pontuação, conquistas, autenticação, códigos técnicos, circuitos ou imagens.

## Auditoria pedagógica integral

Foram percorridas, na ordem real, as 56 aulas/atividades dos 11 módulos: 50 obrigatórias e 6 opcionais no laboratório 99. Cada item foi confrontado com a pergunta do iniciante sozinho e com os campos efetivamente renderizados: contexto, conhecimento anterior, ação, observação/interpretação, critério de sucesso, diagnóstico e aplicação.

Resultado: depois da correção de MQTT, não restou conceito essencial exigido antes de ser apresentado. As práticas aparecem quando o conhecimento necessário já foi introduzido; os checkpoints verificam reconstrução, explicação, diagnóstico e transferência, e não apenas execução literal.

### Superioridade pedagógica sobre o site e quatro perspectivas MbB

| Módulo | Ganho real da Academia sobre o material público | Especialista | Professor | Iniciante | Aluno que concluiu |
|---|---|---|---|---|---|
| 0 — Comece aqui | Transforma acesso ao conteúdo em jornada: escolha de ambiente, método, segurança e evidência | Escopo e segurança corretos | Prepara o modo de estudar antes da técnica | Consegue começar sem kit e sem pré-requisitos | Sabe registrar previsão, resultado e correção |
| 1 — Primeiro sistema | Reorganiza fundamentos, LED e Blink em circuito → proteção → controle → reconstrução | Corrente, polaridade, resistor, `setup()` e `loop()` coerentes | Necessidade vem antes do código | Monta e diagnostica com roteiro | Modifica padrões de sinalização sem copiar literalmente |
| 2 — Receber informações | Conecta botão, buzzer, analógico, PWM e Serial pelo fluxo entrada → processamento → saída | Faixas e papéis de I/O corretos | Recupera o LED e amplia o modelo mental | Tem previsão, leitura e critério de sucesso | Cria outra regra usando entrada e saída já conhecidas |
| 3 — Perceber e medir | Acrescenta calibração real, interpretação, tolerância e diagnóstico por subsistema | LDR, divisor, ultrassom e unidades adequados ao nível | Faz o dado ganhar finalidade | Mede antes de escolher limite | Adapta faixas e regras a outro ambiente |
| 4 — Agir e integrar | Integra RGB, servo e sensores por testes parciais e estado lógico | Atuadores e alimentação são tratados com cautela | Integração cresce sem forçar tudo no projeto final | Testa partes antes do conjunto | Localiza falha por subsistema e propõe melhoria |
| 5 — Sistema crescendo | Introduz tempo não bloqueante, estado, funções e memória somente após a complexidade aparecer | `millis()`, `micros()`, escopo e persistência contextualizados | Teoria surge da necessidade observada | Reutiliza Blink e lixeira como âncoras | Torna um programa responsivo e modular |
| 6 — Arduino → ESP32 | A mudança nasce da necessidade de comunicação e explicita transferência, 5 V × 3,3 V, GPIO e pinout | Cuidados elétricos e diferenças de plataforma corretos | Evita a sensação de recomeço | Executa primeiro uma saída conhecida | Escolhe Bluetooth ou Wi-Fi com justificativa |
| 7 — Redes e IoT | Separa rede local, Internet, HTTP, mDNS, MQTT, finalidade e falha de rede | Papéis HTTP/MQTT e arquitetura coerentes | Conectividade deixa de ser decoração | Após a correção, compreende os cinco papéis de MQTT sozinho | Justifica protocolo e comportamento sem rede |
| 8 — Visão profissional | Converte siglas em decisões: interface, transceptor, prazo, alimentação, risco e dado mínimo | RTOS, I2C, UART/RS-232, CAN/TWAI e camadas estão em profundidade introdutória adequada | A necessidade antecede cada tecnologia | Não precisa implementar toda tecnologia avançada | Seleciona e exclui componentes por critério técnico |
| 9 — Projeto Integrador | Impõe requisitos, arquitetura, construção local, integração, falhas, segurança, evidências e melhoria própria | Arquitetura e limitações do protótipo são explícitas | Converge o percurso com retirada de ajuda | Não recebe apenas circuito e código para copiar | Projeta uma melhoria e transfere os princípios a outro sistema |
| 99 — Práticas e domínio | Reorganiza exercícios existentes por prever, observar, modificar, diagnosticar e aplicar | Desafios compatíveis com o percurso | É opcional e não interrompe o núcleo | Pode escolher prática compatível com os recursos disponíveis | Demonstra domínio fora da ordem original |

## Teste do iniciante sozinho

Resultado: **aprovado nas 56 atividades** após a correção de MQTT.

- O aluno sabe por que estuda cada tópico naquele momento.
- Os conhecimentos necessários aparecem na própria aula ou no material-base explicitamente ligado.
- Toda atividade informa o que fazer, o que observar, como reconhecer sucesso e como diagnosticar.
- A aplicação final de cada aula exige pequena transferência, não simples repetição.
- Os materiais-base abrem na âncora correta; o teste automático validou todos os arquivos e IDs.
- O laboratório 99 é opcional e não interfere no percentual das 50 atividades obrigatórias.

## Espiral do curso

A evolução ficou perceptível e cumulativa:

`circuito → controlar → receber informação → medir → decidir → agir → integrar → organizar sistemas maiores → comunicar → conectar → compreender IoT → proteger → projetar com autonomia`.

LED, entradas, sensores, decisões, funções, estados e comunicação reaparecem em problemas progressivamente mais complexos. O LED passa de carga protegida a saída programada, indicador, PWM, GPIO no ESP32 e atuador do projeto. Entradas evoluem de botão a grandezas físicas calibradas. Decisão evolui de `if` a estado, modos e falha segura. Comunicação evolui de Serial a Bluetooth, Wi-Fi, HTTP e MQTT.

Memória, precisão de tempo, RTOS, CAN/TWAI, protocolos e segurança não dominam o percurso. Aparecem como visão orientada por necessidade, com práticas curtas ou comparação conceitual. O projeto final usa somente o necessário e declara explicitamente que tecnologias avançadas não entram por quantidade.

## Arduino → ESP32 e IoT

- A troca de plataforma nasce da necessidade de comunicação.
- O aluno reutiliza LED, GPIO conceitual, `setup()`, `loop()`, Monitor Serial, entrada/processamento/saída e diagnóstico.
- 5 V × 3,3 V, tolerância dos GPIOs, pinout, cabo, porta e alimentação são tratados antes da conectividade.
- Wi-Fi não é usado como sinônimo de IoT.
- Rede local e Internet são diferenciadas; mDNS e túnel têm finalidades e riscos separados.
- HTTP é apresentado por papéis de cliente/servidor e rotas.
- MQTT define publisher, subscriber, broker, topic e mensagem e o compara diretamente com solicitação/resposta HTTP.
- Segurança surge depois da exposição em rede e retorna como critério obrigatório no projeto.

## Ambiente Inteligente MbB

O projeto final foi aprovado como convergência real do percurso. A sequência efetiva é:

`problema → requisitos → arquitetura → construção local → calibração do sensor → decisão → atuação → conectividade → monitoramento/controle → segurança → falhas reproduzíveis → diagnóstico → melhoria própria → evidência final`.

O material-base fornece circuito e código preservados, mas a Academia exige critérios testáveis, validação por subsistema, modos manual/automático, falha segura, limitação de segurança reconhecida, roteiro de testes e uma melhoria escolhida pelo aluno. Portanto, a entrega não se reduz a copiar circuito e programa.

## Auditoria visual

Preview da própria branch foi percorrido em desktop (1363 px), tablet (768 px) e celular (390 px).

Superfícies verificadas:

- página inicial da Academia e catálogo;
- página do curso, 11 cartões de módulo, progresso e conquistas;
- aulas representativas dos 11 módulos, checkpoint, miniprojeto, projeto final e laboratório opcional;
- títulos, menu, sidebar, botões, links de material-base, passos, critérios de sucesso e navegação anterior/próxima;
- circuito e imagem do LED protegido;
- tabelas e código dos materiais públicos;
- projeto Ambiente Inteligente MbB e seu código completo;
- login, recuperação de senha, painel e “Continuar estudando”;
- curso existente ChatGPT na Vida Real.

Resultado final:

- sem rolagem horizontal na Academia em 390, 768 e 1363 px;
- títulos longos contidos e legíveis;
- CTAs podem quebrar texto sem aumentar a largura da página;
- botões móveis medidos entre 43 e 81 px de altura;
- tabelas permanecem dentro do contêiner;
- códigos usam rolagem interna, sem romper a página;
- circuitos e imagens ocupam a largura útil no celular e preservam proporção;
- navegação anterior/próxima empilha no celular;
- contraste, respiro, cartões e hierarquia permanecem consistentes.

## Reaproveitamento

Não foram recriados, substituídos nem redesenhados circuitos, códigos técnicos, imagens ou assets. O patrimônio em `pages/` e `img/arduino/` continua sendo aberto como material-base.

Itens alterados nesta auditoria e motivo:

- `academia/js/academia-storage.js`: correção da API de inicialização do Auth.
- `academia/js/curso-embarcados.js`: sincronização imediata do estado visual da aula.
- `academia/js/curso-embarcados-dados.js`: mediação pedagógica autossuficiente para MQTT.
- `academia/css/academia.css`: escala de títulos e quebras responsivas comprovadamente necessárias.
- `academia/tests/academia-core.test.js`: prevenção de regressão na inicialização Web do Auth.

## Progresso, pontos e conquistas

As regras permanecem corretas:

- progresso e pontos são cálculos distintos;
- IDs são permanentes e únicos;
- estados são não iniciada, em andamento e concluída;
- pontos derivam somente de atividades conhecidas e únicas concluídas;
- regravar a mesma atividade não cria nova identidade nem duplica pontos;
- conquistas dependem de marcos reais;
- “Continuar estudando” apontou para a primeira atividade obrigatória ainda pendente;
- conclusão local permaneceu após atualização da página;
- o teste anterior entre dois clientes autenticados já comprovou recuperação e sincronização entre dispositivos.

Como regras, esquema e infraestrutura não foram alterados, os testes externos de dois dispositivos e o teste destrutivo de criação/remoção de conta não foram repetidos.

## Firebase e segurança

- Projeto permanece `academia-mundo-bit-byte` no plano Spark gratuito.
- Nenhum faturamento ou serviço pago foi habilitado.
- A configuração versionada contém apenas os identificadores públicos do SDK Web.
- Varredura não encontrou chave privada, service account, segredo administrativo ou token privado da Academia.
- Regras continuam negando acesso global por padrão e limitando `users/{uid}` e subcoleções ao próprio UID.
- Usuário B não pode ler nem alterar dados do usuário A, conforme os cinco testes de regras já aprovados.
- Dados armazenados permanecem mínimos: nome, e-mail, progresso educacional, última aula e conquistas.

## Recuperação de senha

O fluxo foi revisto tecnicamente: campo de e-mail válido, botão explícito, chamada a `sendPasswordResetEmail`, tratamento de erro e mensagem de sucesso. Nenhum e-mail foi enviado durante esta auditoria.

Única aceitação manual não bloqueante: após publicação no domínio definitivo, o proprietário pode inserir um e-mail próprio já cadastrado, clicar uma vez em “Esqueci minha senha” e confirmar remetente, recebimento e abertura do link. Não usar endereço de terceiro.

## Regressões

- Página inicial da Academia: íntegra, sem overflow e com ambos os cursos acessíveis.
- ChatGPT na Vida Real: página do produto e módulo 1 renderizados sem regressão.
- Navegação global e estilos compartilhados: sem quebra encontrada.
- Login e painel: carregamento sem erro da aplicação.
- Painel: progresso local exibido e link “Continuar estudando” correto.
- `main`: intacta; nenhum merge realizado.

## Testes repetidos por causa das correções

- `node --check` nos três arquivos JavaScript afetados: aprovado.
- `node --test academia/tests/academia-core.test.js`: **7/7 aprovados**.
- Validação de IDs, pontos, opcionais, conquistas, links/âncoras e completude pedagógica: aprovada.
- Inicialização Web do Firebase no navegador: sem erro da aplicação após a correção.
- Estado `Em andamento`, conclusão, atualização da página e painel: aprovados.
- Desktop, tablet e celular: aprovados após repetir as larguras afetadas.
- `git diff --check`: aprovado.
- Busca pelo termo vedado no conteúdo da Academia: nenhuma ocorrência.

Evidências preservadas, não repetidas:

- regras Firestore: 5/5;
- sincronização Firebase real entre dois clientes: 1/1, com limpeza da conta e dos dados;
- validações anteriores de componentes e estrutura não afetados.

## Pendências reais

- Aceitação manual opcional do e-mail de recuperação no domínio definitivo, conforme roteiro acima.
- Smoke test pós-publicação no domínio definitivo é recomendável como verificação operacional, não como correção pré-merge.

Nenhuma pendência técnica ou pedagógica bloqueia a revisão final do proprietário.

## Recomendação objetiva

A branch está tecnicamente pronta para merge após a revisão final do proprietário. A aprovação não se baseia apenas em testes automatizados: inclui leitura integral das 56 atividades, comparação módulo a módulo com o material público, quatro perspectivas MbB, teste do iniciante sozinho, inspeção visual real em três larguras, revisão de segurança, reaproveitamento e regressões.

**Auditoria pré-merge aprovada. Branch pronta para revisão final do proprietário e posterior merge.**
