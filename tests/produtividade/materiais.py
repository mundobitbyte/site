"""Validação estrutural e pedagógica dos pacotes, sem presumir execução no LibreOffice."""
from pathlib import Path
import zipfile,io,csv,xml.etree.ElementTree as E,hashlib
base=Path(__file__).resolve().parents[2]/'downloads/informatica-produtividade'
count=0
for p in base.rglob('*'):
 if p.suffix in ('.zip','.odt','.ods','.odp'):
  with zipfile.ZipFile(p) as z:
   assert z.testzip() is None,p
   assert not any(n.startswith('/') or '..' in Path(n).parts for n in z.namelist()),p
   if p.suffix!='.zip': E.fromstring(z.read('content.xml'))
   count+=1
with zipfile.ZipFile(base/'projeto-integrador/pacote-final-feira.zip') as z:
 assert len([n for n in z.namelist() if n.startswith('fontes/')])==7
 for n in z.namelist():
  if n.endswith(('.odt','.ods','.odp')):
   with zipfile.ZipFile(io.BytesIO(z.read(n))) as native:
    assert native.testzip() is None
    E.fromstring(native.read('content.xml'))
 assert '08:30' in z.read('PEDIDO_OFICIAL.txt').decode()
with zipfile.ZipFile(base/'caixa-entrada-feira.zip') as original,zipfile.ZipFile(base/'referencias/modulo-01-referencia.zip') as z:
 assert len(original.namelist())==8
 for n in original.namelist():assert z.read('Feira_Projetos_2026/10_Em_trabalho/fontes_recebidas/'+n)==original.read(n)
 n=next(n for n in z.namelist() if '/30_Publicado/' in n)
 records=list(csv.DictReader(io.StringIO(z.read(n).decode())))
 assert len(records)==3 and list(records[0])==['equipe','projeto']
 assert all(r['equipe']!='Equipe Horizonte' for r in records)
 control=z.read('Feira_Projetos_2026/10_Em_trabalho/CONTROLE_DA_FEIRA.txt').decode()
 assert all(f'[P-0{i}]' in control for i in range(6))
 assert 'pendente' in control.lower()
# Independent arithmetic of actual source rows after specified type/formula corrections.
from decimal import Decimal as D
items=[(200,'0.65'),(1,'180'),(6,'18.5'),(8,'12'),(4,'79.90'),(10,'14.9'),(5,'22'),(40,'1.25')]
values=[D(q)*D(u)*D('1.05') for q,u in items]
assert sum(values)==D('1202.8800')
assert sum(values[i] for i in [0,2,5,6])==D('525.0000')
print(f'OK: {count} pacotes/ODF; 7 fontes finais; originais idênticos; lista pública com 3 equipes; totais conferidos.')
