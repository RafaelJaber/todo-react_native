import { TasksModel } from "@/models/tasks.model";

import {
  Badge,
  Container,
  GroupView,
  TextBadge,
  TextBlue,
  TextPurple,
} from "./styles";

type ListHeaderComponentProps = {
  taskList: TasksModel[];
};

export function ListHeaderComponent({ taskList }: ListHeaderComponentProps) {
  let created = 0;
  let completed = 0;

  taskList.forEach((tasks) => {
    if (!tasks.done) created++;
    if (tasks.done) completed++;
  });

  return (
    <Container>
      <GroupView>
        <TextBlue>Criadas</TextBlue>
        <Badge>
          <TextBadge>{created}</TextBadge>
        </Badge>
      </GroupView>
      <GroupView>
        <TextPurple>Concluídas</TextPurple>
        <Badge>
          <TextBadge>{completed}</TextBadge>
        </Badge>
      </GroupView>
    </Container>
  );
}
