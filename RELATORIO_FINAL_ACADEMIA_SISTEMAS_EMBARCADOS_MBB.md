# Relatório final — Academia Sistemas Embarcados e IoT

Data de conclusão: 22/09/2026.

## 1. Referência Git

- repositório: `mundobitbyte/site`;
- fonte de verdade auditada: `main` em `64c9b0ffc6ca043f4d25f9491696b83fc328e467`;
- branch: `academia-sistemas-embarcados-iot-mbb`;
- SHA remoto da implementação antes deste relatório: `e589b7d16fa5514378c0c6cda1fea00a30184063`;
- a `main` não foi alterada nem mesclada por este trabalho.

Commits principais publicados na branch:

1. `fad93acce13b33e2acc9317f33e3a5e9da8d733e` — curso e progressão pedagógica;
2. `fae2afb449cb8dab4fced60fb9f536f1d24b4d6e` — conta, painel e persistência;
3. `6e4f7dbc082bdd88f8db9ea6031b855456633c15` — regras, testes e documentação;
4. `d29af0c5408214073b9a235331974df389a0306d` — conexão com o projeto Firebase real;
5. `e589b7d16fa5514378c0c6cda1fea00a30184063` — teste real de continuidade entre clientes.

## 2. Estrutura implementada

- catálogo atualizado em `academia/index.html`;
- curso em `academia/cursos/sistemas-embarcados-iot/`;
- página de curso e página reutilizável de aula;
- dados pedagógicos centralizados em `academia/js/curso-embarcados-dados.js`;
- cálculo derivado de progresso, pontos e conquistas em `academia/js/academia-core.js`;
- persistência local e Firebase em `academia/js/academia-storage.js`;
- criação de conta, login, logout e recuperação de senha;
- painel **Minha jornada**, com continuar estudando, percentual, pontos e conquistas;
- página de privacidade e orientação simples de LGPD;
- regras do Firestore, emuladores e documentação administrativa.

O curso tem 11 módulos, 56 aulas/atividades, 50 itens obrigatórios, 6 práticas opcionais no módulo 99 e 7 conquistas vinculadas a marcos reais.

| Módulo | Aulas | Papel na progressão |
|---|---:|---|
| 0 — Comece aqui | 3 | Jornada, ferramentas, segurança e evidências |
| 1 — Primeiro sistema programado | 5 | Circuito, eletricidade essencial, LED e Blink |
| 2 — O sistema recebe informações | 5 | Entradas, decisão, buzzer, analógico e Serial |
| 3 — O sistema percebe e mede | 4 | LDR, HC-SR04, calibração e Sensor de Ré |
| 4 — O sistema age e integra | 5 | RGB, servo, múltiplas entradas e automação |
| 5 — O sistema começa a crescer | 5 | `millis()`, estado, funções, memória e organização |
| 6 — Do Arduino ao ESP32 | 4 | 3,3 V, GPIO, Bluetooth e Wi-Fi |
| 7 — Redes e IoT | 6 | HTTP, mDNS, túnel, arquitetura IoT e MQTT |
| 8 — Visão profissional | 8 | RTOS, protocolos, alimentação, segurança e LGPD |
| 9 — Projeto Integrador | 5 | Ambiente Inteligente MbB com ajuda decrescente |
| 99 — Práticas e domínio | 6 | Prever, experimentar, modificar, diagnosticar e aplicar |

## 3. Materiais reaproveitados

Foram preservados e referenciados os conteúdos públicos existentes de:

- fundamentos, Arduino Uno, eletricidade e Tinkercad;
- LED protegido, Blink, botão, buzzer, potenciômetro e Monitor Serial;
- LDR, HC-SR04, Sensor de Ré, RGB, servo e Lixeira Automática;
- programação aplicada, tempo, memória e funções;
- ESP32, Bluetooth, Wi-Fi, HTTP, mDNS, túnel e aplicações IoT;
- RTOS, I2C, UART, CAN, TCP/IP, segurança e projeto IoT;
- exercícios, revisões e avaliações.

As imagens continuam em `img/arduino/` e são apresentadas pelo material-base. Nenhum circuito correto foi redesenhado, nenhuma imagem existente foi substituída e nenhum código do módulo público foi reescrito.

O mapeamento completo está em `MAPA_REAPROVEITAMENTO_SISTEMAS_EMBARCADOS_MBB.md`.

## 4. Ganho pedagógico da Academia

| O site já oferecia | A Academia acrescentou |
|---|---|
| Conteúdo técnico, imagens, códigos e projetos | Jornada sequenciada, pré-requisitos e retomada do conhecimento anterior |
| Montagens e exemplos funcionais | Ação, observação, critério de sucesso, diagnóstico e aplicação |
| Exercícios e avaliações | Categorias Preveja, Experimente, Modifique, Diagnostique, Aplique e Domínio |
| Arduino, ESP32 e IoT | Transições justificadas por necessidade, sem “voltar ao começo” |
| Ambiente Inteligente MbB | Projeto de convergência com ajuda decrescente, falha intencional e evidência final |

O diferencial não depende de cores ou cards: ele está na contextualização, na prática orientada, na interpretação do resultado, no diagnóstico e na transferência para situação diferente.

## 5. Conteúdo novo

- introdução curta e prática a MQTT, para preencher lacuna prevista na estrutura;
- alimentação, corrente disponível, GND comum e uso introdutório do multímetro;
- checkpoints, critérios de sucesso e orientação de diagnóstico;
- painel, pontos, conquistas e continuidade entre dispositivos;
- camada de privacidade e administração do Firebase.

