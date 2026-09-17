import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function NotFoundTabScreen() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim().length === 0) {
      return;
    }
    setItems((prev) => [
      { id: Date.now().toString(), value: text.trim() },
      ...prev,
    ]);
    setText('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Not-found</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type something..."
          placeholderTextColor="#6E7681"
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.value}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items yet.</Text>
        }
      />

      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    color: '#3FB950',
    fontSize: 32,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#30363D',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#C9D1D9',
    fontFamily: 'monospace',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#3FB950',
    borderRadius: 8,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0D1117',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 15,
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#161B22',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
  },
  listItemText: {
    color: '#C9D1D9',
    fontFamily: 'monospace',
    fontSize: 15,
  },
  emptyText: {
    color: '#6E7681',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 24,
  },
});
