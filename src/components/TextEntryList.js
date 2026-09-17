import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function TextEntryList({
  placeholder = 'Type something...',
  accentColor = '#3FB950',
}) {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const isEmpty = text.trim().length === 0;

  const addItem = () => {
    if (isEmpty) {
      return;
    }
    setItems((prev) => [
      { id: Date.now().toString(), value: text.trim() },
      ...prev,
    ]);
    setText('');
  };

  return (
    <View style={styles.card}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder={placeholder}
          placeholderTextColor="#6E7681"
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: accentColor },
            isEmpty && styles.buttonDisabled,
            pressed && !isEmpty && styles.buttonPressed,
          ]}
          onPress={addItem}
          disabled={isEmpty}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemIndex}>{index + 1}</Text>
            <Text style={styles.listItemText}>{item.value}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nothing added yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#161B22',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#30363D',
    padding: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#30363D',
    backgroundColor: '#0D1117',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#C9D1D9',
    fontSize: 15,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.35,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#0D1117',
    fontWeight: '700',
    fontSize: 15,
  },
  list: {
    flex: 1,
  },
  separator: {
    height: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#21262D',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  listItemIndex: {
    color: '#6E7681',
    fontSize: 13,
    fontWeight: '600',
    marginRight: 10,
    minWidth: 18,
  },
  listItemText: {
    color: '#E6EDF3',
    fontSize: 15,
    flexShrink: 1,
  },
  emptyText: {
    color: '#6E7681',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 24,
  },
});
