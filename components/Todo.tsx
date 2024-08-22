import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export type TodoType = {
  title: string
  description: string
  status: 'in_progress' | 'todo' | 'done'
}

const Todo = ({ title, description, status }: TodoType) => {
  const getStatusText = useMemo(() => {
    if (status === 'in_progress') {
      return 'In Progress'
    }

    if (status === 'todo') {
      return 'Todo'
    }

    if (status === 'done') {
      return 'Done'
    }

    return 'Todo'
  }, [status])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.status}>{getStatusText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    backgroundColor: '#e3e3e3',
    borderRadius: 12,
    gap: 8,
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    fontStyle: 'italic',
  },
})

export default Todo
