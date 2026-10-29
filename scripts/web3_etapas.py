"""Monta checkpoints progressivos do mesmo Café, sem dependências ou dados privados."""
from pathlib import Path
import zipfile,re,json
ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'materiais/programacao-web/web3-evolucao'
KITS=SOURCE/'kits'
def arquivos(pasta):
 return {str(p.relative_to(pasta)).removesuffix('.txt') if p.name.endswith('.html.txt') else str(p.relative_to(pasta)):p.read_bytes() for p in pasta.rglob('*') if p.is_file()}
def texto(kit,p):return arquivos(KITS/kit)[p].decode()
def aplicar(d,kit,cond=lambda p:True):d.update({p:b for p,b in arquivos(KITS/kit).items() if cond(p)})
def por(d,p,s):d[p]=s.encode()
def base():
 with zipfile.ZipFile(ROOT/'downloads/programacao-web/cafe-aurora-web3-cap2-aula7.zip') as z:return {p.split('/',1)[1]:z.read(p) for p in z.namelist() if not p.endswith('/')}
def escapar(s):
 for c in ['nomeNegocio','mensagemStatus','mensagemTempo']:s=s.replace('<?= $'+c+' ?>','<?= htmlspecialchars($'+c+', ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8") ?>')
 return s

def mvc(n):
 d=base();aplicar(d,'objetos')
 if n==1:return d
 inicio=escapar(d['public/index.php'].decode()).replace('dirname(__DIR__) . "/src/atendimento.php"','base_path("src/atendimento.php")')
 aplicar(d,'laravel',lambda p:p in ['composer.json','composer.lock','phpunit.xml','artisan','.env.example','NOTA-ORIGEM.md','public/index.php','bootstrap/app.php','bootstrap/providers.php','routes/console.php','tests/TestCase.php'] or p.startswith('config/'))
 por(d,'resources/views/inicio-legado.blade.php',inicio)
 for p in ['bootstrap/cache','storage/framework/cache/data','storage/framework/sessions','storage/framework/views','storage/logs']:por(d,p+'/.gitignore','*\n!.gitignore\n')
 por(d,'app/Providers/AppServiceProvider.php','<?php\nnamespace App\\Providers;\nuse Illuminate\\Support\\ServiceProvider;\nclass AppServiceProvider extends ServiceProvider { public function register():void{} public function boot():void{} }\n')
 por(d,'routes/web.php',"<?php\nuse Illuminate\\Support\\Facades\\Route;\nRoute::get('/',fn()=>view('inicio-legado'));\nRoute::get('/atendimento',[\\App\\Http\\Controllers\\AtendimentoController::class,'mostrar']);\nRoute::get('/api/atendimento',[\\App\\Http\\Controllers\\AtendimentoController::class,'publico']);\nRoute::get('/api/atendimento.php',[\\App\\Http\\Controllers\\AtendimentoController::class,'publico']);\n")
 por(d,'app/Http/Controllers/AtendimentoController.php',"<?php\nnamespace App\\Http\\Controllers;\nclass AtendimentoController {\n public function mostrar(){require_once base_path('src/atendimento.php');return view('atendimento',['dados'=>obterAtendimento()]);}\n public function publico(){require_once base_path('src/atendimento.php');return response()->json(obterAtendimento())->header('Cache-Control','no-store');}\n}\n")
 layout=texto('laravel','resources/views/layout.blade.php').replace(' · <a href="/operador/atendimento">Operador</a>','').replace(' · <a href="/admin/painel.php">Mensagens do Web II</a>','')
 por(d,'resources/views/layout.blade.php',layout)
 por(d,'resources/views/atendimento.blade.php',"@extends('layout')\n@section('titulo','Atendimento')\n@section('conteudo')\n<h1>{{ $dados['nomeNegocio'] }}</h1><p>{{ $dados['mensagemStatus'] }}</p><p>{{ $dados['mensagemTempo'] }}</p>\n@endsection\n")
 if n>=3:
  aplicar(d,'persistencia',lambda p:p.startswith('src/'))
  aplicar(d,'laravel',lambda p:p in ['app/Models/AtendimentoAtual.php','database/migrations/2026_10_26_000001_preparar_atendimento.php'])
  c=texto('laravel','app/Http/Controllers/AtendimentoController.php')
  c=re.sub(r'public function mostrar\(.*?\n    public function publico',"public function mostrar(): View\n    {\n        return view('atendimento', ['atendimento'=>AtendimentoAtual::findOrFail(1)]);\n    }\n    public function publico",c,flags=re.S)
  if n==3:c=c[:c.index('    public function editar()')]+'}\n'
  por(d,'app/Http/Controllers/AtendimentoController.php',c)
  por(d,'resources/views/atendimento.blade.php',"@extends('layout')\n@section('titulo','Atendimento')\n@section('conteudo')\n<h1>{{ $atendimento->nome }}</h1>\n@php($dados=$atendimento->mensagens())\n<p>{{ $dados['mensagemStatus'] }}</p><p>{{ $dados['mensagemTempo'] }}</p>\n@endsection\n")
  por(d,'tests/alterar-localmente.php',"<?php\nrequire_once dirname(__DIR__).'/src/repositorio-atendimento.php';\n$aviso=new AvisoAtendimento('Café Aurora',true,47);\nsalvarConfiguracaoAtendimento(conectarBanco(),$aviso);\necho 'Alteração local gravada.',PHP_EOL;\n")
 if n>=4:
  aplicar(d,'laravel',lambda p:p.startswith(('app/Http/Requests/','app/Models/User','app/Providers/','app/Http/Controllers/Sessao','app/Http/Controllers/AtendimentoController','app/Console/Commands/Criar','resources/views/entrar','resources/views/editar-atendimento','tests/Feature/Atendimento','resources/views/layout')))
  por(d,'routes/web.php',texto('laravel','routes/web.php').split("Route::get('/api/produtos'")[0])
 if n>=5:
  aplicar(d,'laravel',lambda p:p.startswith(('app/Models/Categoria','app/Models/Produto','app/Console/Commands/Importar','app/Http/Controllers/Catalogo','resources/views/editar-produto','resources/views/cardapio','public/cardapio.php','database/migrations/2026_10_26_000002','tests/Feature/Catalogo')))
  d['routes/web.php']+=b"\nRoute::get('/api/produtos',[\\App\\Http\\Controllers\\CatalogoController::class,'listar']);\nRoute::get('/cardapio',[\\App\\Http\\Controllers\\CatalogoController::class,'pagina']);\nRoute::middleware(['auth','can:alterar-atendimento'])->group(function(){\nRoute::get('/operador/produtos/{produto}',[\\App\\Http\\Controllers\\CatalogoController::class,'editar'])->name('operador.produto');\nRoute::post('/operador/produtos/{produto}',[\\App\\Http\\Controllers\\CatalogoController::class,'salvar']);\n});\n"
  d['resources/views/inicio-legado.blade.php']=d['resources/views/inicio-legado.blade.php'].replace(b'cardapio.php',b'/cardapio')
 if n>=6:
  aplicar(d,'laravel',lambda p:p.startswith(('app/Services/','app/Http/Controllers/Endereco','resources/views/endereco','resources/views/cardapio','tests/Feature/Cep','public/cardapio.php','public/js/script.js')))
  d['routes/web.php']+=b"\nRoute::get('/endereco',[\\App\\Http\\Controllers\\EnderecoController::class,'mostrar']);\n"
  d['resources/views/inicio-legado.blade.php']=d['resources/views/inicio-legado.blade.php'].replace(b'cardapio.php',b'/cardapio')
  d['resources/views/layout.blade.php']=d['resources/views/layout.blade.php'].replace(b'/cardapio.php',b'/cardapio')
 if n>=7:aplicar(d,'laravel',lambda p:p.startswith(('public/mobile','public/js/mobile')))
 if n>=8:aplicar(d,'laravel',lambda p:p.startswith(('contratos/','apoio/soap/')))
 if n>=9:aplicar(d,'laravel',lambda p:p.startswith('lang/') or p in ['app/Http/Controllers/AtendimentoController.php','resources/views/atendimento.blade.php','resources/views/layout.blade.php','tests/Feature/AtendimentoTest.php'])
 if n<5 and 'resources/views/layout.blade.php' in d:
  d['resources/views/layout.blade.php']=d['resources/views/layout.blade.php'].replace(b'href="/cardapio"',b'href="/cardapio.php"')
 if n<9 and 'tests/Feature/AtendimentoTest.php' in d:
  t=d['tests/Feature/AtendimentoTest.php'].decode()
  if '    public function test_idioma' in t:por(d,'tests/Feature/AtendimentoTest.php',t[:t.index('    public function test_idioma')]+'}\n')
 return d

