import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const GuessInput = ({ guess, setGuess }) => {
  return (
    <TextInput
      style={styles.input}
      value={guess}
      onChangeText={setGuess}
      keyboardType="numeric"
      maxLength={4}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#BF40BF',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 10,
    width: 100,
    textAlign: 'center',
  },
});

export default GuessInput;
