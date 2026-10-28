# Conversão Conceitual → Lógico — revisão operacional MbB

Base: main `97b7dbc8510c4d8a7e67319809915843efae55a2` (PR #225).

## Problemas e correção

O bloco 1.1 pedia conferir escolhas sem identificar a janela, a alternativa ou seu efeito e mandava salvar separadamente sem explicar o formato, os documentos e a operação. A revisão se limita ao conteúdo entre o título `bd-brmodelo-gerar-logico` e o bloco 2 do capítulo 3.

O aluno agora preserva o conceitual, inicia a conversão pelo menu real, entende o 1:N, escolhe a alternativa A na janela Interação e confirma em OK; confere quatro tabelas de entidades e a associativa de FORNECE, salva o documento lógico como `comercio-logico.brM`, alterna entre modelos e reabre o arquivo salvo. Três perguntas com respostas recolhidas encerram o checkpoint. O aprofundamento da chave composta permanece no bloco 3. Mantida a cidade opcional do projeto aprovado, sem inventar um ID quando desconhecida.

## Conferência técnica da versão usada no curso

Foram lidos os fontes Delphi 7 oficiais da versão 2.0: [página do autor](https://www.sis4.com/antigo.html), [FonteV2.zip](https://www.sis4.com/FonteV2.zip), SHA-256 `6766a4d0c9971f7b11a3cf28a39dbcea87022c61bcf45ce21c3baf907f4da0ce`.

- `Fonte/uApp.dfm`: menu Sistema; ações Abrir, Salvar, Salvar Como...; comando Gerar Esquema Lógico; seta de Modelos abertos.
- `Fonte/Questao.dfm`: janela Interação; grupo O que você deseja fazer?; botões OK, Ajuda e Finalizar conversão.
- `Fonte/mer.pas`, `TModelo.Questione`: prefixos A), B), C) e alternativa de aceitar as sugestões.
- `TModelo.ExportarRelacoes`: (0,1) de Cidade e (0,n) de Fornecedor oferecem adicionar chaves da menor cardinalidade à maior ou criar tabela. A primeira importa id_cidade para Fornecedor como FK. Categoria–Produto (1,1)/(0,n) é automático. FORNECE N:N origina tabela com as duas FKs; a PK composta não é automaticamente garantida.
- `TVisual.ExportarParaLogico`: gera novo TModelo sem arquivo, preservando o original. `exp_LogicoExecute` ativa o novo documento.
- `arq_SalvarExecute`: documento novo aciona o diálogo de salvamento. `arq_salvarcExecute` seleciona o filtro padrão binário e aplica `.brM`. `Fonte/uDM.dfm` confirma o rótulo Arquivo binário do brModelo e os filtros .brM/.xml. `TModelo.Salvar` grava apenas o documento ativo, atualiza o nome/arquivo e retira a marca de modificação. `MenuModelosPopup` lista os documentos, e `ModelosSelect` permite alternar entre eles.

O executável efetivamente distribuído no [repositório do curso](https://raw.githubusercontent.com/mundobitbyte/MBD/main/brModelo.exe), SHA-256 `4aedac0ad68682524bbd29a6888eff2958c4c6be4ecf2a0e3c981bd029a9a320`, foi descompactado com UPX para inspeção estática. Os rótulos e alternativas descritos foram encontrados também em seus recursos/strings (CP1252/UTF-8), sem executar o programa. Isso complementa a verificação do fonte e evita presumir que a interface de outra versão seja igual.

**Limite:** não houve execução interativa do aplicativo Windows, nem geração/salvamento nativos neste ambiente. A validação do procedimento é documental e estática no fonte oficial e no executável do curso. Não há capturas novas de janelas de escolha, resultado ou salvamento: nenhuma tela foi simulada.

## Imagens e posição

1. Captura original do menu `brmodelo-2-gerar-esquema-logico.webp`, inalterada, junto do passo 2.
2. `conversao-cidade-fornecedor.webp`, esquema didático de antes/depois, imediatamente antes da escolha no passo 3. Usa os nomes reais, sem apresentar tipos físicos como resultado automático da conversão.
3. `conversao-cidade-fornecedor-mobile.webp`, o mesmo conteúdo disposto verticalmente em telas até 650 px. Ambas as variantes são WebP sem perdas, derivadas deterministicamente dos diagramas aprovados, identificadas como esquema didático e ampliáveis pelo visualizador existente.

## Preservação e testes

A comparação automatizada confirma que todo o HTML anterior e posterior ao bloco é idêntico à base, assim como todos os blocos pre/SQL, os h2/âncoras e a captura original. Capítulos 1, 2, 4–10 e 99 Exercícios não receberam alterações. Nenhum CSS ou JavaScript de aplicação foi modificado. O teste visual existente apenas atualiza a contagem de diagramas do capítulo 3 de cinco para seis; os cinco originais continuam presentes. No catálogo, só o texto de busca da unidade Banco de Dados e do bloco 1.1 mudou, sem alterar identidades de progresso ou destinos.

Resultados locais: 29 testes Node aprovados; índices de pesquisa e visitas atualizados; diff sem erros. Chrome 156 em 1440, 390, 360 e 320 px: percurso pelos 22 títulos dos capítulos 2/3; 13 diagramas carregados/ampliados com retorno de foco; 5 âncoras; navegação nos 12 módulos; 48 botões Copiar por largura, 192 correspondências reais com o clipboard. Sem overflow global ou erro JavaScript. Captura original, escolha responsiva do novo WebP, checkpoint de respostas, pesquisa e link direto testados nas quatro larguras. Imagens de desktop/celular examinadas visualmente. Celular emulado por viewport, sem teste em aparelho físico.

O smoke transversal do visualizador foi executado. Não houve nova execução de MySQL (SQL inalterado) nem gravação de dados reais de contas. Os testes de Meu MbB são automatizados, com os limites dos mocks existentes; não equivalem a uma sessão autenticada de produção.

Evidências resumidas no JSON adjacente. Eventuais problemas fora do escopo não foram corrigidos nesta intervenção.
