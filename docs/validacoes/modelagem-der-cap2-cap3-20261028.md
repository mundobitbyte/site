# Tópicos 2 e 3 — DERs, continuidade com SQL e revisão MbB

Data: 28/10/2026. Base: main `da5cd15ab7592ba0176d47d9c0aa48139dd66d41`.

## Alterações e problemas corrigidos

- O exemplo central agora acompanha o comércio do tópico 4: Categoria, Produto, Fornecedor e Cidade no conceitual; as cinco tabelas correspondentes no lógico.
- Removida a regra intermediária de um fornecedor por produto. O aluno aprende o N:N real por etapas, sem trocar a regra de negócio ao passar de capítulo.
- Nomes sincronizados: descricao, preco, qtde e estoque_minimo. O resumo lógico agora contém os 19 campos do CREATE aprovado.
- Identificador conceitual explicado antes de PK/FK. Associativa e atributos do vínculo aparecem depois de conhecer relacionamento e cardinalidade.
- Mínimo/máximo têm uma convenção declarada e leitura nos dois sentidos. Categoria pode estar sem produtos; fornecedor pode ter cidade desconhecida; produto e fornecedor podem existir sem associação.
- Exercício 1:1 de funcionário/crachá ativo é separado, com a conversão por FK obrigatória e UNIQUE. Nenhuma tabela foi acrescentada ao comércio.
- Custo e prazo ficam no fornecimento e depois na associativa. O exemplo de prazo usa inteiros, com a unidade explicada no texto.
- Mantidas as explicações úteis de normalização; explicitados os pré-requisitos de 2FN e 3FN, chaves candidatas e a diferença entre repetir uma referência e repetir fatos descritivos.
- Exemplos simulados de informática foram identificados como tais. Duas linhas da base didática aprovada mostram ocorrência → registro sem prometer uma carga diferente da usada em SQL.
- Adicionadas práticas de construção, salvamento e conferência no brModelo, no ponto de uso. Os desenhos são SVGs didáticos, não interfaces reconstruídas nem capturas atribuídas ao programa.
- Removidos fluxos redundantes ou que poderiam ser confundidos com DERs. Todos os títulos h2 foram preservados, mantendo suas âncoras e identidade de conteúdo.

## Posições definitivas das figuras

Pasta: `img/bancodedados/modelagem/`. SVG mantém nitidez na ampliação; as capturas originais do HeidiSQL em WebP não foram modificadas.

| Arquivo | Posição | Função |
| --- | --- | --- |
| conceitual-atributos.svg | 2, bloco 3 | Entidades, atributos e identificadores antes das ligações. |
| conceitual-relacionamento.svg | 2, bloco 4 | Entidades ligadas pelo losango, antes de preencher cardinalidades. |
| conceitual-categoria-produto.svg | 2, bloco 5, 1:N | Categoria 0..N produtos; produto com uma categoria. |
| conceitual-um-para-um.svg | 2, bloco 5, 1:1 | Exercício separado, com funcionário 0..1 e crachá 1..1. |
| conceitual-produto-fornecedor.svg | 2, bloco 5, N:N | Fornecimento e os atributos custo/prazo do vínculo. |
| conceitual-cidade-fornecedor.svg | 2, bloco 5, participação opcional | Cidade do fornecedor pode estar sem informação. |
| conceitual-comercio.svg | 2, bloco 6.1 | Síntese de elementos já trabalhados. |
| logico-categoria-produto.svg | 3, bloco 2, prática 1:N | PK e FK obrigatória, com tipos planejados para MySQL. |
| logico-cidade-fornecedor.svg | 3, bloco 2, vínculo opcional | FK que aceita NULL. |
| logico-um-para-um.svg | 3, bloco 2, conversão complementar | FK com NOT NULL e UNIQUE, fora do comércio. |
| logico-produto-fornecedor.svg | 3, bloco 3 | Duas FKs, PK composta e atributos da associativa. |
| logico-comercio.svg | 3, bloco 8 | Cinco tabelas, 19 campos e quatro FKs, antes da implementação SQL. |

## Revisão circular e visual

O texto foi relido após a inserção dos desenhos: foram eliminados um subtítulo que ficaria sem conteúdo, repetições de avisos sobre simulações e a apresentação de termos antes de sua explicação. Tipos MySQL, NOT NULL e chave candidata passam a ter explicação antes do uso na prática correspondente.

