"""Gera apenas aulas com texto revisável e checkpoints reais, em branch de construção."""
from pathlib import Path
import html, json, re, zipfile, hashlib
from web3_etapas import pacote, base

ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'materiais/programacao-web/web3-evolucao'
PAGES=ROOT/'pages/programacao-web'
MANIFEST=json.loads((SOURCE/'modulo.json').read_text())
AULAS=MANIFEST['aulas']
ROTAS=MANIFEST['percursos']

def nome(a):return a['pagina']
def link(a,texto=None):return f'<a href="{nome(a)}#capitulo-2">{html.escape(texto or a["titulo"])}</a>'
def download(a):return f'cafe-aurora-web3-{a["percurso"]}-etapa{a["numero"]}.zip'

def preparar_arquivos(a,dados):
    n=a['numero'];primeira=n==1;baas=a['percurso']=='baas'
    anterior=({} if baas else base()) if primeira else pacote(a['chave'][0]+str(n-1))
    alterados=[p for p,b in sorted(dados.items()) if anterior.get(p)!=b]
    removidos=sorted(set(anterior)-set(dados))
    s='<details class="web3-preparo" id="arquivos-da-etapa"><summary>Preparar os arquivos desta etapa</summary>'
    s+=f'<p><a class="download-link" href="../../downloads/programacao-web/{download(a)}" download>Baixar a referência da etapa {n}</a>. Ela contém a aplicação ao final desta etapa; não é uma nova tarefa nem uma substituição automática da sua solução.</p>'
    if primeira and baas:
        s+='<p>Extraia em uma pasta nova, por exemplo <code>cafe-aurora-servicos</code>, e abra no VS Code a pasta interna <code>cafe-aurora-web3</code>. Ela já reaproveita as imagens e o cardápio do Café. Sua aplicação PHP anterior fica preservada em outra pasta.</p>'
    else:
        origem='a entrega do Capítulo 2' if primeira else f'a etapa {n-1} deste percurso'
        s+=f'<p>Continue na sua pasta de trabalho que concluiu {origem}. A raiz é o lugar onde aparecem <code>public</code> e <code>cliente-balcao</code>. Não crie uma pasta <code>cafe-aurora-web3</code> dentro dessa raiz.</p>'
        s+='<ol><li>Salve os arquivos e pare o servidor antes de copiar dados. Preserve uma cópia da pasta atual.</li><li>Extraia o download em uma pasta de referência separada. Abra o <code>LEIA-ME-ETAPA.md</code> que está dentro de <code>cafe-aurora-web3</code>.</li><li>Compare os caminhos listados abaixo com sua pasta de trabalho. Acrescente os arquivos de apoio que ainda não existem. Para um arquivo já existente, compare a alteração antes de aplicá-la: não apague uma mudança sua sem entender a diferença. Os arquivos discutidos na aula são os que vamos construir e compreender.</li></ol>'
        if baas:s+='<p>Mantenha sua pasta <code>dados-emuladores</code>: ela não vem no download. Antes de trocar configurações ou executar os testes, encerre com Ctrl+C e aguarde a exportação. Depois use <code>npm run retomar</code> para recuperar os dados já guardados.</p>'
        else:s+='<p>Preserve <code>dados</code>, credenciais locais, <code>.env</code> e as dependências já instaladas. Uma pasta ausente no ZIP não é uma instrução para apagar sua cópia. A aula informa quando executar Composer, npm, migration ou build; copiar arquivos não executa esses preparos.</p>'
    if baas:
        s+='<details><summary>Já começou com uma referência que não tinha o comando retomar?</summary><p>Se <code>npm run retomar</code> informar “Missing script”, não recomece o Café. Essa cópia ainda usa os comandos da referência anterior. Antes de fechar os emuladores antigos, abra outro terminal na mesma raiz, com as ferramentas locais já instaladas, e guarde a sessão:</p><pre class="code-block"><code>npx firebase emulators:export ./dados-emuladores --project demo-cafe-aurora-web3</code></pre><p>Aguarde a conclusão e confira <code>dados-emuladores/firebase-export-metadata.json</code>. Se já houver uma exportação, confira qual cópia quer preservar antes de confirmar sua substituição. Então encerre o terminal antigo com Ctrl+C.</p><p>Compare o <code>package.json</code> e o <code>.gitignore</code> do download desta etapa com os seus. Incorpore os scripts <code>emuladores</code> e <code>retomar</code> e a exclusão de <code>dados-emuladores</code>, preservando as demais configurações. Agora execute <code>npm run retomar</code> e confira o atendimento antes de continuar.</p><p>Se os emuladores já estavam fechados e não existe exportação, essa sessão não pode ser recuperada por trocar um comando. O início e o preparo da primeira etapa recriam apenas os dados iniciais; uma imagem ou descrição não exportada terá de ser refeita. Sua aplicação e seus arquivos-fonte continuam preservados.</p></details>'
    s+='<details><summary>Arquivos novos ou modificados para conferir</summary><ul>'+''.join(f'<li><code>{html.escape(p)}</code></li>' for p in alterados)+'</ul></details>'
    if removidos:
        s+='<p>Estes caminhos deixam de ser usados nesta passagem:</p><ul>'+''.join(f'<li><code>{html.escape(p)}</code></li>' for p in removidos)+'</ul>'
        if a['chave']=='s1':s+='<p>Antes de retirar <code>cliente-balcao/src/main.ts</code>, preserve sua versão como <code>cliente-balcao/main-anterior.ts.txt</code>. O novo ponto de entrada é <code>src/main.tsx</code>. Não mantenha dois controladores disputando a mesma área da tela.</p>'
    return s+'</details>'

