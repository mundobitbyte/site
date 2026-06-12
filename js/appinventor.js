document.addEventListener("DOMContentLoaded",()=>{const links=document.querySelectorAll(".nav-btn");const sections=[...document.querySelectorAll("main section[id]")];function setActive(){let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<=120)current=s.id}links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current))}document.addEventListener("scroll",setActive,{passive:true});setActive();});
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
