import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название не должно быть пустым')
    }
  }

  return (
    <View style={styles.addTodo}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Введите название дела..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button
        title="Добавить"
        onPress={pressHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addTodo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    borderBottomColor: '#3949ab',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    padding: 10
  }
})