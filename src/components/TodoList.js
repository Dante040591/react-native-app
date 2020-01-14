import React, { useState } from 'react'
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native'

export const TodoList = ({onSubmit}) => {
  const [value, setValue]  = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название задачи не должно быть пустым!')
    }
  }

  return (
    <View style={styles.todoList}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value} 
        placeholder="Введите название задачи?"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  todoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#3949ab',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10
  }
})