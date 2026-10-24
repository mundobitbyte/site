"""Gera a unidade experimental e o kit a partir dos mesmos exemplos canônicos."""
from pathlib import Path
from html import escape
import json
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'materiais/programacao-web/web3-typescript'
PAGE = ROOT / 'pages/programacao-web/web3-typescript.html'
DATA = json.loads((SOURCE / 'roteiro.json').read_text())

def code(text, source=None):
    label = f' data-ts-source="{source}"' if source else ''
    return f'<pre class="code-block"><code{label}>{escape(text.rstrip())}</code></pre>'

def explanation(text):
    terms=['number | null','Promise<void>','instanceof Error','Number.isFinite','Promise.resolve','JSON.parse','Produto[]','import type','Atendimento','Produto','tempoEstimado','calcularPrazo','formatarPrazo','unknown','undefined','null','number','boolean','string','const','let','map','filter','find','join','toFixed','interface','type','export','import','typeof','throw','catch','async','await','return','??','||','&&']
    pattern=re.compile(r'(?<![\w])('+'|'.join(re.escape(t) for t in sorted(terms,key=len,reverse=True))+r')(?![\w])')
    paragraphs=[]
    for part in text.split('\n\n'):
        chunks=[]; last=0
        for match in pattern.finditer(part):
            chunks.append(escape(part[last:match.start()]))
            chunks.append('<code class="inline-code">'+escape(match[0])+'</code>')
            last=match.end()
        chunks.append(escape(part[last:])); paragraphs.append('<p>'+''.join(chunks)+'</p>')
    return ''.join(paragraphs)

def footer(previous, following):
    return (f'<div class="chapter-footer"><a href="#{previous[0]}" data-ts-link="{previous[0]}">← {previous[1]}</a>'
            f'<a href="#{following[0]}" data-ts-link="{following[0]}">{following[1]} →</a></div>')

def article(ident, title, body, objective=None):
    return (f'<article class="chapter" id="{ident}" data-ts-topic><div class="chapter-header">'
            f'<span class="chapter-kicker">Web III · TypeScript Essencial</span>'
            f'<h2 id="{ident}-titulo" tabindex="-1">{title}</h2>'
            + (f'<p class="chapter-meta"><strong>Objetivo:</strong> {escape(objective)}</p>' if objective else '')
            + '</div>' + body + '</article>')

intro='''
<p>O site e o balcão do Café Aurora já buscam a mesma informação no PHP. Daqui a pouco, o navegador também precisará trabalhar com esses dados. Antes dessa ligação, vamos experimentar como o TypeScript nos ajuda a perceber uma troca de tipos durante o desenvolvimento.</p>
<p>A base é o JavaScript que você já trabalhou no Web I; a <a href="../reactnative.html#rn-javascriptEssencial-js-intro">revisão do módulo React Native</a> é um apoio se precisar, não um curso inteiro para fazer antes.</p>
<h3 id="ts-ambiente">Abra a bancada e veja o primeiro resultado</h3>
<p><strong>Baixe o <a href="../../downloads/programacao-web/cafe-aurora-typescript-essencial.zip" download>kit de TypeScript do Café Aurora</a> e descompacte em outra pasta.</strong> Abra a pasta que contém <code class="inline-code">package.json</code> no VS Code. Sua aplicação PHP continua guardada como está; esta bancada permite fazer pequenas experiências nos mesmos dados do Café.</p>
<p>Vamos usar Node.js 24, npm, TypeScript e Vite. Node.js executa as ferramentas no computador; npm instala as dependências declaradas no projeto; TypeScript verifica os tipos; Vite prepara o código para o navegador e serve a página local. Se estiver usando o terminal do Laragon, confira as versões disponíveis em vez de instalar outra cópia sem necessidade.</p>
COMANDOS
<p>O primeiro comando precisa mostrar uma versão 24.x. Se Node.js ou npm não forem reconhecidos, prepare o <a href="https://nodejs.org/en/download" target="_blank" rel="noopener">Node.js 24</a> no laboratório com a orientação do professor e reabra o terminal. <code class="inline-code">npm ci</code> instala exatamente as dependências do arquivo de trava, <code class="inline-code">package-lock.json</code>; precisa de acesso à rede nessa preparação.</p>
<p><strong>Abra o endereço local exibido pelo Vite no terminal.</strong> Ele geralmente começa com <code class="inline-code">http://127.0.0.1:5173/</code>, mas pode escolher outra porta. Mantenha esse terminal aberto.</p>
<figure class="web3-resultado"><figcaption>O primeiro exemplo já deve aparecer na sua bancada</figcaption><pre>Café Aurora
Negócio: Café Aurora
Atendimento aberto: true
Tempo estimado: 40 minutos.</pre></figure>
<p><strong>Abra <code class="inline-code">src/main.ts</code> e altere 40 para 45.</strong> Salve e veja o prazo mudar. Essa será a rotina: ler um trecho, experimentar e observar. No tópico 1, veremos como conferir também o tipo desse valor.</p>
<h3 id="ts-verificacao">A página abriu. O que ainda precisamos conferir?</h3>
<p>O navegador recebe JavaScript preparado a partir do TypeScript. As anotações de tipo não fazem parte dessa execução. O Vite transforma o arquivo, mas não faz a verificação de tipos. <strong>Abra um segundo terminal na mesma pasta e execute:</strong></p>
VERIFICAR
<p>Um resultado sem erro significa que o verificador não encontrou incompatibilidades nos arquivos de <code class="inline-code">src</code>. Isso não substitui testar o comportamento na página. Se um erro aparecer, leia arquivo e linha; depois de corrigir, execute o comando novamente.</p>
<p>Nos tópicos 1 a 8, substitua somente o conteúdo de <code class="inline-code">src/main.ts</code> pelo exemplo completo da página. Salve sua tentativa antes de trocar. No tópico 9, acrescentaremos um arquivo de apoio. Não é necessário repetir a instalação a cada tópico.</p>
<p>Ao terminar a bancada, <code class="inline-code">npm run build</code> verifica os tipos e gera os arquivos estáticos em <code class="inline-code">dist</code>. Por enquanto, concentre-se na experiência do tópico 1.</p>
<p class="web3-status">Unidade em desenvolvimento · versão experimental para avaliação.</p>
<div class="chapter-footer"><a href="web3-aula2.html#proxima-necessidade">← Voltar ao Café</a><a href="#ts-variaveis" data-ts-link="ts-variaveis">1. Variáveis e tipos →</a></div>
'''.replace('COMANDOS',code('node --version\nnpm --version\nnpm ci\nnpm run dev')).replace('VERIFICAR',code('npm run verificar'))

