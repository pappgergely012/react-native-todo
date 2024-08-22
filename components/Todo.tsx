import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export type TodoType = {
  title: string;
  description: string;
  id: string;
  status: "in_progress" | "todo" | "done";
  onDelete: () => void;
};

type Props = Omit<TodoType, "id">;

const Todo = ({ title, description, status, onDelete }: Props) => {
  const getStatusText = useMemo(() => {
    if (status === "in_progress") {
      return "In Progress";
    }

    if (status === "todo") {
      return "Todo";
    }

    if (status === "done") {
      return "Done";
    }

    return "Todo";
  }, [status]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.status}>{getStatusText}</Text>
      <TouchableOpacity onPress={() => onDelete()}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    backgroundColor: "#e3e3e3",
    borderRadius: 12,
    gap: 8,
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default Todo;