def selecao():
    s='<div class="web3-escolhas">'
    for chave,p in ROTAS.items():
        inicio=next((a for a in AULAS if a.get('percurso')==chave),None)
        s+=f'<section><h4>{html.escape(p["nome"])}</h4><p>{html.escape(p["descricao"])}</p>'
        s+=(f'<a class="download-link" data-escolher-percurso="{chave}" href="{nome(inicio)}#capitulo-2">Seguir este percurso</a>' if inicio else '<p>Em preparação.</p>')+'</section>'
    return s+'</div><p><a id="retomar-percurso" hidden>Reabrir o percurso escolhido</a></p>'

def conteudo(a):
    s=(SOURCE/'aulas'/f'{a["chave"]}.html.txt').read_text()
    s=s.replace('{{selecao}}',selecao())
    if a.get('percurso'):
        dados=pacote(a['chave'])
        for caminho in re.findall(r'\{\{arquivo:([^}]+)\}\}',s):
            assert caminho in dados,(a['chave'],caminho)
            codigo=html.escape(dados[caminho].decode().rstrip())
            bloco=f'<details class="web3-arquivo"><summary>Conferir {html.escape(caminho)}</summary><p>Caminho a partir da raiz da aplicação. Abra o arquivo no VS Code e compare com a explicação desta etapa.</p><pre class="code-block"><code data-web3-file="{html.escape(caminho)}">{codigo}</code></pre></details>'
            s=s.replace('{{arquivo:'+caminho+'}}',bloco)
        inicio=s.index('<h3')
        s=s[:inicio]+preparar_arquivos(a,dados)+s[inicio:]
        n=a['numero']
        s+='<aside class="web3-download" aria-label="Referência para comparar">'
        s+=f'<p><a class="download-link" href="../../downloads/programacao-web/{download(a)}" download>Baixar referência da etapa {n}</a></p><p>Extraia em outra pasta para comparar com sua solução. O preparo está na aula e no LEIA-ME do download.</p>'
        s+='</aside>'
    assert not re.search(r'\{\{(?:arquivo:|selecao)',s),a['chave']
    return s

def menu(a):
    itens=[AULAS[0]]+[x for x in AULAS if x.get('percurso')==a.get('percurso') and x.get('percurso')]+[AULAS[-1]]
    if not a.get('percurso'):itens=[AULAS[0]]+[next(x for x in AULAS if x.get('percurso')==p) for p in ROTAS if any(x.get('percurso')==p for x in AULAS)]+[AULAS[-1]]
    return ''.join(f'<a class="chapter-link{" active" if x==a else ""}" '+('aria-current="page" ' if x==a else '')+f'href="{nome(x)}#capitulo-2">{html.escape(x["titulo"])}</a>' for x in itens)

def vizinhos(a):
    if a['chave']=='ponte':return '<a href="web3-capitulo2-aula7.html#continuar-cap2">← Encerramento do Capítulo 2</a>','<a href="#qual-caminho-seguir">Escolher percurso →</a>'
    if a['chave']=='entrega':return link(AULAS[0],'← Escolher ou retomar percurso'),'<a href="web3.html">Voltar ao Web III</a>'
    pares=[x for x in AULAS if x.get('percurso')==a['percurso']];i=pares.index(a)
    return link(pares[i-1] if i else AULAS[0],'← '+(pares[i-1]['titulo'] if i else 'Escolha do percurso')),link(pares[i+1] if i+1<len(pares) else AULAS[-1],(pares[i+1]['titulo'] if i+1<len(pares) else 'Conferir a entrega')+' →')

