"""Exportacao autocontida para avaliar no celular, sem servidor ou Firebase.
Nao e a pagina para publicar: as aulas canonicas continuam nos modulos do site.
"""
from pathlib import Path
from lxml import html,etree
import base64,sys
ROOT=Path(__file__).resolve().parents[2]
dest=Path(sys.argv[1]).resolve()
doc=html.document_fromstring((ROOT/'pages/arduino-ventilador-bluetooth.html').read_bytes())
doc.find('.//title').text='Prévia portátil — Controle de Ventilador por Bluetooth · MbB'
menu=doc.xpath('//*[@id="arduinoModuleMenu"]')[0]
for e in list(menu):menu.remove(e)
a=etree.SubElement(menu,'a',{'class':'module-btn active','href':'#topo'});a.text='Prévia de avaliação · oito etapas e aulas de apoio'
home=doc.xpath('//a[contains(@class,"portal-link")]')[0];home.set('href','#topo');home.text='↑ Percurso'
intro=doc.xpath('//*[@id="apresentacao"]')[0]
notice=etree.SubElement(intro,'p');notice.text='Arquivo portátil para avaliação: as aulas de apoio estão reunidas ao final. No site integrado, permanecem nos módulos originais. Não utiliza Bluetooth real ou serviços de conta.'
mapping=[('arduino.html','atuadores-reles',3),('arduino-conectividade.html','b6-hc05',4),('arduino-seguranca.html','b9-eletricidade',2),('appinventor.html','bluetooth-ventilador',6)]
main=doc.xpath('//main')[0]
for page,id,etapa in mapping:
    source=html.document_fromstring((ROOT/'pages'/page).read_bytes())
    node=source.xpath('//*[@id=$id]',id=id)[0]
    node.set('id','apoio-'+id);node.set('class','vent-aula')
    for link in node.xpath('.//a[starts-with(@href,"#")]'):
        link.set('href','#etapa-'+str(etapa));link.text='Retomar o percurso — etapa '+str(etapa)
    main.append(node)
    for link in doc.xpath('//a[@data-mbb-conceito]'):
        if link.get('href')==page+'#'+id:link.set('href','#apoio-'+id)
for stylesheet in doc.xpath('//link[@rel="stylesheet"]'):
    path=(ROOT/'pages'/stylesheet.get('href').split('?')[0]).resolve()
    style=etree.Element('style');style.text=path.read_text();stylesheet.getparent().replace(stylesheet,style)
for image in doc.xpath('//img[@src]'):
    path=(ROOT/'pages'/image.get('src').split('?')[0]).resolve()
    mime={'.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png'}[path.suffix.lower()]
    image.set('src','data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode())
for link in doc.xpath('//a[starts-with(@href,"../downloads/ventilador/")]'):
    path=(ROOT/'pages'/link.get('href')).resolve();mime={'.aia':'application/octet-stream','.apk':'application/vnd.android.package-archive'}.get(path.suffix,'text/plain;charset=utf-8')
    link.set('href','data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode());link.set('download',path.name)
for script in doc.xpath('//script'):script.getparent().remove(script)
for p in ['js/mbb-visualizador.js','js/ventilador-bluetooth.js','js/ventilador-navegacao.js']:
    script=etree.SubElement(doc.find('body'),'script');script.text=(ROOT/p).read_text().replace('</script','<\\/script')
csp=etree.Element('meta',{'http-equiv':'Content-Security-Policy','content':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; base-uri 'none'"})
doc.find('head').insert(1,csp)
output='<!DOCTYPE html>\n'+html.tostring(doc,encoding='unicode',method='html')
assert 'firebase' not in ''.join(x.text or '' for x in doc.xpath('//script')).lower()
assert not doc.xpath('//script[@src] | //link[@rel="stylesheet"] | //img[not(starts-with(@src,"data:"))]')
dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(output,encoding='utf-8')
print(dest)
