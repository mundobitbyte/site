"""Visuais vetoriais autorais. Esquemas funcionais, sem pinagem fisica presumida."""
from pathlib import Path
from html import escape
ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT/'img/arduino/ventilador'
OUT.mkdir(parents=True, exist_ok=True)
def text(x,y,s,size=20,color='#163a48',weight='400'):
    return f'<text x="{x}" y="{y}" fill="{color}" font-size="{size}" font-weight="{weight}">{escape(s)}</text>'
def rect(x,y,w,h,fill='#fff',stroke='#b9cfd5',r=16):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>'
def line(x1,y1,x2,y2,color='#0d8393',width=5):
    return f'<path d="M{x1},{y1} L{x2},{y2}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>'
def svg(name,title,body,h=660,desc=''):
    s=f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="{h}" viewBox="0 0 1200 {h}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><defs><linearGradient id="board" x2="1" y2="1"><stop stop-color="#0c8599"/><stop offset="1" stop-color="#07505e"/></linearGradient></defs><rect width="1200" height="{h}" fill="#f3f8fa"/><g font-family="DejaVu Sans,Arial,sans-serif">{text(40,55,title,27,weight="700")}{body}</g></svg>'
    (OUT/name).write_text(s,encoding='utf-8')
# Cabecalho digital em vista superior: ordem conferida no pinout Arduino A000066.
# Desenho autoral simplificado; os circuitos abaixo sao funcionais, sem protoboard presumida.
b=text(45,100,'A · Confira as marcações no Uno Rev3 · USB à esquerda',21,weight='700')
b+=rect(85,170,1040,210,'url(#board)','#06414c',22)+rect(40,210,115,90,'#c6cdd2','#71808a',5)
b+=text(55,263,'USB',22,weight='700')+rect(360,240,350,65,'#182b36','#07141b',5)+text(450,279,'ATmega328P',24,'#fff')
b+=text(180,340,'UNO REV3 · desenho simplificado, sem escala',21,'#fff')
pins=['SCL','SDA','AREF','GND','13','12','11','10','9','8','7','6','5','4','3','2','1','0']
for i,pin in enumerate(pins):
    x=215+i*49
    chosen=pin in ['5','6','7','GND']
    b+=rect(x-15,166,30,30,'#132632','#f9c87b' if chosen else '#83b5bc',2)
    b+=f'<circle cx="{x}" cy="181" r="5" fill="{"#f9c87b" if chosen else "#b7ced4"}"/>'
    b+=text(x-14,151,pin,16,'#805005' if chosen else '#163a48','700' if chosen else '400')
b+=text(45,425,'B · Faça três ramos separados · cada LED tem seu resistor',22,weight='700')
for i,(pin,label) in enumerate([(5,'baixa'),(6,'média'),(7,'alta')]):
    y=505+i*115
    b+=rect(45,y-27,130,54,'#07515f','#06414c',8)+text(80,y+8,'D'+str(pin),25,'#fff','700')
    b+=line(175,y,375,y)+rect(375,y-17,145,34,'#eee1b9','#7c613b',6)
    for dx,color in [(396,'#e88723'),(422,'#e88723'),(448,'#8c4f24'),(494,'#b5a247')]:b+=line(dx,y-15,dx,y+15,color,7)
    b+=text(397,y-33,'330 Ω',21)+line(520,y,720,y)
    b+=f'<path d="M740,{y-22} A22,22 0 1 0 740,{y+22} L750,{y+22} L750,{y-22} Z" fill="#92e5dd" stroke="#096d7d" stroke-width="3"/>'
    b+=line(750,y,1095,y,'#283b48')+text(685,y-38,'LED '+str(i+1)+' · '+label,22,weight='700')
    b+=text(633,y+38,'Ânodo (+)',18)+text(785,y+38,'Cátodo (−)',18)
    b+=line(1095,y,1095,785,'#283b48')
