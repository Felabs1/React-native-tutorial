import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TaskItem = ({
  task,
  handleEditTask,
  handleToggleCompletion,
  handleDeleteTask,
}) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.taskTextContainer}>
        <Text
          style={[
            styles.taskText,
            task.status === "completed" && styles.completedTaskText,
          ]}
        >
          {task.title}
        </Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskStatus}>{task.status}</Text>
        <Text style={styles.taskDeadline}>{task.deadline}</Text>
        <Text style={styles.taskCreatedAt}>{task.createdAt}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleEditTask(task)}
          style={[styles.editButton]}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleToggleCompletion(task.id)}
          style={[
            style.completeButton,
            task.status === "completed" && styles.completedButton,
          ]}
        >
          <Text style={styles.buttonText}>
            {task.status === "completed" ? "pending" : "completed"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteTask(task.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
