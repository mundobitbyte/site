# Café Aurora — Web III, Capítulo 1

Este material complementa o checkpoint 12 do Web II. Não substitui os demais módulos.

## Origem e uso

A base é downloads/programacao-web/cafe-aurora-web2-capitulo-12.zip, já publicada no Mundo bit Byte. O gerador registra o SHA-256 desse arquivo em ORIGEM.md dentro de cada pacote.

1. Trabalhe em cópia da sua entrega; não substitua a pasta original.
2. Caso use a referência, descompacte o ZIP e abra a pasta cafe-aurora-web3 no editor. Não misture arquivos de checkpoints diferentes sobre o mesmo diretório.
3. O PHP roda localmente, não na página estática do material didático.
4. Na raiz da cópia, execute: php -S localhost:8000 -t public
5. Abra http://localhost:8000/ e http://localhost:8000/balcao.php em abas separadas.

## Checkpoints

- Aula 1: balcão já usa src/atendimento.php; a página inicial ainda está na etapa anterior. Ambas começam com 25 minutos, mas uma alteração na fonte só chega ao balcão. Isso é um estado intermediário identificado; continue na aula 2.
- Capítulo 1 concluído: as duas páginas usam a fonte. Altere tempoEstimado ou pedidosAbertos em src/atendimento.php e recarregue as duas páginas.

Os arquivos administrativos, o cardápio e as mensagens da base foram preservados. Nenhuma senha, banco SQLite, conta, vendor ou dado de cliente foi incluído. Para conferir o fluxo de mensagens, siga a preparação do Web II: php src/inicializar-banco.php e php src/criar-administrador.php. Crie uma senha local; nunca publique seu banco ou suas credenciais. O script de administrador só é executado pelo terminal.

O composer.json original exige PHP ^8.5, PDO/SQLite e PHPUnit ^13.0. Para a suíte anterior, instale o Composer e execute composer install e composer test. Não foram adicionadas dependências ao projeto do aluno.

## O que mudou

- public/balcao.php: apresentação nova, com CSS já conhecido.
- src/atendimento.php: prepara os três campos usados pelas apresentações.
- public/index.php: somente o bloco PHP inicial é substituído no checkpoint final; o HTML anterior continua igual.
- docs/verificacoes-capitulo-1.md: roteiro de evidências.

O arquivo inicio-compartilhado.php.txt é um trecho de edição, não uma página executável: substitua com ele somente o primeiro bloco PHP de public/index.php. Não substitua o HTML que vem depois.

Atualizar o arquivo no servidor não atualiza uma aba já carregada. Cada página precisa de uma nova requisição. Não há sincronização automática, painel de edição, pagamento ou sistema de pedidos novo neste capítulo.

© 2026 Mundo bit Byte — Ronaldo Lavestein. Uso conforme os direitos do site.
