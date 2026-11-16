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
roteiro = {
    "b6-prep-diagrama": "diagram.json",
    "b6-prep-code": "blink.ino",
    "b6-1-code": "comandos.ino",
    "b6-2-wokwi-code": "wifi.ino",
    "b6-3-client-wokwi-code": "http-local.ino",
    "b6-4-wokwi-code": "mdns.ino",
    "b6-5-modelo-code": "tunel-modelo.ino",
}
assert set(pagina.programas) == set(roteiro), "Blocos de código inesperados no roteiro do aluno"
for identificador, arquivo in roteiro.items():
    fonte = ROOT / "materiais/arduino/conectividade/wokwi" / arquivo
    assert pagina.programas[identificador] == fonte.read_text().rstrip(), identificador
with ZipFile(ROOT / "downloads/arduino/ambiente-mbb-rede-local.zip") as zipado:
    assert set(zipado.namelist()) == {"LEIA-ME.md", "servidor.py", "mdns_local.py", "encaminhador_local.py", "requirements.txt"}
    for nome in zipado.namelist():
        assert zipado.read(nome) == (ROOT / "materiais/arduino/conectividade/rede-local" / nome).read_bytes(), nome
print("OK: seis sketches e o diagrama são idênticos aos fontes; cinco arquivos completos no ZIP anterior.")
