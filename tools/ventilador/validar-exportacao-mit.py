"""Compara a exportacao recebida do editor MIT com o AIA gerado.
Este script compara arquivos; nao executa Android nem substitui o teste fisico.
"""
from pathlib import Path
from zipfile import ZipFile
from lxml import etree
import json, hashlib, sys
ROOT=Path(__file__).resolve().parents[2]
historical='--historico-02' in sys.argv
arguments=[a for a in sys.argv[1:] if a!='--historico-02']
source=Path(__file__).parent/'referencias/VentiladorMBB_02.aia' if historical else ROOT/'downloads/ventilador/VentiladorMBB.aia'
exported=Path(arguments[0]) if arguments else Path(__file__).parent/'evidencias-mit'/('VentiladorMBB_ExportadoMIT.aia' if historical else 'VentiladorMBB_Revisado03_ExportadoMIT.aia')

def read_aia(path):
    with ZipFile(path) as z:
        assert z.testzip() is None
        assert not any(n.lower().endswith(('.keystore','.jks','.pem','.key')) for n in z.namelist())
        contents={Path(n).name:z.read(n) for n in z.namelist()}
    tree=etree.fromstring(contents['Screen1.bky'])
    for el in tree.iter():el.tag=etree.QName(el).localname
    designer=json.loads(contents['Screen1.scm'].decode().split('$JSON\n',1)[1].rsplit('\n|#',1)[0])
    return tree,designer,contents

def signature(el):
    ignored={'id','x','y','inline','collapsed','deletable','editable','movable'}
    return (el.tag,tuple(sorted((k,v) for k,v in el.attrib.items() if k not in ignored)),
            el.text if el.tag in {'field','title'} else None,
            tuple(signature(c) for c in el if c.tag not in {'comment','data','yacodeblocks'}))

before,designer_before,_=read_aia(source)
after,designer_after,files=read_aia(exported)
a={el.get('id'):el for el in before.findall('.//block')};b={el.get('id'):el for el in after.findall('.//block')}
assert a.keys()==b.keys()
assert all(signature(a[k])==signature(b[k]) for k in a)
assert designer_before==designer_after
expected_blocks=len(a)
assert len(a)==len(b)
assert sum(el.get('type')=='component_event' for el in after.findall('block'))==10
assert sum(el.get('type')=='global_declaration' for el in after.findall('block'))==5
assert len(designer_after['Properties']['$Components'])==10
properties=dict(line.split('=',1) for line in files['project.properties'].decode().splitlines() if '=' in line and not line.startswith('#'))
procedures=sum(el.get('type')=='procedures_defnoreturn' for el in after.findall('block'))
assert procedures==(0 if historical else 5)
print(f'PASS: exportacao MIT integra, sem chaves privadas; {expected_blocks} blocos/IDs e arvore funcional preservados; Designer identico (10 componentes), 10 eventos, 5 globais e {procedures} procedimentos.')
print('METADADOS MIT: versionname='+properties['versionname']+'; versioncode='+properties['versioncode']+'; namespace reescrito pelo editor.')
if not historical:
    assert properties['versionname']=='0.3-experimental' and properties['versioncode']=='3'
    assert designer_after['Properties']['Title']==designer_after['Properties']['AppName']=='Ventilador MbB'
    assert designer_after['Properties']['$Components'][0]['Text']=='Ventilador MbB'
print('SHA256_EXPORTADO='+hashlib.sha256(exported.read_bytes()).hexdigest())
print('LIMITES: importacao/compilacao registradas na evidencia do navegador; este comparador nao executa o APK nem confirma Bluetooth fisico.')
