import * as React from "react";
import { useCallback, useState } from "react";
import { Button, GestureResponderEvent, StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import Board from "./Board";

interface LandingProps {
  onStart: (e: GestureResponderEvent) => void;
}

function Landing({ onStart }: LandingProps) {
  return (
    <View>
      <Text style={ styles.title }>Hangman</Text>
      <View style={ styles.separator } lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title={ "Play Now" } onPress={ onStart } />
    </View>
  );
}


export default function Hangman() {
  const [isPlaying, setIsPlaying] = useState(false);

  const onStart = useCallback(() => setIsPlaying(true), []);
  const onQuit = useCallback(() => setIsPlaying(false), []);

  return (
    <View>
      {
        isPlaying
          ? <Board answer={ "Hello World" } onQuit={ onQuit } />
          : <Landing onStart={ onStart } />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
