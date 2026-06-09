const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('quizFeedback');
    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        feedback.classList.add('show');
      });
    });

    const flowSteps = document.querySelectorAll('.flow-step');
    const flowDetail = document.getElementById('flowDetail');
    flowSteps.forEach(step => {
      step.addEventListener('click', () => {
        flowSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        flowDetail.textContent = step.dataset.info;
      });
    });

    function toggleBox(id){
      const el = document.getElementById(id);
      el.classList.toggle('show');
    }


    function copyPromptText(button){
      const promptBox = button.closest('.prompt');
      const clone = promptBox.cloneNode(true);
      const btn = clone.querySelector('.copy-prompt-btn');
      if(btn) btn.remove();
      const text = clone.textContent.trim();

      const done = () => {
        const original = button.textContent;
        button.textContent = '✓ Copiado';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = original;
          button.classList.remove('copied');
        }, 1600);
      };

      if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      }else{
        fallbackCopy(text, done);
      }
    }

    function fallbackCopy(text, done){
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly','');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      try{ document.execCommand('copy'); done(); }
      finally{ document.body.removeChild(area); }
    }

    document.querySelectorAll('.prompt').forEach(promptBox => {
      if(promptBox.querySelector('.copy-prompt-btn')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-prompt-btn';
      button.textContent = '📋 Copiar';
      button.addEventListener('click', () => copyPromptText(button));
      promptBox.appendChild(button);
    });


    const links = document.querySelectorAll('.side-link');
    const sections = [...document.querySelectorAll('main section[id]')];
    const markActive = () => {
      const pos = window.scrollY + 120;
      let current = sections[0]?.id;
      sections.forEach(sec => { if(sec.offsetTop <= pos) current = sec.id; });
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
    };
    window.addEventListener('scroll', markActive, {passive:true});
    markActive();

    function copyPrompt(id, btn){
      const el = document.getElementById(id);
      if(!el) return;
      const text = el.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copiado';
        setTimeout(() => btn.textContent = original, 1400);
      });
    }
  
    function copiarTexto(id, botao){
      const el = document.getElementById(id);
      if(!el) return;

      const textoEl = el.querySelector('.prompt-text');
      const texto = textoEl ? textoEl.innerText.trim() : el.innerText.replace('Copiar','').replace('Copiado!','').trim();

      navigator.clipboard.writeText(texto).then(() => {
        const original = botao.textContent;
        botao.textContent = "Copiado!";
        setTimeout(() => botao.textContent = original, 1400);
      });
    });
    }
);
    }

  

    const validationSteps = document.querySelectorAll('#validacao-final .flow-step');
    const validationDetail = document.getElementById('flowDetailValidacao');
    if(validationSteps && validationDetail){
      validationSteps.forEach(step => {
        step.addEventListener('click', () => {
          validationSteps.forEach(s => s.classList.remove('active'));
          step.classList.add('active');
          validationDetail.textContent = step.dataset.info;
        });
      });
    }

const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('quizFeedback');
    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        feedback.classList.add('show');
      });
    });

    const flowSteps = document.querySelectorAll('.flow-step');
    const flowDetail = document.getElementById('flowDetail');
    flowSteps.forEach(step => {
      step.addEventListener('click', () => {
        flowSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        flowDetail.textContent = step.dataset.info;
      });
    });

    function toggleBox(id){
      const el = document.getElementById(id);
      el.classList.toggle('show');
    }


    function copyPromptText(button){
      const promptBox = button.closest('.prompt');
      const clone = promptBox.cloneNode(true);
      const btn = clone.querySelector('.copy-prompt-btn');
      if(btn) btn.remove();
      const text = clone.textContent.trim();

      const done = () => {
        const original = button.textContent;
        button.textContent = '✓ Copiado';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = original;
          button.classList.remove('copied');
        }, 1600);
      };

      if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      }else{
        fallbackCopy(text, done);
      }
    }

    function fallbackCopy(text, done){
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly','');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      try{ document.execCommand('copy'); done(); }
      finally{ document.body.removeChild(area); }
    }

    document.querySelectorAll('.prompt').forEach(promptBox => {
      if(promptBox.querySelector('.copy-prompt-btn')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-prompt-btn';
      button.textContent = '📋 Copiar';
      button.addEventListener('click', () => copyPromptText(button));
      promptBox.appendChild(button);
    });


    const links = document.querySelectorAll('.side-link');
    const sections = [...document.querySelectorAll('main section[id]')];
    const markActive = () => {
      const pos = window.scrollY + 120;
      let current = sections[0]?.id;
      sections.forEach(sec => { if(sec.offsetTop <= pos) current = sec.id; });
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
    };
    window.addEventListener('scroll', markActive, {passive:true});
    markActive();

    function copyPrompt(id, btn){
      const el = document.getElementById(id);
      if(!el) return;
      const text = el.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copiado';
        setTimeout(() => btn.textContent = original, 1400);
      });
    }
  
    function copiarTexto(id, botao){
      const el = document.getElementById(id);
      if(!el) return;

      const textoEl = el.querySelector('.prompt-text');
      const texto = textoEl ? textoEl.innerText.trim() : el.innerText.replace('Copiar','').replace('Copiado!','').trim();

      navigator.clipboard.writeText(texto).then(() => {
        const original = botao.textContent;
        botao.textContent = "Copiado!";
        setTimeout(() => botao.textContent = original, 1400);
      });
    });
    }
);
    }

  

    const validationSteps = document.querySelectorAll('#validacao-final .flow-step');
    const validationDetail = document.getElementById('flowDetailValidacao');
    if(validationSteps && validationDetail){
      validationSteps.forEach(step => {
        step.addEventListener('click', () => {
          validationSteps.forEach(s => s.classList.remove('active'));
          step.classList.add('active');
          validationDetail.textContent = step.dataset.info;
        });
      });
    }
