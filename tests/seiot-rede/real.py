"""Testes reais de HTTP e mDNS em dois processos, sem mocks de rede."""
from pathlib import Path
import json
import os
import socket
import subprocess
import sys
import time
import unittest
from urllib.error import HTTPError
from urllib.request import ProxyHandler, build_opener

ROOT = Path(__file__).resolve().parents[2]
KIT = ROOT / "materiais/arduino/conectividade/rede-local"
GET = build_opener(ProxyHandler({})).open


def esperar_http():
    for _ in range(40):
        try:
            with GET("http://127.0.0.1:8000/", timeout=1) as resposta:
                return resposta.read()
        except OSError:
            time.sleep(0.1)
    raise AssertionError("HTTP local não iniciou")


class PraticaReal(unittest.TestCase):
    def test_http_restrito(self):
        p = subprocess.Popen([sys.executable, str(KIT / "servidor.py")], stdout=subprocess.DEVNULL)
        try:
            pagina = esperar_http()
            self.assertIn("bancada disponível".encode(), pagina)
            for caminho in ["/servidor.py", "/../", "/ligar"]:
                with self.assertRaises(HTTPError) as erro:
                    GET("http://127.0.0.1:8000" + caminho, timeout=2)
                self.assertEqual(erro.exception.code, 404)
            from urllib.request import Request
            with self.assertRaises(HTTPError) as erro:
                GET(Request("http://127.0.0.1:8000/", method="POST"), timeout=2)
            self.assertEqual(erro.exception.code, 501)
        finally:
            p.terminate()
            p.wait(timeout=5)

    def test_mdns_dois_processos_e_ausencia(self):
        p = subprocess.Popen([sys.executable, "-u", str(KIT / "mdns_local.py"), "anunciar"],
                             stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        try:
            linha = p.stdout.readline()
            self.assertIn("Anúncio ativo", linha)
            consulta = subprocess.run([sys.executable, str(KIT / "mdns_local.py"), "consultar"],
                                      capture_output=True, text=True, timeout=12)
            print(consulta.stdout, flush=True)
            self.assertEqual(consulta.returncode, 0, consulta.stderr)
            self.assertIn("ambiente-mbb.local.", consulta.stdout)
            self.assertIn("127.0.0.1", consulta.stdout)
            self.assertIn("8000", consulta.stdout)
        finally:
            p.terminate()
            p.wait(timeout=5)
            p.stdout.close()
            p.stderr.close()
        time.sleep(1)
        sem_anuncio = subprocess.run([sys.executable, str(KIT / "mdns_local.py"), "consultar"],
                                     capture_output=True, text=True, timeout=12)
        print(sem_anuncio.stdout, flush=True)
        self.assertEqual(sem_anuncio.returncode, 1, sem_anuncio.stderr)
        self.assertIn("Nenhuma resposta", sem_anuncio.stdout)


if __name__ == "__main__":
    unittest.main(verbosity=2)
