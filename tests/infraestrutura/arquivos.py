"""Confere integridade e isolamento das referências entregues, sem simular Docker/VM."""
from pathlib import Path
import hashlib, ipaddress, csv, zipfile
ROOT=Path(__file__).resolve().parents[2]
for folder in ('modulo1','modulo2','modulo3','modulo4','integrador'):
    with zipfile.ZipFile(ROOT/'downloads/infraestrutura'/f'{folder}-referencia.zip') as archive:
        assert archive.testzip() is None
        manifest=archive.read(f'{folder}/SHA256SUMS.txt').decode()
        for line in manifest.splitlines():
            digest,name=line.split('  ',1)
            assert '..' not in Path(name).parts and not name.startswith('/')
            assert hashlib.sha256(archive.read(f'{folder}/{name}')).hexdigest()==digest
        assert not any('/secrets/' in name for name in archive.namelist())
        assert f'{folder}/REGISTRO.md' in archive.namelist()
        if folder=='modulo4':
            assert f'{folder}/html/index.html' in archive.namelist()
            assert b'127.0.0.1:8080:80' in archive.read(f'{folder}/compose.yaml')
            assert b'privileged:' not in archive.read(f'{folder}/compose.yaml')
        print(f'ZIP {folder}: arquivos e hashes conferidos')
with (ROOT/'materiais/infraestrutura/modulo2/enderecamento.csv').open() as f:
    ips=set()
    for row in csv.DictReader(f,delimiter=';'):
        address=ipaddress.IPv4Address(row['ipv4']); assert address not in ips; ips.add(address)
        network=ipaddress.IPv4Network(row['ipv4']+'/'+row['mascara'],strict=False)
        assert ipaddress.IPv4Address(row['gateway']) in network
        assert address not in (network.network_address,network.broadcast_address)
print('Endereçamento: IPs únicos, gateways no prefixo e hosts utilizáveis')
