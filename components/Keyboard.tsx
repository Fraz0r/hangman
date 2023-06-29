import * as React from "react";
import { useCallback } from "react";
import { Pressable, StyleSheet } from "react-native";

import { IKeyboardLayout } from "../types/Game";
import { DEFAULT_KEYBOARD_LAYOUT } from "../constants/Game";

import { Text, View } from "./Themed";

interface KeyProps {
  value: string;
  onPress: (value: string) => void;
}

function Key({ onPress, value }: KeyProps) {
  const callback = useCallback(() => onPress(value), [onPress, value]);

  return (
    <Pressable onPress={ callback }>
      <Text style={ styles.key }>{ value }</Text>
    </Pressable>
  );
}

interface KeyboardProps {
  active: boolean;
  onInput: (value: string) => void;
  layout?: IKeyboardLayout;
}

export default function Keyboard({ active, onInput, layout = DEFAULT_KEYBOARD_LAYOUT }: KeyboardProps) {
  const onKeyPress = useCallback((value: string) => {
    onInput(value);
  }, [onInput]);

  return (
    <View style={ styles.container }>
      { layout?.layout.map((row, rowI) => {
        return (
          <View key={ `kb-row-${ rowI }` } style={ styles.row }>
            { row.map((key) => (<Key key={ `kb-row-${ rowI }-${ key }` } value={ key } onPress={ onKeyPress } />)) }
          </View>
        );
      }) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  key: {
    paddingVertical: 2,
    width: 20,
    textAlign: 'center',
    backgroundColor: 'pink',
    marginHorizontal: 4,
  },
});
