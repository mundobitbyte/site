# Informática e Produtividade — Mapa e critérios MbB

## Status deste documento

Este arquivo é a fonte de verdade do planejamento da área **Informática e Produtividade** do Mundo bit Byte.

Antes de qualquer nova implementação:

1. consultar novamente a `main` e registrar o SHA encontrado;
2. ler este mapa e inspecionar o que já está publicado;
3. preservar conteúdos aprovados e alterar somente as fontes canônicas;
4. aplicar revisão técnica, pedagógica e pelo olhar do iniciante durante o desenvolvimento;
5. parar no limite da fase autorizada.

Estado inicial verificado em 8 de setembro de 2026: a `main` estava em `d29bacd63fe1f54c719210a5aa06236323da9110`.

Estado após a conclusão da área: os **Módulos 1 a 5** e o **Projeto Integrador 99** estão implementados e disponíveis no portal.

Revisão pedagógica de 11 de setembro de 2026, realizada na branch `piloto-pedagogico-informatica-produtividade`: a área foi lapidada pelo Modo MbB para fortalecer a condução do iniciante, reduzir burocracia aparente, aumentar ação prática, eliminar voz de bastidores e manter coerência entre narrativa, arquivos reais e resultados observáveis. A `main` permaneceu como fonte publicada e não foi alterada durante o piloto.

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

Não repetir longamente hardware, sistema operacional, bits/bytes, teoria geral de sistemas de arquivos, redes, nuvem, autenticação ou backup.

## Infraestrutura e Sistemas

Infraestrutura instala, administra, diagnostica e recupera ambientes. Informática e Produtividade atua no nível do usuário profissional: arquivos, documentos, planilhas, apresentações, comunicação e colaboração.

## Tecnologia e Gestão

TIA analisa processos, sistemas de informação e tomada de decisão. Esta área produz e mantém os artefatos usados no trabalho.

## Dados e Banco de Dados

Planilhas serão usadas para organização, cálculo e análise de conjuntos compatíveis com essa ferramenta. Modelagem relacional, SQL, transações e administração de SGBD permanecem no módulo de Banco de Dados.

## Programação e Git/GitHub

Automação por código, macros complexas e controle de versão de software não pertencem ao núcleo desta área. O controle de versões aqui é prática de trabalho, não Git.

## Inteligência Artificial

IA pode apoiar tarefas futuras, mas não substitui a capacidade de estruturar, conferir e entregar trabalho manualmente. Fonte, decisão e validação continuam humanas.

---

# 3. Filosofia pedagógica

Sequência principal:

**Entender → Experimentar → Analisar/Diagnosticar → Aplicar**

Forma preferencial:

**situação real → necessidade → pergunta → previsão → ação → evidência → interpretação → decisão → validação → registro mínimo → consequência.**

Uma situação não pode servir apenas de abertura. Pessoas, funções, prazos, arquivos, restrições e consequências precisam alterar as decisões ao longo da aula.

## Regra central da revisão MbB

**A prática é protagonista. O registro existe para sustentar a prática, nunca para substituí-la.**

Ao terminar uma aula, alguma coisa relevante deve ter mudado:

- no projeto;
- no arquivo;
- na estrutura;
- no resultado testado;
- ou na capacidade do aluno de tomar uma decisão verificável.

Se a principal entrega da aula for apenas “preencher um formulário” quando existe uma ação real que poderia ocupar esse lugar, a aula precisa ser revista.

## Regra de investigação

Quando houver problema:

1. apresentar sintoma e impacto;
2. fornecer somente evidências disponíveis;
3. pedir hipótese ou previsão quando fizer sentido;
4. executar um teste seguro;
5. observar nova evidência;
6. concluir somente até onde ela permite;
7. guardar apenas o registro necessário para continuidade.

## Regra operacional para iniciantes

Toda execução necessária precisa informar:

- ponto de partida;
- alvo correto;
- ação exata;
- resultado esperado;
- como reconhecer divergência;
- como interromper ou voltar;
- o que realmente vale a pena registrar.

## Regra de voz editorial

O aluno vê somente:

**situação → problema → ação → resultado → interpretação → próximo passo.**

Não aparecem no conteúdo publicado:

- justificativas sobre decisões editoriais;
- comparações com versões anteriores do curso;
- frases como “decidimos reduzir”, “em vez de preencher”, “este é um novo cenário da história”;
- comentários sobre auditoria, piloto, revisão interna ou construção do material.

