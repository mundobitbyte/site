"""Ensaio técnico de prontidão; não cria páginas didáticas nem publica o capítulo.

Reconstrói cópias a partir dos dois downloads publicados e exporta um caderno
com os mesmos arquivos de cada conquista para revisão do professor.
"""
from pathlib import Path
import argparse
import hashlib
import json
import shutil
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[3]

API = '''<?php
ini_set("display_errors", "0");
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store");

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    header("Allow: GET");
    echo json_encode(["erro" => "Método não permitido."]);
    exit;
}

try {
    require_once dirname(__DIR__, 2) . "/src/atendimento.php";
    echo json_encode(obterAtendimento(), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
} catch (Throwable $erro) {
    http_response_code(500);
    echo json_encode(["erro" => "Não foi possível consultar o atendimento."]);
}
'''

VITE = '''import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  build: {
    outDir: "../public/js/balcao",
    emptyOutDir: false,
    lib: { entry: "src/main.ts", formats: ["es"], fileName: "main" },
    minify: false,
    sourcemap: false,
  },
});
'''

MODELO = '''export interface Atendimento {
  nomeNegocio: string;
  mensagemStatus: string;
  mensagemTempo: string;
}
'''

LOCAL = '''
export function obterAtendimento(): Atendimento {
  return {
    nomeNegocio: "Café Aurora",
    mensagemStatus: "Pedidos para retirada estão abertos.",
    mensagemTempo: "Tempo estimado: 30 minutos.",
  };
}
'''

VALIDAR = '''
export function conferirAtendimento(dados: unknown): Atendimento {
  if (typeof dados !== "object" || dados === null || Array.isArray(dados)) {
    throw new Error("A resposta precisa ser um objeto.");
  }
  if (!("nomeNegocio" in dados) || typeof dados.nomeNegocio !== "string" || dados.nomeNegocio.trim() === "") {
    throw new Error("Nome do negócio ausente ou inválido.");
  }
  if (!("mensagemStatus" in dados) || typeof dados.mensagemStatus !== "string" || dados.mensagemStatus.trim() === "") {
    throw new Error("Mensagem de situação ausente ou inválida.");
  }
  if (!("mensagemTempo" in dados) || typeof dados.mensagemTempo !== "string" || dados.mensagemTempo.trim() === "") {
    throw new Error("Mensagem de prazo ausente ou inválida.");
  }
  return {
    nomeNegocio: dados.nomeNegocio,
    mensagemStatus: dados.mensagemStatus,
    mensagemTempo: dados.mensagemTempo,
  };
}
'''

LEITURA_HTTP = '''    const resposta = await fetch("api/atendimento.php", { cache: "no-store"%s });
    if (!resposta.ok) {
      throw new Error(`Falha HTTP: ${resposta.status}`);
    }
    const tipo = resposta.headers.get("content-type");
    if (tipo === null || tipo.split(";")[0].trim().toLowerCase() !== "application/json") {
      throw new Error("A resposta não é JSON.");
    }
    const dados: unknown = await resposta.json();
    return conferirAtendimento(dados);
'''

DOM = '''const nome = document.querySelector("#nome-negocio");
const situacao = document.querySelector("#mensagem-status");
const tempo = document.querySelector("#mensagem-tempo");
const botao = document.querySelector("#atualizar-atendimento");
const aviso = document.querySelector("#aviso-consulta");

if (!(nome instanceof HTMLElement) || !(situacao instanceof HTMLElement) ||
    !(tempo instanceof HTMLElement) || !(botao instanceof HTMLButtonElement) ||
    !(aviso instanceof HTMLElement)) {
  throw new Error("Confira os elementos do balcão no HTML.");
}

const apresentar = (atendimento: Atendimento): void => {
  nome.textContent = atendimento.nomeNegocio;
  situacao.textContent = atendimento.mensagemStatus;
  tempo.textContent = atendimento.mensagemTempo;
};
'''

MAIN_LOCAL = '''import { obterAtendimento } from "./atendimento.js";
import type { Atendimento } from "./atendimento.js";

''' + DOM + '''
botao.disabled = false;
botao.textContent = "Conferir apresentação";
aviso.textContent = "Ensaio local: este botão ainda não consulta o PHP.";
botao.addEventListener("click", () => {
  try {
    apresentar(obterAtendimento());
    aviso.textContent = "Ensaio local conferido; ainda não houve consulta ao servidor.";
  } catch (erro) {
    situacao.textContent = "";
    tempo.textContent = "";
    aviso.textContent = "O ensaio recebeu dados inválidos. Confira sua tentativa.";
    console.error(erro);
  }
});
'''