b+=line(175,785,1095,785,'#283b48')+rect(45,760,130,50,'#283b48','#283b48',6)+text(76,793,'GND',24,'#fff','700')
b+=text(45,855,'Confira polaridade, resistores e fios com a alimentação removida. Depois: somente USB/baixa tensão.',18)
b+=text(45,886,'Referência do cabeçalho: Arduino Uno Rev3, pinout A000066. Sem HC-05, relés ou rede neste circuito.',18)
svg('uno-leds.svg','Uno + três LEDs: localizar, ligar e conferir',b,925,'Cabecalho digital em ordem SCL, SDA, AREF, GND, 13 a 0. D5, D6 e D7 ligam cada qual um resistor de 330 ohms e um LED ao GND. Desenho simplificado autoral, nao fotografia.')
b=rect(70,130,470,390,'#dbe5ec','#657d8c',28)+rect(105,165,165,170,'#b87838','#68461c',12)
for x in range(120,260,16):b+=line(x,180,x,320,'#e6a457',8)
b+=text(108,370,'Bobina',22,weight='700')+text(108,402,'Campo magnético',18)+text(108,430,'move o contato',18)
b+=line(330,385,425,260,'#2a4855',8)+line(425,260,480,260,'#2a4855',8)+line(425,190,480,190,'#2a4855',8)
for x,y,s in [(480,260,'NF'),(480,190,'NA'),(325,385,'COM')]:b+=text(x,y+38,s,19,weight='700')
b+=text(330,470,'Bobina desligada',18)
b+=rect(600,130,530,180)+text(625,170,'COM não significa GND',24,weight='700')+text(625,208,'COM é o contato comum da chave.',20)+text(625,245,'NA: normalmente aberto.',20)+text(625,280,'NF: normalmente fechado.',20)
b+=rect(600,340,530,180,'#fff5df','#d5b575')+text(625,380,'Bobina e aparelho têm papéis diferentes',22,weight='700')+text(625,418,'Algumas placas unem as referências.',19)+text(625,452,'Optoacoplador, sozinho, não comprova',19)+text(625,483,'isolamento de todo o conjunto.',19)
b+=text(70,586,'Modelo conceitual ideal. Não representa bornes, pinagem ou capacidade de um módulo comercial.',19)
svg('rele-contatos.svg','Relé: comando e contato cumprem funções diferentes',b,640)
b=rect(65,155,310,320,'url(#board)','#06414c')+text(100,208,'Arduino Uno',30,'#fff','700')+text(100,270,'D2 · recebe (RX)',23,'#fff')+text(100,370,'D3 · envia (TX)',23,'#fff')+text(100,430,'Referência GND',22,'#fff')
b+=rect(830,155,310,320,'#103043','#071c2a')+text(867,208,'HC-05',31,'#fff','700')+text(867,270,'TX do módulo',22,'#fff')+text(867,370,'RX do módulo',22,'#fff')+text(867,430,'GND',22,'#fff')
b+=line(830,263,375,263)+text(480,242,'níveis compatíveis',20)
b+=line(375,363,435,363)+rect(435,316,335,89,'#fff5df','#bca46b',8)+text(455,350,'Adaptação de nível',23,weight='700')+text(455,383,'dimensionada e verificada',19)+line(770,363,830,363)
b+=line(375,423,830,423,'#283b48')+text(70,535,'A tensão de VCC depende da placa exata. VCC e RX não têm, necessariamente, a mesma tolerância.',19)
b+=text(70,578,'Confira a placa HC-05 antes de definir alimentação e adaptação dos sinais.',20,weight='700')
svg('hc05-interface.svg','TX transmite; RX recebe',b,640)
b=rect(65,130,490,370,'#ecf8f7','#75adaf')+text(100,180,'Exercício com LEDs',29,weight='700')
for y,s in [(235,'Celular → Bluetooth → Arduino'),(290,'Saídas → resistores → LEDs'),(345,'Alimentação conferida'),(400,'Sem ligação elétrica com a rede')]:b+=text(100,y,s,22)
b+=rect(650,130,490,370,'#fff3e6','#c5a17d')+text(680,180,'Etapa profissional · 220 V',27,weight='700')
for y,s in [(235,'Motor e seletor identificados'),(290,'Evitar velocidades incompatíveis'),(345,'Caixa, desconexão e testes'),(400,'Projeto elétrico a definir')]:b+=text(680,y,s,21)
b+=line(600,115,600,525,'#a87031',6)+text(65,575,'Esta atividade não liga o ventilador. Desligar no app não retira sua alimentação.',20)
svg('fronteira-seguranca.svg','Duas etapas, duas responsabilidades',b,640)
b=''
events=[('Conectar.BeforePicking','Listar aparelhos já pareados.'),('Conectar.AfterPicking','Enviar 0; aguardar antes de liberar.'),('VelocidadeN.Click','Sem espera: enviar 1, 2 ou 3.'),('Desligar.Click','Reenviar 0 sem renovar sua espera.'),('Clock.Timer · a cada 500 ms','Conferir prazo; enviar ?; ler a resposta.'),('PermissionDenied / ErrorOccurred','Informar a falha e encerrar a conexão.')]
for i,(title,sub) in enumerate(events):
    x=50+(i%2)*580;y=105+(i//2)*145
    b+=rect(x,y,540,120,'#fff','#b9cfd5',14)+rect(x,y,9,120,'#0b7285','#0b7285',3)+text(x+26,y+37,title,20,weight='700')+text(x+26,y+79,sub,18)
b+=text(50,605,'Mapa para estudar as tarefas dos eventos. Teste o aplicativo no seu Android.',18)
svg('app-eventos.svg','Do toque à mensagem: eventos do aplicativo',b,650)
b=text(45,100,'Como o app 0.3 usa o programa 3 · não mede movimento',21)
cards=[(45,150,480,135,'1 · Desconectado','Quatro botões bloqueados.','Conectar inicia enviando texto 0.'),
(675,150,480,135,'2 · Aguardando 0','Velocidades bloqueadas; Desligar ativo.','Só confirmação 0 no prazo libera.'),
(675,390,480,135,'3 · Pronto para escolher','1, 2 ou 3 inicia uma nova espera.','O comando 0 solicita apagar os LEDs.'),
(45,390,480,135,'4 · Aguardando o comando','Só a resposta esperada libera.','Outro estado válido não renova prazo.')]
for x,y,w,h,title,a,c in cards:
    b+=rect(x,y,w,h)+text(x+22,y+36,title,23,weight='700')+text(x+22,y+76,a,18)+text(x+22,y+107,c,18)
b+=line(530,220,665,220)+text(540,200,'conectar',17)
b+=line(915,290,915,380)+text(930,340,'ACK 0',17)
b+=line(665,450,535,450)+text(550,430,'comando',17)
b+=line(285,380,285,310)+line(285,310,720,310)+line(720,310,720,380)+text(328,332,'ACK esperado → pronto',17)
for x,y,points in [(665,220,'655,212 665,220 655,228'),(915,380,'907,370 915,380 923,370'),(535,450,'545,442 535,450 545,458'),(720,380,'712,370 720,380 728,370')]:b+=f'<polygon points="{points}" fill="#0d8393"/>'
b+=rect(45,585,1110,170,'#fff5df','#d5b575')+text(70,625,'Desligar conserva o prazo de confirmação',26,weight='700')
b+=text(70,666,'Esperava 1/2/3? O primeiro 0 inicia seu prazo. Já esperava 0? Reenvio mantém o prazo original.',18)
b+=text(70,704,'Prazo vencido, erro ou resposta inválida → encerra a conexão e bloqueia os botões.',19)
b+=text(45,800,'Timer: conferir prazo → enviar ? se conectado → ler um caractere disponível.',20)
b+=text(45,837,'O Android e seu relógio podem alterar o tempo observado. Isso não protege um motor.',19)
svg('protocolo-estados.svg','Conectar, esperar, confirmar: o que o app sabe',b,875)
print('6 visuais vetoriais gerados; imagens MIT sao capturas reais separadas.')
