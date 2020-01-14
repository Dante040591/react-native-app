import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const TodoListItem = ({ todo, removeTodoItem, onOpen }) => {
  return (
    <TouchableOpacity
     activeOpacity={0.5} 
     onPress={() => onOpen(todo.id)}
     onLongPress={() => removeTodoItem(todo.id)}
     >
      <View style={styles.todoListItem}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoListItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10
  }
});
