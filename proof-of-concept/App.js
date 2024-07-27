import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NotificationButton from './src/components/NotificationButton';
import YeahAnimation from './src/components/YeahAnimation';
import LateralScroll from './src/components/LateralScroll';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Hola Isa!</Text>
      <Text>:)</Text>

      <NotificationButton />

      <YeahAnimation />

      <LateralScroll />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
