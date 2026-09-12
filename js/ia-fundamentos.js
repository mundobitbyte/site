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

function adicionarBotaoCopiarCodigo(code) {
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

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href="https://chat.openai.com/"]').forEach(link => {
    link.href = 'https://chatgpt.com/';
  });

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

  document.querySelectorAll('#laboratorio-erro .lab-step code').forEach(code => {
    adicionarBotaoCopiarCodigo(code);
  });

  const pratica13 = document.querySelector('#pratique');
  const gradeFerramentasPratica13 = pratica13 ? pratica13.querySelector('.note.ai') : null;
  if (gradeFerramentasPratica13) {
    gradeFerramentasPratica13.innerHTML = '<h3>FAÇA AGORA — teste os dois pedidos na mesma IA</h3><p>Execute o Teste A e depois o Teste B sem trocar de ferramenta. Assim você observa o efeito do contexto sem confundir essa diferença com a troca de modelo.</p>';
  }

  const praticaFinal = document.querySelector('#primeiros-laboratorios');
  if (praticaFinal) {
    const intro = praticaFinal.querySelector('p');
    if (intro) {
      intro.innerHTML = '<strong>Comparação deliberada:</strong> escolha pelo menos um dos quatro laboratórios e execute exatamente o mesmo prompt em pelo menos duas IAs. Compare utilidade, precisão, incerteza e fidelidade às restrições. O objetivo não é eleger uma “vencedora”, mas aprender a julgar respostas diferentes.';
    }
  }

  const main = document.querySelector('main');
  const navLinks = Array.from(document.querySelectorAll('.side-link[href^="#"]'));
  const panels = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!main || !navLinks.length || !panels.length) return;

  const hashesValidos = new Set(navLinks.map(link => link.getAttribute('href')));
  main.classList.add('panel-nav-ready');

  function normalizarHash(hash) {
    return hashesValidos.has(hash) ? hash : '#inicio';
  }

  function setActive(hash) {
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === hash;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function showPanel(hash, updateHistory) {
    const destino = normalizarHash(hash);
    const target = document.querySelector(destino);
    if (!target) return;

    panels.forEach(panel => panel.classList.remove('active-panel'));
    target.classList.add('active-panel');
    setActive(destino);

    if (updateHistory && window.location.hash !== destino) {
      history.pushState(null, '', destino);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      showPanel(this.getAttribute('href'), true);
    });
  });

  document.addEventListener('click', function (event) {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || anchor.classList.contains('side-link')) return;

    const hash = anchor.getAttribute('href');
    if (!hashesValidos.has(hash)) return;

    event.preventDefault();
    showPanel(hash, true);
  });

  window.addEventListener('popstate', function () {
    showPanel(window.location.hash || '#inicio', false);
  });

  showPanel(window.location.hash || '#inicio', false);
});
