"""Confere links novos, codigo exibido, SVG e comportamento estrutural do .aia.
O interpretador abaixo nao e o runtime MIT e nao valida importacao/Android.
"""
from pathlib import Path
from lxml import html, etree
import zipfile,json,re,subprocess,hashlib
ROOT=Path(__file__).resolve().parents[2]
main=html.fromstring((ROOT/'pages/arduino-ventilador-bluetooth.html').read_bytes())
for i in range(1,9):assert len(main.xpath(f'//*[@id="etapa-{i}"]'))==1
for code in main.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," vent-code ")]//code'):
    parent=code.getparent().getparent();href=parent.xpath('.//a[@download]/@href')[0]
    expected=(ROOT/'pages'/href).resolve().read_text();assert code.text_content()==expected
print('PASS: 8 etapas e 3 codigos identicos aos arquivos entregues.')
pages=['arduino-ventilador-bluetooth','arduino','arduino-conectividade','arduino-seguranca','appinventor']
for name in pages:
    p=ROOT/'pages'/f'{name}.html';doc=html.fromstring(p.read_bytes());ids=doc.xpath('//*[@id]/@id');assert len(ids)==len(set(ids)),(name,'IDs repetidos')
    for e in doc.xpath('//*[@src or @href]'):
        href=e.get('src') or e.get('href')
        if not href or href.startswith(('http:','https:','mailto:','data:','javascript:','#')):continue
        target=(p.parent/href.split('#')[0].split('?')[0]).resolve()
        assert target.exists(),(name,href)
    for a in doc.xpath('//a[@data-mbb-conceito]'):
        url=a.get('href');file,anchor=url.split('#');target=html.fromstring((p.parent/file).read_bytes());assert target.xpath('//*[@id=$id]',id=anchor)
print('PASS: recursos locais e destinos dos conceitos; sem IDs repetidos nas 5 paginas.')
for p in (ROOT/'img/arduino/ventilador').glob('*.svg'):
    doc=etree.parse(str(p));assert doc.getroot().get('viewBox');assert not doc.xpath('//*[@href or @*[local-name()="href"]]')
print(f'PASS: {len(list((ROOT/"img/arduino/ventilador").glob("*.svg")))} SVG validos, escalaveis e sem dependencias externas.')

out=ROOT/'downloads/ventilador';bky=(out/'appinventor/Screen1.bky').read_text();scm=(out/'appinventor/Screen1.scm').read_text()
designer=json.loads(scm.split('$JSON\n',1)[1].rsplit('\n|#',1)[0]);components={c['$Name']:c for c in designer['Properties']['$Components']};components['Screen1']=designer['Properties']
tree=etree.fromstring(bky.encode());ns={'x':'http://www.w3.org/1999/xhtml'}
with zipfile.ZipFile(out/'VentiladorMBB.aia') as z:
    assert z.testzip() is None
    assert z.read('src/appinventor/ai_mbb/VentiladorMBB/Screen1.bky').decode()==bky
    assert z.read('src/appinventor/ai_mbb/VentiladorMBB/Screen1.scm').decode()==scm
    assert z.read('youngandroidproject/project.properties').decode()==(out/'appinventor/project.properties').read_text()
for m in tree.xpath('//x:mutation[@component_type]',namespaces=ns):
    name=m.get('instance_name');assert name in components,name;assert components[name]['$Type']==m.get('component_type')
ids=tree.xpath('//x:block/@id',namespaces=ns);assert len(ids)==len(set(ids))
for b in tree.xpath('//x:block',namespaces=ns):assert len(b.findall('x:next',ns))<=1
print('PASS: .aia ZIP, Designer e blocos correspondentes; referencias de componentes conferidas.')

