window.fundamentosInformaticaLessons = Array.isArray(window.fundamentosInformaticaLessons)
  ? window.fundamentosInformaticaLessons
  : [];

window.fundamentosInformaticaLessons.push({
  id: "sistema-operacional",
  number: "09",
  unit: "Ato 2 · Como funciona",
  menuTitle: "Sistema Operacional",
  technicalTitle: "SO • kernel • processos • escalonamento • memória • usuários • permissões • sistema de arquivos • GUI • CLI • firmware • UEFI • boot",
  title: "Quem organiza os programas e o hardware?",
  objective: "Compreender o sistema operacional como gerente de recursos, distinguindo kernel, processos, usuários, arquivos, interfaces e a sequência de inicialização.",
  content: `
    <div class="hero-box story-opening">
      <span class="eyebrow">O gerente do sistema</span>
      <h2>Chrome, música, cópia de arquivos, Wi-Fi e antivírus podem trabalhar ao mesmo tempo.</h2>
      <p>Todos disputam CPU, RAM, armazenamento e dispositivos. <strong>O sistema operacional organiza esse compartilhamento e oferece serviços comuns aos programas.</strong></p>
    </div>

    <div class="definition-box featured"><span class="term">Sistema Operacional — SO</span><p><strong>É o conjunto de software fundamental que administra recursos do computador e fornece serviços e interfaces para programas e usuários.</strong></p></div>
    <p>Windows, Linux, macOS, Android e iOS resolvem problemas semelhantes, embora utilizem arquiteturas, ferramentas e interfaces diferentes.</p>

    <h3>O SO não é apenas a área de trabalho</h3>
    <div class="comparison-grid four">
      <article><strong>CPU</strong><p>distribui tempo de processamento entre tarefas.</p></article>
      <article><strong>Memória</strong><p>organiza e protege espaços usados pelos processos.</p></article>
      <article><strong>Arquivos</strong><p>organiza dados em sistemas de arquivos e controla acesso.</p></article>
      <article><strong>Dispositivos</strong><p>coordena entrada/saída por meio de drivers e serviços.</p></article>
    </div>
    <p>Menus, ícones e janelas são apenas a parte visível de uma infraestrutura muito maior.</p>

    <h3>Kernel: o núcleo</h3>
    <div class="definition-box"><span class="term">Kernel</span><p>É a parte central do sistema operacional responsável por controlar recursos fundamentais e intermediar operações como processos, memória, dispositivos e entrada/saída.</p></div>
    <div class="note-box compact"><strong>Linux: uma precisão útil</strong><p>Tecnicamente, <strong>Linux é o kernel</strong>. Distribuições como Ubuntu, Debian e Fedora combinam esse kernel com bibliotecas, utilitários e outros softwares. No uso cotidiano, “Linux” também é usado para a família completa de sistemas.</p></div>

    <h3>Processos e escalonamento</h3>
    <div class="two-col">
      <div class="definition-box"><span class="term">Processo</span><p>É uma instância de programa em execução, com memória, estado e recursos associados.</p></div>
      <div class="definition-box"><span class="term">Escalonador — scheduler</span><p>É o mecanismo que decide quais tarefas receberão tempo de CPU e em que momento.</p></div>
    </div>
    <p>Num único núcleo, o sistema pode alternar rapidamente entre tarefas. Com vários núcleos, algumas tarefas podem realmente executar em paralelo. <strong>Multitarefa não cria recursos infinitos.</strong></p>

    <h3>Memória precisa ser protegida</h3>
    <p>Seria perigoso permitir que qualquer programa escrevesse em qualquer região da RAM. O SO, com apoio do hardware, organiza espaços de endereçamento e permissões para reduzir interferências entre processos. A memória virtual estudada na Aula 07 faz parte desse gerenciamento.</p>

    <h3>Entrar no sistema e poder alterar tudo são perguntas diferentes</h3>
    <div class="hero-box">
      <span class="eyebrow">Situação</span>
      <p>Um aluno entra no sistema escolar com sua própria conta. O sistema reconhece a identidade apresentada e permite consultar suas informações. Mas, se ele tentar alterar a nota de outro aluno, a operação deve ser recusada. <strong>Reconhecer quem entrou e decidir o que essa pessoa pode fazer são dois problemas diferentes.</strong></p>
    </div>
    <div class="comparison-grid"><article><strong>Autenticação</strong><p>Responde: <em>quem é você?</em> Pode usar senha, biometria, token ou outros fatores.</p></article><article><strong>Autorização</strong><p>Responde: <em>o que você pode fazer?</em> Estar autenticado não significa poder alterar qualquer recurso.</p></article></div>
    <div class="note-box compact"><strong>Menor privilégio</strong><p>Uma conta ou programa deve possuir apenas as permissões necessárias para realizar sua função. Privilégios administrativos ampliam o impacto de erros e ataques.</p></div>

    <h3>Arquivos e sistema de arquivos</h3>
    <div class="definition-box"><span class="term">Sistema de arquivos</span><p>É a estrutura usada para organizar, identificar e controlar arquivos e diretórios em um dispositivo de armazenamento.</p></div>
    <p>NTFS, exFAT, ext4 e APFS são exemplos. <strong>O SSD fornece armazenamento físico; o sistema de arquivos fornece organização lógica.</strong></p>

    <h3>GUI e CLI</h3>
    <div class="comparison-grid"><article><strong>GUI — interface gráfica</strong><p>Usa janelas, ícones, menus, botões e outros elementos visuais.</p></article><article><strong>CLI — linha de comando</strong><p>Permite solicitar operações digitando comandos. É muito usada em administração, automação, programação e diagnóstico.</p></article></div>
    <p>Não existe uma vencedora universal. <strong>A interface adequada depende da tarefa.</strong></p>

    <h3>Mas quem começa antes do sistema operacional?</h3>
    <div class="media-text">
      <figure class="historical-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/InsydeH2O_UEFI_security_screenshot.jpg/960px-InsydeH2O_UEFI_security_screenshot.jpg"
          srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/InsydeH2O_UEFI_security_screenshot.jpg/330px-InsydeH2O_UEFI_security_screenshot.jpg 330w, https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/InsydeH2O_UEFI_security_screenshot.jpg/960px-InsydeH2O_UEFI_security_screenshot.jpg 960w"
          sizes="(max-width:700px) 92vw, 520px" alt="Tela de configuração de uma implementação de firmware compatível com UEFI" width="960" height="539" loading="lazy" decoding="async">
        <figcaption><strong>Tela de configuração do firmware de um PC moderno.</strong> Ela aparece antes de Windows, Linux ou outro sistema operacional ser carregado.<span class="credit">Captura por VulcanSphere; software InsydeH2O, Insyde Software · screenshot classificado no Wikimedia Commons como livre por inelegibilidade a copyright.</span></figcaption>
      </figure>
      <div>
        <p>Ao pressionar o botão de ligar, o sistema operacional ainda não está executando. Primeiro, o <strong>firmware da plataforma</strong> inicializa recursos básicos e prepara o ambiente de boot.</p>
        <div class="definition-box"><span class="term">UEFI</span><p><strong>UEFI é uma especificação que define uma interface padronizada entre o firmware da plataforma e o sistema operacional ou seu carregador.</strong> Ela inclui estruturas e serviços usados no ambiente de pré-inicialização.</p></div>
      </div>
    </div>
    <div class="note-box compact"><strong>UEFI não é simplesmente outro nome para “firmware”.</strong><p>O computador executa uma implementação de firmware que pode ser compatível com a especificação UEFI. No cotidiano, expressões como “entrar na UEFI” ou “entrar na BIOS” costumam se referir à tela de configuração desse firmware.</p></div>
    <p>PCs antigos utilizavam principalmente a BIOS tradicional. Em computadores modernos, implementações compatíveis com UEFI substituíram amplamente esse modelo.</p>

    <h3>Boot — a sequência de inicialização</h3>
    <p>Em muitos sistemas, o firmware localiza uma opção de inicialização e transfere o controle a software que conduz ao carregamento do sistema operacional. O desenho abaixo é uma simplificação útil, não uma exigência de que toda plataforma possua exatamente as mesmas etapas separadas.</p>
    <div class="representation-flow" aria-label="Inicialização simplificada">
      <div><strong>Firmware da plataforma</strong><span>inicializa recursos e oferece ambiente de boot</span></div><span class="flow-arrow">→</span>
      <div><strong>Gerenciador / bootloader</strong><span>conduz o carregamento</span></div><span class="flow-arrow">→</span>
      <div><strong>Kernel</strong><span>assume recursos fundamentais</span></div><span class="flow-arrow">→</span>
      <div><strong>Serviços / interface</strong><span>sistema fica utilizável</span></div>
    </div>
    <div class="definition-box compact"><span class="term">Bootloader</span><p>É um programa responsável por iniciar o carregamento de um sistema operacional. GRUB é um exemplo conhecido no ecossistema Linux.</p></div>

    <h3>Nem tudo que executa possui uma janela</h3>
    <div class="definition-box"><span class="term">Serviço</span><p>É um processo que executa funções em segundo plano, como rede, impressão, atualizações, sincronização ou outras tarefas do sistema. Em sistemas Unix/Linux também aparece o termo <em>daemon</em>.</p></div>

    <h3>A camada comum entre programas e hardware</h3>
    <div class="concept-flow"><div><strong>Aplicativos</strong><span>pedem serviços</span></div><span class="flow-arrow">→</span><div><strong>Sistema Operacional</strong><span>administra e protege</span></div><span class="flow-arrow">→</span><div><strong>Hardware</strong><span>executa operações físicas</span></div></div>
    <p>Em sistemas embarcados muito simples, um programa pode controlar hardware diretamente. Em um PC moderno, o SO fornece uma base comum para que muitos programas convivam de forma organizada.</p>

    <section class="checkpoint compact-check" data-quiz-group>
      <span class="eyebrow">Verificação rápida</span><h3>O que existe por baixo da interface?</h3>
      <div class="quiz-item" data-quiz-question data-answer="b" data-explanation="Kernel é a parte central que administra recursos fundamentais do sistema operacional."><p>O que é kernel?</p><label><input type="radio" name="q9a" value="a"> Apenas a interface gráfica do sistema.</label><label><input type="radio" name="q9a" value="b"> A parte central do SO ligada à administração de recursos fundamentais.</label><label><input type="radio" name="q9a" value="c"> Um tipo de SSD.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="c" data-explanation="Autenticação verifica identidade; autorização determina ações permitidas."><p>O aluno conseguiu entrar no sistema, mas não pode alterar notas de colegas. Qual distinção explica isso?</p><label><input type="radio" name="q9b" value="a"> Autorização descobre sua senha.</label><label><input type="radio" name="q9b" value="b"> Autenticação e autorização são sinônimos.</label><label><input type="radio" name="q9b" value="c"> Autenticação verifica quem é; autorização determina o que pode fazer.</label></div>
      <div class="quiz-item" data-quiz-question data-answer="a" data-explanation="UEFI é uma especificação de interface; o equipamento executa uma implementação de firmware compatível com ela."><p>Qual frase é mais precisa?</p><label><input type="radio" name="q9c" value="a"> UEFI define uma interface entre firmware e software de inicialização/SO.</label><label><input type="radio" name="q9c" value="b"> UEFI é o próprio Windows antes de abrir.</label><label><input type="radio" name="q9c" value="c"> UEFI é um tipo de memória RAM.</label></div>
      <button class="action-button primary" type="button" data-check-quiz>Conferir</button><div class="quiz-result" data-quiz-result aria-live="polite"></div>
    </section>

    <div class="essence"><strong>Essência</strong><p>O sistema operacional administra <strong>processos, memória, arquivos, dispositivos, usuários e rede</strong>. O kernel é seu núcleo central. Antes dele, o firmware da plataforma prepara a máquina; em PCs modernos, a especificação UEFI padroniza parte importante da interface de boot entre firmware e software. Depois o carregamento do SO conduz ao kernel, serviços e interface.</p></div>
    <div class="bridge-box"><strong>Próxima pergunta</strong><p>Se o sistema operacional organiza arquivos, como nomes, caminhos, extensões, permissões e comandos se relacionam na prática?</p></div>

    <details class="sources-box"><summary>Fontes e crédito da imagem</summary><ul>
      <li><a href="https://www.ibm.com/br-pt/think/topics/operating-systems" target="_blank" rel="noopener">IBM — Sistema Operacional</a></li>
      <li><a href="https://www.ibm.com/br-pt/think/topics/linux-kernel" target="_blank" rel="noopener">IBM — Kernel Linux</a></li>
      <li><a href="https://uefi.org/faq" target="_blank" rel="noopener">UEFI Forum — o que é UEFI</a></li>
      <li><a href="https://uefi.org/specsandtesttools" target="_blank" rel="noopener">UEFI Forum — especificações e ferramentas</a></li>
      <li><a href="https://commons.wikimedia.org/wiki/File:InsydeH2O_UEFI_security_screenshot.jpg" target="_blank" rel="noopener">Wikimedia Commons — tela de configuração UEFI</a></li>
    </ul></details>
  `
});
