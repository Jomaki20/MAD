import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not-found</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#3FB950',
    fontSize: 32,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
