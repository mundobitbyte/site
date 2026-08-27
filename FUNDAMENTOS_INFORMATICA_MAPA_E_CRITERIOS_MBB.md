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
2. situação humana/concreta que realmente cria um problema;
3. pergunta que cria necessidade;
4. hipótese ou tentativa inicial do aluno;
5. contraste e contraexemplo para testar a hipótese;
6. construção da ideia;
7. nome técnico e terminologia;
8. figura, diagrama ou representação visual quando ajudar a pensar;
9. exemplo guiado;
10. interpretação;
11. conexão com tecnologia e programação;
12. prática ou pausa de raciocínio;
13. essência;
14. ponte para a próxima aula.

O módulo não deve virar um glossário nem um repositório de conteúdo. Conceitos entram porque resolvem uma pergunta. A contextualização não existe para “enfeitar” o texto: ela deve criar a necessidade que o conceito resolve. Contraexemplos são obrigatórios quando ajudam a delimitar um conceito.

**Regra de navegação:** o menu é um índice, não um resumo da aula. Usar nomes curtos e reconhecíveis; perguntas provocativas ficam dentro da aula.

**Regra visual:** cada aula deve avaliar se uma figura, diagrama, fotografia real ou interação visual melhora a compreensão. Preferir figuras próprias e leves quando o objetivo for explicar uma ideia; usar fotografia real apenas quando reconhecer o objeto real acrescentar algo pedagógico. Imagens devem ter tamanho de leitura adequado e nunca ser meramente decorativas.

## Mapa aprovado para evolução
00. Diagnóstico — pergunta interna: o que você já entende quando usa tecnologia?
01. Computador — pergunta interna: o que é um computador?
02. Bits e Bytes — como texto, números, imagens e músicas cabem dentro de uma máquina?
03. Hardware — quem realmente faz o trabalho dentro do computador?
04. Memória — por que RAM e SSD não são a mesma coisa?
05. Periféricos — como o computador conversa com o mundo exterior?
06. Inicialização — o que acontece entre apertar Power e aparecer a área de trabalho?
07. Sistema Operacional — por que os programas não controlam diretamente o computador?
08. Arquivos — onde um arquivo realmente fica e como o sistema o encontra?
09. Redes — como dois computadores conseguem conversar?
10. Internet — o que acontece quando você digita um endereço no navegador?
11. Software — como um código escrito por alguém vira algo funcionando na máquina?
12. Banco de Dados — por que não guardar tudo simplesmente em arquivos?
13. Segurança — como um sistema sabe que você é você — e como alguém tenta enganá-lo?
14. Nuvem — como vários “computadores” podem existir dentro de um só — ou do outro lado da Internet?
15. Embarcados — por que um Arduino também faz computação?
16. APIs — como aplicativos e sistemas trocam informações?
17. IA — o que muda quando o computador passa a reconhecer padrões e gerar conteúdo?
18. Manutenção — quando algo não funciona, como descobrir a causa sem tentar coisas aleatoriamente?
19. Vida Profissional — o que diferencia simplesmente usar um computador de trabalhar profissionalmente com tecnologia?
20. Tudo Conectado — o que aconteceu desde apertar Power até abrir o Mundo bit Byte?
99. Exercícios — consolidação progressiva.

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
Primeiro ciclo: estrutura própria e limpa do módulo + Aula 00 + Aula 01. O módulo já está ligado à home; a validação pedagógica das primeiras aulas continua antes de avançar em escala para as demais.

A arquitetura foi preparada antes da Aula 02 para evitar a dívida técnica observada historicamente em DS Matemática: o conteúdo atual das aulas 00 e 01 pertence somente ao bloco `conteudo-00-05.js`; o `core.js` não contém lógica pedagógica das aulas; e as interações ficam separadas em `interacoes.js`.

### Estado dos blocos
Somente `conteudo-00-05.js` existe neste momento porque é o único bloco com aulas implementadas. Os demais arquivos serão criados quando a primeira aula de cada faixa for desenvolvida. O `index.html` deve carregar apenas blocos que realmente existam e contenham conteúdo.


## Benchmark pedagógico
A Aula 01 deve funcionar como o primeiro benchmark do módulo, seguindo o princípio observado na aula de PA do DS Matemática: a necessidade vem antes do nome técnico; o aluno testa uma hipótese; a aula mostra fronteiras e contraexemplos; a definição fecha a pergunta que abriu a aula; e a atividade exige interpretação, não só reconhecimento de palavras.

## Decisões de experiência e navegação
- A chamada da home entra **diretamente na Aula 00 — Diagnóstico**. Não existe tela intermediária de apresentação do módulo.
- O diagnóstico **não é pré-requisito nem prova de entrada**. Fundamentos deve poder ser estudado desde o zero. Sua função é mapear modelos mentais em quatro eixos: hardware/memória, software/arquivos, redes/Internet e sistemas computacionais.
- O diagnóstico evita perguntas de simples reconhecimento de siglas quando uma situação concreta pode revelar melhor o raciocínio do aluno. O retorno é por eixo, não por nota global.
- O menu de aulas não ocupa permanentemente uma coluna da tela. Ele funciona como **gaveta sobreposta (drawer)**, aberta sob demanda pelo botão “Conteúdos”, tanto no desktop quanto no celular. O conteúdo nunca deve perder largura para acomodar navegação.
- A página usa rolagem normal do navegador; evitar painéis internos com altura fixa e rolagem própria, principalmente porque isso piora o uso em celular e no modo “site para computador”.
- Regra responsiva: nenhum diagrama, seletor, cartão ou navegação pode obrigar a página inteira a rolar horizontalmente. Em larguras intermediárias, estruturas complexas devem empilhar antes de comprimirem o conteúdo essencial.