Quando um fato novo entra na narrativa, ele simplesmente **acontece** no contexto da Escola Horizonte.

---

# 4. Cenário contínuo e controle do projeto

A área acompanha a **Escola Horizonte**, pequena organização que prepara uma Feira de Projetos aberta às famílias.

Pessoas centrais:

- **Marina**, secretaria;
- **Paulo**, coordenação;
- **Lia**, monitora do laboratório;
- **Renato**, responsável financeiro.

Equipamentos relevantes:

- `SEC-03`;
- `COORD-02`;
- `LAB-04`;
- pasta colaborativa institucional autorizada.

## Um único arquivo de acompanhamento

O aluno mantém um único arquivo:

`CONTROLE_DA_FEIRA.txt`

Os códigos P continuam existindo como **seções curtas de localização**, e não como obrigação de produzir muitos arquivos separados.

| Seção | Conteúdo necessário |
|---|---|
| P-00 | pedido, entregas, responsáveis e pendências |
| P-01 | arquivos recebidos e divergências relevantes |
| P-02 | estrutura e padrão de nomes |
| P-03 | mudanças, versões e aprovações que precisam ser lembradas |
| P-04 | acessos relevantes e testes de permissão |
| P-05 | teste de recuperação e seu limite |
| P-10 | decisões e provas do documento |
| P-20 | estrutura, regras, fórmulas, testes e limites da planilha |
| P-30 | mensagens, fontes, ensaio e contingência da apresentação |
| P-40 | canais, decisões, tarefas, acessos e encerramento da comunicação |

O controle deve permanecer **curto e útil**. Não repetir nele tudo o que já é visível no arquivo de trabalho.

---

# 5. Progressão aprovada da área

## Módulo 1 — Organização e Trabalho Digital

Objetivo: transformar uma caixa de arquivos dispersos em um espaço compreensível, compartilhável, validado e recuperável.

00. A pasta que ninguém consegue entregar.
01. O pedido antes da ferramenta.
02. Inventariar antes de organizar.
03. Estruturar pelo fluxo do trabalho.
04. Nomes que respondem perguntas.
05. Copiar, mover, substituir ou criar versão?
06. Formato de trabalho e formato de entrega.
07. Compartilhar com a permissão necessária.
08. A pasta aparece em dois computadores. Está protegida?
99. Entrega da Feira.

## Módulo 2 — Documentos Profissionais

Objetivo: produzir documentos legíveis, estruturados, revisáveis, acessíveis e adequados ao destino.

Ferramenta principal: **LibreOffice Writer**.

Progressão: diagnóstico → finalidade/público → estrutura → estilos → página → tabela → imagem/legenda → fontes → revisão → acessibilidade → PDF/impressão → Guia do Expositor.

A seção **P-10** guarda somente decisões e provas necessárias para continuidade.

## Módulo 3 — Planilhas e Análise

Objetivo: organizar dados, calcular, validar, analisar e comunicar resultados sem esconder erros.

Ferramenta principal: **LibreOffice Calc**.

Progressão: diagnóstico → estrutura tabular → tipos → fórmulas → referências → funções → validação → filtro/classificação → resumo → gráfico → impressão/exportação → auditoria → Controle da Feira.

A seção **P-20** guarda somente regras, fórmulas-modelo, testes e limites que não podem ser inferidos pelo próprio arquivo.

## Módulo 4 — Apresentações e Comunicação Visual

Objetivo: transformar mensagem e evidências em apresentação clara, verificável, acessível e adequada ao público e ao tempo.

Ferramenta principal: **LibreOffice Impress**.

Progressão: diagnóstico → objetivo/público → seleção → roteiro → hierarquia → texto → imagens → dados/fontes → acessibilidade → ensaio → contingência → apresentação final.

A seção **P-30** guarda somente mensagem central, fontes importantes, resultado de ensaio e plano B.

## Módulo 5 — Colaboração e Comunicação Profissional

Objetivo: escolher canal, compartilhar com controle, agendar, acompanhar, decidir e encerrar sem dispersão de informação.

Ferramenta principal: **simulador local MbB**, articulado à pasta colaborativa institucional quando autorizada.

