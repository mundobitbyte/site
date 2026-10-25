"""Reconstrói somente as duas aulas do Capítulo 1 a partir da referência anterior.

Usa trechos da página publicada, cópia temporária e PHP via HTTP de loopback.
Não substitui instalação Windows/Laragon, navegador ou piloto com alunos.
"""
from contextlib import contextmanager
from html.parser import HTMLParser
from pathlib import Path
import http.cookiejar
import shutil
import socket
import subprocess
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[2]
DOWNLOADS = ROOT / "downloads/programacao-web"


def extrair(numero, destino):
    with zipfile.ZipFile(DOWNLOADS / f'cafe-aurora-web2-capitulo-{numero}.zip') as z:
        nomes = z.namelist()
        assert all(not Path(n).is_absolute() and '..' not in Path(n).parts for n in nomes)
        assert not any(n.endswith('.sqlite') or '/vendor/' in n for n in nomes)
        assert 'cafe-aurora-web2/public/index.php' in nomes
        assert 'cafe-aurora-web2/LEIA-ME.txt' in nomes
        z.extractall(destino)
    return destino / 'cafe-aurora-web2'


class SemRedirecionar(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


@contextmanager
def servidor(app):
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        port = s.getsockname()[1]
    proc = subprocess.Popen(['php', '-S', f'127.0.0.1:{port}', '-t', 'public'],
                            cwd=app, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    client = urllib.request.build_opener(
        urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()), SemRedirecionar())

    def request(path, data=None):
        encoded = None if data is None else urllib.parse.urlencode(data).encode()
        try:
            response = client.open(f'http://127.0.0.1:{port}{path}', encoded, timeout=5)
        except urllib.error.HTTPError as error:
            response = error
        with response:
            return response.code, response.headers, response.read().decode()

    try:
        for _ in range(100):
            try:
                request('/')
                break
            except urllib.error.URLError:
                time.sleep(.05)
        else:
            raise AssertionError('O servidor PHP não iniciou.')
        yield request
    finally:
        proc.terminate()
        proc.wait(timeout=10)


class Trechos(HTMLParser):
    def __init__(self):
        super().__init__()
        self.atual = None
        self.valores = {}

    def handle_starttag(self, tag, attrs):
        if tag == 'code':
            self.atual = dict(attrs).get('data-web3-trecho')
            if self.atual:
                self.valores[self.atual] = ''

    def handle_data(self, data):
        if self.atual:
            self.valores[self.atual] += data

    def handle_endtag(self, tag):
        if tag == 'code':
            self.atual = None


def auditar_ponte():
    p = Trechos()
    p.feed((ROOT / 'pages/programacao-web/web3.html').read_text())
    t = p.valores
    with tempfile.TemporaryDirectory() as tmp:
        app = extrair(12, Path(tmp))
        index = app / 'public/index.php'
        balcao = app / 'public/balcao.php'
        fonte = app / 'src/atendimento.php'
        inicio, html = index.read_text().split('?>', 1)
        inicial = inicio.replace('$tempoEstimado = 25;', t['prazo-inicial']) + '?>'
        index.write_text(inicial + html)
        with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web3-balcao-base.zip') as z:
            estrutura = z.read('balcao.php').decode()
        with servidor(app) as req:
            assert '40 minutos.' in req('/')[2]
            balcao.write_text(inicial + '\n' + estrutura)
            assert '40 minutos.' in req('/balcao.php')[2]
            balcao.write_text(balcao.read_text().replace('$tempoEstimado = 40;', '$tempoEstimado = 55;'))
            assert '55 minutos.' in req('/balcao.php')[2] and '40 minutos.' in req('/')[2]
            fonte.write_text(t['fonte'] + '\n')
            balcao.write_text(t['consulta'] + '\n' + estrutura)
            index.write_text(t['consulta'] + html)
            assert all('55 minutos.' in req(path)[2] for path in ['/', '/balcao.php'])
            fonte.write_text(fonte.read_text().replace('$tempoEstimado = 55;', '$tempoEstimado = 20;'))
            anterior = req('/balcao.php')[2]
            assert '20 minutos.' in anterior and '20 minutos.' in req('/')[2]
            fonte.write_text(fonte.read_text().replace('$tempoEstimado = 20;', '$tempoEstimado = 35;'))
            assert '20 minutos.' in anterior and '35 minutos.' in req('/')[2]
            assert '35 minutos.' in req('/balcao.php')[2]
            fonte.write_text(fonte.read_text().replace('$pedidosAbertos = true;', '$pedidosAbertos = false;'))
            for path in ['/', '/balcao.php']:
                pagina = req(path)[2]
                assert 'Pedidos para retirada estão encerrados.' in pagina and 'Tempo estimado:' not in pagina
            fonte.write_text(fonte.read_text().replace('$pedidosAbertos = false;', '$pedidosAbertos = true;'))
            assert all('35 minutos.' in req(path)[2] for path in ['/', '/balcao.php'])
    print('Ponte Web II → Capítulo 1: construção 40/55, fonte compartilhada, encerramento e respostas 20/35 conferidos por HTTP.')


if __name__ == '__main__':
    assert shutil.which('php'), 'PHP precisa estar disponível.'
    auditar_ponte()
