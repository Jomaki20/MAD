import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.code}>404</Text>
      <Text style={styles.title}>Screen not found</Text>
      <Link href="/" style={styles.link}>
        Go back home
      </Link>
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
    paddingHorizontal: 24,
  },
  code: {
    color: '#3FB950',
    fontSize: 64,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  title: {
    color: '#C9D1D9',
    fontSize: 18,
    fontFamily: 'monospace',
    marginTop: 8,
    marginBottom: 24,
  },
  link: {
    color: '#58A6FF',
    fontSize: 16,
    fontFamily: 'monospace',
    textDecorationLine: 'underline',
  },
});
