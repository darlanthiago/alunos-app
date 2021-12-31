import React from "react";
import { Container } from "./style";

type Props = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: Props) => {
  if (!isLoading) {
    return <></>;
  }
  return (
    <Container>
      <div></div>
      <span>Carregando ...</span>
    </Container>
  );
};
