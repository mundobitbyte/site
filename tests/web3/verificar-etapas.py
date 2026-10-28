"""Reconstrói cada etapa em pasta limpa; não confunde build com teste de navegador."""
from pathlib import Path
import argparse, importlib.util, os, shutil, subprocess, tempfile, socket, time, json, signal, urllib.request

ROOT=Path(__file__).resolve().parents[2]
spec=importlib.util.spec_from_file_location('etapas',ROOT/'scripts/web3_etapas.py')
mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)

def executar(cmd,cwd):
    r=subprocess.run(cmd,cwd=cwd,text=True,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
    if r.returncode: raise RuntimeError(f'{cwd}: {cmd}\n{r.stdout}')
    return r.stdout

def conferir(codigo,app,dependencias,nativo):
    pacote=mod.pacote(codigo)
    assert len({p.casefold() for p in pacote})==len(pacote), f'{codigo}: nomes de arquivo colidem no Windows'
    for p,b in pacote.items():
        arquivo=app/p;arquivo.parent.mkdir(parents=True,exist_ok=True);arquivo.write_bytes(b)
    if codigo.startswith('s'):
        html=(app/'public/balcao.php').read_text()
        assert 'id="cafe-app"' in html, f'{codigo}: o PHP precisa preservar a raiz React'
        assert 'id="atualizar-atendimento"' not in html, f'{codigo}: controlador DOM antigo voltou'
    cliente=app/'cliente-balcao'
    nm=dependencias/('baas' if codigo.startswith('b') else 'spa')/'cliente-balcao/node_modules'
    # O cliente PHP/MVC usa seu próprio pacote de dependências do Capítulo 2.
    if codigo.startswith('m'):
        nm=dependencias/'base/cliente-balcao/node_modules'
    if cliente.exists():
        (cliente/'node_modules').symlink_to(nm,target_is_directory=True)
        sentinela=app/'public/js/preservar.txt';sentinela.parent.mkdir(parents=True,exist_ok=True);sentinela.write_text('arquivo anterior')
        executar(['npm','run','build'],cliente)
        assert sentinela.read_text()=='arquivo anterior',f'{codigo}: o build apagou arquivos antigos'
        assert (app/'public/js/balcao/main.js').is_file()
        if codigo=='s10':executar(['npm','test'],cliente)
    if codigo.startswith('b') and (app/'functions').exists():
        (app/'functions/node_modules').symlink_to(dependencias/'baas/functions/node_modules',target_is_directory=True)
        executar(['npm','test','--prefix','functions'],app)
    if not nativo:return
    for arquivo in app.rglob('*.php'):
        if 'vendor' not in arquivo.parts:executar(['php','-l',str(arquivo)],app)
    if codigo.startswith('m'):
        executar(['php','tests/atendimento-test.php'],app)
        if codigo!='m1':
            # Copiar evita reutilizar o autoloader de uma OUTRA aplicação Laravel.
            shutil.copytree(dependencias/'mvc/vendor',app/'vendor')
            shutil.copy2(app/'.env.example',app/'.env')
            executar(['composer','dump-autoload','--no-scripts','--no-interaction'],app)
            executar(['php','artisan','key:generate'],app)
            executar(['php','artisan','migrate','--force'],app)
            executar(['php','artisan','view:cache'],app)
            executar(['php','artisan','route:list'],app)
            if codigo=='m6':
                controller=app/'app/Http/Controllers/EnderecoController.php';final=controller.read_bytes();controller.unlink()
                executar(['php','artisan','make:controller','EnderecoController'],app)
                assert controller.exists() and 'class EnderecoController' in controller.read_text()
                controller.write_bytes(final)
            if int(codigo[1:])>=5:executar(['php','artisan','cafe:importar-cardapio'],app)
            if list((app/'tests/Feature').glob('*Test.php')):executar(['vendor/bin/phpunit'],app)
            if int(codigo[1:])>=3:executar(['php','tests/alterar-localmente.php'],app)
            with socket.socket() as sock:sock.bind(('127.0.0.1',0));porta=sock.getsockname()[1]
            web=subprocess.Popen(['php','artisan','serve','--host=127.0.0.1',f'--port={porta}'],cwd=app,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,start_new_session=True)
            origem=f'http://127.0.0.1:{porta}'
            try:
                for _ in range(100):
                    try:
                        with socket.create_connection(('127.0.0.1',porta),timeout=.2):break
                    except OSError:time.sleep(.05)
                else:raise AssertionError('O servidor Laravel não iniciou')
                def ler(caminho):
                    with urllib.request.urlopen(origem+caminho,timeout=8) as resposta:return resposta.read().decode()
                assert 'Café Aurora' in ler('/atendimento')
                api=json.loads(ler('/api/atendimento'))
                assert set(api)=={'nomeNegocio','mensagemStatus','mensagemTempo'}
                if int(codigo[1:])>=3:assert '47 minutos' in api['mensagemTempo']
                assert 'Café Aurora' in ler('/balcao.php')
                if int(codigo[1:])>=5:
                    assert 'Café coado' in ler('/cardapio.php')
                    assert len(json.loads(ler('/api/produtos'))['data'])==3
            finally:
                os.killpg(web.pid,signal.SIGTERM);web.wait(timeout=10)
        if int(codigo[1:])>=8:
            servidor=subprocess.Popen(['php','-S','127.0.0.1:9001','apoio/soap/servidor.php'],cwd=app,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
            try:
                for _ in range(80):
                    try:
                        with socket.create_connection(('127.0.0.1',9001),timeout=.2):break
                    except OSError:time.sleep(.05)
                else:raise AssertionError('O servidor SOAP não iniciou')
                saida=executar(['php','apoio/soap/cliente.php'],app)
                assert 'REQUISIÇÃO XML' in saida and 'RESPOSTA XML' in saida and 'mensagemTempo' in saida
            finally:servidor.terminate();servidor.wait(timeout=10)

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('dependencias',type=Path);p.add_argument('--sem-php',action='store_true');p.add_argument('--somente',nargs='*');args=p.parse_args()
    if not args.sem_php and (not shutil.which('php') or not shutil.which('composer')):raise SystemExit('PHP e Composer são necessários. Use --sem-php apenas para declarar a validação parcial dos builds.')
    codigos=args.somente or [f'{p}{n}' for p,total in [('m',9),('s',10),('b',10)] for n in range(1,total+1)]
    with tempfile.TemporaryDirectory(prefix='mbb-etapas-') as d:
        for codigo in codigos:
            app=Path(d)/codigo;app.mkdir();conferir(codigo,app,args.dependencias.resolve(),not args.sem_php)
            print(f'PASSOU {codigo}: reconstrução e '+('build (PHP não executado)' if args.sem_php else 'verificações nativas'),flush=True)
            shutil.rmtree(app)
