import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import PublicScreen from '../../components/PublicScreen';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PublicScreen path="app/(tabs)/index.tsx" />
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
    color: "rgb(280, 198, 29)",
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
