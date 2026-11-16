// Coerência visual — React e Hooks
// Ajusta somente os códigos exibidos no módulo 2 para que o resultado no Snack
// reproduza a estrutura visual mostrada nas saídas do próprio material.
// Não altera navegação, ordem, textos pedagógicos nem o módulo Interfaces.

if (typeof modules !== 'undefined' && modules.state && Array.isArray(modules.state.steps)) {
  const steps = modules.state.steps;
  const setCode = (id, code) => {
    const step = steps.find(item => item && item.id === id);
    if (step) step.code = code;
  };

  setCode('mbb-react-jsx', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const nome = 'Ana';
  const pontos = 8;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Olá, {nome}!</Text>
        <Text style={styles.texto}>Você tem {pontos} pontos.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  texto: { fontSize: 16 },
});`);

  setCode('mbb-react-componente-titulo', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Titulo() {
  return <Text style={styles.titulo}>Clima das Cidades</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Titulo />
        <Text style={styles.subtitulo}>Primeiro componente personalizado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    shadowColor: '#0F172A',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  subtitulo: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
  },
});`);

  setCode('mbb-react-cartao-fixo', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima() {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>São Paulo</Text>
      <Text style={styles.temperatura}>26 °C</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Clima</Text>
        <CartaoClima />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  cartao: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
  },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  temperatura: { fontSize: 26, marginTop: 8 },
});`);

  setCode('mbb-react-props', `import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura, aoConsultar }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.temperatura}>{temperatura} °C</Text>
      <Button title="Consultar" onPress={aoConsultar} />
    </View>
  );
}

export default function App() {
  function consultarSaoPaulo() {
    console.log('Consulta solicitada: São Paulo');
  }

  function consultarCampinas() {
    console.log('Consulta solicitada: Campinas');
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Clima</Text>
        <View style={styles.lista}>
          <CartaoClima cidade="São Paulo" temperatura={26} aoConsultar={consultarSaoPaulo} />
          <CartaoClima cidade="Campinas" temperatura={28} aoConsultar={consultarCampinas} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  lista: { gap: 10 },
  cartao: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
  },
  cidade: { fontWeight: 'bold' },
  temperatura: { marginTop: 4 },
});`);

  setCode('mbb-react-map', `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text>
        <Text style={styles.cidade}>{cidade}</Text> — {temperatura} °C
      </Text>
    </View>
  );
}

export default function App() {
  const cidades = [
    { id: 1, cidade: 'São Paulo', temperatura: 26 },
    { id: 2, cidade: 'Campinas', temperatura: 28 },
    { id: 3, cidade: 'Santos', temperatura: 24 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cidades</Text>
        <View style={styles.lista}>
          {cidades.map(item => (
            <CartaoClima
              key={item.id}
              cidade={item.cidade}
              temperatura={item.temperatura}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  lista: { gap: 8 },
  cartao: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 9,
  },
  cidade: { fontWeight: 'bold' },
});`);

  setCode('mbb-react-flatlist', `import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text>
        <Text style={styles.cidade}>{cidade}</Text> — {temperatura} °C
      </Text>
    </View>
  );
}

export default function App() {
  const cidades = [
    { id: 'sp', cidade: 'São Paulo', temperatura: 26 },
    { id: 'campinas', cidade: 'Campinas', temperatura: 28 },
    { id: 'santos', cidade: 'Santos', temperatura: 24 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>FlatList</Text>
        <FlatList
          data={cidades}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CartaoClima cidade={item.cidade} temperatura={item.temperatura} />
          )}
          contentContainerStyle={styles.lista}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEF4FB',
  },
  painel: {
    width: '88%',
    maxWidth: 290,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  lista: { gap: 8 },
  cartao: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 9,
  },
  cidade: { fontWeight: 'bold' },
});`);

}
