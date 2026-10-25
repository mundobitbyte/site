import { test } from "node:test";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
assert.ok(process.env.MBB_CAP2_MODULO, "Informe o módulo compilado do download real.");
const { conferirAtendimento } = await import(pathToFileURL(process.env.MBB_CAP2_MODULO).href);
const valido = {
  nomeNegocio: "Café Aurora",
  mensagemStatus: "Pedidos para retirada estão abertos.",
  mensagemTempo: "Tempo estimado: 30 minutos.",
};

test("contrato real aceita três textos e não leva campos extras à apresentação", () => {
  assert.deepEqual(conferirAtendimento({ ...valido, observacao: "ensaio" }), valido);
});

test("contrato real recusa formas e campos inválidos e volta a aceitar o correto", () => {
  const casos = [null, [], "texto", 30, false, {}];
  for (const campo of Object.keys(valido)) {
    const ausente = { ...valido }; delete ausente[campo]; casos.push(ausente);
    for (const valor of [undefined, null, 30, false, "", "   "]) {
      casos.push({ ...valido, [campo]: valor });
    }
  }
  for (const caso of casos) {
    assert.throws(() => conferirAtendimento(caso));
    assert.deepEqual(conferirAtendimento(valido), valido);
  }
});

