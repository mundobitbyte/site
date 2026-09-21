import { View, StyleSheet, Image } from 'react-native';

export default function IdentidadeEmpresa() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/santa-filomena.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 128,
    width: 128,
  },
});
