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

  if(!document.querySelector(".tia-pdf-floating")){
    const style=document.createElement("style");
    style.textContent=`
      .tia-pdf-floating{
        position:fixed;
        right:20px;
        bottom:20px;
        z-index:1000;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:8px;
        padding:12px 16px;
        border-radius:999px;
        background:#0b4da2;
        color:#fff;
        text-decoration:none;
        font-weight:900;
        font-size:14px;
        line-height:1;
        border:2px solid #fff;
        box-shadow:0 8px 22px rgba(16,32,51,.28);
        transition:transform .15s ease,filter .15s ease;
      }
      .tia-pdf-floating:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .tia-pdf-floating:focus-visible{outline:3px solid #f59e0b;outline-offset:3px}
      @media(max-width:720px){
        .tia-pdf-floating{
          right:10px;
          bottom:10px;
          max-width:calc(100vw - 20px);
          padding:10px 13px;
          font-size:12px;
          box-shadow:0 6px 18px rgba(16,32,51,.26);
        }
      }
    `;
    document.head.appendChild(style);

    const button=document.createElement("a");
    button.className="tia-pdf-floating";
    button.href="../assets/pdf/TIA_Material_de_Apoio_Versao_Anterior.pdf";
    button.download="TIA_Material_de_Apoio_Versao_Anterior.pdf";
    button.setAttribute("aria-label","Baixar PDF de apoio da versão anterior do módulo TIA");
    button.title="Material complementar para revisão, estudo em casa e atividades";
    button.textContent="Baixar PDF de apoio";
    document.body.appendChild(button);
  }

  scroller.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",setActive,{passive:true});
  setActive();
});
