# brModelo 2.0 — conversão do conceitual para o lógico

Base: main `f9a5eaf0f4edb6fe1ec8c4d9c5fbc16697e4af2f`, com os PRs #221, #223 e #224. Continuação na mesma branch do PR de sincronização.

## Inclusão solicitada

No tópico 3, após explicar a passagem de entidades/atributos para tabelas/campos e antes de aprofundar PK/FK, foi incluído o **bloco 1.1 — Gerando o esquema lógico no brModelo 2.0**, com destino `bd-brmodelo-gerar-logico`.

O procedimento orienta salvar o conceitual, acessar **Esquema Conceitual → Gerar Esquema Lógico**, conferir as escolhas e o resultado e salvar o lógico em arquivo separado. A captura original enviada pelo professor foi convertida para WebP sem perdas: 338×338 px, 6.220 bytes e igualdade integral dos pixels RGBA com o PNG fornecido. Nenhuma seta, marcação ou interface foi reconstruída.

As práticas seguintes agora usam o esquema gerado, sem mandar criar novamente Categoria, Produto, Cidade, Fornecedor ou a associativa. A tabela gerada para FORNECE deve ser ajustada ao nome produto_fornecedor e ter sua chave composta explicitamente conferida/definida.

## Defeito encontrado na conferência da conversão

A revisão anterior tinha declarado uma leitura de participação junto à própria entidade. Essa convenção não correspondia à posição usada pelo brModelo 2.0 e poderia fazer sua conversão colocar a FK no lado errado.

Foi consultado o [código-fonte Delphi 7 da versão 2.0, disponibilizado pelo autor](https://www.sis4.com/antigo.html), arquivo [FonteV2.zip](https://www.sis4.com/FonteV2.zip), SHA-256 `6766a4d0c9971f7b11a3cf28a39dbcea87022c61bcf45ce21c3baf907f4da0ce`.

Em `Fonte/mer.pas`, `TLigacao.PosicioneCardinalidade` posiciona o par junto à entidade; `TModelo.ExportarRelacoes` ordena as cardinalidades, importa a chave da tabela de menor cardinalidade para a de maior e oferece escolhas para relações opcionais. A análise é estática: o executável Windows não foi executado.

Os rótulos e a explicação foram alinhados à ferramenta:

| Relação | Marcação junto à primeira entidade | Marcação junto à segunda entidade |
| --- | --- | --- |
| Categoria–Produto | Categoria (1,1): uma categoria por produto | Produto (0,n): zero a vários produtos por categoria |
| Fornecedor–Cidade | Fornecedor (0,n): zero a vários fornecedores por cidade | Cidade (0,1): zero ou uma cidade informada por fornecedor |
| Funcionário–Crachá ativo | Funcionário (1,1): um funcionário por crachá | Crachá (0,1): zero ou um crachá ativo por funcionário |

O N:N permanece (0,n) dos dois lados. Foram corrigidos três recortes e o DER conceitual completo, sem mudar regras do comércio, campos ou SQL. As URLs desses SVGs receberam versão para evitar a combinação de texto novo com imagem antiga em cache.

O procedimento também explica a escolha de manter Cidade e Fornecedor com a FK na tabela Fornecedor; no exercício separado 1:1, manter Funcionário e Crachá ativo em duas tabelas. A tabela associativa precisa da PK composta, além das FKs: o código da versão 2 não garante essa PK na importação das duas referências.

## Preservação e testes

- Cartão dos PRs #223/#224 preservado integralmente, incluindo download, vídeo e orientações. Nenhum bloco SQL foi alterado.
- Os títulos e destinos antigos continuam presentes; o novo bloco ganhou destino próprio e foi incluído na pesquisa e no índice de visitas.
- Os 12 DERs permanecem; foi acrescentada uma captura original. CSS e gancho de carregamento sob demanda são específicos de Banco de Dados; núcleo global do visualizador preservado.
- 29 testes Node aprovados; checks de pesquisa/visitas, sintaxe JS e diff aprovados.
- Chrome 156 em 1440, 390, 360 e 320 px: 12 DERs carregados e ampliados, retorno de foco, cinco âncoras, navegação nos 12 módulos e 192 cópias SQL corretas. Sem overflow global ou erro de página. Rótulos dos 12 SVGs dentro do viewBox.
- Nas mesmas quatro larguras: cinco passos da nova seção, captura carregada, ampliação de 100% para 125%, Escape/retorno de foco e pesquisa “Gerar Esquema Lógico” abrindo o novo destino.
- Capturas de desktop e celular examinadas, incluindo menu original e cardinalidades corrigidas. A validação visual existente passa a conferir a captura de conversão, além dos DERs.
- Catálogo regenerado a partir da main atual, preservando as identidades e acompanhando também o texto de Arduino que já estava publicado.

Resultados em `brmodelo2-conversao-logica-20261028.json`. Celular foi emulado por viewport. Não houve nova execução de MySQL nem teste interativo do brModelo; os comandos SQL aprovados permanecem intactos. As opções de conversão foram conferidas na captura fornecida e no código oficial da versão 2.0, sem inventar telas intermediárias.
