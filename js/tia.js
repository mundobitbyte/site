document.addEventListener("DOMContentLoaded",()=>{
  // Cirurgia MbB — integra o tópico 7.1 ao percurso já aprovado do TIA.
  // O conteúdo principal continua intacto: ERP → controle de versões → SCM.
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
        <h3>Depois de integrar processos, surge outra necessidade</h3>
        <p>
          Um ERP pode integrar compras, estoque e financeiro, mas os próprios procedimentos administrativos também mudam com o tempo.
          Se uma regra de compras for alterada, a organização precisa saber <strong>o que mudou, quando mudou e qual era a versão anterior</strong>.
        </p>
        <p>
          Na prática a seguir, você vai controlar as versões de um <strong>Procedimento de Solicitação de Compras</strong>, usando Git e GitHub
          apenas como ferramentas de gestão do histórico — sem programação.
        </p>
        <a class="call-link" href="tia-controle-versoes.html">Abrir prática guiada →</a>
      </div>
      <div class="notice">
        <strong>Conexão com o próximo assunto:</strong>
        ao controlar as regras de solicitação, cotação e aprovação de compras, você prepara o terreno para estudar como fornecedores,
        materiais, estoques e entregas se relacionam na gestão da cadeia de suprimentos.
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

// Padrão MbB — destaques de ações do módulo Tecnologia e Gestão (TIA).
// Destaca somente a primeira ação executável em orientações e atividades; o conteúdo permanece intacto.
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