MAIN_REDE = '''import { obterAtendimento } from "./atendimento.js";
import type { Atendimento } from "./atendimento.js";

''' + DOM + '''
botao.disabled = false;
botao.textContent = "Atualizar atendimento";
botao.addEventListener("click", async () => {
  if (botao.disabled) return;
  botao.disabled = true;
  situacao.textContent = "";
  tempo.textContent = "";
  aviso.textContent = "Consultando atendimento…";
  try {
    apresentar(await obterAtendimento());
    aviso.textContent = "Atendimento consultado agora.";
  } catch (erro) {
    situacao.textContent = "";
    tempo.textContent = "";
    aviso.textContent = "Não foi possível consultar o atendimento. Tente novamente.";
    console.error(erro);
  } finally {
    botao.disabled = false;
  }
});
'''


def etapas():
    rede = MODELO + VALIDAR + '\nexport async function obterAtendimento(): Promise<Atendimento> {\n' + (LEITURA_HTTP % '') + '}\n'
    protegida = MODELO + VALIDAR + '''
export async function obterAtendimento(): Promise<Atendimento> {
  const controle = new AbortController();
  const limite = setTimeout(() => controle.abort(), 8000);
  try {
''' + (LEITURA_HTTP % ', signal: controle.signal') + '''  } finally {
    clearTimeout(limite);
  }
}
'''
    return {
        2: {'cliente-balcao/src/main.ts': '''const aviso = document.querySelector("#aviso-consulta");
if (aviso instanceof HTMLElement) {
  aviso.textContent = "O código TypeScript já está ligado ao balcão.";
}
'''},
        3: {'cliente-balcao/src/atendimento.ts': MODELO + LOCAL, 'cliente-balcao/src/main.ts': MAIN_LOCAL},
        4: {'cliente-balcao/src/atendimento.ts': MODELO + VALIDAR + LOCAL.replace('return {', 'return conferirAtendimento({').replace('  };', '  });')},
        5: {'cliente-balcao/src/atendimento.ts': rede, 'cliente-balcao/src/main.ts': MAIN_REDE},
        6: {'cliente-balcao/src/atendimento.ts': protegida},
    }


def extrair(base):
    origem = ROOT / 'downloads/programacao-web'
    with zipfile.ZipFile(origem / 'cafe-aurora-web3-capitulo-1.zip') as z:
        z.extractall(base)
    app = base / 'cafe-aurora-web3'
    cliente = app / 'cliente-balcao'
    (cliente / 'src').mkdir(parents=True)
    with zipfile.ZipFile(origem / 'cafe-aurora-typescript-essencial.zip') as z:
        for nome in ['package.json', 'package-lock.json', 'tsconfig.json']:
            (cliente / nome).write_bytes(z.read('cafe-aurora-typescript/' + nome))
        for nome in ['main.ts', 'atendimento.ts']:
            (cliente / 'src' / nome).write_bytes(z.read('cafe-aurora-typescript/exemplos/12/' + nome))
    return app


def preparar_balcao(app):
    p = app / 'public/balcao.php'
    s = p.read_text()
    s = s.replace('<h1>', '<h1 id="nome-negocio">')
    s = s.replace('<p><?= htmlspecialchars($mensagemStatus', '<p id="mensagem-status"><?= htmlspecialchars($mensagemStatus')
    s = s.replace('<p><?= htmlspecialchars($mensagemTempo', '<p id="mensagem-tempo"><?= htmlspecialchars($mensagemTempo')
    s = s.replace('    </section>', '''      <button id="atualizar-atendimento" type="button" disabled>Atualizar atendimento</button>
      <p id="aviso-consulta" role="status">Informação recebida ao abrir a página.</p>
      <noscript>Para consultar novamente sem JavaScript, recarregue esta página.</noscript>
    </section>''', 1)
    s = s.replace('</body>', '  <script type="module" src="js/balcao/main.js"></script>\n</body>')
    p.write_text(s)


