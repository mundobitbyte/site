(() => {
  const scripts = [
    '../js/git.js?v=5',
    '../js/git-versoes.js?v=5',
    '../js/git-mbb-continuidad.js?v=2',
    '../js/git-mbb-fechamento.js?v=1',
    '../js/git-mbb-fechamento-ajustes.js?v=4',
    '../js/git-pasta-rede.js?v=9',
    '../js/git-mbb-recuperacao-didatica.js?v=1',
    '../js/git-mbb-github-didatico.js?v=1',
    '../js/git-mbb-compreensao.js?v=1',
    '../js/git-mbb-comandos.js?v=1',
    '../js/git-mbb-comandos-rede.js?v=6',
    '../js/git-mbb-checkpoint-comandos.js?v=7',
    '../js/git-mbb-remover-repositorio.js?v=3',
    '../js/git-mbb-auditoria-iniciante.js?v=1',
    '../js/git-mbb-auditoria-iniciante-rede.js?v=1'
  ];

  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
    document.body.appendChild(script);
  });

  const addStatus = (ok, messages) => {
    const box = document.createElement('div');
    box.id = 'mbb-refatoracao-status';
    box.style.position = 'fixed';
    box.style.right = '12px';
    box.style.bottom = '12px';
    box.style.zIndex = '9999';
    box.style.maxWidth = '420px';
    box.style.padding = '10px 12px';
    box.style.borderRadius = '10px';
    box.style.font = '12px/1.4 Segoe UI,Arial,sans-serif';
    box.style.boxShadow = '0 4px 18px rgba(0,0,0,.18)';
    box.style.background = ok ? '#ecfdf5' : '#fff1f2';
    box.style.border = `1px solid ${ok ? '#86efac' : '#fda4af'}`;
    box.style.color = ok ? '#166534' : '#991b1b';
    box.innerHTML = `<strong>${ok ? 'Refatoração: estrutura carregada' : 'Refatoração: divergência detectada'}</strong>${messages.length ? `<br>${messages.join('<br>')}` : ''}`;
    document.body.appendChild(box);
  };

  const check = (condition, message, failures) => {
    if (!condition) failures.push(message);
  };

  const normalizeMissedConsistency = () => {
    if (typeof modules === 'undefined' || !modules.comandos) return;
    modules.comandos.steps.forEach(step => {
      ['menu', 'title', 'objective', 'content'].forEach(field => {
        if (step[field]) step[field] = step[field].replace(/NOME-DA-BRANCH/g, 'BRANCH_PRINCIPAL');
      });
    });
  };

  const validate = () => {
    const failures = [];

    check(typeof gitSteps !== 'undefined', 'gitSteps não foi criado.', failures);
    check(typeof githubSteps !== 'undefined', 'githubSteps não foi criado.', failures);
    check(typeof exerciseSteps !== 'undefined', 'exerciseSteps não foi criado.', failures);
    check(typeof modules !== 'undefined' && modules.comandos, 'Central de Comandos não foi criada.', failures);

    if (typeof gitSteps !== 'undefined') {
      check(gitSteps.length === 12, `Esperados 12 tópicos Git; encontrados ${gitSteps.length}.`, failures);
      const g2 = gitSteps.find(step => String(step.id) === '2');
      const g3 = gitSteps.find(step => String(step.id) === '3');
      const g4 = gitSteps.find(step => String(step.id) === '4');
      const g10 = gitSteps.find(step => String(step.id) === '10');
      check(g2 && g2.content.includes('Git CMD'), 'Git 2 não consolidou Git CMD como terminal oficial.', failures);
      check(g3 && g3.content.includes('safe.directory'), 'Git 3 não contém a orientação de safe.directory.', failures);
      check(g4 && g4.content.includes('git init') && g4.content.includes('git status'), 'Git 4 perdeu a sequência init/status.', failures);
      check(g10 && !g10.content.includes('git add -A'), 'Git 10 ainda contém git add -A no fluxo principal.', failures);
    }

    if (typeof githubSteps !== 'undefined') {
      check(githubSteps.length === 10, `Esperados 10 tópicos GitHub; encontrados ${githubSteps.length}.`, failures);
      const gh1 = githubSteps.find(step => String(step.id) === '1');
      const gh4 = githubSteps.find(step => String(step.id) === '4');
      const gh9 = githubSteps.find(step => String(step.id) === '9');
      const gh10 = githubSteps.find(step => String(step.id) === '10');
      check(gh1 && gh1.content.includes('escolha Public'), 'GitHub 1 perdeu a orientação Public/Private.', failures);
      check(gh4 && gh4.content.includes('branch principal'), 'GitHub 4 perdeu a orientação de commit na branch principal.', failures);
      check(gh9 && gh9.content.includes('git merge --no-edit teste-reservas'), 'GitHub 9 perdeu o merge --no-edit.', failures);
      check(gh10 && gh10.content.includes('git pull --no-rebase --no-edit'), 'GitHub 10 perdeu o diagnóstico de histórias divergentes.', failures);
    }

    if (typeof exerciseSteps !== 'undefined') {
      check(exerciseSteps.length === 23, `Esperados 22 exercícios + abertura; encontrados ${exerciseSteps.length} itens.`, failures);
      const numbered = exerciseSteps.filter(step => /^e\d+$/.test(String(step.id)));
      check(numbered.length === 22, `Esperados 22 exercícios numerados; encontrados ${numbered.length}.`, failures);
      const e2 = exerciseSteps.find(step => String(step.id) === 'e2');
      const e20 = exerciseSteps.find(step => String(step.id) === 'e20');
      check(e2 && e2.content.includes('detected dubious ownership'), 'Exercício 2 perdeu a orientação para rede.', failures);
      check(e20 && e20.content.includes('git merge --no-edit teste-divulgacao'), 'Exercício 20 perdeu o merge --no-edit.', failures);
    }

    if (typeof modules !== 'undefined' && modules.comandos) {
      const ids = modules.comandos.steps.map(step => String(step.id));
      check(ids.includes('rede'), 'Central de Comandos perdeu Rede e segurança.', failures);
      check(ids.includes('checkpoint'), 'Central de Comandos perdeu o checkpoint.', failures);
      const diagnostic = modules.comandos.steps.find(step => String(step.id) === 'diagnostico');
      if (diagnostic) {
        check(diagnostic.content.includes('rmdir /s /q .git'), 'Diagnóstico perdeu a recuperação de .git.', failures);
        check(!diagnostic.content.includes('data-rede-copy="rmdir /s /q .git"'), 'Comando destrutivo .git voltou a ter botão Copiar.', failures);
      }
    }

    const allText = [
      ...(typeof gitSteps !== 'undefined' ? gitSteps : []),
      ...(typeof githubSteps !== 'undefined' ? githubSteps : []),
      ...(typeof exerciseSteps !== 'undefined' ? exerciseSteps : []),
      ...((typeof modules !== 'undefined' && modules.comandos) ? modules.comandos.steps : [])
    ].map(step => `${step.menu || ''}\n${step.title || ''}\n${step.objective || ''}\n${step.content || ''}`).join('\n');

    check(!allText.includes('Prompt de Comando'), 'Ainda existe referência a Prompt de Comando no conteúdo final.', failures);
    check(!allText.includes('CMD do Windows'), 'Ainda existe referência a CMD do Windows no conteúdo final.', failures);
    check(!allText.includes('NOME-DA-BRANCH'), 'Ainda existe o placeholder NOME-DA-BRANCH.', failures);

    window.__MBB_GIT_REFACTOR_SNAPSHOT__ = {
      gitSteps: JSON.parse(JSON.stringify(gitSteps)),
      githubSteps: JSON.parse(JSON.stringify(githubSteps)),
      exerciseSteps: JSON.parse(JSON.stringify(exerciseSteps)),
      commandSteps: JSON.parse(JSON.stringify(modules.comandos.steps))
    };

    addStatus(failures.length === 0, failures);
    window.__MBB_GIT_REFACTOR_VALIDATION__ = {ok: failures.length === 0, failures};
  };

  (async () => {
    try {
      for (const src of scripts) await loadScript(src);
      normalizeMissedConsistency();
      validate();
    } catch (error) {
      addStatus(false, [error.message]);
      window.__MBB_GIT_REFACTOR_VALIDATION__ = {ok: false, failures: [error.message]};
    }
  })();
})();