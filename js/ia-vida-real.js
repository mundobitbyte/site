const flowSteps = document.querySelectorAll('.flow-step');
    const flowDetail = document.getElementById('flowDetail');
    flowSteps.forEach(step => {
      step.addEventListener('click', () => {
        flowSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        flowDetail.textContent = step.dataset.info;
      });
    });

    function copyPrompt(button){
      const promptBox = button.closest('.prompt');
      const text = promptBox.querySelector('.prompt-text') ? promptBox.querySelector('.prompt-text').innerText : promptBox.innerText.replace('Copiar','').trim();
      navigator.clipboard.writeText(text).then(() => {
        const original = button.textContent;
        button.textContent = 'Copiado!';
        button.classList.add('copied');
        setTimeout(() => { button.textContent = original; button.classList.remove('copied'); }, 1400);
      });
    }

    function toggleBox(id){
      const box = document.getElementById(id);
      if(box){ box.classList.toggle('show'); }
    }

const flowSteps = document.querySelectorAll('.flow-step');
    const flowDetail = document.getElementById('flowDetail');
    flowSteps.forEach(step => {
      step.addEventListener('click', () => {
        flowSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        flowDetail.textContent = step.dataset.info;
      });
    });

    function copyPrompt(button){
      const promptBox = button.closest('.prompt');
      const text = promptBox.querySelector('.prompt-text') ? promptBox.querySelector('.prompt-text').innerText : promptBox.innerText.replace('Copiar','').trim();
      navigator.clipboard.writeText(text).then(() => {
        const original = button.textContent;
        button.textContent = 'Copiado!';
        button.classList.add('copied');
        setTimeout(() => { button.textContent = original; button.classList.remove('copied'); }, 1400);
      });
    }

    function toggleBox(id){
      const box = document.getElementById(id);
      if(box){ box.classList.toggle('show'); }
    }