def fotografar(app):
    return {str(p.relative_to(app)): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in (app / 'public').rglob('*') if p.is_file()}


def run(args, cwd, log):
    r = subprocess.run(args, cwd=cwd, text=True, capture_output=True, timeout=180)
    log.write_text(r.stdout + r.stderr)
    if r.returncode:
        raise RuntimeError(f'{args} falhou; consulte {log}:\n{r.stdout}\n{r.stderr}')


def caderno(app, destino):
    linhas = ['# Caderno técnico de reconstrução — ensaio não publicado\n',
              'Não é capítulo didático concluído. Código de homologação em cópias fictícias.\n',
              'Extraia o checkpoint do Capítulo 1 em pasta vazia. Crie cliente-balcao/src.\n',
              'Do ZIP TypeScript, copie package.json, package-lock.json e tsconfig.json.\n',
              '**Atenção:** src/main.ts do ZIP é o exemplo 1. Para recuperar o estado do tópico 12,\n',
              'copie exemplos/12/main.ts e exemplos/12/atendimento.ts para cliente-balcao/src.\n',
              'Registre os valores próprios antes de usar esta referência. Não altere a bancada original.\n',
              '## Preparação da geração\n', 'Arquivo: cliente-balcao/vite.config.mjs\n', '```javascript\n' + VITE + '```\n',
              'Em cliente-balcao, execute npm ci. Aplique as mudanças de balcao.php abaixo antes de incluir o módulo.\n',
              'Em cada etapa TypeScript, execute npm run build e abra/recarregue o balcão no servidor PHP.\n',
              'Somente mudanças no PHP: salve e faça uma nova consulta, sem build do cliente.\n',
              '## Conquista 1 — resposta PHP\n',
              'Arquivo: src/atendimento.php\n', '```php\n' + (ROOT / 'materiais/programacao-web/web3-capitulo1/atendimento.php').read_text().replace('$tempoEstimado = 55;', '$tempoEstimado = 30;') + '```\n',
              'Arquivo: public/api/atendimento.php\n', '```php\n' + API + '```\n',
              'Em src/atendimento.php, troque a estimativa da referência de 55 para 30. Abra a API pelo servidor PHP.\n']
    linhas += ['## Preparação do HTML — preserve a estrutura\n',
               'Em public/balcao.php, identifique o h1 e os dois parágrafos: nome-negocio, mensagem-status e mensagem-tempo.\n',
               'Acrescente, na seção de atendimento, botão atualizar-atendimento, p aviso-consulta com role=status e noscript.\n',
               'No fim do body, inclua o módulo js/balcao/main.js. Confira a referência completa somente para recuperar uma diferença.\n',
               'Arquivo: public/balcao.php\n', '```php\n' + (app / 'public/balcao.php').read_text() + '\n```\n']
    for n, arquivos in etapas().items():
        linhas += [f'## Conquista {n}\n']
        for nome, conteudo in arquivos.items():
            linhas += [f'Arquivo: {nome}\n', '```typescript\n' + conteudo + '```\n']
        linhas += ['Salve os arquivos indicados e execute npm run build. Mantenha os demais arquivos da etapa anterior.\n']
    linhas += ['Arquivo: src/atendimento.php\n', '```php\n' + (app / 'src/atendimento.php').read_text() + '\n```\n',
               'Na conquista 6, o elseif da função PHP trata a estimativa ausente sem alterar os nomes devolvidos.\n',
               'A pasta public/js/balcao contém saída gerada. A configuração não limpa pastas existentes.\n',
               'O servidor PHP usa somente public como raiz. Execute, da raiz do Café: php -d opcache.enable_cli=0 -S localhost:8000 -t public\n',
               'A opção -d vale somente para este processo de desenvolvimento: evita que o cache de código compilado da CLI adie suas alterações PHP. Não modifica o php.ini do computador.\n',
               'Acesse http://localhost:8000/balcao.php; não o servidor de desenvolvimento Vite.\n']
    destino.write_text('\n'.join(linhas))