# Executa o XML entregue em um modelo independente e deterministico.
plain=etree.fromstring(re.sub(r' xmlns="[^"]+"','',bky,count=1).encode())
props={k:dict(v) for k,v in components.items()};globals_={};sent=[];rx=[];link=False;connect_ok=True;now_ms=10000;send_error=False
frames=[]
procedures={b.findtext('./field[@name="NAME"]'):b for b in plain.findall('block') if b.get('type')=='procedures_defnoreturn'}
def value(b,n):return evaluate(b.find(f'./value[@name="{n}"]/block'))
def field(b,n):return b.findtext(f'./field[@name="{n}"]')
def evaluate(b):
    global link
    assert b is not None
    t=b.get('type')
    if t=='text':return field(b,'TEXT') or ''
    if t=='logic_boolean':return field(b,'BOOL')=='TRUE'
    if t=='math_number':return int(field(b,'NUM'))
    if t=='lexical_variable_get':
        name=field(b,'VAR')
        return globals_[name.removeprefix('global ')] if name.startswith('global ') else frames[-1][name]
    if t=='procedures_callnoreturn':
        name=b.find('mutation').get('name');definition=procedures[name]
        params=[a.get('name') for a in definition.findall('./mutation/arg')]
        assert params==[a.get('name') for a in b.findall('./mutation/arg')]
        args=[value(b,'ARG'+str(i)) for i in range(len(params))]
        frames.append(dict(zip(params,args)))
        try:execute(definition.find('./statement[@name="STACK"]/block'))
        finally:frames.pop()
        return
    if t=='math_add':return value(b,'NUM0')+value(b,'NUM1')
    if t=='lists_create_with':return []
    if t=='text_join':return str(value(b,'ADD0'))+str(value(b,'ADD1'))
    if t in ['math_compare','logic_compare']:
        a,c=value(b,'A'),value(b,'B');op=field(b,'OP');assert op in ['GT','GTE','EQ'];return a>c if op=='GT' else a>=c if op=='GTE' else a==c
    if t=='component_set_get':
        m=b.find('mutation');n,p=m.get('instance_name'),m.get('property_name')
        if m.get('set_or_get')=='set':props[n][p]=value(b,'VALUE');return
        if p=='IsConnected':return link
        return props[n][p]
    if t=='component_method':
        m=b.find('mutation');method=m.get('method_name')
        if method=='Connect':value(b,'ARG0');link=connect_ok;return link
        if method=='Disconnect':link=False;return
        if method=='SystemTime':return now_ms
        if method=='SendText':
            assert link
            if send_error:event('Screen1','ErrorOccurred')
            else:sent.append(value(b,'ARG0'))
            return
        if method=='BytesAvailableToReceive':return len(rx)
        if method=='ReceiveText':assert value(b,'ARG0')==1 and rx;return rx.pop(0)
    raise AssertionError(('Bloco nao implementado no modelo',t))
def execute(b):
    while b is not None:
        t=b.get('type')
        if t=='global_declaration':globals_[field(b,'NAME')]=value(b,'VALUE')
        elif t=='lexical_variable_set':globals_[field(b,'VAR').removeprefix('global ')]=value(b,'VALUE')
        elif t=='controls_if':
            i=0;done=False
            while b.find(f'./value[@name="IF{i}"]') is not None:
                if value(b,'IF'+str(i)):
                    execute(b.find(f'./statement[@name="DO{i}"]/block'));done=True;break
                i+=1
            if not done:execute(b.find('./statement[@name="ELSE"]/block'))
        else:evaluate(b)
        b=b.find('./next/block')
events={(b.find('mutation').get('instance_name'),b.find('mutation').get('event_name')):b for b in plain.findall('block') if b.get('type')=='component_event'}
def event(n,e):execute(events[(n,e)].find('./statement[@name="DO"]/block'))
for b in plain.findall('block'):
    if b.get('type')=='global_declaration':execute(b)
props['BluetoothClient1'].update(Available=True,Enabled=True,AddressesAndNames=['AA:BB HC-05']);props['Conectar']['Selection']='AA:BB HC-05'
event('Screen1','Initialize');assert not link and props['Velocidade1']['Enabled'] is False
for enabled,available in [(True,True),(False,True),(True,False)]:
    props['BluetoothClient1'].update(Enabled=enabled,Available=available)
    event('Conectar','BeforePicking')
    assert props['Conectar']['Elements']==(['AA:BB HC-05'] if enabled and available else [])
props['BluetoothClient1'].update(Enabled=True,Available=True)
event('Velocidade1','Click');assert not sent

def ack(c):
    rx[:]=[c];event('Clock1','Timer')
def establish():
    global now_ms
    rx.clear();event('Conectar','AfterPicking')
    assert link and sent[-1]=='0' and not props['Velocidade1']['Enabled'] and props['Desligar']['Enabled']
    ack('0');assert props['Velocidade1']['Enabled'] and not globals_['aguardando']

establish()
for name,n in [('Velocidade1','1'),('Velocidade2','2'),('Velocidade3','3'),('Desligar','0')]:
    event(name,'Click');assert sent[-1]==n and globals_['esperado']==n
    assert not props['Velocidade1']['Enabled'] and props['Desligar']['Enabled']
    before=list(sent);event('Velocidade2','Click');assert sent==before
    ack(n);assert sent[-1]=='?' and props['Estado']['Text']=='Confirmação lógica recebida: '+n
    assert props['Velocidade1']['Enabled']
