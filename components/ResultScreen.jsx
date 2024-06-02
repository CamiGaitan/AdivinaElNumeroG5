import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen = ({ route, navigation, onRestart }) => {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Juego Terminado!</Text>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRestart(navigation)}
      >
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#BF40BF'
  },
  text: {
    fontSize: 16,
    fontFamily: 'monospace',
    fontWeight: 'regular',
    color: '#BF40BF'
  },
  button: {
    backgroundColor: '#4CBB17',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default ResultScreen;
