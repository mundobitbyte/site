// Correção de progressão MbB — evita usar recursos antes da necessidade.
(function () {
  if (typeof modules === 'undefined' || !modules.javascriptEssencial) return;

  const js = modules.javascriptEssencial;
  const intro = js.steps?.find(step => step.id === 'js-intro-mbb');
  if (intro) {
    intro.highlight =
      'Não vamos fazer um curso separado de JavaScript. Cada recurso entra porque resolve uma necessidade que reaparecerá em React Native. Nos códigos, concentre-se primeiro no JavaScript; a pequena interface serve apenas para tornar o resultado visível no Snack.';
  }

  const dados = js.steps?.find(step => step.id === 'js-dados-mbb');
  if (dados) {
    dados.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana Souza';
  const telefone = '(11) 99999-1234';
  const favorito = true;
  let quantidadeContatos = 1;

  quantidadeContatos = quantidadeContatos + 1;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato preparado</Text>
      <Text>{nome}</Text>
      <Text>{telefone}</Text>
      <Text>Total na agenda: {quantidadeContatos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`;
    dados.added = `A Agenda precisa lembrar informações.

const nome = 'Ana Souza';
-> texto guardado em uma constante.

const favorito = true;
-> boolean: verdadeiro ou falso. Vamos usá-lo quando surgir uma decisão.

let quantidadeContatos = 1;
quantidadeContatos = quantidadeContatos + 1;
-> aqui let faz sentido porque o valor recebe uma nova atribuição.

Tipos vistos: texto (string), número e boolean.`;
    dados.preview = `
      <div class="mbb-js-preview"><div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">Contato preparado</div>
        <div class="mbb-js-preview-line">Ana Souza</div>
        <div class="mbb-js-preview-line">(11) 99999-1234</div>
        <div class="mbb-js-preview-highlight">Total na agenda: 2</div>
      </div></div>`;
    dados.note = 'Use const como padrão. Use let quando o valor realmente precisar receber outra atribuição no JavaScript comum.';
  }

  const expressoes = js.steps?.find(step => step.id === 'js-expressoes-mbb');
  if (expressoes) {
    expressoes.menu = '2. Calcular';
    expressoes.title = '2 — Quantas vagas ainda restam?';
    expressoes.objective = 'Usar uma expressão aritmética para responder a uma necessidade da Agenda.';
    expressoes.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const quantidade = 8;
  const limite = 10;
  const vagas = limite - quantidade;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text>Contatos: {quantidade}</Text>
      <Text>Limite: {limite}</Text>
      <Text>Vagas restantes: {vagas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});`;
    expressoes.addedTitle = 'A conta aparece porque existe uma pergunta';
    expressoes.added = `Problema:
quantas vagas ainda existem?

limite - quantidade
-> produz a resposta.

A expressão não entra como fórmula isolada. Ela resolve uma necessidade do aplicativo.

No próximo passo surge outra pergunta:
ainda é permitido cadastrar?`;
    expressoes.preview = `
      <div class="mbb-js-preview"><div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">Agenda</div>
        <div class="mbb-js-preview-line">Contatos: 8</div>
        <div class="mbb-js-preview-line">Limite: 10</div>
        <div class="mbb-js-preview-highlight">Vagas restantes: 2</div>
      </div></div>`;
    expressoes.note = 'Primeiro calculamos. A comparação entra somente quando o programa precisar decidir algo com esses valores.';
  }

  const decisao = js.steps?.find(step => step.id === 'js-if-mbb');
  if (decisao) {
    decisao.title = '3 — A Agenda precisa decidir se aceita outro contato';
    decisao.objective = 'Combinar comparação e if/else quando o programa precisa escolher entre dois caminhos.';
    decisao.code = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const quantidade = 8;
  const limite = 10;
  let mensagem;

  if (quantidade < limite) {
    mensagem = 'Pode cadastrar outro contato';
  } else {
    mensagem = 'Limite atingido';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});`;
    decisao.addedTitle = 'Agora a comparação é necessária';
    decisao.added = `quantidade < limite
-> pergunta se 8 é menor que 10.

if (...) { ... } else { ... }
-> usa essa resposta para escolher uma mensagem.

Encadeamento:
primeiro calculamos as vagas;
agora usamos os mesmos dados para tomar uma decisão.`;
    decisao.preview = `
      <div class="mbb-js-preview"><div class="mbb-js-preview-card">
        <div class="mbb-js-preview-title">Cadastro</div>
        <div class="mbb-js-preview-highlight">Pode cadastrar outro contato</div>
      </div></div>`;
    decisao.note = 'O operador ternário ficará para quando uma escolha curta fizer sentido dentro da interface; aqui o if/else deixa a regra mais clara para o iniciante.';
  }

  // Padrão MbB: ações práticas ficam visualmente destacadas.
  const porId = id => js.steps?.find(step => step.id === id);
  const acrescentarAcao = (id, acao) => {
    const step = porId(id);
    if (!step) return;
    const notaOriginal = typeof step.note === 'string' ? step.note : '';
    if (notaOriginal.includes('mbb-js-action')) return;
    step.note = `
      <div class="mbb-js-action">
        <strong>Faça agora</strong>
        <span>${acao}</span>
      </div>
      ${notaOriginal ? `<div class="mbb-js-note-context"><strong>Observe:</strong> ${notaOriginal}</div>` : ''}
    `;
  };

  acrescentarAcao('js-dados-mbb', '<b>Altere</b> o valor inicial de <code>quantidadeContatos</code> de <code>1</code> para <code>2</code> e <b>observe o preview</b>: o total passa a <code>3</code>.');
  acrescentarAcao('js-expressoes-mbb', '<b>Altere</b> <code>quantidade</code> de <code>8</code> para <code>9</code> e <b>observe</b> <code>vagas</code> passar a <code>1</code>.');
  acrescentarAcao('js-if-mbb', '<b>Altere</b> <code>quantidade</code> para <code>10</code> e <b>observe o preview</b>: a mensagem passa para <code>Limite atingido</code>.');
  acrescentarAcao('js-funcoes-mbb', '<b>Altere</b> o nome enviado para a função <code>identificarContato</code> e <b>observe</b> o resultado no preview.');
  acrescentarAcao('js-arrow-template-mbb', '<b>Altere</b> o nome usado no exemplo e <b>observe</b> a frase produzida pela arrow function e pelo template literal.');
  acrescentarAcao('js-objeto-mbb', '<b>Altere</b> o valor da propriedade <code>nome</code> do objeto e <b>observe</b> a mudança no preview.');
  acrescentarAcao('js-array-mbb', '<b>Adicione</b> <code>Diego</code> ao array de nomes e <b>observe</b> o total passar de <code>3</code> para <code>4</code>.');
  acrescentarAcao('js-array-objetos-mbb', '<b>Altere</b> o nome ou o telefone do primeiro contato do array e <b>observe</b> a informação atualizada no preview.');
  acrescentarAcao('js-map-mbb', '<b>Altere</b> o nome de um contato na lista de origem e <b>observe</b> o resultado produzido por <code>map()</code>.');
  acrescentarAcao('js-desestruturacao-mbb', '<b>Altere</b> uma propriedade do objeto de origem e <b>observe</b> o valor usado após a desestruturação.');
  acrescentarAcao('js-spread-mbb', '<b>Altere</b> o valor atualizado na cópia do objeto e <b>observe</b> o novo objeto criado com spread.');

  if (!document.getElementById('mbb-js-acoes-praticas-style')) {
    const style = document.createElement('style');
    style.id = 'mbb-js-acoes-praticas-style';
    style.textContent = `
      .note:has(.mbb-js-action)>strong:first-child{display:none}
      .mbb-js-action{display:grid;gap:5px;margin:0 0 10px;padding:11px 12px;border:1px solid #cfe7d4;border-radius:10px;background:#f2fbf4;color:#24422c}
      .mbb-js-action>strong{color:#176b34}
      .mbb-js-action b{font-weight:800;color:#123b73}
      .mbb-js-action code{font-weight:700}
      .mbb-js-note-context{margin-top:6px;color:#475569}
      .mbb-js-note-context>strong{color:#475569}
    `;
    document.head.appendChild(style);
  }

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
