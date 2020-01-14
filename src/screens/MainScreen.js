import React from "react";
import { TodoList } from "../components/TodoList";
import { TodoListItem } from "../components/TodoListItem";
import { StyleSheet, View, FlatList } from "react-native";

export const MainScreen = ({ addTodo, todos, onRemove, openTodo }) => {
  return (
    <View>
      <TodoList onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoListItem todo={item} removeTodoItem={onRemove} onOpen={openTodo} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
