import { useEffect } from "react";
import { history } from "../../services/history";

export const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Página não encontrada</h1>
    </div>
  );
};
