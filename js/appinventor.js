document.addEventListener("DOMContentLoaded",()=>{
  const layout=document.getElementById("appInventorLayout");
  const content=document.querySelector(".content");
  const moduleButtons=[...document.querySelectorAll(".module-btn[data-module]")];
  const stageLinks=[...document.querySelectorAll(".stage-menu .nav-btn[data-module][href]")];
  const stageToggle=document.getElementById("stageToggle");
  const stageClose=document.getElementById("stageClose");
  const stageBackdrop=document.getElementById("stageBackdrop");
  let activeModule="fundamentos";

  function isSmallScreen(){
    return window.matchMedia("(max-width: 900px)").matches;
  }

  function openDrawer(){
    if(!layout || !isSmallScreen()) return;
    layout.classList.add("drawer-open");
    stageToggle?.setAttribute("aria-expanded","true");
    if(stageBackdrop) stageBackdrop.hidden=false;
  }

  function closeDrawer(){
    layout?.classList.remove("drawer-open");
    stageToggle?.setAttribute("aria-expanded","false");
    if(stageBackdrop) stageBackdrop.hidden=true;
  }

  function setModule(module, scrollToFirst=false){
    const button=moduleButtons.find(btn=>btn.dataset.module===module && !btn.disabled);
    if(!button) return;
    activeModule=module;

    moduleButtons.forEach(btn=>btn.classList.toggle("active",btn===button));
    stageLinks.forEach(link=>{
      const visible=link.dataset.module===module;
      link.hidden=!visible;
      if(!visible) link.classList.remove("active");
    });

    const visibleLinks=stageLinks.filter(link=>!link.hidden);
    if(!visibleLinks.some(link=>link.classList.contains("active"))){
      visibleLinks[0]?.classList.add("active");
    }

    if(scrollToFirst){
      const target=button.dataset.target || visibleLinks[0]?.getAttribute("href");
      if(target) scrollToTarget(target.slice(1),false);
    }
  }

  function activateLink(id){
    const visibleLinks=stageLinks.filter(link=>!link.hidden);
    visibleLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+id));
  }

  function scrollToTarget(id, updateHistory=true){
    const target=document.getElementById(id);
    if(!target) return;

    // A própria .content é o contêiner de rolagem. O navegador faz o
    // posicionamento de forma uniforme para sections e articles, respeitando
    // o scroll-padding definido no CSS. Assim não dependemos de offsetTop,
    // coordenadas do body ou da altura do menu horizontal.
    target.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"});

    activateLink(id);
    if(updateHistory) history.replaceState(null,"","#"+id);
  }

  moduleButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(btn.disabled) return;
      setModule(btn.dataset.module,true);
      closeDrawer();
    });
  });

  stageLinks.forEach(link=>{
    link.addEventListener("click",event=>{
      const href=link.getAttribute("href")||"";
      if(!href.startsWith("#")) return;
      event.preventDefault();
      const module=link.dataset.module;
      if(module && module!==activeModule) setModule(module,false);
      scrollToTarget(href.slice(1),true);
      if(isSmallScreen()) closeDrawer();
    });
  });

  stageToggle?.addEventListener("click",()=>{
    if(layout?.classList.contains("drawer-open")) closeDrawer();
    else openDrawer();
  });
  stageClose?.addEventListener("click",closeDrawer);
  stageBackdrop?.addEventListener("click",closeDrawer);

  function updateActiveFromScroll(){
    const visibleLinks=stageLinks.filter(link=>!link.hidden);
    let current=visibleLinks[0]?.getAttribute("href")?.slice(1);
    for(const link of visibleLinks){
      const id=link.getAttribute("href")?.slice(1);
      const target=id ? document.getElementById(id) : null;
      if(target && target.getBoundingClientRect().top<=140) current=id;
    }
    if(current) activateLink(current);
  }

  content?.addEventListener("scroll",updateActiveFromScroll,{passive:true});
  window.addEventListener("resize",()=>{
    if(!isSmallScreen()) closeDrawer();
    updateActiveFromScroll();
  });

  const initialId=location.hash?.slice(1);
  if(initialId && document.getElementById(initialId)){
    const exactLink=stageLinks.find(link=>link.getAttribute("href")==="#"+initialId);
    if(exactLink){
      setModule(exactLink.dataset.module,false);
    }else{
      setModule("fundamentos",false);
    }
    setTimeout(()=>scrollToTarget(initialId,false),50);
  }else{
    setModule("fundamentos",false);
    updateActiveFromScroll();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".exercise-tab");
  const details = document.querySelectorAll(".exercise-detail");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.remove("active"));
      details.forEach(d => d.classList.remove("active"));
      tab.classList.add("active");
      const panel = document.getElementById(target);
      if (panel) panel.classList.add("active");
    });
  });
});

