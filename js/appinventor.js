document.addEventListener("DOMContentLoaded",()=>{
  const navGroup=document.querySelector(".nav-exercises");
  const navToggle=document.querySelector(".nav-toggle");
  const navTree=document.querySelector(".nav-tree");
  const navLinks=[...document.querySelectorAll(".side-nav .nav-btn[href], .side-nav .nav-sub")];
  const mainLinks=[...document.querySelectorAll(".side-nav .nav-btn[href]")];
  const subLinks=[...document.querySelectorAll(".side-nav .nav-sub")];
  const sections=[...document.querySelectorAll("main section[id]")];
  const content=document.querySelector(".content");
  const scrollArea=content||document.documentElement;

  function isSmallScreen(){
    return window.matchMedia("(max-width: 900px)").matches;
  }

  function positionExercisesMenu(){
    if(!navToggle || !navTree || !isSmallScreen()) return;
    const rect=navToggle.getBoundingClientRect();
    const menuWidth=Math.min(240, window.innerWidth-24);
    const left=Math.min(Math.max(12, rect.left), window.innerWidth-menuWidth-12);
    const top=rect.bottom+8;
    navTree.style.setProperty("--submenu-left", left+"px");
    navTree.style.setProperty("--submenu-top", top+"px");
  }

  function openExercisesMenu(){
    if(!navGroup || !navToggle) return;
    navGroup.classList.add("open");
    navToggle.setAttribute("aria-expanded","true");
    positionExercisesMenu();
  }

  function closeExercisesMenu(){
    if(!navGroup || !navToggle) return;
    navGroup.classList.remove("open");
    navToggle.setAttribute("aria-expanded","false");
  }

  function toggleExercisesMenu(){
    if(!navGroup || !navToggle) return;
    const isOpen=navGroup.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if(isOpen) positionExercisesMenu();
  }

  function clearActive(){
    navLinks.forEach(link=>link.classList.remove("active"));
    if(navToggle) navToggle.classList.remove("active");
  }

  function activate(id){
    clearActive();
    navLinks.forEach(link=>{
      if(link.getAttribute("href")==="#"+id){
        link.classList.add("active");
      }
    });

    const target=document.getElementById(id);
    const parentSection=target?.closest("main section[id]");
    if(parentSection){
      mainLinks.forEach(link=>{
        if(link.getAttribute("href")==="#"+parentSection.id){
          link.classList.add("active");
        }
      });
      if(parentSection.id==="exercicios" && navToggle){
        navToggle.classList.add("active");
      }
    }
  }

  function getTopInsideContent(target){
    if(!content) return 0;
    let top=target.offsetTop;
    let node=target.offsetParent;
    while(node && node!==content){
      top+=node.offsetTop;
      node=node.offsetParent;
    }
    // Mantém o título da seção visível abaixo da barra superior
    // e evita que a navegação passe um pouco do ponto.
    const menuOffset=72;
    return Math.max(0, top-menuOffset);
  }

  function scrollToTarget(id){
    const target=document.getElementById(id);
    if(!target) return;

    if(content){
      content.scrollTo({top:getTopInsideContent(target), behavior:"auto"});
    }else{
      target.scrollIntoView({behavior:"auto", block:"start"});
    }
    activate(id);
  }

  if(navToggle){
    navToggle.addEventListener("click",event=>{
      event.preventDefault();
      toggleExercisesMenu();
      if(navToggle.classList.contains("active")) return;
      navToggle.classList.add("active");
    });
  }

  navLinks.forEach(link=>{
    link.addEventListener("click",event=>{
      const href=link.getAttribute("href")||"";
      if(!href.startsWith("#")) return;
      const id=href.slice(1);
      if(!id) return;
      event.preventDefault();
      if(link.classList.contains("nav-sub")){
        openExercisesMenu();
        scrollToTarget(id);
        history.replaceState(null,"","#"+id);
        if(isSmallScreen()) setTimeout(closeExercisesMenu,180);
      }else{
        closeExercisesMenu();
        scrollToTarget(id);
        history.replaceState(null,"","#"+id);
      }
    });
  });

  function setActive(){
    let current=sections[0]?.id;
    for(const section of sections){
      if(section.getBoundingClientRect().top<=120){
        current=section.id;
      }
    }

    for(const link of subLinks){
      const id=link.getAttribute("href")?.slice(1);
      const target=id ? document.getElementById(id) : null;
      if(target && target.getBoundingClientRect().top<=130){
        current=id;
      }
    }

    if(current) activate(current);
  }

  document.addEventListener("click",event=>{
    if(navGroup && navGroup.classList.contains("open") && !navGroup.contains(event.target)){
      if(isSmallScreen()) closeExercisesMenu();
    }
  });

  scrollArea.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",()=>{
    positionExercisesMenu();
    setActive();
  });

  const initialId=window.location.hash?.slice(1);
  if(initialId && document.getElementById(initialId)){
    if(initialId==="exercicios" || document.getElementById(initialId)?.closest("#exercicios")){
      openExercisesMenu();
    }
    setTimeout(()=>scrollToTarget(initialId),60);
  }else{
    setActive();
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
