# Revisão Pedagógica MbB — IA 4, 5 e 6

**Referência:** 12/09/2026  
**Base:** versão vigente da trilha após auditoria prática do aluno  
**Escopo:** preservar conteúdo técnico forte e eliminar pontos em que o aluno poderia não saber se deveria ler, copiar, executar, responder ou apenas observar.

> Este documento substitui a descrição anterior do Módulo 5 baseada no projeto da cantina. A versão vigente de **IA e Programação** usa o sistema de empréstimo de equipamentos como fio condutor.

## Critério MbB consolidado

A revisão usa como eixo:

**situação concreta → problema/dúvida → necessidade → conceito → ação → evidência → validação**

Regras aplicadas:
- a situação precisa gerar a necessidade do conteúdo seguinte;
- o aluno nunca deve adivinhar se uma caixa é leitura, prompt, código para copiar ou ação;
- botão **Copiar** só aparece quando existe transferência prática de conteúdo;
- várias IAs só aparecem quando comparar resultados é parte explícita da atividade;
- exemplo ruim pode ser mostrado sem se transformar automaticamente em tarefa;
- cada laboratório deve dizer como saber se a etapa funcionou;
- materiais fictícios precisam ser claramente identificados quando envolvem pessoas ou dados pessoais;
- mudanças preservam a identidade visual e o conteúdo que já está correto.

---

## Módulo 4 — IA e Produtividade

### Fio condutor preservado
A equipe organiza uma Feira de Projetos a partir de anotações dispersas, decisões, pendências, versões de documentos e tarefas dependentes.

### Problema encontrado na auditoria de 12/09
O conteúdo estava correto, mas várias caixas de prompt tinham aparência semelhante sem deixar claro se o aluno deveria:
- apenas ler;
- copiar e executar;
- continuar na mesma conversa;
- comparar com uma referência;
- ou usar um documento que a aula não havia fornecido.

Esse é o mesmo tipo de falha pedagógica detectado anteriormente em IA e Programação.

### Intervenções
- introduzida a convenção **LEIA / FAÇA AGORA / PROMPT PARA A IA / PARE E CONFIRA**;
- botão Copiar passou a existir somente em fontes e prompts realmente usados;
- a tabela de ação foi identificada como referência, não como tarefa para executar;
- o exemplo de resumo deixou explícito que não existe arquivo anexado naquela etapa;
- a comparação de versões passou a fornecer versões A/B fictícias e executáveis;
- o prompt de dependências passou a carregar as próprias tarefas, deixando de depender de contexto invisível;
- o laboratório final passou a orientar fonte → extração → conferência → plano → comunicação → validação em uma mesma conversa;
- adicionada navegação direta para IA e Programação.

### Resultado
O módulo continua ensinando produtividade como transformação de informação em trabalho verificável, mas agora o aluno sabe exatamente quando agir e o que conferir.

---

## Módulo 5 — IA e Programação

### Fio condutor vigente
O laboratório escolar empresta notebooks, câmeras e kits Arduino. O aluno herda um programa Python simples e o evolui progressivamente.

### Progressão vigente
1. executar e compreender o programa original;
2. usar IA para explicar antes de modificar;
3. transformar pedido em requisitos e casos esperados;
4. registrar testes antes do novo código;
5. acrescentar responsável e devolução;
6. investigar um bug proposital de estado;
7. corrigir com evidência;
8. introduzir persistência JSON;
9. verificar uma API sugerida incorretamente;
10. separar regras para torná-las testáveis;
11. usar ambiente virtual e pytest;
12. diagnosticar dependência ausente em outro ambiente;
13. proteger dados pessoais;
14. revisar sem editar automaticamente;
15. trabalhar com agente conectado ao repositório;
16. implementar reserva com requisitos, diff e testes;
17. transferir o método para outro código.

### Problemas encontrados na auditoria de 12/09
- a versão anterior da aula não distinguia adequadamente leitura, execução e código temporário; isso já havia sido corrigido antes desta auditoria geral;
- os comandos de ativação do ambiente virtual estavam em um único bloco, embora cada sistema use apenas um deles;
- a aula criava `.venv` e um JSON que pode conter nomes e depois conectava o projeto a Git/agente sem fechar a lacuna de versionamento;
- faltava explicitar que a parte de agente pressupõe repositório Git e conhecimento mínimo de branch;
- o diagnóstico de ambiente citava Python 3.12 sem que a versão fosse necessária ao conceito;
- faltava passagem direta para IA, Ética e Sociedade.

### Intervenções
- comandos de ativação são separados por PowerShell, cmd e Linux/macOS;
- antes do agente, o aluno passa a proteger `.venv`, caches e `dados/equipamentos.json` em `.gitignore` e conferir `git status`;
- a aula alerta que `.gitignore` não remove arquivo já versionado nem apaga histórico;
- o uso de agente agora traz pré-requisito explícito de Git ou alternativa de demonstração guiada;
- removida dependência pedagógica de uma versão fixa de Python no exemplo de ambiente;
- mantido o botão Copiar seletivo para código, comandos e prompts realmente utilizados;
- acrescentada navegação direta para o Módulo 6.

### Resultado
O fio condutor atual é coerente do primeiro `app.py` ao agente de código: **entender → especificar → alterar pouco → investigar → testar → controlar**.

---

## Módulo 6 — IA, Ética e Sociedade

### Fio condutor preservado
Uma escola recebe 60 inscrições para 10 vagas. O caso é usado para discutir finalidade, critérios, dados, impacto, revisão e contestação.

### Problema encontrado na auditoria de 12/09
A narrativa estava forte, mas havia risco de o aluno interpretar perguntas reflexivas como instruções para enviar dados de seleção à IA. O laboratório final também não marcava cada ação com a mesma clareza operacional alcançada no Módulo 5.

### Intervenções
- incluída uma orientação inicial: tópicos 1–12 são **LEIA E DECIDA**; não existe obrigação de abrir uma IA;
- explicitado que inscrições, notas, faltas e observações do caso são fictícias;
- proibido o uso de fichas, nomes, notas, telefones ou observações reais na atividade;
- laboratório A–F passou a usar **FAÇA AGORA** e **PARE E CONFIRA**;
- desafio final reforça não expor dados pessoais reais;
- o Panorama 2026 ganhou acesso direto após o fechamento da trilha.

### Resultado
Ética permanece como decisão prática, não como moralismo abstrato, mas agora a própria atividade respeita o princípio de minimização de dados que ensina.

---

## Regra transversal de interface consolidada

A auditoria geral fixou esta semântica para a trilha:

- **Copiar** = existe conteúdo que o aluno deve levar para outra ferramenta/editor/terminal;
- **várias IAs** = comparar respostas entre ferramentas é objetivo explícito do experimento;
- **uma atividade comum** = o aluno usa uma ferramenta disponível com a capacidade necessária, sem catálogo repetitivo de marcas;
- **sem botão** = conteúdo para ler, analisar, prever ou responder por conta própria.

Essa regra evita que a interface ensine uma ação diferente da intenção pedagógica.

---

## Resultado da revisão 4–6

Os três módulos permanecem tecnicamente ricos e agora compartilham uma regra operacional comum:

> o aluno deve saber o que fazer agora, por que está fazendo, o que espera observar e qual evidência autoriza a próxima etapa.
