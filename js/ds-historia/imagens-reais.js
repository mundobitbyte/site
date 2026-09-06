(() => {
  'use strict';

  const MBB = window.MBBHistoria = window.MBBHistoria || {};
  if (typeof MBB.showLesson !== 'function' || MBB.__realImagesWrapped) return;
  MBB.__realImagesWrapped = true;

  const originalShowLesson = MBB.showLesson;

  const visuals = {
    'Como podemos saber o que aconteceu no passado?': {
      placement: { type:'after-first-paragraph', heading:'2. O que pode virar fonte histórica?' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rosetta_Stone,_British_Museum.jpg?width=1200',
      alt:'Pedra de Roseta exposta no Museu Britânico, com inscrições em hieróglifos, demótico e grego antigo.',
      title:'Uma fonte pode ser escrita e material ao mesmo tempo',
      caption:'Pedra de Roseta, estela produzida em 196 a.C. O objeto, suas inscrições e o contexto em que foi produzido precisam ser interrogados em conjunto — exatamente como fazemos com qualquer fonte histórica.',
      credit:'Foto: APK / Wikimedia Commons — CC BY 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Rosetta_Stone,_British_Museum.jpg'
    },
    'Por que algumas das primeiras grandes sociedades cresceram junto aos rios?': {
      placement: { type:'after-first-paragraph', heading:'6. A escrita não nasceu para escrever livros escolares' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cuneiform_tablet_showing_grain_transaction_of_two_types_of_grain,_circa_3000_BCE,_Iraq,_British_Museum,_London.jpg?width=1200',
      alt:'Tabuinha de argila com escrita cuneiforme usada para registrar transação de grãos na Mesopotâmia, por volta de 3000 a.C.',
      title:'Aqui está um registro administrativo real',
      caption:'Tabuinha cuneiforme de cerca de 3000 a.C., do atual Iraque, registrando uma transação envolvendo dois tipos de grão. Ela mostra por que escrita, armazenamento e administração aparecem conectados no capítulo.',
      credit:'Foto: SpeakingArch / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Cuneiform_tablet_showing_grain_transaction_of_two_types_of_grain,_circa_3000_BCE,_Iraq,_British_Museum,_London.jpg'
    },
    'Existia uma única forma de viver nas Américas antes da chegada dos europeus?': {
      placement: { type:'after-first-paragraph', heading:'4. Incas: um Estado andino chamado Tawantinsuyu' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/%C3%81rea_de_cultivo_Inca_em_Machu_Picchu,_Peru.jpg?width=1200',
      alt:'Terraços agrícolas incas em Machu Picchu, no Peru, construídos em encostas íngremes.',
      title:'A paisagem também é uma fonte histórica',
      caption:'Terraços agrícolas incas em Machu Picchu. A imagem permite observar como técnica, ambiente e trabalho humano se combinavam para transformar encostas andinas em áreas de cultivo — sem reduzir a sociedade inca apenas a “grandes construções”.',
      credit:'Foto: Angeoribeiro / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:%C3%81rea_de_cultivo_Inca_em_Machu_Picchu,_Peru.jpg'
    },
    'Se todos eram declarados iguais, quem continuou excluído?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg?width=1200',
      alt:'Representação de 1789 da Declaração dos Direitos do Homem e do Cidadão, com o texto dos artigos e figuras alegóricas.',
      title:'Direitos proclamados também podem ser lidos como fonte',
      caption:'Representação da Declaração dos Direitos do Homem e do Cidadão, de 1789. O documento ajuda a investigar a linguagem universal dos direitos e, ao mesmo tempo, a perguntar quem tinha acesso real à cidadania, à participação política e à liberdade naquele contexto.',
      credit:'Jean-Jacques-François Le Barbier / Paris Musées, Musée Carnavalet — CC0',
      source:'https://commons.wikimedia.org/wiki/File:Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg'
    },
    'Como a ideia de “civilização” foi usada para justificar dominação?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kongokonferenz.jpg?width=1200',
      alt:'Ilustração publicada em 1884 mostrando participantes europeus da Conferência de Berlim reunidos em torno de uma mesa.',
      title:'Olhe também para quem não está à mesa',
      caption:'Ilustração contemporânea à Conferência de Berlim, publicada em 1884. Não é uma fotografia. Ela é útil justamente como fonte: mostra representantes europeus debatendo a África e permite perguntar quais povos africanos aparecem — ou não aparecem — na cena.',
      credit:'Adalbert von Roessler, 1884 / Wikimedia Commons — domínio público',
      source:'https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg'
    },
    'Por que sociedades ainda disputam o passado?': {
      placement: { type:'after-opening' },
      image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Defaced-lee-statue-2020.jpg?width=1200',
      alt:'Monumento equestre de Robert E. Lee em Richmond coberto por grafites após protestos de 2020.',
      title:'Quando um monumento deixa de ser apenas monumento',
      caption:'Monumento de Robert E. Lee, em Richmond, após os protestos de 2020. A fotografia não responde se uma estátua deve permanecer, ser retirada ou reinterpretada; ela mostra que monumentos podem se tornar lugares de disputa sobre memória, homenagem, racismo e espaço público.',
      credit:'Foto: Mk17b / Wikimedia Commons — CC BY-SA 4.0',
      source:'https://commons.wikimedia.org/wiki/File:Defaced-lee-statue-2020.jpg'
    }
  };

  function figureHTML(item) {
    return `
      <figure class="history-figure history-figure-real" data-history-real-image>
        <a class="history-figure-link" href="${item.source}" target="_blank" rel="noopener noreferrer" aria-label="Abrir fonte e licença da imagem em nova aba">
          <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
        </a>
        <figcaption>
          <strong>${item.title}</strong>
          <span>${item.caption}</span>
          <small>${item.credit}. <a href="${item.source}" target="_blank" rel="noopener noreferrer">Fonte e licença</a>.</small>
        </figcaption>
      </figure>`;
  }

  function findHeading(root, startsWith) {
    return [...root.querySelectorAll('h3')].find(h => h.textContent.trim().startsWith(startsWith));
  }

  function injectVisual(title) {
    const item = visuals[title];
    const root = document.getElementById('lessonContent');
    if (!item || !root || root.querySelector('[data-history-real-image]')) return;

    if (item.placement.type === 'after-opening') {
      const opening = root.querySelector('.history-opening');
      if (opening) opening.insertAdjacentHTML('afterend', figureHTML(item));
      return;
    }

    if (item.placement.type === 'after-first-paragraph') {
      const heading = findHeading(root, item.placement.heading);
      if (!heading) return;
      let target = heading.nextElementSibling;
      while (target && target.tagName !== 'P') target = target.nextElementSibling;
      (target || heading).insertAdjacentHTML('afterend', figureHTML(item));
    }
  }

  MBB.showLesson = function(args) {
    originalShowLesson(args);
    injectVisual(args?.title || '');
  };
})();