event('Velocidade3','Click');ack('1');assert globals_['aguardando'] and not props['Velocidade1']['Enabled']
event('Desligar','Click');assert sent[-1]=='0';ack('3');assert globals_['aguardando'];ack('0');assert not globals_['aguardando']
# Primeiro comando ausente: IsConnected permanece verdadeiro no modelo.
event('Conectar','AfterPicking');now_ms+=1999;event('Clock1','Timer');assert link
before=len(sent);now_ms+=1;rx[:]=['0'];event('Clock1','Timer')
assert not link and len(sent)==before and rx==['0'] and 'Sem confirmação' in props['Estado']['Text']
message=props['Estado']['Text'];event('Clock1','Timer');assert message==props['Estado']['Text']
establish();event('Velocidade2','Click');now_ms+=5000;before=len(sent);event('Clock1','Timer');assert not link and len(sent)==before
# Sem comando pendente, '?' nao exige eco: o firmware o recebe sem responder.
establish();now_ms+=10000;event('Clock1','Timer');assert link and sent[-1]=='?'
rx[:]=['0'];event('Clock1','Timer');assert props['Estado']['Text']=='Estado lógico recebido: 0'
link=False;event('Clock1','Timer');assert props['Estado']['Text'].startswith('Desconectado') and not props['Desligar']['Enabled']
establish();ack('X');assert not link and 'inesperada' in props['Estado']['Text']
for erro in ['PermissionDenied','ErrorOccurred']:
    establish();event('Screen1',erro);mensagem=props['Estado']['Text'];event('Clock1','Timer');assert mensagem==props['Estado']['Text'] and not link
establish();send_error=True;event('Velocidade1','Click');assert not link and not globals_['aguardando'] and 'Falha de comunicação' in props['Estado']['Text'];send_error=False
send_error=True;event('Conectar','AfterPicking');assert not link and not props['Desligar']['Enabled'] and 'Falha de comunicação' in props['Estado']['Text'];send_error=False
establish();send_error=True;event('Clock1','Timer');assert not link and 'Falha de comunicação' in props['Estado']['Text'];send_error=False
connect_ok=False;event('Conectar','AfterPicking');assert not link and 'Não conectou' in props['Estado']['Text']
# Regressao 0.3: repetir Desligar nao prolonga a espera, mesmo sem Timer pontual.
connect_ok=True;now_ms=100000;establish();event('Velocidade3','Click');ack('3')
event('Desligar','Click');prazo=globals_['prazoConfirmacao']
for i in range(1,5):
    now_ms=100000+i*400
    event('Desligar','Click');assert globals_['prazoConfirmacao']==prazo and sent[-1]=='0'
    ack('3');assert globals_['aguardando'] and not props['Velocidade1']['Enabled']
now_ms=prazo;before=list(sent);event('Desligar','Click')
assert not link and sent==before and 'Sem confirmação' in props['Estado']['Text']
now_ms=200000;establish();event('Velocidade1','Click');prazo_velocidade=globals_['prazoConfirmacao']
now_ms+=500;event('Desligar','Click');prazo=globals_['prazoConfirmacao']
assert prazo==prazo_velocidade+500 and globals_['esperado']=='0'
ack('1');assert globals_['aguardando'];event('Desligar','Click');assert globals_['prazoConfirmacao']==prazo
now_ms=prazo;before=list(sent);ack('0');assert not link and sent==before and rx==['0']
establish();event('Desligar','Click');send_error=True;event('Desligar','Click');send_error=False
assert not link and not globals_['aguardando'] and 'Falha de comunicação' in props['Estado']['Text']
print('PASS: Desligar repetido conserva prazo, mantem prioridade sobre 1/2/3, rejeita ACK tardio e preserva erro no reenvio.')
assert len(events)==10 and len(globals_)==5
assert len(procedures)==5
assert components['Screen1']['Title']==components['Screen1']['AppName']==components['Titulo']['Text']=='Ventilador MbB'
print('PASS: 10 eventos/5 globais no modelo XML; handshake 0, quatro comandos, bloqueio durante espera, Desligar prioritario, resposta antiga, prazo 1999/2000 ms, resposta tardia, Timer atrasado, heartbeat sem eco, perda, reconexao, Bluetooth desligado/ausente, permissao, byte invalido e erros durante envio/conexao/Timer.')
print('LIMITES: interpretacao estrutural nao e importacao MIT, compilacao de APK ou teste Android; prazo depende do agendamento Android e de SystemTime; protocolo sem identificador nao autentica resposta nem distingue ecos antigos iguais.')
