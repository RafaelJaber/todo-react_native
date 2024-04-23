import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const GroupView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;
`;

export const TextBlue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE};
  `}
`;

export const TextPurple = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.PURPLE};
  `}
`;

export const Badge = styled.View`
  border-radius: 50%;
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const TextBadge = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
