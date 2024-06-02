import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import GuessInput from './GuessInput';

const GameScreen = ({ navigation, correctNumber, attemptsLeft, setAttemptsLeft, generateNumber, repeat }) => {
  const [guess, setGuess] = useState('');
  const [guessHistory, setGuessHistory] = useState([]);
  const [hint, setHint] = useState('XXXX');

  useEffect(() => {
    generateNumber(repeat);
  }, []);

  const handleGuess = () => {
    if (guess.length !== 4) {
      alert('El número debe tener 4 cifras.');
      return;
    }

    let correct = 0;
    let regular = 0;
    let incorrect = 0;
    let newHint = hint.split('');

    for (let i = 0; i < 4; i++) {
      if (guess[i] === correctNumber[i]) {
        correct++;
        newHint[i] = guess[i];
      } else if (correctNumber.includes(guess[i])) {
        regular++;
      } else {
        incorrect++;
      }
    }

    setHint(newHint.join(''));
    setGuessHistory([...guessHistory, { guess, correct, regular, incorrect }]);
    setAttemptsLeft(attemptsLeft - 1);

    if (correct === 4) {
      navigation.navigate('Result', { message: `Felicitaciones, el número era ${correctNumber}` });
      return;
    }

    if (attemptsLeft - 1 === 0) {
      navigation.navigate('Result', { message: `Perdiste, el número era ${correctNumber}` });
      return;
    }

    setGuess('');
  };

  const renderGuessItem = ({ item }) => (
    <View style={styles.guessItem}>
      <Text style={styles.guessText}>{item.guess} - Correctos: {item.correct}, Regulares: {item.regular}, Incorrectos: {item.incorrect}</Text>
    </View>
  );

  const renderHint = () => {
    return hint.split('').map((char, index) => (
      <Text key={index} style={[styles.hintChar, { color: char === 'X' ? '#4CBB17' : '#BF40BF' }]}>
        {char}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoy pensando en...</Text>
      <Image source={require('../assets/images/wizard.gif')} style={{ width: 100, height: 100 }} />
      <View style={styles.hintContainer}>
        {renderHint()}
      </View>
      <Text style={styles.text}>Intentos restantes: {attemptsLeft}</Text>
      <GuessInput guess={guess} setGuess={setGuess} />
      <TouchableOpacity
        style={styles.button}
        onPress={handleGuess}
      >
        <Text style={styles.buttonText}>Adivinar</Text>
      </TouchableOpacity>
      <FlatList
        data={guessHistory}
        renderItem={renderGuessItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#BF40BF'
  },
  hintContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  hintChar: {
    fontSize: 30,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#BF40BF'
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
  },
  flatList: {
    marginTop: 20,
  },
  guessItem: {
    backgroundColor: '#F0F0F0',  // Cambia el color de fondo aquí
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    borderBlockColor: '#4CBB17',
    borderBlockWidth: 2,
  },
  guessText: {
    fontFamily: 'monospace',
    fontWeight: 'regular',
    fontSize: 16,
    color: '#5D3FD3'
  }
});

export default GameScreen;
