# Análise de Sistemas — Mapa e Critérios MbB

## Status

Arquitetura pedagógica implementada e validada em branch própria.

Projeto condutor: **Assistência Técnica Conecta**.

Princípio: um único problema evolui do levantamento até a base para desenvolvimento.

## Fluxo pedagógico obrigatório

**situação concreta → problema → pergunta → necessidade → conceito/ferramenta → aplicação → prática → evidência → descoberta → nova lacuna → próxima etapa**

O aluno deve sentir esse encadeamento. Não usar linguagem de bastidor como “agora aplicaremos o Modo MbB”.

## Estrutura técnica

- `pages/analise-sistemas/index.html` — entrada e mapa do módulo.
- `pages/analise-sistemas/00-antes-do-sistema.html`
- `pages/analise-sistemas/01-stakeholders-escopo.html`
- `pages/analise-sistemas/02-levantamento.html`
- `pages/analise-sistemas/03-processo-as-is.html`
- `pages/analise-sistemas/04-analise-estruturada.html`
- `pages/analise-sistemas/05-processo-to-be-bpmn.html`
- `pages/analise-sistemas/06-requisitos.html`
- `pages/analise-sistemas/07-casos-de-uso.html`
- `pages/analise-sistemas/08-uml-essencial.html`
- `pages/analise-sistemas/09-agile-backlog-mvp.html`
- `pages/analise-sistemas/10-ux-prototipo.html`
- `pages/analise-sistemas/11-qualidade-integracoes.html`
- `pages/analise-sistemas/12-viabilidade-riscos-rastreabilidade.html`
- `pages/analise-sistemas/13-documentacao-ia.html`
- `pages/analise-sistemas/14-integracao-final.html`
- `css/analise-sistemas.css`
- `js/analise-sistemas.js`
- `img/analise-sistemas/` — ativos visuais externos quando necessários.
- `tools/analise-sistemas-validacao/smoke.mjs` — validação permanente em Chromium real.
- `.github/workflows/analise-sistemas-validacao.yml` — CI do módulo.

## Card principal

O módulo pertence a **Programação e Desenvolvimento** e está configurado como primeiro módulo da área.

Ordem pedagógica:

1. Análise de Sistemas
2. Programação de Computadores
3. VisuAlg
4. Python
5. Programação Web
6. App Inventor
7. React Native
8. Git e GitHub

## As 15 etapas

0. Antes do sistema — problema, sintoma, causa, visão sistêmica e semente de viabilidade.
1. Stakeholders e escopo — envolvidos, fronteira, premissas e restrições.
2. Levantamento — entrevista, observação, documentos, workshop e origem dos achados.
3. Processo AS-IS — fluxograma, exceções, esperas e gargalos.
4. Análise Estruturada — contexto, DFD, dados, árvore e tabela de decisão.
5. TO-BE e BPMN — processo futuro, responsabilidades e colaboração.
6. Engenharia de Requisitos — RF, RNF, regras, critérios, MoSCoW e origem.
7. Casos de Uso — atores, objetivos e descrição textual.
8. UML essencial — Atividades, Sequência, Classes conceituais e Estados apenas quando úteis.
9. Backlog e MVP — histórias, critérios, prioridade, Story Map e entrega incremental.
10. Jornada e protótipo — wireframe, teste com usuário, feedback e acessibilidade.
11. Qualidade e integrações — RNFs aprofundados, segurança, privacidade, API e falhas.
12. Viabilidade, riscos e rastreabilidade — Build/Buy, PoC, riscos, impacto e matriz.
13. Documentação viva e IA — fonte de referência, ADR, versionamento e IA com validação humana.
14. Integração final — revisar, integrar, eliminar excesso e defender escolhas.

## Espirais obrigatórias

### Viabilidade

- Etapa 0: problema merece solução?
- Etapa 12: viabilidade técnica, econômica, operacional, prazo, legal e organizacional.

### Requisitos não funcionais

- Etapa 6: primeira noção de qualidade.
- Etapa 11: desempenho, segurança, privacidade, acessibilidade, disponibilidade, confiabilidade e auditoria em contexto.

### Rastreabilidade

- Etapa 2: registrar origem.
- Etapa 6: origem → requisito → regra → critério.
- Etapa 12: origem → requisito → história/caso → tela → teste e análise de impacto.

### Documentação

- Etapa 0: Caderno da Análise começa.
- Etapas seguintes: evidências acumuladas.
- Etapa 13: organização como documentação viva.
- Etapa 14: consolidação, sem refazer.

### Segurança

- Etapa 1/2: papéis e informações.
- Etapa 6: requisitos e regras.
- Etapa 10: prevenção de erro/acessibilidade na interface.
- Etapa 11: autenticação, autorização, privacidade e auditoria.

### Testabilidade

- Etapa 6: critérios de aceitação.
- Etapa 9: histórias testáveis.
- Etapa 11: RNFs verificáveis.
- Etapa 14: evidência integrada.

