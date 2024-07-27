import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NotificationButton from './src/components/NotificationButton';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Hola Isa!</Text>
      <Text>:)</Text>

      <NotificationButton />

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
