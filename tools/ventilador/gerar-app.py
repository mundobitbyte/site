"""Gera um .aia experimental auditavel; nao simula validacao pelo editor MIT.
Schema consultado: mit-cml/appinventor-sources @ a760b517c436dd49c941c2ad946eb4d80f910fe4.
"""
from pathlib import Path
import json, zipfile
import xml.etree.ElementTree as X
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'downloads/ventilador/appinventor';OUT.mkdir(parents=True,exist_ok=True)
counter=0
types={'Screen1':'Form','Conectar':'ListPicker','Estado':'Label','Velocidade1':'Button','Velocidade2':'Button','Velocidade3':'Button','Desligar':'Button','BluetoothClient1':'BluetoothClient','Clock1':'Clock'}
def block(kind,fields=None):
    global counter
    counter+=1;b=X.Element('block',{'type':kind,'id':f'mbb-{counter}'})
    for k,v in (fields or {}).items():X.SubElement(b,'field',{'name':k}).text=str(v)
    return b
def mut(b,**kw):b.insert(0,X.Element('mutation',{k:str(v) for k,v in kw.items()}));return b
def val(b,name,child):X.SubElement(b,'value',{'name':name}).append(child);return b
def stmt(b,name,child):
    if child is not None:X.SubElement(b,'statement',{'name':name}).append(child)
    return b
def chain(*blocks):
    blocks=[b for b in blocks if b is not None]
    for a,b in zip(blocks,blocks[1:]):
        tail=a
        while tail.find('./next/block') is not None:tail=tail.find('./next/block')
        X.SubElement(tail,'next').append(b)
    return blocks[0] if blocks else None
def text(s):return block('text',{'TEXT':s})
def boolean(v):return block('logic_boolean',{'BOOL':'TRUE' if v else 'FALSE'})
def num(n):return block('math_number',{'NUM':n})
def prop(name,p,value=None):
    b=mut(block('component_set_get',{'COMPONENT_SELECTOR':name,'PROP':p}),component_type=types[name],set_or_get='get' if value is None else 'set',property_name=p,is_generic='false',instance_name=name)
    return b if value is None else val(b,'VALUE',value)
def call(name,m,*args):
    b=mut(block('component_method',{'COMPONENT_SELECTOR':name}),component_type=types[name],method_name=m,is_generic='false',instance_name=name)
    for i,a in enumerate(args):val(b,'ARG'+str(i),a)
    return b
def event(name,e,body):
    return stmt(mut(block('component_event',{'COMPONENT_SELECTOR':name}),component_type=types[name],is_generic='false',instance_name=name,event_name=e),'DO',body)
def iff(condition,yes,no=None):
    b=block('controls_if')
    if no is not None:mut(b,**{'else':'1'})
    val(b,'IF0',condition);stmt(b,'DO0',yes);stmt(b,'ELSE',no);return b
def enabled(v):return invoke('DefinirComandos',boolean(v))
def status(s):return prop('Estado','Text',text(s))
def connected():return prop('BluetoothClient1','IsConnected')
def send(s):return call('BluetoothClient1','SendText',text(s))
def disconnect():return iff(connected(),call('BluetoothClient1','Disconnect'))
def eq(a,b):return val(val(block('logic_compare',{'OP':'EQ'}),'A',a),'B',b)
def getvar(name):return block('lexical_variable_get',{'VAR':'global '+name})
def setvar(name,value):return val(block('lexical_variable_set',{'VAR':'global '+name}),'VALUE',value)
def joined(a,b):return val(val(mut(block('text_join'),items='2'),'ADD0',a),'ADD1',b)

def add(a,b):return val(val(mut(block('math_add'),items='2'),'NUM0',a),'NUM1',b)
def expired():return val(val(block('math_compare',{'OP':'GTE'}),'A',call('Clock1','SystemTime')),'B',getvar('prazoConfirmacao'))
PROCEDURES={'DefinirComandos':['ativo'],'LimparEspera':[],'EncerrarEnlace':['mensagem'],'EnviarComando':['comando'],'ProcessarResposta':['resposta']}
def local(name):return block('lexical_variable_get',{'VAR':name})
def invoke(name,*values):
    assert len(values)==len(PROCEDURES[name])
    b=mut(block('procedures_callnoreturn',{'PROCNAME':name}),name=name)
    for parameter in PROCEDURES[name]:X.SubElement(b.find('mutation'),'arg',{'name':parameter})
    for i,v in enumerate(values):val(b,'ARG'+str(i),v)
    return b
def procedure(name,body,note):
    b=mut(block('procedures_defnoreturn',{'NAME':name,**{'VAR'+str(i):n for i,n in enumerate(PROCEDURES[name])}}))
    for parameter in PROCEDURES[name]:X.SubElement(b.find('mutation'),'arg',{'name':parameter})
    X.SubElement(b,'comment',{'pinned':'false','h':'100','w':'280'}).text=note
    return stmt(b,'STACK',body)
def reset_pending():return invoke('LimparEspera')
def fail(msg):return invoke('EncerrarEnlace',text(msg))
def command(c):return invoke('EnviarComando',text(c))

