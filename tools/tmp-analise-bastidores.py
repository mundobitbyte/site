from pathlib import Path

replacements = {
    'pages/analise-sistemas/05-processo-to-be-bpmn.html': [
        ('Se adicionarmos todos os eventos possíveis, ele pode ficar tecnicamente mais completo e pedagogicamente pior.',
         'Se adicionarmos todos os eventos possíveis, ele pode ficar tecnicamente mais completo, mas menos claro para a pergunta que estamos tentando responder.'),
    ],
    'pages/analise-sistemas/06-requisitos.html': [
        ('<h3>Uma volta na espiral</h3>', '<h3>De onde vêm os requisitos?</h3>'),
        ('<h2>Autocrítica da sequência</h2>', '<h2>Conferência com as evidências anteriores</h2>'),
    ],
    'pages/analise-sistemas/08-uml-essencial.html': [
        ('<h2>Crítica circular</h2>', '<h2>Revise os modelos entre si</h2>'),
    ],
    'pages/analise-sistemas/10-ux-prototipo.html': [
        ('<div class="card evidence-card"><h3>Tarefa melhor</h3><p>“Imagine que você deixou seu notebook ontem. Descubra em que situação está a ordem.”</p></div>',
         '<div class="card evidence-card"><h3>Tarefa melhor</h3><p><strong>Instrução ao participante:</strong> “Imagine que você deixou seu notebook na assistência ontem. Descubra em que situação está a ordem.”</p></div>'),
        ('<p><a href="prototipo-assistencia-tecnica-conecta.html#validacao-guiada"><strong>Abrir o protótipo e iniciar a validação guiada →</strong></a></p>',
         '<p><a href="prototipo-assistencia-tecnica-conecta.html"><strong>Abrir o protótipo da Conecta →</strong></a></p>'),
        ('conclua os três desafios da validação em espiral.', 'conclua os três desafios da validação guiada.'),
    ],
    'pages/analise-sistemas/11-qualidade-integracoes.html': [
        ('<h3>Segunda volta dos RNFs</h3>', '<h3>Agora os RNFs têm contexto</h3>'),
        ('<h2>Crítica circular</h2>', '<h2>Revise os requisitos anteriores</h2>'),
    ],
    'pages/analise-sistemas/12-viabilidade-riscos-rastreabilidade.html': [
        ('<h3>A espiral da viabilidade</h3>', '<h3>A mesma pergunta, agora com mais informação</h3>'),
        ('<h2>Crítica circular</h2>', '<h2>Reavalie decisões quando os riscos mudam</h2>'),
    ],
    'pages/analise-sistemas/13-documentacao-ia.html': [
        ('<h2>Crítica circular</h2>', '<h2>Documentar também revela inconsistências</h2>'),
    ],
    'pages/analise-sistemas/14-integracao-final.html': [
        ('<div class="card return-card"><h3>Onde isso já aconteceu na Conecta?</h3><p>Requisitos voltaram a ser revistos após o protótipo; RNFs amadureceram quando a interface e as integrações ficaram concretas; riscos fizeram o backlog e o MVP serem questionados. O módulo já vinha trabalhando de forma <strong>iterativa e em espiral</strong> — agora damos nome a esse comportamento sem transformar a aula em curso de Engenharia de Software.</p></div>',
         '<div class="card return-card"><h3>Onde isso já aconteceu na Conecta?</h3><p>Requisitos voltaram a ser revistos após o protótipo; RNFs amadureceram quando a interface e as integrações ficaram concretas; riscos fizeram o backlog e o MVP serem questionados. Na Conecta, vimos revisões sucessivas orientadas por novas evidências e riscos. Isso ajuda a reconhecer, na prática, características de abordagens <strong>iterativas</strong> e do <strong>Modelo Espiral</strong>.</p></div>'),
        ('<h2>Volta final ao começo</h2><p>Na Etapa 0 ouvimos: “precisamos de um sistema”. Agora conseguimos responder com perguntas, evidências e decisões. Essa volta fecha o primeiro ciclo e abre o próximo: implementar, observar e aprender.</p>',
         '<h2>Retorne ao problema inicial</h2><p>Na Etapa 0 ouvimos: “precisamos de um sistema”. Agora conseguimos responder com perguntas, evidências e decisões. Essa comparação encerra esta análise e abre o próximo ciclo profissional: implementar, observar e aprender.</p>'),
    ],
    'pages/analise-sistemas/prototipo-assistencia-tecnica-conecta.html': [
        ('<strong>2ª volta da espiral:</strong>', '<strong>Decisão de escopo:</strong>'),
        ('Validação guiada — complete uma volta na espiral', 'Validação guiada — teste, registre e reteste'),
        ('<strong>Volta concluída.</strong>', '<strong>Validação concluída.</strong>'),
    ],
}

