import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import PrivateScreen from '../../components/PrivateScreen';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PrivateScreen path="app/(tabs)/two.tsx" />
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
