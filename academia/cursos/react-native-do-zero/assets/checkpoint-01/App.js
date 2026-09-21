import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import IdentidadeEmpresa from './components/IdentidadeEmpresa';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Santa Filomena Água & Gás</Text>
      <Card>
        <IdentidadeEmpresa />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
