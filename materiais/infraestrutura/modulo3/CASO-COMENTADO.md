# Exemplo representativo, não execução de servidor

Sintoma: Ana lê, mas não salva arquivo novo. H1: falta de espaço; H2: permissão
ou identidade divergente. Primeiro registre mensagem e caminho. df -hT para o
filesystem desse caminho separa hipótese de falta de espaço; id ana, ls -ld da
pasta e testparm ajudam a examinar acesso. Não use chmod 777 nem apague logs.

Se espaço livre e grupo divergente forem demonstrados, corrija só a associação
autorizada, renove a sessão e teste com Ana. Ainda confirme Caio negado.
A condição é uma previsão de investigação: não há resultado de comando real aqui.
