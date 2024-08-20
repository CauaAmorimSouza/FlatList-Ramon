import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tarefa 1', completed: false },
    { id: '2', title: 'Tarefa 2', completed: true },
    { id: '3', title: 'Tarefa 3', completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
      <View
        style={[
          styles.taskContainer,
          item.completed ? styles.completedTaskContainer : styles.taskContainer,
        ]}
      >
        <Text style={item.completed ? styles.completedTask : styles.task}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  taskContainer: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffcccc',
  },
  completedTaskContainer: {
    backgroundColor: '#ccffcc',
  },
  task: {
    fontSize: 18,
    color: '#333',
  },
  completedTask: {
    fontSize: 18,
    color: '#333',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dashed',
  },
});

export default App;
