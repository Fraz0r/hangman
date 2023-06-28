import { StyleSheet } from "react-native";

import { IGameInput } from "../../types/Game";
import { getIncorrect } from "../../util/validator";

import { Text, View } from "../Themed";

interface IncorrectTrackerProps extends Pick<IGameInput, 'answer' | 'inputChars'> {
}

export default function LetterBank({ answer, inputChars }: IncorrectTrackerProps) {
  const incorrect = getIncorrect(answer, inputChars);

  return (
    <View style={ styles.container }>
      <Text>Incorrect: { incorrect.join(', ') }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
