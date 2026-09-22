# Academia Mundo bit Byte

Estrutura independente da Academia.

Publicação recomendada:
1. Copiar a pasta `academia` para dentro do repositório `site`.
2. Executar `git add academia`.
3. Fazer commit e push.

URL esperada no domínio atual:
`https://www.mundobitbyte.com.br/academia/`

## Cursos

- `cursos/chatgpt-na-vida-real/`: curso existente, preservado.
- `cursos/sistemas-embarcados-iot/`: jornada completa de Sistemas Embarcados e IoT.

## Progresso e conta

- Sem login: o curso é público e o progresso fica apenas no navegador.
- Com login: Firebase Authentication e Cloud Firestore sincronizam o progresso.
- A configuração pública do projeto fica em `js/firebase-config.js`.
- As regras privadas por usuário ficam em `../firestore.rules`.

Consulte `../ADMINISTRACAO_ACADEMIA_MBB.md` para operação e segurança.

## Testes locais

```bash
node --test academia/tests/academia-core.test.js
```
