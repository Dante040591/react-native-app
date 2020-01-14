import React, { useState } from 'react'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
import { StyleSheet, View } from 'react-native'

export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    {id: '1', title: 'Wake'},
    {id: '2', title: 'Go'},
  ])
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
    <MainScreen 
      todos={todos} 
      addTodo={addTodo} 
      onRemove={onRemove} 
      openTodo={(id) => setTodoId(id)} // тоже самое openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
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
