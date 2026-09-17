import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import TextEntryList from '../../src/components/TextEntryList';

export default function NotFoundTabScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.eyebrow}>404</Text>
      <Text style={styles.title}>Not-found</Text>

      <TextEntryList />

      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    paddingTop: 72,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  eyebrow: {
    color: '#3FB950',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 4,
  },
  title: {
    color: '#E6EDF3',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
});
