"""Executa os downloads reais em PHP local; nunca usa a infraestrutura do site."""
from pathlib import Path
import http.cookiejar
import json
import re
import shutil
import socket
import subprocess
import tempfile
import time
import unittest
import urllib.error
import urllib.parse
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[2]
DOWNLOADS = ROOT / 'downloads/programacao-web'


class Pratica(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.base = Path(self.tmp.name)
        with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web3-capitulo-1.zip') as z:
            z.extractall(self.base)
        self.app = self.base / 'cafe-aurora-web3'
        self.port = self.free_port()
        self.proc = subprocess.Popen(['php', '-S', f'127.0.0.1:{self.port}', '-t', 'public'],
                                     cwd=self.app, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        self.client = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
        for _ in range(100):
            try:
                self.get('/')
                break
            except OSError:
                time.sleep(.05)
        else:
            self.fail('Servidor PHP não iniciou.')

    def tearDown(self):
        self.proc.terminate()
        self.proc.wait(timeout=10)
        self.tmp.cleanup()

    @staticmethod
    def free_port():
        with socket.socket() as s:
            s.bind(('127.0.0.1', 0))
            return s.getsockname()[1]

    def get(self, path):
        with self.client.open(f'http://127.0.0.1:{self.port}'+path, timeout=5) as r:
            return r.read().decode()

    def post(self, path, values):
        with self.client.open(f'http://127.0.0.1:{self.port}'+path,
                              urllib.parse.urlencode(values).encode(), timeout=5) as r:
            return r.read().decode()

    def change(self, old, new):
        p = self.app / 'src/atendimento.php'
        p.write_text(p.read_text().replace(old, new))

    def test_01_sintaxe_de_todos_os_arquivos_php(self):
        for p in self.app.rglob('*.php'):
            self.assertEqual(subprocess.run(['php', '-l', str(p)], capture_output=True).returncode, 0, str(p))

    def test_02_duas_paginas_e_css(self):
        for path in ['/', '/balcao.php']:
            self.assertIn('Tempo estimado: 55 minutos.', self.get(path))
        self.assertIn('body', self.get('/css/styles.css'))

    def test_03_alteracao_unica_em_dois_consumidores(self):
        self.change('$tempoEstimado = 55;', '$tempoEstimado = 40;')
        for path in ['/', '/balcao.php']:
            self.assertIn('Tempo estimado: 40 minutos.', self.get(path))
            self.assertNotIn('Tempo estimado: 55 minutos.', self.get(path))

    def test_04_encerrado_nao_oferece_estimativa(self):
        self.change('$pedidosAbertos = true;', '$pedidosAbertos = false;')
        for path in ['/', '/balcao.php']:
            html = self.get(path)
            self.assertIn('Pedidos para retirada estão encerrados.', html)
            self.assertNotIn('Tempo estimado: 55', html)

    def test_05_resposta_anterior_nao_e_atualizacao_automatica(self):
        anterior = self.get('/balcao.php')
        self.change('$tempoEstimado = 55;', '$tempoEstimado = 65;')
        self.assertIn('Tempo estimado: 55 minutos.', anterior)
        self.assertIn('Tempo estimado: 65 minutos.', self.get('/balcao.php'))

    def test_06_fonte_fora_da_raiz_publica(self):
        marker = 'DADO-PRIVADO-DO-TESTE-WEB3'
        (self.app / 'dados/cafe-aurora.sqlite').write_bytes(b'SQLite format 3\x00' + marker.encode())
        homepage = self.get('/')
        for path in ['/src/atendimento.php', '/dados/cafe-aurora.sqlite']:
            try:
                # O servidor embutido pode usar index.php como fallback para URL inexistente.
                # 200 com a página pública não significa que o arquivo privado foi servido.
                response = self.get(path)
            except urllib.error.HTTPError as error:
                self.assertEqual(error.code, 404)
                error.close()
            else:
                self.assertEqual(response, homepage)
                self.assertNotIn('function obterAtendimento', response)
                self.assertNotIn(marker, response)
                self.assertNotIn('SQLite format 3', response)

    def test_07_html_do_site_e_demais_arquivos_preservados(self):
        with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web2-capitulo-12.zip') as z:
            original = {p.split('/', 1)[1]: z.read(p) for p in z.namelist() if not p.endswith('/')}
        current = (self.app / 'public/index.php').read_bytes()
        self.assertEqual(current.split(b'?>', 1)[1], original['public/index.php'].split(b'?>', 1)[1])
        for path, content in original.items():
            if path != 'public/index.php':
                self.assertEqual((self.app / path).read_bytes(), content, path)
        self.assertIn('Cardápio', self.get('/cardapio.php'))

    def test_08_primeira_aula_ja_conecta_as_duas_paginas(self):
        with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web3-aula-1.zip') as z:
            index = z.read('cafe-aurora-web3/public/index.php').decode()
            self.assertIn('obterAtendimento', index)
            self.assertIn('obterAtendimento', z.read('cafe-aurora-web3/public/balcao.php').decode())
            self.assertIn('duas páginas conectadas', z.read('cafe-aurora-web3/ORIGEM.md').decode())
            for name in ['public/index.php', 'public/balcao.php', 'src/atendimento.php']:
                self.assertEqual(z.read('cafe-aurora-web3/' + name), (self.app / name).read_bytes())

    def test_09_erro_de_inclusao_identificavel(self):
        (self.app / 'src/atendimento.php').rename(self.app / 'src/atendimento-ausente.php')
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.get('/balcao.php')
        self.assertEqual(error.exception.code, 500)
        error.exception.close()

    def test_10_mensagem_persistida_e_painel_autenticado(self):
        subprocess.run(['php', 'src/inicializar-banco.php'], cwd=self.app, check=True, capture_output=True)
        subprocess.run(['php', 'src/criar-administrador.php'], cwd=self.app,
                       input='operador-teste\nUmaSenhaFicticia123!\n', text=True, check=True, capture_output=True)
        token = re.search(r'name="csrf_token" value="([^"]+)"', self.get('/contato.php'))[1]
        result = self.post('/contato.php', {'csrf_token': token, 'nome': 'Aluno fictício',
                          'email': 'aluno@example.test', 'assunto': 'duvida',
                          'mensagem': 'Mensagem fictícia para conferir a entrega.'})
        self.assertIn('Mensagem registrada com sucesso.', result)
        token = re.search(r'name="csrf_token" value="([^"]+)"', self.get('/admin/entrar.php'))[1]
        panel = self.post('/admin/entrar.php', {'csrf_token': token, 'usuario': 'operador-teste',
                                             'senha': 'UmaSenhaFicticia123!'})
        self.assertIn('Aluno fictício', panel)
        self.assertIn('Mensagem fictícia para conferir a entrega.', panel)
        self.assertNotIn('name="senha"', panel)


if __name__ == '__main__':
    import sys
    composer = '--composer' in sys.argv
    sys.argv = [sys.argv[0]]
    result = unittest.main(verbosity=2, exit=False)
    if not result.result.wasSuccessful():
        raise SystemExit(1)
    if composer:
        with tempfile.TemporaryDirectory() as tmp:
            with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web3-capitulo-1.zip') as z:
                z.extractall(tmp)
            app = Path(tmp) / 'cafe-aurora-web3'
            subprocess.run(['composer', 'install', '--no-interaction', '--no-progress'], cwd=app, check=True)
            subprocess.run(['composer', 'test'], cwd=app, check=True)
