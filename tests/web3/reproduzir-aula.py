"""Confere a construção ensinada contra os downloads, usando os trechos do HTML."""
from html.parser import HTMLParser
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'materiais/programacao-web/web3-capitulo1'
DOWNLOADS = ROOT / 'downloads/programacao-web'


class Trechos(HTMLParser):
    def __init__(self):
        super().__init__()
        self.atual = None
        self.trechos = {}

    def handle_starttag(self, tag, attrs):
        if tag == 'code':
            self.atual = dict(attrs).get('data-web3-trecho')
            if self.atual:
                self.trechos[self.atual] = ''

    def handle_endtag(self, tag):
        if tag == 'code':
            self.atual = None

    def handle_data(self, value):
        if self.atual:
            self.trechos[self.atual] += value


page = Trechos()
page.feed((ROOT / 'pages/programacao-web/web3.html').read_text())
t = page.trechos
with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web2-capitulo-12.zip') as z:
    path = next(p for p in z.namelist() if p.endswith('/public/index.php'))
    original = z.read(path).decode()
head, html = original.split('?>', 1)
primeiro = head.replace('$tempoEstimado = 25;', t['prazo-inicial']) + '?>'
with zipfile.ZipFile(DOWNLOADS / 'cafe-aurora-web3-balcao-base.zip') as z:
    assert z.namelist() == ['balcao.php'], 'A estrutura não pode substituir o projeto.'
    estrutura = z.read('balcao.php').decode()
assert estrutura == t['estrutura'] + '\n', 'O HTML alternativo diverge da estrutura baixada.'
assert primeiro + '\n' + estrutura == (SOURCE / 'balcao-primeira-versao.php.txt').read_text()
# A função preserva exatamente a decisão que o aluno copiou e alterou para 55.
decisao = primeiro.removeprefix('<?php\n').removesuffix('?>').strip()
decisao = decisao.replace('$tempoEstimado = 40;', '$tempoEstimado = 55;')
extraida = t['fonte'].split('{\n', 1)[1].split('\n    return [', 1)[0]
extraida = '\n'.join(line[4:] if line.startswith('    ') else line
                     for line in extraida.splitlines()).strip()
assert decisao == extraida, 'A extração mudou a decisão existente.'
esperados = {
    'public/index.php': t['consulta'] + html,
    'public/balcao.php': t['consulta'] + '\n' + estrutura,
    'src/atendimento.php': t['fonte'] + '\n',
}
assert esperados['public/balcao.php'] == t['balcao-final'] + '\n'
assert esperados['public/balcao.php'] == (SOURCE / 'balcao.php').read_text()
assert esperados['src/atendimento.php'] == (SOURCE / 'atendimento.php').read_text()
for name in ['cafe-aurora-web3-aula-1.zip', 'cafe-aurora-web3-capitulo-1.zip']:
    with zipfile.ZipFile(DOWNLOADS / name) as z:
        for path, expected in esperados.items():
            assert z.read('cafe-aurora-web3/' + path).decode() == expected, (name, path)
print('Construção da primeira aula reproduzida: trechos, estrutura e dois checkpoints conferem.')