Nenhum novo circuito foi criado apenas por padronização estética.

## 6. Firebase implantado

- projeto: **Academia Mundo bit Byte** (`academia-mundo-bit-byte`);
- plano: **Spark**, sem cobrança;
- app: **Academia Mundo bit Byte Web**;
- SDK Web: 12.19.0;
- Authentication: e-mail/senha;
- Firestore: edição Standard, banco `(default)`;
- região: `southamerica-east1` (São Paulo);
- regras privadas publicadas a partir de `firestore.rules`;
- Google Analytics, Gemini e Firebase Hosting não foram ativados;
- nenhuma senha, chave privada, service account ou credencial administrativa foi adicionada ao repositório.

Sem login, o curso continua público e o progresso local fica identificado como armazenamento do dispositivo. Com login, o aluno sincroniza dados entre dispositivos. A interface diferencia salvando, salvo, armazenamento local e erro de sincronização.

## 7. Progresso, pontos e conquistas

- IDs permanentes para curso, módulos, aulas, atividades e conquistas;
- versão do curso registrada;
- estados usados: não iniciada, em andamento e concluída;
- percentual calculado apenas com atividades obrigatórias;
- pontos derivados de atividades conhecidas e concluídas;
- regravação da mesma atividade não cria outro registro nem duplica pontos;
- documentos desconhecidos são ignorados pelo cálculo da interface;
- valores centralizados: aula 10, prática 20, checkpoint 30, desafio 40, miniprojeto 60 e projeto final 150;
- não há ranking público.

## 8. Segurança e privacidade

As regras exigem autenticação e UID proprietário em todos os dados pessoais. Um usuário não pode ler ou alterar o perfil, curso, atividades ou conquistas de outro. Tipos, estados, IDs e valores de pontos são validados; qualquer caminho não declarado é negado.

Foram limitados os dados a nome, e-mail, UID e progresso educacional. A página de privacidade explica finalidade, conteúdo armazenado e exclusão. O guia `ADMINISTRACAO_ACADEMIA_MBB.md` descreve operação e remoção de usuário sem exigir conhecimento de banco de dados.

## 9. Testes e evidências

### Automatizados

- 6/6 testes do núcleo: IDs únicos, pontos sem duplicação, opcionais fora do percentual, conquistas, links/âncoras e estrutura pedagógica;
- 5/5 testes das regras no emulador: perfil próprio, isolamento entre usuários, regravação idempotente, rejeição de pontos/ID adulterados e bloqueio de visitante;
- compilação das regras do Firestore aprovada;
- validação de sintaxe CSS aprovada;
- validação HTML das novas páginas aprovada;
- smoke test da interface: 11 módulos, aula, quatro etapas MbB, link de origem, conclusão local, 20 pontos e 7 conquistas renderizadas.

### Firebase real

O teste autorizado `academia/tests/firebase-live.test.cjs` foi executado com o SDK 12.19.0:

1. criou conta técnica temporária;
2. gravou perfil, curso, atividade e conquista no cliente A;
3. repetiu a conclusão da mesma atividade;
4. saiu do cliente A;
5. entrou no cliente B e recuperou última aula, atividade, pontos e conquista;
6. concluiu outra atividade no cliente B;
7. voltou ao cliente A e recuperou a alteração do cliente B;
8. apagou conquista, atividades, curso, perfil e conta;
9. confirmou no console que não restaram usuários nem documentos.

Resultado: **1/1 teste real aprovado**, com sincronização nos dois sentidos e limpeza confirmada.

## 10. Correções realizadas

- links para fontes públicas foram verificados contra arquivos e âncoras existentes;
- pontuação passou a ser derivada de IDs únicos conhecidos;
- atividades opcionais deixaram de inflar o percentual obrigatório;
- mensagens não afirmam salvamento em nuvem quando a gravação falha;
- acesso entre usuários e adulteração simples de pontos foram bloqueados;
- documentação passou a registrar projeto, plano, região e serviços não ativados;
- marcação acessível da página inicial foi corrigida sem mudança visual: grupos rotulados, landmark identificado e estilo do progresso transferido para o CSS;
- corrigido erro de digitação no mapa de reaproveitamento.

## 11. Limitações e itens futuros

- a branch ainda depende de revisão e merge para aparecer no domínio público;
- por isso, o teste visual final no domínio publicado, em celular e desktop reais, deve ser repetido após o merge;
- a recuperação de senha está implementada, mas não foi disparado e-mail no teste técnico para evitar envio externo desnecessário; requer teste de aceitação com uma conta legítima após a publicação;
- App Check não foi ativado nesta primeira versão;
- não há certificado, ranking, modo totalmente offline nem painel administrativo complexo;
- exportação automatizada não foi ativada para evitar custo e infraestrutura sem necessidade;
- a arquitetura de conclusão está preparada para futuros critérios de certificado.

Essas limitações não foram ocultadas nem tratadas como concluídas sem evidência.

## 12. Resultado

A Academia preserva o patrimônio público do Mundo bit Byte e acrescenta uma experiência distinta: progressão, continuidade, prática orientada, diagnóstico, pontos únicos, conquistas e retomada em outro dispositivo. O módulo público permanece intacto e continua sendo a fonte técnica reaproveitada.
