# Redes — construção gradual no Cisco Packet Tracer

Referência consultada: Packet Tracer 9.0.1. Confirme versão e requisitos na Cisco
Networking Academy: https://www.netacad.com/resources/lab-downloads
É necessário acesso gratuito à conta. O programa atual pede 4 GB de RAM livres:
não se presume compatibilidade com um PC que tenha apenas 4 GB instalados.

Este kit fornece topologia e configurações textuais revisadas; NÃO contém arquivo
.pkt previamente executado. Salve seus próprios projetos e registre os testes.
A execução e a compatibilidade no simulador ainda precisam ser verificadas.

## 1 — horizonte-01.pkt: uma LAN

1. File → New, área Logical. Network Devices → Switches: arraste 2960 (SW-01).
2. End Devices: dois PC-PT (SEC-02 e ADM-01).
3. Connections → Copper Straight-Through: SEC-02 FastEthernet0 para SW-01 Fa0/1;
   ADM-01 FastEthernet0 para SW-01 Fa0/2. Aguarde os links.
4. PC → Desktop → IP Configuration → Static:
   SEC-02 192.168.10.22, ADM-01 192.168.10.30; máscara 255.255.255.0 nos dois.
   Nesta etapa deixe gateway e DNS vazios, pois não existem serviços correspondentes.
5. SEC-02 → Desktop → Command Prompt → ping 192.168.10.30.
   Registre a possível resolução inicial de ARP; repita o teste.
6. File → Save As. Feche e reabra o arquivo. Essa é sua primeira evidência.

## 2 — horizonte-02-servicos.pkt: HTTP, DNS e DHCP

1. Faça Save As antes de alterar. Adicione Server-PT SRV-SIM à Fa0/3.
2. Desktop → IP Configuration: IP .20, máscara 255.255.255.0.
3. Services → HTTP → On. No SEC-02, Web Browser → http://192.168.10.20.
4. Services → DNS → On: registro A intranet.escolahorizonte.example → 192.168.10.20.
   Nos PCs, DNS = .20. Abra o nome no navegador.
5. Para DHCP, em Services → DHCP, crie pool HORIZONTE: início .100, máscara /24,
   DNS .20, máximo 20 clientes. Deixe gateway 0.0.0.0 enquanto não há roteador.
   Salve/ative; em ADM-01 → IP Configuration → DHCP. Registre o IP obtido.
6. Troque só o DNS de SEC-02 para .250; preveja e compare IP/nome; restaure .20.
   Depois desligue só HTTP e compare ping/página; reative HTTP.
7. Salve. O Server-PT concentra serviços por simplicidade. Não finja que o DNS
   .1 do caso narrado já foi criado. O .example é exclusivamente didático.

## 3 — horizonte-03-rotas.pkt: duas LANs sem internet

Em um arquivo novo ou cópia documentada:
- Router 2911 RTR-01; Switch 2960 SW-01 e SW-02.
- RTR-01 G0/0 para SW-01 G0/1; RTR-01 G0/1 para SW-02 G0/1.
- SEC-02 em SW-01 Fa0/1: .22/26, gateway .1.
- LAB-06 em SW-02 Fa0/1: .70/26, gateway .65.
Abra RTR-01 → CLI; se perguntar por configuração inicial, responda no.
Confira nomes reais com show ip interface brief. Digite uma linha por vez:

```
enable
configure terminal
hostname RTR-01
interface GigabitEthernet0/0
ip address 192.168.10.1 255.255.255.192
no shutdown
exit
interface GigabitEthernet0/1
ip address 192.168.10.65 255.255.255.192
no shutdown
end
show ip interface brief
show ip route
copy running-config startup-config
```

`enable` entra no modo privilegiado; `configure terminal` edita; `interface`
seleciona a placa; `ip address` configura IP/máscara; `no shutdown` ativa a placa;
`exit` volta um nível e `end` sai da edição. `show` consulta. `copy` salva.
Confira o destino solicitado pela cópia e confirme sem alterar nomes por impulso.

Teste primeiro .1 a partir de SEC-02 e .65 de LAB-06; depois .22 ↔ .70.
Sem rota externa, não há internet/NAT neste projeto. Essa é uma limitação prevista,
não motivo para ligar o simulador à sua rede real.

## 4 — horizonte-04-vlans.pkt: três grupos e uma política

Construa este estágio em arquivo separado; não aplique por cima do roteador de
etapa 3 sem retirar/documentar a configuração anterior.
Use 2960 SW-01: Fa0/1 SEC-02 (.22/26), Fa0/2 LAB-06 (.70/26), Fa0/3
VIS-01 (.130/26), Fa0/4 SRV-SIM (.20/26). Trunk G0/1 para RTR-01 G0/0.
Gateways: .1, .65, .129 respectivamente. DNS simulado .20 quando necessário.
Insira SW-01-vlan.txt e RTR-01-vlan.txt linha a linha no dispositivo indicado,
conferindo nomes de interfaces. Não cole em equipamento físico.
No SRV-SIM, use Static /26, gateway .1, HTTP On e DNS já descrito na etapa 2.

## Matriz de referência e validação

Veja enderecamento.csv e TESTES.csv. Primeiro comprove cada gateway; depois:
- SEC-02 → SRV-SIM HTTP permitido;
- LAB-06 → SRV-SIM HTTP permitido pelo roteamento;
- VIS-01 → gateway .129 permitido (controle positivo);
- VIS-01 → rede funcionários negado pela ACL.
A ACL demonstrada nega visitantes para as duas redes internas. Este arquivo não
simula saída para internet nem comprova controle de todas as portas.
VLAN por si só não é firewall. O exemplo também não protege ativos na mesma VLAN
entre si: autorização da aplicação e firewall no host continuam necessários.

## Incidente e autonomia

Escolha só UMA falha em cópia salva: DNS divergente OU HTTP Off OU cabo retirado.
Preveja o teste, registre antes/depois e restaure o estado anterior.
Sem simulador, interprete esses casos no REGISTRO.md; marque execução como pendente.
Não simule interferência Wi-Fi com um simples desenho de cobertura.

## Ponte para Linux

Os IPs do módulo 3 retomam a LAN de funcionários /26. Packet Tracer e VirtualBox
são ambientes separados: a topologia daqui não cria gateway/DNS dentro da VM.