def spa(n):
 d=base();aplicar(d,'spa',lambda p:p in ['public/balcao.php','cliente-balcao/package.json','cliente-balcao/package-lock.json','cliente-balcao/tsconfig.json','cliente-balcao/vite.config.mjs','cliente-balcao/src/main.tsx'])
 d['cliente-balcao/main-anterior.ts.txt']=d.pop('cliente-balcao/src/main.ts')
 if n==1:
  app='''interface OrientacaoProps { titulo: string; texto: string }
function Orientacao({titulo,texto}:OrientacaoProps){return <section><h2>{titulo}</h2><p>{texto}</p></section>;}
export function App(){return <><h1>Café Aurora · Balcão</h1><Orientacao titulo="Antes de retirar" texto="Consulte o atendimento para confirmar a abertura dos pedidos e o prazo informado pela equipe."/></>;}
'''
 elif n==2:
  app='''import {useState} from "react";
export function App(){
 const [mostrar,setMostrar]=useState(false);
 return <><h1>Café Aurora · Balcão</h1><button type="button" aria-expanded={mostrar} aria-controls="orientacao" onClick={()=>setMostrar(!mostrar)}>Como consultar?</button><div id="orientacao" hidden={!mostrar}><p>O prazo pode mudar. Abrir esta orientação só muda a apresentação; atualizar a consulta pede o aviso atual à cozinha.</p></div></>;
}
'''
 else:
  aplicar(d,'spa',lambda p:p.endswith('/componentes/Atendimento.tsx'))
  final=texto('spa','cliente-balcao/src/App.tsx');consulta=final[final.index('  async function consultar()'):final.index('  async function carregarProdutos(')]
  app='''import {useState,useRef} from "react";
import {obterAtendimento} from "./atendimento.js";
import type {Atendimento as Dados} from "./atendimento.js";
import {Atendimento} from "./componentes/Atendimento.js";
export function App(){
 const [dados,setDados]=useState<Dados|null>(null);
 const [consultando,setConsultando]=useState(false);
 const [aviso,setAviso]=useState("Consulte para confirmar o atendimento.");
 const consultaAtiva=useRef(false);
'''+consulta+''' return <><h1>Café Aurora · Balcão</h1><Atendimento dados={dados} consultando={consultando} aviso={aviso} aoConsultar={()=>void consultar()}/></>;
}
'''
 if n>=4:
  aplicar(d,'objetos');aplicar(d,'persistencia');aplicar(d,'catalogo');aplicar(d,'spa',lambda p:p.endswith('/servicos/api.ts'))
  card=texto('spa','cliente-balcao/src/componentes/Cardapio.tsx')
  if n==4:
   card=card.replace('import { filtrarProdutos } from "../regras.js";','').replace('const filtrados = filtrarProdutos(produtos, busca, categoria);','const filtrados = produtos;')
   card=re.sub(r'    <p><label htmlFor="busca".*?</select></p>\n','',card,flags=re.S)
  por(d,'cliente-balcao/src/componentes/Cardapio.tsx',card)
  app=app.replace('export function App(){','import {Cardapio} from "./componentes/Cardapio.js";\nimport {lerProdutos} from "./servicos/api.js";\nimport type {Produto} from "./servicos/api.js";\nexport function App(){\n const [produtos,setProdutos]=useState<Produto[]>([]);\n const [avisoProdutos,setAvisoProdutos]=useState("");\n')
  app=app.replace(' return <><h1>', ''' async function carregarProdutos(){setProdutos([]);setAvisoProdutos("Consultando…");try{setProdutos(await lerProdutos());setAvisoProdutos("");}catch{setAvisoProdutos("Cardápio não confirmado. Tente novamente.");}}
 return <><h1>''')
  app=app.replace('/></>;','/><button onClick={()=>void carregarProdutos()}>Consultar cardápio</button><p role="status">{avisoProdutos}</p><Cardapio produtos={produtos} busca="" categoria="todas" aoBuscar={()=>{}} aoCategorizar={()=>{}}/></>;')
 if n>=5:
  aplicar(d,'spa',lambda p:p.endswith(('/componentes/Cardapio.tsx','/regras.ts')))
  app=app.replace('export function App(){','export function App(){\n const [busca,setBusca]=useState("");\n const [categoria,setCategoria]=useState("todas");').replace('busca="" categoria="todas" aoBuscar={()=>{}} aoCategorizar={()=>{}}','busca={busca} categoria={categoria} aoBuscar={setBusca} aoCategorizar={setCategoria}')
 if n>=6:
  aplicar(d,'spa',lambda p:p=='public/cardapio.php')
  app=texto('spa','cliente-balcao/src/App.tsx')
  if n==6:
   app=app.replace('import { Operador } from "./componentes/Operador.js";','').replace('consultarSessao, lerProdutos','lerProdutos').replace('Produto, Sessao','Produto').replace('["atendimento", "cardapio", "operador"]','["atendimento", "cardapio"]')
   app=re.sub(r'  const \[sessao, setSessao\].*?\n','',app)
   app=re.sub(r'    void consultarSessao\(\).*?\n','',app)
   app=app.replace('{" · "}<a href="#operador" aria-current={rota === "operador" ? "page" : undefined}>Operador</a>','')
   app=re.sub(r'    \{rota === "operador".*?\n','',app)
 if n>=7:
  op=texto('spa','cliente-balcao/src/componentes/Operador.tsx')
  if n<9:op=re.sub(r'      \{produtos.map.*?\n','',op.replace('import { EditorProduto } from "./EditorProduto.js";',''))
  if n==7:op=re.sub(r'      \{config && <form.*?</form>\}','',op,flags=re.S)
  por(d,'cliente-balcao/src/componentes/Operador.tsx',op)
 if n>=9:aplicar(d,'spa',lambda p:p.endswith('/componentes/EditorProduto.tsx'))
 if n>=10:aplicar(d,'spa',lambda p:'.test.' in p)
 por(d,'cliente-balcao/src/App.tsx',app)
 # A API de apoio não pode recolocar o controlador DOM antigo na área React.
 aplicar(d,'spa',lambda p:p=='public/balcao.php')
 return d

