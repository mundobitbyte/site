# Auditoria MbB — Trilha de Inteligência Artificial

**Data de referência:** 12/09/2026  
**Base auditada:** módulos 1 a 6 + Panorama 2026 + interface de apoio  
**Motivação desta rodada:** teste prático da aula IA e Programação revelou que conteúdo tecnicamente correto ainda pode falhar quando o aluno não sabe se deve ler, copiar, executar, responder ou aguardar.

## Critério MbB aplicado

A revisão foi circular e espiral, pelas perspectivas de:

1. **especialista técnico** — correção conceitual, segurança, atualidade e coerência de implementação;
2. **professor/domínio** — progressão, contexto, transferência e finalidade de cada atividade;
3. **aluno iniciante** — capacidade de saber exatamente o que fazer, sem depender de adivinhação.

A régua usada foi:

**situação → necessidade → conceito → ação → evidência → validação → transferência**

Regra de intervenção: **preservar o que está bom e alterar somente o que resolve um problema comprovável**.

---

# Diagnóstico geral

A arquitetura da trilha permanece correta:

**Fundamentos → Vida Real → Comunicação → Produtividade → Programação → Ética e Sociedade → Panorama 2026**

A auditoria não encontrou motivo para mudar essa ordem.

O principal problema transversal encontrado foi de **interface pedagógica**: módulos escritos em momentos diferentes não usavam a mesma linguagem para distinguir exemplo de ação prática. Em alguns pontos, uma caixa visualmente semelhante podia significar:
- apenas leia;
- copie e teste;
- continue na mesma conversa;
- use outra ferramenta;
- compare duas IAs;
- ou apenas observe um resultado esperado.

Isso foi tratado como problema pedagógico real, porque pode interromper o aluno mesmo quando o conteúdo técnico está correto.

## Regra de interface consolidada

- **Botão Copiar**: somente quando existe conteúdo que o aluno realmente precisa transferir para IA, editor ou terminal.
- **Várias IAs**: somente quando comparar respostas é objetivo explícito do experimento.
- **Ferramenta específica**: quando a tarefa exige visão, PDF ou geração de imagem, a aula informa a capacidade necessária.
- **Sem botão**: leitura, exemplo, previsão, reflexão ou decisão do próprio aluno.
- **FAÇA AGORA / PARE E CONFIRA**: usados quando a sequência depende de uma ação verificável.

---

# Módulo 1 — Fundamentos de IA

## Estado
**Preservado com ajustes cirúrgicos de prática.**

## Forças
- progressão espiral entre padrões, contexto, geração, erros e validação;
- diferencia coerência de verdade;
- apresenta limitações antes de estimular confiança;
- usa laboratórios para comparar hipótese, evidência e fonte.

## Problemas encontrados
- alguns “mini laboratórios” eram realmente atividades, mas não tinham botão Copiar;
- a prática de contexto mostrava vários fornecedores mesmo quando o objetivo era comparar dois pedidos na mesma IA;
- a prática final, que é o local adequado para comparar IAs, não explicitava suficientemente que o mesmo prompt deve ser mantido entre ferramentas;
- havia endereço legado do ChatGPT em links.

## Correções
- botão Copiar passa a ser inserido somente nos laboratórios que realmente pedem execução;
- Teste A × Teste B de contexto usa a mesma IA para isolar a variável “contexto”;
- comparação entre IAs fica concentrada na prática final e exige o mesmo prompt;
- links legados do ChatGPT são normalizados para `chatgpt.com`.

---

# Módulo 2 — IA na Vida Real

## Estado
**Reorganizado sem perder os laboratórios aprovados.**

## Forças
- situações concretas;
- materiais originais;
- objetivos e limites claros;
- validação após cada uso.

## Problemas encontrados
- a grade com ChatGPT, Gemini, Claude, Copilot e Perplexity era repetida em praticamente todos os laboratórios, mesmo quando comparar ferramentas não era o objetivo;
- isso podia sugerir que o aluno deveria testar todas as IAs em toda atividade;
- laboratórios que exigiam imagem ou PDF não destacavam suficientemente que a ferramenta precisa ter aquela capacidade;
- o laboratório de criação visual havia perdido uma transição importante durante uma revisão: a intenção original era **uma IA construir o prompt visual e outra ferramenta gerar a imagem**.

