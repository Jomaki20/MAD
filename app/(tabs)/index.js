import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const RED = '#8C1C13';
const YELLOW = '#F6D776';

export default function HomeScreen() {
  const [isYellow, setIsYellow] = useState(false);
  const backgroundColor = isYellow ? YELLOW : RED;
  const textColor = isYellow ? '#4A3B00' : '#FFF6E9';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.emoji}>🍕</Text>
      <Text style={[styles.text, { color: textColor }]}>
        Benvenuti a tutti nella mia pizzeria! Sono Jonah Hill e ti servirò
        come meglio posso.
      </Text>
      <Pressable
        style={[styles.button, { borderColor: textColor }]}
        onPress={() => setIsYellow((prev) => !prev)}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {isYellow ? 'Back to red' : 'Change to yellow'}
        </Text>
      </Pressable>
      <StatusBar style={isYellow ? 'dark' : 'light'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 24,
  },
  text: {
    fontSize: 22,
    fontFamily: 'serif',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 32,
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
