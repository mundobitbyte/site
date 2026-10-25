"""Reconstrói o capítulo pelos blocos HTML publicados e testa o PHP por HTTP real."""
from pathlib import Path
from html.parser import HTMLParser
from contextlib import contextmanager
import importlib.util,json,re,shutil,socket,subprocess,tempfile,time,unittest,urllib.request,urllib.error,zipfile,os

ROOT=Path(__file__).resolve().parents[2]
D=ROOT/"downloads/programacao-web"
AULAS=json.loads((ROOT/"materiais/programacao-web/web3-capitulo2/capitulo.json").read_text())["aulas"]

class Blocos(HTMLParser):
    def __init__(self):
        super().__init__();self.atual=None;self.blocos=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=="code" and a.get("data-cap2-file"):
            self.atual=[a,""]
    def handle_data(self,data):
        if self.atual:self.atual[1]+=data
    def handle_endtag(self,tag):
        if tag=="code" and self.atual:
            self.blocos.append(self.atual);self.atual=None

def extrair(n,base):
    with zipfile.ZipFile(D/f"cafe-aurora-web3-cap2-aula{n}.zip") as z:
        for p in z.namelist():
            assert ".." not in Path(p).parts and not Path(p).is_absolute()
            assert not any(v in p for v in ["/node_modules/","/vendor/",".sqlite",".env"])
        assert z.testzip() is None
        z.extractall(base)
    return base/"cafe-aurora-web3"

def reconstruir(base):
    with zipfile.ZipFile(D/"cafe-aurora-web3-capitulo-1.zip") as z:z.extractall(base)
    app=base/"cafe-aurora-web3"
    for aula in AULAS:
        n=aula["numero"]; parser=Blocos()
        parser.feed((ROOT/f"pages/programacao-web/web3-capitulo2-aula{n}.html").read_text())
        for attr,code in parser.blocos:
            caminho=app/attr["data-cap2-file"]
            assert app in caminho.parents
            caminho.parent.mkdir(parents=True,exist_ok=True)
            if attr.get("data-cap2-mode") in ["kit","topico12"]:
                caminho.mkdir(parents=True,exist_ok=True)
                nomes=["package.json","package-lock.json","tsconfig.json"] if attr["data-cap2-mode"]=="kit" else ["main.ts","atendimento.ts"]
                with zipfile.ZipFile(D/"cafe-aurora-typescript-essencial.zip") as kit:
                    for nome in nomes:
                        origem=("" if attr["data-cap2-mode"]=="kit" else "exemplos/12/")+nome
                        (caminho/nome).write_bytes(kit.read("cafe-aurora-typescript/"+origem))
            elif attr.get("data-cap2-mode")=="prazo":
                novo,q=re.subn(r"\$tempoEstimado = [^;]+;",lambda m:code.strip(),caminho.read_text(),count=1)
                assert q==1;caminho.write_text(novo)
            else:caminho.write_text(code.rstrip()+"\n")
        with tempfile.TemporaryDirectory() as tmp:
            referencia=extrair(n,Path(tmp))
            for p in referencia.rglob("*"):
                if not p.is_file() or p.name.startswith(("LEIA-","ORIGEM")):continue
                rel=p.relative_to(referencia)
                assert (app/rel).is_file(),f"Não construído: aula {n}, {rel}"
                assert (app/rel).read_bytes().rstrip()==p.read_bytes().rstrip(),f"Diferença: aula {n}, {rel}"
        if n>=2:
            cliente=app/"cliente-balcao"
            if not (cliente/"node_modules").exists():
                subprocess.run(["npm","ci","--no-audit","--no-fund"],cwd=cliente,check=True)
            sentinela=app/"public/js/balcao/preservar.txt"
            sentinela.parent.mkdir(parents=True,exist_ok=True);sentinela.write_text("Arquivo anterior ao build.\n")
            before={p:p.read_bytes() for p in app.rglob("*") if p.is_file() and "node_modules" not in p.parts and p!=app/"public/js/balcao/main.js"}
            subprocess.run(["npm","run","build"],cwd=cliente,check=True)
            assert all(p.read_bytes()==b for p,b in before.items()),"Build alterou arquivo anterior"
            print(f"Build da aula {n}: {len(before)} arquivos anteriores preservados.")
            if n==2:
                main=cliente/"src/main.ts";original=main.read_text()
                gerado=app/"public/js/balcao/main.js";anterior=gerado.read_bytes()
                try:
                    main.write_text(original.replace('aviso.textContent = "O código TypeScript já está ligado ao balcão.";','aviso.textContent = 30;'))
                    erro=subprocess.run(["npm","run","build"],cwd=cliente,capture_output=True)
                    assert erro.returncode!=0,"Erro de tipo deveria impedir o build"
                    assert gerado.read_bytes()==anterior,"Build inválido alterou a saída anterior"
                finally:main.write_text(original)
                subprocess.run(["npm","run","build"],cwd=cliente,check=True)
                print("Erro de tipo intencional recusado; correção recompilada.")
            if n==3 and len(AULAS)>=4:
                fonte=cliente/"src/atendimento.ts";original=fonte.read_text()
                try:
                    fonte.write_text(original.replace('    mensagemTempo: "Tempo estimado: 30 minutos.",\n',''))
                    erro=subprocess.run(["npm","run","build"],cwd=cliente,capture_output=True,text=True)
                    assert erro.returncode!=0 and "mensagemTempo" in erro.stdout+erro.stderr,"O objeto tipado deveria acusar o campo ausente"
                finally:fonte.write_text(original)
                subprocess.run(["npm","run","build"],cwd=cliente,check=True)
                print("Entrada da aula 4: campo ausente no objeto tipado foi recusado; referência restaurada.")
        print(f"Aula {n}: blocos reconstruídos correspondem ao ZIP.")
    return app

