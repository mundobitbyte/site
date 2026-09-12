document.addEventListener("DOMContentLoaded",()=>{
  const links=document.querySelectorAll(".nav-btn");
  const sections=[...document.querySelectorAll("main section[id]")];
  const scroller=document.querySelector(".content") || document;

  function setActive(){
    let current=sections[0]?.id;
    for(const section of sections){
      const top=section.getBoundingClientRect().top;
      if(top<=130) current=section.id;
    }
    links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
  }

  scroller.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",setActive,{passive:true});
  setActive();

  /* ============================================================
     REFORMA TIA — CAMADA DE PENSAMENTO ADMINISTRATIVO
     Mantém integralmente o conteúdo original do HTML e acrescenta
     decisões, limites, riscos, custos, critérios e casos ambíguos.
     ============================================================ */

  function appendLayer(sectionId, html){
    const section=document.getElementById(sectionId);
    if(!section || section.dataset.decisionLayerAdded==="1") return;
    section.insertAdjacentHTML("beforeend", html);
    section.dataset.decisionLayerAdded="1";
  }

  /* Corrige duas corrupções literais já existentes na Introdução sem
     regravar o HTML original da main. */
  const introNotice=document.querySelector("#inicio .notice");
  if(introNotice && (introNotice.textContent.includes("deo888cisão") || introNotice.textContent.includes("99    Mais"))){
    introNotice.innerHTML=`<strong>Fechamento:</strong>
      Mais do que utilizar computadores e sistemas, o objetivo da Tecnologia da Informação é transformar informações
      em apoio para a gestão e a tomada de decisão. Nos próximos capítulos, você compreenderá como dados,
      informações e conhecimento se relacionam e por que são tão importantes para o ambiente empresarial.`;
  }

  appendLayer("inicio", `
    <div class="highlight">
      <strong>Nova pergunta que acompanhará todo o módulo:</strong>
      uma tecnologia pode funcionar perfeitamente e ainda assim ser uma decisão ruim para determinada empresa.
      Por isso, além de perguntar <em>“o que essa ferramenta faz?”</em>, pergunte também
      <em>“qual problema ela resolve, quanto custa, que riscos cria e como saberemos se valeu a pena?”</em>.
    </div>

    <div class="activity-box">
      <h3>Pense como administrador</h3>
      <p>
        Uma pequena empresa usa planilhas e um sistema financeiro simples. Um fornecedor oferece um pacote completo
        de gestão, afirmando que a empresa “precisa se modernizar”. Antes de recomendar a compra, responda:
      </p>
      <ol>
        <li>Que problema concreto precisa ser resolvido?</li>
        <li>Como o problema é resolvido hoje?</li>
        <li>Que resultado melhor justificaria a mudança?</li>
        <li>Existe alternativa mais simples?</li>
        <li>Que custos e dificuldades a implantação pode criar?</li>
      </ol>
    </div>
  `);

  appendLayer("dados", `
    <div class="highlight">
      <strong>Cuidado com conclusões rápidas:</strong>
      dado correto não significa conclusão correta. Se uma caneta foi o produto mais vendido em um único dia,
      ainda não sabemos se isso representa tendência, promoção, sazonalidade ou uma compra excepcional.
    </div>

    <div class="activity-box">
      <h3>Que informação está faltando?</h3>
      <p>
        Uma loja vendeu 40 canetas, 25 cadernos e 15 borrachas ontem. O gerente quer aumentar imediatamente
        o estoque de canetas em 50%.
      </p>
      <ol>
        <li>Os dados disponíveis são suficientes para essa decisão?</li>
        <li>Que histórico você pediria?</li>
        <li>Preço, margem, estoque atual e prazo do fornecedor poderiam mudar a decisão? Como?</li>
      </ol>
    </div>
  `);

  appendLayer("decisao", `
    <div class="example-box">
      <h3>Um roteiro simples para decidir melhor</h3>
      <div class="flow-line">
        <span>Definir o problema</span><b>→</b><span>Levantar informações</span><b>→</b><span>Criar alternativas</span><b>→</b><span>Comparar critérios</span><b>→</b><span>Decidir</span><b>→</b><span>Acompanhar o resultado</span>
      </div>
      <p>
        Informação reduz incerteza, mas não elimina risco. Decisões administrativas também envolvem prazo,
        recursos, pessoas, consequências e aquilo que ainda não sabemos.
      </p>
    </div>

    <div class="activity-box">
      <h3>Quando a tecnologia pode ser a resposta errada</h3>
      <p>
        Uma loja teve queda de 15% nas vendas e pretende comprar um CRM. A empresa ainda não investigou preço,
        concorrência, atendimento, estoque, localização nem mudança no perfil dos clientes.
      </p>
      <ol>
        <li>Comprar o CRM agora é uma decisão bem fundamentada?</li>
        <li>Que hipóteses precisam ser verificadas antes?</li>
        <li>Que teste de baixo custo poderia ser feito primeiro?</li>
      </ol>
    </div>
  `);

  appendLayer("sistemas", `
    <div class="highlight">
      <strong>Sistema não conserta automaticamente processo ruim:</strong>
      se funcionários não registram movimentações, cadastros são feitos de maneira inconsistente ou cada setor trabalha
      com uma regra diferente, trocar o software pode apenas transferir o problema para uma ferramenta nova.
    </div>

    <div class="activity-box">
      <h3>Diagnóstico antes da troca</h3>
      <p>
        O relatório de estoque está errado. A direção quer trocar o sistema. Depois de observar a rotina,
        você descobre que produtos saem do depósito sem registro.
      </p>
      <ol>
        <li>O problema principal é tecnológico?</li>
        <li>Que mudança de processo deveria ocorrer?</li>
        <li>Quando uma troca de sistema passaria a fazer sentido?</li>
      </ol>
    </div>
  `);

  appendLayer("spt", `
    <div class="highlight">
      <strong>Qualidade na origem:</strong>
      o SPT pode registrar milhares de transações com velocidade, mas um código de produto errado,
      uma quantidade digitada incorretamente ou um cadastro duplicado pode contaminar relatórios posteriores.
    </div>

    <div class="activity-box">
      <h3>Automatizar ou controlar?</h3>
      <p>
        Um supermercado registra automaticamente as vendas, mas possui cadastros duplicados para o mesmo produto.
      </p>
      <ol>
        <li>O sistema está processando as transações?</li>
        <li>Por que os relatórios podem continuar errados?</li>
        <li>Que controle administrativo deve acompanhar a automação?</li>
      </ol>
    </div>
  `);

  appendLayer("sig", `
    <div class="highlight">
      <strong>Indicador também pode enganar:</strong>
      medir apenas quantidade de atendimentos pode estimular rapidez e piorar a qualidade. Um relatório gerencial
      só é útil quando os indicadores representam o que a empresa realmente precisa acompanhar.
    </div>

    <div class="activity-box">
      <h3>Escolha do indicador</h3>
      <p>Um setor de atendimento quer medir desempenho.</p>
      <ol>
        <li>Número de atendimentos, sozinho, é suficiente?</li>
        <li>Tempo de espera, solução no primeiro contato e satisfação poderiam complementar a análise?</li>
        <li>Que comportamento indesejado um indicador mal escolhido pode incentivar?</li>
      </ol>
    </div>
  `);

  appendLayer("sad-sae", `
    <div class="highlight">
      <strong>Simulação não é previsão garantida:</strong>
      SAD e SAE podem organizar cenários e indicadores, mas os resultados dependem das premissas utilizadas.
      Uma estimativa otimista demais pode produzir uma conclusão sofisticada e ainda assim ruim.
    </div>

    <div class="activity-box">
      <h3>Questione a premissa</h3>
      <p>
        Um sistema indica que uma nova filial será lucrativa se vender 1.500 unidades por mês.
        A pesquisa de mercado utilizada na estimativa foi pequena.
      </p>
      <ol>
        <li>Qual premissa precisa ser validada com mais cuidado?</li>
        <li>Que cenário mais conservador deveria ser simulado?</li>
        <li>Quem assume a responsabilidade pela decisão final?</li>
      </ol>
    </div>
  `);

  appendLayer("erp", `
    <div class="example-box">
      <h3>O custo real de um ERP</h3>
      <p>
        O preço da licença ou mensalidade é apenas parte do custo. Uma implantação pode exigir levantamento de processos,
        configuração, migração e limpeza de dados, treinamento, integração com outros sistemas, suporte, tempo da equipe
        e queda temporária de produtividade durante a transição.
      </p>
    </div>

    <div class="highlight">
      <strong>Dilema de implantação:</strong>
      adaptar o processo da empresa ao ERP ou customizar o ERP para reproduzir o processo antigo?
      Padronizar pode simplificar a operação, mas nem todo processo deve ser descartado. Customizar demais pode aumentar
      custo, dependência do fornecedor e dificuldade de atualização.
    </div>

    <div class="activity-box">
      <h3>ERP: investimento ou exagero?</h3>
      <p>
        Uma empresa com 12 funcionários usa planilhas e um sistema financeiro de R$ 300 mensais.
        Recebe uma proposta de ERP de R$ 80 mil por ano. Os controles atuais apresentam poucos erros,
        mas o proprietário quer “ter o mesmo sistema das empresas grandes”.
      </p>
      <ol>
        <li>O ERP é necessariamente uma boa decisão?</li>
        <li>Que problemas concretos deveriam justificar o investimento?</li>
        <li>Que custos de implantação e treinamento precisam ser considerados?</li>
        <li>Uma solução intermediária poderia ser suficiente?</li>
        <li>Como medir se o investimento deu resultado?</li>
      </ol>
    </div>
  `);

  appendLayer("scm", `
    <div class="two-col">
      <div class="text-panel">
        <h3>Estoque maior</h3>
        <p>Pode reduzir falta de produtos, mas aumenta capital parado, espaço, perdas e risco de obsolescência.</p>
      </div>
      <div class="text-panel blue">
        <h3>Estoque menor</h3>
        <p>Pode reduzir custos, mas aumenta dependência da pontualidade de fornecedores e o risco de ruptura.</p>
      </div>
    </div>

    <div class="activity-box">
      <h3>Fornecedor barato pode custar mais</h3>
      <p>
        O fornecedor A cobra 8% menos, mas atrasa com frequência. O fornecedor B é mais caro,
        porém entrega no prazo e apresenta menos defeitos.
      </p>
      <ol>
        <li>Qual é realmente o fornecedor de menor custo total?</li>
        <li>Que custos de atraso deveriam entrar na análise?</li>
        <li>Dividir compras entre fornecedores reduziria risco? Que custo isso poderia criar?</li>
      </ol>
    </div>
  `);

  appendLayer("crm", `
    <div class="highlight">
      <strong>Conhecer o cliente não significa coletar tudo sobre ele:</strong>
      dados desnecessários aumentam responsabilidade, risco e complexidade. A empresa deve ter finalidade clara,
      manter dados corretos, controlar o acesso e respeitar as regras aplicáveis de privacidade e proteção de dados.
    </div>

    <div class="activity-box">
      <h3>Cliente recorrente é cliente satisfeito?</h3>
      <p>
        Um cliente compra todos os meses porque a empresa é a única fornecedora próxima. O CRM o classifica como “cliente fiel”.
      </p>
      <ol>
        <li>A frequência de compra prova satisfação?</li>
        <li>Que outros indicadores deveriam ser observados?</li>
        <li>Como dados antigos ou mal interpretados podem piorar o atendimento?</li>
        <li>Quando personalização pode virar invasão?</li>
      </ol>
    </div>
  `);

  appendLayer("banco", `
    <div class="highlight">
      <strong>Banco de dados não é apenas armazenamento:</strong>
      dados incorretos, duplicados ou desatualizados prejudicam ERP, CRM, BI e IA. Além disso,
      cada pessoa deveria acessar somente as informações necessárias ao seu trabalho.
    </div>

    <div class="activity-box">
      <h3>Quem precisa acessar?</h3>
      <p>
        Uma empresa mantém dados de clientes, salários e informações comerciais em um mesmo ambiente,
        com acesso completo para todos os funcionários.
      </p>
      <ol>
        <li>Que riscos existem?</li>
        <li>Todos precisam do mesmo nível de acesso?</li>
        <li>Por que backup não substitui controle de acesso?</li>
        <li>Como dados ruins afetam decisões mesmo quando o software funciona corretamente?</li>
      </ol>
    </div>
  `);

  appendLayer("bi", `
    <div class="highlight">
      <strong>Dashboard bonito não garante análise boa:</strong>
      um gráfico pode esconder variações importantes, uma média pode mascarar problemas e dois indicadores podem variar juntos
      sem que um seja causa do outro. O BI deve começar pela pergunta administrativa, não pelo efeito visual.
    </div>

    <div class="activity-box">
      <h3>Faturamento subiu: a empresa melhorou?</h3>
      <p>
        O painel mostra aumento de 20% no faturamento. No mesmo período, a margem caiu, as devoluções aumentaram
        e a campanha de marketing custou mais que o previsto.
      </p>
      <ol>
        <li>É correto concluir que o desempenho melhorou?</li>
        <li>Que indicadores precisam ser analisados em conjunto?</li>
        <li>Que pergunta o painel deveria responder?</li>
      </ol>
    </div>
  `);

  appendLayer("ecommerce", `
    <div class="activity-box">
      <h3>Marketplace ou loja própria?</h3>
      <p>
        Um marketplace oferece público pronto e facilidade de entrada, mas cobra taxas e controla parte da relação com o cliente.
        Uma loja própria oferece maior controle, porém exige investimento em divulgação, operação e tecnologia.
      </p>
      <ol>
        <li>Qual alternativa reduz a barreira inicial?</li>
        <li>Qual oferece maior controle sobre dados e relacionamento?</li>
        <li>Que custos existem além da mensalidade?</li>
        <li>Uma estratégia combinada poderia ser melhor?</li>
      </ol>
    </div>

    <div class="highlight">
      <strong>Venda online não elimina operação:</strong>
      estoque, atendimento, pagamento, entrega, devolução e pós-venda continuam existindo e podem se tornar mais complexos.
    </div>
  `);

  appendLayer("apps", `
    <div class="activity-box">
      <h3>Mais ferramentas ou mais organização?</h3>
      <p>
        Uma confeitaria recebe cerca de 25 pedidos por semana e deseja contratar ferramentas separadas para CRM,
        automação, pedidos, marketing e BI. Hoje usa mensageria, planilha e sistema financeiro simples.
      </p>
      <ol>
        <li>Que problemas concretos justificam adicionar cada ferramenta?</li>
        <li>Que custo de aprendizagem e integração precisa ser considerado?</li>
        <li>Qual é a solução mínima capaz de atender bem a operação atual?</li>
      </ol>
    </div>

    <div class="notice">
      <strong>Critérios antes de contratar:</strong>
      necessidade real, facilidade de uso, integração, custo total, segurança, suporte e capacidade da equipe de utilizar a solução.
    </div>
  `);

  appendLayer("transacoes", `
    <div class="highlight">
      <strong>Vender mais não significa necessariamente ganhar mais:</strong>
      meios de pagamento afetam taxas, prazo de recebimento, risco de fraude, contestação, inadimplência e fluxo de caixa.
    </div>

    <div class="activity-box">
      <h3>Parcelar mais para vender mais?</h3>
      <p>
        Uma loja aumentou o faturamento após ampliar o parcelamento. Ao mesmo tempo, cresceram as taxas financeiras
        e o prazo médio de recebimento.
      </p>
      <ol>
        <li>Que indicadores precisam ser comparados?</li>
        <li>Como o fluxo de caixa pode ser afetado?</li>
        <li>Em que situação uma condição de pagamento deixa de ser vantajosa?</li>
      </ol>
    </div>
  `);

  appendLayer("ia", `
    <div class="example-box">
      <h3>IA generativa não é fonte automática de verdade</h3>
      <p>
        Sistemas generativos produzem respostas a partir de padrões e podem apresentar fatos incorretos,
        referências inexistentes, números inventados ou conclusões convincentes sem evidência suficiente.
        Em decisões importantes, o conteúdo precisa ser verificado em documentos, dados confiáveis e fontes adequadas.
      </p>
    </div>

    <div class="example-box">
      <h3>O problema do “AI slop”</h3>
      <p>
        “AI slop” é uma expressão informal usada para conteúdo produzido em grande volume com IA e pouca revisão,
        pouco critério ou pouco valor real. No trabalho administrativo isso pode aparecer como relatórios genéricos,
        e-mails vazios, apresentações repetitivas, análises sem dados e documentos que parecem profissionais,
        mas não ajudam ninguém a compreender ou decidir melhor.
      </p>
      <p>
        O problema não é simplesmente usar IA. O problema é tratar velocidade, quantidade e aparência como substitutos
        de precisão, contexto, utilidade e responsabilidade.
      </p>
    </div>

    <div class="two-col">
      <div class="text-panel blue">
        <h3>Uso responsável</h3>
        <ul>
          <li>definir a tarefa e o objetivo;</li>
          <li>fornecer contexto adequado;</li>
          <li>verificar fatos, números e fontes;</li>
          <li>revisar linguagem e conclusão;</li>
          <li>proteger informações confidenciais;</li>
          <li>manter responsabilidade humana.</li>
        </ul>
      </div>
      <div class="text-panel">
        <h3>Riscos</h3>
        <ul>
          <li>erros e alucinações;</li>
          <li>viés nos dados ou resultados;</li>
          <li>exposição de informações;</li>
          <li>automação inadequada;</li>
          <li>conteúdo genérico e sem evidência;</li>
          <li>dependência sem capacidade de revisão.</li>
        </ul>
      </div>
    </div>

    <div class="activity-box">
      <h3>Dilema 1 - IA na seleção de currículos</h3>
      <p>
        Uma empresa usa IA para classificar currículos e reduz 70% do tempo de triagem. Depois percebe indícios de que
        o sistema favorece determinados perfis porque aprendeu com contratações anteriores.
      </p>
      <ol>
        <li>A economia de tempo basta para justificar o uso?</li>
        <li>Que tipo de verificação deve ocorrer?</li>
        <li>Quem continua responsável pela decisão?</li>
        <li>Em que situação o uso deveria ser limitado ou suspenso?</li>
      </ol>
    </div>

    <div class="activity-box">
      <h3>Dilema 2 - O relatório que parece saber tudo</h3>
      <p>
        Um funcionário pede à IA uma análise sobre queda de vendas. Em segundos recebe um relatório elegante com causas
        e recomendações, mas a ferramenta não teve acesso aos dados de vendas, preços, estoque, concorrência ou clientes.
      </p>
      <ol>
        <li>O texto pode ser tratado como análise real da empresa?</li>
        <li>Quais afirmações são apenas hipóteses?</li>
        <li>Que dados faltam para chegar a uma conclusão?</li>
        <li>Como evitar transformar rapidez em “AI slop”?</li>
      </ol>
    </div>

    <div class="highlight">
      <strong>Privacidade:</strong>
      informações confidenciais de clientes, funcionários ou da própria empresa não devem ser inseridas em qualquer ferramenta de IA
      sem conhecer como o serviço trata os dados e sem respeitar as políticas e regras aplicáveis à organização.
    </div>

    <div class="example-box">
      <h3>Roteiro antes de usar IA em uma tarefa importante</h3>
      <div class="flow-line">
        <span>Definir a tarefa</span><b>→</b><span>Avaliar os dados</span><b>→</b><span>Usar a IA</span><b>→</b><span>Verificar</span><b>→</b><span>Revisar</span><b>→</b><span>Assumir a decisão</span>
      </div>
    </div>
  `);

  appendLayer("fechamento", `
    <div class="example-box">
      <h3>O roteiro que fica para qualquer tecnologia</h3>
      <div class="concept-grid">
        <article><h3>1. Problema</h3><p>Qual necessidade real precisa ser resolvida?</p></article>
        <article><h3>2. Informação</h3><p>Que dados confiáveis existem e o que ainda falta?</p></article>
        <article><h3>3. Alternativas</h3><p>Existe uma solução mais simples ou barata?</p></article>
        <article><h3>4. Impacto</h3><p>Como pessoas, clientes e processos serão afetados?</p></article>
        <article><h3>5. Custo e risco</h3><p>Qual é o custo total e o que pode dar errado?</p></article>
        <article><h3>6. Resultado</h3><p>Como saberemos se a decisão realmente melhorou a empresa?</p></article>
      </div>
    </div>

    <div class="highlight">
      <strong>Competência do Técnico em Administração:</strong>
      ele não precisa desenvolver um ERP, programar um banco de dados ou construir uma IA para participar de decisões tecnológicas.
      Precisa compreender processos, levantar necessidades, organizar informações, comparar alternativas, acompanhar implantação
      e avaliar resultados.
    </div>
  `);

  appendLayer("exercicios", `
    <div class="activity-box">
      <h3>Exercício 11 - ERP de R$ 80 mil</h3>
      <p>
        Uma empresa pequena quer contratar um ERP caro principalmente porque o concorrente utiliza a mesma marca.
      </p>
      <ol>
        <li>Essa justificativa é suficiente?</li>
        <li>Que necessidades, custos e riscos deveriam ser levantados?</li>
        <li>Quando permanecer com uma solução mais simples seria uma decisão defensável?</li>
      </ol>
    </div>

    <div class="activity-box">
      <h3>Exercício 12 - Cliente “fiel”</h3>
      <p>
        Um CRM identifica clientes que compram todos os meses e os classifica automaticamente como muito satisfeitos.
      </p>
      <ol>
        <li>Que erro de interpretação pode existir?</li>
        <li>Que outras informações deveriam ser analisadas?</li>
        <li>Que decisão errada poderia surgir desse indicador?</li>
      </ol>
    </div>

    <div class="activity-box">
      <h3>Exercício 13 - Dashboard otimista</h3>
      <p>O faturamento subiu 20%, mas a margem caiu e as devoluções aumentaram.</p>
      <ol>
        <li>A empresa teve necessariamente melhora de desempenho?</li>
        <li>Que indicadores precisam ser analisados juntos?</li>
        <li>Que conclusão você defenderia e o que ainda precisaria investigar?</li>
      </ol>
    </div>

    <div class="activity-box">
      <h3>Exercício 14 - IA e currículos</h3>
      <p>Uma IA economiza tempo na triagem, mas apresenta indícios de favorecer certos perfis.</p>
      <ol>
        <li>Quais benefícios e riscos existem?</li>
        <li>Que controles humanos são necessários?</li>
        <li>Em que condição você suspenderia a ferramenta?</li>
        <li>Quem responde pela decisão final?</li>
      </ol>
    </div>

    <div class="activity-box">
      <h3>Exercício 15 - Relatório com aparência profissional</h3>
      <p>
        Uma IA produz um relatório longo e convincente sem ter recebido dados suficientes sobre a empresa.
      </p>
      <ol>
        <li>Que sinais indicam conteúdo genérico?</li>
        <li>Que afirmações precisam ser verificadas?</li>
        <li>Que dados faltam para transformar o texto em análise real?</li>
        <li>Como evitar “AI slop” em trabalhos administrativos?</li>
      </ol>
    </div>

    <div class="activity-box">
      <h3>Exercício 16 - Recomendação ao gestor</h3>
      <p>
        Escolha uma empresa real ou fictícia e identifique um problema administrativo que poderia envolver tecnologia.
      </p>
      <ol>
        <li>Defina o problema sem citar inicialmente uma ferramenta.</li>
        <li>Liste as informações necessárias para compreender a situação.</li>
        <li>Apresente pelo menos duas alternativas, incluindo uma opção simples.</li>
        <li>Compare custo, benefício, risco, implantação e impacto nas pessoas.</li>
        <li>Faça uma recomendação e justifique.</li>
        <li>Explique que resultado seria acompanhado para saber se a decisão funcionou.</li>
      </ol>
    </div>

    <div class="notice">
      <strong>Novo princípio dos exercícios:</strong>
      respostas maduras não começam pelo nome da tecnologia. Começam pelo problema, pelas informações disponíveis,
      pelas alternativas e pelos critérios de decisão.
    </div>
  `);
});
