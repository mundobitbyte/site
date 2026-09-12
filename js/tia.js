document.addEventListener("DOMContentLoaded",()=>{
  const links=document.querySelectorAll(".nav-btn");
  const sections=[...document.querySelectorAll("main section[id]")];
  const scroller=document.querySelector(".content") || document;

  const LEGACY_TIA_URL="https://raw.githubusercontent.com/mundobitbyte/site/442bffb3e3430dbb6a96d742bf54ac394a26bf30/pages/tia.html";

  function setActive(){
    let current=sections[0]?.id;
    for(const section of sections){
      const top=section.getBoundingClientRect().top;
      if(top<=130) current=section.id;
    }
    links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
  }

  function cleanText(value){
    return value
      .replace(/\s+/g," ")
      .replace(/[“”]/g,'"')
      .replace(/[‘’]/g,"'")
      .replace(/[–—]/g,"-")
      .replace(/→/g,"->")
      .trim();
  }

  function extractLegacyBlocks(html){
    const doc=new DOMParser().parseFromString(html,"text/html");
    const main=doc.querySelector("main");
    if(!main) throw new Error("Conteúdo antigo da TIA não encontrado.");

    const blocks=[];
    const visit=node=>{
      if(node.nodeType!==1) return;
      const tag=node.tagName;
      const text=cleanText(node.textContent||"");

      if(tag==="H1" || tag==="H2"){
        if(text) blocks.push({type:"h1",text});
        return;
      }
      if(tag==="H3"){
        if(text) blocks.push({type:"h2",text});
        return;
      }
      if(tag==="P"){
        if(text) blocks.push({type:"p",text});
        return;
      }
      if(tag==="LI"){
        if(text){
          const parent=node.parentElement;
          let prefix="- ";
          if(parent?.tagName==="OL"){
            const siblings=[...parent.children].filter(el=>el.tagName==="LI");
            prefix=`${siblings.indexOf(node)+1}. `;
          }
          blocks.push({type:"li",text:prefix+text});
        }
        return;
      }
      if(node.classList?.contains("notice")){
        if(text) blocks.push({type:"note",text});
        return;
      }
      [...node.children].forEach(visit);
    };

    [...main.children].forEach(visit);
    return blocks;
  }

  function wrapText(text,maxChars){
    const words=text.split(/\s+/);
    const lines=[];
    let line="";
    for(const word of words){
      const candidate=line ? `${line} ${word}` : word;
      if(candidate.length>maxChars && line){
        lines.push(line);
        line=word;
      }else{
        line=candidate;
      }
    }
    if(line) lines.push(line);
    return lines;
  }

  function pdfEscape(text){
    let out="";
    for(const ch of text){
      let code=ch.charCodeAt(0);
      if(code>255) code=63;
      if(code===40 || code===41 || code===92){
        out+="\\"+String.fromCharCode(code);
      }else if(code<32 || code>126){
        out+="\\"+code.toString(8).padStart(3,"0");
      }else{
        out+=String.fromCharCode(code);
      }
    }
    return out;
  }

  function buildLegacyPdf(blocks){
    const pageHeight=842;
    const top=795;
    const bottom=52;
    const bodyLeading=12;
    const pages=[];
    let page=[];
    let y=top;

    const pushLine=(text,font,size,leading,x=50)=>{
      if(y-leading<bottom){
        pages.push(page);
        page=[];
        y=top;
      }
      page.push({text,font,size,x,y});
      y-=leading;
    };

    for(const block of blocks){
      if(block.type==="h1"){
        if(page.length && y<top-90){
          pages.push(page); page=[]; y=top;
        }
        for(const line of wrapText(block.text,58)) pushLine(line,"F2",16,22);
        y-=5;
      }else if(block.type==="h2"){
        y-=4;
        for(const line of wrapText(block.text,76)) pushLine(line,"F2",12,17,52);
      }else if(block.type==="note"){
        y-=3;
        for(const line of wrapText(block.text,94)) pushLine(line,"F2",9.5,12,54);
        y-=3;
      }else{
        const width=block.type==="li" ? 90 : 96;
        const x=block.type==="li" ? 58 : 50;
        for(const line of wrapText(block.text,width)) pushLine(line,"F1",9.5,bodyLeading,x);
        y-=4;
      }
    }
    if(page.length) pages.push(page);

    const objects=[null];
    const addObject=value=>{ objects.push(value); return objects.length-1; };
    const fontRegular=addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
    const fontBold=addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
    const pagesId=addObject("");
    const pageIds=[];

    pages.forEach((lines,index)=>{
      const ops=[];
      lines.forEach(line=>{
        ops.push(`BT /${line.font} ${line.size} Tf 1 0 0 1 ${line.x} ${line.y} Tm (${pdfEscape(line.text)}) Tj ET`);
      });
      ops.push(`BT /F1 7.5 Tf 1 0 0 1 50 28 Tm (Mundo bit Byte - TIA | Material de apoio | pagina ${index+1}/${pages.length}) Tj ET`);
      const stream=ops.join("\n");
      const contentId=addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
      const pageId=addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 ${pageHeight}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentId} 0 R >>`);
      pageIds.push(pageId);
    });

    objects[pagesId]=`<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map(id=>`${id} 0 R`).join(" ")}] >>`;
    const catalogId=addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
    const infoId=addObject("<< /Title (TIA - Material de Apoio - Versao Anterior) /Author (Professor Ronaldo Lavestein - Mundo bit Byte) >>");

    let pdf="%PDF-1.4\n";
    const offsets=[0];
    for(let i=1;i<objects.length;i++){
      offsets[i]=pdf.length;
      pdf+=`${i} 0 obj\n${objects[i]}\nendobj\n`;
    }
    const xrefOffset=pdf.length;
    pdf+=`xref\n0 ${objects.length}\n0000000000 65535 f \n`;
    for(let i=1;i<objects.length;i++) pdf+=`${String(offsets[i]).padStart(10,"0")} 00000 n \n`;
    pdf+=`trailer\n<< /Size ${objects.length} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

    return new Blob([new TextEncoder().encode(pdf)],{type:"application/pdf"});
  }

  async function downloadLegacyPdf(button){
    const original=button.textContent;
    button.textContent="Preparando PDF...";
    button.setAttribute("aria-busy","true");
    button.style.pointerEvents="none";
    try{
      const response=await fetch(LEGACY_TIA_URL,{cache:"force-cache"});
      if(!response.ok) throw new Error(`HTTP ${response.status}`);
      const html=await response.text();
      const blocks=extractLegacyBlocks(html);
      const pdf=buildLegacyPdf(blocks);
      const url=URL.createObjectURL(pdf);
      const anchor=document.createElement("a");
      anchor.href=url;
      anchor.download="TIA_Material_de_Apoio_Versao_Anterior.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(()=>URL.revokeObjectURL(url),3000);
    }catch(error){
      console.error("Falha ao preparar material de apoio da TIA:",error);
      alert("Não foi possível preparar o PDF agora. Verifique sua conexão e tente novamente.");
    }finally{
      button.textContent=original;
      button.removeAttribute("aria-busy");
      button.style.pointerEvents="";
    }
  }

  const inicio=document.querySelector("#inicio");
  if(inicio && !document.querySelector("#tia-material-apoio")){
    const apoio=document.createElement("div");
    apoio.id="tia-material-apoio";
    apoio.className="example-box";
    apoio.innerHTML=`
      <h3>Material de apoio</h3>
      <p>Para revisão, estudo em casa e atividades complementares, você pode baixar o material da versão anterior deste módulo. <strong>O conteúdo atual do site continua sendo a referência principal.</strong></p>
      <a class="call-link" href="#" role="button">Baixar material de apoio (PDF)</a>
    `;
    const button=apoio.querySelector(".call-link");
    button.addEventListener("click",event=>{
      event.preventDefault();
      downloadLegacyPdf(button);
    });
    inicio.appendChild(apoio);
  }

  scroller.addEventListener("scroll",setActive,{passive:true});
  window.addEventListener("resize",setActive,{passive:true});
  setActive();
});
