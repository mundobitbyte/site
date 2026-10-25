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

def code(text, source=None, fragment=None):
    label = f' data-ts-source="{source}"' if source else (f' data-ts-fragment="{fragment}"' if fragment else '')
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
<p>Na última experiência do Capítulo 1, a cozinha informou um prazo e você conferiu como ele chegava ao site e ao balcão. Quando uma aba ficou aberta, foi preciso pedir outra página para enxergar o novo aviso. Nossa próxima necessidade será fazer o navegador consultar a informação do atendimento.</p>
<p>Antes dessa consulta, precisamos aprender a trabalhar com os dados que a tela usará: o nome do Café é um texto, o prazo é um número e o atendimento pode estar aberto ou encerrado. Vamos experimentar isso no <strong>VS Code que você já conhece</strong>, com uma tarefa pequena: mostrar o prazo, atualizá-lo e reconhecer uma troca de tipo.</p>
<h3 id="ts-o-que-e">O que é TypeScript e o que ele acrescenta?</h3>
<p><strong>TypeScript é uma linguagem construída sobre JavaScript, com recursos para descrever e verificar os tipos dos dados durante o desenvolvimento.</strong> JavaScript permite programar o comportamento das páginas. TypeScript acrescenta uma conferência: se dissermos que o prazo deve ser um número, ele pode apontar quando o código tenta colocar um texto nesse lugar.</p>
<p>Isso ajuda a encontrar incompatibilidades e a entender o que uma variável ou função espera receber. O navegador executará o JavaScript preparado pelas ferramentas a partir do nosso TypeScript; as indicações de tipo servem à conferência durante o desenvolvimento.</p>
<h3 id="ts-quando-usar">Quando essa ajuda faz diferença?</h3>
<p>Em uma página com poucas instruções, JavaScript pode atender bem. Conforme aparecem mais dados, funções, arquivos e pessoas trabalhando no código, explicitar os tipos ajuda a manter os acordos entre essas partes. No Café, vamos começar pelo prazo e chegar aos produtos e às funções que preparam as informações. <strong>TypeScript não é obrigatório para toda página nem elimina a necessidade de testes.</strong></p>
<p>Também há um limite importante: descrever um tipo não comprova que uma resposta recebida de fora tem aquele formato. Quando fizermos a consulta real ao PHP, precisaremos conferir os dados recebidos. Por enquanto, vamos aprender a representar e verificar valores conhecidos.</p>
<h3 id="ts-origem-prazo">De onde vem o prazo desta experiência?</h3>
<p>No fim da experiência da aba aberta, usamos <strong>35 minutos</strong>. Vamos adotar esse aviso como referência inicial aqui. Se você escolheu outro prazo na sua cópia, pode mantê-la guardada: o kit de estudo começa com 35 para conseguirmos comparar os resultados.</p>
<p><strong>Quem informa a estimativa é a equipe do Café.</strong> A variável apenas guarda o número informado, em minutos; o programa inicial não mede o trabalho da cozinha nem calcula uma previsão. Neste exercício, o valor estará escrito no arquivo TypeScript. Ele ainda não vem de uma consulta ao PHP.</p>
<h3 id="ts-ambiente">Abra o exemplo no VS Code</h3>
<p><strong>Baixe o <a href="../../downloads/programacao-web/cafe-aurora-typescript-essencial.zip" download>kit de TypeScript do Café Aurora</a>.</strong> Localize o ZIP e extraia seu conteúdo em uma pasta de estudos. No VS Code, escolha <strong>Arquivo → Abrir Pasta</strong> e selecione a pasta <code class="inline-code">cafe-aurora-typescript</code>, que contém <code class="inline-code">package.json</code>. A aplicação PHP que você construiu continua na própria pasta.</p>
<p>No explorador lateral, localize a pasta <code class="inline-code">src</code> e abra <code class="inline-code">main.ts</code>. Esse será o arquivo de edição; a extensão <code class="inline-code">.ts</code> identifica TypeScript. O <code class="inline-code">index.html</code> é a página que apresenta a saída. Vamos primeiro colocar esse exemplo para funcionar.</p>
<h3 id="ts-preparar">Prepare as ferramentas uma vez</h3>
<p>No VS Code, escolha <strong>Terminal → Novo Terminal</strong>. O painel que abre permite executar comandos na pasta do projeto. Confira o caminho mostrado: precisamos trabalhar na pasta que contém <code class="inline-code">package.json</code>.</p>
<p>O <strong>Node.js</strong> executa as ferramentas de desenvolvimento deste projeto. O <strong>npm</strong> gerencia sua instalação e os comandos preparados no kit. Vamos conferir se estão disponíveis. Digite um comando por vez e pressione <strong>Enter</strong>:</p>
VERSOES
<p>O primeiro precisa mostrar <code class="inline-code">v24.</code> seguido dos demais números; o segundo, uma versão do npm. Se algum não for reconhecido, instale o <a href="https://nodejs.org/en/download" target="_blank" rel="noopener">Node.js 24</a> adequado ao computador, com o npm, e reabra o VS Code. No laboratório, peça orientação ao professor. Se já usa o terminal do Laragon, confira a versão antes de instalar outra cópia.</p>
<p>Com os dois comandos funcionando, instale as ferramentas listadas no projeto:</p>
INSTALAR
<p>Aguarde o comando terminar. Ele usa <code class="inline-code">package-lock.json</code> para instalar as versões preparadas para esta atividade e precisa de acesso à internet nessa etapa. Surgirá a pasta <code class="inline-code">node_modules</code>, com as ferramentas instaladas. Seus exercícios continuam em <code class="inline-code">src</code>.</p>
<h3 id="ts-abrir-pagina">Agora, encontre o resultado no navegador</h3>
<p>No mesmo terminal, execute:</p>
INICIAR
<p>Esse comando inicia o <strong>Vite</strong>. Neste projeto, ele transforma o TypeScript para o navegador e mantém uma página local disponível enquanto você edita. Você continua escrevendo no VS Code; para esta prática, abrirá o endereço do Vite em vez de iniciar o Live Preview.</p>
<p><strong>Abra no navegador o endereço mostrado pelo terminal.</strong> Ele geralmente começa com <code class="inline-code">http://127.0.0.1:5173/</code>; a porta pode mudar se já estiver ocupada. <code class="inline-code">127.0.0.1</code> aponta para o próprio computador. Abrir esse endereço não publica seu exercício na internet.</p>
<p>Mantenha esse terminal aberto: ele está atendendo à página. Com o exemplo inicial, a tela deve mostrar:</p>
<figure class="web3-resultado"><figcaption>Saída do exemplo no navegador, antes da sua alteração</figcaption><pre>Café Aurora
Negócio: Café Aurora
Atendimento aberto: true
Tempo estimado: 35 minutos.</pre></figure>
<p><code class="inline-code">true</code> significa verdadeiro: o atendimento está aberto. O prazo de 35 é a estimativa informada pela equipe para esta situação.</p>
<h3 id="ts-primeira-mudanca">A cozinha enviou outro aviso</h3>
<p>Entraram novos pedidos, e a equipe informou que o prazo passou de <strong>35 para 45 minutos</strong>. Vamos representar esse novo aviso. Volte ao VS Code, abra <code class="inline-code">src/main.ts</code> e localize:</p>
PRAZO_INICIAL
<p>Troque somente <code class="inline-code">35</code> por <code class="inline-code">45</code>, mantendo os demais símbolos:</p>
PRAZO_NOVO
<p><strong>Salve com Ctrl + S e observe a página no navegador.</strong> O prazo deve passar a 45 minutos. Você acabou de alterar um valor no TypeScript e acompanhar seu efeito na tela. A mudança pertence ao exemplo local; seu site PHP mantém os próprios dados.</p>
<h3 id="ts-verificacao">A página abriu. O que ainda precisamos conferir?</h3>
<p>Conseguimos ver 45 minutos. Agora precisamos conferir se o código respeita os tipos que declarou. <strong>O Vite prepara a execução, mas não verifica os tipos.</strong> No VS Code, escolha novamente <strong>Terminal → Novo Terminal</strong>, deixando o primeiro aberto. No segundo, confirme a mesma pasta do projeto e execute:</p>
VERIFICAR
<p>O comando chama o verificador do TypeScript. Se ele terminar sem apontar erros, não encontrou incompatibilidades de tipos nesses arquivos. Isso complementa o teste na página. No próximo tópico, vamos ler o exemplo e provocar uma troca de número por texto para entender essa diferença.</p>
<p><strong>Antes de seguir:</strong> você consegue localizar quem informou o prazo, o arquivo em que ele está representado e a página que mostra sua alteração? Confira também que a verificação terminou sem erros.</p>
<details><summary>Se o resultado não apareceu, por onde começar?</summary>
<ul><li><strong>Não encontrou package.json:</strong> confira a pasta aberta no VS Code e o caminho do terminal; abra a pasta extraída, não o ZIP.</li>
<li><strong>O comando não reconhece node ou npm:</strong> conclua a preparação do Node.js 24 e reabra o VS Code. No Windows, se o PowerShell bloquear npm.ps1, selecione o perfil Prompt de Comando no terminal integrado e tente novamente, sem mudar políticas do computador.</li>
<li><strong>A instalação apresentou erro:</strong> confira a conexão e leia a mensagem antes de iniciar o Vite. A prática depende dessa preparação concluída.</li>
<li><strong>A página não abre ou não muda:</strong> confira se o terminal com npm run dev continua ativo, se abriu o endereço que ele informou e se salvou src/main.ts.</li></ul></details>
<h3 id="ts-retomada">Como continuar nas próximas aulas</h3>
<p>Ao voltar, abra esta pasta no VS Code, use <code class="inline-code">npm run dev</code> no terminal e abra o endereço informado. Não precisa repetir <code class="inline-code">npm ci</code> a cada aula com as dependências já instaladas. Para encerrar o servidor ao terminar, selecione seu terminal e pressione <strong>Ctrl + C</strong>; os arquivos salvos permanecem na pasta.</p>
<p>No tópico 1, você pode continuar no arquivo que acabou de alterar. Cada aula indica o que editar em <code class="inline-code">src/main.ts</code>. Nos tópicos 8 a 10, vamos manter sua lista de produtos e modificar somente o trecho indicado; o arquivo completo ficará disponível para conferência. Guarde sua tentativa antes de trocar de situação. Os arquivos em <code class="inline-code">exemplos</code> permitem recuperar uma referência. No tópico 12, acrescentaremos um arquivo de apoio.</p>
<details><summary>Quando quiser gerar os arquivos para distribuição</summary><p>O comando <code class="inline-code">npm run build</code> verifica os tipos e prepara a versão estática em <code class="inline-code">dist</code>. Essa etapa será útil ao distribuir a página; agora, continue com a leitura do seu primeiro exemplo.</p></details>
<p class="web3-local">Para consultar: <a href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" target="_blank" rel="noopener">apresentação oficial do TypeScript</a> e <a href="https://vite.dev/guide/features#typescript" target="_blank" rel="noopener">TypeScript no Vite</a>.</p>
<p class="web3-status">Web III em desenvolvimento · TypeScript Essencial disponível.</p>
<div class="chapter-footer"><a href="web3-aula2.html#proxima-necessidade">← Voltar ao Café</a><a href="#ts-variaveis" data-ts-link="ts-variaveis">1. Variáveis e tipos →</a></div>
'''.replace('VERSOES',code('node --version\nnpm --version')).replace('INSTALAR',code('npm ci')).replace('INICIAR',code('npm run dev')).replace('PRAZO_INICIAL',code('let tempoEstimado: number = 35;')).replace('PRAZO_NOVO',code('let tempoEstimado: number = 45;')).replace('VERIFICAR',code('npm run verificar'))

parts=[article('ts-intro','TypeScript Essencial para o Café Aurora',intro)]
nav=[('ts-intro','Comece aqui')]+[(t['id'],t['menu']) for t in DATA]+[('ts-exercicios','99. Exercícios')]
for i,t in enumerate(DATA,1):
    body=f'<p>{escape(t["lead"])}</p>'
    example=(SOURCE/'exemplos'/t['file']).read_text()
    if t['file'].endswith('/main.ts'):
        body+='<p><strong>Crie <code class="inline-code">src/atendimento.ts</code> com este conteúdo:</strong></p>'
        body+=code((SOURCE/'exemplos/12/atendimento.ts').read_text(),'exemplos/12/atendimento.ts')
        body+='<p><strong>Agora substitua <code class="inline-code">src/main.ts</code> pelo exemplo abaixo.</strong> Os dois arquivos precisam estar na mesma pasta.</p>'
    elif i == 1:
        body+='<p><strong>Continue em <code class="inline-code">src/main.ts</code>.</strong> Se já atualizou o prazo para 45 na abertura, mantenha sua alteração. O código abaixo mostra a referência inicial, com 35 minutos, para acompanharmos a leitura.</p>'
    elif t.get('edit'):
        edit=t['edit']
        start=example.index(edit['from'])
        end=example.index(edit['until'],start) if edit.get('until') else len(example)
        body+=explanation(edit['instruction'])
        body+=code(example[start:end],fragment='exemplos/'+t['file'])
        body+='<details><summary>Conferir o arquivo completo desta aula</summary><p>Use esta referência se precisar recuperar o exemplo. Para continuar com seus próprios produtos, mantenha a lista que você já montou.</p>'
        body+=code(example,'exemplos/'+t['file'])+'</details>'
    else:
        body+='<p><strong>Em <code class="inline-code">src/main.ts</code>, use o exemplo completo abaixo.</strong> Salve e confira o resultado na página da bancada.</p>'
    if not t.get('edit'):
        body+=code(example,'exemplos/'+t['file'])
    body+=f'<h3 id="{t["id"]}-leitura">{escape(t["focusTitle"])}</h3>{explanation(t["explanation"])}'
    caption='Resultado com os três produtos da referência' if t.get('edit') else 'Resultado esperado antes das suas alterações'
    body+=f'<figure class="web3-resultado"><figcaption>{caption}</figcaption><pre>{escape(t["result"])}</pre></figure>'
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
 ('6. Preparar em um arquivo, apresentar em outro','Como no tópico 12, separe a preparação do atendimento em um arquivo de apoio. Faça main.ts usar a função e seu tipo. Altere o prazo somente no apoio, confira a página e provoque um nome de campo incompatível para reconhecer o erro antes de corrigir.','A apresentação recebe o valor do apoio e o verificador identifica um campo inexistente. Explique por que o exemplo ainda não consulta o PHP.')]
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
<div class="chapter-footer"><a href="#ts-imports" data-ts-link="ts-imports">← 12. Ponte para interfaces</a><a href="web3-aula2.html#proxima-necessidade">Voltar ao Café Aurora →</a></div>'''
parts.append(article('ts-exercicios','99 — Exercícios TypeScript',body,'Aplicar os conceitos nos dados do Café e explicar os resultados.'))
menu=''.join(f'<a class="chapter-link" href="#{ident}" data-ts-link="{ident}">{title}</a>' for ident,title in nav)
page='''<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TypeScript Essencial — Web III | Mundo bit Byte</title><meta name="description" content="TypeScript Essencial aplicado ao Café Aurora: exemplos executáveis, leitura guiada e exercícios para continuar o Web III.">
<link href="../../css/programacao-web.css?v=13" rel="stylesheet"><link href="../../css/web3.css?v=1" rel="stylesheet"><link href="../../css/web3-typescript.css?v=2" rel="stylesheet"></head>
<body class="module-page web3-page web3-typescript"><a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header><div class="header-left"><a class="portal-link" href="web3.html">← Web III</a><h1>TypeScript Essencial</h1></div><a class="portal-link" href="../../meu-mbb/index.html">Entrar / Meu MbB</a><div class="brand">Professor Ronaldo Lavestein</div></header>
<nav class="level-menu" aria-label="Níveis de Programação Web"><a class="level-menu-item" href="web1.html">Web I — Sites</a><a class="level-menu-item" href="web2.html">Web II — Sistemas</a><a class="level-menu-item active" href="web3.html">Web III <small>Em desenvolvimento</small></a></nav>
<div class="ts-mobile-tools" hidden><button class="ts-menu-toggle" id="ts-menu-toggle" type="button" aria-controls="ts-topics-dialog" aria-expanded="false"><span aria-hidden="true">☰</span> Tópicos</button><span class="ts-current-topic" id="ts-current-topic">Comece aqui</span></div>
<dialog class="ts-topics-dialog" id="ts-topics-dialog" aria-labelledby="ts-dialog-title"><div class="ts-dialog-header"><h2 id="ts-dialog-title">Tópicos de TypeScript</h2><button class="ts-menu-close" id="ts-menu-close" type="button" aria-label="Fechar tópicos">×</button></div><div id="ts-dialog-menu"></div></dialog>
<div class="web-layout"><nav class="chapter-menu" id="ts-topic-menu" aria-label="Tópicos de TypeScript"><h2>TypeScript Essencial</h2><div class="typescript-menu-links">MENU</div><p class="web3-menu-note"><a href="web3-aula2.html#proxima-necessidade">Voltar ao Café Aurora</a></p></nav>
<main class="web-content" id="conteudo" tabindex="-1">PARTS</main></div>
<script src="../../js/web3-typescript.js?v=2"></script><script src="../../js/mbb-busca-global.js?v=mbb-busca-2"></script>
</body></html>
'''.replace('MENU',menu).replace('PARTS','\n'.join(parts))
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
