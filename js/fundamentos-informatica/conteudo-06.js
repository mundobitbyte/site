window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "hardware",
  number: "06",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Hardware",
  technicalTitle: "hardware • placa-mãe • CPU • núcleos • cache • RAM • armazenamento • GPU • barramentos • fonte",
  title: "Quem faz o quê dentro de um computador?",
  objective: "Reconhecer os principais componentes físicos de um computador e compreender a função de cada um dentro do sistema.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">Por baixo da tela</span>
      <h2>Um computador não possui uma única peça que “faz tudo”.</h2>
      <p>Quando você abre uma fotografia, o arquivo precisa ser lido, dados precisam ficar disponíveis, instruções são executadas e o resultado precisa chegar à tela. <strong>Componentes diferentes cooperam para que isso aconteça.</strong></p>
    </div>

    <div class="definition-box featured">
      <span class="term">Hardware</span>
      <p><strong>É o conjunto dos componentes físicos de um sistema computacional.</strong> Processador, memória RAM, SSD, placa-mãe, teclado e monitor são exemplos de hardware.</p>
    </div>

    <h3>Gabinete não é CPU</h3>
    <div class="two-col">
      <div class="definition-box">
        <span class="term">Gabinete</span>
        <p>É a estrutura que abriga e protege componentes como placa-mãe, processador, memória, armazenamento e fonte.</p>
      </div>
      <div class="definition-box">
        <span class="term">CPU</span>
        <p>A <strong>Unidade Central de Processamento</strong> é a unidade funcional responsável por buscar, interpretar e executar instruções.</p>
      </div>
    </div>
    <div class="note-box compact">
      <strong>Portanto:</strong>
      <p>Apontar para o gabinete e chamá-lo de “CPU” é um uso popular, mas tecnicamente incorreto.</p>
    </div>

    <h3>A placa-mãe: onde os componentes se conectam</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/960px-Computer_Motherboard_Closeup.jpg"
          srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/330px-Computer_Motherboard_Closeup.jpg 330w,
                  https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/960px-Computer_Motherboard_Closeup.jpg 960w,
                  https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Computer_Motherboard_Closeup.jpg/1280px-Computer_Motherboard_Closeup.jpg 1280w"
          sizes="(max-width:700px) 92vw, 520px"
          alt="Close de uma placa-mãe de computador mostrando chips e conectores"
          width="960" height="636" loading="lazy" decoding="async">
        <figcaption>
          <strong>Placa-mãe de computador.</strong> Ela fornece conexões e caminhos para que diferentes componentes trabalhem juntos.
          <span class="credit">Lenharth Systems · CC0 · Wikimedia Commons.</span>
        </figcaption>
      </figure>
      <div>
        <div class="definition-box">
          <span class="term">Placa-mãe</span>
          <p>É a principal placa de circuito do computador. Nela encontramos conexões para processador, RAM, armazenamento, placas de expansão, energia e interfaces externas.</p>
        </div>
        <p>A placa-mãe <strong>não é o “cérebro”</strong> do computador. Sua função central é interligar e dar suporte aos componentes do sistema.</p>
      </div>
    </div>

    <h3>CPU: executar instruções</h3>
    <p>O processador recebe instruções codificadas e realiza operações sobre dados. Em um modelo introdutório, podemos enxergar um ciclo:</p>
    <div class="concept-flow" aria-label="Ciclo básico da CPU">
      <div><strong>Buscar</strong><span>obter a próxima instrução</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>Decodificar</strong><span>identificar a operação</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>Executar</strong><span>realizar a operação</span></div>
    </div>
    <p>Processadores modernos são muito mais sofisticados que esse desenho, mas o ciclo ajuda a compreender sua função essencial.</p>

    <h3>GHz mede tudo?</h3>
    <p>A frequência de clock é medida em hertz. <strong>1 GHz corresponde a um bilhão de ciclos por segundo.</strong> Porém, comparar processadores apenas pelo número de GHz pode enganar: arquitetura, quantidade de trabalho realizada por ciclo, núcleos, cache, limites térmicos e o próprio software influenciam o desempenho.</p>

    <div class="two-col">
      <div class="definition-box">
        <span class="term">Núcleo — core</span>
        <p>É uma unidade de processamento capaz de executar instruções. Um processador moderno pode reunir vários núcleos.</p>
      </div>
      <div class="definition-box">
        <span class="term">Cache</span>
        <p>É uma memória pequena e muito rápida usada para manter dados e instruções próximos da CPU, reduzindo o tempo de espera.</p>
      </div>
    </div>
    <p>Ter mais núcleos pode permitir mais trabalho em paralelo, mas <strong>dobrar os núcleos não significa dobrar automaticamente a velocidade</strong>. O programa precisa conseguir aproveitar esse paralelismo.</p>

    <details class="sources-box">
      <summary>Aprofunde: núcleos, threads e níveis de cache</summary>
      <p>Uma <strong>thread</strong>, em software, é um fluxo de execução dentro de um processo. Alguns processadores permitem mais de um fluxo de hardware por núcleo, por técnicas como SMT. Por isso “8 núcleos / 16 threads” não significa 16 núcleos físicos.</p>
      <p>Caches costumam ser organizados em níveis como <strong>L1, L2 e L3</strong>. Em geral, os níveis mais próximos do núcleo são menores e mais rápidos; a organização exata depende da arquitetura.</p>
    </details>

    <h3>RAM e armazenamento: dois trabalhos diferentes</h3>
    <div class="comparison-grid">
      <article>
        <strong>RAM</strong>
        <p>Mantém temporariamente programas e dados em uso. A RAM principal convencional é volátil: perde seu conteúdo quando deixa de receber energia.</p>
      </article>
      <article>
        <strong>SSD / HDD</strong>
        <p>Preservam sistema operacional, programas e arquivos mesmo depois que o equipamento é desligado.</p>
      </article>
    </div>
    <div class="mbb-pause-question">
      <strong>“Meu computador tem 16 GB.”</strong>
      <p>A frase está incompleta. São 16 GB de RAM? de armazenamento? de memória de vídeo? <strong>A unidade pode ser a mesma, mas o recurso medido é diferente.</strong></p>
    </div>

    <h3>GPU: processamento fortemente paralelo</h3>
    <div class="definition-box">
      <span class="term">GPU — Graphics Processing Unit</span>
      <p>É uma unidade de processamento especializada em grande quantidade de operações paralelas. Tornou-se fundamental para gráficos e também pode ser usada em vídeo, computação científica e inteligência artificial.</p>
    </div>
    <p><strong>GPU e placa de vídeo não são exatamente a mesma coisa.</strong> A GPU é o processador gráfico; uma placa de vídeo dedicada reúne GPU, memória de vídeo, alimentação, refrigeração e interfaces. Também existem GPUs integradas, sem uma placa dedicada separada.</p>

    <h3>Como os componentes trocam dados?</h3>
    <div class="two-col">
      <div class="definition-box">
        <span class="term">Barramento / interconexão</span>
        <p>É o conjunto de caminhos e mecanismos usados para transportar dados e sinais entre partes do sistema. Computadores modernos utilizam várias interconexões, muitas delas ponto a ponto.</p>
      </div>
      <div class="definition-box">
        <span class="term">PCI Express — PCIe</span>
        <p>É uma interface de alta velocidade usada para conectar dispositivos como placas de vídeo, adaptadores de rede e SSDs NVMe.</p>
      </div>
    </div>

    <h3>Energia e calor também fazem parte do sistema</h3>
    <div class="comparison-grid">
      <article>
        <strong>Fonte de alimentação — PSU</strong>
        <p>Converte e fornece energia elétrica nas condições necessárias aos componentes. Sua potência nominal representa capacidade de fornecimento, não consumo constante.</p>
      </article>
      <article>
        <strong>Refrigeração</strong>
        <p>Dissipadores, ventoinhas e outros sistemas removem calor para manter componentes dentro de faixas adequadas de temperatura.</p>
      </article>
    </div>

    <h3>Uma fotografia aberta no computador</h3>
    <div class="representation-flow" aria-label="Fluxo simplificado ao abrir uma fotografia">
      <div><strong>SSD</strong><span>arquivo permanece armazenado</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>RAM</strong><span>dados ficam disponíveis para uso</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>CPU / GPU</strong><span>instruções e processamento</span></div>
      <span class="flow-arrow">→</span>
      <div><strong>Tela</strong><span>resultado</span></div>
    </div>
    <p>O fluxo real possui muitas operações simultâneas. O objetivo é perceber que <strong>o resultado depende da cooperação entre componentes</strong>.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span>
      <h3>Você separa função de aparência?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Gabinete abriga componentes; CPU é a unidade funcional de processamento.">
        <p>Qual afirmação é tecnicamente correta?</p>
        <label><input type="radio" name="q6a" value="a"> O gabinete é a CPU.</label>
        <label><input type="radio" name="q6a" value="b"> A CPU é uma unidade de processamento; o gabinete abriga vários componentes.</label>
        <label><input type="radio" name="q6a" value="c"> A placa-mãe é sempre a CPU.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Clock é apenas um dos fatores; arquiteturas diferentes podem realizar quantidades diferentes de trabalho.">
        <p>Um processador de 5 GHz é necessariamente mais rápido que um de 4 GHz em qualquer tarefa?</p>
        <label><input type="radio" name="q6b" value="a"> Sim, sempre.</label>
        <label><input type="radio" name="q6b" value="b"> Sim, desde que tenham a mesma quantidade de RAM.</label>
        <label><input type="radio" name="q6b" value="c"> Não. O desempenho depende de vários fatores além do clock.</label>
      </div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="A RAM mantém temporariamente dados em uso; SSD/HDD preservam dados de forma não volátil.">
        <p>Qual comparação está correta?</p>
        <label><input type="radio" name="q6c" value="a"> RAM é memória de trabalho; SSD/HDD são armazenamento persistente.</label>
        <label><input type="radio" name="q6c" value="b"> SSD é um tipo de núcleo da CPU.</label>
        <label><input type="radio" name="q6c" value="c"> RAM e SSD são o mesmo recurso com nomes diferentes.</label>
      </div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button>
      <div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence">
      <strong>Essência</strong>
      <p><strong>Hardware</strong> é a parte física. CPU executa instruções; cache mantém dados muito próximos do processamento; RAM mantém dados e programas em uso; SSD/HDD preservam arquivos; GPU realiza processamento fortemente paralelo; placa-mãe interliga componentes; fonte fornece energia. <strong>O computador funciona como sistema, não como uma peça isolada.</strong></p>
    </div>

    <div class="bridge-box">
      <strong>Próxima pergunta</strong>
      <p>Se cache, RAM e SSD conseguem guardar dados, por que o computador precisa dos três?</p>
    </div>

    <details class="sources-box">
      <summary>Fontes e crédito da imagem</summary>
      <ul>
        <li><a href="https://csrc.nist.gov/glossary/term/hardware" target="_blank" rel="noopener">NIST — Hardware</a></li>
        <li><a href="https://www.ibm.com/br-pt/think/topics/hardware" target="_blank" rel="noopener">IBM — Hardware de computador</a></li>
        <li><a href="https://www.ibm.com/think/topics/central-processing-unit" target="_blank" rel="noopener">IBM — CPU</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Computer_Motherboard_Closeup.jpg" target="_blank" rel="noopener">Wikimedia Commons — placa-mãe</a></li>
      </ul>
    </details>
  `
});
