# Café Aurora — Web III, Capítulo 1

Continue em uma cópia da sua entrega do Web II. O material didático fica no site;
o PHP é executado no seu computador, como nas aulas anteriores.

## Abrindo a referência

Se precisar recuperar a prática, descompacte o checkpoint em outra pasta e abra
`cafe-aurora-web3` no editor. No terminal dessa pasta, execute:

```sh
php -S localhost:8000 -t public
```

Abra `http://localhost:8000/` e `http://localhost:8000/balcao.php` em abas separadas.
As duas já consultam `src/atendimento.php`. A referência mantém 55 minutos;
os valores escolhidos durante as experiências podem ser diferentes na sua cópia.

## O que conferir

- Aula 1: altere o prazo somente em `src/atendimento.php`, salve e recarregue as
  duas páginas. Ambas devem receber a mudança. A ligação fica completa nesta aula.
- Aula 2: confira atendimento aberto e encerrado. Depois deixe o balcão aberto,
  altere o prazo e recarregue somente o site. Compare e então recarregue o balcão.
  Uma aba aberta ainda mostra a resposta que recebeu antes da alteração.

O checkpoint da aula 1 e a referência do capítulo têm o mesmo código. A segunda
aula investiga seu comportamento; não acrescenta outra versão do projeto.
Use `docs/verificacoes-capitulo-1.md` se quiser registrar os resultados.

## Estrutura do balcão

O ZIP `cafe-aurora-web3-balcao-base.zip` é diferente dos checkpoints: contém somente
o HTML de `balcao.php`. Copie esse arquivo para `public` da sua cópia do Web II e
acrescente o primeiro bloco PHP da página inicial, como orienta a primeira aula.
Ele usa o CSS já existente. Antes de acrescentar o PHP, as variáveis ainda não
estão preparadas; por isso a aula pede essa edição antes de abrir a tela.

## Arquivos do capítulo

- `public/balcao.php`: apresentação curta para a consulta do atendimento.
- `src/atendimento.php`: função que prepara os três textos usados pelas páginas.
- `public/index.php`: somente o primeiro bloco PHP mudou; o HTML foi preservado.

O trecho `inicio-compartilhado.php.txt` serve para substituir somente o primeiro
bloco PHP de cada página. Não substitua o HTML que vem depois.

Os demais arquivos do Web II foram preservados. O pacote não inclui banco,
credenciais, dependências `vendor` nem dados de clientes. Para conferir o contato
e o painel na referência, prepare sua cópia com os comandos do Web II:

```sh
php src/verificar-ambiente.php
php src/inicializar-banco.php
php src/criar-administrador.php
```

Crie uma credencial local pelo terminal e use dados fictícios na conferência.
O projeto mantém PHP ^8.5, PDO/SQLite e PHPUnit ^13.0. Para repetir a suíte:
`composer install` e `composer test`. Não há dependências novas neste capítulo.

As mudanças do prazo são feitas pelo aluno no papel de desenvolvedor. Ainda não
há painel para editar esse prazo nem atualização automática de uma aba aberta.

© 2026 Mundo bit Byte — Ronaldo Lavestein. Uso conforme os direitos do site.