xml=X.Element('xml',{'xmlns':'http://www.w3.org/1999/xhtml'})
for name,initial in [('recebido',text('')),('conectadoAntes',boolean(False)),('aguardando',boolean(False)),('esperado',text('')),('prazoConfirmacao',num(0))]:
    xml.append(val(block('global_declaration',{'NAME':name}),'VALUE',initial))
# Procedimentos extraem repeticoes; os eventos continuam mostrando a sequencia.
xml.append(procedure('DefinirComandos',chain(*(prop(n,'Enabled',local('ativo')) for n in ['Velocidade1','Velocidade2','Velocidade3','Desligar'])),
    'ativo vale verdadeiro ou falso. Altera os quatro botoes juntos; EnviarComando reabre somente Desligar.'))
xml.append(procedure('LimparEspera',chain(setvar('aguardando',boolean(False)),setvar('esperado',text('')),setvar('prazoConfirmacao',num(0))),
    'Limpa somente o registro da espera; nao confirma movimento nem seleciona velocidade.'))
xml.append(procedure('EncerrarEnlace',chain(reset_pending(),setvar('conectadoAntes',boolean(False)),enabled(False),prop('Estado','Text',local('mensagem')),disconnect()),
    'Bloqueia comandos, preserva a explicacao da falha e fecha o enlace se ainda existir.'))
xml.append(procedure('EnviarComando',chain(setvar('esperado',local('comando')),setvar('aguardando',boolean(True)),
    setvar('prazoConfirmacao',add(call('Clock1','SystemTime'),num(2000))),enabled(False),prop('Desligar','Enabled',boolean(True)),
    prop('Estado','Text',joined(joined(text('Comando '),local('comando')),text(' enviado; aguardando confirmação.'))),
    call('BluetoothClient1','SendText',local('comando'))),
    'Prepara a espera ANTES de enviar. SendText vem por ultimo para nao apagar um erro de envio. Reenvio de 0 nao chama este procedimento.'))
xml.append(procedure('ProcessarResposta',iff(getvar('aguardando'),
    iff(eq(local('resposta'),getvar('esperado')),chain(reset_pending(),enabled(True),prop('Estado','Text',joined(text('Confirmação lógica recebida: '),local('resposta')))),status('Resposta anterior recebida; aguardando o comando atual.')),
    prop('Estado','Text',joined(text('Estado lógico recebido: '),local('resposta')))),
    'O Timer chama somente para 0, 1, 2 ou 3. Uma resposta diferente da esperada nao libera velocidades nem renova o prazo.'))
xml.append(event('Screen1','Initialize',fail('Desconectado. Sem confirmação física.')))
xml.append(event('Conectar','BeforePicking',chain(prop('Conectar','Elements',mut(block('lists_create_with'),items='0')),iff(prop('BluetoothClient1','Available'),
    iff(prop('BluetoothClient1','Enabled'),prop('Conectar','Elements',prop('BluetoothClient1','AddressesAndNames')),status('Bluetooth desligado. Ative-o no Android.')),
    status('Bluetooth indisponível neste aparelho.')))))
xml.append(event('Conectar','AfterPicking',chain(fail('Conectando; estado físico não verificado.'),iff(call('BluetoothClient1','Connect',prop('Conectar','Selection')),
    chain(setvar('conectadoAntes',boolean(True)),command('0')),
    fail('Não conectou. Confira pareamento e permissões.')))))
for n,c in [('Velocidade1','1'),('Velocidade2','2'),('Velocidade3','3'),('Desligar','0')]:
    # Repetir 0 pode reenviar a intencao, mas nunca renovar uma espera por 0.
    # Conferir o prazo antes do reenvio tambem cobre um Timer Android atrasado.
    action=iff(getvar('aguardando'),iff(eq(getvar('esperado'),text('0')),
        iff(expired(),fail('Sem confirmação no prazo. Enlace encerrado; estado físico não verificado.'),send('0')),
        command('0')),command('0')) if c=='0' else iff(eq(getvar('aguardando'),boolean(False)),command(c))
    xml.append(event(n,'Click',iff(connected(),action,fail('Desconectado. Estado físico não verificado.'))))

valid=mut(block('controls_if'),elseif='3',**{'else':'1'})
for i,c in enumerate('0123'):
    val(valid,'IF'+str(i),eq(getvar('recebido'),text(c)))
    stmt(valid,'DO'+str(i),invoke('ProcessarResposta',getvar('recebido')))
