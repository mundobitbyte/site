# Caso representativo

SEC-02 abre a página por IP, mas não por nome. O DNS do PC aponta para .250;
SRV-SIM oferece DNS em .20. H1: resolução incorreta; H2: HTTP indisponível.
Teste que separa: abrir o mesmo IP na mesma condição e consultar o nome no DNS
configurado. O sucesso por IP enfraquece uma indisponibilidade total do HTTP.
Correção proposta: restaurar o DNS .20 conforme o projeto, testar nome novamente e
registrar horário. Não reiniciar todo o cenário. Isso é exemplo interpretativo;
a execução depende de você construir e testar o projeto.
