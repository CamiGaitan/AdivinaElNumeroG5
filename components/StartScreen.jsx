import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const StartScreen = ({ navigation, setRepeat, generateNumber }) => {
  const startGame = (allowRepeats) => {
    setRepeat(allowRepeats);
    generateNumber(allowRepeats);
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivina el número que pienso</Text>
      <Image source={require('../assets/images/wizard.gif')} style={{ width: 200, height: 200 }} />
      <Text style={styles.text}>¿Juegas con números repetidos?</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => startGame(true)}
        >
          <Text style={styles.buttonText}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => startGame(false)}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF'
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
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CBB17',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default StartScreen;
