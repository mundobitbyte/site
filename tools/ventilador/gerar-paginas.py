"""Gera o percurso e insere somente os complementos identificados por marcadores.
Os blocos Arduino sao lidos dos .ino entregues; nunca copiados manualmente.
"""
from pathlib import Path
from html import escape
import re
ROOT = Path(__file__).resolve().parents[2]
def write(path, text):
    p=ROOT/path; p.parent.mkdir(parents=True,exist_ok=True); p.write_text(text,encoding='utf-8')
def figure(name,alt,caption):
    filename=name if '.' in name else name+'.svg'
    version = '?v=20261019-mbb-2' if filename.endswith('.svg') else ''
    return f'<figure data-mbb-ampliavel="grafico" data-mbb-titulo="{escape(alt)}"><img src="../img/arduino/ventilador/{filename}{version}" alt="{escape(alt)}" loading="lazy" decoding="async"><figcaption>{caption}</figcaption></figure>'
def table(head,rows):
    ampliar = ' data-mbb-ampliavel="tabela" data-mbb-titulo="'+escape(' · '.join(head))+'"' if len(head) >= 3 else ''
    return '<div class="table-wrap"'+ampliar+'><table><thead><tr>'+''.join('<th scope="col">'+h+'</th>' for h in head)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+c+'</td>' for c in row)+'</tr>' for row in rows)+'</tbody></table></div>'
def code(folder):
    filename=folder+'.ino'; path=f'downloads/ventilador/{folder}/{filename}'; text=(ROOT/path).read_text(encoding='utf-8'); id='codigo-'+folder.split('_')[0]
    return f'<div class="vent-code"><div class="vent-code-head"><span>{filename}</span><a href="../{path}" download>Baixar .ino</a><button type="button" data-vent-copiar="{id}" aria-label="Copiar {filename}">Copiar</button></div><pre><code id="{id}">{escape(text)}</code></pre><span data-copia-estado role="status"></span></div>'
def checklist(group,title,items):
    return '<fieldset class="vent-checklist"><legend>'+title+'</legend>'+''.join(f'<label><input type="checkbox" data-vent-check="{group}-{i}"><span>{s}</span></label>' for i,s in enumerate(items))+'<small role="status">Suas marcações ficam neste navegador e ajudam a organizar o estudo. Elas não autorizam ligações elétricas.</small></fieldset>'
def checkpoint(question,answer):
    return f'<div class="vent-checkpoint"><h3>Confira o que aprendeu</h3><p>{question}</p><details><summary>Conferir o raciocínio</summary><p>{answer}</p></details></div>'
def concept(path,anchor,label):
    return f'<a data-mbb-conceito href="{path}#{anchor}">{label}</a>'
def wrapper(n,title,obj,prior,body):
    prev=f'<a href="#etapa-{n-1}">← Etapa {n-1}</a>' if n>1 else '<a href="arduino.html#intro">Fundamentos do curso</a>'
    nxt=f'<a href="#etapa-{n+1}">Etapa {n+1} →</a>' if n<8 else '<a href="#topo">Rever o percurso ↑</a>'
    return f'<section id="etapa-{n}" class="vent-aula"><span class="vent-eyebrow">Etapa {n} de 8</span><h2>{title}</h2><div class="vent-meta"><p><strong>Ao terminar:</strong> {obj}</p><p><strong>Antes de começar:</strong> {prior}</p></div>{body}<nav class="vent-next" aria-label="Continuidade da etapa {n}">{prev}{nxt}</nav></section>'

