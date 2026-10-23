"""Gera checkpoints reproduzíveis sem modificar a base publicada de Web II."""
from pathlib import Path
import hashlib
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'materiais/programacao-web/web3-capitulo1'
BASE = ROOT / 'downloads/programacao-web/cafe-aurora-web2-capitulo-12.zip'
DEST = ROOT / 'downloads/programacao-web'


def files(final):
    with zipfile.ZipFile(BASE) as original:
        data = {p.split('/', 1)[1]: original.read(p) for p in original.namelist()
                if not p.endswith('/')}
    for p in ['atendimento.php', 'balcao.php']:
        data[('src/' if p == 'atendimento.php' else 'public/') + p] = (SOURCE / p).read_bytes()
    if final:
        index = data['public/index.php'].decode('utf-8')
        _, rest = index.split('?>', 1)
        head = (SOURCE / 'inicio-compartilhado.php.txt').read_text().rstrip()
        data['public/index.php'] = (head + rest).encode('utf-8')
    data['LEIA-ME-WEB3.md'] = (SOURCE / 'LEIA-ME.md').read_bytes()
    data['docs/verificacoes-capitulo-1.md'] = (
        '# Conferência do capítulo 1\n\n'
        'Origem da minha cópia: ...\n\n'
        '- [ ] Abri o balcão pelo servidor PHP local.\n'
        '- [ ] Identifiquei quem prepara a informação.\n'
        '- [ ] AltereI somente a fonte e comparei as duas páginas.\n'
        '- [ ] Testei atendimento aberto e encerrado.\n'
        '- [ ] Expliquei por que a aba aberta não muda sozinha.\n'
        '- [ ] Conferi o fluxo de mensagem fictícia do Web II.\n\n'
        'Registre ação, resultado esperado, observado e eventual correção.\n'
    ).replace('AltereI', 'Alterei').encode('utf-8')
    data['ORIGEM.md'] = (
        '# Origem da referência\n\n'
        'Base: cafe-aurora-web2-capitulo-12.zip\n\n'
        f'SHA-256 da base: {hashlib.sha256(BASE.read_bytes()).hexdigest()}\n\n'
        'Etapa: ' + ('Capítulo 1 concluído' if final else 'Aula 1 — intermediário') + '\n'
    ).encode('utf-8')
    return data


if __name__ == '__main__':
    for final, name in [(False, 'cafe-aurora-web3-aula-1.zip'),
                        (True, 'cafe-aurora-web3-capitulo-1.zip')]:
        target = DEST / name
        with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as out:
            for path, content in sorted(files(final).items()):
                info = zipfile.ZipInfo('cafe-aurora-web3/' + path, (2026, 10, 23, 0, 0, 0))
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                out.writestr(info, content)
        print(name, target.stat().st_size, hashlib.sha256(target.read_bytes()).hexdigest())
