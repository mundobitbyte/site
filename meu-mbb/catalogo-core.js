(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.MBBCatalogo = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const ativos = new Set(['ativo', 'atualizado', 'movido']);

  function validar(catalogo) {
    if (!catalogo || !Array.isArray(catalogo.unidades)) throw new Error('Catálogo inválido');
    const mapa = new Map();
    for (const unidade of catalogo.unidades) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(unidade.conteudo_id) || mapa.has(unidade.conteudo_id)) throw new Error('ID duplicado ou inválido');
      if (!Number.isInteger(unidade.versao_conteudo) || unidade.versao_conteudo < 1) throw new Error('Versão pedagógica inválida');
      if (!['ativo', 'atualizado', 'movido', 'dividido', 'incorporado', 'substituido', 'removido'].includes(unidade.status)) throw new Error('Status inválido');
      if (ativos.has(unidade.status) && !unidade.localizacao_atual) throw new Error('Unidade ativa sem destino');
      mapa.set(unidade.conteudo_id, unidade);
    }
    for (const unidade of catalogo.unidades) {
      if (unidade.destino_id && !mapa.has(unidade.destino_id)) throw new Error('Destino não catalogado');
      if (unidade.proximo_id && !mapa.has(unidade.proximo_id)) throw new Error('Próximo conteúdo não catalogado');
      if (unidade.status === 'removido' && !unidade.proximo_id && !unidade.destino_id) throw new Error('Conteúdo removido sem orientação de retorno');
      if (['dividido', 'incorporado', 'substituido'].includes(unidade.status) && !unidade.destino_id) throw new Error('Migração sem destino');
    }
    for (const unidade of catalogo.unidades) {
      if (!resolver(catalogo, unidade.conteudo_id).unidade) throw new Error('Migração sem unidade ativa');
    }
    return catalogo;
  }

  function resolver(catalogo, id) {
    const mapa = new Map(catalogo.unidades.map(unidade => [unidade.conteudo_id, unidade]));
    const visitados = new Set();
    let atual = mapa.get(id);
    while (atual) {
      if (visitados.has(atual.conteudo_id)) throw new Error('Ciclo no catálogo');
      visitados.add(atual.conteudo_id);
      if (ativos.has(atual.status)) return { unidade: atual, origem_id: id, migrado: id !== atual.conteudo_id };
      atual = mapa.get(atual.destino_id || atual.proximo_id);
    }
    return { unidade: null, origem_id: id, migrado: false };
  }

  function atuais(catalogo) {
    return catalogo.unidades.filter(unidade => ativos.has(unidade.status)).sort((a, b) => a.ordem - b.ordem);
  }

  function progresso(catalogo, registros) {
    const unidades = atuais(catalogo).filter(unidade => unidade.obrigatorio !== false);
    const concluidos = new Set();
    for (const [id, registro] of Object.entries(registros || {})) {
      if (!registro.concluido) continue;
      const origem = catalogo.unidades.find(unidade => unidade.conteudo_id === id);
      const destino = resolver(catalogo, id).unidade;
      if (destino && (id === destino.conteudo_id || origem?.preservar_conclusao === true)) concluidos.add(destino.conteudo_id);
    }
    return { concluidas: unidades.filter(unidade => concluidos.has(unidade.conteudo_id)).length, total: unidades.length,
      percentual: unidades.length ? Math.round(100 * unidades.filter(unidade => concluidos.has(unidade.conteudo_id)).length / unidades.length) : 0 };
  }

  function pesquisar(catalogo, termo) {
    const tokens = (termo || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    const contar = (texto, trecho) => texto.split(trecho).length - 1;
    return atuais(catalogo).map(unidade => {
      const titulo = unidade.titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
      const texto = `${unidade.area} ${unidade.modulo} ${unidade.texto_busca || ''}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
      const pontos = tokens.every(token => titulo.includes(token) || texto.includes(token))
        ? tokens.reduce((soma, token) => soma + (titulo.includes(token) ? 20 : 0) + Math.min(contar(texto, token), 10), 0)
          + 3 * Math.min(contar(texto, tokens.join(' ')), 10) : 0;
      return { unidade, pontos };
    }).filter(item => item.pontos).sort((a, b) => b.pontos - a.pontos || a.unidade.ordem - b.unidade.ordem).map(item => item.unidade);
  }

  return { validar, resolver, atuais, progresso, pesquisar };
}));
