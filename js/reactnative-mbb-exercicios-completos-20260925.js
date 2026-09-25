// Mundo bit Byte — restaura os cinco exercícios completos de Interfaces com apresentação ampla.
// Eles entram depois dos desafios progressivos como etapa de consolidação.
(function () {
  if (typeof modules === 'undefined' || !modules.interfaceBasica) return;

  const exercise = modules.interfaceBasica.steps?.find(step => step.id === 'exercicios-interface-flexbox');
  if (!exercise || typeof exercise.html !== 'string') return;

  // Remove a versão provisória anterior, caso exista no HTML já montado.
  exercise.html = exercise.html.replace(/<section id="mbb-fullscreens-retained"[\s\S]*?<\/section>\s*$/m, '');

  const telas = [
    {
      titulo: 'Minhas Tarefas',
      cor: '#7c3aed',
      imagem: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
      enunciado: 'Construa a interface de um aplicativo simples para registrar tarefas de estudo.',
      itens: ['Barra superior roxa com título.', 'Ícone de tarefa à esquerda.', 'Campos: Título, Categoria, Prioridade e Data Limite.', 'Campo maior para Descrição.', 'Botões: Adicionar, Editar e Excluir.'],
      desafio: 'Usar uma linha horizontal para colocar imagem e campos lado a lado.',
      campos: ['Título', 'Categoria', 'Prioridade', 'Data Limite'],
      extraTitulo: 'Descrição',
      botoes: ['Adicionar', 'Editar', 'Excluir']
    },
    {
      titulo: 'Cadastro de Produtos',
      cor: '#2563eb',
      imagem: 'https://cdn-icons-png.flaticon.com/512/679/679720.png',
      enunciado: 'Monte a interface de um aplicativo para cadastrar produtos de uma loja.',
      itens: ['Barra superior azul.', 'Imagem de produto.', 'Campos: Produto, Código, Preço e Quantidade.', 'Área para Categoria e Fornecedor.', 'Botões: Novo, Salvar e Limpar.'],
      desafio: 'Organizar campos curtos e longos dentro do mesmo cartão.',
      campos: ['Produto', 'Código', 'Preço', 'Quantidade'],
      extraTitulo: 'Categoria / Fornecedor',
      botoes: ['Novo', 'Salvar', 'Limpar']
    },
    {
      titulo: 'Controle de Gastos',
      cor: '#16a34a',
      imagem: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
      enunciado: 'Crie a interface de um aplicativo para registrar despesas pessoais.',
      itens: ['Barra superior verde.', 'Ícone financeiro.', 'Campos: Descrição, Valor, Data e Tipo.', 'Área de resumo: Total previsto e Total gasto.', 'Botões: Registrar e Cancelar.'],
      desafio: 'Criar uma área de resumo visualmente separada dos campos.',
      campos: ['Descrição', 'Valor', 'Data', 'Tipo'],
      extraTitulo: 'Resumo',
      botoes: ['Registrar', 'Cancelar']
    },
    {
      titulo: 'Agendar Atendimento',
      cor: '#ea580c',
      imagem: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      enunciado: 'Desenvolva a interface de um aplicativo para agendar atendimentos.',
      itens: ['Barra superior laranja.', 'Imagem de pessoa ou atendimento.', 'Campos: Nome, Telefone, Data e Horário.', 'Campo para Observações.', 'Botões: Agendar, Alterar e Cancelar.'],
      desafio: 'Organizar campos de data e horário de maneira clara.',
      campos: ['Nome', 'Telefone', 'Data', 'Horário'],
      extraTitulo: 'Observações',
      botoes: ['Agendar', 'Alterar', 'Cancelar']
    },
    {
      titulo: 'Controle de Biblioteca',
      cor: '#334155',
      imagem: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
      enunciado: 'Construa a interface de um app para cadastrar livros e controlar empréstimos.',
      itens: ['Barra superior escura.', 'Imagem de livro.', 'Campos: Título, Autor, Código e Situação.', 'Área para dados do aluno que pegou o livro.', 'Botões: Cadastrar, Emprestar e Devolver.'],
      desafio: 'Usar containers para separar dados do livro e dados do empréstimo.',
      campos: ['Título', 'Autor', 'Código', 'Situação'],
      extraTitulo: 'Aluno / Turma',
      botoes: ['Cadastrar', 'Emprestar', 'Devolver']
    }
  ];

  const telaHtml = (tela, index) => `
    <section class="mbb-fullscreen-panel ${index === 0 ? 'active' : ''}" data-mbb-fullscreen="${index}">
      <div class="mbb-fullscreen-grid">
        <div class="mbb-fullscreen-brief">
          <div class="mbb-fullscreen-label">Tela completa ${index + 1}</div>
          <h3>${tela.titulo}</h3>
          <p>${tela.enunciado}</p>
          <ul>${tela.itens.map(item => `<li>${item}</li>`).join('')}</ul>
          <div class="mbb-fullscreen-steps">
            <div><strong>1. Observe</strong><span>Leia a tela antes de programar.</span></div>
            <div><strong>2. Divida</strong><span>Encontre containers, linhas e colunas.</span></div>
            <div><strong>3. Construa</strong><span>Monte uma parte por vez no App.js.</span></div>
          </div>
          <div class="mbb-fullscreen-challenge"><strong>Desafio:</strong> ${tela.desafio}</div>
        </div>

        <div class="mbb-fullscreen-preview-wrap">
          <div class="mbb-fullscreen-preview" style="--mbb-app-color:${tela.cor}">
            <div class="mbb-appbar">${tela.titulo}</div>
            <div class="mbb-appbody">
              <div class="mbb-app-toprow">
                <div class="mbb-app-imagebox"><img src="${tela.imagem}" alt="Imagem do exercício ${tela.titulo}" loading="lazy" decoding="async"></div>
                <div class="mbb-app-fields">
                  ${tela.campos.map(campo => `<label>${campo}</label><div class="mbb-app-input"></div>`).join('')}
                </div>
              </div>
              <div class="mbb-app-extra"><strong>${tela.extraTitulo}</strong><div class="mbb-app-textarea"></div></div>
              <div class="mbb-app-actions">${tela.botoes.map((botao, i) => `<span class="mbb-app-btn mbb-btn-${i}">${botao}</span>`).join('')}</div>
            </div>
          </div>
          <div class="mbb-fullscreen-caption">Referência visual para reconstrução no Snack</div>
        </div>
      </div>
    </section>`;

  exercise.html += `
    <style>
      #mbb-fullscreens-retained{margin-top:34px;padding-top:8px;border-top:1px solid #dbe3ef}
      #mbb-fullscreens-retained .mbb-retained-head{background:linear-gradient(135deg,#eff6ff,#ffffff);border:1px solid #bfdbfe;border-radius:18px;padding:20px 22px;margin-bottom:16px;box-shadow:0 8px 24px rgba(15,63,134,.07)}
      #mbb-fullscreens-retained .mbb-retained-kicker{font-size:.76rem;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:#1967d2;margin-bottom:6px}
      #mbb-fullscreens-retained .mbb-retained-head h2{margin:0 0 8px;color:#0f3f86;font-size:1.55rem}
      #mbb-fullscreens-retained .mbb-retained-head p{margin:0;color:#475569;line-height:1.55}
      #mbb-fullscreens-retained .mbb-retained-rule{margin-top:12px;background:#fff7d6;border-left:5px solid #f59e0b;border-radius:10px;padding:10px 12px;color:#334155}
      .mbb-fullscreen-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 18px}
      .mbb-fullscreen-tab{border:1px solid #cbd5e1;background:#fff;color:#0f3f86;border-radius:10px;padding:9px 13px;font-weight:800;cursor:pointer}
      .mbb-fullscreen-tab.active{background:#1967d2;color:#fff;border-color:#1967d2;box-shadow:0 4px 12px rgba(25,103,210,.22)}
      .mbb-fullscreen-panel{display:none}
      .mbb-fullscreen-panel.active{display:block}
      .mbb-fullscreen-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(430px,1.05fr);gap:22px;align-items:start}
      .mbb-fullscreen-brief{background:#fff;border:1px solid #dbe3ef;border-radius:16px;padding:20px;box-shadow:0 8px 20px rgba(15,23,42,.06)}
      .mbb-fullscreen-label{display:inline-flex;background:#eaf2ff;color:#0f3f86;border:1px solid #bfdbfe;border-radius:999px;padding:5px 10px;font-size:.76rem;font-weight:900;text-transform:uppercase;letter-spacing:.05em}
      .mbb-fullscreen-brief h3{font-size:1.45rem;color:#0f3f86;margin:12px 0 8px}
      .mbb-fullscreen-brief p,.mbb-fullscreen-brief li{color:#334155;line-height:1.55}
      .mbb-fullscreen-brief ul{padding-left:20px}
      .mbb-fullscreen-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0}
      .mbb-fullscreen-steps>div{background:#f8fbff;border:1px solid #dbeafe;border-radius:10px;padding:10px}
      .mbb-fullscreen-steps strong{display:block;color:#0f3f86;margin-bottom:4px}
      .mbb-fullscreen-steps span{font-size:.86rem;color:#475569;line-height:1.35}
      .mbb-fullscreen-challenge{background:#fff7d6;border-left:5px solid #f59e0b;border-radius:10px;padding:11px 12px;color:#334155}
      .mbb-fullscreen-preview-wrap{background:#eef4fb;border:1px solid #cbd5e1;border-radius:18px;padding:18px;box-shadow:0 10px 28px rgba(15,23,42,.09)}
      .mbb-fullscreen-preview{width:min(100%,540px);margin:0 auto;background:#fff;border:1px solid #94a3b8;border-radius:20px;overflow:hidden;box-shadow:0 12px 30px rgba(15,23,42,.18)}
      .mbb-appbar{background:var(--mbb-app-color);color:#fff;text-align:center;font-size:1.18rem;font-weight:900;padding:16px 18px}
      .mbb-appbody{padding:18px;background:#fff}
      .mbb-app-toprow{display:grid;grid-template-columns:125px 1fr;gap:16px;align-items:start}
      .mbb-app-imagebox{min-height:125px;background:#fff7ed;border:2px solid #fdba74;border-radius:14px;display:flex;align-items:center;justify-content:center;padding:12px}
      .mbb-app-imagebox img{display:block;width:90px;height:90px;object-fit:contain}
      .mbb-app-fields{background:#fdf2f8;border:2px solid #f9a8d4;border-radius:14px;padding:12px}
      .mbb-app-fields label{display:block;font-size:.78rem;font-weight:800;color:#334155;margin:3px 0 4px}
      .mbb-app-input{height:26px;background:#fff;border:1px solid #94a3b8;border-radius:6px;margin-bottom:7px}
      .mbb-app-extra{margin-top:14px;background:#eff6ff;border:2px solid #93c5fd;border-radius:14px;padding:12px;color:#334155}
      .mbb-app-textarea{height:64px;background:#fff;border:1px solid #94a3b8;border-radius:7px;margin-top:7px}
      .mbb-app-actions{display:flex;gap:9px;margin-top:14px;background:#f0fdf4;border:2px solid #86efac;border-radius:14px;padding:11px}
      .mbb-app-btn{flex:1;text-align:center;color:#fff;font-weight:800;border-radius:8px;padding:10px 8px;background:#2563eb}
      .mbb-btn-0{background:#16a34a}.mbb-btn-1{background:#2563eb}.mbb-btn-2{background:#dc2626}
      .mbb-fullscreen-caption{text-align:center;color:#64748b;font-size:.82rem;margin-top:10px;font-weight:700}
      @media(max-width:980px){.mbb-fullscreen-grid{grid-template-columns:1fr}.mbb-fullscreen-preview-wrap{order:-1}.mbb-fullscreen-preview{max-width:560px}}
      @media(max-width:620px){.mbb-fullscreen-steps{grid-template-columns:1fr}.mbb-app-toprow{grid-template-columns:100px 1fr;gap:10px}.mbb-app-imagebox{min-height:100px}.mbb-app-imagebox img{width:72px;height:72px}.mbb-app-actions{flex-wrap:wrap}.mbb-app-btn{min-width:90px}}
    </style>

    <section id="mbb-fullscreens-retained">
      <div class="mbb-retained-head">
        <div class="mbb-retained-kicker">Consolidação MbB</div>
        <h2>Agora construa telas completas</h2>
        <p>Nos desafios anteriores você treinou decisões de layout em partes menores. Agora volte ao tipo de trabalho feito na Agenda de Contatos: observe a tela completa, divida-a em containers e reconstrua-a no Snack.</p>
        <div class="mbb-retained-rule"><strong>Regra:</strong> antes de programar, identifique no desenho quais áreas são linha, coluna, cartão, grupo de campos e grupo de ações.</div>
      </div>
      <div class="mbb-fullscreen-tabs">
        ${telas.map((tela, i) => `<button type="button" class="mbb-fullscreen-tab ${i === 0 ? 'active' : ''}" data-mbb-tab="${i}">${i + 1}. ${tela.titulo}</button>`).join('')}
      </div>
      ${telas.map(telaHtml).join('')}
    </section>`;

  window.setTimeout(() => {
    const root = document.getElementById('mbb-fullscreens-retained');
    if (!root) return;
    const tabs = [...root.querySelectorAll('.mbb-fullscreen-tab')];
    const panels = [...root.querySelectorAll('.mbb-fullscreen-panel')];
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = Number(tab.dataset.mbbTab);
        tabs.forEach((t, i) => t.classList.toggle('active', i === index));
        panels.forEach((p, i) => p.classList.toggle('active', i === index));
      });
    });
  }, 0);

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();