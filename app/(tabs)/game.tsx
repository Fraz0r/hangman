import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import Hangman from "../../components/Hangman";

export default function GameScreen() {
  return (
    <View style={ styles.container }>
      <Hangman />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