stmt(valid,'ELSE',fail('Resposta inesperada. Enlace encerrado; confira o programa.'))
available=val(val(block('math_compare',{'OP':'GT'}),'A',call('BluetoothClient1','BytesAvailableToReceive')),'B',num(0))
# O prazo e conferido antes da leitura: uma resposta tardia nao libera comandos.
timeout=iff(getvar('aguardando'),iff(expired(),fail('Sem confirmação no prazo. Enlace encerrado; estado físico não verificado.')))
xml.append(event('Clock1','Timer',iff(connected(),chain(timeout,iff(connected(),chain(send('?'),iff(connected(),iff(available,chain(setvar('recebido',call('BluetoothClient1','ReceiveText',num(1))),valid)))))),chain(enabled(False),reset_pending(),iff(getvar('conectadoAntes'),chain(setvar('conectadoAntes',boolean(False)),status('Desconectado. Estado físico não verificado.')))))))
for e,msg in [('PermissionDenied','Permissão negada. Reveja Dispositivos próximos no Android e tente conectar novamente.'),('ErrorOccurred','Falha de comunicação. Confira Bluetooth, pareamento e permissões. Tente conectar novamente.')]:
    xml.append(event('Screen1',e,fail(msg)))
# Tres colunas: configuracao/conexao, comandos/supervisao e procedimentos.
# Altura conservadora; verificar a organizacao no editor real antes de declarar QA visual.
heights=[40,40,40]
for b in list(xml):
    t=b.get('type')
    col=2 if t=='procedures_defnoreturn' else 0 if t=='global_declaration' or (t=='component_event' and b.find('mutation').get('instance_name') in ['Screen1','Conectar']) else 1
    b.set('x',str([40,1450,3000][col]));b.set('y',str(heights[col]))
    heights[col]+=120+65*sum(1 for _ in b.iter('block'))
X.SubElement(xml,'yacodeblocks',{'ya-version':'237','language-version':'39'})
X.indent(xml,space='  ')
bky=X.tostring(xml,encoding='unicode')+'\n'
(OUT/'Screen1.bky').write_text(bky,encoding='utf-8')
versions={'Form':'32','Label':'6','Button':'8','ListPicker':'10','BluetoothClient':'8','Clock':'4'}
uuid=100
def component(name,t,**attrs):
    global uuid
    uuid+=1;return {'$Name':name,'$Type':t,'$Version':versions[t],'Uuid':str(uuid),**{k:str(v) for k,v in attrs.items()}}
components=[component('Titulo','Label',Text='Ventilador MbB',FontSize='22',FontBold='True',Width='-2',TextColor='&HFF07515F'),
component('Conectar','ListPicker',Text='Conectar ao HC-05',Width='-2',BackgroundColor='&HFF07515F',TextColor='&HFFFFFFFF'),
component('Estado','Label',Text='Desconectado. Sem confirmação física.',Width='-2',FontSize='16')]
for name,label in [('Velocidade1','Velocidade 1'),('Velocidade2','Velocidade 2'),('Velocidade3','Velocidade 3'),('Desligar','Desligar')]:
    components.append(component(name,'Button',Text=label,Enabled='False',Width='-2',Height='54',FontSize='18',BackgroundColor='&HFF994230' if name=='Desligar' else '&HFF137C8B',TextColor='&HFFFFFFFF'))
components += [component('Aviso','Label',Text='Protótipo somente com LEDs. Desligar no app não isola energia.',Width='-2',FontSize='14'),component('BluetoothClient1','BluetoothClient',Secure='True',DisconnectOnError='True',NoLocationNeeded='True'),component('Clock1','Clock',TimerInterval='500',TimerEnabled='True',TimerAlwaysFires='False')]
properties={'$Name':'Screen1','$Type':'Form','$Version':'32','Uuid':'0','Title':'Ventilador MbB','AppName':'Ventilador MbB','VersionName':'0.3-experimental','VersionCode':'3','ScreenOrientation':'portrait','Sizing':'Responsive','Scrollable':'True','AlignHorizontal':'3','BackgroundColor':'&HFFF1F8F9','$Components':components}
scm='#|\n$JSON\n'+json.dumps({'authURL':[],'YaVersion':'237','Source':'Form','Properties':properties},ensure_ascii=False,separators=(',',':'))+'\n|#\n'
(OUT/'Screen1.scm').write_text(scm,encoding='utf-8')
props='''main=appinventor.ai_mbb.VentiladorMBB.Screen1
name=VentiladorMBB
assets=../assets
source=../src
build=../build
aname=Ventilador MbB
versioncode=3
versionname=0.3-experimental
useslocation=False
sizing=Responsive
showlistsasjson=True
theme=AppTheme.Light.DarkActionBar
color.primary=&HFF07515F
color.primary.dark=&HFF043D47
color.accent=&HFF137C8B
'''
(OUT/'project.properties').write_text(props,encoding='utf-8')
files={'youngandroidproject/project.properties':props,'src/appinventor/ai_mbb/VentiladorMBB/Screen1.scm':scm,'src/appinventor/ai_mbb/VentiladorMBB/Screen1.bky':bky}
with zipfile.ZipFile(ROOT/'downloads/ventilador/VentiladorMBB.aia','w',zipfile.ZIP_DEFLATED) as z:
    for name,data in files.items():
        info=zipfile.ZipInfo(name,date_time=(2026,10,18,23,0,0));info.compress_type=zipfile.ZIP_DEFLATED;z.writestr(info,data)
print('AIA experimental gerado: 10 componentes, 10 eventos, 5 variáveis globais e 5 procedimentos.')
