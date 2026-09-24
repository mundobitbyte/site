// Atualiza somente o texto pesquisável dentro do catálogo pedagógico único.
// Uso: node meu-mbb/atualizar-pesquisa.cjs [--check]
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const raiz = path.resolve(__dirname, '..');
const arquivo = path.join(__dirname, 'catalogo.json');
const catalogo = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
const fonte = fs.readFileSync(path.join(raiz, 'js/git-conteudo-canonico.js'), 'utf8');
const etapas = vm.runInNewContext(`${fonte}\ngitSteps`);
const textos = new Map(etapas.map(etapa => [String(etapa.id), `${etapa.objective} ${etapa.content}`]));
function limpar(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 12000);
}
let diferencas = 0;
for (const unidade of catalogo.unidades) {
  if (!unidade.localizacao_atual?.startsWith('pages/git.html#git-')) continue;
  const etapa = unidade.localizacao_atual.match(/#git-(\d+)$/)?.[1];
  if (!textos.has(etapa)) throw new Error(`${unidade.conteudo_id} aponta para etapa ausente`);
  const texto = limpar(textos.get(etapa));
  if (texto !== unidade.texto_busca) { diferencas++; unidade.texto_busca = texto; }
}
if (process.argv.includes('--check')) {
  if (diferencas) { console.error(`${diferencas} unidade(s) com índice desatualizado.`); process.exitCode = 1; }
} else {
  fs.writeFileSync(arquivo, JSON.stringify(catalogo, null, 2) + '\n');
  console.log(`Índice atualizado no próprio catálogo: ${diferencas} unidade(s).`);
}
