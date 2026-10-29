# Recuperação de referência — backup frio, somente dados fictícios

Este roteiro não foi executado pelo revisor em Docker; valide-o no laboratório
antes de confiar nele. Não é backup de produção. A cópia dos volumes em repouso
reduz inconsistência, mas exige parada e posterior teste da aplicação.

## 1. Identifique e pare

Na pasta do portal, registre os IDs e volumes antes de parar:

```
sudo docker compose ps -q db
sudo docker compose ps -q web
sudo docker compose images
```

Para cada ID retornado, execute `sudo docker inspect ID` e localize o mount de
/var/lib/mysql (db) e /var/www/html (web). Registre Name dos volumes reais, não
Source do diretório interno do Docker. Não copie um nome inventado.
`sudo docker image inspect IMAGEM` permite obter RepoDigests; guarde a referência
completa repo@sha256:... para usar na restauração. Não confie só na tag mutável.

```
sudo docker compose stop
sudo docker compose ps -a
```

Confirme ambos parados antes de copiar. Use pasta NOVA de backup na conta da VM,
com 700; preserve compose.yaml e os arquivos de segredos com acesso restrito.
O exemplo usa ~/backup-feira-01: se já existe, pare e escolha outro nome em tudo.

```
umask 077
mkdir -m 700 ~/backup-feira-01
cp compose.yaml ~/backup-feira-01/
cp -a secrets ~/backup-feira-01/
```

## 2. Copie os volumes identificados

Os textos VOLUME_DB e VOLUME_WEB abaixo devem ser substituídos pelos nomes
verificados. O volume de origem é somente leitura; tar grava apenas no destino
novo. A imagem auxiliar vem da origem oficial; confira-a antes do uso.

```
sudo docker run --rm -v VOLUME_DB:/origem:ro -v "$HOME/backup-feira-01:/copia" alpine:3 sh -c 'umask 077; tar -czf /copia/db.tgz -C /origem .'
sudo docker run --rm -v VOLUME_WEB:/origem:ro -v "$HOME/backup-feira-01:/copia" alpine:3 sh -c 'umask 077; tar -czf /copia/web.tgz -C /origem .'
sudo tar -tzf ~/backup-feira-01/db.tgz
sudo tar -tzf ~/backup-feira-01/web.tgz
```

Guarde digests junto à cópia. Reinicie o projeto original com
`sudo docker compose start` e repita seu teste funcional. Essa cópia no mesmo
host não protege contra perda do host: transfira backup protegido para destino
independente autorizado se esse objetivo fizer parte da entrega.

## 3. Restaure em OUTRO projeto, sem sobrescrever o original

1. Crie pasta nova ~/feira-restore-01; copie a configuração e os segredos do backup.
2. No Compose copiado, altere SÓ a publicação para 127.0.0.1:8081:80 e substitua
   images pelas referências repo@sha256:... registradas da origem. Isso evita
   restaurar dados antigos sobre uma imagem diferente sem avaliação.
3. Nessa pasta: `sudo docker compose -p mbb-restore-01 config --quiet`, depois
   `sudo docker compose -p mbb-restore-01 create`. Não inicie ainda.
4. Localize os NOVOS volumes com inspect dos IDs de
   `sudo docker compose -p mbb-restore-01 ps -aq db` e `... ps -aq web`.
   Confirme projeto, nomes e ausência de dados válidos. NÃO use volumes do original.
5. Extraia cada tar no novo volume correspondente. O exemplo abaixo é para DB;
   repita com NOVO_VOLUME_WEB e web.tgz. Somente origem de backup confiável:

```
sudo docker run --rm -v NOVO_VOLUME_DB:/destino -v "$HOME/backup-feira-01:/copia:ro" alpine:3 sh -c 'tar -xzf /copia/db.tgz -C /destino'
```

6. Rode `sudo docker compose -p mbb-restore-01 start`, leia ps/logs e abra túnel
   `ssh -N -L 8081:127.0.0.1:8081 joana@IP_DA_VM` no Windows.
7. O WordPress armazena a URL do site, originalmente :8080. Para testar sem
   redirecionar ao original, acrescente em environment do serviço web da cópia:

```
WORDPRESS_CONFIG_EXTRA: |
  define('WP_HOME', 'http://127.0.0.1:8081');
  define('WP_SITEURL', 'http://127.0.0.1:8081');
```

   Essa variável só tem efeito se o wp-config.php foi gerado pela imagem oficial
   com o trecho de configuração extra. Confira antes de iniciar. Alternativa:
   pare o original e teste a cópia com 8080, documentando que não houve simultaneidade.
   Depois da alteração, use `sudo docker compose -p mbb-restore-01 up -d`.
8. Faça login e confirme título E CONTEÚDO do post privado, mais a criação de um
   segundo post fictício. HTTP 200 sozinho não prova restauração do banco.
9. Encerre só a cópia com `sudo docker compose -p mbb-restore-01 down`, sem -v.
   Preserve os volumes e registros para inspeção, até autorização para descarte.

## Parada e retorno

Se qualquer volume/ID divergir, não extraia. Se a aplicação não recuperar, preserve
cópias, logs e original, sem atualizar a única instância válida. Voltar à imagem
anterior não desfaz uma migração de banco; retorno de dados exige cópia compatível.
