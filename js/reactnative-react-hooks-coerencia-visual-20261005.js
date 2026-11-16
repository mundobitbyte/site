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
import { View, Text, StyleSheet } from 'react-native';

function CartaoClima({ cidade, temperatura }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.temperatura}>{temperatura} °C</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Clima</Text>
        <View style={styles.lista}>
          <CartaoClima cidade="São Paulo" temperatura={26} />
          <CartaoClima cidade="Campinas" temperatura={28} />
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

  setCode('mbb-react-scrollview', `import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const cidades = ['São Paulo', 'Campinas', 'Santos', 'Sorocaba', 'Ribeirão Preto'];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Cidades</Text>
        <ScrollView style={styles.area}>
          {cidades.map((cidade, index) => (
            <View key={cidade}>
              <Text style={styles.item}>{cidade}</Text>
              {index < cidades.length - 1 && <View style={styles.separador} />}
            </View>
          ))}
        </ScrollView>
        <Text style={styles.rodape}>A lista continua para baixo</Text>
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
  area: {
    height: 175,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  item: { paddingVertical: 9 },
  separador: { height: 1, backgroundColor: '#E2E8F0' },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
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

  setCode('mbb-react-pressable', `import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  function abrirDetalhes() {
    console.log('Abrir detalhes');
  }

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.tituloPainel}>Cartão clicável</Text>
        <Pressable style={styles.cartao} onPress={abrirDetalhes}>
          <Text style={styles.cidade}>São Paulo</Text>
          <Text style={styles.dica}>Toque para ver detalhes</Text>
        </Pressable>
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
  tituloPainel: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 14,
  },
  cartao: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderRadius: 12,
  },
  cidade: { fontSize: 18, fontWeight: 'bold' },
  dica: { marginTop: 6, color: '#64748B' },
});`);

  setCode('mbb-react-pressed', `import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Pressable</Text>
        <Pressable
          onPress={() => console.log('Salvou')}
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.texto}>Salvar</Text>
        </Pressable>
        <Text style={styles.rodape}>Durante o toque, a opacidade muda</Text>
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
  botao: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1967D2',
  },
  botaoPressionado: { opacity: 0.6 },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 14,
  },
});`);

  setCode('mbb-react-ref-avancar', `import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const campoNota2 = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.painel}>
        <Text style={styles.titulo}>Notas</Text>
        <TextInput
          style={styles.campo}
          placeholder="Nota 1"
          returnKeyType="next"
          onSubmitEditing={() => campoNota2.current?.focus()}
        />
        <TextInput
          ref={campoNota2}
          style={[styles.campo, styles.campoFoco]}
          placeholder="Nota 2 — foco"
          keyboardType="numeric"
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
  campo: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  campoFoco: {
    borderWidth: 2,
    borderColor: '#1967D2',
    marginBottom: 0,
  },
});`);
}
