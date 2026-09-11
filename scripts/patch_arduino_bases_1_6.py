from pathlib import Path

PATH = Path('pages/arduino.html')
text = PATH.read_text(encoding='utf-8')

if 'id="fund-plataforma-aberta"' in text:
    print('Fundamentos complementares já aplicados; nenhuma alteração necessária.')
    raise SystemExit(0)

marker1 = '<div class="concept-strip">'
if text.count(marker1) != 1:
    raise SystemExit(f'Marcador 1 inesperado: encontrado {text.count(marker1)} vez(es).')

insert1 = '''<section class="section-card" id="fund-plataforma-aberta">
<h2>Da placa ao protótipo: entendendo o ecossistema Arduino</h2>
<p>
Até aqui, usamos a palavra <strong>Arduino</strong> para falar da plataforma inteira. Mas, quando o programa começa a executar, uma pergunta importante aparece: <strong>qual parte da placa realmente lê as instruções e controla os pinos?</strong>
</p>
<img alt="Diagrama da placa Arduino Uno R3 destacando o microcontrolador ATmega328P, a interface USB, a alimentação e os pinos" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/placa-microcontrolador.svg"/>
<div class="journey-grid">
<article class="journey-card wide">
<h3>Microcontrolador e placa de desenvolvimento não são a mesma coisa</h3>
<p><strong>Microcontrolador</strong> é o chip programável que executa o código e controla entradas e saídas. No Arduino Uno R3, o ATmega328P é o microcontrolador principal.</p>
<p>A <strong>placa de desenvolvimento</strong> reúne esse chip com outros recursos que facilitam o uso: conexão USB, alimentação, regulador, pinos e componentes de apoio. Por isso, dizer “o Arduino executa o programa” é uma forma prática de falar; tecnicamente, quem executa as instruções é o microcontrolador da placa.</p>
</article>
<article class="journey-card">
<h3>Movimento maker</h3>
<p>O movimento maker valoriza aprender criando: identificar uma necessidade, construir um protótipo, testar e compartilhar soluções. Em Arduino, isso aparece quando uma ideia deixa o papel e passa a controlar algo físico.</p>
</article>
<article class="journey-card">
<h3>Tinkering</h3>
<p>Tinkering é explorar pela prática: montar, observar, alterar e testar novamente. O objetivo não é “mexer sem pensar”, mas usar cada tentativa como evidência para compreender e melhorar o protótipo.</p>
</article>
<article class="journey-card wide">
<h3>Hardware e software open source</h3>
<p>Parte importante do ecossistema Arduino cresceu com <strong>hardware documentado de forma aberta</strong> e <strong>software de código aberto</strong>. Isso favorece estudar esquemas, criar placas compatíveis, examinar exemplos e reutilizar bibliotecas.</p>
<p><strong>Atenção:</strong> estar no ecossistema Arduino não torna automaticamente toda placa, módulo ou biblioteca “open source”. Cada projeto pode ter sua própria licença e documentação.</p>
</article>
</div>
<img alt="Ciclo maker e tinkering: necessidade, montar, testar, observar, modificar e testar novamente" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/ciclo-maker-tinkering.svg"/>
<p>
Nos projetos seguintes, esse ciclo será intencional: <strong>entender → montar → testar → observar → modificar → testar novamente</strong>. Uma tentativa que não funciona como esperado também produz informação útil quando você investiga a causa.
</p>
</section>
'''
text = text.replace(marker1, insert1 + marker1, 1)

marker2 = '<h3>Primeiros passos no Tinkercad</h3>'
if text.count(marker2) != 1:
    raise SystemExit(f'Marcador 2 inesperado: encontrado {text.count(marker2)} vez(es).')

insert2 = '''<h3>Outros componentes que você precisa reconhecer</h3>
<p>
LEDs, resistores e botões aparecem cedo porque tornam o comportamento do circuito fácil de observar. Mas protótipos eletrônicos também utilizam outros componentes. Neste momento, o objetivo é <strong>reconhecer a função geral</strong> de cada um — sem transformar o início do curso em eletrônica avançada.
</p>
<img alt="Quadro didático com capacitor, indutor, circuito integrado, placa, módulo, shield e kit" class="hero-image fundamentos-img" decoding="async" loading="lazy" src="../img/arduino/fundamentos/componentes-prototipacao.svg"/>
<div class="journey-grid">
<article class="journey-card"><h3>Capacitor</h3><p>Pode armazenar carga elétrica temporariamente. Em circuitos reais, aparece em funções como filtragem, estabilização e temporização. Alguns capacitores possuem polaridade e exigem atenção na montagem.</p></article>
<article class="journey-card"><h3>Indutor</h3><p>Armazena energia em um campo magnético quando a corrente passa por ele. É comum em fontes, filtros e circuitos que trabalham com conversão de energia.</p></article>
<article class="journey-card"><h3>Circuito integrado</h3><p>É um chip que reúne muitos componentes eletrônicos em uma única peça. O próprio microcontrolador é um tipo de circuito integrado especializado em executar programas.</p></article>
<article class="journey-card wide"><h3>Placa, módulo, shield e kit</h3><p><strong>Placa</strong> é uma base eletrônica completa, como o Arduino Uno. <strong>Módulo</strong> é um circuito pronto para uma função específica, como um sensor ou interface de comunicação. <strong>Shield</strong> é uma placa projetada para encaixar sobre outra placa compatível e acrescentar recursos. <strong>Kit</strong> reúne vários componentes para experimentação e prototipação.</p></article>
</div>
<div class="closing-panel">
<h3>O nível de profundidade agora</h3>
<p>Você não precisa calcular o comportamento interno de capacitores e indutores neste momento. O importante é reconhecer os componentes, saber que possuem funções diferentes e consultar a ligação correta antes de usá-los em um protótipo.</p>
</div>
<h3>Simulador e IDE não são a mesma ferramenta</h3>
<div class="io-boxes">
<div><strong>Simulador</strong><span>permite montar, programar e testar um circuito virtual antes ou mesmo sem possuir todos os componentes físicos.</span></div>
<div><strong>IDE</strong><span>é o ambiente usado para escrever, verificar/compilar e enviar o programa para uma placa física compatível.</span></div>
</div>
<p>Nos primeiros projetos, o <strong>Tinkercad</strong> ajuda a visualizar e testar circuitos. Quando trabalharmos com a placa física, a <strong>Arduino IDE</strong> fará a ponte entre o código escrito no computador e o microcontrolador. No projeto Blink, esse caminho será organizado passo a passo.</p>
'''
text = text.replace(marker2, insert2 + marker2, 1)

PATH.write_text(text, encoding='utf-8')
print('Complementação MbB dos Fundamentos aplicada com sucesso.')
