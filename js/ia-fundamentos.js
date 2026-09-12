const options = document.querySelectorAll('.option');
const feedback = document.getElementById('quizFeedback');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    if (feedback) feedback.classList.add('show');
  });
});

const flowSteps = document.querySelectorAll('#fluxoPrincipal .flow-step');
const flowDetail = document.getElementById('flowDetail');

if (flowDetail) {
  flowSteps.forEach(step => {
    step.addEventListener('click', () => {
      flowSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      flowDetail.textContent = step.dataset.info;
    });
  });
}

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
    botao.textContent = 'Copiado!';
    botao.classList.add('copied');
    setTimeout(() => {
      botao.textContent = original;
      botao.classList.remove('copied');
    }, 1400);
  });
}

function copyPrompt(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;

  const textoEl = el.querySelector('.prompt-text');
  const text = textoEl ? textoEl.innerText.trim() : el.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copiado!';
    setTimeout(() => btn.textContent = original, 1400);
  });
}

const validationSteps = document.querySelectorAll('#fluxoValidacao .flow-step');
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

function adicionarBotaoCopiarPrompt(prompt, indice) {
  if (!prompt || prompt.querySelector('button')) return;
  const id = prompt.id || `fundamentos-pratica-${indice}`;
  prompt.id = id;

  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'copy-prompt-btn';
  botao.textContent = 'Copiar';
  botao.setAttribute('aria-label', 'Copiar prompt desta atividade');
  botao.addEventListener('click', () => copiarTexto(id, botao));
  prompt.appendChild(botao);
}

function adicionarBotaoCopiarCodigo(code, indice) {
  if (!code || code.dataset.copyReady === 'true') return;
  code.dataset.copyReady = 'true';

  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'button secondary';
  botao.textContent = 'Copiar prompt';
  botao.style.marginTop = '8px';
  botao.addEventListener('click', () => {
    navigator.clipboard.writeText(code.innerText.trim()).then(() => {
      botao.textContent = 'Copiado!';
      setTimeout(() => botao.textContent = 'Copiar prompt', 1400);
    });
  });
  code.insertAdjacentElement('afterend', botao);
}

// Mundo bit Byte — navegação por painel único.
// Não altera conteúdo; apenas mostra o tópico selecionado sem rolagem longa.
document.addEventListener('DOMContentLoaded', function(){
  // Endereço atual do ChatGPT; evita depender de redirecionamento legado.
  document.querySelectorAll('a[href="https://chat.openai.com/"]').forEach(link => {
    link.href = 'https://chatgpt.com/';
  });

  // Botão Copiar só em práticas nas quais o aluno realmente executa o prompt.
  const praticasCopiaveis = [
    ...document.querySelectorAll('#aprendizagem .prompt'),
    ...document.querySelectorAll('#geracao-respostas .prompt'),
    ...document.querySelectorAll('#pratique .prompt'),
    ...document.querySelectorAll('#laboratorio-erros .prompt'),
    ...document.querySelectorAll('#laboratorio-parece-saber .prompt'),
    ...document.querySelectorAll('#primeiros-laboratorios .prompt'),
    ...document.querySelectorAll('#lab5-estudar-sem-copiar .prompt')
  ].filter(prompt => !prompt.closest('.bad'));
  praticasCopiaveis.forEach((prompt, i) => adicionarBotaoCopiarPrompt(prompt, i + 1));

  // No primeiro laboratório crítico os prompts estavam em <code>; continuam sendo ações reais.
  document.querySelectorAll('#laboratorio-erro .lab-step code').forEach((code, i) => {
    adicionarBotaoCopiarCodigo(code, i + 1));
  });

  // A prática 13 compara dois pedidos, não fornecedores. Uma IA é suficiente aqui.
  const pratica13 = document.querySelector('#pratique');
  const gradeFerramentasPratica13 = pratica13?.querySelector('.note.ai');
  if (gradeFerramentasPratica13) {
    gradeFerramentasPratica13.innerHTML = '<h3>FAÇA AGORA — teste os dois pedidos na mesma IA</h3><p>Execute o Teste A e depois o Teste B sem trocar de ferramenta. Assim você observa o efeito do contexto sem confundir essa diferença com a troca de modelo.</p>';
  }

  // A prática final é o ponto deliberado de comparação entre fornecedores/modelos.
  const praticaFinal = document.querySelector('#primeiros-laboratorios');
  if (praticaFinal) {
    const intro = praticaFinal.querySelector('p');
    if (intro) {
      intro.innerHTML = '<strong>Comparação deliberada:</strong> escolha pelo menos um dos quatro laboratórios e execute exatamente o mesmo prompt em pelo menos duas IAs. Compare utilidade, precisão, incerteza e fidelidade às restrições. O objetivo não é eleger uma “vencedora”, mas aprender a julgar respostas diferentes.';
    }
  }

  const navLinks = Array.from(document.querySelectorAll(".side-link[href^='#']"));
  const panels = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if(!navLinks.length || !panels.length) return;

  function setActive(hash){
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === hash));
  }

  function showPanel(hash, updateHistory){
    const target = document.querySelector(hash);
    if(!target) return;

    panels.forEach(section => section.classList.remove('active-panel'));
    target.classList.add('active-panel');
    setActive(hash);

    if(updateHistory){
      history.replaceState(null, '', hash);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  navLinks.forEach(link => {
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
    if(!navLinks.some(link => link.getAttribute('href') === hash)) return;
    e.preventDefault();
    showPanel(hash, true);
  });

  const initialHash = location.hash && document.querySelector(location.hash)
    ? location.hash
    : navLinks[0].getAttribute('href');

  showPanel(initialHash, Boolean(location.hash));
});
