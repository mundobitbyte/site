// Integração dos Capítulos 0 e 1 do livro React Native do Zero.
(() => {
  if (typeof modules === 'undefined') return;
  const cap0=window.MBB_RN_BOOK_CAP0||[];
  const cap1=[...(window.MBB_RN_BOOK_CAP1A||[]),...(window.MBB_RN_BOOK_CAP1B||[])];
  const livro0 = { title: 'Livro 0 — Antes do aplicativo', steps: cap0 };
  const livro1 = { title: 'Livro 1 — O aplicativo começa', steps: cap1 };

  // Coloca os capítulos do livro no início do menu, sem recriar os módulos existentes.
  const antigos = Object.entries(modules).filter(([k]) => !['livroCap0','livroCap1'].includes(k));
  Object.keys(modules).forEach(k => delete modules[k]);
  modules.livroCap0 = livro0;
  modules.livroCap1 = livro1;
  antigos.forEach(([k,v]) => { modules[k] = v; });

  const style=document.createElement('style');
  style.id='mbb-book-rn-style';
  style.textContent=`
    .mbb-book-page{max-width:1100px;margin:0 auto;padding:2px 4px 28px;color:#1e293b;font-size:15px;line-height:1.62}
    .mbb-book-page p{margin:0 0 12px}
    .mbb-book-page .mbb-book-bullet{position:relative;padding-left:22px;margin:5px 0}.mbb-book-page .mbb-book-bullet:before{content:'•';position:absolute;left:5px;font-weight:900;color:#1967d2}
    .mbb-book-page .mbb-book-action{margin:6px 0;padding:8px 10px;border-left:3px solid #93c5fd;background:#f8fbff;border-radius:6px}
    .mbb-book-table{margin:14px 0;border:1px solid #dbe3ef;border-radius:12px;overflow:hidden;background:#f8fbff}.mbb-book-table-row{display:flex;flex-wrap:wrap}.mbb-book-table-cell{flex:1 1 180px;padding:12px 14px;text-align:center;font-weight:700;border-right:1px solid #dbe3ef}.mbb-book-table-cell:last-child{border-right:0}
    .mbb-book-inline-code{margin:12px 0;padding:12px 14px;border-radius:9px;background:#171717;color:#f3f4f6;font-family:Consolas,'Courier New',monospace;overflow:auto}
    .mbb-book-figure{margin:16px 0 4px;padding:10px;background:#fff;border:1px solid #dbe3ef;border-radius:12px;box-shadow:0 3px 12px rgba(15,23,42,.07)}.mbb-book-figure img{display:block;width:100%;height:auto;max-height:72vh;object-fit:contain}.mbb-book-caption{font-size:12px;color:#64748b;text-align:center;margin:5px 0 16px;font-style:italic}
    .mbb-book-code{margin:16px 0;border:1px solid #333;border-radius:10px;overflow:hidden;background:#171717;color:#f3f4f6}.mbb-book-code-head{height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 12px;background:#2b2b2b;font-size:12px;font-weight:800}.mbb-book-copy{border:0;border-radius:6px;padding:5px 10px;background:#444;color:#fff;font-weight:800;cursor:pointer}.mbb-book-code pre{margin:0;padding:16px 18px;white-space:pre;overflow:auto;font:13px/1.5 Consolas,'Courier New',monospace}.mbb-book-code-line{display:block;min-height:1.5em}.mbb-book-code-line.changed{font-weight:900;background:#fde68a;color:#111827;margin:0 -5px;padding:0 5px;border-radius:3px}
    @media(max-width:720px){.mbb-book-page{font-size:14px}.mbb-book-code pre{font-size:12px}.mbb-book-table-row{display:block}.mbb-book-table-cell{border-right:0;border-bottom:1px solid #dbe3ef}.mbb-book-table-cell:last-child{border-bottom:0}}
  `;
  document.head.appendChild(style);

  function renderBookCode(root){
    root.querySelectorAll('.mbb-book-code').forEach(box=>{
      const pre=box.querySelector('pre');
      const raw=pre.getAttribute('data-code64')||'';
      const bytes=Uint8Array.from(atob(raw),c=>c.charCodeAt(0));
      const code=new TextDecoder().decode(bytes);
      const highlights=new Set((box.dataset.highlight||'').split(',').filter(Boolean).map(Number));
      const frag=document.createDocumentFragment();
      code.split('\n').forEach((line,i)=>{const sp=document.createElement('span');sp.className='mbb-book-code-line'+(highlights.has(i+1)?' changed':'');sp.textContent=line||' ';frag.appendChild(sp);});
      pre.removeAttribute('data-code64'); pre.replaceChildren(frag);
      const btn=box.querySelector('.mbb-book-copy');
      btn.onclick=async()=>{try{await navigator.clipboard.writeText(code)}catch(_){const h=document.createElement('textarea');h.value=code;document.body.appendChild(h);h.select();document.execCommand('copy');h.remove()}const old=btn.textContent;btn.textContent='Copiado!';setTimeout(()=>btn.textContent=old,1000)};
    });
  }

  if (typeof showStep === 'function') {
    const anterior=showStep;
    showStep=function mbbLivroShowStep(id){
      const result=anterior.apply(this,arguments);
      const step=modules[currentModuleKey]?.steps?.find(s=>String(s.id)===String(id));
      if(step?.bookPage){
        const view=document.querySelector('#workspace .intro-view');
        if(view){
          view.innerHTML=`<div class="intro-kicker">${step.kicker}</div><h3>${step.title}</h3><div class="mbb-book-page">${step.bookHtml}</div>`;
          renderBookCode(view);
          view.scrollTop=0;
        }
      }
      return result;
    };
  }
  if (typeof renderModuleMenu==='function') renderModuleMenu();
  if (typeof renderStepMenu==='function') renderStepMenu();
})();
