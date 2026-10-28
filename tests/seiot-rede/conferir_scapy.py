"""Segunda leitura independente do PCAP real, usando decodificador Scapy."""
from scapy.all import rdpcap, DNS, UDP, IP
pacotes=rdpcap('docs/validacoes/seiot-rede-20261028/wokwi-mdns.pcap')
mdns=[p for p in pacotes if UDP in p and p[UDP].dport==5353]
assert len(pacotes)==135 and len(mdns)==6
assert sum(p[DNS].qr for p in mdns)==3
anuncios=[p for p in mdns if p[DNS].qr==1]
assert all(p[IP].src=='10.10.0.2' and p[IP].dst=='224.0.0.251' for p in mdns)
assert any(rr.type==1 and rr.rrname==b'ambiente-mbb.local.' and rr.rdata=='10.10.0.2'
           for p in anuncios for secao in ['an','ns','ar'] for rr in p[DNS].getfieldval(secao))
print('Scapy: 135 quadros, 6 pacotes mDNS, 3 sondagens e 3 anúncios; registro A correto.')
