"""Exercita por HTTP a evolução real do Café; não usa dados da produção."""
from pathlib import Path
from contextlib import contextmanager
import http.cookiejar,json,os,shutil,socket,subprocess,tempfile,time,unittest,urllib.request,urllib.error,zipfile

ROOT=Path(__file__).resolve().parents[2]
KITS=ROOT/'materiais/programacao-web/web3-evolucao/kits'

@contextmanager
def cafe():
    with tempfile.TemporaryDirectory() as d:
        base=Path(d)
        with zipfile.ZipFile(ROOT/'downloads/programacao-web/cafe-aurora-web3-cap2-aula7.zip') as z:z.extractall(base)
        app=base/'cafe-aurora-web3'
        for fase in ['objetos','persistencia','catalogo']:shutil.copytree(KITS/fase,app,dirs_exist_ok=True)
        for comando in ['inicializar-banco.php','inicializar-atendimento.php','inicializar-cardapio.php']:
            subprocess.run(['php','src/'+comando],cwd=app,check=True,capture_output=True)
        administrador=app/'dados/administrador.php'
        subprocess.run(['php','-r',"file_put_contents($argv[1], '<?php return ' . var_export(['usuario'=>'operador-teste','senha_hash'=>password_hash('senha-ficticia-do-teste', PASSWORD_DEFAULT)], true) . ';');",str(administrador)],check=True)
        with socket.socket() as s:s.bind(('127.0.0.1',0));porta=s.getsockname()[1]
        proc=subprocess.Popen(['php','-d','opcache.enable=0','-S',f'127.0.0.1:{porta}','-t','public'],cwd=app,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        origem=f'http://127.0.0.1:{porta}/'
        def cliente():
            navegador=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
            def pedir(caminho,method='GET',dados=None,token=None):
                headers={}
                if dados is not None:headers['Content-Type']='application/json'
                if token is not None:headers['X-CSRF-Token']=token
                corpo=None if dados is None else json.dumps(dados).encode()
                req=urllib.request.Request(origem+caminho,data=corpo,method=method,headers=headers)
                try:r=navegador.open(req,timeout=8)
                except urllib.error.HTTPError as erro:r=erro
                with r:
                    b=r.read().decode();tipo=r.headers.get('Content-Type','')
                    return r.status,json.loads(b) if tipo.startswith('application/json') else b,dict(r.headers)
            return pedir
        publico=cliente()
        try:
            for _ in range(100):
                try:publico('api/atendimento.php');break
                except OSError:time.sleep(.05)
            else:raise AssertionError('Servidor PHP não iniciou')
            yield app,cliente
        finally:proc.terminate();proc.wait(timeout=10)

class Evolucao(unittest.TestCase):
    def test_objeto_preserva_os_cinco_estados(self):
        fonte=KITS/'objetos/src/AvisoAtendimento.php'
        codigo='require $argv[1]; foreach([[true,30],[false,30],[true,null],[false,null],[true,0]] as [$a,$m]) echo json_encode((new AvisoAtendimento("Café Aurora",$a,$m))->mensagens(), JSON_UNESCAPED_UNICODE)."\\n";'
        linhas=subprocess.check_output(['php','-r',codigo,str(fonte)],text=True).splitlines()
        resultados=[json.loads(l) for l in linhas]
        self.assertIn('30 minutos',resultados[0]['mensagemTempo'])
        self.assertIn('encerrados',resultados[1]['mensagemStatus'])
        self.assertIn('Consulte a equipe',resultados[2]['mensagemTempo'])
        self.assertIn('encerrados',resultados[3]['mensagemStatus'])
        self.assertIn('0 minutos',resultados[4]['mensagemTempo'])

    def entrar(self,pedir):
        status,sessao,_=pedir('api/sessao.php');self.assertEqual(status,200)
        status,atual,_=pedir('api/sessao.php','POST',{'acao':'entrar','usuario':'operador-teste','senha':'senha-ficticia-do-teste'},sessao['csrfToken'])
        self.assertEqual(status,200);self.assertTrue(atual['autenticado']);return atual['csrfToken']

    def test_identidade_csrf_e_recuperacao(self):
        with cafe() as (app,cliente):
            pedir=cliente();self.assertEqual(pedir('api/configuracao-atendimento.php')[0],401)
            self.assertEqual(pedir('api/configuracao-atendimento.php','POST',{'tempoEstimado':1})[0],401)
            _,anonimo,_=pedir('api/sessao.php')
            self.assertEqual(pedir('api/sessao.php','POST',{'acao':'entrar'},'incorreto')[0],403)
            self.assertEqual(pedir('api/sessao.php','POST',{'acao':'entrar','usuario':'operador-teste','senha':'errada'},anonimo['csrfToken'])[0],401)
            token=self.entrar(pedir)
            dados={'nomeNegocio':'Café Aurora','pedidosAbertos':True,'tempoEstimado':47}
            self.assertEqual(pedir('api/configuracao-atendimento.php','POST',dados,'incorreto')[0],403)
            self.assertIn('30 minutos',pedir('api/atendimento.php')[1]['mensagemTempo'])
            self.assertEqual(pedir('api/configuracao-atendimento.php','POST',dados,token)[0],200)
            self.assertIn('47 minutos',cliente()('api/atendimento.php')[1]['mensagemTempo'])
            for pagina in ['index.php','balcao.php']:self.assertIn('47 minutos',pedir(pagina)[1])
            self.assertEqual(pedir('api/sessao.php','POST',{'acao':'sair'},token)[0],200)
            self.assertEqual(pedir('api/configuracao-atendimento.php','POST',dados,token)[0],401)
            self.entrar(pedir)

    def test_tipos_limites_null_zero_e_metodo(self):
        with cafe() as (app,cliente):
            pedir=cliente();token=self.entrar(pedir)
            base={'nomeNegocio':'Café Aurora','pedidosAbertos':True,'tempoEstimado':30}
            for invalido in [{**base,'tempoEstimado':-1},{**base,'tempoEstimado':241},{**base,'tempoEstimado':'30'},{**base,'tempoEstimado':1.5},{**base,'pedidosAbertos':'true'},{**base,'nomeNegocio':'   '},{**base,'extra':True},{}]:
                self.assertEqual(pedir('api/configuracao-atendimento.php','POST',invalido,token)[0],422,invalido)
            for minutos,aberto in [(0,True),(None,True),(None,False),(30,True)]:
                self.assertEqual(pedir('api/configuracao-atendimento.php','POST',{**base,'tempoEstimado':minutos,'pedidosAbertos':aberto},token)[0],200)
                resposta=pedir('api/atendimento.php')[1]
                self.assertEqual(set(resposta),{'nomeNegocio','mensagemStatus','mensagemTempo'})
                if not aberto:self.assertIn('encerrados',resposta['mensagemStatus'])
                elif minutos is None:self.assertIn('Consulte a equipe',resposta['mensagemTempo'])
                else:self.assertIn(f'{minutos} minutos',resposta['mensagemTempo'])
            status,_,h=pedir('api/configuracao-atendimento.php','DELETE');self.assertEqual(status,405);self.assertEqual(h['Allow'],'GET, POST')

    def test_rascunho_publicacao_e_importacao_repetida(self):
        with cafe() as (app,cliente):
            operador=cliente();visitante=cliente();token=self.entrar(operador)
            antes=visitante('api/cardapio.php')[1]['produtos'];self.assertEqual(len(antes),3)
            for p in antes:self.assertNotIn('rascunho',p)
            id=antes[0]['id'];original=antes[0]['descricao'];texto='Descrição revisada pela equipe do Café.'
            acao={'id':id,'acao':'rascunho','descricao':texto}
            self.assertEqual(visitante('api/cardapio.php','POST',acao)[0],401)
            self.assertEqual(operador('api/cardapio.php','POST',acao,token)[0],200)
            publico=visitante('api/cardapio.php')[1]['produtos'][0]
            self.assertEqual(publico['descricao'],original);self.assertNotIn('rascunho',publico)
            self.assertEqual(operador('api/cardapio.php')[1]['produtos'][0]['rascunho'],texto)
            self.assertEqual(operador('api/cardapio.php','POST',{**acao,'acao':'publicar'},token)[0],200)
            self.assertEqual(visitante('api/cardapio.php')[1]['produtos'][0]['descricao'],texto)
            subprocess.run(['php','src/inicializar-cardapio.php'],cwd=app,check=True,capture_output=True)
            novos=visitante('api/cardapio.php')[1]['produtos'];self.assertEqual(len(novos),3);self.assertEqual(novos[0]['descricao'],texto)
            self.assertEqual(operador('api/cardapio.php','POST',{**acao,'descricao':'curta'},token)[0],422)
            self.assertEqual(operador('api/cardapio.php','POST',{**acao,'id':'inexistente'},token)[0],404)
            self.assertEqual(operador('api/cardapio.php','POST',{**acao,'acao':'publicar'},token)[0],409)

if __name__=='__main__':unittest.main(verbosity=2)