## Protocolo de crítica e autocrítica circular

Ao concluir cada etapa, executar mentalmente e editorialmente:

1. A ferramenta surgiu de uma pergunta real?
2. O conteúdo resolve a lacuna criada pela etapa anterior?
3. Algum termo técnico apareceu antes de haver necessidade dele?
4. Há repetição da etapa anterior sem novo nível de compreensão?
5. A prática produz uma evidência que será reutilizada?
6. O novo modelo revelou dúvida que exige voltar a levantamento/requisitos/processo?
7. Existe algum detalhe de outra disciplina ocupando espaço demais?
8. Um iniciante consegue compreender por que está aprendendo aquilo?
9. Um profissional reconhece rigor técnico suficiente?
10. Há algo que pode ser removido sem perder capacidade analítica?

### Retornos programados

- Depois da Etapa 4: revisar se o AS-IS e o levantamento sustentam todos os dados e regras modelados.
- Depois da Etapa 6: revisar se cada requisito importante possui origem e se o TO-BE está coberto.
- Depois da Etapa 8: revisar se cada diagrama UML responde a uma pergunta real; remover diagramas redundantes.
- Depois da Etapa 10: revisar requisitos e TO-BE conforme evidências do protótipo.
- Depois da Etapa 11: revisar RNFs iniciais, interface e processos à luz de segurança/integrações.
- Depois da Etapa 12: revisar backlog e MVP conforme riscos e viabilidade.
- Depois da Etapa 14: retornar à Etapa 0 e verificar se a promessa inicial foi cumprida com simplicidade crescente.

## Critério de profundidade

### Essencial

Problema × solução, stakeholders, escopo, levantamento, AS-IS/TO-BE, Fluxograma, Contexto, DFD, regras, Tabela de Decisão, BPMN básico, requisitos, critérios, Casos de Uso, UML essencial, modelo de domínio, histórias, backlog, MVP, protótipo, validação, riscos, rastreabilidade e escolha de técnicas.

### Aprofundamento

DFD em níveis adicionais, balanceamento, include/extend, Sequência mais detalhada, eventos BPMN menos comuns, INVEST, DoR/DoD, ADR, webhooks, idempotência, PoC/Spike e RAG.

### Não transformar em curso paralelo

Scrum, BPMN, UML, APIs, UX, segurança, IA, arquitetura e Banco de Dados só entram na medida em que ajudam a analisar o sistema.

## Regra dos diagramas

1. Contextualizar primeiro.
2. Apresentar a pergunta.
3. Construir progressivamente.
4. Mostrar o modelo completo.
5. Reutilizar o modelo em etapas posteriores.
6. Preferir SVG responsivo.
7. Não reduzir diagrama complexo até ficar ilegível no celular; permitir rolagem horizontal controlada.
8. Setas/círculos de destaque somente quando o alvo for inequívoco.

## Navegação e responsividade

- Desktop: menu lateral persistente.
- Tablet: largura reduzida sem comprimir conteúdo.
- Até 820 px: menu vira painel acionado por `☰ Etapas`.
- Conteúdo em uma coluna no celular.
- Tabelas com rolagem horizontal.
- Diagramas simples responsivos; complexos com área rolável.
- Testes permanentes: 360 px, 390×844, 768 px, 1024 px e 1366 px em Chromium real.
- Navegação consistente: anterior, todas as etapas e próxima.
- A etapa seguinte deve ser provocada por uma lacuna pedagógica, não apenas por ordem numérica.

## Checkpoints

1. Problema — após Etapa 2.
2. Processo — após Etapa 3.
3. Informação e regra — após Etapa 4.
4. Requisito — após Etapa 6.
5. Escolha do modelo — após Etapa 8.
6. Produto — após Etapa 9.
7. Validação — após Etapa 10.
8. Visão profissional — após Etapa 12.
9. Final — cenário novo: o que descobrir e qual técnica usar?

## Meu MbB

O módulo nasce compatível com o contrato futuro do Meu MbB: IDs pedagógicos estáveis, versão editorial e slot neutro de interface, sem ativar Firebase ou login nesta entrega. Ver `ANALISE_SISTEMAS_MEU_MBB_CONTRATO.md`.

## Validação pré-merge

A validação automatizada abre a home, o índice e todas as 15 etapas, verifica navegação, metadados do Meu MbB, Caderno da Análise, ausência de erros JavaScript, menu móvel e responsividade nos cinco tamanhos definidos.

## Critério final de sucesso

O aluno não termina apenas sabendo definir DFD, BPMN ou UML. Ele deve conseguir receber uma solicitação vaga e perguntar:

> **O que preciso descobrir agora e qual técnica realmente ajuda a descobrir isso?**

Se consegue justificar a escolha — inclusive decidir que um diagrama é desnecessário — a experiência atingiu o objetivo do módulo.