for file, pairs in replacements.items():
    p = Path(file)
    text = p.read_text(encoding='utf-8')
    for old, new in pairs:
        count = text.count(old)
        if count != 1:
            raise SystemExit(f'{file}: esperado 1 ocorrência, encontrado {count}: {old[:80]}')
        text = text.replace(old, new)
    p.write_text(text, encoding='utf-8')

smoke = Path('tools/analise-sistemas-validacao/smoke.mjs')
text = smoke.read_text(encoding='utf-8')
old = "const expectedDiagrams={3:1,4:2,5:1,7:1,8:4};\nconst viewports = ["
new = """const expectedDiagrams={3:1,4:2,5:1,7:1,8:4};
const forbiddenBackstage={
  '05-processo-to-be-bpmn.html':['pedagogicamente pior'],
  '06-requisitos.html':['Uma volta na espiral','Autocrítica da sequência'],
  '08-uml-essencial.html':['Crítica circular'],
  '10-ux-prototipo.html':['validação em espiral'],
  '11-qualidade-integracoes.html':['Segunda volta dos RNFs','Crítica circular'],
  '12-viabilidade-riscos-rastreabilidade.html':['A espiral da viabilidade','Crítica circular'],
  '13-documentacao-ia.html':['Crítica circular'],
  '14-integracao-final.html':['O módulo já vinha trabalhando','Volta final ao começo']
};
const viewports = ["""
if old not in text:
    raise SystemExit('smoke.mjs: ponto 1 não encontrado')
text = text.replace(old, new, 1)
old = "      diagrams:document.querySelectorAll('.visual[data-zoomable=\"true\"]').length\n    }));"
new = "      diagrams:document.querySelectorAll('.visual[data-zoomable=\"true\"]').length,\n      text:document.body.innerText\n    }));"
if old not in text:
    raise SystemExit('smoke.mjs: ponto 2 não encontrado')
text = text.replace(old, new, 1)
old = "    if(expectedDiagrams[i]) assert(snap.diagrams===expectedDiagrams[i],`${stages[i]} deveria ter ${expectedDiagrams[i]} diagrama(s) ampliável(is); encontrou ${snap.diagrams}.`);\n  }"
new = "    if(expectedDiagrams[i]) assert(snap.diagrams===expectedDiagrams[i],`${stages[i]} deveria ter ${expectedDiagrams[i]} diagrama(s) ampliável(is); encontrou ${snap.diagrams}.`);\n    for(const term of forbiddenBackstage[stages[i]]||[]) assert(!snap.text.includes(term),`${stages[i]} expõe linguagem de bastidor: ${term}`);\n  }"
if old not in text:
    raise SystemExit('smoke.mjs: ponto 3 não encontrado')
text = text.replace(old, new, 1)
smoke.write_text(text, encoding='utf-8')

proto = Path('tools/analise-sistemas-validacao/smoke-prototipo.mjs')
text = proto.read_text(encoding='utf-8')
old = "    innerWidth:window.innerWidth\n  }));"
new = "    innerWidth:window.innerWidth,\n    visibleText:document.body.innerText\n  }));"
if old not in text:
    raise SystemExit('smoke-prototipo.mjs: ponto 1 não encontrado')
text = text.replace(old, new, 1)
old = "  assert(initial.scrollWidth<=initial.innerWidth+2,'Protótipo criou rolagem horizontal no desktop.');\n\n  await page.click('[data-prepare=\"clarity\"]');"
new = """  assert(initial.scrollWidth<=initial.innerWidth+2,'Protótipo criou rolagem horizontal no desktop.');
  assert(!/2ª volta da espiral|complete uma volta na espiral|Volta concluída\./.test(initial.visibleText),'Protótipo expõe rótulos internos da metodologia.');

  const stage10Page=await browser.newPage();
  await stage10Page.setViewport({width:1366,height:900});
  await stage10Page.goto(`${base}/pages/analise-sistemas/10-ux-prototipo.html`,{waitUntil:'networkidle0'});
  const stage10Link=await stage10Page.evaluate(()=>{
    const link=[...document.querySelectorAll('a')].find(a=>a.getAttribute('href')?.includes('prototipo-assistencia-tecnica-conecta.html'));
    const task=[...document.querySelectorAll('.evidence-card p')].find(p=>p.textContent.includes('notebook'));
    return {href:link?.getAttribute('href')||'',task:task?.textContent?.trim()||''};
  });
  assert(stage10Link.href==='prototipo-assistencia-tecnica-conecta.html',`Link do protótipo deve abrir no topo; encontrou ${stage10Link.href}.`);
  assert(stage10Link.task.includes('Instrução ao participante:'),'A tarefa do notebook precisa explicitar que o texto é dirigido ao participante do teste.');
  await stage10Page.close();

  await page.click('[data-prepare=\"clarity\"]');"""
if old not in text:
    raise SystemExit('smoke-prototipo.mjs: ponto 2 não encontrado')
text = text.replace(old, new, 1)
proto.write_text(text, encoding='utf-8')
