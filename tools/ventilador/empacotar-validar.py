"""Cria ZIP atomico e verifica TODAS as entradas/CRC/SHA. Sem acesso remoto.
Uso: criar PASTA NOVO.zip [--entrega] | validar ARQUIVO.zip [--entrega]
O manifesto e gerado apenas na pasta de montagem informada, nunca no fonte.
"""
from pathlib import Path,PurePosixPath
import zipfile,hashlib,json,os,sys,tempfile,stat

def sha(data):return hashlib.sha256(data).hexdigest()
def safe(name):
    p=PurePosixPath(name)
    return bool(name) and not p.is_absolute() and '..' not in p.parts and '\\' not in name and str(p)==name

def validate(path,delivery=False):
    path=Path(path)
    with zipfile.ZipFile(path) as z:
        names=z.namelist()
        assert len(names)==len(set(names)),'Entradas duplicadas'
        assert all(safe(n) for n in names),'Caminho inseguro'
        assert not any(stat.S_ISLNK(i.external_attr>>16) for i in z.infolist()),'Link simbolico'
        manifests=[n for n in names if n.count('/')==1 and n.endswith('/SHA256SUMS.txt')]
        assert len(manifests)==1,'Manifesto raiz ausente/ambiguo'
        manifest=manifests[0];prefix=manifest.rsplit('/',1)[0]+'/'
        assert all(n.startswith(prefix) for n in names),'Raizes diferentes'
        expected={}
        for line in z.read(manifest).decode('utf-8').splitlines():
            digest,name=line.split('  ',1)
            assert len(digest)==64 and all(c in '0123456789abcdef' for c in digest),'Hash invalido'
            assert safe(name) and name not in expected,'Entrada invalida no manifesto'
            expected[name]=digest
        actual={n[len(prefix):] for n in names if n!=manifest}
        assert actual==set(expected),'Inventario diverge do manifesto'
        assert z.testzip() is None,'CRC invalido'
        for name,digest in expected.items():assert sha(z.read(prefix+name))==digest,'SHA256 divergente: '+name
        if delivery:
            essential=['LEIA-ME.md','DESENVOLVIMENTO_E_REVERSAO.md','RELATORIO_EXPERIMENTAL.md','branch-local.bundle','ventilador.patch','checkpoints/VentiladorMBB.aia','referencias/revisao-02/SHA256SUMS.txt']
            for name in essential:assert name in expected,'Essencial ausente: '+name
            assert any(n in expected for n in ['Previa_Ventilador_MbB_03.html','Previa_Ventilador_MbB_031.html']),'Previa essencial ausente'
    return {'arquivo':path.name,'bytes':path.stat().st_size,'sha256':sha(path.read_bytes()),'conteudos':len(expected),'entradas_zip':len(names),'crc':'OK','sha256_todos':'OK','inventario_exato':'OK'}

def create(folder,path,delivery=False):
    folder=Path(folder).resolve();path=Path(path).resolve()
    assert path!=folder and folder not in path.parents,'ZIP deve ficar fora da pasta'
    if path.exists():raise FileExistsError('Destino ja existe; use outro nome para preservar entregas')
    files=sorted(p for p in folder.rglob('*') if p.is_file() and p!=folder/'SHA256SUMS.txt')
    assert not any(p.is_symlink() for p in folder.rglob('*')),'Link simbolico na origem'
    (folder/'SHA256SUMS.txt').write_text(''.join(sha(p.read_bytes())+'  '+p.relative_to(folder).as_posix()+'\n' for p in files),encoding='utf-8')
    path.parent.mkdir(parents=True,exist_ok=True)
    fd,tmp=tempfile.mkstemp(prefix=path.name+'.',suffix='.partial',dir=path.parent);os.close(fd)
    try:
        with zipfile.ZipFile(tmp,'w',zipfile.ZIP_DEFLATED) as z:
            for p in sorted(folder.rglob('*')):
                if p.is_file():z.write(p,folder.name+'/'+p.relative_to(folder).as_posix())
        validate(tmp,delivery)
        os.replace(tmp,path)
    finally:
        if Path(tmp).exists():Path(tmp).unlink()
    return validate(path,delivery)
if __name__=='__main__':
    args=[a for a in sys.argv[1:] if a!='--entrega'];delivery='--entrega' in sys.argv
    if len(args)==3 and args[0]=='criar':result=create(args[1],args[2],delivery)
    elif len(args)==2 and args[0]=='validar':result=validate(args[1],delivery)
    else:raise SystemExit(__doc__)
    print(json.dumps(result,indent=2,ensure_ascii=False))
