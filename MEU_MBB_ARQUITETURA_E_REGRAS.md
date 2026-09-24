# Meu MbB — piloto Git no computador

## Escopo e isolamento

- Piloto: 12 etapas da seção Git em `pages/git.html`. Não representa progresso dos demais módulos.
- O site público, a home e a pesquisa não precisam de login ou Firebase. Falhas pessoais devem ser tratadas sem afetar o estudo.
- A autenticação usa o mesmo projeto Firebase da Academia. O Meu MbB mantém sua própria cópia da configuração Web pública em `meu-mbb/firebase-config.js` para evitar depender de arquivos da Academia. Se o projeto Firebase for alterado, atualizar ambas as configurações. **Nenhum script, ID de aula, progresso, coleção ou pontuação da Academia é reutilizado.**
- Dados pessoais do Meu MbB: `meuMbb/{uid}/registros/{conteudo_id}`; Academia: `users/{uid}/courses/...`. As regras de acesso são independentes.

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

Cada registro contém `conteudoId`, `versaoVista`, `atualizadoEm` e, conforme o uso, `ultimoAcesso`, `ancora`, `concluido`, `favorito`, `anotacao`. A anotação tem limite de 2.000 caracteres. As regras de `firestore.rules` dão leitura e escrita apenas ao próprio `uid`, validam ID, versão, tipos e tamanho. Não armazenar URL como chave de progresso. Firestore indisponível impede salvar dados pessoais no momento, mas não impede usar páginas ou pesquisa.

## Verificação e publicação

1. `node --test meu-mbb/*.test.cjs academia/tests/academia-core.test.js` e `node meu-mbb/atualizar-pesquisa.cjs --check`.
2. Com emulador Firebase e dependências, executar `firebase emulators:exec --only firestore --project demo-mbb "node academia/tests/firestore-rules.test.cjs"` para conferir também que as regras da Academia continuam válidas.
   Para testar cadastro, login, persistência e privacidade usando contas descartáveis locais: `firebase emulators:exec --only auth,firestore --project demo-mbb "node meu-mbb/integracao-emuladores.cjs"`.
3. Conferir home, Git e pesquisa sem login, no computador e no celular; bloquear SDK/rede Firebase e repetir. Depois validar entrada, saída, progresso, favoritos e anotações em conta técnica de teste.
4. Publicar o site e as regras Firestore correspondentes no mesmo lançamento, após revisão. Antes de ativar a interface em produção, testar as regras com emulador; sem as novas regras, a gravação privada será recusada, mas o site público continuará funcionando.
