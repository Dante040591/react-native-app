import React, { useState } from 'react'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
import { StyleSheet, View } from 'react-native'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])
  const addTodo = (title) => {
    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const onRemove = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} onRemove={onRemove} />
  )

  if (todoId) {
    content = <TodoScreen/>
  }

  return (
    <View>
      <Navbar />
      <View style={styles.app}>
        {content}
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
