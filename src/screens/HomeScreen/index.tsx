import { useState } from "react";
import { Alert, FlatList, Text } from "react-native";

import { EmptyListComponent } from "@/components/EmptyListComponent";
import { HeaderComponent } from "@/components/HeaderComponent";
import { InputComponent } from "@/components/InputComponent";
import { ListHeaderComponent } from "@/components/ListHeaderComponent";
import { TaskItemComponent } from "@/components/TaskItemComponent";
import { TasksModel } from "@/models/tasks.model";

import { Container, Content } from "./styles";

export function HomeScreen() {
  const [tasks, setTasks] = useState<TasksModel[]>([]);
  const [taskInput, setTaskInput] = useState("");

  function handleAddTask() {
    if (taskInput.trim().length === 0) {
      return Alert.alert(
        "Adicionar tarefa",
        "Por favor preencha a descrição da tarefa.",
      );
    }
    const existentTask = tasks.findIndex(
      (item) => item.description === taskInput,
    );
    if (existentTask >= 0) {
      return Alert.alert("Adicionar tarefa", "Tarefa duplicada");
    }
    setTasks((value) => {
      const newTask: TasksModel = {
        description: taskInput,
        done: false,
      };
      return [...value, newTask];
    });
    setTaskInput("");
  }

  function handleRemoveTask(task: TasksModel) {
    const tasksChange = tasks.filter(
      (item) => item.description !== task.description,
    );
    setTasks(tasksChange);
  }

  function handleCompletedTask(task: TasksModel) {
    setTasks((value) =>
      value.map((item) => {
        if (item.description === task.description) {
          const t: TasksModel = {
            description: item.description,
            done: !item.done,
          };
          return t;
        } else {
          return item;
        }
      }),
    );
  }

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <InputComponent
          placeholder={"Adicione uma nova tarefa"}
          value={taskInput}
          onChangeText={setTaskInput}
          addButtonPress={handleAddTask}
        />
        <ListHeaderComponent taskList={tasks} />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.description}
          contentContainerStyle={tasks.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <EmptyListComponent />}
          renderItem={({ item }) => (
            <TaskItemComponent
              task={item}
              onDeleteTask={() => handleRemoveTask(item)}
              onUpdateTask={() => handleCompletedTask(item)}
            />
          )}
        />
      </Content>
    </Container>
  );
}
