import { test } from 'node:test';
import assert from 'node:assert/strict';
import regras from '../lib/regras.js';
test('prazo ausente, zero e encerramento continuam distintos', () => {
  for (const minutos of [null,0,240]) assert.equal(regras.conferir({nomeNegocio:'Café',pedidosAbertos:false,tempoEstimado:minutos}).tempoEstimado,minutos);
  for (const minutos of [-1,241,'30',true]) assert.throws(()=>regras.conferir({nomeNegocio:'Café',pedidosAbertos:true,tempoEstimado:minutos}));
  assert.throws(()=>regras.conferir({nomeNegocio:'Café',pedidosAbertos:true,tempoEstimado:30,operador:true}));
});
test('mudança relevante e revisão do texto', () => {
  const a={nomeNegocio:'Café',pedidosAbertos:true,tempoEstimado:30};
  assert.equal(regras.mudou(a,{...a}),false); assert.equal(regras.mudou(a,{...a,tempoEstimado:null}),true);
  assert.throws(()=>regras.conferirRascunho('curto')); assert.throws(()=>regras.conferirPedido({produto:[],ingredientes:'café'}));
  assert.equal(regras.conferirRascunho('  Café coado preparado na hora.  '),'Café coado preparado na hora.');
});
