import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function AboutScreen() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>About</Text>
      <View style={ styles.separator } lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>This is by no means a production application. The intent of this project is to drive conversations during
        interview processes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