@contextmanager
def servidor(app):
    with socket.socket() as s:s.bind(("127.0.0.1",0));porta=s.getsockname()[1]
    prova=app/"public/__mbb_config_ensaio.php"
    prova.write_text('<?php header("Content-Type: application/json"); echo json_encode(["sapi"=>PHP_SAPI,"cache"=>ini_get("opcache.enable")]);')
    proc=subprocess.Popen(["php","-d","opcache.enable=0","-S",f"127.0.0.1:{porta}","-t","public"],cwd=app,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
    url=f"http://127.0.0.1:{porta}/"
    def req(caminho="api/atendimento.php",method="GET"):
        try:r=urllib.request.urlopen(urllib.request.Request(url+caminho,method=method),timeout=5)
        except urllib.error.HTTPError as e:r=e
        with r:return r.status,dict(r.headers),r.read().decode()
    try:
        for _ in range(100):
            try:req();break
            except OSError:time.sleep(.05)
        else:raise AssertionError("PHP não iniciou.")
        configuracao=json.loads(req("__mbb_config_ensaio.php")[2])
        assert configuracao["sapi"]=="cli-server",configuracao
        assert configuracao["cache"] in ["0","",False,0],configuracao
        prova.unlink()
        yield req
    finally:
        proc.terminate();proc.wait(timeout=10)
        if prova.exists():prova.unlink()

class Publicacao(unittest.TestCase):
    def test_01_reconstrucao_literal_e_zip(self):
        with tempfile.TemporaryDirectory() as tmp:reconstruir(Path(tmp))
    def test_02_todas_as_etapas_php_e_json(self):
        for aula in AULAS:
            with self.subTest(aula=aula["numero"]),tempfile.TemporaryDirectory() as tmp:
                app=extrair(aula["numero"],Path(tmp))
                for p in app.rglob("*.php"):
                    r=subprocess.run(["php","-l",str(p)],capture_output=True)
                    self.assertEqual(r.returncode,0,r.stdout+r.stderr)
                fonte=app/"src/atendimento.php";original=fonte.read_text()
                with servidor(app) as req:
                    status,headers,body=req()
                    self.assertEqual(status,200);self.assertIn("application/json",headers["Content-Type"])
                    self.assertEqual(headers["Cache-Control"],"no-store")
                    self.assertEqual(set(json.loads(body)),{"nomeNegocio","mensagemStatus","mensagemTempo"})
                    self.assertIn("30 minutos",json.loads(body)["mensagemTempo"])
                    fonte.write_text(original.replace("$tempoEstimado = 30;","$tempoEstimado = 47;"))
                    self.assertIn("47 minutos",req()[2])
                    for path in ["index.php","balcao.php"]:self.assertIn("47 minutos",req(path)[2])
                    fonte.write_text(original.replace("$pedidosAbertos = true;","$pedidosAbertos = false;"))
                    self.assertIn("encerrados",req()[2]);self.assertNotIn("minutos",json.loads(req()[2])["mensagemTempo"])
                    if aula["numero"]>=6:
                        for aberto in [True,False]:
                            fonte.write_text(original.replace("$tempoEstimado = 30;","$tempoEstimado = null;").replace("$pedidosAbertos = true;",f"$pedidosAbertos = {'true' if aberto else 'false'};"))
                            dados=json.loads(req()[2]);self.assertNotIn("minutos",dados["mensagemTempo"])
                            self.assertIn("abertos" if aberto else "encerrados",dados["mensagemStatus"])
    def test_03_metodo_dados_privados_e_erro_recuperavel(self):
        with tempfile.TemporaryDirectory() as tmp:
            app=extrair(len(AULAS),Path(tmp))
            fonte=app/"src/atendimento.php"
            with servidor(app) as req:
                status,h,b=req(method="POST");self.assertEqual(status,405);self.assertEqual(h["Allow"],"GET")
                for p in ["src/atendimento.php","cliente-balcao/package-lock.json"]:
                    self.assertNotIn("function obterAtendimento",req(p)[2]);self.assertNotIn("lockfileVersion",req(p)[2])
                fora=fonte.with_suffix(".fora");fonte.rename(fora)
                try:
                    status,h,b=req();self.assertEqual(status,500)
                    self.assertEqual(json.loads(b),{"erro":"Não foi possível consultar o atendimento."})
                    self.assertNotRegex(b,r"Warning|Stack trace|/workspace/|/home/")
                finally:fora.rename(fonte)
                self.assertEqual(req()[0],200)
    def test_04_links_catalogo_e_preservacao(self):
        catalogo=json.loads((ROOT/"meu-mbb/catalogo.json").read_text())
        visitas=json.loads((ROOT/"meu-mbb/visitas-diretas.json").read_text())
        for aula in AULAS:
            caminho=f"pages/programacao-web/web3-capitulo2-aula{aula['numero']}.html"
            h=(ROOT/caminho).read_text()
            self.assertEqual(visitas[caminho]["conteudo_id"],aula["id"])
            self.assertEqual(sum(u["conteudo_id"]==aula["id"] for u in catalogo["unidades"]),1)
            ids=re.findall(r'\bid="([^"]+)"',h);self.assertEqual(len(ids),len(set(ids)))
            self.assertIn("Em desenvolvimento",h)
            for href in re.findall(r'href="([^"]+)"',h):
                if re.match(r"[a-z]+:|#",href):continue
                p,_,anchor=href.partition("#");local=(ROOT/caminho).parent/p.split("?")[0]
                self.assertTrue(local.exists(),href)
                if anchor and local.suffix==".html":
                    self.assertIn(f'id="{anchor}"',local.read_text(),href)
        base=json.loads(subprocess.check_output(["git","show","be9e8dfdeb496ffbbaa8a96edc8eca3981568bf0:meu-mbb/catalogo.json"],cwd=ROOT))
        atuais={u["conteudo_id"]:u for u in catalogo["unidades"]}
        for anterior in base["unidades"]:
            for chave in ["conteudo_id","versao_conteudo","localizacao_atual","status","obrigatorio"]:
                self.assertEqual(anterior.get(chave),atuais[anterior["conteudo_id"]].get(chave),(anterior["conteudo_id"],chave))
        script="const c=require('./meu-mbb/catalogo-core.js');const d=require('./meu-mbb/catalogo.json');const fs=require('fs');console.log(JSON.stringify(JSON.parse(fs.readFileSync(0,'utf8')).map(a=>c.pesquisar(d,a.titulo)[0]?.conteudo_id)));"
        resultado=subprocess.run(["node","-e",script],cwd=ROOT,input=json.dumps(AULAS),capture_output=True,text=True,check=True)
        self.assertEqual(json.loads(resultado.stdout),[a["id"] for a in AULAS],"Pesquisa não chega à aula esperada")
        for rel in ["pages/programacao-web/web1.html","pages/programacao-web/web2.html","js/programacao-web.js","meu-mbb/conta.js","meu-mbb/firestore.rules","meu-mbb/visitas-diretas.js"]:
            old=subprocess.check_output(["git","show","be9e8dfdeb496ffbbaa8a96edc8eca3981568bf0:"+rel],cwd=ROOT)
            self.assertEqual((ROOT/rel).read_bytes(),old,rel)

    @unittest.skipIf(len(AULAS)<4,"Conferência de dados começa na aula 4")
    def test_05_contrato_typescript_do_download(self):
        with tempfile.TemporaryDirectory() as tmp:
            base=Path(tmp);app=extrair(len(AULAS),base);cliente=app/"cliente-balcao"
            subprocess.run(["npm","ci","--no-audit","--no-fund"],cwd=cliente,check=True)
            destino=base/"final-js";destino.mkdir();(destino/"package.json").write_text('{"type":"module"}')
            subprocess.run([str(cliente/"node_modules/.bin/tsc"),"--noEmit","false","--rootDir","src","--outDir",str(destino),"--module","NodeNext","--moduleResolution","NodeNext"],cwd=cliente,check=True)
            ambiente={**os.environ,"MBB_CAP2_MODULO":str(destino/"atendimento.js")}
            subprocess.run(["node","--test",str(ROOT/"tests/web3/contrato-capitulo2.test.mjs")],env=ambiente,check=True)

def regressao():
    spec=importlib.util.spec_from_file_location("cap1",ROOT/"tests/web3/verificar-pratica.py")
    m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
    class Evoluido(m.Pratica):
        def setUp(self):
            super().setUp()
            with zipfile.ZipFile(D/f"cafe-aurora-web3-cap2-aula{len(AULAS)}.zip") as z:z.extractall(self.base)
        def test_10_mensagem_persistida_e_painel_autenticado(self):
            self.assertIn("Cardápio",self.get("/cardapio.php"))
            super().test_10_mensagem_persistida_e_painel_autenticado()
    return Evoluido("test_10_mensagem_persistida_e_painel_autenticado")

if __name__=="__main__":
    assert shutil.which("php"),"PHP obrigatório; não omitir esses testes."
    suite=unittest.defaultTestLoader.loadTestsFromTestCase(Publicacao)
    if os.environ.get("MBB_CAP2_REGRESSAO")=="1":suite.addTest(regressao())
    r=unittest.TextTestRunner(verbosity=2).run(suite)
    raise SystemExit(0 if r.wasSuccessful() else 1)

