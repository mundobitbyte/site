# Checkpoint 3 — Servidor Ubuntu 24.04 LTS

O guia completo da página ensina instalação e dois adaptadores:
NAT temporário para downloads; Host-only para Windows ADM-01 (.30/26) ↔ SRV-01
(.20/26). Sem Bridge, gateway .1 inventado ou DNS automático da escola.
Confirme ausência de conflito dessa faixa com sua rede/VPN antes de criar.

1. Siga as aulas 01, 02 e 05 para VM, console, shell e Netplan. Adapte nomes de
   interfaces a partir de seus MACs, não da posição em um exemplo.
2. netplan-host-only.yaml é modelo comentado: não copie sem verificar arquivos existentes.
3. Use nginx-intranet.conf e index.html para uma página fictícia. Primeiro em loopback;
   remova apenas o link do site default na VM antes de recarregar, guardando a configuração.
4. Leia o guia Samba/UFW antes de usar samba-secretaria.conf. A seção depende do
   grupo secretaria, da conta ana em Linux/Samba e da pasta com modo 2770.
5. Execute backup-amostra.sh pelo usuário comum em um shell Linux de treino.
   Ele usa uma pasta nova temporária, sem apagar originais, e compara a restauração.
   A execução desse pequeno script no ambiente de revisão não comprova um servidor Ubuntu.
6. Preencha REGISTRO.md, resolva CASO-COMENTADO.md e faça o teste independente abaixo.

## Autonomia

“HTTP local funciona; do Windows falha.” Separe escuta loopback, endereço do cliente,
rede Host-only e UFW. Não libere todas as portas. Confira ss -ltn e a configuração;
preveja o efeito de escutar em .20 antes de alterar. Só exponha na interface didática
com regra mínima e console disponível. Refaça teste com curl.exe e cabeçalho Host.

## Recuperação e limites

Na VM, preserve cópias antes de editar e use console para retorno. Não execute mkfs
em nome de dispositivo de exemplo. A pasta /srv/escola no disco de sistema permite
serviços, mas não demonstra montagem independente. Backup na mesma VM não protege
contra perda do host. Não há OVA/VM pronta nem teste de instalação/serviço executado
por esta revisão. Testes com visitantes e várias VLANs exigem rede ampliada.

## Ponte

Guarde baseline, configurações sem segredos e teste de restauração. O módulo 4
reutiliza os conceitos; no percurso B use uma VM por vez e registre adaptações.