from conteudo_mbb import conteudos
reles, hc, seg, app, bodies, titles, objs, prior = conteudos(figure, table, code, checklist, checkpoint, concept)
menu=''.join(f'<a class="module-btn" href="{href}">{label}</a>' for href,label in [('arduino.html#intro','1. Fundamentos'),('arduino.html#p2','2. Entrada/Saída'),('arduino.html#p6','3. Sensores'),('arduino.html#p8','4. Atuadores/Automação'),('arduino-programacao-aplicada.html','5. Programação Aplicada'),('arduino-conectividade.html','6. Conectividade'),('arduino-iot.html','7. Internet das Coisas'),('arduino-protocolos.html','8. RTOS e Protocolos'),('arduino-seguranca.html','9. Proteção e Segurança'),('arduino-projeto-iot.html','10. Projeto IoT')])+'<a class="module-btn active" aria-current="page" href="#topo">11. Projetos Práticos</a><a class="module-btn" href="arduino-exercicios.html">99. Exercícios</a>'
side=''.join(f'<a class="stage-link module-visible" href="#etapa-{i}">{i}. {t}</a>' for i,t in enumerate(titles,1))
page='''<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Aprenda como um comando do celular chega ao Arduino: teste LEDs, entenda o HC-05 e crie o aplicativo no App Inventor. A etapa do ventilador exige avaliação profissional."><title>11 — Controle de Ventilador por Bluetooth | Mundo bit Byte</title><link rel="stylesheet" href="../css/arduino.css?v=20261005-2"><link rel="stylesheet" href="../css/ventilador-bluetooth.css?v=20261019-mbb-2"><link rel="stylesheet" data-mbb-visualizador-global href="../css/mbb-visualizador.css?v=20261002-1"><style>.vent-projeto main > section[id]{display:block}.vent-projeto .stage-link{display:block}.vent-projeto .vent-aula:first-child{background:linear-gradient(140deg,#fff,#eef9fa)}.vent-projeto .stage-sidebar{padding-bottom:30px}</style></head><body class="vent-projeto"><header><div class="header-left"><a class="portal-link" href="../index.html">← Mundo bit Byte</a><h1>Sistemas Embarcados e IoT</h1></div><div class="brand">Professor Ronaldo Lavestein</div></header><div class="module-menu" id="arduinoModuleMenu" aria-label="Blocos do curso">'''+menu+'''</div><div class="layout arduino-layout" id="arduinoLayout"><aside class="stage-sidebar" id="stageSidebar" aria-label="Percurso do projeto"><div class="stage-sidebar-head"><h3>Oito etapas</h3><button class="stage-close" id="stageClose" type="button" aria-label="Fechar etapas">×</button></div><nav class="stage-menu" id="stageMenu">'''+side+'''</nav></aside><div class="stage-backdrop" id="stageBackdrop" hidden></div><div class="arduino-content"><button class="stage-toggle" id="stageToggle" type="button" aria-controls="stageSidebar" aria-expanded="false">☰ Etapas</button><main id="topo"><section id="apresentacao" class="vent-aula"><span class="vent-eyebrow">Projetos Práticos · Mundo bit Byte</span><h2>Controle de Ventilador por Bluetooth</h2><p>Como um toque no celular pode mudar uma escolha no Arduino? Aprenda esse caminho com três LEDs, entenda a comunicação Bluetooth e crie seu aplicativo no App Inventor.</p><div class="vent-alerta"><strong>Comece pelos LEDs.</strong> Esta atividade usa o Uno por USB e três LEDs para representar as velocidades. O HC-05 precisa de alimentação e sinais conferidos pelo professor. Relés e ventilador ficam fora dessa montagem; a etapa de 220 V depende de projeto e avaliação profissional. A simulação funciona apenas na tela.</div><p><a class="vent-download" href="#etapa-1">Começar o percurso →</a></p></section>'''+''.join(wrapper(i,titles[i-1],objs[i-1],prior[i-1],bodies[i-1]) for i in range(1,9))+'''</main></div></div><script src="../js/mbb-visualizador.js?v=20261002-1" data-mbb-visualizador-global></script><script src="../js/ventilador-bluetooth.js?v=20261019-mbb-2"></script><script src="../js/mbb-ventilador-contexto.js?v=1"></script><script src="../js/ventilador-navegacao.js?v=1"></script><script src="../js/mbb-busca-global.js?v=mbb-busca-2"></script></body></html>'''
write('pages/arduino-ventilador-bluetooth.html',page)