O primeiro teste encontrou figuras sem botão de ampliação na abertura direta do capítulo. A marcação passou a usar a identificação automática do visualizador global. O gancho existente de imagens carregadas sob demanda em bancodedados.js foi estendido aos DERs; o visualizador compartilhado não foi alterado. O teste de foco e fechamento confirmou o retorno ao botão correto.

A inspeção das capturas de celular mostrou margem interna excessiva em recortes. Eles foram compactados, com fontes maiores, sem eliminar informações do modelo. Os modelos completos continuam sendo sínteses para ampliar. As legendas e explicações acompanham os desenhos na leitura normal.

## Testes executados

- `node --test meu-mbb/*.test.cjs`: 29 testes aprovados.
- `node meu-mbb/atualizar-pesquisa.cjs --check`, `node meu-mbb/gerar-visitas.cjs --check`, `node --check js/bancodedados.js` e `git diff --check`: aprovados.
- Chrome Headless 156: 1440×900, 390×900, 360×900 e 320×900. Percorridos os 21 títulos dos dois capítulos em cada largura; sem overflow horizontal global ou erro JavaScript de página.
- Em cada largura: 12 imagens carregadas, 12 aberturas do visualizador, ampliação de 100% para 125%, Escape e retorno de foco. Total: 48 verificações de figuras/zoom.
- Em cada largura: quatro âncoras antigas abertas diretamente e os 12 módulos navegados. Âncoras verificadas abaixo do menu no celular.
- Os 48 botões Copiar do tópico 4 foram acionados em cada largura. As 192 leituras reais da área de transferência corresponderam ao código do respectivo bloco.
- Os 12 SVGs foram abertos em tamanho intrínseco: nenhum rótulo fora do viewBox, script ou recurso externo. As 12 figuras foram examinadas nas capturas de desktop e celular.
- Pesquisa pública por brModelo encontrou o conteúdo e abriu a âncora do capítulo, sem login.
- Meu MbB: favorito, conclusão, adicionar/editar/apagar anotação e visita testados nos dois capítulos, em 1440 e 390 px, usando conta simulada em memória e bloqueio de rede externa. Nenhuma gravação no Firebase real.
- Os 11 conjuntos de capítulos do módulo 99 Exercícios foram abertos, um exercício expandido e a volta à lista conferida, nos quatro contextos dos testes de estudo.
- Testes visuais existentes `smoke.mjs` e `regra-mbb-global.mjs`: aprovados localmente. A verificação de Banco de Dados foi atualizada do antigo SVG único para os 12 desenhos. A varredura transversal passou em 18 páginas de SDI e 18 de QTS. Para executar localmente, só o caminho do Chrome e a resolução de puppeteer-core foram adaptados em cópias temporárias; a lógica dos testes foi preservada.

Resultados estruturados em `modelagem-der-cap2-cap3-20261028.json`.

## Preservação e limites

- Conferência estática: todos os blocos pre/code e todos os h2 permaneceram iguais à base. Conteúdo dos demais capítulos e exercícios preservado; somente a referência de cache do JS mudou no final da página.
- O modelo lógico foi confrontado com os cinco CREATE existentes: 19 campos/tipos, seis campos integrantes de PKs e quatro FKs. Os dados e comandos SQL aprovados não foram alterados.
- Catálogo regenerado sem mudar as identidades das unidades. A geração também atualiza o índice de Arduino com o texto já presente na main dos PRs anteriores, sem modificar os arquivos daquele módulo.
- Nenhuma execução nova de MySQL nesta alteração: não foram criados novos scripts SQL nem alterados os exemplos executáveis. O teste desta entrega confere a correspondência dos modelos com o SQL existente.
- brModelo 2.0 não foi executado neste ambiente. Não foram produzidos arquivos nativos nem simuladas capturas de sua interface. As práticas descrevem ações de modelagem sem inventar menus ou atalhos específicos.
- Celular foi avaliado por viewport em navegador, não em aparelho físico. Autenticação e persistência reais do Meu MbB não foram exercitadas.
- A validação pública após o deploy e os identificadores de PR/commit serão informados na entrega final.
