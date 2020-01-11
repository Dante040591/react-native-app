import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const TodoListItem = ({todo}) => {
  return (
    <View style={styles.todoListItem}> 
      <Text>
        {todo.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todoListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
  }
})