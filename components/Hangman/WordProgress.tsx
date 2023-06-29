import { Text, useThemeColor, View } from "../Themed";
import * as React from "react";
import { StyleSheet } from "react-native";
import { IGameInput, TValidInputChar } from "../../types/Game";

interface LetterProps {
  value: TValidInputChar;
  active: boolean;
}

function Letter({ value, active = false }: LetterProps) {
  const underlineColor = useThemeColor({}, 'text');

  return (
    <Text style={ { ...styles.letter, borderColor: underlineColor } }> { active ? value : " " }</Text>
  );
}

interface WordSpacerProps {
  width?: number;
}

function WordSpacer({ width = styles.letter.width }: WordSpacerProps) {
  return <View style={ { width } }><Text>{ ' ' }</Text></View>;
}

interface WordProgressProps extends Pick<IGameInput, 'answer' | 'inputChars'> {
}

export default function WordProgress({ answer, inputChars }: WordProgressProps) {
  const chars = answer.split('');

  return (
    <View style={ styles.wordProgressContainer }>
      { chars.map((c, i) =>
        c === ' '
          ? <WordSpacer key={ `spacer-${ i }` } />
          : <Letter key={ `${ c }-${ i }` } value={ c } active={ inputChars.includes(c.toLowerCase()) } />)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  wordProgressContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  letter: {
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderRadius: 5,
    width: 20,
    marginHorizontal: 2,
    marginBottom: 50,
    fontWeight: 'bold',
  },
});
