# Checkpoint 4 — Portal de Eventos local

Ambiente: Docker Engine e plugin Compose oficiais dentro do Ubuntu 24.04 LTS.
As composições foram conferidas como texto/YAML; o ambiente de revisão não dispõe
de Docker e não executou pull, configuração pelo plugin nem a aplicação.
Confira disponibilidade, suporte e digests reais antes de usar as tags:
https://hub.docker.com/_/wordpress e https://hub.docker.com/_/mariadb

## Escolha compatível

A — interprete a composição e os casos, sem alegar execução.
B — uma VM por vez: ensaio leve se faltar margem. Não force WordPress/banco.
C — VM de aplicação separada quando houver capacidade, IP diferente do SRV-01.
O ensaio leve não comprova escrita no banco nem recuperação WordPress.

## Preparação

Transfira o kit para pasta nova da VM. cd nessa pasta. Não use segredos de outro
portal. Para um projeto novo, no shell da VM:

```
umask 077
mkdir -p secrets
openssl rand -hex 24 > secrets/db_password.txt
openssl rand -hex 24 > secrets/db_root_password.txt
chmod 700 secrets
chmod 600 secrets/*.txt
sudo docker compose config --quiet
sudo docker compose pull
sudo docker compose up -d
sudo docker compose ps
sudo docker compose logs --tail=50
```

Não gere novos segredos para um banco já inicializado: isso não redefine a senha
no banco. Se precisar voltar ao projeto antigo, preserve o diretório original.
`config --quiet` verifica configuração, não prontidão. `depends_on` sem healthcheck
não garante que o banco já aceitou conexões. Aguarde e leia logs se o HTTP falhar.
Registre `sudo docker compose images` e os digests baixados sem divulgar segredos.

No PowerShell Windows, use o IP real da VM no túnel:

```
ssh -N -L 8080:127.0.0.1:8080 joana@192.168.10.20
```

Mantenha a sessão aberta e acesse http://127.0.0.1:8080 no Windows.
Conclua a instalação WordPress com identidade fictícia e senha exclusiva.
Em Posts → Adicionar novo, crie “Teste da Feira 001”, conteúdo fictício,
visibilidade Privado. WordPress básico NÃO oferece formulário de inscrições.
Pare com `sudo docker compose down`, suba novamente e confirme o post após login.
Não use `down -v`, que remove volumes.

## Ensaio leve

Na mesma pasta, sem o portal ocupando 8080:
`sudo docker compose -p mbb-leve -f compose-leve.yaml up -d`
Use o túnel e confira o texto do arquivo html/index.html. Pare somente esse projeto
com `sudo docker compose -p mbb-leve -f compose-leve.yaml down`.
Ele demonstra HTTP e bind somente leitura, não o banco do projeto principal.

## Segurança e recuperação

O bind 127.0.0.1 impede a publicação deliberada em todas as interfaces. Não omita
essa parte. Docker pode contornar regras UFW em portas publicadas; UFW sozinho
não é garantia de isolamento Docker. Não monte socket, / ou use --privileged.
Segredos locais não são cofre. Backup pode conter senhas: não o publique.
Leia RECUPERACAO.md antes de atualização; a cópia é feita com serviços parados.

## Autonomia

Caso: contêiner web está em execução, mas o WordPress mostra erro de conexão.
Compare configuração, saúde/log do banco e credenciais entregues. Não publique
3306, não recrie volumes nem faça nova geração de senhas ao acaso. Registre H1/H2.
Depois compare com CASO-COMENTADO.md e preencha ADR.md.

## Ponte

Guarde configurações sem valores secretos, digests, teste de post persistente,
restauração isolada e limitações. O integrador reutiliza esse conjunto.