## Correções
- comparação deliberada entre pelo menos duas IAs fica no primeiro laboratório;
- os demais laboratórios pedem apenas uma ferramenta adequada à tarefa;
- visão e PDF são identificados como capacidades necessárias;
- laboratório visual volta a ter duas etapas explícitas: **briefing → prompt visual → conferência → geração de imagem → avaliação**;
- botão Copiar removido de exemplo introdutório que não era atividade;
- URL do ChatGPT atualizada no HTML.

---

# Módulo 3 — Comunicação com IA

## Estado
**Conteúdo preservado; condução clarificada.**

## Forças
- não vende “prompt mágico”;
- trabalha contexto, fonte, refinamento, mudança de direção e crítica;
- ensina a preservar o que já está bom.

## Problema encontrado
As caixas de prompt dos tópicos conceituais pareciam atividades prontas, embora a intenção fosse principalmente mostrar exemplos de boa condução. O aluno podia concluir que deveria copiar e executar tudo.

## Correções
- nova orientação inicial diferencia **EXEMPLO** de **FAÇA AGORA**;
- exemplos dos tópicos 1–13 permanecem sem botão Copiar;
- microações foram acrescentadas apenas onde exigem decisão do aluno;
- laboratório integrador passou a indicar fonte, paradas de conferência e sequência de refinamento;
- substituído termo pouco explicado “revisão adversarial” por “revisão crítica”;
- adicionada passagem direta para IA e Produtividade.

---

# Módulo 4 — IA e Produtividade

## Estado
**Foi o módulo com maior necessidade de clareza operacional depois de Programação.**

## Problemas encontrados
- prompts de exemplo e prompts para executar tinham a mesma aparência;
- uma tabela pronta podia ser confundida com atividade;
- o tópico de resumo citava um documento de três páginas que a aula não fornecia;
- o tópico de comparação pedia versões A/B sem fornecer as versões;
- o prompt de dependências dizia “analise estas tarefas”, mas as tarefas não estavam dentro do texto copiado;
- laboratório final não deixava totalmente claro quando continuar na mesma conversa e quando conferir.

## Correções
- convenção **LEIA / FAÇA AGORA / PROMPT / PARE E CONFIRA**;
- Copiar somente em fonte e prompt realmente utilizados;
- tabela marcada como referência de comparação;
- resumo marcado como exemplo conceitual quando não há documento real;
- comparação ganhou versões A/B fictícias completas;
- prompt de dependências tornou-se autossuficiente;
- laboratório final virou fluxo executável por etapas;
- navegação direta para IA e Programação.

## QA pedagógico prático posterior — 12/09/2026

Depois da auditoria por conteúdo, o módulo foi percorrido novamente como se fosse um aluno executando cada instrução na ordem. Essa segunda volta encontrou problemas que a leitura estrutural não havia revelado:

- enviar apenas as anotações para a IA antes de receber a instrução seguinte podia gerar uma resposta inesperada e deixar o aluno sem saber se deveria ignorá-la;
- o tópico 4 mostrava uma tabela de referência sem antes pedir explicitamente que o aluno produzisse a tabela que deveria comparar;
- o tópico 7 mandava repetir uma extração já realizada no tópico 2;
- a comparação de versões ainda podia ser enviada em duas mensagens de forma ambígua;
- faltava um ponto explícito de conferência no exercício de dependências;
- o tópico 12 havia herdado por engano o contexto de **saída às 7h30 e transporte**, pertencente à visita técnica, embora o fio condutor ainda fosse a Feira de Projetos;
- o laboratório final usava “sexta-feira, dia 25” sem mês/ano, o que deixava uma data operacional desnecessariamente ambígua;
- o desafio com situação real precisava repetir a barreira de privacidade antes do envio de material próprio.

Correções do QA:
- fonte e prompt inicial agora são preparados na mesma mensagem antes do envio;
- tópico 4 ganhou uma ação real de geração do quadro antes da referência esperada;
- tópico 7 virou **exemplo conceitual**, sem botão Copiar e sem repetir a atividade;
- comparação A/B passa a ser preparada integralmente antes do envio e marca impactos inferidos como **INFERÊNCIA**;
- dependências ganharam critério explícito de sucesso;
- tópico 12 voltou ao fio correto da Feira de Projetos e usa a abertura às 19h ainda não confirmada pela direção;
- laboratório de visita técnica ganhou datas completas e sequência de envio inequívoca;
- desafio final reforça anonimização e minimização de dados.

