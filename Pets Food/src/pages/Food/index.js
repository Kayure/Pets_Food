import { StyleSheet, Text, View } from 'react-native';

export default function Food() {
  return (
    <View style={styles.container}>
      <Text>Pagina Salvos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
