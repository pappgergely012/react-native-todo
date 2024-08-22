import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const AddTodoScreen = () => {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    try {
      const todos = JSON.stringify([
        ...todoList,
        { id: uuidv4(), title, description, status: "todo" },
      ]);

      await AsyncStorage.setItem("todos", todos);
      router.back();
    } catch (err) {
      console.log(err);
    }
  };

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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Add Todo</Text>

      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Here comes the title..."
          placeholderTextColor="#c4c4c4"
          onChangeText={(val) => setTitle(val)}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          placeholder="Here comes the description..."
          placeholderTextColor="#c4c4c4"
          onChangeText={(val) => setDescription(val)}
        />
      </View>

      <TouchableHighlight onPress={handleSave}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    color: "#333",
    borderRadius: 20,
    padding: 12,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    paddingLeft: 10,
    margin: 7,
    color: "white",
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

export default AddTodoScreen;
