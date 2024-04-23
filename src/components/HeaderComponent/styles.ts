import styled from "styled-components/native";

export const Container = styled.View`
  height: 170px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 32px;
  width: 110px;
`;
