# Refatoração arquitetural MbB — Git e GitHub

Data: 23/09/2026
Branch isolada: `git-arquitetura-mbb-20260923`
Base: `9919ae9ac25c010e6cde4365775fbeb91f1d758b`

## Regra de segurança

A refatoração não deve alterar conteúdo pedagógico, ordem dos tópicos, exemplos aprovados, navegação, IDs, classes, estilos ou comportamento percebido pelo aluno.

A `main` permanece fonte de verdade até a equivalência ser comprovada.

## Problema atual

`pages/git.html` carrega uma cadeia extensa de scripts que criam, substituem e corrigem conteúdo em sequência. A ordem de carregamento faz parte da lógica. Vários ajustes dependem de `replace()` por texto exato.

Isso gera quatro riscos principais:

1. uma frase alterada pode impedir silenciosamente uma correção posterior;
2. um script posterior pode sobrescrever conteúdo correto de um script anterior;
3. a fonte de verdade pedagógica fica distribuída;
4. checkpoint, exercícios e Central de Comandos podem divergir do conteúdo principal.

## Fase 1 — estabilização sem alterar o módulo público

Foi criada a página isolada `pages/git-refatorado.html`.

Ela não substitui `pages/git.html` e não está ligada à navegação pública.

A página usa `js/git-runtime-refatoracao.js`, que:

- carrega os scripts atuais na mesma ordem;
- interrompe a validação se algum script falhar;
- verifica 12 tópicos Git;
- verifica 10 tópicos GitHub;
- verifica 22 exercícios;
- verifica Central de Comandos e checkpoint;
- confirma Git CMD como terminal oficial;
- confirma safe.directory, merge --no-edit e diagnóstico de histórias divergentes;
- confirma que `rmdir /s /q .git` não possui botão de cópia;
- procura referências antigas a Prompt de Comando, CMD do Windows e NOME-DA-BRANCH.

Essa fase cria uma linha de base verificável antes de remover overlays.

## Arquitetura-alvo

A arquitetura final desejada é:

- `git-core.js`: renderização, navegação e utilidades;
- `git-conteudo.js`: Git 1–12 e GitHub 1–10 como dados canônicos;
- `git-exercicios.js`: Exercícios 1–22 como dados canônicos;
- `git-comandos.js`: Central de Comandos, rede, segurança e diagnóstico;
- `git-checkpoint.js`: interface do checkpoint;
- `assets/git-github-checkpoint-comandos.txt`: material textual sincronizado.

Não deve haver correções pedagógicas baseadas em `replace()` de HTML após o conteúdo ter sido criado.

## Estratégia MbB para a consolidação

1. Fotografar o estado final atual.
2. Consolidar um conjunto por vez.
3. Comparar quantidade, IDs, títulos, objetivos, comandos e textos críticos.
4. Testar navegação e cópia.
5. Remover somente a camada que já foi absorvida pela fonte canônica.
6. Repetir até que os overlays deixem de ser necessários.
7. Só então substituir a página pública.

## Critérios mínimos antes de tocar na main

- 12 tópicos Git presentes e na mesma ordem;
- 10 tópicos GitHub presentes e na mesma ordem;
- 22 exercícios presentes e na mesma ordem;
- Central de Comandos completa;
- checkpoint sincronizado;
- nenhuma referência operacional a CMD/Prompt fora de Git CMD;
- fluxo local funcionando conceitualmente;
- fluxo de rede preservando `pushd` e `safe.directory`;
- merge usando `--no-edit` onde previsto;
- recuperação destrutiva isolada no diagnóstico;
- nenhuma diferença pedagógica não aprovada.

## Melhorias arquiteturais interessantes encontradas

### 1. Gerar o checkpoint a partir da mesma fonte canônica

Hoje o `.txt` precisa ser sincronizado manualmente. No futuro, os blocos essenciais podem ser derivados dos mesmos dados usados nas aulas. Isso reduz o risco de uma correção entrar no site e não entrar no checkpoint.

### 2. Separar `comando`, `saída` e `exemplo` no próprio modelo de dados

Em vez de depender apenas de classes HTML inseridas depois, cada bloco pode declarar seu tipo. O renderizador decide a aparência e impede botão Copiar em saídas e exemplos perigosos.

### 3. Declarar risco do comando como metadado

Comandos como `rmdir /s /q .git` podem ter `risk: destructive`. O renderizador pode automaticamente remover botão Copiar, exibir confirmação visual e impedir que o comando apareça em fluxos normais.

### 4. Testes de integridade como parte permanente do desenvolvimento

As verificações criadas em `git-runtime-refatoracao.js` podem evoluir para um pequeno teste automatizado do módulo, sem aparecer para o aluno.

### 5. Padronizar placeholders como dados, não texto solto

`BRANCH_PRINCIPAL`, hashes, URL e caminho de rede podem ser declarados como placeholders oficiais. Isso evita variações futuras como `NOME-DA-BRANCH`.

## Decisão atual

A `main` não foi alterada pela refatoração arquitetural.

A próxima etapa segura é consolidar primeiro o conteúdo final em estruturas canônicas na branch, validar equivalência e somente então considerar a substituição dos scripts antigos.
