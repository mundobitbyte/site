"""Gera somente os fontes da bancada, com nomes e datas reproduzíveis."""
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
ROOT = Path(__file__).resolve().parents[2]
origem = ROOT / "materiais/arduino/conectividade/rede-local"
destino = ROOT / "downloads/arduino/ambiente-mbb-rede-local.zip"
destino.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(destino, "w", compression=ZIP_DEFLATED) as zipado:
    for nome in ["LEIA-ME.md", "servidor.py", "mdns_local.py", "encaminhador_local.py", "requirements.txt"]:
        entrada = ZipInfo(nome, date_time=(2026, 10, 28, 0, 0, 0))
        entrada.compress_type = ZIP_DEFLATED
        entrada.external_attr = 0o100644 << 16
        zipado.writestr(entrada, (origem / nome).read_bytes())
print(destino.relative_to(ROOT))
