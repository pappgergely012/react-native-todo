import Todo, { TodoType } from "@/components/Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useFocusEffect } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem("todos");

      if (todos) {
        const parsedTodos = JSON.parse(todos);

        setTodoList(parsedTodos);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(todoList);
  const handleDelete = async (id: string) => {
    try {
      if (todoList.length > 0) {
        const newTodos = todoList.filter((todo) => todo.id !== id);

        await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
        setTodoList(newTodos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getTodos();
    }, [])
  );

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Todo List</Text>

      <View style={styles.outerContainer}>
        {todoList.length > 0 && (
          <FlatList
            data={todoList as TodoType[]}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
              <Todo
                onDelete={() => handleDelete(item.id)}
                title={item.title}
                description={item.description}
                status={item.status}
              />
            )}
          />
        )}

        <Link href="/addTodo" style={styles.link}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  outerContainer: {
    paddingBottom: 200,
  },
  container: {
    margin: 0,
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    paddingBottom: 40,
    gap: 12,
  },
  link: {
    alignSelf: "center",
  },
  button: {
    borderRadius: 12,
    backgroundColor: "blue",
    padding: 12,
    alignSelf: "center",
    width: 200,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TodoList;
