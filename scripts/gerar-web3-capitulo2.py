"""Publica somente as aulas concluídas do Capítulo 2 e gera checkpoints determinísticos."""
from pathlib import Path
import json, re, html, zipfile, hashlib

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "materiais/programacao-web/web3-capitulo2"
DOWNLOADS = ROOT / "downloads/programacao-web"
BASE = DOWNLOADS / "cafe-aurora-web3-capitulo-1.zip"
MANIFEST = json.loads((SOURCE / "capitulo.json").read_text())
AULAS = MANIFEST["aulas"]

def nome(n):
    return f"web3-capitulo2-aula{n}.html"

def dados(n):
    with zipfile.ZipFile(BASE) as z:
        data = {p.split("/", 1)[1]: z.read(p) for p in z.namelist() if not p.endswith("/")}
    data["src/atendimento.php"] = data["src/atendimento.php"].replace(b"$tempoEstimado = 55;", b"$tempoEstimado = 30;")
    data["public/api/atendimento.php"] = (SOURCE / "aula1/api.php").read_bytes()
    for k in range(2, n + 1):
        mapa = SOURCE / f"aula{k}/arquivos.json"
        if mapa.exists():
            for destino, origem in json.loads(mapa.read_text()).items():
                if origem.startswith("@kit:"):
                    with zipfile.ZipFile(DOWNLOADS / "cafe-aurora-typescript-essencial.zip") as kit:
                        data[destino] = kit.read("cafe-aurora-typescript/"+origem[5:])
                else:
                    data[destino] = (SOURCE / f"aula{k}" / origem).read_bytes()
    data["LEIA-ME-CAPITULO-2.md"] = (
        f"# Café Aurora — Capítulo 2, fim da Aula {n}\n\n"
        "Referência para conferir em outra pasta. Preserve a sua solução e suas escolhas.\n"
        "Base: checkpoint final do Capítulo 1. Sem banco de dados, credenciais, vendor ou node_modules.\n\n"
        "Na raiz da aplicação, inicie: php -d opcache.enable=0 -S localhost:8000 -t public\n"
        "Abra http://localhost:8000/balcao.php e http://localhost:8000/api/atendimento.php.\n"
        + ("\nEm cliente-balcao, execute npm ci e npm run build. A saída é public/js/balcao/main.js.\n"
           "Alterou TypeScript: build e recarregamento. Alterou PHP: nova consulta, sem build.\n" if n >= 2 else "")
        + "\nOs comandos são explicados na aula correspondente. O servidor embutido é para desenvolvimento local.\n"
        "Para mensagens/painel, retome a preparação de banco e administrador ensinada no Web II/Capítulo 1.\n"
    ).encode()
    data["ORIGEM.md"] = (
        f"# Origem\n\nBase: {BASE.name}\nSHA-256: {hashlib.sha256(BASE.read_bytes()).hexdigest()}\n"
        f"Etapa: Capítulo 2, Aula {n}.\nPrazo de referência: 30 minutos, pedidos abertos.\n"
    ).encode()
    return data

def codigo(path, destino, modo="arquivo"):
    return ('<pre class="code-block"><code data-cap2-file="' + destino
            + '" data-cap2-mode="' + modo + '">' + html.escape(path.read_text().rstrip())
            + '</code></pre>')

def trecho(aula):
    n = aula["numero"]
    s = (SOURCE / f"aula{n}/conteudo.html.txt").read_text()
    for chave, arquivo in [("api-inicial", "api-inicial.php"), ("api", "api.php")]:
        if "{{codigo:" + chave + "}}" in s:
            s = s.replace("{{codigo:" + chave + "}}", codigo(SOURCE / f"aula{n}" / arquivo, "public/api/atendimento.php"))
    mapa = SOURCE / f"aula{n}/arquivos.json"
    if mapa.exists():
        for destino, origem in json.loads(mapa.read_text()).items():
            marca = "{{arquivo:" + destino + "}}"
            if marca in s:
                s = s.replace(marca, codigo(SOURCE / f"aula{n}" / origem, destino))
    disponibilidade = (
        f"Esta aula e a Aula {n+1} estão disponíveis."
        if n < len(AULAS) else
        (f"As {len(AULAS)} aulas deste capítulo estão disponíveis." if len(AULAS) == 7 else
         f"{'Aula 1 disponível' if len(AULAS)==1 else str(len(AULAS))+' aulas disponíveis'}. As próximas continuam em preparação.")
    )
    s = s.replace("{{disponibilidade}}", disponibilidade)
    assert "{{" not in s, f"Marcador sem preenchimento na aula {n}"
    return s

