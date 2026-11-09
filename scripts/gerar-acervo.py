"""Atualiza o acervo estático a partir de data/acervo-musical.json. Sem dependências."""
import json
from pathlib import Path
from html import escape
from urllib.parse import urlsplit
ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'data/acervo-musical.json').read_text())
def e(value): return escape(str(value), quote=True)
cards = []
for i, song in enumerate(data['faixas'], 1):
    links = []
    for plataforma, url in song['plataformas'].items():
        parsed = urlsplit(url)
        if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
            raise ValueError('Link de plataforma deve usar HTTPS e não conter credenciais')
        links.append(f'<a class="rl-link" href="{e(url)}" target="_blank" rel="noopener noreferrer">Ouvir no {e(plataforma)}</a>')
    if song['audio']:
        destino = '#ouvir' if song['status'] == 'demo-site' else '#ouvir-' + song['id']
        texto = 'Ouvir demonstração ↑' if song['status'] == 'demo-site' else 'Ouvir esta faixa ↑'
        links.insert(0, f'<a class="rl-link" href="{e(destino)}">{texto}</a>')
    status = ('Áudio demonstrativo no site' if song['status'] == 'demo-site' else 'Ouça no site') if song['audio'] else 'Disponível em plataforma digital' if links else 'Disponibilidade em preparação'
    art = f'<img class="rl-art" src="{e(song["capa"])}" alt="Capa de {e(song["titulo"])}" loading="lazy" width="300" height="300">' if song['capa'] else '<div class="rl-art" aria-hidden="true"><div class="rl-disc">RL</div></div>'
    style = f'<p class="rl-credit">{e(song["estilo"])}</p>' if song['estilo'] else ''
    filter_status = 'disponivel' if song['plataformas'] and not song['audio'] else song['status']
    cards.append(f'<article class="rl-card" id="{e(song["id"])}" data-titulo="{e(song["titulo"])}" data-status="{e(filter_status)}">{art}<span class="rl-kicker">{i:02d} / Acervo autoral</span><h3>{e(song["titulo"])}</h3><p class="rl-credit">Letra e melodia: {e(song["autor"])}</p>{style}<span class="rl-status">{status}</span><p>{" · ".join(links)}</p><a class="rl-credit" href="#{e(song["id"])}" aria-label="Link direto para {e(song["titulo"])}">Link desta faixa</a></article>')
template = (ROOT / 'scripts/templates/acervo.html.in').read_text()
(ROOT / 'ronaldo-lavestein/index.html').write_text(template.replace('<!-- CATALOGO -->', '\n'.join(cards)).replace('<!-- TOTAL -->', str(len(cards))))
