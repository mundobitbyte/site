// Reforma incremental do módulo 3 — React e Hooks (MbB)
// Este arquivo complementa js/reactnative.js sem substituir o conteúdo existente.

if (typeof modules !== 'undefined' && modules.state) {
  modules.state.subtitle = 'Estado, eventos, funções e Hooks: useState, useRef e useEffect.';

  const passosState = modules.state.steps;
  const jaAplicado = passosState.some(step => step.id === 'state-13-useeffect-intro');

  if (!jaAplicado) {
    const fechamentoMedia = passosState.find(step => step.id === 'state-12-final');
    if (fechamentoMedia) {
      fechamentoMedia.menu = '12. Média final';
      fechamentoMedia.title = '12 — Fechamento do app Média Escolar';
      fechamentoMedia.objective = 'Consolidar useState e useRef antes de avançar para useEffect.';
      fechamentoMedia.note = 'A Média Escolar fecha o primeiro ciclo do módulo: useState guarda dados que mudam e useRef permite acessar diretamente o primeiro TextInput para devolver o foco. Agora começaremos um pequeno laboratório separado para compreender useEffect.';
    }

    const previewBitcoin = `
      <div style="height:100%;display:flex;align-items:center;justify-content:center;background:#eef4fb;padding:16px;box-sizing:border-box;">
        <div style="width:88%;max-width:280px;background:#fff;border:1px solid #cbd5e1;border-radius:18px;padding:22px;box-shadow:0 8px 24px rgba(15,23,42,.12);text-align:center;font-family:Arial,sans-serif;">
          <div style="font-size:14px;color:#64748b;margin-bottom:8px;">Cotação automática</div>
          <div style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:14px;">Bitcoin</div>
          <div style="font-size:13px;color:#64748b;">1 BTC</div>
          <div style="font-size:26px;font-weight:800;color:#166534;margin:8px 0 14px;">R$ 000.000,00</div>
          <div style="font-size:12px;color:#475569;">Atualiza automaticamente a cada 30 segundos</div>
        </div>
      </div>`;

    const novosPassos = [
      {
        id: 'state-13-useeffect-intro',
        menu: '13. useEffect',
        title: '13 — Para que serve o useEffect?',
        objective: 'Entender quando um componente precisa executar algo além de simplesmente desenhar a tela.',
        modulePage: true,
        kicker: 'Um novo tipo de tarefa',
        lead: 'useState guarda informações que mudam. useRef mantém uma referência. Mas alguns aplicativos também precisam executar uma ação quando a tela é carregada ou enquanto ela permanece aberta.',
        highlight: 'É aí que entra o useEffect. Ele permite executar um efeito ligado ao ciclo do componente. Neste laboratório, o efeito será consultar a cotação do Bitcoin automaticamente.',
        boxes: [
          ['useState', 'Guarda um valor que participa da interface. Quando o valor muda, a tela é atualizada.'],
          ['useRef', 'Mantém uma referência sem provocar nova renderização quando current muda.'],
          ['useEffect', 'Executa um efeito depois que o componente é renderizado, de acordo com as dependências informadas.'],
          ['Nosso exemplo', 'Ao abrir o app, consultar a cotação do Bitcoin sem o usuário precisar apertar um botão.'],
          ['Depois', 'Repetir a consulta automaticamente a cada 30 segundos.'],
          ['Importante', 'O foco aqui é o Hook useEffect. O funcionamento detalhado de APIs, HTTP e JSON será estudado no módulo 4.']
        ]
      },
      {
        id: 'state-14-bitcoin-base',
        menu: '14. Bitcoin',
        title: '14 — Preparando o app Bitcoin',
        objective: 'Criar a interface e o state que receberá a cotação.',
        code: `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [preco, setPreco] = useState('Aguardando consulta...');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bitcoin</Text>
      <Text style={styles.rotulo}>1 BTC</Text>
      <Text style={styles.preco}>{preco}</Text>
      <Text style={styles.aviso}>Cotação automática</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#EEF4FB',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  rotulo: {
    fontSize: 16,
    color: '#64748B',
  },
  preco: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    marginVertical: 12,
  },
  aviso: {
    fontSize: 13,
    color: '#64748B',
  },
});`,
        addedTitle: 'Trecho em foco',
        added: `const [preco, setPreco] = useState('Aguardando consulta...');

<Text style={styles.preco}>{preco}</Text>

Primeiro criamos o lugar onde a cotação será guardada.
Ainda não existe consulta automática nesta etapa.`,
        preview: previewBitcoin,
        note: 'Antes do useEffect, montamos a tela e preparamos o state. Assim o aluno separa interface, memória e efeito em etapas diferentes.'
      },
      {
        id: 'state-15-primeiro-effect',
        menu: '15. Ao abrir',
        title: '15 — Executando uma consulta ao abrir o app',
        objective: 'Usar useEffect para executar uma ação automaticamente quando o componente for carregado.',
        code: `import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [preco, setPreco] = useState('Carregando...');

  async function consultarBitcoin() {
    try {
      const resposta = await fetch(
        'https://economia.awesomeapi.com.br/json/last/BTC-BRL'
      );
      const dados = await resposta.json();
      const valor = Number(dados.BTCBRL.bid);

      setPreco(
        valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      );
    } catch (erro) {
      setPreco('Não foi possível consultar');
    }
  }

  useEffect(() => {
    consultarBitcoin();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bitcoin</Text>
      <Text style={styles.rotulo}>1 BTC</Text>
      <Text style={styles.preco}>{preco}</Text>
      <Text style={styles.aviso}>Cotação automática</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#EEF4FB',
  },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 18 },
  rotulo: { fontSize: 16, color: '#64748B' },
  preco: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    marginVertical: 12,
  },
  aviso: { fontSize: 13, color: '#64748B' },
});`,
        addedTitle: 'Trecho em foco',
        added: `import React, { useEffect, useState } from 'react';

useEffect(() => {
  consultarBitcoin();
}, []);

Leitura didática:
1. O componente aparece na tela.
2. O useEffect é executado.
3. consultarBitcoin() busca a informação.
4. setPreco() altera o state.
5. React atualiza o valor mostrado.

O [] significa: execute este efeito na montagem do componente.`,
        preview: previewBitcoin,
        note: 'Nesta etapa, fetch e JSON aparecem apenas como parte da tarefa que o efeito executa. Eles serão estudados com calma no módulo 4 — Web Services/APIs.'
      },
      {
        id: 'state-16-intervalo',
        menu: '16. Repetir',
        title: '16 — Atualizando a cotação automaticamente',
        objective: 'Usar setInterval dentro do useEffect para repetir a consulta.',
        code: `import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [preco, setPreco] = useState('Carregando...');

  async function consultarBitcoin() {
    try {
      const resposta = await fetch(
        'https://economia.awesomeapi.com.br/json/last/BTC-BRL'
      );
      const dados = await resposta.json();
      const valor = Number(dados.BTCBRL.bid);

      setPreco(
        valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      );
    } catch (erro) {
      setPreco('Não foi possível consultar');
    }
  }

  useEffect(() => {
    consultarBitcoin();

    const intervalo = setInterval(() => {
      consultarBitcoin();
    }, 30000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bitcoin</Text>
      <Text style={styles.rotulo}>1 BTC</Text>
      <Text style={styles.preco}>{preco}</Text>
      <Text style={styles.aviso}>
        Atualiza automaticamente a cada 30 segundos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#EEF4FB',
  },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 18 },
  rotulo: { fontSize: 16, color: '#64748B' },
  preco: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    marginVertical: 12,
  },
  aviso: { fontSize: 13, color: '#64748B', textAlign: 'center' },
});`,
        addedTitle: 'Trecho em foco',
        added: `useEffect(() => {
  consultarBitcoin();

  const intervalo = setInterval(() => {
    consultarBitcoin();
  }, 30000);

  return () => clearInterval(intervalo);
}, []);

setInterval(..., 30000)
→ repete a consulta a cada 30 segundos.

return () => clearInterval(intervalo)
→ encerra o temporizador quando o componente deixa de existir.`,
        preview: previewBitcoin,
        note: 'A função retornada pelo useEffect é a limpeza do efeito. Sem clearInterval, o temporizador poderia continuar ativo indevidamente depois que o componente saísse da tela.'
      },
      {
        id: 'state-17-hooks-resumo',
        menu: '17. Hooks lado a lado',
        title: '17 — useState, useRef e useEffect lado a lado',
        objective: 'Consolidar a função de cada Hook estudado.',
        modulePage: true,
        kicker: 'Não são três versões da mesma coisa',
        lead: 'Os três Hooks aparecem no mesmo módulo porque resolvem problemas diferentes. Saber escolher entre eles é mais importante do que decorar sua sintaxe.',
        highlight: 'Pergunte sempre: preciso guardar um valor que muda na interface? preciso manter uma referência? ou preciso executar um efeito relacionado ao ciclo do componente?',
        boxes: [
          ['useState', 'Use quando o valor precisa participar da interface e sua mudança deve provocar nova renderização. Exemplo: nota, média, situação e preço do Bitcoin.'],
          ['useRef', 'Use quando precisa manter uma referência sem depender de nova renderização. Exemplo: acessar o TextInput da Nota 1 e chamar focus().'],
          ['useEffect', 'Use para sincronizar o componente com algo externo ou executar um efeito depois da renderização. Exemplo: consultar a cotação e controlar um intervalo.'],
          ['Dependências []', 'Neste laboratório, o array vazio faz o efeito ser configurado uma vez após a montagem do componente.'],
          ['Cleanup', 'A função retornada pelo efeito desfaz o que precisa ser encerrado. Exemplo: clearInterval.'],
          ['Próximo módulo', 'Agora o aluno já viu uma API funcionando. No módulo 4, aprenderá requisição HTTP, JSON e consumo de Web Services de forma explícita.']
        ]
      }
    ];

    const indiceExercicios = passosState.findIndex(step => step.id === 'exercicios-state');
    if (indiceExercicios >= 0) {
      passosState.splice(indiceExercicios, 0, ...novosPassos);
    } else {
      passosState.push(...novosPassos);
    }
  }
}
