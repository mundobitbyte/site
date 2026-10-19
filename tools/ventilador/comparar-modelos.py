"""Compara rastros XML da correcao minima e da refatoracao; nao executa Android.
Usa o interpretador estrutural do validador para as duas arvores de blocos.
"""
from pathlib import Path
import random,re,json,zipfile,hashlib
from lxml import etree
ROOT=Path(__file__).resolve().parents[2]
validator=(Path(__file__).parent/'validar-arquivos.py').read_text()
interpreter=validator[validator.index('plain='):validator.index("event('Screen1','Initialize');")]
def model(path):
    with zipfile.ZipFile(path) as z:
        files={Path(n).name:z.read(n).decode() for n in z.namelist()}
    scm=json.loads(files['Screen1.scm'].split('$JSON\n',1)[1].rsplit('\n|#',1)[0])
    components={c['$Name']:c for c in scm['Properties']['$Components']};components['Screen1']=scm['Properties']
    scope={'bky':files['Screen1.bky'],'components':components,'etree':etree,'re':re}
    exec(compile(interpreter,'<interpretador-XML>','exec'),scope)
    return scope

def snapshot(s):
    assert not s['frames'],'Escopo de procedimento nao foi liberado'
    return {'conectado':s['link'],'globais':dict(s['globals_']),'enviados':list(s['sent']),'fila':list(s['rx']),
            'habilitados':[s['props'][n]['Enabled'] for n in ['Velocidade1','Velocidade2','Velocidade3','Desligar']],
            'texto':s['props']['Estado']['Text'],'lista':s['props']['Conectar'].get('Elements')}
reference=Path(__file__).parent/'referencias/VentiladorMBB_CorrecaoMinima.aia'
current=ROOT/'downloads/ventilador/VentiladorMBB.aia'
rng=random.Random(20261019);checks=0
choices=[('Screen1','Initialize'),('Conectar','BeforePicking'),('Conectar','AfterPicking'),('Velocidade1','Click'),('Velocidade2','Click'),('Velocidade3','Click'),('Desligar','Click'),('Clock1','Timer'),('Screen1','PermissionDenied'),('Screen1','ErrorOccurred')]
for trace in range(100):
    a,b=model(reference),model(current)
    for step in range(200):
        event=choices[rng.randrange(len(choices))];delta=rng.choice([0,1,499,500,1999,2000,5000,-1000])
        received=rng.choice(['','0','1','2','3','X','30','00','?'])
        error=rng.randrange(12)==0;connect_ok=rng.randrange(6)!=0;drop=rng.randrange(25)==0
        available=rng.randrange(12)!=0;enabled=rng.randrange(8)!=0
        for s in (a,b):
            s['now_ms']+=delta;s['rx'].extend(received);s['send_error']=error;s['connect_ok']=connect_ok
            s['props']['BluetoothClient1'].update(Available=available,Enabled=enabled)
            if drop:s['link']=False
            s['event'](*event)
        assert snapshot(a)==snapshot(b),(trace,step,event,snapshot(a),snapshot(b))
        checks+=1
print(f'PASS: {checks} passos em 100 rastros deterministas, seed 20261019; estados, mensagens, fila, botoes e prazos iguais a correcao minima.')
print('Inclui respostas antigas, repeticoes, erros, desconexoes, reconexoes, permissoes, prazo e variacao do relogio. Nao comprova o runtime MIT/Android.')
print('SHA256_REFERENCIA='+hashlib.sha256(reference.read_bytes()).hexdigest())
print('SHA256_REVISADO='+hashlib.sha256(current.read_bytes()).hexdigest())
