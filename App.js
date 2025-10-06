import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const App = () => {
  // Intilisations --------
  // State ---------
  // Handlers --------
  // View ---------

  //Test git push ok

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
