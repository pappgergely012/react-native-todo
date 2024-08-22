import Todo, { TodoType } from "@/components/Todo"
import { Link } from "expo-router"
import React from "react"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native"

const TodoList = () => {
  const todos: TodoType[] = [
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
    {
      title: "Take out the trash",
      description: "I have to take out the trash cause my mom will kill me",
      status: "in_progress",
    },
  ]

  return (
    <SafeAreaView>
      <Text style={styles.title}>Todo List</Text>

      <View style={styles.outerContainer}>
        <FlatList
          data={todos}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <Todo
              title={item.title}
              description={item.description}
              status={item.status}
            />
          )}
        />

        <Link href="/addTodo" style={styles.link}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  )
}

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
})

export default TodoList