def baas(n):
 d={p:b for p,b in base().items() if p.startswith(('public/css/','public/img/')) or p=='public/dados/produtos.json'}
 aplicar(d,'baas',lambda p:p in ['.gitignore','.firebaserc','package.json','package-lock.json','firestore.rules','storage.rules','firebase.json','scripts/preparar.mjs','scripts/preparar-local.mjs','public/sobre.html','public/cardapio.html','public/js/script.js','public/css/atendimento-baas.css','cliente-balcao/package.json','cliente-balcao/package-lock.json','cliente-balcao/tsconfig.json','cliente-balcao/vite.config.mjs','cliente-balcao/src/ambiente.ts','cliente-balcao/src/atendimento.ts','cliente-balcao/src/tela.ts'])
 config=json.loads(d['firebase.json'])
 if n<8:config.pop('functions',None);config['emulators'].pop('functions',None)
 if n<6:config.pop('storage',None);config['emulators'].pop('storage',None);d.pop('storage.rules',None)
 por(d,'firebase.json',json.dumps(config,ensure_ascii=False,indent=2)+'\n')
 config=json.loads(d['package.json'])
 if n<3:config['scripts'].pop('test',None)
 elif n<6:config['scripts']['test']=config['scripts']['test'].replace('firestore,auth,storage','firestore,auth')
 if n<10:config['scripts'].pop('test:integracoes',None)
 por(d,'package.json',json.dumps(config,ensure_ascii=False,indent=2)+'\n')
 config=json.loads(d['cliente-balcao/package.json'])
 if n<9:config['scripts']['build']='tsc --noEmit && vite build'
 por(d,'cliente-balcao/package.json',json.dumps(config,ensure_ascii=False,indent=2)+'\n')
 dados=texto('baas','cliente-balcao/src/dados.ts')
 if n<5:dados=dados[:dados.index('export function acompanharAtendimento')]
 por(d,'cliente-balcao/src/dados.ts',dados)
 if n<3:por(d,'firestore.rules',"rules_version = '2'; service cloud.firestore {match /databases/{database}/documents {match /atendimento/atual {allow read:if true;allow write:if false;}match /{document=**} {allow read,write:if false;}}}")
 else:
  regras=d['firestore.rules'].decode()
  for minimo,colecao in [(6,'produtos'),(9,'inscricoes')]:
   if n<minimo:regras=re.sub(r'    match /'+colecao+r'/\{[^}]+\} \{.*?^    \}\n','',regras,flags=re.S|re.M)
  por(d,'firestore.rules',regras)
 if n>=2:aplicar(d,'baas',lambda p:p.endswith('/operador.ts'))
 if n>=3:
  t=texto('baas','tests/permissoes.test.mjs')
  partes=re.split(r"(?=^test\()",t,flags=re.M)
  t=partes[0]+''.join(parte for parte in partes[1:] if not ((n<6 and (parte.startswith("test('imagem") or parte.startswith("test('produto"))) or (n<9 and parte.startswith("test('inscrição"))))
  if n<6:t=t.replace(",storage:{rules:await readFile('storage.rules','utf8')}","");t=re.sub(r"^import .* from 'firebase/storage';\n",'',t,flags=re.M)
  por(d,'tests/permissoes.test.mjs',t)
 if n>=6:aplicar(d,'baas',lambda p:p.endswith(('/midia.ts','/imagens.ts','/catalogo.ts','/catalogo-interface.ts')))
 if n>=7:aplicar(d,'baas',lambda p:p.endswith('configuracao-nuvem.exemplo.ts.txt'))
 if n>=8:
  aplicar(d,'baas',lambda p:p.startswith('functions/') or p.endswith('/integracoes.ts'))
  t=texto('baas','functions/src/index.ts')
  if n==8:t=t[:t.index('export const prepararRascunho')]
  if n==9:t=t[:t.index('export const prepararRascunho')]+t[t.index('export const enviarAviso'):]
  por(d,'functions/src/index.ts',t)
  if n<10:
   t=d['cliente-balcao/src/integracoes.ts'].decode();por(d,'cliente-balcao/src/integracoes.ts',t[:t.index('let rascunho:')])
 if n>=9:aplicar(d,'baas',lambda p:p.endswith(('/notificacoes.ts','/mensageria-sw.js','/vite.sw.config.mjs')))
 if n>=10:aplicar(d,'baas',lambda p:p=='tests/integracoes.local.mjs')
 service='''import {initializeApp} from "firebase/app";
import {getFirestore,connectFirestoreEmulator} from "firebase/firestore";
import {modo,configuracao} from "./ambiente.js";
if(modo==="local" && !["localhost","127.0.0.1"].includes(location.hostname))throw new Error("Abra pelo endereço do emulador local.");
export const app=initializeApp(configuracao);
export const banco=getFirestore(app);
if(modo==="local")connectFirestoreEmulator(banco,"127.0.0.1",8080);
'''
 for minimo,linha in [(2,'import {getAuth,connectAuthEmulator} from "firebase/auth";\nexport const auth=getAuth(app);\nif(modo==="local")connectAuthEmulator(auth,"http://127.0.0.1:9099",{disableWarnings:true});\n'),(6,'import {getStorage,connectStorageEmulator} from "firebase/storage";\nexport const armazenamento=getStorage(app);\nif(modo==="local")connectStorageEmulator(armazenamento,"127.0.0.1",9199);\n'),(8,'import {getFunctions,connectFunctionsEmulator} from "firebase/functions";\nexport const funcoes=getFunctions(app,"us-central1");\nif(modo==="local")connectFunctionsEmulator(funcoes,"127.0.0.1",5001);\n')]:
  if n>=minimo:service+=linha
 por(d,'cliente-balcao/src/servico.ts',service)
 main=texto('baas','cliente-balcao/src/main.ts')
 importacoes=[l for l in main.splitlines() if l.startswith('import ') and not l.startswith('import "./')]
 corpo=main[main.index('const botao ='):]
 if n<5:corpo=corpo[:corpo.index('let encerrar:')];importacoes=[l.replace('obterAtendimento, acompanharAtendimento','obterAtendimento') for l in importacoes]
 for minimo,nome in [(2,'operador'),(6,'midia'),(6,'catalogo'),(8,'integracoes'),(9,'notificacoes')]:
  if n>=minimo and (nome!='catalogo' or (KITS/'baas/cliente-balcao/src/catalogo.ts').exists()):importacoes.append('import "./'+nome+'.js";')
 corpo+='\nwindow.addEventListener("offline",()=>{++revisao;botao.disabled=false;retirarAviso();retorno.textContent="Sem conexão. Consulte novamente quando ela voltar.";});\n'
 por(d,'cliente-balcao/src/main.ts','\n'.join(importacoes)+'\nif(document.querySelector("#consultar-atendimento")){\n'+corpo+'}\n')
 full=texto('baas','public/balcao.html');header=full[:full.index('<section aria-labelledby="titulo-atendimento"')];foot=full[full.index('</main>'):]
 inicio=full.index('<section aria-labelledby="titulo-atendimento"');fim=full.index('<section aria-labelledby="titulo-operador"');body=full[inicio:fim]
 if n<5:body=re.sub(r'<button id="acompanhar".*?</button>','',body)
 for minimo,chave,proxima in [(2,'operador','imagem'),(6,'imagem','funcao'),(8,'funcao','avisos'),(9,'avisos','rascunho'),(10,'rascunho',None)]:
  if n>=minimo:
   parte=full[full.index('<section aria-labelledby="titulo-'+chave+'"'):(full.index('<section aria-labelledby="titulo-'+proxima+'"') if proxima else full.index('</main>'))]
   if chave=='operador' and n<4:parte=re.sub(r'<form id="alterar".*?</form>','',parte,flags=re.S)
   body+=parte
 por(d,'public/balcao.html',header+body+foot)
 inicio=texto('baas','public/index.html')
 if n<5:inicio=re.sub(r'<button id="acompanhar".*?</button>','',inicio)
 por(d,'public/index.html',inicio)
 if n<2:
  for p in list(d):
   if p.endswith('.html'):d[p]=d[p].replace(b'balcao.html#titulo-operador',b'balcao.html')
 if n<6:
  d['public/cardapio.html']=re.sub(b'<section aria-labelledby="titulo-atualizar-fotos".*?</section>',b'',d['public/cardapio.html'],flags=re.S)
 return d

def pacote(etapa):return {'m':mvc,'s':spa,'b':baas}[etapa[0]](int(etapa[1:]))
