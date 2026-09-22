# Administração da Academia Mundo bit Byte

Este guia é para o proprietário da Academia. Não é necessário dominar banco de dados.

## 1. Acessar o Firebase

1. Entre em `https://console.firebase.google.com/` com a conta proprietária.
2. Abra o projeto **Academia Mundo bit Byte** (`academia-mundo-bit-byte`).
3. Não ative faturamento ou o plano Blaze sem avaliar e autorizar conscientemente.

## 2. Onde estão os usuários

No menu do Firebase, abra **Authentication → Users**.

Ali aparecem e-mail, identificador interno e data de acesso. A senha nunca fica visível para o administrador.

## 3. Onde está o progresso

Abra **Firestore Database → Data**.

O caminho é:

`users → identificador do aluno → courses → sistemas-embarcados-iot`

Dentro do curso:

- `activities`: aulas, práticas, checkpoints e projeto final;
- `achievements`: conquistas desbloqueadas;
- `lastLessonId`: última aula estudada;
- `courseVersion`: versão estável do curso.

Não é necessário criar coleções, documentos ou campos manualmente. A Academia cria a estrutura quando o aluno usa o curso.

## 4. Como verificar se está funcionando

1. Crie uma conta de teste na Academia.
2. Abra uma aula e marque-a como concluída.
3. Confirme a mensagem **Salvo na nuvem**.
4. Saia da conta.
5. Entre em outro navegador ou dispositivo.
6. Abra **Minha jornada** e confira aula, percentual e pontos.

Se aparecer **Salvo somente neste dispositivo**, a gravação não foi enviada ao Firebase.

## 5. Exportar ou guardar dados

O plano gratuito permite uso normal dentro das cotas, mas exportações administrativas completas podem depender das opções disponíveis no console e do plano vigente. Antes de ativar qualquer recurso cobrado, confirme custo e necessidade.

Para uma cópia simples de conferência, use o console para consultar os documentos. Para cópia integral futura, adote uma rotina de exportação somente depois de definir destino, periodicidade e custo.

## 6. Excluir um usuário

1. Localize o usuário em **Authentication → Users** e copie o identificador.
2. No Firestore, apague o documento correspondente em `users` e suas subcoleções.
3. Volte a **Authentication → Users** e exclua a conta.

Faça isso somente após confirmar a identidade e a solicitação. A estrutura foi organizada por identificador justamente para permitir essa exclusão.

## 7. Problemas comuns

- **Login não funciona:** confirme se o provedor E-mail/senha está ativado em Authentication.
- **Aula não sincroniza:** verifique a mensagem mostrada ao aluno, a conexão e se as regras do Firestore foram publicadas.
- **Permissão negada:** confirme se o aluno está autenticado e se tenta acessar apenas os próprios dados.
- **Configuração pendente:** confira `academia/js/firebase-config.js` e o cadastro do domínio autorizado no Firebase Authentication.
- **Cota gratuita atingida:** não ative faturamento automaticamente. Primeiro confirme a causa e a necessidade.

## 8. Nunca compartilhe

- senha;
- token privado;
- service account;
- chave privada;
- credencial administrativa;
- arquivo baixado de conta de serviço.

A configuração normal do SDK Web em `firebase-config.js` identifica o projeto no navegador e não substitui autenticação nem regras. A proteção real depende do login e de `firestore.rules`.

## 9. Quando sua intervenção é necessária

- autenticar a conta proprietária no Firebase;
- autorizar a criação ou seleção do projeto;
- decidir sobre qualquer serviço pago;
- responder a pedido de exclusão de dados;
- alterar domínio, propriedade ou configuração administrativa sensível.

## 10. Configuração implantada em 22/09/2026

- plano: **Spark**, sem cobrança;
- app Web: **Academia Mundo bit Byte Web**;
- Authentication: **E-mail/senha** ativo;
- Firestore: edição **Standard**, banco `(default)`;
- região dos dados: **southamerica-east1 (São Paulo)**;
- regras privadas: publicadas a partir de `firestore.rules`;
- Google Analytics: desativado na criação do projeto;
- Gemini no Firebase: desativado na criação do projeto;
- Firebase Hosting: não ativado, pois o site continua no fluxo de publicação existente.
