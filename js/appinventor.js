document.addEventListener("DOMContentLoaded",()=>{
  const links=[...document.querySelectorAll(".side-nav .nav-btn")];
  const sections=[...document.querySelectorAll("main section[id]")];
  const scrollArea=document.querySelector(".content")||document;

  function activate(id){
    links.forEach(link=>{
      link.classList.toggle("active",link.getAttribute("href")==="#"+id);
    });
  }

  function setActive(){
    let current=sections[0]?.id;
    for(const section of sections){
      if(section.getBoundingClientRect().top<=120){
        current=section.id;
      }
    }
    if(current) activate(current);
  }

  links.forEach(link=>{
    link.addEventListener("click",()=>{
      const id=link.getAttribute("href")?.replace("#","");
      if(id) activate(id);
    });
  });

  scrollArea.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",setActive);
  setActive();
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
