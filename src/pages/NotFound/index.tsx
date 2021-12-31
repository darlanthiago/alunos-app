import { useEffect } from "react";
import { history } from "../../services/history";
import { Container } from "../../styles/global";

export const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, []);

  return (
    <Container>
      <h1>Página não encontrada</h1>
    </Container>
  );
};
