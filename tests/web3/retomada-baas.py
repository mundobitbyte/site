"""Testa as flags ensinadas: início, exportação e retomada entre b3, b6 e b10."""
from pathlib import Path
import importlib.util,json,shlex,shutil,subprocess,sys,tempfile
ROOT=Path(__file__).resolve().parents[2]
spec=importlib.util.spec_from_file_location('etapas',ROOT/'scripts/web3_etapas.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
dependencias=Path(sys.argv[1]).resolve()
cli=dependencias/'node_modules/firebase-tools/lib/bin/firebase.js'
assert cli.is_file()
with tempfile.TemporaryDirectory(prefix='mbb-retomada-') as pasta:
 app=Path(pasta)
 (app/'node_modules').symlink_to(dependencias/'node_modules',target_is_directory=True)
 for etapa,fase,servicos in [('b3','gravar','auth,firestore'),('b6','imagem','auth,firestore,storage'),('b10','conferir','auth,firestore,storage')]:
  for p,b in mod.pacote(etapa).items():
   destino=app/p;destino.parent.mkdir(parents=True,exist_ok=True);destino.write_bytes(b)
  shutil.copy2(ROOT/'tests/web3/fixtures/retomada-baas.mjs',app/'retomada.local.mjs')
  script='emuladores' if etapa=='b3' else 'retomar'
  comando=shlex.split(json.loads((app/'package.json').read_text())['scripts'][script])
  assert comando[:2]==['firebase','emulators:start']
  # exec usa as mesmas flags de import/export e encerra sem interação, conforme a documentação.
  comando=['node',str(cli),'emulators:exec',*comando[2:],'--only',servicos,f'node retomada.local.mjs {fase}']
  teste=subprocess.run(comando,cwd=app,text=True,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=150)
  if teste.returncode:raise RuntimeError(teste.stdout)
  assert (app/'dados-emuladores/firebase-export-metadata.json').is_file()
  print(f'PASSOU {etapa}: {script}, fase {fase}, importação/exportação e preservação reais locais.',flush=True)
