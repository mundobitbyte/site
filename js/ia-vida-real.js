const flowSteps = document.querySelectorAll('.flow-step');
const flowDetail = document.getElementById('flowDetail');

flowSteps.forEach(step => {
  step.addEventListener('click', () => {
    flowSteps.forEach(s => s.classList.remove('active'));
    step.classList.add('active');

    if (flowDetail) {
      flowDetail.textContent = step.dataset.info;
    }
  });
});

function copyPrompt(button) {
  const promptBox = button.closest('.prompt');
  const text = promptBox.querySelector('.prompt-text')
    ? promptBox.querySelector('.prompt-text').innerText
    : promptBox.innerText.replace('Copiar', '').trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = 'Copiado!';
    button.classList.add('copied');

    setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1400);
  });
}

function toggleBox(id) {
  const box = document.getElementById(id);
  if (box) box.classList.toggle('show');
}

// Mundo bit Byte — navegação por painel único.
// Não altera conteúdo; apenas mostra o tópico selecionado sem rolagem longa.
document.addEventListener('DOMContentLoaded', function(){
  const links = Array.from(document.querySelectorAll(".side-link[href^='#']"));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if(!links.length || !sections.length) return;

  function setActive(hash){
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === hash));
  }

  function showPanel(hash, updateHistory){
    const target = document.querySelector(hash);
    if(!target) return;

    sections.forEach(section => section.classList.remove('active-panel'));
    target.classList.add('active-panel');
    setActive(hash);

    if(updateHistory){
      history.replaceState(null, '', hash);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  links.forEach(link => {
    link.addEventListener('click', function(e){
      const hash = this.getAttribute('href');
      if(!document.querySelector(hash)) return;
      e.preventDefault();
      showPanel(hash, true);
    });
  });

  document.addEventListener('click', function(e){
    const anchor = e.target.closest("a[href^='#']");
    if(!anchor || anchor.classList.contains('side-link')) return;
    const hash = anchor.getAttribute('href');
    if(!links.some(link => link.getAttribute('href') === hash)) return;
    e.preventDefault();
    showPanel(hash, true);
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : links[0].getAttribute('href');

  showPanel(initialHash, Boolean(location.hash));
});
