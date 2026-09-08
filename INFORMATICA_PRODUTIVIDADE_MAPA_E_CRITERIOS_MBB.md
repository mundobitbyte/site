# Informática e Produtividade — Mapa e critérios MbB

## Status deste documento

Este arquivo é a fonte de verdade do planejamento da área **Informática e Produtividade** do Mundo bit Byte.

Antes de qualquer nova implementação:

1. consultar novamente a `main` e registrar o SHA encontrado;
2. ler este mapa e inspecionar o que já está publicado;
3. preservar conteúdos aprovados e alterar somente as fontes canônicas;
4. aplicar revisão técnica, pedagógica e pelo olhar do iniciante durante o desenvolvimento;
5. parar no limite da fase autorizada.

Estado inicial verificado em 8 de setembro de 2026: a `main` estava em `d29bacd63fe1f54c719210a5aa06236323da9110`. Existia somente um cartão desativado na página inicial. Não havia página, CSS, JavaScript, mapa, conteúdo aprovado ou branch específica da área.

Estado após a primeira implementação: fundação da área e **Módulo 1 — Organização e Trabalho Digital** implementados. Os módulos 2 a 5 e o Projeto Integrador permanecem planejados, sem conteúdo superficial de preenchimento.

Estado após a conclusão da área: os **Módulos 1 a 5** e o **Projeto Integrador 99** estão implementados e disponíveis no portal. O Módulo 1 permaneceu preservado; a ampliação ocorreu em fontes canônicas próprias para cada novo módulo, com controlador e estilo compartilhados.

---

# 1. Objetivo da área

Transformar conhecimentos básicos de informática em capacidade de realizar trabalho digital com organização, qualidade, segurança, rastreabilidade e possibilidade de recuperação.

**Fundamentos da Informática = compreender como funciona.**

**Informática e Produtividade = organizar informações, produzir entregas, colaborar, conferir resultados e reduzir retrabalho.**

Produtividade não será tratada como fazer tudo mais rápido. Neste percurso, ser produtivo significa:

- compreender o pedido antes de escolher a ferramenta;
- localizar a fonte correta;
- produzir com critérios claros;
- evitar versões conflitantes e exposição indevida;
- revisar antes de entregar;
- permitir que outra pessoa continue o trabalho;
- recuperar-se de erro, perda ou alteração inadequada.

---

# 2. Fronteiras com as outras áreas

## Fundamentos da Informática

Fundamentos já explica arquivos, extensões, diretórios, caminhos, nuvem, sincronização, backup, usuários, permissões e segurança. Esta área faz apenas retomadas curtas e usa esses conceitos em fluxos reais de trabalho.

Não repetir longamente:

- o que é hardware ou sistema operacional;
- como bits e bytes representam dados;
- teoria geral de arquivos e sistemas de arquivos;
- conceitos de rede, nuvem, autenticação ou backup.

## Infraestrutura e Sistemas

Infraestrutura instala, administra, diagnostica e recupera ambientes. Informática e Produtividade atua no nível do usuário profissional: arquivos, documentos, planilhas, apresentações, comunicação e colaboração.

Não ensinar aqui administração de contas, políticas organizacionais, servidor de arquivos, permissões de sistema, implantação de software ou manutenção de equipamentos.

## Tecnologia e Gestão

TIA analisa processos, sistemas de informação e tomada de decisão. Esta área produz e mantém os artefatos usados no trabalho: documento, planilha, apresentação, agenda, mensagem, registro e pacote de entrega.

## Dados e Banco de Dados

Planilhas serão usadas para organização, cálculo e análise de conjuntos compatíveis com essa ferramenta. Modelagem relacional, SQL, transações e administração de SGBD permanecem no módulo de Banco de Dados.

## Programação e Git/GitHub

Automação por código, macros complexas e controle de versão de software não pertencem ao núcleo desta área. O controle de versões de documentos será abordado como prática de trabalho e colaboração, sem transformar o módulo em Git.

## Inteligência Artificial

