import * as React from "react";
import { Button } from "react-native";

import { IGameInput, TGuessIndex } from "../../types/Game";
import { getNumIncorrect } from "../../util/validator";

import { View } from "../Themed";
import LetterBank from "./LetterBank";
import Scene from "./Scene";
import WordProgress from "./WordProgress";

interface BoardProps {
  onQuit: () => void;
}

export default function Board({ onQuit, answer }: BoardProps & Pick<IGameInput, "answer">) {
  const guesses: string[] = ['z', 'a', 'b', 'l', 'h', 'r', 'e', 'o', 'w', 'd'];

  const numIncorrect = getNumIncorrect(answer, guesses);

  return (
    <View>
      <Button title={ "Quit" } onPress={ onQuit } />
      <LetterBank answer={ answer } inputChars={ guesses } />
      <Scene stage={ numIncorrect as TGuessIndex } />
      <WordProgress answer={ answer } inputChars={ guesses } />
    </View>
  );
}
