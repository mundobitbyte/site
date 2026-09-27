# Análise de Sistemas — Auditoria Visual MbB

## Objetivo

Revisar figuras, diagramas, fluxos, wireframes e representações visuais antes de ampliar ou tornar interativas as imagens do módulo.

Critério MbB aplicado a cada visual:

**necessidade → correção técnica → correção geométrica → coerência com texto → coerência com etapas anteriores → simplicidade → leitura iniciante → leitura profissional → desktop → celular**.

## Classificação

- **C0 — crítico:** ensina algo errado.
- **C1 — alto:** pode induzir interpretação errada.
- **C2 — médio:** correto, mas prejudica leitura.
- **C3 — baixo:** acabamento visual.

## Rodada 1 — Diagramas críticos

| ID | Etapa | Visual | Achado | Gravidade | Correção | Estado |
|---|---:|---|---|---|---|---|
| A1 | 3 | Fluxograma AS-IS | caminho `Não` de “Cliente aprova?” atravessava o terminal e a seta terminava fora do bloco; retorno do teste também ficava visualmente ambíguo | C0 | redesenho das rotas com entradas claras, rótulos próximos do ramo e retorno do teste separado | corrigido |
| A2 | 4 | Diagrama de Contexto | versão inicial antecipava Pagamento/Mensagens e omitia Atendente/Técnico, embora a etapa ainda estivesse modelando o trabalho atual | C1 | fronteira revista com Atendente, Técnico, Cliente e Fornecedor; integrações futuras saem deste momento | corrigido |
| A3 | 4 | DFD Nível 0 | `D3 Orçamentos` estava desconectado; fluxo chamado “orçamento” chegava a `D2 Ordens`; decisão do cliente não aparecia de forma coerente | C0 | DFD redesenhado com Atendente, Técnico e Cliente como entidades externas e depósitos D1/D2/D3 efetivamente usados | corrigido |
| A4 | 5 | BPMN TO-BE | Cliente aparecia como lane da mesma pool da assistência; isso enfraquecia justamente a distinção entre fluxo de sequência e mensagem | C0/C1 | Assistência Técnica vira pool com lanes Atendimento/Técnico/Estoque; Cliente passa a pool separada; mensagens são tracejadas | corrigido |
| A5 | 7 | Caso de Uso | `Registrar decisão` estava ligado visualmente ao Técnico, contradizendo a descrição textual que define Atendente como ator principal | C0 | associação corrigida: Atendente → Registrar decisão; Técnico permanece em Registrar diagnóstico | corrigido |

## Rodada 2 — UML

A autocrítica encontrou um problema diferente: a Etapa 8 falava em quatro diagramas, mas parte do conteúdo era representada apenas por fluxo simples ou tabela. Isso dificultava o aluno perceber a diferença visual entre as técnicas.

| ID | Visual | Achado | Gravidade | Correção | Estado |
|---|---|---|---|---|---|
| B4 | Atividades | havia apenas um fluxo de caixas | C1 | criado Diagrama de Atividades com início, ações, decisão, ramos Sim/Não e final | corrigido |
| B5 | Sequência | havia apenas tabela de mensagens | C1 | criado Diagrama de Sequência conceitual com participantes, lifelines e ordem das mensagens | corrigido |
| B6 | Modelo de Domínio | conceitos e cardinalidades apareciam somente em tabela/lista | C1 | criado modelo visual com Cliente, Equipamento, Ordem, Diagnóstico, Orçamento e Item de Peça | corrigido |
| B7 | Estados | fluxo linear escondia estados alternativos | C1 | criado Diagrama de Estados com Recusada, Aguardando peça, retorno após teste falho, Pronta e Entregue | corrigido |

## Rodada 3 — Produto e UX

| ID | Etapa | Visual | Resultado | Estado |
|---|---:|---|---|---|
| B8 | 9 | Story Map | a tabela comunica corretamente atividades e fatias; não requer diagrama adicional neste momento | aprovado |
| B9 | 10 | Wireframe | largura máxima de 390 px, hierarquia clara e conteúdo textual independente de cor | aprovado |

## Rodada 4 — Integração e consolidação

| ID | Etapa | Visual | Resultado | Estado |
|---|---:|---|---|---|
| B10 | 11 | Ordem pronta → notificação → resultado | o texto deixa claro que falha da notificação não muda o estado da ordem | aprovado |
| B11 | 12 | Registro/Matriz de riscos | tabela é mais apropriada que desenho decorativo; manter rolável em telas estreitas | aprovado |
| B12 | 12 | Rastreabilidade | tabela responde melhor a origem e impacto; manter rolável | aprovado |
| B13 | 14 | Caminho completo | representa percurso didático e é explicitamente contraposto ao ciclo contínuo no fim da etapa | aprovado |

## Autocrítica circular

Depois das correções, voltar a comparar:

1. **AS-IS × DFD:** fluxo de aprovação e resultado do teste precisam ter correspondência informacional.
2. **DFD × BPMN:** dados usados no TO-BE precisam nascer de fontes reconhecidas.
3. **BPMN × Requisitos:** nenhuma tarefa importante pode existir sem necessidade/requisito investigável.
4. **Requisitos × Caso de Uso:** ator e objetivo precisam concordar com a descrição textual.
5. **Caso de Uso × UML:** cada modelo deve responder uma pergunta que o Caso de Uso não responde bem.
6. **UML × Backlog/Protótipo:** modelos não podem criar funcionalidades sem origem.
7. **Riscos × modelos anteriores:** risco ou mudança pode exigir retorno e correção do artefato original.

## Responsividade aprovada como princípio

Antes desta revisão, diagramas largos dependiam de `min-width` e rolagem horizontal interna. O novo padrão será:

**visão inteira na aula → toque/clique → visualizador ampliado → zoom/ajuste/rotação → retorno à aula**.

O menu lateral do desktop passa a ser menor e recolhível para devolver área útil ao conteúdo.

## Critério para novos diagramas

Nenhum novo visual técnico entra no módulo sem responder:

- qual pergunta ele resolve;
- qual evidência anterior o justifica;
- quais símbolos e setas precisam estar corretos;
- como o aluno vê o todo em 360/390 px;
- como o detalhe será explorado sem quebrar a página.
