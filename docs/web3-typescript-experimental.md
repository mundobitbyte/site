# Web III — TypeScript Essencial: entrega experimental

A unidade apresenta introdução, tópicos 1 a 12, objetivo, exemplo completo,
trecho explicado, resultado esperado, experiência e tópico 99 com seis desafios.
Os exemplos usam dados do Café Aurora.

## Inserção e continuidade

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
