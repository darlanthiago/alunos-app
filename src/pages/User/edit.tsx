import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { userEditRequest } from "../../store/modules/auth/actions";
import { Container } from "../../styles/global";
import { Form } from "./style";

export const UserEdit = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(userState.user.nome);
    setEmail(userState.user.email);
  }, [userState.user.email, userState.user.nome]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = { name, email, password, id: userState.id };

    dispatch(userEditRequest(data));
  }

  return (
    <Container>
      <h1>Editar usuário</h1>

      <Loading isLoading={userState.isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            required
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
};
