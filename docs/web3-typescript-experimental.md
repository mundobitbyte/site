# Web III — TypeScript Essencial: entrega experimental

A unidade apresenta introdução, tópicos 1 a 12, objetivo, exemplo completo,
trecho explicado, resultado esperado, experiência e tópico 99 com seis desafios.
Os exemplos usam dados do Café Aurora.

## Revisão de continuidade e entrada (24/10/2026)

A abertura explica o que é TypeScript, seu vínculo com JavaScript, utilidade,
critério de adoção e limites. Mantém VS Code como editor, diferencia Node/npm,
Vite e verificador, e orienta extração, pasta, terminal, instalação, endereço,
edição, conferência de tipos e retomada. Nenhum React é exigido nesta unidade.

O kit começa com 35 minutos, referência da experiência da aba aberta no
Capítulo 1. A equipe comunica 45 na primeira alteração. O tópico 1 continua
essa tentativa sem reiniciar o arquivo. Cada valor é estimativa informada pela
equipe e representada localmente; não há cálculo preditivo nem consulta PHP.
O tópico de condições retoma 45; a comparação de avisos usa 45 → 55, e o último
exemplo organiza os 55 em arquivo de apoio. Atividades de cálculo identificam
separadamente seus próprios valores de entrada.

O menu lateral continua visível no computador. No celular/tablet, o botão
“☰ Tópicos” abre a mesma lista em dialog nativo, seguindo a convenção de menu
recolhível dos módulos Arduino/App Inventor. Há fechamento, Escape, contenção
nativa de foco, tópico atual e retorno ao conteúdo. Não existem cópias dos
links nem IDs novos de progresso. Sem JavaScript, a lista e o conteúdo ficam
acessíveis na página. Âncoras históricas, ID da unidade e versão 1 permanecem.

## Inserção e continuidade

Revisão de 25/10/2026: o tópico 3 distingue atendimento encerrado de ausência
de estimativa. O tópico 4 apresenta cálculo e formatação antes de comparar as
duas funções com setas no 5. Os tópicos 8–10 editam trechos sobre a lista que o
aluno criou no 7; o arquivo completo fica recolhido para recuperação. No 9,
limitePreco alimenta tanto o filtro quanto o texto da tela. O 10 conserva a
busca e sua proteção contra undefined. O 12 exporta a interface que o aluno
acabou de conhecer. Os testes reproduzem as edições parciais com um produto
adicional, além dos casos de limite, ausência e encerramento.

A entrada está depois do Capítulo 1, antes da consulta real ao PHP. Preserva as
duas aulas publicadas e acrescenta uma ligação na navegação da branch. O aluno
trabalha em uma bancada de linguagem; não reconstrói o sistema em outra stack.
O tópico 12 prepara dados locais em outro arquivo, sem alegar uma consulta de
rede. Validação de respostas externas fica para a primeira integração real.

JavaScript prévio é retomado por necessidade. O módulo React Native não é um
pré-requisito integral. PHP/Laravel continuam responsáveis pelo percurso MVC;
TypeScript será usado nas novas partes do cliente. Laragon é a preferência para
o ambiente Windows. Sua instalação e o conjunto PHP/Laravel ainda não foram
homologados no laboratório por esta entrega.

## Arquivos e dados

- Página: pages/programacao-web/web3-typescript.html.
- Fonte didática e exemplos: materiais/programacao-web/web3-typescript/.
- Gerador: scripts/gerar-web3-typescript.py.
- Download: downloads/programacao-web/cafe-aurora-typescript-essencial.zip.
- Node.js 24, TypeScript 7.0.2 e Vite 8.3.5, com package-lock.json.
- index.html.txt é o template de autoria; o gerador o entrega como index.html no ZIP.

A navegação usa um script exclusivo da unidade. Cópia de código e aparência
reutilizam as convenções já existentes. Pesquisa e visitas são geradas pelo
mecanismo atual. A unidade tem um ID, web3-typescript-essencial, versão 1, com
âncoras estáveis por tópico. Conclusão permanece explícita para a unidade; abrir
um tópico não concede conclusão. Nenhuma regra ou contrato global foi alterado.

## Currículo e publicação

A inclusão de TypeScript é uma decisão didática do professor. Não equivale à
homologação de um plano curricular nem comprova a versão aplicável a cada turma.
As cargas totais precisam ser recalculadas depois de dimensionar a prática e
confirmar a matriz de cada turma. Não há garantia de caber em 80 horas-aula.

Após avaliar a prévia, o professor autorizou a publicação desta unidade e pediu
que o material público não cite o modelo usado na sua elaboração. A publicação
fica condicionada à validação técnica desta revisão. Essa autorização não se
estende automaticamente às entregas seguintes.

## Verificação

A revisão circular de retomada e checkpoints, em 25/10/2026, volta da entrega
final à preparação inicial: explica onde guardar tentativas para que um erro
intencional arquivado não bloqueie o trabalho seguinte. Os seis desafios
retomam necessidades do Café e exemplos existentes, com links para as aulas
correspondentes e evidências concretas para conferência. O checkpoint pede
demonstrar a solução e distinguir verificação de tipos e comportamento. Um
teste executa o compilador com a mesma tentativa inválida fora e dentro de src.

A conferência do Capítulo 1 reconstrói as duas aulas a partir dos trechos
ensinados e de uma cópia da referência final anterior. Confere via HTTP o
prazo inicial de 40, a divergência 40/55, o compartilhamento em 55, a mudança
para 20, o encerramento e a distinção entre resposta anterior e nova em 35.
Essa execução exige PHP e é feita no CI; não é declarada como teste local no
host de autoria, que não possui PHP/Composer. O Web II não é alterado.

Os testes específicos compilam os doze exemplos com strict e executam o
JavaScript gerado. Conferem resultados, atribuição incompatível, prazo ausente,
busca sem resultado e campo obrigatório ausente. Código mostrado
e arquivos do ZIP são comparados às fontes. O workflow instala o ZIP real em
pasta temporária e executa o build com verificação de tipos.

A suíte anterior de PHP e Meu MbB deve continuar aprovada antes da entrega.
Testes de regras são emulados; não representam sincronização real em produção.
Revisão visual inclui desktop e larguras de celular/tablet. Piloto com alunos,
leitor de tela, dispositivos físicos e ambiente Windows/Laragon continuam
pendentes; não foram simulados como se fossem executados.
