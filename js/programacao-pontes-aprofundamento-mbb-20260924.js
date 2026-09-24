(() => {
  'use strict';

  if (typeof visualgSteps === 'undefined') return;

  const laboratorioVisuAlg = visualgSteps.find(step => step && /Cantina executável/i.test(step.menu || '')) || visualgSteps[0];
  if (laboratorioVisuAlg && typeof laboratorioVisuAlg.content === 'string' && !laboratorioVisuAlg.content.includes('href="visualg.html"')) {
    laboratorioVisuAlg.content += `
      <div class="task-box">
        <h4>Aprofunde em VisuAlg</h4>
        <p>Aqui o VisuAlg funciona como laboratório para transformar raciocínio em código, executar rapidamente e observar o resultado. Se quiser praticar a linguagem com mais exercícios, estruturas e desafios progressivos, continue no módulo específico.</p>
        <p><a href="visualg.html"><strong>Ir para o módulo VisuAlg →</strong></a></p>
      </div>`;
  }

  const transferenciaPython = visualgSteps.find(step => step && /A linguagem muda/i.test(step.menu || ''));
  if (transferenciaPython && typeof transferenciaPython.content === 'string') {
    transferenciaPython.title = 'A linguagem muda; o raciocínio permanece';
    transferenciaPython.objective = 'Reconhecer em Python as mesmas estruturas já aprendidas em VisuAlg, sem transformar este módulo em outro curso de Python.';
    transferenciaPython.content = `
      <div class="hero-box">
        <span class="part-badge">Transferir</span>
        <h3>Você não começa novamente do zero</h3>
        <p>Em VisuAlg, você trabalhou com dados, entrada, processamento, decisão, repetição e funções. Python escreve essas mesmas ideias de outra forma. Aqui, o objetivo não é decorar Python: é reconhecer o raciocínio que você já conhece.</p>
      </div>

      <div class="concept-box"><strong>Regra desta ponte:</strong> primeiro reconheça o que o programa faz; depois observe como cada linguagem escreve a mesma ideia.</div>

      <h3>1. Dados e saída</h3>
      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">total &lt;- 21.0
escreval("Total: R$ ", total)</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">total = 21.0
print("Total: R$", total)</pre>
        </div>
      </div>
      <p>Nas duas linguagens, um valor é associado a um nome e depois exibido. Mudam o símbolo de atribuição e o comando de saída.</p>

      <h3>2. Entrada e processamento</h3>
      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">escreva("Quantidade: ")
leia(quantidade)
total &lt;- quantidade * preco</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">quantidade = int(input("Quantidade: "))
total = quantidade * preco</pre>
        </div>
      </div>
      <p>O raciocínio continua sendo <strong>receber → transformar → guardar o resultado</strong>. Em Python, <span class="inline-code">input()</span> devolve texto; por isso o exemplo converte a quantidade com <span class="inline-code">int()</span> antes do cálculo.</p>

      <h3>3. Decisão</h3>
      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">se total &gt;= 50 entao
   escreval("Frete grátis")
senao
   escreval("Frete cobrado")
fimse</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">if total &gt;= 50:
    print("Frete grátis")
else:
    print("Frete cobrado")</pre>
        </div>
      </div>
      <p>Nas duas versões, uma condição escolhe entre dois caminhos. Python usa <span class="inline-code">if</span>, <span class="inline-code">else</span>, dois-pontos e indentação; VisuAlg marca o bloco com <span class="inline-code">se</span>, <span class="inline-code">senao</span> e <span class="inline-code">fimse</span>.</p>

      <h3>4. Repetição por condição</h3>
      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">enquanto continuar = "S" faca
   escreval("Novo atendimento")
   leia(continuar)
fimenquanto</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">while continuar == "S":
    print("Novo atendimento")
    continuar = input()</pre>
        </div>
      </div>
      <p>O princípio é o mesmo: testar uma condição antes de cada volta e repetir enquanto ela permanecer verdadeira. Observe apenas que, em Python, <span class="inline-code">=</span> atribui e <span class="inline-code">==</span> compara.</p>

      <h3>5. Função</h3>
      <div class="code-compare">
        <div>
          <h4>VisuAlg</h4>
          <pre class="command">funcao calcularDesconto(valor: real): real
inicio
   se valor &gt; 100 entao
      retorne valor * 0.10
   senao
      retorne 0
   fimse
fimfuncao</pre>
        </div>
        <div>
          <h4>Python</h4>
          <pre class="command">def calcular_desconto(valor):
    if valor &gt; 100:
        return valor * 0.10
    else:
        return 0</pre>
        </div>
      </div>
      <p>Nas duas linguagens, a função recebe um valor, executa uma responsabilidade definida e devolve um resultado. A sintaxe muda; a decomposição do problema permanece.</p>

      <div class="mini-grid">
        <div class="mini-card"><strong>O que mudou?</strong><br>Palavras da linguagem, sinais, pontuação, indentação e algumas regras de escrita.</div>
        <div class="mini-card"><strong>O que permaneceu?</strong><br>Dados, entrada, processamento, decisão, repetição, funções e o raciocínio usado para testar o programa.</div>
      </div>

      <div class="task-box">
        <h4>Confira se você está transferindo o raciocínio</h4>
        <p>Sem decorar Python, escolha uma das cinco comparações e explique com suas palavras o que o programa faz. Depois indique apenas o que mudou na forma de escrever. Se você consegue reconhecer a ideia antes de conhecer todos os comandos, a transferência aconteceu.</p>
      </div>

      <div class="task-box">
        <h4>Continue em Python</h4>
        <p>Nesta ponte, Python apareceu somente para mostrar ideias que você já conhece. No módulo Python, você prepara o ambiente, aprende a linguagem em profundidade e constrói projetos progressivamente.</p>
        <p><a href="python.html"><strong>Ir para o módulo Python →</strong></a></p>
      </div>`;
  }

  if (typeof stepGroups !== 'undefined') {
    stepGroups.visualg = visualgSteps;
  }

  if (typeof currentModule !== 'undefined' && currentModule === 'visualg') {
    if (typeof renderMenu === 'function') renderMenu();
    if (typeof renderStep === 'function') renderStep();
  }
})();