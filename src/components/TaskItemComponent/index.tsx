import { TouchableOpacity } from "react-native";

import { TasksModel } from "@/models/tasks.model";

import {
  Container,
  IconButton,
  IconDone,
  IconPending,
  TaskDescription,
  TrashIcon,
} from "./styles";

type TaskItemComponentProps = {
  task: TasksModel;
  onDeleteTask: () => void;
  onUpdateTask: () => void;
};

export function TaskItemComponent({
  task,
  onDeleteTask,
  onUpdateTask,
}: TaskItemComponentProps) {
  return (
    <Container>
      <IconButton onPress={onUpdateTask}>
        {task.done ? <IconDone /> : <IconPending />}
      </IconButton>
      <TaskDescription taskState={task.done ? "DONE" : "PENDING"}>
        {task.description}
      </TaskDescription>
      <IconButton onPress={onDeleteTask}>
        <TrashIcon />
      </IconButton>
    </Container>
  );
}