Progressão: diagnóstico → canal → mensagem → destinatários → links/permissões → agenda → tarefas → reunião/ata → coautoria → conflito → encerramento → mudança de última hora.

A seção **P-40** guarda somente decisões, tarefas, acessos e encaminhamentos que precisam sobreviver à conversa.

## 99 — Projeto Integrador

Entrega completa da Feira em 17 passos práticos: receber pedido, conferir fontes, validar versões, produzir documento/planilha/apresentação, rastrear uma informação, compartilhar, comunicar, agendar, acompanhar, revisar, exportar, testar acesso, testar recuperação, diagnosticar falha preparada, montar pacote e transferir.

A entrega usa:

- `CONTROLE_DA_FEIRA.txt`;
- arquivos-fonte preservados;
- entregas aprovadas;
- `LEIA-ME_FINAL.txt`.

Não exige uma coleção de arquivos P separados.

---

# 6. Ferramentas e neutralidade

O aprendizado é organizado por competência, não pela marca da interface.

- documentos: Writer, Word ou Google Documentos;
- planilhas: Calc, Excel ou Google Planilhas;
- apresentações: Impress, PowerPoint ou Google Apresentações;
- colaboração: serviço autorizado pela instituição.

Quando caminhos de menu divergirem:

1. definir a ação e a evidência esperada;
2. fornecer um roteiro principal explícito;
3. indicar equivalentes essenciais;
4. registrar somente quando ferramenta/versão afetar o resultado;
5. consultar documentação oficial atual antes de publicar instrução dependente de interface.

Dados das práticas são fictícios.

---

# 7. Regra visual e de interação

**Foto mostra o que existe; diagrama explica como funciona ou se relaciona.**

Interações devem pedir decisão, previsão, comparação, execução ou interpretação. Não criar botões que apenas revelam decoração.

Visuais prioritários:

- fluxo de estados;
- árvore de pastas;
- relação pessoa × necessidade × permissão;
- comparação editável × entrega;
- cadeia fonte → produção → revisão → publicação → recuperação.

---

# 8. Segurança e recuperação

Antes de mover, substituir, excluir, compartilhar ou restaurar:

- confirmar alvo e autorização;
- identificar o estado anterior;
- preservar uma fonte conhecida;
- usar dados fictícios nos laboratórios;
- validar destinatário e acesso;
- testar recuperação em cópia;
- registrar somente resultado e limite relevantes.

Sincronização, histórico, lixeira e backup são mecanismos diferentes.

---

# 9. Arquitetura canônica

- `pages/informatica-produtividade.html`
- `css/informatica-produtividade.css`
- `js/informatica-produtividade/modulo-01.js`
- `js/informatica-produtividade/modulo-02.js`
- `js/informatica-produtividade/modulo-03.js`
- `js/informatica-produtividade/modulo-04.js`
- `js/informatica-produtividade/modulo-05.js`
- `js/informatica-produtividade/projeto-integrador.js`
- `js/informatica-produtividade.js`
- `downloads/informatica-produtividade/`
- `index.html`
- `sitemap.xml`

Não criar camadas `ajuste-*` ou `correcao-*`. Corrigir sempre a fonte canônica.

---

# 10. Qualidade e validação por capítulo

Antes de publicar, verificar:

- a necessidade nasceu da situação?
- a situação altera a decisão ou é só decoração?
- existe algo real para o aluno fazer?
- a evidência vem antes da conclusão?
- o roteiro permite executar sem salto?
- o resultado esperado está observável?
- a ação possui retorno quando há risco?
- o registro é realmente necessário ou está roubando protagonismo da prática?
- a consequência cria o próximo problema?
- há qualquer conversa de bastidores/editorial visível ao aluno?
- todo arquivo, célula, nome, quantidade ou resultado citado corresponde ao material real?
- sem nomes e contexto, a aula viraria uma apostila genérica?

Validação técnica final:

- JavaScript sem erros de sintaxe;
- IDs e números de aula preservados;
- menu, anterior/próximo e retorno à área;
- downloads locais existentes;
- quizzes, simuladores e checklists;
- teclado, foco e regiões dinâmicas;
- desktop/mobile sem overflow;
- lista exata de arquivos alterados;
- `main` preservada enquanto o piloto não for aprovado.

Quando o conjunto estiver correto, sólido e seguro, considerar **bom o suficiente para avançar**.
