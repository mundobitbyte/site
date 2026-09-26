# Meu MbB — piloto Git no computador

## Escopo e isolamento

- Piloto: 12 etapas da seção Git em `pages/git.html`. Não representa progresso dos demais módulos.
- O site público, a home e a pesquisa não precisam de login ou Firebase. Falhas pessoais devem ser tratadas sem afetar o estudo.
- O projeto público fica com `meu-mbb/firebase-config.js` desativado até ser aprovada uma configuração de produção própria do Meu MbB. A prévia temporária foi configurada separadamente para usar apenas `meu-mbb-piloto-teste`. **Nenhum script, ID de aula, progresso, coleção ou pontuação da Academia é reutilizado.**
- Dados pessoais do Meu MbB: `meuMbb/{uid}/registros/{conteudo_id}` no projeto isolado. A Academia mantém seus dados e suas regras em seu próprio projeto, sem alteração neste piloto.

## Catálogo pedagógico único

`meu-mbb/catalogo.json` é a referência pública para pesquisa, progresso, retomada, recentes, favoritos e anotações. Cada unidade tem `conteudo_id`, `versao_conteudo`, `titulo`, `area`, `modulo`, `trilha`, `ordem`, `status`, `localizacao_atual` e `texto_busca`. Somente unidades ativas entram no denominador e na pesquisa.

- ID pedagógico permanece estável após mudança de URL, título ou posição. A URL é um destino editável, não uma identidade.
- `versao_conteudo` é um número editorial; nunca um SHA. Aumentar ao revisar a unidade de maneira pedagogicamente relevante. Ajustes mínimos dispensam aumento.
- Ao editar texto, atualizar os termos de pesquisa no **mesmo catálogo** com `node meu-mbb/atualizar-pesquisa.cjs`. O comando lê as etapas Git atuais; `--check` verifica sincronização sem escrever. Revisar o título e a versão manualmente.
- Não recriar um índice com outros IDs. A expansão futura deve acrescentar unidades ao catálogo após validar o piloto.

## Migrações e percentuais

- `ativo`, `atualizado`, `movido`: mesmo ID; atualizar `localizacao_atual` e, se relevante, a versão.
- `substituido`, `incorporado`, `dividido`: manter a entrada histórica e definir `destino_id` que leva a uma unidade ativa. Na divisão, escolher a primeira unidade adequada à retomada. Usar `preservar_conclusao: true` somente quando a nova unidade for pedagogicamente equivalente; em outros casos, o histórico fica disponível sem marcar a nova tarefa como concluída.
- `removido`: manter entrada histórica mínima e indicar `proximo_id`, mesmo sem substituto equivalente. Não aparecerá na busca nem no denominador do progresso.
- O resolvedor detecta ciclos e destinos ausentes. O percentual conta IDs ativos obrigatórios concluídos; históricos removidos nunca aumentam o denominador. Uma antiga conclusão equivalente pode contar uma única vez para o destino atual.
- A retomada resolve o ID salvo para o destino atual; `ancora` é complementar. Se a âncora desaparecer, o link para a unidade continua válido.

## Dados privados e falhas

Cada registro contém `conteudoId`, `versaoVista`, `atualizadoEm` e, conforme o uso, `ultimoAcesso`, `ancora`, `concluido`, `favorito`, `anotacao`. A anotação tem limite de 2.000 caracteres. As regras exclusivas de `meu-mbb/firestore.rules` dão leitura e escrita apenas ao próprio `uid`, validam ID, versão, tipos e tamanho. `firestore.rules` na raiz continua exclusivo da Academia. Não armazenar URL como chave de progresso. Firestore indisponível impede salvar dados pessoais no momento, mas não impede usar páginas ou pesquisa.

## Verificação e publicação

1. `node --test meu-mbb/*.test.cjs academia/tests/academia-core.test.js` e `node meu-mbb/atualizar-pesquisa.cjs --check`.
2. Com emulador Firebase e dependências, executar `firebase emulators:exec --only firestore --project demo-academia "node academia/tests/firestore-rules.test.cjs"` para conferir as regras da Academia sem mudança.
   Para testar cadastro, login, persistência e privacidade do Meu MbB com contas descartáveis locais: `firebase emulators:exec --config firebase.meu-mbb.json --only auth,firestore --project demo-mbb "node meu-mbb/integracao-emuladores.cjs"`.
3. Conferir home, Git e pesquisa sem login, no computador e no celular; bloquear SDK/rede Firebase e repetir. Depois validar entrada, saída, progresso, favoritos e anotações em conta técnica de teste.
4. Antes de ativar a interface em produção, aprovar um projeto Firebase próprio do Meu MbB, publicar nele `meu-mbb/firestore.rules` e configurar o app Web daquele projeto. Não publicar as regras do Meu MbB no projeto da Academia. A configuração padrão permanece desativada até essa decisão; o site e a pesquisa públicos continuam funcionando.
