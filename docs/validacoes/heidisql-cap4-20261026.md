# HeidiSQL no Capítulo 4 — auditoria de 26/10/2026

## Alterações e problemas corrigidos

Trabalho retomado na branch `mbb-heidisql-capturas-originais-20261026`, inicialmente um commit à frente de `main` (`b7871ac8ddea3f5a19a2c81e4cb22e04282ab912`), sem divergência.

- O CLI agora apresenta consulta → criação condicional à ausência → conferência e seleção do banco, em blocos distintos.
- A transição explica que CLI e HeidiSQL acessam o mesmo servidor. O menu Tools → Create Database é demonstrativo; a seleção incidental de loja não integra os passos e comercio não é recriado.
- SHOW DATABASES e USE no HeidiSQL têm seus próprios botões. Cada CREATE TABLE mantém seu SQL aprovado e seu botão; SHOW TABLES de categoria fica separado da criação.
- As regras aparecem conforme sua necessidade: tipos, PK/AUTO_INCREMENT/NOT NULL/UNIQUE em categoria; combinação UNIQUE em cidade; FK/REFERENCES/NULL em fornecedor; DECIMAL/DEFAULT/CONSTRAINT/CHECK em produto; chave composta em produto_fornecedor. A explicação desta última foi enxugada para retomar conhecimentos anteriores.
- Corrigidas a legenda da primeira captura de categoria, o texto alternativo que ainda dizia “anotada” e a contradição que dizia ter retirado a imagem de DESCRIBE. O resultado visível é de produto_fornecedor. O aviso esclarece que `(MEMO)` não é tipo SQL do MySQL e orienta a leitura dos valores reais.
- Capturas pequenas mantêm escala natural; sete imagens têm ampliação pelo visualizador global, inclusive após carregamento sob demanda e troca de capítulo. A captura baixa do editor recebe marcação explícita de ampliação.
- Botões longos passaram a ocupar espaço próprio acima do código no celular, eliminando sobreposição. Âncoras do capítulo têm afastamento do menu fixo.
- Índice de pesquisa regenerado pelo gerador existente, incluindo divergências anteriores em outras unidades; não foram alterados IDs de conteúdo, progresso, favoritos ou anotações.

## Imagens e posições definitivas

Diretório: `img/bancodedados/heidisql/`. Os oito WebP são idênticos, byte a byte, aos arquivos do ZIP fornecido; nomes preservados e nenhum pixel editado.

| Arquivo | Posição |
| --- | --- |
| original-conexao-inicial.webp | HeidiSQL, etapa 1: conexão |
| original-criar-banco-menu.webp | Etapa 2: demonstração Tools → Create Database |
| original-show-databases.webp | Etapa 3: consulta dos bancos |
| original-editor-run-clear.webp | Etapa 4: executar e limpar o editor |
| original-create-table-categoria.webp | Primeira tabela: comando de criação |
| original-resultado-show-tables-categoria.webp | Após SHOW TABLES: categoria no resultado |
| original-describe-estrutura.webp | Após criar as cinco tabelas: conferência das estruturas |
| original-script-varias-tabelas.webp | Armazenada; sem referência no percurso principal |

## Testes reais

- MySQL **8.0.46**, instância local descartável, sem conexão com produção. Cinco CREATE TABLE executados na ordem categoria, cidade, fornecedor, produto, produto_fornecedor. SHOW TABLES e DESCRIBE conferidos; INSERTs aprovados executados: **26 categorias, 0 cidades, 25 fornecedores, 60 produtos e 60 vínculos**.
- Rejeições reais esperadas: nome duplicado (UNIQUE), nome NULL (NOT NULL), categoria inexistente (FK), preço negativo (CHECK) e par duplicado (PK composta). DEFAULT gerou quantidade e estoque mínimo zero. Registro temporário e banco de teste removidos; instância usada no teste encerrada.
- Chrome Headless **156**, Playwright: larguras **1440, 390, 360 e 320 px**. Sete imagens carregadas e sete botões Ampliar por largura; abertura/fechamento do visualizador; **35 botões Copiar por largura, 140 cópias**, comparadas com o texto integral de cada bloco. Botões sem sobreposição ao SQL e dentro dos respectivos blocos.
- Navegação pelas 12 opções (Início, capítulos 1–10 e 99 Exercícios), abertura direta por âncora e nenhuma exceção JavaScript. Capítulo 4 sem overflow horizontal da página ou do main nas quatro larguras. Capturas de desktop/celular e do visualizador inspecionadas visualmente.
- `node --test meu-mbb/*.test.cjs`: **29/29**.
- `node meu-mbb/atualizar-pesquisa.cjs --check`, `node meu-mbb/gerar-visitas.cjs --check`, `git diff --check`: passaram.
- Testes existentes `tools/visualizador-piloto/smoke.mjs` e `regra-mbb-global.mjs`: passaram em Chromium, com apenas os caminhos do executável e da dependência adaptados no ambiente temporário. A varredura global abrangeu 18 páginas de SDI e 18 de QTS.

## Verificações estáticas e preservação

Sete referências de imagem válidas, IDs únicos, destinos aria-labelledby existentes. Os cinco CREATEs e INSERTs aprovados foram preservados. Os outros onze módulos da página permanecem iguais à main de partida. Scripts globais, configuração Firebase e lógica de gravação do Meu MbB não foram modificados.

Fonte oficial consultada: [downloads do HeidiSQL](https://www.heidisql.com/download.php), versão estável Windows **12.22**, publicada em **25/10/2026**; [documentação do editor](https://www.heidisql.com/help.php#sql). Capturas antigas de 3.2/revisão 1129 continuam identificadas como tal.

## Limites e pendências

Não foi feito login real nem gravação de dados pessoais no Firebase. Os testes de pesquisa/Meu MbB passaram, mas o carregamento externo do SDK Firebase foi bloqueado no navegador de teste; persistência autenticada não foi validada ponta a ponta nesta execução.

Há tabelas largas com rolagem interna já presentes em outros capítulos (sobretudo 3 e 9), sem overflow global da página e fora da alteração do HeidiSQL. Não houve reescrita desses capítulos.

Não há falha pendente identificada no percurso HeidiSQL. O PR registra as verificações remotas e o commit incorporado; a publicação usa o fluxo GitHub Pages existente. Resultados estruturados: [heidisql-cap4-20261026.json](heidisql-cap4-20261026.json).
