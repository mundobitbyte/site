# Fundamentos da Informática — Mapa e critérios MbB

## Objetivo
Criar um módulo transversal e autossuficiente do Mundo bit Byte que ensine a base que qualquer pessoa com conhecimentos fundamentais de informática deveria compreender, mesmo que nunca estude os módulos especializados.

## Origem curricular
O mapa foi construído a partir dos planos já analisados do Centro Paula Souza:
- `1 DS.pdf` — Desenvolvimento de Sistemas, 1ª série;
- `2 e 3 DS.pdf` — Desenvolvimento de Sistemas, 2ª e 3ª séries;
- `1 INF.pdf` — Técnico em Informática.

O antigo componente `Fundamentos da Informática` explicita uma parte da base: representação binária, unidades de dados, hardware, software, redes/Internet, software e hardware livre/proprietário, virtualização, nuvem, sistemas operacionais, linha de comando, arquivos, pipes, redirecionamentos e permissões. Os planos atuais também distribuem fundamentos por manutenção, sistemas operacionais, programação, banco de dados, redes, segurança, nuvem, sistemas embarcados e IoT.

## Regra de fronteira
Não evitar repetição por si só. Evitar repetição inútil.

- **Essencial:** precisa ser aprendido neste módulo, mesmo que exista em outro módulo.
- **Ponte:** precisa ser compreendido aqui para que o aluno reconheça o conceito e possa aprofundá-lo depois.
- **Especialização:** pertence ao módulo específico; Fundamentos apenas contextualiza quando necessário.

Pergunta de controle: **"Uma pessoa com formação básica em informática deveria saber isso mesmo que nunca faça o módulo especializado?"**

## Filosofia pedagógica
ENTENDER → EXPERIMENTAR → PROGRAMAR → APLICAR.

Cada aula deve buscar o fluxo:
1. Propósito;
2. situação humana/concreta;
3. pergunta que cria necessidade;
4. observação;
5. construção da ideia;
6. nome técnico;
7. representação/terminologia;
8. exemplo guiado;
9. interpretação;
10. conexão com tecnologia e programação;
11. prática;
12. essência;
13. ponte para a próxima aula.

O módulo não deve virar um glossário. Conceitos entram porque resolvem uma pergunta.

## Mapa aprovado para evolução
00. Avaliação diagnóstica — O que você realmente entende quando usa um computador?
01. Computadores, Informática e TI — O que faz uma máquina ser um computador?
02. Dados viram bits — Como texto, números, imagens e músicas cabem dentro de uma máquina?
03. Hardware por dentro — Quem realmente faz o trabalho dentro do computador?
04. Memória e armazenamento — Por que RAM e SSD não são a mesma coisa?
05. Periféricos e conexões — Como o computador conversa com o mundo exterior?
06. Do botão de ligar ao sistema — O que acontece entre apertar Power e aparecer a área de trabalho?
07. Sistemas operacionais — Por que os programas não controlam diretamente o computador?
08. Arquivos e terminal — Onde um arquivo realmente fica e como o sistema o encontra?
09. Redes — Como dois computadores conseguem conversar?
10. Internet — O que acontece quando você digita um endereço no navegador?
11. Software e execução — Como um código escrito por alguém vira algo funcionando na máquina?
12. Dados e bancos de dados — Por que não guardar tudo simplesmente em arquivos?
13. Segurança digital — Como um sistema sabe que você é você — e como alguém tenta enganá-lo?
14. Virtualização e nuvem — Como vários “computadores” podem existir dentro de um só — ou do outro lado da Internet?
15. Eletricidade e sistemas embarcados — Por que um Arduino também é um computador?
16. Software conversando com software — Como aplicativos e sistemas trocam informações?
17. IA e computação atual — O que muda quando o computador passa a reconhecer padrões e gerar conteúdo?
18. Manutenção e diagnóstico — Quando algo não funciona, como descobrir a causa sem tentar coisas aleatoriamente?
19. Uso profissional da tecnologia — O que diferencia simplesmente usar um computador de trabalhar profissionalmente com tecnologia?
20. Tudo conectado — O que aconteceu desde apertar Power até abrir o Mundo bit Byte?
99. Exercícios e desafios — consolidação progressiva.

## Curadoria MbB adicional
Conceitos contemporâneos que podem entrar quando pedagogicamente úteis, mesmo que não apareçam de forma explícita em todos os planos: ASCII/Unicode, hierarquia cache–RAM–SSD, firmware e BIOS/UEFI, hash e integridade, MFA/passkeys, backup 3-2-1, APIs e JSON em nível conceitual, máquina virtual × contêiner, energia/calor/throttling e diagnóstico por camadas.

## Arquitetura do módulo
Regra central: **cada conteúdo tem uma única fonte de verdade**. Uma melhoria deve alterar a fonte canônica; nunca criar uma camada posterior para corrigir outra camada.

Responsabilidades:
- `index.html`: estrutura e carregamento;
- `conteudo-00-05.js`, `conteudo-06-10.js`, `conteudo-11-15.js`, `conteudo-16-20.js`: conteúdo canônico por blocos de aulas;
- `interacoes.js`: componentes interativos reutilizáveis e interações específicas quando realmente necessárias;
- `exercicios.js`: futura camada exclusiva de geração/prática da aula 99;
- `core.js`: menu, navegação, hash e renderização;
- `fundamentos-informatica.css`: apresentação e responsividade.

Não criar arquivos do tipo `ajuste-*`, `acabamento-*`, `correcao-*` ou equivalentes para modificar texto já carregado. Se a Aula 03 precisar melhorar, a Aula 03 é corrigida diretamente em seu arquivo canônico.

Também não dividir arquivos apenas por estética. O conteúdo será agrupado em blocos para manter arquivos manejáveis sem transformar o HTML em uma lista de dezenas de scripts.

## Estado inicial de implementação
Primeiro ciclo: estrutura própria e limpa do módulo + Aula 00 + Aula 01. Não acoplar à home antes de validar conteúdo, navegação e responsividade.

A arquitetura foi preparada antes da Aula 02 para evitar a dívida técnica observada historicamente em DS Matemática: o conteúdo atual das aulas 00 e 01 pertence somente ao bloco `conteudo-00-05.js`; o `core.js` não contém lógica pedagógica das aulas; e as interações ficam separadas em `interacoes.js`.
