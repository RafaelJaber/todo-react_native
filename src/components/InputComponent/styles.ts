import { PlusCircle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;

  margin-top: -50px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  height: 100%;
  flex: 1;
  padding: 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const IconContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.COLORS.BLUE};

  height: 52px;
  width: 52px;

  justify-content: center;
  align-items: center;

  border-radius: 6px;
`;

export const Icon = styled(PlusCircle).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.GRAY_100,
}))``;