parts=[article('ts-intro','TypeScript Essencial para o Café Aurora',intro)]
nav=[('ts-intro','Comece aqui')]+[(t['id'],t['menu']) for t in DATA]+[('ts-exercicios','99. Exercícios')]
for i,t in enumerate(DATA,1):
    body=f'<p>{escape(t["lead"])}</p>'
    if i==9:
        body+='<p><strong>Crie <code class="inline-code">src/atendimento.ts</code> com este conteúdo:</strong></p>'
        body+=code((SOURCE/'exemplos/09/atendimento.ts').read_text(),'exemplos/09/atendimento.ts')
        body+='<p><strong>Agora substitua <code class="inline-code">src/main.ts</code> pelo exemplo abaixo.</strong> Os dois arquivos precisam estar na mesma pasta.</p>'
    else:
        body+='<p><strong>Em <code class="inline-code">src/main.ts</code>, use o exemplo completo abaixo.</strong> Salve e confira o resultado na página da bancada.</p>'
    body+=code((SOURCE/'exemplos'/t['file']).read_text(),'exemplos/'+t['file'])
    body+=f'<h3 id="{t["id"]}-leitura">{escape(t["focusTitle"])}</h3>{explanation(t["explanation"])}'
    body+=f'<figure class="web3-resultado"><figcaption>Resultado esperado antes das suas alterações</figcaption><pre>{escape(t["result"])}</pre></figure>'
    body+=f'<h3 id="{t["id"]}-pratica">Experimente no Café</h3><p>{escape(t["practice"])}</p>'
    body+='<p>Salve, observe a página e execute <code class="inline-code">npm run verificar</code> no segundo terminal. Corrija qualquer erro intencional antes de seguir.</p>'
    body+=f'<p><strong>Confira:</strong> {escape(t["check"])}</p><p>{escape(t["next"])}</p>'
    body+=footer(nav[i-1],nav[i+1])
    parts.append(article(t['id'],escape(t['title']),body,t['objective']))
exercises=[
 ('1. Um prazo bem representado','Defina o nome do Café, a situação do atendimento e um prazo numérico. Acrescente uma variável com a margem de retirada e mostre o prazo final. Provoque uma atribuição de texto, reconheça o erro de tipo e corrija.','O prazo final é uma soma numérica; a verificação passa depois da correção.'),
 ('2. Sem prazo disponível','Represente uma estimativa ausente com null e informe que a pessoa deve consultar a equipe. Teste também atendimento encerrado. Não apresente zero como substituto automático da ausência.','Os casos aberto com prazo, aberto sem prazo e encerrado têm orientações coerentes.'),
 ('3. Duas funções para a consulta','Escreva uma função que calcula o prazo a partir de preparo e margem. Escreva outra que recebe esse resultado e prepara a mensagem. Declare parâmetros e retornos.','Uma função entrega número, a outra texto. Uma chamada com argumento incompatível é identificada.'),
 ('4. Encontrar no cardápio','Crie uma lista de quatro produtos tipados. Mostre seus nomes com map, filtre por um limite de preço e procure um identificador com find. Teste também um identificador ausente.','A lista, o filtro e a busca têm resultados distintos; um produto ausente não provoca acesso a undefined.'),
 ('5. Comparar o aviso novo com o anterior','Descreva o atendimento com interface. Faça uma cópia com spread e altere o prazo dessa cópia. Mostre os dois valores usando desestruturação onde ela ajudar a leitura.','O aviso novo muda e o objeto anterior continua com seu valor inicial.'),
 ('6. Receber, conferir e organizar','Adapte a resposta local do tópico 8. Aceite apenas prazo numérico finito e não negativo. Separe a preparação em um arquivo de apoio, como no tópico 9. Teste número válido, texto, campo ausente e JSON inválido.','O caso válido aparece; os demais são recusados. O verificador passa e nenhum dado é aceito apenas por uma afirmação de tipo.')]
