# Análise de Sistemas — Contrato de compatibilidade com Meu MbB

## Objetivo

Preparar o módulo **Análise de Sistemas** para futura integração com o **Meu MbB** sem tornar cadastro obrigatório e sem acoplar o conteúdo público ao Firebase.

## Princípios preservados

- O conteúdo continua totalmente público sem login.
- Pesquisa e navegação devem continuar funcionando sem Firebase.
- Cadastro/login serão opcionais.
- Quando autenticado, o aluno poderá usar retomada, progresso, recentes, favoritos e anotações privadas.
- O Meu MbB permanece separado da Academia: dados, IDs, scripts e regras próprios.
- Nenhuma configuração de Firebase de teste é incorporada a este módulo.

## Identidade pedagógica estável

As 15 etapas possuem IDs permanentes, independentes de URL, título e posição:

- `analise-sistemas-00`
- `analise-sistemas-01`
- `analise-sistemas-02`
- `analise-sistemas-03`
- `analise-sistemas-04`
- `analise-sistemas-05`
- `analise-sistemas-06`
- `analise-sistemas-07`
- `analise-sistemas-08`
- `analise-sistemas-09`
- `analise-sistemas-10`
- `analise-sistemas-11`
- `analise-sistemas-12`
- `analise-sistemas-13`
- `analise-sistemas-14`

Todos começam com `versao_conteudo = 1`.

A versão é editorial/pedagógica. Nunca usar SHA de Git como versão do conteúdo.

## Metadados disponíveis em execução

`js/analise-sistemas.js` mantém uma única fonte para navegação e metadados. Cada unidade expõe:

- `conteudo_id`
- `versao_conteudo`
- `titulo`
- `area`
- `modulo`
- `trilha`
- `ordem`
- `status`
- `localizacao_atual`
- `obrigatorio`

O objeto público é:

`window.MBB_ANALISE_SISTEMAS`

A página atual também recebe `data-conteudo-id` e `data-versao-conteudo` no `body` quando representa uma etapa.

## Evento de integração

Depois de montar os metadados, o módulo dispara:

`mbb:conteudo-pronto`

O evento informa módulo e unidade atual. O futuro bootstrap do Meu MbB poderá ouvir esse evento para registrar retomada/progresso sem alterar o conteúdo pedagógico.

## Ponto de interface

O cabeçalho recebe dinamicamente um slot neutro:

`#meuMbbHook[data-meu-mbb-slot]`

Enquanto nenhum script do Meu MbB preencher esse slot, ele fica invisível e não altera a experiência pública.

No futuro, o slot poderá receber ações como:

- Entrar / Criar conta;
- Meu MbB;
- Favoritar;
- indicador discreto de progresso.

A interface final deverá ser definida pelo projeto Meu MbB, não por este módulo.

## Catálogo global

Este módulo **não cria um segundo catálogo**. Quando o piloto do Meu MbB for promovido para a arquitetura global, as 15 unidades deverão ser acrescentadas ao catálogo pedagógico único usando os IDs já definidos aqui.

A URL é localização atual, não identidade. Se uma etapa mudar de arquivo ou posição, manter `conteudo_id` e atualizar apenas `localizacao_atual` e, quando pedagogicamente relevante, `versao_conteudo`.

## Crítica/autocrítica MbB aplicada à integração

Antes de integrar o Meu MbB ao módulo, verificar:

1. O aluno sem conta continua estudando exatamente como antes?
2. A autenticação acrescenta valor sem bloquear conteúdo?
3. O progresso é baseado em ID pedagógico e não em URL?
4. Uma mudança de título/arquivo preserva histórico?
5. Favoritos e anotações pertencem ao usuário e não contaminam conteúdo público?
6. A ausência do Firebase degrada apenas recursos pessoais, nunca a aula?
7. O slot do Meu MbB permanece discreto no celular e desktop?
8. O módulo continua responsivo em 360 px e 390×844 após inserir controles de conta?
9. Nenhum dado ou regra da Academia foi reutilizado?
10. O catálogo global continua sendo a única referência de identidade e pesquisa?

## Estado atual

**Compatibilidade preparada; autenticação não implementada nesta entrega.**

A integração real com cadastro/login deve acontecer somente quando o piloto do Meu MbB for validado e atualizado sobre a `main` atual.
