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

  if (typeof renderStepMenu === 'function') renderStepMenu();
})();
