# Capítulo 4 — auditoria final do HeidiSQL, 27/10/2026

## Ponto de partida e conclusão

Revisão iniciada na main `47bf9f4f7f8d8a49a140abba8272b2a8f212841a`, que incorpora o PR #209. O resultado publicado foi aberto no navegador e comparado com a fonte. Alterações em branch isolada `auditoria-final-heidisql-cap4-20261027`.

O percurso CLI → HeidiSQL → categoria → SHOW TABLES → outras quatro tabelas → conferência foi mantido. As 77 instruções SQL aprovadas, sua ordem e seus dados foram preservados. O capítulo inteiro, até JOIN, agregações, GROUP BY, HAVING e fechamento, foi percorrido e executado.

## Problemas efetivamente encontrados e correções

| Achado | Correção |
| --- | --- |
| CSS width:auto substituía a largura de apresentação das capturas; antes do carregamento lazy, a imagem podia ficar com dimensão zero e deslocar o texto/âncora ao aparecer. | Largura CSS explícita igual à largura original em cada img, com max-width:100% e height:auto já existentes. As proporções ficam reservadas antes de carregar, sem esticar as capturas pequenas nem alterar pixels. |
| O texto de conexão não nomeava o botão New; a primeira consulta não identificava precisamente a execução e a grade. | Nomeados New/Nova, área de texto, triângulo azul e grade inferior; corrigida a frase “e cole ... e clique”. |
| O laboratório de integridade reunia acertos, duas falhas intencionais e limpeza em um único botão. Um lote interrompido por erro podia deixar a prática incompleta. | Separado em cinco passos com botões específicos: produto válido, categoria inválida, vínculo válido, fornecedor inválido e limpeza. Mesmas instruções SQL, sem reescrita. |
| UPDATE/DELETE podiam ser executados inteiros, sem o iniciante observar os SELECTs intermediários. | Orientação explícita para executar uma instrução por vez e observar preço 5 → 6 e registro presente → resultado vazio. |
| Primeiro INSERT mostrava a base longa antes de explicar colunas, VALUES, tuplas e aspas; repetir os IDs provocaria duplicidade. | Explicação curta junto à primeira necessidade e orientação de executar o cadastro uma vez. |
| CLI, % em LIKE e ON/AS no primeiro JOIN exigiam inferências do iniciante. | Explicações breves no ponto de uso, com exemplos já existentes; nenhuma nova consulta. |
| A legenda do menu acumulava a reticência do rótulo com um ponto extra. | Pontuação corrigida, preservando Tools → Create Database... e o caráter demonstrativo. |
| O fechamento era genérico e não conduzia à prática seguinte. | Retomada do banco construído, indicação de 99 Exercícios → Capítulo 4 e continuidade com o Capítulo 5. |

O aviso de versões antigas, a seleção incidental de loja, a distinção entre código e resultado de categoria e a advertência sobre `(MEMO)` já estavam corretos no PR #209 e foram preservados. Não houve reconstrução de interfaces nem introdução de imagens ilustradas.

## Posição e função definitiva das imagens

Todas em `img/bancodedados/heidisql/`, byte a byte idênticas ao ZIP original. Cada captura foi inspecionada quanto ao comando, conteúdo visível, legenda e posição.

| Arquivo | Posição | O que mostra / função |
| --- | --- | --- |
| original-conexao-inicial.webp | HeidiSQL, 1. Faça a conexão | New, Hostname/IP, usuário, senha, porta e Connect. Exemplo de acesso ao mesmo servidor usado no CLI. |
| original-criar-banco-menu.webp | 2. Outra forma de criar bancos | Tools aberto e Create Database... destacado. loja é incidental; não há instrução para selecioná-lo nem recriar comercio. |
| original-show-databases.webp | 3. Consulte os bancos existentes | SHOW DATABASES no editor, triângulo de execução, comercio na árvore e na grade Database. |
| original-editor-run-clear.webp | 4. Execute e limpe comandos | Menu de contexto sobre SHOW DATABASES, com Run, Run Selection e Clear; não representa limpeza do banco. |
| original-create-table-categoria.webp | Primeira tabela, após seu CREATE separado | CREATE TABLE categoria e SHOW TABLES no editor. A grade de conferência não aparece nesta captura; a legenda não a promete. |
| original-resultado-show-tables-categoria.webp | Após o botão separado de SHOW TABLES | categoria na coluna Tables_in_comercio. Embora CREATE ainda apareça no editor da captura, a instrução manda executar apenas a conferência. |
| original-describe-estrutura.webp | Conferência das cinco tabelas | Lista de DESCRIBEs no editor; grade visível do último, produto_fornecedor. `(MEMO)` é limitação visual da captura, não tipo SQL. O aluno confere os valores reais na própria versão. |
| original-script-varias-tabelas.webp | Somente armazenada | Sem referência no percurso principal; o aluno cria as tabelas separadamente. |

