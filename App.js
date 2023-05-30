import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry

      />
      <Button title="Iniciar sesión" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default App;
