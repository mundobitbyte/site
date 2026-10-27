# Capítulo 4 — ajustes pedagógicos após revisão MbB — 27/10/2026

Base: main `f22636e6f239dc3362b3206a001763725831441c`. Branch: `refino-mbb-sql-cap4-20261027`. Alteração autorizada após apresentação dos pontos encontrados na revisão.

## Alterações

1. ALTER TABLE passou a prática opcional, fechada por padrão em details. O texto conduz diretamente a INSERT na primeira passagem e orienta retomar o laboratório após as primeiras consultas do Bloco 8. Título e âncora existentes preservados; código e aviso sobre commit implícito permanecem dentro da prática expansível.
2. ORDER BY id_produto é explicado antes de seu primeiro uso com LIMIT 10: ordenar do menor identificador ao maior e só depois limitar as linhas. Os exemplos aprovados não foram reescritos.
3. WHERE agora avança por nove consultas separadas: categoria, estoque, preço, AND, IN, BETWEEN, IS NULL, NOT e OR. Cada pergunta apresenta o conceito/símbolo antes do código, tem botão Copiar específico e indica algo verificável no resultado. Mantidas as mesmas nove consultas e sua ordem. O texto retoma colunas e LIMIT já estudados; não afirma que todas as consultas anteriores mostravam tabelas inteiras.
4. A orientação de conexão pede fechar o menu com Esc antes de preencher os campos e localiza Nova/Abrir na captura. A imagem original permanece byte a byte intacta. Não há entre os anexos uma versão dessa tela com o menu fechado; não se produziu uma interface artificial para substituí-la.

## Verificações estáticas

Comparadas todas as instruções SQL antes/depois, normalizando somente espaços e quebras de linha: idênticas e na mesma ordem do documento. Passaram de 41 para 48 blocos apenas pela separação dos filtros. Os onze outros módulos HTML, incluindo 99 Exercícios, permanecem idênticos. As oito imagens armazenadas, sete exibidas, não sofreram alteração de bytes ou posição. Nenhuma mudança em CSS, JS, autenticação ou gravação de estudo.

Catálogo de pesquisa regenerado. `node meu-mbb/atualizar-pesquisa.cjs --check`, `node meu-mbb/gerar-visitas.cjs --check` e `git diff --check`: passaram. `node --test meu-mbb/*.test.cjs`: 29/29.

## Navegador real

Chrome Headless 156 em 1440×900, 390×900, 360×900 e 320×900. Percorridos os 21 títulos h2 do capítulo; zero exceções JavaScript e zero overflow global/main.

- 48 botões Copiar × quatro larguras = 192 cópias exatas comparadas com a área de transferência, com verificação de posição e ausência de sobreposição ao SQL. O teste abre a prática opcional, copia o laboratório e a fecha novamente.
- Sete imagens carregadas e sete ampliações abertas/aumentadas/fechadas por largura; dimensão reservada antes de liberar o carregamento das imagens.
- Navegação das 12 opções, âncoras preservadas, pesquisa pública por HeidiSQL com entrada mantida durante carregamento lento e abertura do resultado sem login.
- 11 conjuntos dos 99 Exercícios: entrar, expandir questão e voltar em desktop/celular.
- Meu estudo: favorito, conclusão, visita/âncora e adicionar/editar/apagar nota fictícia com conta simulada em memória; chamadas externas bloqueadas, zero gravações no Firebase real.
- Conferência visual adicional do texto final em 1440, 390 e 320 pixels: ALTER fechado por padrão, continuidade para INSERT, WHERE e AND. Abertura e fechamento do details também testados por teclado (Enter). Capturas de desktop/celular inspecionadas.

O primeiro ensaio de automação tentou localizar o botão do laboratório pelo texto renderizado enquanto o details estava fechado; a etapa falhou por invisibilidade. O teste foi ajustado para identificar pelo texto do DOM, abrir explicitamente a prática e conferir seu estado. Nenhuma alteração de implementação foi necessária para resolver esse erro do ensaio; a execução completa posterior passou.

## MySQL real na versão exata da aula

Executado **MySQL Community Server 8.4.13**, pacote oficial Oracle para Ubuntu 24.04, em processo e diretório locais descartáveis. Pacote extraído sem instalar serviços no sistema; SHA-256 comparado ao índice oficial do repositório MySQL. Isso encerra a limitação anterior de testar os exemplos somente em 8.0.46, mas não equivale a executar o instalador Windows.

Executadas as 79 instruções extraídas da página. O laboratório opcional foi adiado até após as primeiras consultas, seguindo a orientação da aula. Resultado: 77 sucessos e duas rejeições esperadas por FK (1452), sem falha inesperada.

As observações dos novos filtros foram verificadas no resultado real: cinco bebidas; ENERGETICO com quantidade 3 e mínimo 5; PICANHA acima de 20; COCA COLA LATA incluída no intervalo 5–20; IN restrito às categorias 3/7/8; QUIBE no intervalo 10–30; 25 fornecedores sem cidade; NOT excluindo categoria 3; OR restrito a 3/15. Conferência após primeiro INSERT: 26 categorias e demais tabelas ainda vazias, como na imagem preservada.

Estado final: 26 categorias, 0 cidades, 25 fornecedores, 60 produtos e 60 vínculos. Registros das cinco tabelas comparados por hash antes dos laboratórios de dados e após limpeza: idênticos. Contadores AUTO_INCREMENT podem avançar com IDs temporários, comportamento preexistente não alterado. Banco descartável removido e processo encerrado; nenhum acesso a produção.

## Limites

A captura de conexão continua mostrando o menu aberto; a orientação foi melhorada para não induzir o aluno a usá-lo como parte do procedimento. Sua substituição por uma fotografia com o menu fechado depende de outra captura real. Aplicativos Windows e autenticação/persistência reais do Firebase não foram executados. Não se afirma uma nova revisão pedagógica integral dos demais capítulos.

Evidências: `sql-cap4-refino-mbb-20261027.json`. A publicação segue o fluxo existente de Pull Request, verificações do GitHub e GitHub Pages.
