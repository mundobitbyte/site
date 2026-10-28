"""Ensaio externo autorizado: somente aviso fictício, sem arquivos nem comandos."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
import time
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[2]
exe = os.environ['MBB_CLOUDFLARED']
resultado = {'cliente': 'cloudflared 2026.10.5', 'servidor': 'aviso fictício somente leitura'}
servidor = subprocess.Popen([sys.executable, str(ROOT / 'materiais/arduino/conectividade/rede-local/servidor.py')], stdout=subprocess.DEVNULL)
try:
    for tentativa in range(40):
        try:
            with urlopen('http://127.0.0.1:8000/', timeout=2) as r:
                local = r.read()
            break
        except OSError:
            time.sleep(0.1)
    else:
        raise AssertionError('Servidor local indisponível')
    with tempfile.TemporaryFile(mode='w+') as log:
        tunel = subprocess.Popen([exe, 'tunnel', '--url', 'http://127.0.0.1:8000', '--protocol', 'http2', '--no-autoupdate'], stdout=log, stderr=log)
        try:
            for _ in range(60):
                log.seek(0)
                texto = log.read()
                urls = re.findall(r'https://[a-z0-9-]+\.trycloudflare\.com', texto)
                if urls:
                    url = urls[-1]
                    resultado['url_temporaria'] = url
                    break
                if tunel.poll() is not None:
                    raise AssertionError(texto)
                time.sleep(1)
            else:
                raise AssertionError('Nenhuma URL de teste foi fornecida')
            for _ in range(18):
                try:
                    with urlopen(url + '/', timeout=8) as r:
                        publico = r.read()
                        status = r.status
                    if publico == local:
                        break
                except OSError:
                    pass
                time.sleep(2)
            else:
                log.seek(0)
                raise AssertionError('Acesso externo não comprovado: ' + log.read())
            resultado.update(http_publico=status, conteudo_igual=publico == local,
                             sha256=hashlib.sha256(publico).hexdigest())
        finally:
            tunel.terminate()
            tunel.wait(timeout=15)
        for _ in range(12):
            try:
                with urlopen(url + '/', timeout=6) as r:
                    ainda_publico = r.read() == local
            except OSError:
                ainda_publico = False
            if not ainda_publico:
                break
            time.sleep(2)
        else:
            raise AssertionError('Aviso ainda alcançável depois de encerrar o túnel')
        with urlopen('http://127.0.0.1:8000/', timeout=2) as r:
            assert r.read() == local
        resultado.update(tunel_encerrado=True, acesso_local_preservado=True)
finally:
    servidor.terminate()
    servidor.wait(timeout=5)
print(json.dumps(resultado, ensure_ascii=False, indent=2))