IA pode apoiar tarefas futuras, mas não substitui a capacidade de estruturar, conferir e entregar trabalho manualmente. **IA e Produtividade** será ponte posterior. Neste módulo, a fonte, a decisão e a validação continuam humanas.

---

# 3. Filosofia pedagógica

Sequência principal:

**Entender → Experimentar → Analisar/Diagnosticar → Aplicar**

Forma preferencial das práticas:

**situação real → necessidade → pergunta → previsão → ação → evidência → interpretação → decisão → validação → registro → consequência.**

Uma situação não pode servir apenas de abertura. Pessoas, funções, prazos, arquivos, restrições e consequências precisam alterar as decisões ao longo da aula.

## Regra de investigação

Quando houver problema:

1. apresentar sintoma e impacto;
2. fornecer apenas o estado e as evidências disponíveis;
3. pedir hipótese ou previsão;
4. executar um próximo teste seguro;
5. mostrar ou colher nova evidência;
6. concluir somente até onde a evidência permite;
7. registrar o que foi decidido e o que continua pendente.

## Regra operacional para iniciantes

Toda execução necessária precisa informar:

- pré-requisito e ponto de partida;
- alvo correto;
- ação exata;
- resultado esperado;
- como interpretar divergências;
- como interromper ou voltar;
- qual registro guardar.

Documentação oficial confirma regras e interfaces, mas não substitui o roteiro didático.

---

# 4. Cenário contínuo e registros

A área acompanha a **Escola Horizonte**, pequena organização que prepara uma Feira de Projetos aberta às famílias. O projeto gera documentos, inscrições, orçamentos, apresentações, comunicações e decisões reais.

Pessoas centrais:

- **Marina**, secretaria: recebe inscrições e documentos;
- **Paulo**, coordenação: aprova conteúdo, prazos e publicação;
- **Lia**, monitora do laboratório: organiza materiais e apoia as equipes;
- **Renato**, responsável financeiro: confere orçamentos e pagamentos.

Equipamentos e espaços aparecem quando alteram a decisão:

- `SEC-03`: estação da secretaria;
- `COORD-02`: notebook da coordenação;
- `LAB-04`: estação compartilhada do laboratório;
- pasta colaborativa autorizada da feira.

Os registros cumulativos usam o prefixo `P` de produtividade:

| Registro | Conteúdo | Reuso |
|---|---|---|
| P-00 | pedido, entregáveis, responsáveis, prazo e critérios | todos os módulos |
| P-01 | inventário de arquivos e lacunas | organização e documentos |
| P-02 | estrutura de pastas e padrão de nomes | todos os módulos |
| P-03 | controle de versões e aprovações | documentos, planilhas e apresentações |
| P-04 | matriz de compartilhamento e permissões | colaboração |
| P-05 | teste de recuperação e limites | projeto integrador |
| P-10 | modelo e checklist de documento | Módulo 2 e projeto final |
| P-20 | dicionário e validações da planilha | Módulo 3 e projeto final |
| P-30 | roteiro, fontes e ensaio da apresentação | Módulo 4 e projeto final |
| P-40 | plano de comunicação, agenda e acompanhamento | Módulo 5 e projeto final |

Chamados e solicitações começam e terminam. A continuidade está na organização, nas pessoas, no projeto e nos registros — não em obrigar o mesmo incidente a explicar todo o curso.

---

# 5. Progressão aprovada da área

## Módulo 1 — Organização e Trabalho Digital

Objetivo: transformar uma caixa de arquivos dispersos em um espaço de trabalho compreensível, compartilhável, validado e recuperável.

00. **A pasta que ninguém consegue entregar** — diagnóstico inicial e pacote de trabalho.
01. **O pedido antes da ferramenta** — entregáveis, responsáveis, prazo, critérios e P-00.
02. **Inventariar antes de organizar** — nome, tipo, tamanho, data, origem, conteúdo e P-01.
03. **Estruturar pelo fluxo do trabalho** — entrada, trabalho, revisão, publicação e arquivo.
04. **Nomes que respondem perguntas** — padrão portátil, data, assunto, estado e versão.
05. **Copiar, mover, substituir ou criar versão?** — decisão, risco, estado anterior e P-03.
06. **Formato de trabalho e formato de entrega** — editável, intercâmbio, visualização e exportação.
07. **Compartilhar com a permissão necessária** — destinatário, visualizador, comentarista, editor e herança.
08. **A pasta aparece em dois computadores. Está protegida?** — sincronização, histórico, lixeira, cópia independente e restauração testada.
99. **Entrega da Feira** — organização, validação, pacote de entrega e passagem para outra pessoa.