## Testes reais de navegador

Chrome Headless 156, com quatro viewports: **1440×900, 390×900, 360×900 e 320×900**. A versão inicialmente publicada também foi inspecionada em Chrome na página pública.

- Percorridos os **21 títulos h2** do capítulo em cada largura, incluindo introdução, blocos 1–19 e 6.1.
- Sete imagens carregadas, proporcionais e dentro do conteúdo; sete ampliações abertas, aumentadas e fechadas em cada largura. Capturas de desktop e celular inspecionadas.
- Bloqueio temporário das requisições de imagens confirmou dimensão reservada antes do download; depois elas foram liberadas e decodificadas normalmente.
- **39 botões Copiar × 4 larguras = 156 cópias**, comparadas com o SQL integral. Sem sobreposição ao código nem saída dos blocos.
- Capítulo 4 sem overflow horizontal da página ou do main; âncoras de categoria, produto_fornecedor e conferência final abertas sem títulos cobertos pelo menu.
- Navegação pelas 12 opções do módulo. Nos **11 conjuntos dos 99 Exercícios**, entrada, expansão de questão e retorno testados em desktop e celular.
- Pesquisa pública por HeidiSQL retornou o conteúdo e abriu diretamente o capítulo SQL, sem login.
- Nenhuma exceção JavaScript nos cenários do percurso público.

## SQL real em banco descartável

Instância local **MySQL 8.0.46** (`8.0.46-0ubuntu0.24.04.4`), sem acesso a produção. As instruções foram extraídas do HTML e executadas na ordem ensinada, com reconexão no ponto de entrada do HeidiSQL.

**77 instruções: 75 sucessos e duas rejeições esperadas por FK (erro 1452). Nenhuma falha inesperada.**

Criadas, na ordem, categoria, cidade, fornecedor, produto e produto_fornecedor. Conferidos SHOW TABLES e DESCRIBE; executados ALTER/DROP apenas da tabela de laboratório, INSERTs, SELECTs, filtros, UPDATE, DELETE, testes de integridade, JOINs, agregações, GROUP BY e HAVING.

Estado final dos dados: **26 categorias, 0 cidades, 25 fornecedores, 60 produtos e 60 vínculos**. Conteúdo integral dos registros comparado por hash antes dos laboratórios de alteração/exclusão/integridade e após a limpeza: igual nas cinco tabelas. Como já ocorria nos exemplos aprovados, inserir IDs altos de laboratório pode avançar o contador AUTO_INCREMENT; não foi prometida restauração desse contador.

Banco descartável removido e instância de teste encerrada. Os resultados de consultas e erros estão no JSON de evidências.

## Meu MbB, preservação e verificações estáticas

`node --test meu-mbb/*.test.cjs`: **29/29**. Verificações dos índices de pesquisa e visitas e `git diff --check`: passaram.

A interface real de “Meu estudo” foi exercitada em navegador com **uma conta simulada em memória**, em desktop e celular: favorito, conclusão, visita/âncora e inclusão, edição e exclusão de nota fictícia. As chamadas externas foram bloqueadas nesse cenário. **Zero gravações no Firebase real**; o teste não equivale a autenticação/persistência reais.

Os outros onze módulos HTML, incluindo 99 Exercícios, permanecem idênticos à main de partida. Imagens, JS/CSS globais, configuração Firebase, IDs de conteúdo e lógica de gravação de progresso/favoritos/anotações não foram alterados. O catálogo de pesquisa foi regenerado pelo gerador existente para acompanhar o texto.

## Pendências e limites

Não há falha relevante pendente identificada no percurso revisado. A conclusão é limitada aos cenários descritos; não significa compatibilidade garantida com todo dispositivo ou versão de HeidiSQL.

Não foram feitos login real, gravação persistente no Firebase nem instalação/execução da aplicação Windows HeidiSQL. O SQL foi executado no servidor MySQL real; os comandos de interface e as capturas foram confrontados com a aula e a [documentação oficial do HeidiSQL](https://www.heidisql.com/help.php#sql).

Tabelas largas preexistentes de outros capítulos não foram reformadas nesta tarefa. O teste de navegação garante abertura e integridade das seções preservadas, sem alegar uma nova auditoria pedagógica integral dos demais capítulos.

Evidências: [heidisql-cap4-auditoria-final-20261027.json](heidisql-cap4-auditoria-final-20261027.json). O PR desta revisão identifica a incorporação na main e as verificações remotas; a publicação usa o GitHub Pages existente.
