#!/usr/bin/env python3
"""Gera o acervo interno da Academia a partir das seções públicas aprovadas."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path


RAIZ = Path(__file__).resolve().parents[2]
DADOS = RAIZ / "academia/js/curso-embarcados-dados.js"
SAIDA = RAIZ / "academia/js/curso-embarcados-conteudo.js"


def localizar_secao(documento: str, ancora: str) -> str:
    if not ancora:
        principal = re.search(r'<main\b[^>]*>(.*?)</main>', documento, flags=re.I | re.S)
        if principal:
            return f'<section class="material-completo">{principal.group(1)}</section>'
        corpo = re.search(r'<body\b[^>]*>(.*?)</body>', documento, flags=re.I | re.S)
        if corpo:
            return f'<section class="material-completo">{corpo.group(1)}</section>'
        raise ValueError("Documento sem conteúdo principal")
    inicio = re.search(
        rf'<section\b[^>]*\bid=["\']{re.escape(ancora)}["\'][^>]*>',
        documento,
        flags=re.I,
    )
    if not inicio:
        raise ValueError(f"Seção #{ancora} não encontrada")

    profundidade = 0
    for marca in re.finditer(r'</?section\b[^>]*>', documento[inicio.start():], flags=re.I):
        texto = marca.group(0)
        profundidade += -1 if texto.startswith("</") else 1
        if profundidade == 0:
            return documento[inicio.start():inicio.start() + marca.end()]
    raise ValueError(f"Seção #{ancora} não foi encerrada")


def limpar(secao: str) -> str:
    secao = re.sub(r'<script\b[^>]*>.*?</script>', '', secao, flags=re.I | re.S)
    secao = re.sub(r'<button\b[^>]*>\s*Copiar\s*</button>', '', secao, flags=re.I | re.S)
    secao = re.sub(r'\s+onclick=("[^"]*"|\'[^\']*\')', '', secao, flags=re.I)
    secao = re.sub(r'\s+id=("[^"]*"|\'[^\']*\')', '', secao, flags=re.I)
    secao = re.sub(r'\s+href=("[^"]*"|\'[^\']*\')', '', secao, flags=re.I)
    secao = re.sub(r'<a\b([^>]*)>', r'<span\1>', secao, flags=re.I)
    secao = re.sub(r'</a>', '</span>', secao, flags=re.I)
    secao = re.sub(r'\bsrc=["\']\.\./img/', 'src="/img/', secao, flags=re.I)
    secao = re.sub(r'\?v=\d+(?=["\'])', '', secao)
    return secao.strip()


def titulo_da_secao(secao: str, fallback: str) -> str:
    titulo = re.search(r'<h[12][^>]*>(.*?)</h[12]>', secao, flags=re.I | re.S)
    if not titulo:
        return fallback
    texto = re.sub(r'<[^>]+>', ' ', titulo.group(1))
    return html.unescape(re.sub(r'\s+', ' ', texto)).strip()


def material_dinamico(documento: str) -> str:
    dados = re.search(r'const dados=(\[.*?\]);\s*const main=', documento, flags=re.S)
    if not dados:
        return ''
    blocos = []
    for avaliacao in json.loads(dados.group(1)):
        questoes = ''.join(
            f'<article class="concept-question"><h3>{html.escape(item["h"])}</h3>'
            f'<p>{html.escape(item["p"])}</p></article>'
            for item in avaliacao['questions']
        )
        blocos.append(
            f'<section class="assessment-shell"><h2>{html.escape(avaliacao["title"])}</h2>'
            f'<p>{html.escape(avaliacao["content"])}</p>'
            f'<div class="assessment-body">{questoes}</div></section>'
        )
    return f'<section class="material-completo">{"".join(blocos)}</section>'


def main() -> None:
    dados = DADOS.read_text(encoding="utf-8")
    fontes = sorted(set(re.findall(
        r"fonte\('([^']+)', '([^']*)', '([^']+)'\)", dados
    )))

    acervo = {}
    for pagina, ancora, rotulo in fontes:
        chave = f"{pagina}#{ancora}"
        if chave in acervo:
            continue
        documento = (RAIZ / "pages" / pagina).read_text(encoding="utf-8")
        secao = limpar(localizar_secao(documento, ancora))
        if len(re.sub(r'<[^>]+>', '', secao).strip()) < 80:
            secao_dinamica = material_dinamico(documento)
            if secao_dinamica:
                secao = limpar(secao_dinamica)
        acervo[chave] = {
            "titulo": titulo_da_secao(secao, rotulo),
            "origem": rotulo,
            "html": secao,
        }

    conteudo = (
        "/* Arquivo gerado de fontes públicas aprovadas. Não editar manualmente. */\n"
        "window.MBB_CONTEUDO_EMBARCADOS = "
        + json.dumps(acervo, ensure_ascii=False, separators=(",", ":"))
        + ";\n"
    )
    SAIDA.write_text(conteudo, encoding="utf-8")
    print(f"{len(acervo)} seções integradas em {SAIDA.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()