## Módulo 2 — Documentos Profissionais

Objetivo: produzir documentos legíveis, estruturados, revisáveis, acessíveis e adequados ao destino.

Ferramenta principal: **LibreOffice Writer**. Progressão implementada: diagnóstico → finalidade/público/critérios → estrutura → estilos → página → tabelas → imagens/legendas → referências → revisão/comentários → acessibilidade → PDF/impressão/entrega → desafio do Guia do Expositor. O registro cumulativo é P-10.

## Módulo 3 — Planilhas e Análise

Objetivo: organizar dados, calcular, validar, analisar e comunicar resultados sem esconder erros ou transformar planilha em banco de dados improvisado.

Ferramenta principal: **LibreOffice Calc**. Progressão implementada: diagnóstico → estrutura tabular → tipos → fórmulas → referências relativas/absolutas → funções essenciais → validação → classificação/filtro → resumo → gráficos → impressão/exportação → auditoria de erros → desafio do Controle da Feira. O registro cumulativo é P-20.

## Módulo 4 — Apresentações e Comunicação Visual

Objetivo: transformar uma mensagem e suas evidências em apresentação clara, verificável, acessível e adequada ao público e ao tempo.

Ferramenta principal: **LibreOffice Impress**. Progressão implementada: diagnóstico → objetivo/público → seleção → roteiro → hierarquia → texto → imagens → dados/fontes → acessibilidade → notas/ensaio → exportação/contingência → apresentação final. O registro cumulativo é P-30.

## Módulo 5 — Colaboração e Comunicação Profissional

Objetivo: escolher canal, registrar decisões, compartilhar com controle, agendar, acompanhar e encerrar tarefas sem dispersão de informação.

Ferramenta principal: **simulador local MbB**, articulado à pasta colaborativa institucional autorizada quando disponível. Progressão implementada: diagnóstico → canal → mensagem/e-mail → destinatários/CC/Cco → anexos/links/permissões → agenda → tarefas → reunião/ata → coautoria → conflitos/histórico → privacidade/encerramento → desafio de mudança. O registro cumulativo é P-40.

## 99 — Projeto Integrador

Implementado como entrega completa da Feira de Projetos em 17 etapas: receber pedido, organizar fontes, validar versões, produzir documento/planilha/apresentação, registrar fontes, compartilhar, comunicar, agendar, acompanhar, revisar, exportar, testar permissões, testar recuperação, corrigir uma falha preparada, montar o pacote e transferir o trabalho. Reutiliza P-00 a P-05, P-10, P-20, P-30 e P-40.

---

# 6. Ferramentas e neutralidade

O aprendizado é organizado por competência, não pela marca da interface.

- documentos: Microsoft Word, LibreOffice Writer ou Google Documentos podem executar a prática quando atenderem aos requisitos;
- planilhas: Microsoft Excel, LibreOffice Calc ou Google Planilhas;
- apresentações: Microsoft PowerPoint, LibreOffice Impress ou Google Apresentações;
- colaboração: serviço autorizado pela instituição, com contas e permissões adequadas.

Quando caminhos de menu divergirem, o material deve:

1. definir a ação e a evidência esperada;
2. fornecer um roteiro principal explícito;
3. indicar equivalentes essenciais, sem tentar documentar todas as versões;
4. registrar a ferramenta e a versão realmente usadas pelo aluno;
5. consultar documentação oficial atual antes de publicar uma instrução dependente de interface.

Dados das práticas devem ser fictícios. Nenhum exercício exige enviar dados reais de estudantes, senhas, documentos pessoais ou informação confidencial para serviço externo.

