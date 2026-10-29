"""Gera os cinco ZIPs a partir das referências versionadas, sem executar laboratórios."""
from pathlib import Path
import hashlib, zipfile
ROOT = Path(__file__).resolve().parents[1]
def zip_name(path):
    name = path.as_posix()
    return name[:-8] if name.endswith('.exemplo') else name
for folder in ('modulo1', 'modulo2', 'modulo3', 'modulo4', 'integrador'):
    source = ROOT / 'materiais/infraestrutura' / folder
    files = sorted(p for p in source.rglob('*') if p.is_file() and p.name != 'SHA256SUMS.txt')
    manifest = '\n'.join(hashlib.sha256(p.read_bytes()).hexdigest() + '  ' + zip_name(p.relative_to(source)) for p in files) + '\n'
    (source / 'SHA256SUMS.txt').write_text(manifest)
    target = ROOT / 'downloads/infraestrutura' / (folder + '-referencia.zip')
    target.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as archive:
        for file in sorted(p for p in source.rglob('*') if p.is_file()):
            name = folder + '/' + zip_name(file.relative_to(source))
            info = zipfile.ZipInfo(name, (2026, 10, 29, 12, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(info, file.read_bytes())
    print(target.relative_to(ROOT))
