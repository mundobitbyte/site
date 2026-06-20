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

function toggleBox(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('show');
}

function copiarTexto(id, botao) {
  const el = document.getElementById(id);
  if (!el) return;

  const textoEl = el.querySelector('.prompt-text');
  const texto = textoEl
    ? textoEl.innerText.trim()
    : el.innerText.replace('Copiar', '').replace('Copiado!', '').trim();

  navigator.clipboard.writeText(texto).then(() => {
    const original = botao.textContent;
    botao.textContent = "Copiado!";
    setTimeout(() => botao.textContent = original, 1400);
  });
}

function copyPrompt(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const textoEl = el.querySelector('.prompt-text');
  const text = textoEl ? textoEl.innerText.trim() : el.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copiado';
    setTimeout(() => btn.textContent = original, 1400);
  });
}

const validationSteps = document.querySelectorAll('#validacao-final .flow-step');
const validationDetail = document.getElementById('flowDetailValidacao');

if (validationDetail) {
  validationSteps.forEach(step => {
    step.addEventListener('click', () => {
      validationSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      validationDetail.textContent = step.dataset.info;
    });
  });
}

const links = document.querySelectorAll('.side-link');
const sections = [...document.querySelectorAll('main section[id]')];

const markActive = () => {
  const pos = window.scrollY + 120;
  let current = sections[0]?.id;

  sections.forEach(sec => {
    if (sec.offsetTop <= pos) current = sec.id;
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
};

window.addEventListener('scroll', markActive, { passive: true });
markActive();

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
