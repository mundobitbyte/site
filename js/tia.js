document.addEventListener("DOMContentLoaded",()=>{
  const erpSection=document.querySelector("#erp");
  const scmSection=document.querySelector("#scm");
  const sideNav=document.querySelector(".side-nav");

  if(erpSection && scmSection && !document.querySelector("#controle-versoes")){
    const section=document.createElement("section");
    section.id="controle-versoes";
    section.className="section-card";
    section.innerHTML=`
      <div class="section-head">
        <span class="badge">7.1</span>
        <div>
          <h2>Controle de versões em documentos administrativos</h2>
          <p>Use tecnologia para manter histórico, rastreabilidade e recuperação de mudanças em um processo real de compras.</p>
        </div>
      </div>
      <div class="example-box">
        <h3>Do processo integrado ao controle das regras</h3>
        <p>
          Um ERP pode integrar compras, estoque e financeiro e, dependendo da solução, também registrar aprovações, usuários, datas e alterações realizadas dentro do próprio sistema.
          Mas a organização também trabalha com documentos que descrevem como os processos devem funcionar: procedimentos, instruções, normas e manuais.
        </p>
        <p>
          Quando uma regra de compras muda, o documento que a descreve também pode precisar de revisão. Nesse caso, é importante identificar
          <strong>o que mudou, quando mudou, quem registrou a alteração e qual era a versão anterior</strong>.
        </p>
        <p>
          Na atividade a seguir, você vai controlar as versões de um <strong>Procedimento de Solicitação de Compras</strong> com Git e GitHub,
          observando na prática como funciona o versionamento de um documento — sem programação.
        </p>
      </div>
      <div class="notice">
        <strong>Importante:</strong>
        na prática profissional, um ERP, um sistema de gestão documental ou outra plataforma corporativa pode oferecer recursos próprios de histórico,
        aprovação, permissões e controle de documentos. O Git será usado aqui para tornar visíveis as alterações entre versões e permitir recuperar estados anteriores.
      </div>
      <div class="activity-box">
        <h3>Antes da atividade: confirme o Git</h3>
        <p>Abra o Prompt de Comando e execute:</p>
        <pre>git --version</pre>
        <p>Se aparecer o número da versão do Git, está correto.</p>
        <p>Se for a primeira vez que você usa Git nesse computador, configure seu nome e o e-mail que identifica seus registros:</p>
        <pre>git config --global user.name "SEU NOME"
git config --global user.email "SEU EMAIL"</pre>
        <p>Confira:</p>
        <pre>git config --global user.name
git config --global user.email</pre>
        <p>Se o comando <strong>git</strong> não for reconhecido, use somente a etapa de instalação do módulo <a href="git.html">Git e GitHub</a> e depois volte para cá.</p>
      </div>
      <div class="example-box">
        <h3>Procedimento de Solicitação de Compras</h3>
        <p>Você acompanhará o mesmo documento enquanto regras de cotação, aprovação e prazo são alteradas, registradas, comparadas e recuperadas.</p>
        <a class="call-link" href="tia-controle-versoes.html">Abrir prática guiada →</a>
      </div>
      <div class="notice">
        <strong>Próximo assunto:</strong>
        depois de controlar as regras de solicitação, cotação e aprovação, avance para a gestão de fornecedores, materiais, estoques e entregas na cadeia de suprimentos.
      </div>`;
    erpSection.insertAdjacentElement("afterend",section);
  }

  if(sideNav && !sideNav.querySelector('a[href="#controle-versoes"]')){
    const erpLink=sideNav.querySelector('a[href="#erp"]');
    if(erpLink){
      const link=document.createElement("a");
      link.className="nav-btn";
      link.href="#controle-versoes";
      link.textContent="7.1 - Controle de versões";
      erpLink.insertAdjacentElement("afterend",link);
    }
  }

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

  const headerLeft=document.querySelector(".header-left");
  const portalLink=headerLeft?.querySelector(".portal-link");
  if(headerLeft && portalLink && !document.querySelector(".tia-pdf-header")){
    const button=document.createElement("a");
    button.className="portal-link tia-pdf-header";
    button.href="../assets/pdf/TIA_Material_de_Apoio_Versao_Anterior.pdf?v=20260912-2";
    button.download="TIA_Material_de_Apoio_Versao_Anterior.pdf";
    button.setAttribute("aria-label","Baixar PDF de apoio da versão anterior do módulo TIA");
    button.title="Material complementar para revisão, estudo em casa e atividades";
    button.textContent="PDF de apoio";
    portalLink.insertAdjacentElement("afterend",button);
  }

  scroller.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",setActive,{passive:true});
  setActive();
});

document.addEventListener("DOMContentLoaded",()=>{
  const STYLE_ID="mbb-tia-acoes-praticas-style";
  const ACTION_CLASS="mbb-tia-action-key";
  const ACTION_RE=/\b(Não\s+(?:confie|ignore|pergunte|recomende|use)|Analise|Anote|Aplique|Avalie|Calcule|Classifique|Cite|Compare|Complete|Considere|Defina|Descreva|Diferencie|Discuta|Entenda|Escolha|Estime|Explique|Faça|Identifique|Indique|Justifique|Liste|Observe|Organize|Pergunte|Pesquise|Proponha|Recomende|Registre|Relacione|Responda|Selecione|Simule|Teste|Use|Verifique)\b/i;

  if(!document.getElementById(STYLE_ID)){
    const style=document.createElement("style");
    style.id=STYLE_ID;
    style.textContent=`main .${ACTION_CLASS}{font-weight:800!important;color:#123b73}`;
    document.head.appendChild(style);
  }

  function destacarPrimeiraAcao(root){
    if(!root || root.querySelector?.(`.${ACTION_CLASS}`)) return;

    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node=walker.nextNode();

    while(node){
      const parent=node.parentElement;
      if(!parent || parent.closest("strong,b,code,pre,script,style,button,kbd,samp,a")){
        node=walker.nextNode();
        continue;
      }

      const text=node.nodeValue||"";
      const match=text.match(ACTION_RE);
      if(match && typeof match.index==="number"){
        const before=text.slice(0,match.index);
        const action=match[0];
        const after=text.slice(match.index+action.length);
        const fragment=document.createDocumentFragment();

        if(before) fragment.appendChild(document.createTextNode(before));
        const strong=document.createElement("strong");
        strong.className=ACTION_CLASS;
        strong.textContent=action;
        fragment.appendChild(strong);
        if(after) fragment.appendChild(document.createTextNode(after));

        node.replaceWith(fragment);
        return;
      }

      node=walker.nextNode();
    }
  }

  document.querySelectorAll([
    "main .section-head > div > p",
    "main .activity-box > p",
    "main .activity-box li",
    "main .notice",
    "main .system-grid.compact article p",
    "main #exercicios p",
    "main #exercicios li"
  ].join(",")).forEach(destacarPrimeiraAcao);
});
