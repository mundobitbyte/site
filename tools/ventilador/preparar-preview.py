"""Cria dist/ventilador-preview sem Git nem conexoes Firebase. Nao publica."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[2]
DEST = ROOT / 'dist' / 'ventilador-preview'
CSP = "default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'self'"

if DEST.exists():
    shutil.rmtree(DEST)  # Somente a pasta gerada e ignorada pelo Git.
shutil.copytree(ROOT, DEST, ignore=shutil.ignore_patterns('.git', '.github', '.firebaserc', 'firebase.json', 'firebase.meu-mbb.json', 'firestore.rules', 'dist', 'node_modules', 'artifacts', '__pycache__'))
for path in DEST.rglob('*.html'):
    html = path.read_text(encoding='utf-8')
    html = html.replace('<head>', '<head><meta http-equiv="Content-Security-Policy" content="' + CSP + '">', 1)
    path.write_text(html, encoding='utf-8')
for path in [DEST/'meu-mbb/firebase-config.js', DEST/'academia/js/firebase-config.js']:
    path.write_text('/* Previa local: Firebase real removido. */\n', encoding='utf-8')
(DEST/'meu-mbb/conta.js').write_text('''/* Previa local sem conta ou acesso ao Firebase. */
window.MBBMeuConta = { iniciar: async () => {}, atual: () => null,
  observar: callback => { callback(null); return () => {}; },
  observarUsuario: callback => { callback(null); return () => {}; } };
''', encoding='utf-8')
print(DEST)