def insert(path,key,chunk,before):
    p=ROOT/path; s=p.read_text(encoding='utf-8'); start=f'<!-- VENTILADOR:{key}:INICIO -->'; end=f'<!-- VENTILADOR:{key}:FIM -->'
    wrapped=start+'\n'+chunk+'\n'+end+'\n'
    if start in s:s=re.sub(re.escape(start)+r'[\s\S]*?'+re.escape(end)+r'\n?',lambda m:wrapped,s,count=1)
    else:
        assert before in s,(path,before);s=s.replace(before,wrapped+before,1)
    p.write_text(s,encoding='utf-8')
for path,id,cls,title,body in [
('pages/arduino.html','atuadores-reles','project','Relés — do sinal ao contato',reles),
('pages/arduino-conectividade.html','b6-hc05','mbb6-panel project','HC-05 no Arduino Uno',hc),
('pages/arduino-seguranca.html','b9-eletricidade','mbb9-panel project','Eletricidade e segurança de equipamentos',seg),
('pages/appinventor.html','bluetooth-ventilador','section-card','Crie o aplicativo Ventilador MbB',app)]:
    chunk = f'<section class="project" id="{id}"><div class="vent-aula"><h2>{title}</h2>{body}</div></section>' if id == 'atuadores-reles' else f'<section id="{id}" class="{cls} vent-aula"><h2>{title}</h2>{body}</section>'
    insert(path,'AULA',chunk,'</main>')
    insert(path,'RECURSOS','<link rel="stylesheet" href="../css/ventilador-bluetooth.css?v=20261019-mbb-2"><link rel="stylesheet" data-mbb-visualizador-global href="../css/mbb-visualizador.css?v=20261002-1">','</head>')
    insert(path,'SCRIPTS','<script src="../js/mbb-visualizador.js?v=20261002-1" data-mbb-visualizador-global></script><script src="../js/ventilador-bluetooth.js?v=20261019-mbb-2"></script><script src="../js/mbb-ventilador-contexto.js?v=1"></script>','</body>')
insert('pages/arduino-conectividade.html','MENU','<a class="stage-link module-visible" href="#b6-hc05">Complemento — HC-05 no Uno</a>','    <a class="stage-link module-visible" href="#b6-2">')
insert('pages/arduino-seguranca.html','MENU','<a class="stage-link module-visible" href="#b9-eletricidade">Eletricidade e equipamentos</a>','</div>\n</aside>')
insert('pages/appinventor.html','MENU-BLOCO','<button class="module-btn" type="button" data-module="bluetooth" data-target="#bluetooth-ventilador">5. Bluetooth e Controle</button>','</div>\n\n<div class="layout')
insert('pages/appinventor.html','MENU-ETAPA','<a class="nav-btn" data-module="bluetooth" href="#bluetooth-ventilador">Aplicativo Ventilador MbB</a>','  </div>\n</aside>')
for p in sorted((ROOT/'pages').glob('arduino*.html')):
    if p.name=='arduino-ventilador-bluetooth.html':continue
    s=p.read_text(encoding='utf-8')
    if 'id="arduinoModuleMenu"' not in s:continue
    if 'VENTILADOR:MENU11:INICIO' in s:continue
    match=re.search(r'<a class="module-btn[^"<]*"[^>]*href="arduino-exercicios.html"[^>]*>',s)
    if match:insert(str(p.relative_to(ROOT)),'MENU11','<a class="module-btn" href="arduino-ventilador-bluetooth.html">11. Projetos Práticos</a>',match[0])
print('Percurso de 8 etapas e 4 complementos gerados; códigos extraídos dos .ino.')