def pagina(a):
    anterior,proxima=vizinhos(a)
    percurso=ROTAS.get(a.get('percurso'),{}).get('nome','Caminho comum')
    corpo=conteudo(a)
    # IDs publicados ficam explícitos na fonte: inserir uma explicação não desloca âncoras.
    assert not re.search(r'<h3(?:\s*)>',corpo),f'Informe um ID estável nos subtítulos de {a["chave"]}'
    return f'''<!DOCTYPE html>
<html lang="pt-BR"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="Café Aurora: {html.escape(a['titulo'])}. Aprendizagem prática no Web III.">
<link rel="canonical" href="https://www.mundobitbyte.com.br/pages/programacao-web/{nome(a)}">
<title>Web III — {html.escape(a['titulo'])} | Mundo bit Byte</title>
<link href="../../css/programacao-web.css?v=13" rel="stylesheet"><link href="../../css/web3.css?v=1" rel="stylesheet">
<link href="../../css/web3-typescript.css?v=2" rel="stylesheet"><link href="../../css/web3-capitulo2.css?v=1" rel="stylesheet"><link href="../../css/web3-evolucao.css?v=2" rel="stylesheet">
</head><body class="module-page web3-page web3-typescript web3-cap2 web3-evolucao" data-module-title="Web III · {html.escape(a['titulo'])}">
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header><div class="header-left"><a class="portal-link" href="../programacao-web.html">← Programação Web</a><h1>Programação Web III</h1></div><a class="portal-link" href="../../meu-mbb/index.html">Entrar / Meu MbB</a><div class="brand">Professor Ronaldo Lavestein</div></header>
<nav class="level-menu" aria-label="Níveis de Programação Web"><a class="level-menu-item" href="web1.html">Web I — Sites</a><a class="level-menu-item" href="web2.html">Web II — Sistemas</a><a class="level-menu-item active" href="web3.html">Web III <small>Em desenvolvimento</small></a></nav>
<div class="ts-mobile-tools" hidden><button type="button" class="ts-menu-toggle" id="ts-menu-toggle" aria-controls="ts-topics-dialog" aria-expanded="false"><span aria-hidden="true">☰</span> Aulas</button><span class="ts-current-topic">{html.escape(percurso)}</span></div>
<dialog class="ts-topics-dialog" id="ts-topics-dialog" aria-labelledby="ts-dialog-titulo"><div class="ts-dialog-header"><h2 id="ts-dialog-titulo">Aulas do percurso</h2><button type="button" class="ts-menu-close" id="ts-menu-close" aria-label="Fechar menu de aulas">×</button></div><div id="ts-dialog-menu"></div></dialog>
<div class="web-layout"><nav class="chapter-menu" id="ts-topic-menu" aria-label="Aulas disponíveis"><h2>{html.escape(percurso)}</h2>{menu(a)}<a class="cap2-voltar" href="web3-percursos.html">Escolher percurso</a><a class="cap2-voltar" href="web3-capitulo2-aula7.html">← Capítulo 2</a></nav>
<main class="web-content" id="conteudo" tabindex="-1"><article class="chapter" id="capitulo-2" data-chapter>
<div class="chapter-header"><span class="chapter-kicker">Web III · {html.escape(percurso)}</span><h2 id="titulo-aula" tabindex="-1">{html.escape(a['titulo'])}</h2><p class="web3-status">Web III — Em desenvolvimento.</p></div>
{corpo}
<nav class="chapter-footer" aria-label="Anterior e próxima aula">{anterior}{proxima}</nav>
</article></main></div>
<script src="../../js/programacao-web.js?v=11"></script><script src="../../js/web3-menu-aulas.js?v=2"></script><script src="../../js/web3-percursos.js?v=1"></script><script src="../../js/mbb-busca-global.js?v=mbb-busca-2"></script>
</body></html>'''

