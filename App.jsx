import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainPage></MainPage>
      <LoginPage></LoginPage>
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
