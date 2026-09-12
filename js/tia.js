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