def zip_etapa(a):
    dados=pacote(a['chave'])
    mvc=a['percurso']=='mvc';spa=a['percurso']=='spa';baas=a['percurso']=='baas'
    ambiente=('Node 22 e Java 21. Instale npm ci na raiz e em cliente-balcao; faça npm run build --prefix cliente-balcao.\n'
        +('Instale npm ci --prefix functions e faça npm run build --prefix functions antes de iniciar os emuladores.\n' if a['numero']>=8 else '')
        +'Primeira execução na raiz: npm run emuladores. Em outro terminal na mesma raiz: npm run preparar. Abra http://localhost:5000 e http://localhost:4000. O projeto demo é local; não há deploy ou contratação de nuvem nesta preparação.\n'
        'Encerre com Ctrl+C e aguarde a exportação para dados-emuladores. Nas próximas sessões use npm run retomar. Não publique nem inclua essa pasta de dados na entrega. Se conferir outra pasta limpa, ela começa com npm run emuladores; não leva seus dados particulares.\n'
        'O PHP do Web II permanece na cópia preservada e não é executado pelo Hosting estático.\n' if baas else
        'PHP 8.5 e Node 24. Use o terminal Laragon preparado no Windows. Em cliente-balcao, execute npm ci e npm run build. A saída é public/js/balcao/main.js, ausente do ZIP.\n')
    if mvc and a['numero']>=2:
        ambiente+='Na raiz: copie .env.example para .env somente se não existir; composer install --no-interaction --no-plugins; php artisan key:generate somente na preparação inicial.\nPare o servidor antigo e inicie php artisan serve --host=localhost --port=8000.\n'
    elif not baas:ambiente+='Na raiz: php -d opcache.enable=0 -S localhost:8000 -t public. Abra http://localhost:8000/balcao.php.\n'
    if mvc and a['numero']>=3:ambiente+='Sem banco: php src/inicializar-banco.php. Depois: php artisan migrate. Preserve um banco existente; nunca use migrate:fresh nesta sequência.\n'
    if mvc and a['numero']>=4:ambiente+='Operador local: php artisan cafe:operador operador@example.test, com senha escolhida no terminal.\n'
    if mvc and a['numero']>=5:ambiente+='Importação inicial do catálogo: php artisan cafe:importar-cardapio. Não sobrescreve edições.\n'
    if spa and a['numero']>=4:ambiente+='Preparo PHP na raiz: php src/inicializar-banco.php, php src/inicializar-atendimento.php e php src/inicializar-cardapio.php, um comando por vez.\n'
    if spa and a['numero']>=7:ambiente+='Identidade local: php src/criar-administrador.php. Não reutilize senhas pessoais.\n'
    dados['LEIA-ME-ETAPA.md']=(f'# Café Aurora — {a["titulo"]}\n\nReferência final da etapa {a["numero"]}, percurso {ROTAS[a["percurso"]]["nome"]}.\n\n'
        'Compare em outra pasta. Preserve a sua solução, banco, mensagens e credenciais. Não extraia sobre dados de trabalho sem cópia.\n'
        'O site apresenta as instruções; a aplicação é executada no computador do estudante.\n\n'
        +ambiente
        +'\nAlterou PHP: nova consulta. Alterou TypeScript/React: novo build e recarregamento. Configurações de ambiente e servidores só são retomados quando necessário.\n'
        'Este checkpoint não inclui .env, banco SQLite, credenciais, vendor, node_modules ou JavaScript gerado. Consulte a aula para os testes e resultados esperados.\n').encode()
    destino=ROOT/'downloads/programacao-web'/download(a)
    with zipfile.ZipFile(destino,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
        for p,b in sorted(dados.items()):
            assert not any(x in p.split('/') for x in ['vendor','node_modules','.env','dados-emuladores'])
            assert not p.endswith(('.sqlite','.sqlite3','.db'))
            info=zipfile.ZipInfo('cafe-aurora-web3/'+p,(2026,10,28,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o100644<<16;z.writestr(info,b)

def gerar():
    assert len({a['id'] for a in AULAS})==len(AULAS)
    for a in AULAS:
        (PAGES/nome(a)).write_text(pagina(a))
        if a.get('percurso'):zip_etapa(a)
    path=ROOT/'meu-mbb/catalogo.json';c=json.loads(path.read_text());ids={x['conteudo_id'] for x in c['unidades']}
    for i,a in enumerate(AULAS):
        if a['id'] in ids:continue
        c['unidades'].append({'conteudo_id':a['id'],'versao_conteudo':1,'titulo':'Web III — '+a['titulo'],'area':'Programação e Desenvolvimento','modulo':'Web III','trilha':ROTAS.get(a.get('percurso'),{}).get('nome','Caminho comum'),'ordem':270+i,'status':'ativo','localizacao_atual':'pages/programacao-web/'+nome(a),'obrigatorio':False,'texto_busca':''})
    path.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
    print(f'{len(AULAS)} páginas e {sum(bool(a.get("percurso")) for a in AULAS)} checkpoints gerados em branch de construção.')

if __name__=='__main__':gerar()
