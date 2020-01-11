import React, { useState } from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export const Todo = ({onSubmit}) => {
  const [value, setValue]  = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      //errrorr
    }
  }

  return (
    <View style={styles.todo}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value} 
        placeholder="Что делать?"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
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