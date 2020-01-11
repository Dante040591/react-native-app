import React, { useState } from 'react'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'
import { TodoListItem } from './src/TodoListItem'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (title) => {
    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  return (
    <View>
      <Navbar />
      <View style={styles.app}>
        <Todo onSubmit={addTodo} />

        <View>
          { todos.map(todo => <TodoListItem todo={todo} key={todo.id} /> )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
})
