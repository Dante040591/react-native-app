import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    {id: '1', title: 'Wake'},
    {id: '2', title: 'Run'},
  ])

  const addTodo = (title) => {
    const newTodoItem = {
      id: Date.now().toString(),
      title
    }
    setTodos((prevTodo) => [...prevTodo, newTodoItem])
  }

  const removeTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  let content = <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} openTodo={(id) => {
    setTodoId(id)
  }}/>

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
})