// Exercícios de APIs: navegação independente dos exercícios de Interface.
document.addEventListener("DOMContentLoaded",()=>{
  const tabs=[...document.querySelectorAll(".api-exercise-tab[data-api-target]")];
  const details=[...document.querySelectorAll(".api-exercise-detail")];
  tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
      const id=tab.dataset.apiTarget;
      tabs.forEach(item=>{
        const active=item===tab;
        item.classList.toggle("active",active);
        item.setAttribute("aria-selected",active ? "true" : "false");
      });
      details.forEach(detail=>detail.classList.toggle("active",detail.id===id));
    });
  });
});

// Padrão MbB — Etapas 1 e 2: Fundamentos, Interface, execução e Lógica em Blocos.
// Destaca somente a ação que o aluno precisa executar; conteúdo conceitual, blocos e imagens permanecem intactos.
document.addEventListener("DOMContentLoaded",()=>{
  const STYLE_ID="mbb-appinventor-acoes-praticas-style";
  const ACTION_RE=/\b(Não\s+(?:feche|execute|altere|apague|use)|Escolha|Selecione|Altere|Ajuste|Arraste|Renomeie|Insira|Abra|Procure|Toque|Aguarde|Clique|Leia|Aponte|Preencha|Verifique|Observe|Prepare|Realize|Confirme|Teste|Volte|Troque|Personalize|Faça|Acrescente|Adicione|Explique|Peça|Anote|Tente|Centralize|Mantenha|Conecte|Diga|Digite|Retorne|Reinicie|Compare|Monte|Programe|Crie)\b/i;

  if(!document.getElementById(STYLE_ID)){
    const style=document.createElement("style");
    style.id=STYLE_ID;
    style.textContent="#appInventorLayout .mbb-appinventor-action-key{font-weight:800!important;color:#123b73}";
    document.head.appendChild(style);
  }

  function emphasizeFirstAction(root){
    if(!root || root.querySelector?.(".mbb-appinventor-action-key")) return;

    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node=walker.nextNode();

    while(node){
      const parent=node.parentElement;
      if(!parent || parent.closest("strong,b,code,pre,script,style,button,kbd,samp")){
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
        strong.className="mbb-appinventor-action-key";
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
    "#fundamentos .activity-box p",
    "#interface .howto li",
    "#execucao .howto li",
    "#execucao .properties li",
    "#blocos .howto li",
    "#blocos .properties li",
    "#blocos .challenge",
    "#blocos .activity-box li",
    "#exercicio-lampada .howto li",
    "#exercicio-lampada .properties li",
    "#exercicio-lampada .challenge",
    "#exercicio-lampada .activity-box li",
    "#exercicio-login .howto li",
    "#exercicio-login .properties li",
    "#exercicio-login .challenge",
    "#exercicio-login .activity-box li",
    "#exercicio-imc .howto li",
    "#exercicio-imc .properties li",
    "#exercicio-imc .challenge",
    "#exercicio-imc .activity-box li",
    "#exercicio-adivinhacao .howto li",
    "#exercicio-adivinhacao .properties li",
    "#exercicio-adivinhacao .challenge",
    "#exercicio-adivinhacao .activity-box li"
  ].join(",")).forEach(emphasizeFirstAction);
});
