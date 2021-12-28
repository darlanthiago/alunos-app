import { useDispatch } from "react-redux";
import { buttonClickRequest } from "../../store/modules/example/actions";

export const Login = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(buttonClickRequest());
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Entrar
      </button>
      <a href="/das">Teste</a>
    </div>
  );
};