def pagina(aula):
    n = aula["numero"]
    titulo = aula["titulo"]
    menu = "".join(
        f'<a class="chapter-link{" active" if a["numero"]==n else ""}" '
        + ('aria-current="page" ' if a["numero"]==n else "")
        + f'href="{nome(a["numero"])}#capitulo-2">{a["numero"]}. {a["titulo"]}</a>\n'
        for a in AULAS)
    anterior = ('<a href="web3-typescript.html#ts-checkpoint-final">← TypeScript Essencial</a>' if n == 1 else
                f'<a href="{nome(n-1)}#capitulo-2">← Aula {n-1} — {AULAS[n-2]["titulo"]}</a>')
    proxima = (f'<a href="{nome(n+1)}#capitulo-2">Aula {n+1} — {AULAS[n]["titulo"]} →</a>' if n < len(AULAS)
               else '<a href="web3.html">Voltar ao Web III</a>')
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Café Aurora: {titulo}. Web III, Capítulo 2, Aula {n}.">
<link rel="canonical" href="https://www.mundobitbyte.com.br/pages/programacao-web/{nome(n)}">
<title>Web III — {titulo} | Mundo bit Byte</title>
<link href="../../css/programacao-web.css?v=13" rel="stylesheet">
<link href="../../css/web3.css?v=1" rel="stylesheet">
<link href="../../css/web3-typescript.css?v=2" rel="stylesheet">
<link href="../../css/web3-capitulo2.css?v=1" rel="stylesheet">
</head>
<body class="module-page web3-page web3-typescript web3-cap2" data-module-title="Web III · Aula {n}: {titulo}">
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header><div class="header-left"><a class="portal-link" href="../programacao-web.html">← Programação Web</a><h1>Programação Web III</h1></div><a class="portal-link" href="../../meu-mbb/index.html">Entrar / Meu MbB</a><div class="brand">Professor Ronaldo Lavestein</div></header>
<nav class="level-menu" aria-label="Níveis de Programação Web"><a class="level-menu-item" href="web1.html">Web I — Sites</a><a class="level-menu-item" href="web2.html">Web II — Sistemas</a><a class="level-menu-item active" href="web3.html">Web III <small>Em desenvolvimento</small></a></nav>
<div class="ts-mobile-tools" hidden><button type="button" class="ts-menu-toggle" id="ts-menu-toggle" aria-controls="ts-topics-dialog" aria-expanded="false"><span aria-hidden="true">☰</span> Aulas</button><span class="ts-current-topic">Capítulo 2 · Aula {n}</span></div>
<dialog class="ts-topics-dialog" id="ts-topics-dialog" aria-labelledby="ts-dialog-titulo"><div class="ts-dialog-header"><h2 id="ts-dialog-titulo">Aulas do Capítulo 2</h2><button type="button" class="ts-menu-close" id="ts-menu-close" aria-label="Fechar menu de aulas">×</button></div><div id="ts-dialog-menu"></div></dialog>
<div class="web-layout">
<nav class="chapter-menu" id="ts-topic-menu" aria-label="Aulas disponíveis do Capítulo 2">
<h2>Capítulo 2</h2><p class="web3-menu-title">O balcão busca o aviso</p>
{menu}
<a class="cap2-voltar" href="web3-typescript.html#ts-checkpoint-final">← TypeScript Essencial</a>
<a class="cap2-voltar" href="web3.html">Capítulo 1 — Uma informação, duas telas</a>

</nav>
<main class="web-content" id="conteudo" tabindex="-1">
<article class="chapter" id="capitulo-2" data-chapter>
<div class="chapter-header"><span class="chapter-kicker">Web III · Capítulo 2 · Aula {n} de 7</span>
<h2 id="titulo-aula" tabindex="-1">{titulo}</h2>
<p class="chapter-meta">Café Aurora · cerca de 2 horas-aula · 14 horas-aula previstas no capítulo</p>
<p class="web3-status">Web III — Em desenvolvimento.</p></div>
{trecho(aula)}
<nav class="chapter-footer" aria-label="Anterior e próxima aula">{anterior}{proxima}</nav>
</article></main></div>
<script src="../../js/programacao-web.js?v=11"></script>
<script src="../../js/web3-menu-aulas.js?v=1"></script>
<script src="../../js/mbb-busca-global.js?v=mbb-busca-2"></script>
</body></html>
"""

def gerar():
    assert [a["numero"] for a in AULAS] == list(range(1, len(AULAS)+1))
    for aula in AULAS:
        n = aula["numero"]
        (ROOT / "pages/programacao-web" / nome(n)).write_text(pagina(aula))
        with zipfile.ZipFile(DOWNLOADS / f"cafe-aurora-web3-cap2-aula{n}.zip", "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
            for caminho, b in sorted(dados(n).items()):
                assert not any(x in caminho for x in ["/node_modules/", "/vendor/", ".sqlite", ".env"])
                info = zipfile.ZipInfo("cafe-aurora-web3/" + caminho, (2026,10,25,0,0,0))
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                z.writestr(info,b)
    catalogo_path = ROOT / "meu-mbb/catalogo.json"
    catalogo = json.loads(catalogo_path.read_text())
    for a in AULAS:
        if not any(u["conteudo_id"] == a["id"] for u in catalogo["unidades"]):
            catalogo["unidades"].append({
                "conteudo_id":a["id"], "versao_conteudo":1,
                "titulo":f'Web III — Capítulo 2 · Aula {a["numero"]}: {a["titulo"]}',
                "area":"Programação e Desenvolvimento", "modulo":"Web III",
                "trilha":"Início comum", "ordem":252+a["numero"], "status":"ativo",
                "localizacao_atual":"pages/programacao-web/"+nome(a["numero"]),
                "obrigatorio":False,"texto_busca":""
            })
    catalogo_path.write_text(json.dumps(catalogo,ensure_ascii=False,indent=2)+"\n")

if __name__ == "__main__":
    gerar()

