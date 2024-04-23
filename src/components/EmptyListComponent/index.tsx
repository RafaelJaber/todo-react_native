import { Container, Divider, Icon, TextBold, TextRegular } from "./styles";

export function EmptyListComponent() {
  return (
    <>
      <Divider />
      <Container>
        <Icon />
        <TextBold>Você ainda não tem tarefas cadastradas</TextBold>
        <TextRegular>Cre tarefas e organize seus itens a fazer.</TextRegular>
      </Container>
    </>
  );
}
