import React, { useState } from 'react'
import { Navbar } from './src/Navbar'
import { TodoList } from './src/TodoList'
import { TodoListItem } from './src/TodoListItem'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function App() {
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

  return (
    <View>
      <Navbar />
      <View style={styles.app}>
        <TodoList onSubmit={addTodo} />
        <FlatList 
          data={todos}
          renderItem={({item}) => <TodoListItem todo={item} removeTodoItem={onRemove} />}
          keyExtractor={item => item.id}
        />
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
