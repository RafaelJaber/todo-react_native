import React from "react";
import { TextInputProps } from "react-native";

import { Container, Icon, IconContainer, Input } from "./styles";

type InputComponentProps = TextInputProps & {
  addButtonPress: () => void;
};

export function InputComponent({
  addButtonPress,
  ...rest
}: InputComponentProps) {
  return (
    <Container>
      <Input {...rest} />
      <IconContainer onPress={addButtonPress}>
        <Icon />
      </IconContainer>
    </Container>
  );
}
