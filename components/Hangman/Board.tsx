import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";

import { IGameInput, TGuessIndex, TValidInputChar } from "../../types/Game";
import { getNumIncorrect, inputValid } from "../../util/validator";

import { Text, View } from "../Themed";

import LetterBank from "./LetterBank";
import Scene from "./Scene";
import WordProgress from "./WordProgress";
import Keyboard from "../Keyboard";

interface IGameEnd {
  complete: boolean;
  won?: boolean;
}

interface BoardProps extends Pick<IGameInput, "answer"> {
  onQuit: () => void;
}

export default function Board({ onQuit, answer }: BoardProps) {
  const [guesses, setGuesses] = useState<TValidInputChar[]>([]);
  const [gameEnd, setGameEnd] = useState<IGameEnd>({ complete: false });
  const [numIncorrect, setNumIncorrect] = useState<TGuessIndex>(0);

  const gameOver = () => {
    setGameEnd({ complete: true, won: false });
  };

  const gameWin = () => {
    setGameEnd({ complete: true, won: true });
  };

  const onInput = useCallback((value: TValidInputChar) => {
    const guess: TValidInputChar = value.toLowerCase();

    if (guesses.includes(guess)) {
      // TODO: Potentially Handle dupe? (maybe with a snackbar-type warning)
    } else {
      setGuesses((currGuesses) => [...currGuesses, guess]);
    }
  }, [guesses]);

  useEffect(() => {
    const newIncorrect = getNumIncorrect(answer, guesses);

    setNumIncorrect(newIncorrect as TGuessIndex);

    if (inputValid(answer, guesses)) {
      setGameEnd({ complete: true, won: true });
    } else if (newIncorrect === 6) {
      setGameEnd({ complete: true, won: false });
    }
  }, [answer, guesses]);

  return (
    <View>
      <Button title={ "Quit" } onPress={ onQuit } />
      { !gameEnd.complete && (
        <>
          <LetterBank answer={ answer } inputChars={ guesses } />
          <Scene stage={ numIncorrect as TGuessIndex } />
          <WordProgress answer={ answer } inputChars={ guesses } />
          <Keyboard active={ true } onInput={ onInput } />
        </>
      ) }
      { gameEnd.complete && gameEnd.won && (
        <Text style={ { ...styles.ggText, color: 'green' } }>We Won</Text>
      ) }
      { gameEnd.complete && !gameEnd.won && (
        <Text style={ { ...styles.ggText, color: 'red' } }>We Lost</Text>
      ) }
    </View>
  );
}

const styles = StyleSheet.create({
  ggText: {
    marginTop: 15,
  },
});
