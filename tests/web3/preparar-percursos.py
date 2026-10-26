"""Monta aplicações isoladas a partir do checkpoint publicado; nunca toca produção."""
import argparse, shutil, zipfile, re
from pathlib import Path

ROOT=Path(__file__).resolve().parents[2]
KITS=ROOT/'materiais/programacao-web/web3-evolucao/kits'

def montar(destino: Path):
    destino.mkdir(parents=True,exist_ok=True)
    for percurso in ['mvc','spa']:
        app=destino/percurso
        if app.exists(): raise RuntimeError(f'Destino já existe: {app}. Use uma pasta nova.')
        app.mkdir()
        with zipfile.ZipFile(ROOT/'downloads/programacao-web/cafe-aurora-web3-cap2-aula7.zip') as z:
            for n in z.namelist():
                if n.endswith('/'):continue
                p=app/n.split('/',1)[1];p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(z.read(n))
        for kit in ['objetos','persistencia']:
            shutil.copytree(KITS/kit,app,dirs_exist_ok=True)
        if percurso=='spa':
            shutil.copytree(KITS/'catalogo',app,dirs_exist_ok=True)
            shutil.copytree(KITS/'spa',app,dirs_exist_ok=True)
            (app/'cliente-balcao/src/main.ts').rename(app/'cliente-balcao/main-anterior.ts.txt')
        else:
            inicio=(app/'public/index.php').read_text()
            inicio=inicio.replace('dirname(__DIR__) . "/src/atendimento.php"', 'base_path("src/atendimento.php")')
            shutil.copytree(KITS/'laravel',app,dirs_exist_ok=True)
            (app/'resources/views/inicio-legado.blade.php').write_text(inicio)
            for pasta in ['bootstrap/cache','storage/framework/cache/data','storage/framework/sessions','storage/framework/views','storage/logs']:
                (app/pasta).mkdir(parents=True,exist_ok=True)
            shutil.copy2(app/'.env.example',app/'.env')
    shutil.copytree(KITS/'baas',destino/'baas')
    for pasta in ['css','img']:
        shutil.copytree(destino/'spa/public'/pasta,destino/'baas/public'/pasta,dirs_exist_ok=True)
    print(f'Aplicações de teste preparadas em {destino}')

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('destino',type=Path);montar(p.parse_args().destino.resolve())