---

# Módulo 5 — IA e Programação

## Estado
**Refeito pedagogicamente e depois reaudidado.**

## Fio condutor atual
Sistema Python de empréstimo de notebooks, câmeras e kits Arduino.

## Problema original detectado pelo teste do usuário
O aluno podia chegar aos passos 4 e 5 sem saber se deveria apenas ler, alterar código, executar ou aguardar. Isso levou à revisão completa da condução da aula.

## Correções já publicadas antes desta auditoria geral
- LEIA / FAÇA AGORA / PROMPT PARA A IA / PARE E CONFIRA;
- bug proposital claramente delimitado;
- checkpoints cumulativos;
- persistência e testes em microetapas;
- botão Copiar seletivo baseado no padrão já usado no Arduino.

## Novas lacunas encontradas nesta rodada
- ativação de `.venv` reunia comandos de sistemas diferentes num único bloco não copiável;
- `.venv` e JSON local podiam chegar ao Git antes da etapa com agente;
- faltava `.gitignore` e `git status` como barreira de segurança;
- faltava explicar que Git/branch é pré-requisito para a parte agentiva;
- exemplo de ambiente fixava Python 3.12 sem necessidade;
- faltava link direto para o Módulo 6.

## Correções desta rodada
- ativação separada por PowerShell, cmd e Linux/macOS;
- proteção de `.venv`, caches e `dados/equipamentos.json` antes de conectar agente;
- aviso de que `.gitignore` não apaga arquivos já versionados nem histórico;
- pré-requisito de Git explicitado;
- exemplo de ambiente tornado independente de versão específica;
- navegação direta para Ética e Sociedade.

---

# Módulo 6 — IA, Ética e Sociedade

## Estado
**Narrativa preservada; execução e privacidade reforçadas.**

## Forças
- ética nasce de consequência real;
- seleção de 60 candidatos para 10 vagas funciona como fio condutor;
- privacidade, viés, correlação, contestação, autoria, desinformação e responsabilidade são tratados dentro de decisões.

## Problema encontrado
Uma aula que ensina minimização de dados não podia deixar margem para o aluno interpretar o laboratório como convite a usar fichas reais de estudantes.

## Correções
- tópicos 1–12 marcados como leitura e decisão, sem obrigação de abrir IA;
- caso declarado fictício;
- proibição explícita de usar nomes, notas, telefones ou observações reais;
- laboratório final passou a marcar cada etapa como ação;
- desafio reforça proteção de dados;
- acesso direto ao Panorama 2026 após a trilha.

---

# Panorama de IA — 12/09/2026

## Verificação externa
A página foi conferida novamente em fontes oficiais e atualizada somente onde havia ganho real de precisão.

Pontos confirmados:
- NIST AI Agent Standards Initiative criada em fevereiro de 2026 e página atualizada em agosto;
- OWASP Top 10 2025 mantém Prompt Injection como LLM01;
- C2PA Content Credentials 2.4 publicado em abril de 2026;
- Artigo 50 do AI Act aplica transparência a partir de 2 de agosto de 2026, com carência limitada até 2 de dezembro para parte da obrigação de marcação/detecção em sistemas anteriores;
- PL 2338/2023 continua em tramitação na Câmara em setembro de 2026;
- ANPD executa projeto-piloto de sandbox regulatório em IA e proteção de dados em 2026;
- marco de competências da UNESCO mantém quatro dimensões e progressão Compreender → Aplicar → Criar.

A página agora registra a data exata da conferência: **12 de setembro de 2026**.

---

# Documentação interna

A auditoria também encontrou uma incoerência no próprio repositório: `IA_REVISAO_PEDAGOGICA_MBB_4_6.md` descrevia uma versão antiga de IA e Programação baseada em cantina e média de vendas. Esse registro foi atualizado para o projeto vigente de empréstimo de equipamentos.

---

# Conclusão

A trilha não precisava ser reconstruída. Precisava de uma regra comum entre conteúdo e ação.

O princípio final desta auditoria é:

> **em nenhum ponto o aluno deve precisar adivinhar se precisa ler, pensar, copiar, abrir uma IA, executar um comando ou conferir um resultado.**

E, quando houver ação, a própria aula deve deixar claro **qual evidência permite continuar**.