def reconstruir(destino, instalar=True, php=False):
    destino.mkdir(parents=True, exist_ok=True)
    app = extrair(destino)
    cliente = app / 'cliente-balcao'
    (cliente / 'vite.config.mjs').write_text(VITE)
    (app / 'public/api').mkdir(exist_ok=True)
    (app / 'public/api/atendimento.php').write_text(API)
    fonte = app / 'src/atendimento.php'
    fonte.write_text(fonte.read_text().replace('$tempoEstimado = 55;', '$tempoEstimado = 30;'))
    preparar_balcao(app)
    (app / 'public/js/balcao').mkdir(exist_ok=True)
    (app / 'public/js/balcao/preservar.txt').write_text('MARCADOR-DE-PRESERVACAO')
    antes = fotografar(app)
    if instalar:
        run(['npm', 'ci', '--no-audit', '--no-fund'], cliente, destino / 'npm-ci.log')
    resultados = []
    for n, arquivos in etapas().items():
        for nome, conteudo in arquivos.items():
            (app / nome).write_text(conteudo)
        run(['npm', 'run', 'build'], cliente, destino / f'build-etapa-{n}.log')
        assert (app / 'public/js/balcao/main.js').is_file()
        for nome, sha in antes.items():
            assert hashlib.sha256((app / nome).read_bytes()).hexdigest() == sha, nome
        resultados.append({'etapa': n, 'build': 'aprovado', 'arquivosAnterioresPreservados': True})
        if n == 4:
            run([str(cliente / 'node_modules/.bin/tsc'), '--noEmit', 'false', '--rootDir', 'src', '--outDir', str(destino / 'etapa4-js')],
                cliente, destino / 'etapa4-compilada.log')
    fonte.write_text(fonte.read_text().replace('    } else {', '''    } elseif ($tempoEstimado === null) {
        $mensagemStatus = "Pedidos para retirada estão abertos.";
        $mensagemTempo = "Consulte a equipe para saber a estimativa.";
    } else {''', 1))
    run([str(cliente / 'node_modules/.bin/tsc'), '--noEmit', 'false', '--rootDir', 'src', '--outDir', str(destino / 'final-js')],
        cliente, destino / 'final-compilada.log')
    for pasta in ['etapa4-js', 'final-js']:
        (destino / pasta / 'package.json').write_text('{"type":"module"}')
    # Copiar o estado final para o caderno não modifica os checkpoints anteriores.
    caderno(app, destino / 'Caderno_Reconstrucao_Tecnica.md')
    (destino / 'resultado-build.json').write_text(json.dumps(resultados, ensure_ascii=False, indent=2))
    print(json.dumps({'app': str(app), 'builds': resultados}, ensure_ascii=False))
    return app


def reconstruir_caderno(caderno_path, destino):
    """Segunda extração limpa: os arquivos são lidos dos blocos do caderno."""
    import re
    destino.mkdir(parents=True, exist_ok=True)
    app = extrair(destino)
    cliente = app / 'cliente-balcao'
    texto = caderno_path.read_text()
    cabecalho, *grupos = re.split(r'^## Conquista (\d+)[^\n]*\n', texto, flags=re.M)

    def aplicar(bloco):
        arquivos = re.findall(r'Arquivo: ([^\n]+)\n\n```\w+\n(.*?)\n```', bloco, re.S)
        assert arquivos, 'Nenhum arquivo encontrado no bloco do caderno.'
        for nome, conteudo in arquivos:
            relativo = Path(nome)
            assert not relativo.is_absolute() and '..' not in relativo.parts
            p = app / relativo
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(conteudo + '\n')
    aplicar(cabecalho)
    run(['npm', 'ci', '--no-audit', '--no-fund'], cliente, destino / 'npm-ci-caderno.log')
    etapas_feitas = []
    for indice in range(0, len(grupos), 2):
        n, bloco = int(grupos[indice]), grupos[indice + 1]
        aplicar(bloco)
        if n >= 2:
            run(['npm', 'run', 'build'], cliente, destino / f'caderno-build-{n}.log')
            etapas_feitas.append(n)
    assert etapas_feitas == [2, 3, 4, 5, 6], etapas_feitas
    assert (app / 'public/js/balcao/main.js').is_file()
    print('Reconstrução literal dos blocos do caderno: cinco builds aprovados em segunda extração limpa.')
    return app


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('destino', type=Path)
    parser.add_argument('--caderno', type=Path)
    args = parser.parse_args()
    if args.caderno:
        reconstruir_caderno(args.caderno.resolve(), args.destino.resolve())
    else:
        reconstruir(args.destino.resolve())
