# MySQL 8.4 — preparação do Capítulo 4 — 27/10/2026

Base: main 89e21028269fe6d0232b0bcc3c5ff0a1b227093d. Branch: mysql-84-instalacao-cap4-20261027.

## Alteração solicitada

Explicação breve do papel do MySQL Server e do cliente HeidiSQL ao fim do Bloco 3. No Bloco 4, antes de SHOW DATABASES/CREATE DATABASE: download oficial exato do MySQL Community Server 8.4.13 LTS para Windows x64 (mysql-8.4.13-winx64.msi), instalação pelo MSI/Configurator, configuração local, senha, serviço, conexão e SELECT VERSION(). Instalação separada, portas 3307/33070 quando necessárias e preservação dos dados antigos ficam em seção expansível. A conexão posterior do HeidiSQL retoma a mesma porta do CLI.

Links verificados na fonte oficial em 27/10/2026:
- https://dev.mysql.com/downloads/mysql/8.4.html
- https://dev.mysql.com/downloads/file/?id=559075
- https://dev.mysql.com/doc/refman/8.4/en/mysql-configurator.html
- https://dev.mysql.com/doc/refman/8.4/en/mysql-configurator-workflow-server.html
- https://dev.mysql.com/doc/refman/8.4/en/mysql-installation-windows-path.html

## Validações realizadas nesta alteração

- Chrome Headless 156 real: 1440×900, 390×900, 360×900 e 320×900. Percurso pelos 21 títulos h2 do capítulo, sem overflow horizontal global/main ou exceções JavaScript.
- 40 botões Copiar por largura: 160 conteúdos comparados integralmente com a área de transferência, incluindo o acesso CLI e SELECT VERSION().
- 7 imagens carregadas e 7 ampliações abertas/aumentadas/fechadas por largura. Reserva de espaço conferida antes de carregar. Inspeção visual das capturas de desktop/celular e do detalhe de instalação separada.
- Navegação das 12 opções e âncoras, incluindo a âncora preexistente do Bloco 4. Seção expansível de instalação separada aberta e fechada nas quatro larguras.
- Pesquisa pública por 8.4.13 encontra a aula e abre o capítulo SQL sem login.
- 11 conjuntos dos 99 Exercícios: entrada, expansão e retorno em desktop/celular.
- Meu estudo: favorito, conclusão, visita/âncora e adicionar/editar/apagar anotação em desktop/celular com conta simulada em memória e chamadas externas bloqueadas. Zero gravações no Firebase real.
- node --test meu-mbb/*.test.cjs: 29/29.
- node meu-mbb/atualizar-pesquisa.cjs --check, node meu-mbb/gerar-visitas.cjs --check e git diff --check: passaram. Catálogo de pesquisa regenerado.
- Comparação com a base: 11 outros módulos HTML idênticos e os 38 blocos SQL preexistentes preservados integralmente. Apenas a conexão de terminal mudou para host/porta explícitos e foi acrescentado SELECT VERSION(). Sem alteração de imagens, CSS/JS ou dados SQL aprovados.

## Limites e pendências

Não foi executada instalação MSI/Configurator no Windows nem autenticação/persistência reais no Firebase. Não foi iniciado servidor MySQL nesta alteração; não se apresenta a validação SQL da auditoria anterior como um teste novo. As orientações de instalação foram confrontadas com a documentação oficial. O download foi conferido na página oficial, sem executar o instalador.

A substituição das capturas antigas está pendente das novas imagens que o professor fará no servidor atualizado, conforme combinado. Nenhuma captura incompatível ou interface artificial foi publicada nesta alteração.
