import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { history } from "../../services/history";
import { Container } from "../../styles/global";
import { Form } from "./style";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmiting(true);

    try {
      const data = {
        nome: name,
        password,
        email,
      };

      await api.post(`/users`, data);

      setIsSubmiting(false);
      toast.success("Usuário cadastrado");
      history.push("/login");
    } catch (error) {
      setIsSubmiting(false);
      toast.error("Verifique os dados e tente novamente");
    }
  };

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Loading isLoading={isSubmiting} />

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
            required
          />
        </label>

        <button type="submit">
          {isSubmiting ? "Aguarde..." : "Cadastrar"}
        </button>
      </Form>
    </Container>
  );
};
