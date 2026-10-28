"""Confere os programas que o aluno copia e os arquivos que baixa."""
from html.parser import HTMLParser
from pathlib import Path
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[2]


class Programas(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.programas = {}
        self.atual = None

    def handle_starttag(self, tag, attrs):
        if tag == "pre":
            self.atual = dict(attrs).get("id")
            if self.atual:
                self.programas[self.atual] = ""

    def handle_endtag(self, tag):
        if tag == "pre":
            self.atual = None

    def handle_data(self, texto):
        if self.atual:
            self.programas[self.atual] += texto


pagina = Programas()
pagina.feed((ROOT / "pages/arduino-conectividade.html").read_text())
for identificador, arquivo in {
    "b6-4-wokwi-code": "mdns-wokwi.ino",
    "b6-4-code": "mdns-fisico.ino",
    "b6-5-fisico-code": "http-leitura-fisico.ino",
    "b6-5-python-code": "rede-local/servidor.py",
}.items():
    fonte = ROOT / "materiais/arduino/conectividade" / arquivo
    assert pagina.programas[identificador] == fonte.read_text().rstrip(), identificador
with ZipFile(ROOT / "downloads/arduino/ambiente-mbb-rede-local.zip") as zipado:
    assert set(zipado.namelist()) == {"LEIA-ME.md", "servidor.py", "mdns_local.py", "encaminhador_local.py", "requirements.txt"}
    for nome in zipado.namelist():
        assert zipado.read(nome) == (ROOT / "materiais/arduino/conectividade/rede-local" / nome).read_bytes(), nome
print("OK: quatro programas copiados são idênticos aos fontes; cinco arquivos completos no ZIP.")