---

# 7. Regra visual e de interação

**Foto mostra o que existe; diagrama explica como funciona ou se relaciona.**

Nesta área, representações de interface são úteis apenas quando localizar um controle faz parte da aprendizagem. Elas devem ser identificadas como didáticas quando não forem capturas reais.

Visuais prioritários:

- fluxo de estados de um arquivo;
- árvore de pastas e relações de herança;
- matriz pessoa × permissão × necessidade;
- comparação entre editável e entrega;
- cadeia fonte → produção → revisão → publicação → recuperação.

Interações devem pedir decisão, previsão, comparação ou interpretação. Não criar botões que apenas animam conteúdo decorativo.

---

# 8. Segurança e recuperação

Antes de mover, substituir, excluir, compartilhar ou restaurar:

- confirmar o alvo e a autorização;
- identificar o estado anterior;
- preservar uma fonte conhecida quando a ação puder sobrescrever;
- usar somente dados fictícios nos laboratórios;
- validar destinatário e nível de acesso;
- testar recuperação em cópia ou área controlada;
- registrar resultado e limite do teste.

Sincronização, histórico de versões, lixeira e backup são mecanismos diferentes. O material não promete recuperação sem teste.

---

# 9. Arquitetura canônica

- `pages/informatica-produtividade.html`: estrutura do portal e carregamento;
- `css/informatica-produtividade.css`: apresentação e responsividade;
- `js/informatica-produtividade/modulo-01.js`: conteúdo canônico do Módulo 1;
- `js/informatica-produtividade/modulo-02.js`: conteúdo canônico de Documentos Profissionais;
- `js/informatica-produtividade/modulo-03.js`: conteúdo canônico de Planilhas e Análise;
- `js/informatica-produtividade/modulo-04.js`: conteúdo canônico de Apresentações e Comunicação Visual;
- `js/informatica-produtividade/modulo-05.js`: conteúdo canônico de Colaboração e Comunicação Profissional;
- `js/informatica-produtividade/projeto-integrador.js`: missão final da área;
- `js/informatica-produtividade.js`: navegação e interações compartilhadas;
- `downloads/informatica-produtividade/caixa-entrada-feira.zip`: pacote fictício da prática;
- `downloads/informatica-produtividade/modulo-02/`: minuta ODT, mapa didático e fontes do Guia do Expositor;
- `downloads/informatica-produtividade/modulo-03/`: planilha ODS com dados e falhas didáticas da Feira;
- `downloads/informatica-produtividade/modulo-04/`: apresentação ODP para diagnóstico;
- `downloads/informatica-produtividade/modulo-05/`: comunicações fictícias para investigação;
- `downloads/informatica-produtividade/projeto-integrador/`: pacote final com fontes e falhas preparadas;
- `index.html`: único ponto de entrada da área na home;
- `sitemap.xml`: URL pública da área.

Não criar arquivos `ajuste-*`, `correcao-*` ou camadas posteriores para sobrescrever conteúdo. Corrigir sempre a fonte canônica.

---

# 10. Qualidade e validação por capítulo

Antes de publicar, verificar:

- a necessidade nasceu da situação?
- os requisitos alteram a decisão?
- o aluno prevê antes de ver a leitura comentada?
- a evidência vem antes da conclusão?
- o roteiro permite executar sem salto?
- o resultado esperado e a divergência estão explicados?
- a ação possui retorno quando há risco?
- o registro será reutilizado?
- a consequência cria o próximo passo?
- sem nomes e contexto, a aula viraria apostila genérica?

Validação técnica final:

- HTML e JavaScript sem erros de sintaxe;
- hashes, menu, navegação anterior/próximo e retorno à área;
- links e downloads locais existentes;
- quizzes, revelações, checklists e cópia de modelos;
- teclado, foco, rótulos e regiões dinâmicas;
- desktop, mobile, tabelas e ausência de overflow da página;
- regressão da home e dos módulos existentes;
- lista exata de arquivos alterados.

Quando o conjunto estiver correto, sólido e seguro, considerar **bom o suficiente para avançar**.
