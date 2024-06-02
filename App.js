import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import StartScreen from './components/StartScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [correctNumber, setCorrectNumber] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [repeat, setRepeat] = useState(true);

  const generateNumber = (allowRepeats) => {
    let number;
    if (allowRepeats) {
      number = Math.floor(1000 + Math.random() * 9000).toString();
    } else {
      const digits = [];
      while (digits.length < 4) {
        const digit = Math.floor(Math.random() * 10);
        if (!digits.includes(digit)) {
          digits.push(digit);
        }
      }
      number = digits.join('');
    }
    setCorrectNumber(number);
  };

  const handleRestart = (navigation) => {
    setAttemptsLeft(10);
    generateNumber(repeat);
    navigation.navigate('Start');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start">
          {(props) => <StartScreen {...props} setRepeat={setRepeat} generateNumber={generateNumber} />}
        </Stack.Screen>
        <Stack.Screen name="Game">
          {(props) => (
            <GameScreen
              {...props}
              correctNumber={correctNumber}
              attemptsLeft={attemptsLeft}
              setAttemptsLeft={setAttemptsLeft}
              generateNumber={generateNumber}
              repeat={repeat}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Result">
          {(props) => <ResultScreen {...props} correctNumber={correctNumber} onRestart={handleRestart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
