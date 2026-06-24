document.addEventListener("DOMContentLoaded",()=>{
  const navLinks=[...document.querySelectorAll(".side-nav .nav-btn, .side-nav .nav-sub")];
  const mainLinks=[...document.querySelectorAll(".side-nav .nav-btn")];
  const subLinks=[...document.querySelectorAll(".side-nav .nav-sub")];
  const sections=[...document.querySelectorAll("main section[id]")];
  const content=document.querySelector(".content");
  const scrollArea=content||document.documentElement;

  function clearActive(){
    navLinks.forEach(link=>link.classList.remove("active"));
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
    }
  }

  function scrollToTarget(id){
    const target=document.getElementById(id);
    if(!target) return;

    if(content){
      const areaRect=content.getBoundingClientRect();
      const targetRect=target.getBoundingClientRect();
      const top=content.scrollTop + (targetRect.top - areaRect.top) - 10;
      content.scrollTo({top, behavior:"smooth"});
    }else{
      target.scrollIntoView({behavior:"smooth", block:"start"});
    }
    activate(id);
  }

  navLinks.forEach(link=>{
    link.addEventListener("click",event=>{
      const href=link.getAttribute("href")||"";
      if(!href.startsWith("#")) return;
      const id=href.slice(1);
      if(!id) return;
      event.preventDefault();
      scrollToTarget(id);
      history.replaceState(null,"","#"+id);
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

  scrollArea.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",setActive);

  const initialId=window.location.hash?.slice(1);
  if(initialId && document.getElementById(initialId)){
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
