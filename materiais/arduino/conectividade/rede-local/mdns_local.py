"""Dois processos conversam por mDNS real na interface local do computador."""
import socket
import sys
import time
from zeroconf import IPVersion, ServiceInfo, Zeroconf

TIPO = "_http._tcp.local."
NOME = "Ambiente MbB._http._tcp.local."


def anunciar(rede):
    servico = ServiceInfo(
        TIPO, NOME, server="ambiente-mbb.local.", port=8000,
        addresses=[socket.inet_aton("127.0.0.1")],
    )
    rede.register_service(servico)
    print("Anúncio ativo: ambiente-mbb.local. / HTTP / porta 8000.", flush=True)
    print("Deixe este terminal aberto. Ctrl+C encerra o anúncio.", flush=True)
    try:
        while True:
            time.sleep(1)
    finally:
        rede.unregister_service(servico)


def consultar(rede):
    servico = rede.get_service_info(TIPO, NOME, timeout=5000)
    if servico is None:
        print("Nenhuma resposta em 5 segundos. Confira o terminal do anúncio.")
        return 1
    endereco = servico.parsed_addresses()[0]
    print("Nome descoberto:", servico.server)
    print("Endereço respondido:", endereco)
    print("Porta descoberta:", servico.port)
    print(f"Abra no navegador: http://{endereco}:{servico.port}/")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2 or sys.argv[1] not in ("anunciar", "consultar"):
        raise SystemExit("Use: python mdns_local.py anunciar OU consultar")
    rede = Zeroconf(interfaces=["127.0.0.1"], ip_version=IPVersion.V4Only)
    try:
        if sys.argv[1] == "anunciar":
            anunciar(rede)
        else:
            raise SystemExit(consultar(rede))
    except KeyboardInterrupt:
        print("Anúncio encerrado.")
    finally:
        rede.close()
