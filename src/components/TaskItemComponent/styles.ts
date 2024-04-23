import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type TaskState = "DONE" | "PENDING";

type TaskDescriptionProps = {
  taskState: TaskState;
};

type TaskIconProps = {
  taskState: TaskState;
};

export const Container = styled.View`
  padding: 12px 8px 12px 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  gap: 8px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  border-radius: 8px;

  margin-bottom: 8px;
`;

export const TaskDescription = styled.Text<TaskDescriptionProps>`
  flex: 1;
  ${({ theme, taskState }) => css`
    text-decoration: ${taskState === "DONE" ? "line-through" : "none"};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${taskState === "DONE"
      ? theme.COLORS.GRAY_300
      : theme.COLORS.GRAY_100};
  `}
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.DANGER,
}))``;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const IconDone = styled(CheckCircle).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.PURPLE_DARK,
  weight: "fill",
}))``;

export const IconPending = styled(Circle).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BLUE,
}))``;
