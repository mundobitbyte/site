"""Confere a entrega ao aluno: código exibido, downloads e preservação do portal."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import hashlib,html,importlib.util,json,re,subprocess,zipfile

ROOT=Path(__file__).resolve().parents[2]
spec=importlib.util.spec_from_file_location('etapas',ROOT/'scripts/web3_etapas.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
manifest=json.loads((mod.SOURCE/'modulo.json').read_text())

class Pagina(HTMLParser):
    def __init__(self,s):
        super().__init__(convert_charrefs=True);self.ids=[];self.links=[];self.codigo={};self.arquivo=None;self.feed(s)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'):self.ids.append(a['id'])
        if tag in ['a','link','script'] and a.get('href',a.get('src')):self.links.append(a.get('href',a.get('src')))
        if tag=='code' and a.get('data-web3-file'):self.arquivo=a['data-web3-file'];self.codigo[self.arquivo]=''
    def handle_data(self,text):
        if self.arquivo:self.codigo[self.arquivo]+=text
    def handle_endtag(self,tag):
        if tag=='code':self.arquivo=None

for aula in manifest['aulas']:
    caminho=ROOT/'pages/programacao-web'/aula['pagina'];pagina=Pagina(caminho.read_text())
    assert len(pagina.ids)==len(set(pagina.ids)),f'IDs repetidos: {caminho}'
    assert 'checkpoint' in pagina.ids
    for url in pagina.links:
        u=urlsplit(url)
        if u.scheme or u.netloc:continue
        destino=(caminho.parent/unquote(u.path)).resolve() if u.path else caminho
        assert destino.is_relative_to(ROOT) and destino.exists(),f'Link ausente: {caminho}: {url}'
        if u.fragment and destino.suffix=='.html' and not u.fragment.startswith(':~:'):
            assert unquote(u.fragment) in Pagina(destino.read_text()).ids,f'Âncora ausente: {url}'
    if aula.get('percurso'):
        dados=mod.pacote(aula['chave'])
        assert len(dados)==len({p.casefold() for p in dados}),f'Colisão Windows: {aula["chave"]}'
        for p,conteudo in pagina.codigo.items():assert conteudo.rstrip()==dados[p].decode().rstrip(),f'Código exibido difere: {aula["chave"]}: {p}'
        zip_path=ROOT/'downloads/programacao-web'/f'cafe-aurora-web3-{aula["percurso"]}-etapa{aula["numero"]}.zip'
        with zipfile.ZipFile(zip_path) as z:
            for p,b in dados.items():assert z.read('cafe-aurora-web3/'+p)==b,f'ZIP difere: {aula["chave"]}: {p}'
            for p in z.namelist():
                partes=Path(p).parts
                assert '..' not in partes and not p.startswith('/')
                assert not any(x in partes for x in ['.env','vendor','node_modules'])
                assert not p.endswith(('.sqlite','.sqlite3','.db'))
                assert not re.search(r'(?:public/js/balcao/main\.js|functions/lib/)',p),f'Artefato gerado no ZIP: {p}'
        print(f'PASSOU {aula["chave"]}: links, código ensinado e ZIP ({len(dados)} arquivos)')

# A base efetivamente integrada acompanha o trabalho paralelo dos outros módulos.
# Alterações feitas por este PR continuam fora desse ancestral e são comparadas.
baseline=subprocess.check_output(['git','merge-base','HEAD','origin/main'],cwd=ROOT,text=True).strip()
antes=json.loads(subprocess.check_output(['git','show',f'{baseline}:meu-mbb/catalogo.json'],cwd=ROOT))
atual=json.loads((ROOT/'meu-mbb/catalogo.json').read_text());por_id={x['conteudo_id']:x for x in atual['unidades']}
for unidade in antes['unidades']:
    novo=por_id[unidade['conteudo_id']]
    # Somente o texto pesquisável das três páginas com ligação nova pode mudar.
    if unidade['conteudo_id'] in ['web3-comum-balcao','web3-comum-fonte','web3-cap2-entrega']:
        campos=lambda x:{k:v for k,v in x.items() if k not in ['texto_busca','topicos_busca']}
        assert campos(novo)==campos(unidade),f'Identidade anterior alterada: {unidade["conteudo_id"]}'
    else:assert novo==unidade,f'Registro anterior alterado: {unidade["conteudo_id"]}'
protegidos=['pages/programacao-web/web1.html','pages/programacao-web/web2.html','meu-mbb/conta.js','meu-mbb/catalogo-core.js','meu-mbb/firebase-config.js','meu-mbb/firestore.rules','meu-mbb/visitas-diretas.js','js/mbb-busca-global.js']
for p in protegidos:assert (ROOT/p).read_bytes()==subprocess.check_output(['git','show',f'{baseline}:{p}'],cwd=ROOT),f'Mecanismo protegido alterado: {p}'
print(f'PASSOU: {len(manifest["aulas"])} páginas, 29 checkpoints e registros/mecanismos anteriores preservados.')
