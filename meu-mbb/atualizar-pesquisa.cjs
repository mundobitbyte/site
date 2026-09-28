// Atualiza o texto pesquisável dentro do catálogo pedagógico único.
// IDs, versões e localizações são editados no catálogo, nunca derivados aqui.
// Uso: node meu-mbb/atualizar-pesquisa.cjs [--check]
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const raiz = path.resolve(__dirname, '..');
const arquivo = path.join(__dirname, 'catalogo.json');
const catalogo = JSON.parse(fs.readFileSync(arquivo, 'utf8'));

function limpar(html, limite = 12000) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/\s+/g, ' ').trim().slice(0, limite);
}

const fonteGit = fs.readFileSync(path.join(raiz, 'js/git-conteudo-canonico.js'), 'utf8');
const fonteExercicios = fs.readFileSync(path.join(raiz, 'js/git-exercicios-canonico.js'), 'utf8');
const fonteComandos = fs.readFileSync(path.join(raiz, 'js/git-comandos-canonico.js'), 'utf8');
const conjuntosGit = {
  git: vm.runInNewContext(`${fonteGit}\ngitSteps`),
  github: vm.runInNewContext(`${fonteGit}\ngithubSteps`),
  exercicios: vm.runInNewContext(`${fonteExercicios}\nexerciseSteps`),
  comandos: vm.runInNewContext(`${fonteComandos}\ncommandSteps`)
};
const textoGit = new Map(Object.entries(conjuntosGit).flatMap(([grupo, etapas]) =>
  etapas.map(etapa => [`pages/git.html#${grupo}-${etapa.id}`, limpar(`${etapa.objective} ${etapa.content}`)])));

function vocabulario(texto, limite = Infinity) {
  const palavras = texto.match(/[\p{L}\p{N}_+#.-]{3,}/gu) || [];
  const vocabularioCompleto = Array.from(new Set(palavras)).join(' ');
  return Number.isFinite(limite) ? vocabularioCompleto.slice(0, limite) : vocabularioCompleto;
}

function textoPagina(localizacao) {
  const relativo = localizacao.split('#')[0];
  if (!/^[a-z0-9/_-]+\.html$/.test(relativo)) throw new Error(`Localização inválida: ${localizacao}`);
  const caminho = path.resolve(raiz, relativo);
  if (!caminho.startsWith(raiz + path.sep) || !fs.existsSync(caminho)) throw new Error(`Página ausente: ${relativo}`);
  const html = fs.readFileSync(caminho, 'utf8');
  const texto = limpar(html, Infinity);
  const scripts = Array.from(html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi), item => item[1].split('?')[0])
    .filter(src => !/^(?:https?:|\/)/.test(src))
    .map(src => path.resolve(path.dirname(caminho), src))
    .filter(src => src.startsWith(path.join(raiz, 'js') + path.sep) && fs.existsSync(src))
    .filter(src => !/visualizador|destaques|ajustes|navegacao|limpeza-editorial|integracao|mbb-busca-global/i.test(path.basename(src)));
  const fonte = scripts.map(src => fs.readFileSync(src, 'utf8')).join(' ');
  // Mantém texto corrido no início para relevância e inclui todo o vocabulário único
  // do restante da página e dos scripts. Assim páginas grandes não criam pontos cegos.
  return [texto.slice(0, 40000), vocabulario(texto.slice(40000)), vocabulario(fonte)]
    .filter(Boolean).join(' ');
}

let diferencas = 0;
for (const unidade of catalogo.unidades) {
  if (!unidade.localizacao_atual) continue;
  const texto = textoGit.get(unidade.localizacao_atual) || textoPagina(unidade.localizacao_atual);
  if (texto !== unidade.texto_busca) { diferencas++; unidade.texto_busca = texto; }
}
if (process.argv.includes('--check')) {
  if (diferencas) { console.error(`${diferencas} unidade(s) com índice desatualizado.`); process.exitCode = 1; }
} else {
  fs.writeFileSync(arquivo, JSON.stringify(catalogo, null, 2) + '\n');
  console.log(`Índice atualizado no próprio catálogo: ${diferencas} unidade(s).`);
}
