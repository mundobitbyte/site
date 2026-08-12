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