body='<p>Agora resolva pequenas mudanças com menos orientação. Continue na bancada; guarde seus arquivos antes de substituir um exemplo. Não é necessário construir outro site ou aplicativo.</p>'
for n,(title,task,check) in enumerate(exercises,1):
    body+=f'<section class="task-box"><h3 id="ts-exercicio-{n}">{title}</h3><p>{task}</p><p><strong>Resultado para conferir:</strong> {check}</p></section>'
body+='''<p>Ao terminar, demonstre uma alteração que funciona e uma entrada que seu código recusa. Explique o que a verificação de tipos percebeu e o que você precisou conferir durante a execução. Você pode guardar dúvidas e descobertas nas anotações do <strong>Meu estudo</strong>.</p>
<p>O Café PHP continua preservado. Na continuidade do Web III, vamos usar o que você aprendeu para tratar os dados de uma consulta real. Esta bancada ainda não faz essa integração.</p>
<details><summary>Referências para consultar um ponto específico</summary><ul>
<li><a href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html" target="_blank" rel="noopener">TypeScript: fundamentos e verificação</a></li>
<li><a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" target="_blank" rel="noopener">Tipos básicos, arrays, funções e objetos</a></li>
<li><a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html" target="_blank" rel="noopener">Verificações e redução de possibilidades</a></li>
<li><a href="https://vite.dev/guide/features.html#typescript" target="_blank" rel="noopener">Vite e TypeScript</a></li></ul></details>
<div class="chapter-footer"><a href="#ts-imports" data-ts-link="ts-imports">← 9. Módulos</a><a href="web3-aula2.html#proxima-necessidade">Voltar ao Café Aurora →</a></div>'''
parts.append(article('ts-exercicios','99 — Exercícios TypeScript',body,'Aplicar os conceitos nos dados do Café e explicar os resultados.'))
menu=''.join(f'<a class="chapter-link" href="#{ident}" data-ts-link="{ident}">{title}</a>' for ident,title in nav)
options=''.join(f'<option value="{ident}">{title}</option>' for ident,title in nav)
page='''<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TypeScript Essencial — Web III | Mundo bit Byte</title><meta name="description" content="TypeScript Essencial aplicado ao Café Aurora: exemplos executáveis, leitura guiada e exercícios para continuar o Web III.">
<link href="../../css/programacao-web.css?v=13" rel="stylesheet"><link href="../../css/web3.css?v=1" rel="stylesheet"><link href="../../css/web3-typescript.css?v=1" rel="stylesheet"></head>
<body class="module-page web3-page web3-typescript"><a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header><div class="header-left"><a class="portal-link" href="web3.html">← Web III</a><h1>TypeScript Essencial</h1></div><a class="portal-link" href="../../meu-mbb/index.html">Entrar / Meu MbB</a><div class="brand">Professor Ronaldo Lavestein</div></header>
<nav class="level-menu" aria-label="Níveis de Programação Web"><a class="level-menu-item" href="web1.html">Web I — Sites</a><a class="level-menu-item" href="web2.html">Web II — Sistemas</a><a class="level-menu-item active" href="web3.html">Web III <small>Em desenvolvimento</small></a></nav>
<div class="web-layout"><nav class="chapter-menu" aria-label="Tópicos de TypeScript"><h2>TypeScript Essencial</h2><div class="typescript-menu-links">MENU</div><div class="typescript-mobile-menu"><label for="ts-topico">Tópico de TypeScript</label><select id="ts-topico">OPTIONS</select></div><p class="web3-menu-note"><a href="web3-aula2.html#proxima-necessidade">Voltar ao Café Aurora</a></p></nav>
<main class="web-content" id="conteudo" tabindex="-1">PARTS</main></div>
<script src="../../js/web3-typescript.js?v=1"></script><script src="../../js/mbb-busca-global.js?v=mbb-busca-2"></script>
</body></html>
'''.replace('MENU',menu).replace('OPTIONS',options).replace('PARTS','\n'.join(parts))
PAGE.write_text(page)
with zipfile.ZipFile(ROOT/'downloads/programacao-web/cafe-aurora-typescript-essencial.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
    for p in sorted(SOURCE.rglob('*')):
        if p.is_file() and p.name!='roteiro.json':
            relative=str(p.relative_to(SOURCE))
            if relative=='index.html.txt':relative='index.html'
            info=zipfile.ZipInfo('cafe-aurora-typescript/'+relative,(2026,10,24,0,0,0))
            info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o100644<<16
            z.writestr(info,p.read_bytes())
print(PAGE.relative_to(ROOT))
