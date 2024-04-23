import { ClipboardText } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: start;
  align-items: center;

  padding: 16px;

  margin-top: 40px;
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 5px;
`;

export const Icon = styled(ClipboardText).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GRAY_300,
}))`
  margin-bottom: 16px;
  opacity: 0.5;
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const TextRegular = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;
